import { isAbsolute, resolve, sep } from "node:path";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { listTree, readFile, writeFile } from "./files.js";
import { diffLines } from "./diff.js";
import { AIClient } from "./openai.js";

export interface FileOp {
  path: string;
  op: "create" | "edit";
  reason?: string;
}

export type EngineEvent =
  | { kind: "message"; text: string }
  | { kind: "plan"; ops: FileOp[]; isFollowUp: boolean }
  | { kind: "generating"; file: string; index: number; total: number }
  | {
      kind: "propose";
      file: string;
      existed: boolean;
      content: string;
      diff: string;
    }
  | { kind: "skip"; file: string; reason: string }
  | { kind: "written"; file: string; existed: boolean }
  | { kind: "done"; created: number; modified: number }
  | { kind: "error"; message: string };

export interface EngineHooks {
  emit(evt: EngineEvent): void;
  /** Write-time gate: return true to apply the change. Content available for tools that want it. */
  askWrite(p: { file: string; existed: boolean; content: string }): Promise<boolean> | boolean;
}

export interface EngineOptions {
  cwd: string;
  apiKey: string;
  model: string;
  baseUrl?: string;
  autoApply?: boolean;
}

const SYSTEM_PROMPT =
  "You are ZimLink, a senior software engineering assistant working inside a local code repository. " +
  "You turn natural-language requests into concrete, working code in any programming language. " +
  "You follow the existing structure and conventions of the repository, avoid unnecessary dependencies, " +
  "write clean production-quality code, and do not invent or hallucinate library names.";

const PLAN_INSTRUCTION_TASK = `Given the request, decide which files to create or edit to accomplish it.
Respond with ONLY valid JSON in exactly this shape (no markdown, nothing else):
{"ops":[{"path":"relative/path/to/file","op":"create","reason":"short reason"},{"path":"existing/file","op":"edit","reason":"short reason"}]}
Rules:
- Prefer a small number of well-named files over many files.
- Reuse and edit existing files whenever possible; never duplicate code across new files.
- Paths are relative to the repository root.
- If the request is ambiguous or you need clarification, respond with a plain-text message instead of JSON.`;

/** Resolve a reported path against cwd, rejecting escapes outside of it. */
function safeJoin(cwd: string, p: string): string {
  const abs = isAbsolute(p) ? resolve(p) : resolve(cwd, p);
  const prefix = resolve(cwd) + sep;
  if (abs !== resolve(cwd) && !abs.startsWith(prefix)) {
    throw new Error(`Refusing to write outside the working directory: ${p}`);
  }
  if (abs.includes(sep + ".git" + sep)) {
    throw new Error(`Refusing to write into .git: ${p}`);
  }
  return abs;
}

interface PlanResult {
  ops: FileOp[];
  /** Set when the model chose not to return file operations. */
  message?: string;
}

export function parsePlan(text: string): PlanResult {
  let json: unknown;
  try {
    json = JSON.parse(text);
  } catch {
    return { ops: [], message: text.trim() };
  }
  if (!json || typeof json !== "object" || !Array.isArray((json as any).ops)) {
    return { ops: [], message: text.trim() };
  }
  const ops: FileOp[] = [];
  for (const raw of (json as any).ops as any[]) {
    const path = typeof raw?.path === "string" ? raw.path.trim() : "";
    const opRaw = typeof raw?.op === "string" ? raw.op.trim() : "";
    if (!path) continue;
    ops.push({
      path,
      op: opRaw === "edit" ? "edit" : "create",
      reason: typeof raw?.reason === "string" ? raw.reason : undefined,
    });
  }
  return { ops };
}

export function stripFences(text: string): string {
  let s = text.trim();
  if (s.startsWith("```")) {
    const nl = s.indexOf("\n");
    s = nl === -1 ? "" : s.slice(nl + 1);
    const end = s.lastIndexOf("```");
    if (end !== -1) s = s.slice(0, end);
  }
  return s.trim();
}

export function treeOf(cwd: string): string {
  const tree = listTree(cwd);
  return tree.length ? tree.join("\n") : "(empty directory)";
}

export class Engine {
  private ai: AIClient;
  private cwd: string;
  private opts: EngineOptions;
  private hooks: EngineHooks;
  private messages: ChatCompletionMessageParam[] = [];
  private aborted = false;
  private task = "";
  /** Mutable so callers (e.g. an IDE) can toggle it between turns. */
  autoApply: boolean;

