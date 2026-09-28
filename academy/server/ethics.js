export const ethicsCourses = [
  {
    id: "ai-governance",
    slug: "ai-governance",
    title: "AI Governance & Policy",
    short: "Design accountable AI programs aligned to emerging regulations.",
    description: "Learn how organizations govern AI responsibly: roles, policies, risk tiers, and compliance with the EU AI Act and evolving frameworks — building trust while enabling innovation.",
    level: "Intermediate",
    duration: "6 hours",
    hours: 6,
    xp: 1800,
    category: "Ethics",
    instructor: "Dr. Tafadzwa Mutasa",
    instructorTitle: "AI Ethics Lead",
    instructorBio: "Policy advisor and ethicist specializing in responsible AI governance.",
    instructorAvatar: "person-badge",
    rating: 4.6,
    students: 9860,
    icon: "bi-shield-check",
    image: "tensorflow",
    color: "#64748b",
    tags: ["Governance", "Policy", "EU AI Act", "Risk", "Accountability"],
    prerequisites: ["ai-ethics", "intro-to-ai"],
    learningOutcomes: [
      "Explain how AI governance differs from AI ethics",
      "Map governance roles, ownership, and accountability",
      "Apply risk-based classification to AI use cases",
      "Navigate principles of the EU AI Act and related law",
      "Establish documentation and oversight structures"
    ],
    skills: ["Governance", "Risk Classification", "Regulatory Compliance", "Accountability"],
    difficulty: "Intermediate — conceptual, no code required",
    resources: [
      { type: "pdf", title: "AI Governance Frameworks", url: "/assets/governance.pdf" },
      { type: "pdf", title: "EU AI Act Primer", url: "/assets/euai-act.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-GOV-210",
      title: "Certificate of Competence — AI Governance & Policy",
      level: "Level 4",
      eqf: "EQF 5",
      rqf: "RQF Level 4",
      credits: 9,
      notionalHours: 24,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 4 / EQF 5 / EU AI Act literacy",
      assessment: "50-min qualifying exam (75% pass)",
      competencies: [
        { code: "GOV-210-C1", title: "Governance structures & roles", weight: 40 },
        { code: "GOV-210-C2", title: "Risk classification", weight: 30 },
        { code: "GOV-210-C3", title: "Regulatory alignment", weight: 30 }
      ],
      examId: "exam-ai-governance"
    },
    chapters: [
      {
        id: "c1",
        title: "Governance Fundamentals",
        duration: "2.5 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Beyond Ethics: Governance", duration: "9:00", content: "From principles to operating structures, ownership, and controls." },
          { id: "c1l2", type: "quiz", title: "Governance vs Ethics", duration: "4 min", xp: 50, question: "AI governance is primarily about:", options: ["Operational structures & accountability", "Writing better code", "Faster GPUs", "More data"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Risk & Regulation",
        duration: "2.5 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Risk-Based Tiers", duration: "9:00", content: "Prohibited, high-risk, limited, and minimal-risk AI under the EU AI Act." },
          { id: "c2l2", type: "quiz", title: "High-Risk", duration: "4 min", xp: 50, question: "Under the EU AI Act, a use case that decides on creditworthiness is typically:", options: ["High risk", "Always prohibited", "Minimal risk", "Unregulated"], answer: 0 }
        ]
      }
    ],
    capstone: {
      id: "capstone-gov-210",
      title: "AI Governance Plan",
      description: "Write a governance plan for a fictional organization: assign roles, tier its AI use cases by risk, and outline documentation and oversight for its highest-risk system.",
      duration: "1.5 hours",
      xp: 400,
      requirements: ["Define roles & ownership", "Tier use cases by risk", "Document controls", "Align to a framework"],
      deliverables: [{ type: "report", name: "governance.md", description: "Governance plan" }]
    },
    advanced: {
      id: "adv-gov-210",
      title: "Advanced: Global Regulatory Comparison",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "EU, US, and Beyond", duration: "9:00", content: "Comparing AI regulatory trajectories across jurisdictions." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "EU AI Act Explained", duration: "14:00", instructor: "Dr. Tafadzwa Mutasa", topic: "Policy" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: false, mentorship: true },
    jobConnectionsKeywords: ["AI Governance", "Compliance", "Responsible AI"]
  },
  {
    id: "data-privacy-ai",
    slug: "data-privacy-ai",
    title: "Data Privacy in AI",
    short: "Protect personal data throughout the ML lifecycle.",
    description: "Learn to handle personal data responsibly in AI projects: consent, minimization, GDPR, anonymization, and differential privacy — so innovation never comes at the cost of people's rights.",
    level: "Intermediate",
    duration: "6 hours",
    hours: 6,
    xp: 1800,
    category: "Ethics",
    instructor: "Dr. Tafadzwa Mutasa",
    instructorTitle: "AI Ethics Lead",
    instructorBio: "Privacy and responsible-innovation specialist across the ML lifecycle.",
    instructorAvatar: "person-badge",
    rating: 4.6,
    students: 10450,
    icon: "bi-incognito",
    image: "tensorflow",
    color: "#64748b",
    tags: ["Privacy", "GDPR", "Anonymization", "Differential Privacy", "Consent"],
    prerequisites: ["ai-ethics", "intro-to-ai"],
    learningOutcomes: [
      "Identify personal and sensitive data in ML workflows",
      "Apply data minimization and purpose limitation",
      "Explain GDPR principles relevant to AI systems",
      "Use anonymization and differential privacy techniques",
      "Design privacy-respecting data pipelines"
    ],
    skills: ["Privacy-by-Design", "GDPR", "Anonymization", "Differential Privacy", "Consent"],
    difficulty: "Intermediate — conceptual + light technical",
    resources: [
      { type: "pdf", title: "Privacy in ML", url: "/assets/privacy-ml.pdf" },
      { type: "pdf", title: "GDPR Cheat Sheet", url: "/assets/gdpr.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-DP-220",
      title: "Certificate of Competence — Data Privacy in AI",
      level: "Level 4",
      eqf: "EQF 5",
      rqf: "RQF Level 4",
      credits: 9,
      notionalHours: 24,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 4 / EQF 5 / GDPR literacy",
      assessment: "50-min qualifying exam (75% pass)",
      competencies: [
        { code: "DP-220-C1", title: "GDPR & data lifecycle", weight: 40 },
        { code: "DP-220-C2", title: "Minimization & consent", weight: 30 },
        { code: "DP-220-C3", title: "Anonymization & differential privacy", weight: 30 }
      ],
      examId: "exam-data-privacy"
    },
    chapters: [
      {
        id: "c1",
        title: "Privacy Principles",
        duration: "2.5 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Privacy in ML Lifecycle", duration: "9:00", content: "Where personal data appears, and minimization and purpose limitation." },
          { id: "c1l2", type: "quiz", title: "Minimization", duration: "4 min", xp: 50, question: "Data minimization means:", options: ["Only collecting what is necessary", "Deleting everything", "Storing all data", "Buying more data"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Techniques & Law",
        duration: "2.5 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Anonymization & DP", duration: "9:00", content: "Removing identifiers and adding calibrated noise." },
          { id: "c2l2", type: "exercise", title: "Add Laplace Noise", duration: "11 min", xp: 100, instructions: "Add Laplacian noise with scale 2.0 to a value 7.0 and print the result rounded to 2 decimals.", language: "python", starterCode: "import numpy as np\nnp.random.seed(1)\nval = 7.0\nnoisy = val + np.random.laplace(0, 2.0)\nprint(round(noisy, 2))", solution: "import numpy as np\nnp.random.seed(1)\nval = 7.0\nnoisy = val + np.random.laplace(0, 2.0)\nprint(round(noisy, 2))", hint: "Use np.random.laplace", tests: [{ expected: "6.97" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-dp-220",
      title: "Privacy Review",
      description: "Perform a privacy review of a simple AI product: map personal data flows, document minimization, and propose anonymization or differential-privacy controls.",
      duration: "1.5 hours",
      xp: 400,
      requirements: ["Map data flows", "Identify personal data", "Apply minimization", "Propose DP controls"],
      deliverables: [{ type: "report", name: "privacy-review.md", description: "Review document" }]
    },
    advanced: {
      id: "adv-dp-220",
      title: "Advanced: Federated & Private AI",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Train Without the Data", duration: "9:00", content: "Federated learning and secure aggregation." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Privacy Engineering", duration: "14:00", instructor: "Dr. Tafadzwa Mutasa", topic: "Privacy" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: false, mentorship: true },
    jobConnectionsKeywords: ["Privacy Engineer", "Responsible AI", "Data Governance"]
  },
  {
    id: "ai-safety",
    slug: "ai-safety",
    title: "AI Safety & Assurance",
    short: "Build AI systems you can certify as safe and dependable.",
    description: "Ensure AI behaves safely across its lifetime: safety cases, adversarial robustness, red-teaming, and assurance evidence for high-stakes decisions — from autonomous systems to healthcare.",
    level: "Advanced",
    duration: "7 hours",
    hours: 7,
    xp: 2100,
    category: "Ethics",
    instructor: "Dr. Tafadzwa Mutasa",
    instructorTitle: "AI Ethics Lead",
    instructorBio: "Leads safety assurance for safety-critical AI deployments.",
    instructorAvatar: "person-badge",
    rating: 4.6,
    students: 8430,
    icon: "bi-emoji-dizzy",
    image: "tensorflow",
    color: "#64748b",
    tags: ["Safety", "Red-teaming", "Robustness", "Assurance", "Adversarial"],
    prerequisites: ["ai-ethics", "ml-supervised"],
    learningOutcomes: [
      "Identify failure modes and safety hazards in AI",
      "Test robustness against adversarial and edge inputs",
      "Red-team models for harmful behaviours",
      "Build a safety case with supporting evidence",
      "Apply assurance in high-stakes domains"
    ],
    skills: ["Safety Cases", "Red-teaming", "Adversarial Robustness", "Assurance Evidence"],
    difficulty: "Advanced — ML knowledge + safety mindset",
    resources: [
      { type: "pdf", title: "AI Safety Cases", url: "/assets/safety-cases.pdf" },
      { type: "github", title: "Safety-Lab", url: "https://github.com/zimlink/safety-lab" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-SAFE-230",
      title: "Certificate of Competence — AI Safety & Assurance",
      level: "Level 5",
      eqf: "EQF 6",
      rqf: "RQF Level 5",
      credits: 11,
      notionalHours: 28,
      validityYears: 2,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 5 / EQF 6 / safety assurance",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "SAFE-230-C1", title: "Hazard & failure analysis", weight: 35 },
        { code: "SAFE-230-C2", title: "Robustness & red-teaming", weight: 35 },
        { code: "SAFE-230-C3", title: "Safety cases & evidence", weight: 30 }
      ],
      examId: "exam-ai-safety"
    },
    chapters: [
      {
        id: "c1",
        title: "Failure & Robustness",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "When Models Fail", duration: "9:00", content: "Edge cases, adversarial examples, and distribution shift." },
          { id: "c1l2", type: "quiz", title: "Adversarial Example", duration: "4 min", xp: 50, question: "An adversarial example is:", options: ["A small perturbation that changes a prediction", "A larger dataset", "A faster GPU", "A better label"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Red-teaming & Assurance",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Systematic Red-teaming", duration: "9:00", content: "Structured probing for harmful or unsafe behaviour." },
          { id: "c2l2", type: "exercise", title: "Flipped Label", duration: "10 min", xp: 100, instructions: "Given a list of labels and an index, flip the label at that index from 'safe' to 'unsafe' and print the new list.", language: "python", starterCode: "labels = ['safe','safe','safe','safe']\nlabels[2] = 'unsafe'\nprint(labels)", solution: "labels = ['safe','safe','safe','safe']\nlabels[2] = 'unsafe'\nprint(labels)", hint: "Mutate index 2", tests: [{ expected: "['safe', 'safe', 'unsafe', 'safe']" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-safe-230",
      title: "Safety Case for a Deployed Model",
      description: "Choose a real model, document its hazards, run a robustness/red-team exercise, and write a safety case with the evidence you collected.",
      duration: "2 hours",
      xp: 550,
      requirements: ["List hazards", "Run red-team tests", "Gather evidence", "Write safety case"],
      deliverables: [{ type: "report", name: "safety-case.md", description: "Safety case" }, { type: "code", name: "redteam.py", description: "Test script" }]
    },
    advanced: {
      id: "adv-safe-230",
      title: "Advanced: Formal & Scenario Testing",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Provable Bounds", duration: "9:00", content: "Formal verification and scenario-based evaluation for safety." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Safety in Practice", duration: "14:00", instructor: "Dr. Tafadzwa Mutasa", topic: "Safety" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["AI Safety", "Trust & Safety", "ML Assurance"]
  },
  {
    id: "algorithmic-transparency",
    slug: "algorithmic-transparency",
    title: "Fairness & Transparency in AI",
    short: "Measure and mitigate bias, and make AI decisions explainable.",
    description: "Assess fairness with defined metrics, audit for bias, and make model decisions transparent and explainable so stakeholders understand why an AI decided what it did.",
    level: "Advanced",
    duration: "7 hours",
    hours: 7,
    xp: 2100,
    category: "Ethics",
    instructor: "Dr. Tafadzwa Mutasa",
    instructorTitle: "AI Ethics Lead",
    instructorBio: "Researches fairness metrics and interpretability in practiced AI.",
    instructorAvatar: "person-badge",
    rating: 4.5,
    students: 9170,
    icon: "bi-eye",
    image: "tensorflow",
    color: "#64748b",
    tags: ["Fairness", "Bias", "Explainability", "SHAP", "Transparency"],
    prerequisites: ["ai-ethics", "ml-supervised"],
    learningOutcomes: [
      "Define and quantify fairness with common metrics",
      "Audit datasets and models for bias",
      "Apply mitigation strategies during and after training",
      "Explain models with SHAP and LIME",
      "Communicate transparently about AI decisions"
    ],
    skills: ["Fairness Metrics", "Bias Auditing", "Mitigation", "SHAP/LIME", "Explainability"],
    difficulty: "Advanced — ML model-building experience",
    resources: [
      { type: "github", title: "Fairness-Lab", url: "https://github.com/zimlink/fairness-lab" },
      { type: "pdf", title: "Explainability Guide", url: "/assets/explainability.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-TRANSP-240",
      title: "Certificate of Competence — Fairness & Transparency in AI",
      level: "Level 5",
      eqf: "EQF 6",
      rqf: "RQF Level 5",
      credits: 11,
      notionalHours: 28,
      validityYears: 2,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 5 / EQF 6 / trustworthiness",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "TRANSP-240-C1", title: "Fairness metrics & audit", weight: 40 },
        { code: "TRANSP-240-C2", title: "Bias mitigation", weight: 30 },
        { code: "TRANSP-240-C3", title: "Explainability", weight: 30 }
      ],
      examId: "exam-algorithmic-transparency"
    },
    chapters: [
      {
        id: "c1",
        title: "Fairness Metrics",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "What Fairness Means", duration: "9:00", content: "Equalized odds, demographic parity, and why they can conflict." },
          { id: "c1l2", type: "quiz", title: "Demographic Parity", duration: "4 min", xp: 50, question: "Demographic parity requires:", options: ["Similar positive rates across groups", "Identical models", "Larger datasets", "No labels"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Explainability",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "SHAP & LIME", duration: "9:00", content: "Feature attributions and local explanations of predictions." },
          { id: "c2l2", type: "exercise", title: "Group Rate", duration: "10 min", xp: 100, instructions: "Print the positive-rate difference between group A (5 of 10) and group B (2 of 10) rounded to 1 decimal.", language: "python", starterCode: "ra = 5/10; rb = 2/10\nprint(round(ra-rb, 1))", solution: "ra = 5/10; rb = 2/10\nprint(round(ra-rb, 1))", hint: "0.5 - 0.2", tests: [{ expected: "0.3" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-transp-240",
      title: "Fairness & Explainability Audit",
      description: "Audit a classifier for group-level fairness, document the metrics, apply a mitigation, and explain representative predictions with SHAP.",
      duration: "2 hours",
      xp: 550,
      requirements: ["Compute fairness metrics", "Document findings", "Apply mitigation", "Explain with SHAP"],
      deliverables: [{ type: "code", name: "audit.py", description: "Audit script" }, { type: "report", name: "audit.md", description: "Findings + mitigation" }]
    },
    advanced: {
      id: "adv-transp-240",
      title: "Advanced: Counterfactual Explanations",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "What Could Change the Outcome", duration: "9:00", content: "Counterfactual and contrastive explanations for users." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Fairness & Explainability", duration: "15:00", instructor: "Dr. Tafadzwa Mutasa", topic: "Fairness" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["Responsible AI", "ML Engineer", "AI Governance"]
  }
];
