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
  LayoutTemplate,
  BrainCircuit,
  Home,
  User,
  Lightbulb,
  Briefcase,
  Twitter,
  Instagram,
  Download,
  Send,
  FileText,
} from 'lucide-react';

export const navLinks: NavLink[] = [
  { name: 'Home', hash: '#home', icon: Home },
  { name: 'About', hash: '#about', icon: User },
  { name: 'Skills', hash: '#skills', icon: Lightbulb },
  { name: 'Projects', hash: '#projects', icon: Briefcase },
  { name: 'Contact', hash: '#contact', icon: Send },
  { name: 'Resume', hash: '#resume', icon: FileText },
];

export const skills: Skill[] = [
  { name: 'React', icon: CodeXml },
  { name: 'Next.js', icon: LayoutTemplate },
  { name: 'Node.js', icon: Server },
  { name: 'MongoDB', icon: Database },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'Figma', icon: Figma },
  { name: 'Git', icon: GitFork },
  { name: 'Firebase', icon: BrainCircuit },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:example@gmail.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: Twitter,
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: Github,
  },
];

export const mockProjects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with a modern UI and a robust backend.',
      tags: ['React', 'Next.js', 'Stripe'],
      imageUrl: 'https://picsum.photos/seed/proj1/600/400',
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
      imageUrl: 'https://picsum.photos/seed/proj2/600/400',
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
      imageUrl: 'https://picsum.photos/seed/proj3/600/400',
      imageHint: 'portfolio website',
      githubUrl: 'https://github.com',
      liveUrl: '#',
      order: 3,
    },
];
