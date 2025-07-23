"use client";
import ExperienceComponent from '@/components/experience/ExperienceComponent';
import PublicationsComponent from '@/components/publications/PublicationsComponent';
import Footer from "@/components/footer/Footer";
import AboutComponents from '@/components/about/AboutComponents';
import ProjectsComponent from '@/components/projects/ProjectsComponent';
import { Hero } from '@/components/hero/Hero';

export default function Home() {
  return (
    <>

      <Hero />
      <section id="experience" className="mb-8">
        <h1 className="text-4xl font-medium mb-4 flex items-center gap-6">
          <span data-indicator-container="experience" className="relative w-5 h-5" />
          Experience
        </h1>
        <ExperienceComponent />

      </section>
      <section id="publications" className="mb-8 mt-28">
        <h1 className="text-4xl font-medium mb-4 flex items-center gap-6">
          <span data-indicator-container="publications" className="relative inline-block w-5 h-5" />
          Publications
        </h1>
        <PublicationsComponent />
      </section>

      <section id="projects" className="mb-8 mt-28">
        <h1 className="text-4xl font-medium mb-4 flex items-center gap-6">
          <span data-indicator-container="projects" className="relative inline-block w-5 h-5" />
          Projects
        </h1>
        <ProjectsComponent />
      </section>

      <section id="about" className="mb-8 mt-28">
        <h1 className="text-4xl font-medium mb-4 flex items-center gap-6">
          <span data-indicator-container="about" className="relative inline-block w-5 h-5" />
          About
        </h1>
        <AboutComponents />
      </section>

      <Footer />
    </>
  );
}
