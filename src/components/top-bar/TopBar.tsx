'use client'

import { ModeToggle } from "@/components/theme/mode-toggle";
import { motion, useScroll, useTransform } from "motion/react";

export const TopBar: React.FC<{ hideIndex?: boolean }> = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [0, 1]);
    const backdropBlur = useTransform(scrollY, [0, 100], [0, 12]);

    return (
        <motion.header
            className="fixed top-0 left-0 w-full flex flex-row justify-between items-center py-6 px-6 md:px-12 z-50"
            style={{
                backgroundColor: useTransform(scrollY, (value) =>
                    value > 100 ? 'var(--background-alpha-80)' : 'transparent'
                ),
            }}
        >
            <motion.div
                className="absolute inset-0 border-b border-border/40 -z-10"
                style={{
                    opacity,
                    backdropFilter: useTransform(backdropBlur, (value) => `blur(${value}px)`),
                }}
            />

            {/* Logo/Name */}
            <motion.div
                className="text-lg font-heading font-light text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                DV
            </motion.div>

            <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <ModeToggle />
            </motion.div>
        </motion.header>
    )
}
