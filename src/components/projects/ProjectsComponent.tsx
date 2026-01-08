'use client';

import Labtools, { metadata as labtoolsMetadata } from "@/app/projects/labtools.mdx";
import Diun, { metadata as diunMetadata } from "@/app/projects/diun.mdx";
import FlappyBall, {
  metadata as flappyBallMetadata,
} from "@/app/projects/flappy-ball.mdx";
import MyTasks, {
  metadata as myTasksMetadata,
} from "@/app/projects/my-tasks.mdx";
import UTwin, { metadata as utwinMetadata } from "@/app/projects/utwin.mdx";
import UNeed, { metadata as uneedMetadata } from "@/app/projects/uneed.mdx";
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';

const projects = [
  { Content: Labtools, metadata: labtoolsMetadata },
  { Content: Diun, metadata: diunMetadata },
  { Content: FlappyBall, metadata: flappyBallMetadata },
  { Content: MyTasks, metadata: myTasksMetadata },
  { Content: UTwin, metadata: utwinMetadata },
  { Content: UNeed, metadata: uneedMetadata },
];

const ProjectItem = ({
    project,
    className,
    value
}: {
    project: typeof projects[0],
    className?: string,
    value: string
}) => {
    const { Content, metadata } = project;

    return (
        <AccordionItem value={value} className={cn("border-none", className)}>
            <div className="group relative flex flex-col border-border/60">
                <AccordionTrigger className="hover:no-underline w-full [&[data-state=open]>div>.chevron]:rotate-180">
                    <div className="flex flex-row w-full p-4 sm:p-6 md:p-8 lg:p-10 hover:bg-muted/5 transition-colors duration-300">
                        {/* Header Section */}
                        <div className="flex flex-col flex-1 gap-2 pr-4">
                            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground text-left">
                                {metadata.subtitle}
                            </h2>

                            <h3 className="text-base sm:text-xl md:text-2xl font-extralight font-heading text-foreground text-left">
                                {metadata.title}
                            </h3>
                        </div>

                        {/* Chevron */}
                        <div className="flex items-start pt-1 sm:pt-2 shrink-0">
                            <ChevronDown className="chevron h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground transition-transform duration-200" />
                        </div>
                    </div>
                </AccordionTrigger>

                <AccordionContent>
                    <div className="px-4 sm:px-6 md:px-8 lg:px-10 pb-4 sm:pb-6 md:pb-8">
                        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground/90 leading-relaxed">
                            <Content />
                        </div>
                    </div>
                </AccordionContent>
            </div>
        </AccordionItem>
    );
};

export default function ProjectsComponent() {
  return (
    <section className="container-custom py-10 md:py-20 max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-16 px-4 md:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground">
          Selected Projects
        </h2>
      </div>

      {/* Grid Container with borders */}
      <Accordion type="multiple" className="grid grid-cols-1 border-t border-l border-border/60">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            value={`project-${index}`}
            className="border-b border-r"
          />
        ))}
      </Accordion>
    </section>
  );
}
