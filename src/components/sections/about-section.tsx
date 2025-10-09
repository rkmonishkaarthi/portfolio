import { MotionWrapper } from '@/components/motion-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills } from '@/lib/data';

export default function AboutSection() {
  return (
    <MotionWrapper id="about">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Here's a little bit about my background, education, and the technologies I work with.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">My Journey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Hello! I'm a passionate developer with a knack for creating beautiful and functional websites. My journey into web development started with a simple "Hello World" and has since grown into a full-fledged passion for building complex applications and solving real-world problems.
            </p>
            <p>
              I thrive on learning new technologies and constantly seek to improve my skills to deliver the best possible products.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">B.Sc. in Computer Science</h3>
              <p className="text-sm text-muted-foreground">University of Technology | 2018 - 2022</p>
            </div>
            <div>
              <h3 className="font-semibold">Web Development Bootcamp</h3>
              <p className="text-sm text-muted-foreground">Code Academy | 2021</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12">
        <h3 className="text-center font-headline text-2xl font-bold">My Skills</h3>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-4 hover:bg-accent/50 transition-colors">
              <skill.icon className="h-10 w-10 text-primary" />
              <p className="mt-2 text-sm font-medium">{skill.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
