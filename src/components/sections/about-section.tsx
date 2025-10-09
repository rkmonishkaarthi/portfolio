"use client";
import { MotionWrapper } from '@/components/motion-wrapper';

export default function AboutSection() {
  return (
    <MotionWrapper id="about">
      <div className="text-left">
        <p className="text-secondary-foreground/80 sm:text-[18px] text-[14px] uppercase tracking-wider">Introduction</p>
        <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </div>

      <p className="mt-4 text-secondary-foreground/70 text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Next.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>

    </MotionWrapper>
  );
}
