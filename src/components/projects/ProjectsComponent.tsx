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
import { Badge } from "@/components/ui/badge";

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
    <section className="container-custom py-20">
       <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Selected Projects</h2>
            <div className="h-px flex-1 bg-border/60" />
        </div>

        <Accordion type="multiple" className="w-full space-y-6">
        {projects.map(({ Content, metadata }, index) => (
            <AccordionItem
            key={index}
            value={`project-${index}`}
            className="group border border-border bg-card rounded-lg px-6 sm:px-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
            <AccordionTrigger className="hover:no-underline py-6 [&[data-state=open]]:pb-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 w-full text-left">
                    <div className="min-w-[40px] shrink-0 hidden sm:block">
                         <span className="text-sm font-medium font-mono text-brand-primary/40 group-hover:text-brand-primary transition-colors">
                            {String(index + 1).padStart(2, '0')}
                         </span>
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors font-heading">
                            {metadata.title}
                            </h3>
                            <Badge variant="outline" className="w-fit rounded-full text-[10px] uppercase tracking-wider font-medium text-muted-foreground border-muted-foreground/20">
                                {metadata.subtitle}
                            </Badge>
                        </div>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-8 sm:pl-[56px]">
                <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                    <Content />
                </div>
            </AccordionContent>
            </AccordionItem>
        ))}
        </Accordion>
    </section>
  );
}
