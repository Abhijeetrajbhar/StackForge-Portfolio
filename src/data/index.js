export const personalInfo = {
  name: 'Abhijeet Rajbhar',
  title: 'MERN Stack Developer',
  tagline: 'MERN stack developer building secure, scalable web applications from responsive interfaces to production-ready APIs.',
  bio: 'I am a software developer focused on building complete web products with React, Node.js, Express, and MongoDB. I enjoy turning complex workflows into clear, dependable user experiences.',
  bio2: 'My work covers authentication, role-based access, REST APIs, payments, responsive UI, and data modeling. I am currently expanding my skills in TypeScript, Prisma, and AI-powered product features.',
  email: 'abhijeetrajbhar436@gmail.com',
  location: 'Uttar Pradesh, India',
  availability: 'Open to software development roles and selected collaborations',
  socials: {
    github: 'https://github.com/Abhijeetrajbhar',
    linkedin: 'https://linkedin.com/in/abhijeetrajbhar',
    twitter: 'https://twitter.com/AbhijeetRajbhar',
  },
}

export const stats = [
  { value: '3+', label: 'Full-stack Projects' },
  { value: '10+', label: 'Technologies Used' },
  { value: '2', label: 'Live Applications' },
  { value: '2025', label: 'Hackathon Participant' },
]

export const skillGroups = [
  {
    level: 'Comfortable',
    description: 'Tools I use to build complete application features.',
    items: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS', 'Git & GitHub'],
  },
  {
    level: 'Working knowledge',
    description: 'Technologies I have applied in projects and continue to deepen.',
    items: ['Redux Toolkit', 'Material UI', 'JWT & RBAC', 'Stripe', 'SQL', 'Postman', 'Multer', 'Database Design'],
  },
  {
    level: 'Currently learning',
    description: 'Capabilities I am actively developing for future products.',
    items: ['TypeScript', 'Prisma ORM', 'AI Integrations', 'System Design', 'Testing', 'Cloud Deployment'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'HEALTHGUARDIAN',
    category: 'HEALTHCARE',
    year: '2025',
    summary: 'A secure healthcare workflow platform for patients, doctors, and medical information.',
    image: '/projects/healthguardian.png',
    mobileImage: '/projects/healthguardian-mobile.png',
    imageAlt: 'HealthGuardian healthcare platform home screen',
    color: '#6b8f7c',
    tags: ['MERN Stack', 'JWT', 'RBAC', 'Multer', 'AI Integration'],
    liveUrl: 'https://healthgurdian.vercel.app/',
    sourceUrl: 'https://github.com/Abhijeetrajbhar/healthgurdian',
    caseStudy: {
      problem: 'Healthcare workflows often scatter patient information, appointments, and guidance across disconnected tools.',
      contribution: 'Designed and built the full-stack experience, including responsive interfaces, authentication, protected workflows, and medical-data handling.',
      challenge: 'Keeping role-specific experiences clear while protecting routes and handling uploaded information safely.',
      result: 'Delivered a deployed application with patient and doctor workflows, secure access control, uploads, and AI-assisted recommendations.',
    },
    highlights: ['Multi-role access', 'Secure authentication', 'AI-assisted guidance'],
  },
  {
    id: 2,
    title: 'RESTROONE',
    category: 'FOOD DELIVERY',
    year: '2025',
    summary: 'A responsive food-ordering application covering discovery, cart, authentication, and checkout.',
    image: '/projects/restroone.png',
    mobileImage: '/projects/restroone-mobile.png',
    imageAlt: 'RestroOne food delivery application home screen',
    color: '#c97b3a',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://restro-one-plum.vercel.app/',
    sourceUrl: 'https://github.com/Abhijeetrajbhar/RestroOne',
    caseStudy: {
      problem: 'Food-ordering products need a fast path from browsing to a trustworthy checkout on every screen size.',
      contribution: 'Built the customer-facing flow, cart state, authentication, backend integration, and Stripe payment experience.',
      challenge: 'Maintaining consistent cart and checkout state while keeping the interface responsive across devices.',
      result: 'Shipped a deployed ordering flow with product browsing, cart management, secure sign-in, and payment integration.',
    },
    highlights: ['Responsive ordering flow', 'Cart management', 'Stripe checkout'],
  },
  {
    id: 3,
    title: 'SCHOOL MANAGEMENT SYSTEM',
    category: 'EDTECH',
    year: '2025',
    summary: 'A modular administration platform for attendance, assignments, grading, and school operations.',
    image: null,
    mobileImage: null,
    imageAlt: 'School management system project preview',
    color: '#6b8f7c',
    tags: ['MERN', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    liveUrl: '',
    sourceUrl: 'https://github.com/Abhijeetrajbhar/sms',
    caseStudy: {
      problem: 'School teams need one structured place to manage academic records and recurring administrative workflows.',
      contribution: 'Designed the modular dashboard architecture, role-aware workflows, and data model for core school operations.',
      challenge: 'Organizing connected academic data while keeping each role focused on the actions relevant to them.',
      result: 'Created a scalable project foundation for attendance, assignments, grades, authentication, and administration.',
    },
    highlights: ['Role-aware dashboards', 'Academic workflows', 'Modular architecture'],
  },
]

export const experience = [
  {
    role: 'MERN Stack Developer',
    company: 'Personal & Academic Projects',
    location: 'India',
    period: '2024 - Present',
    description: 'Building full-stack web applications with responsive interfaces, secure authentication, REST APIs, and practical product workflows.',
    achievements: [
      'Delivered two publicly deployed full-stack applications',
      'Implemented JWT authentication and role-based access control',
      'Integrated Stripe payments and AI-assisted product features',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications',
    institution: 'Kamla Nehru Institute of Technology',
    location: 'Sultanpur, UP',
    period: 'Aug. 2024 - Present',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Babasaheb Bhimrao Ambedkar University',
    location: 'Lucknow, UP',
    period: 'Aug. 2021 - May 2024',
  },
]

export const certifications = [
  { title: 'AKTU AI Tech Hackathon 2025', issuer: 'HCL GUVI', year: '2025' },
  { title: 'JavaScript Certification Course', issuer: 'Complete Coding by Prashant Sir', year: '2025' },
]
