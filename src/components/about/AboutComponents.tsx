'use client';
import About from '@/app/about/about.mdx';

export default function AboutComponents() {
    return (
        <section className="container-custom py-20">
             <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground">About</h2>
                <div className="h-px flex-1 bg-border/60" />
            </div>
            
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-muted-foreground leading-loose font-sans">
                <About />
            </div>
        </section>
    );
}
