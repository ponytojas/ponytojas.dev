'use client';

import Lumibit, { metadata as lumibitMetadata } from '@/app/experiences/lumibit.mdx';
import Etra, { metadata as etraMetada } from '@/app/experiences/etra.mdx';
import Bounsel, { metadata as bounselMetadata } from '@/app/experiences/bounsel.mdx';
import Thermohuman, { metadata as thermohumanMetadata } from '@/app/experiences/thermohuman.mdx';
import Anova, { metadata as anovaMetadata } from '@/app/experiences/anova.mdx';
import Narrativa, { metadata as narrativaMetadata } from '@/app/experiences/narrativa.mdx';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { useTheme } from 'next-themes';
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
    const { theme } = useTheme();

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
                                {metadata.position}
                            </span>
                            <span className="text-xs sm:text-sm text-muted-foreground/60 sm:ml-auto font-mono group-hover:text-muted-foreground transition-colors duration-300">
                                {metadata.time}
                            </span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-2">
                        <div className="prose max-w-none dark:prose-invert text-muted-foreground leading-relaxed mb-6 text-base">
                            <Content />
                        </div>

                        {metadata.link && (
                            <div className="mb-6">
                                <LinkArrow url={metadata.link} text={`Visit ${metadata.title}`} />
                            </div>
                        )}

                        <div className="flex flex-wrap gap-2 mt-4">
                            {(metadata.tags || []).map(({ technology }: { technology: string }) => (
                                <Badge
                                    key={technology}
                                    variant="secondary"
                                    className="bg-secondary/50 text-secondary-foreground hover:bg-accent-primary/10 hover:text-accent-primary hover:border-accent-primary/20 border border-transparent transition-all duration-300 font-medium rounded-full px-3 py-0.5 text-xs"
                                >
                                    {technology}
                                </Badge>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}


