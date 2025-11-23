'use client';
import About from '@/app/about/about.mdx';

export default function AboutComponents() {
    return (
        <section className="py-10">
             <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-8">About</h3>
            <div className="prose prose-lg max-w-none dark:prose-invert text-foreground/90 leading-relaxed font-light">
                <About />
            </div>
        </section>
    );
}