'use client';

import Lumibit, { metadata as lumibitMetadata } from '@/app/experiences/lumibit.mdx';
import Etra, { metadata as etraMetada } from '@/app/experiences/etra.mdx';
import Bounsel, { metadata as bounselMetadata } from '@/app/experiences/bounsel.mdx';
import Thermohuman, { metadata as thermohumanMetadata } from '@/app/experiences/thermohuman.mdx';
import Anova, { metadata as anovaMetadata } from '@/app/experiences/anova.mdx';
import Narrativa, { metadata as narrativaMetadata } from '@/app/experiences/narrativa.mdx';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LinkArrow } from '../LinkArrow/LinkArrow';
import { Badge } from '@/components/ui/badge';

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
        <section className="container-custom py-20">
            <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Work History</h2>
                <div className="h-px flex-1 bg-border/60" />
            </div>
            
            <Accordion type="multiple" className="w-full space-y-6">
                {experiences.map(({ Content, metadata }, index) => (
                    <AccordionItem
                        key={index}
                        value={`experience-${index}`}
                        className="group border border-border bg-card rounded-lg px-6 sm:px-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.1)] transition-all duration-300"
                    >
                        <AccordionTrigger className="hover:no-underline py-6 [&[data-state=open]]:pb-4">
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 w-full text-left">
                                <span className="text-sm font-medium text-muted-foreground/60 min-w-[140px] shrink-0 font-sans tracking-tight">
                                    {metadata.time}
                                </span>
                                <div className="flex flex-col gap-1 flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors font-heading">
                                            {metadata.title}
                                        </h3>
                                        <span className="hidden sm:inline text-muted-foreground/40">•</span>
                                        <span className="text-base text-muted-foreground font-medium">
                                            {metadata.position}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-8 sm:pl-[156px]">
                            <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed mb-6">
                                <Content />
                            </div>

                            {metadata.link && (
                                <div className="mb-6">
                                    <LinkArrow url={metadata.link} text="Visit Website" />
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 mt-4">
                                {(metadata.tags || []).map(({ technology }: { technology: string }) => (
                                    <Badge 
                                        key={technology} 
                                        variant="secondary" 
                                        className="rounded-full px-3 py-0.5 text-xs font-medium bg-secondary/5 text-secondary-foreground/80 hover:bg-secondary/10 border-transparent transition-colors"
                                    >
                                        {technology}
                                    </Badge>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
