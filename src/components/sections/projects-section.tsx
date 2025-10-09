import { db } from '@/lib/firebase';
import type { Project } from '@/lib/types';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { MotionWrapper } from '@/components/motion-wrapper';
import { ProjectCard } from '@/components/project-card';
import { mockProjects } from '@/lib/data';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Terminal } from 'lucide-react';

async function getProjects(): Promise<Project[]> {
  try {
    const projectsCol = collection(db, 'projects');
    const q = query(projectsCol, orderBy('order', 'asc'));
    const projectsSnapshot = await getDocs(q);
    const projectsList = projectsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Project[];
    if (projectsList.length === 0) {
      return mockProjects;
    }
    return projectsList;
  } catch (error) {
    console.error("Error fetching projects from Firestore:", error);
    // Fallback to mock data if Firestore is not configured or fails
    return mockProjects;
  }
}

export default async function ProjectsSection() {
  const projects = await getProjects();

  return (
    <MotionWrapper id="projects">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          My Projects
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of my recent work.
        </p>
      </div>

      {projects === mockProjects && (
         <Alert className="mt-8">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Developer Note</AlertTitle>
            <AlertDescription>
              Displaying mock data. Please connect to Firebase to see your live projects. See `INSTRUCTIONS.md` for more details.
            </AlertDescription>
        </Alert>
      )}

      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </MotionWrapper>
  );
}
