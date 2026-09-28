import { app, BrowserWindow, dialog, ipcMain, Menu, shell as electronShell } from "electron";
import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { unlinkSync } from "node:fs";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { isAbsolute, resolve, sep, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Engine, type EngineEvent, type EngineHooks } from "../core/engine.js";
import { isIdeRoot, listTree, readFile, writeFile } from "../core/files.js";
import { loadConfig } from "../core/config.js";
import { PROVIDERS, providerById } from "../core/providers.js";

interface PendingProposal {
  resolve: (apply: boolean) => void;
}

let win: BrowserWindow | null = null;
let engine: Engine | null = null;
let pending: PendingProposal | null = null;
let cwd = resolve(loadConfigSafe().cwd ?? process.cwd());
let currentConfig = loadConfigSafe();

let shell: ChildProcessWithoutNullStreams | null = null;
let shellCwd = cwd;

function killShell(): void {
  try {
    if (shell) {
      shell.stdin.destroy();
      shell.kill();
      shell = null;
    }
  } catch {
    /* ignore close error */
  }
}

function spawnTerminal(dir: string): void {
  killShell();
  shellCwd = dir;
  const shellCmd = process.platform === "win32" ? "cmd.exe" : "bash";
  try {
    shell = spawn(shellCmd, [], { cwd: dir, env: process.env, windowsHide: true, shell: false });
  } catch (e) {
    console.error("[terminal] spawn failed:", e);
    if (win && !win.isDestroyed()) win.webContents.send("terminal-output", "\r\nCould not start shell: " + String(e) + "\r\n");
    shell = null;
    return;
  }

  shell.stdout.on("data", (data: Buffer) => {
    if (process.env.ZIMLINK_DEBUG) console.log("[term-raw]", JSON.stringify(data.toString("utf8")));
    if (win && !win.isDestroyed()) win.webContents.send("terminal-output", data.toString());
  });
  shell.stderr.on("data", (data: Buffer) => {
    if (win && !win.isDestroyed()) win.webContents.send("terminal-output", data.toString());
  });
  shell.on("error", (err) => {
    console.error("[terminal] process error:", err);
    shell = null;
    if (win && !win.isDestroyed()) win.webContents.send("terminal-output", "\r\nShell error: " + err.message + "\r\n");
  });
  shell.on("close", () => {
    shell = null;
    if (win && !win.isDestroyed()) win.webContents.send("terminal-output", "\r\nTerminal process closed.\r\n");
  });
}

function ensureTerminal(): { ok: boolean; running: boolean; cwd: string } {
  if (!shell) spawnTerminal(shellCwd);
  return { ok: true, running: Boolean(shell), cwd: shellCwd };
}

ipcMain.on("terminal-input", (_e, text: string) => {
  if (process.env.ZIMLINK_DEBUG) console.log("[term-in]", JSON.stringify(text));
  shell?.stdin.write(text);
});

ipcMain.handle("terminal-open", () => ensureTerminal());

/* ================= run & debug support ================= */

let debugChild: ChildProcessWithoutNullStreams | null = null;

function runnerFor(abs: string): { bin: string[]; args: string[] } | null {
  const m = abs.match(/\.([a-zA-Z0-9]+)$/);
  const ext = m ? m[1].toLowerCase() : "";
  const q = (s: string) => `"${s}"`;
  switch (ext) {
    case "js": case "mjs": case "cjs": case "jsx":
      return { bin: ["node"], args: [q(abs)] };
    case "ts": case "mts": case "cts": case "tsx": {
      const v = Number(process.versions.node.split(".")[0]);
      if (v >= 22) return { bin: ["node", "--experimental-strip-types"], args: [q(abs)] };
      return { bin: ["npx"], args: ["--yes", "tsx", q(abs)] };
    }
    case "py": return { bin: ["python"], args: [q(abs)] };
    case "rb": return { bin: ["ruby"], args: [q(abs)] };
    case "go": return { bin: ["go"], args: ["run", q(abs)] };
    case "sh": return { bin: ["bash"], args: [q(abs)] };
    case "bat": case "cmd": return { bin: ["cmd.exe"], args: ["/c", q(abs)] };
    default: return null;
  }
}

