export const personalInfo = {
  name: 'Abhijeet Rajbhar',
  title: 'Software Developer — MERN Stack Developer',
  tagline: 'Building scalable full-stack applications with modern web technologies.',
  bio: `Passionate Software Developer specializing in MERN stack development, RESTful APIs, and scalable backend systems. Strong foundation in Data Structures, Algorithms, Object-Oriented Programming, DBMS, and Operating Systems.`,
  bio2: `Focused on developing secure, responsive, and production-ready applications using React.js, Node.js, Express.js, and MongoDB. Currently exploring AI-powered integrations for intelligent web platforms.`,
  email: 'abhijeetrajbhar436@gmail.com',
  location: 'Uttar Pradesh, India',
  socials: {
    github: 'https://github.com/Abhijeetrajbhar',
    linkedin: 'https://linkedin.com/in/abhijeetrajbhar',
    twitter: 'https://twitter.com/AbhijeetRajbhar',
    // dribbble: 'https://dribbble.com/AbhijeetRajbhar',
  },
}

export const stats = [
  { value: '3+', label: 'Major Projects' },
  { value: '10+', label: 'Technologies Used' },
  { value: '2025', label: 'Hackathon Participant' },
  { value: '100%', label: 'Learning Driven' },
]

export const skills = [
  {
    category: 'FRONTEND',
    icon: 'layers',
    items: [
      { name: 'React.js', level: 88 },
      { name: 'Redux Toolkit', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Material UI', level: 78 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    category: 'BACKEND',
    icon: 'storage',
    items: [
      { name: 'Node.js', level: 86 },
      { name: 'Express.js', level: 84 },
      { name: 'REST APIs', level: 88 },
      { name: 'JWT Authentication', level: 82 },
      { name: 'Prisma ORM', level: 72 },
    ],
  },
  {
    category: 'DATABASE',
    icon: 'database',
    items: [
      { name: 'MongoDB', level: 85 },
      { name: 'SQL', level: 75 },
      { name: 'Database Design', level: 76 },
      { name: 'Data Management', level: 80 },
    ],
  },
  {
    category: 'TOOLS & CONCEPTS',
    icon: 'build',
    items: [
      { name: 'Git & GitHub', level: 82 },
      { name: 'Postman', level: 78 },
      { name: 'VS Code', level: 90 },
      { name: 'DSA & OOP', level: 84 },
      { name: 'Operating Systems', level: 72 },
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'HEALTHGUARDIAN',
    category: 'HEALTHCARE',
    year: '2025',
    description: 'A full-stack healthcare management platform designed to manage patient records, doctor workflows, and secure medical data handling with AI-assisted healthcare recommendations.',
    tags: ['MERN Stack', 'JWT', 'RBAC', 'Multer', 'AI Integration'],
    featured: true,
    color: '#4a6b5a',
    image: null,
    // Paste your deployed project URL here, for example: 'https://healthguardian.vercel.app'
    liveUrl: '',
    // Paste your GitHub repository URL here, for example: 'https://github.com/Abhijeetrajbhar/healthguardian'
    sourceUrl: '',
  },
  {
    id: 2,
    title: 'RESTROONE',
    category: 'FOOD DELIVERY',
    year: '2025',
    description: 'A responsive food delivery web application with seamless ordering, cart management, secure authentication, and Stripe payment integration.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
    featured: true,
    color: '#c97b3a',
    image: null,
    liveUrl: '',
    sourceUrl: '',
  },
  {
    id: 3,
    title: 'SCHOOL MANAGEMENT SYSTEM',
    category: 'EDTECH',
    year: '2025',
    description: 'A modular school management platform supporting attendance, assignments, grading, authentication, and dashboard-based administration.',
    tags: ['MERN', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    featured: true,
    color: '#6b8f7c',
    image: null,
    liveUrl: '',
    sourceUrl: '',
  },
]

export const experience = [
  {
    role: 'MERN Stack Developer',
    company: 'Personal & Academic Projects',
    location: 'India',
    period: '2024 — PRESENT',
    description: 'Developing scalable full-stack web applications using modern MERN stack technologies with focus on authentication, APIs, responsive UI, and secure backend systems.',
    achievements: [
      'Built multiple full-stack MERN applications',
      'Implemented JWT authentication and RBAC systems',
      'Integrated Stripe payment workflows',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications',
    institution: 'Kamla Nehru Institute of Technology',
    location: 'Sultanpur, UP',
    period: 'Aug. 2024 — Present',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Babasaheb Bhimrao Ambedkar University',
    location: 'Lucknow, UP',
    period: 'Aug. 2021 — May 2024',
  },
]

export const certifications = [
  {
    title: 'AKTU AI Tech Hackathon 2025',
    issuer: 'HCL GUVI',
    year: '2025',
  },
  {
    title: 'JavaScript Certification Course',
    issuer: 'Complete Coding by Prashant Sir',
    year: '2025',
  },
]

export const testimonials = [
  {
    quote: 'Passionate developer with strong problem-solving skills and dedication toward building scalable web applications.',
    author: 'Team Collaboration',
    role: 'Project Experience',
    initial: 'TC',
  },
  {
    quote: 'Focused on writing clean backend logic and creating responsive user experiences using modern technologies.',
    author: 'Development Practice',
    role: 'MERN Stack Projects',
    initial: 'DP',
  },
]
