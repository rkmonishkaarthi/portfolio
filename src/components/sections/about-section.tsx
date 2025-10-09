"use client";
import { MotionWrapper } from '@/components/motion-wrapper';

export default function AboutSection() {
  return (
    <MotionWrapper id="about" className="grid md:grid-cols-3 gap-8 md:gap-16 items-start">
      <div className="md:col-span-1">
        <h2 className="text-4xl md:text-5xl font-bold">
          About
          <span className="block h-2 w-20 bg-primary mt-2 rounded-full"></span>
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Me</h2>
      </div>
      <div className="md:col-span-2 text-left">
        <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Next.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
      </div>
    </MotionWrapper>
  );
}
