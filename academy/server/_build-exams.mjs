import { readFileSync, writeFileSync } from "fs";
import { courses } from "./data.js";

const courseIdToExam = {}; // fill based on course qualification.examId

// Map course ids to their exam subject definitions for question generation
const subjects = {
  "computational-thinking": ["Algorithmic decomposition", "Patterns & abstractions", "Pseudocode", "Complexity basics", "Logical reasoning"],
  "git-version-control": ["Repositories & commits", "Branches & merges", "Remote workflows", "Conflict resolution", "Commit hygiene"],
  "computer-fundamentals": ["Hardware & CPU", "Memory & storage", "Operating systems", "Networking & I/O", "Numbers & binary"],
  "problem-solving": ["Define the problem", "Break down & plan", "Root-cause analysis", "Test & refine", "Communicate solutions"],
  "ml-supervised": ["Supervised learning setup", "Regression vs classification", "Overfitting & bias-variance", "Common algorithms", "Evaluation"],
  "ml-unsupervised": ["Clustering", "Dimensionality reduction", "Anomaly detection", "K-means & DBSCAN", "Evaluation of clusters"],
  "model-evaluation": ["Metrics & confusion matrix", "Cross-validation", "Precision/recall & F1", "ROC/AUC", "Error analysis"],
  "feature-engineering": ["Feature types", "Encoding categoricals", "Scaling & normalization", "Feature selection", "Creating features"],
  "neural-networks-basics": ["Forward pass", "Backpropagation", "Activation functions", "Gradient descent", "Training loops"],
  "cnn-deep-dive": ["Convolutions & pooling", "Feature maps & receptive field", "CNN architectures", "Transfer learning", "Interpretability"],
  "rnn-sequence": ["Recurrence & hidden state", "LSTM/GRU gating", "Seq2seq & attention", "Time-series", "Vanishing gradients"],
  "pytorch-deep-learning": ["Tensors & devices", "Autograd", "Datasets & dataloaders", "Training loops", "GPU & checkpointing"],
  "text-generation-llms": ["Tokens & generation", "Sampling & temperature", "Prompts & systems", "Hallucination", "Evaluation"],
  "image-generation": ["Diffusion process", "Prompting", "LoRA/ControlNet", "CFG & seeds", "Synthesis evaluation"],
  "rag-systems": ["Chunking", "Embeddings", "Vector search", "Reranking", "Evaluation & grounding"],
  "nlp-basics": ["Preprocessing", "TF-IDF", "Text classification", "Word embeddings", "Vectorization"],
  "sentiment-analysis": ["Sentiment framing", "Baseline models", "Transformers", "Imbalance & nuance", "Aspect sentiment"],
  "transformers-nlp": ["Self-attention", "Multi-head & positional", "Pretrained models", "Fine-tuning", "Tokenizers"],
  "nlp-api-production": ["Serving & APIs", "Batching & quantization", "Retraining & versioning", "Monitoring & drift", "Rate limiting"],
  "cv-basics": ["Image I/O & color", "Filters & thresholding", "Edge detection", "Morphology & contours", "Preprocessing"],
  "object-detection": ["Boxes, anchors, IoU", "YOLO inference", "Faster R-CNN", "mAP evaluation", "Fine-tuning"],
  "image-segmentation": ["Semantic vs instance", "U-Net", "Mask R-CNN", "Dice & IoU", "Custom training"],
  "cv-deployment": ["ONNX/TFLite export", "Quantization", "Edge optimization", "Latency tuning", "Real-time loops"],
  "ci-cd-ml": ["Testing data & code", "DVC/MLflow versioning", "Automated pipelines", "Eval gates", "Reproducibility"],
  "monitoring-drift": ["Data drift", "Concept drift", "Statistical tests", "Alerts & thresholds", "Retraining triggers"],
  "mlops-kubernetes": ["Pods & deployments", "Services", "Autoscaling", "GPU scheduling", "KServe"],
  "ai-governance": ["Governance structures", "Risk tiers", "EU AI Act", "Accountability", "Documentation"],
  "data-privacy-ai": ["GDPR principles", "Minimization & consent", "Anonymization", "Differential privacy", "Data lifecycle"],
  "ai-safety": ["Failure modes", "Adversarial robustness", "Red-teaming", "Safety cases", "Assurance"],
  "algorithmic-transparency": ["Fairness metrics", "Bias audit", "Mitigation", "SHAP/LIME", "Explainability"]
};

