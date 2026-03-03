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
    description: 'An intelligent AI-powered assistant platform built with Next.js. Features include natural language processing, context-aware responses, multi-user support, and real-time chat functionality with advanced AI capabilities.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AI/ML', 'WebSocket'],
    category: 'AI/ML Platform',
    status: 'In Progress',
    link: '#',
    github: 'https://github.com/yourusername/ipilot',
    date: '2026-03',
    featured: true,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with payment integration, inventory management, admin dashboard, and customer analytics.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Redux'],
    category: 'Web Application',
    status: 'Completed',
    link: '#',
    github: 'https://github.com/yourusername/ecommerce',
    date: '2025-12',
    featured: true,
  },
  {
    id: 'task-management',
    title: 'Task Management System',
    description: 'Collaborative task management tool with real-time updates, team collaboration features, project tracking, and comprehensive analytics.',
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Docker'],
    category: 'SaaS',
    status: 'Completed',
    link: '#',
    github: 'https://github.com/yourusername/taskmanager',
    date: '2025-10',
  },
  {
    id: 'social-dashboard',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for managing multiple social media accounts with automated posting, engagement tracking, and detailed insights.',
    tech: ['Next.js', 'Python', 'Redis', 'Chart.js', 'AWS'],
    category: 'Analytics',
    status: 'In Progress',
    link: '#',
    date: '2026-01',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Portal',
    description: 'Property listing platform with advanced search filters, virtual tours, appointment scheduling, and CRM integration.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind', 'Google Maps API'],
    category: 'Web Application',
    status: 'Completed',
    link: '#',
    github: 'https://github.com/yourusername/realestate',
    date: '2025-09',
  },
  {
    id: 'ai-content',
    title: 'AI Content Generator',
    description: 'AI-powered content creation tool for blogs, social media posts, and marketing copy with multiple templates and customization options.',
    tech: ['React', 'OpenAI API', 'Node.js', 'MongoDB', 'Express'],
    category: 'AI/ML',
    status: 'Completed',
    link: '#',
    date: '2025-11',
  },
  {
    id: 'fitness-app',
    title: 'Fitness Tracking App',
    description: 'Mobile-first fitness tracking application with workout plans, progress tracking, nutrition guides, and community features.',
    tech: ['Next.js', 'PWA', 'Chart.js', 'Firebase', 'TensorFlow'],
    category: 'Mobile App',
    status: 'In Progress',
    link: '#',
    date: '2026-02',
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
