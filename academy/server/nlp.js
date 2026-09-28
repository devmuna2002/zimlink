export const nlpCourses = [
  {
    id: "nlp-basics",
    slug: "nlp-basics",
    title: "NLP Fundamentals",
    short: "Core techniques for processing and understanding human language.",
    description: "Learn tokenization, text cleaning, bag-of-words, TF-IDF, and classical ML text classification. The essential foundation for every NLP and language-system specialist.",
    level: "Intermediate",
    duration: "7 hours",
    hours: 7,
    xp: 2100,
    category: "NLP",
    instructor: "Dr. Anesu Ndlovu",
    instructorTitle: "Ex-Google AI",
    instructorBio: "Linguistics-aware NLP scientist and educator.",
    instructorAvatar: "person-badge",
    rating: 4.8,
    students: 24110,
    icon: "bi-fonts",
    image: "tensorflow",
    color: "#a855f7",
    tags: ["NLP", "Text Preprocessing", "TF-IDF", "Classification", "Word Embeddings"],
    prerequisites: ["python-ds", "ml-supervised"],
    learningOutcomes: [
      "Tokenize and normalize text for analysis",
      "Represent text with BoW and TF-IDF vectors",
      "Classify documents with classical ML models",
      "Explain word embeddings and why they beat BoW",
      "Preprocess a real text dataset end-to-end"
    ],
    skills: ["Tokenization", "TF-IDF", "Text Classification", "Vectorization", "Preprocessing"],
    difficulty: "Intermediate — Python + basic ML",
    resources: [
      { type: "github", title: "NLP-Lab", url: "https://github.com/zimlink/nlp-lab" },
      { type: "dataset", title: "News Headlines Dataset", url: "/datasets/news.csv" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-NLP-311",
      title: "Certificate of Competence — NLP Fundamentals",
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
        { code: "NLP-311-C1", title: "Text preprocessing & vectorization", weight: 40 },
        { code: "NLP-311-C2", title: "Classical text classification", weight: 35 },
        { code: "NLP-311-C3", title: "Word embeddings", weight: 25 }
      ],
      examId: "exam-nlp-basics"
    },
    chapters: [
      {
        id: "c1",
        title: "Text Preprocessing",
        duration: "2.5 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Clean & Tokenize", duration: "10:00", content: "Lowercasing, removing noise, tokenization, stopwords, and stemming." },
          { id: "c1l2", type: "exercise", title: "Tokenizer", duration: "11 min", xp: 100, instructions: "Tokenize a sentence into words using regex \\w+ on lowercase text and print the token list.", language: "python", starterCode: "import re\ntext = 'Hello, world! NLP is fun.'\ntokens = re.findall(r'\\w+', text.lower())\nprint(tokens)", solution: "import re\ntext = 'Hello, world! NLP is fun.'\ntokens = re.findall(r'\\w+', text.lower())\nprint(tokens)", hint: "regex \\w+", tests: [{ expected: "['hello', 'world', 'nlp', 'is', 'fun']" }] }
        ]
      },
      {
        id: "c2",
        title: "TF-IDF & Classification",
        duration: "2.5 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "TF-IDF Vectors", duration: "10:00", content: "Why TF-IDF weights rare informative terms, and logistic-regression classification." },
          { id: "c2l2", type: "exercise", title: "Classify with TF-IDF", duration: "12 min", xp: 110, instructions: "Vectorize a few sentences with TfidfVectorizer and print the number of features.", language: "python", starterCode: "from sklearn.feature_extraction.text import TfidfVectorizer\ncorpus = ['cat dog', 'dog bark', 'cat meow']\nv = TfidfVectorizer()\nX = v.fit_transform(corpus)\nprint(X.shape[1])", solution: "from sklearn.feature_extraction.text import TfidfVectorizer\ncorpus = ['cat dog', 'dog bark', 'cat meow']\nv = TfidfVectorizer()\nX = v.fit_transform(corpus)\nprint(X.shape[1])", hint: "Count unique terms across all docs", tests: [{ expected: "5" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-nlp-311",
      title: "News Classifier",
      description: "Build a TF-IDF + logistic-regression classifier that sorts headlines into topics, and report precision/recall for each class.",
      duration: "2 hours",
      xp: 550,
      requirements: ["Preprocess and split data", "Vectorize with TF-IDF", "Train & evaluate", "Report per-class metrics"],
      deliverables: [{ type: "code", name: "classify.py", description: "Classifier" }, { type: "report", name: "results.md", description: "Metrics" }]
    },
    advanced: {
      id: "adv-nlp-311",
      title: "Advanced: Word2Vec & GloVe",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Distributed Representations", duration: "10:00", content: "Context-based embeddings like Word2Vec and GloVe." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "NLP Pipelines", duration: "14:00", instructor: "Dr. Anesu Ndlovu", topic: "Preprocessing" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["NLP Engineer", "Data Scientist", "ML Engineer"]
  },
  {
    id: "sentiment-analysis",
    slug: "sentiment-analysis",
    title: "Sentiment Analysis",
    short: "Extract opinions and emotion from text with modern models.",
    description: "Detect positive, negative, and neutral sentiment — including aspects and nuanced language — using both classical and transformer-based approaches, and evaluate on imbalanced data.",
    level: "Intermediate",
    duration: "6 hours",
    hours: 6,
    xp: 1800,
    category: "NLP",
    instructor: "Dr. Anesu Ndlovu",
    instructorTitle: "Ex-Google AI",
    instructorBio: "NLP researcher who focuses on opinion mining and evaluation.",
    instructorAvatar: "person-badge",
    rating: 4.7,
    students: 21030,
    icon: "bi-emoji-smile",
    image: "tensorflow",
    color: "#10b981",
    tags: ["Sentiment", "Opinion Mining", "Transformers", "Classification", "Aspect"],
    prerequisites: ["nlp-basics", "ml-supervised"],
    learningOutcomes: [
      "Frame sentiment classification as a supervised task",
      "Build a baseline classifier with TF-IDF features",
      "Fine-tune a small transformer for sentiment",
      "Handle sarcasm, negation, and aspect-based sentiment",
      "Evaluate with F1 and confusion matrices on imbalanced data"
    ],
    skills: ["Sentiment Classification", "Transformers", "Imbalanced Evaluation", "Aspect Mining"],
    difficulty: "Intermediate — NLP + ML basics",
    resources: [
      { type: "github", title: "Sentiment-Lab", url: "https://github.com/zimlink/sentiment-lab" },
      { type: "dataset", title: "Tweets Dataset", url: "/datasets/tweets.csv" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-SENT-312",
      title: "Certificate of Competence — Sentiment Analysis",
      level: "Level 4",
      eqf: "EQF 5",
      rqf: "RQF Level 4",
      credits: 10,
      notionalHours: 24,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 4 / EQF 5 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "SENT-312-C1", title: "Baseline classification", weight: 40 },
        { code: "SENT-312-C2", title: "Transformer fine-tuning", weight: 35 },
        { code: "SENT-312-C3", title: "Nuanced & aspect sentiment", weight: 25 }
      ],
      examId: "exam-sentiment-analysis"
    },
    chapters: [
      {
        id: "c1",
        title: "Sentiment Basics",
        duration: "2.5 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Sentiment as Classification", duration: "9:00", content: "Labeling, baselines, and handling class imbalance." },
          { id: "c1l2", type: "quiz", title: "Imbalance", duration: "4 min", xp: 50, question: "For highly imbalanced sentiment data, which metric matters most?", options: ["F1 / precision-recall", "Accuracy alone", "Latency", "Vocabulary size"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Detection & Nuance",
        duration: "2 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Negation & Sarcasm", duration: "9:00", content: "Why 'not bad' is tricky and how transformers handle it." },
          { id: "c2l2", type: "exercise", title: "Simple Lexicon Score", duration: "11 min", xp: 100, instructions: "Count positive vs negative words (pos=['good','great'], neg=['bad','poor']) in a review and print pos - neg.", language: "python", starterCode: "pos=['good','great']; neg=['bad','poor']\ntext='good movie but bad ending and poor acting'.split()\nprint(sum(1 for w in text if w in pos) - sum(1 for w in text if w in neg))", solution: "pos=['good','great']; neg=['bad','poor']\ntext='good movie but bad ending and poor acting'.split()\nprint(sum(1 for w in text if w in pos) - sum(1 for w in text if w in neg))", hint: "1 good - 1 bad - 1 poor = -1", tests: [{ expected: "-1" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-sent-312",
      title: "Product Review Sentiment",
      description: "Fine-tune a small transformer to classify reviews, with careful handling of class imbalance, reporting F1 and a confusion matrix per class.",
      duration: "2 hours",
      xp: 550,
      requirements: ["Baseline + transformer", "Handle imbalance", "Report macro-F1", "Confusion matrix"],
      deliverables: [{ type: "code", name: "sentiment.py", description: "Model + eval" }, { type: "report", name: "results.md", description: "Metrics" }]
    },
    advanced: {
      id: "adv-sent-312",
      title: "Advanced: Aspect-Based Sentiment",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Aspect & Opinion Pairs", duration: "10:00", content: "Extracting aspect-level opinions ('battery: great', 'screen: poor')." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Sentiment on Social Data", duration: "14:00", instructor: "Dr. Anesu Ndlovu", topic: "Sentiment" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["NLP Engineer", "Data Scientist", "Analytics Engineer"]
  },
  {
    id: "transformers-nlp",
    slug: "transformers-nlp",
    title: "Transformers for NLP",
    short: "Master attention and build with modern transformer models.",
    description: "Dive into the transformer architecture — attention, positional encodings, encoder/decoder stacks — and use pretrained models for NLP tasks with the Hugging Face ecosystem.",
    level: "Advanced",
    duration: "9 hours",
    hours: 9,
    xp: 2700,
    category: "NLP",
    instructor: "Dr. Anesu Ndlovu",
    instructorTitle: "Ex-Google AI",
    instructorBio: "Transformer and attention expert, Hugging Face community contributor.",
    instructorAvatar: "person-badge",
    rating: 4.9,
    students: 28940,
    icon: "bi-diagram-2",
    image: "tensorflow",
    color: "#6366f1",
    tags: ["Transformers", "Attention", "Hugging Face", "BERT", "Fine-tuning"],
    prerequisites: ["nlp-basics", "neural-networks-basics"],
    learningOutcomes: [
      "Explain self-attention and multi-head attention",
      "Describe positional encodings and layer stacking",
      "Load and use pretrained transformers",
      "Fine-tune models for classification and QA",
      "Apply transfer learning from large language models"
    ],
    skills: ["Attention", "Transformers", "Hugging Face", "Fine-tuning", "Tokenizers"],
    difficulty: "Advanced — DL + NLP concepts required",
    resources: [
      { type: "github", title: "Transformer-Lab", url: "https://github.com/zimlink/transformer-lab" },
      { type: "pdf", title: "Attention Illustrated", url: "/assets/attention.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-TRF-313",
      title: "Certificate of Competence — Transformers for NLP",
      level: "Level 5",
      eqf: "EQF 6",
      rqf: "RQF Level 5",
      credits: 13,
      notionalHours: 36,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 5 / EQF 6 / SFIA",
      assessment: "75-min qualifying exam (75% pass)",
      competencies: [
        { code: "TRF-313-C1", title: "Attention mechanics", weight: 35 },
        { code: "TRF-313-C2", title: "Using pretrained models", weight: 30 },
        { code: "TRF-313-C3", title: "Fine-tuning for tasks", weight: 35 }
      ],
      examId: "exam-transformers-nlp"
    },
    chapters: [
      {
        id: "c1",
        title: "Attention Mechanisms",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Self-Attention", duration: "10:00", content: "Q, K, V, scaled dot-product attention, and what heads learn." },
          { id: "c1l2", type: "quiz", title: "Attention", duration: "4 min", xp: 50, question: "The softmax in attention is applied across:", options: ["The key dimension per query", "The feature dimension only", "Batch only", "The embedding only"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Using & Fine-Tuning",
        duration: "3.5 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Pipeline with Hugging Face", duration: "11:00", content: "from_pretrained, tokenizers, and trainer APIs." },
          { id: "c2l2", type: "exercise", title: "Text Generation", duration: "11 min", xp: 110, instructions: "Load a tiny GPT-2 via transformers pipeline and print the first 30 characters of generated text.", language: "python", starterCode: "from transformers import pipeline\ngen = pipeline('text-generation', model='sshleifer/tiny-gpt2')\nout = gen('The weather today is', max_length=15)[0]['generated_text']\nprint(out[:30])", solution: "from transformers import pipeline\ngen = pipeline('text-generation', model='sshleifer/tiny-gpt2')\nout = gen('The weather today is', max_length=15)[0]['generated_text']\nprint(out[:30])", hint: "Use the pipeline", tests: [{ expected: "The weather today is" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-trf-313",
      title: "Question-Answering System",
      description: "Fine-tune a transformer on a small extractive-QA dataset and evaluate F1 / exact-match on a held-out set.",
      duration: "2.5 hours",
      xp: 650,
      requirements: ["Load pretrained QA model", "Fine-tune on dataset", "Report EM & F1", "Demo a sample QA"],
      deliverables: [{ type: "code", name: "train.py", description: "Fine-tuning" }, { type: "report", name: "results.md", description: "EM/F1" }]
    },
    advanced: {
      id: "adv-trf-313",
      title: "Advanced: Attention Interpretability",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Visualizing Attention", duration: "10:00", content: "Reading attention maps to debug and interpret models." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Transformers Explained", duration: "17:00", instructor: "Dr. Anesu Ndlovu", topic: "Architecture" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["NLP Engineer", "ML Engineer", "LLM Engineer"]
  },
  {
    id: "nlp-api-production",
    slug: "nlp-api-production",
    title: "NLP in Production",
    short: "Deploy reliable NLP services that scale and stay monitored.",
    description: "Turn NLP prototypes into robust APIs and batch pipelines: model serving, latency, rate limiting, retraining, versioning, and monitoring drift in a changing language landscape.",
    level: "Advanced",
    duration: "8 hours",
    hours: 8,
    xp: 2400,
    category: "NLP",
    instructor: "Tatenda Moyo",
    instructorTitle: "Senior Data Engineer",
    instructorBio: "Takes NLP from notebooks to resilient services and shares proven patterns.",
    instructorAvatar: "python",
    rating: 4.7,
    students: 17340,
    icon: "bi-server",
    image: "tensorflow",
    color: "#0ea5e9",
    tags: ["Deployment", "APIs", "Serving", "Monitoring", "Versioning"],
    prerequisites: ["nlp-basics", "transformers-nlp", "python-ds"],
    learningOutcomes: [
      "Expose NLP models as fast, safe APIs",
      "Serve models with batching and quantization",
      "Design retraining and versioning workflows",
      "Monitor latency, output quality, and drift",
      "Apply rate limiting and error handling in production"
    ],
    skills: ["Model Serving", "API Design", "Batching", "Monitoring", "CI/CD"],
    difficulty: "Advanced — Python + production engineering",
    resources: [
      { type: "github", title: "NLP-Serving", url: "https://github.com/zimlink/nlp-serving" },
      { type: "pdf", title: "Serving Playbook", url: "/assets/serving.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-NLPOPS-314",
      title: "Certificate of Competence — NLP in Production",
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
        { code: "NLPOPS-314-C1", title: "Serving & APIs", weight: 40 },
        { code: "NLPOPS-314-C2", title: "Retraining & versioning", weight: 30 },
        { code: "NLPOPS-314-C3", title: "Monitoring & drift", weight: 30 }
      ],
      examId: "exam-nlp-production"
    },
    chapters: [
      {
        id: "c1",
        title: "Serving NLP Models",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Fast & Safe Inference", duration: "10:00", content: "Node-serve models, batch requests, and quantize for lower latency." },
          { id: "c1l2", type: "exercise", title: "Simple HTTP Endpoint", duration: "11 min", xp: 100, instructions: "With Flask/FastAPI pattern, define a function that returns a JSON-ish body string for a predict route, then print the function name via __name__.", language: "python", starterCode: "from flask import Flask, request, jsonify\napp = Flask(__name__)\n@app.route('/predict', methods=['POST'])\ndef predict():\n    return jsonify({'ok': True})\nprint('predict')", solution: "from flask import Flask, request, jsonify\napp = Flask(__name__)\n@app.route('/predict', methods=['POST'])\ndef predict():\n    return jsonify({'ok': True})\nprint('predict')", hint: "Prints the route handler name", tests: [{ expected: "predict" }] }
        ]
      },
      {
        id: "c2",
        title: "Versioning & Monitoring",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Retrain & Canary Deploy", duration: "10:00", content: "Model versioning, shadow/canary rollout, and drift detection." },
          { id: "c2l2", type: "quiz", title: "Drift", duration: "4 min", xp: 50, question: "When user language changes over time, a model's degradation is called:", options: ["Data/input drift", "GPU failure", "Cold start", "Cache miss"], answer: 0 }
        ]
      }
    ],
    capstone: {
      id: "capstone-nlpop-314",
      title: "Deploy an NLP API",
      description: "Package a sentiment model behind an HTTP API with batching, rate limiting, and a simple drift monitor reporting output distribution shifts.",
      duration: "2.5 hours",
      xp: 600,
      requirements: ["Serve model via API", "Add batching & limits", "Log outputs", "Add drift check"],
      deliverables: [{ type: "code", name: "service.py", description: "Serving service" }, { type: "report", name: "ops.md", description: "Ops notes" }]
    },
    advanced: {
      id: "adv-nlpop-314",
      title: "Advanced: GPU Batching & Quantization",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Throughput Tricks", duration: "10:00", content: "Dynamic batching and INT8 quantization for transformers." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Running NLP in Prod", duration: "15:00", instructor: "Tatenda Moyo", topic: "Serving" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["MLOps Engineer", "NLP Engineer", "ML Engineer"]
  }
];
