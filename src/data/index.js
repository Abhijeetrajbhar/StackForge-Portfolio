export const personalInfo = {
  name: 'Abhijeet Rajbhar',
  title: 'Software Developer | MERN Stack Developer',
  tagline: 'Software developer skilled in MERN stack, RESTful APIs, scalable backend systems, data structures, algorithms, and OOP.',
  bio: 'I am a software developer focused on building complete web products with React, Node.js, Express, and MongoDB. I enjoy turning complex workflows into clear, dependable user experiences.',
  bio2: 'My work covers authentication, role-based access, REST APIs, payments, responsive UI, data modeling, and scalable backend systems.',
  email: 'abhijeetrajbhar436@gmail.com',
  phone: '9335122608',
  location: 'Uttar Pradesh, India',
  availability: 'Open to software development roles and selected collaborations',
  socials: {
    github: 'https://github.com/Abhijeetrajbhar',
    linkedin: 'https://www.linkedin.com/in/abhijeet-rajbhar-dev',
    twitter: '',
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
    items: ['Java', 'JavaScript', 'React.js', 'Redux Toolkit', 'Tailwind CSS', 'Material UI', 'Git & GitHub', 'VS Code'],
  },
  {
    level: 'Working knowledge',
    description: 'Technologies I have applied in projects and continue to deepen.',
    items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'SQL', 'JWT & RBAC', 'Stripe', 'Postman'],
  },
  {
    level: 'Currently learning',
    description: 'Core concepts and deployment capabilities I keep sharpening.',
    items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'TypeScript', 'Prisma ORM', 'Vercel & Render'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'HEALTHGUARDIAN',
    category: 'HEALTHCARE',
    year: '2025',
    summary: 'A full-stack healthcare platform for patient records, doctor-patient workflows, and medical document management.',
    image: '/projects/healthguardian.png',
    mobileImage: null,
    imageAlt: 'HealthGuardian healthcare platform home screen',
    color: '#6b8f7c',
    tags: ['MERN Stack', 'JWT', 'RBAC', 'Multer', 'AI Integration'],
    liveUrl: 'https://healthgurdian.vercel.app/',
    sourceUrl: 'https://github.com/Abhijeetrajbhar/healthgurdian',
    caseStudy: {
      problem: 'Healthcare workflows often scatter patient records, medical reports, and doctor-patient collaboration across disconnected tools.',
      contribution: 'Designed and developed the MERN platform with JWT authentication, RBAC for Admin, Doctor, and Patient roles, REST APIs, and secure report uploads.',
      challenge: 'Protecting role-specific access while keeping medical history data scalable, retrievable, and controlled by admin modification rules.',
      result: 'Delivered a deployed healthcare workflow with secure access, document management, and an AI assistant for contextual health recommendations.',
    },
    highlights: ['Admin/Doctor/Patient RBAC', 'Medical report uploads', 'AI health assistant'],
  },
  {
    id: 2,
    title: 'RESTROONE',
    category: 'FOOD DELIVERY',
    year: '2025',
    summary: 'A full-stack food delivery application covering ordering, cart management, authentication, admin access, and payments.',
    image: '/projects/restroone.png',
    mobileImage: null,
    imageAlt: 'RestroOne food delivery application home screen',
    color: '#c97b3a',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://restro-one-plum.vercel.app/',
    sourceUrl: 'https://github.com/Abhijeetrajbhar/RestroOne',
    caseStudy: {
      problem: 'Food delivery products need a smooth ordering path with trustworthy cart, order, authentication, and payment flows.',
      contribution: 'Developed the full-stack app with responsive menu browsing, cart operations, order APIs, JWT authentication, and role-based access.',
      challenge: 'Keeping customer and admin operations secure while handling payment edge cases such as duplicate and failed transactions.',
      result: 'Shipped a deployed ordering flow with responsive UI, consistent cart state, order processing APIs, and Stripe test-mode payments.',
    },
    highlights: ['Responsive menu UI', 'Order processing APIs', 'Stripe payment flow'],
  },
  {
    id: 3,
    title: 'SCHOOL MANAGEMENT SYSTEM',
    category: 'EDTECH',
    year: '2025',
    summary: 'A modular school management system for attendance, assignments, grading, results, and role-aware dashboards.',
    image: null,
    mobileImage: null,
    imageAlt: 'School management system project preview',
    color: '#6b8f7c',
    tags: ['MERN', 'TypeScript', 'Prisma', 'Tailwind CSS'],
    liveUrl: '',
    sourceUrl: 'https://github.com/Abhijeetrajbhar/sms',
    caseStudy: {
      problem: 'School teams need a structured place to manage academic workflows without mixing admin, teacher, and student responsibilities.',
      contribution: 'Built modular APIs with Node.js, Express, Prisma ORM, MongoDB, JWT refresh tokens, and responsive React dashboards.',
      challenge: 'Balancing connected academic data with secure role-based access and practical dashboard state management.',
      result: 'Created a scalable foundation for attendance, assignments, grading, result processing, authentication, and administration.',
    },
    highlights: ['JWT refresh tokens', 'Prisma data layer', 'Secure dashboards'],
  },
]

export const experience = [
  {
    role: 'MERN Stack Developer',
    company: 'Personal & Academic Projects',
    location: 'India',
    period: '2024 - Present',
    description: 'Building full-stack web applications with responsive interfaces, secure authentication, REST APIs, and scalable backend systems.',
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
    period: 'Aug. 2024 - May 2026',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Babasaheb Bhimrao Ambedkar University',
    location: 'Lucknow, UP',
    period: 'Aug. 2021 - May 2024',
  },
]

export const certifications = [
  { title: 'AKTU AI Tech Hackathon 2025', issuer: 'HCL GUVI', year: 'May 2025' },
  { title: 'JavaScript Certification Course', issuer: 'Complete Coding by Prashant Sir', year: 'April 2025' },
]
