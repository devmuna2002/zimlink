const $ = (s) => document.querySelector(s);
const state = { level: "Grade 5", levelId: "g5", subject: "Mathematics", lang: "en", history: [], threadId: null, started: false };

const PH = {
  en: "Message HBC Tutor…",
  sn: "Tumira umyalezo kuMudzidzisi…",
  nd: "Thumela umyalezo kuMfundisi…"
};
const LS_KEY = "hbc_threads";

async function api(path, opts) {
  const r = await fetch(path, opts);
  return r.json();
}
function esc(t) {
  return String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\n/g, "<br>");
}

// Lightweight markdown for AI messages: **bold**, headings, bullet lists
function md(src) {
  let t = String(src ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  t = t.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  const lines = t.split("\n");
  let out = "", inUl = false;
  for (const ln of lines) {
    const b = ln.match(/^\s*[-•]\s+(.*)/);
    const h = ln.match(/^\s*#{1,3}\s+(.*)/);
    if (b) {
      if (!inUl) { out += '<ul class="md">'; inUl = true; }
      out += `<li>${b[1]}</li>`;
    } else {
      if (inUl) { out += "</ul>"; inUl = false; }
      out += h ? `<div class="md-h">${h[1]}</div>` : ln + "<br>";
    }
  }
  if (inUl) out += "</ul>";
  return out;
}

// ---------- thread storage ----------
function loadThreads() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || "[]"); } catch { return []; }
}
function saveThreads(t) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(t.slice(0, 30))); } catch {}
}
function persistCurrent() {
  if (!state.history.length) return;
  const all = loadThreads();
  const i = all.findIndex(t => t.id === state.threadId);
  const rec = {
    id: state.threadId, title: state.history[0].q.slice(0, 42),
    level: state.level, levelId: state.levelId, subject: state.subject, lang: state.lang,
    exchanges: state.history, ts: Date.now()
  };
  if (i >= 0) all[i] = rec; else all.unshift(rec);
  saveThreads(all);
  renderChatList();
}
function renderChatList() {
  const all = loadThreads();
  const box = $("#chatList");
  if (!all.length) { box.innerHTML = `<p class="empty">No chats yet — ask something below.</p>`; return; }
  box.innerHTML = "";
  all.forEach(t => {
    const b = document.createElement("button");
    b.className = "chat-item" + (t.id === state.threadId ? " on" : "");
    b.innerHTML = `<span>${esc(t.title)}</span><span class="del" title="Delete">✕</span>`;
    b.onclick = () => openThread(t.id);
    b.querySelector(".del").onclick = (e) => {
      e.stopPropagation();
      saveThreads(loadThreads().filter(x => x.id !== t.id));
      if (t.id === state.threadId) newChat();
      else renderChatList();
    };
    box.appendChild(b);
  });
}
function openThread(id) {
  const t = loadThreads().find(x => x.id === id);
  if (!t) return;
  state.threadId = t.id;
  state.level = t.level; state.levelId = t.levelId; state.subject = t.subject; state.lang = t.lang;
  state.history = t.exchanges || [];
  $("#chat").innerHTML = "";
  state.started = false;
  $("#welcome").style.display = "";
  state.history.forEach(x => {
    addUserMsg(x.q, false);
    addAiMsg(x.a, x.tag || "Tutor", x.sub || t.subject, false);
  });
  $("#chatTitle").textContent = t.title;
  showView("chat");
  renderChatList();
  closeSide();
}
function newChat() {
  state.threadId = "t" + Date.now().toString(36);
  state.history = [];
  state.started = false;
  $("#chat").innerHTML = "";
  $("#welcome").style.display = "";
  $("#chatTitle").textContent = "New chat";
  showView("chat");
  renderChatList();
  closeSide();
}

// ---------- layout ----------
function showView(v) {
  ["chat", "quiz", "resources", "parent"].forEach(t => $("#view-" + t).classList.toggle("hidden", t !== v));
  if (v === "resources") loadResources();
  if (v === "parent") loadParent();
}
function closeSide() { $("#sidebar").classList.remove("open"); $("#backdrop").classList.remove("show"); }

