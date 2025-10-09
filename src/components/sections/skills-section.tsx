"use client";

import { MotionWrapper } from '@/components/motion-wrapper';
import { skills } from '@/lib/data';
import { Card, CardContent } from '../ui/card';

export default function SkillsSection() {
  return (
    <MotionWrapper id="skills">
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Here are some of the technologies I'm proficient in.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <Card key={skill.name} className="p-6 flex flex-col items-center justify-center gap-4 bg-secondary/50 hover:shadow-lg hover:shadow-primary/20 transition-shadow">
            <skill.icon className="w-16 h-16 text-primary" />
            <p className="font-semibold text-lg">{skill.name}</p>
          </Card>
        ))}
      </div>
    </MotionWrapper>
  );
}
