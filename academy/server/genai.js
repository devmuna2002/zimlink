export const genaiCourses = [
  {
    id: "text-generation-llms",
    slug: "text-generation-llms",
    title: "Text Generation with LLMs",
    short: "Build and deploy LLM text-generation applications responsibly.",
    description: "Learn how large language models generate text — tokens, sampling, temperature, and prompt strategies — and build a practical text-generation service with proper guardrails and evaluation.",
    level: "Intermediate",
    duration: "7 hours",
    hours: 7,
    xp: 2100,
    category: "Generative AI",
    instructor: "Dr. Anesu Ndlovu",
    instructorTitle: "Ex-Google AI",
    instructorBio: "Applied NLP scientist who has shipped LLM products and evaluates them rigorously.",
    instructorAvatar: "person-badge",
    rating: 4.8,
    students: 33120,
    icon: "bi-chat-left-text",
    image: "tensorflow",
    color: "#a855f7",
    tags: ["LLM", "Text Generation", "Prompting", "Tokens", "Evaluation"],
    prerequisites: ["prompt-eng", "gen-ai"],
    learningOutcomes: [
      "Explain tokens, context windows, and autoregressive generation",
      "Control output with temperature, top-p, and sampling",
      "Write effective prompts and system instructions",
      "Mitigate hallucination and bias in outputs",
      "Evaluate generated text quality with metrics and human checks"
    ],
    skills: ["Tokenization", "Sampling", "Prompting", "Guardrails", "Evaluation"],
    difficulty: "Intermediate — Python + basic GenAI concepts",
    resources: [
      { type: "github", title: "LLM-TextGen-Lab", url: "https://github.com/zimlink/llm-textgen-lab" },
      { type: "pdf", title: "Sampling Parameter Guide", url: "/assets/sampling-params.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-TG-511",
      title: "Certificate of Competence — Text Generation with LLMs",
      level: "Level 4",
      eqf: "EQF 5",
      rqf: "RQF Level 4",
      credits: 11,
      notionalHours: 28,
      validityYears: 2,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 4 / EQF 5 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "TG-511-C1", title: "Tokens & generation", weight: 30 },
        { code: "TG-511-C2", title: "Sampling & prompting", weight: 35 },
        { code: "TG-511-C3", title: "Guardrails & evaluation", weight: 35 }
      ],
      examId: "exam-text-generation"
    },
    chapters: [
      {
        id: "c1",
        title: "How LLMs Generate Text",
        duration: "2.5 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Tokens & the Transformer", duration: "10:00", content: "Tokenization, context windows, and next-token prediction." },
          { id: "c1l2", type: "quiz", title: "Tokens", duration: "4 min", xp: 50, question: "LLMs generate text by predicting:", options: ["The next token given previous tokens", "The entire paragraph at once", "Random words", "Future tokens only"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Prompting & Sampling",
        duration: "2.5 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Temperature & top-p", duration: "10:00", content: "How temperature and top-p trade creativity for coherence." },
          { id: "c2l2", type: "exercise", title: "Summarize with System Prompt", duration: "12 min", xp: 110, instructions: "Build a text variable and a system-style instruction string, concatenate them, and print the prompt that includes the instruction 'Be concise'.", language: "python", starterCode: "system = 'Be concise.'\ntext = 'The quick brown fox jumps over the lazy dog.'\nprompt = system + ' Summarize: ' + text\nprint(prompt)", solution: "system = 'Be concise.'\ntext = 'The quick brown fox jumps over the lazy dog.'\nprompt = system + ' Summarize: ' + text\nprint(prompt)", hint: "Concatenate system + text", tests: [{ expected: "Be concise. Summarize: The quick brown fox jumps over the lazy dog." }] }
        ]
      },
      {
        id: "c3",
        title: "Guardrails & Evaluation",
        duration: "2 hours",
        lessons: [
          { id: "c3l1", type: "video", title: "Catching Hallucinations", duration: "9:00", content: "Grounding, citations, and evaluation metrics for generated text." },
          { id: "c3l2", type: "quiz", title: "Evaluation", duration: "4 min", xp: 50, question: "Which is a NLG metric comparing generated vs reference text?", options: ["ROUGE", "IoU", "MSE", "Silhouette"], answer: 0 }
        ]
      }
    ],
    capstone: {
      id: "capstone-tg-511",
      title: "Summarization Service",
      description: "Build a document-summarization service with system prompts, configurable temperature/top-p, and a small ROUGE-based evaluation harness.",
      duration: "2.5 hours",
      xp: 600,
      requirements: ["Design system prompt", "Expose sampling params", "Add an input guardrail", "Evaluate on 10 samples"],
      deliverables: [{ type: "code", name: "app.py", description: "Summarization service" }, { type: "report", name: "eval.md", description: "ROUGE results" }]
    },
    advanced: {
      id: "adv-tg-511",
      title: "Advanced: Structured Output & Function Calling",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Reliable Structured Output", duration: "10:00", content: "Enforcing JSON/structured schemas with constrained decoding." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Sampling Deep Dive", duration: "15:00", instructor: "Dr. Anesu Ndlovu", topic: "Generation" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["LLM Engineer", "NLP Engineer", "AI Developer"]
  },
  {
    id: "image-generation",
    slug: "image-generation",
    title: "Generative Image Models",
    short: "Create and control synthetic images with diffusion models.",
    description: "Understand how diffusion generation works, write effective image prompts, and fine-tune or condition models (LoRA, ControlNet) to produce consistent, controllable imagery.",
    level: "Advanced",
    duration: "8 hours",
    hours: 8,
    xp: 2400,
    category: "Generative AI",
    instructor: "Dr. Anesu Ndlovu",
    instructorTitle: "Ex-Google AI",
    instructorBio: "Vision-generation expert with diffusion-model deployment experience.",
    instructorAvatar: "person-badge",
    rating: 4.7,
    students: 24410,
    icon: "bi-image",
    image: "tensorflow",
    color: "#f5a623",
    tags: ["Diffusion", "Image Generation", "LoRA", "ControlNet", "Prompting"],
    prerequisites: ["gen-ai", "cnn-deep-dive"],
    learningOutcomes: [
      "Explain the diffusion forward/noising and reverse/denoising process",
      "Write effective, compositional image prompts",
      "Control generation with LoRA and ControlNet",
      "Tune seeds, CFG scale, and steps for quality",
      "Evaluate and responsibly label synthetic images"
    ],
    skills: ["Diffusion", "Prompting", "LoRA", "ControlNet", "Sampling"],
    difficulty: "Advanced — Python + DL concepts",
    resources: [
      { type: "github", title: "ImageGen-Lab", url: "https://github.com/zimlink/imagegen-lab" },
      { type: "pdf", title: "Prompt Engineering for Images", url: "/assets/image-prompts.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-IMG-512",
      title: "Certificate of Competence — Generative Image Models",
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
        { code: "IMG-512-C1", title: "Diffusion process", weight: 30 },
        { code: "IMG-512-C2", title: "Prompting & conditioning", weight: 40 },
        { code: "IMG-512-C3", title: "LoRA/ControlNet control", weight: 30 }
      ],
      examId: "exam-image-generation"
    },
    chapters: [
      {
        id: "c1",
        title: "How Diffusion Works",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Noise In, Image Out", duration: "10:00", content: "Forward noising, reverse denoising, and the U-Net/latent space." },
          { id: "c1l2", type: "quiz", title: "Diffusion", duration: "4 min", xp: 50, question: "Diffusion models are trained to:", options: ["Predict and remove noise", "Classify images", "Compress video", "Detect objects"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Prompting & Parameter Control",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "CFG, Steps & Seeds", duration: "10:00", content: "Guidance scale, sampling steps, and reproducible seeds." },
          { id: "c2l2", type: "exercise", title: "Craft a Prompt", duration: "11 min", xp: 100, instructions: "Build a positive prompt by joining subject, style, lighting, and quality tags, then print it.", language: "python", starterCode: "subject = 'a cozy cabin in snowy mountains'\nstyle = 'photorealistic, golden hour'\nquality = 'high detail'\nprompt = ', '.join([subject, style, quality])\nprint(prompt)", solution: "subject = 'a cozy cabin in snowy mountains'\nstyle = 'photorealistic, golden hour'\nquality = 'high detail'\nprompt = ', '.join([subject, style, quality])\nprint(prompt)", hint: "Join tags with ', '", tests: [{ expected: "a cozy cabin in snowy mountains, photorealistic, golden hour, high detail" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-img-512",
      title: "Brand-Style Image Library",
      description: "Generate a consistent set of images for a fictional brand using a fixed seed strategy and LoRA fine-tuning, documenting prompts, step, and CFG choices.",
      duration: "2.5 hours",
      xp: 650,
      requirements: ["Fix a style theme", "Use consistent seeds", "Document prompts", "Label synthetic output"],
      deliverables: [{ type: "code", name: "generate.py", description: "Generation script" }, { type: "report", name: "prompts.md", description: "Prompt log" }]
    },
    advanced: {
      id: "adv-img-512",
      title: "Advanced: ControlNet & Inpainting",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Structured Control", duration: "10:00", content: "Pose/edge conditioning with ControlNet and region-based inpainting." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Prompt Crafting Masterclass", duration: "16:00", instructor: "Dr. Anesu Ndlovu", topic: "Prompting" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["GenAI Engineer", "Creative Technologist", "CV Engineer"]
  },
  {
    id: "rag-systems",
    slug: "rag-systems",
    title: "Retrieval-Augmented Generation",
    short: "Ground LLM answers in your own data with RAG.",
    description: "Build RAG pipelines that answer from private documents: chunking, embeddings, vector search, reranking, and evaluation. Reduce hallucinations and cite sources like real production systems.",
    level: "Advanced",
    duration: "8 hours",
    hours: 8,
    xp: 2400,
    category: "Generative AI",
    instructor: "Tatenda Moyo",
    instructorTitle: "Senior Data Engineer",
    instructorBio: "Builds retrieval systems and shares production RAG patterns.",
    instructorAvatar: "python",
    rating: 4.8,
    students: 28970,
    icon: "bi-search-heart",
    image: "tensorflow",
    color: "#0ea5e9",
    tags: ["RAG", "Embeddings", "Vector Search", "Chunking", "Retrieval"],
    prerequisites: ["gen-ai", "text-generation-llms", "python-ds"],
    learningOutcomes: [
      "Explain RAG and when it beats pure prompting",
      "Chunk documents with overlap appropriate to the task",
      "Embed chunks and run vector similarity search",
      "Improve quality with reranking and hybrid search",
      "Evaluate retrieval and final-answer quality"
    ],
    skills: ["Chunking", "Embeddings", "Vector Search", "Reranking", "RAG Evaluation"],
    difficulty: "Advanced — Python + LLM concepts",
    resources: [
      { type: "github", title: "RAG-Playbook", url: "https://github.com/zimlink/rag-playbook" },
      { type: "dataset", title: "Sample Knowledge Base", url: "/datasets/kb-docs.zip" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-RAG-513",
      title: "Certificate of Competence — Retrieval-Augmented Generation",
      level: "Level 5",
      eqf: "EQF 6",
      rqf: "RQF Level 5",
      credits: 13,
      notionalHours: 32,
      validityYears: 2,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 5 / EQF 6 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "RAG-513-C1", title: "Chunking & embeddings", weight: 30 },
        { code: "RAG-513-C2", title: "Vector retrieval & reranking", weight: 40 },
        { code: "RAG-513-C3", title: "Evaluation & grounding", weight: 30 }
      ],
      examId: "exam-rag-systems"
    },
    chapters: [
      {
        id: "c1",
        title: "RAG Fundamentals",
        duration: "2.5 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Why Retrieve?", duration: "10:00", content: "Grounding answers, reducing hallucinations, and the retrieval-generation split." },
          { id: "c1l2", type: "quiz", title: "RAG Basics", duration: "4 min", xp: 50, question: "In RAG, embeddings are used to:", options: ["Find semantically similar chunks", "Replace the LLM", "Train a new model", "Compress audio"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Chunking & Vector Search",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Splitting Documents", duration: "10:00", content: "Chunk size, overlap, and structural splitting. Cosine similarity search." },
          { id: "c2l2", type: "exercise", title: "Cosine Similarity", duration: "12 min", xp: 110, instructions: "Compute cosine similarity between two tiny vectors and print it rounded to 3 decimals.", language: "python", starterCode: "import numpy as np\na=np.array([1,1,0]); b=np.array([1,0,0])\ncos=np.dot(a,b)/(np.linalg.norm(a)*np.linalg.norm(b))\nprint(round(cos,3))", solution: "import numpy as np\na=np.array([1,1,0]); b=np.array([1,0,0])\ncos=np.dot(a,b)/(np.linalg.norm(a)*np.linalg.norm(b))\nprint(round(cos,3))", hint: "dot/(norms)", tests: [{ expected: "0.707" }] }
        ]
      },
      {
        id: "c3",
        title: "Rerank & Evaluate",
        duration: "2.5 hours",
        lessons: [
          { id: "c3l1", type: "video", title: "Reranking Improves Precision", duration: "9:00", content: "Why rerank and how to evaluate hits@k and answer faithfulness." },
          { id: "c3l2", type: "quiz", title: "Evaluation", duration: "4 min", xp: 50, question: "Hit@k measures:", options: ["Whether a relevant doc is in the top k retrieved", "Model speed", "Cost per token", "Image resolution"], answer: 0 }
        ]
      }
    ],
    capstone: {
      id: "capstone-rag-513",
      title: "Document Q&A Bot",
      description: "Build a RAG chatbot over a company handbook: chunk, embed, retrieve with reranking, and answer grounded questions with citations.",
      duration: "2.5 hours",
      xp: 650,
      requirements: ["Chunk & embed documents", "Vector search + rerank", "Return grounded answers", "Evaluate 10 questions"],
      deliverables: [{ type: "code", name: "rag.py", description: "RAG pipeline" }, { type: "report", name: "eval.md", description: "Retrieval & answer quality" }]
    },
    advanced: {
      id: "adv-rag-513",
      title: "Advanced: Hybrid Search & Agents",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Hybrid Retrieval", duration: "10:00", content: "Combining BM25 and vector search with reciprocal-rank fusion." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "RAG in Production", duration: "16:00", instructor: "Tatenda Moyo", topic: "Retrieval" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["LLM Engineer", "GenAI Engineer", "ML Engineer"]
  }
];
