"use client";
import ExperienceComponent from "@/components/experience/ExperienceComponent";
import PublicationsComponent from "@/components/publications/PublicationsComponent";
import AboutComponents from "@/components/about/AboutComponents";
import ProjectsComponent from "@/components/projects/ProjectsComponent";
import { Hero } from "@/components/hero/Hero";
import { Rabbit } from "@/components/hero/Rabbit";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-20 pb-10 md:pb-20">
      <Hero />
      <Rabbit />

      <div
        id="experience"
        className="scroll-mt-20 md:scroll-mt-32 animate-[fadeInUp_0.5s_ease-out_0.2s_forwards] opacity-0"
        style={{ animationDelay: "0.2s" }}
      >
        <ExperienceComponent />
      </div>

      <div
        id="projects"
        className="scroll-mt-20 md:scroll-mt-32 animate-[fadeInUp_0.5s_ease-out_0.3s_forwards] opacity-0"
        style={{ animationDelay: "0.3s" }}
      >
        <ProjectsComponent />
      </div>

      <div
        id="publications"
        className="scroll-mt-20 md:scroll-mt-32 animate-[fadeInUp_0.5s_ease-out_0.4s_forwards] opacity-0"
        style={{ animationDelay: "0.4s" }}
      >
        <PublicationsComponent />
      </div>

      <div
        id="about"
        className="scroll-mt-20 md:scroll-mt-32 animate-[fadeInUp_0.5s_ease-out_0.5s_forwards] opacity-0"
        style={{ animationDelay: "0.5s" }}
      >
        <AboutComponents />
      </div>
    </div>
  );
}
