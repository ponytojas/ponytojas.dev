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
        <Accordion type="multiple" className="w-full flex flex-col gap-8">
            {experiences.map(({ Content, metadata }, index) => (
                <AccordionItem
                    key={index}
                    value={`experience-${index}`}
                    className="border-none group"
                >
                    <AccordionTrigger className="hover:no-underline py-0 pr-4">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 w-full text-left">
                            <h2 className="text-2xl font-medium tracking-tight group-hover:text-accent-primary transition-colors duration-300">
                                {metadata.title}
                            </h2>
                            <span className="text-muted-foreground font-normal">
                                {metadata.position}
                            </span>
                            <span className="text-sm text-muted-foreground/60 sm:ml-auto font-mono">
                                {metadata.time}
                            </span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-0 pl-0 sm:pl-1">
                        <div className="prose max-w-none dark:prose-invert text-muted-foreground leading-relaxed mb-6">
                            <Content />
                        </div>

                        {metadata.link && (
                            <div className="mb-6">
                                <LinkArrow url={metadata.link} text={`Visit ${metadata.title}`} />
                            </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                            {(metadata.tags || []).map(({ technology }: { technology: string }) => (
                                <Badge
                                    key={technology}
                                    variant="secondary"
                                    className="bg-secondary text-secondary-foreground hover:bg-accent-primary/10 hover:text-accent-primary hover:border-accent-primary/20 border border-transparent transition-all duration-300 font-normal rounded-md px-3"
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