// Run the active file through the integrated terminal shell (no OS window ever).
ipcMain.handle("run-code", (_e, p: string) => {
  const abs = safeResolve(p);
  const r = runnerFor(abs);
  if (!r) return { ok: false, reason: "Cannot run this file type in a terminal." };
  const cmdLine = [...r.bin.map((b) => (b.includes(" ") ? `"${b}"` : b)), ...r.args].join(" ");
  ensureTerminal();
  if (!shell) return { ok: false, reason: "Terminal could not start." };
  shell.stdin.write(cmdLine + "\r\n");
  return { ok: true, cmd: cmdLine };
});

// Debug: run the file in a windowless captured process and stream its output.
ipcMain.handle("debug-run", (_e, p: string) => {
  const abs = safeResolve(p);
  if (!existsSync(abs)) return { ok: false, reason: "File not found on disk." };
  const r = runnerFor(abs);
  if (!r) return { ok: false, reason: "Cannot debug this file type." };
  killDebug();
  debugChild = spawn(r.bin[0], [...r.bin.slice(1), ...r.args.map((a) => a.replace(/^"|"$/g, ""))], {
    cwd,
    env: process.env,
    windowsHide: true,
    shell: false,
  });
  const send = (text: string, stream: "out" | "err") => {
    if (win && !win.isDestroyed()) win.webContents.send("debug-output", text, stream);
  };
  debugChild.stdout.on("data", (d: Buffer) => send(d.toString(), "out"));
  debugChild.stderr.on("data", (d: Buffer) => send(d.toString(), "err"));
  debugChild.on("error", (e) => send("Failed to start: " + e.message + "\r\n", "err"));
  debugChild.on("close", (code) => {
    debugChild = null;
    if (win && !win.isDestroyed()) win.webContents.send("debug-exit", code ?? -1);
  });
  return { ok: true };
});

ipcMain.handle("debug-kill", () => {
  killDebug();
  return true;
});

function killDebug(): void {
  try {
    if (debugChild) debugChild.kill();
  } catch {
    /* ignore */
  }
  debugChild = null;
}

interface Profile {
  name: string;
  apiKey?: string;
  providerId?: string;
  baseUrl?: string;
  model?: string;
  githubToken?: string;
  githubUser?: { login: string; name: string; email: string } | null;
  googleIdentity?: { name: string; email: string } | null;
  githubClientId?: string;
  githubClientSecret?: string;
}

function profilePath(): string {
  return join(app.getPath("userData"), "profile.json");
}

function loadProfile(): Profile | null {
  try {
    if (!existsSync(profilePath())) return null;
    const raw = readFileSync(profilePath(), "utf8");
    const p = JSON.parse(raw) as Profile;
    if (!p || typeof p.name !== "string" || !p.name.trim()) return null;
    return {
      name: p.name.trim(),
      apiKey: typeof p.apiKey === "string" ? p.apiKey : undefined,
      providerId: typeof p.providerId === "string" ? p.providerId : undefined,
      baseUrl: typeof p.baseUrl === "string" ? p.baseUrl : undefined,
      model: typeof p.model === "string" ? p.model : undefined,
      githubToken: typeof p.githubToken === "string" ? p.githubToken : undefined,
      githubUser: p.githubUser ?? undefined,
      googleIdentity: p.googleIdentity ?? undefined,
      githubClientId: typeof p.githubClientId === "string" ? p.githubClientId : undefined,
      githubClientSecret: typeof p.githubClientSecret === "string" ? p.githubClientSecret : undefined,
    };
  } catch {
    return null;
  }
}

/* ================= git & OAuth (commits / pushes) ================= */

interface GitIdentity {
  name: string;
  email: string;
}

function resolveGitIdentity(): GitIdentity | null {
  const p = loadProfile();
  if (p?.githubUser && p.githubUser.email) {
    return { name: p.githubUser.name || p.githubUser.login, email: p.githubUser.email };
  }
  if (p?.googleIdentity?.name && p.googleIdentity?.email) {
    return { name: p.googleIdentity.name, email: p.googleIdentity.email };
  }
  return null;
}

