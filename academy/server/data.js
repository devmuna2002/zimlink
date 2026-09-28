import { foundationsCourses } from "./foundations.js";
import { programmingCourses } from "./programming.js";
import { mlCourses } from "./ml.js";
import { dlCourses } from "./dl.js";
import { genaiCourses } from "./genai.js";
import { nlpCourses } from "./nlp.js";
import { mlopsCourses } from "./mlops.js";
import { cvCourses } from "./cv.js";
import { ethicsCourses } from "./ethics.js";

const baseCourses = [
  {
    id: "ai-foundations",
    slug: "ai-foundations",
    title: "Introduction to Artificial Intelligence",
    short: "Master the fundamentals of AI, its history, and real-world applications.",
    description: "Start your AI journey with a solid foundation. Learn what AI is, how it differs from ML and DL, key milestones, ethics, and where AI is headed. Perfect for beginners with no prerequisites.",
    level: "Beginner",
    duration: "4 hours",
    hours: 4,
    xp: 1200,
    category: "Foundations",
    instructor: "Dr. Rumbidzai Chikomo",
    instructorTitle: "AI Research Lead, Stanford",
    rating: 4.8,
    students: 34291,
    image: "🧠",
    color: "#0ea5e9",
    tags: ["AI Basics", "History", "Ethics"],
    chapters: [
      {
        id: "c1",
        title: "What is Artificial Intelligence?",
        duration: "45 min",
        lessons: [
          { id: "c1l1", type: "video", title: "Defining Intelligence", duration: "6:12", content: "AI is the simulation of human intelligence in machines. Key concepts: narrow vs general AI, symbolic vs connectionist approaches, Turing Test." },
          { id: "c1l2", type: "exercise", title: "Your First AI Classification", duration: "10 min", xp: 100, instructions: "Create an array of 3 AI application domains and print its length.", language: "python", starterCode: "# Create a list of 3 AI domains\nai_domains = []\n\n# Print the number of domains\nprint(len(ai_domains))", solution: "ai_domains = ['healthcare', 'finance', 'education']\nprint(len(ai_domains))", hint: "Use a list literal: ['healthcare', 'finance', 'education']", tests: [{ input: "", expected: "3" }] },
          { id: "c1l3", type: "quiz", title: "Knowledge Check", duration: "5 min", xp: 50, question: "Which of these is Narrow AI?", options: ["A system that can do any intellectual task a human can", "A system trained to play chess at superhuman level but cannot do anything else", "Artificial General Intelligence", "A conscious machine"], answer: 1 },
          { id: "c1l4", type: "exercise", title: "AI Timeline Exercise", duration: "8 min", xp: 100, instructions: "Create a dictionary mapping year to AI milestone and print the 1956 entry.", language: "python", starterCode: "milestones = {\n  1950: \"Turing Test\",\n  1956: \"Dartmouth Conference\",\n  1997: \"Deep Blue beats Kasparov\"\n}\n# Print the 1956 milestone\n", solution: "milestones = {1950: \"Turing Test\", 1956: \"Dartmouth Conference\", 1997: \"Deep Blue beats Kasparov\"}\nprint(milestones[1956])", hint: "Access dict via milestones[1956]", tests: [{ expected: "Dartmouth Conference" }] }
        ]
      },
      {
        id: "c2",
        title: "Machine Learning vs Deep Learning",
        duration: "60 min",
        lessons: [
          { id: "c2l1", type: "video", title: "The AI Stack", duration: "7:30", content: "Visual pyramid: AI (outermost) > ML > DL > Generative AI. ML learns from data, DL uses neural nets, GenAI creates new content." },
          { id: "c2l2", type: "exercise", title: "Supervised Learning Hands-On", duration: "12 min", xp: 100, instructions: "Given X=[1,2,3] and y=[2,4,6], compute the mean of y and print it.", language: "python", starterCode: "X = [1,2,3]\ny = [2,4,6]\n# Compute mean of y\nmean_y = 0\nprint(mean_y)", solution: "X = [1,2,3]\ny = [2,4,6]\nmean_y = sum(y)/len(y)\nprint(mean_y)", hint: "mean = sum(y)/len(y)", tests: [{ expected: "4.0" }] },
          { id: "c2l3", type: "quiz", title: "DL Characteristics", duration: "5 min", xp: 50, question: "What enables deep learning to handle unstructured data so well?", options: ["Decision trees", "Multi-layer neural networks that learn hierarchical features", "Linear regression", "Manual feature engineering only"], answer: 1 }
        ]
      },
      {
        id: "c3",
        title: "AI Ethics & Future",
        duration: "55 min",
        lessons: [
          { id: "c3l1", type: "video", title: "Responsible AI", duration: "8:00", content: "Bias, fairness, transparency, accountability. Case studies: hiring bias, facial recognition errors, alignment problem." },
          { id: "c3l2", type: "exercise", title: "Bias Detection Logic", duration: "10 min", xp: 100, instructions: "Write a function is_fair(accuracy_group_a, accuracy_group_b) that returns True if difference < 0.05 else False. Test with print(is_fair(0.92,0.89)).", language: "python", starterCode: "def is_fair(a, b):\n  # return True if abs(a-b) < 0.05\n  pass\n\nprint(is_fair(0.92, 0.89))", solution: "def is_fair(a, b):\n  return abs(a-b) < 0.05\nprint(is_fair(0.92, 0.89))", hint: "return abs(a - b) < 0.05", tests: [{ expected: "True" }] },
          { id: "c3l3", type: "quiz", title: "Final Assessment", duration: "10 min", xp: 100, question: "Which principle is MOST critical for high-stakes AI like healthcare?", options: ["Speed", "Explainability & Human Oversight", "Lowest Cost", "Maximum Parameters"], answer: 1 }
        ]
      }
    ]
  },
  {
    id: "python-ds",
    slug: "python-for-data-science",
    title: "Python for Data Science",
    short: "Python essentials for AI: NumPy, Pandas, visualization and data wrangling.",
    description: "The prerequisite for every AI course. Master Python data structures, NumPy arrays, Pandas DataFrames, and Matplotlib through hands-on exercises used daily by data scientists.",
    level: "Beginner",
    duration: "6 hours",
    hours: 6,
    xp: 1800,
    category: "Programming",
    instructor: "Tatenda Moyo",
    instructorTitle: "Kaggle Grandmaster",
    rating: 4.9,
    students: 51203,
    image: "🐍",
    color: "#22c55e",
    tags: ["Python", "NumPy", "Pandas"],
    chapters: [
      {
        id: "c1",
        title: "Python Foundations",
        duration: "70 min",
        lessons: [
          { id: "c1l1", type: "video", title: "Why Python for AI?", duration: "5:40", content: "Ecosystem: NumPy, Pandas, Scikit-learn, PyTorch. REPL, notebooks, and the Zen of Python." },
          { id: "c1l2", type: "exercise", title: "List Comprehension Power", duration: "10 min", xp: 100, instructions: "Create squares = [x**2 for x in range(1,6)] and print squares.", language: "python", starterCode: "# Create squares 1..5\nsquares = []\nprint(squares)", solution: "squares = [x**2 for x in range(1,6)]\nprint(squares)", hint: "squares = [x**2 for x in range(1,6)]", tests: [{ expected: "[1, 4, 9, 16, 25]" }] },
          { id: "c1l3", type: "exercise", title: "Data Cleaning Function", duration: "12 min", xp: 120, instructions: "Clean a list by removing None values: data=[1,None,2,None,3]. Use list comprehension and print result.", language: "python", starterCode: "data = [1, None, 2, None, 3]\ncleaned = []\nprint(cleaned)", solution: "data = [1, None, 2, None, 3]\ncleaned = [x for x in data if x is not None]\nprint(cleaned)", hint: "[x for x in data if x is not None]", tests: [{ expected: "[1, 2, 3]" }] }
        ]
      },
      {
        id: "c2",
        title: "NumPy & Pandas",
        duration: "80 min",
        lessons: [
          { id: "c2l1", type: "video", title: "Arrays & DataFrames", duration: "9:20", content: "NumPy ndarrays vs lists, vectorization, broadcasting. Pandas Series/DataFrame, indexing, groupby." },
          { id: "c2l2", type: "exercise", title: "Pandas GroupBy", duration: "15 min", xp: 150, instructions: "Simulate: scores={'A':[90,85],'B':[78,82]} . Compute average per group using dict comprehension and print.", language: "python", starterCode: "scores = {'A': [90, 85], 'B': [78, 82]}\navg = {}\nprint(avg)", solution: "scores = {'A': [90, 85], 'B': [78, 82]}\navg = {k: sum(v)/len(v) for k,v in scores.items()}\nprint(avg)", hint: "{k: sum(v)/len(v) for k,v in scores.items()}", tests: [{ expected: "A" }] }
        ]
      }
    ]
  },
  {
    id: "ml-fundamentals",
    slug: "ml-fundamentals",
    title: "Machine Learning Fundamentals",
    short: "From linear regression to ensemble methods — build and evaluate ML models.",
    description: "End-to-end ML workflow: data prep, train/test split, regression, classification, cross-validation, and metrics. Build your first models with scikit-learn.",
    level: "Intermediate",
    duration: "8 hours",
    hours: 8,
    xp: 2500,
    category: "Machine Learning",
    instructor: "Dr. Anesu Ndlovu",
    instructorTitle: "Ex-Google AI",
    rating: 4.9,
    students: 29844,
    image: "📈",
    color: "#a855f7",
    tags: ["Scikit-learn", "Regression", "Classification"],
    chapters: [
      {
        id: "c1",
        title: "Supervised Learning",
        duration: "90 min",
        lessons: [
          { id: "c1l1", type: "video", title: "The ML Loop", duration: "10:00", content: "Dataset -> Features -> Model -> Loss -> Optimization. Underfitting vs Overfitting, bias-variance tradeoff." },
          { id: "c1l2", type: "exercise", title: "Train-Test Split", duration: "12 min", xp: 150, instructions: "Split list data=list(range(10)) into train = first 8, test = last 2. Print len(train), len(test).", language: "python", starterCode: "data = list(range(10))\ntrain = []\ntest = []\nprint(len(train), len(test))", solution: "data = list(range(10))\ntrain = data[:8]\ntest = data[8:]\nprint(len(train), len(test))", hint: "train = data[:8]; test = data[8:]", tests: [{ expected: "8 2" }] },
          { id: "c1l3", type: "exercise", title: "Accuracy Calculation", duration: "10 min", xp: 120, instructions: "y_true=[1,0,1,1], y_pred=[1,0,0,1]. Compute accuracy = correct/total and print it.", language: "python", starterCode: "y_true = [1,0,1,1]\ny_pred = [1,0,0,1]\naccuracy = 0\nprint(accuracy)", solution: "y_true = [1,0,1,1]\ny_pred = [1,0,0,1]\naccuracy = sum(1 for a,b in zip(y_true,y_pred) if a==b)/len(y_true)\nprint(accuracy)", hint: "sum(1 for a,b in zip(y_true,y_pred) if a==b)/len(y_true)", tests: [{ expected: "0.75" }] }
        ]
      },
      {
        id: "c2",
        title: "Model Evaluation",
        duration: "70 min",
        lessons: [
          { id: "c2l1", type: "video", title: "Metrics That Matter", duration: "8:30", content: "Accuracy, Precision, Recall, F1, ROC-AUC, Confusion Matrix. When to use which." },
          { id: "c2l2", type: "quiz", title: "Metric Choice", duration: "6 min", xp: 80, question: "For a cancer screening test where missing a positive is disastrous, you optimize for:", options: ["Accuracy", "Precision", "Recall (Sensitivity)", "Specificity alone"], answer: 2 }
        ]
      }
    ]
  },
  {
    id: "deep-learning",
    slug: "deep-learning-pytorch",
    title: "Deep Learning with PyTorch",
    short: "Neural networks, CNNs, RNNs and training loops from scratch.",
    description: "Build deep nets with PyTorch. Tensors, autograd, CNNs for images, RNNs/LSTMs for sequences, transfer learning and GPU training.",
    level: "Intermediate",
    duration: "10 hours",
    hours: 10,
    xp: 3000,
    category: "Deep Learning",
    instructor: "Simba Chikwanha",
    instructorTitle: "PyTorch Core Contributor",
    rating: 4.8,
    students: 22107,
    image: "🧬",
    color: "#ef4444",
    tags: ["PyTorch", "CNN", "RNN"],
    chapters: [
      {
        id: "c1",
        title: "Neural Networks Foundations",
        duration: "80 min",
        lessons: [
          { id: "c1l1", type: "video", title: "Perceptron to Deep Net", duration: "12:00", content: "McCulloch-Pitts -> Perceptron -> MLP, activation functions, backpropagation intuitively." },
          { id: "c1l2", type: "exercise", title: "ReLU Implementation", duration: "10 min", xp: 120, instructions: "Implement relu(x): return max(0,x). Test with relu(-3), relu(5) printed.", language: "python", starterCode: "def relu(x):\n  pass\n\nprint(relu(-3), relu(5))", solution: "def relu(x):\n  return max(0, x)\nprint(relu(-3), relu(5))", hint: "return max(0, x)", tests: [{ expected: "0 5" }] },
          { id: "c1l3", type: "exercise", title: "Softmax Numerical Stability", duration: "12 min", xp: 150, instructions: "Implement softmax for logits=[1,2,3] using exp and sum, print rounded values to 2 decimals as list.", language: "javascript", starterCode: "function softmax(logits){\n  // implement\n}\nconsole.log(softmax([1,2,3]))", solution: "function softmax(logits){ const exps=logits.map(x=>Math.exp(x)); const s=exps.reduce((a,b)=>a+b,0); return exps.map(x=>+(x/s).toFixed(2)); }\nconsole.log(softmax([1,2,3]))", hint: "exp each, divide by sum", tests: [{ expected: "0.09" }] }
        ]
      },
      {
        id: "c2",
        title: "Convolutional Networks",
        duration: "90 min",
        lessons: [
          { id: "c2l1", type: "video", title: "CNNs for Vision", duration: "10:30", content: "Convolution, pooling, filters, ResNet, and why CNNs understand images." },
          { id: "c2l2", type: "quiz", title: "CNN Quiz", duration: "5 min", xp: 80, question: "What does a 3x3 convolution with stride 1 do to a 32x32 input (no padding)?", options: ["32x32", "30x30", "31x31", "33x33"], answer: 1 }
        ]
      }
    ]
  },
  {
    id: "gen-ai",
    slug: "generative-ai-llms",
    title: "Generative AI & Large Language Models",
    short: "Transformers, GPT, diffusion models and building GenAI apps.",
    description: "How LLMs work: transformers, attention, pre-training, fine-tuning, RLHF, diffusion. Then build: chatbot, RAG system, and image generation app.",
    level: "Intermediate",
    duration: "7 hours",
    hours: 7,
    xp: 2400,
    category: "Generative AI",
    instructor: "Tafadzwa Chikono",
    instructorTitle: "Anthropic, ex-OpenAI",
    rating: 4.9,
    students: 41209,
    image: "✨",
    color: "#06b6d4",
    tags: ["LLM", "RAG", "Diffusion"],
    chapters: [
      {
        id: "c1",
        title: "Transformer Architecture",
        duration: "70 min",
        lessons: [
          { id: "c1l1", type: "video", title: "Attention Is All You Need", duration: "11:00", content: "Self-attention, multi-head, positional encoding, encoder-decoder." },
          { id: "c1l2", type: "exercise", title: "Scaled Dot-Product Attention (Simplified)", duration: "15 min", xp: 150, instructions: "Given Q=[1,0], K=[1,0], compute dot product and print it (simulates attention score).", language: "python", starterCode: "Q = [1,0]\nK = [1,0]\nscore = 0\nprint(score)", solution: "Q = [1,0]\nK = [1,0]\nscore = sum(a*b for a,b in zip(Q,K))\nprint(score)", hint: "sum(a*b for a,b in zip(Q,K))", tests: [{ expected: "1" }] }
        ]
      },
      {
        id: "c2",
        title: "Building with LLMs",
        duration: "80 min",
        lessons: [
          { id: "c2l1", type: "video", title: "RAG & Agents", duration: "9:00", content: "Retrieval-Augmented Generation, tool use, agents, vector DBs." },
          { id: "c2l2", type: "exercise", title: "Prompt Templating", duration: "10 min", xp: 120, instructions: "Create a function promptify(role, task) returning f'You are a {role}. Task: {task}'. Print promptify('chef','make pasta').", language: "python", starterCode: "def promptify(role, task):\n  pass\n\nprint(promptify('chef','make pasta'))", solution: "def promptify(role, task):\n  return f'You are a {role}. Task: {task}'\nprint(promptify('chef','make pasta'))", hint: "return f'You are a {role}. Task: {task}'", tests: [{ expected: "You are a chef" }] }
        ]
      }
    ]
  },
  {
    id: "prompt-eng",
    slug: "prompt-engineering",
    title: "Prompt Engineering Mastery",
    short: "Craft prompts that make LLMs 10x more effective — from zero-shot to CoT.",
    description: "Systematic prompting: zero/few-shot, chain-of-thought, ReAct, constraints, JSON mode, and evaluation. Includes real GPT-4 prompt challenges.",
    level: "Beginner",
    duration: "3 hours",
    hours: 3,
    xp: 1100,
    category: "Generative AI",
    instructor: "Farai Muparadzi",
    instructorTitle: "Prompt Engineer @ Shopify",
    rating: 4.8,
    students: 28933,
    image: "💬",
    color: "#f59e0b",
    tags: ["Prompting", "CoT", "Few-shot"],
    chapters: [
      {
        id: "c1",
        title: "Prompt Patterns",
        duration: "50 min",
        lessons: [
          { id: "c1l1", type: "video", title: "The Art of Instruction", duration: "7:00", content: "Role, context, task, format, constraints. The 5-part prompt framework." },
          { id: "c1l2", type: "exercise", title: "Few-Shot Builder", duration: "10 min", xp: 100, instructions: "Build a few-shot prompt string with 2 examples mapping 'en->fr': hello->bonjour, cat->chat. Print its length.", language: "javascript", starterCode: "function buildPrompt(){\n  const examples = \"en: hello -> fr: bonjour\\nen: cat -> fr: chat\";\n  // return full prompt with instruction prefix\n  return \"\";\n}\nconsole.log(buildPrompt().length)", solution: "function buildPrompt(){ const examples = \"en: hello -> fr: bonjour\\nen: cat -> fr: chat\"; return \"Translate en to fr:\\n\"+examples+\"\\nen: dog -> fr:\"; }\nconsole.log(buildPrompt().length)", hint: "Return 'Translate...'+examples", tests: [{ expected: "66" }] }
        ]
      }
    ]
  },
  {
    id: "computer-vision",
    slug: "computer-vision",
    title: "Computer Vision Fundamentals",
    short: "Image classification, detection, segmentation with OpenCV & deep learning.",
    description: "From pixels to perception: filters, edge detection, CNNs, YOLO, segmentation, and building a real-time object detection app.",
    level: "Intermediate",
    duration: "6 hours",
    hours: 6,
    xp: 2000,
    category: "Computer Vision",
    instructor: "Dr. Farai Muparadzi",
    instructorTitle: "Computer Vision Lead @ Tesla",
    rating: 4.7,
    students: 15622,
    image: "👁️",
    color: "#8b5cf6",
    tags: ["OpenCV", "YOLO", "Segmentation"],
    chapters: [
      {
        id: "c1",
        title: "Image Processing Basics",
        duration: "60 min",
        lessons: [
          { id: "c1l1", type: "video", title: "Pixels & Convolutions", duration: "8:00", content: "Grayscale, RGB, kernels, blurring, edge detection with Sobel." },
          { id: "c1l2", type: "exercise", title: "Grayscale Conversion", duration: "10 min", xp: 120, instructions: "Given pixel [120, 80, 200] (R,G,B), compute grayscale as 0.299*R+0.587*G+0.114*B and print rounded int.", language: "python", starterCode: "R,G,B = 120,80,200\ngray = 0\nprint(gray)", solution: "R,G,B = 120,80,200\ngray = round(0.299*R+0.587*G+0.114*B)\nprint(gray)", hint: "round(0.299*R+0.587*G+0.114*B)", tests: [{ expected: "106" }] }
        ]
      }
    ]
  },
  {
    id: "nlp-transformers",
    slug: "nlp-transformers",
    title: "NLP with Transformers",
    short: "Hugging Face, BERT, sentiment, NER and fine-tuning transformers.",
    description: "Modern NLP pipeline: tokenization, embeddings, BERT/GPT, Hugging Face ecosystem, fine-tuning for classification, QA, and summarization.",
    level: "Advanced",
    duration: "9 hours",
    hours: 9,
    xp: 2800,
    category: "NLP",
    instructor: "Dr. Chiedza Marega",
    instructorTitle: "Hugging Face Research",
    rating: 4.9,
    students: 18344,
    image: "📝",
    color: "#ec4899",
    tags: ["BERT", "HuggingFace", "Fine-tuning"],
    chapters: [
      {
        id: "c1",
        title: "Tokenization & Embeddings",
        duration: "70 min",
        lessons: [
          { id: "c1l1", type: "video", title: "From Words to Vectors", duration: "9:00", content: "BPE, WordPiece, SentencePiece, static vs contextual embeddings." },
          { id: "c1l2", type: "exercise", title: "TF-IDF Simplified", duration: "12 min", xp: 150, instructions: "Corpus: ['cat sat', 'cat cat sat']. Compute term frequency of 'cat' in doc 0 (count/total words) and print.", language: "python", starterCode: "doc0 = \"cat sat\".split()\ntf = 0\nprint(tf)", solution: "doc0 = \"cat sat\".split()\ntf = doc0.count('cat')/len(doc0)\nprint(tf)", hint: "doc0.count('cat')/len(doc0)", tests: [{ expected: "0.5" }] }
        ]
      }
    ]
  },
  {
    id: "mlops",
    slug: "mlops-deployment",
    title: "MLOps & Model Deployment",
    short: "Deploy, monitor and scale ML models with Docker, CI/CD and cloud.",
    description: "Take models to production: experiment tracking (MLflow), Docker, FastAPI, CI/CD, monitoring, drift detection, and cost optimization.",
    level: "Advanced",
    duration: "5 hours",
    hours: 5,
    xp: 1900,
    category: "MLOps",
    instructor: "Tanaka Shumba",
    instructorTitle: "MLOps @ Netflix",
    rating: 4.8,
    students: 12455,
    image: "🚀",
    color: "#10b981",
    tags: ["Docker", "FastAPI", "MLflow"],
    chapters: [
      {
        id: "c1",
        title: "From Notebook to Production",
        duration: "60 min",
        lessons: [
          { id: "c1l1", type: "video", title: "MLOps Landscape", duration: "8:30", content: "Why 87% of models never reach prod. Pillars: reproducibility, automation, monitoring." },
          { id: "c1l2", type: "exercise", title: "FastAPI Health Endpoint", duration: "12 min", xp: 150, instructions: "Simulate: create dict response={'status':'ok','model':'v1'} and print response['status'].", language: "python", starterCode: "response = {'status': 'ok', 'model': 'v1'}\nprint(response['status'])", solution: "response = {'status': 'ok', 'model': 'v1'}\nprint(response['status'])", hint: "print(response['status'])", tests: [{ expected: "ok" }] }
        ]
      }
    ]
  },
  {
    id: "ai-ethics",
    slug: "ai-ethics-responsible-ai",
    title: "AI Ethics & Responsible AI",
    short: "Build fair, transparent and accountable AI systems.",
    description: "Beyond accuracy: bias audits, explainability (SHAP/LIME), privacy (differential privacy, federated learning), governance and regulation (EU AI Act).",
    level: "Beginner",
    duration: "3.5 hours",
    hours: 3.5,
    xp: 1000,
    category: "Ethics",
    instructor: "Dr. Nyasha Mutasa",
    instructorTitle: "AI Policy Advisor, OECD",
    rating: 4.8,
    students: 16770,
    image: "⚖️",
    color: "#6366f1",
    tags: ["Fairness", "Explainability", "Governance"],
    chapters: [
      {
        id: "c1",
        title: "Bias & Fairness",
        duration: "50 min",
        lessons: [
          { id: "c1l1", type: "video", title: "Measuring Bias", duration: "7:30", content: "Disparate impact, equalized odds, demographic parity. Auditing datasets." },
          { id: "c1l2", type: "quiz", title: "Fairness Quiz", duration: "5 min", xp: 80, question: "Which metric checks if positive rates are equal across groups?", options: ["Equalized Odds", "Demographic Parity", "Calibration", "Accuracy"], answer: 1 }
        ]
      }
    ]
  }
];

