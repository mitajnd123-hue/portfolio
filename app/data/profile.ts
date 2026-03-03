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
  name: 'Your Name',
  title: 'Full Stack Developer | AI Enthusiast',
  bio: 'Passionate developer working on iPilot and other cutting-edge web applications. Specializing in React, Next.js, and AI integration.',
  location: 'San Francisco, CA',
  email: 'hello@example.com',
  phone: '+1 (234) 567-890',
  availability: 'Available for freelance projects',
  experience: {
    years: 5,
    projectsCompleted: 50,
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
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Vue.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL'],
  },
  {
    category: 'AI & ML',
    items: ['OpenAI API', 'TensorFlow', 'Python', 'Natural Language Processing'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Jest'],
  },
];

// Current focus areas
export const currentFocus = [
  {
    title: 'iPilot Development',
    description: 'Building an advanced AI assistant platform with Next.js',
    icon: '🤖',
  },
  {
    title: 'AI Integration',
    description: 'Exploring modern AI technologies and integrations',
    icon: '🧠',
  },
  {
    title: 'Open Source',
    description: 'Contributing to open source projects and community',
    icon: '🌟',
  },
];
