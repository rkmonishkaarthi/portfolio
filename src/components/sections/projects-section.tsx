import { db } from '@/lib/firebase';
import type { Project } from '@/lib/types';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { MotionWrapper } from '@/components/motion-wrapper';
import { ProjectCard } from '@/components/project-card';
import { mockProjects } from '@/lib/data';

async function getProjects(): Promise<Project[]> {
  try {
    // In a real app, you would fetch from Firestore like this:
    // const projectsCol = collection(db, 'projects');
    // const q = query(projectsCol, orderBy('order'));
    // const projectsSnapshot = await getDocs(q);
    // return projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
    
    // For now, we'll use mock data.
    return mockProjects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Fallback to mock data if Firestore fetch fails
    return mockProjects;
  }
}

export default async function ProjectsSection() {
  const projects = await getProjects();

  return (
    <MotionWrapper id="projects">
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl">
          Latest <span className="text-primary">Projects</span>
        </h2>
      </div>
      
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} />
        ))}
      </div>
    </MotionWrapper>
  );
}
