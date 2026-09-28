/* global monaco, zimlink */
"use strict";

const $ = (id) => document.getElementById(id);

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const now = () => new Date().toLocaleTimeString([], { hour12: false });
const baseName = (p) => String(p).split(/[\\/]/).filter(Boolean).pop() || p;
function fit(elem) {
  elem.style.height = "auto";
  elem.style.height = Math.min(elem.scrollHeight, 160) + "px";
}

const state = {
  cwd: "",
  tree: [],
  activePath: null,
  openFiles: [],       // ordered open tabs
  models: new Map(),   // path -> monaco model
  saved: {},           // path -> content on disk at last save/load
  dirty: {},           // path -> bool
  modifiedFiles: new Set(), // files modified during the session
  newFiles: new Set(),      // files created during the session
  expanded: new Set(),
  busy: false,
  editor: null,
  queue: [],
  currentRun: null,
  pending: null,
  changesOnly: false,
  model: "",
  user: null,
  info: {},
  landingFrom: "boot",
  activeSidebarView: "explorer",
  activePanelTab: "terminal",
  auth: { githubConfigured: false, githubUser: null, googleIdentity: null, identity: null },
  ghPollTimer: null,
};

const langExt = {
  py: "python", js: "javascript", mjs: "javascript", cjs: "javascript",
  jsx: "javascript", ts: "typescript", tsx: "typescript", json: "json",
  html: "html", htm: "html", css: "css", scss: "scss", md: "markdown",
  go: "go", rs: "rust", java: "java", c: "c", h: "c", cpp: "cpp", hpp: "cpp",
  rb: "ruby", php: "php", sh: "shell", bash: "shell", yml: "yaml", yaml: "yaml",
  toml: "ini", ini: "ini", sql: "sql", xml: "xml", vue: "html",
};
function langFor(path) {
  const ext = path.split(".").pop().toLowerCase();
  return langExt[ext] || "plaintext";
}

/* ================= theme ================= */

function currentTheme() {
  try { return localStorage.getItem("zimlink-theme") || "dark"; } catch { return "dark"; }
}
function applyTheme(mode) {
  document.documentElement.dataset.theme = mode;
  try { localStorage.setItem("zimlink-theme", mode); } catch { /* ignore */ }
  if (state.editor) state.editor.updateOptions({ theme: mode === "light" ? "vs" : "vs-dark" });
  updateThemeBtns();
}
function toggleTheme() { applyTheme(currentTheme() === "dark" ? "light" : "dark"); }
function updateThemeBtns() {
  const t = currentTheme();
  $("theme-dark").classList.toggle("active", t === "dark");
  $("theme-light").classList.toggle("active", t === "light");
}

/* ================= terminal landing / auth ================= */

let termPhase = "home";
let termName = "";
let termCreate = false;
let termStarted = false;

const termInput = $("term-input");
termInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    e.stopPropagation();
    void termSubmit();
  }
});
const term = {
  body: null,
  log(txt, cls) {
    const d = el("div", "term-line" + (cls ? " " + cls : ""));
    d.textContent = txt;
    this.body.appendChild(d);
    this.body.scrollTop = this.body.scrollHeight;
    return d;
  },
  async type(txt, cls) {
    const d = el("div", "term-line" + (cls ? " " + cls : ""));
    this.body.appendChild(d);
    for (let i = 0; i <= txt.length; i += 2) {
      d.textContent = txt.slice(0, i);
      this.body.scrollTop = this.body.scrollHeight;
      await new Promise((r) => setTimeout(r, 10));
    }
    return d;
  },
};

function setTermHint(hint) { termInput.placeholder = hint || ""; }

function showLanding(mode) {
  state.landingFrom = mode === "settings" ? "settings" : "boot";
  term.body = $("term-body");
  term.body.innerHTML = "";
  termPhase = "home";
  termName = "";
  termCreate = false;
  termStarted = false;
  $("landing").classList.remove("hidden");
  $("term-prefix").textContent = "zal> ";
  termInput.value = "";
  termInput.focus();
  void runLandingSequence(mode);
}

async function runLandingSequence(mode) {
  const info = state.info || {};
  await term.type("ZimLink IDE 0.1.0 — AI coding assistant", "green");
  await term.type("electron build · local workspace · in-terminal auth", "dim");
  term.log("", "");
  await term.type("$ workspace ................. " + (info.cwd || "not loaded"), "dim");
  await term.type("$ api key ................... " + (info.hasKey ? "found" : "missing"), info.hasKey ? "dim" : "blue");
  await term.type("$ session profile ........... " + (state.user ? "signed in as " + state.user : "not found"), state.user ? "green" : "dim");
  term.log("", "");
  if (mode === "settings" && state.user) await term.type("editing profile for " + state.user + ".", "dim");
  if (mode === "signed-out") await term.type("session signed out.", "dim");
  await term.type("authentication required — select an option:", "dim");
  if (!termStarted) renderTermHome();
}

function appendTermOpt(text, i, cb) {
  const o = el("div", "term-opt");
  o.innerHTML = `<span class="num">[${i}]</span>${esc(text)}`;
  o.onclick = cb;
  term.body.appendChild(o);
}

function renderTermHome() {
  termPhase = "home";
  termName = "";
  termCreate = false;
  $("term-prefix").textContent = "zal> ";
  appendTermOpt("sign in", 1, () => termStart(false, "sign in"));
  appendTermOpt("create account", 2, () => termStart(true, "create account"));
  setTermHint("enter 1 or 2 …");
  termInput.focus();
}

function termHome() {
  term.log("", "");
  term.log("authentication required — select an option:", "dim");
  renderTermHome();
}

async function termStart(create, label) {
  termStarted = true;
  termCreate = create;
  termPhase = "name";
  term.log("> " + label, "dim");
  await term.type(create ? "creating account — choose a profile name" : "signing in — profile name", "dim");
  $("term-prefix").textContent = "name: ";
  termName = "";
  setTermHint("username (Enter to submit)");
  termInput.focus();
}

async function termSubmit() {
  const v = termInput.value.trim();
  termInput.value = "";
  if (termPhase === "home") {
    const n = v.toLowerCase();
    if (n === "1" || n === "sign in" || n === "login") { term.log("> " + (v || "1"), "dim"); termStart(false, "sign in"); }
    else if (n === "2" || n === "create" || n === "create account" || n === "sign up") { term.log("> " + (v || "2"), "dim"); termStart(true, "create account"); }
    else term.log("unknown option: " + (v || "…"), "blue");
    return;
  }
  if (termPhase === "name") {
    if (!v) { term.log("username cannot be empty", "blue"); termInput.focus(); return; }
    termName = v;
    term.log(v, "");
    if (termCreate) {
      termPhase = "key";
      term.log("api key (OpenAI) — optional; paste OPENAI_API_KEY", "dim");
      $("term-prefix").textContent = "api-key: ";
      setTermHint("Enter to skip");
      termInput.focus();
    } else {
      await performSignIn(termName, null);
    }
    return;
  }
  if (termPhase === "key") {
    const key = v || null;
    if (key) term.log("•••••••• (key set)", "dim");
    await performSignIn(termName, key);
  }
}

async function performSignIn(name, key) {
  const res = await zimlink.setProfile({ name, key: key ?? null });
  if (!res || res.ok !== true) {
    term.log("auth error: " + (res?.error || "failed"), "blue");
    termHome();
    return;
  }
  term.log("authentication ok ✓", "green");
  state.user = name;
  await term.type("entering workspace…", "dim");
  $("landing").classList.add("hidden");
  refreshAccount();
  taskNote("Signed in as " + name + (key ? " · API key set" : "") + " — hello!");
  if (state.landingFrom === "settings") switchView("settings");
  else switchView("explorer");
  taskInput.focus();
}

/* ================= account ================= */

function refreshAccount() {
  zimlink.getProfile().then((p) => {
    $("account-name").textContent = p.name || "—";
    $("account-key").textContent = p.hasKey ? "· key ✓" : "";
    $("btn-signout").disabled = !p.name;
    $("btn-edit-profile").textContent = p.name ? "Edit profile" : "Sign in / Create account";
    $("profile-avatar").innerHTML = p.name ? p.name.trim().charAt(0).toUpperCase() : `<i class="bi bi-person-circle"></i>`;
  });
}

function showProfileMenu() {
  const menu = $("profile-drop");
  menu.innerHTML = "";
  if (state.user) {
    const who = el("div", "p-item disabled", "Signed in as " + state.user);
    menu.appendChild(who);
    const edit = el("div", "p-item", "Edit profile");
    edit.onclick = () => { closeProfileMenu(); showLanding("settings"); };
    menu.appendChild(edit);
    const signout = el("div", "p-item danger", "Sign out");
    signout.onclick = () => { closeProfileMenu(); signOut(); };
    menu.appendChild(signout);
    if (state.auth.githubUser) {
      const gh = el("div", "p-item disabled", "GitHub: @" + state.auth.githubUser.login);
      menu.appendChild(gh);
    } else {
      const gh = el("div", "p-item", "Sign in with GitHub…");
      gh.onclick = () => { closeProfileMenu(); switchView("settings"); startGitHubSignIn(); };
      menu.appendChild(gh);
    }
    if (state.auth.googleIdentity) {
      const gi = el("div", "p-item disabled", "Google: " + state.auth.googleIdentity.name);
      menu.appendChild(gi);
    } else {
      const gi = el("div", "p-item", "Sign in with Google…");
      gi.onclick = () => { closeProfileMenu(); switchView("settings"); startGoogleSignIn(); };
      menu.appendChild(gi);
    }
  } else {
    const signin = el("div", "p-item", "Sign in");
    signin.onclick = () => { closeProfileMenu(); showLanding("boot"); };
    menu.appendChild(signin);
    const create = el("div", "p-item", "Create account");
    create.onclick = () => { closeProfileMenu(); showLanding("settings"); };
    menu.appendChild(create);
  }
  menu.classList.remove("hidden");
}
function closeProfileMenu() { $("profile-drop").classList.add("hidden"); }

async function signOut() {
  if (!confirm("Sign out of ZimLink? Your local profile will be removed.")) return;
  await zimlink.clearProfile();
  state.user = null;
  state.auth = { githubConfigured: false, githubUser: null, googleIdentity: null, identity: null };
  refreshAccount();
  refreshAuthUI();
  showLanding("signed-out");
}

/* ================= commit auth (GitHub / Google) ================= */

function refreshAuthUI() {
  return zimlink.authStatus().then((a) => {
    state.auth = a || state.auth;
    const ident = el("div", "", "");
    ident.textContent = commitIdentityLabel();
    const li = $("commit-identity");
    li.textContent = ident.textContent;
    li.className = "acct-line " + (state.auth.identity ? "" : "dim");
    $("btn-gh").innerHTML = state.auth.githubUser
      ? `<i class="bi bi-github"></i> ✓ GitHub: @${esc(state.auth.githubUser.login)}`
      : `<i class="bi bi-github"></i> Sign in with GitHub`;
    const gi = state.auth.googleIdentity;
    $("btn-google").innerHTML = gi
      ? `<i class="bi bi-google"></i> ✓ Google: ${esc(gi.name)}`
      : `<i class="bi bi-google"></i> Sign in with Google`;
    if (state.auth.githubUser || gi) $("btn-signout").disabled = false;
  });
}

function commitIdentityLabel() {
  if (state.auth && state.auth.identity) return `Commits as ${state.auth.identity.name} <${state.auth.identity.email}>`;
  return "No commit identity yet.";
}