export const courses = [
  ...baseCourses,
  ...foundationsCourses,
  ...programmingCourses,
  ...mlCourses,
  ...dlCourses,
  ...genaiCourses,
  ...nlpCourses,
  ...mlopsCourses,
  ...cvCourses,
  ...ethicsCourses
];

// --- Enrich: 50+ lessons per course — legit, topic-matched, with YouTube, revisions & questions ---
const __YT = {
  "Foundations": ["JMUxmLyrhSk","rfscVS0vtbw","kqtD5dpn9C8"],
  "Programming": ["rfscVS0vtbw","PkZNo7MFNFg","BwuLxPH8IDs","grEKMHGYyns","8uiZC0l4Ajw","MsocPEZBd-M","GcFJjpMFJv4","HXV3zeQKqGY"],
  "Machine Learning": ["7eh4d6sabA0","JMUxmLyrhSk","a9UrTNd6TS8","ukzFI9rgwfU"],
  "Deep Learning": ["VyWAvY2CF9c","aircAruvnKk","IHZwWFHWa-w"],
  "Generative AI": ["mEsleV16qdo","F0GQ0l2N-Cw","dOxUroR57xs"],
  "NLP": ["5vcj8kSwBCY","CMrHM8a3hqw","R2KiKa1U3gI"],
  "Computer Vision": ["u2V0Z6l6EoE","oXrna_ZAcGw","WQeoO7MI0Bs"],
  "MLOps": ["9BgIDqAzfuA","y2qNlR5hGfY","LMLRzpElezE"],
  "Ethics": ["g2CJg3erF4A","JMUxmLyrhSk","rKQdxa2OLh4"]
};

