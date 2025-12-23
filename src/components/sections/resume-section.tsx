import { MotionWrapper } from '@/components/motion-wrapper';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function ResumeSection() {
  return (
    <MotionWrapper id="resume" className="text-center">
      <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Resume
      </h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        Download my resume to get a more detailed look at my skills and experience.
      </p>
      <div className="mt-8">
        <Button size="lg" asChild>
          <a href="/resume.pdf" download>
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </a>
        </Button>
      </div>
    </MotionWrapper>
  );
}
