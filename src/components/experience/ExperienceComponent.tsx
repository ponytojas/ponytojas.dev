'use client';

import Lumibit, { metadata as lumibitMetadata } from '@/app/experiences/lumibit.mdx';
import Etra, { metadata as etraMetada } from '@/app/experiences/etra.mdx';
import Bounsel, { metadata as bounselMetadata } from '@/app/experiences/bounsel.mdx';
import Thermohuman, { metadata as thermohumanMetadata } from '@/app/experiences/thermohuman.mdx';
import Anova, { metadata as anovaMetadata } from '@/app/experiences/anova.mdx';
import Narrativa, { metadata as narrativaMetadata } from '@/app/experiences/narrativa.mdx';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LinkArrow } from '../LinkArrow/LinkArrow';

const experiences = [
    { Content: Lumibit, metadata: lumibitMetadata },
    { Content: Etra, metadata: etraMetada },
    { Content: Bounsel, metadata: bounselMetadata },
    { Content: Thermohuman, metadata: thermohumanMetadata },
    { Content: Anova, metadata: anovaMetadata },
    { Content: Narrativa, metadata: narrativaMetadata },
];

export default function ExperienceComponent() {

    return (
        <section className="py-10">
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-8">Work History</h3>
            <Accordion type="multiple" className="w-full space-y-4">
                {experiences.map(({ Content, metadata }, index) => (
                    <AccordionItem
                        key={index}
                        value={`experience-${index}`}
                        className="border-0 pb-0 hover:bg-accent/40 rounded-xl px-4 -mx-4 transition-colors duration-200"
                    >
                        <AccordionTrigger className="hover:no-underline py-4 group">
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 w-full text-left">
                                <span className="font-mono text-sm text-muted-foreground min-w-[140px] shrink-0 group-hover:text-foreground transition-colors">
                                    {metadata.time}
                                </span>
                                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 flex-1">
                                    <h4 className="text-lg font-medium text-foreground group-hover:text-accent-primary transition-colors">
                                        {metadata.title}
                                    </h4>
                                    <span className="text-sm text-muted-foreground">
                                        {metadata.position}
                                    </span>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="md:pl-[172px]">
                            <div className="prose prose-sm max-w-none dark:prose-invert text-muted-foreground/90 leading-relaxed mb-4">
                                <Content />
                            </div>

                            {metadata.link && (
                                <div className="mb-4">
                                    <LinkArrow url={metadata.link} text="Visit Website" />
                                </div>
                            )}

                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                                {(metadata.tags || []).map(({ technology }: { technology: string }) => (
                                    <span
                                        key={technology}
                                        className="text-xs font-mono text-muted-foreground/60 hover:text-foreground transition-colors cursor-default"
                                    >
                                        #{technology.toLowerCase()}
                                    </span>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}