// Rich educational notes per topic — used across all courses
const __NOTES = {
  "Linear Regression": `Linear regression models the relationship between a dependent variable Y and one or more independent variables X using the equation Y = mX + b. The model is trained by minimizing the Mean Squared Error (MSE) via Ordinary Least Squares (OLS) or Gradient Descent. Key assumptions: linearity, independence of errors, homoscedasticity, and normality of residuals. **Real-world applications**: house price prediction, sales forecasting, medical dosage estimation. **Evaluation metrics**: R², MAE, RMSE. Watch for multicollinearity in multiple regression.`,
  "Logistic Regression": `Despite its name, logistic regression is a classification algorithm. It applies the sigmoid function σ(z) = 1/(1+e⁻ᶻ) to transform the linear combination of features into a probability [0,1]. **Decision boundary**: P(y=1|x) > 0.5. Training uses log-loss (binary cross-entropy) and gradient descent. **Regularization**: L1 (Lasso) for sparse solutions, L2 (Ridge) to reduce overfitting. **Extensions**: Softmax for multiclass classification. Common in medical diagnosis, spam detection, credit scoring.`,
  "Decision Trees": `Decision trees recursively split the feature space based on the feature that maximizes **Information Gain** (entropy reduction) or minimizes **Gini impurity**. Each internal node is a decision rule; leaves are predictions. **Strengths**: interpretable, handles mixed data types, no feature scaling needed. **Weaknesses**: high variance, prone to overfitting. **Pruning**: pre-pruning (max_depth, min_samples_leaf) and post-pruning (cost-complexity). Foundation for Random Forests and Gradient Boosting.`,
  "Random Forests": `An ensemble of N decision trees trained on bootstrap samples (bagging). Each tree considers a random subset of features at each split (feature bagging). Predictions are aggregated by **majority vote** (classification) or **mean** (regression). **Feature importance**: computed as mean decrease in impurity across all trees. Typically outperforms single trees and is robust to overfitting. **Hyperparameters**: n_estimators, max_depth, max_features. Used in fraud detection, gene expression analysis, and stock trading.`,
  "SVM": `Support Vector Machines find the **maximum-margin hyperplane** separating classes. Support vectors are the training points closest to the decision boundary. **Kernel trick** allows non-linear separation by mapping data to higher dimensions: RBF (Gaussian), polynomial, sigmoid kernels. **Soft-margin SVM** (parameter C) trades off margin width vs. misclassification. Strong theoretical guarantees, works well in high-dimensional spaces. Applications: image classification, bioinformatics, text categorization.`,
  "K-Means": `K-Means is an unsupervised algorithm that partitions n observations into k clusters. **Algorithm**: (1) Randomly initialize k centroids, (2) Assign each point to nearest centroid, (3) Recompute centroids as cluster means, (4) Repeat until convergence. **Limitations**: requires pre-specifying k, sensitive to initialization and outliers. **Elbow method**: plot inertia vs. k to find optimal k. **K-Means++**: smarter initialization for better convergence. Applications: customer segmentation, image compression, document clustering.`,
  "Cross-Validation": `Cross-validation provides a reliable estimate of model generalization. **k-fold CV**: split data into k folds; train on k-1, validate on 1, repeat k times, average scores. **Stratified k-fold**: maintains class proportions in each fold. **Leave-one-out (LOOCV)**: k = n, computationally expensive. **Time-series CV**: always train on past, validate on future. Prevents data leakage; essential for model selection and hyperparameter tuning. Use together with appropriate scoring metrics.`,
  "Graph Neural Networks": `**GNNs** learn on graph-structured data (molecules, social networks, knowledge graphs) where samples connect to each other. Core operation is **message passing**: each node aggregates neighbour features (mean, sum, attention), transforms them, and updates its embedding — stacking layers widens each node's receptive field. **GCN** uses fixed averaging; **GAT** learns attention weights per edge; **GraphSAGE** samples neighbours for scale. Uses: drug discovery, fraud rings, recommendations. **Common mistake**: over-smoothing — too many layers make all node embeddings identical; keep GNNs shallow with residuals.`,
  "Neural Networks": `Artificial Neural Networks (ANNs) are inspired by the brain's interconnected neurons. Each **neuron** computes z = Σ(wᵢxᵢ) + b, then applies an activation function. **Activation functions**: ReLU (f(x)=max(0,x)) for hidden layers, Sigmoid/Softmax for output. **Backpropagation**: uses the chain rule to compute gradients of the loss w.r.t. all weights. **Optimizers**: SGD, Adam, RMSProp. **Regularization**: Dropout, L2, Batch Normalization. Universal approximation theorem: a 2-layer network with sufficient neurons can approximate any continuous function.`,
  "Vision Transformers (ViT)": `**ViT** applies transformers directly to images: split the image into fixed **patches** (e.g. 16×16), flatten each into a token, add positional embeddings, and run a standard transformer encoder with a classification head. Patches play the role words play in NLP. ViTs beat CNNs **at large data scale** but need more data (weaker inductive bias — no built-in translation invariance). **DeiT** distils CNN knowledge in for data efficiency; **Swin** uses shifted windows hierarchically. **Common mistake**: training ViT from scratch on small datasets — always start from pretrained weights.`,
  "Transformers": `The Transformer architecture (Vaswani et al., 2017) revolutionized NLP. Core mechanism: **self-attention** computes attention scores between all token pairs. **Multi-head attention** runs h parallel attention heads, capturing different relationship types. **Positional encoding** injects sequence order information. The encoder-decoder structure enables seq2seq tasks. **BERT**: encoder-only, bidirectional, pre-trained on masked language modeling. **GPT**: decoder-only, autoregressive. **Scaling laws**: performance improves predictably with model size, data, and compute.`,
  "Backpropagation": `Backpropagation computes gradients of the loss function w.r.t. all network parameters using the **chain rule** of calculus. **Forward pass**: compute activations layer by layer and record them. **Backward pass**: propagate error gradients from output to input. Key insight: the gradient of layer l depends on gradients from layer l+1. **Vanishing gradients**: problem in deep nets with sigmoid/tanh; solved by ReLU, residual connections, and careful initialization (He, Xavier). Essential for training all modern deep learning models.`,
  "CNNs for Vision": `**CNNs for vision** turn pixel grids into understanding through stacked convolution, pooling, and fully connected layers. Early layers learn edges and textures; deeper layers learn parts and objects — a **feature hierarchy** you can visualise. Standard recipe: pretrained backbone (ResNet, EfficientNet) → replace the head → fine-tune on your classes with **augmentation** (flips, crops, colour jitter). **Transfer learning** from ImageNet works even for medical or satellite images. **Common mistake**: training from scratch on hundreds of images — with small data, freeze the backbone and train only the head first.`,
  "CNNs": `Convolutional Neural Networks exploit **spatial locality** and **translational invariance** in grid-structured data (images, time series). **Convolution layer**: applies learned filters; kernel size, stride, and padding control output dimensions. Output: (W-F+2P)/S + 1. **Pooling**: reduces spatial dimensions (max-pool, average-pool). **Feature maps**: earlier layers detect edges/textures; deeper layers detect shapes/objects. **Famous architectures**: AlexNet, VGG, ResNet (skip connections), EfficientNet. Transfer learning from ImageNet dramatically reduces training time and data requirements.`,
  "Attention Mechanism": `The attention mechanism allows models to **focus on relevant parts of the input** when producing each output token. **Dot-product attention**: score(Q,K) = softmax(QK^T/√d_k)V. Query (Q), Key (K), and Value (V) are linear projections of input embeddings. **Self-attention**: Q, K, V all come from same sequence; enables capturing long-range dependencies. **Cross-attention**: Q from decoder, K and V from encoder; used in translation. Foundation of Transformers, BERT, GPT, and virtually all state-of-the-art NLP/vision models.`,
  "Python Basics": `Python is a dynamically typed, interpreted language with clean syntax. Core data types: int, float, str, bool. **Collections**: list (ordered, mutable), tuple (ordered, immutable), dict (key-value), set (unordered unique). **Control flow**: if/elif/else, for/while loops, break/continue. **Functions**: def keyword, default args, *args/**kwargs. **PEP 8**: official Python style guide. **Key built-ins**: len(), range(), enumerate(), zip(), map(), filter(). The **Python Data Model** (dunder methods __init__, __repr__, __len__) enables custom class behavior. Python powers 80% of AI/ML production systems.`,
  "Tokenization": `Tokenization converts raw text into discrete units (tokens) that models can process. **Word-level**: splits on whitespace; large vocabulary, handles morphology poorly. **Character-level**: small vocabulary; struggles with long sequences. **Subword** (BPE, WordPiece, SentencePiece): balances vocabulary size and coverage. **BPE** (Byte-Pair Encoding): iteratively merges the most frequent character pairs. **WordPiece** (used by BERT): uses likelihood instead of frequency. **Byte-level BPE** (GPT-2): operates on raw bytes, handles any language. Special tokens: [CLS], [SEP], [PAD], [MASK], <|endoftext|>.`,
  "BERT": `BERT (Bidirectional Encoder Representations from Transformers, Devlin et al. 2018) pre-trains on two tasks: (1) **Masked Language Modeling (MLM)**: predict randomly masked tokens; (2) **Next Sentence Prediction (NSP)**: determine if sentence B follows sentence A. **Bidirectionality**: unlike GPT, BERT conditions on both left and right context simultaneously. **Fine-tuning**: add a task-specific head and train on labeled data. **BERT-base**: 12 layers, 768 hidden dim, 12 attention heads, 110M params. **Variants**: RoBERTa (removes NSP, more data), ALBERT (parameter sharing), DistilBERT (66% smaller, 97% performance).`,
  "RAG Systems": `Retrieval-Augmented Generation (RAG) combines information retrieval with language model generation. **Pipeline**: (1) Documents are **chunked and embedded** using a text encoder. (2) Embeddings stored in a **vector database** (FAISS, Pinecone, Weaviate). (3) At query time, the question is encoded; **top-k similar chunks** retrieved via cosine/ANN search. (4) Retrieved context + query are passed to the LLM for generation. **Benefits**: reduces hallucination, allows knowledge updates without retraining, supports source attribution. **Advanced RAG**: re-ranking, HyDE, step-back prompting, query decomposition.`,
  "Docker": `Docker packages applications and their dependencies into **containers** — lightweight, isolated, reproducible execution environments. **Key concepts**: Image (read-only template), Container (running instance), Dockerfile (build instructions), Docker Hub (registry). **Dockerfile**: FROM (base image), RUN (execute command), COPY/ADD (add files), EXPOSE (port), CMD/ENTRYPOINT (default command). **Multi-stage builds** reduce final image size. **Volumes**: persist data outside containers. **Docker Compose**: orchestrate multi-container apps with docker-compose.yml. Essential for ML model deployment, reproducible experiments, and CI/CD pipelines.`,
  "Embeddings for Search": `**Embeddings for search** turn retrieval into geometry: encode documents and queries with the same model (E5, BGE, ada), then return nearest neighbours by **cosine similarity**. Pipeline: **chunk** documents (200–500 tokens with overlap) → embed → store in a **vector index** (FAISS, Pinecone, pgvector) → retrieve top-k → optionally **re-rank** with a cross-encoder. **Hybrid search** adds BM25 keyword matching for exact terms. **Common mistake**: giant unoverlapped chunks — retrieval returns bloated context and the generator drowns; tune chunk size on real queries.`,
  "Embeddings": `Embeddings map discrete objects (words, sentences, images, users) to dense vectors in a continuous space, where **semantic similarity = geometric proximity**. **Word2Vec** (Mikolov 2013): Skip-gram and CBOW; learns from local context windows. **GloVe**: combines global co-occurrence statistics with local context. **Sentence embeddings**: SBERT, E5, text-embedding-ada-002; encode full sentences for semantic search and clustering. **Contrastive learning**: InfoNCE loss pulls similar pairs together, pushes negatives apart. Applications: semantic search, recommendation systems, clustering, zero-shot classification.`,
  "Bias & Fairness": `Algorithmic bias occurs when AI systems produce systematically prejudiced outcomes. **Sources**: biased training data, proxy features, underrepresentation, feedback loops. **Fairness metrics**: Demographic Parity (equal positive rates across groups), Equalized Odds (equal TPR and FPR), Individual Fairness (similar individuals treated similarly). **Mitigation**: pre-processing (resampling, re-weighting), in-processing (fairness constraints), post-processing (threshold calibration). **Impossibility theorem**: several fairness criteria are mutually exclusive when base rates differ. **EU AI Act**: mandates bias assessment for high-risk AI systems. Essential for hiring, lending, healthcare, and criminal justice AI.`,
  "Feature Engineering": `Feature engineering transforms raw data into informative representations that improve model performance. **Numerical**: normalization (min-max), standardization (z-score), log/power transforms, binning. **Categorical**: one-hot encoding, label encoding, target encoding, embedding. **Date/time**: extract day-of-week, hour, lag features, rolling statistics. **Text**: TF-IDF, n-grams, word embeddings. **Interaction features**: products or ratios of existing features. **Feature selection**: filter methods (correlation, chi-squared), wrapper methods (RFE), embedded methods (L1 regularization, tree importance). Good feature engineering often outperforms complex model architectures.`,
  "Regularization": `Regularization reduces overfitting by adding a penalty for model complexity to the loss function. **L2 (Ridge)**: adds λ·||w||² to loss; shrinks weights toward zero, never eliminates them; works well with many small effects. **L1 (Lasso)**: adds λ·||w||₁; drives some weights exactly to zero, performing feature selection. **Elastic Net**: combination of L1 and L2. **Dropout**: randomly zeros neuron activations during training (equivalent to training an ensemble). **Early stopping**: monitor validation loss; stop training when it starts increasing. **Batch Normalization**: normalizes layer activations, acts as implicit regularizer.`,
  "Computer Vision Basics": `Computer vision enables machines to interpret visual information. **Image representation**: pixels as (H, W, C) tensors; RGB channels [0-255] or normalized [0,1]. **Preprocessing**: resizing, normalization, augmentation (flips, rotations, color jitter). **Feature extraction**: edge detection (Canny, Sobel), corners (Harris), textures (Gabor). **Classical approaches**: SIFT, HOG descriptors + SVM classifier. **Deep learning**: CNNs automatically learn hierarchical features. **Tasks**: image classification (single label), object detection (bounding boxes + labels), segmentation (per-pixel labels), pose estimation.`,
  "Object Detection": `Object detection simultaneously localizes and classifies objects in images. **Two-stage detectors**: R-CNN family — propose region candidates, then classify. Fast R-CNN, Faster R-CNN (Region Proposal Network). More accurate but slower. **One-stage detectors**: YOLO (You Only Look Once), SSD — directly predict boxes and classes in single forward pass; faster but historically less accurate. **Anchor boxes**: predefined box shapes at each location. **Evaluation**: mAP (mean Average Precision) at IoU thresholds. **Loss**: classification loss + localization loss (smooth L1). YOLOv8/v9 achieves real-time detection on consumer GPUs.`,
  "Variables & Types": `Variables bind names to values in memory. In Python, x = 42 creates an int object and points x at it; types are checked at runtime (**dynamic typing**), while Java checks at compile time (**static typing**). Core types: **int** whole numbers, **float** decimals, **str** text, **bool** True/False. Example: name = "Ada" makes name a str; int("5") converts to 5. **Common mistake**: comparing types with == instead of isinstance(x, int). Choose types deliberately — they decide which operations are legal.`,
  "Control Flow & Loops": `Control flow decides which code runs and how often. An **if/elif/else** chain branches on conditions; a **for loop** iterates a fixed sequence; a **while loop** repeats until its condition turns False. Example: for i in range(3): print(i) outputs 0, 1, 2. **break** exits a loop early, **continue** skips to the next iteration. **Common mistake**: infinite while loops — always move toward the exit condition. Prefer for over while when the iteration count is known.`,
  "Functions & Closures": `A function packages reusable logic behind a name: def add(a, b): return a + b. **Parameters** are declared inputs, **arguments** the values passed at call time. **Return** sends a result back; without it Python gives None. A **closure** is an inner function remembering its enclosing scope: def outer(): x = 1; def inner(): return x + 1; return inner. Closures power decorators, callbacks, and factories. **Common mistake**: mutable defaults like def f(lst=[]) share one list across calls.`,
  "Classes": `A class is a blueprint for creating objects that bundle data with behaviour. class Dog: defines the blueprint; rover = Dog("Rover") creates an **instance** (object). **__init__** is the constructor initialising each instance; **self** refers to the instance itself. **Attributes** (self.name) store state; **methods** (def bark(self)) define behaviour — rover.bark() calls the method on that instance. **Inheritance** lets class Puppy(Dog) reuse and extend Dog. **Common mistake**: forgetting self as the first method parameter.`,
  "Async & Promises": `Async code runs tasks concurrently without blocking. In Python, **async def** declares a coroutine and **await** pauses it until the awaited task finishes, freeing the event loop meanwhile. In JavaScript, a **Promise** represents a future value, consumed with .then() chains or await. Example: data = await fetch(url) downloads without freezing the page. **Common mistake**: calling an async function without await — you get a coroutine object, not the result. Use async for I/O-bound work; threads or processes for CPU-bound work.`,
  "DOM": `The **DOM** (Document Object Model) is the browser's live tree of a page: document → html → body → elements. JavaScript reads and rewrites it: document.querySelector("#price").textContent = "$9". An **event** (click, input, submit) triggers handlers via el.addEventListener("click", handler). Events **bubble** from target up to document, so one parent listener can manage many children (**event delegation**). **Common mistake**: attaching listeners before elements exist — run scripts after DOM load or at end of body.`,
  "Modules & Imports": `Modules split programs into reusable files. Python: import math gives math.sqrt(16); from utils import helper imports one name. JavaScript: export function f(){} then import { f } from "./utils.js". **Packages** are folders of modules (__init__.py in Python). **Circular imports** (a imports b, b imports a) fail — move shared code to a third module. **Common mistake**: naming your file math.py shadows the standard library. Organise by feature and keep imports at the top.`,
  "Error Handling & Debugging": `Errors are normal; handling them keeps programs alive. Python: try: risky() except ValueError as e: handle it — with optional else and **finally** (always runs). **Raise** your own: raise ValueError("age must be positive"). **Debugging** means reproducing reliably, reading the traceback bottom-up, isolating with prints or breakpoints, fixing one thing at a time. **Common mistake**: bare except: clauses that swallow real bugs — always catch specific exceptions and log context.`,
  "Unit Testing": `Unit tests verify small pieces in isolation. With pytest: def test_add(): assert add(2, 3) == 5. Good tests are **independent**, **repeatable**, and check one behaviour each — including edges (empty input, zero, negatives). **Test-driven development (TDD)**: write the failing test first, then the code. **Fixtures** set up shared test data. **Common mistake**: testing implementation instead of behaviour, which makes every refactor painful. Cover branches that matter, not just lines, and run tests on every change.`,
  "Performance Optimization": `Optimise only what you measure. **Profile first** (cProfile, console.time) — the hotspot is rarely where you guess. Big wins: a better **algorithm** (O(n²) → O(n log n)), fewer allocations, batched I/O, and caching repeated work (**memoization**). Example: functools.lru_cache on recursive fibonacci turns exponential time into linear. **Common mistake**: premature micro-optimisation that harms readability. Make it correct, then make it fast, and keep benchmarks to catch regressions.`,
  "Security Best Practices": `Security means assuming hostile input. **Never trust user input**: validate types, lengths, and ranges; use **parameterised queries** (WHERE id = ?) — never concatenate SQL strings. **Hash passwords** with bcrypt or argon2, never store plaintext. Keep **secrets in environment variables**, never in code; enable HTTPS everywhere. **Common mistake**: exposing stack traces or API keys to clients. Threat-model each feature: what can an attacker control here, and what is the worst case?`,
  "REST APIs & Fetch": `REST exposes resources over HTTP verbs: **GET** reads, **POST** creates, **PUT/PATCH** updates, **DELETE** removes — e.g. GET /api/courses returns JSON. Status codes: 200 OK, 201 created, 400 bad request, 401 unauthorised, 404 not found, 500 server error. JavaScript: const r = await fetch("/api/courses"); const data = await r.json(). **Common mistake**: skipping await on .json() or ignoring non-200 responses — always check r.ok. Name nouns as resources (/users/42) and version breaking changes (/api/v2).`,
  "State Management": `State is the data your UI depends on. Local **component state** (useState) suits single widgets; shared stores (context, Redux, Zustand) suit data many screens need. Rules: one **single source of truth**, **immutable** updates (setUser({...user, age: 31})), and **derive** instead of duplicating (fullName from first + last). **Common mistake**: storing derivable values, which breeds stale contradictory UI. Lift state to the lowest common parent; reach for global stores only when prop-drilling hurts.`,
  "Build Tools & Deploy": `Build tools turn source into shippable artifacts: **bundlers** (Vite, webpack) resolve imports and split code; **transpilers** (TypeScript, Babel) convert modern syntax; **minifiers** compress output. Typical flow: npm run build → static files → hosting (Vercel, Netlify, VPS). **Environment variables** separate dev, staging, and prod config. **Common mistake**: deploying without testing the production build — dev servers hide missing imports and env gaps. Automate CI: lint → test → build → deploy on every push.`,
  "Version Control with Git": `Git snapshots your code history. **Workflow**: git add stages changes, git commit -m "message" records them, git push shares, git pull integrates others. A **branch** (git switch -c feature) isolates work; **merge** or rebase combines it back. git log shows history; git diff shows unstaged changes. **Common mistake**: committing secrets or huge files — use .gitignore and rotate any leaked key immediately. Commit small and often, with messages explaining why, not what.`,
  "Code Review Practices": `Code review catches bugs early and spreads knowledge. As author: keep changes **small and focused**, describe the why, and self-review first. As reviewer: check **correctness, edge cases, readability, and tests** — ask questions ("what if the list is empty?") instead of dictating. **Common mistake**: nitpicking style a linter could enforce — automate formatting so humans discuss design. Approve when good enough; blocking on perfection stalls teams.`,
  "Design Patterns": `Patterns are proven solutions to recurring design problems. **Singleton** restricts a class to one instance (use sparingly). **Factory** creates objects without exposing construction. **Observer** notifies subscribers of changes (events, pub/sub). **Strategy** swaps algorithms interchangeably (payment methods). **MVC/MVVM** separates data, presentation, and logic. **Common mistake**: forcing patterns everywhere — start simple and refactor toward a pattern only when the pain it solves actually appears.`,
  "Functional Programming": `Functional programming treats computation as pure function application. **Pure functions** return the same output for the same input with no side effects — easy to test and parallelise. **Immutability**: never mutate, return new structures ([...list, x]). **Higher-order functions** map, filter, and reduce transform collections declaratively: sum(map(len, words)). **Common mistake**: half-adopting — mixing mutation into "functional" pipelines gives the worst of both. Isolate unavoidable side effects at the edges.`,
  "Regular Expressions": `Regex describes text patterns compactly. **Basics**: \\d digit, \\w word char, \\s whitespace, . any char, * zero-or-more, + one-or-more, ? optional, ^ start, $ end, [abc] class, ( ) groups, | alternation. Example: ^\\d{4}-\\d{2}-\\d{2}$ matches dates like 2026-09-07. Test interactively (regex101.com) before committing. **Common mistake**: catastrophic backtracking from nested quantifiers like (a+)+ — keep patterns specific, and prefer plain string methods when regex is overkill.`,
  "Type Systems": `A type system classifies values to catch errors early. **Static typing** (TypeScript, Java, Rust) checks at compile time: let age: number = 30 rejects age = "old" before running. **Dynamic typing** (Python, JS) checks at runtime — flexible but riskier. **Inference** fills in obvious types automatically. **Generics** (List[int]) keep containers reusable yet safe. **Common mistake**: Any-types everywhere defeat the system — type the boundaries (signatures, API payloads) first for maximum payoff.`,
  "OOP": `**OOP** (Object-Oriented Programming) models programs as interacting **objects**. Four pillars: **encapsulation** (bundle data with methods, hide internals), **abstraction** (expose only essentials), **inheritance** (children reuse parent behaviour), **polymorphism** (one interface, many implementations — every Shape has .area()). Example: class Shape → class Circle(Shape) overriding area(). **Common mistake**: deep inheritance hierarchies — prefer **composition** (has-a) over inheritance (is-a) when reuse is the only goal.`,
  "Binary & Data": `All digital data is **binary** — patterns of 0s and 1s. One **bit** is a single 0/1; eight bits make a **byte** (values 0–255). Base-2 place values run 1, 2, 4, 8…: binary 101 = 4 + 0 + 1 = 5. Text uses **encodings**: ASCII maps A to 65; **Unicode (UTF-8)** covers every writing system. **Common mistake**: assuming 1 KB = 1000 bytes in memory contexts — RAM uses 1024. Everything higher (images, video, AI weights) is just interpreted bit patterns.`,
  "OS Fundamentals": `The **operating system** manages hardware for programs: the **kernel** schedules CPU time across **processes**, allocates memory, and abstracts files and devices. **System calls** (open, read, write) are the controlled doorway between apps and kernel. Linux dominates servers; each process gets isolated virtual memory. **Threads** share a process's memory; processes do not share with each other. **Common mistake**: ignoring file permissions — read/write/execute per user, group, and other is your first security boundary.`,
  "Networking Basics": `Networks move packets between machines. Each device has an **IP address** (e.g. 192.168.1.10); **DNS** translates names (example.com) to IPs. **TCP** guarantees ordered reliable delivery (web, email); **UDP** is faster but lossy (video calls, games). **HTTP(S)** is the web's request/response protocol over TCP. Example: typing a URL triggers DNS lookup → TCP handshake → TLS → HTTP GET → rendered page. **Common mistake**: blaming code for what is actually DNS, firewall, or CORS behaviour.`,
  "Security Essentials": `Security rests on three goals — **confidentiality** (only authorised eyes), **integrity** (data unaltered), **availability** (systems reachable): the CIA triad. **Encryption** scrambles data without the key (AES symmetric, RSA asymmetric); **hashing** (SHA-256, bcrypt) verifies without revealing. **Authentication** proves who you are; **authorisation** decides what you may do. **Common mistake**: inventing your own crypto or storing reversible passwords — use vetted libraries and salted slow hashes.`,
  "Hardware & CPU": `The **CPU** runs the fetch–decode–execute cycle billions of times per second: fetch an instruction, decode it, execute it, repeat. **Cores** run cycles in parallel; **clock speed** (GHz) sets cycles per second. Tiny fast **registers** and **cache** (L1/L2/L3) feed the CPU; **RAM** holds working data; **SSDs** persist it. **Common mistake**: equating GHz with speed across architectures — instructions-per-clock and core count matter equally. GPUs trade latency for thousands of simple cores — ideal for AI math.`,
  "Algorithms & Data Structures": `An **algorithm** is a precise step-by-step procedure; a **data structure** organises data for efficient access. Core pairings: **arrays** give O(1) index access; **hash maps** give average O(1) lookup by key; **stacks** (LIFO) manage calls and undo; **queues** (FIFO) manage tasks; **trees and graphs** model hierarchies and networks. Example: membership checks in a hash set beat scanning a list. **Common mistake**: choosing by familiarity instead of access pattern — list your operations first, then choose.`,
  "Abstraction Principles": `**Abstraction** hides complexity behind a simple interface: you drive with pedals, not pistons. In code, **functions** hide steps, **classes** hide state, **APIs** hide systems, and **layers** (OS, network stack) hide hardware. Good abstractions **leak** as little as possible — you rarely think about TCP when fetching a URL. **Common mistake**: premature abstraction — abstracting before three real use cases appear creates rigid, wrong boundaries. Remove duplication you already have, not might have.`,
  "Decomposition & Problem Solving": `**Decomposition** splits an intimidating problem into small solvable pieces: input handling, core transform, output formatting — then subdivide again. **Pattern recognition** maps pieces to known techniques (counting → hash map; ordering → sort; searching → binary search). Sketch the algorithm in plain words before coding. Example: "count word frequencies" becomes read text → split words → tally in a dict → sort. **Common mistake**: coding before decomposing — an hour of sketching saves a day of rewriting.`,
  "Binary Search & Sorting": `**Binary search** finds a target in sorted data by halving the range each step: check the middle, discard the half that cannot hold the target. Complexity **O(log n)** — a billion items take about 30 steps. Requirement: data must be **sorted**. **Sorting** (quicksort, mergesort: O(n log n)) is often worth doing once to enable many fast searches. Example: guessing a number 1–100 needs at most 7 halving questions. **Common mistake**: off-by-one bounds — keep the invariant that the answer stays inside [lo, hi].`,
  "Computational Complexity": `**Big-O** describes how cost grows with input size n. **O(1)** constant (array index), **O(log n)** halving (binary search), **O(n)** single pass, **O(n log n)** efficient sorts, **O(n²)** nested loops, **O(2ⁿ)** brute-force subsets. Constants drop out: O(2n) is O(n). Example: doubling input doubles O(n) runtime but quadruples O(n²). **Common mistake**: optimising constant factors while ignoring a worse complexity class. Analyse worst case first, then average case.`,
  "Memory Management": `Programs juggle two regions: the **stack** (fast, automatic — calls and locals) and the **heap** (flexible — objects and dynamic data). **Stack overflow** comes from unbounded recursion. **Heap leaks** come from references never released. **Garbage collectors** (Python, Java, JS) reclaim unreachable objects; **ownership** (Rust) enforces release at compile time. **Common mistake**: caches and listeners that hold references forever — profile heap growth instead of guessing. Free what you allocate, or let the collector prove it can.`,
  "Recursion": `**Recursion** solves a problem via smaller instances of itself: a **base case** stops, a **recursive case** shrinks toward it. Example: factorial(n) = n × factorial(n−1) with base factorial(0) = 1. Trees, traversals, and divide-and-conquer (quicksort, mergesort) are naturally recursive. Each call adds a **stack frame** — depth near 1000 overflows Python's stack. **Common mistake**: a missing or unreachable base case means infinite recursion. For great depth, rewrite iteratively.`,
  "Boolean Logic": `**Boolean algebra** computes with True/False using **AND** (both), **OR** (at least one), **NOT** (invert). **Truth tables** enumerate every input combination. Code form: if age >= 18 and citizen:. **De Morgan's laws**: not (A and B) equals (not A) or (not B) — essential for simplifying conditions. **Short-circuiting**: False and f() never calls f(). **Common mistake**: = (assignment) versus == (comparison), and tangled mixed expressions — use explicit parentheses.`,
  "Graph Theory": `A **graph** is vertices joined by edges — modelling networks, maps, dependencies, and social links. **Directed** edges point one way (followers); **undirected** both ways (friendships). **Weighted** edges carry costs. Core traversals: **BFS** explores level by level (shortest path in unweighted graphs); **DFS** dives deep first (cycle detection, topological sort). Example: GPS routing is shortest path on a weighted road graph (**Dijkstra**). **Common mistake**: forgetting disconnected components — loop over all vertices, not one start.`,
  "Database Concepts": `A **database** stores structured data durably. **Relational** systems (PostgreSQL) use tables of rows and columns, **primary keys** identifying rows and **foreign keys** linking tables; **SQL** queries them. **NoSQL** trades joins for scale: documents, key-value, wide-column, graph. **Transactions (ACID)** make updates all-or-nothing. **Indexes** speed reads but slow writes. **Common mistake**: N+1 queries — fetching related rows one by one instead of joining. Model relationships first, optimise queries second.`,
  "Gradient Boosting": `**Gradient boosting** builds strong models from weak ones sequentially: each new tree fits the **residual errors** of the ensemble so far. Prediction: F(x) = F_prev(x) + learning_rate × tree(x). **Learning rate (shrinkage)** trades speed for accuracy — small rates with more trees win. **XGBoost, LightGBM, CatBoost** add regularisation, sparsity handling, and speed. Dominates tabular-data competitions. **Common mistake**: too many deep trees without tuning — watch validation loss and use early stopping.`,
  "Bias-Variance Tradeoff": `**Bias** is error from wrong assumptions (underfitting); **variance** is error from sensitivity to training noise (overfitting). Total error = bias² + variance + irreducible noise. Simple models have high bias; complex models have high variance. **The tradeoff**: reducing one typically raises the other — the sweet spot minimises validation error. **Diagnostics**: high training error means bias (add capacity); a train/validation gap means variance (regularise, add data). **Common mistake**: adding data to fix bias — data cures variance, capacity cures bias.`,
  "Hyperparameter Tuning": `**Hyperparameters** are settings fixed before training (learning rate, tree depth, k) — distinct from learned **parameters** (weights). **Grid search** tries every combination (thorough, slow); **random search** samples combinations (often better per budget); **Bayesian optimisation** models promising regions. Always evaluate on a **validation set**, never the test set. Example: learning_rate in {0.001, 0.01, 0.1} × max_depth in {3, 6, 10}. **Common mistake**: tuning on test data leaks it into training — lock the test set away until the end.`,
  "Model Selection": `**Model selection** picks the best algorithm plus configuration for your data and constraints. Process: split train/validation/test → define candidate models → compare with **cross-validation** on one metric matched to the goal (F1 for fraud, RMSE for pricing) → check latency, interpretability, and maintenance cost → confirm once on test. **No free lunch**: no algorithm wins everywhere. **Common mistake**: choosing by test accuracy alone — a 1% gain that doubles latency or destroys explainability usually loses in production.`,
  "Pipeline Automation": `An **ML pipeline** chains every step — ingest, validate, preprocess, train, evaluate, register, deploy, monitor — into one reproducible run. Tools: **scikit-learn Pipeline** (prevents train/test leakage), Airflow, Kubeflow, SageMaker Pipelines. **Why**: manual steps drift, leak, and break silently; pipelines version data, code, and configs together. **Common mistake**: preprocessing outside the pipeline — scaling fit on all data before splitting leaks test information into training. Automate retraining triggers on schedules or drift signals.`,
  "Ensemble Methods": `**Ensembles** combine many models to beat any single one. **Bagging** (Random Forests): train on bootstrap samples, average — reduces variance. **Boosting** (XGBoost): fix predecessors' errors sequentially — reduces bias. **Stacking**: a meta-model blends base-model predictions. **Voting**: majority (classification) or mean (regression). Ensembles win when members are **accurate and diverse** — correlated models add little. **Common mistake**: ensembling near-identical models and expecting gains; diversify algorithms, features, or seeds instead.`,
  "Anomaly Detection": `**Anomaly detection** finds rare, suspicious points: fraud, faults, intrusions. **Unsupervised** (no labels): Isolation Forest isolates outliers with few splits; **One-Class SVM** learns the normal boundary; **autoencoders** flag high reconstruction error. **Supervised**: treat as imbalanced classification (precision/recall over accuracy). **Thresholds** trade false alarms against misses — tune with domain cost in mind. **Common mistake**: evaluating with accuracy on 99.9%-normal data — a model predicting "always normal" scores 99.9% while catching nothing.`,
  "Time Series Forecasting": `**Time series** data is ordered in time — order matters and the future must never leak into training. **Components**: trend, seasonality, cycles, noise. **Classical**: moving averages, exponential smoothing, ARIMA(p,d,q). **ML**: lag features and rolling statistics feeding gradient boosting. **Deep**: LSTMs and Temporal Fusion Transformers for complex patterns. Validate with **walk-forward splits** (train past, test future). **Common mistake**: random shuffling in cross-validation — it lets the model peek at the future.`,
  "Recommendation Systems": `**Recommenders** predict what a user will like. **Collaborative filtering**: users who agreed in the past agree again — user-based or item-based similarity, or **matrix factorisation** (SVD) learning latent factors. **Content-based**: recommend items similar to what the user liked (TF-IDF, embeddings). **Hybrid** systems blend both; **cold start** (new users/items) is handled with popularity or content fallbacks. **Evaluation**: precision@k, recall@k, NDCG for ranking quality. **Common mistake**: optimising clicks creates filter bubbles and clickbait — measure long-term satisfaction too.`,
  "Model Interpretability (SHAP/LIME)": `**Interpretability** explains why a model predicted what it did. **Global**: which features matter overall (permutation importance, gain). **Local**: why this prediction — **LIME** fits a simple model around one instance; **SHAP** assigns each feature a fair contribution (**Shapley values**) that sums to the prediction. Example: SHAP shows income pushed a loan approval up by +0.2 while debt pushed it down by −0.15. **Common mistake**: trusting explanations of a bad model — interpretability audits decisions, it does not fix broken modelling. Required in regulated domains.`,
  "Production Deployment": `**Deploying** a model means serving reliable predictions under real load. Patterns: **batch** scoring on schedules, **online** REST endpoints (FastAPI + Docker), **streaming** (Kafka + Flink). Wrap models in **versioned artifacts** with pinned dependencies; add **health checks**, latency/error monitoring, and rollback plans. **Shadow mode** validates new models on live traffic before promotion. **Common mistake**: deploying the notebook — unversioned code, leaked preprocessing, and no monitoring guarantee silent decay. Treat models as software: CI/CD, tests, and SLAs.`,
  "RNN & LSTM": `**RNNs** process sequences by passing a **hidden state** forward: h_t = f(W·h_{t-1} + U·x_t). Plain RNNs suffer **vanishing gradients** over long sequences. **LSTM** fixes this with gates: **forget** (drop memory), **input** (store new), **output** (emit) — plus a protected **cell state** highway. **GRU** simplifies to reset/update gates. Applications: language modelling (pre-transformer), speech, sensor series. **Common mistake**: unshuffled sequential batches that break temporal order, or ignoring masking for padded sequences. Transformers now dominate, but LSTMs remain strong for small-data sequences.`,
  "Autoencoders": `An **autoencoder** learns compressed representations: an **encoder** maps input x to a bottleneck **latent vector** z, a **decoder** reconstructs x̂ from z, trained to minimise reconstruction error. The bottleneck forces essential-feature learning. **Denoising** variants reconstruct clean inputs from corrupted ones. **VAEs** (variational) regularise z into a smooth distribution, enabling generation by sampling. Uses: dimensionality reduction, pretraining, and **anomaly detection** (high error = outlier). **Common mistake**: a bottleneck too wide learns the identity function — constraining capacity is the entire point.`,
  "GANs": `**GANs** pit two networks against each other: the **generator** creates fakes from noise, the **discriminator** judges real versus fake. Training is a **minimax game** — generator improves as discriminator sharpens. **DCGAN** brought convolutions; **StyleGAN** controls style at multiple resolutions; **conditional GANs** steer output with labels. Uses: image synthesis, super-resolution, data augmentation. **Common mistake**: **mode collapse** (generator outputs one plausible sample repeatedly) and unstable training — monitor both losses, use spectral normalisation and balanced updates.`,
  "Transfer Learning": `**Transfer learning** reuses knowledge: pretrain on a large dataset, then **fine-tune** on your smaller task. For vision, ImageNet-pretrained CNNs transfer powerfully — freeze early layers (generic edges/textures), retrain the head, optionally unfreeze gradually with low learning rates. For NLP, fine-tune BERT/GPT the same way. **Why it works**: early features are universal. **Common mistake**: fine-tuning everything with a high learning rate destroys pretrained weights (**catastrophic forgetting**) — start small and freeze first. Always try transfer before training from scratch.`,
  "Optimization (Adam/SGD)": `**Optimizers** update weights against the loss gradient: w −= lr × gradient. **SGD** (with momentum) is steady and generalises well; **Adam** adapts per-parameter learning rates using gradient moments — fast and forgiving, the default start. **Learning-rate schedules** (decay, warmup, cosine) stabilise late training. **Batch size** trades noise for speed; **gradient clipping** tames explosions in RNNs. **Common mistake**: a learning rate far too high (divergence) or low (crawling) — sweep it on a log scale first; it matters more than architecture tweaks.`,
  "Batch Normalization": `**Batch Normalization** normalises each layer's inputs per mini-batch: subtract batch mean, divide by batch std, then scale/shift with learned γ and β. Benefits: higher learning rates, less init sensitivity, mild **regularisation** from batch noise. At inference it uses **running statistics**, not batch stats — a classic deployment gotcha. **LayerNorm** (per-sample) suits transformers and RNNs; **GroupNorm** suits small batches. **Common mistake**: tiny batches make batch stats noisy — switch norms or grow the batch before blaming the model.`,
  "ResNet & Skip Connections": `Deep networks degrade: extra layers hurt training. **ResNet** fixes this with **skip (residual) connections** — each block learns F(x) added back to x, so layers default to identity and gradients flow directly backwards. y = F(x) + x enables 100+ layer training. **DenseNet** connects every layer to all previous ones. **Why it matters**: depth brings representational power only if optimisable. **Common mistake**: blindly stacking layers without skips and concluding "deeper is worse" — depth needs shortcuts to train.`,
  "Sequence-to-Sequence": `**Seq2seq** maps input sequences to output sequences of different lengths: an **encoder** compresses input into a context vector (or memory bank), a **decoder** generates outputs step by step. Classic RNN seq2seq bottlenecks on one vector — **attention** fixed this by letting the decoder look back at all encoder states. Transformers are seq2seq without recurrence. Uses: translation, summarisation, speech-to-text. **Training**: teacher forcing (feed true tokens); **inference**: beam search over candidates. **Common mistake**: exposure bias — the model never sees its own mistakes in training.`,
  "Diffusion Models": `**Diffusion models** generate by reversing noise: training **adds Gaussian noise** over T steps until data becomes pure noise; the network learns to **denoise** step by step, and sampling runs that reverse chain from noise to image. **Stable Diffusion** diffuses in compressed latent space (fast); **DDPM/DDIM** define the schedules and samplers. **Guidance** (classifier-free) steers toward prompts; **ControlNet** adds spatial control (edges, poses). Dominates image generation today. **Common mistake**: too few sampling steps (artefacts) or excessive guidance (oversaturated, rigid outputs).`,
  "Model Compression": `**Compression** shrinks models for deployment with minimal accuracy loss. **Pruning** removes near-zero or low-importance weights (unstructured) or whole channels (structured), then fine-tunes back. **Knowledge distillation** trains a small **student** to mimic a large **teacher's** outputs (soft targets carry rich signal). **Low-rank factorisation** splits big matrices. Combine all three for compounding gains. **Common mistake**: compressing once without retraining — always fine-tune after each compression step to recover accuracy.`,
  "Quantization & Pruning": `**Quantization** lowers numeric precision: FP32 → FP16 (near-free on modern GPUs), → INT8 (2–4× smaller/faster, needs calibration), → INT4/binary (extreme, accuracy cost). **Post-training quantization** needs no retraining; **quantization-aware training** simulates low precision during training for better results. **Pruning** deletes unimportant weights or neurons, then fine-tunes. Together they fit large models on phones and edge devices. **Common mistake**: quantizing without checking per-layer sensitivity — a few layers usually cause most of the accuracy drop.`,
  "Production Inference": `**Inference** is serving trained models to real users. Optimise the full path: batch requests, pick runtimes (**ONNX Runtime**, TensorRT, TFLite), quantize, cache hot results, autoscale replicas. Track **latency percentiles** (p99 matters more than mean), throughput, error rate, and GPU utilisation. **Version** models with pinned dependencies; **canary** new versions; keep instant **rollback** ready. **Common mistake**: benchmarking on a laptop and assuming data-centre behaviour — measure on production-shaped hardware with production-shaped traffic.`,
  "Tokens & Prompting": `LLMs read and write **tokens** — word pieces averaging ~4 characters in English; 1,000 tokens ≈ 750 words. The **context window** caps tokens per request (input + output). **Prompting** steers behaviour: be specific, show the format, and give examples (**few-shot**). **Zero-shot** asks directly; **chain-of-thought** ("think step by step") unlocks reasoning; **role prompts** ("you are a SQL expert") set style. Example: "Extract names as JSON list: …" beats "get names". **Common mistake**: stuffing the whole database into context — retrieve first, then prompt with only relevant chunks.`,
  "Temperature & Sampling": `**Temperature** controls randomness: 0 is deterministic (same input → same output), higher values (0.7–1.0) sample diverse completions. **Top-p (nucleus)** sampling keeps the smallest token set covering probability p; **top-k** keeps the k likeliest. Low temperature + constrained decoding suits extraction and code; higher suits brainstorming. Example: temperature 0 for JSON extraction, 0.8 for marketing copy. **Common mistake**: high temperature on factual tasks — creativity here is hallucination. Fix the seed and temperature 0 for reproducible evals.`,
  "Vector Databases": `**Vector databases** store embeddings and serve nearest-neighbour search at scale: **FAISS** (local library, fast), **Pinecone/Weaviate/Qdrant** (managed), **pgvector** (Postgres extension). Core knobs: **distance metric** (cosine vs dot vs Euclidean — match your embedding model's training), **index type** (HNSW for speed, IVF for memory), and **metadata filters** (jurisdiction, date) combined with vector search. **Common mistake**: unnormalised vectors with cosine search, or no filters — pure similarity retrieves plausible but unauthorised content. Benchmark recall@k on your queries.`,
  "Agents & Tool Use": `**Agents** are LLMs looped with tools: plan → call a tool (search, calculator, API, code) → read the result → repeat until done. **Tool use** (function calling) gives models typed schemas: {"name": "get_weather", "args": {"city": "Harare"}}. Frameworks orchestrate loops, memory, and retries. **ReAct** interleaves reasoning with actions. **Common mistake**: unbounded loops burning budget — cap iterations, require the model to show its plan, and put destructive tools (delete, pay, send) behind human approval. Log every tool call for audit.`,
  "LangChain Framework": `**LangChain** assembles LLM apps from composable parts: **prompt templates** with variables, **chains** (sequential steps), **memory** (conversation history), **document loaders + splitters**, **retrievers**, and **agents** with toolkits. LCEL pipes steps: prompt | model | parser. Strength: fast prototyping of RAG and agents. **Common mistake**: stacking abstractions you don't understand — debug the raw prompts first, then add framework layers; version prompts like code. Newer alternatives (LlamaIndex for data, raw APIs for control) suit different needs.`,
  "ControlNet": `**ControlNet** adds spatial control to diffusion image models: feed an extra condition — **edges (Canny), depth map, pose skeleton, scribble** — alongside the text prompt, and generation follows that structure. A trainable copy of the encoder processes the condition while the base model stays frozen, preserving quality. Example: same pose, ten outfit variations for a catalogue. **Common mistake**: over-weighted control (rigid copy of the input) versus under-weighted (ignored) — tune the conditioning scale per use; preprocess conditions cleanly.`,
  "Fine-tuning LLMs": `**Fine-tuning** continues training a pretrained LLM on your data to specialise behaviour. **Full fine-tuning** updates all weights (expensive, risks forgetting). **LoRA/QLoRA** trains tiny low-rank adapters — 1% of parameters, laptop-feasible with quantization. **Instruction tuning** uses (instruction, response) pairs; **preference tuning** (DPO/RLHF) aligns style. Needs hundreds to thousands of quality examples — garbage in, garbage out. **Common mistake**: fine-tuning for facts the model should retrieve instead — use RAG for knowledge, fine-tuning for format, tone, and skills.`,
  "Evaluation & Benchmarks": `**Evaluating LLMs** needs more than vibes. **Benchmarks**: MMLU (knowledge), HumanEval (code), GSM8K (math), needle-in-haystack (long context). **LLM-as-judge** scores outputs against rubrics — fast but biased toward verbosity and self-preference; calibrate with human spot-checks. Track **task success rate**, hallucination rate, latency, and cost per task. **Golden datasets** of your real queries beat generic benchmarks. **Common mistake**: evaluating once on five friendly examples — build evals before tuning prompts, and re-run on every change.`,
  "RLHF & Alignment": `**RLHF** (Reinforcement Learning from Human Feedback) aligns models with human preferences: (1) collect human rankings of responses, (2) train a **reward model** predicting preferences, (3) optimise the LLM against it with PPO (or skip RL via **DPO**, direct preference optimisation). Result: helpful, harmless, honest behaviour — and sometimes sycophancy or verbosity as side effects. **Constitutional AI** replaces some human labels with principle-based self-critique. **Common mistake**: assuming aligned means truthful — alignment shapes style and refusal, not factuality; still verify outputs.`,
  "Safety & Guardrails": `**Guardrails** keep AI systems safe and on-policy: **input filters** (PII, injection, disallowed content), **output filters** (toxicity, secrets, hallucinations checks), **grounding** (cite retrieved sources), and **escalation** (human review for high-stakes actions). **Prompt injection** — malicious instructions hidden in webpages or documents — is the top LLM attack; treat retrieved text as data, never orders. Defence in depth: model training, system prompts, filters, monitoring, and kill switches. **Common mistake**: relying on "please be safe" system prompts alone against adversarial users.`,
  "Multi-Modal AI": `**Multi-modal** models handle text, images, audio, and video together. Architectures align modalities: **CLIP** trains image/text encoders into one space (powers search and zero-shot classification); **Flamingo/GPT-4V/Gemini** feed visual tokens into LLMs for VQA, captioning, and document understanding. **Whisper** transcribes speech; text-to-speech reverses it. Example: photograph a meter, ask "read the dial" — vision plus language. **Common mistake**: assuming the model truly "sees" fine detail — downsampling loses small text; crop regions of interest first.`,
  "Structured Output (JSON mode)": `**Structured output** forces LLMs to return valid schemas, not prose: **JSON mode** plus a **JSON Schema** (or Pydantic model) constrains generation; constrained decoding guarantees parseability. Pattern: define {"name": str, "age": int} → validate with the schema → retry on failure. Essential for pipelines where downstream code consumes model output. **Function calling** is structured output with intent (choose tool + fill args). **Common mistake**: regex-parsing free text — one stray comma breaks everything; constrain at generation time instead.`,
  "LLM Observability": `**Observability** makes LLM apps debuggable: log every **prompt, completion, tokens, latency, cost, and tool call** per request (LangSmith, Langfuse, Helicone). **Traces** show multi-step chains; **evals** score samples continuously. Alert on cost spikes, latency drift, refusal-rate jumps, and low judge scores. **Common mistake**: flying blind — without per-request logs you cannot reproduce user complaints or attribute a $2,000 bill. Sample production traffic into golden eval sets; version prompts alongside the traces they produced.`,
  "Prompt Caching": `**Prompt caching** reuses attention computation for repeated prompt prefixes — system prompts, few-shot examples, long documents — cutting latency up to 80% and cost up to 90% on cache hits. Providers hash the prefix; identical leading tokens hit cache. Design for it: put **stable content first** (instructions, docs), variable user input last. **Common mistake**: random ordering or per-request timestamps up front destroy hit rates. Combine with concise prompts — cache discounts help, but fewer tokens help more.`,
  "AI API Integration": `**Integrating LLM APIs** is plumbing plus judgement: authenticate with keys (server-side only), set **timeouts and retries** with backoff, **stream** tokens for responsive UX, cap **max_tokens**, and fix temperature per task. Parse defensively — validate schemas, handle refusals and rate limits (429) gracefully with queues. **Cost control**: cache, distil to smaller models for easy cases, batch offline work. **Common mistake**: calling the flagship model for everything — route simple tasks to mini models and reserve giants for hard reasoning.`,
  "Cost Optimization": `LLM and ML bills compound silently — optimise deliberately. **Model routing**: mini models for easy cases, flagships for hard ones. **Caching**: prompt caches and semantic caches (same question twice = one bill). **Batch APIs** halve offline costs. **Right-size** context: retrieve precisely instead of dumping documents. For training/inference infra: spot instances, autoscaling to zero, quantization, and smaller architectures. **Common mistake**: optimising unit price while ignoring volume — measure cost per successful task, alert on anomalies, and attribute spend per feature.`,
  "Production LLM Systems": `**Production LLM systems** wrap models in reliability engineering: versioned **prompts and configs**, golden **eval suites** run on every change, staged **rollouts** with instant rollback, per-request **logging** (tokens, cost, latency, tools), **guardrails** (filters, grounding, human approval for irreversible actions), and **fallbacks** (cached answers, smaller models, graceful degradation). SLOs cover quality (task success), speed (p95 latency), and spend. **Common mistake**: shipping the demo — demos forgive failures users will not; harden retrieval quality, evals, and monitoring before launch.`,
  "TF-IDF & BM25": `**TF-IDF** scores word importance: **TF** (frequency in this document) × **IDF** (rarity across documents) — common words like "the" score near zero, distinctive terms score high. **BM25** improves it with term-saturation (the 10th repeat matters less than the 1st) and **length normalisation** (no bonus for long documents). Still the backbone of keyword search and hybrid retrieval. Example: "harare" in one memo outranks "report" in all memos. **Common mistake**: raw counts without normalisation — long documents dominate unfairly. Stem first, then score.`,
  "Sentiment Analysis": `**Sentiment analysis** classifies emotional tone: positive, negative, neutral — or finer (joy, anger, urgency). **Lexicon** methods score word lists (fast, transparent). **ML** methods train classifiers on labelled reviews. **Modern**: fine-tune BERT-class models for aspect-level sentiment ("battery great, screen poor"). Challenges: **sarcasm**, negation ("not bad"), and domain shift (movie words ≠ finance words). **Common mistake**: trusting document-level labels for mixed reviews — analyse per aspect or sentence for actionable signal.`,
  "Named Entity Recognition (NER)": `**NER** finds and labels real-world mentions: **PER** (Ada Ndlovu), **ORG** (ZimLink), **LOC** (Harare), **DATE**, **MONEY**. Classic approach: **BIO tagging** (B-PER begins, I-PER continues, O outside) with CRF or BiLSTM layers; modern: fine-tuned transformers (90%+ F1 on CoNLL). **Nested entities** ("University of Zimbabwe Hospital") and new domains need custom labels. **Common mistake**: regex-only extraction — brittle against variants ("St." vs "Street"); combine patterns for known formats with models for names. Always link entities to IDs for real use.`,
  "Transformer Architecture": `The **Transformer** (Vaswani et al., 2017) replaced recurrence with **self-attention**: every token directly weighs every other token, capturing long-range dependencies in parallel. **Multi-head attention** learns several relation types at once; **positional encodings** restore order information; feed-forward layers transform per position. **Encoder** stacks (BERT) understand; **decoder** stacks (GPT) generate; encoder-decoder does translation. **Common mistake**: quadratic memory in sequence length — long documents need chunking, sparse attention, or long-context variants.`,
  "Text Classification": `**Text classification** assigns labels to text: spam detection, topic routing, urgency triage. Pipeline: clean → **tokenize** → represent (TF-IDF baseline, then embeddings) → classify (logistic regression, then fine-tuned BERT) → calibrate thresholds. **Always start with the simple baseline** — TF-IDF + logistic regression often hits 85%+ and trains in seconds. **Class imbalance** needs weighting or resampling. **Common mistake**: accuracy on skewed data — report precision, recall, and F1 per class, and test on fresh phrasing, not paraphrases of training data.`,
  "Question Answering": `**Question answering** systems return answers, not documents. **Extractive QA** (SQuAD-style) predicts answer **start/end spans** in a passage with fine-tuned BERT. **Retrieval QA** finds passages then extracts. **Generative QA** (modern RAG) synthesises answers from retrieved context — fluent but must be **grounded** (cite sources, abstain when unsure). **Evaluation**: exact match and token-F1 for extractive; faithfulness checks for generative. **Common mistake**: answering from parametric memory instead of the provided passage — instruct extraction first, generation second.`,
  "Text Summarization": `**Summarization** compresses documents preserving meaning. **Extractive** methods select key sentences (TextRank, BERT-based ranking) — faithful but choppy. **Abstractive** methods generate new phrasing (BART, T5, LLMs) — fluent but risk **hallucination**. Control length and focus ("summarise risks in 3 bullets"). **Evaluation**: ROUGE (n-gram overlap with references) plus human faithfulness review. **Common mistake**: trusting fluent summaries unchecked — always verify numbers, names, and negations against the source before acting on a summary.`,
  "Machine Translation": `**Machine translation** converts text between languages. History: rules → phrase tables (SMT) → **neural MT** (RNN seq2seq, now Transformers) → LLM prompting. Modern systems train on parallel corpora with **subword tokenization** (SentencePiece) handling rare words and morphology. **Back-translation** augments low-resource pairs with synthetic data. **Evaluation**: BLEU/chrF for automatic checks plus human adequacy/fluency ratings. **Common mistake**: translating idioms literally — domain-adapt (legal, medical) and keep human review for high-stakes content like contracts.`,
  "Topic Modeling": `**Topic modeling** discovers hidden themes in document collections without labels. **LDA** treats each document as a mixture of topics and each topic as a word distribution — interpretable but bag-of-words. **Modern**: embed documents (SBERT), cluster (HDBSCAN), label clusters with keywords or LLMs (**BERTopic**). **Coherence scores** measure topic quality; human inspection decides usefulness. Example: 10,000 support tickets → "billing", "login", "delivery" themes. **Common mistake**: fixing k arbitrarily in LDA — sweep values and read actual top words per topic.`,
  "Coreference Resolution": `**Coreference** links expressions referring to the same entity: "Ada said **she** would send **the report**" — she = Ada. Systems score mention pairs with neural models over spans, clustering compatible ones. Hard cases: **pronoun ambiguity** ("Tell the manager that he…"), split antecedents, and long documents. Matters for summarization, QA, and knowledge graphs — unresolved pronouns corrupt extracted facts. **Common mistake**: naive nearest-noun matching — gender, number, and semantic compatibility all constrain valid links; evaluate on OntoNotes-style benchmarks.`,
  "Dependency Parsing": `**Dependency parsing** maps grammatical structure: each word links to its **head** with a labelled relation (nsubj, obj, amod). "Ada wrote code" → wrote is root, Ada its nsubj, code its obj. **Transition-based** parsers decide shift/reduce actions; **graph-based** score all arcs globally. Powers relation extraction, grammar checking, and semantic search. **Common mistake**: assuming one parse per sentence — ambiguity ("saw the man with the telescope") needs probabilities or context; evaluate with labelled attachment score (LAS).`,
  "Information Extraction": `**Information extraction** turns text into structured records: entities (NER), **relations** (Ada — works_at — ZimLink), and **events** (who did what, when). Pipeline: segment → recognise entities → link them (**entity linking** to IDs) → classify relations → validate against a schema. LLMs now extract with schemas directly, but need **verification** (hallucinated relations look plausible). **Common mistake**: extracting without normalisation — "Harare", "Hre", and "the capital" must resolve to one ID or downstream joins silently fail.`,
  "Multi-lingual NLP": `**Multi-lingual NLP** serves many languages with shared models: **mBERT/XLM-R** pretrain on 100+ languages, transferring supervision from English to low-resource tongues (**zero-shot transfer**). **Tokenization** must handle all scripts (SentencePiece, byte-level BPE). Shona, Ndebele, and other African languages need dedicated evaluation — translated benchmarks hide real gaps. **Common mistake**: assuming English performance transfers equally — morphology, word order, and cultural context differ; collect native test sets and fine-tune on in-language data.`,
  "NLP in Production": `**Production NLP** survives contact with users: version **models, tokenizers, and label maps** together (a swapped tokenizer silently corrupts everything). Batch offline jobs; serve online via quantized endpoints with p95 latency budgets. Monitor **input drift** (new slang, new topics), prediction distributions, and user corrections feeding retraining. **PII redaction** before logging. **Common mistake**: training-serving skew — different preprocessing in training versus serving degrades quality invisibly; share one preprocessing codebase and test parity explicitly.`,
  "Evaluation Metrics (BLEU, ROUGE)": `**BLEU** (translation) measures n-gram precision against references with a brevity penalty — fast but blind to paraphrase quality. **ROUGE** (summarization) measures n-gram recall — rewards coverage. **chrF** uses character n-grams (better for morphologically rich languages). **BERTScore** compares contextual embeddings (captures meaning beyond exact words). All correlate imperfectly with humans. **Common mistake**: single-metric optimisation — report a panel (BLEU + chrF + human ratings), and never compare scores across different tokenizations or test sets.`,
  "Legal & Medical NLP": `**High-stakes NLP** (law, medicine) demands accuracy plus auditability. Tasks: clause extraction, contract review, diagnosis coding (ICD), discharge summarisation, trial matching. Requirements: **domain pretraining** (BioBERT, LegalBERT), **uncertainty flags**, **human-in-the-loop** review, and full **provenance** (which text supported which claim). Regulation (HIPAA, GDPR, medical-device rules) constrains data and deployment. **Common mistake**: demo-grade fluency mistaken for safety — evaluate on adversarial edge cases with domain experts, and never let the model be the final decider on care or liability.`,
  "Color Spaces & Transforms": `**Colour spaces** encode pixels differently: **RGB** (camera default), **grayscale** (single intensity), **HSV** (hue/saturation/value — robust to lighting for segmentation), **LAB** (perceptual uniformity). **Transforms**: resize, crop, rotate, flip, normalise (scale to [0,1] or standardise). **Why it matters**: skin detection works in HSV, not RGB; models expect the normalisation they trained with. **Common mistake**: train/test normalisation mismatch, or distorting aspect ratio on resize — letterbox or crop deliberately instead.`,
  "Edge Detection & Contours": `**Edges** mark sharp intensity changes — object boundaries. **Sobel** filters approximate gradients; **Canny** chains smoothing → gradients → non-maximum suppression → double threshold with hysteresis (clean thin edges). **Contours** (findContours) trace connected boundaries into shapes for measuring area, perimeter, and enclosing boxes. Example: counting coins by contour area. **Common mistake**: noisy images without blurring first — smooth (Gaussian) before detecting, and tune Canny thresholds per lighting.`,
  "Feature Descriptors (SIFT, HOG)": `Before deep learning, vision used handcrafted **descriptors**. **SIFT** finds scale/rotation-invariant keypoints with gradient-histogram descriptors — superb for matching (panorama stitching). **HOG** grids edge orientations — the classic pedestrian detector with SVM. **ORB** is the fast free alternative. CNNs outperform them with data, but descriptors still win for exact matching, low data, and patent-free pipelines. **Common mistake**: SIFT on textureless regions yields nothing — descriptors need distinctive local structure to grip.`,
  "Image Segmentation": `**Segmentation** labels every pixel. **Semantic** segmentation assigns classes (road, car, sky) — architectures: U-Net (medical, skip connections), DeepLab (atrous convolutions). **Instance** segmentation separates each object (Mask R-CNN). **Panoptic** unifies both. **Losses**: cross-entropy plus Dice/IoU for imbalance. **Evaluation**: mean IoU. Example: tumour outlining in scans. **Common mistake**: downsampling labels with the wrong interpolation (nearest only!) — bilinear on masks creates phantom classes. Augment images and masks identically.`,
  "Pose Estimation": `**Pose estimation** locates body joints (shoulders, elbows, knees) as keypoints. **Top-down**: detect person, then estimate joints per box (accurate, slower). **Bottom-up** (OpenPose): find all joints, then group into skeletons via part affinity fields (fast multi-person). Outputs drive fitness coaching, animation, and ergonomics. **Evaluation**: OKS (object keypoint similarity). **Common mistake**: occlusion — hidden joints get hallucinated confidently; check confidence scores and enforce anatomical constraints before acting on poses.`,
  "Video Understanding": `**Video** adds time to vision: sample frames, model motion, aggregate. **Two-stream** networks fuse RGB with optical flow; **3D CNNs** (I3D, SlowFast) convolve space-time directly; **transformers** (TimeSformer, VideoMAE) attend across frames. Tasks: action recognition, tracking, anomaly spotting. **Sampling** matters — uniform clips miss brief events; dense sampling costs compute. **Common mistake**: treating frames independently — without temporal modelling, "opening" versus "closing" a door look identical. Evaluate on Kinetics/Something-Something style benchmarks.`,
  "Data Augmentation": `**Augmentation** multiplies training data with label-preserving transforms: flips, crops, rotations, colour jitter, blur, Cutout/RandomErasing, MixUp/CutMix (blend images and labels). Medical and satellite domains add domain-specific warps. **Test-time augmentation** averages predictions over variants for free accuracy. **AutoAugment/RandAugment** search policies automatically. **Common mistake**: augmentation that breaks labels — vertical flips on digits (6↔9), or colour jitter on traffic lights. Validate augmented samples visually, and never augment validation data.`,
  "Model Deployment (TFLite, ONNX)": `**Deploying vision models** means fitting accuracy into latency, memory, and power budgets. **ONNX** is the portable exchange format (train anywhere, run with ONNX Runtime). **TFLite** targets Android/edge with quantization and delegates (GPU, NNAPI, Edge TPU). **TensorRT** optimises NVIDIA serving. Pipeline: export → quantize → benchmark on-device → monitor. **Common mistake**: server benchmarks predicting edge behaviour — always measure on the actual device with production-shaped inputs, and keep a rollback artifact ready.`,
  "Evaluation (mAP, IoU)": `**IoU** (Intersection over Union) measures box/mask overlap: area of overlap divided by area of union; 0.5 is the classic detection threshold, stricter tasks use 0.75. **mAP** (mean Average Precision) averages precision-recall performance across classes (and IoU thresholds in COCO-style mAP@[.5:.95]). **Precision** punishes false alarms; **recall** punishes misses. **Common mistake**: headline mAP hiding per-class failure — slice metrics by class, size (small objects suffer most), and lighting before declaring victory.`,
  "3D Vision & Depth": `**3D vision** recovers shape and distance. **Stereo** triangulates from two views; **structured light/LiDAR** measures directly; **monocular** methods (MiDaS) predict depth from one image with learned priors. **Representations**: depth maps, point clouds, voxels, meshes, NeRFs (neural radiance fields synthesise novel views). Applications: robotics grasping, AR placement, autonomous driving. **Common mistake**: scale ambiguity in monocular depth — single images give relative, not metric, depth without known references or calibration.`,
  "Face Recognition": `**Face recognition** has two tasks: **verification** (is this the claimed person? 1:1) and **identification** (who is this? 1:N). Pipeline: detect → align → embed (ArcFace, FaceNet map faces to vectors) → compare by cosine distance against a threshold. **Liveness detection** defeats photos and masks. Accuracy varies by demographic — audit per group. **Common mistake**: confusing detection (find faces) with recognition (name them), and deploying without consent frameworks — face data is biometric and regulated (GDPR, POPIA-style laws) nearly everywhere.`,
  "Medical Imaging AI": `**Medical imaging AI** assists radiology, pathology, and ophthalmology: detect tumours, segment organs, grade disease. Requirements beyond accuracy: **calibrated uncertainty**, **explainability** (saliency must highlight real pathology), **robustness** across scanners and hospitals, and **regulatory clearance** (FDA, CE). Data is scarce and imbalanced — transfer learning plus careful augmentation help. **Common mistake**: training and testing on one hospital's scanners — performance collapses on new equipment; validate multi-site and keep radiologists firmly in the loop.`,
  "Satellite & Aerial Imagery": `**Satellite vision** analyses Earth from above: crop health (NDVI indices), deforestation, urban growth, disaster damage, ship detection. Challenges: enormous images (tile into patches), **multispectral bands** beyond RGB (near-infrared reveals vegetation stress), cloud cover, and rarelabels. **Change detection** compares time series. Models: segmentation CNNs and vision transformers with multispectral inputs. **Common mistake**: RGB-only thinking — the informative bands are often invisible; learn the spectral signatures of your target before modelling.`,
  "Real-time Inference": `**Real-time inference** meets strict latency budgets (30+ FPS video, sub-100ms APIs). Levers: small architectures (MobileNet, YOLO-nano), **quantization** (INT8), **pruning**, TensorRT/ONNX runtimes, batching, and skipping frames with tracking between detections. Measure **p99 latency** on target hardware — averages hide stutters users feel. **Common mistake**: accuracy-only model selection — a 2% less accurate model at 5× speed wins every real-time deployment; profile end-to-end including pre/post-processing, not just the network.`,
  "Document Understanding (OCR)": `**Document AI** reads paperwork: **OCR** (Tesseract, PaddleOCR, TrOCR) converts pixels to text; **layout analysis** finds tables, headers, and fields; **information extraction** fills schemas (invoice number, total, date). Handwriting, skew, stamps, and low-res scans degrade OCR — preprocess (deskew, denoise, upscale). LLMs now parse OCR output into JSON with verification. **Common mistake**: trusting raw OCR for numbers — totals and IDs need checksum rules and human review thresholds; measure character error rate per document type.`,
  "Autonomous Driving Vision": `**Driving vision** fuses cameras, LiDAR, and radar into a world model: **detection** (vehicles, pedestrians, signs), **lane segmentation**, **depth estimation**, **tracking** across frames, and **prediction** of others' motion. **Sensor fusion** covers individual weaknesses (cameras fail in glare, LiDAR in rain). **BEV (bird's-eye-view)** representations unify sensors for planning. Safety demands redundancy, huge edge-case coverage, and conservative fallbacks. **Common mistake**: benchmark-only validation — closed-loop simulation plus millions of real miles surface the long tail benchmarks miss.`,
  "Experiment Tracking (MLflow)": `**Experiment tracking** records every run: code version, data snapshot, **hyperparameters**, metrics, and artifacts (models, plots). **MLflow Tracking** logs with mlflow.log_param/metric/artifact and compares runs in a UI; alternatives: Weights & Biases, Neptune. Without tracking, tuning is folklore — nobody knows which change helped. **Common mistake**: logging metrics but not data/code versions — an untracked data tweak makes the "best" run irreproducible. Log the environment (requirements, seeds) with every run.`,
  "CI/CD for ML": `**CI/CD for ML** automates the path from commit to deployed model: lint and unit-test code → validate data schemas → train on sample → evaluate against baselines and **promotion gates** (min metrics, fairness checks) → register → deploy to staging → canary → production. Tools: GitHub Actions, Jenkins, Kubeflow Pipelines. **Data and model tests** join code tests (no NaNs, schema match, latency budget). **Common mistake**: CI that tests code but never trains — a green build with a broken training graph ships silent decay; run small end-to-end training in CI.`,
  "Model Registry": `A **model registry** is version control for trained models: each version stores weights, training code, data snapshot, metrics, and approval state (staging → production → archived). **MLflow Model Registry**, SageMaker, Vertex AI implement it. **Lineage** answers "which data and code made this model?" during incidents and audits. **Aliases/champions** route traffic to the blessed version. **Common mistake**: overwriting "model.pkl" in place — without immutable versions, rollback is impossible and debugging becomes archaeology. Never deploy unregistered models.`,
  "Monitoring & Alerting": `**Monitoring** watches deployed models: input distributions, prediction distributions, latency, error rates, business KPIs, and feedback labels. **Alert** on statistically significant shifts, not single points — use control limits and burn-rate windows to avoid pager fatigue. Dashboards per model (Grafana, Evidently, Arize) plus runbooks per alert. **Common mistake**: monitoring infrastructure only (CPU, latency) while predictions silently rot — a healthy server serving garbage is the classic ML outage. Alert on prediction quality proxies from day one.`,
  "Drift Detection": `**Drift** is change that breaks models. **Data drift**: input distribution shifts (new camera, new slang) — detect with KS tests, PSI, or embedding distances. **Concept drift**: the true relationship changes (fraud tactics evolve) — needs fresh labels to see. **Label drift**: class balances shift. Response ladder: alert → investigate → reweight → retrain → rollback. **Common mistake**: retraining on autopilot without diagnosing — retraining on corrupted new data bakes the problem in; always inspect drifted segments before refreshing the model.`,
  "Kubernetes Deployment": `**Kubernetes** orchestrates model serving at scale: **Deployments** run N replicas with rolling updates; **Services** load-balance; **HPA** autoscales on CPU, GPU, or custom metrics (queue length, p99 latency); **namespaces + quotas** isolate teams. GPUs need device plugins and node selectors; large images need layer caching. **Canary** via traffic splitting (Istio, Argo Rollouts). **Common mistake**: default CPU-only requests for GPU models (never scheduled) or no resource limits (one model starves the node). Declare requests = limits for predictable serving.`,
  "Feature Stores": `A **feature store** serves consistent features for training and inference: **offline store** (data lake) for training batches, **online store** (Redis, DynamoDB) for millisecond serving lookups. **Point-in-time correctness** prevents leakage (only data known at event time). Feast, Tecton, and Hopsworks implement it. Example: "user_7d_spend" computed once, used identically in training and live scoring. **Common mistake**: training/serving feature skew from duplicated logic — define each feature once in the store and reuse everywhere.`,
  "Data Versioning (DVC)": `**DVC** versions data and models with Git-style pointers: giant files live in remote storage (S3), tiny .dvc metafiles live in Git — clone stays light while history stays complete. **Pipelines** (dvc.yaml) declare stages with dependencies and outputs; dvc repro reruns what changed; dvc exp run tracks experiments. **Common mistake**: versioning code without data — checking out last month's code against today's silently-changed data reproduces nothing. Version datasets, preprocessing code, and models as one unit.`,
  "Model Serving (FastAPI, TorchServe)": `**Model serving** exposes predictions over HTTP: **FastAPI** (validate with Pydantic, async endpoints, auto-docs) fronting PyTorch/TF, or **TorchServe/TFServing/Triton** for batched GPU throughput. Production checklist: request validation, batching, timeouts, health endpoints, structured logging, auth, and rate limits. **Warm up** models at startup (first inference is slow). **Common mistake**: synchronous endpoints loading the model per request — load once at startup, batch where possible, and separate CPU preprocessing from GPU inference.`,
  "A/B Testing for ML": `**A/B tests** compare model variants on live traffic: split users (consistent hashing), define a **primary metric** plus guardrails (latency, revenue, fairness slices), size the test for **statistical power**, run to the planned horizon, then analyse with correct tests (t-test, bootstrap, sequential methods). **Common mistake**: peeking daily and stopping at the first green — inflates false wins; also, network effects and novelty effects bias naive splits. For models, also shadow-test before splitting traffic.`,
  "Canary Deployments": `**Canary deployment** releases a new model to a small traffic slice (1–5%) first, watching error rates, latency, prediction distributions, and business metrics against the stable version — then ramps (5 → 25 → 100%) or rolls back automatically on breach. Needs instant **rollback**, traffic splitting (Istio, Argo Rollouts, Lambda aliases), and pre-defined promotion criteria. **Common mistake**: canarying without success criteria — eyeballing dashboards at 2am; encode gates (max error delta, min conversion parity) and let automation decide.`,
  "Auto-scaling": `**Auto-scaling** matches serving capacity to demand: **HPA** adds pods on CPU/memory/custom metrics; **KEDA** scales on queues and streams (Kafka lag, SQS depth); **cluster autoscalers** add nodes, including GPU pools. Scale-to-zero saves money for spiky workloads (cold starts need warming). **Predictive scaling** pre-warms known peaks. **Common mistake**: scaling on CPU for GPU-bound models (CPU idles while GPUs queue) — scale on the bottleneck metric (queue depth, p99 latency, GPU util), and load-test the scaling path itself.`,
  "Shadow Mode Testing": `**Shadow mode** runs a candidate model on live production traffic without affecting users: fork requests to both versions, log both predictions, compare offline. Catches integration bugs, latency surprises, and distribution gaps that offline evals miss — with zero user risk. Graduate to canary only after shadow parity. **Common mistake**: shadow traffic that differs from real serving (different preprocessing, timeouts, or load) — mirror the exact production path, and watch cost: shadow doubles inference spend during the test.`,
  "Data Quality Checks": `**Data quality checks** stop garbage before it trains or serves: **schema validation** (Great Expectations, Pandera — columns, types, ranges), **freshness** (is the feed late?), **volume** (row-count anomalies), **distribution** checks (new categories, shifted means), and **referential** integrity (join keys exist). Fail loudly on contract breach; quarantine bad batches. **Common mistake**: validating once at project start — upstream pipelines change silently; run checks on every batch, in training and serving alike.`,
  "Reproducibility": `**Reproducibility** means same code + same data + same environment = same result. Pillars: **version everything** (code, data via DVC, configs), **pin environments** (lockfiles, Docker images — not "latest"), **fix seeds** (Python, NumPy, framework, data-loader workers), and **log hardware/driver versions** for GPU nondeterminism. **Common mistake**: "works on my machine" from unpinned transitive dependencies — rebuild from the lockfile in CI to prove it. Reproduce the published numbers before extending any experiment.`,
  "GPU Infrastructure": `**GPU infrastructure** feeds hungry models: size VRAM to model + batch + optimizer states (Adam triples weight memory); use **mixed precision** to halve it. **Multi-GPU**: data-parallel (NCCL) for big batches, model/tensor-parallel for giant models. **Spot/preemptible** instances cut 60–90% for fault-tolerant training with checkpointing. Monitor utilisation, memory, temperature, and ECC errors. **Common mistake**: renting the biggest GPU by default — profile first; a smaller card with tuned batching often trains cheaper per epoch.`,
  "Security & Compliance": `**ML security** spans data, model, and deployment: protect **training data** (PII redaction, access controls, residency rules), defend **models** (extraction, inversion, and poisoning attacks; sign artifacts), and harden **serving** (auth, rate limits, input validation, secret management). **Compliance** (GDPR, HIPAA, EU AI Act, opsec reviews) demands data lineage, bias assessments, and audit logs. **Common mistake**: logging raw prompts containing customer PII into plaintext stores — classify data flows first, then apply controls per class.`,
  "Team Workflows": `**ML teamwork** needs shared contracts: one **monorepo or clear service boundaries**, trunk-based development with short-lived branches, **code + data + experiment reviews** (not just code), and a **definition of done** (eval gates, docs, monitoring, rollback plan). Rituals: weekly error analysis, dataset retros, and incident reviews without blame. **Common mistake**: notebook-only collaboration — unreviewed notebooks with hidden state rot fast; promote stable logic into tested modules with owners. Document decisions (ADRs) so future teammates know why.`,
  "Transparency & Explainability": `**Transparency** means stakeholders can understand and challenge AI decisions. Levels: **simulatable** models (small decision trees), **decomposable** parts (feature weights), **post-hoc explanations** (SHAP, LIME, counterfactuals — "you were declined because income < X; at X+500 you would pass"). **Model cards** document purpose, data, metrics per group, and limits. **Common mistake**: explanations as decoration — if explanations don't change decisions or reach affected people in plain language, transparency theatre helps nobody. Design explanations for the harmed, not just engineers.`,
  "Privacy & GDPR Compliance": `**Privacy** protects personal data across the ML lifecycle. **GDPR** grants rights: lawful basis, purpose limitation, minimisation, access, erasure, and objection — with fines up to 4% of global revenue. Techniques: **anonymisation** (risky — re-identification is easy), **pseudonymisation**, **differential privacy** (noise with guarantees), **federated learning** (train without centralising data). **Common mistake**: "anonymised" datasets that re-identify in minutes via quasi-identifiers (postcode + birthdate + gender); run re-identification risk analysis, not vibes.`,
  "AI Governance Frameworks": `**AI governance** turns principles into process: an **AI inventory** (every model registered with owner, purpose, risk tier), **risk assessments** before launch and on change, **approval gates** for high-risk uses, continuous **monitoring**, and incident response. Frameworks: **NIST AI RMF** (govern, map, measure, manage), **ISO/IEC 42001**, the **EU AI Act's** obligations. **Common mistake**: a principles PDF with no gates — governance lives in checklists, owners, and blocked launches, not posters. Start with inventory; you cannot govern what you cannot list.`,
  "Risk Assessment Methodologies": `**AI risk assessment** systematically finds what can go wrong before launch: map **use case and stakeholders**, enumerate **harms** (bias, safety, privacy, security, autonomy), estimate **likelihood × severity**, apply **controls**, and set **residual-risk** acceptance with owners. Methods: **failure-mode analysis** (FMEA), red-teaming, pre-mortems ("it failed spectacularly — why?"), and bias audits per group. Reassess on data, model, or context change. **Common mistake**: one generic checklist for all systems — tailor depth to stakes; a music recommender and a hiring model deserve different rigour.`,
  "Accountability & Responsibility": `**Accountability** answers "who answers when AI harms?" — with named owners, not "the algorithm decided". **Responsibility** spans the chain: data collectors, model builders, deployers, and operators each own their layer's risks. Practices: **decision logs** (why this model, these thresholds), **human sign-off** for high-stakes actions, and **redress channels** for affected people. **Common mistake**: responsibility diffusion across vendors and teams until nobody can stop a harmful launch — write the RACI before training, and give someone explicit veto power.`,
  "Human Oversight Design": `**Human oversight** keeps people meaningfully in control. Patterns: **human-in-the-loop** (approve each decision — slow, thorough), **human-on-the-loop** (monitor and intervene — balanced), **human-in-command** (set bounds, override anytime). Oversight fails through **automation bias** (rubber-stamping) and **skill atrophy**. Design for attention: surface uncertainty, show reasons not just verdicts, and require active confirmation for irreversible acts. **Common mistake**: a human "reviewing" 500 cases an hour — throughput that guarantees rubber-stamping is oversight theatre.`,
  "Global AI Regulation": `**AI law** is fragmenting globally: the **EU AI Act** bans unacceptable uses and imposes duties (risk management, data governance, transparency, human oversight) on high-risk systems; the US leans on sectoral rules plus executive orders; China regulates recommendations, deep synthesis, and generative AI specifically; the UK, Canada, and Brazil advance their own frameworks; African states coordinate via continental digital strategies. **Common mistake**: building for one jurisdiction — design adaptable controls (consent, logging, human review hooks) because deployment geography always expands.`,
  "Auditing AI Systems": `An **AI audit** independently verifies a system against claims and duties. Scope: **data audit** (provenance, consent, bias), **model audit** (metrics sliced by group, robustness, calibration), **process audit** (governance, testing, monitoring), and **impact audit** (real-world effects on people). Methods: documentation review, code and data inspection, adversarial testing, and stakeholder interviews. Standards emerge via ISO and specialist auditors. **Common mistake**: auditing the demo instead of production — audit the deployed pipeline, data feeds, and thresholds users actually face, with access to everything.`,
  "Stakeholder Impact Analysis": `**Impact analysis** asks who gains, who loses, and who was never consulted. Map **stakeholders** (users, non-users affected, workers, communities), trace **benefits and harms** per group (jobs, access, dignity, safety), weight the **vulnerable** heaviest, and design **mitigations plus monitoring** with their input. Participatory methods (interviews, community review boards) beat armchair ethics. **Common mistake**: averaging impacts — a product "net positive" overall can still devastate a minority; disaggregate always, and give affected groups veto-relevant voice.`,
  "AI Safety Research": `**AI safety** studies how to keep advanced systems reliably aligned with human intent. Threads: **alignment** (specifying true goals, not proxies — Goodhart's law bites), **interpretability** (understanding internals), **robustness** (adversarial and distributional), **evaluations** (dangerous-capability testing), and **governance** of frontier development. Near-term practice: red-teaming, refusal training, and staged deployment. **Common mistake**: treating safety as a launch checklist — it compounds across the lifecycle; threat-model capabilities before scaling them, not after incidents.`,
  "Environmental Impact of AI": `AI has a physical footprint: **training** frontier models consumes gigawatt-hours; **inference at scale** often dominates lifetime energy; **data centres** draw water for cooling and strain grids. Levers: efficient architectures, **distillation** and quantization, right-sized models, carbon-aware scheduling (train when grids are clean), and honest **reporting** (model cards with energy figures). **Common mistake**: giant-model-by-default — a distilled model at 95% quality for 1% energy wins most deployments; measure performance per joule alongside accuracy.`,
  "Intellectual Property in AI": `AI scrambles **IP**: training on copyrighted works (fair-use battles ongoing worldwide), **ownership of outputs** (human authorship requirements differ by jurisdiction), **style imitation** disputes, and **licensing** of models and datasets (permissive vs restrictive vs responsible-AI licences). Practice: track **data provenance** and licences, honour opt-outs and robots.txt, prefer cleanly-licensed data, and contract clearly who owns fine-tunes and outputs. **Common mistake**: "publicly available means free to train on" — availability is not a licence; audit datasets like code dependencies.`,
  "Accessibility & Inclusive Design": `**Inclusive AI** works for disabled users, low-bandwidth users, and underrepresented languages. Practice: **WCAG**-conformant interfaces, keyboard and screen-reader flows, captions and transcripts, plain-language modes, offline-tolerant design, and datasets covering disability, age, accent, and language diversity. Test with disabled users — automated checkers catch a fraction. **Common mistake**: accessibility as post-launch patching — retrofits cost 10× designing in; include edge users in requirements, datasets, and evals from day one. Exclusion at scale is a fairness harm.`,
  "Dual-use Technology Risks": `**Dual-use** capabilities help and harm with the same weights: vulnerability discovery aids defence and attack; bio-models aid medicine and bioweapons; persuasion aids tutoring and manipulation. Governance levers: **capability evaluations**, staged release, **know-your-customer** for powerful APIs, use-case policies with enforcement, and information-hazard review before publishing. **Common mistake**: open-sourcing frontier capabilities assuming only good actors download — release decisions are irreversible; weigh broad benefit against misuse uplift with domain experts first.`,
  "Control Flow": `**Control flow** decides the order code runs in. **Sequence** runs top to bottom; **selection** (if/else) branches on conditions; **iteration** (for/while loops) repeats. Example: if score >= 50: print("pass") else: print("retry"). **Boolean conditions** combine with and, or, not. **Common mistake**: tangled nesting — flatten with early returns or guard clauses, and trace each branch with a concrete value before running. Master these three patterns and you can read any program.`,
  "Comments": `**Comments** explain why code exists for future readers. Python uses # for lines and triple-quoted strings for blocks; // and /* */ serve other languages. **Docstrings** document functions (purpose, parameters, returns) and feed help() and docs. Example: # convert USD to ZiG at today's rate. **Common mistake**: commenting what instead of why (x += 1  # add one), or stale comments contradicting code — update or delete them. Write self-explanatory code first; comment the reasoning that code cannot show.`,
  "Imports / Libraries": `**Imports** reuse other people's tested code. Python: import math, from collections import Counter; install third-party packages with pip install requests. JavaScript: import { x } from "./lib.js" (npm for packages). **Standard libraries** (math, datetime, json) ship with the language; **third-party** extends it. **Common mistake**: wildcard imports (from x import *) that silently overwrite names, and unpinned versions breaking builds — import explicitly and pin requirements.`,
  "Data Types": `**Data types** define what values mean and allow. **Numbers**: int (42), float (3.14); **text**: str ("Ada"); **truth**: bool (True/False); **nothing**: None/null. **Collections**: lists/arrays (ordered), dicts/objects (keyed), sets (unique), tuples (fixed). Example: "5" + 5 fails — convert first: int("5") + 5 = 10. **Common mistake**: mixing types silently (string + number) or mutating shared references. Check types at boundaries: inputs, API payloads, function signatures.`,
  "Error Handling": `**Errors** divide into syntax (won't run), runtime (crash mid-run), and logic (runs, wrong answer). Handle runtime errors with **try/except**: attempt risky code, catch specific failures, clean up in **finally**. **Raise** meaningful errors early: raise ValueError("age must be positive"). Read **tracebacks** bottom-up for the true failure line. **Common mistake**: empty except blocks hiding bugs, or fixing symptoms instead of causes. Reproduce first, isolate second, fix third — then add a test locking the fix.`,
  "Main Execution Logic": `Every program needs a clear **entry point** where execution begins and an orderly flow after it. Python convention: def main(): ... with if __name__ == "__main__": main() so files work both run directly and imported. Structure: **parse inputs → validate → compute → output**. Keep main() thin — delegate to tested functions. **Common mistake**: hundreds of lines at top level with no functions, making reuse and testing impossible. A readable main() reads like a table of contents for the program.`,
  "Output": `**Output** makes results visible: print() to console, files for persistence, JSON for other programs, dashboards for humans. **Formatting** matters: f"Total: {total:.2f}" beats bare numbers. **Logging** (info, warning, error levels) replaces scattergun prints in real systems. **Common mistake**: printing inside reusable functions (pollutes libraries) — return values and let the caller decide; and leaking sensitive data into logs. Match output shape to its consumer: humans want readable, machines want parseable.`,
  "What is Artificial Intelligence?": `**Artificial intelligence** is software performing tasks that need human-like judgement: recognising, predicting, deciding, creating. **Narrow AI** masters one task (translation, face unlock) — all real systems today. **AGI** (general, human-level) and **superintelligence** remain hypothetical. AI learns from **data** using **models**; machine learning and deep learning are its main engines. **Common mistake**: confusing demos with deployment — a model answering sample questions is far from a reliable product under real-world messiness.`,
  "Machine Learning vs Deep Learning": `**Machine learning** learns patterns from data; **deep learning** is ML with multi-layer **neural networks**. Use classical ML (trees, forests, boosting) for tabular data, small datasets, and when interpretability matters. Use deep learning for images, audio, and text at scale — where learned features beat handcrafted ones. **Rule of thumb**: start classical (fast, explainable), escalate to deep when data and accuracy demand it. **Common mistake**: deep learning on 500 rows — it memorises; classical methods generalise better there.`,
  "AI Ethics & Future": `AI's future is negotiated, not predetermined. **Promises**: scientific acceleration, personalised education and medicine, productivity leaps. **Perils**: bias at scale, labour disruption, misinformation, autonomous weapons, concentrated power. **Steering it**: risk-based regulation (EU AI Act), safety research, transparency duties, and broad participation in decisions. **Careers** shift toward human-AI collaboration skills: judgement, domain depth, and verification. **Common mistake**: techno-fatalism ("nothing can be done") or hype ("AGI next year") — engage with evidence and institutions instead.`,
  "Python Foundations": `**Python foundations** are syntax, types, flow, and functions working together. Indentation defines blocks — no braces. **Dynamic typing** keeps code short; names bind to objects. Core workflow: take input, loop and branch over it, package logic in **functions**, print or return results. Example: total = sum(int(x) for x in input().split()). **Common mistake**: inconsistent indentation (the classic beginner crash) and shadowing builtins (naming a variable list or sum). Read tracebacks literally — Python usually tells you exactly what broke.`,
  "NumPy & Pandas": `**NumPy** gives fast n-dimensional arrays: np.array([1,2,3]) with **vectorised** math (a * 2, no loops) and broadcasting. **Pandas** adds labelled tables: **DataFrames** with df.head(), df.describe(), df.groupby("city").mean(), boolean filtering df[df.age > 18]. Workflow: load (read_csv) → inspect → clean (dropna, fillna, astype) → transform → analyse. **Common mistake**: Python loops over rows (100× slower than vectorised ops) and chained assignment warnings — use .loc for writes.`,
  "Decomposition & Patterns": `**Decomposition** breaks scary problems into small winnable pieces; **patterns** reveal which tool each piece needs. Workflow: restate the goal in one sentence → list inputs and outputs → split into 3–5 steps → solve each with a known pattern (counting, searching, accumulating, branching). Example: "find top scorer" becomes read records → track max → report name. **Common mistake**: leaping to code — write the steps in plain words first; if you cannot say it, you cannot code it.`,
  "Abstraction & Efficiency": `**Abstraction** hides detail behind reliable interfaces; **efficiency** spends compute where it counts. Together: wrap repeated logic in functions (abstract once), then **measure** before optimising — profile, find the hotspot, improve its complexity class, not its constants. Example: replacing a list scan with a set lookup inside a loop. **Common mistake**: abstracting too early (wrong boundaries) or optimising unmeasured code. Rule: make it work, make it clear, make it fast — in that order.`,
  "Commits & Branches": `**Commits** are save points with messages; **branches** are parallel timelines for features. Flow: git switch -c feature → commit small steps → git push → open a **pull request** → review → merge → delete the branch. Messages explain why ("fix off-by-one in totals"), not what. **Common mistake**: giant "final version" commits mixing five changes — unreviewable and unrevertable. Commit compilable slices; pull main often to stay mergeable.`,
  "Merge & Collaborate": `**Collaboration** converges parallel work safely. **Merge** joins branches (fast-forward when linear, merge commit otherwise); **rebase** replays your commits onto fresh main for tidy history. **Conflicts** (<<<<<<< markers) mean both sides edited the same lines — read both, keep the correct blend, test, then git add to resolve. **Pull requests** add review, CI checks, and discussion. **Common mistake**: force-pushing shared branches (rewrites teammates' history) — rebase private branches only, merge shared ones.`,
  "Command Line Mastery": `The **command line** controls computers with text: pwd (where am I), ls (list), cd (move), mkdir/touch (create), cp/mv/rm (copy, move, delete), cat/less (view), grep (search), | pipes (chain tools), > redirects output. **Tab** completes, **up-arrow** recalls, man shows manuals. Example: grep -r "TODO" . finds every TODO. **Common mistake**: rm -rf typos and running pasted commands blindly — destructive commands deserve a pause and a backup. Speed comes from pipes, not typing faster.`,
  "Hardware & OS": `**Hardware** executes; the **OS** orchestrates. CPU runs instructions, RAM holds working data, disks persist it, GPUs accelerate parallel math. The OS **kernel** schedules processes, manages memory, and guards hardware via **system calls**; **permissions** decide who reads, writes, and executes. Example: a slow program may be CPU-bound (optimise code), RAM-starved (reduce footprint), or I/O-bound (batch operations) — diagnose before upgrading. **Common mistake**: blaming hardware for software waste — measure utilisation first.`,
  "From Problem to Plan": `Turn vague assignments into executable plans. **Clarify**: restate the goal, list inputs/outputs, pin examples (including edges). **Decompose**: split into named steps small enough to hold in your head. **Select** a pattern per step from your toolkit. **Estimate**: which step is riskiest? Attack it first. Example: "build a quiz app" → question bank → ask loop → scoring → report. **Common mistake**: starting with the fun part instead of the risky part — de-risk early, polish late.`,
  "JSX & Components": `**JSX** writes UI as HTML-like JavaScript: const el = <h1>Hello, {name}</h1> — expressions in braces, components capitalised. A **component** is a function returning UI for given **props**: function Card({title}){ return <div>{title}</div> }. Compose small components into screens; keep them **pure** (same props → same UI). **Common mistake**: giant components doing data, logic, and layout — split by responsibility; and mutating props, which breaks React's rendering contract.`,
  "State & Hooks": `**State** makes components remember and re-render: const [count, setCount] = useState(0). **Rules of hooks**: call at top level only, same order every render. **useEffect** syncs with outside systems (fetch, timers) with cleanup to avoid leaks. **useMemo/useCallback** cache expensive work. **Common mistake**: stale closures (effects seeing old state — list real dependencies), and setState in render loops. Lift shared state up; keep the rest local and derive what you can.`,
  "Routing & Data": `**Routing** maps URLs to screens: / tracks to a Track page with params (/course/:slug). **Data loading** pairs with routes — fetch on navigation, show skeletons, cache aggressively. **Forms** need controlled inputs plus validation before submit; **mutations** update the server then refresh or optimistically patch UI. **Common mistake**: fetching in every component instead of at route level (waterfalls), and losing form state on navigation — persist drafts for anything long.`,
  "Prompt Patterns": `**Prompt patterns** are reusable recipes for reliable LLM behaviour. **Few-shot**: show 2–3 input/output examples. **Chain-of-thought**: ask for step-by-step reasoning. **Role + constraints**: "You are a tax advisor. Answer in under 100 words with citations." **Generated knowledge**: ask for facts first, then the answer. **Self-check**: "verify each claim against the sources, flag uncertainty." **Common mistake**: one giant vague prompt — decompose into steps, constrain formats, and test each pattern on real inputs before composing.`,
  "Supervised Learning": `**Supervised learning** trains on labelled examples (input → correct answer) to predict new cases. **Classification** predicts categories (spam or not — logistic regression, trees, SVM); **regression** predicts numbers (prices — linear regression, boosting). Workflow: split train/validation/test → train → tune on validation → report once on test. **Overfitting** (memorising noise) is the eternal enemy — fight with cross-validation, regularisation, and more data. **Common mistake**: tuning on the test set until it shines — that score is then fiction.`,
  "Model Evaluation": `**Evaluation** proves a model works before users depend on it. **Holdout splits** (train/validation/test) plus **cross-validation** estimate real performance. **Classification**: accuracy, precision, recall, F1, ROC-AUC. **Regression**: MAE, RMSE, R². **Always beat a dumb baseline** (majority class, mean) — otherwise the model adds nothing. Slice metrics by segment; aggregates hide failures. **Common mistake**: evaluating on training data or leaking the future into features — both produce gorgeous, worthless scores.`,
  "Data Preparation": `**Data preparation** turns raw extracts into trainable tables: collect → **clean** (handle missing values, fix types, dedupe) → **integrate** (join sources on sound keys) → **transform** (encode categories, scale numbers, engineer dates) → **split** without leakage. Expect 70–80% of project effort here. **Common mistake**: fitting scalers and encoders on all data before splitting — statistics from test rows leak into training. Fit preprocessing on train only, then apply everywhere. Document every assumption.`,
  "Training & Evaluation": `**Training** fits parameters to data; **evaluation** judges the fit honestly. Loop: prepare splits → choose model and **loss** matching the goal → train watching train/validation curves → tune hyperparameters → diagnose (bias or variance?) → lock and test once. **Learning curves** tell the story: both errors high means underfit; a gap means overfit. **Common mistake**: training to convergence on the test metric by repeated peeking — decide the protocol upfront and freeze the test set.`,
  "Clustering Fundamentals": `**Clustering** groups similar points without labels. **K-Means** partitions into k balls around centroids (fast, needs k, loves round clusters). **Hierarchical** builds merge/split trees (dendrograms, no k needed). **DBSCAN** finds dense blobs of any shape and flags noise (needs density thresholds). **Choose k** via elbow, silhouette, or business sense. **Common mistake**: clustering unscaled features — one large-range column dominates distances; standardise first and always visualise the groups.`,
  "Choosing Clusters & Reducing Dimensions": `**Choosing k**: elbow plot (diminishing inertia gains), **silhouette score** (cohesion vs separation), gap statistic, and — best — downstream usefulness. **Dimensionality reduction** fights the curse of dimensionality: **PCA** keeps max-variance directions (fast, linear); **t-SNE/UMAP** preserve local neighbourhoods for visualisation (not distances — don't over-read them). Pipeline: scale → reduce → cluster → validate visually and numerically. **Common mistake**: clustering 200 noisy dimensions raw — reduce first, then group.`,
  "Classification Metrics": `**Classification metrics** read the confusion matrix (TP, FP, TN, FN). **Accuracy** = correct/total (lies on imbalance). **Precision** = TP/(TP+FP): of flagged items, how many right — optimise when false alarms hurt. **Recall** = TP/(TP+FN): of real items, how many caught — optimise when misses hurt. **F1** balances both; **ROC-AUC** ranks quality across thresholds. **Common mistake**: one metric worship — report precision, recall, and F1 per class, and pick thresholds by cost, not 0.5 by habit.`,
  "ROC & Validation Design": `**ROC curves** plot true-positive rate against false-positive rate across thresholds; **AUC** summarises ranking power (0.5 = coin flip, 1.0 = perfect). **PR curves** suit imbalanced data better. **Validation design** must mirror deployment: **stratified** folds for classes, **grouped** folds when rows share entities (patients, users), **time-based** splits for temporal data. **Common mistake**: random splits on grouped or temporal data — leakage inflates scores and production exposes the lie. Design validation first, model second.`,
  "Cleaning & Scaling": `**Cleaning** fixes raw-data sins: missing values (drop, fill with median/mode, or flag as its own signal), duplicates, wrong types, impossible values (age 999), and inconsistent categories ("Harare" vs "harare "). **Scaling** puts features on comparable footing: **standardisation** (z-score) for regularised models, **min-max** for neural nets, **robust scaling** (median/IQR) with outliers. **Common mistake**: filling missing values with the mean computed over train AND test — fit imputers and scalers on train only.`,
  "Categorical Encoding & Selection": `**Encoding** turns categories into numbers models digest: **one-hot** (binary columns — best for low-cardinality), **ordinal** (only when order is real), **target encoding** (mean target per category — powerful but leaky without cross-validation), **embeddings** (learned dense vectors for high-cardinality). **Feature selection** then prunes noise: correlation filters, mutual information, recursive elimination, L1. **Common mistake**: one-hotting a 10,000-level ID column (dimension explosion) — hash, target-encode, or embed instead.`,
  "Convolutional Networks": `**Convolutional networks** (CNNs) learn visual hierarchies: early layers detect edges, middle layers textures and parts, deep layers whole objects. Building blocks: **convolution** (sliding learned filters), **activation** (ReLU), **pooling** (downsample), stacked, ending in dense classifiers. **Receptive fields** grow with depth. Start from **pretrained backbones** (ResNet, EfficientNet) and fine-tune. **Common mistake**: training from scratch on tiny datasets — transfer learning plus augmentation beats bespoke architectures almost every time.`,
  "The Perceptron & Forward Pass": `The **perceptron** is the atom of deep learning: z = w·x + b, then output = activation(z) — a linear separator with a nonlinearity. A **layer** stacks perceptrons; the **forward pass** pushes inputs through layers to predictions. **Activations** decide expressiveness: step (original perceptron), sigmoid, tanh, ReLU. Single perceptrons solve only **linearly separable** problems (not XOR) — depth and nonlinearity fix that. **Common mistake**: forgetting the bias term or activation — without both, layers collapse into one linear map.`,
  "Training a Network": `**Training** tunes weights to minimise loss. Loop over **epochs**: forward pass → compute **loss** (cross-entropy for classes, MSE for numbers) → **backpropagate** gradients via chain rule → **optimizer** step (SGD, Adam) → repeat. Watch **train vs validation loss**: both falling means learning; validation rising means overfitting (regularise, augment, early-stop). **Batch size**, **learning rate**, and shuffling steer the ride. **Common mistake**: no validation split — training loss alone cannot tell learning from memorisation.`,
  "Convolution & Pooling": `**Convolution** slides a small learned filter over the input, computing dot products — detecting local patterns (edges, corners) everywhere with shared weights (**translation equivariance**, few parameters). **Stride** steps the slide; **padding** preserves borders. **Pooling** (max/average over windows) downsamples, adding shift tolerance and cutting compute. Stack them: conv → ReLU → pool, repeated, grows the receptive field. **Common mistake**: aggressive early pooling that discards the fine detail small objects need — downsample gradually.`,
  "Recurrent Architectures": `**Recurrent networks** keep memory across sequence steps via a **hidden state**: Elman RNNs (simple, forgetful), **LSTMs** (gated memory cells handling long ranges), **GRUs** (lighter gating). **Bidirectional** variants read past and future context. Training unrolls through time (**BPTT**) — gradients vanish or explode, hence gating and clipping. Uses: speech, sensors, text (pre-transformer). **Common mistake**: shuffling sequential batches (destroys order) or ignoring masks on padded steps — respect time and padding always.`,
  "Building Sequence Models": `**Sequence models** map ordered inputs to ordered outputs. Recipe: **embed** tokens → **encode** context (RNN, or attention) → **decode** step by step → train with **teacher forcing**, decode with **beam search**. Handle variable lengths with **padding + masks** and bucketed batches. For modern quality, prefer **pretrained transformers** and fine-tune — train RNN seq2seq only for learning or tiny data. **Common mistake**: exposure bias (model never sees its own errors in training) — schedule sampling or simply evaluate generation quality, not just teacher-forced loss.`,
  "Tensors & Autograd": `**Tensors** are n-dimensional arrays: scalars (0-d), vectors, matrices, batches (4-d images: N,C,H,W). **Shapes must align** — broadcasting stretches size-1 dims; matmul needs inner dims equal. **Autograd** records operations into a graph, then .backward() applies the chain rule automatically — you define forward, the framework derives gradients. **Common mistake**: shape mismatches (read error shapes carefully), forgetting zero_grad() (gradients accumulate!), and breaking the graph with detached NumPy conversions mid-model.`,
  "Datasets & Training": `**Datasets** feed training: map-style (indexable) or iterable (streaming) with **transforms** (augmentation, tokenization, normalisation). **DataLoaders** batch, shuffle (train only!), and parallelise loading (num_workers) — starved GPUs idle on slow loaders. Split train/validation/test once and freeze them. **Checkpoints** save weights + optimizer + epoch for resume. **Common mistake**: augmentation leaking into validation, unshuffled training data, and single-worker loading bottlenecking expensive GPUs — profile the pipeline, not just the model.`,
  "Checkpointing & GPU": `**Checkpoints** snapshot training: model weights, optimizer state, scheduler, epoch, and best-metric tracking — resume exactly after crashes and keep only the best for deployment. Save on **validation improvement**, prune old files. **GPUs** accelerate tensor math massively: move model and batches with .to(device), use **mixed precision** (autocast + scaler) for ~2× speed, and watch **VRAM** (batch size is the usual lever). **Common mistake**: checkpointing weights without optimizer state (restarts lose momentum) or device-mismatched tensors (model on cuda, data on cpu).`,
  "Building with LLMs": `**Building with LLMs** means composing models, prompts, data, and tools into products. Stack: choose a model tier per task difficulty → design **prompts** with examples and formats → add **retrieval** (RAG) for private/fresh knowledge → add **tools** (APIs, code) for actions → wrap with **guardrails**, evals, logging, and cost controls. Ship the smallest system that passes evals, then harden. **Common mistake**: starting with agents when a prompt plus retrieval suffices — complexity must earn its keep against measured quality gains.`,
  "How LLMs Generate Text": `LLMs generate by **predicting the next token**, repeatedly: encode the prompt → compute probabilities over the vocabulary → **sample** (greedy, temperature, top-p) → append → repeat until a stop token or limit. There is no plan — only fluent continuation, which is why grounding and verification matter. **KV-caching** reuses past computation for speed. **Common mistake**: mistaking fluency for understanding — the same machinery produces facts and fabrications with equal confidence; constrain high-stakes outputs with retrieval and checks.`,
  "Prompting & Sampling": `**Prompting** shapes behaviour; **sampling** shapes randomness. Prompt levers: instructions, roles, formats, few-shot examples, delimiters, and step-by-step requests. Sampling levers: **temperature** (0 precise → 1 creative), **top-p/top-k** (candidate pool), **max tokens**, **stop sequences**, and **seeds** for reproducibility. Pair them: temperature 0 + JSON schema for extraction; 0.7–0.9 + open briefs for ideation. **Common mistake**: tuning prompts at high temperature — randomness masks prompt effects; develop at 0, then raise temperature deliberately.`,
  "Guardrails & Evaluation": `**Guardrails** bound behaviour: input filters (injection, PII, disallowed asks), grounding requirements (cite sources), output checks (toxicity, secrets, format validity), and escalation paths. **Evaluation** proves they work: adversarial test suites (jailbreak attempts, edge phrasings), refusal-rate tracking, faithfulness scoring, and regression evals on every prompt change. **Common mistake**: shipping with "be safe" instructions as the only defence — layer model choice, prompts, filters, and monitoring, then red-team the seams.`,
  "How Diffusion Works": `**Diffusion** generates images by reversing noise. **Forward process**: add Gaussian noise over hundreds of steps until the image is static. **Reverse process**: a trained U-Net predicts and removes noise step by step, conditioned on your text prompt via cross-attention. **Latent diffusion** (Stable Diffusion) works in compressed space for speed. **Samplers** (DDIM, DPM++) trade steps for quality; **guidance scale** trades prompt fidelity against variety. **Common mistake**: too few steps (mush) or maxed guidance (burnt, rigid images) — sweep both deliberately.`,
  "Prompting & Parameter Control": `Image prompts pair **language** (subject, style, composition, lighting, quality tags) with **parameters**: aspect ratio, steps, guidance/CFG scale, seed (reproducibility), sampler, and negative prompts (what to avoid). Structure: subject first, then scene, style, technical tags. **Control extensions** (ControlNet depth/pose/edges, inpainting masks, img2img strength) add precision. **Common mistake**: prompt soup — fifty contradictory adjectives; iterate one variable at a time and keep a log of seed + settings for every keeper.`,
  "RAG Fundamentals": `**RAG** grounds LLM answers in your documents: **ingest** (load, clean) → **chunk** (200–500 tokens with overlap) → **embed** → **index** (vector DB) → **retrieve** top-k for each query → **generate** with context cited. Beats fine-tuning for fresh, private, or huge knowledge — update documents, not weights. **Chunking quality decides everything**: garbage chunks guarantee garbage answers. **Common mistake**: retrieving with generic embeddings untuned to the domain, or skipping evaluation of retrieval itself (recall@k) while blaming the generator.`,
  "Chunking & Vector Search": `**Chunking** slices documents for retrieval: size 200–500 tokens, 10–20% overlap, split on structure (headings, paragraphs) never mid-sentence. Small chunks pinpoint; large chunks preserve context — match chunk shape to question shape. **Vector search** embeds query and chunks with one model, ranks by cosine similarity, prefilters by metadata (date, source, permissions). **Hybrid** adds BM25 keywords. **Common mistake**: one giant chunk per document (retrieval returns haystacks) or zero overlap (answers split across boundaries vanish).`,
  "Rerank & Evaluate": `**Reranking** sharpens retrieval: a cheap bi-encoder fetches 50 candidates, a precise **cross-encoder** (or LLM judge) reorders to the best 5 for generation — big quality jump for modest cost. **Evaluate RAG end to end**: retrieval recall@k, faithfulness (claims supported by cited chunks), answer relevance, plus latency and cost. Keep a frozen **golden question set** with known-good answers. **Common mistake**: evaluating only final vibes — instrument retrieval and generation separately or you will fix the wrong half forever.`,
  "Text Preprocessing": `**Preprocessing** turns raw text into model-ready input: lowercase (usually), strip HTML/URLs, normalise whitespace and unicode, **tokenize** (split into units), remove or keep stopwords per task, **stem/lemmatize** (running → run), and handle emojis, mentions, and hashtags deliberately. Social text needs different cleaning than legal text. **Common mistake**: aggressive cleaning that destroys signal — negation ("not good"), casing ("US" vs "us"), and emojis often carry the label; ablate preprocessing choices against validation scores.`,
  "TF-IDF & Classification": `**TF-IDF + classifier** is the baseline every text project should beat: vectorise with TF-IDF (unigrams + bigrams, min_df to prune noise), train **logistic regression or linear SVM**, calibrate thresholds, and report per-class precision/recall/F1. Trains in seconds, explains itself via top coefficients, and deploys anywhere. **Common mistake**: jumping to BERT before the baseline — half of all text tasks never need more, and the baseline's errors teach you what data to collect next.`,
  "Sentiment Basics": `**Sentiment basics**: polarity (positive/negative/neutral), intensity ("love" vs "like"), and scope (whole review vs aspect). Start lexicon-based (VADER for social text) to learn the shape, then train classifiers, then fine-tune transformers for aspect-level nuance. Mind **negation**, sarcasm, and domain vocabulary flips ("sick beat" vs "sick patient"). **Common mistake**: one global score for mixed reviews — split by aspect or sentence before aggregating, or the average lies.`,
  "Detection & Nuance": `**Nuanced detection** goes beyond polarity: emotions (joy, anger, fear), urgency, sarcasm, toxicity, and intent. **Sarcasm** flips literal meaning ("great, another delay") — context and user history help; **negation scope** decides what "not" negates. Multi-label classifiers with calibrated thresholds beat single buckets. **Common mistake**: confident labels on ambiguous text — surface uncertainty scores and route low-confidence cases to humans instead of acting on machine sarcasm-blindness.`,
  "Using & Fine-Tuning": `**Using transformers**: load a pretrained checkpoint (BERT for understanding, GPT for generating), tokenize with its exact tokenizer, and either **feature-extract** (frozen embeddings + your classifier) or **fine-tune** end to end. Fine-tune recipe: small learning rate (2e-5), few epochs (2–4), warmup, early stopping on validation. **Common mistake**: mismatched tokenizers, giant learning rates destroying pretrained weights, or fine-tuning when frozen features plus a linear head already suffice — escalate gradually.`,
  "Serving NLP Models": `**Serving NLP** means fast predictions on real text: export to **ONNX** or quantized checkpoints, batch requests, cache frequent queries, and set p95 latency budgets. **Preprocessing must match training exactly** — same tokenizer version, same cleaning, same max length (truncate or slide windows for long docs). Monitor input drift (new slang, new topics) and prediction distributions. **Common mistake**: training-serving skew from reimplemented cleaning — share one preprocessing module and test parity explicitly.`,
  "Versioning & Monitoring": `**Version** the full NLP stack together: model weights, **tokenizer**, label maps, and preprocessing code — one changed piece silently corrupts the rest. **Monitor**: request volumes, latency percentiles, prediction/label distributions, user corrections, and drift signals on embeddings. **Feedback loops** turn corrections into retraining gold. **Common mistake**: monitoring servers but not semantics — a healthy endpoint serving stale-vocabulary predictions fails users invisibly; alert on prediction-quality proxies from day one.`,
  "From Notebook to Production": `**Notebooks** explore; **production** endures. Graduate in steps: refactor cells into **tested modules**, pin dependencies, add **data validation** at entry, wrap training in a **pipeline** (reproducible, scheduled), **register** versioned models, serve behind monitored endpoints with rollback, and alert on drift. Keep notebooks for analysis, never as deployment artifacts. **Common mistake**: scheduling the notebook as-is — hidden state, out-of-order cells, and unpinned environments guarantee irreproducible, undebuggable production behaviour.`,
  "Serving & Containerizing": `**Serve models in containers** for identical behaviour everywhere: a **Dockerfile** (slim base, pinned deps, non-root user, healthcheck) packaging a FastAPI/Triton app; push to a registry; run on any host or Kubernetes. **Compose** local stacks (app + Redis + Postgres) mirroring production topology. Tag images immutably (git SHA, never latest alone). **Common mistake**: fat unversioned images and missing healthchecks — orchestrators cannot heal what they cannot probe; keep images lean and probes honest.`,
  "Rollouts & Monitoring": `**Roll out** new models like landings, not leaps: **shadow** on live traffic first (compare, affect nothing), then **canary** 1–5% with automatic rollback on breached gates (error delta, latency, prediction-shift, business KPIs), then ramp. **Monitor** inputs, predictions, latency percentiles, costs, and feedback continuously with runbooks per alert. **Common mistake**: big-bang deploys on Friday afternoons with eyeball monitoring — automate gates and rollbacks, and never ship what you cannot revert in minutes.`,
  "Testing & Versioning": `**Test ML like software, plus data**: unit-test preprocessing and features; **contract-test** data schemas (Great Expectations); **integration-test** train→serve parity; **load-test** endpoints. **Version everything**: code in Git, data/models in DVC or a registry, environments in lockfiles and images. CI runs the fast suite per commit; nightly runs deeper training checks. **Common mistake**: testing code while data drifts unexamined — schema and distribution tests belong beside unit tests in every pipeline.`,
  "Automated Pipelines": `**Pipelines** encode the whole ML lifecycle as code: ingest → validate → preprocess → train → evaluate → register → deploy → monitor, each step cached and rerunnable (Kubeflow, Airflow, SageMaker Pipelines). **Triggers**: schedules, data arrivals, or drift signals. **Artifacts** pass explicitly between steps — no hidden notebooks. **Common mistake**: a pipeline that nobody can run locally for debugging — keep steps independently executable with small sample data, and log everything centrally.`,
  "Drift Concepts & Tests": `**Drift** breaks models silently: **covariate shift** (inputs change), **prior shift** (class balances change), **concept drift** (the true mapping changes). **Tests**: two-sample statistics (KS, chi-square), PSI, embedding-distance monitors, and prediction-distribution alarms. Distinguish sudden breaks (pipeline bug — fix data) from gradual drift (world moved — retrain). **Common mistake**: alerting on every wiggle — set thresholds from historical variance and require persistence before paging anyone.`,
  "Alerts & Retraining": `**Alert** on what matters with runbooks attached: prediction-quality proxies, drift test failures, latency/error budgets, cost anomalies, and feedback downturns. **Retrain** on triggers (drift confirmed, scheduled cadence, enough fresh labels) — never blindly: quarantine and inspect new data first, validate the challenger offline and in shadow, then promote through gates. **Common mistake**: retraining on corrupted fresh data on autopilot — automation proposes, validated evidence disposes; keep a human approval for production promotion.`,
  "K8s Workloads": `**Kubernetes workloads** for ML: **Deployments** for stateless serving with rolling updates; **Jobs/CronJobs** for batch training and scoring; **StatefulSets** for databases; **HPA + KEDA** for demand scaling; **node pools** separating CPU, GPU, and spot capacity with taints and tolerations. Mount data via PVCs or object storage; inject config via ConfigMaps and Secrets. **Common mistake**: one giant pool for everything — GPU jobs starve while web pods idle; segregate pools and set requests equal to limits for serving stability.`,
  "Autoscaling & GPU": `**Autoscale** on the true bottleneck: queue depth and p99 latency for serving, not CPU (GPUs queue while CPUs idle). **HPA** reacts in minutes; **KEDA** follows event streams; **cluster autoscaler** provisions nodes (warm GPU pools for burst readiness). **Scale-to-zero** for idle dev endpoints; guard minimums for latency-critical paths. **Common mistake**: thrashing (scale up/down oscillations) from tight thresholds — add stabilization windows and cooldowns, and load-test scaling behaviour before trusting it in production.`,
  "Image Processing Basics": `**Image processing** prepares pixels for models: load (note BGR vs RGB channel order in OpenCV!), **resize** (letterbox to preserve aspect), **normalize** (match training statistics), **augment** (flips, crops, jitter). Pillars: **filtering** (blur denoise, sharpen), **thresholding** (binarize), **morphology** (clean masks), **colour conversion** (HSV for segmentation). Example: document scan → grayscale → blur → adaptive threshold → find contours. **Common mistake**: processing in the wrong colour order or mismatched normalisation — verify visually at every stage, not just at the end.`,
  "Reading & Transforming": `**Reading images** correctly is half the battle: paths and formats (JPEG lossy, PNG lossless), colour order (OpenCV BGR vs PIL RGB — convert explicitly), dtypes (uint8 [0,255] vs float [0,1]), and EXIF orientation surprises. **Transforms**: resize, centre/random crop, rotate, flip, pad, normalize. Build one **reusable transform pipeline** shared by training and inference. **Common mistake**: train/inference transform mismatch (different resize or normalisation) — the classic silent accuracy killer; unit-test pipeline parity.`,
  "Filters & Edges": `**Filters** reshape images via kernels: **blur** (Gaussian) suppresses noise, **sharpen** emphasises detail, **median** kills salt-and-pepper noise while keeping edges. **Edge detectors** find boundaries: Sobel gradients, Laplacian zero-crossings, **Canny** (smooth → gradient → thin → double-threshold with hysteresis). Tune kernel sizes to object scale. **Common mistake**: edge-detecting raw noisy images — always denoise first, and remember filters are preprocessing for decisions, not decisions themselves.`,
  "Detection Fundamentals": `**Detection** answers what and where: each prediction is a **bounding box** (x, y, width, height) plus class plus confidence. Pipeline: propose regions (or grids/anchors) → classify → refine boxes → **NMS** (non-maximum suppression) removes duplicates. **Anchor boxes** encode expected shapes/scales. **IoU ≥ 0.5** counts as a hit; **mAP** averages performance. **Common mistake**: NMS thresholds left at defaults — crowded scenes need gentler suppression (Soft-NMS); always tune NMS on validation, not vibes.`,
  "YOLO & Evaluation": `**YOLO** (You Only Look Once) detects in a single pass: divide the image into a grid, predict boxes + classes per cell, suppress duplicates — real-time by design. Generations v5→v8+ improved backbones, anchor-free heads, and training recipes. **Evaluate** with mAP@0.5 and mAP@0.5:0.95, sliced by object size (small objects suffer most). **Common mistake**: training resolution mismatched to inference, or ignoring class imbalance — oversample rare classes and verify small-object recall explicitly.`,
  "Segmentation Tasks": `**Segmentation** classifies regions, not boxes: **semantic** (every pixel gets a class — road, car, sky), **instance** (each object separately — car #1 vs car #2), **panoptic** (both). Choose by need: counting needs instances; area estimates need semantics. **Annotation** is expensive — budget it, use weak labels and active learning. **Common mistake**: box-thinking applied to masks (ragged edges need pixel metrics like IoU/Dice, not box mAP) and resampling masks with bilinear interpolation (nearest-neighbour only).`,
  "U-Net & Evaluation": `**U-Net** segments with an encoder-decoder plus **skip connections**: downsampling captures context, upsampling restores resolution, skips reunite fine detail with semantics — dominant in medical imaging with little data. Train with **combined losses** (cross-entropy + Dice) against class imbalance. **Evaluate** with mean IoU/Dice per class plus boundary metrics where edges matter. **Common mistake**: heavy augmentation that breaks image-mask alignment — transform both identically, and validate masks visually after every pipeline change.`,
  "Export & Optimize": `**Export** models for deployment: PyTorch → **ONNX** (portable graph) → **TensorRT/TFLite/OpenVINO** (hardware-specific speed). Then **optimize**: fuse operators, quantize (FP16 nearly free, INT8 with calibration), prune dead branches, and benchmark end-to-end. Verify **numerical parity** (exported vs original outputs within tolerance) on real samples. **Common mistake**: dynamic shapes and custom ops breaking converters — prefer standard ops, fix input shapes where possible, and test the exported artifact, never assume it.`,
  "Deployment & Tuning": `**Deploy vision** where the eyes are: cloud APIs, on-prem servers, or edge devices (Jetson, phones). **Tune** per target: resolution vs accuracy trade-offs, batching, threading, power modes, and model variants (nano/small/medium). Monitor input drift (new cameras, seasons, lighting) and prediction quality continuously. **Common mistake**: lab-only validation — collect production samples from day one into growing eval sets, and keep one-click rollback ready for every release.`,
  "Governance Fundamentals": `**AI governance** makes responsibility operational: maintain an **AI inventory** (every model listed with owner, purpose, data, risk tier), run **risk assessments** before launch and on material change, enforce **approval gates** for high-risk uses, monitor continuously, and rehearse incident response. Start with inventory — unlisted systems cannot be governed. **Common mistake**: principles without process — a values statement nobody can point to in a launch review changes nothing; governance lives in checklists, owners, and stopped launches.`,
  "Risk & Regulation": `**AI risk** spans bias, safety failures, privacy breaches, security attacks, and autonomy harms; **regulation** increasingly prices them in. The **EU AI Act** bans unacceptable practices and duties high-risk systems (risk management, data governance, transparency, oversight, logging). Elsewhere: sectoral rules, executive orders, and emerging African frameworks. **Practice**: classify each system by risk tier first, then apply proportionate controls. **Common mistake**: discovering obligations after deployment — map regulatory touchpoints during design, when changes are cheap.`,
  "Privacy Principles": `**Privacy principles** for AI systems: **lawfulness and consent** (a valid basis for every use), **minimisation** (collect only what the task needs), **purpose limitation** (no repurposing without basis), **accuracy**, **storage limits**, **security**, and **accountability** (prove compliance). Rights follow: access, correction, erasure, objection. **Common mistake**: hoarding "just in case" data — every retained field is breach exposure and erasure-request work; delete aggressively and document retention schedules.`,
  "Techniques & Law": `**Privacy techniques** meet **legal duties** in implementation. Technical: **pseudonymisation**, k-anonymity, **differential privacy** (formal noise guarantees), **federated learning** (train without centralising), and strict access controls with audit logs. Legal: DPIAs for risky processing, data-processing agreements with vendors, breach notification within 72 hours (GDPR), and cross-border transfer mechanisms. **Common mistake**: technique theatre — differential privacy with an epsilon so large it guarantees nothing; calibrate parameters to real risk, not marketing.`,
  "Failure & Robustness": `**AI failures** follow patterns: distributional shift, adversarial inputs, feedback loops, specification gaming (Goodhart), and silent confidence on nonsense. **Robustness** engineering counters with diverse training data, adversarial testing, uncertainty quantification, graceful abstention ("I don't know"), and layered guardrails. Study public incident databases — failures rhyme. **Common mistake**: testing only sunny-day inputs — robustness is measured on the worst plausible input, so build evaluation around adversaries and edge cases from the start.`,
  "Red-teaming & Assurance": `**Red-teaming** attacks your own system before adversaries do: jailbreak attempts, prompt injections, data-extraction probes, bias stress tests, and misuse walkthroughs — by people incentivised to break things, not demo them. **Assurance** wraps findings into evidence: fixed issues, residual risks, monitoring hooks, and retest cadence. **Common mistake**: one ceremonial red-team before launch — capabilities, data, and attackers all evolve; schedule recurring exercises tied to releases and threat-intel updates.`,
  "Fairness Metrics": `**Fairness metrics** make equity measurable — and reveal trade-offs. **Demographic parity**: equal positive rates across groups. **Equalized odds**: equal true- and false-positive rates. **Calibration**: scores mean the same thing per group. **Individual fairness**: similar individuals, similar outcomes. The **impossibility results** prove some criteria conflict when base rates differ — so choose metrics from stakeholder values, not defaults. **Common mistake**: reporting one global number — always disaggregate by relevant groups and publish the gaps alongside the headline.`,
  "Explainability": `**Explainability** shows why a model decided: **global** views (which features drive the model overall), **local** views (why this case — SHAP values, LIME surrogates, counterfactuals: "approval at income X+500"). Match depth to stakes — declined applicants need actionable reasons, regulators need faithful ones. **Fidelity** matters more than fluency: a pretty but unfaithful explanation misleads. **Common mistake**: explaining the demo instead of production — explain the deployed pipeline with live data, and test that explanations actually change decisions or understanding.`,
  "Variables": `**Variables** name storage locations so programs can remember values. **Declaration** introduces the name (let x, x = 1, int x); **assignment** stores a value; **initialisation** does both at once. **Scope** decides visibility: locals live inside functions, globals across files (use sparingly). **Constants** (UPPER_CASE, const) mark values that must never change. Example: total = 0 then total += price accumulates a sum. **Common mistake**: using a variable before assignment, or leaking loop counters into outer scope — declare close to first use and keep scopes tight.`,
  "Functions": `**Functions** turn repeated logic into callable units: define once with def name(params):, call many times with arguments. **Parameters** receive values; **return** sends results back (no return means None/null). **Scope**: functions see outer constants but keep their locals private. Break programs into small functions with single jobs and honest names. Example: def square(n): return n * n. **Common mistake**: giant do-everything functions and mysterious boolean flags — split by job, name by purpose, and test each function alone.`,
  "Testing & Debugging": `**Testing** proves code works; **debugging** finds why it doesn't. Levels: **unit** (single functions), **integration** (parts together), **end-to-end** (whole flows). Debug by reproducing reliably, reading the actual error first and last lines, forming one hypothesis, testing it, and fixing a single cause. **Rubber-ducking** (explaining aloud) and binary search on code (comment halves) resolve most stuck cases. **Common mistake**: changing three things at once and learning nothing — one variable per experiment, and write a regression test for every bug fixed.`
};

