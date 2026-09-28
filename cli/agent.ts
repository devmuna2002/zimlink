import { createInterface } from "node:readline";
import { Engine, type EngineEvent, type FileOp } from "../core/engine.js";

export type { FileOp };

export interface AgentOptions {
  yes: boolean;
  quiet: boolean;
}

export interface AgentConfig {
  apiKey: string;
  model: string;
  cwd: string;
  baseUrl?: string;
}

export class Agent {
  private engine: Engine;
  private readonly task: string;

  constructor(config: AgentConfig, task: string, options: AgentOptions) {
    this.task = task;
    this.engine = new Engine(
      { cwd: config.cwd, apiKey: config.apiKey, model: config.model, baseUrl: config.baseUrl },
      {
        emit: (evt) => this.printEvent(evt, options),
        askWrite: () => (options.yes ? Promise.resolve(true) : confirmOverwrite()),
      }
    );
  }

  private printEvent(evt: EngineEvent, opts: AgentOptions): void {
    switch (evt.kind) {
      case "message":
        console.log(`\n\x1b[1mZimLink:\x1b[0m ${evt.text}`);
        break;
      case "plan":
        console.log(
          `\n\x1b[1m${evt.isFollowUp ? "Follow-up plan" : "Plan"}:\x1b[0m\n` +
            evt.ops
              .map((o) => `  - \x1b[33m${o.op}\x1b[0m ${o.path}${o.reason ? ` — ${o.reason}` : ""}`)
              .join("\n")
        );
        break;
      case "generating":
        process.stdout.write(`\n\x1b[2m[${evt.index}/${evt.total}] generating ${evt.file}\x1b[0m`);
        break;
      case "propose":
        console.log(`\n\x1b[1m${evt.existed ? "Modified" : "New file"}: ${evt.file}\x1b[0m`);
        if (!opts.quiet) console.log(evt.diff);
        break;
      case "skip":
        console.log(`\n\x1b[2m${evt.file}: ${evt.reason}\x1b[0m`);
        break;
      case "written":
        console.log(`\n\x1b[32m✓ ${evt.file}\x1b[0m`);
        break;
      case "done":
        console.log(
          `\n\x1b[1mDone:\x1b[0m ${evt.created} created, ${evt.modified} modified.`
        );
        break;
      case "error":
        console.error(`\n\x1b[31m${evt.message}\x1b[0m`);
        break;
    }
  }

  async run(): Promise<void> {
    await this.engine.run(this.task);

    if (!process.stdin.isTTY) return;
    console.log("\nFollow-up roundtrip (type a message, or press Enter to finish):");
    for (;;) {
      const input = await inputLine("> ");
      if (!input.trim()) break;
      await this.engine.followUp(input);
    }
  }
}

function confirmOverwrite(): Promise<boolean> {
  return inputLine("Apply this change? (y/N) ").then((s) => /^(y|yes)/i.test(s.trim()));
}

function inputLine(prompt: string): Promise<string> {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) =>
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    })
  );
}