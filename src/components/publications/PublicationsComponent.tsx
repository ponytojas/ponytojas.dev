'use client';

import V2X, { metadata as v2xMetadata } from '@/app/publications/v2x.mdx';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowUpRight } from 'lucide-react';
import { LinkArrow } from '../LinkArrow/LinkArrow';

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

                        <div className="prose max-w-none dark:prose-invert text-justify my-8">
                            <Content />
                        </div>

                        {metadata.link && (
                            <LinkArrow url={metadata.link} />
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))
            }
        </Accordion >
    );
}


