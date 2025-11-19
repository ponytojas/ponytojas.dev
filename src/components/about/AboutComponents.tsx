'use client';
import About from '@/app/about/about.mdx';


export default function AboutComponents() {
    return (
        <section className="prose max-w-none dark:prose-invert text-justify text-muted-foreground leading-relaxed">
            <About />
        </section>
    );
}


