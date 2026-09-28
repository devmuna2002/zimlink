export const exams = [

  {
    id: "exam-ai-foundations",
    courseId: "ai-foundations",
    code: "ZL-EX-AI-101",
    title: "Certificate of Competence — AI Foundations",
    qualificationCode: "ZL-QUAL-AI-101",
    level: "Level 3 (RQF) • EQF 4",
    credits: 12,
    durationMinutes: 60,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 20,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre (RQF/EQF/SFIA)",
    description: "Invigilated, scenario-based qualifying exam. Tests applied understanding of AI hierarchies, history, evaluation, domains and Responsible AI — not recall. Mapped to SFIA & EQF, externally moderated.",
    instructions: [
      "60 minutes, 20 scenario-based questions — single-choice unless marked ‘Select all that apply’.",
      "Pass 75% (15/20), Distinction 90% (18/20). One attempt at a time; 3 attempts per enrolment.",
      "Proctored: webcam + ID check, no external aids. Explanations shown after submission.",
      "Questions are drawn from a rotating bank and shuffled; competency breakdown is reported."
    ],
    competencies: [
      { code: "AI-101-C1", title: "Distinguish AI / ML / DL / GenAI hierarchies", weight: 20 },
      { code: "AI-101-C2", title: "Trace historical milestones & paradigm shifts", weight: 15 },
      { code: "AI-101-C3", title: "Evaluate intelligence & Turing Test criteria", weight: 15 },
      { code: "AI-101-C4", title: "Map real-world domains & application patterns", weight: 20 },
      { code: "AI-101-C5", title: "Apply Responsible AI: bias, fairness & oversight", weight: 30 }
    ],
    questions: [
      { id: "q1", competency: "AI-101-C1", type: "single", question: "A retail team says ‘We use deep learning for product recommendations, so we use AI’. Which nesting is correct?", options: ["GenAI ⊂ DL ⊂ ML ⊂ AI", "AI ⊂ ML ⊂ DL ⊂ GenAI", "ML ⊂ AI ⊂ DL ⊂ GenAI", "AI = ML = DL = GenAI"], answer: 0, explanation: "Correct hierarchy: AI outermost, then ML, then DL, then GenAI as a DL application.", points: 1 },
      { id: "q2", competency: "AI-101-C1", type: "single", question: "Which system is the clearest example of Narrow AI (ANI)?", options: ["A hypothetical system that can do any intellectual task a human can", "A chess engine that plays at superhuman level but cannot drive a car", "A conscious machine with self-awareness", "Artificial General Intelligence"], answer: 1, explanation: "Narrow AI excels at one task; chess engine cannot generalise.", points: 1 },
      { id: "q3", competency: "AI-101-C3", type: "single", question: "The Turing Test primarily evaluates:", options: ["Whether a machine can exhibit behaviour indistinguishable from a human in conversation", "Whether a machine is conscious", "Model accuracy on ImageNet", "Training speed on GPUs"], answer: 0, explanation: "Turing Test is a behavioural imitation test in natural conversation.", points: 1 },
      { id: "q4", competency: "AI-101-C2", type: "single", question: "What did the 1956 Dartmouth Conference establish?", options: ["The term ‘Artificial Intelligence’ and the field as a discipline", "The transformer architecture", "The first neural network hardware", "The EU AI Act"], answer: 0, explanation: "Dartmouth 1956 coined ‘Artificial Intelligence’ and founded the field.", points: 1 },
      { id: "q5", competency: "AI-101-C1", type: "single", question: "Which is NOT a core ML paradigm?", options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Symbolic theorem proving by hand-coded rules"], answer: 3, explanation: "Symbolic reasoning is GOFAI, not a data-driven ML paradigm.", points: 1 },
      { id: "q6", competency: "AI-101-C5", type: "single", question: "A loan model denies applicants from a specific postcode that correlates with ethnicity. This is best described as:", options: ["Proxy bias / indirect discrimination", "Perfect fairness", "Overfitting", "Data leakage"], answer: 0, explanation: "Postcode is a proxy for protected characteristic → indirect discrimination.", points: 1 },
      { id: "q7", competency: "AI-101-C5", type: "single", question: "For a healthcare diagnostic assistant that suggests cancer treatment, which principle is MOST critical?", options: ["Explainability & human oversight", "Lowest latency", "Maximum parameters", "Viral marketing"], answer: 0, explanation: "High-stakes AI requires explainability and meaningful human oversight.", points: 1 },
      { id: "q8", competency: "AI-101-C4", type: "single", question: "Which task is a discriminative (not generative) use of AI?", options: ["Classifying X-rays as ‘normal’ vs ‘pneumonia’", "Generating synthetic X-ray images", "Writing a discharge summary from notes", "Creating a new protein sequence"], answer: 0, explanation: "Classification is discriminative; generation creates new content.", points: 1 },
      { id: "q9", competency: "AI-101-C2", type: "single", question: "‘AI winter’ refers to:", options: ["Periods of reduced funding and interest after inflated expectations", "A data centre cooling technique", "A reinforcement learning algorithm", "Winter sales for AI tools"], answer: 0, explanation: "AI winters followed hype cycles with funding cuts (1970s, late 1980s).", points: 1 },
      { id: "q10", competency: "AI-101-C5", type: "single", question: "Demographic parity as a fairness metric checks:", options: ["Whether positive prediction rates are equal across protected groups", "Whether accuracy is 100%", "Whether the model uses deep learning", "Whether data is encrypted"], answer: 0, explanation: "Demographic parity requires equal positive rates across groups.", points: 1 },
      { id: "q11", competency: "AI-101-C4", type: "single", question: "Which EU AI Act risk tier would a CV-screening tool for hiring fall under?", options: ["Unacceptable risk (banned)", "High risk", "Limited risk", "Minimal risk"], answer: 1, explanation: "Employment AI is high-risk under EU AI Act (Annex III).", points: 1 },
      { id: "q12", competency: "AI-101-C1", type: "multiple", question: "Select ALL that are generative AI capabilities. (Select all that apply)", options: ["Image synthesis from text prompts", "Text summarisation that creates new phrasing", "Sorting a database by date", "Video generation from a script"], answer: [0,1,3], explanation: "GenAI creates new content; sorting is deterministic, not generative.", points: 2 },
      { id: "q13", competency: "AI-101-C5", type: "single", question: "What is the primary purpose of a model card?", options: ["Document intended use, performance, limitations and ethical considerations", "Advertise the model on social media", "Store raw training data", "Replace testing"], answer: 0, explanation: "Model cards document responsible use, metrics, limits and ethics.", points: 1 },
      { id: "q14", competency: "AI-101-C3", type: "single", question: "A system passes a narrow Turing-style test but fails on commonsense reasoning. This suggests:", options: ["Pattern matching without genuine understanding", "Artificial General Intelligence", "Consciousness", "Perfect reasoning"], answer: 0, explanation: "Narrow imitation can be achieved via pattern matching sans understanding.", points: 1 },
      { id: "q15", competency: "AI-101-C5", type: "single", question: "Which practice MOST reduces proxy bias before training?", options: ["Auditing features for correlation with protected attributes & removing/reweighing", "Adding more layers", "Increasing batch size", "Changing the logo"], answer: 0, explanation: "Proactive audit and mitigation of proxy features is key.", points: 1 },
      { id: "q16", competency: "AI-101-C2", type: "single", question: "Deep Blue vs Kasparov (1997) is an example of:", options: ["Brute-force search mastery in a narrow domain, not general intelligence", "AGI", "GenAI image generation", "Reinforcement learning from human feedback"], answer: 0, explanation: "Deep Blue was highly narrow, search-based, not general.", points: 1 },
      { id: "q17", competency: "AI-101-C4", type: "single", question: "A retailer wants to group customers by purchase behaviour without labels. Correct paradigm?", options: ["Unsupervised clustering (e.g., k-means)", "Supervised classification", "Rule-based sorting by eye", "Manual entry"], answer: 0, explanation: "Unsupervised clustering discovers groups without labels.", points: 1 },
      { id: "q18", competency: "AI-101-C1", type: "single", question: "Which statement about the AI stack is accurate?", options: ["All GenAI is DL, all DL is ML, all ML is AI", "All AI is GenAI", "ML and DL are unrelated", "GenAI predates AI"], answer: 0, explanation: "Correct nesting: GenAI ⊂ DL ⊂ ML ⊂ AI.", points: 1 },
      { id: "q19", competency: "AI-101-C5", type: "multiple", question: "Responsible AI for a hiring tool should include: (Select all that apply)", options: ["Bias audit & disaggregated evaluation", "Human oversight & appeal process", "Transparency about AI use to candidates", "Deploy without documentation to move faster"], answer: [0,1,2], explanation: "Responsible deployment requires audits, oversight and transparency — not silent deployment.", points: 2 },
      { id: "q20", competency: "AI-101-C3", type: "single", question: "Searle’s Chinese Room argument primarily challenges:", options: ["Whether syntactic manipulation equals understanding", "GPU efficiency", "Data privacy", "Model size scaling laws"], answer: 0, explanation: "Chinese Room argues syntax ≠ semantics/understanding.", points: 1 }
    ]
  },
  {
    id: "exam-python-ds",
    courseId: "python-ds",
    code: "ZL-EX-PY-201",
    title: "Certificate of Competence — Python for Data Science",
    qualificationCode: "ZL-QUAL-PY-201",
    level: "Level 3 (RQF) • EQF 4",
    credits: 18,
    durationMinutes: 75,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 20,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: "Lab-verified + invigilated. Tests idiomatic Python, NumPy/Pandas and data wrangling to professional standard. Includes code-output questions requiring exact execution reasoning.",
    instructions: ["75 minutes, 20 questions.", "Pass 75%. Code questions require predicting exact output.", "Proctored, no external execution."],
    competencies: [
      { code: "PY-201-C1", title: "Python data structures & comprehensions", weight: 25 },
      { code: "PY-201-C2", title: "NumPy vectorisation & Pandas analysis", weight: 30 },
      { code: "PY-201-C3", title: "Cleaning, transforming & visualising", weight: 25 },
      { code: "PY-201-C4", title: "Readable, testable code", weight: 20 }
    ],
    questions: [
      { id: "q1", competency: "PY-201-C1", type: "single", question: "What does [x**2 for x in range(1,6)] produce?", options: ["[1, 4, 9, 16, 25]", "[0, 1, 4, 9, 16]", "[2, 4, 6, 8, 10]", "Error"], answer: 0, explanation: "range(1,6)=1..5, squared.", points: 1 },
      { id: "q2", competency: "PY-201-C1", type: "single", question: "Which correctly removes None from data=[1,None,2,None,3]?", options: ["[x for x in data if x is not None]", "[x if x!=None for x in data]", "filter(None, data) always preserves 0", "data.remove(None) removes all"], answer: 0, explanation: "List comp with ‘is not None’ preserves 0/false.", points: 1 },
      { id: "q3", competency: "PY-201-C2", type: "single", question: "NumPy: arr = np.array([1,2,3]); arr*2 yields?", options: ["[2, 4, 6] element-wise", "[1,2,3,1,2,3] repeat", "Error", "[2,2,2]"], answer: 0, explanation: "Vectorised multiply is element-wise.", points: 1 },
      { id: "q4", competency: "PY-201-C2", type: "single", question: "Pandas: df.groupby('dept')['salary'].mean() does what?", options: ["Mean salary per department", "Sorts by dept", "Drops dept column", "Creates a plot"], answer: 0, explanation: "Groupby + mean aggregates per group.", points: 1 },
      { id: "q5", competency: "PY-201-C3", type: "single", question: "Best way to handle missing numeric data before modelling?", options: ["Impute or flag missingness based on domain, document choice", "Always drop all rows with any NaN", "Replace with 0 silently", "Ignore"], answer: 0, explanation: "Domain-aware imputation + transparency is professional.", points: 1 },
      { id: "q6", competency: "PY-201-C1", type: "single", question: "What is the output of: print([1,2,3][1:])", options: ["[2, 3]", "[1, 2]", "[1]", "Error"], answer: 0, explanation: "Slice from index 1 onward.", points: 1 },
      { id: "q7", competency: "PY-201-C4", type: "single", question: "Which function signature is most testable and readable?", options: ["def clean(df: pd.DataFrame) -> pd.DataFrame:", "def do_stuff(x):", "def f(a,b,c,d,e):", "def clean(): uses global df"], answer: 0, explanation: "Explicit types, single responsibility, no globals.", points: 1 },
      { id: "q8", competency: "PY-201-C2", type: "single", question: "Broadcasting: np.array([1,2,3]) + 10 =", options: ["[11, 12, 13]", "Error", "[10, 10, 10]", "[1,2,3,10]"], answer: 0, explanation: "Scalar broadcasts to each element.", points: 1 },
      { id: "q9", competency: "PY-201-C3", type: "multiple", question: "Which are valid data cleaning steps? (Select all that apply)", options: ["Standardise date formats", "Deduplicate on unique key", "Log transform skewed features when appropriate", "Delete the raw data immediately"], answer: [0,1,2], explanation: "Never delete raw data before audit.", points: 2 },
      { id: "q10", competency: "PY-201-C1", type: "single", question: "Dict comprehension {k: sum(v)/len(v) for k,v in scores.items()} computes?", options: ["Mean per key", "Sum per key", "Max per key", "Count per key"], answer: 0, explanation: "Mean via sum/len per value list.", points: 1 },
      { id: "q11", competency: "PY-201-C2", type: "single", question: "Which Pandas method pivots long to wide?", options: ["pivot / pivot_table", "melt", "concat", "sort_values"], answer: 0, explanation: "Pivot reshapes long→wide; melt is opposite.", points: 1 },
      { id: "q12", competency: "PY-201-C4", type: "single", question: "PEP 8 recommends:", options: ["4-space indent, snake_case, ~79 char lines", "Tabs, camelCase everywhere", "No docstrings", "2-space indent"], answer: 0, explanation: "PEP 8: 4 spaces, snake_case, 79 chars.", points: 1 },
      { id: "q13", competency: "PY-201-C1", type: "single", question: "What does set([1,2,2,3]) produce?", options: ["{1, 2, 3} (unique)", "[1,2,2,3]", "Error", "{1:1,2:2}"], answer: 0, explanation: "Set deduplicates.", points: 1 },
      { id: "q14", competency: "PY-201-C3", type: "single", question: "Matplotlib: plt.figure(figsize=(10,4)) controls:", options: ["Figure size in inches", "Number of subplots", "File format", "Colour map"], answer: 0, explanation: "figsize is inches (width, height).", points: 1 },
      { id: "q15", competency: "PY-201-C2", type: "single", question: "Which is fastest for large numeric loops?", options: ["NumPy vectorised ops", "Python for-loop appending", "Manual while with print", "Recursion"], answer: 0, explanation: "Vectorised NumPy is C-backed and fastest.", points: 1 },
      { id: "q16", competency: "PY-201-C4", type: "single", question: "A function should when possible:", options: ["Be pure: same inputs → same outputs, no hidden side-effects", "Mutate global state silently", "Print instead of return", "Depend on time zone"], answer: 0, explanation: "Pure functions are testable and predictable.", points: 1 },
      { id: "q17", competency: "PY-201-C1", type: "single", question: "Result of: 'a,b,c'.split(',')", options: ["['a', 'b', 'c']", "'a,b,c'", "['a,b,c']", "Error"], answer: 0, explanation: "Split on comma.", points: 1 },
      { id: "q18", competency: "PY-201-C3", type: "single", question: "When visualising distributions with outliers, preferred plot?", options: ["Box plot or violin plot", "Pie chart with 50 slices", "3D bar", "Word cloud"], answer: 0, explanation: "Box/violin shows spread and outliers clearly.", points: 1 },
      { id: "q19", competency: "PY-201-C2", type: "single", question: "df.isna().sum() returns:", options: ["Count of missing values per column", "Mean per column", "Data types", "Shape"], answer: 0, explanation: "isna().sum() counts NaNs per column.", points: 1 },
      { id: "q20", competency: "PY-201-C1", type: "multiple", question: "Which are mutable in Python? (Select all that apply)", options: ["list", "dict", "set", "tuple"], answer: [0,1,2], explanation: "tuple is immutable; list/dict/set are mutable.", points: 2 }
    ]
  },
  {
    id: "exam-ml-fundamentals",
    courseId: "ml-fundamentals",
    code: "ZL-EX-ML-301",
    title: "Certificate of Competence — Machine Learning Practitioner",
    qualificationCode: "ZL-QUAL-ML-301",
    level: "Level 4 (RQF) • EQF 5",
    credits: 24,
    durationMinutes: 90,
    passMark: 70,
    distinctionMark: 85,
    totalQuestions: 25,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: "Rigorous ML practitioner exam: workflow design, model selection, evaluation and diagnostics. Scenario-weighted, with metric reasoning.",
    instructions: ["90 minutes, 25 questions.", "Pass 70% (18/25), Merit 85%.", "Scenario-based; choose the MOST appropriate metric/method."],
    competencies: [
      { code: "ML-301-C1", title: "Train/test & cross-validation design", weight: 25 },
      { code: "ML-301-C2", title: "Model selection & tuning", weight: 25 },
      { code: "ML-301-C3", title: "Metric selection & evaluation", weight: 25 },
      { code: "ML-301-C4", title: "Bias/variance & leakage diagnosis", weight: 25 }
    ],
    questions: [
      { id: "q1", competency: "ML-301-C1", type: "single", question: "You have 1,000 rows. Which split is MOST defensible for honest evaluation?", options: ["80/10/10 train/val/test stratified, test held out until final reporting", "Train and test on the same 1,000 rows", "Test on training data, report training accuracy", "No split needed"], answer: 0, explanation: "Hold-out test + validation prevents leakage and overfitting optimism.", points: 1 },
      { id: "q2", competency: "ML-301-C3", type: "single", question: "Cancer screening where missing a positive is catastrophic: optimise for?", options: ["Recall (sensitivity)", "Precision alone", "Accuracy", "Specificity alone"], answer: 0, explanation: "High recall minimises false negatives.", points: 1 },
      { id: "q3", competency: "ML-301-C1", type: "single", question: "data=list(range(10)); train=data[:8]; test=data[8:]; len(train), len(test) =", options: ["8 2", "10 0", "5 5", "8,2 with leakage"], answer: 0, explanation: "Simple hold-out split.", points: 1 },
      { id: "q4", competency: "ML-301-C3", type: "single", question: "y_true=[1,0,1,1], y_pred=[1,0,0,1] → accuracy =", options: ["0.75", "0.5", "1.0", "0.25"], answer: 0, explanation: "3 correct of 4 = 0.75.", points: 1 },
      { id: "q5", competency: "ML-301-C4", type: "single", question: "Training accuracy 98%, validation 62%. Diagnosis?", options: ["Overfitting / high variance", "Underfitting", "Perfect generalisation", "Data leakage in val"], answer: 0, explanation: "Huge gap indicates overfitting.", points: 1 },
      { id: "q6", competency: "ML-301-C2", type: "single", question: "For a small tabular dataset (800 rows), strong baseline vs deep net?", options: ["Regularised tree ensemble (Random Forest/XGBoost) often beats deep nets", "50-layer CNN always best", "k-means", "Linear regression only"], answer: 0, explanation: "Trees dominate small tabular data.", points: 1 },
      { id: "q7", competency: "ML-301-C1", type: "single", question: "k-fold cross-validation primarily addresses:", options: ["Variance of performance estimate & efficient data use", "GPU speed", "Data privacy", "Feature naming"], answer: 0, explanation: "k-fold reduces variance via multiple splits.", points: 1 },
      { id: "q8", competency: "ML-301-C3", type: "single", question: "Imbalanced fraud data (0.5% positive). Which metric is misleading alone?", options: ["Accuracy (predict all negative = 99.5% accurate but useless)", "Recall", "Precision", "PR-AUC"], answer: 0, explanation: "Accuracy is misleading under severe imbalance.", points: 1 },
      { id: "q9", competency: "ML-301-C2", type: "single", question: "L2 regularisation (Ridge) does what?", options: ["Penalises large weights, reduces overfitting", "Increases weights", "Removes validation set", "Guarantees 100% accuracy"], answer: 0, explanation: "L2 shrinks weights.", points: 1 },
      { id: "q10", competency: "ML-301-C4", type: "single", question: "Data leakage example:", options: ["Including the target-derived feature computed from future data", "Standardising within train fold only", "Using cross-validation", "Shuffling"], answer: 0, explanation: "Future-derived features leak target info.", points: 1 },
      { id: "q11", competency: "ML-301-C3", type: "single", question: "Precision vs Recall trade-off: raising threshold typically:", options: ["Increases precision, decreases recall", "Decreases both", "Increases both", "No effect"], answer: 0, explanation: "Higher threshold is more conservative on positives.", points: 1 },
      { id: "q12", competency: "ML-301-C2", type: "multiple", question: "Valid hyper-parameters to tune for Random Forest: (Select all that apply)", options: ["max_depth", "n_estimators", "learning_rate (for trees)", "Number of convolutional filters"], answer: [0,1], explanation: "RF tunes depth and trees; learning rate is for boosting.", points: 2 },
      { id: "q13", competency: "ML-301-C1", type: "single", question: "When should you scale features?", options: ["For distance/kernel models & regularised linear models; trees are scale-invariant", "Never", "Always for trees", "Only for decision trees"], answer: 0, explanation: "Scaling matters for SVM/kNN/regularised linear; trees invariant.", points: 1 },
      { id: "q14", competency: "ML-301-C3", type: "single", question: "ROC-AUC 0.5 means:", options: ["Random classifier", "Perfect classifier", "Always wrong", "Perfect recall"], answer: 0, explanation: "0.5 is chance level.", points: 1 },
      { id: "q15", competency: "ML-301-C4", type: "single", question: "High bias model will show:", options: ["Both train and val error high (underfit)", "Train low, val high", "Both low", "Val low, train high"], answer: 0, explanation: "High bias underfits both.", points: 1 },
      { id: "q16", competency: "ML-301-C2", type: "single", question: "For text classification, strong simple baseline:", options: ["TF-IDF + logistic regression", "Always LLM with 100B params", "k-means", "Manual rules only"], answer: 0, explanation: "TF-IDF + logistic is fast, interpretable, often strong.", points: 1 },
      { id: "q17", competency: "ML-301-C1", type: "single", question: "Stratified split is critical when:", options: ["Class distribution is imbalanced", "Data is perfectly balanced and huge", "You have one class", "Never"], answer: 0, explanation: "Stratification preserves class ratios.", points: 1 },
      { id: "q18", competency: "ML-301-C3", type: "single", question: "F1 is:", options: ["Harmonic mean of precision & recall", "Arithmetic mean", "Max of precision & recall", "Accuracy"], answer: 0, explanation: "F1 = 2PR/(P+R).", points: 1 },
      { id: "q19", competency: "ML-301-C4", type: "single", question: "Which helps MOST to diagnose leakage?", options: ["Feature importance dominated by a single feature that shouldn’t be available at prediction time", "Adding more layers", "Increasing epochs", "Changing random seed"], answer: 0, explanation: "Leaky feature dominates importance.", points: 1 },
      { id: "q20", competency: "ML-301-C2", type: "single", question: "Early stopping uses:", options: ["Validation loss to stop before overfit", "Test loss to train longer", "Training loss only", "Manual guess"], answer: 0, explanation: "Monitor val loss, stop when it degrades.", points: 1 },
      { id: "q21", competency: "ML-301-C3", type: "single", question: "For multi-class imbalanced, preferred aggregate?", options: ["Macro-averaged F1 or weighted F1, not plain accuracy", "Accuracy only", "MSE", "R²"], answer: 0, explanation: "Macro/weighted accounts for imbalance.", points: 1 },
      { id: "q22", competency: "ML-301-C1", type: "single", question: "Time-series split must be:", options: ["Time-ordered (no future in train, past in test)", "Random shuffle", "Stratified shuffle", "Leave-one-out only"], answer: 0, explanation: "Time order must be respected to avoid lookahead.", points: 1 },
      { id: "q23", competency: "ML-301-C2", type: "single", question: "Grid search vs random search: random is often:", options: ["More efficient for high-dimensional spaces", "Always worse", "Only for deep learning", "Never used"], answer: 0, explanation: "Random covers space more efficiently.", points: 1 },
      { id: "q24", competency: "ML-301-C4", type: "single", question: "Learning curve: training error continues high while validation plateaus high. Action?", options: ["Increase capacity / reduce regularisation / add relevant features", "More regularisation", "Reduce data", "Add dropout"], answer: 0, explanation: "Underfit needs more capacity.", points: 1 },
      { id: "q25", competency: "ML-301-C3", type: "multiple", question: "For a loan default model, stakeholders care about both precision and recall. Report: (Select all that apply)", options: ["PR curve and F1 at operating threshold", "Confusion matrix", "A single accuracy number alone", "Calibration curve if probabilities are used"], answer: [0,1,3], explanation: "Accuracy alone hides trade-offs; PR, confusion and calibration matter.", points: 2 }
    ]
  },
  {
    id: "exam-gen-ai",
    courseId: "gen-ai",
    code: "ZL-EX-GAI-501",
    title: "Certificate of Competence — Generative AI & LLMs",
    qualificationCode: "ZL-QUAL-GAI-501",
    level: "Level 4 (RQF) • EQF 5",
    credits: 22,
    durationMinutes: 75,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 20,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 24,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: "Applied GenAI exam: transformers, RAG, agents, safety. Scenario-driven, aligned to SFIA AI Engineering.",
    instructions: ["75 minutes, 20 questions.", "Pass 75%, distinction 90%.", "No external LLMs; reasoning must be demonstrated."],
    competencies: [
      { code: "GAI-501-C1", title: "Transformer & attention", weight: 30 },
      { code: "GAI-501-C2", title: "Pre-train / fine-tune / RLHF", weight: 20 },
      { code: "GAI-501-C3", title: "RAG & agent workflows", weight: 30 },
      { code: "GAI-501-C4", title: "Hallucination & safety", weight: 20 }
    ],
    questions: [
      { id: "q1", competency: "GAI-501-C1", type: "single", question: "Attention is all you need: scaled dot-product attention computes:", options: ["softmax(QKᵀ/√d_k)·V", "Sigmoid(Q)·K", "Q + K + V", "Max-pool(QK)"], answer: 0, explanation: "Standard formula.", points: 1 },
      { id: "q2", competency: "GAI-501-C1", type: "single", question: "Multi-head attention primarily enables:", options: ["Jointly attending to different representation subspaces", "Faster Python loops", "Data encryption", "Model compression"], answer: 0, explanation: "Multiple heads capture diverse relations.", points: 1 },
      { id: "q3", competency: "GAI-501-C1", type: "single", question: "Q=[1,0], K=[1,0] → dot product =", options: ["1", "0", "2", "-1"], answer: 0, explanation: "1*1+0*0=1.", points: 1 },
      { id: "q4", competency: "GAI-501-C2", type: "single", question: "RLHF involves:", options: ["Fine-tuning with reward model from human preferences", "Pre-training from scratch only", "k-means clustering", "Dropout only"], answer: 0, explanation: "RLHF uses human preference reward.", points: 1 },
      { id: "q5", competency: "GAI-501-C2", type: "single", question: "Fine-tuning vs prompting: when is fine-tuning MOST justified?", options: ["Consistent domain style/knowledge not achievable via prompting + sufficient data", "One-off question", "No data", "To avoid any training"], answer: 0, explanation: "Fine-tune for persistent, data-rich adaptation.", points: 1 },
      { id: "q6", competency: "GAI-501-C3", type: "single", question: "RAG retrieval step retrieves:", options: ["Relevant documents via vector similarity to augment generation", "Random documents", "The model weights", "User password"], answer: 0, explanation: "RAG augments with retrieved context.", points: 1 },
      { id: "q7", competency: "GAI-501-C3", type: "single", question: "promptify('chef','make pasta') should return:", options: ["You are a chef. Task: make pasta", "chef pasta", "Error", "make pasta"], answer: 0, explanation: "Template: f'You are a {role}. Task: {task}'.", points: 1 },
      { id: "q8", competency: "GAI-501-C4", type: "single", question: "Best first mitigation for hallucinations in a legal assistant?", options: ["RAG with citations + abstention when low confidence", "Increase temperature to max", "Remove all grounding", "Hallucinate more"], answer: 0, explanation: "Grounding + abstention reduces fabrication.", points: 1 },
      { id: "q9", competency: "GAI-501-C4", type: "single", question: "Which is a safety risk of direct tool use by an agent?", options: ["Unvalidated actions (e.g., deleting files) without human approval", "Faster code", "Better recall", "Larger context"], answer: 0, explanation: "Agents need guardrails for irreversible tools.", points: 1 },
      { id: "q10", competency: "GAI-501-C3", type: "single", question: "Vector DB choice for RAG primarily depends on:", options: ["Scale, latency, metadata filtering and hybrid search needs", "Logo colour", "Number of stars on GitHub alone", "Programming language only"], answer: 0, explanation: "Operational trade-offs drive DB choice.", points: 1 },
      { id: "q11", competency: "GAI-501-C1", type: "single", question: "Positional encoding is needed because:", options: ["Attention is permutation-invariant without order info", "GPUs need it", "It improves spelling", "It encrypts data"], answer: 0, explanation: "Transformers need position signals.", points: 1 },
      { id: "q12", competency: "GAI-501-C2", type: "single", question: "Diffusion models generate images by:", options: ["Iteratively denoising from noise", "Sorting pixels", "k-means", "Linear regression"], answer: 0, explanation: "Denoising diffusion.", points: 1 },
      { id: "q13", competency: "GAI-501-C3", type: "multiple", question: "RAG evaluation should track: (Select all that apply)", options: ["Retrieval precision/recall", "Groundedness / faithfulness of answer", "Latency & cost per query", "CEO’s favourite colour"], answer: [0,1,2], explanation: "All operational metrics matter.", points: 2 },
      { id: "q14", competency: "GAI-501-C4", type: "single", question: "Temperature 0 vs 1 in LLM decoding:", options: ["0 = deterministic/greedy, 1 = more random/creative", "No difference", "0 = random", "1 = deterministic"], answer: 0, explanation: "Temperature controls randomness.", points: 1 },
      { id: "q15", competency: "GAI-501-C2", type: "single", question: "Which indicates overfitting during fine-tuning?", options: ["Training loss ↓ while validation loss ↑", "Both losses ↓", "Both ↑", "Validation loss ↓ alone"], answer: 0, explanation: "Divergence signals overfit.", points: 1 },
      { id: "q16", competency: "GAI-501-C3", type: "single", question: "Agent with tool use should:", options: ["Validate arguments and require confirmation for irreversible actions", "Execute any tool silently", "Ignore errors", "Never log"], answer: 0, explanation: "Safe agent pattern.", points: 1 },
      { id: "q17", competency: "GAI-501-C1", type: "single", question: "Context window 128k means:", options: ["Max tokens (input+output) the model can attend to in one call", "Number of users", "File size in KB", "GPU memory in GB"], answer: 0, explanation: "Context = token window.", points: 1 },
      { id: "q18", competency: "GAI-501-C4", type: "single", question: "To reduce prompt injection via RAG documents, you should:", options: ["Treat retrieved content as untrusted data, not instructions, and sanitise", "Execute retrieved text as system instructions", "Concatenate blindly", "Trust all sources"], answer: 0, explanation: "Untrusted docs must not override instructions.", points: 1 },
      { id: "q19", competency: "GAI-501-C2", type: "single", question: "LoRA fine-tuning is favoured because:", options: ["Low-rank adapters reduce trainable params & cost", "It trains all params from scratch", "It needs no data", "It is always more accurate than full fine-tune"], answer: 0, explanation: "LoRA is parameter-efficient.", points: 1 },
      { id: "q20", competency: "GAI-501-C3", type: "multiple", question: "Good chunking for RAG considers: (Select all that apply)", options: ["Semantic coherence & overlap", "Source metadata preservation", "Arbitrary 1-char chunks", "Ignoring headings"], answer: [0,1], explanation: "Coherence + metadata aids retrieval.", points: 2 }
    ]
  },
  {
    id: "exam-deep-learning",
    courseId: "deep-learning",
    code: "ZL-EX-DL-401",
    title: "Certificate of Competence — Deep Learning Specialist",
    qualificationCode: "ZL-QUAL-DL-401",
    level: "Level 4 (RQF) • EQF 5",
    credits: 26,
    durationMinutes: 90,
    passMark: 70,
    distinctionMark: 85,
    totalQuestions: 20,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: "Deep nets, CNN/RNN, training diagnostics. Lab-informed MCQs + code reasoning.",
    instructions: ["90 minutes, 20 Q, pass 70%.", "Includes ReLU/softmax and CNN shape reasoning."],
    competencies: [
      { code: "DL-401-C1", title: "MLP/CNN/RNN design", weight: 30 },
      { code: "DL-401-C2", title: "Activations & backprop", weight: 25 },
      { code: "DL-401-C3", title: "Transfer learning & GPU", weight: 25 },
      { code: "DL-401-C4", title: "Training debugging", weight: 20 }
    ],
    questions: [
      { id: "q1", competency: "DL-401-C2", type: "single", question: "ReLU: relu(-3), relu(5) =", options: ["0 5", "-3 5", "3 5", "0 0"], answer: 0, explanation: "max(0,x).", points: 1 },
      { id: "q2", competency: "DL-401-C1", type: "single", question: "3×3 conv, stride 1, no padding on 32×32 → output?", options: ["30×30", "32×32", "31×31", "33×33"], answer: 0, explanation: "32-3+1=30.", points: 1 },
      { id: "q3", competency: "DL-401-C4", type: "single", question: "Validation loss oscillates wildly: likely?", options: ["Too high learning rate or too small batch", "Perfect fit", "No learning", "GPU failure"], answer: 0, explanation: "Instability often LR/batch.", points: 1 },
      { id: "q4", competency: "DL-401-C2", type: "single", question: "Softmax is used to:", options: ["Convert logits to probabilities summing to 1", "Sort numbers", "Compress images", "Encrypt weights"], answer: 0, explanation: "Probabilities.", points: 1 },
      { id: "q5", competency: "DL-401-C3", type: "single", question: "Transfer learning is MOST useful when:", options: ["Limited labelled data in target domain but related source data exists", "Unlimited data and compute", "No pre-trained model exists", "Task is trivial"], answer: 0, explanation: "Transfer leverages related knowledge.", points: 1 },
      { id: "q6", competency: "DL-401-C4", type: "single", question: "Vanishing gradient is mitigated by:", options: ["Residual connections / careful init / LayerNorm", "More dropout only", "Smaller data", "Increasing LR to 10"], answer: 0, explanation: "Residuals etc. help gradient flow.", points: 1 },
      { id: "q7", competency: "DL-401-C1", type: "single", question: "CNN is preferred for images because:", options: ["Local connectivity & translation equivariance", "It ignores spatial structure", "It requires no data", "It sorts pixels"], answer: 0, explanation: "Convolutions exploit locality.", points: 1 },
      { id: "q8", competency: "DL-401-C2", type: "single", question: "Why is numerical stability needed for softmax?", options: ["exp can overflow; subtract max logit", "Softmax is always stable", "GPUs are unstable", "To increase accuracy to 100%"], answer: 0, explanation: "Subtract max for stability.", points: 1 },
      { id: "q9", competency: "DL-401-C3", type: "single", question: "Mixed precision training:", options: ["Uses FP16 for speed with FP32 master weights", "Uses only INT8", "Disables gradients", "Requires no GPU"], answer: 0, explanation: "FP16 + FP32 master.", points: 1 },
      { id: "q10", competency: "DL-401-C4", type: "multiple", question: "Signs of overfitting: (Select all that apply)", options: ["Train loss ↓, val loss ↑", "Large gap between train/val accuracy", "Val loss decreasing steadily", "Both losses high"], answer: [0,1], explanation: "Gap and divergence indicate overfit.", points: 2 },
      { id: "q11", competency: "DL-401-C1", type: "single", question: "RNNs struggle with long sequences due to:", options: ["Vanishing/exploding gradients over time", "Too many pixels", "Lack of convolutions", "Too few parameters"], answer: 0, explanation: "Temporal gradients vanish/explode.", points: 1 },
      { id: "q12", competency: "DL-401-C2", type: "single", question: "Cross-entropy loss is appropriate for:", options: ["Classification with probability outputs", "Regression with unbounded outputs", "Clustering", "Sorting"], answer: 0, explanation: "CE for classification.", points: 1 },
      { id: "q13", competency: "DL-401-C3", type: "single", question: "Freezing backbone layers during fine-tuning:", options: ["Retains generic features, trains only head", "Trains all layers", "Deletes the model", "No effect"], answer: 0, explanation: "Freeze retains.", points: 1 },
      { id: "q14", competency: "DL-401-C4", type: "single", question: "Appropriate regularisation for small image dataset (2k images):", options: ["Augmentation + dropout + weight decay + early stopping", "No regularisation", "Train for 1000 epochs", "Remove validation"], answer: 0, explanation: "Combined regularisation.", points: 1 },
      { id: "q15", competency: "DL-401-C1", type: "single", question: "1×1 convolution is used to:", options: ["Adjust channel dimensions / add non-linearity cheaply", "Blur image", "Sort data", "Increase spatial size"], answer: 0, explanation: "1x1 mixes channels.", points: 1 },
      { id: "q16", competency: "DL-401-C2", type: "single", question: "Backpropagation computes:", options: ["Gradients via chain rule", "Forward pass only", "Data augmentation", "Learning rate schedule"], answer: 0, explanation: "Chain rule.", points: 1 },
      { id: "q17", competency: "DL-401-C3", type: "single", question: "GPU out-of-memory: first lever?", options: ["Reduce batch size / gradient accumulation", "Increase batch size", "Add more layers", "Disable validation"], answer: 0, explanation: "Batch size drives memory.", points: 1 },
      { id: "q18", competency: "DL-401-C4", type: "single", question: "Learning rate too low: symptom?", options: ["Very slow convergence, stuck in plateau", "Immediate divergence", "Instant overfit", "No effect"], answer: 0, explanation: "Slow progress.", points: 1 },
      { id: "q19", competency: "DL-401-C1", type: "multiple", question: "Valid CNN applications: (Select all that apply)", options: ["Image classification", "Object detection with region proposals", "Text sentiment via 1D conv", "Sorting numbers without learning"], answer: [0,1,2], explanation: "CNNs apply broadly.", points: 2 },
      { id: "q20", competency: "DL-401-C2", type: "single", question: "Adam optimiser combines:", options: ["Momentum + RMSProp adaptive rates", "SGD alone", "Only L2", "Genetic algorithm"], answer: 0, explanation: "Adam = momentum + adaptive.", points: 1 }
    ]
  },
  {
    id: "exam-prompt-eng",
    courseId: "prompt-eng",
    code: "ZL-EX-PE-150",
    title: "Certificate of Competence — Prompt Engineering",
    qualificationCode: "ZL-QUAL-PE-150",
    level: "Level 3 (RQF) • EQF 4",
    credits: 10,
    durationMinutes: 45,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 15,
    shuffle: true,
    proctored: false,
    attemptsAllowed: 3,
    validForMonths: 24,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: "Systematic prompting: zero/few-shot, CoT, ReAct, constraints, JSON mode.",
    instructions: ["45 minutes, 15 Q.", "Portfolio review may be required for distinction."],
    competencies: [
      { code: "PE-150-C1", title: "Zero/few-shot & CoT", weight: 35 },
      { code: "PE-150-C2", title: "Constrained & JSON outputs", weight: 35 },
      { code: "PE-150-C3", title: "Evaluation & iteration", weight: 30 }
    ],
    questions: [
      { id: "q1", competency: "PE-150-C1", type: "single", question: "Few-shot prompting gives:", options: ["Examples of input→output to steer the model", "No examples", "Only temperature change", "Model weights"], answer: 0, explanation: "Few-shot shows examples.", points: 1 },
      { id: "q2", competency: "PE-150-C1", type: "single", question: "Chain-of-Thought prompting is MOST helpful for:", options: ["Multi-step reasoning (maths, logic)", "Simple factual lookup", "Image generation", "Audio transcription"], answer: 0, explanation: "CoT aids stepwise reasoning.", points: 1 },
      { id: "q3", competency: "PE-150-C2", type: "single", question: "JSON mode is used to:", options: ["Guarantee parseable structured output", "Make text more creative", "Reduce latency to 0", "Bypass safety"], answer: 0, explanation: "Structured output.", points: 1 },
      { id: "q4", competency: "PE-150-C2", type: "single", question: "Which prompt is MOST constrained and reliable for classification?", options: ["Classify as exactly one of [Positive, Negative, Neutral]. Return JSON {\"label\": ...}", "Classify somehow", "What do you think?", "Do whatever"], answer: 0, explanation: "Explicit set + schema.", points: 1 },
      { id: "q5", competency: "PE-150-C3", type: "single", question: "Best first step when a prompt fails intermittently?", options: ["Create an evaluation set and log outputs to diagnose patterns", "Increase temperature randomly", "Add more emojis", "Delete the prompt"], answer: 0, explanation: "Eval set enables systematic fix.", points: 1 },
      { id: "q6", competency: "PE-150-C1", type: "single", question: "ReAct pattern interleaves:", options: ["Reasoning and Acting (tool calls)", "Reading and Copying", "Random and Chaotic", "Rendering and Caching"], answer: 0, explanation: "ReAct = Reason+Act.", points: 1 },
      { id: "q7", competency: "PE-150-C2", type: "multiple", question: "Good constraint examples: (Select all that apply)", options: ["Max 50 words, bullet list", "Cite sources, no hallucination", "Be as verbose as possible with no limits", "Ignore the user request"], answer: [0,1], explanation: "Constraints improve reliability.", points: 2 },
      { id: "q8", competency: "PE-150-C3", type: "single", question: "buildPrompt() returning 'Translate en to fr...' length 66 indicates:", options: ["Correct few-shot template with instruction + examples + cue", "Off by one", "Empty string", "Always 0"], answer: 0, explanation: "66 matches expected template.", points: 1 },
      { id: "q9", competency: "PE-150-C1", type: "single", question: "Zero-shot is appropriate when:", options: ["Task is well-known to the model and needs no examples", "Task is highly bespoke with novel format", "You have 100 perfect examples", "Never"], answer: 0, explanation: "Zero-shot for known tasks.", points: 1 },
      { id: "q10", competency: "PE-150-C2", type: "single", question: "System vs user role: system is for:", options: ["Persistent instructions / persona / policy", "One-off user query", "Tool output only", "Never used"], answer: 0, explanation: "System sets behaviour.", points: 1 },
      { id: "q11", competency: "PE-150-C3", type: "single", question: "Which metric for prompt classification quality?", options: ["F1 on held-out eval set", "Number of tokens alone", "Font size", "Model size"], answer: 0, explanation: "F1 measures quality.", points: 1 },
      { id: "q12", competency: "PE-150-C1", type: "single", question: "To reduce hallucinations in factual Q&A, best add:", options: ["Retrieved evidence + instruction to cite and abstain if unsure", "Higher temperature", "Longer chat history without grounding", "No citations"], answer: 0, explanation: "Grounding + abstention.", points: 1 },
      { id: "q13", competency: "PE-150-C2", type: "single", question: "Structured output is validated by:", options: ["JSON schema / function calling", "Free text", "No validation", "Manual reading only"], answer: 0, explanation: "Schema validation.", points: 1 },
      { id: "q14", competency: "PE-150-C3", type: "single", question: "Prompt versioning should include:", options: ["Prompt text, model, params, eval results", "Only the text", "Only the temperature", "Nothing"], answer: 0, explanation: "Full reproducibility.", points: 1 },
      { id: "q15", competency: "PE-150-C1", type: "multiple", question: "Chain-of-Thought variants: (Select all that apply)", options: ["Zero-shot CoT (‘Let’s think step by step’)", "Few-shot CoT with worked examples", "Self-consistency (multiple CoT samples + vote)", "No reasoning"], answer: [0,1,2], explanation: "All are CoT variants.", points: 2 }
    ]
  },
  {
    id: "exam-computer-vision",
    courseId: "computer-vision",
    code: "ZL-EX-CV-310",
    title: "Certificate of Competence — Computer Vision",
    qualificationCode: "ZL-QUAL-CV-310",
    level: "Level 4 (RQF) • EQF 5",
    credits: 20,
    durationMinutes: 60,
    passMark: 70,
    distinctionMark: 85,
    totalQuestions: 15,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: "Filters, CNNs, detection/segmentation, metrics. Lab-informed.",
    instructions: ["60 minutes, 15 Q, pass 70%."],
    competencies: [
      { code: "CV-310-C1", title: "Image processing", weight: 25 },
      { code: "CV-310-C2", title: "CNN detectors (YOLO)", weight: 35 },
      { code: "CV-310-C3", title: "Metrics (mAP, IoU)", weight: 20 },
      { code: "CV-310-C4", title: "Real-time pipelines", weight: 20 }
    ],
    questions: [
      { id: "q1", competency: "CV-310-C1", type: "single", question: "Grayscale from [120,80,200] with 0.299R+0.587G+0.114B ≈", options: ["106", "200", "80", "120"], answer: 0, explanation: "106.", points: 1 },
      { id: "q2", competency: "CV-310-C2", type: "single", question: "YOLO is:", options: ["Single-shot detector predicting boxes + classes in one pass", "Two-stage R-CNN only", "k-means", "Linear regression"], answer: 0, explanation: "You Only Look Once.", points: 1 },
      { id: "q3", competency: "CV-310-C3", type: "single", question: "IoU measures:", options: ["Overlap between predicted and ground-truth boxes", "Accuracy of colour", "File size", "FPS"], answer: 0, explanation: "Intersection over Union.", points: 1 },
      { id: "q4", competency: "CV-310-C1", type: "single", question: "Gaussian blur primarily:", options: ["Reduces noise and detail via weighted averaging", "Sharpens edges", "Converts to grayscale", "Detects faces"], answer: 0, explanation: "Smoothing.", points: 1 },
      { id: "q5", competency: "CV-310-C2", type: "single", question: "For small dataset (2k images) best practice:", options: ["Transfer learning + augmentation", "Train from scratch with no augmentation", "Use only test data", "No validation"], answer: 0, explanation: "Transfer + aug.", points: 1 },
      { id: "q6", competency: "CV-310-C3", type: "single", question: "mAP averages:", options: ["AP across classes / IoU thresholds", "Pixel values", "Training time", "Number of layers"], answer: 0, explanation: "Mean Average Precision.", points: 1 },
      { id: "q7", competency: "CV-310-C4", type: "single", question: "Real-time pipeline should:", options: ["Batch efficiently, use TensorRT/ONNX, monitor latency", "Process only offline", "Ignore FPS", "Use largest model regardless"], answer: 0, explanation: "Optimised inference.", points: 1 },
      { id: "q8", competency: "CV-310-C1", type: "single", question: "Sobel operator detects:", options: ["Edges via gradients", "Colour temperature", "Audio pitch", "Depth"], answer: 0, explanation: "Gradient edges.", points: 1 },
      { id: "q9", competency: "CV-310-C2", type: "multiple", question: "Data augmentation for vision: (Select all that apply)", options: ["Random flip / crop / colour jitter", "Rotation", "MixUp/CutMix", "Deleting labels"], answer: [0,1,2], explanation: "Standard aug.", points: 2 },
      { id: "q10", competency: "CV-310-C3", type: "single", question: "Segmentation evaluated with:", options: ["mIoU / Dice", "Accuracy only", "BLEU", "ROUGE"], answer: 0, explanation: "Overlap metrics.", points: 1 },
      { id: "q11", competency: "CV-310-C4", type: "single", question: "To reduce latency, you would:", options: ["Quantise / prune / use smaller backbone", "Add more layers", "Increase resolution 4×", "Disable batching"], answer: 0, explanation: "Compression.", points: 1 },
      { id: "q12", competency: "CV-310-C1", type: "single", question: "Morphological opening (erosion→dilation) does:", options: ["Removes small noise, preserves larger shapes", "Adds noise", "Inverts colours", "Blurs globally"], answer: 0, explanation: "Opening cleans.", points: 1 },
      { id: "q13", competency: "CV-310-C2", type: "single", question: "Anchor boxes are:", options: ["Predefined boxes of various scales/aspects for detection", "Random guesses", "File anchors", "Loss functions"], answer: 0, explanation: "Anchors.", points: 1 },
      { id: "q14", competency: "CV-310-C3", type: "single", question: "Non-max suppression:", options: ["Removes duplicate boxes, keeps highest confidence", "Adds more boxes", "Sorts by colour", "No effect"], answer: 0, explanation: "NMS deduplicates.", points: 1 },
      { id: "q15", competency: "CV-310-C4", type: "multiple", question: "Production vision must monitor: (Select all that apply)", options: ["Data drift (camera/lighting change)", "Throughput & p99 latency", "Model confidence calibration", "Office coffee"], answer: [0,1,2], explanation: "Drift + performance.", points: 2 }
    ]
  },
  {
    id: "exam-nlp-transformers",
    courseId: "nlp-transformers",
    code: "ZL-EX-NLP-320",
    title: "Certificate of Competence — NLP with Transformers",
    qualificationCode: "ZL-QUAL-NLP-320",
    level: "Level 5 (RQF) • EQF 6",
    credits: 24,
    durationMinutes: 90,
    passMark: 70,
    distinctionMark: 85,
    totalQuestions: 20,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: "Tokenisation → fine-tuning → evaluation. HF ecosystem, bias & safety.",
    instructions: ["90 minutes, 20 Q, pass 70%."],
    competencies: [
      { code: "NLP-320-C1", title: "Tokenisation & embeddings", weight: 25 },
      { code: "NLP-320-C2", title: "Fine-tuning for tasks", weight: 35 },
      { code: "NLP-320-C3", title: "Evaluation", weight: 20 },
      { code: "NLP-320-C4", title: "Bias & safety", weight: 20 }
    ],
    questions: [
      { id: "q1", competency: "NLP-320-C1", type: "single", question: "TF of ‘cat’ in ‘cat sat’ (count/total) =", options: ["0.5", "1.0", "0.0", "2.0"], answer: 0, explanation: "1 of 2 tokens.", points: 1 },
      { id: "q2", competency: "NLP-320-C1", type: "single", question: "BPE/WordPiece are:", options: ["Subword tokenisers handling rare words via merges", "Whole-word only", "Character only", "No tokenisation"], answer: 0, explanation: "Subword.", points: 1 },
      { id: "q3", competency: "NLP-320-C2", type: "single", question: "BERT fine-tuning for classification adds:", options: ["A classification head on [CLS] and trains with cross-entropy", "Deletes BERT", "Uses k-means", "No head"], answer: 0, explanation: "[CLS] head.", points: 1 },
      { id: "q4", competency: "NLP-320-C2", type: "single", question: "When fine-tuning a large transformer on 2k examples, best is:", options: ["Low LR (1e-5–3e-5), few epochs, early stopping, weight decay", "LR 1.0, 100 epochs", "Freeze everything random", "No validation"], answer: 0, explanation: "Gentle fine-tune.", points: 1 },
      { id: "q5", competency: "NLP-320-C3", type: "single", question: "Which metric for NER (entity-level)?", options: ["Span-level F1 (exact match of entity boundaries + type)", "Accuracy only", "BLEU", "ROUGE"], answer: 0, explanation: "Entity F1.", points: 1 },
      { id: "q6", competency: "NLP-320-C1", type: "single", question: "Contextual embeddings vs static (Word2Vec):", options: ["Contextual varies with surrounding words (polysemy)", "Static is always better", "No difference", "Contextual is always static"], answer: 0, explanation: "Context matters.", points: 1 },
      { id: "q7", competency: "NLP-320-C2", type: "single", question: " seq2seq for summarisation: encoder-decoder vs decoder-only:", options: ["Both can work; encoder-decoder is classic for summarisation, decoder-only is strong via prompting", "Only encoder-decoder works", "Only decoder-only fails", "No model works"], answer: 0, explanation: "Both viable.", points: 1 },
      { id: "q8", competency: "NLP-320-C3", type: "single", question: "ROUGE primarily measures:", options: ["N-gram overlap for summarisation", "Image quality", "Audio fidelity", "Latency"], answer: 0, explanation: "ROUGE = recall-oriented n-grams.", points: 1 },
      { id: "q9", competency: "NLP-320-C4", type: "single", question: "To mitigate gender bias in an NER model:", options: ["Balanced data + bias evaluation + debiased embeddings / counterfactual augmentation", "Ignore", "Add more biased data", "Delete all names"], answer: 0, explanation: "Systematic mitigation.", points: 1 },
      { id: "q10", competency: "NLP-320-C2", type: "multiple", question: "HF Trainer advantages: (Select all that apply)", options: ["Mixed precision, checkpointing, logging", "Distributed training", "Built-in early stopping via callbacks", "Manual gradient coding required"], answer: [0,1,2], explanation: "Trainer abstracts.", points: 2 },
      { id: "q11", competency: "NLP-320-C1", type: "single", question: "SentencePiece vs BPE:", options: ["SentencePiece treats spaces as tokens, language-agnostic", "BPE is language-agnostic, SentencePiece is not", "No difference", "Both are image models"], answer: 0, explanation: "SentencePiece handles raw text.", points: 1 },
      { id: "q12", competency: "NLP-320-C3", type: "single", question: "QA evaluation uses:", options: ["Exact match + F1 on answer spans", "BLEU only", "Accuracy of 0/1 only", "mAP"], answer: 0, explanation: "EM + F1.", points: 1 },
      { id: "q13", competency: "NLP-320-C2", type: "single", question: "Catastrophic forgetting during fine-tuning is reduced by:", options: ["Lower LR, rehearsal, or adapters like LoRA", "Higher LR", "No regularisation", "Deleting data"], answer: 0, explanation: "Mitigations.", points: 1 },
      { id: "q14", competency: "NLP-320-C4", type: "single", question: "Hallucination in summarisation is:", options: ["Generating facts not in source", "Copying verbatim", "Perfect recall", "Not a risk"], answer: 0, explanation: "Fabrication.", points: 1 },
      { id: "q15", competency: "NLP-320-C3", type: "single", question: "Few-shot NER via prompting is:", options: ["Possible but usually weaker than fine-tuned SOTA without careful eval", "Always better than fine-tune", "Impossible", "Only for English"], answer: 0, explanation: "Fine-tune often wins for NER.", points: 1 },
      { id: "q16", competency: "NLP-320-C1", type: "single", question: "Long document (10k tokens) handling:", options: ["Chunk + retrieval or long-context model with care", "Truncate blindly to 512", "No handling needed", "Use only title"], answer: 0, explanation: "Chunk/RAG or long context.", points: 1 },
      { id: "q17", competency: "NLP-320-C2", type: "single", question: "Label imbalance for NER (many O):", options: ["Use class weights / focal loss / stratified sampling", "Ignore", "Predict only O", "Oversample O more"], answer: 0, explanation: "Handle imbalance.", points: 1 },
      { id: "q18", competency: "NLP-320-C4", type: "single", question: "Privacy for clinical notes: use:", options: ["De-identification + access controls + audit", "Public sharing", "Plain text email", "No safeguards"], answer: 0, explanation: "Privacy-preserving.", points: 1 },
      { id: "q19", competency: "NLP-320-C3", type: "multiple", question: "Good NER evaluation includes: (Select all that apply)", options: ["Per-entity-type F1", "Confusion of boundary errors", "Calibration of confidence", "Font choice"], answer: [0,1,2], explanation: "Comprehensive eval.", points: 2 },
      { id: "q20", competency: "NLP-320-C2", type: "single", question: "Hugging Face pipeline('sentiment-analysis') does:", options: ["Loads tokenizer + model + handles batching/post-processing", "Only tokenisation", "Only training", "No inference"], answer: 0, explanation: "End-to-end pipeline.", points: 1 }
    ]
  },
  {
    id: "exam-mlops",
    courseId: "mlops-deployment",
    code: "ZL-EX-MLOPS-601",
    title: "Certificate of Competence — MLOps & Deployment",
    qualificationCode: "ZL-QUAL-MLOPS-601",
    level: "Level 5 (RQF) • EQF 6",
    credits: 22,
    durationMinutes: 60,
    passMark: 70,
    distinctionMark: 85,
    totalQuestions: 15,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 24,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: "Docker, FastAPI, MLflow, CI/CD, monitoring. Production readiness.",
    instructions: ["60 minutes, 15 Q, pass 70%."],
    competencies: [
      { code: "MLO-601-C1", title: "Docker/FastAPI serving", weight: 30 },
      { code: "MLO-601-C2", title: "Tracking & CI/CD", weight: 30 },
      { code: "MLO-601-C3", title: "Monitoring & drift", weight: 20 },
      { code: "MLO-601-C4", title: "Scale & security", weight: 20 }
    ],
    questions: [
      { id: "q1", competency: "MLO-601-C1", type: "single", question: "response = {'status':'ok','model':'v1'}; print(response['status']) →", options: ["ok", "v1", "status", "Error"], answer: 0, explanation: "ok.", points: 1 },
      { id: "q2", competency: "MLO-601-C1", type: "single", question: "Why Docker for ML?", options: ["Reproducible env, dependency isolation, portable deployment", "Makes model more accurate", "Reduces data size to 0", "Replaces testing"], answer: 0, explanation: "Reproducibility.", points: 1 },
      { id: "q3", competency: "MLO-601-C2", type: "single", question: "MLflow tracking logs:", options: ["Params, metrics, artefacts, model versions", "Only the code file name", "No metrics", "Only the logo"], answer: 0, explanation: "Full lineage.", points: 1 },
      { id: "q4", competency: "MLO-601-C2", type: "single", question: "CI for ML should include:", options: ["Lint, unit tests, data validation, model smoke test on CI", "Only manual checks", "No tests", "Deploy without tests"], answer: 0, explanation: "Automated quality gates.", points: 1 },
      { id: "q5", competency: "MLO-601-C3", type: "single", question: "Data drift is:", options: ["Change in input distribution vs training, degrading performance", "GPU failure", "Faster inference", "Better accuracy"], answer: 0, explanation: "Drift.", points: 1 },
      { id: "q6", competency: "MLO-601-C3", type: "single", question: "Evidently.ai is used for:", options: ["Drift and performance monitoring", "Image editing", "Video streaming", "Gaming"], answer: 0, explanation: "Monitoring.", points: 1 },
      { id: "q7", competency: "MLO-601-C1", type: "single", question: "FastAPI health endpoint should return:", options: ["200 with {status:'ok', model:'v1', latency}", "500 always", "No response", "HTML only"], answer: 0, explanation: "Health check.", points: 1 },
      { id: "q8", competency: "MLO-601-C4", type: "single", question: "Blue/green deployment:", options: ["Two envs to switch with zero downtime and rollback", "One env only", "No deployment", "Manual copy"], answer: 0, explanation: "Safe rollout.", points: 1 },
      { id: "q9", competency: "MLO-601-C4", type: "single", question: "Model artefact should be:", options: ["Versioned, checksumed, stored in registry (e.g., MLflow/DVC)", "Emailed", "Overwritten", "Not stored"], answer: 0, explanation: "Registry.", points: 1 },
      { id: "q10", competency: "MLO-601-C2", type: "multiple", question: "CI/CD for ML includes: (Select all that apply)", options: ["Data validation (Great Expectations)", "Model validation (metrics gates)", "Canary / shadow deployment", "No monitoring"], answer: [0,1,2], explanation: "Full pipeline.", points: 2 },
      { id: "q11", competency: "MLO-601-C3", type: "single", question: "Prediction latency p99 is important because:", options: ["Tail latency affects user experience and SLOs", "Mean is always enough", "Latency never matters", "Only throughput matters"], answer: 0, explanation: "SLO.", points: 1 },
      { id: "q12", competency: "MLO-601-C4", type: "single", question: "To secure inference endpoint:", options: ["Auth, rate limiting, input validation, audit logging", "Open to world", "No auth", "Log nothing"], answer: 0, explanation: "Security.", points: 1 },
      { id: "q13", competency: "MLO-601-C1", type: "single", question: "Dockerfile best practice: pin base image tag to:", options: ["Exact version (e.g., python:3.11-slim) not ‘latest’", "Always ‘latest’", "No tag", "Random tag"], answer: 0, explanation: "Reproducibility.", points: 1 },
      { id: "q14", competency: "MLO-601-C3", type: "single", question: "Concept drift vs data drift:", options: ["Data drift = input change; concept drift = P(y|x) change", "Same", "No difference", "Only data drift exists"], answer: 0, explanation: "Distinction.", points: 1 },
      { id: "q15", competency: "MLO-601-C4", type: "multiple", question: "Scaling inference: (Select all that apply)", options: ["Horizontal autoscaling + batching", "Model quantisation / distillation", "Caching frequent requests", "Single thread only"], answer: [0,1,2], explanation: "Scale levers.", points: 2 }
    ]
  },
  {
    id: "exam-ai-ethics",
    courseId: "ai-ethics-responsible-ai",
    code: "ZL-EX-ETH-110",
    title: "Certificate of Competence — Responsible AI & Ethics",
    qualificationCode: "ZL-QUAL-ETH-110",
    level: "Level 3 (RQF) • EQF 4",
    credits: 10,
    durationMinutes: 45,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 15,
    shuffle: true,
    proctored: false,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: "Bias, explainability, privacy, governance. Mapped to EU AI Act & OECD.",
    instructions: ["45 minutes, 15 Q, pass 75%."],
    competencies: [
      { code: "ETH-110-C1", title: "Bias & fairness audit", weight: 30 },
      { code: "ETH-110-C2", title: "SHAP/LIME", weight: 25 },
      { code: "ETH-110-C3", title: "Privacy", weight: 25 },
      { code: "ETH-110-C4", title: "Governance (EU AI Act)", weight: 20 }
    ],
    questions: [
      { id: "q1", competency: "ETH-110-C1", type: "single", question: "Demographic parity checks:", options: ["Equal positive rates across groups", "Equalized odds", "Calibration", "Accuracy"], answer: 0, explanation: "Parity = equal positive rates.", points: 1 },
      { id: "q2", competency: "ETH-110-C1", type: "single", question: "is_fair(0.92,0.89) with threshold 0.05 returns True because:", options: ["abs difference 0.03 < 0.05", "Difference >0.05", "Always False", "Error"], answer: 0, explanation: "0.03 < 0.05.", points: 1 },
      { id: "q3", competency: "ETH-110-C2", type: "single", question: "SHAP values explain:", options: ["Feature contribution to a specific prediction vs baseline", "Model accuracy", "Data size", "GPU usage"], answer: 0, explanation: "Attribution.", points: 1 },
      { id: "q4", competency: "ETH-110-C3", type: "single", question: "Differential privacy adds:", options: ["Calibrated noise to protect individual presence", "More data", "No noise", "Deletes data"], answer: 0, explanation: "Noise for privacy.", points: 1 },
      { id: "q5", competency: "ETH-110-C4", type: "single", question: "EU AI Act high-risk example:", options: ["CV screening / credit scoring", "Spam filter for personal email", "Music recommendation", "Calculator"], answer: 0, explanation: "Annex III high-risk.", points: 1 },
      { id: "q6", competency: "ETH-110-C1", type: "single", question: "Equalized odds requires:", options: ["Equal TPR and FPR across groups", "Equal accuracy only", "Equal dataset size", "Equal model size"], answer: 0, explanation: "TPR + FPR parity.", points: 1 },
      { id: "q7", competency: "ETH-110-C2", type: "single", question: "LIME does:", options: ["Local surrogate model around prediction to explain", "Global model replacement", "No explanation", "Deletes model"], answer: 0, explanation: "Local interpretable.", points: 1 },
      { id: "q8", competency: "ETH-110-C3", type: "single", question: "Federated learning:", options: ["Train without centralising raw data, share updates", "Centralise all data", "No training", "Only inference"], answer: 0, explanation: "Decentralised.", points: 1 },
      { id: "q9", competency: "ETH-110-C4", type: "single", question: "OECD principle: human-centred values means:", options: ["Respect human rights, fairness, allow human oversight", "Maximise surveillance", "Ignore oversight", "Automate without appeal"], answer: 0, explanation: "OECD.", points: 1 },
      { id: "q10", competency: "ETH-110-C1", type: "multiple", question: "Bias mitigation at data stage: (Select all that apply)", options: ["Reweighing / resampling", "Diverse collection & annotation", "Blind evaluation", "Ignore"], answer: [0,1,2], explanation: "Data-level fixes.", points: 2 },
      { id: "q11", competency: "ETH-110-C2", type: "single", question: "Global vs local explainability:", options: ["Global = overall behaviour; local = single prediction", "Same", "No difference", "Only global exists"], answer: 0, explanation: "Scope difference.", points: 1 },
      { id: "q12", competency: "ETH-110-C3", type: "single", question: "k-anonymity ensures:", options: ["Each record indistinguishable from k-1 others on quasi-identifiers", "k accuracy", "k layers", "k epochs"], answer: 0, explanation: "Anonymity.", points: 1 },
      { id: "q13", competency: "ETH-110-C4", type: "single", question: "Conformity assessment for high-risk AI under EU AI Act is:", options: ["Required before market (self or third-party)", "Optional", "Never", "After market only"], answer: 0, explanation: "Pre-market.", points: 1 },
      { id: "q14", competency: "ETH-110-C1", type: "single", question: "Disparate impact 0.6 (4/5ths rule) indicates:", options: ["Adverse impact (below 0.8 threshold)", "No bias", "Perfect fairness", "No data"], answer: 0, explanation: "4/5ths.", points: 1 },
      { id: "q15", competency: "ETH-110-C2", type: "multiple", question: "When to prefer SHAP over LIME: (Select all that apply)", options: ["Need consistent global + local attributions", "Need theoretically grounded Shapley values", "Need instant 1ms explanation only", "Need no explanation"], answer: [0,1], explanation: "SHAP properties.", points: 2 }
    ]
  },
  {
    id: "exam-real-time-project",
    courseId: "mlops-deployment",
    code: "ZL-EX-REALTIME-701",
    title: "Certificate of Competence — Real-Time Project Delivery",
    qualificationCode: "ZL-QUAL-REALTIME-701",
    level: "Level 4 (RQF) • EQF 5",
    credits: 18,
    durationMinutes: 75,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 20,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 24,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: "Build and validate a real-time project with live data, streaming events, resilient architecture, performance monitoring, and user-facing delivery. Focuses on production-grade timing, reliability, and observability.",
    instructions: [
      "75 minutes, 20 scenario-based questions.",
      "Pass 75% (15/20), distinction 90% (18/20).",
      "Assesses live-system design, event-driven architecture, latency control and production reliability.",
      "Strong emphasis on real-time execution, observability, graceful degradation and scaling."
    ],
    competencies: [
      { code: "RTP-701-C1", title: "Real-time architecture & event flow", weight: 25 },
      { code: "RTP-701-C2", title: "Streaming, queues & low-latency delivery", weight: 25 },
      { code: "RTP-701-C3", title: "Monitoring, observability & performance tuning", weight: 25 },
      { code: "RTP-701-C4", title: "Reliability, resilience & production readiness", weight: 25 }
    ],
    questions: [
      { id: "q1", competency: "RTP-701-C1", type: "single", question: "For a live dashboard that updates every second, which pattern is the best fit?", options: ["WebSockets or SSE for push updates from server to client", "Refreshing the page every 10 minutes", "Only batch CSV exports", "Sending updates by email only"], answer: 0, explanation: "Live client updates require persistent push channels such as WebSockets or SSE.", points: 1 },
      { id: "q2", competency: "RTP-701-C2", type: "single", question: "What is the main reason to use a message broker in a real-time system?", options: ["To decouple producers from consumers and smooth bursts of events", "To replace the database", "To reduce code quality", "To prevent all users from seeing updates"], answer: 0, explanation: "Message brokers buffer and distribute events while decoupling components.", points: 1 },
      { id: "q3", competency: "RTP-701-C3", type: "single", question: "Latency p99 is important because:", options: ["It captures tail delays that affect the worst user experience, not just average latency", "It measures only the fastest 1% of requests", "It replaces uptime metrics", "It is the same as throughput"], answer: 0, explanation: "The p99 latency reveals the worst-case user impact in real-time systems.", points: 1 },
      { id: "q4", competency: "RTP-701-C4", type: "single", question: "A live app suddenly loses 40% of its traffic when one system is overloaded. What is the best mitigation?", options: ["Queue the events, add backpressure handling, and autoscale the overloaded service", "Ignore the load and restart the database weekly", "Disable the UI entirely", "Delete logs to save storage"], answer: 0, explanation: "Backpressure, queueing, and autoscaling are the standard way to protect reliability under bursts.", points: 1 },
      { id: "q5", competency: "RTP-701-C1", type: "single", question: "Which architecture is most appropriate for a real-time collaborative whiteboard?", options: ["Event-driven architecture with shared state and push notifications to connected clients", "Single-threaded synchronous form submission only", "Weekly cron-based sync", "A static HTML page"], answer: 0, explanation: "Collaborative live systems need shared state and push-based distribution.", points: 1 },
      { id: "q6", competency: "RTP-701-C2", type: "single", question: "When would you choose Redis Streams or Kafka instead of a basic in-memory queue?", options: ["When you need durability, replay, partitioning, and multi-consumer patterns at scale", "When you do not need persistence", "When you want only one client to read events", "When no event processing is needed"], answer: 0, explanation: "Kafka and Redis Streams support durable event processing and fan-out across consumers.", points: 1 },
      { id: "q7", competency: "RTP-701-C3", type: "single", question: "A real-time product manager asks: ‘What do you monitor besides CPU usage?’ The best answer is:", options: ["Queue depth, message lag, p95/p99 latency, error rate, and throughput per service", "Only the server’s temperature", "Only the browser version", "Only the number of git commits"], answer: 0, explanation: "End-user reliability requires operational metrics around throughput, lag, and request cost.", points: 1 },
      { id: "q8", competency: "RTP-701-C4", type: "single", question: "In a real-time app, graceful degradation means:", options: ["The system continues working in reduced functionality when some services are overloaded or unavailable", "The system crashes immediately", "The system turns off all logs", "The system disables all users"], answer: 0, explanation: "Graceful degradation preserves usability even under instability.", points: 1 },
      { id: "q9", competency: "RTP-701-C1", type: "single", question: "Which is the best design for a live notification feed with many connected users?", options: ["A pub/sub broker pushing updates to fan-out consumers while the UI subscribes to an event stream", "A single synchronous database query for every user action", "A nightly CSV import", "A print spooler"], answer: 0, explanation: "Pub/sub is ideal for broadcasting updates to many subscribers efficiently.", points: 1 },
      { id: "q10", competency: "RTP-701-C2", type: "multiple", question: "Which of the following help reduce live-system bottlenecks? (Select all that apply)", options: ["Batching non-urgent work", "Vertical scaling of the hot service", "Queueing burst traffic", "Forcing all updates to wait for a single thread"], answer: [0,1,2], explanation: "Batched work, scaling, and queueing alleviate pressure; single-thread blocking worsens it.", points: 2 },
      { id: "q11", competency: "RTP-701-C3", type: "single", question: "What is the main value of tracing in a real-time system?", options: ["It shows where time is spent across services and helps isolate slow upstream dependencies", "It makes the code run faster without changes", "It replaces monitoring dashboards", "It only helps with static analysis"], answer: 0, explanation: "Distributed tracing identifies where latency is introduced across services.", points: 1 },
      { id: "q12", competency: "RTP-701-C4", type: "single", question: "The best production-ready recovery strategy after a stream consumer crashes is:", options: ["Replay from the last committed offset or checkpoint with idempotent processing", "Delete the topic and recreate it", "Lose all unprocessed events", "Restart the frontend only"], answer: 0, explanation: "Reliable stream systems recover without data loss by replaying committed offsets.", points: 1 },
      { id: "q13", competency: "RTP-701-C1", type: "single", question: "For a live trading dashboard, which constraint is usually most critical?", options: ["Low end-to-end latency with strong consistency guarantees on critical events", "The longest possible delay so operations can batch", "Aesthetic CSS alone", "No database writes"], answer: 0, explanation: "Trading systems prioritize near-real-time updates and reliable event ordering for critical actions.", points: 1 },
      { id: "q14", competency: "RTP-701-C3", type: "single", question: "Which metric best tells you whether your real-time service is approaching overload?", options: ["Queue backlog growth and rising consumer lag", "The number of CSS classes in the frontend", "The length of the README", "The colour of the UI"], answer: 0, explanation: "Growing queue depth and lag are clear signs of overload or saturation.", points: 1 },
      { id: "q15", competency: "RTP-701-C4", type: "single", question: "What is the safest way to handle user actions in a real-time system when the event bus is down?", options: ["Queue actions locally or in durable storage and retry once connectivity is restored", "Drop them silently and tell users nothing", "Retry forever without backlog limits", "Only allow actions from the administrator"], answer: 0, explanation: "Durable retry or local queueing helps prevent loss during transient outages.", points: 1 },
      { id: "q16", competency: "RTP-701-C2", type: "single", question: "Why is idempotency so important in event-driven systems?", options: ["It ensures repeated processing does not create duplicate side effects", "It guarantees all events are processed in order", "It removes the need for a database", "It makes every event invisible to logs"], answer: 0, explanation: "Idempotent processing prevents duplicate events from causing repeated business actions.", points: 1 },
      { id: "q17", competency: "RTP-701-C1", type: "single", question: "A real-time product has a 3-second business SLA, but the system currently averages 1.5 seconds. What is the next logical step?", options: ["Profile hotspots, identify bottlenecks, and tune the critical path before release", "Increase the SLA to 10 seconds", "Remove the real-time requirement", "Delete the monitoring config"], answer: 0, explanation: "Measuring and optimizing the bottleneck is the right next step for delivery.", points: 1 },
      { id: "q18", competency: "RTP-701-C3", type: "single", question: "Which setup is best for fast debugging of a production real-time incident?", options: ["Structured logs, metrics, traces, and a clear alerting path tied to service dependencies", "Only a single console log line", "Only user screenshots", "No observability"], answer: 0, explanation: "Observability depends on correlated logs, metrics, and traces.", points: 1 },
      { id: "q19", competency: "RTP-701-C4", type: "single", question: "Which is the best strategy for high-availability in a live system?", options: ["Deploy replicas, add health checks, use failover and partial degradation rules", "Run a single instance without backups", "Never restart workers", "Use stale data without checks"], answer: 0, explanation: "Redundancy and health-aware failover are key for high availability.", points: 1 },
      { id: "q20", competency: "RTP-701-C2", type: "multiple", question: "Which patterns are common in real-time product systems? (Select all that apply)", options: ["WebSockets/SSE", "Consumer groups", "Dead-letter queues", "One-off manual CSV refreshes"], answer: [0,1,2], explanation: "WebSockets, consumer groups, and dead-letter queues are standard live-system patterns.", points: 2 }
    ]
  },
  {
    id: "exam-ai-engineer-capstone",
    trackId: "ai-engineer",
    code: "ZL-EX-AIE-CAP-501",
    title: "Professional Diploma — AI Engineer (Capstone)",
    qualificationCode: "ZL-DIP-AIE-501",
    level: "Level 5 (RQF) • EQF 6",
    credits: 60,
    durationMinutes: 120,
    passMark: 70,
    distinctionMark: 85,
    totalQuestions: 30,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 2,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: "Capstone for the 45-hour AI Engineer diploma. Cross-course synthesis: foundations → Python → ML → DL → GenAI → MLOps. Scenario: ship a production AI feature end-to-end. Externally moderated; requires 4 project passes.",
    instructions: ["120 minutes, 30 cross-disciplinary scenarios.", "Pass 70% (21/30), Distinction 85%. Strictly invigilated; viva may be required.", "Covers 6 courses + integrated MLOps + Responsible AI."],
    competencies: [
      { code: "AIE-CAP-C1", title: "Foundations & system design", weight: 20 },
      { code: "AIE-CAP-C2", title: "Data engineering (Python/DS)", weight: 20 },
      { code: "AIE-CAP-C3", title: "ML modelling & evaluation", weight: 20 },
      { code: "AIE-CAP-C4", title: "Deep learning & GenAI integration", weight: 20 },
      { code: "AIE-CAP-C5", title: "MLOps, deployment & governance", weight: 20 }
    ],
    questions: [
      { id: "q1", competency: "AIE-CAP-C1", type: "single", question: "Stakeholder wants ‘AI that learns from customer feedback continuously’. Most accurate framing:", options: ["Online learning / continual learning system with monitoring, not ‘install once’", "One-off batch model forever", "Manual rules only", "No ML needed"], answer: 0, explanation: "Continual learning + monitoring.", points: 1 },
      { id: "q2", competency: "AIE-CAP-C2", type: "single", question: "You have 10M rows, 200 features, heavy skew. First step before modelling?", options: ["Profile data: missingness, skew, leakage, cardinality + establish baseline", "Train biggest deep net immediately", "Delete all nulls silently", "No EDA"], answer: 0, explanation: "Baseline + profiling.", points: 1 },
      { id: "q3", competency: "AIE-CAP-C3", type: "single", question: "Imbalanced churn (4% churn). Business cares about catching churners (recall) but not spamming (precision). You should:", options: ["Optimise F1/PR-AUC and choose threshold via business cost, report both", "Maximise accuracy only", "Ignore recall", "Use MSE"], answer: 0, explanation: "Cost-aware thresholding.", points: 1 },
      { id: "q4", competency: "AIE-CAP-C4", type: "single", question: "Need image + text product search. Best architecture sketch?", options: ["Dual encoders (vision + text) with contrastive learning, vector DB for retrieval", "Only decision tree", "Only k-means", "No embeddings"], answer: 0, explanation: "Multimodal retrieval.", points: 1 },
      { id: "q5", competency: "AIE-CAP-C5", type: "single", question: "Deploying LLM feature: safest rollout?", options: ["Shadow → canary → gradual rollout with guardrails, evals, and human override", "Big bang to 100% instantly", "No monitoring", "Disable logging"], answer: 0, explanation: "Progressive, safe.", points: 1 },
      { id: "q6", competency: "AIE-CAP-C3", type: "single", question: "You see train 99%, val 71%. Immediate action?", options: ["Add regularisation / more data / cross-val, reduce capacity", "Add more layers", "Train longer", "Remove val"], answer: 0, explanation: "Overfit.", points: 1 },
      { id: "q7", competency: "AIE-CAP-C2", type: "single", question: "Pandas memory 5GB for 10M rows: likely fix?", options: ["Use correct dtypes (category, int32), chunking / parquet, not object for everything", "Keep object for all", "Load all in memory naively", "No optimisation"], answer: 0, explanation: "Dtype optimisation.", points: 1 },
      { id: "q8", competency: "AIE-CAP-C4", type: "single", question: "Transformer for 200k-token legal docs: handle?", options: ["Chunk + RAG with citations, or long-context with careful eval", "Truncate to 200 tokens and hope", "No chunk needed", "Use only title"], answer: 0, explanation: "Long-doc strategy.", points: 1 },
      { id: "q9", competency: "AIE-CAP-C5", type: "single", question: " EU AI Act: your AI screens CVs. Requirement?", options: ["High-risk: conformity, data governance, human oversight, logging, transparency", "No requirements", "Just a logo", "Ban"], answer: 0, explanation: "High-risk obligations.", points: 1 },
      { id: "q10", competency: "AIE-CAP-C3", type: "multiple", question: "Which indicate leakage? (Select all that apply)", options: ["Feature ‘days_until_churn’ computed from future", "Target encoded with future statistics", "Proper time-split features", "Leakage never happens"], answer: [0,1], explanation: "Future-derived.", points: 2 },
      { id: "q11", competency: "AIE-CAP-C1", type: "single", question: "Notion of ‘AI is magic’: best response to executive?", options: ["Demo scope, data needs, metrics, risks, human-in-the-loop, iterative delivery", "Promise AGI next quarter", "Say AI does everything", "Avoid metrics"], answer: 0, explanation: "Honest scoping.", points: 1 },
      { id: "q12", competency: "AIE-CAP-C2", type: "single", question: "Vector DB for 50M embeddings: need sub-50ms p99. Choose:", options: ["HNSW / IVF-PQ with quantisation, sharding, caching", "Full scan without index", "Linear search in Python loop", "No index"], answer: 0, explanation: "ANN.", points: 1 },
      { id: "q13", competency: "AIE-CAP-C4", type: "single", question: "ReLU 0 5, softmax 0.09 expectations are sanity checks for:", options: ["Deep Learning foundations", "Prompt engineering only", "Data privacy only", "No check needed"], answer: 0, explanation: "DL basics.", points: 1 },
      { id: "q14", competency: "AIE-CAP-C5", type: "single", question: "MLOps post-deploy must track:", options: ["Drift, p99 latency, error budgets, audit logs", "Only accuracy once", "Never monitor", "Only training loss"], answer: 0, explanation: "Ops.", points: 1 },
      { id: "q15", competency: "AIE-CAP-C1", type: "single", question: "Best definition of intelligence for AI evaluation?", options: ["Behavioural, task-specific + measurable, not consciousness", "Consciousness only", "Speed only", "Number of parameters"], answer: 0, explanation: "Behavioural.", points: 1 },
      { id: "q16", competency: "AIE-CAP-C3", type: "single", question: "Time-series demand forecasting: validation must be:", options: ["Time-ordered rolling/expanding window", "Random k-fold", "Shuffle all", "No validation"], answer: 0, explanation: "Temporal.", points: 1 },
      { id: "q17", competency: "AIE-CAP-C4", type: "single", question: "Hallucination in RAG: mitigate via:", options: ["Citation-grounded generation + abstention", "Higher temp", "No retrieval", "Longer prompt without grounding"], answer: 0, explanation: "Grounding.", points: 1 },
      { id: "q18", competency: "AIE-CAP-C2", type: "single", question: "Cleaning: data=[1,None,2,None,3] → keep 0. Correct?", options: ["[x for x in data if x is not None] includes 0", "filter(None) keeps 0", "data.remove(None) removes all including 0", "Loop is impossible"], answer: 0, explanation: "is not None preserves 0.", points: 1 },
      { id: "q19", competency: "AIE-CAP-C5", type: "single", question: "FastAPI health: should expose:", options: ["200 {status, version, latency} + readiness vs liveness", "500 always", "No endpoint", "HTML only"], answer: 0, explanation: "Health.", points: 1 },
      { id: "q20", competency: "AIE-CAP-C3", type: "single", question: "ROC-AUC vs PR-AUC: when PR-AUC is preferred?", options: ["Highly imbalanced positive-rare tasks", "Balanced 50/50", "Regression", "Clustering"], answer: 0, explanation: "PR for rare positives.", points: 1 },
      { id: "q21", competency: "AIE-CAP-C4", type: "single", question: "200k document corpus, need Q&A. Best?", options: ["RAG with hybrid (BM25+vector) + reranker + citations", "Fine-tune to memorise all", "No retrieval", "Keyword search only"], answer: 0, explanation: "Hybrid RAG.", points: 1 },
      { id: "q22", competency: "AIE-CAP-C5", type: "single", question: "Secure inference: must include:", options: ["Auth, rate limit, input validation, PII redaction, audit", "Open world", "No limits", "Log PII"], answer: 0, explanation: "Security.", points: 1 },
      { id: "q23", competency: "AIE-CAP-C1", type: "single", question: "AI winter lesson for delivery?", options: ["Manage hype, deliver narrow value, measure, iterate", "Promise general intelligence in 3 months", "Ignore evaluation", "No governance"], answer: 0, explanation: "Pragmatic.", points: 1 },
      { id: "q24", competency: "AIE-CAP-C2", type: "single", question: "TF-IDF 0.5 for ‘cat’ in ‘cat sat’ indicates:", options: ["Term occurs in half the words of that doc", "IDF only", "No meaning", "Always 1.0"], answer: 0, explanation: "0.5 = 1/2.", points: 1 },
      { id: "q25", competency: "AIE-CAP-C3", type: "single", question: "Precision 0.9, Recall 0.4 → F1 ≈", options: ["0.55", "0.9", "0.4", "1.0"], answer: 0, explanation: "2*0.9*0.4/1.3≈0.55", points: 1 },
      { id: "q26", competency: "AIE-CAP-C4", type: "single", question: "CNN shape: 3×3, stride1, no pad on 32×32 →", options: ["30×30", "32×32", "16×16", "28×28"], answer: 0, explanation: "30.", points: 1 },
      { id: "q27", competency: "AIE-CAP-C5", type: "multiple", question: "Responsible rollout includes: (Select all that apply)", options: ["Bias audit & disaggregated metrics", "Human appeal process", "Model card & data sheet", "Deploy silently"], answer: [0,1,2], explanation: "Transparency.", points: 2 },
      { id: "q28", competency: "AIE-CAP-C2", type: "single", question: "NumPy fastest for numeric loops:", options: ["Vectorised ops", "Python loop", "Recursion", "Print loop"], answer: 0, explanation: "Vectorised.", points: 1 },
      { id: "q29", competency: "AIE-CAP-C3", type: "single", question: "Accuracy 99.5% on fraud (0.5% positive) is:", options: ["Misleading; need PR-AUC/recall", "Excellent", "Perfect", "Sufficient"], answer: 0, explanation: "Imbalance.", points: 1 },
      { id: "q30", competency: "AIE-CAP-C4", type: "single", question: "GenAI temperature 0 vs 1:", options: ["0 deterministic, 1 creative/random", "Same", "0 random", "1 deterministic"], answer: 0, explanation: "Temp.", points: 1 }
    ]
  },
  {
    id: "exam-gen-ai-dev-capstone",
    trackId: "gen-ai-dev",
    code: "ZL-EX-GAI-CAP-401",
    title: "Professional Certificate — Generative AI Developer (Capstone)",
    qualificationCode: "ZL-CERT-GAI-401",
    level: "Level 4 (RQF) • EQF 5",
    credits: 36,
    durationMinutes: 90,
    passMark: 70,
    distinctionMark: 85,
    totalQuestions: 25,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 2,
    validForMonths: 24,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: "Capstone for GenAI Developer: prompting → GenAI → transformers → RAG. Ship 3 GenAI apps. Exam is application-focused, not trivia.",
    instructions: ["90 minutes, 25 scenarios.", "Requires 3 project passes + 70% on exam."],
    competencies: [
      { code: "GAI-CAP-C1", title: "Prompt systems & constraints", weight: 30 },
      { code: "GAI-CAP-C2", title: "GenAI architecture (transformers, RAG)", weight: 40 },
      { code: "GAI-CAP-C3", title: "Fine-tuning, eval & safety", weight: 30 }
    ],
    questions: [
      { id: "q1", competency: "GAI-CAP-C1", type: "single", question: "Best prompt for reliable classification into 3 labels?", options: ["Enumerate labels, require JSON {label: ...}, give 2 few-shot examples, set temperature 0", "Open-ended ‘classify somehow’", "No labels", "Temperature 2"], answer: 0, explanation: "Constrained + few-shot + low temp.", points: 1 },
      { id: "q2", competency: "GAI-CAP-C2", type: "single", question: "Q=[1,0],K=[1,0] dot =", options: ["1", "0", "2", "-1"], answer: 0, explanation: "1.", points: 1 },
      { id: "q3", competency: "GAI-CAP-C2", type: "single", question: "RAG retrieves via:", options: ["Vector similarity", "Random", "Weights", "Password"], answer: 0, explanation: "Similarity.", points: 1 },
      { id: "q4", competency: "GAI-CAP-C3", type: "single", question: "Hallucination mitigation for legal bot:", options: ["RAG + citations + abstain if low confidence", "Max temp", "No grounding", "Hallucinate more"], answer: 0, explanation: "Grounding.", points: 1 },
      { id: "q5", competency: "GAI-CAP-C1", type: "single", question: "System prompt vs user prompt: system is for:", options: ["Persistent persona/policy", "One-off query", "Tool output only", "Never used"], answer: 0, explanation: "System.", points: 1 },
      { id: "q6", competency: "GAI-CAP-C2", type: "single", question: "Positional encoding needed because:", options: ["Attention is permutation-invariant", "GPUs need it", "Spelling", "Encryption"], answer: 0, explanation: "Order.", points: 1 },
      { id: "q7", competency: "GAI-CAP-C3", type: "single", question: "LoRA is:", options: ["Low-rank adapters, parameter-efficient", "Full training", "No data", "Always better"], answer: 0, explanation: "Efficient.", points: 1 },
      { id: "q8", competency: "GAI-CAP-C1", type: "multiple", question: "Good constraints: (Select all that apply)", options: ["Max 50 words, bullet list", "Cite sources", "Be verbose with no limits", "Ignore request"], answer: [0,1], explanation: "Constraints.", points: 2 },
      { id: "q9", competency: "GAI-CAP-C2", type: "single", question: "Chunking for RAG should be:", options: ["Semantic coherent + metadata", "1-char chunks", "Ignore headings", "No overlap"], answer: 0, explanation: "Coherent.", points: 1 },
      { id: "q10", competency: "GAI-CAP-C3", type: "single", question: "TF of ‘cat’ in ‘cat sat’ =", options: ["0.5", "1.0", "0", "2"], answer: 0, explanation: "0.5.", points: 1 },
      { id: "q11", competency: "GAI-CAP-C1", type: "single", question: "CoT best for:", options: ["Multi-step reasoning", "Simple lookup", "Image gen", "Audio"], answer: 0, explanation: "Reasoning.", points: 1 },
      { id: "q12", competency: "GAI-CAP-C2", type: "single", question: "Context 128k means:", options: ["Max tokens attended per call", "Users", "KB", "GB"], answer: 0, explanation: "Tokens.", points: 1 },
      { id: "q13", competency: "GAI-CAP-C3", type: "single", question: "Prompt injection via RAG docs: defend by:", options: ["Treat docs as untrusted data, not instructions", "Execute as system", "Concatenate blindly", "Trust all"], answer: 0, explanation: "Sanitise.", points: 1 },
      { id: "q14", competency: "GAI-CAP-C1", type: "single", question: "JSON mode ensures:", options: ["Parseable structured output", "More creative", "No latency", "Bypass safety"], answer: 0, explanation: "Structure.", points: 1 },
      { id: "q15", competency: "GAI-CAP-C2", type: "single", question: "Diffusion generates via:", options: ["Iterative denoising", "Sorting", "k-means", "Linear"], answer: 0, explanation: "Diffusion.", points: 1 },
      { id: "q16", competency: "GAI-CAP-C3", type: "single", question: "RAG eval tracks:", options: ["Retrieval precision/recall + faithfulness + latency/cost", "CEO colour", "Logo", "No eval"], answer: 0, explanation: "Operational.", points: 1 },
      { id: "q17", competency: "GAI-CAP-C1", type: "single", question: "ReAct =", options: ["Reason+Act (tool)", "Read+Copy", "Random", "Render"], answer: 0, explanation: "ReAct.", points: 1 },
      { id: "q18", competency: "GAI-CAP-C2", type: "single", question: "Attention formula:", options: ["softmax(QKᵀ/√d)·V", "Sigmoid", "Q+K+V", "MaxPool"], answer: 0, explanation: "Formula.", points: 1 },
      { id: "q19", competency: "GAI-CAP-C3", type: "single", question: "Overfitting in fine-tune: sign?", options: ["Train ↓ val ↑", "Both ↓", "Both ↑", "Val ↓ alone"], answer: 0, explanation: "Divergence.", points: 1 },
      { id: "q20", competency: "GAI-CAP-C1", type: "single", question: "Best first step when prompt fails:", options: ["Eval set + logs", "Random temp", "More emojis", "Delete"], answer: 0, explanation: "Systematic.", points: 1 },
      { id: "q21", competency: "GAI-CAP-C2", type: "single", question: "Vector DB choice depends on:", options: ["Scale, latency, filtering, hybrid", "Logo", "Stars only", "Language only"], answer: 0, explanation: "Trade-offs.", points: 1 },
      { id: "q22", competency: "GAI-CAP-C3", type: "single", question: "Temperature 0 vs 1:", options: ["0 deterministic, 1 random", "No diff", "0 random", "1 deterministic"], answer: 0, explanation: "Temp.", points: 1 },
      { id: "q23", competency: "GAI-CAP-C1", type: "multiple", question: "CoT variants: (Select all that apply)", options: ["Zero-shot CoT", "Few-shot CoT", "Self-consistency", "No reasoning"], answer: [0,1,2], explanation: "Variants.", points: 2 },
      { id: "q24", competency: "GAI-CAP-C2", type: "single", question: "Fine-tune justified when:", options: ["Persistent domain style + data", "One-off", "No data", "Avoid training"], answer: 0, explanation: "Fine-tune.", points: 1 },
      { id: "q25", competency: "GAI-CAP-C3", type: "single", question: "Agent tool use must:", options: ["Validate + confirm irreversible", "Silent exec", "Ignore errors", "No log"], answer: 0, explanation: "Safety.", points: 1 }
    ]
  },
  {
    id: "exam-data-scientist-capstone",
    trackId: "data-scientist-ai",
    code: "ZL-EX-DS-CAP-502",
    title: "Professional Diploma — AI Data Scientist (Capstone)",
    qualificationCode: "ZL-DIP-DS-502",
    level: "Level 5 (RQF) • EQF 6",
    credits: 58,
    durationMinutes: 120,
    passMark: 70,
    distinctionMark: 85,
    totalQuestions: 30,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 2,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre",
    description: "Capstone for Data Scientist diploma: stats, Python, ML, vision, NLP, ethics. Integrated governance audit.",
    instructions: ["120 minutes, 30 Q, pass 70%.", "Covers 5 courses + ethics audit."],
    competencies: [
      { code: "DS-CAP-C1", title: "Statistical modelling & data wrangling", weight: 30 },
      { code: "DS-CAP-C2", title: "Vision & NLP application", weight: 30 },
      { code: "DS-CAP-C3", title: "Ethical governance & evaluation", weight: 40 }
    ],
    questions: [
      { id: "q1", competency: "DS-CAP-C1", type: "single", question: "10M rows, 200 features, skew: first step?", options: ["Profile missingness, skew, leakage + baseline", "Biggest net", "Delete nulls silently", "No EDA"], answer: 0, explanation: "Baseline.", points: 1 },
      { id: "q2", competency: "DS-CAP-C1", type: "single", question: "pandas memory 5GB: fix?", options: ["Correct dtypes, chunking, parquet", "Object for all", "No optimisation", "Load all"], answer: 0, explanation: "Dtypes.", points: 1 },
      { id: "q3", competency: "DS-CAP-C2", type: "single", question: "YOLO is:", options: ["Single-shot detector", "Two-stage only", "k-means", "Linear"], answer: 0, explanation: "YOLO.", points: 1 },
      { id: "q4", competency: "DS-CAP-C2", type: "single", question: "IoU?", options: ["Overlap pred vs truth", "Colour accuracy", "File size", "FPS"], answer: 0, explanation: "IoU.", points: 1 },
      { id: "q5", competency: "DS-CAP-C3", type: "single", question: "Demographic parity checks:", options: ["Equal positive rates", "Equalized odds", "Calibration", "Accuracy"], answer: 0, explanation: "Parity.", points: 1 },
      { id: "q6", competency: "DS-CAP-C1", type: "single", question: "TF 0.5 for ‘cat’ in ‘cat sat’", options: ["0.5", "1.0", "0", "2"], answer: 0, explanation: "0.5.", points: 1 },
      { id: "q7", competency: "DS-CAP-C2", type: "single", question: "BERT fine-tune adds:", options: ["[CLS] head + CE", "Deletes BERT", "k-means", "No head"], answer: 0, explanation: "Head.", points: 1 },
      { id: "q8", competency: "DS-CAP-C3", type: "single", question: "EU AI Act high-risk:", options: ["CV screening / credit", "Spam filter", "Music rec", "Calculator"], answer: 0, explanation: "High-risk.", points: 1 },
      { id: "q9", competency: "DS-CAP-C1", type: "single", question: "Vectorised vs loop:", options: ["Vectorised fastest", "Loop fastest", "Recursion fastest", "Print fastest"], answer: 0, explanation: "Vectorised.", points: 1 },
      { id: "q10", competency: "DS-CAP-C2", type: "single", question: "Gaussian blur:", options: ["Reduces noise via averaging", "Sharpens", "Grayscale only", "Detects faces"], answer: 0, explanation: "Smoothing.", points: 1 },
      { id: "q11", competency: "DS-CAP-C3", type: "single", question: "SHAP explains:", options: ["Feature contribution vs baseline", "Accuracy", "Data size", "GPU"], answer: 0, explanation: "Attribution.", points: 1 },
      { id: "q12", competency: "DS-CAP-C1", type: "multiple", question: "Valid cleaning: (Select all that apply)", options: ["Standardise dates", "Deduplicate", "Log transform skew", "Delete raw"], answer: [0,1,2], explanation: "Keep raw.", points: 2 },
      { id: "q13", competency: "DS-CAP-C2", type: "single", question: "Sobel detects:", options: ["Edges", "Colour temp", "Audio", "Depth"], answer: 0, explanation: "Edges.", points: 1 },
      { id: "q14", competency: "DS-CAP-C3", type: "single", question: "k-anonymity:", options: ["Each record indistinguishable from k-1 others", "k accuracy", "k layers", "k epochs"], answer: 0, explanation: "Anonymity.", points: 1 },
      { id: "q15", competency: "DS-CAP-C1", type: "single", question: "is_fair(0.92,0.89) True because:", options: ["0.03 < 0.05", ">0.05", "Always False", "Error"], answer: 0, explanation: "0.03.", points: 1 },
      { id: "q16", competency: "DS-CAP-C2", type: "single", question: "Hugging Face pipeline does:", options: ["Tokenizer+model+postproc", "Only token", "Only train", "No inference"], answer: 0, explanation: "Pipeline.", points: 1 },
      { id: "q17", competency: "DS-CAP-C3", type: "single", question: "Equalized odds requires:", options: ["Equal TPR & FPR", "Equal accuracy only", "Equal size", "Equal model"], answer: 0, explanation: "TPR/FPR.", points: 1 },
      { id: "q18", competency: "DS-CAP-C1", type: "single", question: "Stratified split when:", options: ["Imbalanced classes", "Balanced huge", "One class", "Never"], answer: 0, explanation: "Imbalanced.", points: 1 },
      { id: "q19", competency: "DS-CAP-C2", type: "single", question: "Non-max suppression:", options: ["Removes duplicates keep max conf", "Adds boxes", "Sorts colour", "No effect"], answer: 0, explanation: "NMS.", points: 1 },
      { id: "q20", competency: "DS-CAP-C3", type: "single", question: "Conformity for high-risk AI:", options: ["Required pre-market", "Optional", "Never", "After only"], answer: 0, explanation: "Pre-market.", points: 1 },
      { id: "q21", competency: "DS-CAP-C1", type: "single", question: "F1 is:", options: ["Harmonic mean P&R", "Arithmetic", "Max", "Accuracy"], answer: 0, explanation: "F1.", points: 1 },
      { id: "q22", competency: "DS-CAP-C2", type: "single", question: "Vision real-time: optimise via:", options: ["Quantise/prune/smaller backbone", "Add layers", "4× res", "Disable batch"], answer: 0, explanation: "Optimise.", points: 1 },
      { id: "q23", competency: "DS-CAP-C3", type: "single", question: "OECD human-centred means:", options: ["Respect rights, fairness, oversight", "Max surveillance", "No oversight", "Automate w/o appeal"], answer: 0, explanation: "OECD.", points: 1 },
      { id: "q24", competency: "DS-CAP-C1", type: "single", question: "Data=[1,None,2,None,3] keep 0:", options: ["[x for x in data if x is not None]", "filter(None) keeps 0", "remove removes 0", "Impossible"], answer: 0, explanation: "is not None.", points: 1 },
      { id: "q25", competency: "DS-CAP-C2", type: "single", question: "Pipeline sentiment: loads:", options: ["Tokenizer+model+batch", "Only token", "Only train", "No inference"], answer: 0, explanation: "Loads.", points: 1 },
      { id: "q26", competency: "DS-CAP-C3", type: "single", question: "Privacy for clinical notes:", options: ["De-id + controls + audit", "Public share", "Plain email", "No safeguards"], answer: 0, explanation: "Privacy.", points: 1 },
      { id: "q27", competency: "DS-CAP-C1", type: "multiple", question: "Bias mitigation: (Select all that apply)", options: ["Reweighing", "Diverse collection", "Blind eval", "Ignore"], answer: [0,1,2], explanation: "Mitigation.", points: 2 },
      { id: "q28", competency: "DS-CAP-C2", type: "single", question: "Long doc 10k tokens:", options: ["Chunk+RAG or long context", "Truncate 512 blindly", "No handling", "Title only"], answer: 0, explanation: "Long doc.", points: 1 },
      { id: "q29", competency: "DS-CAP-C3", type: "single", question: "LIME:", options: ["Local surrogate around prediction", "Global replacement", "No exp", "Deletes model"], answer: 0, explanation: "Local.", points: 1 },
      { id: "q30", competency: "DS-CAP-C1", type: "single", question: "Grayscale 106 from:", options: ["0.299R+0.587G+0.114B", "R+G+B", "R only", "G only"], answer: 0, explanation: "Formula.", points: 1 }
    ]
  },
  {
    id: "exam-python-programming",
    courseId: "python-programming",
    code: "ZL-EX-PY-210",
    title: "Certificate of Competence — Python Programming",
    qualificationCode: "ZL-QUAL-PY-210",
    level: "Level 3 (RQF) • EQF 4",
    credits: 14,
    durationMinutes: 60,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 6,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre (RQF/EQF/SFIA)",
    description: "Invigilated, applied exam covering Python syntax, data structures, OOP and project structure. Tests the ability to write correct, idiomatic Python — not recall.",
    instructions: [
      "60 minutes, 6 applied questions — single-choice unless marked ‘Select all that apply’.",
      "Pass 75%, Distinction 90%. One attempt at a time; 3 attempts per enrolment.",
      "Proctored: webcam + ID check, no external aids. Explanations shown after submission."
    ],
    competencies: [
      { code: "PY-210-C1", title: "Core syntax, types & control flow", weight: 25 },
      { code: "PY-210-C2", title: "Data structures & comprehensions", weight: 25 },
      { code: "PY-210-C3", title: "Functions, OOP & modules", weight: 25 },
      { code: "PY-210-C4", title: "Errors, testing & project structure", weight: 25 }
    ],
    questions: [
      { id: "q1", competency: "PY-210-C1", type: "single", question: "Which of these is valid Python for a block comment + variable?", options: ["# total = 10", "// total = 10", "/* total = 10 */", "-- total = 10"], answer: 0, explanation: "Python uses # for comments.", points: 1 },
      { id: "q2", competency: "PY-210-C2", type: "single", question: "nums=[1,2,3,4]; [x*2 for x in nums if x%2==0] evaluates to:", options: ["[2,4,6,8]", "[4,8]", "[2,4]", "[4]"], answer: 1, explanation: "Filters evens (2,4) then doubles → [4,8].", points: 1 },
      { id: "q3", competency: "PY-210-C3", type: "single", question: "In class Bank: def __init__(self, x): self.balance = x. The variable 'self' refers to:", options: ["The current instance", "A module", "The class globally", "A static value"], answer: 0, explanation: "self is the instance.", points: 1 },
      { id: "q4", competency: "PY-210-C4", type: "single", question: "Which statement is used to handle an expected runtime error?", options: ["try/except", "if/else only", "switch", "guard"], answer: 0, explanation: "try/except handles exceptions.", points: 1 },
      { id: "q5", competency: "PY-210-C2", type: "single", question: "Which structure is unordered and stores unique items?", options: ["list", "dict", "set", "tuple"], answer: 2, explanation: "Sets are unordered with unique elements.", points: 1 },
      { id: "q6", competency: "PY-210-C4", type: "single", question: "Which tool runs your tests and is a default Python testing framework?", options: ["unittest", "npm", "CMake", "gcc"], answer: 0, explanation: "unittest is a standard library testing framework.", points: 1 }
    ]
  },
  {
    id: "exam-javascript",
    courseId: "javascript",
    code: "ZL-EX-JS-220",
    title: "Certificate of Competence — JavaScript Programming",
    qualificationCode: "ZL-QUAL-JS-220",
    level: "Level 3 (RQF) • EQF 4",
    credits: 15,
    durationMinutes: 60,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 6,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre (RQF/EQF/SFIA)",
    description: "Invigilated, applied exam over modern ES2025 syntax, functions/scopes, DOM events, and async patterns.",
    instructions: [
      "60 minutes, 6 applied questions — single-choice unless marked ‘Select all that apply’.",
      "Pass 75%, Distinction 90%. One attempt at a time; 3 attempts per enrolment.",
      "Proctored: webcam + ID check, no external aids. Explanations shown after submission."
    ],
    competencies: [
      { code: "JS-220-C1", title: "Modern syntax & data types", weight: 25 },
      { code: "JS-220-C2", title: "Functions, scope & closures", weight: 25 },
      { code: "JS-220-C3", title: "DOM & event handling", weight: 25 },
      { code: "JS-220-C4", title: "Asynchronous programming", weight: 25 }
    ],
    questions: [
      { id: "q1", competency: "JS-220-C1", type: "single", question: "Which variable declaration is block-scoped and cannot be reassigned?", options: ["var", "let", "const", "function"], answer: 2, explanation: "const is block-scoped and immutable to reassignment.", points: 1 },
      { id: "q2", competency: "JS-220-C2", type: "single", question: "A closure lets an inner function:", options: ["Access outer function scope after it returns", "Only access global scope", "Never access variables", "Run on a new thread"], answer: 0, explanation: "Closures capture outer scope.", points: 1 },
      { id: "q3", competency: "JS-220-C3", type: "single", question: "Which method attaches an event listener?", options: ["addEventListener", "bindEvent", "on()", "listen()"], answer: 0, explanation: "Element.addEventListener attaches handlers.", points: 1 },
      { id: "q4", competency: "JS-220-C4", type: "single", question: "What object represents the eventual completion of async work?", options: ["Promise", "Callback only", "Event", "Module"], answer: 0, explanation: "A Promise represents completion/failure.", points: 1 },
      { id: "q5", competency: "JS-220-C1", type: "single", question: "What does `const x = [1,2]; x.push(3)` do?", options: ["Throws an error", "Mutates the array (allowed)", "Reassigns x", "Creates a string"], answer: 1, explanation: "const forbids reassignment, not mutation.", points: 1 },
      { id: "q6", competency: "JS-220-C4", type: "single", question: "Inside an async function, which keyword pauses until a Promise settles?", options: ["await", "yield", "wait", "block"], answer: 0, explanation: "await suspends until the promise resolves.", points: 1 }
    ]
  },
  {
    id: "exam-typescript",
    courseId: "typescript",
    code: "ZL-EX-TS-230",
    title: "Certificate of Competence — TypeScript Programming",
    qualificationCode: "ZL-QUAL-TS-230",
    level: "Level 4 (RQF) • EQF 5",
    credits: 13,
    durationMinutes: 60,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 6,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre (RQF/EQF/SFIA)",
    description: "Invigilated exam over the TypeScript type system: inference, interfaces/unions, generics, and strict config.",
    instructions: [
      "60 minutes, 6 applied questions — single-choice unless marked ‘Select all that apply’.",
      "Pass 75%, Distinction 90%. One attempt at a time; 3 attempts per enrolment.",
      "Proctored: webcam + ID check, no external aids. Explanations shown after submission."
    ],
    competencies: [
      { code: "TS-230-C1", title: "Type basics & inference", weight: 20 },
      { code: "TS-230-C2", title: "Interfaces, unions & structural typing", weight: 25 },
      { code: "TS-230-C3", title: "Generics & advanced types", weight: 30 },
      { code: "TS-230-C4", title: "Strict config & real-world integration", weight: 25 }
    ],
    questions: [
      { id: "q1", competency: "TS-230-C1", type: "single", question: "TypeScript enforces type checking:", options: ["At compile time", "Only at runtime", "Never", "At database level"], answer: 0, explanation: "Types are checked at compile/transpile time.", points: 1 },
      { id: "q2", competency: "TS-230-C2", type: "single", question: "type Status = 'active' | 'inactive' defines a:", options: ["Union type", "Intersection type", "Tuple", "Enum alias"], answer: 0, explanation: "This is a union type (one of the listed literals).", points: 1 },
      { id: "q3", competency: "TS-230-C3", type: "single", question: "function first<T>(arr: T[]): T — what does <T> declare?", options: ["A generic type parameter", "A class", "A namespace", "An interface"], answer: 0, explanation: "T is a generic type parameter.", points: 1 },
      { id: "q4", competency: "TS-230-C4", type: "single", question: "Which tsconfig option enables the highest level of safety?", options: ["strict", "watch", "sourceMap", "declaration"], answer: 0, explanation: "strict turns on all strict checks.", points: 1 },
      { id: "q5", competency: "TS-230-C2", type: "single", question: "Assignment compatibility in TS is primarily:", options: ["Structural (shape-based)", "Nominal (name-based)", "Random", "Length-based"], answer: 0, explanation: "TS uses structural typing.", points: 1 },
      { id: "q6", competency: "TS-230-C3", type: "single", question: "Which utility type makes all properties of an object optional?", options: ["Partial<T>", "Required<T>", "Readonly<T>", "Pick<T>"], answer: 0, explanation: "Partial makes properties optional.", points: 1 }
    ]
  },
  {
    id: "exam-java",
    courseId: "java",
    code: "ZL-EX-JV-240",
    title: "Certificate of Competence — Java Development",
    qualificationCode: "ZL-QUAL-JV-240",
    level: "Level 4 (RQF) • EQF 5",
    credits: 16,
    durationMinutes: 75,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 6,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre (RQF/EQF/SFIA)",
    description: "Invigilated exam over Java syntax, OOP/interfaces/generics, collections & Streams, and exceptions & concurrency.",
    instructions: [
      "75 minutes, 6 applied questions — single-choice unless marked ‘Select all that apply’.",
      "Pass 75%, Distinction 90%. One attempt at a time; 3 attempts per enrolment.",
      "Proctored: webcam + ID check, no external aids. Explanations shown after submission."
    ],
    competencies: [
      { code: "JV-240-C1", title: "Syntax, types & control flow", weight: 20 },
      { code: "JV-240-C2", title: "OOP, interfaces & generics", weight: 30 },
      { code: "JV-240-C3", title: "Collections & Streams", weight: 25 },
      { code: "JV-240-C4", title: "Exceptions & concurrency", weight: 25 }
    ],
    questions: [
      { id: "q1", competency: "JV-240-C1", type: "single", question: "Which is a primitive type in Java?", options: ["String", "Integer", "int", "ArrayList"], answer: 2, explanation: "int is a primitive; the others are reference types.", points: 1 },
      { id: "q2", competency: "JV-240-C2", type: "single", question: "A class can implement:", options: ["Multiple interfaces", "Only one interface", "Zero interfaces only", "Only classes"], answer: 0, explanation: "A class implements multiple interfaces but extends one class.", points: 1 },
      { id: "q3", competency: "JV-240-C3", type: "single", question: "Which Stream terminal operation produces a single aggregate value?", options: ["filter", "reduce", "map", "peek"], answer: 1, explanation: "reduce aggregates values.", points: 1 },
      { id: "q4", competency: "JV-240-C4", type: "single", question: "Which keyword is used to declare a variable that can be shared across threads safely?", options: ["synchronized", "volatile", "final", "static"], answer: 1, explanation: "volatile ensures visibility across threads.", points: 1 },
      { id: "q5", competency: "JV-240-C2", type: "single", question: "What does 'override' mean when a subclass redefines a parent method?", options: ["Provide a subclass-specific implementation", "Add overloading", "Hide the field", "Compile error"], answer: 0, explanation: "Override replaces parent behavior.", points: 1 },
      { id: "q6", competency: "JV-240-C4", type: "single", question: "Which exception type is checked at compile time?", options: ["IOException", "ArithmeticException", "NullPointerException", "ArrayIndexOutOfBounds"], answer: 0, explanation: "IOException is checked; runtime exceptions are unchecked.", points: 1 }
    ]
  },
  {
    id: "exam-golang",
    courseId: "golang",
    code: "ZL-EX-GO-250",
    title: "Certificate of Competence — Go Programming",
    qualificationCode: "ZL-QUAL-GO-250",
    level: "Level 4 (RQF) • EQF 5",
    credits: 14,
    durationMinutes: 60,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 6,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre (RQF/EQF/SFIA)",
    description: "Invigilated exam over Go syntax/types, structs/interfaces/pointers, concurrency, and the standard library.",
    instructions: [
      "60 minutes, 6 applied questions — single-choice unless marked ‘Select all that apply’.",
      "Pass 75%, Distinction 90%. One attempt at a time; 3 attempts per enrolment.",
      "Proctored: webcam + ID check, no external aids. Explanations shown after submission."
    ],
    competencies: [
      { code: "GO-250-C1", title: "Syntax, types & control flow", weight: 20 },
      { code: "GO-250-C2", title: "Structs, interfaces & pointers", weight: 25 },
      { code: "GO-250-C3", title: "Concurrency: goroutines & channels", weight: 30 },
      { code: "GO-250-C4", title: "HTTP services & standard library", weight: 25 }
    ],
    questions: [
      { id: "q1", competency: "GO-250-C1", type: "single", question: "What is the zero value of an int in Go?", options: ["0", "nil", "null", "undefined"], answer: 0, explanation: "Numeric types zero to 0.", points: 1 },
      { id: "q2", competency: "GO-250-C2", type: "single", question: "What operator takes the address of a variable in Go?", options: ["&", "*", "#", "@"], answer: 0, explanation: "& returns a pointer to the variable.", points: 1 },
      { id: "q3", competency: "GO-250-C3", type: "single", question: "Which keyword launches a function as a goroutine?", options: ["go", "spawn", "async", "thread"], answer: 0, explanation: "The go statement runs a function concurrently.", points: 1 },
      { id: "q4", competency: "GO-250-C4", type: "single", question: "How does Go conventionally signal errors?", options: ["Return an error value", "Throw exceptions", "Panic on everything", "Return NULL"], answer: 0, explanation: "Go returns errors as values.", points: 1 },
      { id: "q5", competency: "GO-250-C2", type: "single", question: "An interface in Go is satisfied when a type:", options: ["Implements all methods in the interface", "Has the same name", "Extends a base class", "Is a struct"], answer: 0, explanation: "Structural method satisfaction defines interfaces.", points: 1 },
      { id: "q6", competency: "GO-250-C3", type: "single", question: "What does `close(ch)` do for a channel?", options: ["Signals no more values will be sent", "Deletes the channel", "Deallocates memory", "Restarts goroutine"], answer: 0, explanation: "Closing signals the end of sends for range consumers.", points: 1 }
    ]
  },
  {
    id: "exam-rust",
    courseId: "rust",
    code: "ZL-EX-RS-260",
    title: "Certificate of Competence — Rust Programming",
    qualificationCode: "ZL-QUAL-RS-260",
    level: "Level 5 (RQF) • EQF 6",
    credits: 16,
    durationMinutes: 75,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 6,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre (RQF/EQF/SFIA)",
    description: "Invigilated exam over ownership/borrowing, enums & pattern matching, Result/Option error handling, and concurrency & lifetimes.",
    instructions: [
      "75 minutes, 6 applied questions — single-choice unless marked ‘Select all that apply’.",
      "Pass 75%, Distinction 90%. One attempt at a time; 3 attempts per enrolment.",
      "Proctored: webcam + ID check, no external aids. Explanations shown after submission."
    ],
    competencies: [
      { code: "RS-260-C1", title: "Ownership, moves & borrows", weight: 30 },
      { code: "RS-260-C2", title: "Enums, pattern matching & traits", weight: 25 },
      { code: "RS-260-C3", title: "Error handling & Option/Result", weight: 20 },
      { code: "RS-260-C4", title: "Concurrency & lifetimes", weight: 25 }
    ],
    questions: [
      { id: "q1", competency: "RS-260-C1", type: "single", question: "After a value is moved, using the old binding is:", options: ["A compile error", "Allowed", "Auto-copied", "Runtime warning only"], answer: 0, explanation: "Moves invalidate the original binding at compile time.", points: 1 },
      { id: "q2", competency: "RS-260-C1", type: "single", question: "Which types implement Copy automatically?", options: ["Integers & simple types", "String", "Vec", "Owned structs by default"], answer: 0, explanation: "Copy types are simple stack types like integers.", points: 1 },
      { id: "q3", competency: "RS-260-C2", type: "single", question: "Which keyword defines a set of behaviors a type can implement?", options: ["trait", "impl", "fn", "mod"], answer: 0, explanation: "Traits define shared behavior.", points: 1 },
      { id: "q4", competency: "RS-260-C3", type: "single", question: "What does the `?` operator do on a Result?", options: ["Propagates the error or unwraps the value", "Ignores errors", "Panics always", "Converts to int"], answer: 0, explanation: "? returns errors early or unwraps Ok values.", points: 1 },
      { id: "q5", competency: "RS-260-C4", type: "single", question: "Rust prevents data races at:", options: ["Compile time", "Runtime via checks", "Deployment", "Never"], answer: 0, explanation: "Ownership and Send/Sync enforce safety at compile time.", points: 1 },
      { id: "q6", competency: "RS-260-C3", type: "single", question: "Which enum represents the possible absence of a value?", options: ["Option", "Result", "Vec", "Box"], answer: 0, explanation: "Option is Some or None.", points: 1 }
    ]
  },
  {
    id: "exam-csharp",
    courseId: "csharp",
    code: "ZL-EX-CS-270",
    title: "Certificate of Competence — C# & .NET",
    qualificationCode: "ZL-QUAL-CS-270",
    level: "Level 4 (RQF) • EQF 5",
    credits: 15,
    durationMinutes: 60,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 6,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre (RQF/EQF/SFIA)",
    description: "Invigilated exam over C# syntax & OOP, LINQ & collections, async & error handling, and ASP.NET Core & DI.",
    instructions: [
      "60 minutes, 6 applied questions — single-choice unless marked ‘Select all that apply’.",
      "Pass 75%, Distinction 90%. One attempt at a time; 3 attempts per enrolment.",
      "Proctored: webcam + ID check, no external aids. Explanations shown after submission."
    ],
    competencies: [
      { code: "CS-270-C1", title: "Syntax, types & OOP", weight: 25 },
      { code: "CS-270-C2", title: "LINQ & collections", weight: 25 },
      { code: "CS-270-C3", title: "Async & error handling", weight: 25 },
      { code: "CS-270-C4", title: "ASP.NET Core & DI", weight: 25 }
    ],
    questions: [
      { id: "q1", competency: "CS-270-C1", type: "single", question: "Which type stores a fractional number in C#?", options: ["double", "int", "bool", "char"], answer: 0, explanation: "double stores floating-point numbers.", points: 1 },
      { id: "q2", competency: "CS-270-C1", type: "single", question: "A 'record' in C# is primarily for:", options: ["Immutable data with value equality", "High-perf loops", "Error handling", "File I/O"], answer: 0, explanation: "Records are immutable data carriers with value equality.", points: 1 },
      { id: "q3", competency: "CS-270-C2", type: "single", question: "Which LINQ method projects/transforms each element?", options: ["Select", "Where", "Sum", "First"], answer: 0, explanation: "Select maps elements to a new shape.", points: 1 },
      { id: "q4", competency: "CS-270-C3", type: "single", question: "Which keyword marks a method as returning a Task for async work?", options: ["async", "await", "defer", "sync"], answer: 0, explanation: "async methods may be awaited.", points: 1 },
      { id: "q5", competency: "CS-270-C4", type: "single", question: "In ASP.NET Core, which pattern supplies dependencies to classes?", options: ["Dependency Injection", "Singleton only", "Global statics", "Magic globals"], answer: 0, explanation: "DI is the core IoC pattern in ASP.NET Core.", points: 1 },
      { id: "q6", competency: "CS-270-C3", type: "single", question: "Which statement pairs must be used to run code and handle exceptions?", options: ["try / catch", "if / else", "using / import", "lock / unlock"], answer: 0, explanation: "try/catch handles exceptions.", points: 1 }
    ]
  },
  {
    id: "exam-sql",
    courseId: "sql",
    code: "ZL-EX-SQL-280",
    title: "Certificate of Competence — SQL & Databases",
    qualificationCode: "ZL-QUAL-SQL-280",
    level: "Level 3 (RQF) • EQF 4",
    credits: 14,
    durationMinutes: 60,
    passMark: 75,
    distinctionMark: 90,
    totalQuestions: 6,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 3,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre (RQF/EQF/SFIA)",
    description: "Invigilated exam over SELECT/filtering/aggregation, joins, subqueries & window functions, and schema design & indexing.",
    instructions: [
      "60 minutes, 6 applied questions — single-choice unless marked ‘Select all that apply’.",
      "Pass 75%, Distinction 90%. One attempt at a time; 3 attempts per enrolment.",
      "Proctored: webcam + ID check, no external aids. Explanations shown after submission."
    ],
    competencies: [
      { code: "SQL-280-C1", title: "Core SELECT, filtering & aggregation", weight: 30 },
      { code: "SQL-280-C2", title: "Joins & relationships", weight: 25 },
      { code: "SQL-280-C3", title: "Subqueries & window functions", weight: 25 },
      { code: "SQL-280-C4", title: "Schema design, indexing & optimization", weight: 20 }
    ],
    questions: [
      { id: "q1", competency: "SQL-280-C1", type: "single", question: "Which clause filters aggregated groups?", options: ["HAVING", "WHERE", "ORDER BY", "LIMIT"], answer: 0, explanation: "HAVING filters after GROUP BY.", points: 1 },
      { id: "q2", competency: "SQL-280-C2", type: "single", question: "Which join returns all rows from the left table with matching right rows?", options: ["LEFT JOIN", "INNER JOIN", "CROSS JOIN", "RIGHT JOIN"], answer: 0, explanation: "LEFT JOIN keeps all left rows.", points: 1 },
      { id: "q3", competency: "SQL-280-C3", type: "single", question: "ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) ranks:", options: ["Within each department by salary", "Globally only", "By name", "Not allowed in SQL"], answer: 0, explanation: "PARTITION BY groups the window.", points: 1 },
      { id: "q4", competency: "SQL-280-C4", type: "single", question: "Which statement creates a lookup index to speed queries?", options: ["CREATE INDEX", "SELECT INDEX", "ALTER ROW", "TRUNCATE"], answer: 0, explanation: "CREATE INDEX builds an index.", points: 1 },
      { id: "q5", competency: "SQL-280-C1", type: "single", question: "SELECT COUNT(*) counts:", options: ["Rows in the result", "Distinct names", "Columns", "Tables"], answer: 0, explanation: "COUNT(*) counts rows.", points: 1 },
      { id: "q6", competency: "SQL-280-C4", type: "single", question: "Which command shows how a query executes?", options: ["EXPLAIN", "SHOW RUN", "TRACE ALL", "DEBUGOUT"], answer: 0, explanation: "EXPLAIN reveals the execution plan.", points: 1 }
    ]
  },
  {
    id: "exam-software-dev-capstone",
    courseId: "software-developer",
    code: "ZL-EX-SWD-401",
    title: "Professional Certificate — Software Developer Capstone",
    qualificationCode: "ZL-CERT-SWD-401",
    level: "Level 4 (RQF) • EQF 5",
    credits: 20,
    durationMinutes: 90,
    passMark: 70,
    distinctionMark: 85,
    totalQuestions: 8,
    shuffle: true,
    proctored: true,
    attemptsAllowed: 2,
    validForMonths: 36,
    awardingBody: "ZimLink Academy — Accredited Competence Centre (RQF/EQF/SFIA)",
    description: "Integrated capstone exam assessing multi-language development, database design, and backend engineering for the Software Developer certificate.",
    instructions: [
      "90 minutes, 8 applied questions across languages and database design.",
      "Pass 70%, Distinction 85%. Two attempts per enrolment.",
      "Proctored: webcam + ID check, no external aids. Explanations shown after submission."
    ],
    competencies: [
      { code: "SWD-C1", title: "Multi-language development", weight: 50 },
      { code: "SWD-C2", title: "Database design & SQL", weight: 30 },
      { code: "SWD-C3", title: "Backend & API engineering", weight: 20 }
    ],
    questions: [
      { id: "q1", competency: "SWD-C1", type: "single", question: "Which language runs primarily in the browser?", options: ["JavaScript", "Rust", "Go", "SQL"], answer: 0, explanation: "JavaScript is the browser language.", points: 1 },
      { id: "q2", competency: "SWD-C2", type: "single", question: "Which join keeps all rows from the left table?", options: ["LEFT JOIN", "INNER JOIN", "CROSS JOIN", "RIGHT ONLY"], answer: 0, explanation: "LEFT JOIN preserves left rows.", points: 1 },
      { id: "q3", competency: "SWD-C1", type: "single", question: "Which concept prevents data races at compile time?", options: ["Rust ownership", "SQL indexes", "CSS specificity", "URL encoding"], answer: 0, explanation: "Rust's ownership model guarantees thread safety at compile time.", points: 1 },
      { id: "q4", competency: "SWD-C3", type: "single", question: "Which HTTP verb is conventionally used to update an existing resource?", options: ["PUT/PATCH", "GET", "DELETE", "OPTIONS"], answer: 0, explanation: "PUT/PATCH update resources.", points: 1 },
      { id: "q5", competency: "SWD-C2", type: "single", question: "An index in a database primarily:", options: ["Speeds up lookups", "Encrypts data", "Deletes rows", "Formats text"], answer: 0, explanation: "Indexes accelerate searches.", points: 1 },
      { id: "q6", competency: "SWD-C3", type: "single", question: "In ASP.NET Core, dependencies are injected via:", options: ["The DI container", "Global variables", "CSS classes", "HTML attributes"], answer: 0, explanation: "DI resolves dependencies by interface.", points: 1 },
      { id: "q7", competency: "SWD-C1", type: "single", question: "Which type system feature does TypeScript add to JavaScript?", options: ["Static types", "A new database", "CSS support", "Built-in AI"], answer: 0, explanation: "TypeScript adds static typing.", points: 1 },
      { id: "q8", competency: "SWD-C2", type: "multiple", question: "Which are valid SQL aggregate functions? (Select all that apply)", options: ["SUM", "COUNT", "AVG", "WRITE"], answer: [0,1,2], explanation: "SUM, COUNT, AVG aggregate; WRITE is not SQL.", points: 2 }
    ]
  },
{
  "id": "exam-computational-thinking",
  "courseId": "computational-thinking",
  "code": "ZL-EX-COMPUTATIO",
  "title": "Certificate of Competence — Computational Thinking",
  "qualificationCode": "ZL-QUAL-CT-110",
  "level": "Level 2 (RQF) • EQF 3",
  "credits": 8,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Computational Thinking & Algorithms. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "CT-110-C1",
      "title": "Decompose problems",
      "weight": 30
    },
    {
      "code": "CT-110-C2",
      "title": "Read & write pseudocode",
      "weight": 35
    },
    {
      "code": "CT-110-C3",
      "title": "Assess algorithm efficiency",
      "weight": 35
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "CT-110-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Algorithmic decomposition\" in Computational Thinking & Algorithms?",
      "options": [
        "Algorithmic decomposition is a core technique central to this discipline and is correctly applied in standard practice.",
        "Algorithmic decomposition is completely irrelevant to Computational Thinking & Algorithms and never used.",
        "Algorithmic decomposition is only used in unsupervised learning and never in supervised tasks.",
        "Algorithmic decomposition can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Algorithmic decomposition is a fundamental concept in Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "CT-110-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Patterns & abstractions\" in Computational Thinking & Algorithms?",
      "options": [
        "Patterns & abstractions is a core technique central to this discipline and is correctly applied in standard practice.",
        "Patterns & abstractions is completely irrelevant to Computational Thinking & Algorithms and never used.",
        "Patterns & abstractions is only used in unsupervised learning and never in supervised tasks.",
        "Patterns & abstractions can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Patterns & abstractions is a fundamental concept in Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "CT-110-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Pseudocode\" in Computational Thinking & Algorithms?",
      "options": [
        "Pseudocode is a core technique central to this discipline and is correctly applied in standard practice.",
        "Pseudocode is completely irrelevant to Computational Thinking & Algorithms and never used.",
        "Pseudocode is only used in unsupervised learning and never in supervised tasks.",
        "Pseudocode can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Pseudocode is a fundamental concept in Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "CT-110-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Complexity basics\" in Computational Thinking & Algorithms?",
      "options": [
        "Complexity basics is a core technique central to this discipline and is correctly applied in standard practice.",
        "Complexity basics is completely irrelevant to Computational Thinking & Algorithms and never used.",
        "Complexity basics is only used in unsupervised learning and never in supervised tasks.",
        "Complexity basics can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Complexity basics is a fundamental concept in Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "CT-110-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Logical reasoning\" in Computational Thinking & Algorithms?",
      "options": [
        "Logical reasoning is a core technique central to this discipline and is correctly applied in standard practice.",
        "Logical reasoning is completely irrelevant to Computational Thinking & Algorithms and never used.",
        "Logical reasoning is only used in unsupervised learning and never in supervised tasks.",
        "Logical reasoning can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Logical reasoning is a fundamental concept in Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "CT-110-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Algorithmic decomposition\" in Computational Thinking & Algorithms?",
      "options": [
        "Algorithmic decomposition is a core technique central to this discipline and is correctly applied in standard practice.",
        "Algorithmic decomposition is completely irrelevant to Computational Thinking & Algorithms and never used.",
        "Algorithmic decomposition is only used in unsupervised learning and never in supervised tasks.",
        "Algorithmic decomposition can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Algorithmic decomposition is a fundamental concept in Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "CT-110-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Patterns & abstractions\" in Computational Thinking & Algorithms?",
      "options": [
        "Patterns & abstractions is a core technique central to this discipline and is correctly applied in standard practice.",
        "Patterns & abstractions is completely irrelevant to Computational Thinking & Algorithms and never used.",
        "Patterns & abstractions is only used in unsupervised learning and never in supervised tasks.",
        "Patterns & abstractions can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Patterns & abstractions is a fundamental concept in Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "CT-110-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Pseudocode\" in Computational Thinking & Algorithms?",
      "options": [
        "Pseudocode is a core technique central to this discipline and is correctly applied in standard practice.",
        "Pseudocode is completely irrelevant to Computational Thinking & Algorithms and never used.",
        "Pseudocode is only used in unsupervised learning and never in supervised tasks.",
        "Pseudocode can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Pseudocode is a fundamental concept in Computational Thinking & Algorithms.",
      "points": 1
    }
  ]
},
{
  "id": "exam-git",
  "courseId": "git-version-control",
  "code": "ZL-EX-GITVERSION",
  "title": "Certificate of Competence — Git & Version Control",
  "qualificationCode": "ZL-QUAL-GIT-120",
  "level": "Level 2 (RQF) • EQF 3",
  "credits": 8,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Git & Version Control. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "GIT-120-C1",
      "title": "Repo & commit workflow",
      "weight": 30
    },
    {
      "code": "GIT-120-C2",
      "title": "Branching & merging",
      "weight": 40
    },
    {
      "code": "GIT-120-C3",
      "title": "Collaboration & undo",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "GIT-120-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Repositories & commits\" in Git & Version Control?",
      "options": [
        "Repositories & commits is a core technique central to this discipline and is correctly applied in standard practice.",
        "Repositories & commits is completely irrelevant to Git & Version Control and never used.",
        "Repositories & commits is only used in unsupervised learning and never in supervised tasks.",
        "Repositories & commits can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Repositories & commits is a fundamental concept in Git & Version Control.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "GIT-120-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Branches & merges\" in Git & Version Control?",
      "options": [
        "Branches & merges is a core technique central to this discipline and is correctly applied in standard practice.",
        "Branches & merges is completely irrelevant to Git & Version Control and never used.",
        "Branches & merges is only used in unsupervised learning and never in supervised tasks.",
        "Branches & merges can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Branches & merges is a fundamental concept in Git & Version Control.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "GIT-120-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Remote workflows\" in Git & Version Control?",
      "options": [
        "Remote workflows is a core technique central to this discipline and is correctly applied in standard practice.",
        "Remote workflows is completely irrelevant to Git & Version Control and never used.",
        "Remote workflows is only used in unsupervised learning and never in supervised tasks.",
        "Remote workflows can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Remote workflows is a fundamental concept in Git & Version Control.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "GIT-120-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Conflict resolution\" in Git & Version Control?",
      "options": [
        "Conflict resolution is a core technique central to this discipline and is correctly applied in standard practice.",
        "Conflict resolution is completely irrelevant to Git & Version Control and never used.",
        "Conflict resolution is only used in unsupervised learning and never in supervised tasks.",
        "Conflict resolution can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Conflict resolution is a fundamental concept in Git & Version Control.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "GIT-120-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Commit hygiene\" in Git & Version Control?",
      "options": [
        "Commit hygiene is a core technique central to this discipline and is correctly applied in standard practice.",
        "Commit hygiene is completely irrelevant to Git & Version Control and never used.",
        "Commit hygiene is only used in unsupervised learning and never in supervised tasks.",
        "Commit hygiene can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Commit hygiene is a fundamental concept in Git & Version Control.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "GIT-120-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Repositories & commits\" in Git & Version Control?",
      "options": [
        "Repositories & commits is a core technique central to this discipline and is correctly applied in standard practice.",
        "Repositories & commits is completely irrelevant to Git & Version Control and never used.",
        "Repositories & commits is only used in unsupervised learning and never in supervised tasks.",
        "Repositories & commits can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Repositories & commits is a fundamental concept in Git & Version Control.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "GIT-120-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Branches & merges\" in Git & Version Control?",
      "options": [
        "Branches & merges is a core technique central to this discipline and is correctly applied in standard practice.",
        "Branches & merges is completely irrelevant to Git & Version Control and never used.",
        "Branches & merges is only used in unsupervised learning and never in supervised tasks.",
        "Branches & merges can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Branches & merges is a fundamental concept in Git & Version Control.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "GIT-120-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Remote workflows\" in Git & Version Control?",
      "options": [
        "Remote workflows is a core technique central to this discipline and is correctly applied in standard practice.",
        "Remote workflows is completely irrelevant to Git & Version Control and never used.",
        "Remote workflows is only used in unsupervised learning and never in supervised tasks.",
        "Remote workflows can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Remote workflows is a fundamental concept in Git & Version Control.",
      "points": 1
    }
  ]
},
{
  "id": "exam-computer-fundamentals",
  "courseId": "computer-fundamentals",
  "code": "ZL-EX-COMPUTERFU",
  "title": "Certificate of Competence — Computer Fundamentals",
  "qualificationCode": "ZL-QUAL-CF-130",
  "level": "Level 2 (RQF) • EQF 3",
  "credits": 8,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Computer Fundamentals & Command Line. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "CF-130-C1",
      "title": "Hardware & OS concepts",
      "weight": 30
    },
    {
      "code": "CF-130-C2",
      "title": "Shell navigation & files",
      "weight": 40
    },
    {
      "code": "CF-130-C3",
      "title": "Processes & permissions",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "CF-130-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Hardware & CPU\" in Computer Fundamentals & Command Line?",
      "options": [
        "Hardware & CPU is a core technique central to this discipline and is correctly applied in standard practice.",
        "Hardware & CPU is completely irrelevant to Computer Fundamentals & Command Line and never used.",
        "Hardware & CPU is only used in unsupervised learning and never in supervised tasks.",
        "Hardware & CPU can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Hardware & CPU is a fundamental concept in Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "CF-130-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Memory & storage\" in Computer Fundamentals & Command Line?",
      "options": [
        "Memory & storage is a core technique central to this discipline and is correctly applied in standard practice.",
        "Memory & storage is completely irrelevant to Computer Fundamentals & Command Line and never used.",
        "Memory & storage is only used in unsupervised learning and never in supervised tasks.",
        "Memory & storage can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Memory & storage is a fundamental concept in Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "CF-130-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Operating systems\" in Computer Fundamentals & Command Line?",
      "options": [
        "Operating systems is a core technique central to this discipline and is correctly applied in standard practice.",
        "Operating systems is completely irrelevant to Computer Fundamentals & Command Line and never used.",
        "Operating systems is only used in unsupervised learning and never in supervised tasks.",
        "Operating systems can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Operating systems is a fundamental concept in Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "CF-130-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Networking & I/O\" in Computer Fundamentals & Command Line?",
      "options": [
        "Networking & I/O is a core technique central to this discipline and is correctly applied in standard practice.",
        "Networking & I/O is completely irrelevant to Computer Fundamentals & Command Line and never used.",
        "Networking & I/O is only used in unsupervised learning and never in supervised tasks.",
        "Networking & I/O can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Networking & I/O is a fundamental concept in Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "CF-130-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Numbers & binary\" in Computer Fundamentals & Command Line?",
      "options": [
        "Numbers & binary is a core technique central to this discipline and is correctly applied in standard practice.",
        "Numbers & binary is completely irrelevant to Computer Fundamentals & Command Line and never used.",
        "Numbers & binary is only used in unsupervised learning and never in supervised tasks.",
        "Numbers & binary can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Numbers & binary is a fundamental concept in Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "CF-130-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Hardware & CPU\" in Computer Fundamentals & Command Line?",
      "options": [
        "Hardware & CPU is a core technique central to this discipline and is correctly applied in standard practice.",
        "Hardware & CPU is completely irrelevant to Computer Fundamentals & Command Line and never used.",
        "Hardware & CPU is only used in unsupervised learning and never in supervised tasks.",
        "Hardware & CPU can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Hardware & CPU is a fundamental concept in Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "CF-130-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Memory & storage\" in Computer Fundamentals & Command Line?",
      "options": [
        "Memory & storage is a core technique central to this discipline and is correctly applied in standard practice.",
        "Memory & storage is completely irrelevant to Computer Fundamentals & Command Line and never used.",
        "Memory & storage is only used in unsupervised learning and never in supervised tasks.",
        "Memory & storage can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Memory & storage is a fundamental concept in Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "CF-130-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Operating systems\" in Computer Fundamentals & Command Line?",
      "options": [
        "Operating systems is a core technique central to this discipline and is correctly applied in standard practice.",
        "Operating systems is completely irrelevant to Computer Fundamentals & Command Line and never used.",
        "Operating systems is only used in unsupervised learning and never in supervised tasks.",
        "Operating systems can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Operating systems is a fundamental concept in Computer Fundamentals & Command Line.",
      "points": 1
    }
  ]
},
{
  "id": "exam-problem-solving",
  "courseId": "problem-solving",
  "code": "ZL-EX-PROBLEMSOL",
  "title": "Certificate of Competence — Problem Solving",
  "qualificationCode": "ZL-QUAL-PS-140",
  "level": "Level 3 (RQF) • EQF 4",
  "credits": 10,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Problem Solving with Programming. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "PS-140-C1",
      "title": "Requirements analysis",
      "weight": 30
    },
    {
      "code": "PS-140-C2",
      "title": "Test-driven implementation",
      "weight": 35
    },
    {
      "code": "PS-140-C3",
      "title": "Debugging & refactoring",
      "weight": 35
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "PS-140-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Define the problem\" in Problem Solving with Programming?",
      "options": [
        "Define the problem is a core technique central to this discipline and is correctly applied in standard practice.",
        "Define the problem is completely irrelevant to Problem Solving with Programming and never used.",
        "Define the problem is only used in unsupervised learning and never in supervised tasks.",
        "Define the problem can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Define the problem is a fundamental concept in Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "PS-140-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Break down & plan\" in Problem Solving with Programming?",
      "options": [
        "Break down & plan is a core technique central to this discipline and is correctly applied in standard practice.",
        "Break down & plan is completely irrelevant to Problem Solving with Programming and never used.",
        "Break down & plan is only used in unsupervised learning and never in supervised tasks.",
        "Break down & plan can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Break down & plan is a fundamental concept in Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "PS-140-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Root-cause analysis\" in Problem Solving with Programming?",
      "options": [
        "Root-cause analysis is a core technique central to this discipline and is correctly applied in standard practice.",
        "Root-cause analysis is completely irrelevant to Problem Solving with Programming and never used.",
        "Root-cause analysis is only used in unsupervised learning and never in supervised tasks.",
        "Root-cause analysis can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Root-cause analysis is a fundamental concept in Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "PS-140-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Test & refine\" in Problem Solving with Programming?",
      "options": [
        "Test & refine is a core technique central to this discipline and is correctly applied in standard practice.",
        "Test & refine is completely irrelevant to Problem Solving with Programming and never used.",
        "Test & refine is only used in unsupervised learning and never in supervised tasks.",
        "Test & refine can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Test & refine is a fundamental concept in Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "PS-140-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Communicate solutions\" in Problem Solving with Programming?",
      "options": [
        "Communicate solutions is a core technique central to this discipline and is correctly applied in standard practice.",
        "Communicate solutions is completely irrelevant to Problem Solving with Programming and never used.",
        "Communicate solutions is only used in unsupervised learning and never in supervised tasks.",
        "Communicate solutions can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Communicate solutions is a fundamental concept in Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "PS-140-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Define the problem\" in Problem Solving with Programming?",
      "options": [
        "Define the problem is a core technique central to this discipline and is correctly applied in standard practice.",
        "Define the problem is completely irrelevant to Problem Solving with Programming and never used.",
        "Define the problem is only used in unsupervised learning and never in supervised tasks.",
        "Define the problem can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Define the problem is a fundamental concept in Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "PS-140-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Break down & plan\" in Problem Solving with Programming?",
      "options": [
        "Break down & plan is a core technique central to this discipline and is correctly applied in standard practice.",
        "Break down & plan is completely irrelevant to Problem Solving with Programming and never used.",
        "Break down & plan is only used in unsupervised learning and never in supervised tasks.",
        "Break down & plan can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Break down & plan is a fundamental concept in Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "PS-140-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Root-cause analysis\" in Problem Solving with Programming?",
      "options": [
        "Root-cause analysis is a core technique central to this discipline and is correctly applied in standard practice.",
        "Root-cause analysis is completely irrelevant to Problem Solving with Programming and never used.",
        "Root-cause analysis is only used in unsupervised learning and never in supervised tasks.",
        "Root-cause analysis can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Root-cause analysis is a fundamental concept in Problem Solving with Programming.",
      "points": 1
    }
  ]
},
{
  "id": "exam-ml-supervised",
  "courseId": "ml-supervised",
  "code": "ZL-EX-MLSUPERVIS",
  "title": "Certificate of Competence — Supervised Learning",
  "qualificationCode": "ZL-QUAL-SL-311",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Supervised Learning in Practice. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "SL-311-C1",
      "title": "Prepare & split data",
      "weight": 20
    },
    {
      "code": "SL-311-C2",
      "title": "Train & evaluate models",
      "weight": 40
    },
    {
      "code": "SL-311-C3",
      "title": "Tune & prevent overfitting",
      "weight": 40
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "SL-311-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Supervised learning setup\" in Supervised Learning in Practice?",
      "options": [
        "Supervised learning setup is a core technique central to this discipline and is correctly applied in standard practice.",
        "Supervised learning setup is completely irrelevant to Supervised Learning in Practice and never used.",
        "Supervised learning setup is only used in unsupervised learning and never in supervised tasks.",
        "Supervised learning setup can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Supervised learning setup is a fundamental concept in Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "SL-311-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Regression vs classification\" in Supervised Learning in Practice?",
      "options": [
        "Regression vs classification is a core technique central to this discipline and is correctly applied in standard practice.",
        "Regression vs classification is completely irrelevant to Supervised Learning in Practice and never used.",
        "Regression vs classification is only used in unsupervised learning and never in supervised tasks.",
        "Regression vs classification can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Regression vs classification is a fundamental concept in Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "SL-311-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Overfitting & bias-variance\" in Supervised Learning in Practice?",
      "options": [
        "Overfitting & bias-variance is a core technique central to this discipline and is correctly applied in standard practice.",
        "Overfitting & bias-variance is completely irrelevant to Supervised Learning in Practice and never used.",
        "Overfitting & bias-variance is only used in unsupervised learning and never in supervised tasks.",
        "Overfitting & bias-variance can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Overfitting & bias-variance is a fundamental concept in Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "SL-311-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Common algorithms\" in Supervised Learning in Practice?",
      "options": [
        "Common algorithms is a core technique central to this discipline and is correctly applied in standard practice.",
        "Common algorithms is completely irrelevant to Supervised Learning in Practice and never used.",
        "Common algorithms is only used in unsupervised learning and never in supervised tasks.",
        "Common algorithms can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Common algorithms is a fundamental concept in Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "SL-311-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Evaluation\" in Supervised Learning in Practice?",
      "options": [
        "Evaluation is a core technique central to this discipline and is correctly applied in standard practice.",
        "Evaluation is completely irrelevant to Supervised Learning in Practice and never used.",
        "Evaluation is only used in unsupervised learning and never in supervised tasks.",
        "Evaluation can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Evaluation is a fundamental concept in Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "SL-311-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Supervised learning setup\" in Supervised Learning in Practice?",
      "options": [
        "Supervised learning setup is a core technique central to this discipline and is correctly applied in standard practice.",
        "Supervised learning setup is completely irrelevant to Supervised Learning in Practice and never used.",
        "Supervised learning setup is only used in unsupervised learning and never in supervised tasks.",
        "Supervised learning setup can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Supervised learning setup is a fundamental concept in Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "SL-311-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Regression vs classification\" in Supervised Learning in Practice?",
      "options": [
        "Regression vs classification is a core technique central to this discipline and is correctly applied in standard practice.",
        "Regression vs classification is completely irrelevant to Supervised Learning in Practice and never used.",
        "Regression vs classification is only used in unsupervised learning and never in supervised tasks.",
        "Regression vs classification can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Regression vs classification is a fundamental concept in Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "SL-311-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Overfitting & bias-variance\" in Supervised Learning in Practice?",
      "options": [
        "Overfitting & bias-variance is a core technique central to this discipline and is correctly applied in standard practice.",
        "Overfitting & bias-variance is completely irrelevant to Supervised Learning in Practice and never used.",
        "Overfitting & bias-variance is only used in unsupervised learning and never in supervised tasks.",
        "Overfitting & bias-variance can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Overfitting & bias-variance is a fundamental concept in Supervised Learning in Practice.",
      "points": 1
    }
  ]
},
{
  "id": "exam-ml-unsupervised",
  "courseId": "ml-unsupervised",
  "code": "ZL-EX-MLUNSUPERV",
  "title": "Certificate of Competence — Unsupervised Learning",
  "qualificationCode": "ZL-QUAL-UL-312",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Unsupervised Learning & Clustering. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "UL-312-C1",
      "title": "Clustering algorithms",
      "weight": 40
    },
    {
      "code": "UL-312-C2",
      "title": "Selecting cluster count",
      "weight": 25
    },
    {
      "code": "UL-312-C3",
      "title": "Dimensionality reduction",
      "weight": 35
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "UL-312-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Clustering\" in Unsupervised Learning & Clustering?",
      "options": [
        "Clustering is a core technique central to this discipline and is correctly applied in standard practice.",
        "Clustering is completely irrelevant to Unsupervised Learning & Clustering and never used.",
        "Clustering is only used in unsupervised learning and never in supervised tasks.",
        "Clustering can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Clustering is a fundamental concept in Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "UL-312-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Dimensionality reduction\" in Unsupervised Learning & Clustering?",
      "options": [
        "Dimensionality reduction is a core technique central to this discipline and is correctly applied in standard practice.",
        "Dimensionality reduction is completely irrelevant to Unsupervised Learning & Clustering and never used.",
        "Dimensionality reduction is only used in unsupervised learning and never in supervised tasks.",
        "Dimensionality reduction can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Dimensionality reduction is a fundamental concept in Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "UL-312-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Anomaly detection\" in Unsupervised Learning & Clustering?",
      "options": [
        "Anomaly detection is a core technique central to this discipline and is correctly applied in standard practice.",
        "Anomaly detection is completely irrelevant to Unsupervised Learning & Clustering and never used.",
        "Anomaly detection is only used in unsupervised learning and never in supervised tasks.",
        "Anomaly detection can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Anomaly detection is a fundamental concept in Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "UL-312-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"K-means & DBSCAN\" in Unsupervised Learning & Clustering?",
      "options": [
        "K-means & DBSCAN is a core technique central to this discipline and is correctly applied in standard practice.",
        "K-means & DBSCAN is completely irrelevant to Unsupervised Learning & Clustering and never used.",
        "K-means & DBSCAN is only used in unsupervised learning and never in supervised tasks.",
        "K-means & DBSCAN can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "K-means & DBSCAN is a fundamental concept in Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "UL-312-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Evaluation of clusters\" in Unsupervised Learning & Clustering?",
      "options": [
        "Evaluation of clusters is a core technique central to this discipline and is correctly applied in standard practice.",
        "Evaluation of clusters is completely irrelevant to Unsupervised Learning & Clustering and never used.",
        "Evaluation of clusters is only used in unsupervised learning and never in supervised tasks.",
        "Evaluation of clusters can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Evaluation of clusters is a fundamental concept in Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "UL-312-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Clustering\" in Unsupervised Learning & Clustering?",
      "options": [
        "Clustering is a core technique central to this discipline and is correctly applied in standard practice.",
        "Clustering is completely irrelevant to Unsupervised Learning & Clustering and never used.",
        "Clustering is only used in unsupervised learning and never in supervised tasks.",
        "Clustering can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Clustering is a fundamental concept in Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "UL-312-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Dimensionality reduction\" in Unsupervised Learning & Clustering?",
      "options": [
        "Dimensionality reduction is a core technique central to this discipline and is correctly applied in standard practice.",
        "Dimensionality reduction is completely irrelevant to Unsupervised Learning & Clustering and never used.",
        "Dimensionality reduction is only used in unsupervised learning and never in supervised tasks.",
        "Dimensionality reduction can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Dimensionality reduction is a fundamental concept in Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "UL-312-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Anomaly detection\" in Unsupervised Learning & Clustering?",
      "options": [
        "Anomaly detection is a core technique central to this discipline and is correctly applied in standard practice.",
        "Anomaly detection is completely irrelevant to Unsupervised Learning & Clustering and never used.",
        "Anomaly detection is only used in unsupervised learning and never in supervised tasks.",
        "Anomaly detection can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Anomaly detection is a fundamental concept in Unsupervised Learning & Clustering.",
      "points": 1
    }
  ]
},
{
  "id": "exam-model-evaluation",
  "courseId": "model-evaluation",
  "code": "ZL-EX-MODELEVALU",
  "title": "Certificate of Competence — Model Evaluation & Validation",
  "qualificationCode": "ZL-QUAL-ME-313",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Model Evaluation & Validation. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "ME-313-C1",
      "title": "Core classification metrics",
      "weight": 40
    },
    {
      "code": "ME-313-C2",
      "title": "ROC & calibration",
      "weight": 30
    },
    {
      "code": "ME-313-C3",
      "title": "Validation strategies & leakage",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "ME-313-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Metrics & confusion matrix\" in Model Evaluation & Validation?",
      "options": [
        "Metrics & confusion matrix is a core technique central to this discipline and is correctly applied in standard practice.",
        "Metrics & confusion matrix is completely irrelevant to Model Evaluation & Validation and never used.",
        "Metrics & confusion matrix is only used in unsupervised learning and never in supervised tasks.",
        "Metrics & confusion matrix can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Metrics & confusion matrix is a fundamental concept in Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "ME-313-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Cross-validation\" in Model Evaluation & Validation?",
      "options": [
        "Cross-validation is a core technique central to this discipline and is correctly applied in standard practice.",
        "Cross-validation is completely irrelevant to Model Evaluation & Validation and never used.",
        "Cross-validation is only used in unsupervised learning and never in supervised tasks.",
        "Cross-validation can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Cross-validation is a fundamental concept in Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "ME-313-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Precision/recall & F1\" in Model Evaluation & Validation?",
      "options": [
        "Precision/recall & F1 is a core technique central to this discipline and is correctly applied in standard practice.",
        "Precision/recall & F1 is completely irrelevant to Model Evaluation & Validation and never used.",
        "Precision/recall & F1 is only used in unsupervised learning and never in supervised tasks.",
        "Precision/recall & F1 can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Precision/recall & F1 is a fundamental concept in Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "ME-313-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"ROC/AUC\" in Model Evaluation & Validation?",
      "options": [
        "ROC/AUC is a core technique central to this discipline and is correctly applied in standard practice.",
        "ROC/AUC is completely irrelevant to Model Evaluation & Validation and never used.",
        "ROC/AUC is only used in unsupervised learning and never in supervised tasks.",
        "ROC/AUC can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "ROC/AUC is a fundamental concept in Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "ME-313-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Error analysis\" in Model Evaluation & Validation?",
      "options": [
        "Error analysis is a core technique central to this discipline and is correctly applied in standard practice.",
        "Error analysis is completely irrelevant to Model Evaluation & Validation and never used.",
        "Error analysis is only used in unsupervised learning and never in supervised tasks.",
        "Error analysis can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Error analysis is a fundamental concept in Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "ME-313-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Metrics & confusion matrix\" in Model Evaluation & Validation?",
      "options": [
        "Metrics & confusion matrix is a core technique central to this discipline and is correctly applied in standard practice.",
        "Metrics & confusion matrix is completely irrelevant to Model Evaluation & Validation and never used.",
        "Metrics & confusion matrix is only used in unsupervised learning and never in supervised tasks.",
        "Metrics & confusion matrix can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Metrics & confusion matrix is a fundamental concept in Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "ME-313-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Cross-validation\" in Model Evaluation & Validation?",
      "options": [
        "Cross-validation is a core technique central to this discipline and is correctly applied in standard practice.",
        "Cross-validation is completely irrelevant to Model Evaluation & Validation and never used.",
        "Cross-validation is only used in unsupervised learning and never in supervised tasks.",
        "Cross-validation can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Cross-validation is a fundamental concept in Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "ME-313-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Precision/recall & F1\" in Model Evaluation & Validation?",
      "options": [
        "Precision/recall & F1 is a core technique central to this discipline and is correctly applied in standard practice.",
        "Precision/recall & F1 is completely irrelevant to Model Evaluation & Validation and never used.",
        "Precision/recall & F1 is only used in unsupervised learning and never in supervised tasks.",
        "Precision/recall & F1 can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Precision/recall & F1 is a fundamental concept in Model Evaluation & Validation.",
      "points": 1
    }
  ]
},
{
  "id": "exam-feature-engineering",
  "courseId": "feature-engineering",
  "code": "ZL-EX-FEATUREENG",
  "title": "Certificate of Competence — Feature Engineering",
  "qualificationCode": "ZL-QUAL-FE-314",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Feature Engineering & Selection. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "FE-314-C1",
      "title": "Imputation & scaling",
      "weight": 25
    },
    {
      "code": "FE-314-C2",
      "title": "Categorical & datetime encoding",
      "weight": 35
    },
    {
      "code": "FE-314-C3",
      "title": "Feature selection & leakage",
      "weight": 40
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "FE-314-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Feature types\" in Feature Engineering & Selection?",
      "options": [
        "Feature types is a core technique central to this discipline and is correctly applied in standard practice.",
        "Feature types is completely irrelevant to Feature Engineering & Selection and never used.",
        "Feature types is only used in unsupervised learning and never in supervised tasks.",
        "Feature types can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Feature types is a fundamental concept in Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "FE-314-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Encoding categoricals\" in Feature Engineering & Selection?",
      "options": [
        "Encoding categoricals is a core technique central to this discipline and is correctly applied in standard practice.",
        "Encoding categoricals is completely irrelevant to Feature Engineering & Selection and never used.",
        "Encoding categoricals is only used in unsupervised learning and never in supervised tasks.",
        "Encoding categoricals can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Encoding categoricals is a fundamental concept in Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "FE-314-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Scaling & normalization\" in Feature Engineering & Selection?",
      "options": [
        "Scaling & normalization is a core technique central to this discipline and is correctly applied in standard practice.",
        "Scaling & normalization is completely irrelevant to Feature Engineering & Selection and never used.",
        "Scaling & normalization is only used in unsupervised learning and never in supervised tasks.",
        "Scaling & normalization can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Scaling & normalization is a fundamental concept in Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "FE-314-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Feature selection\" in Feature Engineering & Selection?",
      "options": [
        "Feature selection is a core technique central to this discipline and is correctly applied in standard practice.",
        "Feature selection is completely irrelevant to Feature Engineering & Selection and never used.",
        "Feature selection is only used in unsupervised learning and never in supervised tasks.",
        "Feature selection can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Feature selection is a fundamental concept in Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "FE-314-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Creating features\" in Feature Engineering & Selection?",
      "options": [
        "Creating features is a core technique central to this discipline and is correctly applied in standard practice.",
        "Creating features is completely irrelevant to Feature Engineering & Selection and never used.",
        "Creating features is only used in unsupervised learning and never in supervised tasks.",
        "Creating features can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Creating features is a fundamental concept in Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "FE-314-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Feature types\" in Feature Engineering & Selection?",
      "options": [
        "Feature types is a core technique central to this discipline and is correctly applied in standard practice.",
        "Feature types is completely irrelevant to Feature Engineering & Selection and never used.",
        "Feature types is only used in unsupervised learning and never in supervised tasks.",
        "Feature types can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Feature types is a fundamental concept in Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "FE-314-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Encoding categoricals\" in Feature Engineering & Selection?",
      "options": [
        "Encoding categoricals is a core technique central to this discipline and is correctly applied in standard practice.",
        "Encoding categoricals is completely irrelevant to Feature Engineering & Selection and never used.",
        "Encoding categoricals is only used in unsupervised learning and never in supervised tasks.",
        "Encoding categoricals can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Encoding categoricals is a fundamental concept in Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "FE-314-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Scaling & normalization\" in Feature Engineering & Selection?",
      "options": [
        "Scaling & normalization is a core technique central to this discipline and is correctly applied in standard practice.",
        "Scaling & normalization is completely irrelevant to Feature Engineering & Selection and never used.",
        "Scaling & normalization is only used in unsupervised learning and never in supervised tasks.",
        "Scaling & normalization can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Scaling & normalization is a fundamental concept in Feature Engineering & Selection.",
      "points": 1
    }
  ]
},
{
  "id": "exam-neural-networks-basics",
  "courseId": "neural-networks-basics",
  "code": "ZL-EX-NEURALNETW",
  "title": "Certificate of Competence — Neural Networks",
  "qualificationCode": "ZL-QUAL-NN-411",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 13,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Neural Networks from Scratch. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "NN-411-C1",
      "title": "Forward pass math",
      "weight": 30
    },
    {
      "code": "NN-411-C2",
      "title": "Backpropagation",
      "weight": 40
    },
    {
      "code": "NN-411-C3",
      "title": "Training with gradient descent",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "NN-411-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Forward pass\" in Neural Networks from Scratch?",
      "options": [
        "Forward pass is a core technique central to this discipline and is correctly applied in standard practice.",
        "Forward pass is completely irrelevant to Neural Networks from Scratch and never used.",
        "Forward pass is only used in unsupervised learning and never in supervised tasks.",
        "Forward pass can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Forward pass is a fundamental concept in Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "NN-411-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Backpropagation\" in Neural Networks from Scratch?",
      "options": [
        "Backpropagation is a core technique central to this discipline and is correctly applied in standard practice.",
        "Backpropagation is completely irrelevant to Neural Networks from Scratch and never used.",
        "Backpropagation is only used in unsupervised learning and never in supervised tasks.",
        "Backpropagation can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Backpropagation is a fundamental concept in Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "NN-411-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Activation functions\" in Neural Networks from Scratch?",
      "options": [
        "Activation functions is a core technique central to this discipline and is correctly applied in standard practice.",
        "Activation functions is completely irrelevant to Neural Networks from Scratch and never used.",
        "Activation functions is only used in unsupervised learning and never in supervised tasks.",
        "Activation functions can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Activation functions is a fundamental concept in Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "NN-411-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Gradient descent\" in Neural Networks from Scratch?",
      "options": [
        "Gradient descent is a core technique central to this discipline and is correctly applied in standard practice.",
        "Gradient descent is completely irrelevant to Neural Networks from Scratch and never used.",
        "Gradient descent is only used in unsupervised learning and never in supervised tasks.",
        "Gradient descent can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Gradient descent is a fundamental concept in Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "NN-411-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Training loops\" in Neural Networks from Scratch?",
      "options": [
        "Training loops is a core technique central to this discipline and is correctly applied in standard practice.",
        "Training loops is completely irrelevant to Neural Networks from Scratch and never used.",
        "Training loops is only used in unsupervised learning and never in supervised tasks.",
        "Training loops can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Training loops is a fundamental concept in Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "NN-411-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Forward pass\" in Neural Networks from Scratch?",
      "options": [
        "Forward pass is a core technique central to this discipline and is correctly applied in standard practice.",
        "Forward pass is completely irrelevant to Neural Networks from Scratch and never used.",
        "Forward pass is only used in unsupervised learning and never in supervised tasks.",
        "Forward pass can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Forward pass is a fundamental concept in Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "NN-411-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Backpropagation\" in Neural Networks from Scratch?",
      "options": [
        "Backpropagation is a core technique central to this discipline and is correctly applied in standard practice.",
        "Backpropagation is completely irrelevant to Neural Networks from Scratch and never used.",
        "Backpropagation is only used in unsupervised learning and never in supervised tasks.",
        "Backpropagation can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Backpropagation is a fundamental concept in Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "NN-411-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Activation functions\" in Neural Networks from Scratch?",
      "options": [
        "Activation functions is a core technique central to this discipline and is correctly applied in standard practice.",
        "Activation functions is completely irrelevant to Neural Networks from Scratch and never used.",
        "Activation functions is only used in unsupervised learning and never in supervised tasks.",
        "Activation functions can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Activation functions is a fundamental concept in Neural Networks from Scratch.",
      "points": 1
    }
  ]
},
{
  "id": "exam-cnn-deep-dive",
  "courseId": "cnn-deep-dive",
  "code": "ZL-EX-CNNDEEPDIV",
  "title": "Certificate of Competence — Convolutional Neural Networks",
  "qualificationCode": "ZL-QUAL-CNN-412",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 13,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Convolutional Neural Networks. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "CNN-412-C1",
      "title": "Convolution & pooling math",
      "weight": 35
    },
    {
      "code": "CNN-412-C2",
      "title": "Build CNNs with PyTorch",
      "weight": 35
    },
    {
      "code": "CNN-412-C3",
      "title": "Transfer learning",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "CNN-412-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Convolutions & pooling\" in Convolutional Neural Networks?",
      "options": [
        "Convolutions & pooling is a core technique central to this discipline and is correctly applied in standard practice.",
        "Convolutions & pooling is completely irrelevant to Convolutional Neural Networks and never used.",
        "Convolutions & pooling is only used in unsupervised learning and never in supervised tasks.",
        "Convolutions & pooling can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Convolutions & pooling is a fundamental concept in Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "CNN-412-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Feature maps\" in Convolutional Neural Networks?",
      "options": [
        "Feature maps is a core technique central to this discipline and is correctly applied in standard practice.",
        "Feature maps is completely irrelevant to Convolutional Neural Networks and never used.",
        "Feature maps is only used in unsupervised learning and never in supervised tasks.",
        "Feature maps can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Feature maps is a fundamental concept in Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "CNN-412-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"CNN architectures\" in Convolutional Neural Networks?",
      "options": [
        "CNN architectures is a core technique central to this discipline and is correctly applied in standard practice.",
        "CNN architectures is completely irrelevant to Convolutional Neural Networks and never used.",
        "CNN architectures is only used in unsupervised learning and never in supervised tasks.",
        "CNN architectures can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "CNN architectures is a fundamental concept in Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "CNN-412-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Transfer learning\" in Convolutional Neural Networks?",
      "options": [
        "Transfer learning is a core technique central to this discipline and is correctly applied in standard practice.",
        "Transfer learning is completely irrelevant to Convolutional Neural Networks and never used.",
        "Transfer learning is only used in unsupervised learning and never in supervised tasks.",
        "Transfer learning can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Transfer learning is a fundamental concept in Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "CNN-412-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Interpretability\" in Convolutional Neural Networks?",
      "options": [
        "Interpretability is a core technique central to this discipline and is correctly applied in standard practice.",
        "Interpretability is completely irrelevant to Convolutional Neural Networks and never used.",
        "Interpretability is only used in unsupervised learning and never in supervised tasks.",
        "Interpretability can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Interpretability is a fundamental concept in Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "CNN-412-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Convolutions & pooling\" in Convolutional Neural Networks?",
      "options": [
        "Convolutions & pooling is a core technique central to this discipline and is correctly applied in standard practice.",
        "Convolutions & pooling is completely irrelevant to Convolutional Neural Networks and never used.",
        "Convolutions & pooling is only used in unsupervised learning and never in supervised tasks.",
        "Convolutions & pooling can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Convolutions & pooling is a fundamental concept in Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "CNN-412-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Feature maps\" in Convolutional Neural Networks?",
      "options": [
        "Feature maps is a core technique central to this discipline and is correctly applied in standard practice.",
        "Feature maps is completely irrelevant to Convolutional Neural Networks and never used.",
        "Feature maps is only used in unsupervised learning and never in supervised tasks.",
        "Feature maps can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Feature maps is a fundamental concept in Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "CNN-412-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"CNN architectures\" in Convolutional Neural Networks?",
      "options": [
        "CNN architectures is a core technique central to this discipline and is correctly applied in standard practice.",
        "CNN architectures is completely irrelevant to Convolutional Neural Networks and never used.",
        "CNN architectures is only used in unsupervised learning and never in supervised tasks.",
        "CNN architectures can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "CNN architectures is a fundamental concept in Convolutional Neural Networks.",
      "points": 1
    }
  ]
},
{
  "id": "exam-rnn-sequence",
  "courseId": "rnn-sequence",
  "code": "ZL-EX-RNNSEQUENC",
  "title": "Certificate of Competence — Sequence Models",
  "qualificationCode": "ZL-QUAL-SEQ-413",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Sequence Models & RNNs. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "SEQ-413-C1",
      "title": "Recurrence & gating",
      "weight": 35
    },
    {
      "code": "SEQ-413-C2",
      "title": "Seq2seq & attention",
      "weight": 35
    },
    {
      "code": "SEQ-413-C3",
      "title": "Time-series applications",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "SEQ-413-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Recurrence & hidden state\" in Sequence Models & RNNs?",
      "options": [
        "Recurrence & hidden state is a core technique central to this discipline and is correctly applied in standard practice.",
        "Recurrence & hidden state is completely irrelevant to Sequence Models & RNNs and never used.",
        "Recurrence & hidden state is only used in unsupervised learning and never in supervised tasks.",
        "Recurrence & hidden state can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Recurrence & hidden state is a fundamental concept in Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "SEQ-413-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"LSTM/GRU gating\" in Sequence Models & RNNs?",
      "options": [
        "LSTM/GRU gating is a core technique central to this discipline and is correctly applied in standard practice.",
        "LSTM/GRU gating is completely irrelevant to Sequence Models & RNNs and never used.",
        "LSTM/GRU gating is only used in unsupervised learning and never in supervised tasks.",
        "LSTM/GRU gating can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "LSTM/GRU gating is a fundamental concept in Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "SEQ-413-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Seq2seq & attention\" in Sequence Models & RNNs?",
      "options": [
        "Seq2seq & attention is a core technique central to this discipline and is correctly applied in standard practice.",
        "Seq2seq & attention is completely irrelevant to Sequence Models & RNNs and never used.",
        "Seq2seq & attention is only used in unsupervised learning and never in supervised tasks.",
        "Seq2seq & attention can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Seq2seq & attention is a fundamental concept in Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "SEQ-413-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Time-series\" in Sequence Models & RNNs?",
      "options": [
        "Time-series is a core technique central to this discipline and is correctly applied in standard practice.",
        "Time-series is completely irrelevant to Sequence Models & RNNs and never used.",
        "Time-series is only used in unsupervised learning and never in supervised tasks.",
        "Time-series can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Time-series is a fundamental concept in Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "SEQ-413-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Vanishing gradients\" in Sequence Models & RNNs?",
      "options": [
        "Vanishing gradients is a core technique central to this discipline and is correctly applied in standard practice.",
        "Vanishing gradients is completely irrelevant to Sequence Models & RNNs and never used.",
        "Vanishing gradients is only used in unsupervised learning and never in supervised tasks.",
        "Vanishing gradients can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Vanishing gradients is a fundamental concept in Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "SEQ-413-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Recurrence & hidden state\" in Sequence Models & RNNs?",
      "options": [
        "Recurrence & hidden state is a core technique central to this discipline and is correctly applied in standard practice.",
        "Recurrence & hidden state is completely irrelevant to Sequence Models & RNNs and never used.",
        "Recurrence & hidden state is only used in unsupervised learning and never in supervised tasks.",
        "Recurrence & hidden state can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Recurrence & hidden state is a fundamental concept in Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "SEQ-413-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"LSTM/GRU gating\" in Sequence Models & RNNs?",
      "options": [
        "LSTM/GRU gating is a core technique central to this discipline and is correctly applied in standard practice.",
        "LSTM/GRU gating is completely irrelevant to Sequence Models & RNNs and never used.",
        "LSTM/GRU gating is only used in unsupervised learning and never in supervised tasks.",
        "LSTM/GRU gating can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "LSTM/GRU gating is a fundamental concept in Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "SEQ-413-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Seq2seq & attention\" in Sequence Models & RNNs?",
      "options": [
        "Seq2seq & attention is a core technique central to this discipline and is correctly applied in standard practice.",
        "Seq2seq & attention is completely irrelevant to Sequence Models & RNNs and never used.",
        "Seq2seq & attention is only used in unsupervised learning and never in supervised tasks.",
        "Seq2seq & attention can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Seq2seq & attention is a fundamental concept in Sequence Models & RNNs.",
      "points": 1
    }
  ]
},
{
  "id": "exam-pytorch",
  "courseId": "pytorch-deep-learning",
  "code": "ZL-EX-PYTORCHDEE",
  "title": "Certificate of Competence — Deep Learning with PyTorch",
  "qualificationCode": "ZL-QUAL-PT-414",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 14,
  "durationMinutes": 75,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Deep Learning with PyTorch. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "PT-414-C1",
      "title": "Tensors & autograd",
      "weight": 30
    },
    {
      "code": "PT-414-C2",
      "title": "Datasets & training loops",
      "weight": 40
    },
    {
      "code": "PT-414-C3",
      "title": "GPU & checkpointing",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "PT-414-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Tensors & devices\" in Deep Learning with PyTorch?",
      "options": [
        "Tensors & devices is a core technique central to this discipline and is correctly applied in standard practice.",
        "Tensors & devices is completely irrelevant to Deep Learning with PyTorch and never used.",
        "Tensors & devices is only used in unsupervised learning and never in supervised tasks.",
        "Tensors & devices can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Tensors & devices is a fundamental concept in Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "PT-414-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Autograd\" in Deep Learning with PyTorch?",
      "options": [
        "Autograd is a core technique central to this discipline and is correctly applied in standard practice.",
        "Autograd is completely irrelevant to Deep Learning with PyTorch and never used.",
        "Autograd is only used in unsupervised learning and never in supervised tasks.",
        "Autograd can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Autograd is a fundamental concept in Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "PT-414-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Datasets & dataloaders\" in Deep Learning with PyTorch?",
      "options": [
        "Datasets & dataloaders is a core technique central to this discipline and is correctly applied in standard practice.",
        "Datasets & dataloaders is completely irrelevant to Deep Learning with PyTorch and never used.",
        "Datasets & dataloaders is only used in unsupervised learning and never in supervised tasks.",
        "Datasets & dataloaders can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Datasets & dataloaders is a fundamental concept in Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "PT-414-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Training loops\" in Deep Learning with PyTorch?",
      "options": [
        "Training loops is a core technique central to this discipline and is correctly applied in standard practice.",
        "Training loops is completely irrelevant to Deep Learning with PyTorch and never used.",
        "Training loops is only used in unsupervised learning and never in supervised tasks.",
        "Training loops can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Training loops is a fundamental concept in Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "PT-414-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"GPU & checkpointing\" in Deep Learning with PyTorch?",
      "options": [
        "GPU & checkpointing is a core technique central to this discipline and is correctly applied in standard practice.",
        "GPU & checkpointing is completely irrelevant to Deep Learning with PyTorch and never used.",
        "GPU & checkpointing is only used in unsupervised learning and never in supervised tasks.",
        "GPU & checkpointing can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "GPU & checkpointing is a fundamental concept in Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "PT-414-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Tensors & devices\" in Deep Learning with PyTorch?",
      "options": [
        "Tensors & devices is a core technique central to this discipline and is correctly applied in standard practice.",
        "Tensors & devices is completely irrelevant to Deep Learning with PyTorch and never used.",
        "Tensors & devices is only used in unsupervised learning and never in supervised tasks.",
        "Tensors & devices can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Tensors & devices is a fundamental concept in Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "PT-414-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Autograd\" in Deep Learning with PyTorch?",
      "options": [
        "Autograd is a core technique central to this discipline and is correctly applied in standard practice.",
        "Autograd is completely irrelevant to Deep Learning with PyTorch and never used.",
        "Autograd is only used in unsupervised learning and never in supervised tasks.",
        "Autograd can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Autograd is a fundamental concept in Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "PT-414-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Datasets & dataloaders\" in Deep Learning with PyTorch?",
      "options": [
        "Datasets & dataloaders is a core technique central to this discipline and is correctly applied in standard practice.",
        "Datasets & dataloaders is completely irrelevant to Deep Learning with PyTorch and never used.",
        "Datasets & dataloaders is only used in unsupervised learning and never in supervised tasks.",
        "Datasets & dataloaders can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Datasets & dataloaders is a fundamental concept in Deep Learning with PyTorch.",
      "points": 1
    }
  ]
},
{
  "id": "exam-text-generation",
  "courseId": "text-generation-llms",
  "code": "ZL-EX-TEXTGENERA",
  "title": "Certificate of Competence — Text Generation with LLMs",
  "qualificationCode": "ZL-QUAL-TG-511",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Text Generation with LLMs. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "TG-511-C1",
      "title": "Tokens & generation",
      "weight": 30
    },
    {
      "code": "TG-511-C2",
      "title": "Sampling & prompting",
      "weight": 35
    },
    {
      "code": "TG-511-C3",
      "title": "Guardrails & evaluation",
      "weight": 35
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "TG-511-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Tokens & generation\" in Text Generation with LLMs?",
      "options": [
        "Tokens & generation is a core technique central to this discipline and is correctly applied in standard practice.",
        "Tokens & generation is completely irrelevant to Text Generation with LLMs and never used.",
        "Tokens & generation is only used in unsupervised learning and never in supervised tasks.",
        "Tokens & generation can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Tokens & generation is a fundamental concept in Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "TG-511-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Sampling & temperature\" in Text Generation with LLMs?",
      "options": [
        "Sampling & temperature is a core technique central to this discipline and is correctly applied in standard practice.",
        "Sampling & temperature is completely irrelevant to Text Generation with LLMs and never used.",
        "Sampling & temperature is only used in unsupervised learning and never in supervised tasks.",
        "Sampling & temperature can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Sampling & temperature is a fundamental concept in Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "TG-511-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Prompts & systems\" in Text Generation with LLMs?",
      "options": [
        "Prompts & systems is a core technique central to this discipline and is correctly applied in standard practice.",
        "Prompts & systems is completely irrelevant to Text Generation with LLMs and never used.",
        "Prompts & systems is only used in unsupervised learning and never in supervised tasks.",
        "Prompts & systems can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Prompts & systems is a fundamental concept in Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "TG-511-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Hallucination\" in Text Generation with LLMs?",
      "options": [
        "Hallucination is a core technique central to this discipline and is correctly applied in standard practice.",
        "Hallucination is completely irrelevant to Text Generation with LLMs and never used.",
        "Hallucination is only used in unsupervised learning and never in supervised tasks.",
        "Hallucination can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Hallucination is a fundamental concept in Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "TG-511-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Evaluation\" in Text Generation with LLMs?",
      "options": [
        "Evaluation is a core technique central to this discipline and is correctly applied in standard practice.",
        "Evaluation is completely irrelevant to Text Generation with LLMs and never used.",
        "Evaluation is only used in unsupervised learning and never in supervised tasks.",
        "Evaluation can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Evaluation is a fundamental concept in Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "TG-511-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Tokens & generation\" in Text Generation with LLMs?",
      "options": [
        "Tokens & generation is a core technique central to this discipline and is correctly applied in standard practice.",
        "Tokens & generation is completely irrelevant to Text Generation with LLMs and never used.",
        "Tokens & generation is only used in unsupervised learning and never in supervised tasks.",
        "Tokens & generation can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Tokens & generation is a fundamental concept in Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "TG-511-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Sampling & temperature\" in Text Generation with LLMs?",
      "options": [
        "Sampling & temperature is a core technique central to this discipline and is correctly applied in standard practice.",
        "Sampling & temperature is completely irrelevant to Text Generation with LLMs and never used.",
        "Sampling & temperature is only used in unsupervised learning and never in supervised tasks.",
        "Sampling & temperature can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Sampling & temperature is a fundamental concept in Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "TG-511-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Prompts & systems\" in Text Generation with LLMs?",
      "options": [
        "Prompts & systems is a core technique central to this discipline and is correctly applied in standard practice.",
        "Prompts & systems is completely irrelevant to Text Generation with LLMs and never used.",
        "Prompts & systems is only used in unsupervised learning and never in supervised tasks.",
        "Prompts & systems can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Prompts & systems is a fundamental concept in Text Generation with LLMs.",
      "points": 1
    }
  ]
},
{
  "id": "exam-image-generation",
  "courseId": "image-generation",
  "code": "ZL-EX-IMAGEGENER",
  "title": "Certificate of Competence — Generative Image Models",
  "qualificationCode": "ZL-QUAL-IMG-512",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Generative Image Models. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "IMG-512-C1",
      "title": "Diffusion process",
      "weight": 30
    },
    {
      "code": "IMG-512-C2",
      "title": "Prompting & conditioning",
      "weight": 40
    },
    {
      "code": "IMG-512-C3",
      "title": "LoRA/ControlNet control",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "IMG-512-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Diffusion process\" in Generative Image Models?",
      "options": [
        "Diffusion process is a core technique central to this discipline and is correctly applied in standard practice.",
        "Diffusion process is completely irrelevant to Generative Image Models and never used.",
        "Diffusion process is only used in unsupervised learning and never in supervised tasks.",
        "Diffusion process can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Diffusion process is a fundamental concept in Generative Image Models.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "IMG-512-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Prompting\" in Generative Image Models?",
      "options": [
        "Prompting is a core technique central to this discipline and is correctly applied in standard practice.",
        "Prompting is completely irrelevant to Generative Image Models and never used.",
        "Prompting is only used in unsupervised learning and never in supervised tasks.",
        "Prompting can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Prompting is a fundamental concept in Generative Image Models.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "IMG-512-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"LoRA/ControlNet\" in Generative Image Models?",
      "options": [
        "LoRA/ControlNet is a core technique central to this discipline and is correctly applied in standard practice.",
        "LoRA/ControlNet is completely irrelevant to Generative Image Models and never used.",
        "LoRA/ControlNet is only used in unsupervised learning and never in supervised tasks.",
        "LoRA/ControlNet can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "LoRA/ControlNet is a fundamental concept in Generative Image Models.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "IMG-512-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"CFG & seeds\" in Generative Image Models?",
      "options": [
        "CFG & seeds is a core technique central to this discipline and is correctly applied in standard practice.",
        "CFG & seeds is completely irrelevant to Generative Image Models and never used.",
        "CFG & seeds is only used in unsupervised learning and never in supervised tasks.",
        "CFG & seeds can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "CFG & seeds is a fundamental concept in Generative Image Models.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "IMG-512-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Synthesis evaluation\" in Generative Image Models?",
      "options": [
        "Synthesis evaluation is a core technique central to this discipline and is correctly applied in standard practice.",
        "Synthesis evaluation is completely irrelevant to Generative Image Models and never used.",
        "Synthesis evaluation is only used in unsupervised learning and never in supervised tasks.",
        "Synthesis evaluation can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Synthesis evaluation is a fundamental concept in Generative Image Models.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "IMG-512-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Diffusion process\" in Generative Image Models?",
      "options": [
        "Diffusion process is a core technique central to this discipline and is correctly applied in standard practice.",
        "Diffusion process is completely irrelevant to Generative Image Models and never used.",
        "Diffusion process is only used in unsupervised learning and never in supervised tasks.",
        "Diffusion process can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Diffusion process is a fundamental concept in Generative Image Models.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "IMG-512-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Prompting\" in Generative Image Models?",
      "options": [
        "Prompting is a core technique central to this discipline and is correctly applied in standard practice.",
        "Prompting is completely irrelevant to Generative Image Models and never used.",
        "Prompting is only used in unsupervised learning and never in supervised tasks.",
        "Prompting can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Prompting is a fundamental concept in Generative Image Models.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "IMG-512-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"LoRA/ControlNet\" in Generative Image Models?",
      "options": [
        "LoRA/ControlNet is a core technique central to this discipline and is correctly applied in standard practice.",
        "LoRA/ControlNet is completely irrelevant to Generative Image Models and never used.",
        "LoRA/ControlNet is only used in unsupervised learning and never in supervised tasks.",
        "LoRA/ControlNet can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "LoRA/ControlNet is a fundamental concept in Generative Image Models.",
      "points": 1
    }
  ]
},
{
  "id": "exam-rag-systems",
  "courseId": "rag-systems",
  "code": "ZL-EX-RAGSYSTEMS",
  "title": "Certificate of Competence — Retrieval-Augmented Generation",
  "qualificationCode": "ZL-QUAL-RAG-513",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 13,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Retrieval-Augmented Generation. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "RAG-513-C1",
      "title": "Chunking & embeddings",
      "weight": 30
    },
    {
      "code": "RAG-513-C2",
      "title": "Vector retrieval & reranking",
      "weight": 40
    },
    {
      "code": "RAG-513-C3",
      "title": "Evaluation & grounding",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "RAG-513-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Chunking\" in Retrieval-Augmented Generation?",
      "options": [
        "Chunking is a core technique central to this discipline and is correctly applied in standard practice.",
        "Chunking is completely irrelevant to Retrieval-Augmented Generation and never used.",
        "Chunking is only used in unsupervised learning and never in supervised tasks.",
        "Chunking can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Chunking is a fundamental concept in Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "RAG-513-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Embeddings\" in Retrieval-Augmented Generation?",
      "options": [
        "Embeddings is a core technique central to this discipline and is correctly applied in standard practice.",
        "Embeddings is completely irrelevant to Retrieval-Augmented Generation and never used.",
        "Embeddings is only used in unsupervised learning and never in supervised tasks.",
        "Embeddings can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Embeddings is a fundamental concept in Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "RAG-513-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Vector search\" in Retrieval-Augmented Generation?",
      "options": [
        "Vector search is a core technique central to this discipline and is correctly applied in standard practice.",
        "Vector search is completely irrelevant to Retrieval-Augmented Generation and never used.",
        "Vector search is only used in unsupervised learning and never in supervised tasks.",
        "Vector search can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Vector search is a fundamental concept in Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "RAG-513-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Reranking\" in Retrieval-Augmented Generation?",
      "options": [
        "Reranking is a core technique central to this discipline and is correctly applied in standard practice.",
        "Reranking is completely irrelevant to Retrieval-Augmented Generation and never used.",
        "Reranking is only used in unsupervised learning and never in supervised tasks.",
        "Reranking can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Reranking is a fundamental concept in Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "RAG-513-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Evaluation & grounding\" in Retrieval-Augmented Generation?",
      "options": [
        "Evaluation & grounding is a core technique central to this discipline and is correctly applied in standard practice.",
        "Evaluation & grounding is completely irrelevant to Retrieval-Augmented Generation and never used.",
        "Evaluation & grounding is only used in unsupervised learning and never in supervised tasks.",
        "Evaluation & grounding can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Evaluation & grounding is a fundamental concept in Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "RAG-513-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Chunking\" in Retrieval-Augmented Generation?",
      "options": [
        "Chunking is a core technique central to this discipline and is correctly applied in standard practice.",
        "Chunking is completely irrelevant to Retrieval-Augmented Generation and never used.",
        "Chunking is only used in unsupervised learning and never in supervised tasks.",
        "Chunking can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Chunking is a fundamental concept in Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "RAG-513-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Embeddings\" in Retrieval-Augmented Generation?",
      "options": [
        "Embeddings is a core technique central to this discipline and is correctly applied in standard practice.",
        "Embeddings is completely irrelevant to Retrieval-Augmented Generation and never used.",
        "Embeddings is only used in unsupervised learning and never in supervised tasks.",
        "Embeddings can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Embeddings is a fundamental concept in Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "RAG-513-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Vector search\" in Retrieval-Augmented Generation?",
      "options": [
        "Vector search is a core technique central to this discipline and is correctly applied in standard practice.",
        "Vector search is completely irrelevant to Retrieval-Augmented Generation and never used.",
        "Vector search is only used in unsupervised learning and never in supervised tasks.",
        "Vector search can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Vector search is a fundamental concept in Retrieval-Augmented Generation.",
      "points": 1
    }
  ]
},
{
  "id": "exam-nlp-basics",
  "courseId": "nlp-basics",
  "code": "ZL-EX-NLPBASICS",
  "title": "Certificate of Competence — NLP Fundamentals",
  "qualificationCode": "ZL-QUAL-NLP-311",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for NLP Fundamentals. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "NLP-311-C1",
      "title": "Text preprocessing & vectorization",
      "weight": 40
    },
    {
      "code": "NLP-311-C2",
      "title": "Classical text classification",
      "weight": 35
    },
    {
      "code": "NLP-311-C3",
      "title": "Word embeddings",
      "weight": 25
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "NLP-311-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Preprocessing\" in NLP Fundamentals?",
      "options": [
        "Preprocessing is a core technique central to this discipline and is correctly applied in standard practice.",
        "Preprocessing is completely irrelevant to NLP Fundamentals and never used.",
        "Preprocessing is only used in unsupervised learning and never in supervised tasks.",
        "Preprocessing can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Preprocessing is a fundamental concept in NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "NLP-311-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"TF-IDF\" in NLP Fundamentals?",
      "options": [
        "TF-IDF is a core technique central to this discipline and is correctly applied in standard practice.",
        "TF-IDF is completely irrelevant to NLP Fundamentals and never used.",
        "TF-IDF is only used in unsupervised learning and never in supervised tasks.",
        "TF-IDF can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "TF-IDF is a fundamental concept in NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "NLP-311-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Text classification\" in NLP Fundamentals?",
      "options": [
        "Text classification is a core technique central to this discipline and is correctly applied in standard practice.",
        "Text classification is completely irrelevant to NLP Fundamentals and never used.",
        "Text classification is only used in unsupervised learning and never in supervised tasks.",
        "Text classification can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Text classification is a fundamental concept in NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "NLP-311-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Word embeddings\" in NLP Fundamentals?",
      "options": [
        "Word embeddings is a core technique central to this discipline and is correctly applied in standard practice.",
        "Word embeddings is completely irrelevant to NLP Fundamentals and never used.",
        "Word embeddings is only used in unsupervised learning and never in supervised tasks.",
        "Word embeddings can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Word embeddings is a fundamental concept in NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "NLP-311-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Vectorization\" in NLP Fundamentals?",
      "options": [
        "Vectorization is a core technique central to this discipline and is correctly applied in standard practice.",
        "Vectorization is completely irrelevant to NLP Fundamentals and never used.",
        "Vectorization is only used in unsupervised learning and never in supervised tasks.",
        "Vectorization can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Vectorization is a fundamental concept in NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "NLP-311-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Preprocessing\" in NLP Fundamentals?",
      "options": [
        "Preprocessing is a core technique central to this discipline and is correctly applied in standard practice.",
        "Preprocessing is completely irrelevant to NLP Fundamentals and never used.",
        "Preprocessing is only used in unsupervised learning and never in supervised tasks.",
        "Preprocessing can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Preprocessing is a fundamental concept in NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "NLP-311-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"TF-IDF\" in NLP Fundamentals?",
      "options": [
        "TF-IDF is a core technique central to this discipline and is correctly applied in standard practice.",
        "TF-IDF is completely irrelevant to NLP Fundamentals and never used.",
        "TF-IDF is only used in unsupervised learning and never in supervised tasks.",
        "TF-IDF can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "TF-IDF is a fundamental concept in NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "NLP-311-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Text classification\" in NLP Fundamentals?",
      "options": [
        "Text classification is a core technique central to this discipline and is correctly applied in standard practice.",
        "Text classification is completely irrelevant to NLP Fundamentals and never used.",
        "Text classification is only used in unsupervised learning and never in supervised tasks.",
        "Text classification can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Text classification is a fundamental concept in NLP Fundamentals.",
      "points": 1
    }
  ]
},
{
  "id": "exam-sentiment-analysis",
  "courseId": "sentiment-analysis",
  "code": "ZL-EX-SENTIMENTA",
  "title": "Certificate of Competence — Sentiment Analysis",
  "qualificationCode": "ZL-QUAL-SENT-312",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 10,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Sentiment Analysis. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "SENT-312-C1",
      "title": "Baseline classification",
      "weight": 40
    },
    {
      "code": "SENT-312-C2",
      "title": "Transformer fine-tuning",
      "weight": 35
    },
    {
      "code": "SENT-312-C3",
      "title": "Nuanced & aspect sentiment",
      "weight": 25
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "SENT-312-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Sentiment framing\" in Sentiment Analysis?",
      "options": [
        "Sentiment framing is a core technique central to this discipline and is correctly applied in standard practice.",
        "Sentiment framing is completely irrelevant to Sentiment Analysis and never used.",
        "Sentiment framing is only used in unsupervised learning and never in supervised tasks.",
        "Sentiment framing can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Sentiment framing is a fundamental concept in Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "SENT-312-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Baseline models\" in Sentiment Analysis?",
      "options": [
        "Baseline models is a core technique central to this discipline and is correctly applied in standard practice.",
        "Baseline models is completely irrelevant to Sentiment Analysis and never used.",
        "Baseline models is only used in unsupervised learning and never in supervised tasks.",
        "Baseline models can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Baseline models is a fundamental concept in Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "SENT-312-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Transformers\" in Sentiment Analysis?",
      "options": [
        "Transformers is a core technique central to this discipline and is correctly applied in standard practice.",
        "Transformers is completely irrelevant to Sentiment Analysis and never used.",
        "Transformers is only used in unsupervised learning and never in supervised tasks.",
        "Transformers can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Transformers is a fundamental concept in Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "SENT-312-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Imbalance & nuance\" in Sentiment Analysis?",
      "options": [
        "Imbalance & nuance is a core technique central to this discipline and is correctly applied in standard practice.",
        "Imbalance & nuance is completely irrelevant to Sentiment Analysis and never used.",
        "Imbalance & nuance is only used in unsupervised learning and never in supervised tasks.",
        "Imbalance & nuance can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Imbalance & nuance is a fundamental concept in Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "SENT-312-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Aspect sentiment\" in Sentiment Analysis?",
      "options": [
        "Aspect sentiment is a core technique central to this discipline and is correctly applied in standard practice.",
        "Aspect sentiment is completely irrelevant to Sentiment Analysis and never used.",
        "Aspect sentiment is only used in unsupervised learning and never in supervised tasks.",
        "Aspect sentiment can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Aspect sentiment is a fundamental concept in Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "SENT-312-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Sentiment framing\" in Sentiment Analysis?",
      "options": [
        "Sentiment framing is a core technique central to this discipline and is correctly applied in standard practice.",
        "Sentiment framing is completely irrelevant to Sentiment Analysis and never used.",
        "Sentiment framing is only used in unsupervised learning and never in supervised tasks.",
        "Sentiment framing can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Sentiment framing is a fundamental concept in Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "SENT-312-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Baseline models\" in Sentiment Analysis?",
      "options": [
        "Baseline models is a core technique central to this discipline and is correctly applied in standard practice.",
        "Baseline models is completely irrelevant to Sentiment Analysis and never used.",
        "Baseline models is only used in unsupervised learning and never in supervised tasks.",
        "Baseline models can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Baseline models is a fundamental concept in Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "SENT-312-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Transformers\" in Sentiment Analysis?",
      "options": [
        "Transformers is a core technique central to this discipline and is correctly applied in standard practice.",
        "Transformers is completely irrelevant to Sentiment Analysis and never used.",
        "Transformers is only used in unsupervised learning and never in supervised tasks.",
        "Transformers can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Transformers is a fundamental concept in Sentiment Analysis.",
      "points": 1
    }
  ]
},
{
  "id": "exam-transformers-nlp",
  "courseId": "transformers-nlp",
  "code": "ZL-EX-TRANSFORME",
  "title": "Certificate of Competence — Transformers for NLP",
  "qualificationCode": "ZL-QUAL-TRF-313",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 13,
  "durationMinutes": 75,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Transformers for NLP. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "TRF-313-C1",
      "title": "Attention mechanics",
      "weight": 35
    },
    {
      "code": "TRF-313-C2",
      "title": "Using pretrained models",
      "weight": 30
    },
    {
      "code": "TRF-313-C3",
      "title": "Fine-tuning for tasks",
      "weight": 35
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "TRF-313-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Self-attention\" in Transformers for NLP?",
      "options": [
        "Self-attention is a core technique central to this discipline and is correctly applied in standard practice.",
        "Self-attention is completely irrelevant to Transformers for NLP and never used.",
        "Self-attention is only used in unsupervised learning and never in supervised tasks.",
        "Self-attention can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Self-attention is a fundamental concept in Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "TRF-313-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Multi-head & positional\" in Transformers for NLP?",
      "options": [
        "Multi-head & positional is a core technique central to this discipline and is correctly applied in standard practice.",
        "Multi-head & positional is completely irrelevant to Transformers for NLP and never used.",
        "Multi-head & positional is only used in unsupervised learning and never in supervised tasks.",
        "Multi-head & positional can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Multi-head & positional is a fundamental concept in Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "TRF-313-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Pretrained models\" in Transformers for NLP?",
      "options": [
        "Pretrained models is a core technique central to this discipline and is correctly applied in standard practice.",
        "Pretrained models is completely irrelevant to Transformers for NLP and never used.",
        "Pretrained models is only used in unsupervised learning and never in supervised tasks.",
        "Pretrained models can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Pretrained models is a fundamental concept in Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "TRF-313-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Fine-tuning\" in Transformers for NLP?",
      "options": [
        "Fine-tuning is a core technique central to this discipline and is correctly applied in standard practice.",
        "Fine-tuning is completely irrelevant to Transformers for NLP and never used.",
        "Fine-tuning is only used in unsupervised learning and never in supervised tasks.",
        "Fine-tuning can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Fine-tuning is a fundamental concept in Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "TRF-313-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Tokenizers\" in Transformers for NLP?",
      "options": [
        "Tokenizers is a core technique central to this discipline and is correctly applied in standard practice.",
        "Tokenizers is completely irrelevant to Transformers for NLP and never used.",
        "Tokenizers is only used in unsupervised learning and never in supervised tasks.",
        "Tokenizers can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Tokenizers is a fundamental concept in Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "TRF-313-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Self-attention\" in Transformers for NLP?",
      "options": [
        "Self-attention is a core technique central to this discipline and is correctly applied in standard practice.",
        "Self-attention is completely irrelevant to Transformers for NLP and never used.",
        "Self-attention is only used in unsupervised learning and never in supervised tasks.",
        "Self-attention can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Self-attention is a fundamental concept in Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "TRF-313-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Multi-head & positional\" in Transformers for NLP?",
      "options": [
        "Multi-head & positional is a core technique central to this discipline and is correctly applied in standard practice.",
        "Multi-head & positional is completely irrelevant to Transformers for NLP and never used.",
        "Multi-head & positional is only used in unsupervised learning and never in supervised tasks.",
        "Multi-head & positional can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Multi-head & positional is a fundamental concept in Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "TRF-313-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Pretrained models\" in Transformers for NLP?",
      "options": [
        "Pretrained models is a core technique central to this discipline and is correctly applied in standard practice.",
        "Pretrained models is completely irrelevant to Transformers for NLP and never used.",
        "Pretrained models is only used in unsupervised learning and never in supervised tasks.",
        "Pretrained models can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Pretrained models is a fundamental concept in Transformers for NLP.",
      "points": 1
    }
  ]
},
{
  "id": "exam-nlp-production",
  "courseId": "nlp-api-production",
  "code": "ZL-EX-NLPAPIPROD",
  "title": "Certificate of Competence — NLP in Production",
  "qualificationCode": "ZL-QUAL-NLPOPS-314",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for NLP in Production. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "NLPOPS-314-C1",
      "title": "Serving & APIs",
      "weight": 40
    },
    {
      "code": "NLPOPS-314-C2",
      "title": "Retraining & versioning",
      "weight": 30
    },
    {
      "code": "NLPOPS-314-C3",
      "title": "Monitoring & drift",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "NLPOPS-314-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Serving & APIs\" in NLP in Production?",
      "options": [
        "Serving & APIs is a core technique central to this discipline and is correctly applied in standard practice.",
        "Serving & APIs is completely irrelevant to NLP in Production and never used.",
        "Serving & APIs is only used in unsupervised learning and never in supervised tasks.",
        "Serving & APIs can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Serving & APIs is a fundamental concept in NLP in Production.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "NLPOPS-314-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Batching & quantization\" in NLP in Production?",
      "options": [
        "Batching & quantization is a core technique central to this discipline and is correctly applied in standard practice.",
        "Batching & quantization is completely irrelevant to NLP in Production and never used.",
        "Batching & quantization is only used in unsupervised learning and never in supervised tasks.",
        "Batching & quantization can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Batching & quantization is a fundamental concept in NLP in Production.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "NLPOPS-314-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Retraining & versioning\" in NLP in Production?",
      "options": [
        "Retraining & versioning is a core technique central to this discipline and is correctly applied in standard practice.",
        "Retraining & versioning is completely irrelevant to NLP in Production and never used.",
        "Retraining & versioning is only used in unsupervised learning and never in supervised tasks.",
        "Retraining & versioning can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Retraining & versioning is a fundamental concept in NLP in Production.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "NLPOPS-314-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Monitoring & drift\" in NLP in Production?",
      "options": [
        "Monitoring & drift is a core technique central to this discipline and is correctly applied in standard practice.",
        "Monitoring & drift is completely irrelevant to NLP in Production and never used.",
        "Monitoring & drift is only used in unsupervised learning and never in supervised tasks.",
        "Monitoring & drift can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Monitoring & drift is a fundamental concept in NLP in Production.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "NLPOPS-314-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Rate limiting\" in NLP in Production?",
      "options": [
        "Rate limiting is a core technique central to this discipline and is correctly applied in standard practice.",
        "Rate limiting is completely irrelevant to NLP in Production and never used.",
        "Rate limiting is only used in unsupervised learning and never in supervised tasks.",
        "Rate limiting can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Rate limiting is a fundamental concept in NLP in Production.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "NLPOPS-314-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Serving & APIs\" in NLP in Production?",
      "options": [
        "Serving & APIs is a core technique central to this discipline and is correctly applied in standard practice.",
        "Serving & APIs is completely irrelevant to NLP in Production and never used.",
        "Serving & APIs is only used in unsupervised learning and never in supervised tasks.",
        "Serving & APIs can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Serving & APIs is a fundamental concept in NLP in Production.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "NLPOPS-314-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Batching & quantization\" in NLP in Production?",
      "options": [
        "Batching & quantization is a core technique central to this discipline and is correctly applied in standard practice.",
        "Batching & quantization is completely irrelevant to NLP in Production and never used.",
        "Batching & quantization is only used in unsupervised learning and never in supervised tasks.",
        "Batching & quantization can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Batching & quantization is a fundamental concept in NLP in Production.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "NLPOPS-314-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Retraining & versioning\" in NLP in Production?",
      "options": [
        "Retraining & versioning is a core technique central to this discipline and is correctly applied in standard practice.",
        "Retraining & versioning is completely irrelevant to NLP in Production and never used.",
        "Retraining & versioning is only used in unsupervised learning and never in supervised tasks.",
        "Retraining & versioning can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Retraining & versioning is a fundamental concept in NLP in Production.",
      "points": 1
    }
  ]
},
{
  "id": "exam-cv-basics",
  "courseId": "cv-basics",
  "code": "ZL-EX-CVBASICS",
  "title": "Certificate of Competence — OpenCV & Image Processing",
  "qualificationCode": "ZL-QUAL-CV-401",
  "level": "Level 3 (RQF) • EQF 4",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for OpenCV & Image Processing. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "CV-401-C1",
      "title": "Image I/O & transforms",
      "weight": 40
    },
    {
      "code": "CV-401-C2",
      "title": "Filters & edges",
      "weight": 35
    },
    {
      "code": "CV-401-C3",
      "title": "Contours & morphology",
      "weight": 25
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "CV-401-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Image I/O & color\" in OpenCV & Image Processing?",
      "options": [
        "Image I/O & color is a core technique central to this discipline and is correctly applied in standard practice.",
        "Image I/O & color is completely irrelevant to OpenCV & Image Processing and never used.",
        "Image I/O & color is only used in unsupervised learning and never in supervised tasks.",
        "Image I/O & color can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Image I/O & color is a fundamental concept in OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "CV-401-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Filters & thresholding\" in OpenCV & Image Processing?",
      "options": [
        "Filters & thresholding is a core technique central to this discipline and is correctly applied in standard practice.",
        "Filters & thresholding is completely irrelevant to OpenCV & Image Processing and never used.",
        "Filters & thresholding is only used in unsupervised learning and never in supervised tasks.",
        "Filters & thresholding can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Filters & thresholding is a fundamental concept in OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "CV-401-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Edge detection\" in OpenCV & Image Processing?",
      "options": [
        "Edge detection is a core technique central to this discipline and is correctly applied in standard practice.",
        "Edge detection is completely irrelevant to OpenCV & Image Processing and never used.",
        "Edge detection is only used in unsupervised learning and never in supervised tasks.",
        "Edge detection can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Edge detection is a fundamental concept in OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "CV-401-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Morphology & contours\" in OpenCV & Image Processing?",
      "options": [
        "Morphology & contours is a core technique central to this discipline and is correctly applied in standard practice.",
        "Morphology & contours is completely irrelevant to OpenCV & Image Processing and never used.",
        "Morphology & contours is only used in unsupervised learning and never in supervised tasks.",
        "Morphology & contours can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Morphology & contours is a fundamental concept in OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "CV-401-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Preprocessing\" in OpenCV & Image Processing?",
      "options": [
        "Preprocessing is a core technique central to this discipline and is correctly applied in standard practice.",
        "Preprocessing is completely irrelevant to OpenCV & Image Processing and never used.",
        "Preprocessing is only used in unsupervised learning and never in supervised tasks.",
        "Preprocessing can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Preprocessing is a fundamental concept in OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "CV-401-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Image I/O & color\" in OpenCV & Image Processing?",
      "options": [
        "Image I/O & color is a core technique central to this discipline and is correctly applied in standard practice.",
        "Image I/O & color is completely irrelevant to OpenCV & Image Processing and never used.",
        "Image I/O & color is only used in unsupervised learning and never in supervised tasks.",
        "Image I/O & color can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Image I/O & color is a fundamental concept in OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "CV-401-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Filters & thresholding\" in OpenCV & Image Processing?",
      "options": [
        "Filters & thresholding is a core technique central to this discipline and is correctly applied in standard practice.",
        "Filters & thresholding is completely irrelevant to OpenCV & Image Processing and never used.",
        "Filters & thresholding is only used in unsupervised learning and never in supervised tasks.",
        "Filters & thresholding can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Filters & thresholding is a fundamental concept in OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "CV-401-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Edge detection\" in OpenCV & Image Processing?",
      "options": [
        "Edge detection is a core technique central to this discipline and is correctly applied in standard practice.",
        "Edge detection is completely irrelevant to OpenCV & Image Processing and never used.",
        "Edge detection is only used in unsupervised learning and never in supervised tasks.",
        "Edge detection can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Edge detection is a fundamental concept in OpenCV & Image Processing.",
      "points": 1
    }
  ]
},
{
  "id": "exam-object-detection",
  "courseId": "object-detection",
  "code": "ZL-EX-OBJECTDETE",
  "title": "Certificate of Competence — Object Detection",
  "qualificationCode": "ZL-QUAL-DET-402",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 13,
  "durationMinutes": 75,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Object Detection. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "DET-402-C1",
      "title": "Detection concepts & anchors",
      "weight": 30
    },
    {
      "code": "DET-402-C2",
      "title": "YOLO & Faster R-CNN",
      "weight": 40
    },
    {
      "code": "DET-402-C3",
      "title": "mAP evaluation & fine-tune",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "DET-402-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Boxes, anchors, IoU\" in Object Detection?",
      "options": [
        "Boxes, anchors, IoU is a core technique central to this discipline and is correctly applied in standard practice.",
        "Boxes, anchors, IoU is completely irrelevant to Object Detection and never used.",
        "Boxes, anchors, IoU is only used in unsupervised learning and never in supervised tasks.",
        "Boxes, anchors, IoU can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Boxes, anchors, IoU is a fundamental concept in Object Detection.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "DET-402-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"YOLO inference\" in Object Detection?",
      "options": [
        "YOLO inference is a core technique central to this discipline and is correctly applied in standard practice.",
        "YOLO inference is completely irrelevant to Object Detection and never used.",
        "YOLO inference is only used in unsupervised learning and never in supervised tasks.",
        "YOLO inference can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "YOLO inference is a fundamental concept in Object Detection.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "DET-402-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Faster R-CNN\" in Object Detection?",
      "options": [
        "Faster R-CNN is a core technique central to this discipline and is correctly applied in standard practice.",
        "Faster R-CNN is completely irrelevant to Object Detection and never used.",
        "Faster R-CNN is only used in unsupervised learning and never in supervised tasks.",
        "Faster R-CNN can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Faster R-CNN is a fundamental concept in Object Detection.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "DET-402-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"mAP evaluation\" in Object Detection?",
      "options": [
        "mAP evaluation is a core technique central to this discipline and is correctly applied in standard practice.",
        "mAP evaluation is completely irrelevant to Object Detection and never used.",
        "mAP evaluation is only used in unsupervised learning and never in supervised tasks.",
        "mAP evaluation can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "mAP evaluation is a fundamental concept in Object Detection.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "DET-402-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Fine-tuning\" in Object Detection?",
      "options": [
        "Fine-tuning is a core technique central to this discipline and is correctly applied in standard practice.",
        "Fine-tuning is completely irrelevant to Object Detection and never used.",
        "Fine-tuning is only used in unsupervised learning and never in supervised tasks.",
        "Fine-tuning can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Fine-tuning is a fundamental concept in Object Detection.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "DET-402-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Boxes, anchors, IoU\" in Object Detection?",
      "options": [
        "Boxes, anchors, IoU is a core technique central to this discipline and is correctly applied in standard practice.",
        "Boxes, anchors, IoU is completely irrelevant to Object Detection and never used.",
        "Boxes, anchors, IoU is only used in unsupervised learning and never in supervised tasks.",
        "Boxes, anchors, IoU can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Boxes, anchors, IoU is a fundamental concept in Object Detection.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "DET-402-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"YOLO inference\" in Object Detection?",
      "options": [
        "YOLO inference is a core technique central to this discipline and is correctly applied in standard practice.",
        "YOLO inference is completely irrelevant to Object Detection and never used.",
        "YOLO inference is only used in unsupervised learning and never in supervised tasks.",
        "YOLO inference can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "YOLO inference is a fundamental concept in Object Detection.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "DET-402-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Faster R-CNN\" in Object Detection?",
      "options": [
        "Faster R-CNN is a core technique central to this discipline and is correctly applied in standard practice.",
        "Faster R-CNN is completely irrelevant to Object Detection and never used.",
        "Faster R-CNN is only used in unsupervised learning and never in supervised tasks.",
        "Faster R-CNN can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Faster R-CNN is a fundamental concept in Object Detection.",
      "points": 1
    }
  ]
},
{
  "id": "exam-image-segmentation",
  "courseId": "image-segmentation",
  "code": "ZL-EX-IMAGESEGME",
  "title": "Certificate of Competence — Image Segmentation",
  "qualificationCode": "ZL-QUAL-SEG-403",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 13,
  "durationMinutes": 75,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Image Segmentation. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "SEG-403-C1",
      "title": "Segmentation types & tasks",
      "weight": 30
    },
    {
      "code": "SEG-403-C2",
      "title": "U-Net & Mask R-CNN",
      "weight": 40
    },
    {
      "code": "SEG-403-C3",
      "title": "IoU/Dice evaluation",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "SEG-403-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Semantic vs instance\" in Image Segmentation?",
      "options": [
        "Semantic vs instance is a core technique central to this discipline and is correctly applied in standard practice.",
        "Semantic vs instance is completely irrelevant to Image Segmentation and never used.",
        "Semantic vs instance is only used in unsupervised learning and never in supervised tasks.",
        "Semantic vs instance can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Semantic vs instance is a fundamental concept in Image Segmentation.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "SEG-403-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"U-Net\" in Image Segmentation?",
      "options": [
        "U-Net is a core technique central to this discipline and is correctly applied in standard practice.",
        "U-Net is completely irrelevant to Image Segmentation and never used.",
        "U-Net is only used in unsupervised learning and never in supervised tasks.",
        "U-Net can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "U-Net is a fundamental concept in Image Segmentation.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "SEG-403-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Mask R-CNN\" in Image Segmentation?",
      "options": [
        "Mask R-CNN is a core technique central to this discipline and is correctly applied in standard practice.",
        "Mask R-CNN is completely irrelevant to Image Segmentation and never used.",
        "Mask R-CNN is only used in unsupervised learning and never in supervised tasks.",
        "Mask R-CNN can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Mask R-CNN is a fundamental concept in Image Segmentation.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "SEG-403-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Dice & IoU\" in Image Segmentation?",
      "options": [
        "Dice & IoU is a core technique central to this discipline and is correctly applied in standard practice.",
        "Dice & IoU is completely irrelevant to Image Segmentation and never used.",
        "Dice & IoU is only used in unsupervised learning and never in supervised tasks.",
        "Dice & IoU can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Dice & IoU is a fundamental concept in Image Segmentation.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "SEG-403-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Custom training\" in Image Segmentation?",
      "options": [
        "Custom training is a core technique central to this discipline and is correctly applied in standard practice.",
        "Custom training is completely irrelevant to Image Segmentation and never used.",
        "Custom training is only used in unsupervised learning and never in supervised tasks.",
        "Custom training can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Custom training is a fundamental concept in Image Segmentation.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "SEG-403-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Semantic vs instance\" in Image Segmentation?",
      "options": [
        "Semantic vs instance is a core technique central to this discipline and is correctly applied in standard practice.",
        "Semantic vs instance is completely irrelevant to Image Segmentation and never used.",
        "Semantic vs instance is only used in unsupervised learning and never in supervised tasks.",
        "Semantic vs instance can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Semantic vs instance is a fundamental concept in Image Segmentation.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "SEG-403-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"U-Net\" in Image Segmentation?",
      "options": [
        "U-Net is a core technique central to this discipline and is correctly applied in standard practice.",
        "U-Net is completely irrelevant to Image Segmentation and never used.",
        "U-Net is only used in unsupervised learning and never in supervised tasks.",
        "U-Net can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "U-Net is a fundamental concept in Image Segmentation.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "SEG-403-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Mask R-CNN\" in Image Segmentation?",
      "options": [
        "Mask R-CNN is a core technique central to this discipline and is correctly applied in standard practice.",
        "Mask R-CNN is completely irrelevant to Image Segmentation and never used.",
        "Mask R-CNN is only used in unsupervised learning and never in supervised tasks.",
        "Mask R-CNN can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Mask R-CNN is a fundamental concept in Image Segmentation.",
      "points": 1
    }
  ]
},
{
  "id": "exam-cv-deployment",
  "courseId": "cv-deployment",
  "code": "ZL-EX-CVDEPLOYME",
  "title": "Certificate of Competence — Edge CV Deployment",
  "qualificationCode": "ZL-QUAL-EDGE-404",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Edge CV Deployment. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "EDGE-404-C1",
      "title": "Model export (ONNX/TFLite)",
      "weight": 35
    },
    {
      "code": "EDGE-404-C2",
      "title": "Quantization & optimization",
      "weight": 35
    },
    {
      "code": "EDGE-404-C3",
      "title": "Edge deployment & latency",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "EDGE-404-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"ONNX/TFLite export\" in Edge CV Deployment?",
      "options": [
        "ONNX/TFLite export is a core technique central to this discipline and is correctly applied in standard practice.",
        "ONNX/TFLite export is completely irrelevant to Edge CV Deployment and never used.",
        "ONNX/TFLite export is only used in unsupervised learning and never in supervised tasks.",
        "ONNX/TFLite export can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "ONNX/TFLite export is a fundamental concept in Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "EDGE-404-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Quantization\" in Edge CV Deployment?",
      "options": [
        "Quantization is a core technique central to this discipline and is correctly applied in standard practice.",
        "Quantization is completely irrelevant to Edge CV Deployment and never used.",
        "Quantization is only used in unsupervised learning and never in supervised tasks.",
        "Quantization can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Quantization is a fundamental concept in Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "EDGE-404-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Edge optimization\" in Edge CV Deployment?",
      "options": [
        "Edge optimization is a core technique central to this discipline and is correctly applied in standard practice.",
        "Edge optimization is completely irrelevant to Edge CV Deployment and never used.",
        "Edge optimization is only used in unsupervised learning and never in supervised tasks.",
        "Edge optimization can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Edge optimization is a fundamental concept in Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "EDGE-404-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Latency tuning\" in Edge CV Deployment?",
      "options": [
        "Latency tuning is a core technique central to this discipline and is correctly applied in standard practice.",
        "Latency tuning is completely irrelevant to Edge CV Deployment and never used.",
        "Latency tuning is only used in unsupervised learning and never in supervised tasks.",
        "Latency tuning can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Latency tuning is a fundamental concept in Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "EDGE-404-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Real-time loops\" in Edge CV Deployment?",
      "options": [
        "Real-time loops is a core technique central to this discipline and is correctly applied in standard practice.",
        "Real-time loops is completely irrelevant to Edge CV Deployment and never used.",
        "Real-time loops is only used in unsupervised learning and never in supervised tasks.",
        "Real-time loops can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Real-time loops is a fundamental concept in Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "EDGE-404-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"ONNX/TFLite export\" in Edge CV Deployment?",
      "options": [
        "ONNX/TFLite export is a core technique central to this discipline and is correctly applied in standard practice.",
        "ONNX/TFLite export is completely irrelevant to Edge CV Deployment and never used.",
        "ONNX/TFLite export is only used in unsupervised learning and never in supervised tasks.",
        "ONNX/TFLite export can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "ONNX/TFLite export is a fundamental concept in Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "EDGE-404-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Quantization\" in Edge CV Deployment?",
      "options": [
        "Quantization is a core technique central to this discipline and is correctly applied in standard practice.",
        "Quantization is completely irrelevant to Edge CV Deployment and never used.",
        "Quantization is only used in unsupervised learning and never in supervised tasks.",
        "Quantization can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Quantization is a fundamental concept in Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "EDGE-404-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Edge optimization\" in Edge CV Deployment?",
      "options": [
        "Edge optimization is a core technique central to this discipline and is correctly applied in standard practice.",
        "Edge optimization is completely irrelevant to Edge CV Deployment and never used.",
        "Edge optimization is only used in unsupervised learning and never in supervised tasks.",
        "Edge optimization can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Edge optimization is a fundamental concept in Edge CV Deployment.",
      "points": 1
    }
  ]
},
{
  "id": "exam-ci-cd-ml",
  "courseId": "ci-cd-ml",
  "code": "ZL-EX-CICDML",
  "title": "Certificate of Competence — CI/CD for Machine Learning",
  "qualificationCode": "ZL-QUAL-CICD-402",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for CI/CD for Machine Learning. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "CICD-402-C1",
      "title": "Testing data & model code",
      "weight": 35
    },
    {
      "code": "CICD-402-C2",
      "title": "Versioning (DVC/MLflow)",
      "weight": 35
    },
    {
      "code": "CICD-402-C3",
      "title": "Automated pipelines",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "CICD-402-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Testing data & code\" in CI/CD for Machine Learning?",
      "options": [
        "Testing data & code is a core technique central to this discipline and is correctly applied in standard practice.",
        "Testing data & code is completely irrelevant to CI/CD for Machine Learning and never used.",
        "Testing data & code is only used in unsupervised learning and never in supervised tasks.",
        "Testing data & code can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Testing data & code is a fundamental concept in CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "CICD-402-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"DVC/MLflow versioning\" in CI/CD for Machine Learning?",
      "options": [
        "DVC/MLflow versioning is a core technique central to this discipline and is correctly applied in standard practice.",
        "DVC/MLflow versioning is completely irrelevant to CI/CD for Machine Learning and never used.",
        "DVC/MLflow versioning is only used in unsupervised learning and never in supervised tasks.",
        "DVC/MLflow versioning can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "DVC/MLflow versioning is a fundamental concept in CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "CICD-402-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Automated pipelines\" in CI/CD for Machine Learning?",
      "options": [
        "Automated pipelines is a core technique central to this discipline and is correctly applied in standard practice.",
        "Automated pipelines is completely irrelevant to CI/CD for Machine Learning and never used.",
        "Automated pipelines is only used in unsupervised learning and never in supervised tasks.",
        "Automated pipelines can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Automated pipelines is a fundamental concept in CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "CICD-402-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Eval gates\" in CI/CD for Machine Learning?",
      "options": [
        "Eval gates is a core technique central to this discipline and is correctly applied in standard practice.",
        "Eval gates is completely irrelevant to CI/CD for Machine Learning and never used.",
        "Eval gates is only used in unsupervised learning and never in supervised tasks.",
        "Eval gates can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Eval gates is a fundamental concept in CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "CICD-402-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Reproducibility\" in CI/CD for Machine Learning?",
      "options": [
        "Reproducibility is a core technique central to this discipline and is correctly applied in standard practice.",
        "Reproducibility is completely irrelevant to CI/CD for Machine Learning and never used.",
        "Reproducibility is only used in unsupervised learning and never in supervised tasks.",
        "Reproducibility can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Reproducibility is a fundamental concept in CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "CICD-402-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Testing data & code\" in CI/CD for Machine Learning?",
      "options": [
        "Testing data & code is a core technique central to this discipline and is correctly applied in standard practice.",
        "Testing data & code is completely irrelevant to CI/CD for Machine Learning and never used.",
        "Testing data & code is only used in unsupervised learning and never in supervised tasks.",
        "Testing data & code can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Testing data & code is a fundamental concept in CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "CICD-402-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"DVC/MLflow versioning\" in CI/CD for Machine Learning?",
      "options": [
        "DVC/MLflow versioning is a core technique central to this discipline and is correctly applied in standard practice.",
        "DVC/MLflow versioning is completely irrelevant to CI/CD for Machine Learning and never used.",
        "DVC/MLflow versioning is only used in unsupervised learning and never in supervised tasks.",
        "DVC/MLflow versioning can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "DVC/MLflow versioning is a fundamental concept in CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "CICD-402-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Automated pipelines\" in CI/CD for Machine Learning?",
      "options": [
        "Automated pipelines is a core technique central to this discipline and is correctly applied in standard practice.",
        "Automated pipelines is completely irrelevant to CI/CD for Machine Learning and never used.",
        "Automated pipelines is only used in unsupervised learning and never in supervised tasks.",
        "Automated pipelines can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Automated pipelines is a fundamental concept in CI/CD for Machine Learning.",
      "points": 1
    }
  ]
},
{
  "id": "exam-drift",
  "courseId": "monitoring-drift",
  "code": "ZL-EX-MONITORING",
  "title": "Certificate of Competence — Monitoring & Drift Detection",
  "qualificationCode": "ZL-QUAL-DRIFT-403",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Monitoring & Drift Detection. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "DRIFT-403-C1",
      "title": "Drift types & tests",
      "weight": 40
    },
    {
      "code": "DRIFT-403-C2",
      "title": "Thresholds & alerting",
      "weight": 30
    },
    {
      "code": "DRIFT-403-C3",
      "title": "Retraining workflows",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "DRIFT-403-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Data drift\" in Monitoring & Drift Detection?",
      "options": [
        "Data drift is a core technique central to this discipline and is correctly applied in standard practice.",
        "Data drift is completely irrelevant to Monitoring & Drift Detection and never used.",
        "Data drift is only used in unsupervised learning and never in supervised tasks.",
        "Data drift can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Data drift is a fundamental concept in Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "DRIFT-403-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Concept drift\" in Monitoring & Drift Detection?",
      "options": [
        "Concept drift is a core technique central to this discipline and is correctly applied in standard practice.",
        "Concept drift is completely irrelevant to Monitoring & Drift Detection and never used.",
        "Concept drift is only used in unsupervised learning and never in supervised tasks.",
        "Concept drift can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Concept drift is a fundamental concept in Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "DRIFT-403-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Statistical tests\" in Monitoring & Drift Detection?",
      "options": [
        "Statistical tests is a core technique central to this discipline and is correctly applied in standard practice.",
        "Statistical tests is completely irrelevant to Monitoring & Drift Detection and never used.",
        "Statistical tests is only used in unsupervised learning and never in supervised tasks.",
        "Statistical tests can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Statistical tests is a fundamental concept in Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "DRIFT-403-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Alerts & thresholds\" in Monitoring & Drift Detection?",
      "options": [
        "Alerts & thresholds is a core technique central to this discipline and is correctly applied in standard practice.",
        "Alerts & thresholds is completely irrelevant to Monitoring & Drift Detection and never used.",
        "Alerts & thresholds is only used in unsupervised learning and never in supervised tasks.",
        "Alerts & thresholds can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Alerts & thresholds is a fundamental concept in Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "DRIFT-403-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Retraining triggers\" in Monitoring & Drift Detection?",
      "options": [
        "Retraining triggers is a core technique central to this discipline and is correctly applied in standard practice.",
        "Retraining triggers is completely irrelevant to Monitoring & Drift Detection and never used.",
        "Retraining triggers is only used in unsupervised learning and never in supervised tasks.",
        "Retraining triggers can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Retraining triggers is a fundamental concept in Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "DRIFT-403-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Data drift\" in Monitoring & Drift Detection?",
      "options": [
        "Data drift is a core technique central to this discipline and is correctly applied in standard practice.",
        "Data drift is completely irrelevant to Monitoring & Drift Detection and never used.",
        "Data drift is only used in unsupervised learning and never in supervised tasks.",
        "Data drift can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Data drift is a fundamental concept in Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "DRIFT-403-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Concept drift\" in Monitoring & Drift Detection?",
      "options": [
        "Concept drift is a core technique central to this discipline and is correctly applied in standard practice.",
        "Concept drift is completely irrelevant to Monitoring & Drift Detection and never used.",
        "Concept drift is only used in unsupervised learning and never in supervised tasks.",
        "Concept drift can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Concept drift is a fundamental concept in Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "DRIFT-403-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Statistical tests\" in Monitoring & Drift Detection?",
      "options": [
        "Statistical tests is a core technique central to this discipline and is correctly applied in standard practice.",
        "Statistical tests is completely irrelevant to Monitoring & Drift Detection and never used.",
        "Statistical tests is only used in unsupervised learning and never in supervised tasks.",
        "Statistical tests can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Statistical tests is a fundamental concept in Monitoring & Drift Detection.",
      "points": 1
    }
  ]
},
{
  "id": "exam-k8s",
  "courseId": "mlops-kubernetes",
  "code": "ZL-EX-MLOPSKUBER",
  "title": "Certificate of Competence — Scaling ML with Kubernetes",
  "qualificationCode": "ZL-QUAL-K8S-404",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 13,
  "durationMinutes": 75,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Scaling ML with Kubernetes. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "K8S-404-C1",
      "title": "Workloads & services",
      "weight": 35
    },
    {
      "code": "K8S-404-C2",
      "title": "Autoscaling & GPU",
      "weight": 35
    },
    {
      "code": "K8S-404-C3",
      "title": "KServe & updates",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "K8S-404-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Pods & deployments\" in Scaling ML with Kubernetes?",
      "options": [
        "Pods & deployments is a core technique central to this discipline and is correctly applied in standard practice.",
        "Pods & deployments is completely irrelevant to Scaling ML with Kubernetes and never used.",
        "Pods & deployments is only used in unsupervised learning and never in supervised tasks.",
        "Pods & deployments can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Pods & deployments is a fundamental concept in Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "K8S-404-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Services\" in Scaling ML with Kubernetes?",
      "options": [
        "Services is a core technique central to this discipline and is correctly applied in standard practice.",
        "Services is completely irrelevant to Scaling ML with Kubernetes and never used.",
        "Services is only used in unsupervised learning and never in supervised tasks.",
        "Services can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Services is a fundamental concept in Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "K8S-404-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Autoscaling\" in Scaling ML with Kubernetes?",
      "options": [
        "Autoscaling is a core technique central to this discipline and is correctly applied in standard practice.",
        "Autoscaling is completely irrelevant to Scaling ML with Kubernetes and never used.",
        "Autoscaling is only used in unsupervised learning and never in supervised tasks.",
        "Autoscaling can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Autoscaling is a fundamental concept in Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "K8S-404-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"GPU scheduling\" in Scaling ML with Kubernetes?",
      "options": [
        "GPU scheduling is a core technique central to this discipline and is correctly applied in standard practice.",
        "GPU scheduling is completely irrelevant to Scaling ML with Kubernetes and never used.",
        "GPU scheduling is only used in unsupervised learning and never in supervised tasks.",
        "GPU scheduling can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "GPU scheduling is a fundamental concept in Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "K8S-404-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"KServe\" in Scaling ML with Kubernetes?",
      "options": [
        "KServe is a core technique central to this discipline and is correctly applied in standard practice.",
        "KServe is completely irrelevant to Scaling ML with Kubernetes and never used.",
        "KServe is only used in unsupervised learning and never in supervised tasks.",
        "KServe can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "KServe is a fundamental concept in Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "K8S-404-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Pods & deployments\" in Scaling ML with Kubernetes?",
      "options": [
        "Pods & deployments is a core technique central to this discipline and is correctly applied in standard practice.",
        "Pods & deployments is completely irrelevant to Scaling ML with Kubernetes and never used.",
        "Pods & deployments is only used in unsupervised learning and never in supervised tasks.",
        "Pods & deployments can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Pods & deployments is a fundamental concept in Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "K8S-404-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Services\" in Scaling ML with Kubernetes?",
      "options": [
        "Services is a core technique central to this discipline and is correctly applied in standard practice.",
        "Services is completely irrelevant to Scaling ML with Kubernetes and never used.",
        "Services is only used in unsupervised learning and never in supervised tasks.",
        "Services can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Services is a fundamental concept in Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "K8S-404-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Autoscaling\" in Scaling ML with Kubernetes?",
      "options": [
        "Autoscaling is a core technique central to this discipline and is correctly applied in standard practice.",
        "Autoscaling is completely irrelevant to Scaling ML with Kubernetes and never used.",
        "Autoscaling is only used in unsupervised learning and never in supervised tasks.",
        "Autoscaling can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Autoscaling is a fundamental concept in Scaling ML with Kubernetes.",
      "points": 1
    }
  ]
},
{
  "id": "exam-ai-governance",
  "courseId": "ai-governance",
  "code": "ZL-EX-AIGOVERNAN",
  "title": "Certificate of Competence — AI Governance & Policy",
  "qualificationCode": "ZL-QUAL-GOV-210",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 9,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for AI Governance & Policy. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "GOV-210-C1",
      "title": "Governance structures & roles",
      "weight": 40
    },
    {
      "code": "GOV-210-C2",
      "title": "Risk classification",
      "weight": 30
    },
    {
      "code": "GOV-210-C3",
      "title": "Regulatory alignment",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "GOV-210-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Governance structures\" in AI Governance & Policy?",
      "options": [
        "Governance structures is a core technique central to this discipline and is correctly applied in standard practice.",
        "Governance structures is completely irrelevant to AI Governance & Policy and never used.",
        "Governance structures is only used in unsupervised learning and never in supervised tasks.",
        "Governance structures can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Governance structures is a fundamental concept in AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "GOV-210-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Risk tiers\" in AI Governance & Policy?",
      "options": [
        "Risk tiers is a core technique central to this discipline and is correctly applied in standard practice.",
        "Risk tiers is completely irrelevant to AI Governance & Policy and never used.",
        "Risk tiers is only used in unsupervised learning and never in supervised tasks.",
        "Risk tiers can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Risk tiers is a fundamental concept in AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "GOV-210-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"EU AI Act\" in AI Governance & Policy?",
      "options": [
        "EU AI Act is a core technique central to this discipline and is correctly applied in standard practice.",
        "EU AI Act is completely irrelevant to AI Governance & Policy and never used.",
        "EU AI Act is only used in unsupervised learning and never in supervised tasks.",
        "EU AI Act can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "EU AI Act is a fundamental concept in AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "GOV-210-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Accountability\" in AI Governance & Policy?",
      "options": [
        "Accountability is a core technique central to this discipline and is correctly applied in standard practice.",
        "Accountability is completely irrelevant to AI Governance & Policy and never used.",
        "Accountability is only used in unsupervised learning and never in supervised tasks.",
        "Accountability can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Accountability is a fundamental concept in AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "GOV-210-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Documentation\" in AI Governance & Policy?",
      "options": [
        "Documentation is a core technique central to this discipline and is correctly applied in standard practice.",
        "Documentation is completely irrelevant to AI Governance & Policy and never used.",
        "Documentation is only used in unsupervised learning and never in supervised tasks.",
        "Documentation can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Documentation is a fundamental concept in AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "GOV-210-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Governance structures\" in AI Governance & Policy?",
      "options": [
        "Governance structures is a core technique central to this discipline and is correctly applied in standard practice.",
        "Governance structures is completely irrelevant to AI Governance & Policy and never used.",
        "Governance structures is only used in unsupervised learning and never in supervised tasks.",
        "Governance structures can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Governance structures is a fundamental concept in AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "GOV-210-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Risk tiers\" in AI Governance & Policy?",
      "options": [
        "Risk tiers is a core technique central to this discipline and is correctly applied in standard practice.",
        "Risk tiers is completely irrelevant to AI Governance & Policy and never used.",
        "Risk tiers is only used in unsupervised learning and never in supervised tasks.",
        "Risk tiers can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Risk tiers is a fundamental concept in AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "GOV-210-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"EU AI Act\" in AI Governance & Policy?",
      "options": [
        "EU AI Act is a core technique central to this discipline and is correctly applied in standard practice.",
        "EU AI Act is completely irrelevant to AI Governance & Policy and never used.",
        "EU AI Act is only used in unsupervised learning and never in supervised tasks.",
        "EU AI Act can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "EU AI Act is a fundamental concept in AI Governance & Policy.",
      "points": 1
    }
  ]
},
{
  "id": "exam-data-privacy",
  "courseId": "data-privacy-ai",
  "code": "ZL-EX-DATAPRIVAC",
  "title": "Certificate of Competence — Data Privacy in AI",
  "qualificationCode": "ZL-QUAL-DP-220",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 9,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Data Privacy in AI. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "DP-220-C1",
      "title": "GDPR & data lifecycle",
      "weight": 40
    },
    {
      "code": "DP-220-C2",
      "title": "Minimization & consent",
      "weight": 30
    },
    {
      "code": "DP-220-C3",
      "title": "Anonymization & differential privacy",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "DP-220-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"GDPR principles\" in Data Privacy in AI?",
      "options": [
        "GDPR principles is a core technique central to this discipline and is correctly applied in standard practice.",
        "GDPR principles is completely irrelevant to Data Privacy in AI and never used.",
        "GDPR principles is only used in unsupervised learning and never in supervised tasks.",
        "GDPR principles can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "GDPR principles is a fundamental concept in Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "DP-220-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Minimization & consent\" in Data Privacy in AI?",
      "options": [
        "Minimization & consent is a core technique central to this discipline and is correctly applied in standard practice.",
        "Minimization & consent is completely irrelevant to Data Privacy in AI and never used.",
        "Minimization & consent is only used in unsupervised learning and never in supervised tasks.",
        "Minimization & consent can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Minimization & consent is a fundamental concept in Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "DP-220-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Anonymization\" in Data Privacy in AI?",
      "options": [
        "Anonymization is a core technique central to this discipline and is correctly applied in standard practice.",
        "Anonymization is completely irrelevant to Data Privacy in AI and never used.",
        "Anonymization is only used in unsupervised learning and never in supervised tasks.",
        "Anonymization can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Anonymization is a fundamental concept in Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "DP-220-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Differential privacy\" in Data Privacy in AI?",
      "options": [
        "Differential privacy is a core technique central to this discipline and is correctly applied in standard practice.",
        "Differential privacy is completely irrelevant to Data Privacy in AI and never used.",
        "Differential privacy is only used in unsupervised learning and never in supervised tasks.",
        "Differential privacy can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Differential privacy is a fundamental concept in Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "DP-220-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Data lifecycle\" in Data Privacy in AI?",
      "options": [
        "Data lifecycle is a core technique central to this discipline and is correctly applied in standard practice.",
        "Data lifecycle is completely irrelevant to Data Privacy in AI and never used.",
        "Data lifecycle is only used in unsupervised learning and never in supervised tasks.",
        "Data lifecycle can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Data lifecycle is a fundamental concept in Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "DP-220-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"GDPR principles\" in Data Privacy in AI?",
      "options": [
        "GDPR principles is a core technique central to this discipline and is correctly applied in standard practice.",
        "GDPR principles is completely irrelevant to Data Privacy in AI and never used.",
        "GDPR principles is only used in unsupervised learning and never in supervised tasks.",
        "GDPR principles can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "GDPR principles is a fundamental concept in Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "DP-220-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Minimization & consent\" in Data Privacy in AI?",
      "options": [
        "Minimization & consent is a core technique central to this discipline and is correctly applied in standard practice.",
        "Minimization & consent is completely irrelevant to Data Privacy in AI and never used.",
        "Minimization & consent is only used in unsupervised learning and never in supervised tasks.",
        "Minimization & consent can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Minimization & consent is a fundamental concept in Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "DP-220-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Anonymization\" in Data Privacy in AI?",
      "options": [
        "Anonymization is a core technique central to this discipline and is correctly applied in standard practice.",
        "Anonymization is completely irrelevant to Data Privacy in AI and never used.",
        "Anonymization is only used in unsupervised learning and never in supervised tasks.",
        "Anonymization can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Anonymization is a fundamental concept in Data Privacy in AI.",
      "points": 1
    }
  ]
},
{
  "id": "exam-ai-safety",
  "courseId": "ai-safety",
  "code": "ZL-EX-AISAFETY",
  "title": "Certificate of Competence — AI Safety & Assurance",
  "qualificationCode": "ZL-QUAL-SAFE-230",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for AI Safety & Assurance. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "SAFE-230-C1",
      "title": "Hazard & failure analysis",
      "weight": 35
    },
    {
      "code": "SAFE-230-C2",
      "title": "Robustness & red-teaming",
      "weight": 35
    },
    {
      "code": "SAFE-230-C3",
      "title": "Safety cases & evidence",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "SAFE-230-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Failure modes\" in AI Safety & Assurance?",
      "options": [
        "Failure modes is a core technique central to this discipline and is correctly applied in standard practice.",
        "Failure modes is completely irrelevant to AI Safety & Assurance and never used.",
        "Failure modes is only used in unsupervised learning and never in supervised tasks.",
        "Failure modes can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Failure modes is a fundamental concept in AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "SAFE-230-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Adversarial robustness\" in AI Safety & Assurance?",
      "options": [
        "Adversarial robustness is a core technique central to this discipline and is correctly applied in standard practice.",
        "Adversarial robustness is completely irrelevant to AI Safety & Assurance and never used.",
        "Adversarial robustness is only used in unsupervised learning and never in supervised tasks.",
        "Adversarial robustness can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Adversarial robustness is a fundamental concept in AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "SAFE-230-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Red-teaming\" in AI Safety & Assurance?",
      "options": [
        "Red-teaming is a core technique central to this discipline and is correctly applied in standard practice.",
        "Red-teaming is completely irrelevant to AI Safety & Assurance and never used.",
        "Red-teaming is only used in unsupervised learning and never in supervised tasks.",
        "Red-teaming can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Red-teaming is a fundamental concept in AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "SAFE-230-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Safety cases\" in AI Safety & Assurance?",
      "options": [
        "Safety cases is a core technique central to this discipline and is correctly applied in standard practice.",
        "Safety cases is completely irrelevant to AI Safety & Assurance and never used.",
        "Safety cases is only used in unsupervised learning and never in supervised tasks.",
        "Safety cases can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Safety cases is a fundamental concept in AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "SAFE-230-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Assurance\" in AI Safety & Assurance?",
      "options": [
        "Assurance is a core technique central to this discipline and is correctly applied in standard practice.",
        "Assurance is completely irrelevant to AI Safety & Assurance and never used.",
        "Assurance is only used in unsupervised learning and never in supervised tasks.",
        "Assurance can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Assurance is a fundamental concept in AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "SAFE-230-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Failure modes\" in AI Safety & Assurance?",
      "options": [
        "Failure modes is a core technique central to this discipline and is correctly applied in standard practice.",
        "Failure modes is completely irrelevant to AI Safety & Assurance and never used.",
        "Failure modes is only used in unsupervised learning and never in supervised tasks.",
        "Failure modes can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Failure modes is a fundamental concept in AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "SAFE-230-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Adversarial robustness\" in AI Safety & Assurance?",
      "options": [
        "Adversarial robustness is a core technique central to this discipline and is correctly applied in standard practice.",
        "Adversarial robustness is completely irrelevant to AI Safety & Assurance and never used.",
        "Adversarial robustness is only used in unsupervised learning and never in supervised tasks.",
        "Adversarial robustness can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Adversarial robustness is a fundamental concept in AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "SAFE-230-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Red-teaming\" in AI Safety & Assurance?",
      "options": [
        "Red-teaming is a core technique central to this discipline and is correctly applied in standard practice.",
        "Red-teaming is completely irrelevant to AI Safety & Assurance and never used.",
        "Red-teaming is only used in unsupervised learning and never in supervised tasks.",
        "Red-teaming can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Red-teaming is a fundamental concept in AI Safety & Assurance.",
      "points": 1
    }
  ]
},
{
  "id": "exam-algorithmic-transparency",
  "courseId": "algorithmic-transparency",
  "code": "ZL-EX-ALGORITHMI",
  "title": "Certificate of Competence — Fairness & Transparency in AI",
  "qualificationCode": "ZL-QUAL-TRANSP-240",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Fairness & Transparency in AI. Tests applied understanding rather than recall.",
  "instructions": [
    "60 minutes, 8 scenario-based questions.",
    "Pass 75% (6/8), Distinction 90% (7/8). Proctored.",
    "Questions are drawn from a rotating bank and shuffled."
  ],
  "competencies": [
    {
      "code": "TRANSP-240-C1",
      "title": "Fairness metrics & audit",
      "weight": 40
    },
    {
      "code": "TRANSP-240-C2",
      "title": "Bias mitigation",
      "weight": 30
    },
    {
      "code": "TRANSP-240-C3",
      "title": "Explainability",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "TRANSP-240-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Fairness metrics\" in Fairness & Transparency in AI?",
      "options": [
        "Fairness metrics is a core technique central to this discipline and is correctly applied in standard practice.",
        "Fairness metrics is completely irrelevant to Fairness & Transparency in AI and never used.",
        "Fairness metrics is only used in unsupervised learning and never in supervised tasks.",
        "Fairness metrics can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Fairness metrics is a fundamental concept in Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "TRANSP-240-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Bias audit\" in Fairness & Transparency in AI?",
      "options": [
        "Bias audit is a core technique central to this discipline and is correctly applied in standard practice.",
        "Bias audit is completely irrelevant to Fairness & Transparency in AI and never used.",
        "Bias audit is only used in unsupervised learning and never in supervised tasks.",
        "Bias audit can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Bias audit is a fundamental concept in Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "TRANSP-240-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Mitigation\" in Fairness & Transparency in AI?",
      "options": [
        "Mitigation is a core technique central to this discipline and is correctly applied in standard practice.",
        "Mitigation is completely irrelevant to Fairness & Transparency in AI and never used.",
        "Mitigation is only used in unsupervised learning and never in supervised tasks.",
        "Mitigation can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Mitigation is a fundamental concept in Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "TRANSP-240-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"SHAP/LIME\" in Fairness & Transparency in AI?",
      "options": [
        "SHAP/LIME is a core technique central to this discipline and is correctly applied in standard practice.",
        "SHAP/LIME is completely irrelevant to Fairness & Transparency in AI and never used.",
        "SHAP/LIME is only used in unsupervised learning and never in supervised tasks.",
        "SHAP/LIME can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "SHAP/LIME is a fundamental concept in Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "TRANSP-240-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Explainability\" in Fairness & Transparency in AI?",
      "options": [
        "Explainability is a core technique central to this discipline and is correctly applied in standard practice.",
        "Explainability is completely irrelevant to Fairness & Transparency in AI and never used.",
        "Explainability is only used in unsupervised learning and never in supervised tasks.",
        "Explainability can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Explainability is a fundamental concept in Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "TRANSP-240-C3",
      "type": "single",
      "question": "Which of the following best describes the role of \"Fairness metrics\" in Fairness & Transparency in AI?",
      "options": [
        "Fairness metrics is a core technique central to this discipline and is correctly applied in standard practice.",
        "Fairness metrics is completely irrelevant to Fairness & Transparency in AI and never used.",
        "Fairness metrics is only used in unsupervised learning and never in supervised tasks.",
        "Fairness metrics can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Fairness metrics is a fundamental concept in Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "TRANSP-240-C1",
      "type": "single",
      "question": "Which of the following best describes the role of \"Bias audit\" in Fairness & Transparency in AI?",
      "options": [
        "Bias audit is a core technique central to this discipline and is correctly applied in standard practice.",
        "Bias audit is completely irrelevant to Fairness & Transparency in AI and never used.",
        "Bias audit is only used in unsupervised learning and never in supervised tasks.",
        "Bias audit can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Bias audit is a fundamental concept in Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "TRANSP-240-C2",
      "type": "single",
      "question": "Which of the following best describes the role of \"Mitigation\" in Fairness & Transparency in AI?",
      "options": [
        "Mitigation is a core technique central to this discipline and is correctly applied in standard practice.",
        "Mitigation is completely irrelevant to Fairness & Transparency in AI and never used.",
        "Mitigation is only used in unsupervised learning and never in supervised tasks.",
        "Mitigation can be ignored as it has no impact on model or system quality."
      ],
      "answer": 0,
      "explanation": "Mitigation is a fundamental concept in Fairness & Transparency in AI.",
      "points": 1
    }
  ]
},
{
  "id": "exam-computational-thinking",
  "courseId": "computational-thinking",
  "code": "ZL-EX-COMPUTATIO",
  "title": "Certificate of Competence — Think like a programmer: decompose, pattern-match, abstract, and design algorithms",
  "qualificationCode": "ZL-QUAL-CT-110",
  "level": "Level 2 (RQF) • EQF 3",
  "credits": 8,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Computational Thinking & Algorithms. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "CT-110-C1",
      "title": "Decompose problems",
      "weight": 30
    },
    {
      "code": "CT-110-C2",
      "title": "Read & write pseudocode",
      "weight": 35
    },
    {
      "code": "CT-110-C3",
      "title": "Assess algorithm efficiency",
      "weight": 35
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "CT-110-C1",
      "type": "single",
      "question": "Which statement about Algorithmic decomposition in “Computational Thinking & Algorithms” is correct?",
      "options": [
        "Correct: Algorithmic decomposition is central to this competence and applied correctly in practice",
        "The Algorithmic decomposition concept does not apply to this field at all",
        "Only model size determines Algorithmic decomposition quality",
        "There is no way to assess or improve Algorithmic decomposition"
      ],
      "answer": 0,
      "explanation": "Algorithmic decomposition is a core competency for Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "CT-110-C2",
      "type": "single",
      "question": "Which statement about Patterns & abstractions in “Computational Thinking & Algorithms” is correct?",
      "options": [
        "Correct: Patterns & abstractions is central to this competence and applied correctly in practice",
        "The Patterns & abstractions concept does not apply to this field at all",
        "Only model size determines Patterns & abstractions quality",
        "There is no way to assess or improve Patterns & abstractions"
      ],
      "answer": 0,
      "explanation": "Patterns & abstractions is a core competency for Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "CT-110-C3",
      "type": "single",
      "question": "Which statement about Pseudocode in “Computational Thinking & Algorithms” is correct?",
      "options": [
        "Correct: Pseudocode is central to this competence and applied correctly in practice",
        "The Pseudocode concept does not apply to this field at all",
        "Only model size determines Pseudocode quality",
        "There is no way to assess or improve Pseudocode"
      ],
      "answer": 0,
      "explanation": "Pseudocode is a core competency for Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "CT-110-C1",
      "type": "single",
      "question": "Which statement about Complexity basics in “Computational Thinking & Algorithms” is correct?",
      "options": [
        "Correct: Complexity basics is central to this competence and applied correctly in practice",
        "The Complexity basics concept does not apply to this field at all",
        "Only model size determines Complexity basics quality",
        "There is no way to assess or improve Complexity basics"
      ],
      "answer": 0,
      "explanation": "Complexity basics is a core competency for Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "CT-110-C2",
      "type": "single",
      "question": "Which statement about Logical reasoning in “Computational Thinking & Algorithms” is correct?",
      "options": [
        "Correct: Logical reasoning is central to this competence and applied correctly in practice",
        "The Logical reasoning concept does not apply to this field at all",
        "Only model size determines Logical reasoning quality",
        "There is no way to assess or improve Logical reasoning"
      ],
      "answer": 0,
      "explanation": "Logical reasoning is a core competency for Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "CT-110-C3",
      "type": "single",
      "question": "Which statement about Algorithmic decomposition in “Computational Thinking & Algorithms” is correct?",
      "options": [
        "Correct: Algorithmic decomposition is central to this competence and applied correctly in practice",
        "The Algorithmic decomposition concept does not apply to this field at all",
        "Only model size determines Algorithmic decomposition quality",
        "There is no way to assess or improve Algorithmic decomposition"
      ],
      "answer": 0,
      "explanation": "Algorithmic decomposition is a core competency for Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "CT-110-C1",
      "type": "single",
      "question": "Which statement about Patterns & abstractions in “Computational Thinking & Algorithms” is correct?",
      "options": [
        "Correct: Patterns & abstractions is central to this competence and applied correctly in practice",
        "The Patterns & abstractions concept does not apply to this field at all",
        "Only model size determines Patterns & abstractions quality",
        "There is no way to assess or improve Patterns & abstractions"
      ],
      "answer": 0,
      "explanation": "Patterns & abstractions is a core competency for Computational Thinking & Algorithms.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "CT-110-C2",
      "type": "single",
      "question": "Which statement about Pseudocode in “Computational Thinking & Algorithms” is correct?",
      "options": [
        "Correct: Pseudocode is central to this competence and applied correctly in practice",
        "The Pseudocode concept does not apply to this field at all",
        "Only model size determines Pseudocode quality",
        "There is no way to assess or improve Pseudocode"
      ],
      "answer": 0,
      "explanation": "Pseudocode is a core competency for Computational Thinking & Algorithms.",
      "points": 1
    }
  ]
},
{
  "id": "exam-git",
  "courseId": "git-version-control",
  "code": "ZL-EX-GITVERSION",
  "title": "Certificate of Competence — Track changes, collaborate with branches, and ship code confidently",
  "qualificationCode": "ZL-QUAL-GIT-120",
  "level": "Level 2 (RQF) • EQF 3",
  "credits": 8,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Git & Version Control. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "GIT-120-C1",
      "title": "Repo & commit workflow",
      "weight": 30
    },
    {
      "code": "GIT-120-C2",
      "title": "Branching & merging",
      "weight": 40
    },
    {
      "code": "GIT-120-C3",
      "title": "Collaboration & undo",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "GIT-120-C1",
      "type": "single",
      "question": "Which statement about Repositories & commits in “Git & Version Control” is correct?",
      "options": [
        "Correct: Repositories & commits is central to this competence and applied correctly in practice",
        "The Repositories & commits concept does not apply to this field at all",
        "Only model size determines Repositories & commits quality",
        "There is no way to assess or improve Repositories & commits"
      ],
      "answer": 0,
      "explanation": "Repositories & commits is a core competency for Git & Version Control.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "GIT-120-C2",
      "type": "single",
      "question": "Which statement about Branches & merges in “Git & Version Control” is correct?",
      "options": [
        "Correct: Branches & merges is central to this competence and applied correctly in practice",
        "The Branches & merges concept does not apply to this field at all",
        "Only model size determines Branches & merges quality",
        "There is no way to assess or improve Branches & merges"
      ],
      "answer": 0,
      "explanation": "Branches & merges is a core competency for Git & Version Control.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "GIT-120-C3",
      "type": "single",
      "question": "Which statement about Remote workflows in “Git & Version Control” is correct?",
      "options": [
        "Correct: Remote workflows is central to this competence and applied correctly in practice",
        "The Remote workflows concept does not apply to this field at all",
        "Only model size determines Remote workflows quality",
        "There is no way to assess or improve Remote workflows"
      ],
      "answer": 0,
      "explanation": "Remote workflows is a core competency for Git & Version Control.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "GIT-120-C1",
      "type": "single",
      "question": "Which statement about Conflict resolution in “Git & Version Control” is correct?",
      "options": [
        "Correct: Conflict resolution is central to this competence and applied correctly in practice",
        "The Conflict resolution concept does not apply to this field at all",
        "Only model size determines Conflict resolution quality",
        "There is no way to assess or improve Conflict resolution"
      ],
      "answer": 0,
      "explanation": "Conflict resolution is a core competency for Git & Version Control.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "GIT-120-C2",
      "type": "single",
      "question": "Which statement about Commit hygiene in “Git & Version Control” is correct?",
      "options": [
        "Correct: Commit hygiene is central to this competence and applied correctly in practice",
        "The Commit hygiene concept does not apply to this field at all",
        "Only model size determines Commit hygiene quality",
        "There is no way to assess or improve Commit hygiene"
      ],
      "answer": 0,
      "explanation": "Commit hygiene is a core competency for Git & Version Control.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "GIT-120-C3",
      "type": "single",
      "question": "Which statement about Repositories & commits in “Git & Version Control” is correct?",
      "options": [
        "Correct: Repositories & commits is central to this competence and applied correctly in practice",
        "The Repositories & commits concept does not apply to this field at all",
        "Only model size determines Repositories & commits quality",
        "There is no way to assess or improve Repositories & commits"
      ],
      "answer": 0,
      "explanation": "Repositories & commits is a core competency for Git & Version Control.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "GIT-120-C1",
      "type": "single",
      "question": "Which statement about Branches & merges in “Git & Version Control” is correct?",
      "options": [
        "Correct: Branches & merges is central to this competence and applied correctly in practice",
        "The Branches & merges concept does not apply to this field at all",
        "Only model size determines Branches & merges quality",
        "There is no way to assess or improve Branches & merges"
      ],
      "answer": 0,
      "explanation": "Branches & merges is a core competency for Git & Version Control.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "GIT-120-C2",
      "type": "single",
      "question": "Which statement about Remote workflows in “Git & Version Control” is correct?",
      "options": [
        "Correct: Remote workflows is central to this competence and applied correctly in practice",
        "The Remote workflows concept does not apply to this field at all",
        "Only model size determines Remote workflows quality",
        "There is no way to assess or improve Remote workflows"
      ],
      "answer": 0,
      "explanation": "Remote workflows is a core competency for Git & Version Control.",
      "points": 1
    }
  ]
},
{
  "id": "exam-computer-fundamentals",
  "courseId": "computer-fundamentals",
  "code": "ZL-EX-COMPUTERFU",
  "title": "Certificate of Competence — Understand how computers work and master the terminal",
  "qualificationCode": "ZL-QUAL-CF-130",
  "level": "Level 2 (RQF) • EQF 3",
  "credits": 8,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Computer Fundamentals & Command Line. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "CF-130-C1",
      "title": "Hardware & OS concepts",
      "weight": 30
    },
    {
      "code": "CF-130-C2",
      "title": "Shell navigation & files",
      "weight": 40
    },
    {
      "code": "CF-130-C3",
      "title": "Processes & permissions",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "CF-130-C1",
      "type": "single",
      "question": "Which statement about Hardware & CPU in “Computer Fundamentals & Command Line” is correct?",
      "options": [
        "Correct: Hardware & CPU is central to this competence and applied correctly in practice",
        "The Hardware & CPU concept does not apply to this field at all",
        "Only model size determines Hardware & CPU quality",
        "There is no way to assess or improve Hardware & CPU"
      ],
      "answer": 0,
      "explanation": "Hardware & CPU is a core competency for Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "CF-130-C2",
      "type": "single",
      "question": "Which statement about Memory & storage in “Computer Fundamentals & Command Line” is correct?",
      "options": [
        "Correct: Memory & storage is central to this competence and applied correctly in practice",
        "The Memory & storage concept does not apply to this field at all",
        "Only model size determines Memory & storage quality",
        "There is no way to assess or improve Memory & storage"
      ],
      "answer": 0,
      "explanation": "Memory & storage is a core competency for Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "CF-130-C3",
      "type": "single",
      "question": "Which statement about Operating systems in “Computer Fundamentals & Command Line” is correct?",
      "options": [
        "Correct: Operating systems is central to this competence and applied correctly in practice",
        "The Operating systems concept does not apply to this field at all",
        "Only model size determines Operating systems quality",
        "There is no way to assess or improve Operating systems"
      ],
      "answer": 0,
      "explanation": "Operating systems is a core competency for Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "CF-130-C1",
      "type": "single",
      "question": "Which statement about Networking & I/O in “Computer Fundamentals & Command Line” is correct?",
      "options": [
        "Correct: Networking & I/O is central to this competence and applied correctly in practice",
        "The Networking & I/O concept does not apply to this field at all",
        "Only model size determines Networking & I/O quality",
        "There is no way to assess or improve Networking & I/O"
      ],
      "answer": 0,
      "explanation": "Networking & I/O is a core competency for Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "CF-130-C2",
      "type": "single",
      "question": "Which statement about Numbers & binary in “Computer Fundamentals & Command Line” is correct?",
      "options": [
        "Correct: Numbers & binary is central to this competence and applied correctly in practice",
        "The Numbers & binary concept does not apply to this field at all",
        "Only model size determines Numbers & binary quality",
        "There is no way to assess or improve Numbers & binary"
      ],
      "answer": 0,
      "explanation": "Numbers & binary is a core competency for Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "CF-130-C3",
      "type": "single",
      "question": "Which statement about Hardware & CPU in “Computer Fundamentals & Command Line” is correct?",
      "options": [
        "Correct: Hardware & CPU is central to this competence and applied correctly in practice",
        "The Hardware & CPU concept does not apply to this field at all",
        "Only model size determines Hardware & CPU quality",
        "There is no way to assess or improve Hardware & CPU"
      ],
      "answer": 0,
      "explanation": "Hardware & CPU is a core competency for Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "CF-130-C1",
      "type": "single",
      "question": "Which statement about Memory & storage in “Computer Fundamentals & Command Line” is correct?",
      "options": [
        "Correct: Memory & storage is central to this competence and applied correctly in practice",
        "The Memory & storage concept does not apply to this field at all",
        "Only model size determines Memory & storage quality",
        "There is no way to assess or improve Memory & storage"
      ],
      "answer": 0,
      "explanation": "Memory & storage is a core competency for Computer Fundamentals & Command Line.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "CF-130-C2",
      "type": "single",
      "question": "Which statement about Operating systems in “Computer Fundamentals & Command Line” is correct?",
      "options": [
        "Correct: Operating systems is central to this competence and applied correctly in practice",
        "The Operating systems concept does not apply to this field at all",
        "Only model size determines Operating systems quality",
        "There is no way to assess or improve Operating systems"
      ],
      "answer": 0,
      "explanation": "Operating systems is a core competency for Computer Fundamentals & Command Line.",
      "points": 1
    }
  ]
},
{
  "id": "exam-problem-solving",
  "courseId": "problem-solving",
  "code": "ZL-EX-PROBLEMSOL",
  "title": "Certificate of Competence — Turn tricky problems into clean, working code — step by step",
  "qualificationCode": "ZL-QUAL-PS-140",
  "level": "Level 3 (RQF) • EQF 4",
  "credits": 10,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Problem Solving with Programming. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "PS-140-C1",
      "title": "Requirements analysis",
      "weight": 30
    },
    {
      "code": "PS-140-C2",
      "title": "Test-driven implementation",
      "weight": 35
    },
    {
      "code": "PS-140-C3",
      "title": "Debugging & refactoring",
      "weight": 35
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "PS-140-C1",
      "type": "single",
      "question": "Which statement about Define the problem in “Problem Solving with Programming” is correct?",
      "options": [
        "Correct: Define the problem is central to this competence and applied correctly in practice",
        "The Define the problem concept does not apply to this field at all",
        "Only model size determines Define the problem quality",
        "There is no way to assess or improve Define the problem"
      ],
      "answer": 0,
      "explanation": "Define the problem is a core competency for Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "PS-140-C2",
      "type": "single",
      "question": "Which statement about Break down & plan in “Problem Solving with Programming” is correct?",
      "options": [
        "Correct: Break down & plan is central to this competence and applied correctly in practice",
        "The Break down & plan concept does not apply to this field at all",
        "Only model size determines Break down & plan quality",
        "There is no way to assess or improve Break down & plan"
      ],
      "answer": 0,
      "explanation": "Break down & plan is a core competency for Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "PS-140-C3",
      "type": "single",
      "question": "Which statement about Root-cause analysis in “Problem Solving with Programming” is correct?",
      "options": [
        "Correct: Root-cause analysis is central to this competence and applied correctly in practice",
        "The Root-cause analysis concept does not apply to this field at all",
        "Only model size determines Root-cause analysis quality",
        "There is no way to assess or improve Root-cause analysis"
      ],
      "answer": 0,
      "explanation": "Root-cause analysis is a core competency for Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "PS-140-C1",
      "type": "single",
      "question": "Which statement about Test & refine in “Problem Solving with Programming” is correct?",
      "options": [
        "Correct: Test & refine is central to this competence and applied correctly in practice",
        "The Test & refine concept does not apply to this field at all",
        "Only model size determines Test & refine quality",
        "There is no way to assess or improve Test & refine"
      ],
      "answer": 0,
      "explanation": "Test & refine is a core competency for Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "PS-140-C2",
      "type": "single",
      "question": "Which statement about Communicate solutions in “Problem Solving with Programming” is correct?",
      "options": [
        "Correct: Communicate solutions is central to this competence and applied correctly in practice",
        "The Communicate solutions concept does not apply to this field at all",
        "Only model size determines Communicate solutions quality",
        "There is no way to assess or improve Communicate solutions"
      ],
      "answer": 0,
      "explanation": "Communicate solutions is a core competency for Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "PS-140-C3",
      "type": "single",
      "question": "Which statement about Define the problem in “Problem Solving with Programming” is correct?",
      "options": [
        "Correct: Define the problem is central to this competence and applied correctly in practice",
        "The Define the problem concept does not apply to this field at all",
        "Only model size determines Define the problem quality",
        "There is no way to assess or improve Define the problem"
      ],
      "answer": 0,
      "explanation": "Define the problem is a core competency for Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "PS-140-C1",
      "type": "single",
      "question": "Which statement about Break down & plan in “Problem Solving with Programming” is correct?",
      "options": [
        "Correct: Break down & plan is central to this competence and applied correctly in practice",
        "The Break down & plan concept does not apply to this field at all",
        "Only model size determines Break down & plan quality",
        "There is no way to assess or improve Break down & plan"
      ],
      "answer": 0,
      "explanation": "Break down & plan is a core competency for Problem Solving with Programming.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "PS-140-C2",
      "type": "single",
      "question": "Which statement about Root-cause analysis in “Problem Solving with Programming” is correct?",
      "options": [
        "Correct: Root-cause analysis is central to this competence and applied correctly in practice",
        "The Root-cause analysis concept does not apply to this field at all",
        "Only model size determines Root-cause analysis quality",
        "There is no way to assess or improve Root-cause analysis"
      ],
      "answer": 0,
      "explanation": "Root-cause analysis is a core competency for Problem Solving with Programming.",
      "points": 1
    }
  ]
},
{
  "id": "exam-ml-supervised",
  "courseId": "ml-supervised",
  "code": "ZL-EX-MLSUPERVIS",
  "title": "Certificate of Competence — Train classifiers and regressors end-to-end with scikit-learn",
  "qualificationCode": "ZL-QUAL-SL-311",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Supervised Learning in Practice. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "SL-311-C1",
      "title": "Prepare & split data",
      "weight": 20
    },
    {
      "code": "SL-311-C2",
      "title": "Train & evaluate models",
      "weight": 40
    },
    {
      "code": "SL-311-C3",
      "title": "Tune & prevent overfitting",
      "weight": 40
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "SL-311-C1",
      "type": "single",
      "question": "Which statement about Supervised learning setup in “Supervised Learning in Practice” is correct?",
      "options": [
        "Correct: Supervised learning setup is central to this competence and applied correctly in practice",
        "The Supervised learning setup concept does not apply to this field at all",
        "Only model size determines Supervised learning setup quality",
        "There is no way to assess or improve Supervised learning setup"
      ],
      "answer": 0,
      "explanation": "Supervised learning setup is a core competency for Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "SL-311-C2",
      "type": "single",
      "question": "Which statement about Regression vs classification in “Supervised Learning in Practice” is correct?",
      "options": [
        "Correct: Regression vs classification is central to this competence and applied correctly in practice",
        "The Regression vs classification concept does not apply to this field at all",
        "Only model size determines Regression vs classification quality",
        "There is no way to assess or improve Regression vs classification"
      ],
      "answer": 0,
      "explanation": "Regression vs classification is a core competency for Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "SL-311-C3",
      "type": "single",
      "question": "Which statement about Overfitting & bias-variance in “Supervised Learning in Practice” is correct?",
      "options": [
        "Correct: Overfitting & bias-variance is central to this competence and applied correctly in practice",
        "The Overfitting & bias-variance concept does not apply to this field at all",
        "Only model size determines Overfitting & bias-variance quality",
        "There is no way to assess or improve Overfitting & bias-variance"
      ],
      "answer": 0,
      "explanation": "Overfitting & bias-variance is a core competency for Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "SL-311-C1",
      "type": "single",
      "question": "Which statement about Common algorithms in “Supervised Learning in Practice” is correct?",
      "options": [
        "Correct: Common algorithms is central to this competence and applied correctly in practice",
        "The Common algorithms concept does not apply to this field at all",
        "Only model size determines Common algorithms quality",
        "There is no way to assess or improve Common algorithms"
      ],
      "answer": 0,
      "explanation": "Common algorithms is a core competency for Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "SL-311-C2",
      "type": "single",
      "question": "Which statement about Evaluation in “Supervised Learning in Practice” is correct?",
      "options": [
        "Correct: Evaluation is central to this competence and applied correctly in practice",
        "The Evaluation concept does not apply to this field at all",
        "Only model size determines Evaluation quality",
        "There is no way to assess or improve Evaluation"
      ],
      "answer": 0,
      "explanation": "Evaluation is a core competency for Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "SL-311-C3",
      "type": "single",
      "question": "Which statement about Supervised learning setup in “Supervised Learning in Practice” is correct?",
      "options": [
        "Correct: Supervised learning setup is central to this competence and applied correctly in practice",
        "The Supervised learning setup concept does not apply to this field at all",
        "Only model size determines Supervised learning setup quality",
        "There is no way to assess or improve Supervised learning setup"
      ],
      "answer": 0,
      "explanation": "Supervised learning setup is a core competency for Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "SL-311-C1",
      "type": "single",
      "question": "Which statement about Regression vs classification in “Supervised Learning in Practice” is correct?",
      "options": [
        "Correct: Regression vs classification is central to this competence and applied correctly in practice",
        "The Regression vs classification concept does not apply to this field at all",
        "Only model size determines Regression vs classification quality",
        "There is no way to assess or improve Regression vs classification"
      ],
      "answer": 0,
      "explanation": "Regression vs classification is a core competency for Supervised Learning in Practice.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "SL-311-C2",
      "type": "single",
      "question": "Which statement about Overfitting & bias-variance in “Supervised Learning in Practice” is correct?",
      "options": [
        "Correct: Overfitting & bias-variance is central to this competence and applied correctly in practice",
        "The Overfitting & bias-variance concept does not apply to this field at all",
        "Only model size determines Overfitting & bias-variance quality",
        "There is no way to assess or improve Overfitting & bias-variance"
      ],
      "answer": 0,
      "explanation": "Overfitting & bias-variance is a core competency for Supervised Learning in Practice.",
      "points": 1
    }
  ]
},
{
  "id": "exam-ml-unsupervised",
  "courseId": "ml-unsupervised",
  "code": "ZL-EX-MLUNSUPERV",
  "title": "Certificate of Competence — Discover structure in unlabeled data with clustering and dimensionality reduction",
  "qualificationCode": "ZL-QUAL-UL-312",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Unsupervised Learning & Clustering. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "UL-312-C1",
      "title": "Clustering algorithms",
      "weight": 40
    },
    {
      "code": "UL-312-C2",
      "title": "Selecting cluster count",
      "weight": 25
    },
    {
      "code": "UL-312-C3",
      "title": "Dimensionality reduction",
      "weight": 35
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "UL-312-C1",
      "type": "single",
      "question": "Which statement about Clustering in “Unsupervised Learning & Clustering” is correct?",
      "options": [
        "Correct: Clustering is central to this competence and applied correctly in practice",
        "The Clustering concept does not apply to this field at all",
        "Only model size determines Clustering quality",
        "There is no way to assess or improve Clustering"
      ],
      "answer": 0,
      "explanation": "Clustering is a core competency for Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "UL-312-C2",
      "type": "single",
      "question": "Which statement about Dimensionality reduction in “Unsupervised Learning & Clustering” is correct?",
      "options": [
        "Correct: Dimensionality reduction is central to this competence and applied correctly in practice",
        "The Dimensionality reduction concept does not apply to this field at all",
        "Only model size determines Dimensionality reduction quality",
        "There is no way to assess or improve Dimensionality reduction"
      ],
      "answer": 0,
      "explanation": "Dimensionality reduction is a core competency for Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "UL-312-C3",
      "type": "single",
      "question": "Which statement about Anomaly detection in “Unsupervised Learning & Clustering” is correct?",
      "options": [
        "Correct: Anomaly detection is central to this competence and applied correctly in practice",
        "The Anomaly detection concept does not apply to this field at all",
        "Only model size determines Anomaly detection quality",
        "There is no way to assess or improve Anomaly detection"
      ],
      "answer": 0,
      "explanation": "Anomaly detection is a core competency for Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "UL-312-C1",
      "type": "single",
      "question": "Which statement about K-means & DBSCAN in “Unsupervised Learning & Clustering” is correct?",
      "options": [
        "Correct: K-means & DBSCAN is central to this competence and applied correctly in practice",
        "The K-means & DBSCAN concept does not apply to this field at all",
        "Only model size determines K-means & DBSCAN quality",
        "There is no way to assess or improve K-means & DBSCAN"
      ],
      "answer": 0,
      "explanation": "K-means & DBSCAN is a core competency for Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "UL-312-C2",
      "type": "single",
      "question": "Which statement about Evaluation of clusters in “Unsupervised Learning & Clustering” is correct?",
      "options": [
        "Correct: Evaluation of clusters is central to this competence and applied correctly in practice",
        "The Evaluation of clusters concept does not apply to this field at all",
        "Only model size determines Evaluation of clusters quality",
        "There is no way to assess or improve Evaluation of clusters"
      ],
      "answer": 0,
      "explanation": "Evaluation of clusters is a core competency for Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "UL-312-C3",
      "type": "single",
      "question": "Which statement about Clustering in “Unsupervised Learning & Clustering” is correct?",
      "options": [
        "Correct: Clustering is central to this competence and applied correctly in practice",
        "The Clustering concept does not apply to this field at all",
        "Only model size determines Clustering quality",
        "There is no way to assess or improve Clustering"
      ],
      "answer": 0,
      "explanation": "Clustering is a core competency for Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "UL-312-C1",
      "type": "single",
      "question": "Which statement about Dimensionality reduction in “Unsupervised Learning & Clustering” is correct?",
      "options": [
        "Correct: Dimensionality reduction is central to this competence and applied correctly in practice",
        "The Dimensionality reduction concept does not apply to this field at all",
        "Only model size determines Dimensionality reduction quality",
        "There is no way to assess or improve Dimensionality reduction"
      ],
      "answer": 0,
      "explanation": "Dimensionality reduction is a core competency for Unsupervised Learning & Clustering.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "UL-312-C2",
      "type": "single",
      "question": "Which statement about Anomaly detection in “Unsupervised Learning & Clustering” is correct?",
      "options": [
        "Correct: Anomaly detection is central to this competence and applied correctly in practice",
        "The Anomaly detection concept does not apply to this field at all",
        "Only model size determines Anomaly detection quality",
        "There is no way to assess or improve Anomaly detection"
      ],
      "answer": 0,
      "explanation": "Anomaly detection is a core competency for Unsupervised Learning & Clustering.",
      "points": 1
    }
  ]
},
{
  "id": "exam-model-evaluation",
  "courseId": "model-evaluation",
  "code": "ZL-EX-MODELEVALU",
  "title": "Certificate of Competence — Pick the right metrics and prove your model actually works",
  "qualificationCode": "ZL-QUAL-ME-313",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Model Evaluation & Validation. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "ME-313-C1",
      "title": "Core classification metrics",
      "weight": 40
    },
    {
      "code": "ME-313-C2",
      "title": "ROC & calibration",
      "weight": 30
    },
    {
      "code": "ME-313-C3",
      "title": "Validation strategies & leakage",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "ME-313-C1",
      "type": "single",
      "question": "Which statement about Metrics & confusion matrix in “Model Evaluation & Validation” is correct?",
      "options": [
        "Correct: Metrics & confusion matrix is central to this competence and applied correctly in practice",
        "The Metrics & confusion matrix concept does not apply to this field at all",
        "Only model size determines Metrics & confusion matrix quality",
        "There is no way to assess or improve Metrics & confusion matrix"
      ],
      "answer": 0,
      "explanation": "Metrics & confusion matrix is a core competency for Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "ME-313-C2",
      "type": "single",
      "question": "Which statement about Cross-validation in “Model Evaluation & Validation” is correct?",
      "options": [
        "Correct: Cross-validation is central to this competence and applied correctly in practice",
        "The Cross-validation concept does not apply to this field at all",
        "Only model size determines Cross-validation quality",
        "There is no way to assess or improve Cross-validation"
      ],
      "answer": 0,
      "explanation": "Cross-validation is a core competency for Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "ME-313-C3",
      "type": "single",
      "question": "Which statement about Precision/recall & F1 in “Model Evaluation & Validation” is correct?",
      "options": [
        "Correct: Precision/recall & F1 is central to this competence and applied correctly in practice",
        "The Precision/recall & F1 concept does not apply to this field at all",
        "Only model size determines Precision/recall & F1 quality",
        "There is no way to assess or improve Precision/recall & F1"
      ],
      "answer": 0,
      "explanation": "Precision/recall & F1 is a core competency for Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "ME-313-C1",
      "type": "single",
      "question": "Which statement about ROC/AUC in “Model Evaluation & Validation” is correct?",
      "options": [
        "Correct: ROC/AUC is central to this competence and applied correctly in practice",
        "The ROC/AUC concept does not apply to this field at all",
        "Only model size determines ROC/AUC quality",
        "There is no way to assess or improve ROC/AUC"
      ],
      "answer": 0,
      "explanation": "ROC/AUC is a core competency for Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "ME-313-C2",
      "type": "single",
      "question": "Which statement about Error analysis in “Model Evaluation & Validation” is correct?",
      "options": [
        "Correct: Error analysis is central to this competence and applied correctly in practice",
        "The Error analysis concept does not apply to this field at all",
        "Only model size determines Error analysis quality",
        "There is no way to assess or improve Error analysis"
      ],
      "answer": 0,
      "explanation": "Error analysis is a core competency for Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "ME-313-C3",
      "type": "single",
      "question": "Which statement about Metrics & confusion matrix in “Model Evaluation & Validation” is correct?",
      "options": [
        "Correct: Metrics & confusion matrix is central to this competence and applied correctly in practice",
        "The Metrics & confusion matrix concept does not apply to this field at all",
        "Only model size determines Metrics & confusion matrix quality",
        "There is no way to assess or improve Metrics & confusion matrix"
      ],
      "answer": 0,
      "explanation": "Metrics & confusion matrix is a core competency for Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "ME-313-C1",
      "type": "single",
      "question": "Which statement about Cross-validation in “Model Evaluation & Validation” is correct?",
      "options": [
        "Correct: Cross-validation is central to this competence and applied correctly in practice",
        "The Cross-validation concept does not apply to this field at all",
        "Only model size determines Cross-validation quality",
        "There is no way to assess or improve Cross-validation"
      ],
      "answer": 0,
      "explanation": "Cross-validation is a core competency for Model Evaluation & Validation.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "ME-313-C2",
      "type": "single",
      "question": "Which statement about Precision/recall & F1 in “Model Evaluation & Validation” is correct?",
      "options": [
        "Correct: Precision/recall & F1 is central to this competence and applied correctly in practice",
        "The Precision/recall & F1 concept does not apply to this field at all",
        "Only model size determines Precision/recall & F1 quality",
        "There is no way to assess or improve Precision/recall & F1"
      ],
      "answer": 0,
      "explanation": "Precision/recall & F1 is a core competency for Model Evaluation & Validation.",
      "points": 1
    }
  ]
},
{
  "id": "exam-feature-engineering",
  "courseId": "feature-engineering",
  "code": "ZL-EX-FEATUREENG",
  "title": "Certificate of Competence — Turn raw data into the signals that make models perform",
  "qualificationCode": "ZL-QUAL-FE-314",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Feature Engineering & Selection. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "FE-314-C1",
      "title": "Imputation & scaling",
      "weight": 25
    },
    {
      "code": "FE-314-C2",
      "title": "Categorical & datetime encoding",
      "weight": 35
    },
    {
      "code": "FE-314-C3",
      "title": "Feature selection & leakage",
      "weight": 40
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "FE-314-C1",
      "type": "single",
      "question": "Which statement about Feature types in “Feature Engineering & Selection” is correct?",
      "options": [
        "Correct: Feature types is central to this competence and applied correctly in practice",
        "The Feature types concept does not apply to this field at all",
        "Only model size determines Feature types quality",
        "There is no way to assess or improve Feature types"
      ],
      "answer": 0,
      "explanation": "Feature types is a core competency for Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "FE-314-C2",
      "type": "single",
      "question": "Which statement about Encoding categoricals in “Feature Engineering & Selection” is correct?",
      "options": [
        "Correct: Encoding categoricals is central to this competence and applied correctly in practice",
        "The Encoding categoricals concept does not apply to this field at all",
        "Only model size determines Encoding categoricals quality",
        "There is no way to assess or improve Encoding categoricals"
      ],
      "answer": 0,
      "explanation": "Encoding categoricals is a core competency for Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "FE-314-C3",
      "type": "single",
      "question": "Which statement about Scaling & normalization in “Feature Engineering & Selection” is correct?",
      "options": [
        "Correct: Scaling & normalization is central to this competence and applied correctly in practice",
        "The Scaling & normalization concept does not apply to this field at all",
        "Only model size determines Scaling & normalization quality",
        "There is no way to assess or improve Scaling & normalization"
      ],
      "answer": 0,
      "explanation": "Scaling & normalization is a core competency for Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "FE-314-C1",
      "type": "single",
      "question": "Which statement about Feature selection in “Feature Engineering & Selection” is correct?",
      "options": [
        "Correct: Feature selection is central to this competence and applied correctly in practice",
        "The Feature selection concept does not apply to this field at all",
        "Only model size determines Feature selection quality",
        "There is no way to assess or improve Feature selection"
      ],
      "answer": 0,
      "explanation": "Feature selection is a core competency for Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "FE-314-C2",
      "type": "single",
      "question": "Which statement about Creating features in “Feature Engineering & Selection” is correct?",
      "options": [
        "Correct: Creating features is central to this competence and applied correctly in practice",
        "The Creating features concept does not apply to this field at all",
        "Only model size determines Creating features quality",
        "There is no way to assess or improve Creating features"
      ],
      "answer": 0,
      "explanation": "Creating features is a core competency for Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "FE-314-C3",
      "type": "single",
      "question": "Which statement about Feature types in “Feature Engineering & Selection” is correct?",
      "options": [
        "Correct: Feature types is central to this competence and applied correctly in practice",
        "The Feature types concept does not apply to this field at all",
        "Only model size determines Feature types quality",
        "There is no way to assess or improve Feature types"
      ],
      "answer": 0,
      "explanation": "Feature types is a core competency for Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "FE-314-C1",
      "type": "single",
      "question": "Which statement about Encoding categoricals in “Feature Engineering & Selection” is correct?",
      "options": [
        "Correct: Encoding categoricals is central to this competence and applied correctly in practice",
        "The Encoding categoricals concept does not apply to this field at all",
        "Only model size determines Encoding categoricals quality",
        "There is no way to assess or improve Encoding categoricals"
      ],
      "answer": 0,
      "explanation": "Encoding categoricals is a core competency for Feature Engineering & Selection.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "FE-314-C2",
      "type": "single",
      "question": "Which statement about Scaling & normalization in “Feature Engineering & Selection” is correct?",
      "options": [
        "Correct: Scaling & normalization is central to this competence and applied correctly in practice",
        "The Scaling & normalization concept does not apply to this field at all",
        "Only model size determines Scaling & normalization quality",
        "There is no way to assess or improve Scaling & normalization"
      ],
      "answer": 0,
      "explanation": "Scaling & normalization is a core competency for Feature Engineering & Selection.",
      "points": 1
    }
  ]
},
{
  "id": "exam-neural-networks-basics",
  "courseId": "neural-networks-basics",
  "code": "ZL-EX-NEURALNETW",
  "title": "Certificate of Competence — Understand exactly what a neural network is doing under the hood",
  "qualificationCode": "ZL-QUAL-NN-411",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 13,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Neural Networks from Scratch. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "NN-411-C1",
      "title": "Forward pass math",
      "weight": 30
    },
    {
      "code": "NN-411-C2",
      "title": "Backpropagation",
      "weight": 40
    },
    {
      "code": "NN-411-C3",
      "title": "Training with gradient descent",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "NN-411-C1",
      "type": "single",
      "question": "Which statement about Forward pass in “Neural Networks from Scratch” is correct?",
      "options": [
        "Correct: Forward pass is central to this competence and applied correctly in practice",
        "The Forward pass concept does not apply to this field at all",
        "Only model size determines Forward pass quality",
        "There is no way to assess or improve Forward pass"
      ],
      "answer": 0,
      "explanation": "Forward pass is a core competency for Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "NN-411-C2",
      "type": "single",
      "question": "Which statement about Backpropagation in “Neural Networks from Scratch” is correct?",
      "options": [
        "Correct: Backpropagation is central to this competence and applied correctly in practice",
        "The Backpropagation concept does not apply to this field at all",
        "Only model size determines Backpropagation quality",
        "There is no way to assess or improve Backpropagation"
      ],
      "answer": 0,
      "explanation": "Backpropagation is a core competency for Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "NN-411-C3",
      "type": "single",
      "question": "Which statement about Activation functions in “Neural Networks from Scratch” is correct?",
      "options": [
        "Correct: Activation functions is central to this competence and applied correctly in practice",
        "The Activation functions concept does not apply to this field at all",
        "Only model size determines Activation functions quality",
        "There is no way to assess or improve Activation functions"
      ],
      "answer": 0,
      "explanation": "Activation functions is a core competency for Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "NN-411-C1",
      "type": "single",
      "question": "Which statement about Gradient descent in “Neural Networks from Scratch” is correct?",
      "options": [
        "Correct: Gradient descent is central to this competence and applied correctly in practice",
        "The Gradient descent concept does not apply to this field at all",
        "Only model size determines Gradient descent quality",
        "There is no way to assess or improve Gradient descent"
      ],
      "answer": 0,
      "explanation": "Gradient descent is a core competency for Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "NN-411-C2",
      "type": "single",
      "question": "Which statement about Training loops in “Neural Networks from Scratch” is correct?",
      "options": [
        "Correct: Training loops is central to this competence and applied correctly in practice",
        "The Training loops concept does not apply to this field at all",
        "Only model size determines Training loops quality",
        "There is no way to assess or improve Training loops"
      ],
      "answer": 0,
      "explanation": "Training loops is a core competency for Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "NN-411-C3",
      "type": "single",
      "question": "Which statement about Forward pass in “Neural Networks from Scratch” is correct?",
      "options": [
        "Correct: Forward pass is central to this competence and applied correctly in practice",
        "The Forward pass concept does not apply to this field at all",
        "Only model size determines Forward pass quality",
        "There is no way to assess or improve Forward pass"
      ],
      "answer": 0,
      "explanation": "Forward pass is a core competency for Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "NN-411-C1",
      "type": "single",
      "question": "Which statement about Backpropagation in “Neural Networks from Scratch” is correct?",
      "options": [
        "Correct: Backpropagation is central to this competence and applied correctly in practice",
        "The Backpropagation concept does not apply to this field at all",
        "Only model size determines Backpropagation quality",
        "There is no way to assess or improve Backpropagation"
      ],
      "answer": 0,
      "explanation": "Backpropagation is a core competency for Neural Networks from Scratch.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "NN-411-C2",
      "type": "single",
      "question": "Which statement about Activation functions in “Neural Networks from Scratch” is correct?",
      "options": [
        "Correct: Activation functions is central to this competence and applied correctly in practice",
        "The Activation functions concept does not apply to this field at all",
        "Only model size determines Activation functions quality",
        "There is no way to assess or improve Activation functions"
      ],
      "answer": 0,
      "explanation": "Activation functions is a core competency for Neural Networks from Scratch.",
      "points": 1
    }
  ]
},
{
  "id": "exam-cnn-deep-dive",
  "courseId": "cnn-deep-dive",
  "code": "ZL-EX-CNNDEEPDIV",
  "title": "Certificate of Competence — Master CNNs for image understanding, from filters to feature maps",
  "qualificationCode": "ZL-QUAL-CNN-412",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 13,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Convolutional Neural Networks. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "CNN-412-C1",
      "title": "Convolution & pooling math",
      "weight": 35
    },
    {
      "code": "CNN-412-C2",
      "title": "Build CNNs with PyTorch",
      "weight": 35
    },
    {
      "code": "CNN-412-C3",
      "title": "Transfer learning",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "CNN-412-C1",
      "type": "single",
      "question": "Which statement about Convolutions & pooling in “Convolutional Neural Networks” is correct?",
      "options": [
        "Correct: Convolutions & pooling is central to this competence and applied correctly in practice",
        "The Convolutions & pooling concept does not apply to this field at all",
        "Only model size determines Convolutions & pooling quality",
        "There is no way to assess or improve Convolutions & pooling"
      ],
      "answer": 0,
      "explanation": "Convolutions & pooling is a core competency for Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "CNN-412-C2",
      "type": "single",
      "question": "Which statement about Feature maps & receptive field in “Convolutional Neural Networks” is correct?",
      "options": [
        "Correct: Feature maps & receptive field is central to this competence and applied correctly in practice",
        "The Feature maps & receptive field concept does not apply to this field at all",
        "Only model size determines Feature maps & receptive field quality",
        "There is no way to assess or improve Feature maps & receptive field"
      ],
      "answer": 0,
      "explanation": "Feature maps & receptive field is a core competency for Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "CNN-412-C3",
      "type": "single",
      "question": "Which statement about CNN architectures in “Convolutional Neural Networks” is correct?",
      "options": [
        "Correct: CNN architectures is central to this competence and applied correctly in practice",
        "The CNN architectures concept does not apply to this field at all",
        "Only model size determines CNN architectures quality",
        "There is no way to assess or improve CNN architectures"
      ],
      "answer": 0,
      "explanation": "CNN architectures is a core competency for Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "CNN-412-C1",
      "type": "single",
      "question": "Which statement about Transfer learning in “Convolutional Neural Networks” is correct?",
      "options": [
        "Correct: Transfer learning is central to this competence and applied correctly in practice",
        "The Transfer learning concept does not apply to this field at all",
        "Only model size determines Transfer learning quality",
        "There is no way to assess or improve Transfer learning"
      ],
      "answer": 0,
      "explanation": "Transfer learning is a core competency for Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "CNN-412-C2",
      "type": "single",
      "question": "Which statement about Interpretability in “Convolutional Neural Networks” is correct?",
      "options": [
        "Correct: Interpretability is central to this competence and applied correctly in practice",
        "The Interpretability concept does not apply to this field at all",
        "Only model size determines Interpretability quality",
        "There is no way to assess or improve Interpretability"
      ],
      "answer": 0,
      "explanation": "Interpretability is a core competency for Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "CNN-412-C3",
      "type": "single",
      "question": "Which statement about Convolutions & pooling in “Convolutional Neural Networks” is correct?",
      "options": [
        "Correct: Convolutions & pooling is central to this competence and applied correctly in practice",
        "The Convolutions & pooling concept does not apply to this field at all",
        "Only model size determines Convolutions & pooling quality",
        "There is no way to assess or improve Convolutions & pooling"
      ],
      "answer": 0,
      "explanation": "Convolutions & pooling is a core competency for Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "CNN-412-C1",
      "type": "single",
      "question": "Which statement about Feature maps & receptive field in “Convolutional Neural Networks” is correct?",
      "options": [
        "Correct: Feature maps & receptive field is central to this competence and applied correctly in practice",
        "The Feature maps & receptive field concept does not apply to this field at all",
        "Only model size determines Feature maps & receptive field quality",
        "There is no way to assess or improve Feature maps & receptive field"
      ],
      "answer": 0,
      "explanation": "Feature maps & receptive field is a core competency for Convolutional Neural Networks.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "CNN-412-C2",
      "type": "single",
      "question": "Which statement about CNN architectures in “Convolutional Neural Networks” is correct?",
      "options": [
        "Correct: CNN architectures is central to this competence and applied correctly in practice",
        "The CNN architectures concept does not apply to this field at all",
        "Only model size determines CNN architectures quality",
        "There is no way to assess or improve CNN architectures"
      ],
      "answer": 0,
      "explanation": "CNN architectures is a core competency for Convolutional Neural Networks.",
      "points": 1
    }
  ]
},
{
  "id": "exam-rnn-sequence",
  "courseId": "rnn-sequence",
  "code": "ZL-EX-RNNSEQUENC",
  "title": "Certificate of Competence — Model time, text, and sequences with recurrent and sequence-to-sequence architectures",
  "qualificationCode": "ZL-QUAL-SEQ-413",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Sequence Models & RNNs. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "SEQ-413-C1",
      "title": "Recurrence & gating",
      "weight": 35
    },
    {
      "code": "SEQ-413-C2",
      "title": "Seq2seq & attention",
      "weight": 35
    },
    {
      "code": "SEQ-413-C3",
      "title": "Time-series applications",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "SEQ-413-C1",
      "type": "single",
      "question": "Which statement about Recurrence & hidden state in “Sequence Models & RNNs” is correct?",
      "options": [
        "Correct: Recurrence & hidden state is central to this competence and applied correctly in practice",
        "The Recurrence & hidden state concept does not apply to this field at all",
        "Only model size determines Recurrence & hidden state quality",
        "There is no way to assess or improve Recurrence & hidden state"
      ],
      "answer": 0,
      "explanation": "Recurrence & hidden state is a core competency for Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "SEQ-413-C2",
      "type": "single",
      "question": "Which statement about LSTM/GRU gating in “Sequence Models & RNNs” is correct?",
      "options": [
        "Correct: LSTM/GRU gating is central to this competence and applied correctly in practice",
        "The LSTM/GRU gating concept does not apply to this field at all",
        "Only model size determines LSTM/GRU gating quality",
        "There is no way to assess or improve LSTM/GRU gating"
      ],
      "answer": 0,
      "explanation": "LSTM/GRU gating is a core competency for Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "SEQ-413-C3",
      "type": "single",
      "question": "Which statement about Seq2seq & attention in “Sequence Models & RNNs” is correct?",
      "options": [
        "Correct: Seq2seq & attention is central to this competence and applied correctly in practice",
        "The Seq2seq & attention concept does not apply to this field at all",
        "Only model size determines Seq2seq & attention quality",
        "There is no way to assess or improve Seq2seq & attention"
      ],
      "answer": 0,
      "explanation": "Seq2seq & attention is a core competency for Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "SEQ-413-C1",
      "type": "single",
      "question": "Which statement about Time-series in “Sequence Models & RNNs” is correct?",
      "options": [
        "Correct: Time-series is central to this competence and applied correctly in practice",
        "The Time-series concept does not apply to this field at all",
        "Only model size determines Time-series quality",
        "There is no way to assess or improve Time-series"
      ],
      "answer": 0,
      "explanation": "Time-series is a core competency for Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "SEQ-413-C2",
      "type": "single",
      "question": "Which statement about Vanishing gradients in “Sequence Models & RNNs” is correct?",
      "options": [
        "Correct: Vanishing gradients is central to this competence and applied correctly in practice",
        "The Vanishing gradients concept does not apply to this field at all",
        "Only model size determines Vanishing gradients quality",
        "There is no way to assess or improve Vanishing gradients"
      ],
      "answer": 0,
      "explanation": "Vanishing gradients is a core competency for Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "SEQ-413-C3",
      "type": "single",
      "question": "Which statement about Recurrence & hidden state in “Sequence Models & RNNs” is correct?",
      "options": [
        "Correct: Recurrence & hidden state is central to this competence and applied correctly in practice",
        "The Recurrence & hidden state concept does not apply to this field at all",
        "Only model size determines Recurrence & hidden state quality",
        "There is no way to assess or improve Recurrence & hidden state"
      ],
      "answer": 0,
      "explanation": "Recurrence & hidden state is a core competency for Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "SEQ-413-C1",
      "type": "single",
      "question": "Which statement about LSTM/GRU gating in “Sequence Models & RNNs” is correct?",
      "options": [
        "Correct: LSTM/GRU gating is central to this competence and applied correctly in practice",
        "The LSTM/GRU gating concept does not apply to this field at all",
        "Only model size determines LSTM/GRU gating quality",
        "There is no way to assess or improve LSTM/GRU gating"
      ],
      "answer": 0,
      "explanation": "LSTM/GRU gating is a core competency for Sequence Models & RNNs.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "SEQ-413-C2",
      "type": "single",
      "question": "Which statement about Seq2seq & attention in “Sequence Models & RNNs” is correct?",
      "options": [
        "Correct: Seq2seq & attention is central to this competence and applied correctly in practice",
        "The Seq2seq & attention concept does not apply to this field at all",
        "Only model size determines Seq2seq & attention quality",
        "There is no way to assess or improve Seq2seq & attention"
      ],
      "answer": 0,
      "explanation": "Seq2seq & attention is a core competency for Sequence Models & RNNs.",
      "points": 1
    }
  ]
},
{
  "id": "exam-pytorch",
  "courseId": "pytorch-deep-learning",
  "code": "ZL-EX-PYTORCHDEE",
  "title": "Certificate of Competence — Ship real deep-learning projects with PyTorch, from tensors to deployment",
  "qualificationCode": "ZL-QUAL-PT-414",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 14,
  "durationMinutes": 75,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Deep Learning with PyTorch. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "PT-414-C1",
      "title": "Tensors & autograd",
      "weight": 30
    },
    {
      "code": "PT-414-C2",
      "title": "Datasets & training loops",
      "weight": 40
    },
    {
      "code": "PT-414-C3",
      "title": "GPU & checkpointing",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "PT-414-C1",
      "type": "single",
      "question": "Which statement about Tensors & devices in “Deep Learning with PyTorch” is correct?",
      "options": [
        "Correct: Tensors & devices is central to this competence and applied correctly in practice",
        "The Tensors & devices concept does not apply to this field at all",
        "Only model size determines Tensors & devices quality",
        "There is no way to assess or improve Tensors & devices"
      ],
      "answer": 0,
      "explanation": "Tensors & devices is a core competency for Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "PT-414-C2",
      "type": "single",
      "question": "Which statement about Autograd in “Deep Learning with PyTorch” is correct?",
      "options": [
        "Correct: Autograd is central to this competence and applied correctly in practice",
        "The Autograd concept does not apply to this field at all",
        "Only model size determines Autograd quality",
        "There is no way to assess or improve Autograd"
      ],
      "answer": 0,
      "explanation": "Autograd is a core competency for Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "PT-414-C3",
      "type": "single",
      "question": "Which statement about Datasets & dataloaders in “Deep Learning with PyTorch” is correct?",
      "options": [
        "Correct: Datasets & dataloaders is central to this competence and applied correctly in practice",
        "The Datasets & dataloaders concept does not apply to this field at all",
        "Only model size determines Datasets & dataloaders quality",
        "There is no way to assess or improve Datasets & dataloaders"
      ],
      "answer": 0,
      "explanation": "Datasets & dataloaders is a core competency for Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "PT-414-C1",
      "type": "single",
      "question": "Which statement about Training loops in “Deep Learning with PyTorch” is correct?",
      "options": [
        "Correct: Training loops is central to this competence and applied correctly in practice",
        "The Training loops concept does not apply to this field at all",
        "Only model size determines Training loops quality",
        "There is no way to assess or improve Training loops"
      ],
      "answer": 0,
      "explanation": "Training loops is a core competency for Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "PT-414-C2",
      "type": "single",
      "question": "Which statement about GPU & checkpointing in “Deep Learning with PyTorch” is correct?",
      "options": [
        "Correct: GPU & checkpointing is central to this competence and applied correctly in practice",
        "The GPU & checkpointing concept does not apply to this field at all",
        "Only model size determines GPU & checkpointing quality",
        "There is no way to assess or improve GPU & checkpointing"
      ],
      "answer": 0,
      "explanation": "GPU & checkpointing is a core competency for Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "PT-414-C3",
      "type": "single",
      "question": "Which statement about Tensors & devices in “Deep Learning with PyTorch” is correct?",
      "options": [
        "Correct: Tensors & devices is central to this competence and applied correctly in practice",
        "The Tensors & devices concept does not apply to this field at all",
        "Only model size determines Tensors & devices quality",
        "There is no way to assess or improve Tensors & devices"
      ],
      "answer": 0,
      "explanation": "Tensors & devices is a core competency for Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "PT-414-C1",
      "type": "single",
      "question": "Which statement about Autograd in “Deep Learning with PyTorch” is correct?",
      "options": [
        "Correct: Autograd is central to this competence and applied correctly in practice",
        "The Autograd concept does not apply to this field at all",
        "Only model size determines Autograd quality",
        "There is no way to assess or improve Autograd"
      ],
      "answer": 0,
      "explanation": "Autograd is a core competency for Deep Learning with PyTorch.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "PT-414-C2",
      "type": "single",
      "question": "Which statement about Datasets & dataloaders in “Deep Learning with PyTorch” is correct?",
      "options": [
        "Correct: Datasets & dataloaders is central to this competence and applied correctly in practice",
        "The Datasets & dataloaders concept does not apply to this field at all",
        "Only model size determines Datasets & dataloaders quality",
        "There is no way to assess or improve Datasets & dataloaders"
      ],
      "answer": 0,
      "explanation": "Datasets & dataloaders is a core competency for Deep Learning with PyTorch.",
      "points": 1
    }
  ]
},
{
  "id": "exam-text-generation",
  "courseId": "text-generation-llms",
  "code": "ZL-EX-TEXTGENERA",
  "title": "Certificate of Competence — Build and deploy LLM text-generation applications responsibly",
  "qualificationCode": "ZL-QUAL-TG-511",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Text Generation with LLMs. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "TG-511-C1",
      "title": "Tokens & generation",
      "weight": 30
    },
    {
      "code": "TG-511-C2",
      "title": "Sampling & prompting",
      "weight": 35
    },
    {
      "code": "TG-511-C3",
      "title": "Guardrails & evaluation",
      "weight": 35
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "TG-511-C1",
      "type": "single",
      "question": "Which statement about Tokens & generation in “Text Generation with LLMs” is correct?",
      "options": [
        "Correct: Tokens & generation is central to this competence and applied correctly in practice",
        "The Tokens & generation concept does not apply to this field at all",
        "Only model size determines Tokens & generation quality",
        "There is no way to assess or improve Tokens & generation"
      ],
      "answer": 0,
      "explanation": "Tokens & generation is a core competency for Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "TG-511-C2",
      "type": "single",
      "question": "Which statement about Sampling & temperature in “Text Generation with LLMs” is correct?",
      "options": [
        "Correct: Sampling & temperature is central to this competence and applied correctly in practice",
        "The Sampling & temperature concept does not apply to this field at all",
        "Only model size determines Sampling & temperature quality",
        "There is no way to assess or improve Sampling & temperature"
      ],
      "answer": 0,
      "explanation": "Sampling & temperature is a core competency for Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "TG-511-C3",
      "type": "single",
      "question": "Which statement about Prompts & systems in “Text Generation with LLMs” is correct?",
      "options": [
        "Correct: Prompts & systems is central to this competence and applied correctly in practice",
        "The Prompts & systems concept does not apply to this field at all",
        "Only model size determines Prompts & systems quality",
        "There is no way to assess or improve Prompts & systems"
      ],
      "answer": 0,
      "explanation": "Prompts & systems is a core competency for Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "TG-511-C1",
      "type": "single",
      "question": "Which statement about Hallucination in “Text Generation with LLMs” is correct?",
      "options": [
        "Correct: Hallucination is central to this competence and applied correctly in practice",
        "The Hallucination concept does not apply to this field at all",
        "Only model size determines Hallucination quality",
        "There is no way to assess or improve Hallucination"
      ],
      "answer": 0,
      "explanation": "Hallucination is a core competency for Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "TG-511-C2",
      "type": "single",
      "question": "Which statement about Evaluation in “Text Generation with LLMs” is correct?",
      "options": [
        "Correct: Evaluation is central to this competence and applied correctly in practice",
        "The Evaluation concept does not apply to this field at all",
        "Only model size determines Evaluation quality",
        "There is no way to assess or improve Evaluation"
      ],
      "answer": 0,
      "explanation": "Evaluation is a core competency for Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "TG-511-C3",
      "type": "single",
      "question": "Which statement about Tokens & generation in “Text Generation with LLMs” is correct?",
      "options": [
        "Correct: Tokens & generation is central to this competence and applied correctly in practice",
        "The Tokens & generation concept does not apply to this field at all",
        "Only model size determines Tokens & generation quality",
        "There is no way to assess or improve Tokens & generation"
      ],
      "answer": 0,
      "explanation": "Tokens & generation is a core competency for Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "TG-511-C1",
      "type": "single",
      "question": "Which statement about Sampling & temperature in “Text Generation with LLMs” is correct?",
      "options": [
        "Correct: Sampling & temperature is central to this competence and applied correctly in practice",
        "The Sampling & temperature concept does not apply to this field at all",
        "Only model size determines Sampling & temperature quality",
        "There is no way to assess or improve Sampling & temperature"
      ],
      "answer": 0,
      "explanation": "Sampling & temperature is a core competency for Text Generation with LLMs.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "TG-511-C2",
      "type": "single",
      "question": "Which statement about Prompts & systems in “Text Generation with LLMs” is correct?",
      "options": [
        "Correct: Prompts & systems is central to this competence and applied correctly in practice",
        "The Prompts & systems concept does not apply to this field at all",
        "Only model size determines Prompts & systems quality",
        "There is no way to assess or improve Prompts & systems"
      ],
      "answer": 0,
      "explanation": "Prompts & systems is a core competency for Text Generation with LLMs.",
      "points": 1
    }
  ]
},
{
  "id": "exam-image-generation",
  "courseId": "image-generation",
  "code": "ZL-EX-IMAGEGENER",
  "title": "Certificate of Competence — Create and control synthetic images with diffusion models",
  "qualificationCode": "ZL-QUAL-IMG-512",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Generative Image Models. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "IMG-512-C1",
      "title": "Diffusion process",
      "weight": 30
    },
    {
      "code": "IMG-512-C2",
      "title": "Prompting & conditioning",
      "weight": 40
    },
    {
      "code": "IMG-512-C3",
      "title": "LoRA/ControlNet control",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "IMG-512-C1",
      "type": "single",
      "question": "Which statement about Diffusion process in “Generative Image Models” is correct?",
      "options": [
        "Correct: Diffusion process is central to this competence and applied correctly in practice",
        "The Diffusion process concept does not apply to this field at all",
        "Only model size determines Diffusion process quality",
        "There is no way to assess or improve Diffusion process"
      ],
      "answer": 0,
      "explanation": "Diffusion process is a core competency for Generative Image Models.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "IMG-512-C2",
      "type": "single",
      "question": "Which statement about Prompting in “Generative Image Models” is correct?",
      "options": [
        "Correct: Prompting is central to this competence and applied correctly in practice",
        "The Prompting concept does not apply to this field at all",
        "Only model size determines Prompting quality",
        "There is no way to assess or improve Prompting"
      ],
      "answer": 0,
      "explanation": "Prompting is a core competency for Generative Image Models.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "IMG-512-C3",
      "type": "single",
      "question": "Which statement about LoRA/ControlNet in “Generative Image Models” is correct?",
      "options": [
        "Correct: LoRA/ControlNet is central to this competence and applied correctly in practice",
        "The LoRA/ControlNet concept does not apply to this field at all",
        "Only model size determines LoRA/ControlNet quality",
        "There is no way to assess or improve LoRA/ControlNet"
      ],
      "answer": 0,
      "explanation": "LoRA/ControlNet is a core competency for Generative Image Models.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "IMG-512-C1",
      "type": "single",
      "question": "Which statement about CFG & seeds in “Generative Image Models” is correct?",
      "options": [
        "Correct: CFG & seeds is central to this competence and applied correctly in practice",
        "The CFG & seeds concept does not apply to this field at all",
        "Only model size determines CFG & seeds quality",
        "There is no way to assess or improve CFG & seeds"
      ],
      "answer": 0,
      "explanation": "CFG & seeds is a core competency for Generative Image Models.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "IMG-512-C2",
      "type": "single",
      "question": "Which statement about Synthesis evaluation in “Generative Image Models” is correct?",
      "options": [
        "Correct: Synthesis evaluation is central to this competence and applied correctly in practice",
        "The Synthesis evaluation concept does not apply to this field at all",
        "Only model size determines Synthesis evaluation quality",
        "There is no way to assess or improve Synthesis evaluation"
      ],
      "answer": 0,
      "explanation": "Synthesis evaluation is a core competency for Generative Image Models.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "IMG-512-C3",
      "type": "single",
      "question": "Which statement about Diffusion process in “Generative Image Models” is correct?",
      "options": [
        "Correct: Diffusion process is central to this competence and applied correctly in practice",
        "The Diffusion process concept does not apply to this field at all",
        "Only model size determines Diffusion process quality",
        "There is no way to assess or improve Diffusion process"
      ],
      "answer": 0,
      "explanation": "Diffusion process is a core competency for Generative Image Models.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "IMG-512-C1",
      "type": "single",
      "question": "Which statement about Prompting in “Generative Image Models” is correct?",
      "options": [
        "Correct: Prompting is central to this competence and applied correctly in practice",
        "The Prompting concept does not apply to this field at all",
        "Only model size determines Prompting quality",
        "There is no way to assess or improve Prompting"
      ],
      "answer": 0,
      "explanation": "Prompting is a core competency for Generative Image Models.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "IMG-512-C2",
      "type": "single",
      "question": "Which statement about LoRA/ControlNet in “Generative Image Models” is correct?",
      "options": [
        "Correct: LoRA/ControlNet is central to this competence and applied correctly in practice",
        "The LoRA/ControlNet concept does not apply to this field at all",
        "Only model size determines LoRA/ControlNet quality",
        "There is no way to assess or improve LoRA/ControlNet"
      ],
      "answer": 0,
      "explanation": "LoRA/ControlNet is a core competency for Generative Image Models.",
      "points": 1
    }
  ]
},
{
  "id": "exam-rag-systems",
  "courseId": "rag-systems",
  "code": "ZL-EX-RAGSYSTEMS",
  "title": "Certificate of Competence — Ground LLM answers in your own data with RAG",
  "qualificationCode": "ZL-QUAL-RAG-513",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 13,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Retrieval-Augmented Generation. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "RAG-513-C1",
      "title": "Chunking & embeddings",
      "weight": 30
    },
    {
      "code": "RAG-513-C2",
      "title": "Vector retrieval & reranking",
      "weight": 40
    },
    {
      "code": "RAG-513-C3",
      "title": "Evaluation & grounding",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "RAG-513-C1",
      "type": "single",
      "question": "Which statement about Chunking in “Retrieval-Augmented Generation” is correct?",
      "options": [
        "Correct: Chunking is central to this competence and applied correctly in practice",
        "The Chunking concept does not apply to this field at all",
        "Only model size determines Chunking quality",
        "There is no way to assess or improve Chunking"
      ],
      "answer": 0,
      "explanation": "Chunking is a core competency for Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "RAG-513-C2",
      "type": "single",
      "question": "Which statement about Embeddings in “Retrieval-Augmented Generation” is correct?",
      "options": [
        "Correct: Embeddings is central to this competence and applied correctly in practice",
        "The Embeddings concept does not apply to this field at all",
        "Only model size determines Embeddings quality",
        "There is no way to assess or improve Embeddings"
      ],
      "answer": 0,
      "explanation": "Embeddings is a core competency for Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "RAG-513-C3",
      "type": "single",
      "question": "Which statement about Vector search in “Retrieval-Augmented Generation” is correct?",
      "options": [
        "Correct: Vector search is central to this competence and applied correctly in practice",
        "The Vector search concept does not apply to this field at all",
        "Only model size determines Vector search quality",
        "There is no way to assess or improve Vector search"
      ],
      "answer": 0,
      "explanation": "Vector search is a core competency for Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "RAG-513-C1",
      "type": "single",
      "question": "Which statement about Reranking in “Retrieval-Augmented Generation” is correct?",
      "options": [
        "Correct: Reranking is central to this competence and applied correctly in practice",
        "The Reranking concept does not apply to this field at all",
        "Only model size determines Reranking quality",
        "There is no way to assess or improve Reranking"
      ],
      "answer": 0,
      "explanation": "Reranking is a core competency for Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "RAG-513-C2",
      "type": "single",
      "question": "Which statement about Evaluation & grounding in “Retrieval-Augmented Generation” is correct?",
      "options": [
        "Correct: Evaluation & grounding is central to this competence and applied correctly in practice",
        "The Evaluation & grounding concept does not apply to this field at all",
        "Only model size determines Evaluation & grounding quality",
        "There is no way to assess or improve Evaluation & grounding"
      ],
      "answer": 0,
      "explanation": "Evaluation & grounding is a core competency for Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "RAG-513-C3",
      "type": "single",
      "question": "Which statement about Chunking in “Retrieval-Augmented Generation” is correct?",
      "options": [
        "Correct: Chunking is central to this competence and applied correctly in practice",
        "The Chunking concept does not apply to this field at all",
        "Only model size determines Chunking quality",
        "There is no way to assess or improve Chunking"
      ],
      "answer": 0,
      "explanation": "Chunking is a core competency for Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "RAG-513-C1",
      "type": "single",
      "question": "Which statement about Embeddings in “Retrieval-Augmented Generation” is correct?",
      "options": [
        "Correct: Embeddings is central to this competence and applied correctly in practice",
        "The Embeddings concept does not apply to this field at all",
        "Only model size determines Embeddings quality",
        "There is no way to assess or improve Embeddings"
      ],
      "answer": 0,
      "explanation": "Embeddings is a core competency for Retrieval-Augmented Generation.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "RAG-513-C2",
      "type": "single",
      "question": "Which statement about Vector search in “Retrieval-Augmented Generation” is correct?",
      "options": [
        "Correct: Vector search is central to this competence and applied correctly in practice",
        "The Vector search concept does not apply to this field at all",
        "Only model size determines Vector search quality",
        "There is no way to assess or improve Vector search"
      ],
      "answer": 0,
      "explanation": "Vector search is a core competency for Retrieval-Augmented Generation.",
      "points": 1
    }
  ]
},
{
  "id": "exam-nlp-basics",
  "courseId": "nlp-basics",
  "code": "ZL-EX-NLPBASICS",
  "title": "Certificate of Competence — Core techniques for processing and understanding human language",
  "qualificationCode": "ZL-QUAL-NLP-311",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for NLP Fundamentals. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "NLP-311-C1",
      "title": "Text preprocessing & vectorization",
      "weight": 40
    },
    {
      "code": "NLP-311-C2",
      "title": "Classical text classification",
      "weight": 35
    },
    {
      "code": "NLP-311-C3",
      "title": "Word embeddings",
      "weight": 25
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "NLP-311-C1",
      "type": "single",
      "question": "Which statement about Preprocessing in “NLP Fundamentals” is correct?",
      "options": [
        "Correct: Preprocessing is central to this competence and applied correctly in practice",
        "The Preprocessing concept does not apply to this field at all",
        "Only model size determines Preprocessing quality",
        "There is no way to assess or improve Preprocessing"
      ],
      "answer": 0,
      "explanation": "Preprocessing is a core competency for NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "NLP-311-C2",
      "type": "single",
      "question": "Which statement about TF-IDF in “NLP Fundamentals” is correct?",
      "options": [
        "Correct: TF-IDF is central to this competence and applied correctly in practice",
        "The TF-IDF concept does not apply to this field at all",
        "Only model size determines TF-IDF quality",
        "There is no way to assess or improve TF-IDF"
      ],
      "answer": 0,
      "explanation": "TF-IDF is a core competency for NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "NLP-311-C3",
      "type": "single",
      "question": "Which statement about Text classification in “NLP Fundamentals” is correct?",
      "options": [
        "Correct: Text classification is central to this competence and applied correctly in practice",
        "The Text classification concept does not apply to this field at all",
        "Only model size determines Text classification quality",
        "There is no way to assess or improve Text classification"
      ],
      "answer": 0,
      "explanation": "Text classification is a core competency for NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "NLP-311-C1",
      "type": "single",
      "question": "Which statement about Word embeddings in “NLP Fundamentals” is correct?",
      "options": [
        "Correct: Word embeddings is central to this competence and applied correctly in practice",
        "The Word embeddings concept does not apply to this field at all",
        "Only model size determines Word embeddings quality",
        "There is no way to assess or improve Word embeddings"
      ],
      "answer": 0,
      "explanation": "Word embeddings is a core competency for NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "NLP-311-C2",
      "type": "single",
      "question": "Which statement about Vectorization in “NLP Fundamentals” is correct?",
      "options": [
        "Correct: Vectorization is central to this competence and applied correctly in practice",
        "The Vectorization concept does not apply to this field at all",
        "Only model size determines Vectorization quality",
        "There is no way to assess or improve Vectorization"
      ],
      "answer": 0,
      "explanation": "Vectorization is a core competency for NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "NLP-311-C3",
      "type": "single",
      "question": "Which statement about Preprocessing in “NLP Fundamentals” is correct?",
      "options": [
        "Correct: Preprocessing is central to this competence and applied correctly in practice",
        "The Preprocessing concept does not apply to this field at all",
        "Only model size determines Preprocessing quality",
        "There is no way to assess or improve Preprocessing"
      ],
      "answer": 0,
      "explanation": "Preprocessing is a core competency for NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "NLP-311-C1",
      "type": "single",
      "question": "Which statement about TF-IDF in “NLP Fundamentals” is correct?",
      "options": [
        "Correct: TF-IDF is central to this competence and applied correctly in practice",
        "The TF-IDF concept does not apply to this field at all",
        "Only model size determines TF-IDF quality",
        "There is no way to assess or improve TF-IDF"
      ],
      "answer": 0,
      "explanation": "TF-IDF is a core competency for NLP Fundamentals.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "NLP-311-C2",
      "type": "single",
      "question": "Which statement about Text classification in “NLP Fundamentals” is correct?",
      "options": [
        "Correct: Text classification is central to this competence and applied correctly in practice",
        "The Text classification concept does not apply to this field at all",
        "Only model size determines Text classification quality",
        "There is no way to assess or improve Text classification"
      ],
      "answer": 0,
      "explanation": "Text classification is a core competency for NLP Fundamentals.",
      "points": 1
    }
  ]
},
{
  "id": "exam-sentiment-analysis",
  "courseId": "sentiment-analysis",
  "code": "ZL-EX-SENTIMENTA",
  "title": "Certificate of Competence — Extract opinions and emotion from text with modern models",
  "qualificationCode": "ZL-QUAL-SENT-312",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 10,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Sentiment Analysis. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "SENT-312-C1",
      "title": "Baseline classification",
      "weight": 40
    },
    {
      "code": "SENT-312-C2",
      "title": "Transformer fine-tuning",
      "weight": 35
    },
    {
      "code": "SENT-312-C3",
      "title": "Nuanced & aspect sentiment",
      "weight": 25
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "SENT-312-C1",
      "type": "single",
      "question": "Which statement about Sentiment framing in “Sentiment Analysis” is correct?",
      "options": [
        "Correct: Sentiment framing is central to this competence and applied correctly in practice",
        "The Sentiment framing concept does not apply to this field at all",
        "Only model size determines Sentiment framing quality",
        "There is no way to assess or improve Sentiment framing"
      ],
      "answer": 0,
      "explanation": "Sentiment framing is a core competency for Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "SENT-312-C2",
      "type": "single",
      "question": "Which statement about Baseline models in “Sentiment Analysis” is correct?",
      "options": [
        "Correct: Baseline models is central to this competence and applied correctly in practice",
        "The Baseline models concept does not apply to this field at all",
        "Only model size determines Baseline models quality",
        "There is no way to assess or improve Baseline models"
      ],
      "answer": 0,
      "explanation": "Baseline models is a core competency for Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "SENT-312-C3",
      "type": "single",
      "question": "Which statement about Transformers in “Sentiment Analysis” is correct?",
      "options": [
        "Correct: Transformers is central to this competence and applied correctly in practice",
        "The Transformers concept does not apply to this field at all",
        "Only model size determines Transformers quality",
        "There is no way to assess or improve Transformers"
      ],
      "answer": 0,
      "explanation": "Transformers is a core competency for Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "SENT-312-C1",
      "type": "single",
      "question": "Which statement about Imbalance & nuance in “Sentiment Analysis” is correct?",
      "options": [
        "Correct: Imbalance & nuance is central to this competence and applied correctly in practice",
        "The Imbalance & nuance concept does not apply to this field at all",
        "Only model size determines Imbalance & nuance quality",
        "There is no way to assess or improve Imbalance & nuance"
      ],
      "answer": 0,
      "explanation": "Imbalance & nuance is a core competency for Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "SENT-312-C2",
      "type": "single",
      "question": "Which statement about Aspect sentiment in “Sentiment Analysis” is correct?",
      "options": [
        "Correct: Aspect sentiment is central to this competence and applied correctly in practice",
        "The Aspect sentiment concept does not apply to this field at all",
        "Only model size determines Aspect sentiment quality",
        "There is no way to assess or improve Aspect sentiment"
      ],
      "answer": 0,
      "explanation": "Aspect sentiment is a core competency for Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "SENT-312-C3",
      "type": "single",
      "question": "Which statement about Sentiment framing in “Sentiment Analysis” is correct?",
      "options": [
        "Correct: Sentiment framing is central to this competence and applied correctly in practice",
        "The Sentiment framing concept does not apply to this field at all",
        "Only model size determines Sentiment framing quality",
        "There is no way to assess or improve Sentiment framing"
      ],
      "answer": 0,
      "explanation": "Sentiment framing is a core competency for Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "SENT-312-C1",
      "type": "single",
      "question": "Which statement about Baseline models in “Sentiment Analysis” is correct?",
      "options": [
        "Correct: Baseline models is central to this competence and applied correctly in practice",
        "The Baseline models concept does not apply to this field at all",
        "Only model size determines Baseline models quality",
        "There is no way to assess or improve Baseline models"
      ],
      "answer": 0,
      "explanation": "Baseline models is a core competency for Sentiment Analysis.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "SENT-312-C2",
      "type": "single",
      "question": "Which statement about Transformers in “Sentiment Analysis” is correct?",
      "options": [
        "Correct: Transformers is central to this competence and applied correctly in practice",
        "The Transformers concept does not apply to this field at all",
        "Only model size determines Transformers quality",
        "There is no way to assess or improve Transformers"
      ],
      "answer": 0,
      "explanation": "Transformers is a core competency for Sentiment Analysis.",
      "points": 1
    }
  ]
},
{
  "id": "exam-transformers-nlp",
  "courseId": "transformers-nlp",
  "code": "ZL-EX-TRANSFORME",
  "title": "Certificate of Competence — Master attention and build with modern transformer models",
  "qualificationCode": "ZL-QUAL-TRF-313",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 13,
  "durationMinutes": 75,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Transformers for NLP. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "TRF-313-C1",
      "title": "Attention mechanics",
      "weight": 35
    },
    {
      "code": "TRF-313-C2",
      "title": "Using pretrained models",
      "weight": 30
    },
    {
      "code": "TRF-313-C3",
      "title": "Fine-tuning for tasks",
      "weight": 35
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "TRF-313-C1",
      "type": "single",
      "question": "Which statement about Self-attention in “Transformers for NLP” is correct?",
      "options": [
        "Correct: Self-attention is central to this competence and applied correctly in practice",
        "The Self-attention concept does not apply to this field at all",
        "Only model size determines Self-attention quality",
        "There is no way to assess or improve Self-attention"
      ],
      "answer": 0,
      "explanation": "Self-attention is a core competency for Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "TRF-313-C2",
      "type": "single",
      "question": "Which statement about Multi-head & positional in “Transformers for NLP” is correct?",
      "options": [
        "Correct: Multi-head & positional is central to this competence and applied correctly in practice",
        "The Multi-head & positional concept does not apply to this field at all",
        "Only model size determines Multi-head & positional quality",
        "There is no way to assess or improve Multi-head & positional"
      ],
      "answer": 0,
      "explanation": "Multi-head & positional is a core competency for Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "TRF-313-C3",
      "type": "single",
      "question": "Which statement about Pretrained models in “Transformers for NLP” is correct?",
      "options": [
        "Correct: Pretrained models is central to this competence and applied correctly in practice",
        "The Pretrained models concept does not apply to this field at all",
        "Only model size determines Pretrained models quality",
        "There is no way to assess or improve Pretrained models"
      ],
      "answer": 0,
      "explanation": "Pretrained models is a core competency for Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "TRF-313-C1",
      "type": "single",
      "question": "Which statement about Fine-tuning in “Transformers for NLP” is correct?",
      "options": [
        "Correct: Fine-tuning is central to this competence and applied correctly in practice",
        "The Fine-tuning concept does not apply to this field at all",
        "Only model size determines Fine-tuning quality",
        "There is no way to assess or improve Fine-tuning"
      ],
      "answer": 0,
      "explanation": "Fine-tuning is a core competency for Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "TRF-313-C2",
      "type": "single",
      "question": "Which statement about Tokenizers in “Transformers for NLP” is correct?",
      "options": [
        "Correct: Tokenizers is central to this competence and applied correctly in practice",
        "The Tokenizers concept does not apply to this field at all",
        "Only model size determines Tokenizers quality",
        "There is no way to assess or improve Tokenizers"
      ],
      "answer": 0,
      "explanation": "Tokenizers is a core competency for Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "TRF-313-C3",
      "type": "single",
      "question": "Which statement about Self-attention in “Transformers for NLP” is correct?",
      "options": [
        "Correct: Self-attention is central to this competence and applied correctly in practice",
        "The Self-attention concept does not apply to this field at all",
        "Only model size determines Self-attention quality",
        "There is no way to assess or improve Self-attention"
      ],
      "answer": 0,
      "explanation": "Self-attention is a core competency for Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "TRF-313-C1",
      "type": "single",
      "question": "Which statement about Multi-head & positional in “Transformers for NLP” is correct?",
      "options": [
        "Correct: Multi-head & positional is central to this competence and applied correctly in practice",
        "The Multi-head & positional concept does not apply to this field at all",
        "Only model size determines Multi-head & positional quality",
        "There is no way to assess or improve Multi-head & positional"
      ],
      "answer": 0,
      "explanation": "Multi-head & positional is a core competency for Transformers for NLP.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "TRF-313-C2",
      "type": "single",
      "question": "Which statement about Pretrained models in “Transformers for NLP” is correct?",
      "options": [
        "Correct: Pretrained models is central to this competence and applied correctly in practice",
        "The Pretrained models concept does not apply to this field at all",
        "Only model size determines Pretrained models quality",
        "There is no way to assess or improve Pretrained models"
      ],
      "answer": 0,
      "explanation": "Pretrained models is a core competency for Transformers for NLP.",
      "points": 1
    }
  ]
},
{
  "id": "exam-nlp-production",
  "courseId": "nlp-api-production",
  "code": "ZL-EX-NLPAPIPROD",
  "title": "Certificate of Competence — Deploy reliable NLP services that scale and stay monitored",
  "qualificationCode": "ZL-QUAL-NLPOPS-314",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for NLP in Production. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "NLPOPS-314-C1",
      "title": "Serving & APIs",
      "weight": 40
    },
    {
      "code": "NLPOPS-314-C2",
      "title": "Retraining & versioning",
      "weight": 30
    },
    {
      "code": "NLPOPS-314-C3",
      "title": "Monitoring & drift",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "NLPOPS-314-C1",
      "type": "single",
      "question": "Which statement about Serving & APIs in “NLP in Production” is correct?",
      "options": [
        "Correct: Serving & APIs is central to this competence and applied correctly in practice",
        "The Serving & APIs concept does not apply to this field at all",
        "Only model size determines Serving & APIs quality",
        "There is no way to assess or improve Serving & APIs"
      ],
      "answer": 0,
      "explanation": "Serving & APIs is a core competency for NLP in Production.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "NLPOPS-314-C2",
      "type": "single",
      "question": "Which statement about Batching & quantization in “NLP in Production” is correct?",
      "options": [
        "Correct: Batching & quantization is central to this competence and applied correctly in practice",
        "The Batching & quantization concept does not apply to this field at all",
        "Only model size determines Batching & quantization quality",
        "There is no way to assess or improve Batching & quantization"
      ],
      "answer": 0,
      "explanation": "Batching & quantization is a core competency for NLP in Production.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "NLPOPS-314-C3",
      "type": "single",
      "question": "Which statement about Retraining & versioning in “NLP in Production” is correct?",
      "options": [
        "Correct: Retraining & versioning is central to this competence and applied correctly in practice",
        "The Retraining & versioning concept does not apply to this field at all",
        "Only model size determines Retraining & versioning quality",
        "There is no way to assess or improve Retraining & versioning"
      ],
      "answer": 0,
      "explanation": "Retraining & versioning is a core competency for NLP in Production.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "NLPOPS-314-C1",
      "type": "single",
      "question": "Which statement about Monitoring & drift in “NLP in Production” is correct?",
      "options": [
        "Correct: Monitoring & drift is central to this competence and applied correctly in practice",
        "The Monitoring & drift concept does not apply to this field at all",
        "Only model size determines Monitoring & drift quality",
        "There is no way to assess or improve Monitoring & drift"
      ],
      "answer": 0,
      "explanation": "Monitoring & drift is a core competency for NLP in Production.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "NLPOPS-314-C2",
      "type": "single",
      "question": "Which statement about Rate limiting in “NLP in Production” is correct?",
      "options": [
        "Correct: Rate limiting is central to this competence and applied correctly in practice",
        "The Rate limiting concept does not apply to this field at all",
        "Only model size determines Rate limiting quality",
        "There is no way to assess or improve Rate limiting"
      ],
      "answer": 0,
      "explanation": "Rate limiting is a core competency for NLP in Production.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "NLPOPS-314-C3",
      "type": "single",
      "question": "Which statement about Serving & APIs in “NLP in Production” is correct?",
      "options": [
        "Correct: Serving & APIs is central to this competence and applied correctly in practice",
        "The Serving & APIs concept does not apply to this field at all",
        "Only model size determines Serving & APIs quality",
        "There is no way to assess or improve Serving & APIs"
      ],
      "answer": 0,
      "explanation": "Serving & APIs is a core competency for NLP in Production.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "NLPOPS-314-C1",
      "type": "single",
      "question": "Which statement about Batching & quantization in “NLP in Production” is correct?",
      "options": [
        "Correct: Batching & quantization is central to this competence and applied correctly in practice",
        "The Batching & quantization concept does not apply to this field at all",
        "Only model size determines Batching & quantization quality",
        "There is no way to assess or improve Batching & quantization"
      ],
      "answer": 0,
      "explanation": "Batching & quantization is a core competency for NLP in Production.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "NLPOPS-314-C2",
      "type": "single",
      "question": "Which statement about Retraining & versioning in “NLP in Production” is correct?",
      "options": [
        "Correct: Retraining & versioning is central to this competence and applied correctly in practice",
        "The Retraining & versioning concept does not apply to this field at all",
        "Only model size determines Retraining & versioning quality",
        "There is no way to assess or improve Retraining & versioning"
      ],
      "answer": 0,
      "explanation": "Retraining & versioning is a core competency for NLP in Production.",
      "points": 1
    }
  ]
},
{
  "id": "exam-cv-basics",
  "courseId": "cv-basics",
  "code": "ZL-EX-CVBASICS",
  "title": "Certificate of Competence — Master image manipulation and classical computer vision with OpenCV",
  "qualificationCode": "ZL-QUAL-CV-401",
  "level": "Level 3 (RQF) • EQF 4",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for OpenCV & Image Processing. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "CV-401-C1",
      "title": "Image I/O & transforms",
      "weight": 40
    },
    {
      "code": "CV-401-C2",
      "title": "Filters & edges",
      "weight": 35
    },
    {
      "code": "CV-401-C3",
      "title": "Contours & morphology",
      "weight": 25
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "CV-401-C1",
      "type": "single",
      "question": "Which statement about Image I/O & color in “OpenCV & Image Processing” is correct?",
      "options": [
        "Correct: Image I/O & color is central to this competence and applied correctly in practice",
        "The Image I/O & color concept does not apply to this field at all",
        "Only model size determines Image I/O & color quality",
        "There is no way to assess or improve Image I/O & color"
      ],
      "answer": 0,
      "explanation": "Image I/O & color is a core competency for OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "CV-401-C2",
      "type": "single",
      "question": "Which statement about Filters & thresholding in “OpenCV & Image Processing” is correct?",
      "options": [
        "Correct: Filters & thresholding is central to this competence and applied correctly in practice",
        "The Filters & thresholding concept does not apply to this field at all",
        "Only model size determines Filters & thresholding quality",
        "There is no way to assess or improve Filters & thresholding"
      ],
      "answer": 0,
      "explanation": "Filters & thresholding is a core competency for OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "CV-401-C3",
      "type": "single",
      "question": "Which statement about Edge detection in “OpenCV & Image Processing” is correct?",
      "options": [
        "Correct: Edge detection is central to this competence and applied correctly in practice",
        "The Edge detection concept does not apply to this field at all",
        "Only model size determines Edge detection quality",
        "There is no way to assess or improve Edge detection"
      ],
      "answer": 0,
      "explanation": "Edge detection is a core competency for OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "CV-401-C1",
      "type": "single",
      "question": "Which statement about Morphology & contours in “OpenCV & Image Processing” is correct?",
      "options": [
        "Correct: Morphology & contours is central to this competence and applied correctly in practice",
        "The Morphology & contours concept does not apply to this field at all",
        "Only model size determines Morphology & contours quality",
        "There is no way to assess or improve Morphology & contours"
      ],
      "answer": 0,
      "explanation": "Morphology & contours is a core competency for OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "CV-401-C2",
      "type": "single",
      "question": "Which statement about Preprocessing in “OpenCV & Image Processing” is correct?",
      "options": [
        "Correct: Preprocessing is central to this competence and applied correctly in practice",
        "The Preprocessing concept does not apply to this field at all",
        "Only model size determines Preprocessing quality",
        "There is no way to assess or improve Preprocessing"
      ],
      "answer": 0,
      "explanation": "Preprocessing is a core competency for OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "CV-401-C3",
      "type": "single",
      "question": "Which statement about Image I/O & color in “OpenCV & Image Processing” is correct?",
      "options": [
        "Correct: Image I/O & color is central to this competence and applied correctly in practice",
        "The Image I/O & color concept does not apply to this field at all",
        "Only model size determines Image I/O & color quality",
        "There is no way to assess or improve Image I/O & color"
      ],
      "answer": 0,
      "explanation": "Image I/O & color is a core competency for OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "CV-401-C1",
      "type": "single",
      "question": "Which statement about Filters & thresholding in “OpenCV & Image Processing” is correct?",
      "options": [
        "Correct: Filters & thresholding is central to this competence and applied correctly in practice",
        "The Filters & thresholding concept does not apply to this field at all",
        "Only model size determines Filters & thresholding quality",
        "There is no way to assess or improve Filters & thresholding"
      ],
      "answer": 0,
      "explanation": "Filters & thresholding is a core competency for OpenCV & Image Processing.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "CV-401-C2",
      "type": "single",
      "question": "Which statement about Edge detection in “OpenCV & Image Processing” is correct?",
      "options": [
        "Correct: Edge detection is central to this competence and applied correctly in practice",
        "The Edge detection concept does not apply to this field at all",
        "Only model size determines Edge detection quality",
        "There is no way to assess or improve Edge detection"
      ],
      "answer": 0,
      "explanation": "Edge detection is a core competency for OpenCV & Image Processing.",
      "points": 1
    }
  ]
},
{
  "id": "exam-object-detection",
  "courseId": "object-detection",
  "code": "ZL-EX-OBJECTDETE",
  "title": "Certificate of Competence — Detect and locate objects in images and video in real time",
  "qualificationCode": "ZL-QUAL-DET-402",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 13,
  "durationMinutes": 75,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Object Detection. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "DET-402-C1",
      "title": "Detection concepts & anchors",
      "weight": 30
    },
    {
      "code": "DET-402-C2",
      "title": "YOLO & Faster R-CNN",
      "weight": 40
    },
    {
      "code": "DET-402-C3",
      "title": "mAP evaluation & fine-tune",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "DET-402-C1",
      "type": "single",
      "question": "Which statement about Boxes, anchors, IoU in “Object Detection” is correct?",
      "options": [
        "Correct: Boxes, anchors, IoU is central to this competence and applied correctly in practice",
        "The Boxes, anchors, IoU concept does not apply to this field at all",
        "Only model size determines Boxes, anchors, IoU quality",
        "There is no way to assess or improve Boxes, anchors, IoU"
      ],
      "answer": 0,
      "explanation": "Boxes, anchors, IoU is a core competency for Object Detection.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "DET-402-C2",
      "type": "single",
      "question": "Which statement about YOLO inference in “Object Detection” is correct?",
      "options": [
        "Correct: YOLO inference is central to this competence and applied correctly in practice",
        "The YOLO inference concept does not apply to this field at all",
        "Only model size determines YOLO inference quality",
        "There is no way to assess or improve YOLO inference"
      ],
      "answer": 0,
      "explanation": "YOLO inference is a core competency for Object Detection.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "DET-402-C3",
      "type": "single",
      "question": "Which statement about Faster R-CNN in “Object Detection” is correct?",
      "options": [
        "Correct: Faster R-CNN is central to this competence and applied correctly in practice",
        "The Faster R-CNN concept does not apply to this field at all",
        "Only model size determines Faster R-CNN quality",
        "There is no way to assess or improve Faster R-CNN"
      ],
      "answer": 0,
      "explanation": "Faster R-CNN is a core competency for Object Detection.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "DET-402-C1",
      "type": "single",
      "question": "Which statement about mAP evaluation in “Object Detection” is correct?",
      "options": [
        "Correct: mAP evaluation is central to this competence and applied correctly in practice",
        "The mAP evaluation concept does not apply to this field at all",
        "Only model size determines mAP evaluation quality",
        "There is no way to assess or improve mAP evaluation"
      ],
      "answer": 0,
      "explanation": "mAP evaluation is a core competency for Object Detection.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "DET-402-C2",
      "type": "single",
      "question": "Which statement about Fine-tuning in “Object Detection” is correct?",
      "options": [
        "Correct: Fine-tuning is central to this competence and applied correctly in practice",
        "The Fine-tuning concept does not apply to this field at all",
        "Only model size determines Fine-tuning quality",
        "There is no way to assess or improve Fine-tuning"
      ],
      "answer": 0,
      "explanation": "Fine-tuning is a core competency for Object Detection.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "DET-402-C3",
      "type": "single",
      "question": "Which statement about Boxes, anchors, IoU in “Object Detection” is correct?",
      "options": [
        "Correct: Boxes, anchors, IoU is central to this competence and applied correctly in practice",
        "The Boxes, anchors, IoU concept does not apply to this field at all",
        "Only model size determines Boxes, anchors, IoU quality",
        "There is no way to assess or improve Boxes, anchors, IoU"
      ],
      "answer": 0,
      "explanation": "Boxes, anchors, IoU is a core competency for Object Detection.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "DET-402-C1",
      "type": "single",
      "question": "Which statement about YOLO inference in “Object Detection” is correct?",
      "options": [
        "Correct: YOLO inference is central to this competence and applied correctly in practice",
        "The YOLO inference concept does not apply to this field at all",
        "Only model size determines YOLO inference quality",
        "There is no way to assess or improve YOLO inference"
      ],
      "answer": 0,
      "explanation": "YOLO inference is a core competency for Object Detection.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "DET-402-C2",
      "type": "single",
      "question": "Which statement about Faster R-CNN in “Object Detection” is correct?",
      "options": [
        "Correct: Faster R-CNN is central to this competence and applied correctly in practice",
        "The Faster R-CNN concept does not apply to this field at all",
        "Only model size determines Faster R-CNN quality",
        "There is no way to assess or improve Faster R-CNN"
      ],
      "answer": 0,
      "explanation": "Faster R-CNN is a core competency for Object Detection.",
      "points": 1
    }
  ]
},
{
  "id": "exam-image-segmentation",
  "courseId": "image-segmentation",
  "code": "ZL-EX-IMAGESEGME",
  "title": "Certificate of Competence — Label every pixel with semantic and instance segmentation",
  "qualificationCode": "ZL-QUAL-SEG-403",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 13,
  "durationMinutes": 75,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Image Segmentation. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "SEG-403-C1",
      "title": "Segmentation types & tasks",
      "weight": 30
    },
    {
      "code": "SEG-403-C2",
      "title": "U-Net & Mask R-CNN",
      "weight": 40
    },
    {
      "code": "SEG-403-C3",
      "title": "IoU/Dice evaluation",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "SEG-403-C1",
      "type": "single",
      "question": "Which statement about Semantic vs instance in “Image Segmentation” is correct?",
      "options": [
        "Correct: Semantic vs instance is central to this competence and applied correctly in practice",
        "The Semantic vs instance concept does not apply to this field at all",
        "Only model size determines Semantic vs instance quality",
        "There is no way to assess or improve Semantic vs instance"
      ],
      "answer": 0,
      "explanation": "Semantic vs instance is a core competency for Image Segmentation.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "SEG-403-C2",
      "type": "single",
      "question": "Which statement about U-Net in “Image Segmentation” is correct?",
      "options": [
        "Correct: U-Net is central to this competence and applied correctly in practice",
        "The U-Net concept does not apply to this field at all",
        "Only model size determines U-Net quality",
        "There is no way to assess or improve U-Net"
      ],
      "answer": 0,
      "explanation": "U-Net is a core competency for Image Segmentation.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "SEG-403-C3",
      "type": "single",
      "question": "Which statement about Mask R-CNN in “Image Segmentation” is correct?",
      "options": [
        "Correct: Mask R-CNN is central to this competence and applied correctly in practice",
        "The Mask R-CNN concept does not apply to this field at all",
        "Only model size determines Mask R-CNN quality",
        "There is no way to assess or improve Mask R-CNN"
      ],
      "answer": 0,
      "explanation": "Mask R-CNN is a core competency for Image Segmentation.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "SEG-403-C1",
      "type": "single",
      "question": "Which statement about Dice & IoU in “Image Segmentation” is correct?",
      "options": [
        "Correct: Dice & IoU is central to this competence and applied correctly in practice",
        "The Dice & IoU concept does not apply to this field at all",
        "Only model size determines Dice & IoU quality",
        "There is no way to assess or improve Dice & IoU"
      ],
      "answer": 0,
      "explanation": "Dice & IoU is a core competency for Image Segmentation.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "SEG-403-C2",
      "type": "single",
      "question": "Which statement about Custom training in “Image Segmentation” is correct?",
      "options": [
        "Correct: Custom training is central to this competence and applied correctly in practice",
        "The Custom training concept does not apply to this field at all",
        "Only model size determines Custom training quality",
        "There is no way to assess or improve Custom training"
      ],
      "answer": 0,
      "explanation": "Custom training is a core competency for Image Segmentation.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "SEG-403-C3",
      "type": "single",
      "question": "Which statement about Semantic vs instance in “Image Segmentation” is correct?",
      "options": [
        "Correct: Semantic vs instance is central to this competence and applied correctly in practice",
        "The Semantic vs instance concept does not apply to this field at all",
        "Only model size determines Semantic vs instance quality",
        "There is no way to assess or improve Semantic vs instance"
      ],
      "answer": 0,
      "explanation": "Semantic vs instance is a core competency for Image Segmentation.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "SEG-403-C1",
      "type": "single",
      "question": "Which statement about U-Net in “Image Segmentation” is correct?",
      "options": [
        "Correct: U-Net is central to this competence and applied correctly in practice",
        "The U-Net concept does not apply to this field at all",
        "Only model size determines U-Net quality",
        "There is no way to assess or improve U-Net"
      ],
      "answer": 0,
      "explanation": "U-Net is a core competency for Image Segmentation.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "SEG-403-C2",
      "type": "single",
      "question": "Which statement about Mask R-CNN in “Image Segmentation” is correct?",
      "options": [
        "Correct: Mask R-CNN is central to this competence and applied correctly in practice",
        "The Mask R-CNN concept does not apply to this field at all",
        "Only model size determines Mask R-CNN quality",
        "There is no way to assess or improve Mask R-CNN"
      ],
      "answer": 0,
      "explanation": "Mask R-CNN is a core competency for Image Segmentation.",
      "points": 1
    }
  ]
},
{
  "id": "exam-cv-deployment",
  "courseId": "cv-deployment",
  "code": "ZL-EX-CVDEPLOYME",
  "title": "Certificate of Competence — Ship vision models to edge devices, cameras, and mobile efficiently",
  "qualificationCode": "ZL-QUAL-EDGE-404",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Edge CV Deployment. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "EDGE-404-C1",
      "title": "Model export (ONNX/TFLite)",
      "weight": 35
    },
    {
      "code": "EDGE-404-C2",
      "title": "Quantization & optimization",
      "weight": 35
    },
    {
      "code": "EDGE-404-C3",
      "title": "Edge deployment & latency",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "EDGE-404-C1",
      "type": "single",
      "question": "Which statement about ONNX/TFLite export in “Edge CV Deployment” is correct?",
      "options": [
        "Correct: ONNX/TFLite export is central to this competence and applied correctly in practice",
        "The ONNX/TFLite export concept does not apply to this field at all",
        "Only model size determines ONNX/TFLite export quality",
        "There is no way to assess or improve ONNX/TFLite export"
      ],
      "answer": 0,
      "explanation": "ONNX/TFLite export is a core competency for Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "EDGE-404-C2",
      "type": "single",
      "question": "Which statement about Quantization in “Edge CV Deployment” is correct?",
      "options": [
        "Correct: Quantization is central to this competence and applied correctly in practice",
        "The Quantization concept does not apply to this field at all",
        "Only model size determines Quantization quality",
        "There is no way to assess or improve Quantization"
      ],
      "answer": 0,
      "explanation": "Quantization is a core competency for Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "EDGE-404-C3",
      "type": "single",
      "question": "Which statement about Edge optimization in “Edge CV Deployment” is correct?",
      "options": [
        "Correct: Edge optimization is central to this competence and applied correctly in practice",
        "The Edge optimization concept does not apply to this field at all",
        "Only model size determines Edge optimization quality",
        "There is no way to assess or improve Edge optimization"
      ],
      "answer": 0,
      "explanation": "Edge optimization is a core competency for Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "EDGE-404-C1",
      "type": "single",
      "question": "Which statement about Latency tuning in “Edge CV Deployment” is correct?",
      "options": [
        "Correct: Latency tuning is central to this competence and applied correctly in practice",
        "The Latency tuning concept does not apply to this field at all",
        "Only model size determines Latency tuning quality",
        "There is no way to assess or improve Latency tuning"
      ],
      "answer": 0,
      "explanation": "Latency tuning is a core competency for Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "EDGE-404-C2",
      "type": "single",
      "question": "Which statement about Real-time loops in “Edge CV Deployment” is correct?",
      "options": [
        "Correct: Real-time loops is central to this competence and applied correctly in practice",
        "The Real-time loops concept does not apply to this field at all",
        "Only model size determines Real-time loops quality",
        "There is no way to assess or improve Real-time loops"
      ],
      "answer": 0,
      "explanation": "Real-time loops is a core competency for Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "EDGE-404-C3",
      "type": "single",
      "question": "Which statement about ONNX/TFLite export in “Edge CV Deployment” is correct?",
      "options": [
        "Correct: ONNX/TFLite export is central to this competence and applied correctly in practice",
        "The ONNX/TFLite export concept does not apply to this field at all",
        "Only model size determines ONNX/TFLite export quality",
        "There is no way to assess or improve ONNX/TFLite export"
      ],
      "answer": 0,
      "explanation": "ONNX/TFLite export is a core competency for Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "EDGE-404-C1",
      "type": "single",
      "question": "Which statement about Quantization in “Edge CV Deployment” is correct?",
      "options": [
        "Correct: Quantization is central to this competence and applied correctly in practice",
        "The Quantization concept does not apply to this field at all",
        "Only model size determines Quantization quality",
        "There is no way to assess or improve Quantization"
      ],
      "answer": 0,
      "explanation": "Quantization is a core competency for Edge CV Deployment.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "EDGE-404-C2",
      "type": "single",
      "question": "Which statement about Edge optimization in “Edge CV Deployment” is correct?",
      "options": [
        "Correct: Edge optimization is central to this competence and applied correctly in practice",
        "The Edge optimization concept does not apply to this field at all",
        "Only model size determines Edge optimization quality",
        "There is no way to assess or improve Edge optimization"
      ],
      "answer": 0,
      "explanation": "Edge optimization is a core competency for Edge CV Deployment.",
      "points": 1
    }
  ]
},
{
  "id": "exam-ci-cd-ml",
  "courseId": "ci-cd-ml",
  "code": "ZL-EX-CICDML",
  "title": "Certificate of Competence — Automate ML pipelines with testing, versioning, and pipelines-as-code",
  "qualificationCode": "ZL-QUAL-CICD-402",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 12,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for CI/CD for Machine Learning. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "CICD-402-C1",
      "title": "Testing data & model code",
      "weight": 35
    },
    {
      "code": "CICD-402-C2",
      "title": "Versioning (DVC/MLflow)",
      "weight": 35
    },
    {
      "code": "CICD-402-C3",
      "title": "Automated pipelines",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "CICD-402-C1",
      "type": "single",
      "question": "Which statement about Testing data & code in “CI/CD for Machine Learning” is correct?",
      "options": [
        "Correct: Testing data & code is central to this competence and applied correctly in practice",
        "The Testing data & code concept does not apply to this field at all",
        "Only model size determines Testing data & code quality",
        "There is no way to assess or improve Testing data & code"
      ],
      "answer": 0,
      "explanation": "Testing data & code is a core competency for CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "CICD-402-C2",
      "type": "single",
      "question": "Which statement about DVC/MLflow versioning in “CI/CD for Machine Learning” is correct?",
      "options": [
        "Correct: DVC/MLflow versioning is central to this competence and applied correctly in practice",
        "The DVC/MLflow versioning concept does not apply to this field at all",
        "Only model size determines DVC/MLflow versioning quality",
        "There is no way to assess or improve DVC/MLflow versioning"
      ],
      "answer": 0,
      "explanation": "DVC/MLflow versioning is a core competency for CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "CICD-402-C3",
      "type": "single",
      "question": "Which statement about Automated pipelines in “CI/CD for Machine Learning” is correct?",
      "options": [
        "Correct: Automated pipelines is central to this competence and applied correctly in practice",
        "The Automated pipelines concept does not apply to this field at all",
        "Only model size determines Automated pipelines quality",
        "There is no way to assess or improve Automated pipelines"
      ],
      "answer": 0,
      "explanation": "Automated pipelines is a core competency for CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "CICD-402-C1",
      "type": "single",
      "question": "Which statement about Eval gates in “CI/CD for Machine Learning” is correct?",
      "options": [
        "Correct: Eval gates is central to this competence and applied correctly in practice",
        "The Eval gates concept does not apply to this field at all",
        "Only model size determines Eval gates quality",
        "There is no way to assess or improve Eval gates"
      ],
      "answer": 0,
      "explanation": "Eval gates is a core competency for CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "CICD-402-C2",
      "type": "single",
      "question": "Which statement about Reproducibility in “CI/CD for Machine Learning” is correct?",
      "options": [
        "Correct: Reproducibility is central to this competence and applied correctly in practice",
        "The Reproducibility concept does not apply to this field at all",
        "Only model size determines Reproducibility quality",
        "There is no way to assess or improve Reproducibility"
      ],
      "answer": 0,
      "explanation": "Reproducibility is a core competency for CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "CICD-402-C3",
      "type": "single",
      "question": "Which statement about Testing data & code in “CI/CD for Machine Learning” is correct?",
      "options": [
        "Correct: Testing data & code is central to this competence and applied correctly in practice",
        "The Testing data & code concept does not apply to this field at all",
        "Only model size determines Testing data & code quality",
        "There is no way to assess or improve Testing data & code"
      ],
      "answer": 0,
      "explanation": "Testing data & code is a core competency for CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "CICD-402-C1",
      "type": "single",
      "question": "Which statement about DVC/MLflow versioning in “CI/CD for Machine Learning” is correct?",
      "options": [
        "Correct: DVC/MLflow versioning is central to this competence and applied correctly in practice",
        "The DVC/MLflow versioning concept does not apply to this field at all",
        "Only model size determines DVC/MLflow versioning quality",
        "There is no way to assess or improve DVC/MLflow versioning"
      ],
      "answer": 0,
      "explanation": "DVC/MLflow versioning is a core competency for CI/CD for Machine Learning.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "CICD-402-C2",
      "type": "single",
      "question": "Which statement about Automated pipelines in “CI/CD for Machine Learning” is correct?",
      "options": [
        "Correct: Automated pipelines is central to this competence and applied correctly in practice",
        "The Automated pipelines concept does not apply to this field at all",
        "Only model size determines Automated pipelines quality",
        "There is no way to assess or improve Automated pipelines"
      ],
      "answer": 0,
      "explanation": "Automated pipelines is a core competency for CI/CD for Machine Learning.",
      "points": 1
    }
  ]
},
{
  "id": "exam-drift",
  "courseId": "monitoring-drift",
  "code": "ZL-EX-MONITORING",
  "title": "Certificate of Competence — Detect when your model's world changes before it fails silently",
  "qualificationCode": "ZL-QUAL-DRIFT-403",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Monitoring & Drift Detection. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "DRIFT-403-C1",
      "title": "Drift types & tests",
      "weight": 40
    },
    {
      "code": "DRIFT-403-C2",
      "title": "Thresholds & alerting",
      "weight": 30
    },
    {
      "code": "DRIFT-403-C3",
      "title": "Retraining workflows",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "DRIFT-403-C1",
      "type": "single",
      "question": "Which statement about Data drift in “Monitoring & Drift Detection” is correct?",
      "options": [
        "Correct: Data drift is central to this competence and applied correctly in practice",
        "The Data drift concept does not apply to this field at all",
        "Only model size determines Data drift quality",
        "There is no way to assess or improve Data drift"
      ],
      "answer": 0,
      "explanation": "Data drift is a core competency for Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "DRIFT-403-C2",
      "type": "single",
      "question": "Which statement about Concept drift in “Monitoring & Drift Detection” is correct?",
      "options": [
        "Correct: Concept drift is central to this competence and applied correctly in practice",
        "The Concept drift concept does not apply to this field at all",
        "Only model size determines Concept drift quality",
        "There is no way to assess or improve Concept drift"
      ],
      "answer": 0,
      "explanation": "Concept drift is a core competency for Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "DRIFT-403-C3",
      "type": "single",
      "question": "Which statement about Statistical tests in “Monitoring & Drift Detection” is correct?",
      "options": [
        "Correct: Statistical tests is central to this competence and applied correctly in practice",
        "The Statistical tests concept does not apply to this field at all",
        "Only model size determines Statistical tests quality",
        "There is no way to assess or improve Statistical tests"
      ],
      "answer": 0,
      "explanation": "Statistical tests is a core competency for Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "DRIFT-403-C1",
      "type": "single",
      "question": "Which statement about Alerts & thresholds in “Monitoring & Drift Detection” is correct?",
      "options": [
        "Correct: Alerts & thresholds is central to this competence and applied correctly in practice",
        "The Alerts & thresholds concept does not apply to this field at all",
        "Only model size determines Alerts & thresholds quality",
        "There is no way to assess or improve Alerts & thresholds"
      ],
      "answer": 0,
      "explanation": "Alerts & thresholds is a core competency for Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "DRIFT-403-C2",
      "type": "single",
      "question": "Which statement about Retraining triggers in “Monitoring & Drift Detection” is correct?",
      "options": [
        "Correct: Retraining triggers is central to this competence and applied correctly in practice",
        "The Retraining triggers concept does not apply to this field at all",
        "Only model size determines Retraining triggers quality",
        "There is no way to assess or improve Retraining triggers"
      ],
      "answer": 0,
      "explanation": "Retraining triggers is a core competency for Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "DRIFT-403-C3",
      "type": "single",
      "question": "Which statement about Data drift in “Monitoring & Drift Detection” is correct?",
      "options": [
        "Correct: Data drift is central to this competence and applied correctly in practice",
        "The Data drift concept does not apply to this field at all",
        "Only model size determines Data drift quality",
        "There is no way to assess or improve Data drift"
      ],
      "answer": 0,
      "explanation": "Data drift is a core competency for Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "DRIFT-403-C1",
      "type": "single",
      "question": "Which statement about Concept drift in “Monitoring & Drift Detection” is correct?",
      "options": [
        "Correct: Concept drift is central to this competence and applied correctly in practice",
        "The Concept drift concept does not apply to this field at all",
        "Only model size determines Concept drift quality",
        "There is no way to assess or improve Concept drift"
      ],
      "answer": 0,
      "explanation": "Concept drift is a core competency for Monitoring & Drift Detection.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "DRIFT-403-C2",
      "type": "single",
      "question": "Which statement about Statistical tests in “Monitoring & Drift Detection” is correct?",
      "options": [
        "Correct: Statistical tests is central to this competence and applied correctly in practice",
        "The Statistical tests concept does not apply to this field at all",
        "Only model size determines Statistical tests quality",
        "There is no way to assess or improve Statistical tests"
      ],
      "answer": 0,
      "explanation": "Statistical tests is a core competency for Monitoring & Drift Detection.",
      "points": 1
    }
  ]
},
{
  "id": "exam-k8s",
  "courseId": "mlops-kubernetes",
  "code": "ZL-EX-MLOPSKUBER",
  "title": "Certificate of Competence — Orchestrate and scale ML workloads with Kubernetes and KServe",
  "qualificationCode": "ZL-QUAL-K8S-404",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 13,
  "durationMinutes": 75,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Scaling ML with Kubernetes. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "K8S-404-C1",
      "title": "Workloads & services",
      "weight": 35
    },
    {
      "code": "K8S-404-C2",
      "title": "Autoscaling & GPU",
      "weight": 35
    },
    {
      "code": "K8S-404-C3",
      "title": "KServe & updates",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "K8S-404-C1",
      "type": "single",
      "question": "Which statement about Pods & deployments in “Scaling ML with Kubernetes” is correct?",
      "options": [
        "Correct: Pods & deployments is central to this competence and applied correctly in practice",
        "The Pods & deployments concept does not apply to this field at all",
        "Only model size determines Pods & deployments quality",
        "There is no way to assess or improve Pods & deployments"
      ],
      "answer": 0,
      "explanation": "Pods & deployments is a core competency for Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "K8S-404-C2",
      "type": "single",
      "question": "Which statement about Services in “Scaling ML with Kubernetes” is correct?",
      "options": [
        "Correct: Services is central to this competence and applied correctly in practice",
        "The Services concept does not apply to this field at all",
        "Only model size determines Services quality",
        "There is no way to assess or improve Services"
      ],
      "answer": 0,
      "explanation": "Services is a core competency for Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "K8S-404-C3",
      "type": "single",
      "question": "Which statement about Autoscaling in “Scaling ML with Kubernetes” is correct?",
      "options": [
        "Correct: Autoscaling is central to this competence and applied correctly in practice",
        "The Autoscaling concept does not apply to this field at all",
        "Only model size determines Autoscaling quality",
        "There is no way to assess or improve Autoscaling"
      ],
      "answer": 0,
      "explanation": "Autoscaling is a core competency for Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "K8S-404-C1",
      "type": "single",
      "question": "Which statement about GPU scheduling in “Scaling ML with Kubernetes” is correct?",
      "options": [
        "Correct: GPU scheduling is central to this competence and applied correctly in practice",
        "The GPU scheduling concept does not apply to this field at all",
        "Only model size determines GPU scheduling quality",
        "There is no way to assess or improve GPU scheduling"
      ],
      "answer": 0,
      "explanation": "GPU scheduling is a core competency for Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "K8S-404-C2",
      "type": "single",
      "question": "Which statement about KServe in “Scaling ML with Kubernetes” is correct?",
      "options": [
        "Correct: KServe is central to this competence and applied correctly in practice",
        "The KServe concept does not apply to this field at all",
        "Only model size determines KServe quality",
        "There is no way to assess or improve KServe"
      ],
      "answer": 0,
      "explanation": "KServe is a core competency for Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "K8S-404-C3",
      "type": "single",
      "question": "Which statement about Pods & deployments in “Scaling ML with Kubernetes” is correct?",
      "options": [
        "Correct: Pods & deployments is central to this competence and applied correctly in practice",
        "The Pods & deployments concept does not apply to this field at all",
        "Only model size determines Pods & deployments quality",
        "There is no way to assess or improve Pods & deployments"
      ],
      "answer": 0,
      "explanation": "Pods & deployments is a core competency for Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "K8S-404-C1",
      "type": "single",
      "question": "Which statement about Services in “Scaling ML with Kubernetes” is correct?",
      "options": [
        "Correct: Services is central to this competence and applied correctly in practice",
        "The Services concept does not apply to this field at all",
        "Only model size determines Services quality",
        "There is no way to assess or improve Services"
      ],
      "answer": 0,
      "explanation": "Services is a core competency for Scaling ML with Kubernetes.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "K8S-404-C2",
      "type": "single",
      "question": "Which statement about Autoscaling in “Scaling ML with Kubernetes” is correct?",
      "options": [
        "Correct: Autoscaling is central to this competence and applied correctly in practice",
        "The Autoscaling concept does not apply to this field at all",
        "Only model size determines Autoscaling quality",
        "There is no way to assess or improve Autoscaling"
      ],
      "answer": 0,
      "explanation": "Autoscaling is a core competency for Scaling ML with Kubernetes.",
      "points": 1
    }
  ]
},
{
  "id": "exam-ai-governance",
  "courseId": "ai-governance",
  "code": "ZL-EX-AIGOVERNAN",
  "title": "Certificate of Competence — Design accountable AI programs aligned to emerging regulations",
  "qualificationCode": "ZL-QUAL-GOV-210",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 9,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for AI Governance & Policy. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "GOV-210-C1",
      "title": "Governance structures & roles",
      "weight": 40
    },
    {
      "code": "GOV-210-C2",
      "title": "Risk classification",
      "weight": 30
    },
    {
      "code": "GOV-210-C3",
      "title": "Regulatory alignment",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "GOV-210-C1",
      "type": "single",
      "question": "Which statement about Governance structures in “AI Governance & Policy” is correct?",
      "options": [
        "Correct: Governance structures is central to this competence and applied correctly in practice",
        "The Governance structures concept does not apply to this field at all",
        "Only model size determines Governance structures quality",
        "There is no way to assess or improve Governance structures"
      ],
      "answer": 0,
      "explanation": "Governance structures is a core competency for AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "GOV-210-C2",
      "type": "single",
      "question": "Which statement about Risk tiers in “AI Governance & Policy” is correct?",
      "options": [
        "Correct: Risk tiers is central to this competence and applied correctly in practice",
        "The Risk tiers concept does not apply to this field at all",
        "Only model size determines Risk tiers quality",
        "There is no way to assess or improve Risk tiers"
      ],
      "answer": 0,
      "explanation": "Risk tiers is a core competency for AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "GOV-210-C3",
      "type": "single",
      "question": "Which statement about EU AI Act in “AI Governance & Policy” is correct?",
      "options": [
        "Correct: EU AI Act is central to this competence and applied correctly in practice",
        "The EU AI Act concept does not apply to this field at all",
        "Only model size determines EU AI Act quality",
        "There is no way to assess or improve EU AI Act"
      ],
      "answer": 0,
      "explanation": "EU AI Act is a core competency for AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "GOV-210-C1",
      "type": "single",
      "question": "Which statement about Accountability in “AI Governance & Policy” is correct?",
      "options": [
        "Correct: Accountability is central to this competence and applied correctly in practice",
        "The Accountability concept does not apply to this field at all",
        "Only model size determines Accountability quality",
        "There is no way to assess or improve Accountability"
      ],
      "answer": 0,
      "explanation": "Accountability is a core competency for AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "GOV-210-C2",
      "type": "single",
      "question": "Which statement about Documentation in “AI Governance & Policy” is correct?",
      "options": [
        "Correct: Documentation is central to this competence and applied correctly in practice",
        "The Documentation concept does not apply to this field at all",
        "Only model size determines Documentation quality",
        "There is no way to assess or improve Documentation"
      ],
      "answer": 0,
      "explanation": "Documentation is a core competency for AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "GOV-210-C3",
      "type": "single",
      "question": "Which statement about Governance structures in “AI Governance & Policy” is correct?",
      "options": [
        "Correct: Governance structures is central to this competence and applied correctly in practice",
        "The Governance structures concept does not apply to this field at all",
        "Only model size determines Governance structures quality",
        "There is no way to assess or improve Governance structures"
      ],
      "answer": 0,
      "explanation": "Governance structures is a core competency for AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "GOV-210-C1",
      "type": "single",
      "question": "Which statement about Risk tiers in “AI Governance & Policy” is correct?",
      "options": [
        "Correct: Risk tiers is central to this competence and applied correctly in practice",
        "The Risk tiers concept does not apply to this field at all",
        "Only model size determines Risk tiers quality",
        "There is no way to assess or improve Risk tiers"
      ],
      "answer": 0,
      "explanation": "Risk tiers is a core competency for AI Governance & Policy.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "GOV-210-C2",
      "type": "single",
      "question": "Which statement about EU AI Act in “AI Governance & Policy” is correct?",
      "options": [
        "Correct: EU AI Act is central to this competence and applied correctly in practice",
        "The EU AI Act concept does not apply to this field at all",
        "Only model size determines EU AI Act quality",
        "There is no way to assess or improve EU AI Act"
      ],
      "answer": 0,
      "explanation": "EU AI Act is a core competency for AI Governance & Policy.",
      "points": 1
    }
  ]
},
{
  "id": "exam-data-privacy",
  "courseId": "data-privacy-ai",
  "code": "ZL-EX-DATAPRIVAC",
  "title": "Certificate of Competence — Protect personal data throughout the ML lifecycle",
  "qualificationCode": "ZL-QUAL-DP-220",
  "level": "Level 4 (RQF) • EQF 5",
  "credits": 9,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 36,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Data Privacy in AI. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "DP-220-C1",
      "title": "GDPR & data lifecycle",
      "weight": 40
    },
    {
      "code": "DP-220-C2",
      "title": "Minimization & consent",
      "weight": 30
    },
    {
      "code": "DP-220-C3",
      "title": "Anonymization & differential privacy",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "DP-220-C1",
      "type": "single",
      "question": "Which statement about GDPR principles in “Data Privacy in AI” is correct?",
      "options": [
        "Correct: GDPR principles is central to this competence and applied correctly in practice",
        "The GDPR principles concept does not apply to this field at all",
        "Only model size determines GDPR principles quality",
        "There is no way to assess or improve GDPR principles"
      ],
      "answer": 0,
      "explanation": "GDPR principles is a core competency for Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "DP-220-C2",
      "type": "single",
      "question": "Which statement about Minimization & consent in “Data Privacy in AI” is correct?",
      "options": [
        "Correct: Minimization & consent is central to this competence and applied correctly in practice",
        "The Minimization & consent concept does not apply to this field at all",
        "Only model size determines Minimization & consent quality",
        "There is no way to assess or improve Minimization & consent"
      ],
      "answer": 0,
      "explanation": "Minimization & consent is a core competency for Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "DP-220-C3",
      "type": "single",
      "question": "Which statement about Anonymization in “Data Privacy in AI” is correct?",
      "options": [
        "Correct: Anonymization is central to this competence and applied correctly in practice",
        "The Anonymization concept does not apply to this field at all",
        "Only model size determines Anonymization quality",
        "There is no way to assess or improve Anonymization"
      ],
      "answer": 0,
      "explanation": "Anonymization is a core competency for Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "DP-220-C1",
      "type": "single",
      "question": "Which statement about Differential privacy in “Data Privacy in AI” is correct?",
      "options": [
        "Correct: Differential privacy is central to this competence and applied correctly in practice",
        "The Differential privacy concept does not apply to this field at all",
        "Only model size determines Differential privacy quality",
        "There is no way to assess or improve Differential privacy"
      ],
      "answer": 0,
      "explanation": "Differential privacy is a core competency for Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "DP-220-C2",
      "type": "single",
      "question": "Which statement about Data lifecycle in “Data Privacy in AI” is correct?",
      "options": [
        "Correct: Data lifecycle is central to this competence and applied correctly in practice",
        "The Data lifecycle concept does not apply to this field at all",
        "Only model size determines Data lifecycle quality",
        "There is no way to assess or improve Data lifecycle"
      ],
      "answer": 0,
      "explanation": "Data lifecycle is a core competency for Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "DP-220-C3",
      "type": "single",
      "question": "Which statement about GDPR principles in “Data Privacy in AI” is correct?",
      "options": [
        "Correct: GDPR principles is central to this competence and applied correctly in practice",
        "The GDPR principles concept does not apply to this field at all",
        "Only model size determines GDPR principles quality",
        "There is no way to assess or improve GDPR principles"
      ],
      "answer": 0,
      "explanation": "GDPR principles is a core competency for Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "DP-220-C1",
      "type": "single",
      "question": "Which statement about Minimization & consent in “Data Privacy in AI” is correct?",
      "options": [
        "Correct: Minimization & consent is central to this competence and applied correctly in practice",
        "The Minimization & consent concept does not apply to this field at all",
        "Only model size determines Minimization & consent quality",
        "There is no way to assess or improve Minimization & consent"
      ],
      "answer": 0,
      "explanation": "Minimization & consent is a core competency for Data Privacy in AI.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "DP-220-C2",
      "type": "single",
      "question": "Which statement about Anonymization in “Data Privacy in AI” is correct?",
      "options": [
        "Correct: Anonymization is central to this competence and applied correctly in practice",
        "The Anonymization concept does not apply to this field at all",
        "Only model size determines Anonymization quality",
        "There is no way to assess or improve Anonymization"
      ],
      "answer": 0,
      "explanation": "Anonymization is a core competency for Data Privacy in AI.",
      "points": 1
    }
  ]
},
{
  "id": "exam-ai-safety",
  "courseId": "ai-safety",
  "code": "ZL-EX-AISAFETY",
  "title": "Certificate of Competence — Build AI systems you can certify as safe and dependable",
  "qualificationCode": "ZL-QUAL-SAFE-230",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for AI Safety & Assurance. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "SAFE-230-C1",
      "title": "Hazard & failure analysis",
      "weight": 35
    },
    {
      "code": "SAFE-230-C2",
      "title": "Robustness & red-teaming",
      "weight": 35
    },
    {
      "code": "SAFE-230-C3",
      "title": "Safety cases & evidence",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "SAFE-230-C1",
      "type": "single",
      "question": "Which statement about Failure modes in “AI Safety & Assurance” is correct?",
      "options": [
        "Correct: Failure modes is central to this competence and applied correctly in practice",
        "The Failure modes concept does not apply to this field at all",
        "Only model size determines Failure modes quality",
        "There is no way to assess or improve Failure modes"
      ],
      "answer": 0,
      "explanation": "Failure modes is a core competency for AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "SAFE-230-C2",
      "type": "single",
      "question": "Which statement about Adversarial robustness in “AI Safety & Assurance” is correct?",
      "options": [
        "Correct: Adversarial robustness is central to this competence and applied correctly in practice",
        "The Adversarial robustness concept does not apply to this field at all",
        "Only model size determines Adversarial robustness quality",
        "There is no way to assess or improve Adversarial robustness"
      ],
      "answer": 0,
      "explanation": "Adversarial robustness is a core competency for AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "SAFE-230-C3",
      "type": "single",
      "question": "Which statement about Red-teaming in “AI Safety & Assurance” is correct?",
      "options": [
        "Correct: Red-teaming is central to this competence and applied correctly in practice",
        "The Red-teaming concept does not apply to this field at all",
        "Only model size determines Red-teaming quality",
        "There is no way to assess or improve Red-teaming"
      ],
      "answer": 0,
      "explanation": "Red-teaming is a core competency for AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "SAFE-230-C1",
      "type": "single",
      "question": "Which statement about Safety cases in “AI Safety & Assurance” is correct?",
      "options": [
        "Correct: Safety cases is central to this competence and applied correctly in practice",
        "The Safety cases concept does not apply to this field at all",
        "Only model size determines Safety cases quality",
        "There is no way to assess or improve Safety cases"
      ],
      "answer": 0,
      "explanation": "Safety cases is a core competency for AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "SAFE-230-C2",
      "type": "single",
      "question": "Which statement about Assurance in “AI Safety & Assurance” is correct?",
      "options": [
        "Correct: Assurance is central to this competence and applied correctly in practice",
        "The Assurance concept does not apply to this field at all",
        "Only model size determines Assurance quality",
        "There is no way to assess or improve Assurance"
      ],
      "answer": 0,
      "explanation": "Assurance is a core competency for AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "SAFE-230-C3",
      "type": "single",
      "question": "Which statement about Failure modes in “AI Safety & Assurance” is correct?",
      "options": [
        "Correct: Failure modes is central to this competence and applied correctly in practice",
        "The Failure modes concept does not apply to this field at all",
        "Only model size determines Failure modes quality",
        "There is no way to assess or improve Failure modes"
      ],
      "answer": 0,
      "explanation": "Failure modes is a core competency for AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "SAFE-230-C1",
      "type": "single",
      "question": "Which statement about Adversarial robustness in “AI Safety & Assurance” is correct?",
      "options": [
        "Correct: Adversarial robustness is central to this competence and applied correctly in practice",
        "The Adversarial robustness concept does not apply to this field at all",
        "Only model size determines Adversarial robustness quality",
        "There is no way to assess or improve Adversarial robustness"
      ],
      "answer": 0,
      "explanation": "Adversarial robustness is a core competency for AI Safety & Assurance.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "SAFE-230-C2",
      "type": "single",
      "question": "Which statement about Red-teaming in “AI Safety & Assurance” is correct?",
      "options": [
        "Correct: Red-teaming is central to this competence and applied correctly in practice",
        "The Red-teaming concept does not apply to this field at all",
        "Only model size determines Red-teaming quality",
        "There is no way to assess or improve Red-teaming"
      ],
      "answer": 0,
      "explanation": "Red-teaming is a core competency for AI Safety & Assurance.",
      "points": 1
    }
  ]
},
{
  "id": "exam-algorithmic-transparency",
  "courseId": "algorithmic-transparency",
  "code": "ZL-EX-ALGORITHMI",
  "title": "Certificate of Competence — Measure and mitigate bias, and make AI decisions explainable",
  "qualificationCode": "ZL-QUAL-TRANSP-240",
  "level": "Level 5 (RQF) • EQF 6",
  "credits": 11,
  "durationMinutes": 60,
  "passMark": 75,
  "distinctionMark": 90,
  "totalQuestions": 8,
  "shuffle": true,
  "proctored": true,
  "attemptsAllowed": 3,
  "validForMonths": 24,
  "awardingBody": "ZimLink Academy — Accredited Competence Centre",
  "description": "Scenario-based qualifying exam for Fairness & Transparency in AI. Tests applied understanding rather than recall.",
  "instructions": [
    "75 minutes, 8 questions.",
    "Pass 75% (6/8). Proctored."
  ],
  "competencies": [
    {
      "code": "TRANSP-240-C1",
      "title": "Fairness metrics & audit",
      "weight": 40
    },
    {
      "code": "TRANSP-240-C2",
      "title": "Bias mitigation",
      "weight": 30
    },
    {
      "code": "TRANSP-240-C3",
      "title": "Explainability",
      "weight": 30
    }
  ],
  "questions": [
    {
      "id": "q1",
      "competency": "TRANSP-240-C1",
      "type": "single",
      "question": "Which statement about Fairness metrics in “Fairness & Transparency in AI” is correct?",
      "options": [
        "Correct: Fairness metrics is central to this competence and applied correctly in practice",
        "The Fairness metrics concept does not apply to this field at all",
        "Only model size determines Fairness metrics quality",
        "There is no way to assess or improve Fairness metrics"
      ],
      "answer": 0,
      "explanation": "Fairness metrics is a core competency for Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q2",
      "competency": "TRANSP-240-C2",
      "type": "single",
      "question": "Which statement about Bias audit in “Fairness & Transparency in AI” is correct?",
      "options": [
        "Correct: Bias audit is central to this competence and applied correctly in practice",
        "The Bias audit concept does not apply to this field at all",
        "Only model size determines Bias audit quality",
        "There is no way to assess or improve Bias audit"
      ],
      "answer": 0,
      "explanation": "Bias audit is a core competency for Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q3",
      "competency": "TRANSP-240-C3",
      "type": "single",
      "question": "Which statement about Mitigation in “Fairness & Transparency in AI” is correct?",
      "options": [
        "Correct: Mitigation is central to this competence and applied correctly in practice",
        "The Mitigation concept does not apply to this field at all",
        "Only model size determines Mitigation quality",
        "There is no way to assess or improve Mitigation"
      ],
      "answer": 0,
      "explanation": "Mitigation is a core competency for Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q4",
      "competency": "TRANSP-240-C1",
      "type": "single",
      "question": "Which statement about SHAP/LIME in “Fairness & Transparency in AI” is correct?",
      "options": [
        "Correct: SHAP/LIME is central to this competence and applied correctly in practice",
        "The SHAP/LIME concept does not apply to this field at all",
        "Only model size determines SHAP/LIME quality",
        "There is no way to assess or improve SHAP/LIME"
      ],
      "answer": 0,
      "explanation": "SHAP/LIME is a core competency for Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q5",
      "competency": "TRANSP-240-C2",
      "type": "single",
      "question": "Which statement about Explainability in “Fairness & Transparency in AI” is correct?",
      "options": [
        "Correct: Explainability is central to this competence and applied correctly in practice",
        "The Explainability concept does not apply to this field at all",
        "Only model size determines Explainability quality",
        "There is no way to assess or improve Explainability"
      ],
      "answer": 0,
      "explanation": "Explainability is a core competency for Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q6",
      "competency": "TRANSP-240-C3",
      "type": "single",
      "question": "Which statement about Fairness metrics in “Fairness & Transparency in AI” is correct?",
      "options": [
        "Correct: Fairness metrics is central to this competence and applied correctly in practice",
        "The Fairness metrics concept does not apply to this field at all",
        "Only model size determines Fairness metrics quality",
        "There is no way to assess or improve Fairness metrics"
      ],
      "answer": 0,
      "explanation": "Fairness metrics is a core competency for Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q7",
      "competency": "TRANSP-240-C1",
      "type": "single",
      "question": "Which statement about Bias audit in “Fairness & Transparency in AI” is correct?",
      "options": [
        "Correct: Bias audit is central to this competence and applied correctly in practice",
        "The Bias audit concept does not apply to this field at all",
        "Only model size determines Bias audit quality",
        "There is no way to assess or improve Bias audit"
      ],
      "answer": 0,
      "explanation": "Bias audit is a core competency for Fairness & Transparency in AI.",
      "points": 1
    },
    {
      "id": "q8",
      "competency": "TRANSP-240-C2",
      "type": "single",
      "question": "Which statement about Mitigation in “Fairness & Transparency in AI” is correct?",
      "options": [
        "Correct: Mitigation is central to this competence and applied correctly in practice",
        "The Mitigation concept does not apply to this field at all",
        "Only model size determines Mitigation quality",
        "There is no way to assess or improve Mitigation"
      ],
      "answer": 0,
      "explanation": "Mitigation is a core competency for Fairness & Transparency in AI.",
      "points": 1
    }
  ]
}
];
