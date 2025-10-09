"use client";
import { MotionWrapper } from '@/components/motion-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/lib/data';
import Image from 'next/image';

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

      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {skills.map((skill) => (
          <div key={skill.name} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div className="bg-card rounded-[20px] py-5 px-12 min-h-[120px] flex justify-evenly items-center flex-col">
              <skill.icon className="w-16 h-16 object-contain text-primary" />
              <h3 className="text-white text-[16px] font-bold text-center">
                {skill.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </MotionWrapper>
  );
}