async function init() {
  const h = await api("/api/health").catch(() => ({ ok: false }));
  $("#aiStatus").textContent = h.ai ? `AI live · ${h.model}` : "Offline tutor · works without data";
  $("#aiDot").classList.toggle("on", !!h.ai);

  const cur = await api("/api/curriculum").catch(() => null);
  if (cur) {
    $("#level").innerHTML = cur.levels.map(l => `<option value="${l.id}">${l.label}</option>`).join("");
    $("#level").value = "g5";
    await loadSubjects();
  }

  state.threadId = "t" + Date.now().toString(36);
  renderChatList();

  $("#menuBtn").onclick = () => { $("#sidebar").classList.add("open"); $("#backdrop").classList.add("show"); };
  $("#sideClose").onclick = closeSide;
  $("#backdrop").onclick = closeSide;

  document.querySelectorAll(".lib button").forEach(b => b.onclick = () => { showView(b.dataset.view); closeSide(); });
  $("#newChat").onclick = newChat;
  $("#topNew").onclick = newChat;

  document.querySelectorAll("#langSeg button").forEach(b => b.onclick = () => {
    document.querySelectorAll("#langSeg button").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    state.lang = b.dataset.lang;
    $("#q").placeholder = PH[state.lang];
  });

  $("#level").onchange = async () => {
    state.levelId = $("#level").value;
    state.level = $("#level").selectedOptions[0].textContent;
    const d = await api(`/api/subjects?level=${state.levelId}`);
    $("#subject").innerHTML = d.subjects.map(s => `<option>${s}</option>`).join("");
    state.subject = d.subjects[0];
    loadTopics();
  };
  $("#subject").onchange = () => { state.subject = $("#subject").value; loadTopics(); };

  $("#askBtn").onclick = ask;
  const q = $("#q");
  const fit = () => { q.style.height = "auto"; q.style.height = Math.min(q.scrollHeight, 150) + "px"; $("#askBtn").disabled = !q.value.trim(); };
  q.addEventListener("input", fit); fit();
  q.addEventListener("keydown", e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(); } });
  document.querySelectorAll(".sugs button").forEach(b => b.onclick = () => { $("#q").value = b.dataset.q; fit(); ask(); });

  $("#newQuiz").onclick = newQuiz;
  $("#markQuiz").onclick = markQuiz;
  $("#resGroup").onchange = loadResources;
  $("#resFilter").onchange = loadResources;
  $("#printRes").onclick = () => window.print();
}

async function loadSubjects() {
  state.levelId = "g5";
  state.level = $("#level").selectedOptions[0].textContent;
  const d = await api(`/api/subjects?level=g5`);
  $("#subject").innerHTML = d.subjects.map(s => `<option>${s}</option>`).join("");
  state.subject = d.subjects[0];
  loadTopics();
}
async function loadTopics() {
  const d = await api(`/api/topics?subject=${encodeURIComponent(state.subject)}`).catch(() => null);
  if (d) $("#topics").innerHTML = d.topics.map(t => `<span>${esc(t)}</span>`).join("");
}

// ---------- messages ----------
function plain(el) {
  return (el.dataset.raw || el.querySelector(".bubble, .ai-body").innerText || "").trim();
}
function hideWelcome() {
  if (!state.started) { state.started = true; $("#welcome").style.display = "none"; }
}
function copyBtn(el) {
  el.querySelector(".t-copy").onclick = async (e) => {
    const btn = e.target;
    try { await navigator.clipboard.writeText(plain(el)); }
    catch {
      const ta = document.createElement("textarea");
      ta.value = plain(el); document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); ta.remove();
    }
    btn.textContent = "Copied";
    setTimeout(() => btn.textContent = "Copy", 1200);
  };
}

