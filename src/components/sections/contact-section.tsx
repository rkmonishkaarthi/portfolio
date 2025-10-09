import { MotionWrapper } from '@/components/motion-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';

export default function ContactSection() {
  return (
    <MotionWrapper id="contact">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </div>

      <div className="mt-12 max-w-xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Contact Me</CardTitle>
            <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </MotionWrapper>
  );
}
