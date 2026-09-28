export const mlopsCourses = [
  {
    id: "mlops-deployment",
    slug: "mlops-deployment",
    title: "ML Model Deployment",
    short: "Ship ML models as reliable, observable production services.",
    description: "Turn trained models into production endpoints: model serialization, serving via REST, containerization with Docker, and safe rollouts — with monitoring baked in from day one.",
    level: "Advanced",
    duration: "8 hours",
    hours: 8,
    xp: 2400,
    category: "MLOps",
    instructor: "Tatenda Moyo",
    instructorTitle: "Senior Data Engineer",
    instructorBio: "Data/MLE engineer focused on reliable model delivery.",
    instructorAvatar: "python",
    rating: 4.7,
    students: 21250,
    icon: "bi-rocket-takeoff",
    image: "python",
    color: "#0ea5e9",
    tags: ["Deployment", "Serving", "Docker", "REST API", "Monitoring"],
    prerequisites: ["ml-supervised", "python-ds"],
    learningOutcomes: [
      "Serialize and version trained models",
      "Expose models through REST and gRPC endpoints",
      "Containerize services with Docker",
      "Design health checks and safe rollouts",
      "Add logging and basic metrics to services"
    ],
    skills: ["Model Serving", "REST/gRPC", "Docker", "Health Checks", "Rollouts"],
    difficulty: "Advanced — Python + basic ML",
    resources: [
      { type: "github", title: "DeployLab", url: "https://github.com/zimlink/deploylab" },
      { type: "pdf", title: "Serving Patterns", url: "/assets/serving-patterns.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-MLOPS-401",
      title: "Certificate of Competence — ML Model Deployment",
      level: "Level 5",
      eqf: "EQF 6",
      rqf: "RQF Level 5",
      credits: 12,
      notionalHours: 32,
      validityYears: 2,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 5 / EQF 6 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "MLOPS-401-C1", title: "Serialization & serving", weight: 40 },
        { code: "MLOPS-401-C2", title: "Containerization & rollouts", weight: 35 },
        { code: "MLOPS-401-C3", title: "Observability", weight: 25 }
      ],
      examId: "exam-mlops"
    },
    chapters: [
      {
        id: "c1",
        title: "Serving & Containerizing",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "From Notebook to API", duration: "10:00", content: "Pickling/joblib models, predict routes, and validation of inputs." },
          { id: "c1l2", type: "exercise", title: "Predict Helper", duration: "10 min", xp: 100, instructions: "Define a function predict(x) that returns a simulated score, call it with 5, and print the type name of its return value.", language: "python", starterCode: "def predict(x):\n    return x * 0.5 + 10\nprint(type(predict(5)).__name__)", solution: "def predict(x):\n    return x * 0.5 + 10\nprint(type(predict(5)).__name__)", hint: "5*0.5+10 = 12.5", tests: [{ expected: "float" }] }
        ]
      },
      {
        id: "c2",
        title: "Rollouts & Monitoring",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Canary & Shadow", duration: "10:00", content: "Gradual rollouts and shadow logging for model comparison." },
          { id: "c2l2", type: "quiz", title: "Monitoring", duration: "4 min", xp: 50, question: "Which is a good signal to track for a deployed classifier?", options: ["Prediction distribution over time", "Pipeline load only", "Git branch name", "Model file size"], answer: 0 }
        ]
      }
    ],
    capstone: {
      id: "capstone-mlops-401",
      title: "Deploy & Observe a Model",
      description: "Serve a trained classifier behind a containerized REST API with a health endpoint and structured request/response logging for later drift analysis.",
      duration: "2.5 hours",
      xp: 600,
      requirements: ["Serve model via API", "Containerize with Docker", "Add health check", "Log requests"],
      deliverables: [{ type: "code", name: "service.py", description: "API" }, { type: "code", name: "Dockerfile", description: "Container" }]
    },
    advanced: {
      id: "adv-mlops-401",
      title: "Advanced: Model Versioning & Rollback",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Model Registry", duration: "10:00", content: "Registering, staging, and promoting model versions." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Serving Models in Prod", duration: "15:00", instructor: "Tatenda Moyo", topic: "Deployment" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["MLOps Engineer", "ML Engineer", "Data Engineer"]
  },
  {
    id: "ci-cd-ml",
    slug: "ci-cd-ml",
    title: "CI/CD for Machine Learning",
    short: "Automate ML pipelines with testing, versioning, and pipelines-as-code.",
    description: "Bring software engineering rigor to ML: automated tests, data and model versioning (DVC/MLflow), and continuous integration/deployment for both code and models with reproducible runs.",
    level: "Advanced",
    duration: "8 hours",
    hours: 8,
    xp: 2400,
    category: "MLOps",
    instructor: "Tatenda Moyo",
    instructorTitle: "Senior Data Engineer",
    instructorBio: "Built CI/CD for ML at scale and teaches reproducible pipelines.",
    instructorAvatar: "python",
    rating: 4.6,
    students: 14880,
    icon: "bi-arrow-left-right",
    image: "python",
    color: "#10b981",
    tags: ["CI/CD", "DVC", "MLflow", "Testing", "Reproducibility"],
    prerequisites: ["ml-supervised", "python-ds", "mlops-deployment"],
    learningOutcomes: [
      "Write unit tests for data transforms and models",
      "Track data and model versions with DVC/MLflow",
      "Automate training and evaluation in CI",
      "Set up deployment pipelines with staged promotion",
      "Ensure reproducible training runs"
    ],
    skills: ["CI Pipelines", "DVC", "MLflow", "Testing", "Reproducibility"],
    difficulty: "Advanced — Python + dev practices + basic ML",
    resources: [
      { type: "github", title: "ML-CICD", url: "https://github.com/zimlink/ml-cicd" },
      { type: "pdf", title: "Pipelines-as-Code", url: "/assets/pipelines.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-CICD-402",
      title: "Certificate of Competence — CI/CD for Machine Learning",
      level: "Level 5",
      eqf: "EQF 6",
      rqf: "RQF Level 5",
      credits: 12,
      notionalHours: 32,
      validityYears: 2,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 5 / EQF 6 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "CICD-402-C1", title: "Testing data & model code", weight: 35 },
        { code: "CICD-402-C2", title: "Versioning (DVC/MLflow)", weight: 35 },
        { code: "CICD-402-C3", title: "Automated pipelines", weight: 30 }
      ],
      examId: "exam-ci-cd-ml"
    },
    chapters: [
      {
        id: "c1",
        title: "Testing & Versioning",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Test Your Data & Model", duration: "10:00", content: "Schema checks, invariants, and reproducible data pipelines with DVC." },
          { id: "c1l2", type: "quiz", title: "Why Test Data", duration: "4 min", xp: 50, question: "A key reason to test data is to:", options: ["Catch silent schema/label drift", "Increase model size", "Replace unit tests", "Speed up git"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Automated Pipelines",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Train on Every Commit", duration: "10:00", content: "CI stages: lint, test, train, evaluate gate, then promote." },
          { id: "c2l2", type: "exercise", title: "Gate Logic", duration: "10 min", xp: 100, instructions: "Promote a model only if its validation accuracy >= 0.8; print 'promote' or 'block'.", language: "python", starterCode: "acc = 0.85\nprint('promote' if acc >= 0.8 else 'block')", solution: "acc = 0.85\nprint('promote' if acc >= 0.8 else 'block')", hint: "0.85 >= 0.8", tests: [{ expected: "promote" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-cicd-402",
      title: "Automated Retraining Pipeline",
      description: "Design a pipeline that retrains on new data, gates on a quality threshold, and only promotes better models to staging using tracked runs.",
      duration: "2.5 hours",
      xp: 600,
      requirements: ["Version data with DVC", "Log runs to MLflow", "Add eval gate", "Stage promotion"],
      deliverables: [{ type: "code", name: "pipeline.py", description: "Pipeline" }, { type: "code", name: "ci.yml", description: "CI config" }]
    },
    advanced: {
      id: "adv-cicd-402",
      title: "Advanced: Experiment Tracking at Scale",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "MLflow Tracking", duration: "10:00", content: "Comparing experiments, parameters, and metrics systematically." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "CI/CD for ML", duration: "15:00", instructor: "Tatenda Moyo", topic: "Pipelines" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["MLOps Engineer", "ML Engineer", "Platform Engineer"]
  },
  {
    id: "monitoring-drift",
    slug: "monitoring-drift",
    title: "Monitoring & Drift Detection",
    short: "Detect when your model's world changes before it fails silently.",
    description: "Monitor models in production: track data drift, concept drift, and model performance decay, and set up meaningful alerts so you retrain before quality drops unnoticed.",
    level: "Advanced",
    duration: "7 hours",
    hours: 7,
    xp: 2100,
    category: "MLOps",
    instructor: "Tatenda Moyo",
    instructorTitle: "Senior Data Engineer",
    instructorBio: "Observability-focused MLE building early-warning ML systems.",
    instructorAvatar: "python",
    rating: 4.6,
    students: 13290,
    icon: "bi-activity",
    image: "python",
    color: "#f59e0b",
    tags: ["Drift", "Monitoring", "Alerts", "ML Observability", "Retraining"],
    prerequisites: ["ml-supervised", "python-ds", "mlops-deployment"],
    learningOutcomes: [
      "Define and measure data and concept drift",
      "Use statistical tests to compare distributions",
      "Evaluate drift thresholds and alert design",
      "Detect silent model degradation",
      "Trigger retraining workflows from alerts"
    ],
    skills: ["Drift Detection", "Statistical Tests", "Alerting", "ML Monitoring", "Retraining Triggers"],
    difficulty: "Advanced — Python + statistics + ML",
    resources: [
      { type: "github", title: "DriftLab", url: "https://github.com/zimlink/driftlab" },
      { type: "pdf", title: "Drift Detection Guide", url: "/assets/drift-guide.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-DRIFT-403",
      title: "Certificate of Competence — Monitoring & Drift Detection",
      level: "Level 5",
      eqf: "EQF 6",
      rqf: "RQF Level 5",
      credits: 11,
      notionalHours: 28,
      validityYears: 2,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 5 / EQF 6 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "DRIFT-403-C1", title: "Drift types & tests", weight: 40 },
        { code: "DRIFT-403-C2", title: "Thresholds & alerting", weight: 30 },
        { code: "DRIFT-403-C3", title: "Retraining workflows", weight: 30 }
      ],
      examId: "exam-drift"
    },
    chapters: [
      {
        id: "c1",
        title: "Drift Concepts & Tests",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Data vs Concept Drift", duration: "10:00", content: "Feature drift, label drift, and decay in the real world." },
          { id: "c1l2", type: "exercise", title: "Mean Shift", duration: "10 min", xp: 100, instructions: "Given a reference mean and a window mean, print 'drift' if the difference exceeds 0.5.", language: "python", starterCode: "ref = 2.0; win = 3.3\nprint('drift' if abs(win-ref) > 0.5 else 'ok')", solution: "ref = 2.0; win = 3.3\nprint('drift' if abs(win-ref) > 0.5 else 'ok')", hint: "|3.3-2.0|=1.3", tests: [{ expected: "drift" }] }
        ]
      },
      {
        id: "c2",
        title: "Alerts & Retraining",
        duration: "2.5 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Designing Alerts", duration: "9:00", content: "Balancing false positives with meaningful drift alerts." },
          { id: "c2l2", type: "quiz", title: "Concept Drift", duration: "4 min", xp: 50, question: "Concept drift is best described as:", options: ["The target relationship changing over time", "Images getting larger", "Faster GPUs", "Smaller datasets"], answer: 0 }
        ]
      }
    ],
    capstone: {
      id: "capstone-drift-403",
      title: "Drift Monitor Dashboard",
      description: "Build a monitor that checks an incoming feature stream for drift against a baseline, logs statistics, and raises alerts that could trigger retraining.",
      duration: "2 hours",
      xp: 550,
      requirements: ["Compute drift stats", "Set alert threshold", "Log results", "Simulate a retrain trigger"],
      deliverables: [{ type: "code", name: "monitor.py", description: "Monitor" }, { type: "report", name: "alerts.md", description: "Alert log" }]
    },
    advanced: {
      id: "adv-drift-403",
      title: "Advanced: Predictive Monitoring",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Anticipate Degradation", duration: "9:00", content: "Using performance drift proxies when labels are delayed." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Drift in the Wild", duration: "14:00", instructor: "Tatenda Moyo", topic: "Monitoring" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["MLOps Engineer", "ML Engineer", "SRE for ML"]
  },
  {
    id: "mlops-kubernetes",
    slug: "mlops-kubernetes",
    title: "Scaling ML with Kubernetes",
    short: "Orchestrate and scale ML workloads with Kubernetes and KServe.",
    description: "Deploy and scale models on Kubernetes: pods, deployments, autoscaling, and KServe inference with GPU scheduling and rolling updates for robust large-scale serving.",
    level: "Advanced",
    duration: "9 hours",
    hours: 9,
    xp: 2700,
    category: "MLOps",
    instructor: "Tatenda Moyo",
    instructorTitle: "Senior Data Engineer",
    instructorBio: "Platform engineer running ML infra on Kubernetes.",
    instructorAvatar: "python",
    rating: 4.5,
    students: 11840,
    icon: "bi-boxes",
    image: "python",
    color: "#3b82f6",
    tags: ["Kubernetes", "KServe", "Autoscaling", "GPU", "Orchestration"],
    prerequisites: ["python-ds", "mlops-deployment", "ci-cd-ml"],
    learningOutcomes: [
      "Deploy stateless model services as Kubernetes workloads",
      "Expose services and manage updates with rolling deploys",
      "Configure HPA autoscaling for inference load",
      "Schedule GPU-backed model serving with KServe",
      "Set resource limits and analyze pod behavior"
    ],
    skills: ["Kubernetes", "KServe", "Autoscaling", "GPU Scheduling", "Rolling Updates"],
    difficulty: "Advanced — production ML + container experience",
    resources: [
      { type: "github", title: "K8s-ML", url: "https://github.com/zimlink/k8s-ml" },
      { type: "pdf", title: "K8s for ML", url: "/assets/k8s-ml.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-K8S-404",
      title: "Certificate of Competence — Scaling ML with Kubernetes",
      level: "Level 5",
      eqf: "EQF 6",
      rqf: "RQF Level 5",
      credits: 13,
      notionalHours: 36,
      validityYears: 2,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 5 / EQF 6 / SFIA",
      assessment: "75-min qualifying exam (75% pass)",
      competencies: [
        { code: "K8S-404-C1", title: "Workloads & services", weight: 35 },
        { code: "K8S-404-C2", title: "Autoscaling & GPU", weight: 35 },
        { code: "K8S-404-C3", title: "KServe & updates", weight: 30 }
      ],
      examId: "exam-k8s"
    },
    chapters: [
      {
        id: "c1",
        title: "K8s Workloads",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Pods, Deployments, Services", duration: "10:00", content: "Packaging model services as replicas behind a Service." },
          { id: "c1l2", type: "quiz", title: "Replicas", duration: "4 min", xp: 50, question: "Scaling a Deployment's replicas primarily:", options: ["Increases available instances", "Changes the model", "Edits the dataset", "Deletes the image"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Autoscaling & GPU",
        duration: "3.5 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "HPA & KServe", duration: "10:00", content: "Metric-based autoscaling and KServe inference services." },
          { id: "c2l2", type: "exercise", title: "Replica Count", duration: "10 min", xp: 100, instructions: "If each pod handles 60 RPS and you need 240 RPS, print the minimum number of replicas.", language: "python", starterCode: "rps_pod = 60; needed = 240\nimport math\nprint(math.ceil(needed / rps_pod))", solution: "rps_pod = 60; needed = 240\nimport math\nprint(math.ceil(needed / rps_pod))", hint: "240/60 = 4", tests: [{ expected: "4" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-k8s-404",
      title: "Scale a Model Service",
      description: "Define a Deployment + Service + HPA for a model endpoint, apply them, and validate autoscaling behaviour under a simulated load test with GPU request config.",
      duration: "2.5 hours",
      xp: 650,
      requirements: ["Write Deployment YAML", "Add Service & HPA", "Configure GPU request", "Simulate load"],
      deliverables: [{ type: "code", name: "deploy.yaml", description: "K8s manifests" }, { type: "report", name: "scale.md", description: "Autoscale results" }]
    },
    advanced: {
      id: "adv-k8s-404",
      title: "Advanced: Multi-Model Serving & GPU Sharing",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "ModelMesh & GPU Partitioning", duration: "10:00", content: "Serving many models efficiently on shared GPU pools." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "K8s for ML Engineers", duration: "16:00", instructor: "Tatenda Moyo", topic: "Orchestration" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["MLOps Engineer", "Platform Engineer", "ML Infra Engineer"]
  }
];
