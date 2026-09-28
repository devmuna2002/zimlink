export const cvCourses = [
  {
    id: "cv-basics",
    slug: "cv-basics",
    title: "OpenCV & Image Processing",
    short: "Master image manipulation and classical computer vision with OpenCV.",
    description: "Load, transform, filter, and analyze images programmatically: color spaces, thresholds, edge detection, morphology, and contours. The hands-on foundation of every CV pipeline.",
    level: "Beginner",
    duration: "7 hours",
    hours: 7,
    xp: 2100,
    category: "Computer Vision",
    instructor: "Farai Muparadzi",
    instructorTitle: "CV Engineer",
    instructorBio: "Product-focused computer vision engineer with OpenCV deployment experience.",
    instructorAvatar: "python",
    rating: 4.8,
    students: 25430,
    icon: "bi-image",
    image: "tensorflow",
    color: "#f59e0b",
    tags: ["OpenCV", "Image Processing", "Filters", "Edges", "Contours"],
    prerequisites: ["python-ds"],
    learningOutcomes: [
      "Read, write, and manipulate images with OpenCV",
      "Convert between color spaces and control intensity",
      "Apply filtering, thresholding, and edge detection",
      "Use morphology and find contours",
      "Preprocess images for downstream ML"
    ],
    skills: ["OpenCV", "Filters", "Thresholding", "Edges", "Contours"],
    difficulty: "Beginner — Python basics",
    resources: [
      { type: "github", title: "OpenCV-Playground", url: "https://github.com/zimlink/opencv-playground" },
      { type: "dataset", title: "Sample Images", url: "/datasets/images.zip" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-CV-401",
      title: "Certificate of Competence — OpenCV & Image Processing",
      level: "Level 3",
      eqf: "EQF 4",
      rqf: "RQF Level 3",
      credits: 11,
      notionalHours: 28,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 3 / EQF 4 / SFIA",
      assessment: "60-min qualifying exam (75% pass)",
      competencies: [
        { code: "CV-401-C1", title: "Image I/O & transforms", weight: 40 },
        { code: "CV-401-C2", title: "Filters & edges", weight: 35 },
        { code: "CV-401-C3", title: "Contours & morphology", weight: 25 }
      ],
      examId: "exam-cv-basics"
    },
    chapters: [
      {
        id: "c1",
        title: "Reading & Transforming",
        duration: "2.5 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Pixels & Channels", duration: "9:00", content: "BGR vs RGB, numpy arrays, resizing, and color spaces." },
          { id: "c1l2", type: "exercise", title: "Zero Image", duration: "10 min", xp: 100, instructions: "Create a 3x3 black image with numpy as a uint8 2D array and print its mean.", language: "python", starterCode: "import numpy as np\nimg = np.zeros((3,3), dtype=np.uint8)\nprint(int(img.mean()))", solution: "import numpy as np\nimg = np.zeros((3,3), dtype=np.uint8)\nprint(int(img.mean()))", hint: "All zeros", tests: [{ expected: "0" }] }
        ]
      },
      {
        id: "c2",
        title: "Filters & Edges",
        duration: "2.5 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Blur & Canny", duration: "10:00", content: "Smoothing, sharpening, gradient magnitude, and Canny edges." },
          { id: "c2l2", type: "exercise", title: "Grayscale Conversion", duration: "10 min", xp: 100, instructions: "Convert a BGR image to grayscale with OpenCV and print the resulting ndim.", language: "python", starterCode: "import cv2\nimport numpy as np\nimg = np.zeros((4,4,3), dtype=np.uint8)\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\nprint(gray.ndim)", solution: "import cv2\nimport numpy as np\nimg = np.zeros((4,4,3), dtype=np.uint8)\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\nprint(gray.ndim)", hint: "Grayscale is 2D", tests: [{ expected: "2" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-cv-401",
      title: "Document Scanner",
      description: "Build a pipeline that takes a photo of a page, corrects perspective, enhances contrast, and sharpens edges for OCR-ready output.",
      duration: "2 hours",
      xp: 500,
      requirements: ["Detect page edges", "Warp perspective", "Enhance contrast", "Output clean image"],
      deliverables: [{ type: "code", name: "scanner.py", description: "Processing pipeline" }, { type: "image", name: "out.jpg", description: "Result image" }]
    },
    advanced: {
      id: "adv-cv-401",
      title: "Advanced: Image Histograms & Equalization",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Histogram Equalization", duration: "9:00", content: "Improving low-contrast images with CLAHE." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "OpenCV Fast Start", duration: "14:00", instructor: "Farai Muparadzi", topic: "Processing" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["CV Engineer", "Computer Vision Developer", "Robotics"]
  },
  {
    id: "object-detection",
    slug: "object-detection",
    title: "Object Detection",
    short: "Detect and locate objects in images and video in real time.",
    description: "Understand bounding-box detection with YOLO and Faster R-CNN, evaluate on mAP, and deploy a detector for real-time inference on images and streams.",
    level: "Advanced",
    duration: "9 hours",
    hours: 9,
    xp: 2700,
    category: "Computer Vision",
    instructor: "Farai Muparadzi",
    instructorTitle: "CV Engineer",
    instructorBio: "Detection and tracking specialist in edge and cloud deployments.",
    instructorAvatar: "python",
    rating: 4.8,
    students: 23110,
    icon: "bi-bounding-box",
    image: "tensorflow",
    color: "#ef4444",
    tags: ["YOLO", "Object Detection", "mAP", "Bounding Boxes", "Real-time"],
    prerequisites: ["cv-basics", "cnn-deep-dive"],
    learningOutcomes: [
      "Explain the object-detection task and anchor/anchor-free concepts",
      "Use YOLO for real-time detection",
      "Understand Faster R-CNN and its region-proposal approach",
      "Evaluate detectors with mAP and IoU",
      "Fine-tune a detector on a custom dataset"
    ],
    skills: ["YOLO", "Detection", "mAP", "Fine-tuning", "Real-time Inference"],
    difficulty: "Advanced — CNN + CV foundations required",
    resources: [
      { type: "github", title: "Detection-Lab", url: "https://github.com/zimlink/detection-lab" },
      { type: "dataset", title: "Custom Object Set", url: "/datasets/detection.zip" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-DET-402",
      title: "Certificate of Competence — Object Detection",
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
        { code: "DET-402-C1", title: "Detection concepts & anchors", weight: 30 },
        { code: "DET-402-C2", title: "YOLO & Faster R-CNN", weight: 40 },
        { code: "DET-402-C3", title: "mAP evaluation & fine-tune", weight: 30 }
      ],
      examId: "exam-object-detection"
    },
    chapters: [
      {
        id: "c1",
        title: "Detection Fundamentals",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Boxes, Anchors, Classes", duration: "10:00", content: "What detectors output, IoU, and the anchor-based vs anchor-free divide." },
          { id: "c1l2", type: "quiz", title: "IoU", duration: "4 min", xp: 50, question: "IoU measures:", options: ["Overlap between predicted & GT boxes", "Model latency", "Number of classes", "Image resolution"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "YOLO & Evaluation",
        duration: "3.5 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "YOLO Inference", duration: "11:00", content: "Running YOLO, confidence thresholds, and NMS." },
          { id: "c2l2", type: "exercise", title: "NMS-style Filter", duration: "11 min", xp: 110, instructions: "Keep only boxes with confidence >= 0.5 from a small list of (conf) values and print the count.", language: "python", starterCode: "confs = [0.9, 0.3, 0.6, 0.2]\nkept = [c for c in confs if c >= 0.5]\nprint(len(kept))", solution: "confs = [0.9, 0.3, 0.6, 0.2]\nkept = [c for c in confs if c >= 0.5]\nprint(len(kept))", hint: "Keep conf >= 0.5", tests: [{ expected: "2" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-det-402",
      title: "Custom Detector",
      description: "Annotate or use a small labeled dataset, fine-tune a YOLO model, and report mAP@0.5 while running inference on sample images and a short video clip.",
      duration: "2.5 hours",
      xp: 650,
      requirements: ["Prepare labels", "Fine-tune YOLO", "Report mAP@0.5", "Inference demo"],
      deliverables: [{ type: "code", name: "train.py", description: "Fine-tuning" }, { type: "report", name: "results.md", description: "mAP + samples" }]
    },
    advanced: {
      id: "adv-det-402",
      title: "Advanced: Tracking & Multi-Object",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Detect + Track", duration: "10:00", content: "Associating detections across frames with simple trackers." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "YOLO Deep Dive", duration: "16:00", instructor: "Farai Muparadzi", topic: "Detection" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["CV Engineer", "ML Engineer", "Autonomous Systems"]
  },
  {
    id: "image-segmentation",
    slug: "image-segmentation",
    title: "Image Segmentation",
    short: "Label every pixel with semantic and instance segmentation.",
    description: "Go beyond boxes: classify each pixel. Cover semantic, instance, and panoptic segmentation with U-Net and Mask R-CNN, including training on custom data and evaluation with IoU.",
    level: "Advanced",
    duration: "9 hours",
    hours: 9,
    xp: 2700,
    category: "Computer Vision",
    instructor: "Farai Muparadzi",
    instructorTitle: "CV Engineer",
    instructorBio: "Segmentation and medical-imaging CV expert.",
    instructorAvatar: "python",
    rating: 4.7,
    students: 19680,
    icon: "bi-bounding-box-circles",
    image: "tensorflow",
    color: "#8b5cf6",
    tags: ["Segmentation", "U-Net", "Mask R-CNN", "Semantic", "Instance", "IoU"],
    prerequisites: ["cv-basics", "cnn-deep-dive"],
    learningOutcomes: [
      "Distinguish semantic, instance, and panoptic segmentation",
      "Build and train U-Net for pixel labeling",
      "Understand Mask R-CNN for instances",
      "Evaluate segmentation with pixel IoU/Dice",
      "Segment custom imagery in medical or aerial domains"
    ],
    skills: ["U-Net", "Mask R-CNN", "Semantic Segmentation", "Instance Segmentation", "Dice/IoU"],
    difficulty: "Advanced — CNN deep learning required",
    resources: [
      { type: "github", title: "Seg-Lab", url: "https://github.com/zimlink/seg-lab" },
      { type: "dataset", title: "Labeled Cell Images", url: "/datasets/cells.zip" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-SEG-403",
      title: "Certificate of Competence — Image Segmentation",
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
        { code: "SEG-403-C1", title: "Segmentation types & tasks", weight: 30 },
        { code: "SEG-403-C2", title: "U-Net & Mask R-CNN", weight: 40 },
        { code: "SEG-403-C3", title: "IoU/Dice evaluation", weight: 30 }
      ],
      examId: "exam-image-segmentation"
    },
    chapters: [
      {
        id: "c1",
        title: "Segmentation Tasks",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Pixels Not Boxes", duration: "10:00", content: "Semantic vs instance vs panoptic segmentation." },
          { id: "c1l2", type: "quiz", title: "Semantic vs Instance", duration: "4 min", xp: 50, question: "Separating two different objects of the same class is needed for:", options: ["Instance segmentation", "Only classification", "Only bounding boxes", "Image colouring"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "U-Net & Evaluation",
        duration: "3.5 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Encoder-Decoder U-Net", duration: "11:00", content: "Skip connections and training pixel-level predictions." },
          { id: "c2l2", type: "exercise", title: "Dice Score", duration: "11 min", xp: 110, instructions: "Compute the Dice coefficient between two binary masks and print it rounded to 2 decimals.", language: "python", starterCode: "a=[1,1,0,0]; b=[1,0,1,0]\ninter=sum(x and y for x,y in zip(a,b))\ndice=2*inter/(sum(a)+sum(b))\nprint(round(dice,2))", solution: "a=[1,1,0,0]; b=[1,0,1,0]\ninter=sum(x and y for x,y in zip(a,b))\ndice=2*inter/(sum(a)+sum(b))\nprint(round(dice,2))", hint: "2*inter/(sum a+sum b)", tests: [{ expected: "0.5" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-seg-403",
      title: "Medical ROI Segmentation",
      description: "Train a U-Net to segment a region of interest in medical-style images and report Dice and IoU on a validation set with sample overlays.",
      duration: "2.5 hours",
      xp: 650,
      requirements: ["Preprocess masks", "Train U-Net", "Report Dice/IoU", "Visualize overlays"],
      deliverables: [{ type: "code", name: "unet.py", description: "Training code" }, { type: "report", name: "results.md", description: "Metrics + overlays" }]
    },
    advanced: {
      id: "adv-seg-403",
      title: "Advanced: Panoptic Segmentation",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Unifying the Tasks", duration: "10:00", content: "Combining semantic and instance outputs into panoptic maps." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "U-Net Explained", duration: "15:00", instructor: "Farai Muparadzi", topic: "Segmentation" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["CV Engineer", "Medical Imaging", "ML Engineer"]
  },
  {
    id: "cv-deployment",
    slug: "cv-deployment",
    title: "Edge CV Deployment",
    short: "Ship vision models to edge devices, cameras, and mobile efficiently.",
    description: "Deploy CV models beyond the datacenter: export to ONNX/TFLite, optimize for edge hardware, reduce latency and size, and run real-time inference on constrained devices.",
    level: "Advanced",
    duration: "8 hours",
    hours: 8,
    xp: 2400,
    category: "Computer Vision",
    instructor: "Farai Muparadzi",
    instructorTitle: "CV Engineer",
    instructorBio: "Edge and embedded vision specialist across Android, Jetson, and camera systems.",
    instructorAvatar: "python",
    rating: 4.6,
    students: 14920,
    icon: "bi-cpu",
    image: "tensorflow",
    color: "#14b8a6",
    tags: ["Edge", "ONNX", "TFLite", "Quantization", "Real-time"],
    prerequisites: ["cv-basics", "cnn-deep-dive", "python-ds"],
    learningOutcomes: [
      "Export trained models to ONNX and TFLite",
      "Quantize and prune models for low-resource devices",
      "Optimize inference on edge hardware",
      "Measure and tune latency, throughput, and power",
      "Deploy a real-time camera detector"
    ],
    skills: ["ONNX", "TFLite", "Quantization", "Edge Inference", "Latency Tuning"],
    difficulty: "Advanced — CV + DL + tooling experience",
    resources: [
      { type: "github", title: "Edge-CV", url: "https://github.com/zimlink/edge-cv" },
      { type: "pdf", title: "Edge Optimization Guide", url: "/assets/edge-guide.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-EDGE-404",
      title: "Certificate of Competence — Edge CV Deployment",
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
        { code: "EDGE-404-C1", title: "Model export (ONNX/TFLite)", weight: 35 },
        { code: "EDGE-404-C2", title: "Quantization & optimization", weight: 35 },
        { code: "EDGE-404-C3", title: "Edge deployment & latency", weight: 30 }
      ],
      examId: "exam-cv-deployment"
    },
    chapters: [
      {
        id: "c1",
        title: "Export & Optimize",
        duration: "3 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "ONNX & TFLite Export", duration: "10:00", content: "Converting PyTorch/TF models to deployable formats." },
          { id: "c1l2", type: "quiz", title: "Quantization", duration: "4 min", xp: 50, question: "INT8 quantization primarily reduces:", options: ["Model size & compute", "Accuracy always", "Number of classes", "Camera latency"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Deployment & Tuning",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Real-Time Camera Loop", duration: "10:00", content: "Streaming frames, inference scheduling, and frame-skipping." },
          { id: "c2l2", type: "exercise", title: "FPS", duration: "10 min", xp: 100, instructions: "Given inference time of 20ms per frame plus 20ms overhead, print the max frames-per-second floor.", language: "python", starterCode: "infer_ms = 20; overhead_ms = 20\nfps = 1000 // (infer_ms + overhead_ms)\nprint(fps)", solution: "infer_ms = 20; overhead_ms = 20\nfps = 1000 // (infer_ms + overhead_ms)\nprint(fps)", hint: "1000/total ms", tests: [{ expected: "25" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-edge-404",
      title: "Real-Time Edge Detector",
      description: "Take a detection model, export it, quantize it, and run a real-time camera loop reporting FPS and size reduction vs the original.",
      duration: "2.5 hours",
      xp: 600,
      requirements: ["Export to ONNX/TFLite", "Quantize the model", "Run real-time loop", "Report FPS & size"],
      deliverables: [{ type: "code", name: "deploy.py", description: "Deployment code" }, { type: "report", name: "bench.md", description: "FPS/size bench" }]
    },
    advanced: {
      id: "adv-edge-404",
      title: "Advanced: Pruning & Distillation",
      duration: "1.5 hours",
      xp: 300,
      lessons: [
        { id: "adv1", type: "video", title: "Smaller & Faster", duration: "10:00", content: "Structured pruning and teacher-student distillation." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Edge CV Playbook", duration: "15:00", instructor: "Farai Muparadzi", topic: "Deployment" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["Edge AI Engineer", "CV Engineer", "Embedded ML"]
  }
];
