// Curated resource list — driven by user-provided links.
// hbcAligned: true = written for HBC 2024-2030; false = useful practice but pre-HBC (verify vs syllabus).
// Always verify "HBC" sellers against the official syllabus before relying on them.

export const RESOURCES = [
  // --- Official HBC / Ministry ---
  { id: "mopse", group: "Official HBC", title: "Ministry of Primary & Secondary Education (MoPSE)", url: "https://mopse.gov.zw", use: "Official circulars, syllabi, SBP guidelines", levels: ["all"], cost: "Free", hbcAligned: true },
  { id: "hbc-framework", group: "Official HBC", title: "HBC Framework 2024–2030 (full document)", url: "https://www.scribd.com/document/890272184/Heritage-Based-Curriculum-Framework-for-PSE-2024-2030-to-Share", use: "The official framework: pillars, learning areas, pathways", levels: ["all"], cost: "Free (Scribd)", hbcAligned: true },
  { id: "hbc-circular", group: "Official HBC", title: "HBC Circular — Forms 1–6 learning areas", url: "https://www.scribd.com/document/819105754/Heritage-Based-Curriculum-Circular", use: "Which subjects run in Forms 1–6", levels: ["f1", "f2", "f3", "f4", "f5", "f6"], cost: "Free (Scribd)", hbcAligned: true },
  { id: "sbp-circ9", group: "Official HBC", title: "Secretary's Circular No. 9 of 2024 — School-Based Projects", url: "https://mopse.gov.zw", use: "SBP rules: 1 project per learning area per year (CALA is phased out)", levels: ["all"], cost: "Free", hbcAligned: true, note: "Ask your school office for the printed circular if the site copy is hard to find." },

  // --- HBC explainers ---
  { id: "herald-hbc", group: "HBC explainers", title: "The Herald — Understanding the new HBC (Ministry officer)", url: "https://www.heraldonline.co.zw/understanding-the-new-heritage-based-curriculum/", use: "Plain-English HBC overview + SBP transition + 2025 exam-class rules", levels: ["all"], cost: "Free", hbcAligned: true },
  { id: "openclass-hbc", group: "HBC explainers", title: "OpenClass — Unpacking Zimbabwe's HBC", url: "https://openclass.co.zw/unpacking-zimbabwes-heritage-based-curriculum/", use: "6 primary areas, secondary routes, O/A-Level structure, SBPs", levels: ["all"], cost: "Free", hbcAligned: true },

  // --- HBC-aligned materials ---
  { id: "hbc-ac", group: "HBC-aligned materials", title: "hbc.ac.zw — HBC-aligned STEM collection", url: "https://www.hbc.ac.zw/", use: "STEM materials for students & educators", levels: ["g3", "g4", "g5", "g6", "g7", "f1", "f2", "f3", "f4"], cost: "Freemium — check what is free", hbcAligned: true, note: "Markets itself as premium; confirm free items before relying on it." },

  // --- Notes, past papers, revision (practice; mostly PRE-HBC) ---
  { id: "zimsake", group: "Notes & past papers", title: "ZimSake Notes — free revision, study packs, eBooks ECD–G7", url: "https://zimsake.co.zw/notes/about-us", use: "Maths, English, General Paper, Science notes + past papers", levels: ["ecd", "g1", "g2", "g3", "g4", "g5", "g6", "g7"], cost: "Free", hbcAligned: false, note: "Good for practice; match to the 6 primary HBC areas." },
  { id: "sidemann", group: "Notes & past papers", title: "Exam Sidemann — free ZIMSEC past papers (PDF)", url: "https://examsidemann.org/", use: "Grade 7, O-Level, A-Level past papers", levels: ["g7", "f4", "f6"], cost: "Free", hbcAligned: false, note: "Mirror: examsidemann.com/past-papers. Pre-HBC papers — practice only." },
  { id: "dzidzo", group: "Notes & past papers", title: "Dzidzo paDen / Imfundwe'ndlini (WhatsApp 0787 064 484)", url: "https://www.techzim.co.zw/2023/01/get-all-your-zimsec-past-exam-papers-marking-schemes-and-notes-on-whatsapp-with-dzidzo-paden-imfundwendlini/", use: "Free notes + papers + marking schemes via WhatsApp (UNESCO/MoPSE/ZIMSEC-backed)", levels: ["g7", "f4", "f6"], cost: "Free (WhatsApp data)", hbcAligned: false, note: "2023 article cites 2015–2017 papers — dated, practice only." },

  // --- Apps ---
  { id: "innovateg7", group: "Free Android apps", title: "Zimsec Past Papers & Notes (InnovateZw)", url: "https://www.appbrain.com/app/zimsec-past-papers-notes/com.kyle.zimsecmaterials", use: "O/A-Level papers + notes on phone", levels: ["f4", "f5", "f6"], cost: "Free", hbcAligned: false },
  { id: "zambuko", group: "Free Android apps", title: "Zambuko — papers + notes + Q&A forum", url: "https://play.google.com/store/apps/details?id=com.edufree.zambuko&hl=en", use: "Past papers, notes, learner Q&A", levels: ["f1", "f2", "f3", "f4", "f5", "f6"], cost: "Free", hbcAligned: false },

  // --- Caution ---
  { id: "verify-sellers", group: "Caution", title: "Unverified 'HBC textbooks/notes' sellers (e.g. @zimsecpapers on X via WhatsApp)", url: "https://mopse.gov.zw", use: "Do NOT buy until checked vs official syllabus", levels: ["all"], cost: "Paid — unverified", hbcAligned: false, note: "Quality could not be verified. Always cross-check with MoPSE syllabus first." }
];

export const HBC_STRUCTURE = {
  framework: "Heritage-Based Curriculum 2024–2030 (replaces 2015–2022 framework)",
  primary: ["Indigenous Languages", "English Language", "Science and Technology", "Mathematics", "Social Science", "Physical Education and Arts"],
  secondaryCompulsory: ["Mathematics", "Combined Science", "Heritage Studies"],
  secondaryPathways: ["Sciences", "Languages and Humanities", "Commercials", "Physical Education and Arts", "Technical and Vocational Education"],
  aLevel: "3 specialised subjects aligned to chosen pathway",
  assessment: "CALA phased out → School-Based Projects (SBPs): 1 project per learning area per year (Circular No. 9 of 2024). 2025 exam classes (G7/F4/F6): old framework for summative exams + SBPs for continuous assessment."
};
