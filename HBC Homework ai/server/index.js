import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { LEVELS, SUBJECTS, TOPICS, QUIZ_BANK, topicsFor } from "./hbc.js";
import { RESOURCES, HBC_STRUCTURE } from "./resources.js";
import { localTutor, aiTutor } from "./tutor.js";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });
dotenv.config({ path: path.resolve(process.cwd(), "..", ".env") });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const DATA_DIR = path.join(__dirname, "data");
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(PUBLIC)) fs.mkdirSync(PUBLIC, { recursive: true });

const app = express();
const PORT = process.env.HBC_PORT || process.env.PORT || 3040;
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.static(PUBLIC, { setHeaders(res, f) { if (f.endsWith(".html")) res.setHeader("Cache-Control", "no-store"); } }));

const histFile = path.join(DATA_DIR, "sessions.json");
const readHist = () => { try { return JSON.parse(fs.readFileSync(histFile, "utf-8")); } catch { return []; } };
const saveSession = (s) => {
  const all = readHist();
  all.push({ ...s, at: new Date().toISOString() });
  fs.writeFileSync(histFile, JSON.stringify(all.slice(-500), null, 2));
};

// --- Curriculum APIs ---
app.get("/api/health", (req, res) => res.json({
  ok: true,
  ai: !!(process.env.OPENAI_API_KEY && !process.env.OPENAI_API_KEY.includes("sk-...")),
  model: process.env.OPENAI_MODEL || "gpt-4o-mini (or offline)"
}));
app.get("/api/levels", (req, res) => res.json(LEVELS));
app.get("/api/subjects", (req, res) => {
  const { level = "g5" } = req.query;
  res.json({ level, subjects: SUBJECTS[level] || SUBJECTS.g5 });
});
app.get("/api/topics", (req, res) => {
  const { subject = "Mathematics" } = req.query;
  res.json({ subject, topics: topicsFor(subject) });
});
app.get("/api/curriculum", (req, res) => res.json({ levels: LEVELS, subjects: SUBJECTS, topics: TOPICS, structure: HBC_STRUCTURE }));

// --- Resource library (driven by verified links; flags pre-HBC vs HBC-aligned) ---
app.get("/api/resources", (req, res) => {
  const { group, level, hbc } = req.query;
  let out = RESOURCES;
  if (group && group !== "all") out = out.filter(r => r.group === group);
  if (level && level !== "all") out = out.filter(r => r.levels.includes("all") || r.levels.includes(level));
  if (hbc === "true") out = out.filter(r => r.hbcAligned);
  if (hbc === "practice") out = out.filter(r => !r.hbcAligned);
  res.json({ count: out.length, structure: HBC_STRUCTURE, resources: out });
});

// --- Tutor API: NEVER returns direct answers, only guided steps ---
app.post("/api/ask", async (req, res) => {
  const { level = "Grade 5", subject = "Mathematics", language = "en", question = "", history = [] } = req.body || {};
  if (!question.trim()) return res.status(400).json({ error: "Please type your homework question." });
  if (question.length > 2000) return res.status(400).json({ error: "Question too long — break it into parts." });
  // Safety: block exam-cheating / leaks
  if (/exam paper|zimsec leak|give me the answer|write my essay for me/i.test(question)) {
    return res.json({
      mode: "guardrail",
      reply: "I can't give exam papers or write the whole answer for you — but I CAN guide you step by step so you learn it. Tell me: what have you tried so far?"
    });
  }
  // SBP helper: CALA is out, SBPs are in — help plan, don't do it for them
  if (/\bSBP\b|school-based project|\bCALA\b|project per learning area/i.test(question)) {
    saveSession({ level, subject, language, question, mode: "sbp-guide" });
    return res.json({
      mode: "sbp-guide",
      reply: "School-Based Project (SBP) help — CALA is phased out. You do 1 practical project per learning area per year (Circular No. 9 of 2024).\n\n1. Topic: what local problem does it solve? (e.g. pfumvudza plot, water harvesting, heritage site model)\n2. Plan: materials you already have + 3 steps + who helps (parent/teacher).\n3. Do & record: photos/notes weekly, write what changed.\n\nTell me your learning area + idea in one sentence and I will help you shape it — I won't do it for you."
    });
  }
  try {
    const ai = await aiTutor({ level, subject, language, question, history });
    if (ai) {
      saveSession({ level, subject, language, question, mode: "ai" });
      return res.json({ mode: "ai", reply: ai });
    }
  } catch (e) {
    console.error("AI failed, using offline tutor:", e.message);
  }
  const local = localTutor({ level, subject, language, question, history });
  saveSession({ level, subject, language, question, mode: "local" });
  const reply = `${local.header}\n\n${local.praise}\n\n${local.steps.map((s, i) => `${i + 1}. ${s.replace(/^[^:]+: /, "")}`).join("\n")}\n\n👉 ${local.question}`;
  res.json({ mode: local.mode, reply, steps: local.steps, praise: local.praise });
});

// --- Quiz API: practice questions in ZIMSEC style ---
app.post("/api/quiz", (req, res) => {
  const { subject = "Mathematics", level = "g5", count = 5 } = req.body || {};
  let pool = QUIZ_BANK.filter(q => q.subject.toLowerCase().includes(subject.toLowerCase().split(" ")[0]));
  if (!pool.length) pool = QUIZ_BANK;
  const picked = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));
  // strip answers for the player; client submits to /api/quiz/check
  res.json({ questions: picked.map(({ a, explain, ...q }, i) => ({ ...q, id: `q${i}` })) });
});
app.post("/api/quiz/check", (req, res) => {
  const { subject = "Mathematics", answers = {} } = req.body || {};
  let pool = QUIZ_BANK.filter(q => q.subject.toLowerCase().includes(subject.toLowerCase().split(" ")[0]));
  if (!pool.length) pool = QUIZ_BANK;
  let score = 0;
  const results = pool.slice(0, Object.keys(answers).length || 5).map((q, i) => {
    const ua = answers[`q${i}`];
    const ok = ua === q.a;
    if (ok) score++;
    return { id: `q${i}`, q: q.q, correct: q.a, yours: ua || null, ok, explain: q.explain };
  });
  res.json({ score, total: results.length, results });
});

app.get(/^\/(?!api).*/, (req, res) => {
  const p = path.join(PUBLIC, req.path);
  if (req.path.includes(".") && fs.existsSync(p)) return res.sendFile(p);
  res.sendFile(path.join(PUBLIC, "index.html"));
});

app.listen(PORT, () => {
  console.log(`\n📚 HBC Homework AI running at http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   AI mode: ${process.env.OPENAI_API_KEY && !process.env.OPENAI_API_KEY.includes("sk-...") ? "ON (OpenAI)" : "OFF (offline tutor)"}\n`);
});
