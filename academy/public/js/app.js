export async function fetchJSON(url, opts) {
  const r = await fetch(url, opts);
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}
export function getUser() {
  try { return JSON.parse(localStorage.getItem("zl_user") || "null"); } catch { return null; }
}
export function setUser(u) { localStorage.setItem("zl_user", JSON.stringify(u)); if (u?.id) localStorage.setItem("zl_userId", u.id); }
export function getUserId() { return localStorage.getItem("zl_userId") || "guest"; }
export function toast(msg, ok=true) {
  const el = document.getElementById("toast");
  if (!el) return alert(msg);
  el.textContent = (ok ? "✓ " : "✗ ") + msg;
  el.className = "toast show";
  setTimeout(()=> el.className="toast", 2600);
}
export function renderIcon(name){
  if(!name) return '<i class="bi bi-patch-check"></i>';
  if(name.startsWith('bi ')) return `<i class="${name}"></i>`;
  if(name.startsWith('bi-')) return `<i class="bi ${name}"></i>`;
  // check if it's a tech slug that should be a real logo
  const tech = techIconHTML(name);
  if(tech) return tech;
  return name;
}
const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const SIMPLE_BASE = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons";
const TECH_MAP = {
  "python": `${DEVICON_BASE}/python/python-original.svg`,
  "py": `${DEVICON_BASE}/python/python-original.svg`,
  "javascript": `${DEVICON_BASE}/javascript/javascript-original.svg`,
  "js": `${DEVICON_BASE}/javascript/javascript-original.svg`,
  "typescript": `${DEVICON_BASE}/typescript/typescript-original.svg`,
  "ts": `${DEVICON_BASE}/typescript/typescript-original.svg`,
  "react": `${DEVICON_BASE}/react/react-original.svg`,
  "nodejs": `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
  "node": `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
  "java": `${DEVICON_BASE}/java/java-original.svg`,
  "go": `${DEVICON_BASE}/go/go-original.svg`,
  "golang": `${DEVICON_BASE}/go/go-original.svg`,
  "sql": `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  "postgresql": `${DEVICON_BASE}/postgresql/postgresql-original.svg`,
  "mysql": `${DEVICON_BASE}/mysql/mysql-original.svg`,
  "docker": `${DEVICON_BASE}/docker/docker-original.svg`,
  "git": `${DEVICON_BASE}/git/git-original.svg`,
  "r": `${DEVICON_BASE}/r/r-original.svg`,
  "html": `${DEVICON_BASE}/html5/html5-original.svg`,
  "css": `${DEVICON_BASE}/css3/css3-original.svg`,
  "vue": `${DEVICON_BASE}/vuejs/vuejs-original.svg`,
  "angular": `${DEVICON_BASE}/angularjs/angularjs-original.svg`,
  "nextjs": `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
  "mongodb": `${DEVICON_BASE}/mongodb/mongodb-original.svg`,
  "redis": `${DEVICON_BASE}/redis/redis-original.svg`,
  "kubernetes": `${DEVICON_BASE}/kubernetes/kubernetes-plain.svg`,
  "aws": `${DEVICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  "azure": `${DEVICON_BASE}/azure/azure-original.svg`,
  "tensorflow": `${DEVICON_BASE}/tensorflow/tensorflow-original.svg`,
  "pytorch": `${DEVICON_BASE}/pytorch/pytorch-original.svg`,
  "keras": `${DEVICON_BASE}/tensorflow/tensorflow-original.svg`,
  "figma": `${DEVICON_BASE}/figma/figma-original.svg`,
  // ML / AI real logos
  "machine learning": `${DEVICON_BASE}/tensorflow/tensorflow-original.svg`,
  "ml": `${DEVICON_BASE}/tensorflow/tensorflow-original.svg`,
  "deep learning": `${DEVICON_BASE}/pytorch/pytorch-original.svg`,
  "dl": `${DEVICON_BASE}/pytorch/pytorch-original.svg`,
  "generative ai": `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg`,
  "genai": `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg`,
  "gen ai": `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg`,
  "ai": `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg`,
  "artificial intelligence": `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg`,
  "openai": `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg`,
  "llm": `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg`,
  "rag": `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg`,
  "diffusion": `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg`,
  "prompting": `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg`,
  "huggingface": `https://cdn.simpleicons.org/huggingface/FFD21E`,
  "nlp": `https://cdn.simpleicons.org/huggingface/FFD21E`,
  "computer vision": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "opencv": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "cv": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "mlops": `${DEVICON_BASE}/docker/docker-original.svg`,
  "foundations": `${DEVICON_BASE}/jupyter/jupyter-original.svg`,
  "ethics": `${DEVICON_BASE}/github/github-original.svg`,
  "data science": `${DEVICON_BASE}/jupyter/jupyter-original.svg`,
  "pandas": `${DEVICON_BASE}/pandas/pandas-original.svg`,
  "numpy": `${DEVICON_BASE}/numpy/numpy-original.svg`,
  "scikit": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "scikit-learn": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "sklearn": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "jupyter": `${DEVICON_BASE}/jupyter/jupyter-original.svg`,
  // Programming extended
  "rust": `${DEVICON_BASE}/rust/rust-original.svg`,
  "c#": `${DEVICON_BASE}/csharp/csharp-original.svg`,
  "csharp": `${DEVICON_BASE}/csharp/csharp-original.svg`,
  "c sharp": `${DEVICON_BASE}/csharp/csharp-original.svg`,
  ".net": `${DEVICON_BASE}/dotnetcore/dotnetcore-original.svg`,
  "dotnet": `${DEVICON_BASE}/dotnetcore/dotnetcore-original.svg`,
  "c": `${DEVICON_BASE}/c/c-original.svg`,
  "cplusplus": `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,
  "c++": `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,
  "php": `${DEVICON_BASE}/php/php-original.svg`,
  "ruby": `${DEVICON_BASE}/ruby/ruby-original.svg`,
  "fastapi": `${DEVICON_BASE}/fastapi/fastapi-original.svg`,
  // ML tag synonyms -> real logos (avoid letter fallback for second tile)
  "regression": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "classification": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "clustering": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "k-means": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "kmeans": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "cross-validation": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "feature engineering": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "regularization": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "gradient descent": `${DEVICON_BASE}/scikitlearn/scikitlearn-original.svg`,
  "cnn": `${DEVICON_BASE}/pytorch/pytorch-original.svg`,
  "rnn": `${DEVICON_BASE}/pytorch/pytorch-original.svg`,
  "lstm": `${DEVICON_BASE}/pytorch/pytorch-original.svg`,
  "gru": `${DEVICON_BASE}/pytorch/pytorch-original.svg`,
  "neural networks": `${DEVICON_BASE}/pytorch/pytorch-original.svg`,
  "backpropagation": `${DEVICON_BASE}/pytorch/pytorch-original.svg`,
  "attention": `https://cdn.simpleicons.org/huggingface/FFD21E`,
  "transformers": `https://cdn.simpleicons.org/huggingface/FFD21E`,
  "bert": `https://cdn.simpleicons.org/huggingface/FFD21E`,
  "transformer": `https://cdn.simpleicons.org/huggingface/FFD21E`,
  "yolo": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "segmentation": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "object detection": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "detection": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "segmentation": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "mlflow": `${DEVICON_BASE}/docker/docker-original.svg`,
  "history": `${DEVICON_BASE}/jupyter/jupyter-original.svg`,
  "ai basics": `${DEVICON_BASE}/jupyter/jupyter-original.svg`,
  // GenAI second-tile distinct (avoid duplicate openai→openai)
  "embeddings": `https://cdn.simpleicons.org/huggingface/FFD21E`,
  "embedding": `https://cdn.simpleicons.org/huggingface/FFD21E`,
  "vector search": `https://cdn.simpleicons.org/huggingface/FFD21E`,
  "vector": `https://cdn.simpleicons.org/huggingface/FFD21E`,
  "chunking": `${DEVICON_BASE}/jupyter/jupyter-original.svg`,
  "retrieval": `https://cdn.simpleicons.org/huggingface/FFD21E`,
  "text generation": `https://cdn.simpleicons.org/huggingface/FFD21E`,
  "image generation": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "lora": `https://cdn.simpleicons.org/huggingface/FFD21E`,
  "controlnet": `${DEVICON_BASE}/opencv/opencv-original.svg`,
  "tokens": `${DEVICON_BASE}/jupyter/jupyter-original.svg`,
  "evaluation": `${DEVICON_BASE}/jupyter/jupyter-original.svg`,
};
export function techIconHTML(slug){
  if(!slug) return null;
  const key = String(slug).toLowerCase().trim();
  if(/[\u{1F300}-\u{1FAFF}]/u.test(key) || key.length>40) return null;
  if(TECH_MAP[key]) return `<img src="${TECH_MAP[key]}" alt="${key}" loading="lazy" style="display:block;object-fit:contain"/>`;
  // fuzzy: match substring to avoid letter fallbacks for tags like "Regression", "CNN", etc.
  const entries = Object.entries(TECH_MAP).sort((a,b)=>b[0].length - a[0].length);
  for(const [k,url] of entries){
    if(k.length<=1) continue;
    if(key.includes(k) || k.includes(key)){
      return `<img src="${url}" alt="${key}" loading="lazy" style="display:block;object-fit:contain"/>`;
    }
  }
  return null;
}
export function getTechIcon(c){
  const candidates = [];
  if(c.category) candidates.push(c.category.toLowerCase());
  if(c.category && c.category.toLowerCase()==='generative ai'){
    const ai = techIconHTML('generative ai');
    if(ai) return ai;
  }
  if(c.image) candidates.push(c.image);
  if(c.tags) candidates.push(...c.tags);
  if(c.title) candidates.push(...c.title.toLowerCase().split(/[^a-z]+/));
  for(const cand of candidates){
    const html = techIconHTML(cand);
    if(html) return html;
  }
  const letter = (c.title||"?")[0].toUpperCase();
  return `<span style="font-weight:900;color:#0a3d2e">${letter}</span>`;
}
export const freecodecampVideos = {
  "ai-foundations": "JMUxmLyrhSk",
  "python-ds": "CMEWVn1uZpQ",
  "ml-fundamentals": "7eh4d6sabA0",
  "deep-learning": "VyWAvY2CF9c",
  "gen-ai": "mEsleV16qdo",
  "generative-ai-llms": "mEsleV16qdo",
  "generative-ai-developer": "mEsleV16qdo",
  "prompt-eng": "mEsleV16qdo",
  "computer-vision": "u2V0Z6l6EoE",
  "nlp-transformers": "5vcj8kSwBCY",
  "mlops": "9BgIDqAzfuA",
  "ai-ethics": "g2CJg3erF4A",
  "python-programming": "rfscVS0vtbw",
  "javascript": "PkZNo7MFNFg",
  "javascript-essentials": "PkZNo7MFNFg",
  "typescript": "BwuLxPH8IDs",
  "typescript-mastery": "BwuLxPH8IDs",
  "java": "grEKMHGYyns",
  "java-development": "grEKMHGYyns",
  "golang": "8uiZC0l4Ajw",
  "rust": "MsocPEZBd-M",
  "csharp": "gfkTfcpWqAY",
  "csharp-dotnet": "gfkTfcpWqAY",
  "sql": "HXV3zeQKqGY",
  "sql-databases": "HXV3zeQKqGY",
  "ml-supervised": "7eh4d6sabA0",
  "supervised-learning": "7eh4d6sabA0",
  "ml-unsupervised": "7eh4d6sabA0",
  "model-evaluation": "7eh4d6sabA0",
  "feature-engineering": "7eh4d6sabA0",
  "neural-networks-basics": "VyWAvY2CF9c",
  "cnn-deep-dive": "u2V0Z6l6EoE",
  "rnn-sequence": "VyWAvY2CF9c",
  "pytorch-deep-learning": "VyWAvY2CF9c",
  "text-generation-llms": "mEsleV16qdo",
  "image-generation": "mEsleV16qdo",
  "rag-systems": "mEsleV16qdo",
  "nlp-basics": "5vcj8kSwBCY",
  "sentiment-analysis": "5vcj8kSwBCY",
  "transformers-nlp": "5vcj8kSwBCY",
  "nlp-api-production": "5vcj8kSwBCY",
  "mlops-deployment": "9BgIDqAzfuA",
  "ci-cd-ml": "9BgIDqAzfuA",
  "monitoring-drift": "7eh4d6sabA0",
  "mlops-kubernetes": "9BgIDqAzfuA",
  "cv-basics": "u2V0Z6l6EoE",
  "object-detection": "u2V0Z6l6EoE",
  "image-segmentation": "u2V0Z6l6EoE",
  "cv-deployment": "u2V0Z6l6EoE",
  "ai-governance": "g2CJg3erF4A",
  "data-privacy-ai": "g2CJg3erF4A",
  "ai-safety": "g2CJg3erF4A",
  "algorithmic-transparency": "g2CJg3erF4A",
  "computational-thinking": "JMUxmLyrhSk",
  "git-version-control": "8JJ101D3knE",
  "computer-fundamentals": "kqtD5dpn9C8",
  "problem-solving": "rfscVS0vtbw",
  "react": "bMknfKXIFA8"
};
export function cardHTML(c) {
  // COURSE now as CAREER TRACK — exact swap, just as track card is
  const iconHTML = getTechIcon(c);
  const pills = (c.tags||[]).slice(0,3).map(t=> `<span class="track-course-pill">${t}</span>`).join('');
  return `
  <a href="/course.html?slug=${c.slug}" class="track-card" style="text-decoration:none">
    <div class="track-card-head">
      <div class="track-icon" style="background:white;border:1px solid #e2e8f0;box-shadow:0 2px 8px rgba(0,0,0,.06)">${iconHTML.includes('<img') ? iconHTML.replace('style="display:block;object-fit:contain"','style="width:32px;height:32px;object-fit:contain;display:block;filter:none"') : `<span style="font-size:22px">${iconHTML}</span>`}</div>
      <div>
        <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#0a3d2e;opacity:.6">${c.category} • ${c.level||'Beginner'}</div>
        <div class="track-card-title" style="font-size:19px;font-weight:900;color:#0a3d2e;margin-top:2px;letter-spacing:-.02em">${c.title}</div>
      </div>
    </div>
    <div class="track-card-body">
      <p style="font-size:13px;line-height:1.5;color:#0a3d2e;opacity:.75">${c.short || c.description.slice(0,120)}</p>
      <div class="track-courses">${pills}</div>
      <div class="track-stat-row">
        <span class="track-stat"><i class="bi bi-clock"></i> ${c.duration||c.hours+'h'}</span>
        <span class="track-stat"><i class="bi bi-lightning-charge"></i> ${c.xp||0} XP</span>
        <span class="track-stat"><i class="bi bi-bar-chart"></i> ${c.level||'Beginner'}</span>
      </div>
      <div style="margin-top:14px;display:flex;align-items:center;gap:8px">
        <span style="flex:1;font-size:12px;font-weight:700;color:#0a3d2e">Start course</span>
        <span style="width:28px;height:28px;border-radius:999px;background:#0a3d2e;color:white;display:grid;place-items:center"><i class="bi bi-arrow-right"></i></span>
      </div>
    </div>
  </a>`;
}

