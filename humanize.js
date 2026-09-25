const fs = require('fs');

// 1. Update about.tsx
let about = fs.readFileSync('src/components/about.tsx', 'utf8');

const oldAboutText = `<div className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light space-y-6">
                <p>
                  My foundation in Computer Science is built on a deep curiosity for how complex systems operate under the hood. I am driven by the process of taking an abstract problem, designing a scalable architecture, and engineering a practical, real-world application to solve it.
                </p>
                <p>
                  I focus heavily on building resilient backend architectures, integrating AI/ML models into functional platforms, and maintaining a relentless approach to algorithmic problem-solving. Code is just a tool; the goal is always execution and impact.
                </p>
              </div>`;

const newAboutText = `<div className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light space-y-6">
                <p>
                  My foundation in Computer Science is built on a genuine curiosity about how complex systems operate under the hood. I am driven by the process of taking an abstract idea, designing a scalable architecture, and building a practical application to solve the problem.
                </p>
                <p>
                  I focus heavily on building resilient backend architectures and integrating AI models into functional platforms. I also maintain a relentless approach to algorithmic problem solving. To me, code is simply a tool. The ultimate goal is always delivering impact and finding the right solution.
                </p>
              </div>`;

about = about.replace(oldAboutText, newAboutText);
fs.writeFileSync('src/components/about.tsx', about);


// 2. Update profile.ts
const profileContent = `export const profile = {
  name: "Prem Kumar",
  role: "SOFTWARE DEVELOPER",
  headline: "Building thoughtful software that solves real problems.",
  bio: "I am a software developer and Computer Science student focused on building practical applications and tackling complex challenges. I am always looking for ways to continuously improve as an engineer.",
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
      problem: "Inefficient course delivery and high API latency were negatively affecting the user experience.",
      solution: "I engineered a scalable learning platform and used compound indexing and caching to dramatically improve performance.",
      description: "I built over 15 REST APIs to handle course creation, enrollment, and tracking. By implementing Redis, I reduced API latency significantly under real-world load. I also created a secure role-based JWT authentication system.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis"],
      impact: "Reduced API latency by 30% and cut MongoDB query time by 25%.",
      github: "https://github.com/premkumarthirupati1",
      demo: "",
    },
    {
      title: "Deepfake Detection System",
      subtitle: "AI-Powered Video Authenticity Analyzer",
      problem: "Sophisticated deepfake videos are becoming increasingly common and can easily bypass standard detection methods.",
      solution: "I developed an ensemble Voting Classifier that utilizes Naive Bayes, Linear SVC, and Logistic Regression to spot inconsistencies.",
      description: "I built a Django web application to classify videos as fake or real. The model was trained on thousands of records with video metadata vectorized via CountVectorizer. Predictions and geo-metadata are stored in MySQL for clear analytics.",
      techStack: ["Python", "Django", "Scikit-learn", "Pandas", "MySQL"],
      impact: "Boosted prediction accuracy via soft voting and provided clear analytics for service providers.",
      github: "https://github.com/premkumarthirupati1",
      demo: "",
    },
    {
      title: "Backend E-Commerce System",
      subtitle: "Scalable E-Commerce Architecture",
      problem: "Traditional monolithic e-commerce backends often struggle with scaling and role management as the business grows.",
      solution: "I engineered a robust service-layer architecture featuring over 20 RESTful APIs that cover the entire order lifecycle.",
      description: "I secured sensitive routes with bcrypt hashing and built a role-gated admin panel to enforce access control and reduce inventory errors. I also implemented token-based password resets with secure 15-minute expirations.",
      techStack: ["Node.js", "Express.js", "MongoDB"],
      impact: "Decreased feature development time by 20% by refactoring the codebase to modular routing.",
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
      description: "I have solved over 1000 data structures and algorithms problems and achieved a 1750+ rating. I have a strong command of Dynamic Programming, Graphs, Trees, and Greedy algorithms."
    },
    {
      year: "2026",
      category: "CERTIFICATION",
      title: "Smart Coder Certification",
      description: "I was certified by Smart Interviews for exceptional algorithmic problem solving and coding proficiency."
    }
  ],
  timeline: [
    {
      year: "2022",
      description: "Graduated Intermediate Science with 85% from Sri Chaitanya Junior College and began building my programming foundations."
    },
    {
      year: "2023",
      description: "Started my B.Tech in Computer Science (AI & ML) and deepened my understanding of Data Structures and Algorithms using C++."
    },
    {
      year: "2025",
      description: "Focused heavily on full-stack web development. Engineered a robust Backend E-Commerce System and mastered Node.js API architecture."
    },
    {
      year: "2026",
      description: "Integrated AI models into practical web applications. Built the Deepfake Detection and SkillForge platforms and solved over 1000 problems on LeetCode."
    }
  ]
};
`;

fs.writeFileSync('src/data/profile.ts', profileContent);

console.log('Humanized and removed semicolons');
