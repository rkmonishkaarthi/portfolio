import { AnimatedText } from '@/components/animated-text';
import { MotionWrapper } from '@/components/motion-wrapper';

export default function HeroSection() {
  return (
    <MotionWrapper
      id="home"
      className="min-h-[calc(100vh-8rem)] flex items-center justify-start"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl md:text-7xl font-bold flex items-center gap-4">
          Hi There! <span className="animate-wave">👋</span>
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold">
          I&apos;M <span className="text-primary">Monish Kaarthi R K</span>
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-primary">
          <AnimatedText />
        </h3>
      </div>
    </MotionWrapper>
  );
}
