// HBC = Heritage-Based Curriculum of Zimbabwe (2024–2030 framework).
// Learning areas condensed for the tutor: infants, junior, secondary, advanced.

export const LEVELS = [
  { id: "ecd", label: "ECD A / B", group: "Infant", ages: "3–5" },
  { id: "g1", label: "Grade 1", group: "Infant", ages: "6" },
  { id: "g2", label: "Grade 2", group: "Infant", ages: "7" },
  { id: "g3", label: "Grade 3", group: "Junior", ages: "8" },
  { id: "g4", label: "Grade 4", group: "Junior", ages: "9" },
  { id: "g5", label: "Grade 5", group: "Junior", ages: "10" },
  { id: "g6", label: "Grade 6", group: "Junior", ages: "11" },
  { id: "g7", label: "Grade 7", group: "Junior", ages: "12" },
  { id: "f1", label: "Form 1", group: "Lower Secondary", ages: "13" },
  { id: "f2", label: "Form 2", group: "Lower Secondary", ages: "14" },
  { id: "f3", label: "Form 3", group: "Lower Secondary", ages: "15" },
  { id: "f4", label: "Form 4 (O-Level)", group: "Lower Secondary", ages: "16" },
  { id: "f5", label: "Form 5 (A-Level)", group: "Upper Secondary", ages: "17" },
  { id: "f6", label: "Form 6 (A-Level)", group: "Upper Secondary", ages: "18" }
];

// Official HBC 2024–2030 structure (verified vs Herald/OpenClass explainers of Ministry framework):
// PRIMARY (G1–G7): 6 core areas — Indigenous Languages, English, Science and Technology,
//   Mathematics, Social Science, PE and Arts.
// SECONDARY: compulsory Mathematics + Combined Science + Heritage Studies (STEAM thrust),
//   plus options from 5 pathways (Sciences; Languages & Humanities; Commercials;
//   PE & Arts; Technical & Vocational). A-Level: 3 specialised subjects.
// Assessment: CALA phased out → SBPs (1 project per learning area per year, Circular No. 9 of 2024).

export const SUBJECTS = {
  ecd: ["Early Literacy", "Early Numeracy", "Heritage & Life Skills", "Health & Art"],
  g1: ["Indigenous Language (Shona / Ndebele)", "English", "Mathematics", "Science and Technology", "Social Science", "Physical Education and Arts"],
  g2: ["Indigenous Language (Shona / Ndebele)", "English", "Mathematics", "Science and Technology", "Social Science", "Physical Education and Arts"],
  g3: ["Indigenous Language (Shona / Ndebele)", "English", "Mathematics", "Science and Technology", "Social Science", "Physical Education and Arts"],
  g4: ["Indigenous Language (Shona / Ndebele)", "English", "Mathematics", "Science and Technology", "Social Science", "Physical Education and Arts"],
  g5: ["Indigenous Language (Shona / Ndebele)", "English", "Mathematics", "Science and Technology", "Social Science", "Physical Education and Arts"],
  g6: ["Indigenous Language (Shona / Ndebele)", "English", "Mathematics", "Science and Technology", "Social Science", "Physical Education and Arts"],
  g7: ["Indigenous Language (Shona / Ndebele)", "English", "Mathematics", "Science and Technology", "Social Science", "Physical Education and Arts"],
  f1: ["Mathematics (compulsory)", "Combined Science (compulsory)", "Heritage Studies (compulsory)", "English", "Indigenous Language", "Sciences pathway", "Languages & Humanities", "Commercials", "PE & Arts", "Technical & Vocational"],
  f2: ["Mathematics (compulsory)", "Combined Science (compulsory)", "Heritage Studies (compulsory)", "English", "Indigenous Language", "Sciences pathway", "Languages & Humanities", "Commercials", "PE & Arts", "Technical & Vocational"],
  f3: ["Mathematics (compulsory)", "Combined Science / Physics / Chemistry / Biology", "Heritage Studies (compulsory)", "English", "Indigenous Language", "Commercials", "Technical & Vocational", "Literature"],
  f4: ["Mathematics (compulsory)", "Combined Science / Physics / Chemistry / Biology", "Heritage Studies (compulsory)", "English", "Indigenous Language", "Commercials / Accounts", "Technical & Vocational", "Literature"],
  f5: ["A-Level subject 1 (pathway)", "A-Level subject 2 (pathway)", "A-Level subject 3 (pathway)", "Heritage Studies", "ICT"],
  f6: ["A-Level subject 1 (pathway)", "A-Level subject 2 (pathway)", "A-Level subject 3 (pathway)", "Heritage Studies", "ICT"]
};

