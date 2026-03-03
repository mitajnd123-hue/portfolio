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
  title: 'Full Stack Developer | PHP & Next.js Specialist',
  bio: 'Passionate developer working on iPilot (Yii/PHP), Staylance, and other cutting-edge web applications. Specializing in PHP, React, Next.js, and database-driven applications.',
  location: 'India',
  email: 'mita@nuwaveindia.net',
  phone: '+91 (234) 567-890',
  availability: 'Available for freelance projects',
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
    title: 'iPilot Platform',
    description: 'Advanced AI assistant platform built with Yii PHP, planning Next.js migration',
    icon: '🤖',
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
