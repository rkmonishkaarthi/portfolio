"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Github, ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full bg-card/80 backdrop-blur-sm border-border/60 p-5 rounded-2xl group">
      <div className="relative w-full h-56 overflow-hidden rounded-lg">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
          data-ai-hint={project.imageHint || "project"}
        />
      </div>

      <CardContent className="mt-5 flex-grow p-0">
        <h3 className="font-bold text-2xl text-primary">{project.title}</h3>
        <p className="mt-2 text-muted-foreground text-sm">{project.description}</p>
      </CardContent>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <p key={tag} className="text-sm font-medium text-primary/80">
            #{tag}
          </p>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4">
        <Button asChild variant="outline">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2"/> GitHub
          </Link>
        </Button>
        <Button asChild>
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2"/> Live Demo
          </Link>
        </Button>
      </div>
    </Card>
  );
}
