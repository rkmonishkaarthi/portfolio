import { Button } from '@/components/ui/button';
import { AnimatedText } from '@/components/animated-text';
import { MotionWrapper } from '@/components/motion-wrapper';
import Link from 'next/link';
import { socialLinks } from '@/lib/data';

export default function HeroSection() {
  return (
    <MotionWrapper
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center"
    >
      <div className="grid md:grid-cols-1 gap-12 items-center">
        <div className="flex flex-col gap-4 text-center items-center">
          <h3 className="text-3xl font-bold">Hello, It's Me</h3>
          <h1 className="text-5xl font-bold">
            <AnimatedText roles={['Soumyajit Behera']} />
          </h1>
          <h3 className="text-3xl font-bold">
            And I'm a <AnimatedText />
          </h3>
          <p className="text-muted-foreground max-w-2xl">
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and
            Next.js. 
          </p>
          <div className="flex items-center gap-4 my-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-2 rounded-full border-2 border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          <Button size="lg" asChild>
            <a href="#" download>
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </MotionWrapper>
  );
}
