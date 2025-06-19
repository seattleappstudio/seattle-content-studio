export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  categories: BlogCategory[]; // Changed from single category to array
  readTime: string;
  image: string;
  imageAlt: string;
}

export type BlogCategory = 
  | 'AI-Driven Content'
  | 'Technical Documentation'
  | 'Whitepapers & Case Studies'
  | 'Tech Event Coverage'
  | 'AI Automation Services'
  | 'App-Based Content & Sites'
  | 'Case Studies & Best Practices'
  | 'Career Marketing';

export const BLOG_CATEGORIES: BlogCategory[] = [
  'AI-Driven Content',
  'Technical Documentation',
  'Whitepapers & Case Studies',
  'Tech Event Coverage',
  'AI Automation Services',
  'App-Based Content & Sites',
  'Case Studies & Best Practices',
  'Career Marketing'
];