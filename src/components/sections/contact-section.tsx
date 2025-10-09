import { MotionWrapper } from '@/components/motion-wrapper';
import { ContactForm } from '@/components/contact-form';

export default function ContactSection() {
  return (
    <MotionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl">
          Contact <span className="text-primary">Me!</span>
        </h2>
      </div>

      <div className="max-w-xl mx-auto">
         <ContactForm />
      </div>
    </MotionWrapper>
  );
}