function git(args: string[], input?: string): Promise<{ code: number; out: string; err: string }> {
  return new Promise((res) => {
    const child = spawn("git", args, {
      cwd,
      env: { ...process.env, GIT_TERMINAL_PROMPT: "0" },
      windowsHide: true,
      shell: false,
    });
    let out = "";
    let err = "";
    child.stdout.on("data", (d: Buffer) => (out += d.toString()));
    child.stderr.on("data", (d: Buffer) => (err += d.toString()));
    child.on("error", (e) => res({ code: -1, out, err: String(e.message) }));
    child.on("close", (code) => res({ code: code ?? -1, out, err }));
    if (input) child.stdin.write(input);
    child.stdin.end();
  });
}

let pendingAuth: { device_code: string; client_id: string; client_secret?: string } | null = null;

async function ghDeviceStart(): Promise<unknown> {
  const p = loadProfile();
  const clientId = p?.githubClientId?.trim();
  if (!clientId) return { ok: false, needConfig: true };
  const body = new URLSearchParams({ client_id: clientId, scope: "repo,user:email" });
  const r = await fetch("https://github.com/login/device/code", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body,
  });
  const j: any = await r.json().catch(() => ({}));
  if (!r.ok || j.error || !j.device_code) {
    const msg =
      r.status === 404 || r.status === 401
        ? "GitHub did not recognise this OAuth App — check your Client ID."
        : j.error_description || j.error || `GitHub responded HTTP ${r.status}.`;
    return { ok: false, error: msg };
  }
  pendingAuth = {
    device_code: j.device_code,
    client_id: clientId,
    client_secret: p?.githubClientSecret?.trim() || undefined,
  };
  return { ok: true, user_code: j.user_code, verification_uri: j.verification_uri, interval: j.interval || 5 };
}

async function ghUser(token: string): Promise<{ login: string; name: string; email: string } | null> {
  try {
    const r = await fetch("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" },
    });
    const u: any = await r.json().catch(() => ({}));
    let email: string = typeof u.email === "string" ? u.email : "";
    if (!email) {
      const er = await fetch("https://api.github.com/user/emails", {
        headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" },
      });
      const ems: any[] = await er.json().catch(() => []);
      const primary = (Array.isArray(ems) ? ems : []).find((x) => x.primary && x.verified);
      email = primary?.email ?? "";
    }
    return { login: String(u.login ?? ""), name: String(u.name ?? ""), email };
  } catch {
    return null;
  }
}

async function ghDevicePoll(): Promise<unknown> {
  if (!pendingAuth) return { ok: false, error: "Start a login first." };
  const body = new URLSearchParams({
    client_id: pendingAuth.client_id,
    device_code: pendingAuth.device_code,
    grant_type: "urn:ietf:params:oauth:grant-type:device_code",
  });
  if (pendingAuth.client_secret) body.set("client_secret", pendingAuth.client_secret);
  const r = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body,
  });
  const j: any = await r.json().catch(() => ({}));
  if (r.ok && j.access_token) {
    pendingAuth = null;
    const user = await ghUser(j.access_token);
    const p = loadProfile() ?? { name: user?.name || user?.login || "GitHub user" };
    saveProfile({ ...p, githubToken: j.access_token, githubUser: user });
    if (user) {
      await git(["config", "user.name", user.name || user.login]);
      await git(["config", "user.email", user.email]);
      const approve = `protocol=https\nhost=github.com\nusername=${user.login}\npassword=${j.access_token}\n\n`;
      await git(["credential", "approve"], approve);
    }
    return { ok: true, user };
  }
  if (j.error === "authorization_pending" || j.error === "slow_down") return { ok: false, pending: true };
  return { ok: false, error: j.error_description || j.error || "Authorization failed." };
}

function saveProfile(p: Profile): void {
  const dir = join(app.getPath("userData"));
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(profilePath(), JSON.stringify(p, null, 2), "utf8");
}

function clearProfile(): void {
  try {
    unlinkSync(profilePath());
  } catch {
    /* no profile file */
  }
}

function loadConfigSafe() {
  try {
    return loadConfig();
  } catch {
    const provider = providerById(process.env.ZIMLINK_PROVIDER) ?? providerById("openai")!;
    return {
      apiKey: "",
      model: process.env.OPENAI_MODEL ?? provider.defaultModel,
      cwd: process.cwd(),
      providerId: provider.id,
      baseUrl: process.env.ZIMLINK_BASE_URL || provider.baseUrl,
    };
  }
}

