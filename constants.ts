import { Box, Globe, MessageCircle, Mic, Smartphone, Video } from 'lucide-react';
import { Service, Project, PricingPlan } from './types';

export const CONTACT_INFO = {
  whatsapp: "+917988454640",
  email: "hiteshhyadav1@gmail.com",
  instagram: "socialifymasters"
};

export const SERVICES: Service[] = [
  {
    id: '3d-ads',
    title: '3D Paid Ads',
    description: 'Stop the scroll with immersive 3D advertising that pops off the screen.',
    icon: Box,
    features: ['High-Conversion Visuals', '10s Loop Optimization', 'Social Media Ready'],
    image: 'https://picsum.photos/id/1/800/600'
  },
  {
    id: 'web-design',
    title: 'Website Design',
    description: 'Futuristic, fast, and converting websites tailored to your brand identity.',
    icon: Globe,
    features: ['Research & Wireframing', 'Responsive Design', 'SEO Optimization'],
    image: 'https://picsum.photos/id/2/800/600'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Marketing',
    description: 'Direct-to-consumer strategies with automated bulk messaging systems.',
    icon: MessageCircle,
    features: ['Bulk Messaging', 'Chatbot Integration', 'Read Receipt Tracking'],
    image: 'https://picsum.photos/id/3/800/600'
  },
  {
    id: 'ai-voice',
    title: 'AI Voice Solutions',
    description: 'Automated calling systems that sound human and handle follow-ups.',
    icon: Mic,
    features: ['Multilingual Support', 'Smart Scheduling', 'Automated Follow-ups'],
    image: 'https://picsum.photos/id/4/800/600'
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Native and Cross-platform apps built for scalability and performance.',
    icon: Smartphone,
    features: ['iOS & Android', 'Modern UI/UX', 'Cloud Integration'],
    image: 'https://picsum.photos/id/5/800/600'
  },
  {
    id: 'video-ads',
    title: 'Product Video Ads',
    description: 'Cinematic product showcases that tell your story in seconds.',
    icon: Video,
    features: ['Cinematic Editing', 'UGC Style', '3D Product Rotation'],
    image: 'https://picsum.photos/id/6/800/600'
  }
];

export const PORTFOLIO: Project[] = [
  { id: '1', title: 'Neon Sneakers', category: '3D Ads', image: 'https://picsum.photos/id/103/600/400', stats: '300% ROAS' },
  { id: '2', title: 'FinTech Dashboard', category: 'App UI', image: 'https://picsum.photos/id/104/600/400', stats: '50k Downloads' },
  { id: '3', title: 'Luxury Realty', category: 'Website', image: 'https://picsum.photos/id/105/600/400', stats: '40% Conv. Rate' },
  { id: '4', title: 'Energy Drink Launch', category: 'Video', image: 'https://picsum.photos/id/106/600/400', stats: '1M Views' },
  { id: '5', title: 'Crypto Exchange', category: 'Website', image: 'https://picsum.photos/id/107/600/400' },
  { id: '6', title: 'Smart Watch Promo', category: '3D Ads', image: 'https://picsum.photos/id/108/600/400' },
];

export const PRICING: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$599',
    features: ['Social Media Strategy', '5 Static Posts/mo', 'Basic Website Maintenance', 'Monthly Report'],
    recommended: false
  },
  {
    name: 'Growth',
    price: '$999',
    features: ['3D Ad Campaigns (2/mo)', 'Full Website SEO', 'WhatsApp Marketing Setup', 'Weekly Strategy Calls', '2 Video Ads'],
    recommended: true
  },
  {
    name: 'Elite',
    price: 'Custom',
    features: ['Full App Development', 'Unlimited 3D Assets', 'Dedicated Account Manager', 'AI Voice System Integration', '24/7 Support'],
    recommended: false
  }
];