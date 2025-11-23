"use client";

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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const projects = [
  { Content: Labtools, metadata: labtoolsMetadata },
  { Content: Diun, metadata: diunMetadata },
  { Content: FlappyBall, metadata: flappyBallMetadata },
  { Content: MyTasks, metadata: myTasksMetadata },
  { Content: UTwin, metadata: utwinMetadata },
  { Content: UNeed, metadata: uneedMetadata },
];

export default function ProjectsComponent() {
  return (
    <section className="py-10">
        <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-8">Selected Projects</h3>
        <Accordion type="multiple" className="w-full space-y-4">
        {projects.map(({ Content, metadata }, index) => (
            <AccordionItem
            key={index}
            value={`project-${index}`}
            className="border-0 pb-0 hover:bg-accent/40 rounded-xl px-4 -mx-4 transition-colors duration-200"
            >
            <AccordionTrigger className="hover:no-underline py-4 group">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 w-full text-left">
                    <div className="min-w-[140px] shrink-0 hidden md:block">
                         <span className="text-xs font-mono text-muted-foreground/40 group-hover:text-accent-primary transition-colors">0{index + 1}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 flex-1">
                        <h4 className="text-lg font-medium text-foreground group-hover:text-accent-primary transition-colors">
                        {metadata.title}
                        </h4>
                        <span className="text-sm text-muted-foreground/80">
                        {metadata.subtitle}
                        </span>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="md:pl-[172px]">
                <div className="prose prose-sm max-w-none dark:prose-invert text-muted-foreground/90 leading-relaxed">
                <Content />
                </div>
            </AccordionContent>
            </AccordionItem>
        ))}
        </Accordion>
    </section>
  );
}