import { MotionWrapper } from '@/components/motion-wrapper';
import { socialLinks } from '@/lib/data';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <MotionWrapper
      id="home"
      className="min-h-[calc(80vh-8rem)] flex flex-col justify-center"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl md:text-6xl font-bold flex items-center gap-4">
          Hello! <span className="animate-wave">👋</span>
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold">
          I&apos;m <span className="text-primary">Monish Kaarthi R K</span>
        </h2>
        <h3 className="text-xl md:text-2xl font-code text-muted-foreground mt-2">
          Full Stack Developer
        </h3>
      </div>
      <div className="mt-8 flex items-center gap-6">
        {socialLinks.map((link) => (
          <Link href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <link.icon className="h-7 w-7" />
          </Link>
        ))}
      </div>
    </MotionWrapper>
  );
}
