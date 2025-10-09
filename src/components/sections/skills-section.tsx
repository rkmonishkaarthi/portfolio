import { MotionWrapper } from '@/components/motion-wrapper';
import { professionalSkills, tools } from '@/lib/data';

export default function SkillsSection() {
  return (
    <MotionWrapper id="skills">
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl">
          Professional <span className="text-primary">Skillset</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {professionalSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 bg-secondary text-secondary-foreground font-medium px-4 py-3 rounded-lg text-md"
          >
            <skill.icon className="h-6 w-6" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="text-center mt-20 mb-12">
        <h2 className="font-bold text-4xl">
          <span className="text-primary">Tools</span> I Use
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center gap-3 bg-secondary text-secondary-foreground font-medium px-4 py-3 rounded-lg text-md"
          >
            <tool.icon className="h-6 w-6" />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </MotionWrapper>
  );
}
