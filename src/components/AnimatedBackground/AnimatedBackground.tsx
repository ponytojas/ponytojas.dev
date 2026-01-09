'use client';

import { motion } from 'motion/react';

export const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute top-0 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)',
                }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            
            <motion.div
                className="absolute top-1/3 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, var(--brand-secondary) 0%, transparent 70%)',
                }}
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full opacity-15 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)',
                }}
                animate={{
                    x: [0, -50, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div 
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, var(--border) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />
        </div>
    );
};
