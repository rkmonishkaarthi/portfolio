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
  BrainCircuit,
  Home,
  User,
  Lightbulb,
  Briefcase,
  Twitter,
  FileText,
  Send,
  TerminalSquare,
  Webhook,
  Triangle,
} from 'lucide-react';

export const navLinks: NavLink[] = [
  { name: 'Home', hash: '#home', icon: Home },
  { name: 'About', hash: '#about', icon: User },
  { name: 'Skills', hash: '#skills', icon: Lightbulb },
  { name: 'Projects', hash: '#projects', icon: Briefcase },
  { name: 'Contact', hash: '#contact', icon: Send },
  { name: 'Resume', hash: '#resume', icon: FileText },
];

export const professionalSkills: Skill[] = [
  { name: 'C', icon: CodeXml },
  { name: 'Java', icon: CodeXml },
  { name: 'JavaScript', icon: CodeXml },
  { name: 'React', icon: CodeXml },
  { name: 'Node.js', icon: Server },
  { name: 'MySQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Firebase', icon: BrainCircuit },
  { name: 'Tailwind CSS', icon: Wind },
];

export const tools: Skill[] = [
  { name: 'Git', icon: GitFork },
  { name: 'Figma', icon: Figma },
  { name: 'Visual Studio Code', icon: TerminalSquare },
  { name: 'Postman', icon: Webhook },
  { name: 'Vercel', icon: Triangle },
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
      title: 'Crisis Management System',
      description: 'A dynamic web platform built to enhance the detection, management, and response processes during natural disasters and emergency situations.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'OpenWeatherMap API', 'Map APIs'],
      imageUrl: 'https://picsum.photos/seed/crisis/600/400',
      imageHint: 'disaster management',
      githubUrl: 'https://github.com/rkmonishkaarthi/Crisis-Management',
      liveUrl: '',
      order: 1,
    },
    {
      id: '2',
      title: 'Student Management System',
      description: 'A comprehensive platform developed to simplify student data management, allowing efficient handling of records, performance tracking, and academic details.',
      tags: ['HTML', 'CSS', 'Node', 'Express', 'React', 'MongoDB', 'MaterialUI'],
      imageUrl: 'https://picsum.photos/seed/student/600/400',
      imageHint: 'student database',
      githubUrl: 'https://github.com/rkmonishkaarthi/Student-Management-System',
      liveUrl: '',
      order: 2,
    },
    {
      id: '3',
      title: 'AI-Powered Fitness Tracker',
      description: 'An intelligent fitness tracking platform that uses AI to monitor workouts, count repetitions, and analyze performance for more effective training.',
      tags: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV', 'Flask', 'React.js', 'MongoDB'],
      imageUrl: 'https://picsum.photos/seed/fitness/600/400',
      imageHint: 'fitness tracking',
      githubUrl: 'https://github.com/rkmonishkaarthi/AI-Powered-Fitness-Tracker-and-Rep-Calculator',
      liveUrl: '',
      order: 3,
    },
];