/** Fold the user's saved provider settings (from profile.json) into the active config. */
function applyProfileProvider(profile: Profile | null): void {
  if (!profile) return;
  const provider = providerById(profile.providerId) ?? providerById("openai")!;
  if (profile.providerId && profile.providerId !== currentConfig.providerId) {
    currentConfig = { ...currentConfig, providerId: provider.id };
  }
  if (profile.baseUrl) currentConfig = { ...currentConfig, baseUrl: profile.baseUrl };
  else if (profile.providerId) currentConfig = { ...currentConfig, baseUrl: provider.baseUrl };
  if (profile.model) currentConfig = { ...currentConfig, model: profile.model };
  else if (profile.providerId) currentConfig = { ...currentConfig, model: provider.defaultModel };
  if (profile.apiKey) currentConfig = { ...currentConfig, apiKey: profile.apiKey };
}

function providerForConfig(): { providerId: string; baseUrl: string; model: string } {
  const provider = providerById(currentConfig.providerId) ?? providerById("openai")!;
  return {
    providerId: provider.id,
    baseUrl: currentConfig.baseUrl || provider.baseUrl,
    model: currentConfig.model || provider.defaultModel,
  };
}

function send(evt: EngineEvent): void {
  if (win && !win.isDestroyed()) {
    win.webContents.send("zimlink-event", evt);
  }
}

const hooks: EngineHooks = {
  emit: send,
  askWrite: () =>
    new Promise<boolean>((resolve) => {
      pending = { resolve };
    }),
};

function getEngine(): Engine {
  if (!engine) {
    const { baseUrl, model } = providerForConfig();
    engine = new Engine(
      { cwd, apiKey: currentConfig.apiKey, model, baseUrl },
      hooks
    );
  }
  return engine;
}

function resetEngine(): void {
  engine?.stop();
  engine = null;
  pending = null;
}

/** Validate that a path from the renderer stays inside the working directory. */
function safeResolve(p: string): string {
  const abs = isAbsolute(p) ? resolve(p) : resolve(cwd, p);
  const prefix = resolve(cwd) + sep;
  if (abs !== resolve(cwd) && !abs.startsWith(prefix)) {
    throw new Error(`Path outside working directory: ${p}`);
  }
  return abs;
}

