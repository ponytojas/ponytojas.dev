'use client';

import V2X, { metadata as v2xMetadata } from '@/app/publications/v2x.mdx';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowUpRight } from 'lucide-react';

const publications = [
    { Content: V2X, metadata: v2xMetadata },
];

export default function PublicationsComponent() {
    return (
        <Accordion type="multiple" className="w-full">
            {publications.map(({ Content, metadata }, index) => (
                <AccordionItem key={index} value={`publication-${index}`}>
                    <AccordionTrigger className='cursor-pointer'>
                        <h2 className="text-2xl font-normal mb-4">
                            <span >
                                {metadata.title}
                            </span>
                        </h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <span className="text-sm text-gray-500">{metadata.time}</span>

                        <div className="prose dark:prose-invert text-justify my-8">
                            <Content />
                        </div>

                        {metadata.link && (
                            <div className="mb-8">
                                <a href={metadata.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500  hover:text-gray-900 dark:hover:text-gray-50 underline underline-offset-4 decoration-dotted hover:decoration-solid transform transition-all duration-300">
                                        Check it out
                                    </span>
                                    <ArrowUpRight />
                                </a>
                            </div>
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))
            }
        </Accordion >
    );
}


