import type { NavLink, Project, Skill, SocialLink } from './types';
import {
  Github,
  Linkedin,
  Mail,
  CodeXml,
  Server,
  Database,
  Wind,
  Figma,
  GitFork,
  Smartphone,
  LayoutTemplate,
  BrainCircuit,
} from 'lucide-react';

export const navLinks: NavLink[] = [
  { name: 'Home', hash: '#home' },
  { name: 'About', hash: '#about' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Contact', hash: '#contact' },
];

export const skills: Skill[] = [
  { name: 'React', icon: CodeXml },
  { name: 'Next.js', icon: LayoutTemplate },
  { name: 'Node.js', icon: Server },
  { name: 'MongoDB', icon: Database },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'Figma', icon: Figma },
  { name: 'Git', icon: GitFork },
  { name: 'React Native', icon: Smartphone },
  { name: 'Firebase', icon: BrainCircuit },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:youremail@example.com',
    icon: Mail,
  },
];

export const mockProjects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with a modern UI and a robust backend.',
      tags: ['React', 'Next.js', 'Stripe'],
      imageUrl: 'https://picsum.photos/seed/p1/600/400',
      imageHint: 'web app',
      githubUrl: 'https://github.com',
      liveUrl: '#',
      order: 1,
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A productivity app to help users organize their tasks and stay on track.',
      tags: ['React Native', 'Firebase'],
      imageUrl: 'https://picsum.photos/seed/p2/600/400',
      imageHint: 'mobile app',
      githubUrl: 'https://github.com',
      liveUrl: '#',
      order: 2,
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my projects and skills.',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      imageUrl: 'https://picsum.photos/seed/p3/600/400',
      imageHint: 'portfolio website',
      githubUrl: 'https://github.com',
      liveUrl: '#',
      order: 3,
    },
];