function showAuthModal(title, bodyEl, actionsEl) {
  $("auth-modal-title").textContent = title;
  const b = $("auth-modal-body");
  b.replaceChildren(bodyEl);
  const a = $("auth-modal-actions");
  a.replaceChildren(actionsEl || []);
  $("auth-modal").classList.remove("hidden");
}

function hideAuthModal() {
  $("auth-modal").classList.add("hidden");
  if (state.ghPollTimer) { clearTimeout(state.ghPollTimer); state.ghPollTimer = null; }
}

function startGitHubSignIn() {
  if (!state.auth.githubConfigured) {
    $("github-config-wrap").classList.remove("hidden");
    $("gh-client-id").focus();
    showToast("Add your GitHub OAuth App Client ID to sign in.", "info");
    return;
  }
  zimlink.githubDeviceStart().then((r) => {
    if (!r || !r.ok) {
      showToast((r && r.error) || "GitHub sign-in could not start.", "error");
      return;
    }
    const body = document.createElement("div");
    body.className = "gh-device";
    const code = el("div", "auth-code", r.user_code);
    const steps = el("div", "dim", "Visit the verification URL (or click below) and enter this one-time code.");
    const uri = el("div", "auth-uri", r.verification_uri);
    const status = el("div", "auth-status dim", "Waiting for you to authorize…");
    status.id = "auth-status";
    body.append(code, steps, uri, status);
    const actions = el("div", "row");
    const open = el("button", "wide", "Open GitHub");
    open.onclick = () => zimlink.openExternal(r.verification_uri);
    const cancel = el("button", "wide", "Cancel");
    cancel.onclick = hideAuthModal;
    actions.append(open, cancel);
    showAuthModal("Sign in with GitHub", body, actions);
    pollDevice(new Date(), r.interval || 5);
  });
}

function pollDevice(started, interval) {
  zimlink.githubDevicePoll().then((r) => {
    if (!$("auth-modal") || $("auth-modal").classList.contains("hidden")) return;
    if (r && r.ok) {
      hideAuthModal();
      showToast(`Signed in to GitHub as @${r.user.login}.`, "success");
      refreshAuthUI();
      return;
    }
    if (r && r.pending) {
      const s = $("auth-status");
      if (s) s.textContent = "Waiting for you to authorize…";
      state.ghPollTimer = setTimeout(() => pollDevice(started, interval), interval * 1000);
      return;
    }
    hideAuthModal();
    showToast((r && r.error) || "GitHub authorization failed.", "error");
  });
}

function startGoogleSignIn() {
  const body = document.createElement("div");
  const note = el("div", "dim", "Enter the name and email you use on Google so commits are attributed to you.");
  const nameL = el("label");
  nameL.textContent = "Name";
  const name = el("input", "", "");
  nameL.append(name);
  const emailL = el("label");
  emailL.textContent = "Email";
  const email = el("input", "", "");
  email.placeholder = "you@example.com";
  emailL.append(email);
  if (state.auth.googleIdentity) {
    name.value = state.auth.googleIdentity.name;
    email.value = state.auth.googleIdentity.email;
  }
  body.append(note, nameL, emailL);
  const actions = el("div", "row");
  const save = el("button", "wide", "Sign in with Google");
  const cancel = el("button", "wide", "Cancel");
  cancel.onclick = hideAuthModal;
  save.onclick = () => {
    const nm = name.value.trim();
    const em = email.value.trim();
    if (!nm || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      showToast("Enter a name and a valid email.", "error");
      return;
    }
    zimlink.googleIdentitiesSet({ name: nm, email: em }).then((r) => {
      if (r && r.ok) {
        hideAuthModal();
        showToast("Commit identity set.", "success");
        refreshAuthUI();
      } else {
        showToast((r && r.error) || "Could not set identity.", "error");
      }
    });
  };
  actions.append(save, cancel);
  showAuthModal("Sign in with Google", body, actions);
  name.focus();
}

function saveGhConfig() {
  const clientId = $("gh-client-id").value.trim();
  const clientSecret = $("gh-client-secret").value.trim();
  if (!clientId) {
    showToast("GitHub Client ID is required.", "error");
    return;
  }
  zimlink.githubConfigSave({ clientId, clientSecret: clientSecret || undefined }).then((r) => {
    if (r && r.ok) {
      $("github-config-wrap").classList.add("hidden");
      window.location.hash = ""; // noop keeps flow simple
      state.auth.githubConfigured = true;
      startGitHubSignIn();
    } else {
      showToast((r && r.error) || "Could not save GitHub credentials.", "error");
    }
  });
}

/* ================= icons ================= */

const ICON_COLORS = {
  js: "#e8d44d", mjs: "#e8d44d", cjs: "#e8d44d", jsx: "#e8d44d",
  ts: "#3178c6", tsx: "#3178c6", py: "#4584b6", html: "#e34c26",
  htm: "#e34c26", css: "#42a5f5", scss: "#f85781", json: "#c8c8c8",
  md: "#9aa0a6", go: "#00add8", rs: "#dea584", java: "#e76f00",
  c: "#3572a5", h: "#005f9e", cpp: "#f34b7d", hpp: "#f34b7d",
  sh: "#89e051", bash: "#89e051", yml: "#cb171e", yaml: "#cb171e",
  sql: "#a7c7e7", toml: "#cab862", ini: "#cab862", vue: "#41b883",
  php: "#4f5d95", rb: "#cc342d", xml: "#e6b550", svg: "#ffb13b",
};

function fileIcon(path) {
  const m = String(path).match(/\.([a-zA-Z0-9]+)$/);
  const ext = m ? m[1].toLowerCase() : "";
  const c = ICON_COLORS[ext] || "#8a93a5";
  return `<i class="bi bi-file-earmark tree-file-ico" style="color:${c}"></i>`;
}

function folderIcon(open) {
  return `<i class="bi ${open ? "bi-folder2-open" : "bi-folder-fill"} tree-folder-ico"></i>`;
}

/* ================= file tree ================= */

function buildNodeMap(list) {
  const root = { children: {}, isFile: false, path: "" };
  for (const item of list) {
    const isDir = item.endsWith("/");
    const parts = (isDir ? item.slice(0, -1) : item).split("/");
    let cur = root;
    parts.forEach((part, i) => {
      const last = i === parts.length - 1;
      if (!cur.children[part]) {
        cur.children[part] = { children: {}, isFile: last && !isDir, path: item };
      }
      cur = cur.children[part];
    });
  }
  return root;
}

function renderInto(container, node, depth) {
  const names = Object.keys(node.children).sort((a, b) => {
    const da = node.children[a].isFile ? 1 : 0;
    const db = node.children[b].isFile ? 1 : 0;
    return da - db || a.localeCompare(b);
  });
  for (const name of names) {
    const child = node.children[name];
    const pad = 10 + depth * 12;
    if (child.isFile) {
      const row = el("div", "tree-row file");
      row.style.paddingLeft = pad + "px";
      row.dataset.path = child.path;
      if (state.activePath === child.path) row.classList.add("selected");
      
      // Determine Git modification status badge
      let badgeHtml = "";
      if (state.newFiles.has(child.path)) badgeHtml = `<span class="git-badge new" title="Untracked/New">U</span>`;
      else if (state.modifiedFiles.has(child.path)) badgeHtml = `<span class="git-badge mod" title="Modified">M</span>`;
      
      row.innerHTML = `<span class="icon">${fileIcon(child.path)}</span>` +
        `<span class="tree-name">${esc(name)}</span>` +
        `<span class="spacer"></span>` + badgeHtml;
        
      row.onclick = () => openEditor(child.path);
      container.appendChild(row);
    } else {
      const open = state.expanded.has(child.path);
      const row = el("div", "tree-row dir");
      row.style.paddingLeft = pad + "px";
      row.innerHTML = `<span class="tree-arrow">${open ? `<i class="bi bi-chevron-down"></i>` : `<i class="bi bi-chevron-right"></i>`}</span><span class="icon">${folderIcon(open)}</span><span class="tree-name">${esc(name)}</span>`;
      row.onclick = () => {
        open ? state.expanded.delete(child.path) : state.expanded.add(child.path);
        renderTree();
      };
      container.appendChild(row);
      if (open) {
        const wrap = el("div", "");
        container.appendChild(wrap);
        renderInto(wrap, child, depth + 1);
      }
    }
  }
}

function renderTree() {
  const box = $("tree");
  box.innerHTML = "";
  renderInto(box, buildNodeMap(state.tree), 0);
}

function showWorkspaceUi(cwd, isIdeRoot) {
  if (isIdeRoot) {
    $("tree").classList.add("hidden");
    $("empty-ws").classList.remove("hidden");
    $("empty-msg").textContent = "This is ZimLink's own folder. Open a project folder to see its files.";
    $("ws-name").textContent = "WORKSPACE";
    $("project-title").textContent = "ZimLink";
    showWelcome(true);
  } else {
    $("tree").classList.remove("hidden");
    $("empty-ws").classList.add("hidden");
    $("empty-msg").textContent = "No folder opened.";
    $("ws-name").textContent = cwd ? baseName(cwd).toUpperCase() : "WORKSPACE";
    $("project-title").textContent = cwd ? baseName(cwd) : "ZimLink";
    showWelcome(!cwd);
  }
}

function showWelcome(show) {
  $("welcome").classList.toggle("hidden", !show);
  const topbar = $("topbar");
  if (topbar) topbar.classList.toggle("hidden", show);
  if (show) {
    $("welcome-prompt").textContent = state.info && state.info.model
      ? "Open a folder, then ask the agent to build something with " + state.info.model + "…"
      : "Open a folder, then ask the agent to build something…";
  }
}


function refreshSelection() {
  document.querySelectorAll("#tree .tree-row.file").forEach((r) => {
    r.classList.toggle("selected", r.dataset.path === state.activePath);
  });
}

function loadTree() {
  return zimlink.listTree().then((t) => { state.tree = t; renderTree(); refreshGitStatus(); });
}

/* ================= tabs ================= */

function openEditor(path) {
  if (state.openFiles.includes(path)) { selectTab(path); return; }
  state.openFiles.push(path);
  navPush(path);
  loadModel(path).then(() => selectTab(path));
}

function loadModel(path) {
  return zimlink.readFile(path).then((content) => {
    state.saved[path] = content ?? "";
    const uri = monaco.Uri.file(path);
    let model = monaco.editor.getModel(uri);
    if (model) model.dispose();
    model = monaco.editor.createModel(content ?? "", langFor(path), uri);
    state.models.set(path, model);
    model.onDidChangeContent(() => {
      const dirty = model.getValue() !== (state.saved[path] ?? "");
      setDirty(path, dirty);
    });
    return model;
  }).catch((err) => { taskNote("Open failed: " + path + " — " + err); });
}

function selectTab(path) {
  const model = state.models.get(path);
  if (!model) return;
  state.activePath = path;
  state.editor.setModel(model);
  renderTabs();
  renderOpenEditors();
  renderBreadcrumbs();
  refreshSelection();
  updateTabCount();
  $("status-lang").textContent = langFor(path).toUpperCase();
}

function closeTab(path) {
  const idx = state.openFiles.indexOf(path);
  if (idx < 0) return;
  const wasActive = state.activePath === path;
  state.openFiles.splice(idx, 1);
  delete state.saved[path];
  delete state.dirty[path];
  const model = state.models.get(path);
  if (model) model.dispose();
  state.models.delete(path);
  if (wasActive) {
    if (state.openFiles.length) selectTab(state.openFiles[Math.max(0, idx - 1)]);
    else {
      state.activePath = null;
      state.editor.setModel(null);
      renderBreadcrumbs();
      $("status-lang").textContent = "PLAIN TEXT";
    }
  }
  renderTabs();
  renderOpenEditors();
  refreshSelection();
  updateTabCount();
}