function createWindow(): void {
  win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1024,
    minHeight: 640,
    title: "ZimLink IDE",
    backgroundColor: "#1e1e1e",
    autoHideMenuBar: true,
    webPreferences: {
      preload: fileURLToPath(new URL("./preload.js", import.meta.url)),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });
  win.loadFile(fileURLToPath(new URL("./renderer/index.html", import.meta.url)));
  if (process.env.ZIMLINK_DEBUG) {
    if (process.env.ZIMLINK_AUTH) clearProfile();
    win.webContents.on("console-message", (_e, ...args) =>
      console.log("[renderer]", ...args)
    );
    win.webContents.on("render-process-gone", (_e, details) =>
      console.error("[renderer-gone]", details.reason)
    );
    win.webContents.once("did-finish-load", async () => {
      try {
        const snap = await win!.webContents.executeJavaScript(`new Promise(async (res) => {
          (window).__rawOut = "";
          zimlink.onTerminalOutput((d) => { (window).__rawOut += d; });
          const landingVisible0 = !document.getElementById("landing").classList.contains("hidden");
          const first = document.querySelector("#tree .tree-row.file .tree-name");
          if (first) first.parentElement.click();
          await new Promise((r) => setTimeout(r, 400));
          const models = monaco.editor.getModels();
          let saveCheck = "skipped";
          if (${JSON.stringify(Boolean(process.env.ZIMLINK_SAVETEST))}) {
            try {
              await zimlink.createFile("__savetest.txt");
              openEditor("__savetest.txt");
              await new Promise((r) => setTimeout(r, 300));
              const model = monaco.editor.getModels().pop();
              model.setValue("line1\\nline2\\n");
              saveFile();
              await new Promise((r) => setTimeout(r, 400));
              const dot = document.querySelector("#tabs .tab.active .dirty-dot");
              saveCheck = dot ? dot.textContent : "NO-DOT";
            } catch (e) { saveCheck = "err:" + e.message; }
          }
          let auth = null;
          let uiflow = null;
          let termtest = null;
          if (${JSON.stringify(Boolean(process.env.ZIMLINK_TERMTEST))}) {
            try {
              selectPanelTab("terminal");
              const screen = document.getElementById("terminal-screen");
              screen.focus();
              const type = (s) => {
                for (const ch of s) screen.dispatchEvent(new KeyboardEvent("keydown", { key: ch, bubbles: true }));
              };
              type("echo ZIMBUFFER_1");
              screen.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
              await new Promise((r) => setTimeout(r, 1200));
              const midText = document.getElementById("term-output-text").textContent;
              const CR = String.fromCharCode(13);
              const mid = {
                ready: midText.includes("Shell ready"),
                tail: midText.slice(-200).split(CR).join("R"),
                echoed: midText.includes("ZIMBUFFER_1"),
                rawLen: window.__rawOut?.length || 0,
                domLen: midText.length,
                rawTail: (window.__rawOut || "").slice(-120).split(CR).join("R"),
                running: termRunning
              };
              await new Promise((r) => setTimeout(r, 1400));
              const text = document.getElementById("term-output-text").textContent;
              const echoed = text.includes("ZIMBUFFER_1");
              const startCount = (text.match(/Starting shell session/g) || []).length;
              document.getElementById("btn-close-panel").click();
              await new Promise((r) => setTimeout(r, 300));
              document.querySelector('.panel-tab[data-tab="terminal"]').click();
              await new Promise((r) => setTimeout(r, 500));
              const text2 = document.getElementById("term-output-text").textContent;
              const rawCap = window.__rawOut || "";
              termtest = {
                bufferedEcho: echoed,
                startOnce: startCount,
                fullHasMicrosoft: document.getElementById("term-output-text").textContent.includes("Microsoft"),
                rawHasMicrosoft: rawCap.includes("Microsoft"),
                rawEcho: rawCap.includes("ZIMBUFFER_1"),
                domEcho: document.getElementById("term-output-text").textContent.includes("ZIMBUFFER_1"),
                mid,
                afterReopen: {
                  startCount: (text2.match(/Starting shell session/g) || []).length,
                  sessionPersisted: text2.includes("ZIMBUFFER_1"),
                  panelVisible: !document.getElementById("bottom-panel").classList.contains("collapsed"),
                  activeTab: document.querySelector(".panel-tab.active").dataset.tab,
                  screenFocused: document.activeElement === screen
                }
              };
            } catch (e) { termtest = "err:" + e.message; }
          }
          if (${JSON.stringify(Boolean(process.env.ZIMLINK_UIFLOW))}) {
            try {
              await new Promise((r) => setTimeout(r, 3500));
              const input = document.getElementById("term-input");
              const bodyText = () => document.getElementById("term-body").textContent;
              const dump = (label) => ({
                label,
                landingShown: !document.getElementById("landing").classList.contains("hidden"),
                prefix: document.getElementById("term-prefix").textContent,
                bodyTail: bodyText().slice(-60),
                profileName: null,
              });
              let stage = [dump("boot")];
              input.value = "1";
              input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
              await new Promise((r) => setTimeout(r, 300));
              stage.push(dump("after-enter-1"));
              input.value = "tester";
              input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
              await new Promise((r) => setTimeout(r, 800));
              stage.push(dump("after-enter-tester"));
              const p = await window.zimlink.getProfile();
              stage[2].profileName = p.name;
              uiflow = { stage, landingHidden: document.getElementById("landing").classList.contains("hidden") };
              await window.zimlink.clearProfile();
              uiflow.cleared = (await window.zimlink.getProfile()).name === null;
            } catch (e) { uiflow = "err:" + e.message + " @ " + e.stack; }
          }
          if (${JSON.stringify(Boolean(process.env.ZIMLINK_AUTH))}) {
            try {
              await performSignIn("__tst__", null);
              await new Promise((r) => setTimeout(r, 400));
              auth = {
                landingHidden: document.getElementById("landing").classList.contains("hidden"),
                user: (await window.zimlink.getProfile()).name,
                theme0: document.documentElement.dataset.theme
              };
              applyTheme("light");
              auth.themeLight = document.documentElement.dataset.theme;
              applyTheme("dark");
              auth.themeBackDark = document.documentElement.dataset.theme;
              await window.zimlink.clearProfile();
              auth.cleared = true;
            } catch (e) { auth = "err:" + e.message; }
          }
          const crumb = document.querySelector("#breadcrumbs .seg:last-child");
          let menuCheck = null;
          try {
            const viewItem = document.querySelector('#menu-bar .menu-item[data-menu="view"]');
            viewItem.click();
            const items = document.querySelectorAll("#menu-drop .m-item").length;
            const dropdownShown = !document.getElementById("menu-drop").classList.contains("hidden");
            document.body.click();
            menuCheck = { dropdownShown, items, closed: document.getElementById("menu-drop").classList.contains("hidden") };
          } catch (e) { menuCheck = "err:" + e.message; }
          let agentCheck = null;
          try {
            const pane = document.getElementById("agent-pane");
            const agentBtn = document.querySelector('.activity[data-view="agent"]');
            const initial = pane.classList.contains("hidden");
            agentBtn.click();
            const opened = !pane.classList.contains("hidden");
            agentBtn.click();
            const closed = pane.classList.contains("hidden");
            document.getElementById("profile-btn").click();
            const profileOpen = !document.getElementById("profile-drop").classList.contains("hidden");
            const profileItems = document.querySelectorAll("#profile-drop .p-item").length;
            document.body.click();
            agentCheck = { initial, opened, closed, profileOpen, profileItems };
          } catch (e) { agentCheck = "err:" + e.message; }
          res({
            landingVisible0,
            tabs: document.querySelectorAll("#tabs .tab").length,
            openPath: crumb ? crumb.textContent : "",
            model: monaco.editor.getModel(monaco.Uri.file("__savetest.txt")) ? "__savetest.txt" : "-",
            models: models.length,
            firstModelLen: models[0] ? models[0].getValue().length : -1,
            saveCheck,
            auth,
            uiflow,
            menuCheck,
            termtest,
            agentCheck,
            layout: {
              topbarText: document.querySelector("#topbar")?.textContent.replace(/\s+/g, " ").trim().slice(0, 90) || "",
              statusbarText: document.querySelector("#statusbar")?.textContent.replace(/\s+/g, " ").trim().slice(0, 90) || "",
              bottomPanelCollapsed: document.getElementById("bottom-panel")?.classList.contains("collapsed") ?? null,
              menuDropHidden: document.getElementById("menu-drop")?.classList.contains("hidden") ?? null,
            }
          });
        })`);
        console.log("[snapshot]", JSON.stringify(snap));
        if (process.env.ZIMLINK_SAVETEST) {
          const probe = join(cwd, "__savetest.txt");
          const saved = readFile(probe);
          if (saved !== null) {
            console.log("[savetest] wrote:", JSON.stringify(saved));
            unlinkSync(probe);
          } else {
            console.log("[savetest] NOT WRITTEN");
          }
        }
      } catch (e) {
        console.error("[snapshot-fail]", String(e));
      }
    });
    if (process.env.ZIMLINK_SHOT) {
      win.webContents.once("did-finish-load", () => {
        setTimeout(async () => {
          try {
            const img = await win!.webContents.capturePage();
            const { writeFileSync } = await import("node:fs");
            writeFileSync(process.env.ZIMLINK_SHOT!, img.toPNG());
            console.log("[shot] saved " + process.env.ZIMLINK_SHOT);
          } catch (e) { console.error("[shot-fail]", String(e)); }
        }, 2600);
      });
    }
  }
}

