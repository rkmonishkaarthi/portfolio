import { MotionWrapper } from '@/components/motion-wrapper';

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
    </MotionWrapper>
  );
}
