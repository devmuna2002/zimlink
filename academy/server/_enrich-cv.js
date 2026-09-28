// Auto-generated Computer Vision enrichment data
// Exercises use a "safe grammar" verified against the JS-translation grader:
//   arithmetic (+,-,*,/,%,**,), sum(), len(list), abs(), string concat,
//   list indexing, boolean arithmetic. Expected values match JavaScript output.
export const cvEnrichment = {
  "computer-vision": {
    notes: {
      c1: {
        title: "Pixels, Images & Convolutions",
        intro: "Every computer vision system starts with pixels. This chapter covers how images are stored, how colour and grayscale work, and the convolution operation that underpins filtering and edge detection.",
        sections: [
          { heading: "Images as Arrays", body: "A grayscale image is a 2D grid of intensity values from 0 (black) to 255 (white). A colour image layers three such grids (Red, Green, Blue). Every pixel is a number the computer can process.", bullets: ["Grayscale: one intensity value per pixel", "RGB: three channels per pixel", "Values usually 0-255", "Images are just big number grids"] },
          { heading: "The Convolution Operation", body: "A small kernel (filter) slides across the image and computes a weighted sum at each position, producing a feature map that highlights where a pattern appears.", bullets: ["Kernel: small shared weight grid", "Slides over every position", "Each position → one output value", "Produces a feature map"] },
          { heading: "Blurring & Smoothing", body: "Averaging kernels smooth noise by mixing each pixel with its neighbours. Blurring removes fine detail before edge detection and reduces noise in low-quality images.", bullets: ["Average kernels mix neighbours", "Reduces high-frequency noise", "Prepares images for later steps", "Trades detail for stability"] },
          { heading: "Edge Detection with Sobel", body: "Sobel kernels compute gradients: sharp changes in intensity mark edges. One kernel finds horizontal edges, another finds vertical edges, and their magnitude gives overall edge strength.", bullets: ["Gradient = rate of intensity change", "Sobel X detects vertical edges", "Sobel Y detects horizontal edges", "Magnitude combines both", ] },
          { heading: "Colour Spaces", body: "Different tasks want different colour representations. BGR is OpenCV's default order. Converting to grayscale or HSV isolates structure or hue, which helps segmentation.", bullets: ["OpenCV uses BGR order", "Grayscale drops colour", "HSV separates hue from brightness", "Choose the space to match the task"] },
          { heading: "Resizing & Resampling", body: "Images must often shrink or grow. Resizing changes resolution and affects downstream cost. Preserving aspect ratio avoids distortion.", bullets: ["Resize to control compute", "Preserve aspect ratio", "Downsampling loses detail", "Consistent sizes stabilise training"] }
        ],
        tip: "When tuning kernels, verify the output by printing the numeric response — a blank result often hides an indexing mistake."
      }
    },
    exercises: [
      { chId: "c1", title: "Pixel Range", instructions: "An 8-bit image uses integer values. Count how many distinct levels 0-255 represents.", code: 'high = 255\nlow = 0\nprint(high - low + 1)', expected: "256", hint: "255 - 0 + 1" },
      { chId: "c1", title: "Grayscale Values", instructions: "A 4x4 grayscale image is 4 pixels wide. How many total pixels?", code: 'w = 4\nh = 4\nprint(w * h)', expected: "16", hint: "Multiply width by height" },
      { chId: "c1", title: "RGB Channels", instructions: "Count the channels in a colour image.", code: 'channels = 3\nprint(channels)', expected: "3", hint: "Red, Green, Blue" },
      { chId: "c1", title: "Conv Output Size", instructions: "A 5x5 image convolved with a 3x3 kernel, no padding, stride 1. Output width?", code: 'size = 5\nk = 3\nout = size - k + 1\nprint(out)', expected: "3", hint: "5 - 3 + 1" },
      { chId: "c1", title: "Sobel Magnitude", instructions: "Sobel responses gx=3 and gy=4. Print the magnitude sqrt(gx^2+gy^2).", code: 'gx = 3\ngy = 4\nmag = (gx ** 2 + gy ** 2) ** 0.5\nprint(mag)', expected: "5", hint: "3-4-5 triangle" },
      { chId: "c1", title: "Edge Threshold", instructions: "Print 'edge' if a gradient magnitude of 70 exceeds the threshold 50, else 'plain'.", code: 'mag = 70\nthr = 50\nprint("edge" if mag > thr else "plain")', expected: "edge", hint: "70 > 50" }
    ],
    quizzes: [
      { chId: "c1", question: "A grayscale pixel is represented by:", options: ["Three colour values", "A single intensity value", "A list of classes", "A boolean flag"], answer: 1 },
      { chId: "c1", question: "The convolution operation produces:", options: ["A smaller set of classes", "A feature map", "The image histogram", "A colour change"], answer: 1 },
      { chId: "c1", question: "Sobel operators are used mainly for:", options: ["Edge detection", "Colour conversion", "Resizing", "Classification"], answer: 0 },
      { chId: "c1", question: "Blurring an image mainly:", options: ["Adds noise", "Smooths and reduces noise", "Converts to grayscale", "Detects objects"], answer: 1 },
      { chId: "c1", question: "OpenCV by default loads images in which channel order?", options: ["RGB", "BGR", "CMYK", "HSV"], answer: 1 },
      { chId: "c1", question: "The convolution output width for a 5x5 input and 3x3 kernel (no padding) is:", options: ["5", "4", "3", "2"], answer: 2 }
    ],
    projects: [
      { title: "Classical Edge Detector", brief: "Chain a blur, a convolution with a Sobel kernel, and a threshold into a simple edge map, tracking values and the resulting edge strength on a sample patch.", objectives: ["Define a 3x3 smoothing kernel", "Apply a Sobel gradient", "Compute edge magnitude", "Threshold to mark edges"], deliverables: ["Convolution value table", "Edge-strength output", "Thresholded edge map"], starterCode: '# Classical Edge Detector\n# Simulated 3x3 patch and Sobel X kernel\npatch = [[100, 50, 200], [150, 100, 50], [200, 100, 150]]\nkernel = [[1, 0, -1], [2, 0, -2], [1, 0, -1]]\nresp = 0\nfor i in range(3):\n  for j in range(3):\n    resp = resp + patch[i][j] * kernel[i][j]\nmag = abs(resp)\nprint("Sobel response:", resp)\nprint("Edge strength:", mag)' }
    ]
  },
  "cv-basics": {
    notes: {
      c1: {
        title: "Reading, Transforming & Colour Spaces",
        intro: "OpenCV reads images into numpy arrays. This chapter covers loading and writing images, converting between colour spaces, thresholding, and the morphology operations used to clean up binary masks.",
        sections: [
          { heading: "Image I/O with OpenCV", body: "cv2.imread loads an image, cv2.imwrite saves it. OpenCV reads in BGR order. Checking the array shape tells you the height, width, and channel count before any processing.", bullets: ["cv2.imread loads into an array", "cv2.imwrite writes to disk", "Shape = height, width, channels", "Default colour order is BGR"] },
          { heading: "Colour Space Conversion", body: "cv2.cvtColor flips between representations. Grayscale collapses three channels to one. HSV separates hue (colour) from value (brightness), which makes thresholding by colour robust.", bullets: ["cvtColor switches colour spaces", "Grayscale drops to one channel", "HSV splits hue and brightness", "Pick the space to match the goal"] },
          { heading: "Thresholding", body: "Thresholding turns a grayscale image into a binary mask: pixels above a cutoff become white, the rest black. Thresholds isolate bright regions, text, or objects from their background.", bullets: ["Single cutoff divides pixels", "Output is binary (black/white)", "Great for isolating regions", "Pick the value from the histogram"] },
          { heading: "Morphology", body: "Morphological operations clean binary masks. Erosion shrinks white regions to remove noise specks; dilation grows them to close small gaps. Opening applies erosion then dilation.", bullets: ["Erosion removes small specks", "Dilation closes small holes", "Opening = erosion then dilation", "Leaves clean connected regions"] },
          { heading: "Contours", body: "Contours trace the boundaries of connected white regions. Finding contours turns a mask into a list of shapes you can measure — area, perimeter, and bounding boxes.", bullets: ["Contour = region boundary", "Reveals area and perimeter", "Bounding box locates regions", "Foundation of shape analysis"] },
          { heading: "Resizing & ROI", body: "Resizing normalises image dimensions for processing or display. Regions of interest (ROIs) crop out a sub-rectangle so you only process the part that matters.", bullets: ["Resize to control cost", "Crop ROI with slices", "Normalise sizes for ML", "Process only what matters"] }
        ],
        tip: "Always print an array's .shape before processing — wrong channel order or dims is the most common OpenCV mistake."
      },
      c2: {
        title: "Filters, Edges & Feature Extraction",
        intro: "Filters and edge detectors reveal structure in an image. This chapter covers smoothing, gradient-based edge detection, the Canny pipeline, and extracting descriptive features from results.",
        sections: [
          { heading: "Smoothing & Blur", body: "Filters replace each pixel with a local average or weighted neighbourhood. Gaussian blur weights neighbours by distance, providing soft noise reduction that edge detectors rely on.", bullets: ["Blur averages neighbours", "Gaussian weights by distance", "Calms noise before gradients", "Kernel size controls strength"] },
          { heading: "Gradient & Sobel", body: "A gradient measures how intensity changes. Sobel kernels approximate horizontal and vertical derivatives; combining them yields edge magnitude and orientation at every pixel.", bullets: ["Gradient = local intensity change", "Sobel X and Y kernels", "Combine into magnitude", "Orientation describes the edge angle"] },
          { heading: "The Canny Pipeline", body: "Canny chains several steps: blur, gradient, non-maximum suppression to thin edges, then hysteresis thresholding with two levels to keep strong edges and link broken ones.", bullets: ["Smooth first, then gradient", "Thin edges with suppression", "Two thresholds link edges", "Produces clean single-pixel edges"] },
          { heading: "From Edges to Features", body: "Rows of strong edges or corners become features that describe image content. Harum metrics and keypoint detectors locate distinctive points that survive rotation and lighting changes.", bullets: ["Edges mark structure", "Corners are distinctive points", "Features survive transforms", "Input to matching and detection"] },
          { heading: "Histograms", body: "A histogram counts how many pixels fall in each intensity bin. Low contrast shows as a narrow histogram; equalisation spreads it out to brighten and reveal detail.", bullets: ["Counts pixels per intensity", "Narrow = low contrast", "Equalisation spreads the range", "Improves visibility of detail"] },
          { heading: "Preprocessing for ML", body: "Filters and edge detection are an upstream step before deep models. Consistent resizing, grayscale or normalised scaling, and mild denoising give learning models clean input.", bullets: ["Normalise pixel ranges", "Resize to a fixed shape", "Denoise lightly", "Feed consistent data to models"] }
        ],
        tip: "For clean edges, smooth with a small Gaussian before Canny — the edge detector is only as good as its input."
      }
    },
    exercises: [
      { chId: "c1", title: "Grayscale Channels", instructions: "Converting a 3-channel image to grayscale leaves how many channels?", code: 'rgb_channels = 3\ngray_channels = 1\nprint(gray_channels)', expected: "1", hint: "Grayscale has one channel" },
      { chId: "c1", title: "Image Pixels", instructions: "A 640x480 image. How many total pixels?", code: 'w = 640\nh = 480\nprint(w * h)', expected: "307200", hint: "Multiply width and height" },
      { chId: "c1", title: "Threshold Mask", instructions: "Pixel values [200, 40, 150, 10, 255] with threshold 100. Count how many are above it (boolean sum).", code: 'v0 = 200\nv1 = 40\nv2 = 150\nv3 = 10\nv4 = 255\nthreshold = 100\nabove = (v0 > threshold) + (v1 > threshold) + (v2 > threshold) + (v3 > threshold) + (v4 > threshold)\nprint(above)', expected: "3", hint: "200, 150, 255 pass" },
      { chId: "c2", title: "Gaussian Blur Size", instructions: "A 3x3 Gaussian kernel. How many weight values?", code: 'k = 3\nprint(k * k)', expected: "9", hint: "3x3 grid" },
      { chId: "c2", title: "Gradient Magnitude", instructions: "dx=6 and dy=8. Print the edge magnitude sqrt(dx^2+dy^2).", code: 'dx = 6\ndy = 8\nmag = (dx ** 2 + dy ** 2) ** 0.5\nprint(mag)', expected: "10", hint: "6-8-10 triangle" },
      { chId: "c2", title: "Canny Lower Bound", instructions: "Print the lower value if pic bounds 20-80 with limit 50 stay at 20.", code: 'lower = 20\nprint(lower)', expected: "20", hint: "Lower hysteresis threshold" }
    ],
    quizzes: [
      { chId: "c1", question: "OpenCV reads images in which channel order?", options: ["RGB", "BGR", "GRB", "HSV"], answer: 1 },
      { chId: "c1", question: "Thresholding produces:", options: ["A colour image", "A binary mask", "A vector of classes", "A histogram"], answer: 1 },
      { chId: "c1", question: "Erosion is used to:", options: ["Add noise", "Remove small specks", "Add colour", "Increase resolution"], answer: 1 },
      { chId: "c1", question: "Opening = erosion followed by:", options: ["Threshold", "Dilation", "Blur", "Grayscale"], answer: 1 },
      { chId: "c2", question: "The Canny detector is famous for:", options: ["Detecting colours", "Reliable edge detection", "Resizing", "Morphology"], answer: 1 },
      { chId: "c2", question: "Histogram equalisation is used to:", options: ["Increase contrast", "Reduce blur", "Add colour", "Remove edges"], answer: 0 },
      { chId: "c2", question: "Sobel magnitude combines:", options: ["Two colour channels", "Horizontal and vertical gradients", "Two images", "Two thresholds"], answer: 1 },
      { chId: "c2", question: "Gaussian blur weights neighbours by:", options: ["Colour", "Distance", "Edge strength", "Class label"], answer: 1 }
    ],
    projects: [
      { title: "OpenCV Preprocessing Pipeline", brief: "Design a pipeline that loads an image, converts it to grayscale, blurs it, applies adaptive thresholding, and cleans the mask with morphology for downstream contour analysis.", objectives: ["Load and inspect the image", "Convert to grayscale and blur", "Apply a threshold mask", "Clean with morphology"], deliverables: ["Pipeline step list", "Mask output table", "Contour measurements"], starterCode: '# OpenCV Preprocessing Pipeline\n# Simulated intensity rows before/after a threshold\nimg = [[25, 200, 210], [20, 15, 205], [200, 30, 22]]\nthreshold = 100\nmask = [[1 if v > threshold else 0 for v in row] for row in img]\nforeground = sum(sum(mask, []))\nprint("Foreground pixels:", foreground)\nprint("Threshold:", threshold)' }
    ]
  },
  "object-detection": {
    notes: {
      c1: {
        title: "Detection Fundamentals & Anchors",
        intro: "Object detection localises and classifies objects with bounding boxes. This chapter covers boxes, IoU, anchors, and the evaluation metric mAP.",
        sections: [
          { heading: "The Detection Task", body: "Unlike classification, detection must also say where: each object gets a bounding box (x, y, width, height), a class, and a confidence score.", bullets: ["Predict box + class + score", "Box defined by coords and size", "Multiple objects per image", "Bundles localisation and classification"] },
          { heading: "Intersection over Union (IoU)", body: "IoU measures box overlap: the intersection area divided by the union area. Values near 1 mean boxes agree closely; 0 means no overlap. IoU decides whether a prediction 'matches' ground truth.", bullets: ["IoU = intersection / union", "1 = perfect overlap, 0 = none", "Match threshold usually 0.5", "Core to evaluation"] },
          { heading: "Anchors", body: "Anchor boxes are predefined shapes placed across the grid. A detector adjusts each anchor into a final box, reducing the search space and enabling multiple scales and aspect ratios.", bullets: ["Anchors preselect candidate shapes", "Placed across the feature grid", "Cover multiple scales", "Adjusted into final boxes"] },
          { heading: "Anchor-Free Detectors", body: "Anchor-free methods predict centres and sizes directly, avoiding hand-tuned anchors. They are simpler and often faster on modern hardware.", bullets: ["Predict centres directly", "No hand-designed anchors", "Simpler architecture", "Competitive accuracy and speed"] },
          { heading: "Confidence & Thresholding", body: "Detectors output many candidate boxes. Filtering by a confidence threshold keeps only boxes the model trusts, reducing false positives before further steps.", bullets: ["Each box has a confidence score", "Low-confidence boxes are dropped", "Threshold balances recall/precision", "Keeps the output manageable"] },
          { heading: "Non-Maximum Suppression (NMS)", body: "NMS removes duplicate detections of the same object. It keeps the highest-confidence box and suppresses overlapping ones, leaving one clean box per object.", bullets: ["Many boxes per object initially", "Keep the most confident", "Suppress heavy overlaps", "Leaves one box per object"] }
        ],
        tip: "When plotting detections, draw boxes at the origin midpoint plus (x, y) and scale by width/height — most coordinate bugs come from mixing these conventions."
      },
      c2: {
        title: "YOLO, Faster R-CNN & Evaluation",
        intro: "YOLO runs detection in a single shot for real-time speed; Faster R-CNN trades speed for accuracy with region proposals. This chapter covers both and the mAP metric used to compare them.",
        sections: [
          { heading: "YOLO: One-Stage Detection", body: "YOLO (You Only Look Once) divides the image into a grid and predicts boxes and classes in a single forward pass. Whole-image reasoning plus speed makes it ideal for real-time systems.", bullets: ["Single forward pass", "Grid-based predictions", "Fast enough for video", "Reason about whole image at once"] },
          { heading: "Faster R-CNN: Two-Stage", body: "Faster R-CNN first proposes candidate regions, then classifies and refines each region. The region proposal network makes it more accurate but slower than one-stage detectors.", bullets: ["Region proposal network first", "Then classify each region", "Higher accuracy", "Slower than one-stage"] },
          { heading: "Backbones & Neck", body: "Feature extractors (backbones) such as ResNet produce rich feature maps. A neck (like FPN) fuses features across scales so the detector sees small and large objects well.", bullets: ["Backbone extracts features", "Neck fuses multiple scales", "FPN helps small objects", "Head predicts boxes and classes"] },
          { heading: "mAP Evaluation", body: "mean Average Precision (mAP) summarises detection quality across classes and confidence thresholds. mAP@0.5 uses an IoU threshold of 0.5; mAP@0.5:0.95 averages several thresholds for stricter scoring.", bullets: ["Averages precision across classes", "Varies the confidence threshold", "mAP@0.5: IoU threshold 0.5", "mAP@0.5:0.95 averages many IoUs"] },
          { heading: "Precision & Recall in Detection", body: "A 'match' is a box whose IoU with ground truth passes the threshold. Precision = matched / predicted, recall = matched / actual. Tuning confidence trades one against the other.", bullets: ["Match requires IoU above threshold", "Precision penalises false boxes", "Recall penalises missed objects", "Confidence trades them off"] },
          { heading: "Fine-Tuning a Detector", body: "Fine-tuning a pretrained YOLO on a custom dataset adapts features to new classes. You relabel data, freeze most of the backbone, and train the head to localise the new objects.", bullets: ["Start from pretrained weights", "Label new object classes", "Freeze most of the backbone", "Train the detection head"] }
        ],
        tip: "For speed-critical apps start with YOLO; for accuracy on crowded, small-object data, Faster R-CNN is often worth the extra latency."
      }
    },
    exercises: [
      { chId: "c1", title: "IoU Match", instructions: "Compute IoU if intersection=4 and union=8.", code: 'inter = 4\nunion = 8\nprint(inter / union)', expected: "0.5", hint: "intersection / union" },
      { chId: "c1", title: "Confidence Filter", instructions: "Confs [0.9, 0.3, 0.6, 0.2]. Count those >= 0.5 (boolean sum).", code: 'c0 = 0.9\nc1 = 0.3\nc2 = 0.6\nc3 = 0.2\nlimit = 0.5\nkept = (c0 >= limit) + (c1 >= limit) + (c2 >= limit) + (c3 >= limit)\nprint(kept)', expected: "2", hint: "0.9 and 0.6 pass" },
      { chId: "c1", title: "Grid Cells", instructions: "A YOLO grid of 7x7. Count the cells.", code: 'g = 7\nprint(g * g)', expected: "49", hint: "Multiply rows by columns" },
      { chId: "c1", title: "Anchors Scales", instructions: "3 anchor shapes at 3 scale factors. Total anchor variants?", code: 'shapes = 3\nscales = 3\nprint(shapes * scales)', expected: "9", hint: "Multiply shapes by scales" },
      { chId: "c2", title: "mAP Threshold", instructions: "Report IoU threshold used by mAP@0.5 as 0.5.", code: 'iou = 0.5\nprint(iou)', expected: "0.5", hint: "The @0.5 threshold" },
      { chId: "c2", title: "Precision", instructions: "8 matched boxes of 10 predicted. Precision?", code: 'matched = 8\npred = 10\nprint(matched / pred)', expected: "0.8", hint: "matched / predicted" },
      { chId: "c2", title: "Recall", instructions: "9 matched of 12 actual objects. Recall?", code: 'matched = 9\nactual = 12\nprint(matched / actual)', expected: "0.75", hint: "matched / actual objects" }
    ],
    quizzes: [
      { chId: "c1", question: "IoU measures:", options: ["Model latency", "Overlap between boxes", "Number of classes", "Image size"], answer: 1 },
      { chId: "c1", question: "A common IoU match threshold is:", options: ["0.1", "0.5", "1.5", "3.0"], answer: 1 },
      { chId: "c1", question: "Anchors provide:", options: ["Predefined candidate boxes", "Final class labels", "Image resizing", "Colour correction"], answer: 0 },
      { chId: "c1", question: "NMS removes:", options: ["Low-confidence-class names", "Duplicate overlapping boxes", "Ground-truth boxes", "All small boxes"], answer: 1 },
      { chId: "c2", question: "YOLO is known as a:", options: ["Two-stage detector", "One-stage detector", "Segmentation model", "Feature extractor only"], answer: 1 },
      { chId: "c2", question: "Faster R-CNN is generally:", options: ["Faster but less accurate", "More accurate but slower", "Always slower and worse", "Not a detector"], answer: 1 },
      { chId: "c2", question: "mAP@0.5 uses which IoU threshold?", options: ["0.05", "0.5", "0.95", "1.0"], answer: 1 },
      { chId: "c2", question: "Precision equals:", options: ["matched / predicted", "matched / actual", "predicted / actual", "actual / predicted"], answer: 0 }
    ],
    projects: [
      { title: "Custom YOLO Detector Plan", brief: "Plan a fine-tuning run for a custom object detector: pick a pretrained YOLO, prepare labelled data, set an evaluation gate on mAP@0.5, and define an inference and confidence policy.", objectives: ["Choose a pretrained YOLO", "Prepare labelled dataset", "Train with a mAP gate", "Define confidence policy"], deliverables: ["Detector configuration", "Training plan", "mAP evaluation table"], starterCode: '# Custom YOLO Detector Plan\nclasses = 4\nimg_size = 640\nconfs = [0.9, 0.55, 0.4, 0.7, 0.2]\nlimit = 0.5\nkept = [c >= limit for c in confs].count(True)\nprint("Classes:", classes)\nprint("Image size:", img_size)\nprint("Kept boxes:", kept)' }
    ]
  },
  "image-segmentation": {
    notes: {
      c1: {
        title: "Segmentation Tasks & Encoder-Decoders",
        intro: "Segmentation labels every pixel rather than boxing objects. This chapter distinguishes semantic, instance, and panoptic segmentation and introduces the encoder-decoder design behind U-Net.",
        sections: [
          { heading: "Semantic Segmentation", body: "Semantic segmentation assigns a class label to every pixel. All pixels of the same class share a label — instances of the same object are not told apart.", bullets: ["Label every pixel", "Same class = same label", "No instance separation", "Output is a pixel-class map"] },
          { heading: "Instance Segmentation", body: "Instance segmentation separates individual objects even of the same class, producing a distinct mask for each object, like Mask R-CNN does.", bullets: ["Separates individual objects", "Each object its own mask", "Same class, distinct instances", "Built on detection + masks"] },
          { heading: "Panoptic Segmentation", body: "Panoptic segmentation unifies semantic and instance outputs: 'stuff' (background like road and sky) as semantics plus 'things' (individual objects) as instances, in one coherent map.", bullets: ["Combines semantic + instance", "'Stuff' uses semantics", "'Things' use instances", "One unified scene map"] },
          { heading: "Encoder-Decoder Design", body: "Segmentation models compress an image to features (encoder), then upsample back to full resolution (decoder). The encoder captures context; the decoder restores spatial detail.", bullets: ["Encoder shrinks to features", "Decoder upsamples to full size", "Encoder sees context", "Decoder restores detail"] },
          { heading: "Skip Connections", body: "Upsampling loses fine spatial detail. U-Net adds skip connections that copy encoder features to the decoder, preserving edges and small structures that pure upsampling would blur.", bullets: ["Copy high-res features down", "Preserve fine detail", "Key to U-Net's success", "Improve boundary accuracy"] },
          { heading: "Applications", body: "Segmentation powers medical imaging (tumours, organs), autonomous driving (lanes, pedestrians), and satellite analysis of land use at pixel precision.", bullets: ["Medical ROI extraction", "Autonomous driving scenes", "Satellite land-use mapping", "Pixel-precise understanding"] }
        ],
        tip: "When evaluating segmentation, report both IoU and Dice — IoU is strict about vertical overlap while Dice rewards boundary agreement differently."
      },
      c2: {
        title: "U-Net, Mask R-CNN & Evaluation",
        intro: "This chapter shows how to train U-Net for pixel labelling and Mask R-CNN for instances, and how to evaluate with pixel IoU and Dice.",
        sections: [
          { heading: "Building U-Net", body: "U-Net's symmetric encoder-decoder with skip connections is built from repeated convolution and pooling, then transposed convolutions that upsample back to the input size.", bullets: ["Symmetric encoder/decoder", "Pooling downsamples", "Transposed conv upsamples", "Skips connect matching stages"] },
          { heading: "The Output Layer", body: "The final layer produces per-pixel scores across classes. Softmax or sigmoid converts them to per-pixel probabilities, letting every pixel get a class probability.", bullets: ["H x W x C output map", "Per-pixel class scores", "Convert to probabilities", "Argmax assigns the class"] },
          { heading: "Mask R-CNN for Instances", body: "Mask R-CNN extends Faster R-CNN with a branch that predicts a mask inside each detected box, outputting separate instance masks instead of just boxes.", bullets: ["Extends Faster R-CNN", "Adds a mask head", "Separates every instance", "Bridges detection and segmentation"] },
          { heading: "Training on Custom Data", body: "Segmentation needs dense labels: a class per pixel. You prepare label masks, augment them consistently with the images, and train the pixel classifier.", bullets: ["Dense per-pixel labels", "Augment image and mask together", "Use class weights if imbalanced", "Train the pixel classifier"] },
          { heading: "Pixel IoU", body: "Pixel IoU computes the overlap of predicted and true class regions per pixel: intersection over union of the binary masks for each class, then averaged.", bullets: ["Intersection / union per class", "Averages across classes", "Closer to 1 is better", "Complements accuracy"] },
          { heading: "The Dice Coefficient", body: "Dice measures the similarity of two sets: 2*intersection / (predicted + actual). It rewards boundary agreement and is standard in medical imaging alongside IoU.", bullets: ["2*inter / (pred + actual)", "Ranges 0 to 1", "Common in medical imaging", "Report with IoU"] }
        ],
        tip: "For imbalanced classes, weight the loss or use Dice loss so rare structures are not ignored by accuracy-dominated training."
      }
    },
    exercises: [
      { chId: "c1", title: "Semantic Classes", instructions: "A semantic map labels 5 distinct classes. How many distinct labels in a single pixel map run?", code: 'classes = 5\nprint(classes)', expected: "5", hint: "Number of pixel labels" },
      { chId: "c1", title: "Instance Count", instructions: "3 cars each get a separate mask. Count instance masks.", code: 'instances = 3\nprint(instances)', expected: "3", hint: "One mask per car" },
      { chId: "c1", title: "Seg Pixels", instructions: "A 256x256 label map. How many pixels are labelled?", code: 'w = 256\nh = 256\nprint(w * h)', expected: "65536", hint: "Multiply width by height" },
      { chId: "c2", title: "Dice Score", instructions: "Masks a=[1,1,0,0], b=[1,0,1,0]. Dice = 2*inter/(sum a+sum b).", code: 'a = [1, 1, 0, 0]\nb = [1, 0, 1, 0]\ninter = 1\nprint(2 * inter / (sum(a) + sum(b)))', expected: "0.5", hint: "2*1/(2+2)" },
      { chId: "c2", title: "Pixel IoU", instructions: "Intersection 7, union 14. Pixel IoU?", code: 'inter = 7\nunion = 14\nprint(inter / union)', expected: "0.5", hint: "intersection / union" },
      { chId: "c2", title: "Mask Size", instructions: "A U-Net output map is 3 classes x 32x32. Count output pixel values.", code: 'classes = 3\nw = 32\nh = 32\nprint(classes * w * h)', expected: "3072", hint: "Multiply all dimensions" }
    ],
    quizzes: [
      { chId: "c1", question: "Separating individual objects of the same class is:", options: ["Semantic segmentation", "Instance segmentation", "Classification", "Detection"], answer: 1 },
      { chId: "c1", question: "U-Net's skip connections preserve:", options: ["Colour order", "Fine spatial detail", "Model size", "Class count"], answer: 1 },
      { chId: "c1", question: "Semantic segmentation labels:", options: ["Only boxes", "Every pixel with a class", "Just objects", "Nothing"], answer: 1 },
      { chId: "c2", question: "Dice = 2*inter / (pred + actual) is:", options: ["A latency metric", "A similarity of two masks", "A colour metric", "An anchor count"], answer: 1 },
      { chId: "c2", question: "Mask R-CNN extends which detector?", options: ["YOLO", "Faster R-CNN", "SSD", "EfficientDet"], answer: 1 },
      { chId: "c2", question: "For training segmentation you need:", options: ["Bounding boxes only", "Per-pixel labels", "Only class names", "No labels"], answer: 1 },
      { chId: "c2", question: "Pixel IoU is computed:", options: ["Per class then averaged", "Once for the whole image", "Per anchor", "Per epoch"], answer: 0 },
      { chId: "c2", question: "Panoptic segmentation combines:", options: ["Semantic and instance", "Detection and tracking", "Colour and depth", "Video and audio"], answer: 0 }
    ],
    projects: [
      { title: "Medical ROI Segmentation", brief: "Design a U-Net pipeline to segment a region of interest in medical-style images, choosing an encoder width, preparing dense masks, and reporting Dice and IoU on validation.", objectives: ["Design U-Net encoder/decoder", "Prepare dense pixel masks", "Train with Dice-friendly loss", "Report Dice and IoU"], deliverables: ["Network design", "Mask preparation plan", "Dice/IoU results table"], starterCode: '# Medical ROI Segmentation\n# Simulated predicted vs true binary masks\npred = [1, 1, 0, 1, 0]\ntrue = [1, 1, 1, 0, 0]\ninter = 0\nfor i in range(5):\n  if pred[i] == 1 and true[i] == 1:\n    inter = inter + 1\nunion = sum(pred) + sum(true) - inter\ndice = 2 * inter / (sum(pred) + sum(true))\niou = inter / union\nprint("Dice:", round(dice, 2))\nprint("IoU:", round(iou, 2))' }
    ]
  },
  "cv-deployment": {
    notes: {
      c1: {
        title: "Exporting & Optimising Models",
        intro: "Trained models are research artifacts until exported. This chapter covers serialisation to ONNX and TFLite, and the quantization and pruning that shrink models for edge devices.",
        sections: [
          { heading: "From Model to Artifact", body: "A trained model must be serialised into a deployable file that captures weights and graph. Formats like ONNX and TFLite are portable across frameworks and runtimes.", bullets: ["Capture weights and graph", "ONNX is framework-neutral", "TFLite targets mobile", "Decouple training from serving"] },
          { heading: "Exporting to ONNX", body: "ONNX exports a model to a standard graph that many runtimes can execute. It decouples the model from PyTorch or TensorFlow, simplifying serving on diverse hardware.", bullets: ["Standard interchange format", "Runs on many runtimes", "No training framework needed", "Simplifies portability"] },
          { heading: "TFLite & Mobile", body: "TFLite optimises models for Android, edge, and embedded targets. It strips training-only ops and provides a lightweight runtime tuned for constrained devices.", bullets: ["Built for mobile/edge", "Lightweight runtime", "Strips training ops", "Fits constrained devices"] },
          { heading: "Quantization", body: "Quantization reduces numerical precision (FP32 to INT8), shrinking the model and often accelerating inference. It trades a little accuracy for big gains in size and speed.", bullets: ["FP32 to INT8 reduction", "Smaller model files", "Faster inference", "Small accuracy cost"] },
          { heading: "Pruning", body: "Pruning removes unimportant weights or whole channels that contribute little to predictions. The model becomes smaller and faster, sometimes with minimal accuracy loss.", bullets: ["Remove low-importance weights", "Channel pruning cuts structures", "Smaller and faster", "Often near-lossless"] },
          { heading: "Choosing a Trade-Off", body: "Size, speed, and accuracy trade against each other. Quantize and prune progressively while measuring accuracy on a fixed test set to find the smallest acceptable model.", bullets: ["Measure accuracy after each step", "Quantize then prune", "Target a size or latency", "Keep a validation holdout"] }
        ],
        tip: "Quantize first — it gives the biggest size and speed win — and evaluate accuracy before reaching for pruning."
      },
      c2: {
        title: "Edge Inference, Latency & Real-Time Loops",
        intro: "Deploying CV on the edge means running real-time inference on cameras and constrained hardware. This chapter covers latency tuning, frame loops, and FPS pipelines.",
        sections: [
          { heading: "Latency & Throughput", body: "Latency is the time for one prediction; throughput is how many per second. Real-time detection needs low latency per frame, while batch serving optimises throughput.", bullets: ["Latency: time for one prediction", "Throughput: predictions per second", "Real-time needs low latency", "Batching boosts throughput"] },
          { heading: "The Inference Loop", body: "A camera loop grabs a frame, runs the model, overlays results, and displays. Frame time = capture + inference + drawing, and it must stay under the frame budget for smooth video.", bullets: ["Grab -> infer -> draw -> show", "Frame time sums the stages", "Keep under the frame budget", "Smooth video needs steady FPS"] },
          { heading: "Frame Skipping", body: "When inference is slower than the camera, skipping frames keeps throughput while the model still processes a usable rate. Trade temporal resolution for sustained FPS.", bullets: ["Process every Nth frame", "Sustains usable FPS", "Reduces perception of lag", "Trade temporal resolution"] },
          { heading: "Measuring FPS", body: "Frames per second = 1000 / milliseconds per frame. Benchmark on the target device, not the training GPU, because edge hardware dictates the real ceiling.", bullets: ["FPS = 1000 / ms per frame", "Benchmark on target hardware", "Edge devices dominate cost", "Re-measure after every change"] },
          { heading: "Hardware Acceleration", body: "Edge devices offer specialised cores (NPUs, GPUs, DSPs). Offloading the model to them drastically cuts latency, but ops must be supported by the runtime and kernels.", bullets: ["NPU/GPU/DSP acceleration", "Offloads compute", "Cuts latency sharply", "Not every op is supported"] },
          { heading: "Optimisation Checks", body: "Profile where time goes: capture, preprocess, inference, or drawing. Preprocess and inference usually dominate, so optimise those before hardware changes.", bullets: ["Profile each pipeline stage", "Preprocess and inference dominate", "Optimise before buying hardware", "Quantize + runtime tuning"] }
        ],
        tip: "Run `time`-style profiling on every stage of the loop — most real-time misses come from hidden preprocessing cost, not the model itself."
      }
    },
    exercises: [
      { chId: "c1", title: "Size Reduction", instructions: "Quantization shrinks a 100 MB model by 4x. New size?", code: 'orig = 100\nratio = 4\nprint(orig // ratio)', expected: "25", hint: "Divide by 4" },
      { chId: "c1", title: "Quantized Bits", instructions: "FP32 to INT8 changes bits per weight. Print 8.", code: 'bits = 8\nprint(bits)', expected: "8", hint: "INT8 vs FP32" },
      { chId: "c1", title: "Pruned Weights", instructions: "A layer has 1000 weights, prune 300. Remaining?", code: 'total = 1000\nremoved = 300\nprint(total - removed)', expected: "700", hint: "Subtract pruned weights" },
      { chId: "c2", title: "FPS", instructions: "Inference takes 20ms plus 20ms overhead. Print max FPS floor.", code: 'infer = 20\noverhead = 20\nprint(1000 // (infer + overhead))', expected: "25", hint: "1000 / 40 ms" },
      { chId: "c2", title: "Frame Budget", instructions: "A 30 FPS target allows how many ms per frame?", code: 'fps = 30\nprint(1000 // fps)', expected: "33", hint: "1000 / 30" },
      { chId: "c2", title: "Skipped Rate", instructions: "Process every 2nd frame at 30 FPS camera. Effective processed FPS?", code: 'cam = 30\nskip = 2\nprint(cam // skip)', expected: "15", hint: "30 / 2" }
    ],
    quizzes: [
      { chId: "c1", question: "INT8 quantization primarily reduces:", options: ["Model size and compute", "Accuracy always", "Number of classes", "Camera catch rate"], answer: 0 },
      { chId: "c1", question: "ONNX is useful because it is:", options: ["Framework-neutral", "Only for mobile", "Only for training", "Faster than all runtimes"], answer: 0 },
      { chId: "c1", question: "Pruning removes:", options: ["Frames", "Less-important weights", "Colour channels", "Classes"], answer: 1 },
      { chId: "c2", question: "Real-time inference primarily requires low:", options: ["Latency", "Accuracy", "Resolution", "Class count"], answer: 0 },
      { chId: "c2", question: "FPS = 1000 / ?", options: ["frames per minute", "ms per frame", "pixels per frame", "bytes per model"], answer: 1 },
      { chId: "c2", question: "Frame skipping helps when:", options: ["Inference exceeds the frame budget", "The model is too accurate", "The camera is stopped", "There are too many classes"], answer: 0 },
      { chId: "c2", question: "To benchmark a CV service you should use:", options: ["The training GPU", "The target edge device", "A reference laptop", "No device"], answer: 1 },
      { chId: "c2", question: "Quantization changes weights from FP32 to:", options: ["INT8", "FP64", "String", "Boolean"], answer: 0 }
    ],
    projects: [
      { title: "Edge Real-Time Detector", brief: "Take a detection model, export it, quantize it, and deploy a real-time camera loop, reporting FPS and size reduction across the original and optimised versions.", objectives: ["Export the model to ONNX/TFLite", "Quantize and measure size", "Run a real-time loop", "Report FPS and size change"], deliverables: ["Export artifacts", "Quantization size table", "FPS benchmark report"], starterCode: '# Edge Real-Time Detector\norig_size = 48\nquant_size = 12\ninfer_ms = 18\noverhead_ms = 12\nfps = 1000 // (infer_ms + overhead_ms)\nreduction = (orig_size - quant_size) * 100 // orig_size\nprint("FPS:", fps)\nprint("Size reduction:", str(reduction) + "%")' }
    ]
  }
};
