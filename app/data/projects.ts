// Projects Data - Easy to update and maintain
export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  link?: string;
  github?: string;
  image?: string;
  date: string;
  featured?: boolean;
}

export const projects: ProjectData[] = [
  {
    id: 'ipilot',
    title: 'iPilot - AI Assistant Platform',
    description: 'An intelligent AI-powered assistant platform built with Yii PHP framework. Features include natural language processing, context-aware responses, multi-user support, real-time chat functionality, and advanced AI capabilities. Database powered by MySQL/SQL. Planned migration to Next.js in future.',
    tech: ['Yii Framework', 'PHP', 'MySQL', 'SQL', 'JavaScript', 'AI/ML', 'REST API'],
    category: 'AI/ML Platform',
    status: 'Completed',
    link: '#',
    github: 'https://github.com/mitajnd123-hue/ipilot',
    date: '2026-03',
    featured: true,
  },
  {
    id: 'staylance',
    title: 'Staylance - Freelance Management Platform',
    description: 'Complete freelance project management solution with client management, project tracking, invoice generation, time tracking, and payment integration. Built for independent professionals and agencies.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Stripe', 'Chart.js'],
    category: 'SaaS',
    status: 'Completed',
    link: '#',
    github: 'https://github.com/mitajnd123-hue/staylance',
    date: '2025-12',
    featured: true,
  },
  {
    id: 'fitness-app',
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness tracking application with workout plans, progress tracking, nutrition guides, goal setting, and community features. Helps users achieve their fitness goals with personalized recommendations.',
    tech: ['Next.js', 'PWA', 'Chart.js', 'Firebase', 'Tailwind CSS', 'React'],
    category: 'Mobile App',
    status: 'Completed',
    link: '#',
    github: 'https://github.com/mitajnd123-hue/fitness-app',
    date: '2026-02',
    featured: true,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with payment integration, inventory management, admin dashboard, and customer analytics.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Redux'],
    category: 'Web Application',
    status: 'Planning',
    link: '#',
    github: '#',
    date: '2026-04',
  },
  {
    id: 'task-management',
    title: 'Task Management System',
    description: 'Collaborative task management tool with real-time updates, team collaboration features, project tracking, and comprehensive analytics.',
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Docker'],
    category: 'SaaS',
    status: 'Planning',
    link: '#',
    github: '#',
    date: '2026-05',
  },
  {
    id: 'social-dashboard',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for managing multiple social media accounts with automated posting, engagement tracking, and detailed insights.',
    tech: ['Next.js', 'Python', 'Redis', 'Chart.js', 'AWS'],
    category: 'Analytics',
    status: 'Planning',
    link: '#',
    github: '#',
    date: '2026-06',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Portal',
    description: 'Property listing platform with advanced search filters, virtual tours, appointment scheduling, and CRM integration.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind', 'Google Maps API'],
    category: 'Web Application',
    status: 'Planning',
    link: '#',
    github: '#',
    date: '2026-07',
  },
  {
    id: 'ai-content',
    title: 'AI Content Generator',
    description: 'AI-powered content creation tool for blogs, social media posts, and marketing copy with multiple templates and customization options.',
    tech: ['React', 'OpenAI API', 'Node.js', 'MongoDB', 'Express'],
    category: 'AI/ML',
    status: 'Planning',
    link: '#',
    github: '#',
    date: '2026-08',
  },
];

// Get featured projects
export const getFeaturedProjects = (): ProjectData[] => {
  return projects.filter(project => project.featured);
};

// Get projects by category
export const getProjectsByCategory = (category: string): ProjectData[] => {
  return projects.filter(project => project.category === category);
};

// Get projects by status
export const getProjectsByStatus = (status: ProjectData['status']): ProjectData[] => {
  return projects.filter(project => project.status === status);
};

// Get project by id
export const getProjectById = (id: string): ProjectData | undefined => {
  return projects.find(project => project.id === id);
};

// Get all unique categories
export const getAllCategories = (): string[] => {
  return [...new Set(projects.map(project => project.category))];
};