ipcMain.handle("get-info", () => {
  const profile = loadProfile();
  const { providerId, baseUrl, model } = providerForConfig();
  return {
    cwd,
    isIdeRoot: isIdeRoot(cwd),
    model,
    providerId,
    baseUrl,
    hasKey: Boolean(currentConfig.apiKey),
    user: profile?.name ?? null,
  };
});

ipcMain.handle("providers-list", () => {
  const p = loadProfile();
  return {
    list: PROVIDERS,
    current: {
      providerId: currentConfig.providerId || p?.providerId || "openai",
      baseUrl: currentConfig.baseUrl || p?.baseUrl || "",
      model: currentConfig.model || p?.model || "",
      apiKey: currentConfig.apiKey || p?.apiKey || "",
    },
  };
});

ipcMain.handle("providers-save", (_e, arg: {
  providerId?: string;
  baseUrl?: string;
  model?: string;
  apiKey?: string | null;
}) => {
  const provider = providerById(arg?.providerId) ?? providerById("openai")!;
  const baseUrl = (typeof arg?.baseUrl === "string" && arg.baseUrl.trim()) ? arg.baseUrl.trim() : provider.baseUrl;
  const model = (typeof arg?.model === "string" && arg.model.trim()) ? arg.model.trim() : provider.defaultModel;
  let apiKey = currentConfig.apiKey;
  if (arg?.apiKey === null) apiKey = "";
  else if (typeof arg?.apiKey === "string" && arg.apiKey.trim()) apiKey = arg.apiKey.trim();

  currentConfig = { ...currentConfig, providerId: provider.id, baseUrl, model, apiKey };

  const p = loadProfile() ?? { name: "user" };
  saveProfile({
    ...p,
    providerId: provider.id,
    baseUrl,
    model,
    ...(apiKey ? { apiKey } : {}),
  });

  resetEngine();
  return {
    ok: true,
    providerId: provider.id,
    baseUrl,
    model,
    hasKey: Boolean(apiKey),
  };
});