function cycleTab(delta) {
  if (!state.openFiles.length) return;
  const idx = state.openFiles.indexOf(state.activePath);
  const next = (idx + delta + state.openFiles.length) % state.openFiles.length;
  selectTab(state.openFiles[next]);
}

function clearTabs() {
  state.openFiles.forEach((p) => { const m = state.models.get(p); if (m) m.dispose(); });
  state.openFiles = [];
  state.models.clear();
  state.saved = {};
  state.dirty = {};
  state.activePath = null;
  if (state.editor) state.editor.setModel(null);
  renderTabs();
  renderOpenEditors();
  renderBreadcrumbs();
  updateTabCount();
}

function renderTabs() {
  const box = $("tabs");
  box.innerHTML = "";
  state.openFiles.forEach((path) => {
    const t = el("div", "tab" + (path === state.activePath ? " active" : ""));
    t.dataset.path = path;
    
    // Colored states matching VS Code
    let extraClass = "";
    let stateLabel = "";
    if (state.newFiles.has(path)) { extraClass = " git-new"; stateLabel = " U"; }
    else if (state.modifiedFiles.has(path)) { extraClass = " git-mod"; stateLabel = " M"; }
    
    t.innerHTML = `<span class="icon">${fileIcon(path)}</span>` +
      `<span class="tab-name${extraClass}">${esc(baseName(path))}<sup>${stateLabel}</sup></span>` +
      `<span class="dirty-dot"></span>` +
      `<span class="icon close" data-close="1">×</span>`;
    t.onclick = () => selectTab(path);
    t.querySelector("[data-close]").onclick = (ev) => { ev.stopPropagation(); closeTab(path); };
    t.onauxclick = (ev) => { if (ev.button === 1) closeTab(path); };
    box.appendChild(t);
  });
  updateDirtyAll();
}

function renderOpenEditors() {
  const box = $("open-editors");
  const list = $("open-editors-list");
  box.classList.toggle("hidden", state.openFiles.length === 0);
  list.innerHTML = "";
  state.openFiles.forEach((path) => {
    const r = el("div", "oe-row" + (path === state.activePath ? " active" : ""));
    r.dataset.path = path;
    
    let extraLabel = "";
    if (state.newFiles.has(path)) extraLabel = " U";
    else if (state.modifiedFiles.has(path)) extraLabel = " M";

    r.innerHTML = `<span class="icon">${fileIcon(path)}</span>` +
      `<span class="oe-name">${esc(path)}<sup>${extraLabel}</sup></span>` +
      `<span class="spacer"></span>` +
      `<span class="icon close" data-close="1">×</span>`;
    r.onclick = () => selectTab(path);
    r.querySelector("[data-close]").onclick = (ev) => { ev.stopPropagation(); closeTab(path); };
    list.appendChild(r);
  });
}

function setDirty(path, flag) {
  if (!!state.dirty[path] === flag) return;
  state.dirty[path] = flag;
  if (flag) markFileModified(path);
  updateDirtyAll();
}

function updateDirtyAll() {
  state.openFiles.forEach((path) => {
    const dirty = !!state.dirty[path];
    document.querySelectorAll(`#tabs .tab[data-path="${CSS.escape(path)}"]`).forEach((t) => {
      t.classList.toggle("dirty", dirty);
      const dot = t.querySelector(".dirty-dot");
      if (dot) dot.textContent = dirty ? "●" : "";
    });
    document.querySelectorAll(`#open-editors-list .oe-row[data-path="${CSS.escape(path)}"]`).forEach((r) => {
      r.classList.toggle("dirty", dirty);
    });
  });
}

/* ================= git modification status tracking ================= */

function markFileModified(path) {
  if (!state.tree.includes(path) && !state.newFiles.has(path)) {
    state.newFiles.add(path);
  } else if (!state.newFiles.has(path)) {
    state.modifiedFiles.add(path);
  }
  refreshGitStatus();
}

function refreshGitStatus() {
  const count = state.newFiles.size + state.modifiedFiles.size;
  const badge = $("git-badge");
  if (count > 0) {
    badge.textContent = String(count);
    badge.classList.remove("hidden");
  } else {
    badge.classList.add("hidden");
  }
  
  // Render files inside Source Control tab
  const gitList = $("git-changes-list");
  gitList.innerHTML = "";
  
  if (count === 0) {
    gitList.innerHTML = `<div class="dim" style="padding:14px;font-size:12px;">No changes tracked in this session.</div>`;
    return;
  }
  
  const renderRow = (path, badgeType, badgeChar) => {
    const r = el("div", "git-row");
    r.innerHTML = `<div class="git-row-left"><span class="icon">${fileIcon(path)}</span><span class="git-file-name">${esc(path)}</span></div>` +
      `<span class="git-badge ${badgeType}">${badgeChar}</span>`;
    r.onclick = () => openEditor(path);
    gitList.appendChild(r);
  };
  
  state.newFiles.forEach(p => renderRow(p, "new", "U"));
  state.modifiedFiles.forEach(p => renderRow(p, "mod", "M"));
  
  renderTree(); // refresh Git badges in the tree row!
}

function handleCommit() {
  const msg = $("commit-message").value.trim();
  if (!msg) {
    showToast("Commit failed: Message cannot be empty", "error");
    return;
  }
  const btn = $("btn-commit");
  const previous = btn.textContent;
  btn.textContent = "Committing…";
  btn.disabled = true;
  return zimlink.gitCommit({ message: msg, push: $("commit-push").checked }).then((r) => {
    btn.textContent = previous;
    btn.disabled = false;
    if (!r || !r.ok) {
      const reason = (r && r.error) || "Commit failed.";
      showToast("Commit failed: " + reason, "error");
      appendToOutput("[commit] " + reason);
      return;
    }
    if (r.output) appendToOutput("[commit] " + r.output);
    if (r.pushError) { showToast("Committed locally — push: " + r.pushError, "info"); appendToOutput("[push] " + r.pushError); }
    else if (r.pushed) showToast(`Committed & pushed: "${msg}"`, "success");
    else showToast(`Committed: "${msg}"`, "success");
    $("commit-message").value = "";
    state.newFiles.clear();
    state.modifiedFiles.clear();
    refreshGitStatus();
  }).catch((e) => {
    btn.textContent = previous;
    btn.disabled = false;
    showToast("Commit failed: " + String(e), "error");
  });
}

/* ================= breadcrumbs ================= */

function renderBreadcrumbs() {
  const b = $("breadcrumbs");
  b.innerHTML = "";
  if (!state.activePath) return;
  const root = baseName(state.cwd) || "workspace";
  const parts = state.activePath.split("/");
  const seg0 = el("span", "seg", root);
  seg0.title = state.cwd;
  seg0.onclick = () => switchView("explorer");
  b.appendChild(seg0);
  let acc = "";
  parts.forEach((p, i) => {
    acc = acc ? acc + "/" + p : p;
    b.appendChild(el("span", "sep", " ▸ "));
    if (i < parts.length - 1) {
      const seg = el("span", "seg", p);
      seg.onclick = () => selectTab(acc);
      b.appendChild(seg);
    } else {
      const seg = el("span", "seg", (state.dirty[state.activePath] ? "● " : "") + p);
      b.appendChild(seg);
    }
  });
}

/* ================= editor ================= */

function saveFile() {
  const model = state.editor && state.editor.getModel();
  if (!model || !state.activePath) return;
  const path = state.activePath;
  zimlink.saveFile(path, model.getValue()).then(() => {
    state.saved[path] = model.getValue();
    setDirty(path, false);
    taskNote("Saved " + path);
    showToast(`Saved file: ${path}`, "success");
  });
}

function reloadOpenedFile(path) {
  const model = state.models.get(path);
  if (!model || state.dirty[path]) return;
  zimlink.readFile(path).then((content) => {
    model.setValue(content ?? "");
    state.saved[path] = content ?? "";
  });
}

function newFile() {
  const name = prompt("New file path (relative to " + state.cwd + "):", "");
  if (!name || !name.trim()) return;
  zimlink.createFile(name.trim()).then((abs) => {
    const rel = abs.replaceAll((state.cwd + "/").replaceAll("\\", "/"), "").replace(/^[/\\]/, "");
    markFileModified(rel); // track as new/untracked file
    loadTree().then(() => {
      const dirs = rel.split("/").slice(0, -1);
      if (dirs.length) state.expanded.add(dirs.join("/") + "/");
      openEditor(rel);
    });
  });
}

/* ================= workspace search in sidebar ================= */

const searchInput = $("search-input");
async function searchWorkspace() {
  const q = searchInput.value.trim();
  const resultsBox = $("search-results");
  const labelBox = $("search-results-label");
  resultsBox.innerHTML = "";
  
  if (!q) {
    labelBox.textContent = "";
    return;
  }
  
  labelBox.textContent = "Searching...";
  let matchesCount = 0;
  let fileMatches = 0;
  
  for (const path of state.tree) {
    if (path.endsWith("/")) continue; // skip dirs
    const content = await zimlink.readFile(path);
    if (!content) continue;
    const lines = content.split("\n");
    let hasMatch = false;
    
    lines.forEach((line, idx) => {
      if (line.toLowerCase().includes(q.toLowerCase())) {
        if (!hasMatch) {
          hasMatch = true;
          fileMatches++;
        }
        matchesCount++;
        
        const row = el("div", "search-match-row");
        row.innerHTML = `<span class="match-path">${esc(path)}:${idx + 1}</span>` +
          `<span class="match-text">${esc(line.trim())}</span>`;
        row.onclick = () => {
          openEditor(path);
          // Highlight and scroll to matched line in Monaco
          setTimeout(() => {
            if (state.editor) {
              state.editor.setPosition({ lineNumber: idx + 1, column: 1 });
              state.editor.revealLineInCenter(idx + 1);
            }
          }, 150);
        };
        resultsBox.appendChild(row);
      }
    });
  }
  
  labelBox.textContent = `${matchesCount} result(s) in ${fileMatches} files`;
}

/* ================= collapsible bottom panel & tab sheets ================= */

function toggleBottomPanel(forceShow) {
  const panel = $("bottom-panel");
  const btn = $("btn-toggle-panel");
  const isCollapsed = panel.classList.contains("collapsed");
  const show = forceShow !== undefined ? forceShow : isCollapsed;
  
  panel.classList.toggle("collapsed", !show);
  btn.classList.toggle("active", show);
  window.scrollTo(0, 0);
  if (show && state.activePanelTab === "terminal") {
    $("terminal-screen").focus({ preventScroll: true });
    void ensureTerminal();
  }
}

function selectPanelTab(tabId) {
  state.activePanelTab = tabId;
  document.querySelectorAll(".panel-tab").forEach(btn =>
    btn.classList.toggle("active", btn.dataset.tab === tabId));
    
  document.querySelectorAll(".panel-body .tab-content").forEach(pane =>
    pane.classList.toggle("hidden", pane.id !== "panel-" + tabId));
    
  toggleBottomPanel(true); // open bottom panel if switched tab
  
  if (tabId === "terminal") {
    void ensureTerminal();
  }
}

function appendToOutput(text) {
  const screen = $("output-screen");
  screen.textContent += "\r\n" + text;
  screen.scrollTop = screen.scrollHeight;
}

