import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Palette,
  ShoppingCart,
  FileText,
  Pen,
  BookOpen,
  Award,
  GraduationCap,
  Star,
  Briefcase,
} from 'lucide-react';

export const personalInfo = {
  name: 'Shivangi Shreya',
  firstName: 'Shivangi',
  lastName: 'Shreya',
  role: 'Full Stack Web Developer',
  tagline: 'B.Tech Student • Clean UI • Interactive Experiences',
  bio: [
    "Hello! I'm a Pre-Final Year B.Tech Computer Science Engineering student with a strong passion for problem-solving and continuous learning. My journey in tech began with Data Structures and Algorithms (DSA), where I've been sharpening my skills by tackling complex coding challenges.",
    "I'm currently expanding my skill set by diving into Full Stack Web Development, learning how to build dynamic, user-friendly applications from front-end to back-end. I love creating functional, aesthetically pleasing projects and understanding the complete architecture of web applications.",
    "Beyond that, I'm deeply intrigued by the world of Artificial Intelligence. I'm eager to explore various AI tools and techniques, discovering how they can be integrated into real-world solutions to solve complex problems.",
    "I'm always excited to connect with fellow tech enthusiasts, share knowledge, and collaborate on exciting projects."
  ],
  email: 'shivangishreya2@gmail.com',
  github: 'https://github.com/shivangishrey0',
  linkedin: 'https://linkedin.com/in/shivangi-shreya20',
  resumeUrl: '/CV_shivangi.pdf',
};

export const education = [
  {
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    institution: 'Lovely Professional University (Punjab, India)',
    period: 'August 2023 - Present',
    score: 'CGPA: 7.96',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate (12th Grade)',
    institution: 'CNB College Hathiyawa',
    period: 'Completed: June 2022',
    score: 'Percentage: 76.8%',
    icon: BookOpen,
  },
  {
    degree: 'Matriculation (10th Grade)',
    institution: 'St. Mary English School',
    period: 'Completed: March 2020',
    score: 'Percentage: 90.6%',
    icon: BookOpen,
  },
];

export const skills = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'JavaScript', icon: '🟨', category: 'Language' },
  { name: 'HTML5', icon: '🌐', category: 'Frontend' },
  { name: 'CSS3', icon: '🎨', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '💨', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'Python', icon: '🐍', category: 'Language' },
  { name: 'Git', icon: '📦', category: 'Tools' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'Framer Motion', icon: '🎬', category: 'Frontend' },
  { name: 'Figma', icon: '🎨', category: 'Design' },
  { name: 'DSA', icon: '🧩', category: 'CS Fundamentals' },
];

export const softSkills = [
  { name: 'Adaptability', icon: '🔄', category: 'Soft Skill' },
  { name: 'Problem Solving', icon: '🧠', category: 'Soft Skill' },
  { name: 'Team Player', icon: '🤝', category: 'Soft Skill' },
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce UI',
    description: "A stunning e-commerce storefront with responsive design, smooth 'Add to Cart' micro-animations, product filtering, and Google OAuth integration on the client side. Local Storage is used to persist cart data for a seamless demo experience.",
    tags: ['React', 'Tailwind CSS', 'OAuth', 'Framer Motion', 'LocalStorage'],
    icon: ShoppingCart,
    image: '/shopping.png',
    featured: true,
    liveUrl: '#',
    githubUrl: 'https://github.com/shivangishrey0/smart-shopping-cart',
    color: 'magenta',
  },
  {
    id: 2,
    title: 'Exam Paper Generator',
    description: 'A dynamic exam paper generation tool with complex filtering logic, customizable templates, and PDF export via jsPDF. Features include question bank management, difficulty-based filtering, and beautiful print-ready output.',
    tags: ['React', 'jsPDF', 'Tailwind CSS', 'Dynamic Forms'],
    icon: FileText,
    image: '/questionpaper.png',
    featured: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/shivangishrey0/ExamPaper-Generator',
    color: 'purple',
  },
  {
    id: 3,
    title: 'Collaborative Whiteboard',
    description: 'A real-time collaborative whiteboard application built with Canvas API. Features include freehand drawing, shapes, color picker, eraser, undo/redo, and a polished toolbar UI. State management handles complex drawing operations seamlessly.',
    tags: ['React', 'Canvas API', 'Tailwind CSS', 'State Management'],
    icon: Pen,
    image: '/whiteboard.png',
    featured: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/shivangishrey0/Collaborative-Whiteboard',
    color: 'cyan',
  },
];

export const certificates = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Programming Pathshala',
    date: '2025',
    verifyUrl: '/certificates/programming_pathshala_certificate.pdf',
  },
  {
    title: 'Cloud Computing',
    issuer: 'Nptel',
    date: '2025',
    verifyUrl: '/certificates/Cloud_Computing.pdf',
  },
  {
    title: 'Generative Ai Professional Certificate',
    issuer: 'Oracle',
    date: '2025',
    verifyUrl: '/certificates/oci-gen-ai-professional.pdf',
  },
  {
    title: 'Data Science Professional Certificate',
    issuer: 'Oracle',
    date: '2025',
    verifyUrl: '/certificates/oci-data-science-professional.pdf',
  },
];

export const achievements = [
  {
    platform: 'LeetCode',
    subtitle: 'Competitive Programming',
    profileUrl: 'https://leetcode.com/u/shivangi_shreya0/',
    totalSolved: 200,
    stats: [
      { label: 'Easy', count: 122, color: '#00b8a3' },
      { label: 'Medium', count: 58, color: '#ffc01e' },
      { label: 'Hard', count: 20, color: '#ef4743' },
    ],
  },
];

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { name: 'GitHub', icon: Github, url: personalInfo.github },
  { name: 'LinkedIn', icon: Linkedin, url: personalInfo.linkedin },
  { name: 'Email', icon: Mail, url: `mailto:${personalInfo.email}` },
];
