import { MotionWrapper } from '@/components/motion-wrapper';
import { skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default function SkillsSection() {
  return (
    <MotionWrapper id="skills">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          My Skills
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Here are some of the technologies I'm proficient in.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <Badge key={skill.name} variant="secondary" className="text-lg px-4 py-2 flex items-center gap-2">
            <skill.icon className="h-5 w-5" />
            <span>{skill.name}</span>
          </Badge>
        ))}
      </div>
    </MotionWrapper>
  );
}