export function trackCardHTML(t){
  // CAREER TRACK now as COURSE card — exact swap, just as course card is
  const bannerColor = t.color || '#0f172a';
  const logoMap = {
    "ai-engineer": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "generative-ai-developer": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
    "data-scientist-ai": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  };
  const altMap = {
    "ai-engineer": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "generative-ai-developer": "https://cdn.simpleicons.org/huggingface/FFD21E",
    "data-scientist-ai": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
  };
  const firstUrl = logoMap[t.slug] || logoMap[t.id] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg";
  const secondUrl = altMap[t.slug] || altMap[t.id] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg";
  return `
  <div style="display:flex;flex-direction:column;align-items:center;gap:10px">
    <a href="/track.html?slug=${t.slug}" style="background:white;border-radius:20px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 12px 40px rgba(0,0,0,.12), 0 4px 12px rgba(0,0,0,.06);border:none;width:100%;max-width:320px;text-decoration:none;transition:all .18s">
      <div style="height:110px;background:linear-gradient(135deg, ${bannerColor} 0%, #0f172a 100%);position:relative;overflow:visible;display:flex;align-items:flex-end;justify-content:center;padding-bottom:0">
        <div style="position:absolute;inset:0;background:radial-gradient(400px 120px at 30% 0%, rgba(255,255,255,.10), transparent 60%)"></div>
        <div style="display:flex;align-items:flex-end;gap:0;position:relative;z-index:2;transform:translateY(28px)">
          <div style="width:88px;height:88px;border-radius:16px;background:white;padding:12px;box-shadow:0 8px 20px rgba(0,0,0,.18);transform:rotate(-6deg);display:grid;place-items:center;overflow:hidden;flex-shrink:0">
            <img src="${firstUrl}" alt="${t.title}" style="width:48px;height:48px;object-fit:contain;display:block"/>
          </div>
          <div style="width:88px;height:88px;border-radius:16px;background:white;padding:12px;box-shadow:0 8px 20px rgba(0,0,0,.18);transform:rotate(6deg);margin-left:-14px;display:grid;place-items:center;overflow:hidden;flex-shrink:0">
            <img src="${secondUrl}" alt="${t.title} 2" style="width:44px;height:44px;object-fit:contain;display:block"/>
          </div>
        </div>
      </div>
      <div style="padding:36px 18px 18px;text-align:center;background:white;flex:1;display:flex;flex-direction:column;gap:8px">
        <span style="align-self:center;padding:4px 10px;border-radius:999px;background:#f1f5f9;border:1px solid #e2e8f0;color:#64748b;font-size:11px;font-weight:600">${t.level||'Career Track'}</span>
        <h3 style="font-size:15px;font-weight:800;line-height:1.3;color:#0f172a;margin:0;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:38px">${t.title}</h3>
        <p style="font-size:12.5px;color:#64748b;line-height:1.5;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;min-height:54px;margin:0">${(t.description||'').slice(0,110)}</p>
        <span style="display:block;width:100%;padding:10px;background:#0f172a;color:white;border-radius:999px;font-weight:700;font-size:13px;text-align:center;margin-top:8px">Explore track</span>
      </div>
    </a>
  </div>`;
}
export function fmtDate(s){ try{return new Date(s).toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'})}catch{return s} }
// DataCamp mobile — top bar drawer + bottom nav + hide preview on mobile
if(typeof document!=='undefined'){
  document.addEventListener('DOMContentLoaded',()=>{
    // Completely remove preview container on mobile (Console/Video/Quiz etc.)
    if(window.innerWidth<=720){
      document.querySelectorAll('.saas-preview').forEach(el=>el.remove());
    }
    window.addEventListener('resize',()=>{
      if(window.innerWidth<=720) document.querySelectorAll('.saas-preview').forEach(el=>el.remove());
    });
    const hamburger = document.getElementById('hamburger') || document.querySelector('.hamburger');
    if(!document.querySelector('.mobile-drawer')){
      const drawer = document.createElement('div');
      drawer.className = 'mobile-drawer';
      drawer.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;padding:4px 0 12px;border-bottom:1px solid #0a2540">
          <span style="width:32px;height:32px;border-radius:8px;background:var(--dc-green);display:grid;place-items:center;color:#05192d;font-weight:900">ZL</span>
          <span style="font-weight:800;color:white">ZimLink</span><span style="color:#8aa0c2">Academy</span>
          <span style="margin-left:auto;padding:3px 8px;border-radius:999px;background:rgba(3,239,98,.12);border:1px solid rgba(3,239,98,.18);color:#03ef62;font-size:10px;font-weight:700">ZIMBABWE</span>
        </div>
        <a href="/" class="${location.pathname==='/'?'active':''}"><i class="bi bi-house-door-fill"></i> Home</a>
        <a href="/catalog.html" class="${location.pathname.includes('catalog')?'active':''}"><i class="bi bi-collection-fill"></i> Catalog</a>
        <a href="/tracks.html" class="${location.pathname.includes('track')?'active':''}"><i class="bi bi-signpost-split-fill"></i> Tracks</a>
        <a href="/exams.html" class="${location.pathname.includes('exam')?'active':''}"><i class="bi bi-patch-check-fill"></i> Certification</a>
        <a href="/dashboard.html" class="${location.pathname.includes('dashboard')?'active':''}"><i class="bi bi-mortarboard-fill"></i> Learn</a>
        <div style="margin-top:auto;padding-top:16px;border-top:1px solid #0a2540">
          <a href="/dashboard.html" style="background:var(--dc-green);color:#05192d;justify-content:center;font-weight:800"><i class="bi bi-box-arrow-in-right"></i> Get Started</a>
          <div style="display:flex;gap:8px;margin-top:8px">
            <span style="flex:1;padding:8px;border-radius:8px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);color:#8aa0c2;font-size:11px;text-align:center">UZ • NUST</span>
            <span style="flex:1;padding:8px;border-radius:8px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);color:#8aa0c2;font-size:11px;text-align:center">MSU • HIT</span>
          </div>
        </div>`;
      document.body.appendChild(drawer);
      const backdrop = document.createElement('div');
      backdrop.className = 'mobile-backdrop';
      document.body.appendChild(backdrop);
      const toggle = ()=>{ drawer.classList.toggle('open'); backdrop.classList.toggle('open'); };
      if(hamburger) hamburger.addEventListener('click', toggle);
      backdrop.addEventListener('click', toggle);
      drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ drawer.classList.remove('open'); backdrop.classList.remove('open'); }));
    }
    if(!document.querySelector('.bottom-nav') && !document.querySelector('.dc-player-footer')){
      const nav = document.createElement('nav');
      nav.className = 'bottom-nav';
      nav.innerHTML = `<div class="bottom-nav-inner">
        <a href="/" class="${location.pathname==='/'?'active':''}"><i class="bi bi-house-door-fill"></i><span>Home</span></a>
        <a href="/catalog.html" class="${location.pathname.includes('catalog')?'active':''}"><i class="bi bi-search"></i><span>Explore</span></a>
        <a href="/dashboard.html" class="${location.pathname.includes('dashboard')?'active':''}"><i class="bi bi-mortarboard-fill"></i><span>Learn</span></a>
        <a href="/tracks.html" class="${location.pathname.includes('track')?'active':''}"><i class="bi bi-signpost-split-fill"></i><span>Tracks</span></a>
      </div>`;
      document.body.appendChild(nav);
      if(window.innerWidth<=720 && !document.querySelector('.dc-player-footer')) document.body.classList.add('has-bottom-nav');
      window.addEventListener('resize',()=>{ document.body.classList.toggle('has-bottom-nav', window.innerWidth<=720 && !document.querySelector('.dc-player-footer')); });
    }
  });
}
