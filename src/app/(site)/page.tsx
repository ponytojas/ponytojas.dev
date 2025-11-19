"use client";
import ExperienceComponent from '@/components/experience/ExperienceComponent';
import PublicationsComponent from '@/components/publications/PublicationsComponent';
import AboutComponents from '@/components/about/AboutComponents';
import ProjectsComponent from '@/components/projects/ProjectsComponent';
import { Hero } from '@/components/hero/Hero';

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-20 relative">
      <div className="bg-noise" />
      <Hero />

      <section id="experience" className="scroll-mt-32">
        <h2 className="text-3xl font-medium tracking-tight mb-12 text-foreground">
          Experience
        </h2>
        <ExperienceComponent />
      </section>

      <section id="publications" className="scroll-mt-32">
        <h2 className="text-3xl font-medium tracking-tight mb-12 text-foreground">
          Publications
        </h2>
        <PublicationsComponent />
      </section>

      <section id="projects" className="scroll-mt-32">
        <h2 className="text-3xl font-medium tracking-tight mb-12 text-foreground">
          Projects
        </h2>
        <ProjectsComponent />
      </section>

      <section id="about" className="scroll-mt-32">
        <h2 className="text-3xl font-medium tracking-tight mb-12 text-foreground">
          About
        </h2>
        <AboutComponents />
      </section>
    </div>
  );
}
