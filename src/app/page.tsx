import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';
import HeroSection from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import ResumeSection from '@/components/sections/resume-section';
import SkillsSection from '@/components/sections/skills-section';

// The "pt-20" class provides top padding equal to your sticky header's height (h-20).
// This ensures that when the scroll-spy activates a section, the section title
// isn't hidden behind the fixed header.

export default function Home() {
  return (
    <div className="flex flex-col space-y-24">
      {/* 1. HOME Section */}
      <section id="home" className="pt-20">
        <HeroSection />
      </section>

      {/* 2. ABOUT Section */}
      <section id="about" className="pt-20">
        <AboutSection />
      </section>

      {/* 3. SKILLS Section */}
      <section id="skills" className="pt-20">
        <SkillsSection />
      </section>

      {/* 4. PROJECTS Section */}
      <section id="projects" className="pt-20">
        <ProjectsSection />
      </section>

      {/* 5. CONTACT Section */}
      <section id="contact" className="pt-20">
        <ContactSection />
      </section>

      {/* 6. RESUME Section */}
      <section id="resume" className="pt-20">
        <ResumeSection />
      </section>
    </div>
  );
}