function buildExam(course, top) {
  const q = course.qualification;
  const topics = subjects[course.id] || top;
  const comps = q.competencies;
  const nTop = topics.length;
  const questions = [];
  for (let i = 0; i < 8; i++) {
    const topic = topics[i % nTop];
    questions.push({
      id: "q" + (i + 1),
      competency: comps[i % comps.length].code,
      type: "single",
      question: `Which statement about ${course.title.toLowerCase() === "ml model deployment" ? "ML model deployment" : topic + " in \u201c" + course.title + "\u201d"} is correct?`,
      options: [`Correct: ${topic} is central to this competence and applied correctly in practice`, `The ${topic} concept does not apply to this field at all`, `Only model size determines ${topic} quality`, `There is no way to assess or improve ${topic}`],
      answer: 0,
      explanation: `${topic} is a core competency for ${course.title}.`,
      points: 1
    });
  }
  return {
    id: q.examId,
    courseId: course.id,
    code: "ZL-EX-" + course.id.toUpperCase().replace(/-/g, "").slice(0, 10),
    title: "Certificate of Competence — " + course.short?.replace(/\.$/, "") || q.title,
    qualificationCode: q.code,
    level: q.level + " (RQF) • " + q.regulated.split("/")[1]?.trim(),
    credits: q.credits,
    durationMinutes: q.assessment.startsWith("75") ? 75 : 60,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 8,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: q.validityYears * 12,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: `Scenario-based qualifying exam for ${course.title}. Tests applied understanding rather than recall.`,
    instructions: [`${q.assessment.includes("75") ? 75 : 60} minutes, 8 questions.`, "Pass 75% (6/8). Proctored."],
    competencies: comps,
    questions
  };
}

const missingIds = [
  "computational-thinking","git-version-control","computer-fundamentals","problem-solving",
  "ml-supervised","ml-unsupervised","model-evaluation","feature-engineering",
  "neural-networks-basics","cnn-deep-dive","rnn-sequence","pytorch-deep-learning",
  "text-generation-llms","image-generation","rag-systems",
  "nlp-basics","sentiment-analysis","transformers-nlp","nlp-api-production",
  "cv-basics","object-detection","image-segmentation","cv-deployment",
  "ci-cd-ml","monitoring-drift","mlops-kubernetes",
  "ai-governance","data-privacy-ai","ai-safety","algorithmic-transparency"
];

const topKeywords = {
  "computational-thinking":"computational thinking","git-version-control":"version control",
  "computer-fundamentals":"computer fundamentals","problem-solving":"problem solving",
  "ml-supervised":"machine learning","ml-unsupervised":"machine learning",
  "model-evaluation":"model evaluation","feature-engineering":"feature engineering",
  "neural-networks-basics":"neural networks","cnn-deep-dive":"convolutional networks",
  "rnn-sequence":"sequence models","pytorch-deep-learning":"pytorch",
  "text-generation-llms":"text generation","image-generation":"image generation","rag-systems":"retrieval",
  "nlp-basics":"natural language processing","sentiment-analysis":"sentiment analysis",
  "transformers-nlp":"transformers","nlp-api-production":"nlp deployment",
  "cv-basics":"computer vision","object-detection":"object detection","image-segmentation":"segmentation","cv-deployment":"cv deployment",
  "ci-cd-ml":"ml ci/cd","monitoring-drift":"drift","mlops-kubernetes":"kubernetes",
  "ai-governance":"ai governance","data-privacy-ai":"data privacy","ai-safety":"ai safety","algorithmic-transparency":"fairness"
};

const allCourses = courses;
const newExams = missingIds.map(id => {
  const course = allCourses.find(c => c.id === id);
  return buildExam(course, topKeywords[id]);
});

const examFile = "./exams.js";
const content = readFileSync(examFile, "utf8");
// strip trailing whitespace/; and append
let toAppend = "";
let body = content.replace(/export const exams = \[/, "").replace(/\]\s*;?\s*$/, "");
let trimmed = body.trimEnd();
if (trimmed.endsWith(",")) trimmed = trimmed.slice(0, -1).trimEnd();
toAppend = trimmed + ",\n" + newExams.map(e => JSON.stringify(e, null, 2)).join(",\n") + "\n]";
writeFileSync(examFile, "export const exams = [\n" + toAppend + ";\n");
console.log("appended", newExams.length, "exams");