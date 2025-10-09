import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  name: string;
  hash: string;
  icon: LucideIcon;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageHint?: string;
  githubUrl: string;
  liveUrl: string;
  order: number;
};

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: LucideIcon;
};
