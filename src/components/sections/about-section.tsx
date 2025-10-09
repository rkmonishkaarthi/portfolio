"use client";
import Image from "next/image";
import { MotionWrapper } from '@/components/motion-wrapper';
import { Button } from "../ui/button";

export default function AboutSection() {
  return (
    <MotionWrapper id="about" className="grid md:grid-cols-2 gap-16 items-center">
      <div className="relative w-full h-80 md:h-96">
          <Image 
            src="https://picsum.photos/seed/about/600/600" 
            alt="About me" 
            fill
            className="object-cover rounded-3xl"
            data-ai-hint="portrait professional"
          />
      </div>
      <div className="text-left">
        <h2 className="font-bold text-4xl mb-4">
          About <span className="text-primary">Me</span>
        </h2>
        <h3 className="font-semibold text-2xl mb-4 text-foreground/90">Fullstack Developer!</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Next.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
        <Button>Read More</Button>
      </div>

    </MotionWrapper>
  );
}