  constructor(opts: EngineOptions, hooks: EngineHooks) {
    this.opts = opts;
    this.cwd = opts.cwd;
    this.hooks = hooks;
    this.autoApply = opts.autoApply ?? false;
    this.ai = new AIClient(opts.apiKey, opts.model, opts.baseUrl);
  }

  stop(): void {
    this.aborted = true;
  }

  private emit(evt: EngineEvent): void {
    try {
      this.hooks.emit(evt);
    } catch {
      /* renderer disconnected */
    }
  }

  async run(task: string): Promise<void> {
    this.aborted = false;
    this.task = task;
    this.messages = [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: `Task: ${task}\n\nCurrent repo file tree:\n${treeOf(this.cwd)}` },
    ];
    await this.turn(false);
  }

  async followUp(text: string): Promise<void> {
    if (this.aborted) return;
    this.messages.push({ role: "user", content: text });
    await this.turn(true);
  }

  private async turn(isFollowUp: boolean): Promise<void> {
    if (this.aborted) return;
    const plan = parsePlan(
      await this.ai.chatJSON([...this.messages, { role: "system", content: PLAN_INSTRUCTION_TASK }])
    );
    if (this.aborted) return;

    if (plan.ops.length === 0) {
      const text = plan.message && plan.message !== "{}" ? plan.message : "No file operations suggested.";
      this.emit({ kind: "message", text });
      this.messages.push({ role: "assistant", content: text });
      return;
    }

    this.emit({ kind: "plan", ops: plan.ops, isFollowUp });
    this.messages.push({
      role: "assistant",
      content: `${isFollowUp ? "Follow-up operations:" : "I'll perform these file operations:"}\n${plan.ops
        .map((o) => `  - ${o.path} (${o.op})${o.reason ? `: ${o.reason}` : ""}`)
        .join("\n")}`,
    });

    await this.writeOps(plan.ops);
  }

  private async writeOps(ops: FileOp[]): Promise<void> {
    const executed: { file: string; existed: boolean }[] = [];
    const total = ops.length;
    for (let idx = 0; idx < total; idx++) {
      if (this.aborted) {
        this.emit({ kind: "message", text: "Stopped by user." });
        return;
      }
      const op = ops[idx];
      let abs: string;
      try {
        abs = safeJoin(this.cwd, op.path);
      } catch (err) {
        this.emit({ kind: "error", message: (err as Error).message });
        continue;
      }
      const existed = readFile(abs) !== null;

      this.emit({ kind: "generating", file: op.path, index: idx + 1, total });
      let content: string;
      try {
        content = await this.generateFile(op, abs, idx + 1, total);
      } catch (err) {
        this.emit({ kind: "error", message: `Failed to generate ${op.path}: ${(err as Error).message}` });
        continue;
      }
      if (this.aborted) return;

      const old = existed ? (readFile(abs) ?? "") : "";
      if (old === content) {
        this.emit({ kind: "skip", file: op.path, reason: "content unchanged" });
        continue;
      }

      const diff = diffLines(old, content);
      this.emit({ kind: "propose", file: op.path, existed, content, diff });

      let ok = this.autoApply;
      if (!ok) {
        ok = await this.hooks.askWrite({ file: op.path, existed, content });
      }
      if (this.aborted) return;
      if (!ok) {
        this.emit({ kind: "skip", file: op.path, reason: "skipped by user" });
        continue;
      }

      writeFile(abs, content);
      executed.push({ file: op.path, existed });
      this.emit({ kind: "written", file: op.path, existed });
    }

    this.emit({
      kind: "done",
      created: executed.filter((e) => !e.existed).length,
      modified: executed.filter((e) => e.existed).length,
    });
  }

  private async generateFile(op: FileOp, absPath: string, index: number, total: number): Promise<string> {
    const existing = op.op === "edit" ? readFile(absPath) : null;
    const lines: string[] = [
      `Repository working directory: ${this.cwd}`,
      `Task: ${this.task}`,
      "",
      `File to ${op.op}, position ${index}/${total}: ${op.path}`,
    ];
    if (op.reason) lines.push(`Why: ${op.reason}`);
    if (existing !== null) {
      lines.push("", "Current file content (replace it entirely with your new version):", "");
      lines.push("```", existing, "```");
    }
    lines.push(
      "",
      "Respond with ONLY the complete final content of this file. Do not wrap it in markdown code fences."
    );

    const content = stripFences(
      await this.ai.chat([
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: lines.join("\n") },
      ])
    );
    if (!content) throw new Error(`Model returned empty content for ${op.path}`);
    return content;
  }
}