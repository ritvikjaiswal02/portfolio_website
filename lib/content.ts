// ============================================
// TYPE DEFINITIONS
// ============================================

export interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  tech: string[];
  github?: string;
  live?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
}

// ============================================
// PROJECTS
// ============================================

export const projects: Project[] = [
  {
    id: 'squadtalk',
    title: 'SquadTalk',
    description:
      'A seamless collaboration ecosystem where teams connect, communicate, and create together—bringing messaging, video, and workflows into one unified experience.',
    details:
      'Engineered a robust real-time architecture that handles thousands of concurrent connections. Implemented advanced state management and synchronization patterns to ensure instant updates across all clients, delivering enterprise-grade reliability.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'REST APIs',
      'JWT',
      'Stream',
      'Clerk',
    ],
    github: '',
    live: 'https://squad-talk-frontend.vercel.app/',
  },
  {
    id: 'inksync',
    title: 'InkSync',
    description:
      'Where creativity converges in real-time—a collaborative canvas where multiple minds paint, draw, and ideate simultaneously without boundaries.',
    details:
      'Designed and implemented ultra-low-latency synchronization algorithms that eliminate visual lag. Built conflict resolution systems that maintain artistic integrity while enabling seamless multi-user creativity.',
    tech: ['React', 'Node.js', 'WebSockets', 'Canvas APIs'],
    github: '',
    live: 'https://inksync-riog.onrender.com',
  },
];

// ============================================
// EXPERIENCE
// ============================================

export const experience: Experience[] = [
  {
    id: 'switchit',
    company: 'SwitchIT',
    role: 'Software Development Engineer Intern',
    period: 'Sept 2025 – Jan 2026',
    achievements: [
      'Spearheaded full-stack development initiatives, seamlessly bridging frontend elegance with backend robustness in a high-traffic production environment',
      'Architected intelligent recommendation algorithms that personalized user experiences, increasing engagement metrics through data-driven insights and optimized feed delivery',
      'Engineered bulletproof entity management systems using UUID-based architecture, eliminating data inconsistencies and ensuring seamless service interoperability across distributed systems',
      'Collaborated with cross-functional engineering teams to ship mission-critical features that directly impacted thousands of active users, maintaining 99.9% uptime',
    ],
  },
];

// ============================================
// SKILLS
// ============================================

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Prisma'],
  },
  {
    category: 'Tools & APIs',
    skills: ['REST APIs', 'JWT Authentication', 'Git', 'GitHub', 'Vercel', 'Postman'],
  },
];

// ============================================
// CONTACT
// ============================================

export const contact: Contact = {
  email: 'ritvikjaiswal020203@gmail.com',
  github: 'https://github.com/ritvikjaiswal02',
  linkedin: 'https://linkedin.com/in/ritvikjaiswal',
};
