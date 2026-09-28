// _enrich-ethics.js — Ethics course enrichment: notes, exercises, quizzes & projects
// Exercises use safe grammar: arithmetic (+,-,*,/,%,**), sum(), len(), abs(), string concat, indexing

export const ethicsEnrichment = {

  // ═══════════════════════════════════════════════
  // AI ETHICS
  // ═══════════════════════════════════════════════
  "ai-ethics": {
    notes: {
      c1: {
        title: "Core Ethics Principles for AI",
        intro: "AI systems increasingly shape decisions that affect human lives. A robust ethical framework ensures these systems are developed and deployed responsibly.",
        sections: [
          {
            heading: "Foundational Ethical Principles",
            body: "Five principles form the bedrock of AI ethics. Beneficence requires AI to actively promote well-being. Non-maleficence demands systems avoid causing harm. Autonomy preserves human decision-making power. Justice ensures fair distribution of benefits and risks. Explainability mandates that AI decisions be understandable.",
            bullets: [
              "Beneficence: AI should actively do good",
              "Non-maleficence: avoid causing harm to individuals or groups",
              "Autonomy: humans must retain meaningful control",
              "Justice: fair distribution of benefits and burdens",
              "Explainability: decisions must be interpretable"
            ]
          },
          {
            heading: "Fairness Metrics",
            body: "Fairness is mathematised through specific metrics. Demographic parity requires equal positive-prediction rates across groups. Equalised odds demands equal true-positive and false-positive rates. Individual fairness means similar individuals receive similar outcomes.",
            bullets: [
              "Demographic parity: equal positive-prediction rates across groups",
              "Equalised odds: equal TPR and FPR across groups",
              "Individual fairness: similar individuals → similar outcomes",
              "No single metric captures all notions of fairness"
            ]
          },
          {
            heading: "Bias Detection Methods",
            body: "Bias enters through training data, feature selection, and objective functions. Detection methods include disparate impact analysis, statistical parity testing, and error-rate comparison across demographic groups.",
            bullets: [
              "Disparate impact ratio: compare selection rates between groups",
              "Statistical parity test: p-value for group differences",
              "Error-rate comparison: accuracy vs recall per group",
              "Proxy variable detection: identify correlated features"
            ]
          }
        ],
        tip: "When evaluating an AI system, always ask: who benefits, who is harmed, and who decides?"
      }
    },
    exercises: [
      {
        chId: "c1", title: "Fairness Gap",
        instructions: "Group A has a positive-prediction rate of 0.65. Group B has 0.45. Compute the absolute fairness gap.",
        code: "a_rate = 0.65\nb_rate = 0.45\nprint(abs(a_rate - b_rate))",
        expected: "0.2", hint: "abs() computes absolute difference"
      },
      {
        chId: "c1", title: "Violation Count",
        instructions: "A system flags ethical violations as 1 or 0 across 10 audit checks. Count total violations.",
        code: "flags = [1, 0, 1, 1, 0, 0, 1, 1, 0, 1]\nprint(sum(flags))",
        expected: "6", hint: "sum() adds up all 1s in the list"
      },
      {
        chId: "c1", title: "Disparate Impact Ratio",
        instructions: "Selection rate for Group A is 0.8. Selection rate for Group B is 0.4. Compute the ratio A/B.",
        code: "a = 0.8\nb = 0.4\nprint(a / b)",
        expected: "2", hint: "A ratio > 1.25 often signals disparate impact"
      }
    ],
    quizzes: [
      { chId: "c1", question: "Which principle requires AI to actively promote well-being?", options: ["Autonomy", "Non-maleficence", "Beneficence", "Transparency"], answer: 2 },
      { chId: "c1", question: "Demographic parity requires:", options: ["Equal accuracy across groups", "Equal positive-prediction rates across groups", "Equal model sizes for all groups", "No predictions for minority groups"], answer: 1 }
    ],
    projects: [
      {
        title: "AI Ethics Impact Assessment",
        brief: "Evaluate a hypothetical hiring AI for ethical risks. Identify affected stakeholders, assess fairness metrics, and propose mitigation strategies.",
        objectives: ["Identify 4 stakeholder groups", "Compute demographic parity across 3 scenarios", "Document 3 potential harms", "Propose 2 mitigation strategies"],
        deliverables: ["Stakeholder impact table", "Fairness metric calculations", "Risk register", "Mitigation plan"],
        starterCode: "# AI Ethics Impact Assessment\nstakeholders = [\"applicants\", \"employer\", \"rejected\", \"regulator\"]\nprint(\"Stakeholders:\", len(stakeholders))\n\ngroup_a_rate = 0.7\ngroup_b_rate = 0.5\ngap = abs(group_a_rate - group_b_rate)\nprint(\"Fairness gap:\", gap)"
      }
    ]
  },

  // ═══════════════════════════════════════════════
  // AI GOVERNANCE
  // ═══════════════════════════════════════════════
  "ai-governance": {
    notes: {
      c1: {
        title: "The EU AI Act & Risk Classification",
        intro: "Regulation is catching up with technology. The EU AI Act is the world's first comprehensive AI law, classifying systems by risk and imposing obligations accordingly.",
        sections: [
          {
            heading: "Risk Tiers in the EU AI Act",
            body: "The Act defines four risk levels. Unacceptable risk systems are banned outright (social scoring, real-time mass surveillance). High-risk systems face strict requirements. Limited-risk systems need transparency obligations. Minimal-risk systems are largely unregulated.",
            bullets: [
              "Unacceptable risk: banned (social scoring, subliminal manipulation)",
              "High risk: strict requirements (hiring, credit scoring, law enforcement)",
              "Limited risk: transparency obligations (chatbots, deepfakes)",
              "Minimal risk: largely unregulated (spam filters, games)"
            ]
          },
          {
            heading: "High-Risk Obligations",
            body: "High-risk AI must undergo conformity assessments before market entry. Developers must maintain technical documentation, implement human oversight, and ensure robust data governance. Post-market monitoring is mandatory.",
            bullets: [
              "Conformity assessment before deployment",
              "Technical documentation and logging",
              "Human oversight mechanisms",
              "Data governance and quality requirements",
              "Post-market monitoring and incident reporting"
            ]
          },
          {
            heading: "Governance Structures",
            body: "Effective governance requires organisational roles (AI ethics board, compliance officer), documented processes (risk assessment, impact assessment), and technical safeguards (audit trails, monitoring dashboards).",
            bullets: [
              "AI ethics board or committee for oversight",
              "Designated compliance officer or team",
              "Documented risk assessment processes",
              "Regular audits and impact assessments"
            ]
          }
        ],
        tip: "Treat the EU AI Act as a floor, not a ceiling — aim for best practice, not minimum compliance."
      },
      c2: {
        title: "Model Cards, Documentation & Compliance",
        intro: "Responsible AI deployment requires thorough documentation. Model cards, datasheets, and compliance checklists ensure transparency and accountability throughout the AI lifecycle.",
        sections: [
          {
            heading: "Model Cards",
            body: "Model cards are structured documents that describe a model's intended use, training data, performance metrics, and known limitations. They enable informed deployment decisions and support accountability.",
            bullets: [
              "Intended use and out-of-scope applications",
              "Training data description and demographics",
              "Performance metrics across subgroups",
              "Known limitations and ethical considerations",
              "Version history and update log"
            ]
          },
          {
            heading: "Datasheets for Datasets",
            body: "Datasheets complement model cards by documenting datasets: collection methods, composition, preprocessing steps, and known biases. They enable reproducibility and support bias auditing.",
            bullets: [
              "Data collection methodology and sources",
              "Demographic composition and coverage",
              "Preprocessing and labelling procedures",
              "Known gaps, biases, and limitations"
            ]
          },
          {
            heading: "Compliance Checklists",
            body: "Systematic checklists translate abstract principles into actionable requirements. Each item maps to a specific regulation or standard, with evidence requirements and responsible parties.",
            bullets: [
              "Map requirements to specific regulations (EU AI Act, NIST AI RMF)",
              "Assign responsibility for each compliance item",
              "Evidence requirements: what proves compliance",
              "Regular review cycle as regulations evolve"
            ]
          }
        ],
        tip: "A model card written today saves a compliance crisis tomorrow — document before you deploy."
      }
    },
    exercises: [
      {
        chId: "c1", title: "Risk Score",
        instructions: "A system has 3 risk factors, each with severity 4. Compute total risk score.",
        code: "factors = 3\nseverity = 4\nprint(factors * severity)",
        expected: "12", hint: "Multiply risk factors by severity"
      },
      {
        chId: "c1", title: "Compliance Checklist",
        instructions: "10 compliance items, 3 failed. How many passed?",
        code: "total = 10\nfailed = 3\nprint(total - failed)",
        expected: "7", hint: "Subtract failed items from total"
      },
      {
        chId: "c2", title: "Model Card Sections",
        instructions: "A model card has 5 required sections. Documented 3. Coverage percentage?",
        code: "total = 5\ndocumented = 3\nprint(documented * 20)",
        expected: "60", hint: "Each section represents 20% of the total"
      }
    ],
    quizzes: [
      { chId: "c1", question: "Under the EU AI Act, hiring algorithms are classified as:", options: ["Minimal risk", "Limited risk", "High risk", "Unacceptable risk"], answer: 2 },
      { chId: "c1", question: "Social scoring systems under the EU AI Act are:", options: ["High risk", "Limited risk", "Banned (unacceptable risk)", "Unregulated"], answer: 2 },
      { chId: "c2", question: "A model card should document:", options: ["Only accuracy scores", "Intended use, data, limitations, and ethics", "Just the training code", "Marketing claims"], answer: 1 },
      { chId: "c2", question: "Datasheets for datasets primarily document:", options: ["Model architecture", "Data collection, composition, and biases", "Deployment costs", "Team member names"], answer: 1 }
    ],
    projects: [
      {
        title: "Governance Framework Design",
        brief: "Design a governance framework for an organisation deploying AI in healthcare. Cover risk classification, documentation, and compliance processes.",
        objectives: ["Classify 3 healthcare AI systems by EU AI Act risk tier", "Draft model card template with 5 sections", "Create 8-item compliance checklist", "Define review cycle and responsible roles"],
        deliverables: ["Risk classification table", "Model card template", "Compliance checklist", "Governance process diagram"],
        starterCode: "# Governance Framework\nsystems = 3\ntiers = [\"high\", \"high\", \"limited\"]\nprint(\"Systems under review:\", systems)\n\nchecklist_items = 8\npassed = 5\nprint(\"Compliance items:\", checklist_items)\nprint(\"Passed:\", passed)\nprint(\"Failed:\", checklist_items - passed)"
      }
    ]
  },

  // ═══════════════════════════════════════════════
  // DATA PRIVACY IN AI
  // ═══════════════════════════════════════════════
  "data-privacy-ai": {
    notes: {
      c1: {
        title: "GDPR Principles & Data Minimisation",
        intro: "The General Data Protection Regulation (GDPR) sets the global gold standard for data privacy. Its principles directly constrain how AI systems collect, process, and store personal data.",
        sections: [
          {
            heading: "Core GDPR Principles",
            body: "GDPR is built on seven principles: lawfulness/fairness/transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity/confidentiality, and accountability.",
            bullets: [
              "Lawfulness, fairness, transparency: process data legally and openly",
              "Purpose limitation: collect data only for specified purposes",
              "Data minimisation: collect only what is strictly necessary",
              "Accuracy: keep personal data accurate and up to date",
              "Accountability: demonstrate compliance with all principles"
            ]
          },
          {
            heading: "Data Minimisation in AI",
            body: "AI systems often tempt developers to collect maximum data 'just in case.' Data minimisation requires collecting only what is necessary for the stated purpose. Feature selection and dimensionality reduction are technical implementations of this principle.",
            bullets: [
              "Collect only data needed for the defined purpose",
              "Feature selection: choose only relevant variables",
              "Dimensionality reduction: compress without losing signal",
              "Regular data audits: delete what is no longer needed"
            ]
          },
          {
            heading: "Legal Bases for Processing",
            body: "GDPR requires a legal basis for every data processing activity. The six bases are: consent, contract, legal obligation, vital interests, public task, and legitimate interests. AI training often relies on consent or legitimate interests.",
            bullets: [
              "Consent: explicit, informed, freely given agreement",
              "Contract: necessary for contractual performance",
              "Legitimate interests: balanced against data subject rights",
              "Each processing activity must map to exactly one basis"
            ]
          }
        ],
        tip: "When designing an AI system, start by listing every piece of data you need and justify each one."
      },
      c2: {
        title: "Consent, Data Rights & Privacy-Preserving Techniques",
        intro: "Data subjects have enforceable rights over their personal data. Privacy-preserving AI techniques enable useful computation while protecting individual privacy.",
        sections: [
          {
            heading: "Data Subject Rights",
            body: "GDPR grants individuals eight key rights: access, rectification, erasure (right to be forgotten), restriction, portability, objection, automated decision-making, and notification of breaches.",
            bullets: [
              "Right of access: obtain a copy of all personal data held",
              "Right to erasure: request deletion of personal data",
              "Right to portability: receive data in machine-readable format",
              "Right to object: stop processing based on legitimate interests",
              "Right against automated decisions: contest solely automated decisions"
            ]
          },
          {
            heading: "Privacy-Preserving AI",
            body: "Technical approaches enable AI training and inference without exposing raw personal data. Differential privacy adds calibrated noise. Federated learning keeps data on local devices. Homomorphic encryption allows computation on encrypted data.",
            bullets: [
              "Differential privacy: adds noise to prevent individual identification",
              "Federated learning: trains on decentralised data without centralising it",
              "Homomorphic encryption: compute on ciphertext without decryption",
              "K-anonymity: ensures each record is indistinguishable from k-1 others"
            ]
          },
          {
            heading: "Privacy Impact Assessments",
            body: "A Data Protection Impact Assessment (DPIA) is required for high-risk processing. It identifies risks to data subjects and documents mitigation measures before processing begins.",
            bullets: [
              "Mandatory for high-risk processing under GDPR Article 35",
              "Identify and assess risks to data subjects",
              "Document mitigation measures and residual risk",
              "Consult with data protection authority if risk remains high"
            ]
          }
        ],
        tip: "Privacy by design is not optional — build protection into the architecture from the start."
      }
    },
    exercises: [
      {
        chId: "c1", title: "Data Reduction",
        instructions: "A dataset has 25 features. After minimisation, 18 are retained. How many were removed?",
        code: "original = 25\nretained = 18\nprint(original - retained)",
        expected: "7", hint: "Subtract retained from original"
      },
      {
        chId: "c1", title: "Legal Basis Count",
        instructions: "GDPR defines 6 legal bases for processing. An AI system uses 2. How many unused bases?",
        code: "total = 6\nused = 2\nprint(total - used)",
        expected: "4", hint: "Subtract used bases from total"
      },
      {
        chId: "c2", title: "Consent Rate",
        instructions: "1000 users approached, 820 consented. What is the consent rate as a decimal?",
        code: "consented = 820\ntotal = 1000\nprint(consented / total)",
        expected: "0.82", hint: "Divide consents by total users"
      },
      {
        chId: "c2", title: "Privacy Budget",
        instructions: "Differential privacy budget epsilon is 1.5. After 3 queries, budget consumed is 0.9. Remaining?",
        code: "budget = 1.5\nconsumed = 0.9\nprint(budget - consumed)",
        expected: "0.6", hint: "Subtract consumed budget from total"
      }
    ],
    quizzes: [
      { chId: "c1", question: "GDPR data minimisation requires:", options: ["Collecting all available data", "Collecting only what is necessary for the purpose", "Storing data indefinitely", "Sharing data with all third parties"], answer: 1 },
      { chId: "c1", question: "Which GDPR principle requires demonstrating compliance?", options: ["Purpose limitation", "Accuracy", "Accountability", "Storage limitation"], answer: 2 },
      { chId: "c2", question: "Differential privacy protects individuals by:", options: ["Encrypting all data", "Adding calibrated noise to results", "Deleting the dataset", "Using only public data"], answer: 1 },
      { chId: "c2", question: "The right to erasure is also known as:", options: ["Right to access", "Right to portability", "Right to be forgotten", "Right to object"], answer: 2 }
    ],
    projects: [
      {
        title: "Privacy Impact Assessment",
        brief: "Conduct a DPIA for an AI system that analyses medical records. Map data flows, assess risks, and propose privacy-preserving countermeasures.",
        objectives: ["Map 4 data flow stages", "Identify 3 privacy risks per stage", "Propose 2 technical mitigations", "Compute privacy budget allocation"],
        deliverables: ["Data flow diagram", "Risk assessment matrix", "Technical mitigation plan", "DPIA summary report"],
        starterCode: "# Privacy Impact Assessment\ndata_stages = 4\nrisks_per_stage = 3\ntotal_risks = data_stages * risks_per_stage\nprint(\"Data stages:\", data_stages)\nprint(\"Total risks identified:\", total_risks)\n\nepsilon_budget = 2.0\nqueries_planned = 4\nprint(\"Budget per query:\", epsilon_budget / queries_planned)"
      }
    ]
  },

  // ═══════════════════════════════════════════════
  // AI SAFETY
  // ═══════════════════════════════════════════════
  "ai-safety": {
    notes: {
      c1: {
        title: "Alignment & the Control Problem",
        intro: "AI safety ensures AI systems behave as intended. Alignment research asks: how do we specify what we want, and how do we ensure AI actually does it?",
        sections: [
          {
            heading: "The Alignment Problem",
            body: "Alignment is the challenge of ensuring AI systems pursue goals that match human values and intentions. Misalignment can be intentional (adversarial misuse) or unintentional (specification gaming, reward hacking).",
            bullets: [
              "Intent alignment: AI does what the developer intended",
              "Value alignment: AI's values match human values",
              "Specification gaming: AI exploits loopholes in objectives",
              "Reward hacking: AI finds unintended ways to maximise reward"
            ]
          },
          {
            heading: "The Control Problem",
            body: "The control problem asks: if an AI system becomes more capable than expected, how do we maintain meaningful human control? Approaches include corrigibility, capability restriction, and interpretability.",
            bullets: [
              "Corrigibility: AI allows itself to be corrected or shut down",
              "Capability restriction: limiting what the AI can do",
              "Interpretability: understanding the AI's reasoning",
              "Containment: preventing unauthorised access or action"
            ]
          },
          {
            heading: "Safety Levels",
            body: "AI safety research spans multiple scales. Near-term safety addresses current deployed systems (fairness, robustness, security). Long-term safety considers hypothetical advanced AI (alignment, control, existential risk).",
            bullets: [
              "Near-term: robustness, fairness, adversarial resistance",
              "Medium-term: value learning from human feedback",
              "Long-term: corrigibility, alignment of superintelligent systems",
              "Cross-cutting: interpretability, verification, monitoring"
            ]
          }
        ],
        tip: "A safe AI is not just one that works correctly — it is one that fails safely."
      },
      c2: {
        title: "Interpretability, Robustness & Monitoring",
        intro: "Understanding how AI reaches decisions is essential for safety. Interpretability methods reveal internal reasoning, while robustness testing ensures systems behave reliably under stress.",
        sections: [
          {
            heading: "Interpretability Methods",
            body: "Interpretability operates at three levels. Global interpretability explains overall model behaviour. Local interpretability explains individual predictions. Mechanistic interpretability reverse-engineers internal computations.",
            bullets: [
              "Global: feature importance, partial dependence plots",
              "Local: SHAP values, LIME, counterfactual explanations",
              "Mechanistic: circuit analysis, activation patterns",
              "Intrinsically interpretable: linear models, decision trees, rule lists"
            ]
          },
          {
            heading: "Robustness Testing",
            body: "Robustness ensures AI systems perform reliably under perturbations. Adversarial testing deliberately attacks inputs. Stress testing pushes systems to operational limits. Distribution shift testing evaluates performance when data patterns change.",
            bullets: [
              "Adversarial testing: small input perturbations that cause errors",
              "Stress testing: extreme inputs and high-load conditions",
              "Distribution shift: training vs deployment data differences",
              "Edge cases: rare but critical failure scenarios"
            ]
          },
          {
            heading: "Continuous Monitoring",
            body: "Safety does not end at deployment. Continuous monitoring tracks performance drift, fairness degradation, and anomalous behaviour in production systems.",
            bullets: [
              "Performance metrics: accuracy, latency, error rates over time",
              "Fairness metrics: demographic parity trends across groups",
              "Data drift: detection of input distribution changes",
              "Incident response: protocols for handling safety failures"
            ]
          }
        ],
        tip: "You cannot fix what you cannot see — invest in monitoring before scaling."
      }
    },
    exercises: [
      {
        chId: "c1", title: "Safety Margin",
        instructions: "Maximum allowable failure rate is 5%. Actual failure rate is 2%. Compute the safety margin.",
        code: "max_rate = 5\nactual_rate = 2\nprint(max_rate - actual_rate)",
        expected: "3", hint: "Subtract actual from maximum allowable"
      },
      {
        chId: "c1", title: "Alignment Score",
        instructions: "Intent score is 95. Behaviour score is 88. Compute the average alignment score.",
        code: "intent = 95\nbehaviour = 88\nprint((intent + behaviour) / 2)",
        expected: "91.5", hint: "Average the two alignment dimensions"
      },
      {
        chId: "c2", title: "Interpretability Coverage",
        instructions: "Model has 20 features. 15 have SHAP explanations. What percentage is covered?",
        code: "total = 20\nexplained = 15\nprint(explained * 5)",
        expected: "75", hint: "Each explained feature is 5% of total"
      },
      {
        chId: "c2", title: "Adversarial Success Rate",
        instructions: "100 adversarial examples tested, 8 bypassed defences. What is the bypass rate as a decimal?",
        code: "bypassed = 8\ntotal = 100\nprint(bypassed / total)",
        expected: "0.08", hint: "Divide bypassed by total attempts"
      }
    ],
    quizzes: [
      { chId: "c1", question: "The alignment problem asks:", options: ["How to make AI faster", "How to ensure AI pursues intended goals", "How to reduce model size", "How to increase training data"], answer: 1 },
      { chId: "c1", question: "Corrigibility means:", options: ["AI cannot be corrected", "AI allows itself to be corrected or shut down", "AI corrects other systems", "AI ignores human input"], answer: 1 },
      { chId: "c2", question: "SHAP values provide:", options: ["Global model accuracy", "Feature-level contribution to individual predictions", "Training speed", "Memory usage"], answer: 1 },
      { chId: "c2", question: "Distribution shift occurs when:", options: ["The model is retrained", "Deployed data differs from training data", "Hardware changes", "Code is updated"], answer: 1 }
    ],
    projects: [
      {
        title: "AI Safety Evaluation Report",
        brief: "Evaluate an AI system for alignment, robustness, and interpretability. Design tests, compute safety metrics, and document findings.",
        objectives: ["Define 3 alignment criteria and score each", "Design 4 robustness test scenarios", "Assess interpretability coverage", "Document 2 safety recommendations"],
        deliverables: ["Alignment scoring table", "Robustness test plan", "Interpretability assessment", "Safety recommendation document"],
        starterCode: "# AI Safety Evaluation\nintent_score = 90\nbehaviour_score = 85\nalignment = (intent_score + behaviour_score) / 2\nprint(\"Alignment score:\", alignment)\n\ntotal_features = 25\nexplained = 18\ncoverage = explained * 4\nprint(\"Interpretability coverage:\", coverage, \"%\")"
      }
    ]
  },

  // ═══════════════════════════════════════════════
  // ALGORITHMIC TRANSPARENCY
  // ═══════════════════════════════════════════════
  "algorithmic-transparency": {
    notes: {
      c1: {
        title: "Explainability Methods & Techniques",
        intro: "Algorithmic transparency ensures that AI decisions can be understood, audited, and challenged. Explainability is the technical foundation that makes transparency possible.",
        sections: [
          {
            heading: "Why Transparency Matters",
            body: "Transparency enables accountability: stakeholders can verify that AI systems operate fairly and as intended. Without it, errors go undetected, biases persist unchecked, and affected individuals cannot challenge decisions.",
            bullets: [
              "Accountability: enables oversight of AI decisions",
              "Trust: users and subjects understand system behaviour",
              "Legal compliance: EU AI Act mandates transparency for high-risk systems",
              "Error detection: human review catches failures algorithms miss"
            ]
          },
          {
            heading: "Model-Agnostic Explanations",
            body: "SHAP (SHapley Additive exPlanations) assigns each feature a contribution value for every prediction. LIME approximates the model locally with an interpretable surrogate. Both work with any model type.",
            bullets: [
              "SHAP: game-theory-based feature attribution for each prediction",
              "LIME: local surrogate model approximating black-box behaviour",
              "Counterfactual explanations: 'what would need to change?'",
              "Feature importance: global ranking of input influence"
            ]
          },
          {
            heading: "Inherently Interpretable Models",
            body: "Some models are transparent by design. Linear regression, decision trees, rule lists, and k-nearest neighbours produce human-readable outputs. The accuracy-interpretability trade-off is often overstated.",
            bullets: [
              "Linear regression: coefficients explain feature influence",
              "Decision trees: branching rules mirror human reasoning",
              "Rule lists: IF-THEN rules are directly readable",
              "k-NN: predictions based on explicit nearest neighbours"
            ]
          }
        ],
        tip: "Start with an interpretable model — only use black-boxes when transparency demands it."
      },
      c2: {
        title: "Audit Frameworks & Disclosure Requirements",
        intro: "Transparency is not just a technical goal — it requires organisational processes, disclosure standards, and audit mechanisms that hold AI systems accountable throughout their lifecycle.",
        sections: [
          {
            heading: "Algorithmic Auditing",
            body: "Audits systematically evaluate AI systems for fairness, accuracy, and compliance. Internal audits are continuous and operational. External audits provide independent verification. Third-party audits offer the highest credibility.",
            bullets: [
              "Internal audit: continuous operational monitoring",
              "External audit: independent third-party evaluation",
              "Pre-deployment audit: validate before production",
              "Post-deployment audit: verify ongoing performance",
              "Red-teaming: adversarial testing for safety failures"
            ]
          },
          {
            heading: "Disclosure Standards",
            body: "Transparency requires structured disclosure at multiple levels. System-level disclosure covers the AI's purpose and capabilities. Decision-level disclosure explains individual outcomes. User-facing disclosure ensures affected parties understand how decisions are made.",
            bullets: [
              "System cards: describe model purpose, training, and limitations",
              "Decision explanations: individual prediction reasoning",
              "User notices: inform people when AI is involved",
              "Regulatory filings: compliance reports for authorities"
            ]
          },
          {
            heading: "Transparency vs Confidentiality",
            body: "Transparency must be balanced against intellectual property, security, and privacy. The key is proportional disclosure: enough to enable accountability without compromising legitimate interests.",
            bullets: [
              "Proportional disclosure: match transparency to stakeholder needs",
              "Trade secrets: protect model details while enabling audit",
              "Security: avoid revealing attack surfaces",
              "Privacy: explain decisions without exposing individual data"
            ]
          }
        ],
        tip: "Transparency without accountability is just disclosure — pair transparency with oversight mechanisms."
      }
    },
    exercises: [
      {
        chId: "c1", title: "SHAP Coverage",
        instructions: "Model has 12 features. SHAP explanations computed for 9. Coverage as a percentage?",
        code: "features = 12\nexplained = 9\nprint(explained * 100 // features)",
        expected: "75", hint: "Multiply ratio by 100 to get percentage"
      },
      {
        chId: "c1", title: "Explanation Time",
        instructions: "LIME generates 50 explanations at 2 seconds each. Total time?",
        code: "explanations = 50\nseconds_each = 2\nprint(explanations * seconds_each)",
        expected: "100", hint: "Multiply explanations by time per explanation"
      },
      {
        chId: "c2", title: "Audit Scope",
        instructions: "System has 6 components. Audit covers 4. What percentage is audited?",
        code: "components = 6\naudited = 4\nprint(audited * 100 // components)",
        expected: "66", hint: "Compute percentage of components under audit"
      }
    ],
    quizzes: [
      { chId: "c1", question: "SHAP values are based on:", options: ["Decision trees only", "Game theory (Shapley values)", "Linear regression", "Neural network activations"], answer: 1 },
      { chId: "c1", question: "LIME works by:", options: ["Retraining the model", "Approximating the model locally with an interpretable surrogate", "Removing all features", "Using only training data"], answer: 1 },
      { chId: "c2", question: "Algorithmic auditing evaluates:", options: ["Only code quality", "Fairness, accuracy, and compliance of AI systems", "User interface design", "Server performance"], answer: 1 },
      { chId: "c2", question: "Proportional disclosure means:", options: ["Revealing everything", "Matching transparency to stakeholder needs", "Hiding all details", "Publishing raw source code"], answer: 1 }
    ],
    projects: [
      {
        title: "Transparency Report Generator",
        brief: "Create a transparency report for an AI system used in loan decisions. Document the system, explain decisions, and outline audit procedures.",
        objectives: ["Document system purpose and training data", "Create 5 individual decision explanations", "Design an 8-point audit checklist", "Draft a user-facing disclosure statement"],
        deliverables: ["System documentation", "Decision explanation samples", "Audit checklist", "User disclosure statement"],
        starterCode: "# Transparency Report Generator\nfeatures = 15\nshap_explained = 12\ncoverage = shap_explained * 100 // features\nprint(\"SHAP coverage:\", coverage, \"%\")\n\naudit_items = 8\ncompleted = 5\nprint(\"Audit items:\", audit_items)\nprint(\"Completed:\", completed)\nprint(\"Remaining:\", audit_items - completed)"
      }
    ]
  }

};
