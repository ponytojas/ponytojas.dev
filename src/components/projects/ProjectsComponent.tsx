'use client';

import MyTasks, { metadata as myTasksMetadata } from '@/app/projects/my-tasks.mdx';
import UTwin, { metadata as utwinMetadata } from '@/app/projects/utwin.mdx';
import UNeed, { metadata as uneedMetadata } from '@/app/projects/uneed.mdx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const experiences = [
    { Content: MyTasks, metadata: myTasksMetadata },
    { Content: UTwin, metadata: utwinMetadata },
    { Content: UNeed, metadata: uneedMetadata },
];

export default function ExperienceComponent() {

    return (
        <Accordion type="multiple" className="w-full">
            {experiences.map(({ Content, metadata }, index) => (
                <AccordionItem key={index} value={`experience-${index}`}>
                    <AccordionTrigger className='cursor-pointer'>
                        <h2 className="text-2xl font-normal mb-4">{metadata.title}
                            <span className="text-gray-500 dark:text-gray-400"> - {metadata.type}</span>
                        </h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="prose max-w-none dark:prose-invert w-full text-justify my-8">
                            <Content />
                        </div>

                    </AccordionContent>
                </AccordionItem>
            ))
            }
        </Accordion >
    );
}