ipcMain.handle("profile-get", () => {
  const p = loadProfile();
  return {
    name: p?.name ?? null,
    hasKey: Boolean(p?.apiKey),
  };
});

ipcMain.handle("profile-set", (_e, arg: { name?: string; key?: string | null }) => {
  const name = typeof arg?.name === "string" ? arg.name.trim() : "";
  if (!name) return { ok: false, error: "name required" };
  const current = loadProfile() ?? { name };
  let apiKey = current.apiKey;
  if (arg?.key === null) apiKey = undefined;
  else if (typeof arg?.key === "string" && arg.key.trim()) apiKey = arg.key.trim();
  const next: Profile = { name, ...(apiKey ? { apiKey } : {}) };
  saveProfile(next);
  if (apiKey) {
    currentConfig = { ...currentConfig, apiKey };
    resetEngine();
  }
  return { ok: true, name: next.name };
});

ipcMain.handle("profile-clear", () => {
  clearProfile();
  currentConfig = { ...currentConfig, apiKey: "" };
  resetEngine();
  return { ok: true };
});

/* ================= git commit & sign-in handlers ================= */

ipcMain.handle("auth-status", () => {
  const p = loadProfile();
  const id = resolveGitIdentity();
  return {
    githubConfigured: Boolean(p?.githubClientId),
    githubUser: p?.githubUser ?? null,
    googleIdentity: p?.googleIdentity ?? null,
    identity: id,
  };
});

ipcMain.handle("github-config-save", (_e, arg: { clientId?: string; clientSecret?: string }) => {
  const clientId = typeof arg?.clientId === "string" ? arg.clientId.trim() : "";
  if (!clientId) return { ok: false, error: "GitHub OAuth App Client ID is required." };
  const p = loadProfile() ?? { name: "GitHub user" };
  const cs = typeof arg?.clientSecret === "string" && arg.clientSecret.trim() ? arg.clientSecret.trim() : undefined;
  saveProfile({ ...p, githubClientId: clientId, ...(cs ? { githubClientSecret: cs } : {}) });
  return { ok: true };
});

ipcMain.handle("github-device-start", async () => ghDeviceStart());

ipcMain.handle("github-device-poll", async () => ghDevicePoll());

ipcMain.handle("google-identities-set", (_e, arg: { name?: string; email?: string }) => {
  const name = typeof arg?.name === "string" ? arg.name.trim() : "";
  const email = typeof arg?.email === "string" ? arg.email.trim() : "";
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailValid) return { ok: false, error: "A name and a valid email address are required." };
  const p = loadProfile() ?? { name };
  saveProfile({ ...p, name, googleIdentity: { name, email } });
  return { ok: true };
});

