import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: '3D Ads' | 'Website' | 'App UI' | 'Video';
  image: string;
  stats?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}