"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";

const About = dynamic(() => import("@/app/about/about.mdx"), {
  ssr: false,
  loading: () => null,
});

export default function AboutComponents() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="container-custom">
      {/* Section header - bold and impactful */}
      <motion.div
        className="mb-16 md:mb-20"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <motion.span
          className="section-number text-sm font-mono text-brand-accent uppercase tracking-widest inline-block mb-6"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.1 }}
        >
          About
        </motion.span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground tracking-tight">
          A bit about me
        </h2>
      </motion.div>

      {/* Content */}
      <motion.div
        className="border-t border-border pt-12 md:pt-16"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.215, 0.61, 0.355, 1] }}
      >
        {/* Bio */}
        <motion.div
          className="prose prose-lg dark:prose-invert max-w-3xl text-muted-foreground leading-relaxed"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
        >
          <About />
        </motion.div>
      </motion.div>
    </div>
  );
}
