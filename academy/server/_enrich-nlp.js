export const nlpEnrichment = {
  "nlp-transformers": {
    notes: {
      c1: "Transformer models revolutionized NLP by replacing recurrent architectures with self-attention. The encoder-decoder structure (original Transformer) processes input and generates output in parallel. Encoder-only models like BERT excel at understanding tasks such as classification and NER, while decoder-only models like GPT excel at generation. Key components include multi-head self-attention, position-wise feed-forward networks, layer normalization, residual connections, and sinusoidal or learned positional encodings. The parallelizability of Transformers made training on massive datasets feasible."
    },
    exercises: [
      {
        id: "nlp-t-ex1",
        title: "Positional Encoding",
        description: "Compute the sinusoidal positional encoding value for position=2, dimension index=0 with model dimension 64.",
        starterCode: "import math\nposition = 2\ndim_index = 0\nmodel_dim = 64\n\ndivisor = 10000 ** ((2 * dim_index) / model_dim)\nencoding = position / divisor\nprint(encoding)",
        expected: "2.0"
      },
      {
        id: "nlp-t-ex2",
        title: "Attention Weight Normalization",
        description: "Given a set of raw attention scores, compute normalized softmax weights for the first element.",
        starterCode: "import math\nscores = [4.0, 2.0, 1.0]\n\nmax_score = scores[0]\nfor i in range(len(scores)):\n    if scores[i] > max_score:\n        max_score = scores[i]\n\nexp_sum = 0.0\nfor i in range(len(scores)):\n    exp_sum = exp_sum + math.exp(scores[i] - max_score)\n\nfirst_weight = math.exp(scores[0] - max_score) / exp_sum\nprint(first_weight)",
        expected: "0.7858421117466396"
      },
      {
        id: "nlp-t-ex3",
        title: "Layer Dimension Check",
        description: "Compute the total number of parameters in a simple attention head projection.",
        starterCode: "input_dim = 512\nnum_heads = 8\nhead_dim = input_dim // num_heads\n\nparams_per_head = input_dim * head_dim\nprint(params_per_head)",
        expected: "32768"
      }
    ],
    quizzes: [
      {
        id: "nlp-t-q1",
        question: "What advantage do Transformers have over RNNs for NLP?",
        options: [
          "Lower memory usage",
          "Parallel processing and capturing long-range dependencies",
          "Simpler architecture",
          "No need for tokenization"
        ],
        correct: 1
      },
      {
        id: "nlp-t-q2",
        question: "BERT is best described as a _____ Transformer.",
        options: [
          "Decoder-only",
          "Encoder-only",
          "Encoder-decoder",
          "Convolutional"
        ],
        correct: 1
      }
    ],
    projects: [
      {
        id: "nlp-t-p1",
        title: "Transformer from Scratch",
        description: "Implement the core Transformer self-attention mechanism in NumPy. Include multi-head splitting, scaled dot-product attention, and output projection. Verify correctness with a small example input and compare against a known reference."
      }
    ]
  },

  "nlp-basics": {
    notes: {
      c1: "Text preprocessing is the foundation of NLP pipelines. Common steps include lowercasing, removing punctuation and special characters, tokenization (splitting text into words or subwords), stop word removal, and stemming or lemmatization. Normalizing text ensures consistency — 'Running', 'running', and 'RUNNING' should map to the same representation. The preprocessing pipeline must be carefully designed for the specific downstream task, as over-normalization can remove important signal.",
      c2: "Text representation converts words into numerical vectors for machine learning models. Bag-of-Words (BoW) counts word occurrences but loses word order. TF-IDF weights words by their importance (term frequency × inverse document frequency), down-weighting common words that appear across all documents. Word embeddings like Word2Vec and GloVe capture semantic relationships in dense vector spaces — words with similar meanings cluster together. These representations form the input for most traditional NLP models."
    },
    exercises: [
      {
        id: "nlp-b-ex1",
        title: "TF-IDF Calculator",
        description: "Given term frequency and document frequency values, compute the TF-IDF score.",
        starterCode: "import math\ntf = 5\ndf = 3\ntotal_docs = 10\n\nidf = math.log(total_docs / (1 + df))\ntf_idf = tf * idf\nprint(tf_idf)",
        expected: "6.496484187587506"
      },
      {
        id: "nlp-b-ex2",
        title: "Vocabulary Size",
        description: "Given a corpus of tokenized sentences, compute the unique vocabulary size.",
        starterCode: "corpus = [[\"the\", \"cat\"], [\"the\", \"dog\"], [\"cat\", \"sat\"]]\nvocab = set()\nfor sent in corpus:\n    for w in sent:\n        vocab.add(w)\nvocab_size = len(vocab)\nprint(vocab_size)",
        expected: "4"
      },
      {
        id: "nlp-b-ex3",
        title: "Bag-of-Words Vector",
        description: "Given a vocabulary and a sentence, build a simple BoW count vector.",
        starterCode: "vocab = [\"cat\", \"dog\", \"sat\"]\nsentence = [\"cat\", \"dog\", \"cat\"]\n\nbow = [0, 0, 0]\nfor word in sentence:\n    for j in range(len(vocab)):\n        if word == vocab[j]:\n            bow[j] = bow[j] + 1\ntotal_tokens = sum(bow)\nprint(total_tokens)",
        expected: "3"
      }
    ],
    quizzes: [
      {
        id: "nlp-b-q1",
        question: "What does TF-IDF measure?",
        options: [
          "Word sentiment",
          "How important a word is to a document relative to a corpus",
          "Text length",
          "Grammar correctness"
        ],
        correct: 1
      },
      {
        id: "nlp-b-q2",
        question: "Which representation preserves word order?",
        options: [
          "Bag-of-Words",
          "TF-IDF",
          "Both A and B",
          "None of the above"
        ],
        correct: 3
      }
    ],
    projects: [
      {
        id: "nlp-b-p1",
        title: "Text Preprocessing Pipeline",
        description: "Build a complete text preprocessing pipeline: lowercase, remove punctuation, tokenize, remove stop words, and compute TF-IDF vectors. Evaluate retrieval quality using cosine similarity on a set of documents."
      }
    ]
  },

  "sentiment-analysis": {
    notes: {
      c1: "Sentiment analysis classifies text as positive, negative, or neutral — and sometimes fine-grained intensity scales. Approaches range from lexicon-based methods (using sentiment dictionaries like VADER that assign polarity scores to words) to supervised machine learning (Naive Bayes, SVM, logistic regression trained on labeled data) and deep learning (LSTMs, CNNs, Transformers). Domain-specific considerations matter — 'unpredictable' is negative for car reviews but positive for movie reviews.",
      c2: "Modern sentiment analysis uses pre-trained Transformers fine-tuned on labeled datasets. The pipeline: tokenize input → pass through Transformer encoder → apply classification head (linear layer on [CLS] token) → softmax for class probabilities. Multi-task models can simultaneously predict sentiment polarity, target aspect, and intensity. Key challenges include sarcasm detection, handling negation and intensifiers, implicit sentiment without explicit opinion words, and cross-domain transfer."
    },
    exercises: [
      {
        id: "sent-ex1",
        title: "Lexicon Sentiment Score",
        description: "Compute sentiment score from a word-sentiment dictionary, summing polarities of sentiment-bearing words.",
        starterCode: "lexicon = {\"great\": 3, \"good\": 2, \"bad\": -2, \"terrible\": -3}\nwords = [\"the\", \"movie\", \"was\", \"great\", \"but\", \"the\", \"acting\", \"was\", \"bad\"]\nscore = 0\nfor w in words:\n    if w in lexicon:\n        score = score + lexicon[w]\nprint(score)",
        expected: "1"
      },
      {
        id: "sent-ex2",
        title: "Confusion Matrix Accuracy",
        description: "Compute classification accuracy from true/false positives and negatives.",
        starterCode: "tp = 80\ntn = 70\nfp = 15\nfn = 35\n\naccuracy = (tp + tn) / (tp + tn + fp + fn)\nprint(accuracy)",
        expected: "0.75"
      },
      {
        id: "sent-ex3",
        title: "Negation Flipper",
        description: "Flip sentiment scores when a negation word precedes the sentiment word.",
        starterCode: "lexicon = {\"good\": 1, \"bad\": -1}\nnegations = [\"not\", \"never\", \"no\"]\ntokens = [\"the\", \"movie\", \"was\", \"not\", \"good\"]\n\nscore = 0\ni = 0\nwhile i < len(tokens):\n    if tokens[i] in lexicon:\n        val = lexicon[tokens[i]]\n        if i > 0 and tokens[i - 1] in negations:\n            val = 0 - val\n        score = score + val\n    i = i + 1\nprint(score)",
        expected: "-1"
      }
    ],
    quizzes: [
      {
        id: "sent-q1",
        question: "Why is sarcasm difficult for sentiment analysis models?",
        options: [
          "Models cannot read text",
          "The literal meaning contradicts the intended sentiment",
          "Sarcasm is too rare to train on",
          "Models only support positive/negative classes"
        ],
        correct: 1
      },
      {
        id: "sent-q2",
        question: "What is the advantage of fine-tuning a Transformer for sentiment analysis over lexicon-based methods?",
        options: [
          "Faster computation",
          "Better understanding of context and nuanced language",
          "No training data needed",
          "Always more accurate on every dataset"
        ],
        correct: 1
      }
    ],
    projects: [
      {
        id: "sent-p1",
        title: "Multi-Approach Sentiment Classifier",
        description: "Build a sentiment analysis system with three approaches: a lexicon-based method, TF-IDF + logistic regression, and fine-tuned DistilBERT. Compare accuracy, inference speed, and error patterns on a held-out test set."
      }
    ]
  },

  "transformers-nlp": {
    notes: {
      c1: "Applying Transformers to NLP tasks requires task-specific output heads and fine-tuning strategies. For classification, the [CLS] token's final hidden state feeds into a linear layer followed by softmax. For NER (Named Entity Recognition), every token representation is classified independently into entity tags. For extractive question answering, the model predicts start and end token positions of the answer span. Transfer learning allows a single pre-trained model to adapt to dozens of NLP tasks with minimal task-specific labeled data.",
      c2: "Tokenization strategies directly impact model performance. Word-level tokenization creates large vocabularies with many rare or unknown words (UNK tokens). Character-level tokenization avoids unknowns but produces very long sequences that are expensive to process. Subword tokenization methods (BPE, WordPiece, SentencePiece, Unigram) balance vocabulary size and coverage — frequent words remain as single tokens while rare words split into meaningful subword units. Using the wrong tokenizer with a model produces nonsensical outputs because token IDs do not match the model's learned embeddings."
    },
    exercises: [
      {
        id: "tnlp-ex1",
        title: "BPE Merge Count",
        description: "Given an initial token count and number of merge operations, compute the final token count.",
        starterCode: "initial_tokens = 10\nmerge_ops = 3\n\nfinal_count = initial_tokens - merge_ops\nprint(final_count)",
        expected: "7"
      },
      {
        id: "tnlp-ex2",
        title: "QA Span Extraction",
        description: "Given start and end logits, find the highest-scoring answer span length.",
        starterCode: "start_logits = [0.1, 0.5, 0.3, 0.8, 0.2]\nend_logits = [0.2, 0.3, 0.9, 0.4, 0.1]\n\nmax_score = start_logits[0] + end_logits[0]\nbest_start = 0\nbest_end = 0\nfor s in range(len(start_logits)):\n    for e in range(s, len(end_logits)):\n        score = start_logits[s] + end_logits[e]\n        if score > max_score:\n            max_score = score\n            best_start = s\n            best_end = e\nspan_length = best_end - best_start + 1\nprint(span_length)",
        expected: "1"
      },
      {
        id: "tnlp-ex3",
        title: "NER F1 Score",
        description: "Compute the F1 score from true positives, false positives, and false negatives for an entity type.",
        starterCode: "tp = 45\nfp = 10\nfn = 8\n\nprecision = tp / (tp + fp)\nrecall = tp / (tp + fn)\nf1 = 2 * precision * recall / (precision + recall)\nprint(f1)",
        expected: "0.8333333333333333"
      }
    ],
    quizzes: [
      {
        id: "tnlp-q1",
        question: "What is the role of the [CLS] token in BERT for classification?",
        options: [
          "Marks the end of sequence",
          "Its final hidden state serves as the aggregate sequence representation",
          "It is a padding token",
          "It stores attention weights"
        ],
        correct: 1
      },
      {
        id: "tnlp-q2",
        question: "Why must the tokenizer match the pre-trained model?",
        options: [
          "They share the same vocabulary and special tokens",
          "Tokenizers are model-specific hardware",
          "Models cannot process raw text at all",
          "It is only a convention, not required"
        ],
        correct: 0
      }
    ],
    projects: [
      {
        id: "tnlp-p1",
        title: "Multi-Task NLP System",
        description: "Build a system using a single Transformer backbone to perform sentiment analysis, NER, and extractive question answering. Implement task-specific classification heads and evaluate each task on appropriate metrics (accuracy, F1, exact match)."
      }
    ]
  },

  "nlp-api-production": {
    notes: {
      c1: "Deploying NLP models in production requires optimizing for latency, throughput, and cost. Quantization reduces model weight precision (FP32 to INT8 or FP16) for faster inference with minimal accuracy loss. Knowledge distillation trains a smaller student model to mimic a larger teacher model's behavior. ONNX Runtime and TensorRT provide hardware-optimized inference engines. Batching incoming requests and using request queuing maximize GPU utilization while maintaining acceptable response times for individual users.",
      c2: "Production NLP systems need comprehensive monitoring, A/B testing, and feedback loops for continuous improvement. Common failure modes include adversarial or out-of-distribution inputs, data distribution shift over time, and gradual performance degradation. API design best practices include rate limiting, strict input validation, response caching with TTL, and graceful degradation to fallback models. Logging predictions, tracking latency percentiles, and collecting user feedback enable data-driven model improvement cycles."
    },
    exercises: [
      {
        id: "nlp-prod-ex1",
        title: "Latency Calculator",
        description: "Compute average per-request latency given batch size and total processing time.",
        starterCode: "batch_size = 32\ntotal_time_ms = 1280\n\nper_request = total_time_ms / batch_size\nprint(per_request)",
        expected: "40.0"
      },
      {
        id: "nlp-prod-ex2",
        title: "Cache Hit Rate",
        description: "Compute cache hit rate as a percentage from cache hits and total requests.",
        starterCode: "cache_hits = 850\ntotal_requests = 1000\n\nhit_rate = cache_hits / total_requests * 100\nprint(hit_rate)",
        expected: "85.0"
      },
      {
        id: "nlp-prod-ex3",
        title: "Throughput Estimator",
        description: "Estimate maximum daily throughput from requests per second and uptime percentage.",
        starterCode: "rps = 50\nuptime_percent = 99.9\n\ndaily_seconds = 24 * 60 * 60\navailable_seconds = daily_seconds * uptime_percent / 100\nthroughput = rps * available_seconds\nprint(throughput)",
        expected: "4315680.0"
      }
    ],
    quizzes: [
      {
        id: "nlp-prod-q1",
        question: "What does model quantization do?",
        options: [
          "Increases model accuracy",
          "Reduces numerical precision to speed up inference",
          "Adds more training data",
          "Removes attention layers"
        ],
        correct: 1
      },
      {
        id: "nlp-prod-q2",
        question: "Why is response caching important for NLP APIs?",
        options: [
          "It improves model accuracy",
          "It reduces redundant computation and lowers latency for repeated queries",
          "It eliminates the need for GPUs",
          "It replaces the need for rate limiting"
        ],
        correct: 1
      }
    ],
    projects: [
      {
        id: "nlp-prod-p1",
        title: "NLP Inference Server",
        description: "Build a production-ready NLP inference server using FastAPI. Include dynamic request batching, response caching with configurable TTL, input validation, health check endpoints, Prometheus metrics, and graceful error handling. Benchmark throughput under concurrent load."
      }
    ]
  }
};
