// Profile Data - Easy to update your personal information

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  experience: {
    years: number;
    projectsCompleted: number;
    clientSatisfaction: number;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    portfolio?: string;
  };
}

export const profile: ProfileData = {
  name: 'Mita Makwana',
  title: 'Full Stack Developer @ Nuwave Communications',
  bio: 'Passionate developer currently working at Nuwave Communications on iPilot (Telecommunication AI Platform), Staylance, and other cutting-edge web applications. Specializing in PHP, React, Next.js, and database-driven applications for enterprise solutions.',
  location: 'India',
  email: 'mita@nuwaveindia.net',
  phone: '+91 (234) 567-890',
  availability: 'Open to opportunities',
  experience: {
    years: 3,
    projectsCompleted: 15,
    clientSatisfaction: 100,
  },
  socialLinks: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    portfolio: 'https://yourportfolio.com',
  },
};

// Skills organized by category
export const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    items: ['PHP', 'Yii Framework', 'Node.js', 'MySQL', 'SQL', 'REST API'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'SQL', 'MongoDB', 'PostgreSQL', 'Database Design'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'CI/CD'],
  },
];

// Current focus areas
export const currentFocus = [
  {
    title: 'iPilot @ Nuwave',
    description: 'AI-powered telecom platform running in production at Nuwave Communications',
    icon: '📞',
  },
  {
    title: 'Staylance',
    description: 'Freelance management platform for modern professionals',
    icon: '💼',
  },
  {
    title: 'Fitness & Wellness',
    description: 'Creating health-focused applications with data analytics',
    icon: '💪',
  },
];
