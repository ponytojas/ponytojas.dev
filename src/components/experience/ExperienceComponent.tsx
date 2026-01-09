'use client';

import Lumibit, { metadata as lumibitMetadata } from '@/app/experiences/lumibit.mdx';
import Etra, { metadata as etraMetada } from '@/app/experiences/etra.mdx';
import Bounsel, { metadata as bounselMetadata } from '@/app/experiences/bounsel.mdx';
import Thermohuman, { metadata as thermohumanMetadata } from '@/app/experiences/thermohuman.mdx';
import Anova, { metadata as anovaMetadata } from '@/app/experiences/anova.mdx';
import Narrativa, { metadata as narrativaMetadata } from '@/app/experiences/narrativa.mdx';

import { LinkArrow } from '../LinkArrow/LinkArrow';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/useIsMobile';
import { TechBadge } from '@/components/TechBadge/TechBadge';
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal';

const experiences = [
    { Content: Lumibit, metadata: lumibitMetadata },
    { Content: Etra, metadata: etraMetada },
    { Content: Bounsel, metadata: bounselMetadata },
    { Content: Thermohuman, metadata: thermohumanMetadata },
    { Content: Anova, metadata: anovaMetadata },
    { Content: Narrativa, metadata: narrativaMetadata },
];

const ExperienceItem = ({
    experience,
    className,
    isMobile,
    value
}: {
    experience: typeof experiences[0],
    className?: string,
    isMobile?: boolean,
    value?: string
}) => {
    const { Content, metadata } = experience;

    const content = (
        <>
            {/* Header Section */}
            <div className="flex flex-col md:w-[30%] gap-2 mb-4 md:mb-2">
                <div className='flex flex-row items-center gap-4'>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-muted-foreground">
                        {metadata.position}
                    </h2>
                </div>

                <h3 className="text-xl sm:text-2xl font-extralight font-heading text-foreground">
                    {metadata.title}
                </h3>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 md:mb-4">
                    {metadata.time}
                </span>

                {/* Tech Stack Badges */}
                {metadata.tags && metadata.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {metadata.tags.map((tag: any, idx: number) => (
                            <TechBadge
                                key={idx}
                                technology={tag.technology}
                                color={tag.color}
                                index={idx}
                            />
                        ))}
                    </div>
                )}

                {metadata.link && (
                    <div className="flex justify-start mt-4">
                        <LinkArrow url={metadata.link} text="Visit Website" />
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex-1 mb-4 md:mb-8">
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground/90 leading-relaxed">
                    <Content />
                </div>
            </div>
        </>
    );

    // Mobile: Collapsible accordion
    if (isMobile && value) {
        return (
            <AccordionItem value={value} className={cn("border-none", className)}>
                <div className="group relative flex flex-col border-border/60">
                    <AccordionTrigger className="hover:no-underline w-full [&>svg]:hidden">
                        <div className="flex flex-row w-full p-4 sm:p-6 hover:bg-muted/5 transition-colors duration-300">
                            <div className="flex flex-col flex-1 gap-2 pr-4">
                                <h2 className="text-2xl sm:text-3xl font-light text-muted-foreground text-left">
                                    {metadata.position}
                                </h2>
                                <h3 className="text-xl sm:text-2xl font-extralight font-heading text-foreground text-left">
                                    {metadata.title}
                                </h3>
                                <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                                    {metadata.time}
                                </span>
                            </div>
                            <div className="flex items-start pt-1 sm:pt-2 shrink-0">
                                <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground transition-transform duration-200 [[data-state=open]_&]:rotate-180" />
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground/90 leading-relaxed">
                                <Content />
                                {metadata.link && (
                                    <div className="flex justify-start mt-4">
                                        <LinkArrow url={metadata.link} text="Visit Website" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </AccordionContent>
                </div>
            </AccordionItem>
        );
    }

    // Desktop: Expanded view
    return (
        <div
            className={cn(
                "group relative flex flex-col md:flex-row p-4 sm:p-6 md:p-8 lg:p-10 border-border/60 hover:bg-muted/5 transition-all duration-300",
                "before:absolute before:inset-0 before:bg-gradient-to-r before:from-brand-primary/0 before:via-brand-primary/5 before:to-brand-primary/0 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
                className
            )}
        >
            <div className="relative z-10 flex flex-col md:flex-row w-full">
                {content}
            </div>
        </div>
    );
};

export default function ExperienceComponent() {
    const { isMobile } = useIsMobile();

    return (
        <section className="container-custom py-10 md:py-20 max-w-screen-2xl mx-auto">
            <ScrollReveal>
                <div className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-16 px-4 md:px-0">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground">
                        Experience
                    </h2>
                </div>
            </ScrollReveal>

            {/* Grid Container with borders */}
            {isMobile ? (
                <Accordion type="multiple" className="grid grid-cols-1 border-t border-l border-border/60">
                    {experiences.map((experience, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <ExperienceItem
                                experience={experience}
                                value={`experience-${index}`}
                                isMobile={isMobile}
                                className="border-b border-r"
                            />
                        </ScrollReveal>
                    ))}
                </Accordion>
            ) : (
                <div className="grid grid-cols-1 border-t border-l border-border/60">
                    {experiences.map((experience, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <ExperienceItem
                                experience={experience}
                                isMobile={isMobile}
                                className="border-b border-r"
                            />
                        </ScrollReveal>
                    ))}
                </div>
            )}
        </section>
    );
}