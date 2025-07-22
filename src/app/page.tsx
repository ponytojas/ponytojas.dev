"use client";
import ExperienceComponent from '@/components/experience/ExperienceComponent';
import PublicationsComponent from '@/components/publications/PublicationsComponent';
import Footer from "@/components/footer/Footer";
import AboutComponents from '@/components/about/AboutComponents';
import ProjectsComponent from '@/components/projects/ProjectsComponent';

export default function Home() {
  return (
    <>
      <section id="presentation" className="h-[70vh] mt-[25vh] pb-12">
        <h1 className="text-4xl font-medium mb-4 flex items-center gap-6">
          <span data-indicator-container="presentation" className="relative inline-block w-5 h-5" />
          Hello, I&apos;m Daniel
        </h1>
        <p className="font-normal text-2xl prose lg:prose-xl dark:prose-invert">
          Spaniard Software Engineer building neat things on the web.
        </p>
      </section>
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
