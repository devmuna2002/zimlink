# HBC Homework AI — Zimbabwe Heritage-Based Curriculum Tutor

Web tutor for ECD A/B → Grade 7 → Form 1–6, aligned to Zimbabwe's **Heritage-Based Curriculum (HBC 2024–2030)**.
Tutor-mode (never gives final answers), trilingual **English / ChiShona / IsiNdebele**, offline-first for low-data schools.

## Quick start

```bash
cd "HBC Homework ai"
npm install
npm start
# open http://localhost:3040
```

Optional full AI (else built-in offline tutor is used):

```bash
# in parent .env or this folder's .env
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
HBC_PORT=3040
```

## What it does

- **Homework Tutor** (`POST /api/ask`): step-by-step guidance, max 4 steps, ends with one question. Maths uses different-numbers examples; compositions give frames + vocab, never full essays. Blocks exam leaks / "write it for me".
- **Practice Quiz** (`POST /api/quiz`, `/api/quiz/check`): ZIMSEC-style questions with explanations.
- **Curriculum** (`GET /api/curriculum`, `/api/levels`, `/api/subjects?level=g5`, `/api/topics?subject=Mathematics`): HBC levels, learning areas, topic guides.
- **Safety**: age-appropriate, Unhu/Ubuntu values, heritage contexts (Great Zimbabwe, pfumvudza, USD/ZiG, kombis, Victoria Falls).

## Project layout

```
server/index.js   Express server + APIs
server/hbc.js     HBC levels, subjects, topics, quiz bank, languages
server/tutor.js   OpenAI tutor prompt + offline fallback tutor
public/           index.html, app.js, styles.css (no build step, no CDN)
```

## HBC coverage

- Infant: ECD A/B, Grades 1–2 (literacy, numeracy, heritage & life skills)
- Junior: Grades 3–7 (English, Shona/Ndebele, Maths, Science & Tech, Heritage & Social Studies, Agriculture, ICT, PE & Arts)
- Lower secondary: Forms 1–4 O-Level (adds Combined Science, Heritage Studies, Geography/History, Commerce)
- Upper secondary: Forms 5–6 A-Level
