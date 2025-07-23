"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function Footer() {
    const { scrollYProgress } = useScroll();

    // Translate from bottom ➜ top
    const y = useTransform(scrollYProgress, [0.9, 1], ["100%", "0%"]);
    // Fade in
    const opacity = useTransform(scrollYProgress, [0.9, 0.95, 1], [0, 0.25, 1]);

    return (
        <motion.footer
            style={{ y, opacity }}
            className="fixed bottom-0 left-0 pb-10 md:mb-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <div className="mx-auto flex w-full max-w-[800px] flex-col items-center gap-4 px-4 py-10">
                <span className="text-6xl font-thin prose dark:prose-invert tracking-tight sm:text-9xl">
                    ponytojas
                </span>
                <nav className="flex gap-6 text-sm text-muted-foreground sm:text-base">
                    <a
                        href="https://github.com/ponytojas"
                        className="transition-colors hover:text-foreground"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/ponytojas"
                        className="transition-colors hover:text-foreground"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </nav>
            </div>
        </motion.footer>
    );
}
