/* settings window – separate window for app settings */
const $ = (id) => document.getElementById(id);
function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}
const esc = (s) => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

function showToast(message, type="info") {
  const c = $("toast-container");
  if (!c) return;
  const t = el("div", "toast "+type);
  const top = el("div", "toast-top");
  const msg = el("span", "toast-msg", message);
  const close = el("span", "toast-close", "×");
  close.onclick = () => t.remove();
  top.append(msg, close);
  t.appendChild(top);
  c.appendChild(t);
  setTimeout(()=> t.parentElement && t.remove(), 4000);
}

// theme
function currentTheme(){ try{return localStorage.getItem("zimlink-theme")||"dark";}catch{return "dark";}}
function updateThemeBtns(){
  const t=currentTheme();
  $("theme-dark")?.classList.toggle("active", t==="dark");
  $("theme-light")?.classList.toggle("active", t==="light");
}
function applyTheme(mode){
  document.documentElement.dataset.theme = mode;
  try{localStorage.setItem("zimlink-theme", mode);}catch{}
  updateThemeBtns();
}

// account
function refreshAccount(){
  zimlink.getProfile().then(p=>{
    $("account-name").textContent = p.name || "—";
    $("account-key").textContent = p.hasKey ? "· key ✓" : "";
    $("btn-signout").disabled = !p.name;
    $("btn-edit-profile").textContent = p.name ? "Edit profile" : "Sign in / Create account";
  });
}
let authState = { githubConfigured:false, githubUser:null, googleIdentity:null, identity:null };
function commitIdentityLabel(){
  if(authState.identity) return `Commits as ${authState.identity.name} <${authState.identity.email}>`;
  return "No commit identity yet.";
}
function refreshAuthUI(){
  return zimlink.authStatus().then(a=>{
    authState = a || authState;
    $("commit-identity").textContent = commitIdentityLabel();
    $("commit-identity").className = "acct-line " + (authState.identity ? "" : "dim");
    $("btn-gh").innerHTML = authState.githubUser ? `<i class="bi bi-github"></i> ✓ GitHub: @${esc(authState.githubUser.login)}` : `<i class="bi bi-github"></i> Sign in with GitHub`;
    const gi = authState.googleIdentity;
    $("btn-google").innerHTML = gi ? `<i class="bi bi-google"></i> ✓ Google: ${esc(gi.name)}` : `<i class="bi bi-google"></i> Sign in with Google`;
  });
}
function showAuthModal(title, bodyEl, actionsEl){
  $("auth-modal-title").textContent = title;
  $("auth-modal-body").replaceChildren(bodyEl);
  $("auth-modal-actions").replaceChildren(actionsEl||[]);
  $("auth-modal").classList.remove("hidden");
}
function hideAuthModal(){
  $("auth-modal").classList.add("hidden");
  if(window.ghPollTimer){ clearTimeout(window.ghPollTimer); window.ghPollTimer=null; }
}
function startGitHubSignIn(){
  if(!authState.githubConfigured){
    $("github-config-wrap").classList.remove("hidden");
    $("gh-client-id").focus();
    showToast("Add your GitHub OAuth App Client ID to sign in.", "info");
    return;
  }
  zimlink.githubDeviceStart().then(r=>{
    if(!r||!r.ok){ showToast((r&&r.error)||"GitHub sign-in could not start.","error"); return; }
    const body=document.createElement("div"); body.className="gh-device";
    const code=el("div","auth-code",r.user_code);
    const steps=el("div","dim","Visit the verification URL (or click below) and enter this one-time code.");
    const uri=el("div","auth-uri",r.verification_uri);
    const status=el("div","auth-status dim","Waiting for you to authorize…"); status.id="auth-status";
    body.append(code,steps,uri,status);
    const actions=el("div","row");
    const open=el("button","wide","Open GitHub"); open.onclick=()=>zimlink.openExternal(r.verification_uri);
    const cancel=el("button","wide","Cancel"); cancel.onclick=hideAuthModal;
    actions.append(open,cancel);
    showAuthModal("Sign in with GitHub", body, actions);
    pollDevice(r.interval||5);
  });
}
function pollDevice(interval){
  zimlink.githubDevicePoll().then(r=>{
    if($("auth-modal").classList.contains("hidden")) return;
    if(r&&r.ok){ hideAuthModal(); showToast(`Signed in to GitHub as @${r.user.login}.`,"success"); refreshAuthUI(); return; }
    if(r&&r.pending){ const s=$("auth-status"); if(s) s.textContent="Waiting for you to authorize…"; window.ghPollTimer=setTimeout(()=>pollDevice(interval), interval*1000); return; }
    hideAuthModal(); showToast((r&&r.error)||"GitHub authorization failed.","error");
  });
}
function startGoogleSignIn(){
  const body=document.createElement("div");
  const note=el("div","dim","Enter the name and email you use on Google so commits are attributed to you.");
  const nameL=el("label"); nameL.textContent="Name"; const name=el("input","",""); nameL.append(name);
  const emailL=el("label"); emailL.textContent="Email"; const email=el("input","",""); email.placeholder="you@example.com"; emailL.append(email);
  if(authState.googleIdentity){ name.value=authState.googleIdentity.name; email.value=authState.googleIdentity.email; }
  body.append(note,nameL,emailL);
  const actions=el("div","row");
  const save=el("button","wide","Sign in with Google"); const cancel=el("button","wide","Cancel"); cancel.onclick=hideAuthModal;
  save.onclick=()=>{
    const nm=name.value.trim(), em=email.value.trim();
    if(!nm||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){ showToast("Enter a name and a valid email.","error"); return; }
    zimlink.googleIdentitiesSet({name:nm,email:em}).then(r=>{
      if(r&&r.ok){ hideAuthModal(); showToast("Commit identity set.","success"); refreshAuthUI(); }
      else showToast((r&&r.error)||"Could not set identity.","error");
    });
  };
  actions.append(save,cancel);
  showAuthModal("Sign in with Google", body, actions);
  name.focus();
}
function saveGhConfig(){
  const clientId=$("gh-client-id").value.trim(), clientSecret=$("gh-client-secret").value.trim();
  if(!clientId){ showToast("GitHub Client ID is required.","error"); return; }
  zimlink.githubConfigSave({clientId, clientSecret:clientSecret||undefined}).then(r=>{
    if(r&&r.ok){ $("github-config-wrap").classList.add("hidden"); authState.githubConfigured=true; startGitHubSignIn(); }
    else showToast((r&&r.error)||"Could not save GitHub credentials.","error");
  });
}
async function signOut(){
  if(!confirm("Sign out of ZimLink? Your local profile will be removed.")) return;
  await zimlink.clearProfile();
  refreshAccount(); refreshAuthUI();
  showToast("Signed out","info");
}
async function editProfile(){
  // simple prompt flow for settings window – reuse main auth landing is unavailable here
  const name = prompt("Profile name:", "");
  if(!name||!name.trim()) return;
  const key = prompt("API key (leave blank to keep existing):", "");
  // try to set
  const res = await zimlink.setProfile({name:name.trim(), key: key && key.trim() ? key.trim() : null});
  if(res&&res.ok){ showToast("Profile saved","success"); refreshAccount(); }
  else showToast(res?.error||"Failed","error");
}