// Short topic guides per subject family (used for hints + quiz + offline help)
export const TOPICS = {
  "Mathematics": ["Number operations", "Fractions & decimals", "Measurement & money (USD/ZiG)", "Shapes & geometry", "Patterns & algebra", "Data handling", "Ratio & proportion (F1+)"],
  "English": ["Comprehension", "Composition writing", "Grammar (tenses, punctuation)", "Summary writing", "Oral & vocabulary"],
  "Indigenous Language": ["Kuverenga / Ukufunda (comprehension)", "Rondedzero / Indaba (composition)", "Girama / Uhlelo (grammar)", "Tsumo / Izaga (proverbs & culture)"],
  "Shona / Ndebele": ["Kuverenga / Ukufunda (comprehension)", "Rondedzero / Indaba (composition)", "Girama / Uhlelo (grammar)", "Tsumo / Izaga (proverbs & culture)"],
  "Science and Technology": ["Living things & environment", "Materials", "Energy", "Earth & weather", "Health & hygiene"],
  "Science & Technology": ["Living things & environment", "Materials", "Energy", "Earth & weather", "Health & hygiene"],
  "Combined Science": ["Biology: cells, health, ecosystems", "Chemistry: matter, acids/bases", "Physics: forces, energy, electricity"],
  "Social Science": ["Family & Unhu/Ubuntu values", "Zimbabwe history & liberation heritage", "Map skills & districts", "Culture, food & national symbols"],
  "Heritage & Social Studies": ["Family & Unhu/Ubuntu values", "Zimbabwe history & liberation heritage", "Map skills & districts", "Culture, food & national symbols"],
  "Heritage Studies": ["Unhu/Ubuntu philosophy", "Pre-colonial & liberation history", "Constitution & governance", "Culture & heritage sites (Great Zimbabwe)"],
  "Physical Education and Arts": ["Fitness & safety", "Traditional games & dance", "Music & visual arts", "Health & teamwork (Unhu)"],
  "Agriculture": ["Crops (maize, groundnuts)", "Livestock (chickens, goats)", "Soil & conservation (pfumvudza)", "Agribusiness"],
  "ICT": ["Computer parts & safety", "Typing & Word", "Internet safety", "Spreadsheets", "Coding basics"],
  "Geography": ["Map work", "Climate & vegetation", "Mining & farming in Zimbabwe", "Population & settlements"],
  "default": ["Key terms first", "Worked example", "Guided practice", "Check your answer"]
};

export const QUIZ_BANK = [
  { subject: "Mathematics", level: "g4", q: "A farmer packs 24 oranges into bags of 6. How many bags?", a: "4 bags", choices: ["3 bags", "4 bags", "6 bags", "8 bags"], explain: "24 ÷ 6 = 4." },
  { subject: "Mathematics", level: "g7", q: "What is 3/4 + 1/8?", a: "7/8", choices: ["4/12", "7/8", "1/2", "5/8"], explain: "3/4 = 6/8, so 6/8 + 1/8 = 7/8." },
  { subject: "Mathematics", level: "f2", q: "Solve: 3x + 5 = 20. x = ?", a: "5", choices: ["3", "5", "6", "15"], explain: "3x = 15, x = 5." },
  { subject: "English", level: "g5", q: "Choose the correct sentence:", a: "They went to Victoria Falls yesterday.", choices: ["They goed to Victoria Falls yesterday.", "They went to Victoria Falls yesterday.", "They gone to Victoria Falls yesterday.", "They going to Victoria Falls yesterday."], explain: "Past tense of 'go' is 'went'." },
  { subject: "Science & Technology", level: "g4", q: "Which is a living thing?", a: "Mopane tree", choices: ["Stone", "Mopane tree", "Plastic bottle", "Brick"], explain: "A tree grows and reproduces." },
  { subject: "Heritage & Social Studies", level: "g5", q: "Great Zimbabwe is famous for:", a: "Stone walls built without mortar", choices: ["Gold mines", "Stone walls built without mortar", "A big dam", "A railway"], explain: "The dry-stone walls are a national heritage symbol." },
  { subject: "Agriculture", level: "g6", q: "Pfumvudza helps farmers by:", a: "Conserving moisture with small holes + mulch", choices: ["Using more fertiliser", "Conserving moisture with small holes + mulch", "Burning fields", "Planting only in wetlands"], explain: "Pfumvudza = conservation farming for dry regions." },
  { subject: "ICT", level: "g6", q: "Which is a strong password habit?", a: "Long phrase only you know + different per site", choices: ["Your name + birth year", "Long phrase only you know + different per site", "password123", "Sharing with friends"], explain: "Long, unique passwords keep accounts safe." },
  { subject: "Combined Science", level: "f2", q: "Photosynthesis happens in the:", a: "Chloroplast", choices: ["Nucleus", "Chloroplast", "Ribosome", "Cell wall"], explain: "Chlorophyll in chloroplasts traps sunlight." },
  { subject: "Heritage Studies", level: "f4", q: "Unhu/Ubuntu means:", a: "Respect, community and caring for others", choices: ["Getting rich alone", "Respect, community and caring for others", "Obeying only strangers", "Avoiding culture"], explain: "'Munhu munhu nevanhu / Umuntu ngumuntu ngabantu'." }
];

export const LANG = {
  en: { name: "English", praise: ["Well done!", "Good try!", "You are thinking like a scientist!"] },
  sn: { name: "Shona (ChiShona)", praise: ["Waita zvakanaka!", "Ramba uchiedza!", "Wava kufunga senyanzvi!"] },
  nd: { name: "Ndebele (IsiNdebele)", praise: ["Kuhle kakhulu!", "Qhubeka uzama!", "Usucabanga njengesazi!"] }
};

export function topicsFor(subject) {
  const s = (subject || "").toLowerCase();
  if (s.includes("indigenous") || s.includes("shona") || s.includes("ndebele")) return TOPICS["Indigenous Language"];
  if (s.includes("social science") || s.includes("heritage & social")) return TOPICS["Social Science"];
  if (s.includes("physical education")) return TOPICS["Physical Education and Arts"];
  if (s.includes("science and technology") || s.includes("science & technology")) return TOPICS["Science and Technology"];
  if (s.includes("combined science") || s.includes("physics") || s.includes("chemistry") || s.includes("biology")) return TOPICS["Combined Science"];
  if (s.includes("heritage studies")) return TOPICS["Heritage Studies"];
  if (s.includes("math")) return TOPICS["Mathematics"];
  if (s.includes("english")) return TOPICS["English"];
  for (const key of Object.keys(TOPICS)) {
    if (s.includes(key.toLowerCase().split(" ")[0])) return TOPICS[key];
  }
  return TOPICS[subject] || TOPICS.default;
}
