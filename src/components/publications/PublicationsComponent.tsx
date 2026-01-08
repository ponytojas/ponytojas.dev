'use client';

import V2X, { metadata as v2xMetadata } from '@/app/publications/v2x.mdx';
import { LinkArrow } from '../LinkArrow/LinkArrow';
import { cn } from '@/lib/utils';

const publications = [
    { Content: V2X, metadata: v2xMetadata },
];

const PublicationItem = ({
    publication,
    className
}: {
    publication: typeof publications[0],
    className?: string
}) => {
    const { Content, metadata } = publication;

    return (
        <div className={cn(
            "group relative flex flex-col md:flex-row p-4 sm:p-6 md:p-8 lg:p-10 border-border/60 hover:bg-muted/5 transition-colors duration-300",
            className
        )}>
            {/* Header Section */}
            <div className="flex flex-col md:w-[30%] gap-2 mb-4 md:mb-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-muted-foreground">
                    {metadata.time}
                </h2>

                {metadata.link && (
                    <div className="flex justify-start mt-2">
                        <LinkArrow url={metadata.link} text="Read Publication" />
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="flex-1 mb-4 md:mb-8">
                <h3 className="text-xl sm:text-2xl font-extralight font-heading text-foreground mb-4 md:mb-6">
                    {metadata.title}
                </h3>
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground/90 leading-relaxed">
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default function PublicationsComponent() {
    return (
        <section className="container-custom py-10 md:py-20 max-w-screen-2xl mx-auto">
            <div className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-16 px-4 md:px-0">
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-thin tracking-tight text-foreground">
                    Writing & Research
                </h2>
            </div>

            {/* Grid Container with borders */}
            <div className="grid grid-cols-1 border-t border-l border-border/60">
                {publications.map((publication, index) => (
                    <PublicationItem
                        key={index}
                        publication={publication}
                        className="border-b border-r"
                    />
                ))}
            </div>
        </section>
    );
}
