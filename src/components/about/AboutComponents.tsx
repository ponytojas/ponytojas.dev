'use client';
import About from '@/app/about/about.mdx';

export default function AboutComponents() {
    return (
        <section className="container-custom py-10 md:py-20 max-w-screen-2xl mx-auto">
            <div className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-16 px-4 md:px-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-tight text-foreground">
                    About
                </h2>
            </div>

            <div className="px-4 md:px-0 max-w-4xl">
                <div className="prose prose-base md:prose-lg prose-slate dark:prose-invert text-muted-foreground leading-loose font-sans">
                    <About />
                </div>
            </div>
        </section>
    );
}