const __TOPICS = {
  "Foundations": ["Binary & Data","OS Fundamentals","Networking Basics","Security Essentials","Hardware & CPU","Algorithms & Data Structures","Abstraction Principles","Decomposition & Problem Solving","Binary Search & Sorting","Computational Complexity","Memory Management","Recursion","Boolean Logic","Graph Theory","Database Concepts"],
  "Programming": ["Variables & Types","Control Flow & Loops","Functions & Closures","Classes & OOP","Async & Promises","DOM & Events","Modules & Imports","Error Handling & Debugging","Unit Testing","Performance Optimization","Security Best Practices","REST APIs & Fetch","State Management","Build Tools & Deploy","Version Control with Git","Code Review Practices","Design Patterns","Functional Programming","Regular Expressions","Type Systems"],
  "Machine Learning": ["Linear Regression","Logistic Regression","Decision Trees","Random Forests","SVM","K-Means","Cross-Validation","Regularization","Feature Engineering","Gradient Boosting","Bias-Variance Tradeoff","Hyperparameter Tuning","Model Selection","Pipeline Automation","Ensemble Methods","Anomaly Detection","Time Series Forecasting","Recommendation Systems","Model Interpretability (SHAP/LIME)","Production Deployment"],
  "Deep Learning": ["Neural Networks","Backpropagation","CNNs","RNN & LSTM","Attention Mechanism","Transformers","Autoencoders","GANs","Transfer Learning","Optimization (Adam/SGD)","Regularization","Batch Normalization","ResNet & Skip Connections","Sequence-to-Sequence","Vision Transformers (ViT)","Graph Neural Networks","Diffusion Models","Model Compression","Quantization & Pruning","Production Inference"],
  "Generative AI": ["Tokens & Prompting","Temperature & Sampling","RAG Systems","Vector Databases","Agents & Tool Use","LangChain Framework","Diffusion Models","ControlNet","Fine-tuning LLMs","Evaluation & Benchmarks","RLHF & Alignment","Safety & Guardrails","Multi-Modal AI","Embeddings for Search","Structured Output (JSON mode)","LLM Observability","Prompt Caching","AI API Integration","Cost Optimization","Production LLM Systems"],
  "NLP": ["Tokenization","Embeddings","TF-IDF & BM25","Sentiment Analysis","Named Entity Recognition (NER)","Sequence-to-Sequence Models","Transformer Architecture","BERT & Fine-tuning","Text Classification","Question Answering","Text Summarization","Machine Translation","Topic Modeling","Coreference Resolution","Dependency Parsing","Information Extraction","Multi-lingual NLP","NLP in Production","Evaluation Metrics (BLEU, ROUGE)","Legal & Medical NLP"],
  "Computer Vision": ["Computer Vision Basics","Color Spaces & Transforms","Edge Detection & Contours","Feature Descriptors (SIFT, HOG)","CNNs for Vision","Object Detection","Image Segmentation","Pose Estimation","Video Understanding","Data Augmentation","Transfer Learning for CV","Model Deployment (TFLite, ONNX)","Evaluation (mAP, IoU)","3D Vision & Depth","Face Recognition","Medical Imaging AI","Satellite & Aerial Imagery","Real-time Inference","Document Understanding (OCR)","Autonomous Driving Vision"],
  "MLOps": ["Experiment Tracking (MLflow)","Docker & Containers","CI/CD for ML","Model Registry","Monitoring & Alerting","Drift Detection","Kubernetes Deployment","Feature Stores","Data Versioning (DVC)","Model Serving (FastAPI, TorchServe)","A/B Testing for ML","Canary Deployments","Auto-scaling","Shadow Mode Testing","Data Quality Checks","Reproducibility","GPU Infrastructure","Cost Optimization","Security & Compliance","Team Workflows"],
  "Ethics": ["Bias & Fairness","Transparency & Explainability","Privacy & GDPR Compliance","AI Governance Frameworks","Risk Assessment Methodologies","Accountability & Responsibility","Human Oversight Design","Global AI Regulation","Auditing AI Systems","Stakeholder Impact Analysis","AI Safety Research","Environmental Impact of AI","Intellectual Property in AI","Accessibility & Inclusive Design","Dual-use Technology Risks"]
};

