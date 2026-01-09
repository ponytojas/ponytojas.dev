'use client';
import About from '@/app/about/about.mdx';
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal';
import { motion } from 'motion/react';

export default function AboutComponents() {
    return (
        <section className="container-custom py-10 md:py-20 max-w-screen-2xl mx-auto relative">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent opacity-50 pointer-events-none" />

            <ScrollReveal>
                <div className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-16 px-4 md:px-0 relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-tight text-foreground">
                        About
                    </h2>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <div className="px-4 md:px-0 max-w-4xl relative z-10">
                    <motion.div
                        className="prose prose-base md:prose-lg prose-slate dark:prose-invert text-muted-foreground leading-loose font-sans"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        <About />
                    </motion.div>
                </div>
            </ScrollReveal>
        </section>
    );
}
