export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  review: string;
  avatarUrl: string;
  rating: number;
}

export interface ProcessStep {
  id: string;
  phase: string;
  name: string;
  description: string;
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
}
