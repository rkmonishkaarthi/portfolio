import { AnimatedText } from '@/components/animated-text';
import { MotionWrapper } from '@/components/motion-wrapper';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <MotionWrapper
      id="home"
      className="min-h-[calc(100vh-8rem)] grid grid-cols-1 md:grid-cols-2 items-center justify-between"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-4">
          Hi There! <span className="animate-wave">👋</span>
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold">
          I&apos;M <span className="text-primary">Monish Kaarthi R K</span>
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold">
          <AnimatedText />
        </h3>
      </div>
      <div className="hidden md:flex justify-center items-center">
         <Image
          src="https://soumyajit.vercel.app/static/media/home-main.541f8b16.svg"
          alt="Hero"
          width={500}
          height={500}
          className="pointer-events-none"
        />
      </div>
    </MotionWrapper>
  );
}
