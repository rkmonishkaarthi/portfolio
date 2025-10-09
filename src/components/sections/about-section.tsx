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
          I’m a passionate Full Stack Developer 👨‍💻 and CSE student with a strong foundation in Java, MySQL, and MongoDB. I love building efficient and scalable web applications while exploring cloud technologies, networking, and DevOps. A quick learner and problem solver, I’m always eager to work with new tools and frameworks to turn ideas into impactful digital solutions. 🚀
        </p>
      </div>
    </MotionWrapper>
  );
}
