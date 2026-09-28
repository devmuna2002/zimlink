// Auto-generated Deep Learning enrichment data
// Exercises use a "safe grammar" verified against the JS-translation grader:
//   arithmetic (+,-,*,/,%,**,), sum(), len(), abs(), string concat,
//   list indexing, boolean arithmetic. Expected values match JavaScript output.
export const dlEnrichment = {
  "deep-learning": {
    notes: {
      c1: {
        title: "Deep Learning Foundations & Backpropagation",
        intro: "Deep learning learns layered representations from data. This chapter covers the neuron, activation functions, loss, and the backpropagation algorithm that lets every weight adjust to reduce error.",
        sections: [
          { heading: "From Perceptron to Deep Nets", body: "A single neuron computes a weighted sum of inputs plus a bias, then passes it through a non-linear activation. Stacking layers creates increasingly abstract features. Depth is what lets networks learn complex mappings.", bullets: ["Neuron: weighted sum + bias + activation", "Hidden layers build hierarchical features", "Depth enables abstract representations", "Activation adds non-linearity"] },
          { heading: "Backpropagation", body: "Backpropagation uses the chain rule to compute how each weight contributed to the loss. Gradients flow backward from the output to the input, and each weight is nudged opposite its gradient.", bullets: ["Chain rule propagates gradients backward", "Each weight receives a share of the loss", "Learning rate scales the update", "Zero gradient = no change"] },
          { heading: "Loss & Optimisers", body: "The loss measures prediction error (MSE for regression, cross-entropy for classification). Optimisers like SGD, Adam, and RMSprop update weights using gradients, each with different momentum and scaling.", bullets: ["MSE for regression, cross-entropy for classes", "SGD: basic gradient step", "Adam adds momentum + per-weight scaling", "Choose based on data size and stability"] },
          { heading: "Activation Functions in Depth", body: "Activations decide whether a neuron fires and shape gradient flow. Sigmoid saturates near 0 and 1, causing vanishing gradients. ReLU avoids saturation but can die for negative inputs; leaky variants address this.", bullets: ["Without non-linearity, depth adds nothing", "Sigmoid saturates and kills gradients", "ReLU is fast and avoids saturation", "Leaky ReLU keeps a small negative slope"] },
          { heading: "Softmax & Output Layers", body: "Softmax turns logits into a probability distribution over classes for classification. Output type should match the task: linear for regression, softmax for classification.", bullets: ["Softmax normalises scores to probabilities", "Powers of outputs sum to 1", "Linear output for regression", "Match activation to the task"] },
          { heading: "Training Dynamics", body: "Choosing an activation, initialising weights sensibly, and setting a learning rate interact. Poor choices surface as saturated or dead units and stalled loss.", bullets: ["Activation and init affect gradient flow", "ReLU suits hidden layers", "Watch for dead or saturated units", "Stabilise with batchnorm or better init"] }
        ],
        tip: "If gradients vanish, switch to ReLU or better initialisation — backprop still works, but signals die out."
      },
      c2: {
        title: "CNNs & Feature Maps",
        intro: "Convolutional networks learn spatial features from images using filters, pooling, and depth. This chapter covers convolution math, pooling, receptive fields, and architectures such as ResNet.",
        sections: [
          { heading: "Convolution & Feature Maps", body: "A filter (kernel) slides over the input, computing dot products to produce a feature map. Stride controls step size, padding preserves edges. Deeper layers detect edges, then shapes, then objects.", bullets: ["Kernel slides and multiplies spatially", "Feature map = filter response map", "Stride and padding control output size", "Early layers: edges, later: objects"] },
          { heading: "Pooling & Downsampling", body: "Pooling reduces spatial size and adds translation invariance. Max pooling keeps the strongest activation; average pooling smooths. Reducing size cuts computation and parameters.", bullets: ["Max pool: keep the largest in a window", "Average pool: keep the mean in a window", "Reduces spatial dimensions", "Adds robustness to shifts"] },
          { heading: "ResNet & Skip Connections", body: "Very deep nets suffer from vanishing gradients. ResNet adds skip (residual) connections so gradients can flow directly to earlier layers, enabling hundreds of layers and powering modern backbones.", bullets: ["Skip connection: add input to output", "Let identity be learned easily", "Mitigates vanishing gradients", "Foundation of modern backbones"] },
          { heading: "Receptive Fields & Local Connectivity", body: "Each neuron sees only a local region of the input, its receptive field. Convolutions mirror how visual cortex cells respond to local stimuli and slash parameters.", bullets: ["Neurons see local patches only", "Mirrors the biological visual cortex", "Far fewer parameters than dense layers", "Preserves spatial structure"] },
          { heading: "Growing Receptive Fields", body: "Stacking convolutions grows each neuron's receptive field: two 3x3 convs approximate a 5x5. Pooling also expands the field, letting deep nets assemble global context.", bullets: ["Depth increases the effective view", "Two 3x3 convs approximate 5x5", "Pooling enlarges the field faster", "Deep nets assemble global context"] },
          { heading: "Feature Hierarchy", body: "Early layers detect edges and corners; middle layers compose shapes and textures; late layers detect object parts. This progression is learned, not hand-designed, and transfers across domains.", bullets: ["Edges to shapes to objects", "Hierarchy is learned automatically", "Transferable across domains", "Explainable via visualisation"] }
        ],
        tip: "A 3x3 conv with padding 1 keeps spatial size — use it to stack depth without shrinking."
      },
      c3: {
        title: "RNNs, LSTMs & Sequence Training",
        intro: "Recurrent networks process ordered data by keeping a hidden state across timesteps. This chapter covers RNNs, vanishing gradients, LSTM gates, GRUs, and seq2seq with attention.",
        sections: [
          { heading: "Recurrence & Hidden State", body: "An RNN shares the same weights at every timestep, reading one input and updating a hidden state that carries context forward. Weight sharing makes it efficient for variable-length sequences.", bullets: ["Hidden state persists across timesteps", "Same weights reused each step", "Length-agnostic processing", "Captures order and context"] },
          { heading: "Vanishing Gradients & LSTMs", body: "Backprop through time multiplies many gradients, causing them to vanish or explode for long sequences. LSTM input, forget, and output gates preserve information over long spans.", bullets: ["Many multiplications underflow gradients", "LSTM cell state preserves memory", "Forget gate drops irrelevant info", "Gates solve long-range dependency"] },
          { heading: "Training Sequence Models", body: "Sequences are fed in batches of sliding windows. Teacher forcing feeds true targets during training, and loss accumulates over timesteps. Dropout and gradient clipping stabilise training.", bullets: ["Sliding windows form training samples", "Teacher forcing uses real targets", "Dropout prevents co-adaptation", "Clip gradients to prevent explosions"] },
          { heading: "The GRU Cell", body: "GRU merges gates into just reset and update, with no separate cell state. It is lighter and faster than an LSTM while performing comparably on many tasks.", bullets: ["Two gates: reset and update", "No separate cell state", "Fewer parameters than LSTM", "Competitive accuracy, faster training"] },
          { heading: "Encoder-Decoder Structure", body: "An encoder reads the input sequence into a state vector; a decoder generates the output sequence from that state, one token at a time, supporting input and output of different lengths.", bullets: ["Encoder compresses input to a state", "Decoder produces output step by step", "Supports different input/output lengths", "Common for translation and summarisation"] },
          { heading: "Attention & Its Payoff", body: "Attention lets the decoder focus on relevant encoder positions rather than a single fixed vector, solving the information bottleneck for long inputs and bridging to transformers.", bullets: ["Focus on relevant source tokens", "Overcomes the fixed-vector bottleneck", "Bridge to transformer models", "Greatly improves long sequences"] }
        ],
        tip: "For long sequences, always start with an LSTM over a plain RNN — the gates handle vanishing gradients."
      }
    },
    exercises: [
      { chId: "c1", title: "Hidden Units", instructions: "A network has a hidden layer of 8 neurons. Count the hidden-layer neurons.", code: 'hidden = 8\nprint(hidden)', expected: "8", hint: "Print the hidden layer size" },
      { chId: "c1", title: "Forward Sum", instructions: "Compute logits = inputs(2,3) dot weights(0.5,-1) plus bias 0.2.", code: 'x0 = 2\nx1 = 3\nw0 = 0.5\nw1 = -1.0\nb = 0.2\nz = x0 * w0 + x1 * w1 + b\nprint(z)', expected: "-1.8", hint: "Multiply then add bias" },
      { chId: "c1", title: "Weight Update", instructions: "Take one SGD step: w=1.0, lr=0.1, gradient=4.0. new_w = w - lr*grad.", code: 'w = 1.0\nlr = 0.1\ngrad = 4.0\nprint(w - lr * grad)', expected: "0.6", hint: "Subtract lr times gradient" },
      { chId: "c2", title: "Feature Map Size", instructions: "A 32x32 input convolved with a 3x3 kernel, stride 1, padding 1. Print output spatial size.", code: 'size = 32\nk = 3\ns = 1\np = 1\nout = (size - k + 2 * p) // s + 1\nprint(out)', expected: "32", hint: "(32-3+2)//1+1" },
      { chId: "c2", title: "Flattened Features", instructions: "A feature map of shape 8x26x26. Count total elements.", code: 'channels = 8\nh = 26\nw = 26\nprint(channels * h * w)', expected: "5408", hint: "Multiply dimensions" },
      { chId: "c2", title: "Pool Cut", instructions: "Max pooling over a 2x2 window reduces width 20 to what?", code: 'width = 20\nfactor = 2\nprint(width // factor)', expected: "10", hint: "Divide by pool factor" },
      { chId: "c3", title: "Steps in a Sequence", instructions: "A sequence has length 10. How many timesteps does an RNN process?", code: 'seq_len = 10\nprint(seq_len)', expected: "10", hint: "One step per position" },
      { chId: "c3", title: "Rolling Windows", instructions: "100 points with windows of length 10. Count overlapping windows.", code: 'points = 100\nwindow = 10\nprint(points - window + 1)', expected: "91", hint: "windows = points - window + 1" },
      { chId: "c3", title: "Hidden Features", instructions: "An LSTM with hidden_size 7 outputs how many features per timestep?", code: 'hidden = 7\nprint(hidden)', expected: "7", hint: "Output width equals hidden size" }
    ],
    quizzes: [
      { chId: "c1", question: "Which algorithm uses the chain rule to adjust weights?", options: ["Forward propagation", "Backpropagation", "Pooling", "Tokenisation"], answer: 1 },
      { chId: "c1", question: "What does an activation function add to a neuron?", options: ["Bias", "Non-linearity", "Memory", "Dropout"], answer: 1 },
      { chId: "c1", question: "A dead ReLU neuron refers to:", options: ["One that is too large", "A permanently zero output", "A saturated output", "A missing bias"], answer: 1 },
      { chId: "c1", question: "Which activation is used on a classification output layer?", options: ["Softmax", "ReLU", "Leaky ReLU", "Linear"], answer: 0 },
      { chId: "c2", question: "What does a 3x3 convolution with stride 1 and padding 1 do to a 32x32 input?", options: ["32x32", "30x30", "31x31", "33x33"], answer: 0 },
      { chId: "c2", question: "Max pooling provides mainly:", options: ["More parameters", "Translation invariance + downsampling", "Higher resolution", "Weight sharing"], answer: 1 },
      { chId: "c2", question: "Skip connections in ResNet help by:", options: ["Adding pooling", "Letting gradients flow to early layers", "Removing layers", "Increasing batch size"], answer: 1 },
      { chId: "c2", question: "Two stacked 3x3 convolutions approximate a:", options: ["7x7", "5x5", "3x3", "9x9"], answer: 1 },
      { chId: "c3", question: "The vanishing-gradient problem most affects:", options: ["Shallow CNNs", "Long sequences in RNNs", "Small batches", "Linear regression"], answer: 1 },
      { chId: "c3", question: "Which helps stabilise training for long sequences?", options: ["Gradient clipping", "Lower weight count", "No activation", "Static learning rate only"], answer: 0 },
      { chId: "c3", question: "The LSTM gate that discards irrelevant information is the:", options: ["Forget gate", "Input gate", "Output gate", "Cell gate"], answer: 0 },
      { chId: "c3", question: "Attention lets a decoder:", options: ["Only see one fixed vector", "Focus on relevant encoder positions", "Ignore the input", "Skip embeddings"], answer: 1 }
    ],
    projects: [
      { title: "Backprop From Scratch", brief: "Trace a forward and backward pass for a tiny two-layer network by hand, compute the loss and its gradient, and take one SGD update per weight.", objectives: ["Compute a forward pass on sample inputs", "Calculate loss and its derivative", "Backpropagate gradients with the chain rule", "Take one gradient-descent step per weight"], deliverables: ["Forward-pass calculations", "Loss and gradient values", "Updated weights table"], starterCode: '# Backprop by Hand\nx = 2.0\ny = 3.0\nw = 1.0\nb = 0.5\ny_pred = w * x + b\nloss = (y - y_pred) ** 2\ngrad_w = -2 * x * (y - y_pred)\nprint("Prediction:", y_pred)\nprint("Loss:", loss)\nprint("Gradient w:", grad_w)' }
    ]
  },
  "neural-networks-basics": {
    notes: {
      c1: {
        title: "The Perceptron & Forward Pass",
        intro: "A neural network starts as a collection of neurons that compute weighted sums. This chapter builds the forward pass from a single neuron to a multilayer network, and its linear-algebra view.",
        sections: [
          { heading: "One Neuron", body: "A neuron multiplies each input by a weight, adds a bias, and passes the result through an activation. This single computation is the atom of every network.", bullets: ["Output = activation(w*x + b)", "Weights scale each input", "Bias shifts the decision boundary", "Activation adds non-linearity"] },
          { heading: "The Multilayer Network", body: "Stacking neurons into layers lets the network combine simple features into complex ones. Each layer transforms the previous layer's output.", bullets: ["Input layer to hidden to output", "Each layer transforms the previous output", "More layers = higher abstraction", "Weights organised into matrices"] },
          { heading: "Activation Functions", body: "Sigmoid squashes to (0,1) and works for probabilities but saturates. Tanh maps to (-1,1). ReLU is the workhorse — max(0,x), cheap and avoids saturation.", bullets: ["Sigmoid: (0,1), saturates", "Tanh: (-1,1), zero-centred", "ReLU: max(0,x), fast", "ReLU avoids vanishing gradients"] },
          { heading: "From Sums to Matrices", body: "A layer of neurons is a matrix multiplication: output = W·x + b. Each row of W holds one neuron's weights, so the whole layer computes all neurons at once, efficiently batched.", bullets: ["Each row of W is one neuron's weights", "output = W dot x + b", "Matrix form computes the whole layer", "Batch processing shapes the data"] },
          { heading: "Activations Are Element-Wise", body: "Activations like ReLU apply to each element of the output vector independently. This keeps operations simple, cheap, and parallel across all neurons.", bullets: ["Activations are element-wise", "No cross-neuron coupling", "Cheap and parallel", "Preserves the vector shape"] },
          { heading: "Forward Pass as Composition", body: "The full forward pass composes layer by layer: h1 = act(W1*x+b1), then h2 = act(W2*h1+b2), ending at the output. Each layer feeds the next.", bullets: ["h1 = act(W1*x + b1)", "h2 = act(W2*h1 + b2)", "Output = W3*h2 + b3", "Composition builds the mapping"] }
        ],
        tip: "Use ReLU in hidden layers by default — it is fast and sidesteps saturation."
      },
      c2: {
        title: "Backpropagation & Gradient Descent",
        intro: "Backpropagation tells each weight how much it contributed to the error, and gradient descent uses that info to minimise the loss. This chapter makes backprop and loss functions concrete.",
        sections: [
          { heading: "Loss & Gradient", body: "The loss quantifies error. For a weight w with loss L(w), the derivative dL/dw tells how L changes with w. Gradient descent walks opposite this gradient toward lower loss.", bullets: ["Loss measures prediction error", "Gradient = slope of loss vs w", "Descend opposite the gradient", "Learning rate sizes the step"] },
          { heading: "The Chain Rule in Action", body: "Backprop computes dL/dw for every weight by multiplying gradients along the path from output to that weight. High-level layers update first, then earlier layers receive scaled gradients.", bullets: ["Multiply local derivatives along the path", "Gradients flow output to input", "Each layer accumulates its share", "Update = w - lr * gradient"] },
          { heading: "Learning Rate & Convergence", body: "A large learning rate overshoots and may diverge. A small one converges slowly. Scheduling or adaptive optimisers balance progress and convergence.", bullets: ["Too large: overshoot, diverge", "Too small: painfully slow", "Decay the rate over time", "Adam adapts per weight"] },
          { heading: "Mean Squared Error", body: "MSE averages squared differences between predictions and targets. Its gradient grows with the error, so larger mistakes push weights harder at first.", bullets: ["MSE = mean of (y - pred)^2", "Good for continuous targets", "Larger errors give larger pushes", "Sensitive to outliers"] },
          { heading: "Cross-Entropy", body: "Cross-entropy measures the divergence between predicted class probabilities and true labels, providing strong gradients for confident wrong predictions.", bullets: ["Measures probability divergence", "Used with softmax outputs", "Strong gradient on wrong confident guesses", "Better than MSE for classification"] },
          { heading: "Gradients Drive Updates", body: "The loss gradient flows back to every layer. Understanding each loss's derivative helps you reason about the speed and stability of training.", bullets: ["dLoss/dw depends on the loss chosen", "Softmax plus cross-entropy simplifies", "Gradients are free via autograd", "Guides architecture and loss choice"] }
        ],
        tip: "If loss explodes, lower the learning rate; if it crawls forever, raise it."
      },
      c3: {
        title: "Training a Network",
        intro: "Training stitches forward pass, loss, backprop, and updates into a loop over data. This chapter covers epochs, batching, loss curves, hyperparameters, and avoiding overfitting.",
        sections: [
          { heading: "The Training Loop", body: "For each epoch, the network runs a forward pass on a batch, computes loss, backprops to get gradients, then updates weights. Repeat until the loss stops improving.", bullets: ["Epoch = one pass over all data", "Batch = subset used per step", "Forward, loss, backward, update", "Watch loss curves for trends"] },
          { heading: "Batching & Stochasticity", body: "Mini-batch gradient descent updates weights on small random subsets. This adds noise that can escape local minima and speeds up iteration without losing much stability.", bullets: ["Full batch: stable but slow", "Mini-batch: fast, noisy updates", "Batch size balances speed and stability", "Randomness helps leave local minima"] },
          { heading: "Overfitting & Regularisation", body: "A network with enough parameters can memorise training data. Regularisation — dropout, L2 weight decay, early stopping — forces it to generalise to unseen data.", bullets: ["Dropout: randomly drop neurons", "Weight decay: shrink large weights", "Early stopping: quit when val stops improving", "Monitor validation, not just training loss"] },
          { heading: "Key Hyperparameters", body: "Learning rate, batch size, and width drive training. There are no universal values, but sensible ranges and grid searches narrow them down fast.", bullets: ["Learning rate: most influential", "Batch size affects noise and memory", "Width trades capacity against cost", "Tune one at a time"] },
          { heading: "Reading Loss Curves", body: "Flat high loss means undertraining or bad scaling. Diverging loss means too large a learning rate. Overfitting shows training loss dropping while validation rises.", bullets: ["Flat high loss: fix scaling or init", "Divergence: lower the learning rate", "Val rising = overfitting", "Staircase plateaus = stuck in a basin"] },
          { heading: "Reproducibility", body: "Fix the random seed, log metrics, and save checkpoints so runs can be compared fairly and resumed after interruptions.", bullets: ["Set a fixed random seed", "Log metrics every epoch", "Save best checkpoints", "Compare runs with the same seed"] }
        ],
        tip: "Train until validation loss stops improving, then stop — extra epochs just memorise noise."
      }
    },
    exercises: [
      { chId: "c1", title: "Neuron Output", instructions: "Compute z = 3*0.5 + 4*(-1) + 0.2, then apply ReLU using boolean arithmetic (z * (z > 0)).", code: 'z = 3 * 0.5 + 4 * (-1.0) + 0.2\nrelu = z * (z > 0)\nprint(relu)', expected: "0", hint: "Weighted sum is negative, so ReLU is 0" },
      { chId: "c1", title: "Layer Count", instructions: "How many layers are in a network with input, 2 hidden, and output?", code: 'hidden = 2\noutput = 1\nprint(hidden + output)', expected: "3", hint: "Count the transformative layers" },
      { chId: "c1", title: "ReLU Value", instructions: "ReLU of -3.5 using boolean arithmetic: z * (z > 0). Print it.", code: 'z = -3.5\nrelu = z * (z > 0)\nprint(relu)', expected: "0", hint: "ReLU returns 0 for negatives" },
      { chId: "c2", title: "Gradient Step", instructions: "w=0.5, lr=0.1, gradient=2.0. New w = w - lr*grad.", code: 'w = 0.5\nlr = 0.1\ngrad = 2.0\nprint(w - lr * grad)', expected: "0.3", hint: "Subtract learning rate times gradient" },
      { chId: "c2", title: "MSE", instructions: "Actual [1,2,3], predicted [1,3,3]. Compute mean squared error.", code: 'a0 = 1\na1 = 2\na2 = 3\np0 = 1\np1 = 3\np2 = 3\nprint(((a0 - p0) ** 2 + (a1 - p1) ** 2 + (a2 - p2) ** 2) / 3)', expected: "0.3333333333333333", hint: "Average the squared differences" },
      { chId: "c2", title: "Chain Product", instructions: "Gradient at the top is 1.0, flows through two layers each scaling by 0.5. Resulting gradient?", code: 'top = 1.0\ns1 = 0.5\ns2 = 0.5\nprint(top * s1 * s2)', expected: "0.25", hint: "Multiply the local gradients" },
      { chId: "c3", title: "Update Steps", instructions: "Epochs=5, batches per epoch=10. Total update steps?", code: 'epochs = 5\nbatches = 10\nprint(epochs * batches)', expected: "50", hint: "Multiply epochs by batches" },
      { chId: "c3", title: "Keep Dropout", instructions: "Dropout keeps 80% of 500 neurons on average. How many kept?", code: 'neurons = 500\nkeep = 0.8\nprint(neurons * keep)', expected: "400", hint: "Multiply by keep probability" },
      { chId: "c3", title: "Validation Gap", instructions: "Train loss 0.30, validation 0.45. Report the gap size.", code: 'train = 0.30\nval = 0.45\nprint(val - train)', expected: "0.15000000000000002", hint: "Subtract train from validation" }
    ],
    quizzes: [
      { chId: "c1", question: "What does the bias term in a neuron do?", options: ["Multiplies weights", "Shifts the decision boundary", "Adds a layer", "Reduces parameters"], answer: 1 },
      { chId: "c1", question: "Which activation is defined as max(0, x)?", options: ["Sigmoid", "Tanh", "ReLU", "Softmax"], answer: 2 },
      { chId: "c1", question: "output = W dot x + b computes:", options: ["One neuron at a time", "The whole layer at once", "The loss", "Backpropagation"], answer: 1 },
      { chId: "c1", question: "Activations act on the layer output:", options: ["Across all neurons jointly", "Element-wise", "Only on the loss", "On the labels"], answer: 1 },
      { chId: "c2", question: "Backpropagation is based on:", options: ["Bayes' theorem", "The chain rule", "Matrix inversion", "Linear search"], answer: 1 },
      { chId: "c2", question: "An oversized learning rate typically causes:", options: ["Underfitting", "Divergence / overshooting", "Slower training", "No change"], answer: 1 },
      { chId: "c2", question: "Which loss pairs best with softmax outputs?", options: ["MSE", "Cross-entropy", "Absolute error", "Hinge"], answer: 1 },
      { chId: "c2", question: "MSE is best suited to:", options: ["Classification", "Regression", "Clustering", "Sequences only"], answer: 1 },
      { chId: "c3", question: "One epoch means:", options: ["One update step", "One full pass over the data", "One hidden layer", "Once per batch"], answer: 1 },
      { chId: "c3", question: "Which is NOT a regularisation technique?", options: ["Dropout", "Weight decay", "Early stopping", "Increasing layer count"], answer: 3 },
      { chId: "c3", question: "A diverging training loss usually means:", options: ["Too small a learning rate", "Too large a learning rate", "Too few epochs", "Too small a batch"], answer: 1 },
      { chId: "c3", question: "For fair comparisons between runs, you should:", options: ["Vary many things at once", "Fix the random seed", "Skip logging", "Save no checkpoints"], answer: 1 }
    ],
    projects: [
      { title: "Mini MLP Trainer", brief: "Design and trace a small multilayer perceptron for binary classification: forward pass, ReLU hidden layer, loss, and one round of backprop updates.", objectives: ["Set up a 2-4-1 architecture", "Run a forward pass", "Compute loss and gradient", "Apply one SGD update per weight"], deliverables: ["Architecture diagram", "Forward-pass values", "Updated weight table"], starterCode: '# Mini MLP Trainer\nx = 1.0\ny = 1.0\nw1 = 0.8\nw2 = -0.3\nb = 0.1\nhidden = (w1 * x + b) * ((w1 * x + b) > 0)\ny_pred = w2 * hidden\nloss = (y - y_pred) ** 2\nprint("Hidden:", hidden)\nprint("Prediction:", y_pred)\nprint("Loss:", loss)' }
    ]
  },
  "cnn-deep-dive": {
    notes: {
      c1: {
        title: "Convolution & Pooling",
        intro: "Convolution extracts local spatial patterns with shared filters, and pooling downsamples while preserving key features. This chapter covers the math, output sizes, and parameter counts.",
        sections: [
          { heading: "The Convolution Operation", body: "A small kernel slides across the image computing element-wise dot products. Each position yields one value, building a feature map that highlights where that pattern occurs.", bullets: ["Kernel: small shared weight grid", "Slides across spatial positions", "Output measures pattern match", "Shared weights cut parameters"] },
          { heading: "Stride & Padding", body: "Stride sets how far the kernel jumps each step, shrinking the output. Padding adds zeros around the border, preserving size and edge information.", bullets: ["Stride greater than 1 downsamples", "Padding preserves spatial size", "Same padding keeps dimensions", "Output = (in - k + 2p)/s + 1"] },
          { heading: "Pooling Layers", body: "Pooling operates on small windows and is parameter-free. Max pooling takes the maximum, keeping sharp features; average pooling smooths. It builds translation invariance.", bullets: ["Max pool: strongest activation", "Average pool: neighbourhood mean", "No learned parameters", "Smaller, invariant feature maps"] },
          { heading: "Computing Output Size", body: "The output dimension follows output = floor((in - k + 2p)/s) + 1. Stride downsamples while padding compensates, letting you control spatial resolution precisely.", bullets: ["out = (in - k + 2p)/s + 1", "Stride shrinks the map", "Padding preserves edges", "Verify shapes before coding"] },
          { heading: "Estimating Parameters", body: "A convolutional layer's parameter count is out_channels times in_channels times kernel area, plus bias. This stays independent of input size, making convs memory-friendly.", bullets: ["params = out * in * k * k", "Independent of input spatial size", "Far fewer than dense layers", "Grows with depth and channels"] },
          { heading: "Designing a Stack", body: "A typical stem halves resolution a few times while doubling channels, ending in a global pool and a dense classifier head.", bullets: ["Halve spatial size, double channels", "Repeat the pattern a few times", "End with global pooling", "Flatten into a classifier head"] }
        ],
        tip: "Sketch the shape of every tensor before writing the network to avoid bugs."
      },
      c2: {
        title: "CNNs with PyTorch",
        intro: "PyTorch turns CNN ideas into code with nn.Conv2d, nn.MaxPool2d, and nn.Module. This chapter shows how to define, run, and train a convolutional module with augmentation.",
        sections: [
          { heading: "nn.Conv2d & nn.Module", body: "nn.Module groups layers and a forward pass. nn.Conv2d(in, out, kernel) applies a learned convolution. The forward method calls each layer in sequence.", bullets: ["nn.Module: container + forward()", "nn.Conv2d: learned filters", "Pass input through layers in forward", "Parameters auto-tracked by PyTorch"] },
          { heading: "Flatten & Classifier Head", body: "After convolution and pooling, the feature map is flattened into a vector and fed to fully-connected layers that map features to class scores.", bullets: ["Flatten 2D map to 1D vector", "Linear layers map to classes", "Softmax turns scores to probabilities", "Classifier head sits on features"] },
          { heading: "The Training Loop", body: "Forward pass produces class scores, cross-entropy loss compares to labels, backward computes gradients, and the optimiser updates weights.", bullets: ["Forward to compute logits", "Cross-entropy vs true labels", "Backward computes gradients", "Optimiser.step() updates weights"] },
          { heading: "Why Augment", body: "Random flips, rotations, crops, and shifts create new training views, teaching the model invariance and fighting overfitting on small datasets.", bullets: ["Flips, rotations, crops, shifts", "Multiply effective dataset size", "Build invariance to transforms", "Cheap way to reduce overfitting"] },
          { heading: "Training Habits", body: "Use a validation split, monitor accuracy, apply early stopping, and keep the best model. Batch normalisation stabilises deeper stacks.", bullets: ["Hold out a validation split", "Early stop on validation loss", "Save the best checkpoint", "Batch norm stabilises training"] },
          { heading: "Classifiers on Small Data", body: "A small CNN plus augmentation beats a huge network that overfits. Start simple, add capacity only when validation demands it.", bullets: ["Small plus augmented beats big overfit", "Grow capacity only if needed", "Strong regularisation always helps", "Prefer pretrained backbones when possible"] }
        ],
        tip: "Add augmentation before adding layers — it is usually the cheaper win."
      },
      c3: {
        title: "Transfer Learning",
        intro: "Transfer learning reuses features learned on huge datasets, saving time and data. This chapter covers feature extraction, fine-tuning best practices, and ResNet backbones.",
        sections: [
          { heading: "Why Transfer Learning Works", body: "Networks pretrained on ImageNet learn general features — edges, textures, shapes — that transfer to new domains. Only the final classifier is domain-specific.", bullets: ["Pretrained backbones encode universal features", "Low-level features are task-agnostic", "Only the head needs retraining", "Huge data savings over training from scratch"] },
          { heading: "Feature Extraction vs Fine-Tuning", body: "Feature extraction freezes the backbone and trains only the new head. Fine-tuning unfreezes late layers with a low learning rate to adapt features to the new data.", bullets: ["Feature extraction: freeze backbone", "Fine-tuning: unfreeze with small lr", "New head replaces the final layer", "Fine-tuning suits data similar to source"] },
          { heading: "ResNet Backbones", body: "ResNet variants (18, 34, 50) trade depth for compute. Skip connections let gradients flow, supporting deep feature hierarchies that transfer remarkably well.", bullets: ["ResNet18/34/50 balance speed and capacity", "Skip connections ease deep training", "Good pretrained defaults", "Output channels grow with depth"] },
          { heading: "Freezing vs Unfreezing", body: "Freeze early layers that capture generic features; allow late layers to adapt. Unfreeze progressively if the new data differs from the original.", bullets: ["Freeze generic early layers", "Adapt task-specific late layers", "Unfreeze progressively for drift", "Balance adaptation and stability"] },
          { heading: "Learning-Rate Discipline", body: "Use a small learning rate for the backbone and a larger one for the new head. This adapts the head quickly while barely disturbing pretrained features.", bullets: ["Small lr for pretrained weights", "Larger lr for the new head", "Layer-wise decay in advanced cases", "Prevents catastrophic forgetting"] },
          { heading: "Catastrophic Forgetting", body: "Too-large updates can overwrite useful features. Small rates, regularisation, and mixing original data mitigate the loss of pretrained knowledge.", bullets: ["Large updates erase old features", "Lower risk with small rates", "Replay original data when possible", "Monitor both new and old performance"] }
        ],
        tip: "Freeze the backbone and retrain only the head first; unfreeze surgically if performance plateaus."
      }
    },
    exercises: [
      { chId: "c1", title: "Output Size", instructions: "A 28x28 image, 3x3 kernel, stride 1, padding 1. Output spatial size?", code: 'size = 28\nk = 3\ns = 1\np = 1\nout = (size - k + 2 * p) // s + 1\nprint(out)', expected: "28", hint: "(28-3+2)//1+1" },
      { chId: "c1", title: "Output with Stride 2", instructions: "A 32x32 image, 3x3 kernel, stride 2, no padding. Output size?", code: 'size = 32\nk = 3\ns = 2\np = 0\nout = (size - k + 2 * p) // s + 1\nprint(out)', expected: "15", hint: "(32-3)//2+1 = 15.5 to 15" },
      { chId: "c1", title: "Pool Halving", instructions: "A 30x30 feature map with 2x2 pooling. New width?", code: 'w = 30\nf = 2\nprint(w // f)', expected: "15", hint: "Divide width by pool factor" },
      { chId: "c1", title: "Filter Count", instructions: "A conv layer goes from 3 input channels to 64 output channels. Number of filters?", code: 'out_channels = 64\nprint(out_channels)', expected: "64", hint: "Each filter makes one output channel" },
      { chId: "c2", title: "Flatten Size", instructions: "A 5x7x7 feature map flattened to a vector. Length?", code: 'c = 5\nh = 7\nw = 7\nprint(c * h * w)', expected: "245", hint: "Multiply all dimensions" },
      { chId: "c2", title: "Conv Parameters", instructions: "A Conv2d(3, 8, 3) has 8 filters of 3x3x3. Count weights (ignore bias).", code: 'out_ch = 8\nin_ch = 3\nk = 3\nprint(out_ch * in_ch * k * k)', expected: "216", hint: "weights = out*in*k*k" },
      { chId: "c2", title: "Pool Reduction", instructions: "MaxPool2d(2) halves both dimensions of a 40x40 map. New elements?", code: 'w = 40\nh = 40\nprint((w // 2) * (h // 2))', expected: "400", hint: "Halve each then multiply" },
      { chId: "c3", title: "Freeze vs Train", instructions: "Backbone has 100 layers, you freeze 90. How many trainable layers?", code: 'total = 100\nfrozen = 90\nprint(total - frozen)', expected: "10", hint: "Subtract frozen from total" },
      { chId: "c3", title: "Head Units", instructions: "A new classifier head maps 512 features to 10 classes. Count output units.", code: 'classes = 10\nprint(classes)', expected: "10", hint: "One output unit per class" }
    ],
    quizzes: [
      { chId: "c1", question: "The main benefit of weight sharing in convolution is:", options: ["More parameters", "Far fewer parameters", "Higher resolution", "Faster pooling"], answer: 1 },
      { chId: "c1", question: "Same padding preserves:", options: ["The colour channel", "Spatial dimensions", "The batch size", "The learning rate"], answer: 1 },
      { chId: "c1", question: "Max pooling provides:", options: ["Translation invariance + downsampling", "More trainable weights", "Colour augmentation", "Dense output"], answer: 0 },
      { chId: "c1", question: "A conv layer's parameter count grows with:", options: ["Input image height", "out * in * kernel area", "Batch size", "Epoch count"], answer: 1 },
      { chId: "c2", question: "Which PyTorch layer performs learned convolution?", options: ["nn.Linear", "nn.Conv2d", "nn.ReLU", "nn.Flatten"], answer: 1 },
      { chId: "c2", question: "The forward method of an nn.Module defines:", options: ["Weight initialisation", "How input flows to output", "The optimiser", "The dataset"], answer: 1 },
      { chId: "c2", question: "Which is a common data augmentation?", options: ["Random horizontal flip", "Increasing the learning rate", "Removing the validation set", "Bigger batch only"], answer: 0 },
      { chId: "c2", question: "Augmentation primarily helps:", options: ["Faster forward passes", "Fighting overfitting", "Less memory", "Fewer classes"], answer: 1 },
      { chId: "c3", question: "Feature extraction differs from fine-tuning because it:", options: ["Trains the whole model from scratch", "Freezes the backbone", "Uses no pretrained weights", "Adds classes"], answer: 1 },
      { chId: "c3", question: "A low learning rate for the backbone in fine-tuning prevents:", options: ["More parameters", "Catastrophic forgetting", "Overfitting the head", "Faster training"], answer: 1 },
      { chId: "c3", question: "ResNet's skip connections mainly help:", options: ["Reduce parameters", "Ease gradient flow for deep nets", "Add pooling", "Remove layers"], answer: 1 }
    ],
    projects: [
      { title: "ResNet Transfer Learning Mini-Project", brief: "Plan a transfer-learning pipeline that replaces a ResNet head to classify 10 new classes, choosing between feature extraction and fine-tuning.", objectives: ["Select a ResNet backbone", "Replace the classification head", "Decide freeze vs fine-tune layers", "Define augmentation and eval plan"], deliverables: ["Architecture plan", "Freeze/fine-tune decision", "Training and evaluation plan"], starterCode: '# Transfer Learning Plan\nbackbone_layers = 50\nfrozen = 40\ntrainable = backbone_layers - frozen\nclasses = 10\nfeatures = 512\nprint("Trainable layers:", trainable)\nprint("Output units:", classes)' }
    ]
  },
  "rnn-sequence": {
    notes: {
      c1: {
        title: "Recurrent Architectures",
        intro: "Recurrent networks handle sequences by carrying a hidden state across timesteps with shared weights. This chapter covers recurrence, time-series modelling, and why plain RNNs struggle on long sequences.",
        sections: [
          { heading: "Why Recurrence?", body: "Standard networks ignore order. An RNN keeps a hidden state that absorbs information from every step so far, letting it reason about sequences of arbitrary length.", bullets: ["Hidden state summarises the past", "Weights shared across timesteps", "Handles variable-length input", "Preserves order information"] },
          { heading: "Weight Sharing & Computation", body: "At each step the RNN combines the current input with the previous hidden state through the same weight matrices, producing the next hidden state and optionally an output.", bullets: ["Same weights at every step", "h_t = f(Wx*x_t + Wh*h_{t-1})", "Shared means far fewer parameters", "Output at each step or the end"] },
          { heading: "The Vanishing-Gradient Problem", body: "Backprop through time multiplies many partial derivatives. For long sequences these products shrink toward zero (or explode), so early steps learn almost nothing.", bullets: ["Repeated multiplication underflows", "Early timesteps get tiny gradients", "Long sequences = worse vanishing", "Gated cells (LSTM/GRU) fix this"] },
          { heading: "Sliding Windows", body: "A time series is cut into overlapping input windows that predict the next value. Each window is a training sample of fixed length.", bullets: ["Window length fixes the context", "Overlapping windows reuse data", "Each window predicts the next step", "sample count = points - window + 1"] },
          { heading: "Forecasting Next Value", body: "The network reads the window and predicts the following value. Rolling prediction feeds predictions back in for multi-step forecasting.", bullets: ["Predict one step ahead", "Roll for multi-step forecasts", "Choose window matching seasonality", "Evaluate against a naive baseline"] },
          { heading: "Evaluation & Baselines", body: "A naive baseline (repeat the last value) is a strong yardstick. Compare MAE or RMSE of your model against it to show real gains.", bullets: ["Naive: repeat last value", "MAE/RMSE measure error", "Beat the baseline to justify the model", "Report both train and test gaps"] }
        ],
        tip: "Always beat a naive baseline before trusting a sequence model."
      },
      c2: {
        title: "Building Sequence Models",
        intro: "PyTorch provides ready-made recurrent cells. This chapter shows how to read nn.LSTM, feed sequences, interpret hidden and cell states, and build seq2seq with attention.",
        sections: [
          { heading: "RNN Cells vs Layers", body: "nn.RNN, nn.LSTM, and nn.GRU wrap the recurrence. The cell computes a single timestep; the layer processes the whole sequence and returns per-timestep outputs and the final states.", bullets: ["nn.LSTM/GRU/RNN process sequences", "Input shape: (seq, batch, features)", "Return (outputs, (h, c)) for LSTM", "Output width = hidden_size"] },
          { heading: "Hidden & Cell State", body: "For an LSTM, h (hidden state) is the short-term memory exposed as output; c (cell state) is the long-term memory carried internally. Both have shape (layers, batch, hidden).", bullets: ["h: short-term, returned as output", "c: long-term memory", "Shape (num_layers, batch, hidden)", "Gates update both states"] },
          { heading: "Feeding Sequences", body: "Data is arranged as (seq_len, batch, features) or (batch, seq_len, features) with batch_first=True. Padding and masking handle variable-length sequences within a batch.", bullets: ["Pick one axis layout and keep it", "batch_first=True: (batch, seq, feats)", "Pack padded sequences for efficiency", "Sliding windows build samples"] },
          { heading: "Encoder-Decoder", body: "The encoder reads the input into a context vector; the decoder generates the output sequence from it. This supports translation, summarisation, and captioning.", bullets: ["Encoder summarises input", "Decoder emits the output", "Lengths may differ", "Core of translation and captioning"] },
          { heading: "Attention", body: "Instead of one fixed vector, attention weights encoder states per decoder step, letting the model look back at the most relevant positions.", bullets: ["Weighs relevant encoder states", "Overcomes the fixed-vector bottleneck", "Much better on long inputs", "Foundation for transformers"] },
          { heading: "From RNNs to Transformers", body: "Transformers replace recurrence with self-attention over the whole sequence at once, enabling parallelism while capturing long-range context.", bullets: ["Self-attention across all positions", "No sequential dependency", "Trains in parallel", "Dominant modern architecture"] }
        ],
        tip: "Print .shape of every tensor when debugging sequence models — shape mismatch is the most common error."
      }
    },
    exercises: [
      { chId: "c1", title: "Timesteps", instructions: "An RNN processes an 8-word sentence. How many timesteps?", code: 'seq = 8\nprint(seq)', expected: "8", hint: "One step per word" },
      { chId: "c1", title: "Shared Weight Count", instructions: "Each timestep reuses 3 matrices. For 5 timesteps, how many distinct matrices?", code: 'matrices = 3\nprint(matrices)', expected: "3", hint: "Weights are shared, not copied" },
      { chId: "c1", title: "Hidden State Size", instructions: "hidden_size=6. The hidden state vector length?", code: 'hidden = 6\nprint(hidden)', expected: "6", hint: "Length equals hidden size" },
      { chId: "c1", title: "Vanishing Scale", instructions: "Gradient 1.0 multiplied across 10 steps each ~0.5. Final scale?", code: 'grad = 1.0\nfactor = 0.5\nsteps = 10\nprint(grad * factor ** steps)', expected: "0.0009765625", hint: "Repeatedly multiply by the factor" },
      { chId: "c2", title: "Output Features", instructions: "An LSTM with hidden_size 7 outputs how many features per timestep?", code: 'hidden = 7\nprint(hidden)', expected: "7", hint: "Output width equals hidden_size" },
      { chId: "c2", title: "Cell State Parts", instructions: "An LSTM tracks h and c states. Count state components in (h, c).", code: 'parts = 2\nprint(parts)', expected: "2", hint: "h and c" },
      { chId: "c2", title: "Batch Elements", instructions: "A batch shape (2, 1, 4) is (seq, batch, feats). How many sequences (batch)?", code: 'seq = 2\nbatch = 1\nfeats = 4\nprint(batch)', expected: "1", hint: "Middle dimension is batch" },
      { chId: "c2", title: "Sequence Length", instructions: "A tensor of shape (5, 3, 8) with batch_first=False. Sequence length?", code: 'seq = 5\nprint(seq)', expected: "5", hint: "First dimension is seq length" }
    ],
    quizzes: [
      { chId: "c1", question: "The hidden state after step t summarises:", options: ["Only step t", "All steps up to t", "All steps after t", "Nothing"], answer: 1 },
      { chId: "c1", question: "Why does a plain RNN struggle with long sequences?", options: ["Too many parameters", "Vanishing gradients across timesteps", "No hidden state", "Too much pooling"], answer: 1 },
      { chId: "c1", question: "A rolling window predicts:", options: ["The first value", "The next value", "All past values", "The mean"], answer: 1 },
      { chId: "c1", question: "A strong baseline for forecasting is:", options: ["A random guess", "Repeating the last value", "Ignoring history", "The average only"], answer: 1 },
      { chId: "c2", question: "For nn.LSTM, the return value is:", options: ["A single tensor", "(output, (h, c))", "(output, (c, h))", "(h, output)"], answer: 1 },
      { chId: "c2", question: "Which state is the long-term memory in an LSTM?", options: ["h", "c", "b", "w"], answer: 1 },
      { chId: "c2", question: "Attention lets a decoder:", options: ["Only see one fixed vector", "Focus on relevant encoder positions", "Ignore the input", "Skip the encoder"], answer: 1 },
      { chId: "c2", question: "Transformers replace recurrence with:", options: ["Self-attention", "Pooling", "Dropout", "Gradient clipping"], answer: 0 }
    ],
    projects: [
      { title: "LSTM Weather Forecaster", brief: "Design an LSTM time-series forecaster using sliding windows: build windows from an hourly temperature series, choose hidden size and sequence length, and define an evaluation against a naive baseline.", objectives: ["Build sliding-window samples", "Choose LSTM hidden size and seq length", "Define train/val split and loss", "Plan MAE comparison vs baseline"], deliverables: ["Window construction plan", "LSTM configuration", "Evaluation metrics and baseline"], starterCode: '# LSTM Weather Forecaster\nhours = 168\nwindow = 24\nsamples = hours - window + 1\nhidden = 16\nprint("Training windows:", samples)\nprint("Hidden size:", hidden)' }
    ]
  },
  "pytorch-deep-learning": {
    notes: {
      c1: {
        title: "Tensors & Autograd",
        intro: "PyTorch builds everything on tensors — multidimensional arrays on CPU or GPU. Autograd automates differentiation, tracking operations to compute gradients automatically.",
        sections: [
          { heading: "Tensors", body: "Tensors are like NumPy arrays with GPU support and gradients. You create them with torch.tensor, control shape, dtype, and device, and move them between CPU and GPU.", bullets: ["torch.tensor creates arrays", "Control shape, dtype, device", "Move to GPU with .cuda() / .to()", "Operate naturally like arrays"] },
          { heading: "Autograd", body: "Tensors with requires_grad=True record their operations. Calling .backward() computes gradients for every tracked tensor, stored in .grad, implementing backprop for you.", bullets: ["requires_grad=True tracks operations", ".backward() computes all gradients", "Gradients stored in .grad", "Automates backpropagation"] },
          { heading: "The Graph & No-Grad", body: "Autograd builds a graph of operations. In inference or evaluation, torch.no_grad() disables tracking to save memory and speed up forward passes.", bullets: ["Operations form a computation graph", "no_grad() skips tracking", "Faster, memory-light inference", "Gradients only needed for training"] },
          { heading: "Shapes & Dimensions", body: "A tensor's shape lists the size of each dimension. Batch-first layouts put the batch first; reshaping must preserve the total element count.", bullets: ["Shape lists each dimension's size", "Batch-first: sample first", "reshape keeps the element count", "Wrong shapes are the top error"] },
          { heading: "Broadcasting", body: "PyTorch aligns dimensions of different sizes, stretching smaller tensors to match. This lets you add a bias to every row of a batch cleanly.", bullets: ["Aligns trailing dimensions", "Stretches the smaller tensor", "Adds a bias per sample", "Keep shapes compatible to avoid errors"] },
          { heading: "Views vs Copies", body: "view shares memory with the original tensor, while reshape may copy. Knowing the difference prevents subtle mutation bugs.", bullets: ["view shares the underlying data", "reshape may copy", "Mutating a view changes the base", "Use clone to make copies"] }
        ],
        tip: "Wrap evaluation and inference in torch.no_grad() to save memory and speed things up."
      },
      c2: {
        title: "Datasets & Training",
        intro: "Real training uses DataLoader to batch data and a loop that alternates forward passes, loss, backward, and optimiser updates. This chapter ties it together with clean patterns.",
        sections: [
          { heading: "Dataset & DataLoader", body: "A Dataset yields (input, target) pairs; a DataLoader wraps it to shuffle and batch. Iterating the loader yields minibatches ready for a training step.", bullets: ["Dataset defines __len__ and __getitem__", "DataLoader shuffles and batches", "Batch = stack of samples", "Shuffle each epoch for training"] },
          { heading: "The Training Loop", body: "For each batch: zero gradients, forward pass, compute loss, backward, optimiser step. Track a running loss; repeat over epochs until convergence.", bullets: ["opt.zero_grad() clears old gradients", "Forward, loss, loss.backward()", "opt.step() applies the update", "Log average epoch loss"] },
          { heading: "Optimisers & Losses", body: "torch.optim.SGD and Adam update parameters. Loss choices match the task: CrossEntropyLoss for classification, MSELoss for regression.", bullets: ["SGD: plain gradient descent", "Adam: adaptive, momentum", "CrossEntropy for classification", "MSE for regression"] },
          { heading: "The Full Setup", body: "Instantiate the model, choose an optimiser bound to its parameters, and pick a loss. The loop then moves model and data to the device.", bullets: ["model = MyNet()", "optim = Adam(model.parameters(), lr)", "loss_fn matches the task", "Move model and data to device"] },
          { heading: "Train vs Eval Mode", body: "model.train() enables dropout and batchnorm updates; model.eval() freezes them for consistent inference. Switch modes accordingly in each loop.", bullets: ["train() enables regularisation layers", "eval() disables them", "Wrong mode garbles inference", "Switch at the start of each loop"] },
          { heading: "Logging & Monitoring", body: "Track loss and accuracy per epoch on both train and validation sets to catch overfitting early and record progress.", bullets: ["Log train and validation metrics", "Use validation to make decisions", "Detect overfitting from the gap", "Keep curves for debugging"] }
        ],
        tip: "Forget model.eval() before validation and your accuracy will look wrong."
      },
      c3: {
        title: "Checkpointing & GPU",
        intro: "Training runs are long, so saving and loading models matters. This chapter covers state_dict checkpoints, best-model tracking, efficient GPU usage, and resuming or deploying models.",
        sections: [
          { heading: "Saving & Loading", body: "torch.save(model.state_dict(), path) saves parameters only; torch.load then model.load_state_dict() restores them. Saving the full model also serialises architecture.", bullets: ["state_dict holds the parameters", "Save with torch.save, load with load_state_dict", "Best practice: state_dict, not whole model", "Restore by loading then eval()"] },
          { heading: "Best-Model Tracking", body: "Monitor validation loss and keep only the best checkpoint, saving when it improves. This guards against overfitting at the last epochs and lets you resume.", bullets: ["Compare each epoch's val metric", "Save when it improves", "Keep the best weights, not the last", "Resume by loading a checkpoint"] },
          { heading: "GPU Workflows", body: "Move model and data to GPU, keep the batch within memory, and use torch.no_grad() in eval. Reproducibility needs fixed seeds.", bullets: ["model.to(device) + data.to(device)", "Batch size set by GPU memory", "Set torch.manual_seed for reproducibility", "Monitor GPU utilisation"] },
          { heading: "Checkpoint Resume", body: "Periodically save the state_dict, optimiser state, and epoch number. This lets training resume exactly where it stopped after crashes or pauses.", bullets: ["Save model, optimiser, epoch", "Load all three to resume", "Prevents losing long runs", "Essential for big training jobs"] },
          { heading: "Hyperparameter Tuning", body: "Grid, random, or Bayesian search over learning rate, batch size, and width. Track every trial so comparisons stay fair.", bullets: ["Grid or random search", "Tune one seed per config", "Record all runs", "Select by validation metric"] },
          { heading: "From Training to Inference", body: "After training, set eval mode, wrap in no_grad, and export to ONNX or TorchScript for production. Deployment favours lightweight, quantised models.", bullets: ["eval() + no_grad for inference", "Export to ONNX or TorchScript", "Quantise to shrink the model", "Separate training and serving code"] }
        ],
        tip: "Set a random seed once at the top of the script so every run is reproducible."
      }
    },
    exercises: [
      { chId: "c1", title: "Tensor Size", instructions: "Create a tensor with shape (3, 4). How many elements?", code: 'rows = 3\ncols = 4\nprint(rows * cols)', expected: "12", hint: "Multiply dimensions" },
      { chId: "c1", title: "Autograd Derivative", instructions: "y = x**2 with x=3. dy/dx = 2*x. Print the derivative.", code: 'x = 3\nprint(2 * x)', expected: "6", hint: "Derivative of x^2 is 2x" },
      { chId: "c1", title: "Gradient Shape", instructions: "A gradient tensor matches the weight tensor's shape (5, 5). Elements?", code: 'rows = 5\ncols = 5\nprint(rows * cols)', expected: "25", hint: "Shapes match element-wise" },
      { chId: "c2", title: "Batch Elements", instructions: "DataLoader with dataset size 100 and batch size 25. Batches per epoch?", code: 'size = 100\nbatch = 25\nprint(size // batch)', expected: "4", hint: "Divide dataset by batch size" },
      { chId: "c2", title: "Steps per Epoch", instructions: "Epochs=3, batches per epoch=20. Total optimiser steps?", code: 'epochs = 3\nbatches = 20\nprint(epochs * batches)', expected: "60", hint: "Multiply epochs by batches" },
      { chId: "c2", title: "SGD Target", instructions: "SGD pushes w toward target 5 from w=0 with lr=0.5. One step: grad=2*(w-5)=-10. New w?", code: 'w = 0\nlr = 0.5\ngrad = 2 * (w - 5)\nprint(w - lr * grad)', expected: "5", hint: "minus lr times gradient" },
      { chId: "c2", title: "CrossEntropy Outputs", instructions: "10 classes → how many output logits?", code: 'classes = 10\nprint(classes)', expected: "10", hint: "One logit per class" },
      { chId: "c3", title: "Checkpoint Size", instructions: "A model with 5000 parameters stored as float32 (4 bytes each). Bytes?", code: 'params = 5000\nbytes_per = 4\nprint(params * bytes_per)', expected: "20000", hint: "Multiply params by bytes" },
      { chId: "c3", title: "Best of 30", instructions: "Training repeats 30 epochs, saving best at epoch 12. How many discarded after the best?", code: 'total = 30\nbest = 12\nprint(total - best)', expected: "18", hint: "Epochs after the best" }
    ],
    quizzes: [
      { chId: "c1", question: "Which call moves a tensor to the GPU?", options: ["tensor.cpu()", "tensor.cuda()", "tensor.gif()", "tensor.speed()"], answer: 1 },
      { chId: "c1", question: "Tensors with requires_grad=True store their gradients in:", options: [".data", ".grad", ".gradfn", ".func"], answer: 1 },
      { chId: "c1", question: "Broadcasting lets you:", options: ["Delete a dimension", "Align tensors of different sizes", "Disable gradients", "Freeze layers"], answer: 1 },
      { chId: "c1", question: "A view of a tensor:", options: ["Always copies data", "Shares underlying memory", "Changes dtype only", "Adds a dimension"], answer: 1 },
      { chId: "c2", question: "What does loss.backward() do?", options: ["Moves data to GPU", "Computes gradients for all tracked tensors", "Saves the model", "Shuffles the dataloader"], answer: 1 },
      { chId: "c2", question: "Which optimiser adapts per-parameter learning rates?", options: ["SGD-Only", "Adam", "Grid search", "Random search"], answer: 1 },
      { chId: "c2", question: "model.eval() is important for layers like:", options: ["Conv2d", "Dropout", "Flatten", "ReLU"], answer: 1 },
      { chId: "c2", question: "During validation you should call loss.backward() to:", options: ["Update weights", "Get metrics only", "Save memory", "Prevent overfitting"], answer: 1 },
      { chId: "c3", question: "The recommended object to torch.save is:", options: ["The whole model", "model.state_dict()", "The dataloader", "The optimiser only"], answer: 1 },
      { chId: "c3", question: "torch.no_grad() is used during:", options: ["Training", "Inference / evaluation", "Backprop", "Gradient accumulation"], answer: 1 },
      { chId: "c3", question: "To resume interrupted training you should also save:", options: ["Only the loss", "The optimiser state and epoch", "The dataset", "The learning rate"], answer: 1 },
      { chId: "c3", question: "Which helps shrink a model for deployment?", options: ["Quantisation", "More layers", "Random seeds", "Bigger batches"], answer: 0 }
    ],
    projects: [
      { title: "PyTorch Training Pipeline", brief: "Design an end-to-end training pipeline: dataset and dataloader, a small CNN, a train/eval loop with best-checkpoint saving, and GPU usage notes.", objectives: ["Define a Dataset and DataLoader", "Build a small CNN module", "Write train and eval loops", "Save best checkpoint and track GPU"], deliverables: ["Dataset/dataloader design", "Training loop pseudocode", "Checkpointing plan"], starterCode: '# PyTorch Pipeline\nepochs = 10\nbatches_per_epoch = 15\nsteps = epochs * batches_per_epoch\nbatch_size = 32\nexamples = batch_size * batches_per_epoch\nprint("Total steps:", steps)\nprint("Examples per epoch:", examples)' }
    ]
  }
};