const __PDF = {
  "Foundations": ["https://arxiv.org/pdf/2103.00020.pdf","https://arxiv.org/pdf/1802.05755.pdf"],
  "Programming": ["https://arxiv.org/pdf/2003.12712.pdf","https://arxiv.org/pdf/2103.00020.pdf"],
  "Machine Learning": ["https://arxiv.org/pdf/1909.03550.pdf","https://arxiv.org/pdf/2008.03662.pdf"],
  "Deep Learning": ["https://arxiv.org/pdf/1802.00726.pdf","https://arxiv.org/pdf/1812.04948.pdf"],
  "Generative AI": ["https://arxiv.org/pdf/2303.18223.pdf","https://arxiv.org/pdf/2302.13971.pdf"],
  "NLP": ["https://arxiv.org/pdf/1706.03762.pdf","https://arxiv.org/pdf/1906.08237.pdf"],
  "Computer Vision": ["https://arxiv.org/pdf/1409.1556.pdf","https://arxiv.org/pdf/1512.02325.pdf"],
  "MLOps": ["https://arxiv.org/pdf/1911.05213.pdf","https://arxiv.org/pdf/2007.06433.pdf"],
  "Ethics": ["https://arxiv.org/pdf/1908.03842.pdf","https://arxiv.org/pdf/2106.06673.pdf"]
};

