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
  FileText,
  Home
} from 'lucide-react';

export const navLinks: NavLink[] = [
  { name: 'Home', hash: '#home', icon: Home },
  { name: 'About', hash: '#about', icon: BrainCircuit },
  { name: 'Projects', hash: '#projects', icon: CodeXml },
  { name: 'Resume', hash: '#resume', icon: FileText },
  { name: 'Contact', hash: '#contact', icon: Mail },
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
      imageUrl: 'https://soumyajit.vercel.app/static/media/carrent.246a4804.png',
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
      imageUrl: 'https://soumyajit.vercel.app/static/media/jobit.02a3c206.png',
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
      imageUrl: 'https://soumyajit.vercel.app/static/media/tripguide.2f096242.png',
      imageHint: 'portfolio website',
      githubUrl: 'https://github.com',
      liveUrl: '#',
      order: 3,
    },
];