function clearPanelContent() {
  const tab = state.activePanelTab;
  if (tab === "terminal") {
    $("term-output-text").textContent = "";
  } else if (tab === "output") {
    $("output-screen").textContent = "";
  } else if (tab === "debug") {
    $("debug-screen").textContent = "";
    setDebugStatus("Debug session idle");
  } else if (tab === "agent-run") {
    $("bottom-agent-console").innerHTML = `<div class="dim">Agent console cleared.</div>`;
  }
}

/* ================= run & diagnostics (execute code) ================= */

function saveActiveFile() {
  if (state.activePath) {
    const model = monaco.editor.getModel(monaco.Uri.parse(state.activePath));
    if (model && model.getValue() !== state.fileCache.get(state.activePath)) { saveFile(); }
  }
}

function runActiveCode() {
  if (!state.activePath) { showToast("Open a file to run it.", "info"); return; }
  selectPanelTab("terminal");
  zimlink.runCode(state.activePath).then((r) => {
    if (!r || !r.ok) showToast((r && r.reason) || "Cannot run this file type.", "error");
  });
}

function debugActiveCode() {
  if (!state.activePath) { showToast("Open a file to debug it.", "info"); return; }
  selectPanelTab("debug");
  $("debug-screen").textContent = "";
  setDebugStatus("Starting debug session…");
  zimlink.debugRun(state.activePath).then((r) => {
    if (r && r.ok) { setDebugStatus("Running — press Stop to end"); }
    else { setDebugStatus(""); appendDebug(`[failed] ${(r && r.reason) || "unable to start"}\r\n`, "err"); }
  });
}

function stopDebug() {
  setDebugStatus("Debug session stopped");
  zimlink.debugKill();
  appendDebug("\r\n⚹ debug session terminated\r\n");
}

function setDebugStatus(text) {
  $("debug-status").textContent = text;
}

function appendDebug(text, stream) {
  const screen = $("debug-screen");
  const sep = screen.textContent && !screen.textContent.endsWith("\n") && !screen.textContent.endsWith("\r") ? "\r\n" : "";
  screen.textContent += sep + text;
  screen.scrollTop = screen.scrollHeight;
}

/* ================= interactive terminal streams ================= */

// Pipes keys and ANSI codes over Electron IPC to native CMD/Bash
const termScreen = $("terminal-screen");
let termRunning = false;
let termLaunching = false;
let termGotOutput = false;
let termForcedFlush = false;
let termReadyAt = 0;      // moment the freshly spawned shell is safe to type into
let termSpawnAt = 0;
let termBuffer = [];
let termFlushTimeout = null;

function appendToTerminal(text) {
  const box = $("term-output-text");
  box.textContent += text;
  termScreen.scrollTop = termScreen.scrollHeight;
}

// cmd.exe ignores stdin written while it is still printing its startup banner,
// so queued keys only get pushed once the shell had a moment to reach its prompt.
function flushTermBuffer() {
  if (!termRunning || !termBuffer.length) return;
  const gate = (termGotOutput || termForcedFlush) && Date.now() >= termReadyAt;
  if (!gate) {
    armTermFlushTimeout();
    return;
  }
  const keys = termBuffer.splice(0);
  for (const k of keys) zimlink.writeTerminal(k);
}

function armTermFlushTimeout() {
  if (termFlushTimeout) clearTimeout(termFlushTimeout);
  termFlushTimeout = setTimeout(() => {
    termForcedFlush = true;
    flushTermBuffer();
  }, Math.max(250, termReadyAt - Date.now()));
}

function termSend(key) {
  if (termRunning && termGotOutput && Date.now() >= termReadyAt) {
    zimlink.writeTerminal(key);
    return;
  }
  termBuffer.push(key);
  void ensureTerminal();
  flushTermBuffer();
}

async function ensureTerminal() {
  termScreen.focus({ preventScroll: true });
  if (termRunning) { flushTermBuffer(); return; }
  if (termLaunching) return;
  termLaunching = true;
  termSpawnAt = Date.now();
  appendToTerminal("\r\nStarting shell session…\r\n");
  try {
    const res = await zimlink.ensureTerminal();
    termRunning = !!res?.running;
    termPwd = res?.cwd || termPwd;
    renderTermLine();
    termReadyAt = termSpawnAt + 700;
    appendToTerminal(termRunning
      ? "\r\nShell ready in " + res.cwd + "\r\n"
      : "\r\nShell failed to start.\r\n");
  } catch (e) {
    termRunning = false;
    appendToTerminal("\r\nShell error: " + (e?.message || e) + "\r\n");
  }
  termLaunching = false;
  armTermFlushTimeout();
  flushTermBuffer();
}

termScreen.addEventListener("mousedown", () => {
  termScreen.focus({ preventScroll: true });
  void ensureTerminal();
});
// Local command-line echo: keystrokes mirror into the prompt row and the full
// entered line is sent to the shell on Enter. cmd over a pipe never echoes
// input, so without this nothing appeared while typing.
let termPwd = "";
let termLine = "";

function termPrompt() {
  return termPwd ? termPwd.replace(/\\/g, "/") + "> " : "> ";
}

function renderTermLine() {
  const pwdEl = document.getElementById("term-pwd-line");
  if (pwdEl) pwdEl.textContent = termPrompt() + termLine;
  termScreen.scrollTop = termScreen.scrollHeight;
}

function clearTerminalScreen() {
  document.getElementById("term-output-text").textContent = "";
  termScreen.scrollTop = 0;
}

function termKeyboard(e) {
  const key = e.key;
  if (!key) return;

  if (key === "Enter") {
    e.preventDefault();
    e.stopPropagation();
    // cmd echoes the prompt + command itself, so just clear and send the buffered
    // line; the local echo while typing makes input visible in real time.
    const line = termLine;
    termLine = "";
    renderTermLine();
    termSend(line + "\r\n");
  } else if (key === "Backspace") {
    e.preventDefault();
    e.stopPropagation();
    if (termLine.length) { termLine = termLine.slice(0, -1); renderTermLine(); }
  } else if (key === "Tab") {
    e.preventDefault();
    e.stopPropagation();
    termSend("\t");
  } else if (key === "ArrowUp") {
    e.preventDefault(); e.stopPropagation(); termSend("\x1b[A");
  } else if (key === "ArrowDown") {
    e.preventDefault(); e.stopPropagation(); termSend("\x1b[B");
  } else if (key === "ArrowLeft") {
    e.preventDefault(); e.stopPropagation(); termSend("\x1b[D");
  } else if (key === "ArrowRight") {
    e.preventDefault(); e.stopPropagation(); termSend("\x1b[C");
  } else if (key === "Escape") {
    // leave Escape to the app (menus, panels)
  } else if (e.ctrlKey && key.toLowerCase() === "c") {
    e.preventDefault(); e.stopPropagation();
    termLine = ""; renderTermLine();
    termSend("\x03");
  } else if (e.ctrlKey && key.toLowerCase() === "u") {
    e.preventDefault(); e.stopPropagation();
    termLine = ""; renderTermLine();
  } else if (e.ctrlKey && key.toLowerCase() === "l") {
    e.preventDefault(); e.stopPropagation();
    clearTerminalScreen();
  } else if (e.ctrlKey || e.metaKey || e.altKey) {
    // ignore other shortcuts so they reach the editor/app
  } else if (key.length === 1) {
    e.preventDefault();
    e.stopPropagation();
    termLine += key;
    renderTermLine();
  }
}

termScreen.addEventListener("keydown", termKeyboard);

// Fallback: route keys to the terminal whenever the Terminal tab is open and
// focus is not inside an editor/input, so typing works regardless of focus.
window.addEventListener("keydown", (e) => {
  if (state.activePanelTab !== "terminal") return;
  const panel = $("bottom-panel");
  if (!panel || panel.classList.contains("collapsed")) return;
  const ae = document.activeElement;
  const tag = ae ? (ae.tagName || "").toLowerCase() : "";
  if (ae && (tag === "input" || tag === "textarea" || ae.isContentEditable)) return;
  if (ae && ae.closest && ae.closest("#editor")) return;
  termKeyboard(e);
  if (e.defaultPrevented) e.stopImmediatePropagation();
});

