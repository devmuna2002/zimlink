// Tutor engine: builds a strict HBC tutor prompt for OpenAI,
// plus a fully-offline fallback so schools without data/keys still get help.
import { topicsFor, LANG } from "./hbc.js";

export function buildSystemPrompt({ level, subject, language }) {
  const langName = (LANG[language] || LANG.en).name;
  const topics = topicsFor(subject).join("; ");
  return `You are HBC Homework AI — a warm Zimbabwean tutor for the Heritage-Based Curriculum (HBC 2024-2030). Talk like a great AI assistant: natural, friendly, conversational, never robotic.
Level: ${level}. Subject: ${subject}. Reply in ${langName} (blend in simple English terms where it helps).

OFFICIAL HBC STRUCTURE (use this, correct learners gently if they cite old names):
- Primary: 6 core areas — Indigenous Languages, English, Science and Technology, Mathematics, Social Science, PE and Arts.
- Secondary compulsory: Mathematics, Combined Science, Heritage Studies (STEAM thrust).
- Assessment: CALA is phased OUT. Now School-Based Projects (SBPs): 1 practical project per learning area per year (Circular No. 9 of 2024). For SBPs, help plan/do — never do it for them.
- Past papers (ZIMSEC Grade 7 / O / A-Level) are mostly PRE-HBC: good for practice but may not match new syllabi. Say so when relevant and point to MoPSE/official HBC sources.

HOW YOU TALK (like a modern AI tutor):
- Warm and human: short paragraphs, simple words for the level, a little encouragement.
- Format lightly: **bold** key terms, short bullet or numbered lists for steps.
- Max 4 steps per message, then end with ONE question for the learner. Under 180 words.
- Root examples in Zimbabwe life (maize fields, kombis, USD/ZiG money, Victoria Falls, Great Zimbabwe, Shona/Ndebele proverbs). Praise effort — Unhu/Ubuntu.

NEVER (no exceptions):
1. Give the final answer directly — guide with questions.
2. Write full essays/compositions — give a 3-sentence frame + vocabulary only.
3. Share exam papers or leaks — kindly refuse and solve a SIMILAR example instead.
4. Maths: demonstrate with different numbers, then let them do theirs.

HBC topics for ${subject}: ${topics}.`;
}

function detectMath(question) {
  return /[0-9+\-×÷*/x=]/.test(question) && question.length < 200;
}

function similarMathExample() {
  return "Example with different numbers: if 12 ÷ 3 = 4, what pattern do you see? Now try yours with the same method.";
}

export function localTutor({ level, subject, language, question, history = [] }) {
  const lang = LANG[language] ? language : "en";
  const praise = LANG[lang].praise[Math.floor(Math.random() * LANG[lang].praise.length)];
  const q = (question || "").trim();
  const isMath = detectMath(q);
  const turn = history.length;

  const headers = {
    en: "Let's solve it together — I won't give the answer, I'll guide you.",
    sn: "Ngatigadzirise pamwe chete — handikupe mhinduro, ndinokutungamirira.",
    nd: "Asixazulule sonke — kangikuniki impendulo, ngizakuqondisa."
  };
  const stepLabels = {
    en: ["Step 1 — Understand", "Step 2 — Plan", "Step 3 — Try one small part", "Check"],
    sn: ["Danho 1 — Nzwisisa", "Danho 2 — Ronga", "Danho 3 — Edza chikamu chidiki", "Tarisa"],
    nd: ["Isinyathelo 1 — Qonda", "Isinyathelo 2 — Hlela", "Isinyathelo 3 — Zama ingxenye", "Hlola"]
  };
  const S = stepLabels[lang];

  let steps;
  if (/composition|rondedzero|indaba|essay|tsumo|izaga/i.test(q + " " + subject)) {
    steps = lang === "en"
      ? [`${S[0]}: What is your story about in ONE sentence?`, `${S[1]}: Use this frame — Beginning (who/where) → Middle (problem) → End (lesson + Unhu value).`, `${S[2]}: Write only the Beginning (2 sentences) and show me.`]
      : lang === "sn"
      ? [`${S[0]}: Nyaya yako ndeyei? Taura nemutsara mumwe.`, `${S[1]}: Shandisa chimiro — Kutanga (ndiani/kupi) → Pakati (dambudziko) → Magumo (chidzidzo + hunhu).`, `${S[2]}: Nyora Kutanga chete (mitsara 2) undiratidze.`]
      : [`${S[0]}: Indaba yakho imayelana nani? Chaza ngomusho owodwa.`, `${S[1]}: Sebenzisa uhlaka — Isiqalo (ngubani/ngaphi) → Phakathi (inkinga) → Isiphetho (isifundo + ubuntu).`, `${S[2]}: Bhala Isiqalo kuphela (imisho emi-2) ungibonise.`];
  } else if (isMath) {
    steps = [
      `${S[0]}: What is the question asking? (underline the numbers + what to find)`,
      `${S[1]}: Which operation fits — + − × ÷? ${similarMathExample()}`,
      `${S[2]}: Do just the FIRST calculation and tell me what you got.`
    ];
  } else {
    steps = [
      `${S[0]}: In your own words, what do you already know about this?`,
      `${S[1]}: Key idea for ${subject}: break it into What → Why (Zimbabwe example) → How.`,
      `${S[2]}: Answer the 'What' part only, then I help with the next part.`
    ];
  }

  const followUps = {
    en: turn === 0 ? "What part is hardest for you?" : "Show me your try for step 1 and I will mark it kindly.",
    sn: turn === 0 ? "Ndeipi chikamu chakaoma kwauri?" : "Ndiratidze zvawaedza padanho 1 ndikuongorore.",
    nd: turn === 0 ? "Yikuphi okunzima kuwe?" : "Ngibonise ozamile esinyathelweni 1 ngikuhl positive."
  };

  return {
    mode: "local-offline",
    header: headers[lang],
    praise,
    steps,
    question: followUps[lang],
    note: "Offline helper — connect an OPENAI_API_KEY for full AI tutoring. I never give final answers."
  };
}

export async function aiTutor({ level, subject, language, question, history }) {
  const key = process.env.OPENAI_API_KEY;
  if (!key || key.includes("sk-...")) return null;
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  const messages = [
    { role: "system", content: buildSystemPrompt({ level, subject, language }) },
    ...(history || []).slice(-8).flatMap(h => ([
      { role: "user", content: h.q },
      { role: "assistant", content: h.a }
    ])),
    { role: "user", content: question }
  ];
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${key}` },
    body: JSON.stringify({ model, messages, max_tokens: 350, temperature: 0.6 })
  });
  if (!res.ok) throw new Error("OpenAI error " + res.status);
  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || null;
}
