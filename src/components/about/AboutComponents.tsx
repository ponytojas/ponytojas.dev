'use client';
import { RotatingTooltipText } from '@/components/rotating-tooltip-text/RotatingTooltipText';
import About from '@/app/about/about.mdx';


export default function AboutComponents() {
    return (
        <section className="mb-8 prose dark:prose-invert text-justify">
            <About />
        </section>
    );
}


