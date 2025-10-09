import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, FileText, Github } from 'lucide-react';
import { AnimatedText } from '@/components/animated-text';
import { MotionWrapper } from '@/components/motion-wrapper';

export default function HeroSection() {
  return (
    <MotionWrapper
      id="home"
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center relative"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-36 h-36 md:w-48 md:h-48">
          <Image
            src="https://picsum.photos/seed/avatar/200/200"
            alt="Your Name"
            width={192}
            height={192}
            data-ai-hint="professional avatar"
            className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
            priority
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
            Hi, I'm John Doe
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-muted-foreground">
            I'm a <AnimatedText />
          </p>
          <p className="mt-4 max-w-xl text-foreground/80">
            I specialize in building exceptional digital experiences. My focus is on creating responsive, high-performance web applications with a keen eye for design and user experience.
          </p>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <Button asChild size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#">
                <FileText className="mr-2" />
                Download CV
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
         <Link href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-8 w-8 text-muted-foreground" />
        </Link>
      </div>
    </MotionWrapper>
  );
}