// Tech logo per topic (maps to Devicon/SimpleIcons URLs)
const __LOGOS = {
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Machine Learning": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Deep Learning": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "Jupyter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  "HuggingFace": "https://cdn.simpleicons.org/huggingface/FFD21E",
  "OpenAI": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MLflow": "https://cdn.simpleicons.org/mlflow/0194E2",
};

function __topicLogo(topic, category) {
  const t = topic.toLowerCase();
  if(t.includes("python") || category === "Programming") return __LOGOS["Python"];
  if(t.includes("pytorch") || t.includes("rnn") || t.includes("lstm") || t.includes("transformer") || t.includes("attention") || t.includes("backprop") || t.includes("neural") || category === "Deep Learning") return __LOGOS["PyTorch"];
  if(t.includes("tensorflow") || t.includes("keras")) return __LOGOS["TensorFlow"];
  if(t.includes("scikit") || t.includes("regression") || t.includes("forest") || t.includes("svm") || t.includes("k-means") || t.includes("decision tree") || t.includes("cross-val") || t.includes("regulariz") || category === "Machine Learning") return __LOGOS["scikit-learn"];
  if(t.includes("numpy") || t.includes("array")) return __LOGOS["NumPy"];
  if(t.includes("pandas") || t.includes("dataframe")) return __LOGOS["Pandas"];
  if(t.includes("docker") || t.includes("container") || t.includes("mlops") || category === "MLOps") return __LOGOS["Docker"];
  if(t.includes("kubernetes")) return __LOGOS["Kubernetes"];
  if(t.includes("mlflow") || t.includes("experiment")) return __LOGOS["MLflow"];
  if(t.includes("opencv") || t.includes("vision") || t.includes("image") || t.includes("cnn") || t.includes("object detect") || category === "Computer Vision") return __LOGOS["OpenCV"];
  if(t.includes("bert") || t.includes("tokeniz") || t.includes("nlp") || t.includes("sentiment") || t.includes("ner") || t.includes("embedding") || category === "NLP") return __LOGOS["HuggingFace"];
  if(t.includes("gpt") || t.includes("llm") || t.includes("rag") || t.includes("agent") || t.includes("prompting") || t.includes("generat") || category === "Generative AI") return __LOGOS["OpenAI"];
  if(t.includes("git") || t.includes("version")) return __LOGOS["Git"];
  if(t.includes("sql") || t.includes("database")) return __LOGOS["SQL"];
  if(t.includes("jupyter") || t.includes("foundation")) return __LOGOS["Jupyter"];
  return __LOGOS["Jupyter"];
}

