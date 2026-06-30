// ═══════════════════════════════════════════════════════════════
//  PORTFOLIO DATA — edit this file to update all pages
// ═══════════════════════════════════════════════════════════════

const PORTFOLIO = {

  // ── IDENTITY ──────────────────────────────────────────────────
  name: "Krithiga Kaleeswaran",
  tagline: "I build products that make people's lives a little easier.",
  intro: "Year 1 CS undergraduate at NUS. I care deeply about understanding problems before writing a single line of code — then building fast, learning faster.",
  photo: "", // put a relative path to your photo here e.g. "assets/photo.jpg"
  email: "vanikalees@gmail.com",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  resumePDF: "assets/resume.pdf", // drop your PDF into assets/

  // ── ABOUT ─────────────────────────────────────────────────────
  about: {
    journey: "I first touched code in secondary school — a Python script that sorted my Spotify playlists. It broke three times before it worked. That was the moment I was hooked: not by the output, but by the process of debugging something I'd built myself.",
    passion: "I'm drawn to product engineering — the intersection of user empathy, design thinking, and technical execution. I want to build things people actually use, not just things that compile.",
    interests: ["AI & LLM applications", "Product engineering", "Developer tooling", "Human-computer interaction"],
    values: "I believe great software is quiet — it solves the problem without making itself the problem. I care about simplicity, iteration speed, and honest feedback loops.",
    aspirations: "I want to work on products that reach millions of people. Eventually I'd like to found something. Right now, I'm focused on learning how to build well."
  },

  // ── PROJECTS ──────────────────────────────────────────────────
  // Each project gets its own detail page at project.html?id=<id>
  projects: [
    {
      id: "project-one",
      featured: true,
      title: "Project One",
      subtitle: "A brief tagline for what this project does",
      tags: ["Python", "Flask", "PostgreSQL"],
      thumbnail: "", // path to thumbnail image
      problem: "Describe the problem you identified. Who has this problem? Why does it matter?",
      users: "University students who need to...",
      solution: "Your solution overview — what you built and how it addresses the problem.",
      vision: "Where could this go? What's the bigger picture?",
      role: "Full-stack developer & product lead",
      team: "Solo project / 3-person team",
      designProcess: "Describe your design process — research, wireframes, iterations.",
      architecture: "Briefly describe the technical architecture.",
      screenshots: [], // ["assets/proj1/screen1.png", ...]
      demo: "", // link to live demo or video
      technologies: ["Python", "Flask", "PostgreSQL", "HTML/CSS"],
      challenges: "What was hard? Be specific.",
      tradeoffs: "What did you consciously trade off and why?",
      results: "What happened after you built it? Metrics, user feedback, etc.",
      lessons: "What would you do differently? What did you learn?",
      future: "What would v2 look like?",
      github: ""
    },
    {
      id: "project-two",
      featured: true,
      title: "Project Two",
      subtitle: "Another project tagline",
      tags: ["JavaScript", "React", "Firebase"],
      thumbnail: "",
      problem: "Problem statement here.",
      users: "Target users here.",
      solution: "Solution overview here.",
      vision: "Product vision here.",
      role: "Your role here.",
      team: "Team composition here.",
      designProcess: "Design process here.",
      architecture: "Architecture overview here.",
      screenshots: [],
      demo: "",
      technologies: ["JavaScript", "React", "Firebase"],
      challenges: "Challenges faced here.",
      tradeoffs: "Design trade-offs here.",
      results: "Results here.",
      lessons: "Lessons learned here.",
      future: "Future improvements here.",
      github: ""
    }
  ],

  // ── AI & INNOVATION ───────────────────────────────────────────
  ai: [
    {
      id: "ai-one",
      title: "AI Experiment / Project",
      subtitle: "What it does in one line",
      tags: ["LLM", "Python", "OpenAI API"],
      description: "What you built, what model/tools you used, and what you learned.",
      insight: "Key insight or takeaway from this experiment.",
      link: "",
      github: ""
    }
  ],

  // ── PRODUCT THINKING ──────────────────────────────────────────
  product: [
    {
      id: "pt-one",
      title: "Product Case Study / Thinking Piece",
      type: "User Research", // or "Wireframes", "MVP", "Roadmap", etc.
      tags: ["User Research", "Personas", "Journey Map"],
      description: "Describe the product thinking exercise — what problem, what users, what you discovered.",
      outcome: "What did this lead to? A prototype, a pivot, a decision?",
      link: "" // Figma, Notion, etc.
    }
  ],

  // ── TECHNICAL WRITING ─────────────────────────────────────────
  writing: [
    {
      id: "writing-one",
      title: "Article / Reflection Title",
      type: "Project Retrospective", // or "Technical Article", "Engineering Log", etc.
      date: "June 2025",
      summary: "One paragraph summary of what this piece covers and why you wrote it.",
      link: "", // external link if published (Medium, dev.to, etc.)
      content: "" // or write the full content here as markdown-ish text
    }
  ],

  // ── INDUSTRY EXPERIENCE ───────────────────────────────────────
  experience: [
    {
      id: "exp-one",
      role: "Role Title",
      company: "Company / Organisation",
      period: "Jun 2025 – Aug 2025",
      type: "Internship", // or "Part-time", "Contract"
      problem: "What business problem were you brought in to solve?",
      stakeholders: "Who were the stakeholders?",
      constraints: "What constraints did you work under?",
      approach: "How did you approach the solution?",
      architecture: "Technical overview if applicable.",
      decisions: "Key decisions you made and why.",
      outcome: "What was the result? Be specific.",
      lessons: "What did you learn?"
    }
  ],

  // ── HACKATHONS ────────────────────────────────────────────────
  hackathons: [
    {
      id: "hack-one",
      name: "Hackathon Name",
      organiser: "Organiser",
      date: "2025",
      challenge: "What was the problem statement?",
      team: "Your team composition.",
      role: "Your specific role.",
      solution: "What you built.",
      demo: "",
      result: "Prize / outcome.",
      reflection: "What you'd do differently."
    }
  ],

  // ── LEADERSHIP & COMMUNITY ────────────────────────────────────
  leadership: [
    {
      id: "lead-one",
      title: "Role / Initiative",
      organisation: "Organisation",
      period: "2024 – Present",
      type: "Student Organisation", // or "Volunteering", "Mentoring", etc.
      impact: "Describe the impact you had — not what you did, but what changed because you were there.",
      teamSize: "",
      skills: ["Leadership", "Event Planning"]
    }
  ],

  // ── LEARNING JOURNEY ──────────────────────────────────────────
  learning: {
    timeline: [
      { year: "2023", milestone: "First Python script — sorted Spotify playlists. Broke three times. Fixed it." },
      { year: "2024", milestone: "Discovered web development. Built first full-stack project." },
      { year: "2025", milestone: "Started NUS CS. Exploring AI/ML and product engineering." }
    ],
    current: [
      "Deep learning fundamentals (fast.ai)",
      "System design for scalable applications",
      "Product management frameworks"
    ],
    exploring: ["Rust", "LLM fine-tuning", "Agentic AI workflows"],
    courses: [
      { name: "CS1101S — Programming Methodology", institution: "NUS", year: "2025" },
      { name: "CS50x", institution: "Harvard / edX", year: "2024" }
    ],
    reading: [
      "The Pragmatic Programmer — David Thomas & Andrew Hunt",
      "The Mom Test — Rob Fitzpatrick",
      "Zero to One — Peter Thiel"
    ],
    research: ["Human-AI interaction", "Educational technology"]
  },

  // ── SKILLS ────────────────────────────────────────────────────
  skills: {
    languages:  ["Python", "Java", "JavaScript", "C", "SQL", "HTML/CSS"],
    frameworks: ["React", "Flask", "Node.js"],
    ai:         ["OpenAI API", "LangChain", "Prompt Engineering", "Hugging Face"],
    cloud:      ["AWS (basics)", "Firebase", "Vercel"],
    design:     ["Figma", "Canva"],
    databases:  ["PostgreSQL", "SQLite", "Firebase Firestore"],
    devtools:   ["Git", "GitHub", "VS Code", "Linux", "Docker (basics)"],
    product:    ["User Research", "Wireframing", "Journey Mapping", "Agile/Scrum"]
  },

  // ── CERTIFICATIONS ────────────────────────────────────────────
  certifications: [
    { name: "CS50x", issuer: "Harvard / edX", year: "2024", category: "Technical", link: "" },
    { name: "Add your certifications here", issuer: "Issuer", year: "2025", category: "AI", link: "" }
  ],

  // ── BONUS SECTIONS ────────────────────────────────────────────
  problems: [ // Problem Notebook
    {
      id: "prob-one",
      title: "Problem you've noticed",
      observation: "What did you observe? Where? When?",
      whyMatters: "Why does this problem matter and to whom?",
      idea: "A rough idea of how it could be solved.",
      stage: "Observation" // or "Exploring", "Prototyping", "Shelved"
    }
  ],

  currentlyBuilding: [
    {
      title: "This Portfolio",
      description: "Iterating on the CS3216 portfolio — adding content, refining the narrative.",
      stage: "Active",
      link: ""
    }
  ]
};
