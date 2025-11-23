import V2X, { metadata as v2xMetadata } from '@/app/publications/v2x.mdx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LinkArrow } from '../LinkArrow/LinkArrow';

const publications = [
    { Content: V2X, metadata: v2xMetadata },
];

export default function PublicationsComponent() {
    return (
        <section className="py-10">
             <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-8">Writing & Research</h3>
            <Accordion type="multiple" className="w-full space-y-4">
                {publications.map(({ Content, metadata }, index) => (
                    <AccordionItem
                        key={index}
                        value={`publication-${index}`}
                        className="border-b border-border/30 last:border-0 pb-4"
                    >
                        <AccordionTrigger className="hover:no-underline py-4 group">
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 w-full text-left">
                                 <span className="font-mono text-sm text-muted-foreground min-w-[140px] shrink-0">
                                    {metadata.time}
                                </span>
                                <div className="flex-1">
                                    <h4 className="text-lg font-medium text-foreground group-hover:text-accent-primary transition-colors">
                                        {metadata.title}
                                    </h4>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="md:pl-[172px]">
                            <div className="prose prose-sm max-w-none dark:prose-invert text-muted-foreground/90 leading-relaxed mb-4">
                                <Content />
                            </div>

                            {metadata.link && (
                                <div className="mb-4">
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