// Capture and format incoming terminal buffer bytes
zimlink.onTerminalOutput((data) => {
  const box = $("term-output-text");
  
  // Strip cursor positioning escape codes, keeping format output clean and readable
  const clean = data.replace(/\x1b\[[0-9;]*[mK]/g, "");
  box.textContent += clean;
  
  // First real output means the shell finished booting — flush any buffered keys
  if (clean.trim()) { termGotOutput = true; flushTermBuffer(); }
  
  // Track shell lifecycle so next interaction can respawn it
  if (clean.includes("Terminal process closed")) termRunning = false;
  
  // Keep scrolling to the terminal bottom
  termScreen.scrollTop = termScreen.scrollHeight;
});

// Windowless debug process — stream real-time output and exit status
zimlink.onDebugOutput((data, stream) => {
  const screen = $("debug-screen");
  if (screen.textContent.includes("[failed]") && screen.textContent.endsWith("\r\n")) { /* keep header */ }
  screen.textContent += data;
  screen.scrollTop = screen.scrollHeight;
});
zimlink.onDebugExit((code) => {
  setDebugStatus(code === 0 ? "Session ended — exit code 0" : `Session ended — exit code ${code}`);
  appendDebug(`\r\n⚹ process exited with code ${code}\r\n`);
});

// Fallback: route keys to the terminal whenever the Terminal tab is open and
// focus is not inside an editor/input, so typing works regardless of focus.
window.addEventListener("keydown", (e) => {
  if (state.activePanelTab !== "terminal") return;
  const panel = $("bottom-panel");
  if (!panel || panel.classList.contains("collapsed")) return;
  const ae = document.activeElement;
  const tag = ae ? (ae.tagName || "").toLowerCase() : "";
  if (ae && (tag === "input" || tag === "textarea" || ae.isContentEditable)) return;
  if (ae && ae.closest && ae.closest("#editor")) return;
  termKeyboard(e);
  if (e.defaultPrevented) e.stopImmediatePropagation();
});

// Clicking anywhere in the panel focuses the terminal when it is the active tab
document.querySelector(".panel-body").addEventListener("mousedown", (e) => {
  if (state.activePanelTab !== "terminal") return;
  if (!e.target.closest("#terminal-screen")) termScreen.focus({ preventScroll: true });
});

/* ================= float toast notifications (VS Code style) ================= */

function showToast(message, type = "info") {
  const container = $("toast-container");
  const toast = el("div", "toast " + type);
  
  const top = el("div", "toast-top");
  const msg = el("span", "toast-msg", message);
  const close = el("span", "toast-close", "×");
  close.onclick = () => toast.remove();
  
  top.append(msg, close);
  toast.appendChild(top);
  
  // Add Go To Output button matching user screenshot
  if (type === "error" || message.includes("LSP")) {
    const actions = el("div", "toast-actions");
    const btn = el("button", "toast-btn primary", "Go to output");
    btn.onclick = () => {
      selectPanelTab("output");
      toast.remove();
    };
    actions.appendChild(btn);
    toast.appendChild(actions);
  }
  
  container.appendChild(toast);
  
  // Auto-expire after 6s
  setTimeout(() => {
    if (toast.parentElement) toast.remove();
  }, 6000);
}

/* ================= agent console (task timeline) ================= */

const consoleEl = () => $("console");
const bottomConsoleEl = () => $("bottom-agent-console");

const HISTORY_KEY = "zimlink-agent-history";

function persistConsole() {
  try {
    let html = consoleEl().innerHTML;
    if (html.length > 600000) html = html.slice(-600000);
    localStorage.setItem(HISTORY_KEY, html);
  } catch { /* storage full or unavailable */ }
}

function restoreConsole() {
  try {
    const html = localStorage.getItem(HISTORY_KEY);
    if (!html) return;
    const c = consoleEl();
    c.innerHTML = html;
    c.scrollTop = c.scrollHeight;
    const b = bottomConsoleEl();
    if (b.querySelector(".dim")) b.innerHTML = "";
    b.innerHTML = html;
    b.scrollTop = b.scrollHeight;
  } catch { /* ignore */ }
}

function appendToConsole(node) {
  const c = consoleEl();
  c.appendChild(node.cloneNode(true));
  c.scrollTop = c.scrollHeight;
  persistConsole();
  
  // Mirror to collapsible bottom agent panel as well!
  const b = bottomConsoleEl();
  if (b.querySelector(".dim")) b.innerHTML = "";
  b.appendChild(node);
  b.scrollTop = b.scrollHeight;
}

function startRun(taskText) {
  const run = el("div", "task-run");
  const head = el("div", "task-head");
  const dot = el("span", "task-dot running", "●");
  const text = el("div", "task-text", taskText);
  const time = el("span", "task-time", now());
  head.append(dot, text, time);
  const body = el("div", "task-body");
  run.append(head, body);
  appendToConsole(run);
  
  showToast(`Agent task started: "${taskText}"`, "success");
  
  return {
    run, head, body, dot, text, time,
    steps: new Map(),
    artifacts: new Map(),
    notes: 0,
  };
}

function endRun(run, status) {
  run.dot.className = "task-dot " + status;
  if (status === "done") {
    run.dot.textContent = "✓";
    showToast("Agent completed task successfully!", "success");
  } else if (status === "error") {
    run.dot.textContent = "✕";
    showToast("Agent execution failed — check logs", "error");
  }
}

function stepRow(run, op) {
  const row = el("div", "step pending");
  row.appendChild(el("span", "ico", "○"));
  row.appendChild(el("span", "step-path", op.path));
  row.appendChild(el("span", "step-state", op.op));
  return row;
}

function setStep(run, path, cls, stateLabel) {
  const row = run.steps.get(path);
  if (!row) return;
  row.className = "step " + cls;
  row.querySelector(".ico").textContent =
    cls === "done" ? "✓" : cls === "skipped" ? "–" : cls === "working" ? "◌" : "○";
  const s = row.querySelector(".step-state");
  if (stateLabel) s.textContent = stateLabel;
}

function taskNote(text) {
  appendToOutput(text); // mirror notes to bottom panel Output tab
  const run = state.currentRun;
  const n = el("div", "note", text);
  if (run) run.body.appendChild(n);
  else appendToConsole(n);
}

function taskStatus(text) {
  const run = state.currentRun;
  if (!run) return;
  const n = el("div", "note dim", text);
  n.style.borderColor = "transparent";
  n.style.background = "transparent";
  n.style.fontSize = "11px";
  run.body.appendChild(n);
}

/* artifact (diff review) */
function artifactFor(evt) {
  const card = el("div", "artifact");
  card.dataset.file = evt.file;

  const head = el("div", "artifact-head");
  const file = el("div", "artifact-file", (evt.existed ? "~ " : "+ ") + evt.file);
  const tag = el("div", "artifact-tag " + (evt.existed ? "tag-mod" : "tag-new"),
    evt.existed ? "MODIFIED" : "NEW");
  head.append(file, tag);
  card.appendChild(head);

  const body = el("pre", "artifact-body");
  for (const line of evt.diff.split("\n")) {
    const row = el("div");
    if (line.startsWith("+")) row.className = "add";
    else if (line.startsWith("-")) row.className = "del";
    else if (/^\d+ (added|removed)/.test(line.trim())) row.className = "stat";
    else row.className = "ctx";
    row.textContent = line;
    body.appendChild(row);
  }
  card.appendChild(body);

  const actions = el("div", "artifact-actions");
  if ($("auto-apply").checked) {
    actions.appendChild(el("span", "tag", "auto-applying…"));
  } else {
    const ok = el("button", "ok", "Apply");
    ok.onclick = () => { card.classList.add("applied"); actions.replaceChildren(el("span", "tag", "applied ✓")); zimlink.respond(true); };
    const no = el("button", "no", "Skip");
    no.onclick = () => { card.classList.add("skipped"); actions.replaceChildren(el("span", "tag", "skipped")); zimlink.respond(false); };
    actions.append(ok, no);
  }
  card.appendChild(actions);
  return card;
}

function changesCount() {
  return document.querySelectorAll("#console .artifact").length;
}
function updateChangesCount() {
  $("changes-count").textContent = String(changesCount());
}

/* ================= events ================= */

function onEngineEvent(evt) {
  switch (evt.kind) {
    case "plan": {
      const run = state.currentRun || startRun("");
      for (const op of evt.ops) {
        const row = stepRow(run, op);
        run.body.appendChild(row);
        run.steps.set(op.path, row);
      }
      taskStatus(evt.isFollowUp ? "follow-up plan" : "plan · plotting changes…");
      updateChangesCount();
      break;
    }
    case "generating": {
      const run = state.currentRun;
      if (run && run.steps.has(evt.file)) setStep(run, evt.file, "working", "writing…");
      taskStatus(`[${evt.index}/${evt.total}] generating ${evt.file}…`);
      break;
    }
    case "propose": {
      state.pending = evt;
      const run = state.currentRun;
      if (run) {
        if (run.steps.has(evt.file)) setStep(run, evt.file, "working", "review…");
        const card = artifactFor(evt);
        run.artifacts.set(evt.file, card);
        run.body.appendChild(card);
        updateChangesCount();
      }
      break;
    }
    case "written": {
      state.pending = null;
      const run = state.currentRun;
      if (run) {
        if (run.steps.has(evt.file)) setStep(run, evt.file, "done", "written");
        const art = run.artifacts.get(evt.file);
        if (art) {
          art.classList.add("applied");
          const t = art.querySelector(".artifact-tag");
          if (t) t.textContent = "APPLIED";
          const act = art.querySelector(".artifact-actions");
          if (act) act.replaceChildren(el("span", "tag", "applied ✓"));
        }
      }
      markFileModified(evt.file); // Mark tab and Explorer view with modified color / state!
      loadTree();
      reloadOpenedFile(evt.file);
      break;
    }
    case "skip": {
      state.pending = null;
      const run = state.currentRun;
      if (run) {
        if (run.steps.has(evt.file)) setStep(run, evt.file, "skipped", evt.reason);
        const art = run.artifacts.get(evt.file);
        if (art) art.classList.add("skipped");
      }
      break;
    }
    case "message":
      if (evt.text) taskNote(evt.text);
      break;
    case "done":
      if (state.currentRun) endRun(state.currentRun, "done");
      taskNote(`Done — ${evt.created} created, ${evt.modified} modified.`);
      setBusy(false);
      updateChangesCount();
      state.currentRun = null;
      pumpQueue();
      break;
    case "error":
      if (state.currentRun) endRun(state.currentRun, "error");
      taskNote(evt.message);
      setBusy(false);
      state.currentRun = null;
      pumpQueue();
      break;
  }
}

/* ================= fire-and-forget queue ================= */

const taskInput = $("input");

function sendTask(text) {
  if (!text || !text.trim()) return;
  taskInput.value = "";
  fit(taskInput);
  taskInput.focus();

  if (state.busy) {
    state.queue.push(text.trim());
    updateQueue();
    return;
  }
  dispatchTask(text.trim());
}

function dispatchTask(text) {
  state.currentRun = startRun(text);
  setBusy(true);
  if ($("model").value.trim() !== state.model) {
    state.model = $("model").value.trim();
    zimlink.setConfig({ model: state.model });
    $("status-model").textContent = state.model;
  }
  switchView("agent");
  zimlink.startTask(text, $("auto-apply").checked);
}

function pumpQueue() {
  if (state.queue.length && !state.busy) {
    dispatchTask(state.queue.shift());
    updateQueue();
  }
}

function updateQueue() {
  const n = state.queue.length;
  const q = $("queue-count");
  if (n) { q.textContent = n + " queued"; q.classList.remove("hidden"); }
  else q.classList.add("hidden");
}

/* ================= views / activity bar ================= */

function toggleAgentPane() {
  const pane = $("agent-pane");
  const showing = !pane.classList.contains("hidden");
  pane.classList.toggle("hidden", showing);
  document.querySelectorAll(".activity").forEach((b) =>
    b.classList.toggle("active", !showing && b.dataset.view === "agent"));
  if (showing) return;
  taskInput.focus();
}

function switchView(name) {
  if (name === "agent") {
    toggleAgentPane();
    return;
  }
  state.activeSidebarView = name;
  document.querySelectorAll("#sidebar .view").forEach((v) => v.classList.add("hidden"));
  $("view-" + name).classList.remove("hidden");
  document.querySelectorAll(".activity").forEach((b) =>
    b.classList.toggle("active", b.dataset.view === name));
  
  // Toggle sidebar expansion if previously collapsed
  $("sidebar").classList.remove("collapsed");
  $("btn-toggle-sidebar").classList.add("active");
  
  if (name === "agent") taskInput.focus();
}

function toggleSidebar() {
  const isCollapsed = $("sidebar").classList.toggle("collapsed");
  $("btn-toggle-sidebar").classList.toggle("active", !isCollapsed);
}

function setBusy(b) {
  state.busy = b;
  const pill = $("status-runtime");
  pill.textContent = b ? "running" : "idle";
  pill.classList.toggle("running", b);
  $("btn-stop").disabled = !b;
}

function stopAgent() {
  zimlink.stop();
  state.queue = [];
  updateQueue();
  if (state.pending) { zimlink.respond(false); state.pending = null; }
  setBusy(false);
  if (state.currentRun) { endRun(state.currentRun, "error"); state.currentRun = null; }
}

/* ================= composer + slash commands ================= */

const SLASH = [
  { name: "/goal", desc: "Run to completion — auto-apply all changes", run: () => { $("auto-apply").checked = true; syncAutoApply(); addUserPill("/goal · auto-apply on"); } },
  { name: "/ask", desc: "Review each change before applying", run: () => { $("auto-apply").checked = false; syncAutoApply(); addUserPill("/ask · review mode"); } },
  { name: "/changes", desc: "Show only file changes (artifact review)", run: () => setChangesOnly(true) },
  { name: "/console", desc: "Show full agent console timeline", run: () => setChangesOnly(false) },
  { name: "/help", desc: "Show keyboard shortcuts", run: () => openHelp() },
];

function updateSlashMenu() {
  const v = taskInput.value;
  const menu = $("slash-menu");
  if (!v.startsWith("/") || v.indexOf(" ") !== -1) {
    menu.classList.add("hidden");
    menu.innerHTML = "";
    return;
  }
  const matches = SLASH.filter((s) => s.name.startsWith(v.toLowerCase()));
  menu.classList.toggle("hidden", matches.length === 0);
  menu.innerHTML = "";
  matches.forEach((s, i) => {
    const item = el("div", "slash-item" + (i === 0 ? " selected" : ""));
    item.appendChild(el("code", "", s.name));
    item.appendChild(el("span", "dim", s.desc));
    item.onclick = () => { taskInput.value = ""; fit(taskInput); s.run(); };
    menu.appendChild(item);
  });
}

function addUserPill(text) {
  const container = state.currentRun ? state.currentRun.body : consoleEl();
  container.appendChild(el("div", "note", text));
}

function syncAutoApply() {
  $("auto-apply-2").checked = $("auto-apply").checked;
}

/* ================= changes / console view toggle ================= */

function setChangesOnly(on) {
  state.changesOnly = on;
  $("console").classList.toggle("show-changes", on);
  $("chip-changes").classList.toggle("active", on);
  $("chip-console").classList.toggle("active", !on);
}

/* ================= command palette ================= */

let paletteItems = [];
let paletteIndex = 0;
let paletteMode = "commands";

function openPalette(mode) {
  if ($("palette").classList.contains("hidden")) $("palette").classList.remove("hidden");
  paletteMode = mode || "commands";
  $("palette-mode").textContent = paletteMode === "files" ? "Open file" : "Command";
  $("palette-input").placeholder =
    paletteMode === "files" ? "Search files…" : "Type a command…";
  const inp = $("palette-input");
  inp.value = "";
  renderPalette("");
  inp.focus();
}

function closePalette() { $("palette").classList.add("hidden"); }

function paletteSource() {
  if (paletteMode === "files") return fileItems();
  return commandItems();
}

function fileItems() {
  return state.tree
    .filter((p) => !p.endsWith("/"))
    .map((p) => ({ label: p, cat: "file", action: () => openEditor(p) }));
}

function commandItems() {
  const items = [
    { label: "Open Folder…", cat: "workspace", action: () => openFolder() },
    { label: "New File…", cat: "workspace", action: newFile },
    { label: "Save File", cat: "editor", kbd: "Ctrl+S", action: saveFile },
    { label: "Close Current Tab", cat: "editor", kbd: "Ctrl+W", action: () => state.activePath && closeTab(state.activePath) },
    { label: "Next Tab", cat: "editor", kbd: "Ctrl+Tab", action: () => cycleTab(1) },
    { label: "Previous Tab", cat: "editor", kbd: "Ctrl+Shift+Tab", action: () => cycleTab(-1) },
    { label: "Switch to Explorer", cat: "view", kbd: "Ctrl+Shift+E", action: () => switchView("explorer") },
    { label: "Switch to Search Workspace", cat: "view", action: () => switchView("search") },
    { label: "Switch to Source Control (Git)", cat: "view", action: () => switchView("git") },
    { label: "Switch to Agent Panel", cat: "view", kbd: "Ctrl+L", action: () => switchView("agent") },
    { label: "Switch to Settings", cat: "view", action: () => switchView("settings") },
    { label: "Toggle Sidebar", cat: "view", kbd: "Ctrl+B", action: toggleSidebar },
    { label: "Toggle Bottom Panel", cat: "view", kbd: "Ctrl+`", action: () => toggleBottomPanel() },
    { label: "Toggle Dark / Light Theme", cat: "view", kbd: "Ctrl+Shift+T", action: toggleTheme },
    { label: "Toggle Auto-apply", cat: "agent", action: () => { $("auto-apply").checked = !$("auto-apply").checked; syncAutoApply(); } },
    { label: "Focus Agent Input", cat: "agent", kbd: "Ctrl+I", action: () => taskInput.focus() },
    { label: "Show Changes / Artifacts", cat: "agent", action: () => setChangesOnly(true) },
    { label: "Show Console Timeline", cat: "agent", action: () => setChangesOnly(false) },
    { label: "Show Keyboard Shortcuts", cat: "help", kbd: "Ctrl+Shift+/", action: openHelp },
  ];
  if (state.pending) {
    items.unshift({ label: "Approve Pending Change", cat: "review", kbd: "Ctrl+K", action: () => approvePending() });
    items.unshift({ label: "Skip Pending Change", cat: "review", kbd: "S", action: () => skipPending() });
  }
  return items;
}

function renderPalette(q) {
  const list = $("palette-list");
  list.innerHTML = "";
  const ql = q.toLowerCase();
  const src = paletteSource();
  const matches = src.filter((it) => {
    if (!ql) return true;
    return (it.label + " " + (it.cat || "")).toLowerCase().includes(ql);
  });
  paletteItems = matches.slice(0, 50);
  paletteIndex = 0;
  paletteItems.forEach((it, i) => {
    const row = el("div", "pal-item" + (i === paletteIndex ? " selected" : ""));
    row.appendChild(el("span", "", it.label));
    row.appendChild(el("span", "pal-cat", it.cat || ""));
    row.appendChild(el("span", "pal-kbd", it.kbd || ""));
    row.onclick = () => runPaletteAction(it);
    list.appendChild(row);
  });
}

function runPaletteAction(item) {
  closePalette();
  item.action();
}

function selectPalette(delta) {
  paletteIndex = (paletteIndex + delta + paletteItems.length) % paletteItems.length;
  const rows = document.querySelectorAll("#palette-list .pal-item");
  rows.forEach((r, i) => r.classList.toggle("selected", i === paletteIndex));
  rows[paletteIndex]?.scrollIntoView({ block: "nearest" });
}

function approvePending() {
  if (!state.pending) return;
  state.pending = null;
  zimlink.respond(true);
}
function skipPending() {
  if (!state.pending) return;
  state.pending = null;
  zimlink.respond(false);
}

/* ================= help ================= */

function openHelp() { $("help-overlay").classList.remove("hidden"); }
function closeHelp() { $("help-overlay").classList.add("hidden"); }

/* ================= actions ================= */

function openFolder() {
  zimlink.openFolder().then((res) => {
    if (!res) return;
    state.cwd = res.cwd;
    state.tree = res.tree;
    state.expanded.clear();
    state.queue = [];
    state.newFiles.clear();
    state.modifiedFiles.clear();
    updateQueue();
    setChangesOnly(false);
    clearTabs();
    renderTree();
    refreshGitStatus();
    showWorkspaceUi(res.cwd, res.isIdeRoot);
    $("status-cwd").textContent = res.cwd;
    consoleEl().innerHTML = "";
    taskNote("Folder opened: " + res.cwd);
    showToast(`Opened folder: ${res.cwd}`, "success");
    
    // Clear terminal screen and prompt working dir
    $("term-output-text").textContent += `\r\n\r\nFolder changed: cd "${res.cwd}"\r\n`;
    termPwd = res.cwd;
    renderTermLine();
    termRunning = false;
  });
}

function updateTabCount() {
  const n = state.openFiles.length;
  $("branch-name").textContent = `main* (${n} open)`;
}

/* ================= keyboard ================= */

const isMac = navigator.platform.toLowerCase().includes("mac");
const mod = (e) => (isMac ? e.metaKey : e.ctrlKey);

function handleKeys(e) {
  if (!$("palette").classList.contains("hidden")) {
    if (e.key === "Escape") closePalette();
    else if (e.key === "ArrowDown") { e.preventDefault(); selectPalette(1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); selectPalette(-1); }
    else if (e.key === "Enter") { e.preventDefault(); paletteItems[paletteIndex] && runPaletteAction(paletteItems[paletteIndex]); }
    else if (mod(e) && e.key.toLowerCase() === "p") closePalette();
    return;
  }
  if (!$("help-overlay").classList.contains("hidden")) {
    if (e.key === "Escape") closeHelp();
    return;
  }
  if (!mod(e)) return;

  const k = e.key.toLowerCase();
  if (k === "p") { e.preventDefault(); openPalette(e.shiftKey ? "commands" : "files"); }
  else if (k === "e" && e.shiftKey) { e.preventDefault(); switchView("explorer"); }
  else if (k === "l") { e.preventDefault(); switchView("agent"); }
  else if (k === "b") { e.preventDefault(); toggleSidebar(); }
  else if (k === "w") { e.preventDefault(); if (state.activePath) closeTab(state.activePath); }
  else if (k === "tab") { e.preventDefault(); cycleTab(e.shiftKey ? -1 : 1); }
  else if (k === "i") { e.preventDefault(); taskInput.focus(); }
  else if (k === "s") { e.preventDefault(); saveFile(); }
  else if (k === "k") { e.preventDefault(); approvePending(); }
  else if (k === "`" || k === "escape") { e.preventDefault(); toggleBottomPanel(); }
  else if (k === "t" && e.shiftKey) { e.preventDefault(); toggleTheme(); }
  else if (k === "/" && e.shiftKey) { e.preventDefault(); openHelp(); }
}

/* ================= top menu bar (VS Code style) ================= */

const navHistory = [];
let navIndex = -1;
function navPush(path) {
  navHistory.splice(navIndex + 1);
  navHistory.push(path);
  navIndex = navHistory.length - 1;
}
function navStep(delta) {
  const target = navIndex + delta;
  if (target < 0 || target >= navHistory.length) return;
  navIndex = target;
  openEditor(navHistory[navIndex]);
}

function triggerEditorAction(cmd) {
  if (state.editor) state.editor.trigger("menu", cmd, null);
  else showToast("No editor open", "error");
}

function saveAllFiles() {
  for (const path of state.openFiles) {
    const model = state.models.get(path);
    if (!model) continue;
    zimlink.saveFile(path, model.getValue()).then(() => {
      state.saved[path] = model.getValue();
      setDirty(path, false);
    });
  }
  taskNote("Saved all files.");
}

function runTaskFromMenu() {
  if (taskInput.value.trim()) dispatchTask(taskInput.value.trim());
  else { switchView("agent"); taskInput.focus(); }
}

function showPanelFromMenu(tabId) {
  toggleBottomPanel(true);
  selectPanelTab(tabId);
}

const MENUS = {
  file: [
    { label: "New File", accel: "Ctrl+N", run: () => newFile() },
    { label: "Open Folder…", accel: "Ctrl+K Ctrl+O", run: () => openFolder() },
    { sep: true },
    { label: "Save", accel: "Ctrl+S", run: () => saveFile() },
    { label: "Save All", run: () => saveAllFiles() },
    { sep: true },
    { label: "Close Tab", accel: "Ctrl+W", run: () => state.activePath && closeTab(state.activePath) },
    { label: "Close All Tabs", run: () => clearTabs() },
    { sep: true },
    { label: "Sign Out…", run: () => signOut(), danger: true },
  ],
  edit: [
    { label: "Undo", accel: "Ctrl+Z", run: () => triggerEditorAction("undo") },
    { label: "Redo", accel: "Ctrl+Y", run: () => triggerEditorAction("redo") },
    { sep: true },
    { label: "Cut", run: () => triggerEditorAction("editor.action.clipboardCutAction") },
    { label: "Copy", run: () => triggerEditorAction("editor.action.clipboardCopyAction") },
    { label: "Paste", run: () => triggerEditorAction("editor.action.clipboardPasteAction") },
    { sep: true },
    { label: "Find", accel: "Ctrl+F", run: () => triggerEditorAction("actions.find") },
    { label: "Select All", accel: "Ctrl+A", run: () => triggerEditorAction("editor.action.selectAll") },
  ],
  selection: [
    { label: "Select All", run: () => triggerEditorAction("editor.action.selectAll") },
    { label: "Expand Selection", run: () => triggerEditorAction("editor.action.smartSelect.expand") },
    { label: "Shrink Selection", run: () => triggerEditorAction("editor.action.smartSelect.shrink") },
    { sep: true },
    { label: "Go to Line…", run: () => triggerEditorAction("editor.action.goToLine") },
  ],
  view: [
    { label: "Command Palette…", accel: "Ctrl+Shift+P", run: () => openPalette("commands") },
    { label: "Quick Open…", accel: "Ctrl+P", run: () => openPalette("files") },
    { sep: true },
    { label: "Explorer", accel: "Ctrl+Shift+E", run: () => switchView("explorer") },
    { label: "Search", run: () => switchView("search") },
    { label: "Source Control", run: () => switchView("git") },
    { label: "Agent", run: () => switchView("agent") },
    { label: "Settings", run: () => switchView("settings") },
    { sep: true },
    { label: "Toggle Side Bar", accel: "Ctrl+B", run: () => toggleSidebar() },
    { label: "Toggle Panel", accel: "Ctrl+`", run: () => toggleBottomPanel() },
    { label: "Toggle Theme", accel: "Ctrl+Shift+T", run: () => toggleTheme() },
    { sep: true },
    { label: "Problems", run: () => showPanelFromMenu("problems") },
    { label: "Output", run: () => showPanelFromMenu("output") },
    { label: "Terminal", run: () => showPanelFromMenu("terminal") },
    { label: "Agent Console", run: () => showPanelFromMenu("agent") },
  ],
  go: [
    { label: "Quick Open…", run: () => openPalette("files") },
    { sep: true },
    { label: "Back", accel: "Alt+ArrowLeft", run: () => navStep(-1) },
    { label: "Forward", accel: "Alt+ArrowRight", run: () => navStep(1) },
  ],
  run: [
    { label: "Run Code", accel: "Ctrl+F5", run: () => { saveActiveFile(); runActiveCode(); } },
    { label: "Debug Code", accel: "F5", run: () => { saveActiveFile(); debugActiveCode(); } },
    { label: "Stop Debug", run: () => stopDebug() },
    { sep: true },
    { label: "Run Task", accel: "Ctrl+Enter", run: () => runTaskFromMenu() },
    { label: "Stop", run: () => stopAgent() },
    { sep: true },
    { label: "Approve Pending", accel: "Ctrl+K", run: () => approvePending() },
    { label: "Skip Pending", run: () => skipPending() },
  ],
  terminal: [
    { label: "New Terminal", run: () => showPanelFromMenu("terminal") },
    { label: "Switch to Agent Console", run: () => showPanelFromMenu("agent") },
    { label: "Clear Terminal", run: () => clearPanelContent() },
  ],
  help: [
    { label: "Keyboard Shortcuts", accel: "Ctrl+Shift+/", run: () => openHelp() },
    { sep: true },
    { label: "About ZimLink", run: () => showToast("ZimLink IDE 0.1.0 — AI coding assistant (Electron build)", "info") },
  ],
};

const menuDrop = $("menu-drop");
function renderMenu(name, anchor) {
  const items = MENUS[name];
  if (!items) return;
  menuDrop.innerHTML = "";
  for (const it of items) {
    if (it.sep) {
      const s = el("div", "m-sep");
      menuDrop.appendChild(s);
      continue;
    }
    const row = el("div", "m-item" + (it.danger ? " danger" : ""));
    const lbl = el("span", "m-label", it.label);
    row.appendChild(lbl);
    if (it.accel) {
      const a = el("span", "m-accel", it.accel);
      row.appendChild(a);
    }
    row.onclick = (e) => {
      e.stopPropagation();
      closeMenus();
      it.run();
    };
    menuDrop.appendChild(row);
  }
  const rect = anchor.getBoundingClientRect();
  menuDrop.style.left = rect.left + "px";
  menuDrop.classList.remove("hidden");
}

function closeMenus() {
  menuDrop.classList.add("hidden");
  document.querySelectorAll(".menu-item.open").forEach((m) => m.classList.remove("open"));
}

function setupMenus() {
  let openName = null;
  const items = Array.from(document.querySelectorAll("#menu-bar .menu-item"));
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (openName && openName !== item.dataset.menu) {
        openName = item.dataset.menu;
        renderMenu(openName, item);
        document.querySelectorAll("#menu-bar .menu-item").forEach((m) => m.classList.toggle("open", m.dataset.menu === openName));
      }
    });
    item.addEventListener("click", () => {
      const isOpen = !menuDrop.classList.contains("hidden") && openName === item.dataset.menu;
      if (isOpen) closeMenus();
      else {
        openName = item.dataset.menu;
        renderMenu(openName, item);
        document.querySelectorAll("#menu-bar .menu-item").forEach((m) => m.classList.toggle("open", m === item));
      }
    });
  });
}

