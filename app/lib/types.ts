// Type definitions for your application

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  link?: string;
  image?: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  href: string;
  label: string;
}