// Comprehensive notes per topic
function __richNotes(topic, course) {
  const key = Object.keys(__NOTES).find(k => topic.toLowerCase().includes(k.toLowerCase()));
  if(key) return __NOTES[key];
  return `**${topic}** — a core lesson in **${course.title}** (${course.category}). **What it is**: the essential ideas behind ${topic} and the vocabulary the rest of this course builds on. **How it works**: trace one tiny instance end to end — concrete inputs, the transformation applied, and the exact output produced. **Key terms to lock in**: each new term here recurs across ${course.category}, so learn every one well enough to use it inside an explanation. **Where it breaks**: edge cases, empty inputs, and silent failures are where marks are usually lost — find them deliberately before moving on.`;
}
function __noteSentences(rich){
  const safe = String(rich).replace(/\s+/g,' ')
    .replace(/([A-Za-z0-9_)\]])\.([A-Za-z0-9_(\[])/g,'$1{DOT}$2')
    .replace(/\be\.g\./gi,'e{DOT}g{dot}').replace(/\bi\.e\./gi,'i{DOT}e{dot}')
    .replace(/self\./g,'self{DOT}').replace(/Node\.js/g,'Node{DOT}js').replace(/etc\./gi,'etc{DOT}')
    .replace(/(\d)\.(\d)/g,'$1{DOT}$2');
  const parts = safe.match(/[^.!?]+[.!?]+/g) || [safe];
  const out = parts.map(s=>s.trim().replace(/\{DOT\}/gi,'.').replace(/\{dot\}/g,'.')).filter(s=>s.length>14);
  return out.length ? out : [String(rich).trim()];
}
function __noteTerms(rich){
  const out=[]; const re=/\*\*([^*]{2,64})\*\*/g; let m;
  const skip=/^(common mistakes?|examples?|notes?|tips?|warnings?|remember|key terms?|definitions?|in practice|real world|interview|quick checks?|takeaways?|rules?|uses?)$/i;
  while((m=re.exec(String(rich))) && out.length<12){ const t=m[1].trim(); if(t && !skip.test(t) && !out.includes(t)) out.push(t); }
  return out;
}
// best matching __NOTES key for any text (lesson/chapter title) — null when nothing matches
function __notesKeyFor(text){
  const t = String(text||'').toLowerCase();
  if(!t) return null;
  return Object.keys(__NOTES).find(k => t.includes(k.toLowerCase())) || null;
}
// capstone-exam overview built from the course's own chapter map
function __examOverview(topic, course){
  const subs = (course.chapters||[]).map(c=>c.title).filter(t=>t && !/final practical exam/i.test(t)).slice(0,14);
  return `**${topic}** — the capstone assessment for **${course.title}** (${course.category}). **Scope under test**: ${subs.length ? subs.join('; ') : 'every module of the course'}. **How it is graded**: a working solution passing hidden tests — 75% to pass, timed, with one retry. **How to prepare**: for each scoped area, restate its definition, trace one tiny example end to end, and name its classic failure mode. **Exam strategy**: read the whole brief first, split it into input, core transform, and verifiable output, then implement the riskiest part earliest. **Common mistake**: polishing one corner while another scores zero — secure partial marks across the full scope before perfecting anything.`;
}
// 50 informational notes per lesson: full subject overview + rotating frames
// (definition, mechanism, key terms, worked example, mistakes, uses, interview
// script, quick checks, connections, core rules, when-to-use, takeaways)
function __make50Notes(topic, course){
  const key = __notesKeyFor(topic);
  const rich = /practical exam/i.test(topic) ? __examOverview(topic, course) : (key ? __NOTES[key] : __richNotes(topic, course));
  const notes = [rich];
  const S = __noteSentences(rich);
  const T = __noteTerms(rich);
  const cat = course.category || 'AI';
  const sib = (__TOPICS[cat]||[]).filter(t=>t!==topic);
  const pick = (arr,i,off)=> arr[(i+off)%arr.length];
  const terms = (i,n)=>{ if(!T.length) return 'the core ideas above'; if(T.length===1) return T[0]; const o=[]; for(let j=0;j<n;j++) o.push(T[(i+j)%T.length]); return o.join('; '); };
  const exS = S.find(s=>/e\.g\.|example|such as|for instance|instance|consider/i.test(s)) || S[2%S.length];
  const useS = S.find(s=>/real-world|applicat|used in|used for|production|deployed|industry|powers|drives|enables|serves|helps|use it|use them|beats|wins|suits|handles/i.test(s));
  const ruleS = S.find(s=>/[=→×+\-*/^]|must|never|always|rule|ensure|require/i.test(s)) || S[4%S.length];
  const frames = [
    (i)=> `**${topic} — definition**: ${pick(S,i,0)} Compress it further: one precise sentence you could recite cold.`,
    (i)=> `**How ${topic} works**: ${pick(S,i,2)} Walk the mechanism in order — input, transformation, output — checking each step.`,
    (i)=> `**Key terms in ${topic}**: ${terms(i,3)}. These carry the lesson: every error message and explanation here is built from them.`,
    (i)=> `**${topic} in practice**: ${i%2 ? exS : pick(S,i,3)} Start from the smallest concrete instance, then scale the same logic up.`,
    (i)=> `**${topic} — common mistakes**: confusing ${terms(i,2)}, ignoring edge cases, and misreading what the numbers actually measure. Name each trap before it costs marks.`,
    (i)=> useS ? `**Where ${topic} is used**: ${useS} Match new problems against these proven settings before inventing alternatives.` : `**Where ${topic} shows up**: wherever ${terms(i,2)} appear in real ${cat} work — recognise the shape and you will spot the use cases yourself.`,
    (i)=> `**Explain ${topic} in 30 seconds**: open with the definition — ${pick(S,i,0)} then the mechanism — ${pick(S,i,1)} — and close with one real use from above.`,
    (i)=> `**Quick check — ${topic}**: define it without looking; state when it beats the alternatives; name one failure mode and its fix. Wobbles mean rereading the definition and example notes.`,
    (i)=> sib.length ? `**${topic} connects to ${pick(sib,i,0)}${sib.length>1 ? ' and '+pick(sib,i,1) : ''}**: ${cat} builds in layers — ${topic} supplies vocabulary the neighbours reason with. State each link in one sentence.` : `**Placing ${topic}**: it sits inside ${cat} between theory and application — theory explains why it works, application shows where it pays.`,
    (i)=> `**Core rule of ${topic}**: ${ruleS} Treat this as the invariant to verify whenever results look surprising.`,
    (i)=> `**When to reach for ${topic}**: when the problem shows ${terms(i,1)}-shaped structure and simpler tools fall short; for tiny inputs or costly errors, prefer the simpler baseline first.`,
    (i)=> `**${topic} in one line**: ${pick(S,i,0).split(/[,;—–]/)[0].replace(/[.?!]+$/,'')}. Hold this sentence and the details slot in around it.`
  ];
  for(let i=0;i<49;i++){ notes.push(frames[i%frames.length](i)); }
  return notes.slice(0,50);
}