function addUserMsg(text, animate = true) {
  hideWelcome();
  const el = document.createElement("div");
  el.className = "msgrow me";
  el.dataset.raw = text;
  el.innerHTML = `<div class="wrap"><div class="bubble">${esc(text)}</div>`
    + `<div class="tools" style="justify-content:flex-end"><button class="t-copy">Copy</button><button class="t-edit">Edit</button></div></div>`;
  $("#chat").appendChild(el);
  el.scrollIntoView({ block: "end", behavior: animate ? "smooth" : "auto" });
  copyBtn(el);
  el.querySelector(".t-edit").onclick = () => editMsg(el);
  return el;
}

function addAiMsg(reply, tag, sub, animate = true) {
  hideWelcome();
  const el = document.createElement("div");
  el.className = "msgrow ai";
  el.dataset.raw = reply;
  el.innerHTML = `<div class="wrap"><div class="line"><div class="avatar">H</div>`
    + `<div class="ai-body">${md(reply)}<div class="src">${esc(tag)} · ${esc(sub)}</div>`
    + `<div class="tools"><button class="t-copy">Copy</button><button class="t-retry">Retry</button></div></div></div></div>`;
  $("#chat").appendChild(el);
  el.scrollIntoView({ block: "end", behavior: animate ? "smooth" : "auto" });
  copyBtn(el);
  el.querySelector(".t-retry").onclick = () => {
    // drop last exchange, resend last question
    const last = state.history[state.history.length - 1];
    if (!last) return;
    state.history.pop();
    let n = 0;
    for (const m of [...document.querySelectorAll("#chat .msgrow")].reverse()) {
      m.remove(); if (++n === 2) break;
    }
    sendText(last.q, true);
  };
  return el;
}

function editMsg(el) {
  if (el.querySelector(".editbox")) return;
  const orig = plain(el);
  const bubble = el.querySelector(".bubble");
  bubble.innerHTML = `<textarea class="editbox">${esc(orig).replace(/<br>/g, "\n")}</textarea>`
    + `<div class="editrow"><button class="save">Save & resend</button><button class="cancel">Cancel</button></div>`;
  el.querySelector(".tools").style.display = "none";
  const box = bubble.querySelector(".editbox");
  box.focus();
  bubble.querySelector(".cancel").onclick = () => {
    bubble.innerHTML = esc(orig);
    el.dataset.raw = orig;
    el.querySelector(".tools").style.display = "";
  };
  bubble.querySelector(".save").onclick = () => {
    const text = box.value.trim();
    if (!text) return;
    const hidx = parseInt(el.dataset.hidx || state.history.length, 10);
    let next = el.nextSibling;
    while (next) { const cur = next; next = next.nextSibling; cur.remove(); }
    state.history = state.history.slice(0, hidx);
    el.remove();
    sendText(text);
  };
}

async function ask() {
  const text = $("#q").value.trim();
  if (!text) return;
  $("#q").value = ""; $("#q").style.height = "auto"; $("#askBtn").disabled = true;
  sendText(text);
}

async function sendText(text, isRetry = false) {
  showView("chat");
  const u = addUserMsg(text);
  u.dataset.hidx = state.history.length;
  const typing = document.createElement("div");
  typing.className = "msgrow ai";
  typing.innerHTML = `<div class="wrap"><div class="line"><div class="avatar">H</div><div class="ai-body"><span class="typing"><i></i><i></i><i></i></span></div></div></div>`;
  $("#chat").appendChild(typing);
  typing.scrollIntoView({ block: "end" });
  const data = await api("/api/ask", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ level: state.level, subject: state.subject, language: state.lang, question: text, history: state.history })
  }).catch(() => ({ reply: "Network hiccup — check your connection and try again." }));
  typing.remove();
  const reply = data.reply || data.error || "Sorry, try again.";
  const tag = data.mode === "ai" ? "AI tutor" : data.mode === "sbp-guide" ? "SBP guide" : data.mode === "guardrail" ? "Safety" : "Offline tutor";
  addAiMsg(reply, tag, state.subject);
  state.history.push({ q: text, a: reply, tag, sub: state.subject });
  if (state.history.length === 1 && !isRetry) $("#chatTitle").textContent = text.slice(0, 42);
  persistCurrent();
}

