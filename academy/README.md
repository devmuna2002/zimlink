# ZimLink Academy — Learn AI Skills, Get Certified

DataCamp-inspired interactive learning platform for AI. Built with Node.js + Express + Monaco Editor, no build step needed.

## Features
- **10 Courses** across Foundations, Python, ML, Deep Learning, GenAI, CV, NLP, MLOps, Ethics
- **3 Career Tracks** (AI Engineer, GenAI Developer, AI Data Scientist)
- **Interactive Coding**: in-browser Python/JS execution via Monaco Editor, instant feedback, hints & solutions
- **XP & Streaks**: gamified progress, leaderboard
- **Verified Certificates**: auto-issued on course completion, verifiable via ID & QR, printable, LinkedIn-shareable
- **Catalog**: search + filters (level, category, duration)
- **Course Player**: DataCamp-style 3-pane layout (chapters | lesson | editor+console)
- **Dashboard**: progress, enrolled courses, certificates, leaderboard
- **Auth**: local register/login + guest mode (persisted to JSON)

## Quick Start

```bash
# from project root
npm run academy:install   # or: npm install --prefix academy
npm run academy           # http://localhost:3030

# dev with auto-reload
npm run academy:dev
```

Or directly:
```bash
cd academy
npm install
npm start          # http://localhost:3030
npm run dev        # watch mode
```

Set port: `PORT=4000 npm run academy` or `ACADEMY_PORT=4000`.

## Routes
- `/` — Landing
- `/catalog.html` — Catalog (search, filters)
- `/course.html?slug=ai-foundations` — Course player (code exercises + video/quiz)
- `/dashboard.html` — Progress & certificates
- `/tracks.html` & `/track.html?slug=ai-engineer` — Tracks
- `/certificate.html?id=ZL-XXXX` — Verified certificate

API at `/api/*`:
- `GET /api/courses`, `GET /api/courses/:slug`
- `GET /api/tracks`, `GET /api/tracks/:slug`
- `GET /api/stats`
- `GET/POST /api/progress`, `POST /api/enroll`
- `POST /api/run` — {code, language, expected}
- `POST /api/auth/register`, `POST /api/auth/login`
- `GET /api/certificates/:id`

Data persisted to `academy/server/data/*.json`.

## Tech
- Backend: Express 4, Node VM for JS, heuristic Python runner
- Frontend: Static HTML/CSS/JS, Monaco Editor via CDN, no bundler
- Storage: JSON file DB (zero external deps)