/* ================= boot ================= */

let providerList = [];
let providerCurrent = { providerId: "openai", baseUrl: "", model: "", apiKey: "" };
let providerDirtyModel = false;
let providerDirtyBase = false;

function populateProviderSelect() {
  const sel = $("provider-select");
  sel.innerHTML = "";
  for (const p of providerList) {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.name;
    sel.appendChild(opt);
  }
  sel.value = providerCurrent.providerId || "openai";
}

function syncProviderForm() {
  $("provider-select").value = providerCurrent.providerId || "openai";
  $("provider-baseurl").value = providerCurrent.baseUrl;
  $("provider-model").value = providerCurrent.model;
  const note = providerList.find((p) => p.id === (providerCurrent.providerId || "openai"));
  $("provider-note").textContent = note ? note.note : "";
  $("provider-state").textContent = providerCurrent.apiKey
    ? "API key saved."
    : (note && note.needsKey ? "This provider needs an API key to run tasks." : "No key set — this provider may work keyless.");
}

async function loadProviders() {
  try {
    const data = await zimlink.providersList();
    providerList = data.list || [];
    providerCurrent = data.current || providerCurrent;
    populateProviderSelect();
    syncProviderForm();
  } catch {
    /* provider UI unavailable */
  }
}

async function saveProviderForm() {
  const providerId = $("provider-select").value || "openai";
  const baseUrl = $("provider-baseurl").value.trim();
  const model = $("provider-model").value.trim();
  const key = $("provider-key").value.trim();
  const res = await zimlink.providersSave({
    providerId,
    ...(baseUrl ? { baseUrl } : {}),
    ...(model ? { model } : {}),
    ...(key ? { apiKey: key } : { apiKey: null }),
  });
  if (res?.ok) {
    providerCurrent = { providerId: res.providerId, baseUrl: res.baseUrl, model: res.model, apiKey: res.hasKey ? "saved" : "" };
    providerDirtyModel = false;
    providerDirtyBase = false;
    $("provider-key").value = "";
    state.model = res.model;
    $("status-model").textContent = res.model || "unknown model";
    const provider = providerList.find((p) => p.id === res.providerId);
    taskNote("Provider set: " + (provider ? provider.name : res.providerId) + " · " + res.model);
    switchView("agent");
  } else {
    taskNote("Failed to save provider: " + (res?.error || "unknown error"));
  }
  return res;
}

