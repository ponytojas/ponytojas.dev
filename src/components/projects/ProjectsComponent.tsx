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

const experiences = [
  { Content: Labtools, metadata: labtoolsMetadata },
  { Content: Diun, metadata: diunMetadata },
  { Content: FlappyBall, metadata: flappyBallMetadata },
  { Content: MyTasks, metadata: myTasksMetadata },
  { Content: UTwin, metadata: utwinMetadata },
  { Content: UNeed, metadata: uneedMetadata },
];

export default function ExperienceComponent() {
  return (
    <Accordion type="multiple" className="w-full flex flex-col gap-12">
      {experiences.map(({ Content, metadata }, index) => (
        <AccordionItem
          key={index}
          value={`experience-${index}`}
          className="border-b border-border/40 pb-8 last:border-0 group transition-all duration-300"
        >
          <AccordionTrigger className="hover:no-underline py-2 pr-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full text-left">
              <h2 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-accent-primary transition-colors duration-300">
                {metadata.title}
              </h2>
              <span className="text-muted-foreground font-normal text-sm sm:text-base group-hover:text-foreground transition-colors duration-300">
                - {metadata.type}
              </span>
              <p className="text-sm text-muted-foreground/60 sm:ml-auto hidden sm:block font-light group-hover:text-muted-foreground transition-colors duration-300">
                {metadata.subtitle}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-2">
            <div className="sm:hidden mb-4 text-sm text-muted-foreground italic">
              {metadata.subtitle}
            </div>
            <div className="prose max-w-none dark:prose-invert text-muted-foreground leading-relaxed w-full text-base">
              <Content />
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