ipcMain.handle("open-external", (_e, url: string) => {
  if (typeof url === "string" && /^https:\/\//.test(url)) void electronShell.openExternal(url);
  return true;
});

ipcMain.handle("git-commit", async (_e, arg: { message?: string; push?: boolean }) => {
  const msg = typeof arg?.message === "string" ? arg.message.trim() : "";
  if (!msg) return { ok: false, error: "Commit message cannot be empty." };
  const id = resolveGitIdentity();
  if (!id) return { ok: false, error: "No commit identity. Sign in with GitHub/Google first, or commit from the terminal." };
  const isRepo = await git(["rev-parse", "--is-inside-work-tree"]);
  if (isRepo.code !== 0) return { ok: false, error: "The open folder is not inside a git repository." };
  await git(["config", "user.name", id.name]);
  await git(["config", "user.email", id.email]);
  await git(["add", "-A"]);
  const c = await git(["commit", "-m", msg]);
  if (c.code !== 0) return { ok: false, error: (c.err || c.out).trim() || "Commit failed." };
  const result: Record<string, unknown> = { ok: true, pushed: false, output: (c.out || "").trim() || msg };
  if (arg?.push) {
    const remotes = await git(["remote"]);
    const rname = remotes.out
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean)[0];
    if (!rname) {
      result.pushError = "No git remote configured — commit created locally.";
    } else {
      const p = await git(["push", "-u", rname, "HEAD"]);
      if (p.code === 0) result.pushed = true;
      else result.pushError = (p.err || p.out).trim() || `git push to ${rname} failed.`;
    }
  }
  return result;
});

ipcMain.handle("open-folder", async () => {
  const res = await dialog.showOpenDialog(win!, { properties: ["openDirectory", "createDirectory"] });
  if (res.canceled || res.filePaths.length === 0) return null;
  cwd = resolve(res.filePaths[0]);
  resetEngine();
  shellCwd = cwd;
  killShell();
  return { cwd, isIdeRoot: isIdeRoot(cwd), tree: listTree(cwd) };
});

ipcMain.handle("list-tree", () => listTree(cwd));

ipcMain.handle("read-file", (_e, p: string) => {
  const abs = safeResolve(p);
  return readFile(abs);
});

ipcMain.handle("save-file", (_e, p: string, content: string) => {
  const abs = safeResolve(p);
  writeFile(abs, content);
  return true;
});

ipcMain.handle("create-file", (_e, p: string) => {
  const abs = safeResolve(p);
  if (readFile(abs) === null) writeFile(abs, "");
  return abs;
});

ipcMain.handle("agent-start", (_e, task: string, autoApply: boolean) => {
  if (!task?.trim()) return;
  const provider = providerById(currentConfig.providerId) ?? providerById("openai")!;
  if (!currentConfig.apiKey && provider.needsKey) {
    send({ kind: "error", message: `No API key set for ${provider.name}. Add one in Settings → AI Provider.` });
    return;
  }
  getEngine().stop();
  getEngine().autoApply = Boolean(autoApply);
  void getEngine().run(task.trim()).catch((err) => send({ kind: "error", message: err?.message ?? String(err) }));
});

ipcMain.handle("agent-followup", (_e, text: string) => {
  if (!text?.trim() || !engine) return;
  void engine.followUp(text.trim()).catch((err) => send({ kind: "error", message: err?.message ?? String(err) }));
});

ipcMain.handle("agent-respond", (_e, apply: boolean) => {
  if (pending) {
    pending.resolve(Boolean(apply));
    pending = null;
  }
});

ipcMain.handle("agent-stop", () => {
  engine?.stop();
  if (pending) {
    pending.resolve(false);
    pending = null;
  }
});

ipcMain.handle("agent-config", (_e, cfg: { model?: string }) => {
  let changed = false;
  if (cfg?.model && cfg.model !== currentConfig.model) {
    currentConfig = { ...currentConfig, model: cfg.model };
    const p = loadProfile();
    if (p) saveProfile({ ...p, model: cfg.model });
    changed = true;
  }
  if (changed) resetEngine();
  const { providerId, baseUrl } = providerForConfig();
  return { model: currentConfig.model, providerId, baseUrl, hasKey: Boolean(currentConfig.apiKey) };
});

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  applyProfileProvider(loadProfile());
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

process.on("uncaughtException", (err) => {
  try {
    writeFileSync(join(app.getPath("userData"), "main-crash.log"), String(err?.stack || err) + "\r\n", { flag: "a" });
  } catch { /* ignore */ }
  console.error("[main-crash]", err);
});