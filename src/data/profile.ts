export const profile = {
  name: "Prem Kumar",
  role: "SOFTWARE DEVELOPER",
  headline: "Building thoughtful software that solves real problems.",
  bio: "Computer Science student and developer focused on building practical applications, strengthening problem-solving skills, and continuously improving as an engineer.",
  email: "premkumarthirupati@gmail.com",
  socials: {
    github: "https://github.com/premkumarthirupati1",
    linkedin: "https://linkedin.com/in/thirupati-prem-kumar",
    leetcode: "https://leetcode.com/u/premkumarthirupati1",
  },
  metrics: {
    cgpa: "8.86",
    projects: "15+",
    problemsSolved: "1000+",
  },
  philosophy: "Learn → Build → Break → Improve → Repeat",
  skills: {
    languages: ["C++", "Python", "JavaScript", "SQL"],
    frontend: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Django", "REST APIs", "RBAC"],
    databases: ["MongoDB", "MySQL", "Redis"],
    ai_ml: ["Scikit-learn", "Pandas", "Machine Learning"],
    tools: ["Git", "GitHub", "Postman", "bcrypt"],
  },
  projects: [
    {
      title: "SkillForge",
      subtitle: "Personalized Learning Platform",
      problem: "Inefficient course delivery and high API latency affecting user experience.",
      solution: "Engineered a scalable learning platform with compound indexing and caching to dramatically improve performance.",
      description: "Built 15+ REST APIs for course creation, enrollment, and tracking. Reduced API latency by 30% under real-world load using Redis. Implemented a secure 3-role JWT authentication system.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis"],
      impact: "Reduced API latency by 30% (~420ms to ~290ms) and cut MongoDB query time by 25%.",
      github: "https://github.com/premkumarthirupati1",
      demo: "",
    },
    {
      title: "Deepfake Detection System",
      subtitle: "AI-Powered Video Authenticity Analyzer",
      problem: "Increasing prevalence of sophisticated deepfake videos bypassing standard detection.",
      solution: "Developed an ensemble Voting Classifier utilizing Naive Bayes, Linear SVC, and Logistic Regression.",
      description: "Built a Django web app to classify videos as FAKE or REAL. Trained on 22,900+ records with video metadata vectorized via CountVectorizer. Stored predictions with geo-metadata in MySQL for analytics.",
      techStack: ["Python", "Django", "Scikit-learn", "Pandas", "MySQL"],
      impact: "Boosted prediction accuracy significantly via soft voting and provided clear analytics visualization for service providers.",
      github: "https://github.com/premkumarthirupati1",
      demo: "",
    },
    {
      title: "Backend E-Commerce System",
      subtitle: "Scalable E-Commerce Architecture",
      problem: "Monolithic e-commerce backends often struggle with scaling and role management.",
      solution: "Engineered a robust, service-layer architecture with 20+ RESTful APIs covering the entire order lifecycle.",
      description: "Secured sensitive routes with bcrypt hashing (12 rounds). Built a role-gated admin panel for 2 access tiers, enforcing RBAC to reduce inventory errors. Implemented token-based password resets with 15-minute expiries.",
      techStack: ["Node.js", "Express.js", "MongoDB"],
      impact: "Decreased feature dev time by 20% by refactoring to modular routing.",
      github: "https://github.com/premkumarthirupati1",
      demo: "",
    }
  ],
  achievements: [
    {
      year: "2027",
      category: "ACADEMICS",
      title: "8.86 CGPA",
      description: "Consistently maintained a strong academic record throughout the B.Tech Computer Science (AI & ML) program at CMR Institute of Technology."
    },
    {
      year: "2026",
      category: "PROBLEM SOLVING",
      title: "Top 9% Globally on LeetCode",
      description: "Solved 1000+ DSA problems, achieving a 1750+ rating. Demonstrated strong command of Dynamic Programming, Graphs, Trees, and Greedy algorithms."
    },
    {
      year: "2026",
      category: "CERTIFICATION",
      title: "Smart Coder Certification",
      description: "Certified by Smart Interviews for exceptional algorithmic problem-solving and coding proficiency."
    }
  ],
  timeline: [
    {
      year: "2022",
      description: "Graduated Intermediate Science with 85% from Sri Chaitanya Junior College. Began building programming foundations."
    },
    {
      year: "2023",
      description: "Started B.Tech in Computer Science (AI & ML). Deepened understanding of Data Structures and Algorithms using C++."
    },
    {
      year: "2025",
      description: "Focused on full-stack web development. Engineered a robust Backend E-Commerce System, mastering Node.js and API architecture."
    },
    {
      year: "2026",
      description: "Integrated AI/ML into web applications. Built Deepfake Detection and SkillForge platforms. Solved 1000+ problems on LeetCode."
    }
  ]
};
