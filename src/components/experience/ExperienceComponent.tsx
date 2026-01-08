'use client';

import Lumibit, { metadata as lumibitMetadata } from '@/app/experiences/lumibit.mdx';
import Etra, { metadata as etraMetada } from '@/app/experiences/etra.mdx';
import Bounsel, { metadata as bounselMetadata } from '@/app/experiences/bounsel.mdx';
import Thermohuman, { metadata as thermohumanMetadata } from '@/app/experiences/thermohuman.mdx';
import Anova, { metadata as anovaMetadata } from '@/app/experiences/anova.mdx';
import Narrativa, { metadata as narrativaMetadata } from '@/app/experiences/narrativa.mdx';

import { LinkArrow } from '../LinkArrow/LinkArrow';
import { cn } from '@/lib/utils';

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
    className
}: {
    experience: typeof experiences[0],
    className?: string
}) => {
    const { Content, metadata } = experience;

    return (
        <div className={cn(
            "group relative flex flex-col md:flex-row p-4 sm:p-6 md:p-8 lg:p-10 border-border/60 hover:bg-muted/5 transition-colors duration-300",
            className
        )}>
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
                {metadata.link && (
                    <div className="flex justify-start">
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
        </div>
    );
};

export default function ExperienceComponent() {
    return (
        <section className="container-custom py-10 md:py-20 max-w-screen-2xl mx-auto">
            <div className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-16 px-4 md:px-0">
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground">
                    Experience
                </h2>
            </div>

            {/* Grid Container with borders */}
            <div className="grid grid-cols-1 border-t border-l border-border/60">
                {experiences.map((experience, index) => (
                    <ExperienceItem
                        key={index}
                        experience={experience}
                        className="border-b border-r"
                    />
                ))}
            </div>
        </section>
    );
}