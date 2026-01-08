"use client";

import V2X, { metadata as v2xMetadata } from '@/app/publications/v2x.mdx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LinkArrow } from '../LinkArrow/LinkArrow';

const publications = [
    { Content: V2X, metadata: v2xMetadata },
];

export default function PublicationsComponent() {
    return (
        <section className="container-custom py-20">
             <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Writing & Research</h2>
                <div className="h-px flex-1 bg-border/60" />
            </div>

            <Accordion type="multiple" className="w-full space-y-6">
                {publications.map(({ Content, metadata }, index) => (
                    <AccordionItem
                        key={index}
                        value={`publication-${index}`}
                        className="group border border-border bg-card rounded-lg px-6 sm:px-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.1)] transition-all duration-300"
                    >
                        <AccordionTrigger className="hover:no-underline py-6 [&[data-state=open]]:pb-4">
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 w-full text-left">
                                 <span className="text-sm font-medium text-muted-foreground/60 min-w-[140px] shrink-0 font-sans tracking-tight">
                                    {metadata.time}
                                </span>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors font-heading">
                                        {metadata.title}
                                    </h4>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-8 sm:pl-[172px]">
                            <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed mb-6">
                                <Content />
                            </div>

                            {metadata.link && (
                                <div className="mb-2">
                                    <LinkArrow url={metadata.link} text="Read Publication" />
                                </div>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
