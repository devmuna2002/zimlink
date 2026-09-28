import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("zimlink", {
  getInfo: () => ipcRenderer.invoke("get-info"),
  openFolder: () => ipcRenderer.invoke("open-folder"),
  listTree: () => ipcRenderer.invoke("list-tree"),
  readFile: (p: string) => ipcRenderer.invoke("read-file", p),
  saveFile: (p: string, content: string) => ipcRenderer.invoke("save-file", p, content),
  createFile: (p: string) => ipcRenderer.invoke("create-file", p),
  startTask: (task: string, autoApply: boolean) => ipcRenderer.invoke("agent-start", task, autoApply),
  followUp: (text: string) => ipcRenderer.invoke("agent-followup", text),
  respond: (apply: boolean) => ipcRenderer.invoke("agent-respond", apply),
  stop: () => ipcRenderer.invoke("agent-stop"),
  setConfig: (cfg: { model?: string }) => ipcRenderer.invoke("agent-config", cfg),
  providersList: () => ipcRenderer.invoke("providers-list"),
  providersSave: (cfg: {
    providerId?: string;
    baseUrl?: string;
    model?: string;
    apiKey?: string | null;
  }) => ipcRenderer.invoke("providers-save", cfg),
  getProfile: () => ipcRenderer.invoke("profile-get"),
  setProfile: (p: { name: string; key?: string | null }) => ipcRenderer.invoke("profile-set", p),
  clearProfile: () => ipcRenderer.invoke("profile-clear"),
  authStatus: () => ipcRenderer.invoke("auth-status"),
  githubConfigSave: (cfg: { clientId: string; clientSecret?: string }) => ipcRenderer.invoke("github-config-save", cfg),
  githubDeviceStart: () => ipcRenderer.invoke("github-device-start"),
  githubDevicePoll: () => ipcRenderer.invoke("github-device-poll"),
  googleIdentitiesSet: (id: { name: string; email: string }) => ipcRenderer.invoke("google-identities-set", id),
  gitCommit: (a: { message: string; push?: boolean }) => ipcRenderer.invoke("git-commit", a),
  openExternal: (url: string) => ipcRenderer.invoke("open-external", url),
  writeTerminal: (text: string) => ipcRenderer.send("terminal-input", text),
  ensureTerminal: () => ipcRenderer.invoke("terminal-open"),
  runCode: (p: string) => ipcRenderer.invoke("run-code", p),
  debugRun: (p: string) => ipcRenderer.invoke("debug-run", p),
  debugKill: () => ipcRenderer.invoke("debug-kill"),
  onDebugOutput: (cb: (text: string, stream: "out" | "err") => void) =>
    ipcRenderer.on("debug-output", (_e, text: string, stream: "out" | "err") => cb(text, stream)) as unknown as void,
  onDebugExit: (cb: (code: number) => void) =>
    ipcRenderer.on("debug-exit", (_e, code: number) => cb(code)) as unknown as void,
  onTerminalOutput: (cb: (text: string) => void) =>
    ipcRenderer.on("terminal-output", (_e, text: string) => cb(text)) as unknown as void,
  onEvent: (cb: (evt: unknown) => void) =>
    ipcRenderer.on("zimlink-event", (_e, evt: unknown) => cb(evt)) as unknown as void,
});