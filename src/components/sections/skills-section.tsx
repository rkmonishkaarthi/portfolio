import { MotionWrapper } from '@/components/motion-wrapper';
import { skills } from '@/lib/data';

export default function SkillsSection() {
  return (
    <MotionWrapper id="skills">
      <div className="text-left">
        <p className="text-secondary-foreground/80 sm:text-[18px] text-[14px] uppercase tracking-wider">My Tech Stack</p>
        <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Technologies.
        </h2>
      </div>
      <div className="mt-12 flex flex-row flex-wrap justify-center gap-10">
        {skills.map((skill) => (
           <div className='w-28 h-28' key={skill.name}>
            <skill.icon className="w-full h-full object-contain p-2 hover:animate-pulse" />
          </div>
        ))}
      </div>
    </MotionWrapper>
  );
}