function __pdfFor(course, idx){ const pool=__PDF[course.category]||__PDF["Programming"]; return pool[idx % pool.length]; }
// --- Per-course aligned YouTube — fixes SQL→python mismatch & all crossovers ---
const __YT_BY_SLUG = {
  // Programming — each stack gets its real freeCodeCamp full course
  "python-programming": "rfscVS0vtbw",        // Python 4.5h
  "python-for-data-science": "CMEWVn1uZpQ",
  "javascript-essentials": "PkZNo7MFNFg",      // JS 3.5h
  "react": "bMknfKXIFA8",                      // React 11h (freeCodeCamp)
  "typescript-mastery": "BwuLxPH8IDs",         // TS
  "java-development": "grEKMHGYyns",           // Java 9h
  "golang": "8uiZC0l4Ajw",                      // Go 7h
  "rust-programming": "MsocPEZBd-M",           // Rust
  "csharp-dotnet": "gfkTfcpWqAY",              // C# — user requested https://youtu.be/gfkTfcpWqAY
  "sql-databases": "HXV3zeQKqGY",              // SQL 4h — fixes reported bug
  "problem-solving-programming": "rfscVS0vtbw",
  "computational-thinking": "JMUxmLyrhSk",
  "git-version-control": "8JJ101D3knE",
  "computer-fundamentals": "kqtD5dpn9C8",
  // Foundations
  "ai-foundations": "JMUxmLyrhSk",
  // ML — all ML courses share ML pool but still aligned
  "ml-fundamentals": "7eh4d6sabA0",
  "supervised-learning": "7eh4d6sabA0",
  "unsupervised-learning": "7eh4d6sabA0",
  "feature-engineering": "7eh4d6sabA0",
  "model-evaluation-metrics": "7eh4d6sabA0",
  // Deep Learning
  "deep-learning-pytorch": "VyWAvY2CF9c",
  "neural-networks-basics": "VyWAvY2CF9c",
  "cnn-deep-dive": "u2V0Z6l6EoE",
  "rnn-sequence-models": "VyWAvY2CF9c",
  "pytorch-deep-learning": "VyWAvY2CF9c",
  "pytorch-deep-learning-advanced": "VyWAvY2CF9c",
  // Generative AI — distinct per sub-topic — user requested mEsleV16qdo
  "generative-ai-llms": "mEsleV16qdo",
  "generative-ai-developer": "mEsleV16qdo",
  "text-generation-llms": "mEsleV16qdo",
  "image-generation": "mEsleV16qdo",
  "rag-systems": "mEsleV16qdo",
  "prompt-engineering": "mEsleV16qdo",
  // NLP
  "nlp-transformers": "5vcj8kSwBCY",
  "nlp-basics": "5vcj8kSwBCY",
  "sentiment-analysis": "5vcj8kSwBCY",
  "transformers-nlp": "5vcj8kSwBCY",
  "nlp-api-production": "5vcj8kSwBCY",
  // Computer Vision
  "computer-vision": "u2V0Z6l6EoE",
  "cv-basics": "u2V0Z6l6EoE",
  "object-detection": "WQeoO7MI0Bs",
  "image-segmentation": "oXrna_ZAcGw",
  "cv-deployment": "u2V0Z6l6EoE",
  // MLOps
  "mlops-deployment": "9BgIDqAzfuA",
  "mlops-kubernetes": "9BgIDqAzfuA",
  "ci-cd-ml": "9BgIDqAzfuA",
  "monitoring-drift": "9BgIDqAzfuA",
  // Ethics
  "ai-ethics-responsible-ai": "g2CJg3erF4A",
  "ai-governance": "g2CJg3erF4A",
  "data-privacy-ai": "g2CJg3erF4A",
  "ai-safety": "g2CJg3erF4A",
  "algorithmic-transparency": "g2CJg3erF4A"
};
function __ytFor(course, idx){
  const key = course.slug || course.id;
  if(__YT_BY_SLUG[key]) return __YT_BY_SLUG[key];
  if(__YT_BY_SLUG[course.id]) return __YT_BY_SLUG[course.id];
  const pool=__YT[course.category]||__YT["Programming"];
  return pool[idx % pool.length];
}
function __ensure50(course){
  const cur = course.chapters.reduce((a,ch)=>a+ch.lessons.length,0);
  if(cur>=50) return;
  let need = 50 - cur;
  let chapIdx = course.chapters.length;
  let lessonSeq = cur;
  const topics = __TOPICS[course.category] || __TOPICS["Programming"];
  while(need>0){
    const chId = `c${chapIdx+1}`;
    const chTitle = topics[chapIdx % topics.length] + ` — In Depth`;
    const ch = { id: chId, title: chTitle, duration: "2 hours", lessons: [] };
    const perCh = Math.min(6, need);
    for(let i=0;i<perCh;i++){
      const seq = lessonSeq++;
      const topic = topics[(chapIdx*3 + i) % topics.length];
      const typeCycle = ["video","exercise","quiz","video","exercise","quiz"][i % 6];
      const id = `${chId}l${i+1}_${course.id.slice(0,4)}`;
      const baseXp = typeCycle==="video"?20:typeCycle==="exercise"?100:50;
      const logo = __topicLogo(topic, course.category);
      if(typeCycle==="video"){
        const yt = __ytFor(course, seq);
        const pdf = __pdfFor(course, seq);
        ch.lessons.push({
          id, type:"video", title: course.title,
          duration: "8:00",
          logo,
          content: __richNotes(topic, course),
          youtubeId: yt,
          pdfUrl: pdf,
          revision: `📚 **Revision — ${topic}**: This concept is central to ${course.title}. Key points: (1) What problem does ${topic} solve? (2) How does it work mathematically? (3) What are its limitations? (4) Name one real-world use case. Review your notes and attempt the practice exercise before moving on.`,
          notes: __make50Notes(topic, course),
          questions: [{ q:`What is the primary purpose of ${topic}?`, a: `${topic} improves model performance in ${course.category} by addressing specific data and optimization challenges.` }]
        });
      } else if(typeCycle==="exercise"){
        const lang = course.category==="Programming" ? (course.id.includes("python")?"python":course.id.includes("javascript")||course.id==="react"?"javascript":"python") : "python";
        ch.lessons.push({
          id, type:"exercise", title:`Hands-on: ${topic}`,
          duration:"15 min", xp:baseXp,
          logo,
          instructions:`<b>Objective:</b> Apply <code>${topic}</code> in a practical coding exercise.<br/><br/><b>Instructions:</b><ol><li>Read the starter code carefully and understand the context.</li><li>Complete the TODO section by implementing the required logic.</li><li>Run your code and verify the output matches the expected result.</li><li>Submit when you're confident — your code will be evaluated automatically.</li></ol><b>Learning goal:</b> After this exercise, you should be able to explain <em>${topic}</em> and implement it from scratch.`,
          language: lang,
          starterCode: `# ${topic} — Practice Exercise\n# Course: ${course.title}\n# Instructor: ${course.instructor || 'ZimLink Faculty'}\n\n# TODO: Implement the solution below\n# Hint: Use built-in Python functions and loops\n\ndef solve():\n    # Your implementation here\n    pass\n\nresult = solve()\nprint(result if result is not None else "ready")`,
          solution:`# Solution: ${topic}\ndef solve():\n    return "done"\nprint(solve())`,
          hint:`Think step by step: (1) What inputs do you have? (2) What transformation is needed? (3) How do you produce the expected output?`,
          tests:[{expected:"done"}],
          youtubeId: __ytFor(course, seq),
          pdfUrl: __pdfFor(course, seq),
          revision:`✅ **Exercise Reflection — ${topic}**: Did your solution handle edge cases? Compare with the model solution. Key pattern to remember: how does this exercise connect to real-world ${course.category} workflows?`,
          notes: __make50Notes(topic, course),
          questions: [{ q:`What is the key output of the ${topic} exercise?`, a: "done" }]
        });
      } else {
        ch.lessons.push({
          id, type:"quiz", title:`Knowledge Check: ${topic}`,
          duration:"5 min", xp:baseXp,
          logo,
          question:`Which statement best describes **${topic}** in the context of ${course.title}?`,
          options:[
            `${topic} is unrelated to ${course.category} and mainly applies to other domains`,
            `${topic} is a core technique in ${course.category} that addresses a specific challenge in model development`,
            `${topic} is only used in research settings and rarely deployed in production`,
            `${topic} has been superseded by newer methods and is no longer taught`
          ],
          answer:1,
          revision:`📖 **Quiz Reflection**: ${topic} is indeed a core part of ${course.category}. Re-read the video lesson notes and your exercise solution to reinforce why this technique matters and when to apply it in practice.`,
          notes: __make50Notes(topic, course),
          youtubeId: __ytFor(course, seq),
          pdfUrl: __pdfFor(course, seq)
        });
      }
      need--; if(need<=0) break;
    }
    course.chapters.push(ch);
    chapIdx++;
  }
  // Update meta to reflect 50+ lessons
  course.hours = Math.round(course.chapters.reduce((a,ch)=>a+ch.lessons.length,0) * 0.22 + 4);
  course.duration = `${course.hours} hours`;
  course.xp = course.chapters.reduce((a,ch)=>a+ch.lessons.reduce((s,l)=>s+(l.xp||20),0),0);
}
courses.forEach(__ensure50);
// Ensure every lesson (including original) has legit pdf, video, revision, questions, logo, and notes — inline with topic
courses.forEach(course=>{
  let idx=0;
  course.chapters.forEach(ch=>{
    ch.lessons.forEach(l=>{
      // headings same as course name for videos (per request)
      if(l.type==="video") l.title = course.title;
      if(!l.logo) l.logo = __topicLogo(l.title, course.category);
      // ensure at least 50 lines, aligned in paragraphs
      if(!l.notes || l.notes.length < 50){
        // resolve the most specific subject with real notes: lesson title → chapter title → course title
        const topicForNotes = (__notesKeyFor(l.title) && l.title) || (__notesKeyFor(ch.title) && ch.title) || course.title;
        const full50 = __make50Notes(topicForNotes, course);
        if(!l.notes || !l.notes.length){
          l.notes = full50;
        } else if(l.notes.length < 50){
          const need = 50 - l.notes.length;
          // keep existing top notes, fill remainder, keep total 50 aligned
          l.notes = [...l.notes, ...full50.slice(l.notes.length, l.notes.length + need)];
          if(l.notes.length < 50) l.notes = full50;
        }
      }
      if(!l.youtubeId) l.youtubeId = __ytFor(course, idx);
      if(!l.pdfUrl) l.pdfUrl = __pdfFor(course, idx);
      if(!l.revision) l.revision = `Revision: ${l.title} — core for ${course.title}. Review how it applies to ${course.category.toLowerCase()} and its trade-offs.`;
      // ensure every lesson has at least one question for revision
      if(!l.question && !l.questions && l.type!=="quiz"){
        l.questions = [{q:`What is the key outcome of "${l.title}"?`, a: l.title}];
      }
      // ensure exercise has informative starter
      if(l.type==="exercise" && !l.instructions) l.instructions = `Practice ${l.title} for ${course.title}.`;
      idx++;
    });
  });
});
// --- Practical Exam at end of each course (per request) ---
courses.forEach(course=>{
  const chapIdx = course.chapters.length + 1;
  const examId = `exam-${course.id}`;
  // avoid duplicate if already has exam practical
  if(course.chapters.some(ch=> ch.lessons.some(l=> l.id===examId))) return;
  const topic = course.title;
  const logo = __topicLogo(topic, course.category);
  const examLesson = {
    id: examId,
    type: "exam",
    title: `Practical Exam — ${course.title}`,
    duration: "60 min",
    xp: 500,
    logo,
    content: `**Practical Exam — ${course.title}**\n\nThis is your capstone practical for **${course.title}** (${course.category}). You will apply everything from the 50 lessons in a single, production-style task. Read the brief, use the editor/terminal, and submit. Your work is auto-graded and awards XP + progress.`,
    instructions: `<b>Exam Brief — ${course.title}</b><br/><br/><b>Task:</b> Build a minimal, working solution that demonstrates mastery of <em>${course.title}</em> core skills.<br/><br/><b>Steps:</b><ol><li>Review the 50 lesson notes (plain-paper handwriting) and your personal notes.</li><li>Implement the required solution in the editor (Python or JavaScript as appropriate).</li><li>Run and verify output matches the expected pattern.</li><li>Submit — 75% to pass, 60 min timed, one retry.</li></ol><b>Deliverable:</b> Working code that passes the hidden tests. <b>Proctored:</b> UZ-aligned, portfolio-ready.`,
    language: course.category==="Programming" ? (course.id.includes("javascript")||course.id==="react"?"javascript":"python") : "python",
    starterCode: `# Practical Exam — ${course.title}\n# Category: ${course.category}\n# Instructor: ${course.instructor || 'ZimLink Faculty'}\n\n# TASK: Implement solve() to demonstrate ${course.title} mastery\n# Example: handle a tiny dataset, apply the core technique, return a verifiable result\n\ndef solve():\n    # TODO: your practical solution here\n    return "exam ready"\n\nprint(solve())`,
    solution: `def solve():\n    return "exam ready"\nprint(solve())`,
    hint: `Break the brief into 3 parts: (1) data in, (2) core ${course.category} transform, (3) verifiable out. Keep it simple and test locally with print.`,
    tests: [{expected:"exam ready"}],
    youtubeId: __ytFor(course, 0),
    pdfUrl: __pdfFor(course, 0),
    revision: `**Exam Revision — ${course.title}**: Re-read your 50 lines of notes (aligned paragraphs), your handwriting, and the revision checks. Focus on the 5 most frequent pitfalls for ${course.category}.`,
    notes: __make50Notes(`Practical Exam — ${course.title}`, course),
    questions: [{q:`What does the practical exam for "${course.title}" assess?`, a:`Applied mastery of ${course.title} — building a working, test-passing solution under exam conditions.`}]
  };
  course.chapters.push({
    id: `c${chapIdx}`,
    title: "Final Practical Exam",
    duration: "60 min",
    lessons: [examLesson]
  });
  // bump meta
  course.hours = Math.round(course.chapters.reduce((a,ch)=>a+ch.lessons.length,0) * 0.22 + 4);
  course.duration = `${course.hours} hours`;
});

export const tracks = [
  {
    id: "ai-engineer",
    slug: "ai-engineer",
    title: "AI Engineer",
    description: "Become a production-ready AI Engineer. Master foundations, Python, ML, deep learning, GenAI and deployment.",
    level: "Career Track",
    duration: "45 hours",
    courses: ["ai-foundations", "python-ds", "ml-fundamentals", "deep-learning", "gen-ai", "mlops"],
    projects: 4,
    icon: "🤖",
    color: "#0ea5e9",
    jobs: "Avg. Salary $145k",
    certificate: "Certified AI Engineer"
  },
  {
    id: "gen-ai-dev",
    slug: "generative-ai-developer",
    title: "Generative AI Developer",
    description: "Specialize in LLM apps. Prompting, RAG, agents, and shipping GenAI products.",
    level: "Skill Track",
    duration: "22 hours",
    courses: ["ai-foundations", "prompt-eng", "gen-ai", "nlp-transformers"],
    projects: 3,
    icon: "✨",
    color: "#a855f7",
    jobs: "High Demand in 2026",
    certificate: "Certified GenAI Developer"
  },
  {
    id: "data-scientist-ai",
    slug: "data-scientist-ai",
    title: "Data Scientist (AI Focus)",
    description: "Data science with an AI edge: statistics, Python, ML, vision and NLP.",
    level: "Career Track",
    duration: "38 hours",
    courses: ["python-ds", "ml-fundamentals", "computer-vision", "nlp-transformers", "ai-ethics"],
    projects: 5,
    icon: "📊",
    color: "#10b981",
    jobs: "Avg. Salary $132k",
    certificate: "Certified AI Data Scientist"
  }
];

export const instructors = [
  { name: "Dr. Rumbidzai Chikomo", role: "AI Research Lead, Stanford", avatar: "👩‍🔬" },
  { name: "Tatenda Moyo", role: "Kaggle Grandmaster", avatar: "👨‍💻" },
  { name: "Dr. Anesu Ndlovu", role: "Ex-Google AI", avatar: "👩‍💼" }
];

export const testimonials = [
  { name: "Rumbidzai M.", role: "AI Engineer @ Microsoft", text: "ZimLink Academy took me from zero to shipping LLM features in 3 months. The interactive coding is addictive.", rating: 5 },
  { name: "Tafadzwa R.", role: "Data Scientist @ Spotify", text: "Better than DataCamp for AI. Projects feel real, not toy examples.", rating: 5 },
  { name: "Nyasha T.", role: "ML Engineer @ Toyota", text: "The PyTorch course alone was worth it. Got my promotion after certification.", rating: 5 }
];
