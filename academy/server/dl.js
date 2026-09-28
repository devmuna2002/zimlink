export const dlCourses = [
  {
    id: "neural-networks-basics",
    slug: "neural-networks-basics",
    title: "Neural Networks from Scratch",
    short: "Understand exactly what a neural network is doing under the hood.",
    description: "Build a multilayer perceptron from zero — forward pass, backpropagation, activation functions, and gradient descent — and see why modern deep learning works. Cement intuition with math and code you write yourself.",
    level: "Intermediate",
    duration: "9 hours",
    hours: 9,
    xp: 2700,
    category: "Deep Learning",
    instructor: "Dr. Rumbidzai Chikomo",
    instructorTitle: "AI Research Lead, Stanford",
    instructorBio: "Deep learning researcher who can explain backprop intuitively and rigorously.",
    instructorAvatar: "person-badge",
    rating: 4.9,
    students: 26880,
    icon: "bi-diagram-3",
    image: "pytorch",
    color: "#ee4c2c",
    tags: ["Neural Networks", "Backpropagation", "Gradient Descent", "NumPy"],
    prerequisites: ["python-ds", "ml-supervised"],
    learningOutcomes: [
      "Describe the neuron, layers, and forward pass mathematically",
      "Derive and implement backpropagation",
      "Apply activation functions and understand their role",
      "Train with gradient descent and tune learning rate",
      "Set up a training loop over data in batches"
    ],
    skills: ["Forward Pass", "Backpropagation", "Activation Functions", "Gradient Descent", "Training Loops"],
    difficulty: "Intermediate — Python/NumPy + linear algebra basics",
    resources: [
      { type: "github", title: "NN-From-Scratch", url: "https://github.com/zimlink/nn-from-scratch" },
      { type: "pdf", title: "Backprop Explained", url: "/assets/backprop.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-NN-411",
      title: "Certificate of Competence — Neural Networks",
      level: "Level 4",
      eqf: "EQF 5",
      rqf: "RQF Level 4",
      credits: 13,
      notionalHours: 36,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 4 / EQF 5 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "NN-411-C1", title: "Forward pass math", weight: 30 },
        { code: "NN-411-C2", title: "Backpropagation", weight: 40 },
        { code: "NN-411-C3", title: "Training with gradient descent", weight: 30 }
      ],
      examId: "exam-neural-networks-basics"
    },
    chapters: [
      {
        id: "c1",
        title: "The Perceptron & Forward Pass",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "One Neuron", duration: "10:00", content: "Weights, bias, weighted sums, and activation. From perceptron to multilayer network." },
          { id: "c1l2", type: "exercise", title: "Manual Forward Pass", duration: "12 min", xp: 110, instructions: "Compute the output of a neuron with weights [0.5,-1], bias 0.2, inputs [2,1] using sigmoid, rounded to 3 decimals.", language: "python", starterCode: "import numpy as np\ndef sigmoid(z): return 1/(1+np.exp(-z))\nw = np.array([0.5, -1.0]); x = np.array([2, 1]); b = 0.2\nz = np.dot(w, x) + b\nprint(round(sigmoid(z), 3))", solution: "import numpy as np\ndef sigmoid(z): return 1/(1+np.exp(-z))\nw = np.array([0.5, -1.0]); x = np.array([2, 1]); b = 0.2\nz = np.dot(w, x) + b\nprint(round(sigmoid(z), 3))", hint: "z = 0.5*2 + (-1)*1 + 0.2 = 0.2", tests: [{ expected: "0.55" }] }
        ]
      },
      {
        id: "c2",
        title: "Backpropagation",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "The Chain Rule in Action", duration: "11:00", content: "Loss, gradient flow, and updating weights via backpropagation." },
          { id: "c2l2", type: "exercise", title: "Gradient Step", duration: "12 min", xp: 110, instructions: "Given loss L = (y - w)^2 with y=3, w=1, and lr=0.5, take one gradient-descent step and print the new w.", language: "python", starterCode: "y = 3.0; w = 1.0; lr = 0.5\ngrad = -2 * (y - w)\nw = w - lr * grad\nprint(w)", solution: "y = 3.0; w = 1.0; lr = 0.5\ngrad = -2 * (y - w)\nw = w - lr * grad\nprint(w)", hint: "dL/dw = -2(y-w) = -4", tests: [{ expected: "3.0" }] }
        ]
      },
      {
        id: "c3",
        title: "Training a Network",
        duration: "3 hours",
        lessons: [
          { id: "c3l1", type: "video", title: "The Training Loop", duration: "10:00", content: "Epochs, batches, loss curves, and learning-rate effects." },
          { id: "c3l2", type: "exercise", title: "Train a Tiny Net", duration: "14 min", xp: 130, instructions: "Use sklearn's MLPClassifier to fit iris and print the test accuracy rounded to 2 decimals.", language: "python", starterCode: "from sklearn.neural_network import MLPClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nX,y=load_iris(return_X_y=True)\nXtr,Xte,ytr,yte=train_test_split(X,y,test_size=0.2,random_state=1)\nm=MLPClassifier(hidden_layer_sizes=(8,),max_iter=300,random_state=1).fit(Xtr,ytr)\nprint(round(m.score(Xte,yte),2))", solution: "from sklearn.neural_network import MLPClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nX,y=load_iris(return_X_y=True)\nXtr,Xte,ytr,yte=train_test_split(X,y,test_size=0.2,random_state=1)\nm=MLPClassifier(hidden_layer_sizes=(8,),max_iter=300,random_state=1).fit(Xtr,ytr)\nprint(round(m.score(Xte,yte),2))", hint: ".score gives accuracy", tests: [{ expected: "0.97" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-nn-411",
      title: "Custom MLP on a Real Dataset",
      description: "Implement a two-layer MLP with NumPy (forward + backprop), train on a classification dataset, and compare loss curves for different learning rates.",
      duration: "3 hours",
      xp: 700,
      requirements: ["Implement forward & backward", "Write a batched training loop", "Plot loss curves", "Compare 2 learning rates"],
      deliverables: [{ type: "code", name: "mlp.py", description: "Custom MLP" }, { type: "report", name: "curves.md", description: "Loss-curve analysis" }]
    },
    advanced: {
      id: "adv-nn-411",
      title: "Advanced: Activation, Regularization & Initialization",
      duration: "2 hours",
      xp: 350,
      lessons: [
        { id: "adv1", type: "video", title: "Vanishing Gradients", duration: "10:00", content: "ReLU, He init, dropout, and batch normalization." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Backprop by Hand", duration: "17:00", instructor: "Dr. Rumbidzai Chikomo", topic: "Backprop" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["ML Engineer", "Deep Learning Engineer", "Researcher"]
  },
  {
    id: "cnn-deep-dive",
    slug: "cnn-deep-dive",
    title: "Convolutional Neural Networks",
    short: "Master CNNs for image understanding, from filters to feature maps.",
    description: "Understand convolutions, pooling, and modern CNN architectures. Build image classifiers with PyTorch, use transfer learning, and reason about what each layer actually learns.",
    level: "Advanced",
    duration: "9 hours",
    hours: 9,
    xp: 2700,
    category: "Deep Learning",
    instructor: "Dr. Rumbidzai Chikomo",
    instructorTitle: "AI Research Lead, Stanford",
    instructorBio: "Computer-vision researcher and CNN architect.",
    instructorAvatar: "person-badge",
    rating: 4.8,
    students: 22310,
    icon: "bi-grid-3x3-gap",
    image: "pytorch",
    color: "#ee4c2c",
    tags: ["CNN", "PyTorch", "Transfer Learning", "Computer Vision", "Feature Maps"],
    prerequisites: ["deep-learning", "neural-networks-basics", "python-ds"],
    learningOutcomes: [
      "Explain convolution, stride, padding, and pooling",
      "Reason about receptive fields and feature-map sizes",
      "Build CNN classifiers with PyTorch",
      "Apply transfer learning with pretrained backbones",
      "Interpret what convolutional filters detect"
    ],
    skills: ["Convolutions", "Pooling", "PyTorch", "Transfer Learning", "Architectures"],
    difficulty: "Advanced — Python/PyTorch + DL basics",
    resources: [
      { type: "github", title: "CNN-Lab", url: "https://github.com/zimlink/cnn-lab" },
      { type: "dataset", title: "Mini-ImageNet Subset", url: "/datasets/cnn-mini.zip" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-CNN-412",
      title: "Certificate of Competence — Convolutional Neural Networks",
      level: "Level 5",
      eqf: "EQF 6",
      rqf: "RQF Level 5",
      credits: 13,
      notionalHours: 36,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 5 / EQF 6 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "CNN-412-C1", title: "Convolution & pooling math", weight: 35 },
        { code: "CNN-412-C2", title: "Build CNNs with PyTorch", weight: 35 },
        { code: "CNN-412-C3", title: "Transfer learning", weight: 30 }
      ],
      examId: "exam-cnn-deep-dive"
    },
    chapters: [
      {
        id: "c1",
        title: "Convolution & Pooling",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "What a Filter Does", duration: "10:00", content: "Kernels, spatial features, stride/padding, and downsampling with pooling." },
          { id: "c1l2", type: "exercise", title: "Output Size", duration: "11 min", xp: 110, instructions: "A 28x28 image is convolved with a 3x3 kernel, stride 1, padding 1. Print the output spatial dimension.", language: "python", starterCode: "size = 28; k = 3; s = 1; p = 1\nout = (size - k + 2*p) // s + 1\nprint(out)", solution: "size = 28; k = 3; s = 1; p = 1\nout = (size - k + 2*p) // s + 1\nprint(out)", hint: "(28-3+2)//1+1", tests: [{ expected: "28" }] }
        ]
      },
      {
        id: "c2",
        title: "CNNs with PyTorch",
        duration: "3.5 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "nn.Conv2d & Train", duration: "11:00", content: "Defining a CNN module, forward pass, and a training loop." },
          { id: "c2l2", type: "exercise", title: "CNN Module", duration: "13 min", xp: 120, instructions: "Define a tiny CNN (Conv2d 3->8, then Flatten) on a 28x28 input and print the flattened feature count (8*26*26).", language: "python", starterCode: "import torch, torch.nn as nn\nclass Tiny(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv = nn.Conv2d(3, 8, kernel_size=3)\n    def forward(self, x):\n        return self.conv(x)\nm = Tiny()\nx = torch.randn(1,3,28,28)\nprint(m(x).shape[1] * 26 * 26)", solution: "import torch, torch.nn as nn\nclass Tiny(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv = nn.Conv2d(3, 8, kernel_size=3)\n    def forward(self, x):\n        return self.conv(x)\nm = Tiny()\nx = torch.randn(1,3,28,28)\nprint(m(x).shape[1] * 26 * 26)", hint: "3x3 conv on 28x28 → 26x26, 8 channels", tests: [{ expected: "5408" }] }
        ]
      },
      {
        id: "c3",
        title: "Transfer Learning",
        duration: "2.5 hours",
        lessons: [
          { id: "c3l1", type: "video", title: "Reuse a Pretrained Backbone", duration: "10:00", content: "Feature extraction vs fine-tuning with ResNet." },
          { id: "c3l2", type: "quiz", title: "Transfer Learning", duration: "4 min", xp: 50, question: "When fine-tuning, the learning rate for the pretrained backbone is usually:", options: ["Lower than the new head", "Higher than the head", "The same as random init", "Zero always"], answer: 0 }
        ]
      }
    ],
    capstone: {
      id: "capstone-cnn-412",
      title: "Classifier with Transfer Learning",
      description: "Fine-tune a pretrained ResNet on a small image dataset, apply data augmentation, and report accuracy + a few misclassification case studies.",
      duration: "3 hours",
      xp: 700,
      requirements: ["Load pretrained backbone", "Freeze + replace head", "Apply augmentation", "Report accuracy & mistakes"],
      deliverables: [{ type: "code", name: "train.py", description: "Fine-tuning script" }, { type: "report", name: "results.md", description: "Accuracy + cases" }]
    },
    advanced: {
      id: "adv-cnn-412",
      title: "Advanced: Saliency & Interpretability",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Grad-CAM & Saliency", duration: "10:00", content: "Visualizing which input regions drive predictions." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "See What CNNs See", duration: "15:00", instructor: "Dr. Rumbidzai Chikomo", topic: "Interpretability" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["CV Engineer", "Deep Learning Engineer", "ML Engineer"]
  },
  {
    id: "rnn-sequence",
    slug: "rnn-sequence-models",
    title: "Sequence Models & RNNs",
    short: "Model time, text, and sequences with recurrent and sequence-to-sequence architectures.",
    description: "Learn how recurrent networks handle ordered data: RNNs, LSTMs, and GRUs, plus sequence-to-sequence models with attention. Apply them to time-series forecasting and text generation.",
    level: "Advanced",
    duration: "8 hours",
    hours: 8,
    xp: 2400,
    category: "Deep Learning",
    instructor: "Dr. Anesu Ndlovu",
    instructorTitle: "Ex-Google AI",
    instructorBio: "Modeled language and time-series with recurrent networks for years.",
    instructorAvatar: "person-badge",
    rating: 4.7,
    students: 19820,
    icon: "bi-arrow-repeat",
    image: "pytorch",
    color: "#0ea5e9",
    tags: ["RNN", "LSTM", "GRU", "Attention", "Time Series"],
    prerequisites: ["deep-learning", "neural-networks-basics"],
    learningOutcomes: [
      "Explain how recurrence shares weights across timesteps",
      "Distinguish RNN, LSTM, and GRU weaknesses and strengths",
      "Build sequence models in PyTorch",
      "Use seq2seq and attention for sequence mapping",
      "Forecast time series and generate text"
    ],
    skills: ["RNNs", "LSTM/GRU", "Seq2Seq", "Attention", "Time Series"],
    difficulty: "Advanced — DL basics required",
    resources: [
      { type: "github", title: "Sequence-Lab", url: "https://github.com/zimlink/sequence-lab" },
      { type: "dataset", title: "Weather Time Series", url: "/datasets/weather-ts.csv" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-SEQ-413",
      title: "Certificate of Competence — Sequence Models",
      level: "Level 5",
      eqf: "EQF 6",
      rqf: "RQF Level 5",
      credits: 12,
      notionalHours: 32,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 5 / EQF 6 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "SEQ-413-C1", title: "Recurrence & gating", weight: 35 },
        { code: "SEQ-413-C2", title: "Seq2seq & attention", weight: 35 },
        { code: "SEQ-413-C3", title: "Time-series applications", weight: 30 }
      ],
      examId: "exam-rnn-sequence"
    },
    chapters: [
      {
        id: "c1",
        title: "Recurrent Architectures",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Why Recurrence?", duration: "10:00", content: "The hidden state, weight sharing, and the vanishing-gradient problem." },
          { id: "c1l2", type: "quiz", title: "RNN Concepts", duration: "4 min", xp: 50, question: "The hidden state after step t summarizes:", options: ["Steps before t", "Only step t", "Steps after t", "Nothing"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Building Sequence Models",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "LSTM & GRU in PyTorch", duration: "11:00", content: "Reading nn.LSTM, feeding sequences, and hidden-state shape." },
          { id: "c2l2", type: "exercise", title: "LSTM Forward", duration: "12 min", xp: 110, instructions: "Run a single-layer LSTM on a batch of shape (seq=2, batch=1, feats=4) and print the output hidden state's number of features.", language: "python", starterCode: "import torch, torch.nn as nn\nlstm = nn.LSTM(input_size=4, hidden_size=7, batch_first=False)\nx = torch.randn(2, 1, 4)\nout, (h, c) = lstm(x)\nprint(out.shape[-1])", solution: "import torch, torch.nn as nn\nlstm = nn.LSTM(input_size=4, hidden_size=7, batch_first=False)\nx = torch.randn(2, 1, 4)\nout, (h, c) = lstm(x)\nprint(out.shape[-1])", hint: "hidden_size = 7", tests: [{ expected: "7" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-seq-413",
      title: "Weather Forecasting with LSTM",
      description: "Train an LSTM to forecast temperature from a rolling-window of past observations; report MAE and compare against a naive baseline.",
      duration: "2.5 hours",
      xp: 600,
      requirements: ["Build sliding windows", "Train an LSTM", "Report MAE vs baseline", "Plot forecast vs truth"],
      deliverables: [{ type: "code", name: "forecast.py", description: "LSTM forecaster" }, { type: "report", name: "eval.md", description: "MAE comparison" }]
    },
    advanced: {
      id: "adv-seq-413",
      title: "Advanced: Attention & Transformers Bridge",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "From Seq2Seq to Attention", duration: "11:00", content: "Why attention replaced recurrence and led to transformers." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "LSTMs demystified", duration: "16:00", instructor: "Dr. Anesu Ndlovu", topic: "RNN" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["NLP Engineer", "ML Engineer", "Time Series Analyst"]
  },
  {
    id: "pytorch-deep-learning",
    slug: "pytorch-deep-learning",
    title: "Deep Learning with PyTorch",
    short: "Ship real deep-learning projects with PyTorch, from tensors to deployment.",
    description: "A complete PyTorch course: tensors, autograd, datasets & dataloaders, custom training loops, GPUs, and model checkpointing. Build and train production-quality models the modern way.",
    level: "Advanced",
    duration: "10 hours",
    hours: 10,
    xp: 3000,
    category: "Deep Learning",
    instructor: "Dr. Rumbidzai Chikomo",
    instructorTitle: "AI Research Lead, Stanford",
    instructorBio: "PyTorch contributor and educator with deep training-loop experience.",
    instructorAvatar: "person-badge",
    rating: 4.9,
    students: 30120,
    icon: "bi-tools",
    image: "pytorch",
    color: "#ee4c2c",
    tags: ["PyTorch", "Tensors", "Autograd", "Dataloaders", "GPU"],
    prerequisites: ["python-ds", "neural-networks-basics"],
    learningOutcomes: [
      "Work fluently with tensors and GPU operations",
      "Leverage autograd for automatic differentiation",
      "Use Dataset/Dataloader and transforms",
      "Write custom training and evaluation loops",
      "Save, load, and checkpoint models reliably"
    ],
    skills: ["Tensors", "Autograd", "Datasets", "Training Loops", "Checkpointing", "GPU"],
    difficulty: "Advanced — Python and DL basics",
    resources: [
      { type: "github", title: "PyTorch-Complete", url: "https://github.com/zimlink/pytorch-complete" },
      { type: "pdf", title: "PyTorch Recipes", url: "/assets/pytorch-recipes.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-PT-414",
      title: "Certificate of Competence — Deep Learning with PyTorch",
      level: "Level 5",
      eqf: "EQF 6",
      rqf: "RQF Level 5",
      credits: 14,
      notionalHours: 40,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 5 / EQF 6 / SFIA",
      assessment: "75-min qualifying exam (75% pass)",
      competencies: [
        { code: "PT-414-C1", title: "Tensors & autograd", weight: 30 },
        { code: "PT-414-C2", title: "Datasets & training loops", weight: 40 },
        { code: "PT-414-C3", title: "GPU & checkpointing", weight: 30 }
      ],
      examId: "exam-pytorch"
    },
    chapters: [
      {
        id: "c1",
        title: "Tensors & Autograd",
        duration: "3.5 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Tensors & Devices", duration: "10:00", content: "Creating tensors, shapes, dtype, and moving to GPU." },
          { id: "c1l2", type: "exercise", title: "Autograd Gradient", duration: "11 min", xp: 110, instructions: "Create x=torch.tensor([2.0], requires_grad=True), compute y=x**2, backprop, and print y.grad.", language: "python", starterCode: "import torch\nx = torch.tensor([2.0], requires_grad=True)\ny = x ** 2\ny.backward()\nprint(x.grad)", solution: "import torch\nx = torch.tensor([2.0], requires_grad=True)\ny = x ** 2\ny.backward()\nprint(x.grad)", hint: "dy/dx = 2x = 4", tests: [{ expected: "tensor([4.])" }] }
        ]
      },
      {
        id: "c2",
        title: "Datasets & Training",
        duration: "3.5 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Dataloader & Loop", duration: "11:00", content: "DataLoader, batches, optimizer, and a full train loop with eval mode." },
          { id: "c2l2", type: "exercise", title: "Optimizer Step", duration: "12 min", xp: 110, instructions: "Fit a single parameter w to target 5 using SGD: loop 20 steps then print w rounded to 2 decimals.", language: "python", starterCode: "import torch\nw = torch.tensor([0.0], requires_grad=True)\nopt = torch.optim.SGD([w], lr=0.1)\nfor _ in range(20):\n    opt.zero_grad()\n    loss = (w - 5) ** 2\n    loss.backward()\n    opt.step()\nprint(round(w.item(), 2))", solution: "import torch\nw = torch.tensor([0.0], requires_grad=True)\nopt = torch.optim.SGD([w], lr=0.1)\nfor _ in range(20):\n    opt.zero_grad()\n    loss = (w - 5) ** 2\n    loss.backward()\n    opt.step()\nprint(round(w.item(), 2))", hint: "SGD pulls w toward 5", tests: [{ expected: "5.0" }] }
        ]
      },
      {
        id: "c3",
        title: "Checkpointing & GPU",
        duration: "3 hours",
        lessons: [
          { id: "c3l1", type: "video", title: "Save & Load Models", duration: "10:00", content: "torch.save state_dict, best-model tracking, and reproducibility seeds." },
          { id: "c3l2", type: "quiz", title: "GPU", duration: "4 min", xp: 50, question: "Which call moves a tensor to the GPU?", options: ["tensor.cuda()", "tensor.cpu()", "tensor.gif()", "tensor.up()"], answer: 0 }
        ]
      }
    ],
    capstone: {
      id: "capstone-pt-414",
      title: "End-to-End Image Classifier",
      description: "Train a CNN classifier with PyTorch using dataloaders, augmentation, best-checkpoint saving, and a final GPU inference report.",
      duration: "3 hours",
      xp: 750,
      requirements: ["Custom Dataset/Dataloader", "Training + validation loop", "Best-checkpoint saving", "GPU utilization note"],
      deliverables: [{ type: "code", name: "train.py", description: "Training pipeline" }, { type: "code", name: "model.pt", description: "Best checkpoint" }]
    },
    advanced: {
      id: "adv-pt-414",
      title: "Advanced: Mixed Precision & Profiling",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Mixed Precision Training", duration: "10:00", content: "amp autocast, memory savings, and profiling bottlenecks." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "PyTorch Tips", duration: "15:00", instructor: "Dr. Rumbidzai Chikomo", topic: "Tooling" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["Deep Learning Engineer", "ML Engineer", "AI Researcher"]
  }
];