// providers
let providerList=[], providerCurrent={providerId:"openai",baseUrl:"",model:"",apiKey:""};
function populateProviderSelect(){
  const s=$("provider-select"); if(!s) return;
  s.innerHTML="";
  providerList.forEach(p=>{
    const o=document.createElement("option"); o.value=p.id; o.textContent=p.name; s.appendChild(o);
  });
  s.value = providerCurrent.providerId||"openai";
}
function syncProviderForm(){
  const p = providerList.find(x=>x.id===($("provider-select").value||"openai"));
  $("provider-baseurl").value = providerCurrent.baseUrl || (p? p.baseUrl : "");
  $("provider-model").value = providerCurrent.model || (p? p.defaultModel : "");
  $("provider-note").textContent = p? p.note : "";
  $("provider-state").textContent = providerCurrent.apiKey ? "API key saved." : (p&&p.needsKey ? "This provider needs an API key to run tasks." : "No key set — this provider may work keyless.");
}
async function loadProviders(){
  try{
    const data=await zimlink.providersList();
    providerList=data.list||[]; providerCurrent=data.current||providerCurrent;
    populateProviderSelect(); syncProviderForm();
  }catch{}
}
let providerDirtyModel=false, providerDirtyBase=false;
async function saveProviderForm(){
  const providerId=$("provider-select").value||"openai";
  const baseUrl=$("provider-baseurl").value.trim();
  const model=$("provider-model").value.trim();
  const key=$("provider-key").value.trim();
  const res=await zimlink.providersSave({providerId, ...(baseUrl?{baseUrl}:{}), ...(model?{model}:{}), ...(key?{apiKey:key}:{apiKey:null})});
  if(res?.ok){
    providerCurrent={providerId:res.providerId, baseUrl:res.baseUrl, model:res.model, apiKey:res.hasKey?"saved":""};
    providerDirtyModel=false; providerDirtyBase=false;
    $("provider-key").value="";
    showToast("Provider saved: "+res.model,"success");
    syncProviderForm();
  } else showToast("Failed to save provider: "+(res?.error||"unknown error"),"error");
  return res;
}

window.addEventListener("DOMContentLoaded", ()=>{
  applyTheme(currentTheme());
  refreshAccount();
  refreshAuthUI();
  loadProviders();
  // fetch model info for AGENT model field
  zimlink.getInfo().then(info=>{
    $("model").value = info.model||"";
    $("key-state").textContent = info.hasKey ? "API key ✓ · "+(info.model||"unknown model") : "No API key configured — add one in AI Provider";
  });

  $("btn-close-settings").onclick = () => window.close();
  $("btn-edit-profile").onclick = editProfile;
  $("btn-signout").onclick = signOut;
  $("btn-gh").onclick = startGitHubSignIn;
  $("btn-google").onclick = startGoogleSignIn;
  $("btn-gh-save").onclick = saveGhConfig;
  $("auth-modal").addEventListener("click", e=>{ if(e.target===$("auth-modal")) hideAuthModal(); });
  $("theme-dark").onclick = ()=>applyTheme("dark");
  $("theme-light").onclick = ()=>applyTheme("light");
  $("provider-select").addEventListener("change", ()=>{
    const p=providerList.find(x=>x.id===$("provider-select").value);
    if(p){
      if(!providerDirtyBase) $("provider-baseurl").value=p.baseUrl;
      if(!providerDirtyModel) $("provider-model").value=p.defaultModel;
      $("provider-note").textContent=p.note;
      $("provider-state").textContent = p.needsKey ? "This provider needs an API key to run tasks." : "No key set — may work keyless.";
    }
  });
  $("provider-baseurl").addEventListener("input", ()=>providerDirtyBase=true);
  $("provider-model").addEventListener("input", ()=>providerDirtyModel=true);
  $("btn-provider-save").onclick = saveProviderForm;
  $("btn-open-settings").onclick = ()=> zimlink.openFolder && zimlink.openFolder();
  $("btn-shortcuts").onclick = ()=> { showToast("Shortcuts: Ctrl+Shift+E Explorer, Ctrl+L Agent, Ctrl+B Sidebar, Ctrl+` Panel","info"); };
  // auth modal already wired
});
