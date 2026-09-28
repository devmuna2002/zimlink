export const foundationsCourses = [
  {
    id: "computational-thinking",
    slug: "computational-thinking",
    title: "Computational Thinking & Algorithms",
    short: "Think like a programmer: decompose, pattern-match, abstract, and design algorithms.",
    description: "Master the four pillars of computational thinking — decomposition, pattern recognition, abstraction, and algorithm design. Learn to read and write pseudocode, trace programs, and reason about correctness and efficiency before writing your first real application.",
    level: "Beginner",
    duration: "6 hours",
    hours: 6,
    xp: 1800,
    category: "Foundations",
    instructor: "Tatenda Moyo",
    instructorTitle: "Senior Software Engineer",
    instructorBio: "Software engineer who teaches problem-solving fundamentals to bootcamps and university cohorts.",
    instructorAvatar: "person-badge",
    rating: 4.7,
    students: 31050,
    icon: "bi-lightbulb",
    image: "cpu",
    color: "#0ea5e9",
    tags: ["Algorithms", "Problem Solving", "Pseudocode", "Logic"],
    prerequisites: [],
    learningOutcomes: [
      "Break complex problems into smaller, solvable sub-problems",
      "Recognise patterns and reuse known solutions",
      "Write and trace clear pseudocode",
      "Understand the difference between efficient and inefficient algorithms",
      "Use flowcharts and step-by-step reasoning to debug logic"
    ],
    skills: ["Decomposition", "Pattern Recognition", "Abstraction", "Algorithm Design"],
    difficulty: "Beginner-friendly, no coding required",
    resources: [
      { type: "pdf", title: "Problem-Solving Workbook", url: "/assets/pseudocode-workbook.pdf" },
      { type: "github", title: "Algorithm-Practice", url: "https://github.com/zimlink/algorithm-practice" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-CT-110",
      title: "Certificate of Competence — Computational Thinking",
      level: "Level 2",
      eqf: "EQF 3",
      rqf: "RQF Level 2",
      credits: 8,
      notionalHours: 25,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 2 / EQF 3",
      assessment: "45-min qualifying exam (75% pass)",
      competencies: [
        { code: "CT-110-C1", title: "Decompose problems", weight: 30 },
        { code: "CT-110-C2", title: "Read & write pseudocode", weight: 35 },
        { code: "CT-110-C3", title: "Assess algorithm efficiency", weight: 35 }
      ],
      examId: "exam-computational-thinking"
    },
    chapters: [
      {
        id: "c1",
        title: "Decomposition & Patterns",
        duration: "2 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Think in Steps", duration: "8:00", content: "The four pillars and why decomposition turns fear into a plan." },
          { id: "c1l2", type: "quiz", title: "Pillars Quiz", duration: "4 min", xp: 40, question: "Which pillar means spotting similarities across problems?", options: ["Decomposition", "Pattern recognition", "Abstraction", "Algorithm design"], answer: 1 },
          { id: "c1l3", type: "exercise", title: "Break Down a Task", duration: "10 min", xp: 80, instructions: "Write pseudocode to find the largest number in a list of 5 numbers.", language: "python", starterCode: "# pseudocode: largest = first item; loop rest and update\nlargest = 3\nnums = [3, 9, 2, 8, 5]\nfor n in nums:\n    if n > largest:\n        largest = n\nprint(largest)", solution: "largest = 3\nnums = [3, 9, 2, 8, 5]\nfor n in nums:\n    if n > largest:\n        largest = n\nprint(largest)", hint: "Initialize with the first element", tests: [{ expected: "9" }] }
        ]
      },
      {
        id: "c2",
        title: "Abstraction & Efficiency",
        duration: "2 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Big-O Intuition", duration: "9:00", content: "Linear vs quadratic growth, and why scale changes everything." },
          { id: "c2l2", type: "quiz", title: "Efficiency Quiz", duration: "4 min", xp: 40, question: "A loop inside a loop usually causes what type of growth?", options: ["Linear", "Quadratic", "Constant", "Logarithmic"], answer: 1 },
          { id: "c2l3", type: "exercise", title: "Count Steps", duration: "10 min", xp: 80, instructions: "Write pseudocode that prints every pair (i,j) from two lists, to demonstrate O(n²).", language: "python", starterCode: "a = [1, 2]\nb = [10, 20]\nfor i in a:\n    for j in b:\n        print(i, j)", solution: "a = [1, 2]\nb = [10, 20]\nfor i in a:\n    for j in b:\n        print(i, j)", hint: "Nested loops", tests: [{ expected: "1 10" }, { expected: "2 20" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-ct-110",
      title: "Algorithm Design Portfolio",
      description: "Write pseudocode + pseudocode-trace for 3 everyday automation problems (flight search, shopping basket, meeting scheduler), with efficiency notes.",
      duration: "1.5 hours",
      xp: 400,
      requirements: ["Decompose each problem", "Provide pseudocode", "State time complexity", "Include a worked trace"],
      deliverables: [{ type: "code", name: "solutions.md", description: "Pseudocode + traces" }]
    },
    advanced: {
      id: "adv-ct-110",
      title: "Advanced: Search & Sort Thinking",
      duration: "1.5 hours",
      xp: 250,
      lessons: [
        { id: "adv1", type: "video", title: "Binary Search Logic", duration: "9:00", content: "Divide-and-conquer search and why it needs sorted data." },
        { id: "adv2", type: "quiz", title: "Search Concepts", duration: "4 min", xp: 50, question: "Binary search cuts the remaining search space how?", options: ["In half each step", "By one", "By a random amount", "It does not"], answer: 0 }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Problem Solving Mindset", duration: "14:00", instructor: "Tatenda Moyo", topic: "Mindset" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["Junior Developer", "QA Engineer", "Analyst", "Tester"]
  },
  {
    id: "git-version-control",
    slug: "git-version-control",
    title: "Git & Version Control",
    short: "Track changes, collaborate with branches, and ship code confidently.",
    description: "Learn Git from first commit to pull requests. Master staging, branching, merging, rebasing, resolving conflicts, and working with GitHub in real team workflows.",
    level: "Beginner",
    duration: "5 hours",
    hours: 5,
    xp: 1500,
    category: "Foundations",
    instructor: "Nyasha Mutasa",
    instructorTitle: "Frontend Architect",
    instructorBio: "Ex-Verizon architect who has mentored engineers on version-control hygiene for a decade.",
    instructorAvatar: "person-badge",
    rating: 4.8,
    students: 40210,
    icon: "bi-git",
    image: "git",
    color: "#f05033",
    tags: ["Git", "GitHub", "Branching", "Collaboration", "CI"],
    prerequisites: [],
    learningOutcomes: [
      "Create repositories and make clear, atomic commits",
      "Branch, merge, and rebase with confidence",
      "Resolve merge conflicts cleanly",
      "Collaborate via pull requests and code review",
      "Undo mistakes safely (reset, revert, checkout)",
      "Use .gitignore and understand remotes"
    ],
    skills: ["Git Core", "Branching & Merging", "Conflict Resolution", "GitHub Workflows", "Rebase"],
    difficulty: "Beginner-friendly, terminal basics helpful",
    resources: [
      { type: "github", title: "Git-Playground", url: "https://github.com/zimlink/git-playground" },
      { type: "pdf", title: "Git Cheat Sheet", url: "/assets/git-cheatsheet.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-GIT-120",
      title: "Certificate of Competence — Git & Version Control",
      level: "Level 2",
      eqf: "EQF 3",
      rqf: "RQF Level 2",
      credits: 8,
      notionalHours: 20,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 2 / EQF 3",
      assessment: "45-min qualifying exam (75% pass)",
      competencies: [
        { code: "GIT-120-C1", title: "Repo & commit workflow", weight: 30 },
        { code: "GIT-120-C2", title: "Branching & merging", weight: 40 },
        { code: "GIT-120-C3", title: "Collaboration & undo", weight: 30 }
      ],
      examId: "exam-git"
    },
    chapters: [
      {
        id: "c1",
        title: "Commits & Branches",
        duration: "2 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Your First Commit", duration: "9:00", content: "git init, add, commit, status, log, and the three areas: working, staged, committed." },
          { id: "c1l2", type: "quiz", title: "Git Basics", duration: "4 min", xp: 40, question: "Which command stages changes for the next commit?", options: ["git add", "git push", "git stop", "git clone -only"], answer: 0 },
          { id: "c1l3", type: "exercise", title: "Branch & Switch", duration: "10 min", xp: 80, instructions: "Create and check out a branch named feature/login, then print the current branch.", language: "bash", starterCode: "git checkout -b feature/login\ngit branch --show-current", solution: "git checkout -b feature/login\ngit branch --show-current", hint: "-b creates and checks out", tests: [] }
        ]
      },
      {
        id: "c2",
        title: "Merge & Collaborate",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Pull Requests & Merge Conflicts", duration: "10:00", content: "Merging branches, resolving conflicts, and reviewing PRs on GitHub." },
          { id: "c2l2", type: "quiz", title: "Collaboration", duration: "4 min", xp: 40, question: "Which command fetches and merges the remote branch?", options: ["git pull", "git push", "git tag", "git stash"], answer: 0 },
          { id: "c2l3", type: "exercise", title: "Safely Undo", duration: "10 min", xp: 80, instructions: "Record the current branch then simulate a soft reset to undo the last commit but keep changes.", language: "bash", starterCode: "git branch --show-current\ngit log --oneline -3\ngit reset --soft HEAD~1\ngit log --oneline -2", solution: "git branch --show-current\ngit log --oneline -3\ngit reset --soft HEAD~1\ngit log --oneline -2", hint: "--soft keeps working tree", tests: [] }
        ]
      }
    ],
    capstone: {
      id: "capstone-git-120",
      title: "Team Workflow Simulation",
      description: "Simulate a two-dev feature branch workflow: branch, commit, open a PR, resolve a merge conflict, and integrate via merge.",
      duration: "1.5 hours",
      xp: 400,
      requirements: ["Create at least 3 branches", "Introduce and resolve a conflict", "Produce a clean commit history", "Document the workflow"],
      deliverables: [{ type: "code", name: "workflow.md", description: "Traced workflow + commands" }]
    },
    advanced: {
      id: "adv-git-120",
      title: "Advanced: Rebase & Interactive History",
      duration: "1.5 hours",
      xp: 250,
      lessons: [
        { id: "adv1", type: "video", title: "Clean History with Rebase", duration: "10:00", content: "Interactive rebase, squashing, and rewriting history safely." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Git Beyond Basics", duration: "16:00", instructor: "Nyasha Mutasa", topic: "History" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["Developer", "DevOps", "QA", "Release Engineer"]
  },
  {
    id: "computer-fundamentals",
    slug: "computer-fundamentals",
    title: "Computer Fundamentals & Command Line",
    short: "Understand how computers work and master the terminal.",
    description: "Demystify the machine: hardware, OS, memory, filesystems, processes, and the shell. Learn essential command-line skills that every developer uses daily.",
    level: "Beginner",
    duration: "5 hours",
    hours: 5,
    xp: 1500,
    category: "Foundations",
    instructor: "Anesu Ndlovu",
    instructorTitle: "Cloud Engineer",
    instructorBio: "Cloud engineer passionate about giving learners solid operating-system and shell foundations.",
    instructorAvatar: "person-badge",
    rating: 4.6,
    students: 28760,
    icon: "bi-pc-display",
    image: "cpu",
    color: "#64748b",
    tags: ["Hardware", "OS", "Command Line", "Filesystems"],
    prerequisites: [],
    learningOutcomes: [
      "Explain how CPU, memory, and storage interact",
      "Navigate and manage files with a shell",
      "Understand processes, permissions, and environment variables",
      "Pipe and redirect command output",
      "Troubleshoot common system issues"
    ],
    skills: ["Hardware Basics", "Shell & CLI", "File Management", "Processes & Permissions"],
    difficulty: "Beginner-friendly, no prerequisites",
    resources: [
      { type: "pdf", title: "CLI Commands Reference", url: "/assets/cli-reference.pdf" },
      { type: "github", title: "Shell-Practice", url: "https://github.com/zimlink/shell-practice" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-CF-130",
      title: "Certificate of Competence — Computer Fundamentals",
      level: "Level 2",
      eqf: "EQF 3",
      rqf: "RQF Level 2",
      credits: 8,
      notionalHours: 20,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 2 / EQF 3",
      assessment: "45-min qualifying exam (75% pass)",
      competencies: [
        { code: "CF-130-C1", title: "Hardware & OS concepts", weight: 30 },
        { code: "CF-130-C2", title: "Shell navigation & files", weight: 40 },
        { code: "CF-130-C3", title: "Processes & permissions", weight: 30 }
      ],
      examId: "exam-computer-fundamentals"
    },
    chapters: [
      {
        id: "c1",
        title: "Hardware & OS",
        duration: "2 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "How a Computer Works", duration: "9:00", content: "CPU, RAM, storage, buses, and the boot process." },
          { id: "c1l2", type: "quiz", title: "Hardware", duration: "4 min", xp: 40, question: "Where are active programs and data held while running?", options: ["RAM", "Hard disk (persistent storage)", "Monitor", "Keyboard buffer"], answer: 0 }
        ]
      },
      {
        id: "c2",
        title: "Command Line Mastery",
        duration: "3 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Navigating the Shell", duration: "10:00", content: "pwd, ls, cd, cat, mkdir, rm, pipes, and redirection." },
          { id: "c2l2", type: "exercise", title: "File Workflow", duration: "10 min", xp: 80, instructions: "Create a directory, a file inside it, list contents, print the file, then show permissions.", language: "bash", starterCode: "mkdir -p demo\ncd demo\necho hello > note.txt\nls -la\ncat note.txt\nchmod 600 note.txt\nls -l note.txt", solution: "mkdir -p demo\ncd demo\necho hello > note.txt\nls -la\ncat note.txt\nchmod 600 note.txt\nls -l note.txt", hint: "Redirect with > and view perms with ls -l", tests: [] },
          { id: "c2l3", type: "quiz", title: "CLI", duration: "4 min", xp: 40, question: "Which command lists directory contents?", options: ["ls", "cd", "cat", "rm"], answer: 0 }
        ]
      }
    ],
    capstone: {
      id: "capstone-cf-130",
      title: "System Setup & Automation",
      description: "Automate a reproducible dev-environment setup (directories, config files, aliases) using a single shell script.",
      duration: "1.5 hours",
      xp: 400,
      requirements: ["Use variables and functions", "Create directories & files", "Set permissions", "Make the script idempotent"],
      deliverables: [{ type: "code", name: "setup.sh", description: "Reproducible setup script" }]
    },
    advanced: {
      id: "adv-cf-130",
      title: "Advanced: Processes & System Monitoring",
      duration: "1.5 hours",
      xp: 250,
      lessons: [
        { id: "adv1", type: "video", title: "Processes & Signals", duration: "9:00", content: "ps, top, kill, backgrounding, and exit codes." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Terminal Speed Tricks", duration: "13:00", instructor: "Anesu Ndlovu", topic: "Shell" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["IT Support", "DevOps", "Developer", "SRE"]
  },
  {
    id: "problem-solving",
    slug: "problem-solving-programming",
    title: "Problem Solving with Programming",
    short: "Turn tricky problems into clean, working code — step by step.",
    description: "A practical guide to converting ambiguous problems into executables. Learn requirements analysis, test-driven thinking, debugging strategies, and how to structure solutions that are easy to read and maintain.",
    level: "Beginner",
    duration: "7 hours",
    hours: 7,
    xp: 2100,
    category: "Foundations",
    instructor: "Tatenda Moyo",
    instructorTitle: "Senior Software Engineer",
    instructorBio: "Equips early-career developers to think in tests and debug by first principles.",
    instructorAvatar: "person-badge",
    rating: 4.8,
    students: 25990,
    icon: "bi-puzzle",
    image: "cpu",
    color: "#10b981",
    tags: ["Problem Solving", "Testing", "Debugging", "Pseudocode"],
    prerequisites: ["computational-thinking", "python-programming"],
    learningOutcomes: [
      "Translate requirements into precise steps",
      "Write failing tests before implementation",
      "Apply systematic debugging (binary search the bug, logging, REPL)",
      "Refactor for readability and reuse",
      "Standardize with coding conventions"
    ],
    skills: ["Requirements Analysis", "TDD", "Debugging", "Refactoring"],
    difficulty: "Requires some programming basics",
    resources: [
      { type: "github", title: "Problem-Solving-Kata", url: "https://github.com/zimlink/problem-solving-kata" },
      { type: "pdf", title: "Debugging Checklist", url: "/assets/debugging-checklist.pdf" }
    ],
    qualifying: true,
    qualification: {
      code: "ZL-QUAL-PS-140",
      title: "Certificate of Competence — Problem Solving",
      level: "Level 3",
      eqf: "EQF 4",
      rqf: "RQF Level 3",
      credits: 10,
      notionalHours: 28,
      validityYears: 3,
      awardingBody: "ZimLink Academy — Accredited Competence Centre",
      regulated: "Aligned to RQF 3 / EQF 4",
      assessment: "50-min qualifying exam (75% pass)",
      competencies: [
        { code: "PS-140-C1", title: "Requirements analysis", weight: 30 },
        { code: "PS-140-C2", title: "Test-driven implementation", weight: 35 },
        { code: "PS-140-C3", title: "Debugging & refactoring", weight: 35 }
      ],
      examId: "exam-problem-solving"
    },
    chapters: [
      {
        id: "c1",
        title: "From Problem to Plan",
        duration: "2.5 hours",
        lessons: [
          { id: "c1l1", type: "video", title: "Requirements into Steps", duration: "9:00", content: "Parsing vague asks, defining inputs/outputs, edge cases." },
          { id: "c1l2", type: "exercise", title: "FizzBuzz", duration: "10 min", xp: 80, instructions: "Print numbers 1..15; multiples of 3 print Fizz, of 5 Buzz, of both FizzBuzz.", language: "python", starterCode: "for i in range(1, 16):\n    if i % 15 == 0: print('FizzBuzz')\n    elif i % 3 == 0: print('Fizz')\n    elif i % 5 == 0: print('Buzz')\n    else: print(i)", solution: "for i in range(1, 16):\n    if i % 15 == 0: print('FizzBuzz')\n    elif i % 3 == 0: print('Fizz')\n    elif i % 5 == 0: print('Buzz')\n    else: print(i)", hint: "Check 15 before 3 or 5", tests: [{ expected: "FizzBuzz" }] }
        ]
      },
      {
        id: "c2",
        title: "Testing & Debugging",
        duration: "2.5 hours",
        lessons: [
          { id: "c2l1", type: "video", title: "Write the Test First", duration: "10:00", content: "Red-green-refactor and using assertions to pin behavior." },
          { id: "c2l2", type: "exercise", title: "Fix with a Test", duration: "12 min", xp: 100, instructions: "is_palindrome has a bug (ignores the reverse return). Use an assertion to verify 'racecar' is True.", language: "python", starterCode: "def is_palindrome(s):\n    return s == s[::-1]\nassert is_palindrome('racecar') == True\nprint('ok')", solution: "def is_palindrome(s):\n    return s == s[::-1]\nassert is_palindrome('racecar') == True\nprint('ok')", hint: "s[::-1] reverses", tests: [{ expected: "ok" }] }
        ]
      }
    ],
    capstone: {
      id: "capstone-ps-140",
      title: "Kata Sprint",
      description: "Solve 5 coding katas (reverse string, count words, fizzbuzz, factorial, palindrome) with tests for each.",
      duration: "2 hours",
      xp: 500,
      requirements: ["Write tests first", "Handle edge cases", "Keep functions small", "Document approach"],
      deliverables: [{ type: "code", name: "solutions.py", description: "Solved katas + tests" }]
    },
    advanced: {
      id: "adv-ps-140",
      title: "Advanced: Complexity & Trade-offs",
      duration: "1.5 hours",
      xp: 250,
      lessons: [
        { id: "adv1", type: "video", title: "Choosing an Approach", duration: "9:00", content: "Brute force vs optimized: reading time/space trade-offs." }
      ]
    },
    videoLibrary: [{ id: "v1", title: "Debugging Like a Pro", duration: "15:00", instructor: "Tatenda Moyo", topic: "Debugging" }],
    communityFeatures: { discussions: true, studyGroups: true, peerReview: true, mentorship: true },
    jobConnectionsKeywords: ["Junior Developer", "Automation Engineer", "QA Engineer"]
  }
];