// ---------- quiz / resources / parents ----------
async function newQuiz() {
  const box = $("#quizBox");
  box.innerHTML = "<p class='muted'>Building your quiz…</p>";
  const d = await api("/api/quiz", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ subject: state.subject, level: state.levelId, count: 4 })
  });
  box.innerHTML = "";
  d.questions.forEach((qq, i) => {
    const div = document.createElement("div");
    div.className = "quizQ";
    div.innerHTML = `<b>${i + 1}. ${esc(qq.q)}</b> <span class="pill">${esc(qq.subject)}</span>`;
    qq.choices.forEach(c => {
      const b = document.createElement("button");
      b.textContent = c;
      b.onclick = () => { div.querySelectorAll("button").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); div.dataset.pick = c; };
      div.appendChild(b);
    });
    box.appendChild(div);
  });
}

async function markQuiz() {
  const answers = {};
  document.querySelectorAll("#quizBox .quizQ").forEach((div, i) => { if (div.dataset.pick) answers[`q${i}`] = div.dataset.pick; });
  if (!Object.keys(answers).length) return alert("Pick at least one answer first.");
  const d = await api("/api/quiz/check", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ subject: state.subject, answers })
  });
  $("#quizBox").innerHTML = `<h5 class="mt-2">Score: ${d.score} / ${d.total}</h5>` + d.results.map(r =>
    `<div class="quizQ"><b>${esc(r.q)}</b><br><span class="${r.ok ? "ok" : "bad"}">${r.ok ? "Correct" : "Not yet"}</span> · Yours: ${esc(r.yours || "—")} · Answer: <b>${esc(r.correct)}</b><br><small class="text-muted">${esc(r.explain)}</small></div>`
  ).join("");
}

async function loadResources() {
  const g = $("#resGroup").value, f = $("#resFilter").value;
  const box = $("#resBox");
  box.innerHTML = "<p class='muted'>Loading resources…</p>";
  const d = await api(`/api/resources?group=${encodeURIComponent(g)}&hbc=${f}`).catch(() => null);
  if (!d) { box.innerHTML = ""; return; }
  $("#hbcNote").textContent = d.structure.assessment + " Past papers below are pre-HBC: practice only.";
  box.innerHTML = d.resources.map(r =>
    `<div class="resource-item"><div class="title"><a class="reslink" href="${r.url}" target="_blank" rel="noopener">${esc(r.title)} ↗</a>`
    + `<span class="pill ${r.hbcAligned ? "hbc" : ""}">${r.hbcAligned ? "HBC-aligned" : "Practice / pre-HBC"}</span></div>`
    + `<div class="desc">${esc(r.use)} · ${esc(r.group)} · ${esc(r.cost)}</div>`
    + (r.note ? `<div class="meta"><b>Note:</b> ${esc(r.note)}</div>` : "")
    + `</div>`
  ).join("");
}

function loadParent() {
  const items = [
    ["6 primary areas", "Indigenous Languages · English · Science & Technology · Mathematics · Social Science · PE & Arts"],
    ["Secondary core", "Mathematics + Combined Science + Heritage Studies, then 5 pathways"],
    ["CALA out → SBPs in", "1 School-Based Project per learning area per year (Circular No. 9 of 2024)"],
    ["Past papers = practice", "Most papers predate HBC — check against MoPSE / Study resources"],
    ["Tutor, not answers", "Guided steps, different-number maths examples, essay frames — never leaks"],
    ["Trilingual · low data", "English / ChiShona / IsiNdebele. Offline-first; OPENAI_API_KEY for full AI"]
  ];
  $("#parentCards").innerHTML = items.map(([b, s]) =>
    `<div class="info-card"><b>${b}</b><span>${s}</span></div>`).join("");
}

// ---------- theme (light/dark, remembered) ----------
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("hbc_theme", t); } catch {}
  const b = $("#themeBtn");
  if (b) b.innerHTML = t === "dark" ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
}
(function initTheme() {
  let t = "light";
  try {
    t = localStorage.getItem("hbc_theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  } catch {}
  setTheme(t);
  document.addEventListener("click", (e) => {
    if (e.target.closest && e.target.closest("#themeBtn")) {
      setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    }
  });
})();

init();
