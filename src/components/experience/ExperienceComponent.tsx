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
        <Accordion type="multiple" className="w-full">
            {experiences.map(({ Content, metadata }, index) => (
                <AccordionItem key={index} value={`experience-${index}`}>
                    <AccordionTrigger className='cursor-pointer'>
                        <h2 className="text-2xl font-normal mb-4">
                            <span style={{ color: (theme === 'dark' ? metadata?.darkColor : metadata.color) || 'inherit' }}>
                                {metadata.title}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400"> - {metadata.position}</span>
                        </h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <span className="text-sm text-gray-500">{metadata.time}</span>

                        <div className="prose max-w-none dark:prose-invert text-justify my-8">
                            <Content />
                        </div>

                        {metadata.link && (
                            <LinkArrow url={metadata.link} text={`Check the company in ${metadata.link}`} />
                        )}

                        <div className="mt-4 mb-8 flex flex-wrap gap-2">
                            {(metadata.tags || []).map(({ technology, color }: { technology: string; color: string }) => (
                                <Badge key={technology} style={{ backgroundColor: color }} className="dark:text-white">
                                    {technology}
                                </Badge>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))
            }
        </Accordion >
    );
}


