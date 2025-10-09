import { db } from '@/lib/firebase';
import type { Project } from '@/lib/types';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { MotionWrapper } from '@/components/motion-wrapper';
import { ProjectCard } from '@/components/project-card';
import { mockProjects } from '@/lib/data';

async function getProjects(): Promise<Project[]> {
  try {
    // For this example, we always use mock data to match the reference site.
    // In a real application, you might fetch from Firestore like this:
    // const projectsCol = collection(db, 'projects');
    // const q = query(projectsCol, orderBy('order', 'asc'));
    // const projectsSnapshot = await getDocs(q);
    // const projectsList = projectsSnapshot.docs.map(doc => ({
    //   id: doc.id,
    //   ...doc.data(),
    // })) as Project[];
    // if (projectsList.length === 0) {
    //   return mockProjects;
    // }
    // return projectsList;
    return mockProjects;
  } catch (error) {
    console.error("Error fetching projects from Firestore:", error);
    return mockProjects;
  }
}

export default async function ProjectsSection() {
  const projects = await getProjects();

  return (
    <MotionWrapper id="projects">
      <div className="text-left">
        <p className="text-secondary-foreground/80 sm:text-[18px] text-[14px] uppercase tracking-wider">My work</p>
        <h2 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </div>

      <div className='w-full flex'>
        <p
          className='mt-3 text-secondary-foreground/70 text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      
      <div className="mt-20 grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} />
        ))}
      </div>
    </MotionWrapper>
  );
}
