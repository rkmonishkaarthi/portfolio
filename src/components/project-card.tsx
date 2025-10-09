"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Github } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full bg-card/80 backdrop-blur-sm border-border/60 p-5 rounded-2xl">
      <div className="relative w-full h-56">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover rounded-lg"
          data-ai-hint={project.imageHint || "project"}
        />
         <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <Button asChild variant="secondary" size="icon" className="w-10 h-10 rounded-full">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-1/2 w-1/2" />
            </Link>
          </Button>
        </div>
      </div>

      <CardContent className="mt-5 flex-grow p-0">
        <h3 className="font-bold text-2xl">{project.title}</h3>
        <p className="mt-2 text-secondary-foreground/70 text-sm">{project.description}</p>
      </CardContent>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <p key={tag} className="text-sm purple-text-gradient">
            #{tag}
          </p>
        ))}
      </div>
    </Card>
  );
}
