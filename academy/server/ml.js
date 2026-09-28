export const mlCourses = [
  {
    id: "ml-supervised",
    slug: "supervised-learning",
    title: "Supervised Learning in Practice",
    short: "Train classifiers and regressors end-to-end with scikit-learn.",
    description: "Master the supervised workflow: preparing data, training linear & tree models, evaluating with proper metrics, and tuning hyperparameters. Fight overfitting and reason about performance across real datasets.",
    level: "Intermediate",
    duration: "8 hours",
    hours: 8,
    xp: 2400,
    category: "Machine Learning",
    instructor: "Dr. Rumbidzai Chikomo",
    instructorTitle: "AI Research Lead, Stanford",
    instructorBio: "ML researcher who loves translating model mathematics into intuitive, production-ready practice.",
    instructorAvatar: "person-badge",
    rating: 4.8,
    students: 31240,
    icon: "bi-graph-up-arrow",
    image: "sklearn",
    color: "#f7931e",
    tags: ["Scikit-Learn", "Classification", "Regression", "Evaluation", "Hyperparameters"],
    prerequisites: ["python-ds", "ml-fundamentals"],
    learningOutcomes: [
      "Split data and preprocess for ML pipelines",
      "Train linear, tree, and ensemble classifiers and regressors",
      "Select evaluation metrics for the problem at hand",
      "Diagnose and combat overfitting with regularization and cross-validation",
      "Tune hyperparameters with grid/random searches"
    ],
    skills: ["Pipelines", "Classification", "Regression", "Cross-Validation", "Model Selection"],
    difficulty: "Intermediate — NumPy/pandas basics assumed",
    resources: [
      { type: "github", title: "Supervised-Lab", url: "https://github.com/zimlink/supervised-lab" },
      { type: "dataset", title: "Housing & Iris Datasets", url: "/datasets/supervised-data.zip" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-SL-311",
      title: "Certificate of Competence — Supervised Learning",
      level: "Level 4",
      eqf: "EQF 5",
      rqf: "RQF Level 4",
      credits: 12,
      notionalHours: 32,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 4 / EQF 5 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "SL-311-C1", title: "Prepare & split data", weight: 20 },
        { code: "SL-311-C2", title: "Train & evaluate models", weight: 40 },
        { code: "SL-311-C3", title: "Tune & prevent overfitting", weight: 40 }
      ],
      examId: "exam-ml-supervised"
    },
    chapters: [
      {
        id: "c1",
        title: "Data Preparation",
        duration: "2.5 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "The Supervised Workflow", duration: "9:00", content: "Features, targets, train/test splits, scaling, and leakage." },
          { id: "c1l2", type: "exercise", title: "Train/Test Split", duration: "11 min", xp: 100, instructions: "Load sklearn iris, split 80/20 with random_state=1, and print the number of test samples.", language: "python", starterCode: "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=1)\nprint(len(X_te))", solution: "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=1)\nprint(len(X_te))", hint: "test_size=0.2 of 150 → 30", tests: [{ expected: "30" }] }
        ]
      },
      {
        id: "c2",
        title: "Training & Evaluation",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "From Fit to F1", duration: "10:00", content: "Training a classifier and choosing metrics: accuracy, precision, recall, F1, ROC." },
          { id: "c2l2", type: "exercise", title: "Fit & Score", duration: "12 min", xp: 110, instructions: "Train a logistic regression on the iris train split and print test accuracy rounded to 2 decimals.", language: "python", starterCode: "from sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=1)\nmodel = LogisticRegression(max_iter=200).fit(X_tr, y_tr)\nprint(round(model.score(X_te, y_te), 2))", solution: "from sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nX, y = load_iris(return_X_y=True)\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=1)\nmodel = LogisticRegression(max_iter=200).fit(X_tr, y_tr)\nprint(round(model.score(X_te, y_te), 2))", hint: "score() returns accuracy", tests: [{ expected: "0.97" }] }
        ]
      },
      {
        id: "c3",
        title: "Cross-Validation & Tuning",
        duration: "2.5 hours",
        lessons: [
          { id: "c3l1", type: "video", title: "K-Fold Cross-Validation", duration: "10:00", content: "Why a single split is unreliable; k-fold CV and grid search." },
          { id: "c3l2", type: "exercise", title: "Grid Search", duration: "13 min", xp: 120, instructions: "Grid-search max_depth for a DecisionTreeClassifier over [3,5,10] using 3-fold CV, printing the best depth.", language: "python", starterCode: "from sklearn.tree import DecisionTreeClassifier\nfrom sklearn.model_selection import GridSearchCV\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\ngs = GridSearchCV(DecisionTreeClassifier(), {'max_depth': [3,5,10]}, cv=3).fit(X, y)\nprint(gs.best_params_['max_depth'])", solution: "from sklearn.tree import DecisionTreeClassifier\nfrom sklearn.model_selection import GridSearchCV\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\ngs = GridSearchCV(DecisionTreeClassifier(), {'max_depth': [3,5,10]}, cv=3).fit(X, y)\nprint(gs.best_params_['max_depth'])", hint: "gs.best_params_['max_depth']", tests: [{ expected: "5" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-sl-311",
      title: "Credit Risk Classifier",
      description: "Build a supervised pipeline predicting loan default: clean data, handle class imbalance, train and evaluate, and justify thresholds with F1/ROC.",
      duration: "2.5 hours",
      xp: 600,
      requirements: ["Clean & split data", "Use a pipeline", "Report precision/recall/F1", "Grid-search key hyperparameters"],
      deliverables: [{ type: "code", name: "model.py", description: "Full pipeline" }, { type: "report", name: "eval.md", description: "Metrics & decisions" }]
    },
    advanced: {
      id: "adv-sl-311",
      title: "Advanced: Ensembles & Interpretability",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Random Forests & Boosting", duration: "10:00", content: "Bagging vs boosting, feature importance, and SHAP." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Metric Wars", duration: "16:00", instructor: "Dr. Rumbidzai Chikomo", topic: "Evaluation" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["ML Engineer", "Data Scientist", "ML Analyst"]
  },
  {
    id: "ml-unsupervised",
    slug: "unsupervised-learning",
    title: "Unsupervised Learning & Clustering",
    short: "Discover structure in unlabeled data with clustering and dimensionality reduction.",
    description: "Find hidden groups and compress data without labels. Master k-means, hierarchical and DBSCAN clustering, and PCA/t-SNE for visualization and feature engineering.",
    level: "Intermediate",
    duration: "7 hours",
    hours: 7,
    xp: 2100,
    category: "Machine Learning",
    instructor: "Dr. Anesu Ndlovu",
    instructorTitle: "Ex-Google AI",
    instructorBio: "Applied ML scientist with deep experience mining unlabeled datasets.",
    instructorAvatar: "person-badge",
    rating: 4.7,
    students: 21480,
    icon: "bi-bounding-box-circles",
    image: "sklearn",
    color: "#0ea5e9",
    tags: ["Clustering", "K-Means", "DBSCAN", "PCA", "Dimensionality Reduction"],
    prerequisites: ["python-ds", "ml-fundamentals", "ml-supervised"],
    learningOutcomes: [
      "Explain the goals and types of unsupervised learning",
      "Apply k-means, hierarchical, and DBSCAN clustering",
      "Choose the right number of clusters",
      "Reduce dimensions with PCA and interpret components",
      "Use t-SNE/UMAP for visualization"
    ],
    skills: ["K-Means", "Hierarchical", "DBSCAN", "PCA", "Visualization"],
    difficulty: "Intermediate — expects ML foundations",
    resources: [
      { type: "github", title: "Unsupervised-Lab", url: "https://github.com/zimlink/unsupervised-lab" },
      { type: "dataset", title: "Mall Customers Dataset", url: "/datasets/mall-customers.csv" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-UL-312",
      title: "Certificate of Competence — Unsupervised Learning",
      level: "Level 4",
      eqf: "EQF 5",
      rqf: "RQF Level 4",
      credits: 11,
      notionalHours: 28,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 4 / EQF 5 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "UL-312-C1", title: "Clustering algorithms", weight: 40 },
        { code: "UL-312-C2", title: "Selecting cluster count", weight: 25 },
        { code: "UL-312-C3", title: "Dimensionality reduction", weight: 35 }
      ],
      examId: "exam-ml-unsupervised"
    },
    chapters: [
      {
        id: "c1",
        title: "Clustering Fundamentals",
        duration: "2.5 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "What is Clustering?", duration: "9:00", content: "Within-cluster vs between-cluster variance, and when clustering is appropriate." },
          { id: "c1l2", type: "exercise", title: "K-Means Fit", duration: "11 min", xp: 100, instructions: "Cluster the iris features into 2 clusters with random_state=0 and print the number of points in cluster index 1.", language: "python", starterCode: "from sklearn.cluster import KMeans\nfrom sklearn.datasets import load_iris\nX = load_iris()['data']\nkmeans = KMeans(n_clusters=2, random_state=0, n_init=10).fit(X)\nprint((kmeans.labels_ == 1).sum())", solution: "from sklearn.cluster import KMeans\nfrom sklearn.datasets import load_iris\nX = load_iris()['data']\nkmeans = KMeans(n_clusters=2, random_state=0, n_init=10).fit(X)\nprint((kmeans.labels_ == 1).sum())", hint: "count labels == 1", tests: [{ expected: "54" }] }
        ]
      },
      {
        id: "c2",
        title: "Choosing Clusters & Reducing Dimensions",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Elbow & Silhouette", duration: "10:00", content: "Selecting k with inertia, silhouette score, and visual intuition." },
          { id: "c2l2", type: "exercise", title: "PCA Compression", duration: "12 min", xp: 110, instructions: "Reduce iris to 2 components with PCA and print the shape of the transformed array's second axis.", language: "python", starterCode: "from sklearn.decomposition import PCA\nfrom sklearn.datasets import load_iris\nX = load_iris()['data']\npca = PCA(n_components=2).fit_transform(X)\nprint(pca.shape[1])", solution: "from sklearn.decomposition import PCA\nfrom sklearn.datasets import load_iris\nX = load_iris()['data']\npca = PCA(n_components=2).fit_transform(X)\nprint(pca.shape[1])", hint: "n_components=2 → 2 axes", tests: [{ expected: "2" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-ul-312",
      title: "Customer Segmentation",
      description: "Segment mall customers by annual income and spending score, choose k via silhouette, and produce a visual report of segments.",
      duration: "2.5 hours",
      xp: 600,
      requirements: ["Use 2 clustering algorithms", "Justify cluster count", "Visualize with PCA/scatter", "Summarize each segment"],
      deliverables: [{ type: "code", name: "segment.py", description: "Clustering analysis" }, { type: "report", name: "segments.md", description: "Segment profiles" }]
    },
    advanced: {
      id: "adv-ul-312",
      title: "Advanced: DBSCAN & Anomaly Detection",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Density-Based Clustering", duration: "10:00", content: "DBSCAN eps/min_samples and detecting outliers." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Clustering in the Wild", duration: "14:00", instructor: "Dr. Anesu Ndlovu", topic: "Clustering" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["Data Scientist", "ML Engineer", "Market Analyst"]
  },
  {
    id: "model-evaluation",
    slug: "model-evaluation-metrics",
    title: "Model Evaluation & Validation",
    short: "Pick the right metrics and prove your model actually works.",
    description: "Go beyond accuracy. Master confusion matrices, precision/recall, ROC/AUC, calibration, cross-validation, and validation strategies for imbalanced and time-series data — the skills that distinguish trustworthy models.",
    level: "Advanced",
    duration: "6 hours",
    hours: 6,
    xp: 1800,
    category: "Machine Learning",
    instructor: "Dr. Rumbidzai Chikomo",
    instructorTitle: "AI Research Lead, Stanford",
    instructorBio: "Evaluates models rigorously for research and production benchmarks.",
    instructorAvatar: "person-badge",
    rating: 4.9,
    students: 18370,
    icon: "bi-sliders",
    image: "sklearn",
    color: "#a855f7",
    tags: ["Metrics", "ROC", "Precision", "Recall", "Cross-Validation"],
    prerequisites: ["ml-supervised"],
    learningOutcomes: [
      "Interpret confusion matrices and derive all core metrics",
      "Choose metrics appropriate to class balance and business cost",
      "Evaluate with ROC curves, AUC, and calibration",
      "Design cross-validation for i.i.d., grouped, and time-series data",
      "Detect leakage and evaluation pitfalls"
    ],
    skills: ["Confusion Matrix", "Precision/Recall/F1", "ROC/AUC", "Calibration", "Validation Design"],
    difficulty: "Advanced — comfortable with ML fundamentals",
    resources: [
      { type: "github", title: "Evaluation-Lab", url: "https://github.com/zimlink/evaluation-lab" },
      { type: "pdf", title: "Metrics Cheat Sheet", url: "/assets/metrics-cheatsheet.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-ME-313",
      title: "Certificate of Competence — Model Evaluation & Validation",
      level: "Level 5",
      eqf: "EQF 6",
      rqf: "RQF Level 5",
      credits: 12,
      notionalHours: 24,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 5 / EQF 6 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "ME-313-C1", title: "Core classification metrics", weight: 40 },
        { code: "ME-313-C2", title: "ROC & calibration", weight: 30 },
        { code: "ME-313-C3", title: "Validation strategies & leakage", weight: 30 }
      ],
      examId: "exam-model-evaluation"
    },
    chapters: [
      {
        id: "c1",
        title: "Classification Metrics",
        duration: "2.5 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Beyond Accuracy", duration: "10:00", content: "TP/FP/TN/FN, precision, recall, F1, and the accuracy paradox on imbalanced data." },
          { id: "c1l2", type: "exercise", title: "Precision & Recall", duration: "11 min", xp: 100, instructions: "Compute precision_score and recall_score from y_true=[0,1,1] and y_pred=[0,1,0], print both on one line separated by space.", language: "python", starterCode: "from sklearn.metrics import precision_score, recall_score\nyt=[0,1,1]; yp=[0,1,0]\nprint(precision_score(yt,yp), recall_score(yt,yp))", solution: "from sklearn.metrics import precision_score, recall_score\nyt=[0,1,1]; yp=[0,1,0]\nprint(precision_score(yt,yp), recall_score(yt,yp))", hint: "TP=1, FP=0, FN=1", tests: [{ expected: "1.0 0.5" }] }
        ]
      },
      {
        id: "c2",
        title: "ROC & Validation Design",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "ROC & AUC", duration: "10:00", content: "Trade-off curves and reading AUC for ranking quality." },
          { id: "c2l2", type: "exercise", title: "Time-Based Split", duration: "12 min", xp: 110, instructions: "Split a sorted list of 10 timestamps into train (first 7) and test (last 3) positions, print the count of test rows.", language: "python", starterCode: "rows = list(range(10))\ntrain = rows[:7]\ntest = rows[7:]\nprint(len(test))", solution: "rows = list(range(10))\ntrain = rows[:7]\ntest = rows[7:]\nprint(len(test))", hint: "test = last 3", tests: [{ expected: "3" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-me-313",
      title: "Imbalanced Fraud Evaluation",
      description: "Evaluate an imbalanced fraud classifier, report ROC-AUC, PR-AUC, precision/recall at a chosen threshold, and design a time-aware validation split.",
      duration: "2 hours",
      xp: 550,
      requirements: ["Use imbalanced data (1% positive)", "Report ROC-AUC + PR-AUC", "Justify threshold", "Explain leakage risks"],
      deliverables: [{ type: "code", name: "evaluate.py", description: "Evaluation script" }, { type: "report", name: "findings.md", description: "Metrics report" }]
    },
    advanced: {
      id: "adv-me-313",
      title: "Advanced: Calibration & Uncertainty",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Calibration Curves", duration: "9:00", content: "Reliability diagrams and probability calibration (Platt/isotonic)." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Metrics That Matter", duration: "15:00", instructor: "Dr. Rumbidzai Chikomo", topic: "Metrics" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["ML Engineer", "ML Research", "Data Scientist"]
  },
  {
    id: "feature-engineering",
    slug: "feature-engineering",
    title: "Feature Engineering & Selection",
    short: "Turn raw data into the signals that make models perform.",
    description: "Learn how to transform, encode, impute, and combine raw data into powerful features. Master categorical encoding, scaling, datetime/geospatial features, target encoding, and robust feature-selection methods.",
    level: "Advanced",
    duration: "7 hours",
    hours: 7,
    xp: 2100,
    category: "Machine Learning",
    instructor: "Tatenda Moyo",
    instructorTitle: "Senior Data Engineer",
    instructorBio: "Engineers features for large production models and shares hard-won wins.",
    instructorAvatar: "python",
    rating: 4.7,
    students: 17650,
    icon: "bi-funnel",
    image: "sklearn",
    color: "#10b981",
    tags: ["Feature Engineering", "Encoding", "Imputation", "Selection", "Pipelines"],
    prerequisites: ["python-ds", "ml-supervised"],
    learningOutcomes: [
      "Impute and scale numerical data appropriately",
      "Encode categorical data without leakage",
      "Engineer datetime, text, and interaction features",
      "Avoid target leakage and data-leakage time bombs",
      "Select features with filter, wrapper, and embedded methods"
    ],
    skills: ["Encoding", "Scaling", "Imputation", "Feature Selection", "Pipelines"],
    difficulty: "Advanced — expects Python/ML experience",
    resources: [
      { type: "github", title: "Feature-Lab", url: "https://github.com/zimlink/feature-lab" },
      { type: "dataset", title: "Titanic Engineered", url: "/datasets/titanic-engineered.csv" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-FE-314",
      title: "Certificate of Competence — Feature Engineering",
      level: "Level 5",
      eqf: "EQF 6",
      rqf: "RQF Level 5",
      credits: 12,
      notionalHours: 28,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 5 / EQF 6 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "FE-314-C1", title: "Imputation & scaling", weight: 25 },
        { code: "FE-314-C2", title: "Categorical & datetime encoding", weight: 35 },
        { code: "FE-314-C3", title: "Feature selection & leakage", weight: 40 }
      ],
      examId: "exam-feature-engineering"
    },
    chapters: [
      {
        id: "c1",
        title: "Cleaning & Scaling",
        duration: "2.5 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Garbage In, Garbage Out", duration: "9:00", content: "Imputation strategies and why scaling matters for distance-based models." },
          { id: "c1l2", type: "exercise", title: "StandardScaler", duration: "11 min", xp: 100, instructions: "StandardScale [2,4,6], print the mean of the transformed values rounded to 2 decimals.", language: "python", starterCode: "from sklearn.preprocessing import StandardScaler\nimport numpy as np\nx = np.array([[2],[4],[6]])\ns = StandardScaler().fit_transform(x)\nprint(round(s.mean(), 2))", solution: "from sklearn.preprocessing import StandardScaler\nimport numpy as np\nx = np.array([[2],[4],[6]])\ns = StandardScaler().fit_transform(x)\nprint(round(s.mean(), 2))", hint: "Standardization centers to mean 0", tests: [{ expected: "0.0" }] }
        ]
      },
      {
        id: "c2",
        title: "Categorical Encoding & Selection",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Encoding Without Leakage", duration: "10:00", content: "One-hot vs label vs target encoding, and fitting encoders only on train." },
          { id: "c2l2", type: "exercise", title: "One-Hot Encoding", duration: "11 min", xp: 100, instructions: "One-hot encode ['a','b','a'] and print the number of columns.", language: "python", starterCode: "from sklearn.preprocessing import OneHotEncoder\nimport numpy as np\nx = np.array(['a','b','a']).reshape(-1,1)\nohe = OneHotEncoder(sparse_output=False).fit_transform(x)\nprint(ohe.shape[1])", solution: "from sklearn.preprocessing import OneHotEncoder\nimport numpy as np\nx = np.array(['a','b','a']).reshape(-1,1)\nohe = OneHotEncoder(sparse_output=False).fit_transform(x)\nprint(ohe.shape[1])", hint: "2 unique categories", tests: [{ expected: "2" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-fe-314",
      title: "Predictive Feature Sprint",
      description: "Engineer a feature set for tabular data (imputation, encoding, datetime features), select top features, and document every decision with leakage checks.",
      duration: "2.5 hours",
      xp: 600,
      requirements: ["Pipeline + ColumnTransformer", "Handle datetime & categorical", "Feature selection step", "Leakage documentation"],
      deliverables: [{ type: "code", name: "features.py", description: "Engineering pipeline" }, { type: "report", name: "leakage.md", description: "Decisions & risks" }]
    },
    advanced: {
      id: "adv-fe-314",
      title: "Advanced: Target Encoding & High-Cardinality",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Target Encoding Done Right", duration: "10:00", content: "Smoothed/m-fold target encoding and leakage avoidance." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Features That Win", duration: "14:00", instructor: "Tatenda Moyo", topic: "Features" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["ML Engineer", "Data Scientist", "Feature Engineer"]
  }
];
