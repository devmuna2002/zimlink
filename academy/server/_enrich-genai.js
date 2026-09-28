export const genaiEnrichment = {
  "gen-ai": {
    notes: {
      c1: "Generative AI refers to models that create new content — text, images, code, or audio — by learning patterns from training data. Key architectures include Transformers (for text), GANs and Diffusion Models (for images), and VAEs (for structured generation). The field has rapidly evolved from simple Markov chains to large-scale foundation models capable of producing human-quality outputs across modalities. The core idea is learning a probability distribution over the data and sampling from it to generate new instances.",
      c2: "The Transformer architecture underpins modern generative AI. Self-attention mechanisms let models weigh the relevance of every token in a sequence simultaneously, enabling parallel processing and long-range dependencies. Multi-head attention splits the representation into subspaces, each learning different relational patterns. Positional encodings inject sequence order information. The combination of these components allows Transformers to model complex linguistic and structural patterns far more efficiently than recurrent architectures.",
      c3: "Training generative models requires massive datasets and compute. Techniques like pre-training on unlabeled data followed by fine-tuning on specific tasks (transfer learning) make these models practical. RLHF (Reinforcement Learning from Human Feedback) aligns model outputs with human preferences. Scaling laws predict how model performance improves with more data, parameters, and compute. The interplay between these factors drives the development of ever-larger and more capable models."
    },
    exercises: [
      {
        id: "gen-ai-ex1",
        title: "Attention Score Calculation",
        description: "Compute a scaled dot-product attention score for a single query-key pair.",
        starterCode: "# Scaled dot-product attention\nquery = [1, 0, 1]\nkey = [0, 1, 1]\nd = len(query)\n\ndot_product = 0\nfor i in range(d):\n    dot_product = dot_product + query[i] * key[i]\n\nscaling_factor = d ** 0.5\nscore = dot_product / scaling_factor\nprint(score)",
        expected: "1.1547005383792515"
      },
      {
        id: "gen-ai-ex2",
        title: "Token Frequency Counter",
        description: "Given a tokenized sentence, count how many times the word 'the' appears.",
        starterCode: "tokens = [\"the\", \"cat\", \"sat\", \"on\", \"the\", \"mat\"]\ntarget = \"the\"\ncount = 0\nfor t in tokens:\n    if t == target:\n        count = count + 1\nprint(count)",
        expected: "2"
      },
      {
        id: "gen-ai-ex3",
        title: "Softmax Probability",
        description: "Compute the softmax of a simple logit vector.",
        starterCode: "import math\nlogits = [2.0, 1.0, 0.1]\n\nmax_logit = logits[0]\nfor i in range(len(logits)):\n    if logits[i] > max_logit:\n        max_logit = logits[i]\n\nexps_sum = 0\nfor i in range(len(logits)):\n    exps_sum = exps_sum + math.exp(logits[i] - max_logit)\n\nfirst_prob = math.exp(logits[0] - max_logit) / exps_sum\nprint(first_prob)",
        expected: "0.5354786858423298"
      }
    ],
    quizzes: [
      {
        id: "gen-ai-q1",
        question: "What mechanism allows Transformers to process all tokens in a sequence simultaneously?",
        options: ["Recurrent loops", "Self-attention", "Convolutional layers", "Pooling"],
        correct: 1
      },
      {
        id: "gen-ai-q2",
        question: "Which technique aligns a language model's outputs with human preferences?",
        options: ["Dropout", "Batch normalization", "RLHF", "Data augmentation"],
        correct: 2
      }
    ],
    projects: [
      {
        id: "gen-ai-p1",
        title: "Build a Simple Text Generator",
        description: "Implement a bigram language model that generates text by predicting the next token based on the previous one. Use Python dictionaries for transition probabilities and build a generation loop that samples from the distribution."
      }
    ]
  },

  "prompt-eng": {
    notes: {
      c1: "Prompt engineering is the practice of designing inputs to guide generative AI models toward desired outputs. Key strategies include zero-shot prompting (no examples), few-shot prompting (providing demonstrations), chain-of-thought prompting (step-by-step reasoning instructions), and system prompts (defining model behavior and constraints). Effective prompts are specific, structured, and include constraints on output format, tone, and length. Iterative testing and refinement of prompts is essential — small wording changes can dramatically affect output quality."
    },
    exercises: [
      {
        id: "prompt-eng-ex1",
        title: "Prompt Token Budget",
        description: "Calculate total token count using word splitting as an approximation.",
        starterCode: "system_prompt = \"You are a helpful assistant that answers in exactly 3 sentences.\"\nuser_message = \"What is machine learning?\"\n\ntotal_words = 0\nfor w in system_prompt.split():\n    total_words = total_words + 1\nfor w in user_message.split():\n    total_words = total_words + 1\nprint(total_words)",
        expected: "14"
      },
      {
        id: "prompt-eng-ex2",
        title: "Few-Shot Score Ranker",
        description: "Given a list of example scores, find the best few-shot candidate index.",
        starterCode: "examples = [\"A cat sat on a mat\", \"Dogs run in the park\", \"Birds fly over trees\"]\nscores = [8, 6, 9]\n\nbest_index = 0\nbest_score = scores[0]\ni = 1\nwhile i < len(scores):\n    if scores[i] > best_score:\n        best_score = scores[i]\n        best_index = i\n    i = i + 1\nprint(best_index)",
        expected: "2"
      },
      {
        id: "prompt-eng-ex3",
        title: "Prompt Overlap Check",
        description: "Count how many words from a query also appear in a system prompt.",
        starterCode: "system_words = [\"answer\", \"concisely\", \"in\", \"one\", \"sentence\"]\nquery_words = [\"the\", \"answer\", \"should\", \"be\", \"concise\"]\n\noverlap = 0\nfor w in query_words:\n    for s in system_words:\n        if w == s:\n            overlap = overlap + 1\nprint(overlap)",
        expected: "2"
      }
    ],
    quizzes: [
      {
        id: "prompt-eng-q1",
        question: "What is few-shot prompting?",
        options: [
          "Giving the model no examples",
          "Providing several input-output examples before the actual query",
          "Training the model on a small dataset",
          "Using only one word in the prompt"
        ],
        correct: 1
      },
      {
        id: "prompt-eng-q2",
        question: "Chain-of-thought prompting is most effective for which type of task?",
        options: [
          "Creative writing",
          "Multi-step reasoning and math",
          "Image generation",
          "Text summarization"
        ],
        correct: 1
      }
    ],
    projects: [
      {
        id: "prompt-eng-p1",
        title: "Prompt Template System",
        description: "Build a Python function that takes a template string, fills in variables, and validates that the final prompt stays within a maximum token budget. Include templates for zero-shot, few-shot, and chain-of-thought styles."
      }
    ]
  },

  "text-generation-llms": {
    notes: {
      c1: "Large Language Models generate text by predicting the next token in a sequence given a probability distribution. Decoding strategies control output: greedy decoding always picks the most likely token, top-k sampling limits choices to the k most probable tokens, and nucleus (top-p) sampling truncates the tail of the distribution. Temperature scaling adjusts the sharpness of the probability distribution — lower temperatures make outputs more deterministic, higher temperatures increase randomness and creativity.",
      c2: "LLM architectures like GPT use decoder-only Transformers with causal masking to prevent attending to future tokens during training. BLOOM and LLaMA introduce optimizations such as rotary positional embeddings (RoPE), grouped-query attention, and SwiGLU activation functions. Context windows determine how much text a model can process at once. Understanding tokenization and the BPE algorithm is essential for working with these models effectively.",
      c3: "Fine-tuning adapts pre-trained LLMs to specific tasks. Full fine-tuning updates all parameters, while parameter-efficient methods like LoRA (Low-Rank Adaptation) inject small trainable matrices into attention layers, reducing compute requirements by orders of magnitude. Prompt tuning modifies only a small set of continuous prompt embeddings. Adapter layers and prefix tuning offer additional parameter-efficient alternatives that balance performance and resource costs."
    },
    exercises: [
      {
        id: "text-gen-ex1",
        title: "Temperature Scaling",
        description: "Apply temperature scaling to logits and compute the first softmax probability.",
        starterCode: "import math\nlogits = [2.0, 1.0, 0.1]\ntemperature = 2.0\n\nscaled = [0.0, 0.0, 0.0]\nfor i in range(len(logits)):\n    scaled[i] = logits[i] / temperature\n\nmax_scaled = scaled[0]\nfor i in range(len(scaled)):\n    if scaled[i] > max_scaled:\n        max_scaled = scaled[i]\n\ndenominator = 0.0\nfor i in range(len(scaled)):\n    denominator = denominator + math.exp(scaled[i] - max_scaled)\n\nfirst_prob = math.exp(scaled[0] - max_scaled) / denominator\nprint(first_prob)",
        expected: "0.3775400699193573"
      },
      {
        id: "text-gen-ex2",
        title: "Top-K Token Selection",
        description: "Given token probabilities and K=3, find the index of the highest probability token within the top K.",
        starterCode: "probs = [0.5, 0.2, 0.15, 0.1, 0.05]\ntop_k = 3\n\nbest_idx = 0\nbest_val = probs[0]\ni = 1\nwhile i < top_k:\n    if probs[i] > best_val:\n        best_val = probs[i]\n        best_idx = i\n    i = i + 1\nprint(best_idx)",
        expected: "0"
      },
      {
        id: "text-gen-ex3",
        title: "Context Window Calculator",
        description: "Calculate how many chunks of text fit within a model's context window with overlap.",
        starterCode: "context_window = 512\nchunk_size = 128\noverlap = 32\n\nstep = chunk_size - overlap\nchunks = (context_window - overlap) // step + 1\nprint(chunks)",
        expected: "6"
      }
    ],
    quizzes: [
      {
        id: "text-gen-q1",
        question: "What does temperature do in text generation?",
        options: [
          "Changes the model's training data",
          "Scales logits to control randomness of output",
          "Increases the context window",
          "Reduces model size"
        ],
        correct: 1
      },
      {
        id: "text-gen-q2",
        question: "LoRA reduces fine-tuning compute by:",
        options: [
          "Removing attention layers",
          "Training small low-rank matrices injected into attention",
          "Quantizing all weights to 4-bit",
          "Freezing the embedding layer only"
        ],
        correct: 1
      }
    ],
    projects: [
      {
        id: "text-gen-p1",
        title: "Text Generation Decoder",
        description: "Implement greedy, top-k, and nucleus (top-p) sampling decoders from scratch using only Python. Compare their outputs on a fixed set of logits and analyze the diversity of generated sequences."
      }
    ]
  },

  "image-generation": {
    notes: {
      c1: "Diffusion models generate images by learning to reverse a gradual noising process. During training, Gaussian noise is progressively added to images (forward process). The model learns to predict and remove this noise (reverse process). At inference, starting from pure random noise, the model iteratively denoises to produce a coherent image. U-Net architectures with time-step conditioning are commonly used. The key insight is that while the forward process is fixed, the reverse process is learned — enabling controlled generation conditioned on text, class labels, or other signals.",
      c2: "Latent Diffusion Models (LDMs) like Stable Diffusion operate in a compressed latent space rather than pixel space, making generation much more efficient. A VAE encoder compresses images into latent representations, the diffusion model operates on these latents, and a VAE decoder reconstructs pixels. Classifier-free guidance controls how strongly the model follows a text prompt by interpolating between conditional and unconditional predictions. Higher guidance scales produce images that more closely match the prompt but with reduced diversity."
    },
    exercises: [
      {
        id: "img-gen-ex1",
        title: "Noise Schedule Calculation",
        description: "Compute the noise level at a given step using a linear schedule from 0 (no noise) to 1 (full noise).",
        starterCode: "total_steps = 10\ncurrent_step = 7\nnoise_level = current_step / total_steps\nprint(noise_level)",
        expected: "0.7"
      },
      {
        id: "img-gen-ex2",
        title: "Guidance Scale Application",
        description: "Apply classifier-free guidance to compute the guided logit value.",
        starterCode: "conditional_logit = 3.0\nunconditional_logit = 1.0\nguidance_scale = 7.5\n\nguided = unconditional_logit + guidance_scale * (conditional_logit - unconditional_logit)\nprint(guided)",
        expected: "16.0"
      }
    ],
    quizzes: [
      {
        id: "img-gen-q1",
        question: "What does a diffusion model learn during training?",
        options: [
          "To compress images into vectors",
          "To predict and remove noise from images",
          "To classify images into categories",
          "To detect objects in images"
        ],
        correct: 1
      },
      {
        id: "img-gen-q2",
        question: "Why do Latent Diffusion Models operate in latent space instead of pixel space?",
        options: [
          "Higher image quality",
          "Much faster and more memory-efficient generation",
          "Easier to train VAEs",
          "No denoising steps needed"
        ],
        correct: 1
      }
    ],
    projects: [
      {
        id: "img-gen-p1",
        title: "Step-by-Step Denoising Visualizer",
        description: "Implement a toy 1D diffusion model that adds and removes noise from a simple signal. Visualize the forward noising and reverse denoising steps at each timestep using matplotlib."
      }
    ]
  },

  "rag-systems": {
    notes: {
      c1: "Retrieval-Augmented Generation (RAG) combines a retrieval system with a language model. Instead of relying solely on parametric knowledge encoded in model weights, RAG fetches relevant documents from an external knowledge base and provides them as context to the generator. This reduces hallucination, keeps responses current, and enables domain-specific knowledge without retraining. The core pipeline: query embedding → document retrieval → context augmentation → answer generation.",
      c2: "Vector databases store document embeddings for efficient similarity search. Documents are chunked into manageable segments, embedded using models like text-embedding-ada-002 or sentence-transformers, and indexed using approximate nearest neighbor (ANN) algorithms like HNSW or IVF. Query embeddings are compared against stored document embeddings using cosine similarity or dot product. The choice of chunking strategy — fixed-size, semantic, or recursive — significantly impacts retrieval quality and should align with document structure.",
      c3: "Advanced RAG techniques include query rewriting (transforming the user query for better retrieval), hybrid search (combining keyword BM25 and semantic vector search), re-ranking retrieved documents with a cross-encoder model, and iterative retrieval where the LLM decides if more information is needed. Parent-child chunking, metadata filtering, and hypothetical document embeddings (HyDE) further improve retrieval precision and recall in production systems."
    },
    exercises: [
      {
        id: "rag-ex1",
        title: "Cosine Similarity",
        description: "Compute cosine similarity between two simple 3D document vectors.",
        starterCode: "import math\nvec_a = [1, 0, 1]\nvec_b = [0, 1, 1]\n\ndot_product = 0\nmag_a = 0\nmag_b = 0\nfor i in range(len(vec_a)):\n    dot_product = dot_product + vec_a[i] * vec_b[i]\n    mag_a = mag_a + vec_a[i] * vec_a[i]\n    mag_b = mag_b + vec_b[i] * vec_b[i]\n\nmag_a = mag_a ** 0.5\nmag_b = mag_b ** 0.5\nsimilarity = dot_product / (mag_a * mag_b)\nprint(similarity)",
        expected: "0.5"
      },
      {
        id: "rag-ex2",
        title: "Chunk Overlap Calculator",
        description: "Given a document length, chunk size, and overlap, calculate how many chunks are produced.",
        starterCode: "doc_length = 2000\nchunk_size = 500\noverlap = 50\n\nstep = chunk_size - overlap\nnum_chunks = (doc_length - overlap) // step + 1\nprint(num_chunks)",
        expected: "5"
      },
      {
        id: "rag-ex3",
        title: "Top-K Retrieval Score",
        description: "From a list of similarity scores, sum the top 3 scores to measure retrieval quality.",
        starterCode: "scores = [0.95, 0.88, 0.72, 0.65, 0.41, 0.33]\ntop_k = 3\n\nsorted_scores = sorted(scores, reverse=True)\ntop_sum = 0\ni = 0\nwhile i < top_k:\n    top_sum = top_sum + sorted_scores[i]\n    i = i + 1\nprint(top_sum)",
        expected: "2.55"
      }
    ],
    quizzes: [
      {
        id: "rag-q1",
        question: "What is the primary benefit of RAG over a standalone LLM?",
        options: [
          "Faster inference",
          "Access to up-to-date external knowledge and reduced hallucination",
          "Smaller model size",
          "No need for embeddings"
        ],
        correct: 1
      },
      {
        id: "rag-q2",
        question: "Which algorithm is commonly used for approximate nearest neighbor search in vector databases?",
        options: [
          "Quicksort",
          "HNSW",
          "Dijkstra's",
          "K-means"
        ],
        correct: 1
      }
    ],
    projects: [
      {
        id: "rag-p1",
        title: "Mini RAG Pipeline",
        description: "Build a complete RAG system from scratch: chunk a set of text documents, compute TF-IDF vectors for retrieval, implement cosine similarity search, and combine with an LLM API call to generate answers grounded in retrieved context. Include a simple evaluation harness."
      }
    ]
  }
};
