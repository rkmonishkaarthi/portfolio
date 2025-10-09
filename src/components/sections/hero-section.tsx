import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { AnimatedText } from '@/components/animated-text';
import { MotionWrapper } from '@/components/motion-wrapper';

export default function HeroSection() {
  return (
    <MotionWrapper
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center relative"
    >
      <div className='absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5'>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' style={{ background: 'linear-gradient(180deg, #915EFF, transparent)' }} />
        </div>

        <div>
          <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className='text-[#915EFF]'>Soumyajit</span>
          </h1>
          <div className="mt-2 text-xl md:text-2xl text-muted-foreground">
            I'm a <AnimatedText />
          </div>
        </div>
      </div>

       <div className="absolute bottom-20 w-full flex justify-center items-center">
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <div
              className='w-3 h-3 rounded-full bg-secondary mb-1 animate-bounce'
            />
          </div>
        </a>
      </div>
    </MotionWrapper>
  );
}
