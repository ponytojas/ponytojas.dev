import V2X, { metadata as v2xMetadata } from '@/app/publications/v2x.mdx';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LinkArrow } from '../LinkArrow/LinkArrow';

const publications = [
    { Content: V2X, metadata: v2xMetadata },
];

export default function PublicationsComponent() {
    return (
        <Accordion type="multiple" className="w-full flex flex-col gap-8">
            {publications.map(({ Content, metadata }, index) => (
                <AccordionItem
                    key={index}
                    value={`publication-${index}`}
                    className="border-none group"
                >
                    <AccordionTrigger className="hover:no-underline py-0 pr-4">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 w-full text-left">
                            <h2 className="text-2xl font-medium tracking-tight group-hover:text-accent-primary transition-colors duration-300">
                                {metadata.title}
                            </h2>
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
                                <LinkArrow url={metadata.link} text="Read Publication" />
                            </div>
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}


