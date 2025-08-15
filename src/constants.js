// Skills Section Logos
import cssLogo from './assets/tech_logo/css.png';
import expressjsLogo from './assets/tech_logo/express.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import htmlLogo from './assets/tech_logo/html.png';
import javaLogo from './assets/tech_logo/java.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import pythonLogo from './assets/tech_logo/python.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Project Section Logos
import chatlifyLogo from './assets/work_logo/Chatlify.png';
import flexiAiLogo from './assets/work_logo/FlexiAi.png';

// Experience Section Logos
import electroverseLogo from './assets/company_logo/Electroverse.jpg';
import varcsoftLogo from './assets/company_logo/varcsoft.svg';

// Education Section Logos
import bhavansLogo from './assets/education_logo/Bhavans.png';
import tsecLogo from './assets/education_logo/tsec.png';

// Skills Info
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

// Experiences
export const experiences = [
  {
    id: 0,
    img: varcsoftLogo,
    role: "Research & Content Writing Intern",
    company: "Varcsoft (Remote)",
    date: "March 2025 – June 2025",
    desc: `• Researched emerging technologies and industry trends to produce clear and engaging articles.
• Created and maintained structured content in JSON format, ensuring accuracy and consistency across platforms.
• Optimized blog posts and technical explainers for SEO while maintaining readability.`,
    skills: [
      "Research",
      "Content Writing",
      "JSON",
      "SEO Optimization",
      "Technical Writing"
    ],
  },
  {
    id: 1,
    img: electroverseLogo,
    role: "Marketing Head – Electroverse Committee",
    company: "Thadomal Shahani Engineering College",
    date: "August 2024 – March 2025",
    desc: `• Directed marketing strategies and promotional campaigns for a 48-hour hardware hackathon.
• Increased participation by engaging multiple engineering colleges across Mumbai.`,
    skills: [
      "Marketing Strategy",
      "Event Management",
      "Promotion",
      "Leadership",
      "Team Coordination"
    ],
  },
];


// Education
export const education = [
  {
    id: 0,
    img: tsecLogo,
    school: "Thadomal Shahani Engineering College",
    date: "2022 – Present",
    grade: "CGPA: 8.1",
    desc: "Pursuing a degree in engineering with a focus on modern web technologies, software development, and collaborative project work.",
    degree: "B.E. Electronics and Telecommunication",
  },
  {
    id: 1,
    img: bhavansLogo,
    school: "Bhavan's College",
     date: "2019 – 2021",
    grade: "87.67%",
    desc: "Specialized in Physics, Chemistry, and Mathematics.",
    degree: "HSC – Science Stream",
  },
];

// Projects
export const projects = [
  {
    id: 0,
    title: "FlexiAi – AI SaaS Platform",
    description:
      "A PERN-based AI platform offering tools for writing, image editing, resumes, and professional content automation.",
    image: flexiAiLogo,
    tags: ["PostgreSQL", "Express JS", "React JS", "Node JS", "AI Integration"],
    github: "https://github.com/Laxmipujari39/FlexiAI", // Replace with actual link
    webapp: "https://flexi-ai-jet.vercel.app/", // Replace with actual link
  },
  {
    id: 1,
    title: "Chatlify – MERN-Based Chat & Video Platform",
    description:
      "Built a web application enabling real-time chat, video calls, and user connectivity.",
    image: chatlifyLogo,
    tags: ["MongoDB", "Express JS", "React JS", "Node JS", "WebRTC", "Stream.IO"],
    github: "https://github.com/Laxmipujari39/Chatlify", 
    webapp: "https://chatlify-108r.onrender.com/login", 
  },
];
