export const profile = {
  name: "Prem Kumar",
  role: "SOFTWARE DEVELOPER & AI ENGINEER",
  headline: "Building thoughtful software and AI systems that solve real problems.",
  bio: "I am a software developer and AI engineer focused on building high-performance backend architectures, practical AI applications, and tackling complex algorithmic challenges.",
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
  philosophy: "Learn • Build • Break • Improve • Repeat",
  skills: {
    languages: ["C++", "Python", "JavaScript", "Java", "SQL"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    backend: ["Node.js", "Express.js", "Django", "REST APIs", "Redis (L1/L2 Caching)", "Rate Limiting"],
    databases: ["MongoDB", "MySQL", "Redis"],
    ai_ml: ["Qwen 2.5 Coder", "Gemini API", "OpenRouter", "Scikit-learn", "Pandas", "NumPy", "AST Context Injection"],
    tools: ["Data Structures & Algorithms (DSA)", "Git", "GitHub", "Postman", "Cursor"],
  },
  projects: [
    {
      title: "SkillForge",
      subtitle: "AI-Powered Code Sandbox & Course Marketplace SaaS",
      problem: "Learners often struggle with generic error messages and slow debugging feedback, while e-learning platforms face high API latency and DDoS threats under concurrent load.",
      solution: "I engineered an AI-powered code sandbox with dynamic AST context injection and an in-memory L1/Redis L2 caching pipeline.",
      description: "I integrated Qwen 2.5 Coder 32B and Gemini with dynamic AST analysis to deliver graduated debugging hints in under 1s. I architected an In-Memory L1 and Redis L2 caching pipeline that slashed MongoDB read load by 60%+ and cut API latency from 120ms to 15ms. To protect authentication and checkout routes, I enforced dual-token JWTs and a 4-tier rate limiter, alongside 15+ REST APIs and Razorpay checkout with SHA-256 cryptographic verification.",
      techStack: ["React.js", "Node.js", "Qwen 2.5 32B", "Gemini", "Redis", "MongoDB"],
      impact: "Cut learner debugging time by 45% and reduced API latency from 120ms to 15ms under high concurrency.",
      github: "https://github.com/premkumarthirupati1",
      demo: "https://skillforge-frontend-aijn.vercel.app/",
    },
    {
      title: "Deepfake Detection System",
      subtitle: "Multi-Model Evaluation & Inference Pipeline",
      problem: "Sophisticated deepfake media rapidly bypasses standard detection tools, making high-precision media verification challenging.",
      solution: "I developed a Python inference engine combining 3 ML estimators via a soft Voting Classifier for high-precision verification.",
      description: "I vectorized 22,900+ dataset records using Scikit-learn token frequency extraction, transforming unstructured text and metadata into high-dimensional sparse matrices. I built an ensemble Voting Classifier combining Naive Bayes, Linear SVC, and Logistic Regression, and integrated a relational MySQL layer to track real-time model predictions and telemetry across 100% of user queries.",
      techStack: ["Python", "Django", "Scikit-learn", "Pandas", "NumPy", "MySQL"],
      impact: "Benchmarked 3 ML estimators and persisted real-time telemetry across 100% of user inference queries.",
      github: "https://github.com/premkumarthirupati1",
      demo: "",
    },
    {
      title: "Backend E-Commerce System",
      subtitle: "Scalable Retail API Engine",
      problem: "Traditional monolithic retail backends often suffer from coupled business logic, inventory race conditions, and loose authorization controls.",
      solution: "I constructed a decoupled 3-tier service architecture with 20+ REST APIs managing the end-to-end order lifecycle.",
      description: "I built 20+ REST APIs across controller, service, and data-access layers to manage product catalogs, cart state, and order transitions. I hardened system security using salted password hashing, route authorization middleware, and a 15-minute token-based password reset, while enforcing strict schema validation and admin RBAC across 4 core modules.",
      techStack: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      impact: "Constructed 20+ decoupled REST APIs and guaranteed transactional consistency across 4 core retail modules.",
      github: "https://github.com/premkumarthirupati1",
      demo: "",
    }
  ],
  achievements: [
    {
      year: "2027",
      category: "ACADEMICS",
      title: "8.86 CGPA",
      description: "I have consistently maintained a strong academic record throughout my B.Tech Computer Science (AI & ML) program at CMR Institute of Technology."
    },
    {
      year: "2026",
      category: "PROBLEM SOLVING",
      title: "Top 9% Globally on LeetCode",
      description: "I have solved over 1000 data structures and algorithms problems and achieved a 1750+ contest rating on LeetCode by optimizing complex data structures for strict latency and memory bounds."
    },
    {
      year: "2026",
      category: "CERTIFICATION",
      title: "Smart Coder Certification",
      description: "Certified by Smart Interviews for exceptional algorithmic problem solving and coding proficiency."
    },
    {
      year: "2025",
      category: "CERTIFICATION",
      title: "React.js Frontend Development Certificate",
      description: "Completed comprehensive certification in modern React.js frontend architecture, state management, and component design."
    }
  ],
  timeline: [
    {
      year: "2022",
      description: "Graduated Intermediate Science with 84.8% from Sri Chaitanya Junior College and began building my programming foundations."
    },
    {
      year: "2023",
      description: "Started my B.Tech in Computer Science (AI & ML) at CMR Institute of Technology and deepened my algorithmic foundations in C++."
    },
    {
      year: "2025",
      description: "Focused heavily on full-stack architecture. Engineered a scalable 20+ API E-Commerce engine and earned my React.js frontend certification."
    },
    {
      year: "2026",
      description: "Engineered AI-powered platforms including the SkillForge AI code sandbox and Deepfake Detection inference pipeline, while earning a 1750+ LeetCode rating."
    }
  ]
};
