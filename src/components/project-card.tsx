"use client";

import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowUpRight, Github } from 'lucide-react';
import { Badge } from './ui/badge';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full bg-card/80 backdrop-blur-sm border-border/60 p-6 rounded-2xl group relative">
      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6">
        <Button variant="ghost" size="icon" className="bg-secondary hover:bg-secondary/80 rounded-full h-12 w-12 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
          <ArrowUpRight className="h-6 w-6 text-foreground/80" />
        </Button>
      </Link>
      
      <CardContent className="flex-grow p-0">
        <div className="text-primary font-bold text-lg mb-2">
          {String(index + 1).padStart(2, '0')}
        </div>
        <h3 className="font-bold text-2xl text-foreground mb-3">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
      </CardContent>
      
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="font-normal">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}