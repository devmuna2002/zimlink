// Auto-generated MLOps enrichment data
// Exercises use a "safe grammar" verified against the JS-translation grader:
//   arithmetic (+,-,*,/,%,**,), sum(), len(list), abs(), string concat,
//   list indexing, boolean arithmetic. Expected values match JavaScript output.
export const mlopsEnrichment = {
  "mlops": {
    notes: {
      c1: {
        title: "MLOps Landscape & Deployment Fundamentals",
        intro: "Most trained models never reach production. MLOps brings engineering discipline to ML: reproducibility, automation, monitoring, and safe deployment. This chapter maps the landscape and the pillars of production ML.",
        sections: [
          { heading: "Why Models Fail to Ship", body: "The gap between a working notebook and a reliable service is large. Missing versioning, manual retraining, and no monitoring cause most models to stall before production.", bullets: ["Notebook code is not a service", "Reproducibility is often missing", "Manual releases break down", "No monitoring hides decay"] },
          { heading: "The MLOps Pillars", body: "Three pillars support production ML: reproducibility (same code and data give the same result), automation (pipelines run without human babysitting), and monitoring (degradation is caught early).", bullets: ["Reproducibility of runs", "Automation of pipelines", "Monitoring in production", "Each pillar reinforces the rest"] },
          { heading: "Experiment Tracking", body: "Tools like MLflow record parameters, metrics, artifacts, and models for every run. Tracking makes experiments comparable and lets you promote the best run, not a lucky guess.", bullets: ["Log params, metrics, artifacts", "Compare runs systematically", "Promote the best model", "Keep history for audits"] },
          { heading: "Containerising Models", body: "Docker packages the code, libraries, and model into one portable image. A containerised model runs identically on a laptop, a server, or the cloud, removing 'works on my machine'.", bullets: ["Package code + deps + model", "One image, consistent runtime", "Runs anywhere Docker runs", "Removes environment drift"] },
          { heading: "Serving a Model as an API", body: "FastAPI exposes the model behind a REST endpoint: a predict route accepts input, runs inference, and returns results. Health and readiness endpoints check the service is alive.", bullets: ["Expose predict via REST", "Validate and parse input", "Health endpoints check liveness", "Return structured results"] },
          { heading: "The Production Loop", body: "Production ML is a loop: serve, observe, detect degradation, retrain, evaluate, and redeploy. This chapter is the entry point for the full CD cycle covered next.", bullets: ["Serve then observe", "Detect drift and decay", "Retrain and evaluate", "Redeploy safely"] }
        ],
        tip: "Start with the smallest reliable serving setup — a containerised FastAPI endpoint with a health check and logging — before adding orchestration."
      }
    },
    exercises: [
      { chId: "c1", title: "Pillars Count", instructions: "How many MLOps pillars: reproducibility, automation, monitoring?", code: 'pillars = ["reproducibility", "automation", "monitoring"]\nprint(len(pillars))', expected: "3", hint: "len() counts them" },
      { chId: "c1", title: "Container Layers", instructions: "A Docker image has 5 base layers plus 3 app layers. Total layers?", code: 'base = 5\napp = 3\nprint(base + app)', expected: "8", hint: "Add the layers" },
      { chId: "c1", title: "Health Status", instructions: "Print 'ok' if the service responds with status ok.", code: 'status = "ok"\nprint(status)', expected: "ok", hint: "Print the status string" },
      { chId: "c1", title: "Weighted Score", instructions: "Accuracy 0.9 weighted 0.5 plus latency 0.6 weighted 0.5. Combined score?", code: 'a = 0.9\nw1 = 0.5\nl = 0.6\nw2 = 0.5\nprint(a * w1 + l * w2)', expected: "0.75", hint: "Weighted average" },
      { chId: "c1", title: "Deploy Budget", instructions: "80% throughput target from 500 RPS. Required RPS?", code: 'rps = 500\npct = 0.8\nprint(rps * pct)', expected: "400", hint: "Multiply by 0.8" }
    ],
    quizzes: [
      { chId: "c1", question: "Which is an MLOps pillar?", options: ["Reproducibility", "Colour grading", "Model size only", "Camera FPS"], answer: 0 },
      { chId: "c1", question: "MLflow is primarily for:", options: ["Experiment tracking", "Image editing", "Web hosting", "Task scheduling"], answer: 0 },
      { chId: "c1", question: "Docker's main benefit for ML is:", options: ["Faster training", "Consistent runtime everywhere", "Better accuracy", "Smaller datasets"], answer: 1 },
      { chId: "c1", question: "A health endpoint tells you:", options: ["Model accuracy", "If the service is alive", "The dataset size", "The colour space"], answer: 1 },
      { chId: "c1", question: "Reproducibility means:", options: ["Faster runs", "Same result given same inputs", "Fewer parameters", "Bigger models"], answer: 1 },
      { chId: "c1", question: "A predict route typically:", options: ["Trains the model", "Accepts input and returns results", "Edits the dataset", "Deletes models"], answer: 1 }
    ],
    projects: [
      { title: "Serve & Observe a Model", brief: "Design a containerised model service: pick an API framework, define a predict route and health checks, and add structured request logging to prepare for later drift analysis.", objectives: ["Design the API routes", "Containerise the service", "Add health and readiness checks", "Log requests for monitoring"], deliverables: ["Service design", "Docker container plan", "Logging schema"], starterCode: '# Serve & Observe a Model\n# Simulated predict helper\nmodel = "v1"\nrequests = 40\nerrors = 2\nerror_rate = (errors / requests) * 100\nprint("Model:", model)\nprint("Error rate:", str(error_rate) + "%")' }
    ]
  },
  "mlops-deployment": {
    notes: {
      c1: {
        title: "Serialization, Serving & Containerization",
        intro: "Turning a trained model into a production endpoint requires serialisation, a serving API, and a container. This chapter covers model persistence, REST/gRPC serving, and Docker packaging.",
        sections: [
          { heading: "Serializing the Model", body: "Serialisation saves the trained weights and pipeline to a file (pickle/joblib or a framework format). The saved model is what the serving service loads at startup.", bullets: ["Persist weights and pipeline", "Joblib/pickle for sklearn", "Framework formats for DL", "Load once at startup"] },
          { heading: "Versioning the Model", body: "Each saved model gets a version. A registry maps version IDs to artifacts, so you can stage, promote, and roll back to a known-good model.", bullets: ["Every model has a version", "Registry maps versions to files", "Stage, promote, rollback", "Trace exactly what is served"] },
          { heading: "REST Serving", body: "A REST endpooint accepts JSON, passes it through the model, and returns JSON. A predict route plus validation of input shape and types forms a robust HTTP API.", bullets: ["Predict route accepts JSON", "Validate input shape", "Return structured JSON", "Handle errors gracefully"] },
          { heading: "gRPC for High Volume", body: "For low latency at high throughput, gRPC uses binary protobuf and streaming. It is heavier to set up but pays off for production inference at scale.", bullets: ["Binary protocol via protobuf", "Supports request streaming", "Lower overhead than JSON", "Good for high-volume serving"] },
          { heading: "Docker Packaging", body: "A Dockerfile defines the runtime: base Python image, dependencies, model files, and the command to start the API. Building and tagging an image creates a portable deployable.", bullets: ["Dockerfile defines the runtime", "Copy model + deps + code", "One image, reproducible", "Tag and push to a registry"] },
          { heading: "Input Validation", body: "Production models must reject bad input, not crash on it. Validate the feature count, types, and ranges before inference, returning clear errors for malformed requests.", bullets: ["Check feature count and type", "Reject malformed input", "Fail with clear messages", "Never trust raw client data"] }
        ],
        tip: "Load the model once at import/startup and reuse it across requests — reloading per request destroys throughput."
      },
      c2: {
        title: "Rollouts, Monitoring & Safe Updates",
        intro: "Deploying a new model safely means controlling the rollout and watching the service. This chapter covers canary and shadow deploys, health checks, and basic observability.",
        sections: [
          { heading: "Canary Deployment", body: "A canary rollout sends a small percentage of traffic to the new model while the rest stays on the old one. If it behaves, you gradually increase the share.", bullets: ["Route small % to the new model", "Monitor before increasing", "Compare against the old model", "Roll back if anything looks wrong"] },
          { heading: "Shadow Deployment", body: "Shadow mode runs the new model in parallel with production while discarding its responses. This reveals how it would behave on real traffic with zero risk to users.", bullets: ["Run the new model offline", "Send real traffic to both", "Discard shadow responses", "Profile behaviour safely"] },
          { heading: "Rollback & Roll Forward", body: "When a rollout fails, you can roll back to the previous version quickly or roll forward to a fixed one. Versioned images make rollback a registry pointer change.", bullets: ["Versioned images enable rollback", "Point the service at an old tag", "Roll forward to a fix", "Keep recent versions around"] },
          { heading: "Health & Readiness", body: "Health checks report whether the process is alive; readiness checks report whether it can serve traffic. Orchestrators use these to restart or unroute unhealthy pods.", bullets: ["Liveness = process is up", "Readiness = can serve", "Orchestrators act on them", "Prevents serving to a broken pod"] },
          { heading: "Request Logging", body: "Log each request with inputs, predictions, and latencies. Structured logs are the raw material for later drift analysis and debugging.", bullets: ["Log input + output", "Record latency", "Structured JSON logs", "Feeds monitoring later"] },
          { heading: "Basic Metrics", body: "Track request rate, error rate, and latency percentiles over time. A sudden error spike or latency rise is an early signal that something changed.", bullets: ["Track rate, errors, latency", "Watch percentiles not just means", "Alert on sharp changes", "Baseline before rollout"] }
        ],
        tip: "Always measure a baseline of latency and error rate before rolling out — you cannot detect regression without a baseline."
      }
    },
    exercises: [
      { chId: "c1", title: "Predict Output", instructions: "A predict helper computes x*0.5+10. Call it with 5 and print the result.", code: 'x = 5\nprint(x * 0.5 + 10)', expected: "12.5", hint: "5*0.5+10 = 12.5" },
      { chId: "c1", title: "Docker Layers", instructions: "Base image 3 layers + 4 app layers. Total?", code: 'base = 3\napp = 4\nprint(base + app)', expected: "7", hint: "Add them" },
      { chId: "c1", title: "Loaded Once", instructions: "100 requests reuse a model loaded once. How many loads?", code: 'loads = 1\nprint(loads)', expected: "1", hint: "Loaded at startup only" },
      { chId: "c2", title: "Canary Traffic", instructions: "10% of 200 requests go to the new model. How many?", code: 'traffic = 200\npct = 0.1\nprint(traffic * pct)', expected: "20", hint: "10% of 200" },
      { chId: "c2", title: "Error Spike", instructions: "Errors rose from 1 to 4 per thousand. Increase?", code: 'errors = 4\nprint(errors)', expected: "4", hint: "Current error count" },
      { chId: "c2", title: "Latency Budget", instructions: "A 200ms budget, service at 140ms. Headroom remaining?", code: 'budget = 200\nused = 140\nprint(budget - used)', expected: "60", hint: "Subtract used from budget" }
    ],
    quizzes: [
      { chId: "c1", question: "Which serialises a trained model to a file?", options: ["Docker", "pickle/joblib", "Cron", "Nginx"], answer: 1 },
      { chId: "c1", question: "A version registry lets you:", options: ["Change the data", "Stage and promote models", "Increase classes", "Speed up training"], answer: 1 },
      { chId: "c1", question: "Why load the model once at startup?", options: ["It is smaller", "Reuse boosts throughput", "It is more accurate", "It changes colour"], answer: 1 },
      { chId: "c2", question: "A canary rollout sends:", options: ["All traffic to new model", "A small traffic % to the new model", "No traffic", "Traffic only at night"], answer: 1 },
      { chId: "c2", question: "Shadow deployment runs the new model:", options: ["With risk to users", "Offline, discarding responses", "Only on weekends", "Replacing the old model"], answer: 1 },
      { chId: "c2", question: "Readiness checks indicate:", options: ["The process is alive", "The model can serve traffic", "The dataset is loaded", "The price is correct"], answer: 1 },
      { chId: "c2", question: "A good rollout baseline includes:", options: ["Nothing", "Latency and error rate", "Only model size", "Colour space"], answer: 1 },
      { chId: "c2", question: "Structured request logs are used for:", options: ["Image editing", "Later drift analysis", "Model training only", "Docker builds"], answer: 1 }
    ],
    projects: [
      { title: "Safe Rollout Plan", brief: "Plan a canary rollout of a new model version: define the traffic split, the health and readiness checks, the metrics to watch, and the rollback trigger.", objectives: ["Define the canary traffic split", "Write health/readiness checks", "Choose monitoring metrics", "Set the rollback trigger"], deliverables: ["Canary plan", "Health check config", "Metric watchlist"], starterCode: '# Safe Rollout Plan\ntotal = 500\ncanary_pct = 0.1\ncanary = total * canary_pct\nerrors = 3\nthreshold = 5\nprint("Canary requests:", int(canary))\nprint("Alert:", errors > threshold)' }
    ]
  },
  "ci-cd-ml": {
    notes: {
      c1: {
        title: "Testing & Versioning for ML",
        intro: "ML code fails silently — a shifted column or new category can degrade a model without an exception. This chapter covers automated tests on data and models, plus data and model versioning with DVC and MLflow.",
        sections: [
          { heading: "Testing Data", body: "Tests on data check schema, ranges, missing values, and label distributions. A test that catches a renamed column or a new class saves the model from silently degrading.", bullets: ["Check schema and column types", "Verify value ranges", "Catch missing or outliers", "Watch label drift early"] },
          { heading: "Testing Models", body: "Model tests verify the pipeline trains end-to-end, produces sane shapes, and meets baseline accuracy on a small holdout. They run fast so CI stays responsive.", bullets: ["Train a small end-to-end run", "Check output shape and type", "Enforce a baseline metric", "Keep tests fast for CI"] },
          { heading: "Data Versioning with DVC", body: "DVC stores lightweight pointers to datasets and tracks which data version produced which run. Huge files live in object storage while git tracks the versions and pipelines.", bullets: ["Pointer files, not huge blobs", "Track data versions in git", "Dataset stored remotely", "Reproduce runs with a checkout"] },
          { heading: "Experiment Tracking with MLflow", body: "MLflow records params, metrics, and artifacts per run. Combining tracked metrics with tracked data and code makes every experiment fully reproducible.", bullets: ["Log params and metrics", "Log code and artifacts", "Compare many runs", "Recreate any run"] },
          { heading: "Invariant Checks", body: "Invariants are non-negotiables: no NaN in features, class balance within bounds, monotonic relationships intact. Breaking an invariant should fail the pipeline.", bullets: ["No NaN in training input", "Class balance within bounds", "Known volume ratios", "Fail fast on violations"] },
          { heading: "The Reproducibility Chain", body: "Code + data + parameters together define a run. Tracking all three means you can rebuild any historical artifact and trust what is currently in production.", bullets: ["Code + data + params = run", "Version all three", "Rebuild historical artifacts", "Know what is in production"] }
        ],
        tip: "Write data tests first — most silent model failures begin as data changes, not code changes."
      },
      c2: {
        title: "Automated Pipelines & Staged Promotion",
        intro: "CI/CD for ML automates lint, test, train, evaluate, and promote. This chapter covers pipeline stages, quality gates, and staged promotion to production.",
        sections: [
          { heading: "The ML Pipeline Stages", body: "A typical CI pipeline runs lint and unit tests, then data tests, then a training stage that fits a model, then an evaluation stage that checks quality before anything is promoted.", bullets: ["Lint and unit tests", "Data and schema tests", "Train a candidate model", "Evaluate before promote"] },
          { heading: "Quality Gates", body: "A gate blocks promotion unless metrics pass: validation accuracy above a floor, no regression against the champion, drift within limits. Failing the gate leaves the old model in place.", bullets: ["Metric must clear the floor", "No regression vs champion", "Drift within limits", "Failure keeps the old model"] },
          { heading: "Train on Every Commit", body: "Running training in CI on every relevant change catches regressions early. Cache datasets and intermediate artifacts so the pipeline stays fast.", bullets: ["Run on every commit", "Cache data and artifacts", "Catch regressions early", "Keep the loop fast"] },
          { heading: "Staged Promotion", body: "Models move through stages: development, staging, production. Each stage has its own gates, so only validated models reach real traffic.", bullets: ["Dev -> staging -> production", "Gates at each stage", "Promote on merit", "Manual approval for production"] },
          { heading: "Reproducible Runs", body: "Pin dependency versions and use tracked data so the same commit re-runs identically. Container images freeze the environment end-to-end.", bullets: ["Pin dependency versions", "Use tracked data", "Freeze the image", "Same commit, same result"] },
          { heading: "Rollback via Versioning", body: "Because every deployed model is versioned and tracked, rolling back is a matter of pointing the service at a previously validated version.", bullets: ["Every model is versioned", "Point at a known-good version", "Rollback is instant", "Registry holds the history"] }
        ],
        tip: "Cache the training dataset and base dependencies in CI — fast pipelines get run, slow ones get skipped."
      }
    },
    exercises: [
      { chId: "c1", title: "Test Count", instructions: "5 unit tests and 3 data tests. Total?", code: 'unit = 5\ndata = 3\nprint(unit + data)', expected: "8", hint: "Add them" },
      { chId: "c1", title: "Null Check", instructions: "Sample has 12 rows, 3 with null feature. How many valid?", code: 'rows = 12\nnulls = 3\nprint(rows - nulls)', expected: "9", hint: "Subtract nulls" },
      { chId: "c1", title: "Data Versions", instructions: "DVC tracks 4 dataset versions. Count them.", code: 'versions = 4\nprint(versions)', expected: "4", hint: "Number of versions" },
      { chId: "c2", title: "Gate Check", instructions: "Validation accuracy 0.85; promote if >= 0.8 else block.", code: 'acc = 0.85\nprint("promote" if acc >= 0.8 else "block")', expected: "promote", hint: "0.85 >= 0.8" },
      { chId: "c2", title: "Stage Count", instructions: "Dev, staging, production. Count stages.", code: 'stages = ["dev", "staging", "prod"]\nprint(len(stages))', expected: "3", hint: "len() counts them" },
      { chId: "c2", title: "Regression Check", instructions: "New model 0.9, champion 0.87. Print improvement.", code: 'new = 0.9\nchamp = 0.87\nprint(new - champ)', expected: "0.030000000000000027", hint: "Subtract champion from new" }
    ],
    quizzes: [
      { chId: "c1", question: "A key reason to test data is to:", options: ["Catch silent schema/label drift", "Increase model size", "Replace unit tests", "Speed up git"], answer: 0 },
      { chId: "c1", question: "DVC versioning stores:", options: ["Full big datasets in git", "Pointers while data lives remotely", "Only code", "Only models"], answer: 1 },
      { chId: "c1", question: "An invariant check might enforce:", options: ["No NaN in features", "More epochs", "Colour space", "Bigger batch"], answer: 0 },
      { chId: "c2", question: "A quality gate:", options: ["Always promotes", "Blocks promotion unless metrics pass", "Deletes models", "Trains faster"], answer: 1 },
      { chId: "c2", question: "Staged promotion means:", options: ["One stage only", "Models advance from dev to prod via gates", "No promotion", "Only local training"], answer: 1 },
      { chId: "c2", question: "Reproducible runs require:", options: ["Random versions", "Pinned dependencies + tracked data", "No versioning", "Manual steps"], answer: 1 },
      { chId: "c2", question: "Rolling back a model release uses:", options: ["A versioned registry", "Redeploying from memory", "Deleting the dataset", "Rebooting"], answer: 0 },
      { chId: "c2", question: "Training in CI on every commit:", options: ["Causes more bugs", "Catches regressions early", "Wastes nothing", "Skips testing"], answer: 1 }
    ],
    projects: [
      { title: "Automated Retraining Pipeline", brief: "Design a CI pipeline that retrains on new data, runs unit and data tests, gates on a quality threshold, and only promotes better models to staging with tracked runs.", objectives: ["Define test stages", "Version data and runs", "Set the quality gate", "Automate staged promotion"], deliverables: ["Pipeline stage list", "Versioning approach", "Gate and promotion plan"], starterCode: '# Automated Retraining Pipeline\nunit_passed = True\ndata_passed = True\nacc = 0.88\nchamp = 0.85\ngate = (acc >= 0.8) and (acc - champ > 0)\nstatus = "promote" if gate else "block"\nprint("Tests:", unit_passed and data_passed)\nprint("Decision:", status)' }
    ]
  },
  "monitoring-drift": {
    notes: {
      c1: {
        title: "Drift Concepts & Statistical Tests",
        intro: "Models decay because the world changes. This chapter distinguishes data drift, concept drift, and label drift, and introduces the statistical tests that detect distribution changes.",
        sections: [
          { heading: "Data Drift", body: "Data drift is a change in the input feature distribution between the training baseline and live traffic. New user demographics, seasonal shifts, or sensor changes all cause it.", bullets: ["Input features shift", "Baseline vs live comparison", "Seasonal or population change", "The model sees unfamiliar data"] },
          { heading: "Concept Drift", body: "Concept drift is a change in the relationship between input and output. The same features now map to different outcomes, so even unchanged inputs give wrong answers.", bullets: ["P(X -> y) changes", "Inputs may stay the same", "Rules of the world change", "Harder to detect than data drift"] },
          { heading: "Label Drift", body: "Label drift means the distribution of target values shifts, often with delayed or changing ground truth. It complicates measuring real performance in production.", bullets: ["Target distribution shifts", "Ground truth often delayed", "Masks real-world change", "Needs fallback monitoring"] },
          { heading: "Comparing Distributions", body: "Statistical tests compare a reference distribution with a live window. Large differences indicate drift. Tests adapt to whether the data is continuous, categorical, or high-dimensional.", bullets: ["Compare baseline to window", "Tests measure distribution distance", "Pick test by data type", "Large difference = drift"] },
          { heading: "Detecting Drift vs Pure Change", body: "Not every change is a problem. Tests and thresholds filter noise so you alert on meaningful drift that could hurt the model, not routine fluctuation.", bullets: ["Filter routine noise", "Alert on meaningful drift", "Set thresholds deliberately", "Avoid alert fatigue"] },
          { heading: "Monitoring Without Labels", body: "When true labels lag, use proxies: prediction distribution stability, feature shifts, and confidence scores. These flag likely degradation before labels arrive.", bullets: ["Use feature drift as proxy", "Watch the prediction distribution", "Track confidence score shifts", "Act before labels arrive"] }
        ],
        tip: "Establish a solid baseline distribution before you need it — you cannot measure drift against a baseline you never captured."
      },
      c2: {
        title: "Thresholds, Alerts & Retraining",
        intro: "Detected drift only helps if it triggers action. This chapter covers setting thresholds, designing alerts that avoid fatigue, and wiring alerts into retraining workflows.",
        sections: [
          { heading: "Setting Thresholds", body: "A threshold is the drift magnitude that triggers an alert. Set it from historical variation so normal movement does not alert but genuine shifts do.", bullets: ["Threshold reflects normal variation", "Too low = alert fatigue", "Too high = missed drift", "Calibrate from history"] },
          { heading: "Alert Design", body: "Good alerts are specific, act on stable signals (not single spikes), and include context. Grouping and cooldowns reduce false alarms.", bullets: ["Act on sustained signals", "Include context in alerts", "Cooldown prevents spam", "Route to the right owner"] },
          { heading: "False Positives vs Missed Drift", body: "Set thresholds to avoid crying wolf while still catching real decay. A slightly conservative threshold that misses rare changes is safer than one that alerts on everything.", bullets: ["Balance noise vs missed events", "Favour fewer false alarms", "Never block real decay", "Review and tune over time"] },
          { heading: "Drift-to-Retrain Workflow", body: "An alert should trigger a defined workflow: revalidate data, retrain on recent data, evaluate against the champion, and only promote if it does not regress.", bullets: ["Alert -> retrain trigger", "Revalidate incoming data", "Evaluate vs champion", "Promote only on merit"] },
          { heading: "Reporting & Dashboards", body: "Dashboards visualise drift metrics, thresholds, and recent alerts. A clear view helps teams spot trends and justify retraining investments.", bullets: ["Visualise drift over time", "Overlay thresholds", "Track alert history", "Spot upstream trends"] },
          { heading: "Retraining Cadence", body: "Decide between scheduled and drift-triggered retraining. Scheduled runs are predictable; drift-triggered runs react promptly and spend compute only when needed.", bullets: ["Scheduled vs trigger-based", "React promptly to drift", "Spend compute on demand", "Combine cadence and triggers"] }
        ],
        tip: "Wire drift alerts to an automated retraining trigger, but always gate the new model on performance — retraining on bad data is worse than doing nothing."
      }
    },
    exercises: [
      { chId: "c1", title: "Mean Shift", instructions: "Reference 2.0, window 3.3. Print 'drift' if the difference exceeds 0.5.", code: 'ref = 2.0\nwin = 3.3\nprint("drift" if abs(win - ref) > 0.5 else "ok")', expected: "drift", hint: "|3.3-2.0|=1.3" },
      { chId: "c1", title: "Distribution Distance", instructions: "Reference mean 5.0, live window 6.2. Print the raw difference.", code: 'ref = 5.0\nwin = 6.2\nprint(win - ref)', expected: "1.2", hint: "Subtract reference" },
      { chId: "c1", title: "Baseline Size", instructions: "Two thirds of 300 samples form the baseline. Size?", code: 'samples = 300\nfrac = 2 / 3\nprint(samples * frac)', expected: "200", hint: "300 * 2/3" },
      { chId: "c2", title: "Threshold Alert", instructions: "Drift score 0.7 with threshold 0.5. Print 'alert'.", code: 'score = 0.7\nthr = 0.5\nprint("alert" if score > thr else "ok")', expected: "alert", hint: "0.7 > 0.5" },
      { chId: "c2", title: "Retrain Gain", instructions: "Retrained model 0.9, current 0.82. Improvement?", code: 'new = 0.9\ncur = 0.82\nprint(new - cur)', expected: "0.08000000000000007", hint: "Subtract current" },
      { chId: "c2", title: "Alert Cooldown", instructions: "At most 3 alerts per hour in 6 hours. Capacity?", code: 'per_hour = 3\nhours = 6\nprint(per_hour * hours)', expected: "18", hint: "Multiply" }
    ],
    quizzes: [
      { chId: "c1", question: "Data drift is a change in:", options: ["Input feature distribution", "Model size", "Number of layers", "Colour space"], answer: 0 },
      { chId: "c1", question: "Concept drift is best described as:", options: ["The target relationship changing over time", "Images getting larger", "Faster GPUs", "Smaller datasets"], answer: 0 },
      { chId: "c1", question: "A proxy to detect decay without labels is:", options: ["Feature drift", "Model size", "Docker image", "Git branch"], answer: 0 },
      { chId: "c1", question: "An important baseline for drift testing is:", options: ["The training input distribution", "The current time", "The GPU count", "The dataset file name"], answer: 0 },
      { chId: "c2", question: "A threshold that is too low causes:", options: ["Missed drift", "Alert fatigue", "Faster training", "Better accuracy"], answer: 1 },
      { chId: "c2", question: "Good alerts should act on:", options: ["Single random spikes", "Sustained signals", "No signal at all", "Model size changes"], answer: 1 },
      { chId: "c2", question: "After a drift alert you should:", options: ["Ignore it", "Revalidate and retrain on fresh data", "Delete the model", "Reboot the server"], answer: 1 },
      { chId: "c2", question: "Drift-triggered retraining:", options: ["Spends compute only when needed", "Always retrains", "Never retrains", "Slows all serving"], answer: 0 }
    ],
    projects: [
      { title: "Drift Monitor & Retrain Trigger", brief: "Build a monitoring plan that compares a live feature window against a baseline with a statistical test, sets a threshold, logs results, and triggers retraining on meaningful drift.", objectives: ["Compute a drift statistic", "Set an alert threshold", "Log the drift history", "Define the retrain trigger"], deliverables: ["Drift computation", "Threshold and alert policy", "Retrain workflow"], starterCode: '# Drift Monitor & Retrain Trigger\nref_mean = 5.0\nwin_mean = 6.4\nthr = 0.5\n\n# Count feature drift above threshold\nref = [5.1, 4.9, 5.0, 5.2]\nwin = [6.3, 6.6, 6.2, 6.5]\ndrifted = 0\nfor i in range(len(ref)):\n    if abs(win[i] - ref[i]) > thr:\n        drifted = drifted + 1\noverall = abs(win_mean - ref_mean) > thr\nprint("Drifted features:", drifted)\nprint("Alert:", overall)' }
    ]
  },
  "mlops-kubernetes": {
    notes: {
      c1: {
        title: "Kubernetes Workloads & Services",
        intro: "Kubernetes orchestrates containerised services across many servers. This chapter covers the core objects — pods, Deployments, Services — and how stateless model services run as replicas behind a Service.",
        sections: [
          { heading: "Pods & Containers", body: "A Pod is the smallest unit Kubernetes runs — one or more containers sharing a network and storage. A model API typically runs as a single container inside a Pod.", bullets: ["Pod wraps one or more containers", "Containers share network", "Pod is the scheduling unit", "Runs the model container"] },
          { heading: "Deployments", body: "A Deployment declares the desired number of identical Pod replicas and keeps them running. If a Pod dies, the Deployment replaces it to match the target.", bullets: ["Declares desired replica count", "Keeps Pods healthy", "Replaces failed Pods", "Enables scaling and updates"] },
          { heading: "Replica Scaling", body: "Increasing replicas adds more instances of the model service behind the same endpoint, spreading load. Scaling is horizontal: more Pods rather than a bigger one.", bullets: ["More replicas = more capacity", "Distributed behind a Service", "Scaling is horizontal", "Balance load across Pods"] },
          { heading: "Services", body: "A Service gives Pods a stable network identity and load-balances traffic to them. Client requests hit the Service and are distributed to healthy Pods.", bullets: ["Stable cluster DNS name", "Load-balances to Pods", "Hides Pod churn", "Single entrypoint to replicas"] },
          { heading: "Rolling Updates", body: "Updating a Deployment replaces Pods gradually, keeping the service running throughout. Kubernetes checks the new Pods are ready before proceeding.", bullets: ["Replace Pods gradually", "Service stays available", "Readiness gates the roll", "Rollback on failure"] },
          { heading: "Namespaces", body: "Namespaces partition a cluster so teams and environments (dev, staging, prod) run in isolation without interfering with each other.", bullets: ["Isolate environments", "Separate teams", "Shared cluster, isolated workloads", "Clear ownership"] }
        ],
        tip: "Model services are stateless — keep no per-request state inside the Pod so any replica can serve any request and scaling stays simple."
      },
      c2: {
        title: "Autoscaling, GPU & KServe",
        intro: "Scaling ML on Kubernetes means autoscaling to load, scheduling GPU-backed serving, and using KServe for production inference. This chapter covers HPA, GPU scheduling, and KServe InferenceServices.",
        sections: [
          { heading: "Horizontal Pod Autoscaler", body: "The HPA adjusts the replica count from a target metric, usually CPU usage or requests per second. As load rises, it scales out; as it falls, it scales back in.", bullets: ["Scales on a target metric", "Commonly CPU or request rate", "Adds replicas under load", "Removes replicas when idle"] },
          { heading: "Resource Requests & Limits", body: "Requests reserve resources so the scheduler places Pods sensibly; limits cap how much a Pod may consume. Correct values prevent both starvation and throttling.", bullets: ["Requests reserve resources", "Limits cap consumption", "Prevents overcommit", "Plan from measured usage"] },
          { heading: "GPU Scheduling", body: "GPU workloads request a GPU device; the scheduler places the Pod on a node with GPU capacity. GPU requests are scarce and must be declared explicitly.", bullets: ["Request GPU in the spec", "Scheduler finds GPU nodes", "GPUs are scarce resources", "Share or partition carefully"] },
          { heading: "KServe InferenceServices", body: "KServe abstracts the whole serving stack: it creates the Deployment, Service, and autoscaling for a model, exposing a standard inference endpoint.", bullets: ["Declarative model serving", "Creates Deployment and Service", "Adds autoscaling automatically", "Standard inference endpoint"] },
          { heading: "Autoscaling for Inference", body: "Serving autoscaling reacts to request load, scaling up cold on spikes and down during lulls. Warm-up and scale-to-zero balance responsiveness and cost.", bullets: ["React to request load", "Scale down when idle", "Scale-to-zero cuts cost", "Cold start is a trade-off"] },
          { heading: "Capacity Planning", body: "Plan replicas from predicted peak load and per-Pod capacity. An HPA range must cover the peak or the service will saturate under surge traffic.", bullets: ["Estimate peak load", "Know per-Pod capacity", "Set HPA max accordingly", "Over-provision with cushion"] }
        ],
        tip: "Set the HPA ceiling from your modelled peak demand — an autoscaler can only scale within the limits you declare."
      }
    },
    exercises: [
      { chId: "c1", title: "Replica Capacity", instructions: "Each pod handles 60 RPS, need 240. Minimum replicas (round up).", code: 'rps_pod = 60\nneeded = 240\nprint((needed + rps_pod - 1) // rps_pod)', expected: "4", hint: "Ceiling of 240/60" },
      { chId: "c1", title: "Replica Count", instructions: "Control plane favours 6 replicas of 2 environments. Total pods?", code: 'replicas = 6\nenvs = 2\nprint(replicas * envs)', expected: "12", hint: "Multiply" },
      { chId: "c1", title: "Rolling Budget", instructions: "8 replicas staged in batches of 2. Batches to complete a roll?", code: 'replicas = 8\nbatch = 2\nprint(replicas // batch)', expected: "4", hint: "Divide" },
      { chId: "c2", title: "HPA Scale", instructions: "CPU at 90% target 60%. Required hidden scale factor = 90/60 floor.", code: 'cpu = 90\ntarget = 60\nprint(cpu // target)', expected: "1", hint: "90 // 60" },
      { chId: "c2", title: "GPU Nodes", instructions: "6 GPU pods, 2 per node. Nodes needed?", code: 'pods = 6\nper_node = 2\nprint(pods // per_node)', expected: "3", hint: "6 / 2" },
      { chId: "c2", title: "Scale Down", instructions: "16 replicas halve to target load. Target count?", code: 'replicas = 16\nprint(replicas // 2)', expected: "8", hint: "Halve the replicas" }
    ],
    quizzes: [
      { chId: "c1", question: "Scaling a Deployment's replicas primarily:", options: ["Increases available instances", "Changes the model", "Edits the dataset", "Deletes the image"], answer: 0 },
      { chId: "c1", question: "The smallest unit Kubernetes runs is:", options: ["A node", "A Pod", "A namespace", "A Service"], answer: 1 },
      { chId: "c1", question: "A Service provides:", options: ["A stable network identity", "The model weights", "Datasets", "GPU drivers"], answer: 0 },
      { chId: "c1", question: "A Deployment ensures:", options: ["Desired replicas stay running", "Data is versioned", "Models are trained", "Metrics are logged"], answer: 0 },
      { chId: "c2", question: "The HPA scales based on:", options: ["Model accuracy", "A target metric like CPU", "Repository size", "Class count"], answer: 1 },
      { chId: "c2", question: "GPU scheduling requires:", options: ["Declaring a GPU request", "No special setup", "Fewer replicas", "A bigger dataset"], answer: 0 },
      { chId: "c2", question: "KServe provides:", options: ["Declarative model serving", "Dataset labelling", "Model training", "Colour conversion"], answer: 0 },
      { chId: "c2", question: "Scale-to-zero helps by:", options: ["Reducing cost when idle", "Improving accuracy", "Adding GPUs", "Versioning models"], answer: 0 },
      { chId: "c2", question: "The HPA maximum must:", options: ["Cover the predicted peak", "Be zero", "Equal the minimum", "Exceed the dataset"], answer: 0 },
      { chId: "c2", question: "Vertical scaling means:", options: ["More Pods", "A bigger instance/resource per Pod", "More nodes only", "More namespaces"], answer: 1 }
    ],
    projects: [
      { title: "Scale a Model Service on Kubernetes", brief: "Define a Deployment, Service, and HPA for a model endpoint; plan autoscaling from modelled load, add GPU scheduling for inference, and validate behaviour under a simulated load test.", objectives: ["Write Deployment + Service YAML", "Configure the HPA", "Declare GPU requests", "Model the peak load"], deliverables: ["Kubernetes manifests", "Autoscaling configuration", "Capacity model"], starterCode: '# Scale a Model Service on Kubernetes\nrps_per_pod = 60\npeak_rps = 480\nmin_replicas = 2\nmax_replicas = 12\nneeded = (peak_rps + rps_per_pod - 1) // rps_per_pod\nprint("Replicas at peak:", needed)\nprint("HPA range:", min_replicas, "to", max_replicas)' }
    ]
  }
};
