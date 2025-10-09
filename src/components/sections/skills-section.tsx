import { MotionWrapper } from '@/components/motion-wrapper';
import { skills } from '@/lib/data';

export default function SkillsSection() {
  return (
    <MotionWrapper id="skills">
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl">
          My <span className="text-primary">Skills</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 bg-secondary text-secondary-foreground font-medium px-4 py-3 rounded-lg text-md"
          >
            <skill.icon className="h-6 w-6" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </MotionWrapper>
  );
}