function boot() {
  applyTheme(currentTheme());
  restoreConsole();
  zimlink.onEvent(onEngineEvent);
  loadProviders();
  zimlink.getInfo().then((info) => {
    state.info = info;
    state.user = info.user ?? null;
    state.cwd = info.cwd;
    state.model = info.model;
    $("model").value = info.model;
    $("key-state").textContent = info.hasKey
      ? "API key ✓ · " + (info.model || "unknown model")
      : "No API key configured — add one in Settings → AI Provider";
    $("status-cwd").textContent = info.cwd;
    $("status-model").textContent = info.model || "unknown model";
    showWorkspaceUi(info.cwd, info.isIdeRoot);
    termPwd = info.cwd || "";
    renderTermLine();
    if (!info.hasKey) taskInput.placeholder = "Add an API key in Settings → AI Provider to run tasks.";
    return zimlink.listTree();
  }).then((tree) => {
    state.tree = tree;
    renderTree();
    if (tree.length === 0 && state.cwd && !state.info.isIdeRoot) taskNote("Empty workspace — type a task to get started.");
    refreshAccount();
    void refreshAuthUI();
    if (state.user) {
      taskNote("Signed in as " + state.user + ".");
    } else {
      showLanding("welcome");
    }
    
    // Show mock LSP status popup matching user screenshot!
    setTimeout(() => {
      showToast("lsp-ai client: couldn't create connection to server. Source: LSP-AI", "error");
      $("problems-count").textContent = "1";
      $("lbl-errors").textContent = "1";
      $("problems-list").innerHTML = `<div style="color:var(--red);font-family:var(--mono);padding:4px 0;">[Error] lsp-ai client: couldn't create connection to server. (LSP-AI)</div>`;
    }, 1800);
    
  }).catch((err) => taskNote(String(err)));

  // Setup click and focus handlers for layout elements
  $("btn-toggle-sidebar").onclick = toggleSidebar;
  $("btn-toggle-panel").onclick = () => toggleBottomPanel();
  $("btn-close-panel").onclick = () => toggleBottomPanel(false);
  $("btn-clear-panel").onclick = clearPanelContent;
  $("btn-debug-stop").onclick = stopDebug;
  
  // Wire Bottom Panel Tab buttons
  document.querySelectorAll(".panel-tab").forEach(btn => {
    btn.onclick = () => selectPanelTab(btn.dataset.tab);
  });

  $("btn-open-empty").onclick = openFolder;
  $("btn-open-settings").onclick = openFolder;
  $("btn-shortcuts").onclick = openHelp;
  $("btn-new").onclick = newFile;
  $("btn-collapse").onclick = () => { state.expanded.clear(); renderTree(); };
  $("btn-help").onclick = openHelp;
  $("help-close").onclick = closeHelp;
  $("w-btn-folder").onclick = openFolder;
  $("w-btn-newfile").onclick = newFile;
  $("w-btn-agent").onclick = () => { switchView("agent"); taskInput.focus(); };
  $("w-btn-help").onclick = openHelp;
  $("btn-stop").onclick = stopAgent;
  $("btn-edit-profile").onclick = () => showLanding("settings");
  $("btn-signout").onclick = signOut;
  $("btn-gh").onclick = startGitHubSignIn;
  $("btn-google").onclick = startGoogleSignIn;
  $("btn-gh-save").onclick = saveGhConfig;
  $("auth-modal").addEventListener("click", (e) => { if (e.target === $("auth-modal")) hideAuthModal(); });

  $("theme-dark").onclick = () => applyTheme("dark");
  $("theme-light").onclick = () => applyTheme("light");
  $("provider-select").addEventListener("change", () => {
    const p = providerList.find((x) => x.id === $("provider-select").value);
    if (p) {
      if (!providerDirtyBase) $("provider-baseurl").value = p.baseUrl;
      if (!providerDirtyModel) $("provider-model").value = p.defaultModel;
      $("provider-note").textContent = p.note;
      $("provider-state").textContent = p.needsKey
        ? "This provider needs an API key to run tasks."
        : "No key set — may work keyless.";
    }
  });
  $("provider-baseurl").addEventListener("input", () => { providerDirtyBase = true; });
  $("provider-model").addEventListener("input", () => { providerDirtyModel = true; });
  $("btn-provider-save").onclick = () => void saveProviderForm();
  $("chip-changes").onclick = () => setChangesOnly(true);
  $("chip-console").onclick = () => setChangesOnly(false);
  $("auto-apply").addEventListener("change", syncAutoApply);
  $("auto-apply-2").addEventListener("change", () => { $("auto-apply").checked = $("auto-apply-2").checked; });
  
  // Source Control Commit button
  $("btn-commit").onclick = handleCommit;
  $("commit-message").addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleCommit();
    }
  });

  // Sidebar Workspace Search
  searchInput.addEventListener("input", searchWorkspace);
  $("btn-clear-search").onclick = () => {
    searchInput.value = "";
    searchWorkspace();
    searchInput.focus();
  };

  document.querySelectorAll(".activity").forEach((b) =>
    b.addEventListener("click", () => switchView(b.dataset.view)));

  setupMenus();
  $("btn-nav-back").onclick = () => navStep(-1);
  $("btn-nav-forward").onclick = () => navStep(1);
  $("search-pill").addEventListener("click", () => openPalette("commands"));
  $("profile-btn").addEventListener("click", () => {
    const open = !$("profile-drop").classList.contains("hidden");
    closeProfileMenu();
    closeMenus();
    if (!open) showProfileMenu();
  });

  $("palette-input").addEventListener("input", (e) => renderPalette(e.target.value));

  taskInput.addEventListener("input", () => { fit(taskInput); updateSlashMenu(); });
  taskInput.addEventListener("keydown", (e) => {
    const menuOpen = !$("slash-menu").classList.contains("hidden");
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (menuOpen) {
        const sel = document.querySelector("#slash-menu .slash-item.selected");
        if (sel) sel.click();
        else updateSlashMenu();
      } else {
        sendTask(taskInput.value);
      }
    } else if (e.key === "ArrowDown" && menuOpen) {
      e.preventDefault();
      const items = document.querySelectorAll("#slash-menu .slash-item");
      if (items.length) { items[0].classList.add("selected"); items[0].click(); }
    }
  });

  $("model").addEventListener("change", () => { state.model = $("model").value.trim(); $("status-model").textContent = state.model; });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menuDrop.classList.contains("hidden")) { closeMenus(); e.preventDefault(); return; }
    if (e.key === "Escape" && !$("profile-drop").classList.contains("hidden")) { closeProfileMenu(); e.preventDefault(); return; }
    if (state.pending && !taskInput.matches(":focus") && !e.metaKey && !e.ctrlKey) {
      if (e.key.toLowerCase() === "a") { e.preventDefault(); approvePending(); }
      else if (e.key.toLowerCase() === "s") { e.preventDefault(); skipPending(); }
    }
    if (e.key === "F5") {
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) { saveActiveFile(); runActiveCode(); }
      else { saveActiveFile(); debugActiveCode(); }
      return;
    }
    handleKeys(e);
  });

  window.addEventListener("click", (e) => {
    if (e.target === $("palette")) closePalette();
    if (e.target === $("help-overlay")) closeHelp();
    if (!e.target.closest("#menu-drop") && !e.target.closest(".menu-item")) closeMenus();
    if (!e.target.closest("#profile-drop") && !e.target.closest("#profile-btn")) closeProfileMenu();
  });

  self.MonacoEnvironment = {
    workerFactory(moduleId, label) {
      const base = "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs/";
      const files = {
        json: "language/json/json.worker.js",
        css: "language/css/css.worker.js",
        scss: "language/css/css.worker.js",
        less: "language/css/css.worker.js",
        html: "language/html/html.worker.js",
        handlebars: "language/html/html.worker.js",
        razor: "language/html/html.worker.js",
        typescript: "language/typescript/ts.worker.js",
        javascript: "language/typescript/ts.worker.js",
        default: "editor/editor.worker.js",
      };
      return new Worker(base + (files[label] || files.default), { name: label });
    },
  };
  require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs" } });
  require(["vs/editor/editor.main"], () => {
    try {
      const jsDefaults = monaco.languages.typescript.javascriptDefaults;
      jsDefaults.setDiagnosticsOptions({ noSemanticValidation: false, noSyntaxValidation: false });
      jsDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2020,
        allowNonTsExtensions: true,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        noEmit: true,
        esModuleInterop: true,
        allowJs: true,
        checkJs: true,
        typeRoots: ["node_modules/@types"]
      });
      const tsDefaults = monaco.languages.typescript.typescriptDefaults;
      tsDefaults.setDiagnosticsOptions({ noSemanticValidation: false, noSyntaxValidation: false });
      tsDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2020,
        allowNonTsExtensions: true,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        noEmit: true,
        esModuleInterop: true,
        allowJs: true,
        checkJs: true,
        typeRoots: ["node_modules/@types"]
      });
    } catch {}
    state.editor = monaco.editor.create($("editor"), {
      theme: currentTheme() === "light" ? "vs" : "vs-dark",
      fontFamily: "'JetBrains Mono', Consolas, monospace",
      fontSize: 13,
      automaticLayout: true,
      minimap: { enabled: true },
      scrollBeyondLastLine: false,
      wordWrap: "off",
      tabSize: 2,
      lineNumbers: "on",
      quickSuggestions: { other: "on", comments: "off", strings: "on" },
      quickSuggestionsDelay: 80,
      suggestOnTriggerCharacters: true,
      acceptSuggestionOnEnter: "on",
      acceptSuggestionOnCommitCharacter: true,
      snippetSuggestions: "top",
      wordBasedSuggestions: "allDocuments",
      parameterHints: { enabled: true },
      autoClosingBrackets: "always",
      autoClosingQuotes: "always",
      autoSurround: "languageDefined",
      tabCompletion: "on",
      suggest: { showKeywords: true, showSnippets: true, showWords: true },
      folding: true,
      foldingStrategy: "indentation"
    });
    try {
      state.editor.addAction({
        id: "trigger-suggest",
        label: "Trigger Suggest",
        keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Space],
        run: () => state.editor.trigger("editor", "editor.action.triggerSuggest", {})
      });
    } catch {}
    
    // Built-in snippet/keyword autofill for the most common languages (offline-safe).
    try {
      const snippetMap = {
        javascript: [
          { label: "console.log", detail: "Log to Console", insertText: "console.log(${1:value});$0" },
          { label: "function", insertText: "function ${1:name}(${2:params}) {\n\t${3}\n}$0" },
          { label: "const", insertText: "const ${1:name} = ${2:value};$0" },
          { label: "let", insertText: "let ${1:name} = ${2:value};$0" },
          { label: "import", insertText: "import ${1:name} from '${2:module}';$0" },
          { label: "arrow function", insertText: "(${1:params}) => ${2:value}" },
          { label: "if statement", insertText: "if (${1:condition}) {\n\t${2}\n}$0" },
          { label: "for loop", insertText: "for (let ${1:i} = 0; ${1:i} < ${2:len}; ${1:i}++) {\n\t${3}\n}$0" },
          { label: "async function", insertText: "async function ${1:name}(${2:params}) {\n\t${3}\n}$0" },
          { label: "class", insertText: "class ${1:Name} {\n\tconstructor(${2:params}) {\n\t\t${3}\n\t}\n}$0" },
        ],
        typescript: [
          { label: "console.log", detail: "Log to Console", insertText: "console.log(${1:value});$0" },
          { label: "function", insertText: "function ${1:name}(${2:params}): ${3:void} {\n\t${4}\n}$0" },
          { label: "const", insertText: "const ${1:name}: ${2:type} = ${3:value};$0" },
          { label: "interface", insertText: "interface ${1:Name} {\n\t${2}\n}$0" },
          { label: "type", insertText: "type ${1:Name} = ${2:type};$0" },
          { label: "import", insertText: "import { ${1:name} } from '${2:module}';$0" },
          { label: "arrow function", insertText: "(${1:params}): ${2:void} => ${3:value}" },
          { label: "async function", insertText: "async function ${1:name}(${2:params}): Promise<${3:void}> {\n\t${4}\n}$0" },
          { label: "class", insertText: "class ${1:Name} {\n\tconstructor(${2:params}) {\n\t\t${3}\n\t}\n}$0" },
        ],
        javascriptreact: [ { label: "component", insertText: "function ${1:Component}() {\n\treturn (\n\t\t<div>${2}</div>\n\t);\n}$0" } ],
        typescriptreact: [ { label: "component", insertText: "function ${1:Component}() {\n\treturn (\n\t\t<div>${2}</div>\n\t);\n}$0" } ],
        html: [
          { label: "div", insertText: "<div>${1}</div>$0" },
          { label: "anchor link", insertText: "<a href=\"${1}\"${2:}>${3}</a>$0" },
          { label: "script", insertText: "<script>\n\t${1}\n</script>$0" },
          { label: "style", insertText: "<style>\n\t${1}\n</style>$0" },
          { label: "input", insertText: "<input type=\"${1:text}\"${2: />}$0" },
          { label: "button", insertText: "<button${1: type=\"button\"}>${2}</button>$0" },
          { label: "img", insertText: "<img src=\"${1}\" alt=\"${2}\"${3: />}$0" },
          { label: "ul", insertText: "<ul>\n\t<li>${1}</li>\n</ul>$0" },
        ],
        css: [
          { label: "flex center", insertText: "display: flex;\njustify-content: ${1:center};\nalign-items: ${2:center};$0" },
          { label: "color", insertText: "color: ${1:#000};$0" },
          { label: "background", insertText: "background: ${1:#fff};$0" },
          { label: "margin", insertText: "margin: ${1:0};$0" },
          { label: "padding", insertText: "padding: ${1:0};$0" },
          { label: "font-size", insertText: "font-size: ${1:14px};$0" },
          { label: "border", insertText: "border: 1px solid ${1:#ccc};$0" },
          { label: "display none", insertText: "display: none;$0" },
        ],
        scss: [
          { label: "flex center", insertText: "display: flex;\njustify-content: ${1:center};\nalign-items: ${2:center};$0" },
        ],
        python: [
          { label: "def", insertText: "def ${1:name}(${2:params}):\n\t${3}$0" },
          { label: "import", insertText: "import ${1:module}$0" },
          { label: "from import", insertText: "from ${1:module} import ${2:name}$0" },
          { label: "class", insertText: "class ${1:Name}:\n\t${2}$0" },
          { label: "if", insertText: "if ${1:condition}:\n\t${2}$0" },
          { label: "for", insertText: "for ${1:item} in ${2:items}:\n\t${3}$0" },
          { label: "print", insertText: "print(${1:value})$0" },
          { label: "async def", insertText: "async def ${1:name}(${2:params}):\n\t${3}$0" },
        ],
        json: [
          { label: "object", insertText: "{\n\t\"${1:key}\": ${2:value}\n}$0" },
          { label: "array", insertText: "[\n\t${1}\n]$0" },
        ],
        markdown: [
          { label: "link", insertText: "[${1:text}](${2:url})$0" },
          { label: "code block", insertText: "\\`\\`\\`${1:lang}\n${2}\n\\`\\`\\`$0" },
          { label: "bold", insertText: "**${1:bold}**$0" },
          { label: "italic", insertText: "*${1:italic}*$0" },
        ],
      };
      const kind = monaco.languages.CompletionItemKind.Snippet;
      const rules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
      for (const [lang, list] of Object.entries(snippetMap)) {
        if (!list.length) continue;
        monaco.languages.registerCompletionItemProvider(lang, {
          provideCompletionItems(model, position) {
            const word = model.getWordUntilPosition(position);
            const range = {
              startLineNumber: position.lineNumber,
              startColumn: word.startColumn,
              endLineNumber: position.lineNumber,
              endColumn: position.column,
            };
            return { suggestions: list.map((s) => ({ label: s.label, kind, insertText: s.insertText, insertTextRules: rules, range, detail: s.detail || "Snippet" })) };
          },
        });
      }
    } catch {}
    
    // Listen to editor line selection / cursor position to update status bar
    state.editor.onDidChangeCursorPosition((e) => {
      const pos = e.position;
      const sel = state.editor.getSelection();
      let selText = "";
      if (sel && !sel.isEmpty()) {
        const model = state.editor.getModel();
        if (model) {
          const length = model.getValueInRange(sel).length;
          selText = ` (${length} selected)`;
        }
      }
      $("status-cursor").textContent = `Ln ${pos.lineNumber}, Col ${pos.column}${selText}`;
    });
  });
}

document.addEventListener("DOMContentLoaded", boot);