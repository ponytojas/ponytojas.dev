"use client";

import { experiences } from "@/data/experiences";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ExperienceItem = ({
  experience,
  index,
  isOpen,
  onToggle,
  prefersReducedMotion,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  prefersReducedMotion: boolean;
}) => {
  const { Component, metadata } = experience;
  const { theme } = useTheme();

  return (
    <motion.article
      className={`group border-b border-border last:border-b-0 relative expanded-accent ${isOpen ? "is-expanded" : ""}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.4,
        delay: prefersReducedMotion ? 0 : 0.2 + index * 0.06,
        ease: [0.33, 1, 0.68, 1],
      }}
    >
      {/* Header - Clickable with hover accent line */}
      <motion.button
        onMouseEnter={() => experience.preload?.()}
        onFocus={() => experience.preload?.()}
        onTouchStart={() => experience.preload?.()}
        onClick={onToggle}
        className="w-full py-10 md:py-12 flex items-start justify-between gap-6 text-left cursor-pointer group/header focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg transition-colors relative"
      >
        {/* Hover accent line */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
          {/* Date */}
          <div className="flex flex-col gap-1">
            <span className="text-sm font-mono text-muted-foreground">
              {metadata.time}
            </span>
            {metadata.link && (
              <a
                href={metadata.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-1 text-xs text-muted-foreground/60 hover:text-foreground transition-colors`}
              >
                <span>Visit</span>
                <ArrowUpRight aria-hidden="true" className="w-3 h-3 text-brand-accent" />
              </a>
            )}
          </div>

          {/* Title & Position */}
          <div className="flex flex-col gap-1">
            <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover/header:text-foreground/80 transition-colors">
              {metadata.position}
            </h3>
            <p style={{ color: theme === "dark" ? metadata.darkColor || metadata.color : metadata.color }}>{metadata.title}</p>
          </div>
        </div>

        {/* Toggle icon with scale on expand */}
        <motion.div
          className="mt-1 text-brand-accent"
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
        >
          {isOpen ? <Minus aria-hidden="true" className="w-5 h-5" /> : <Plus aria-hidden="true" className="w-5 h-5" />}
        </motion.div>
      </motion.button>

      {/* Expandable Component */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 md:pb-12 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
              {/* Spacer for alignment */}
              <div />

              {/* Component */}
              <div className="flex flex-col gap-6">
                {/* Tech stack with stagger animation */}
                {metadata.tags && metadata.tags.length > 0 && (
                  <motion.div
                    className="flex flex-wrap gap-2 mt-2"
                    initial={prefersReducedMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: prefersReducedMotion ? 0 : 0.1 }}
                  >
                    {metadata.tags.map(
                      (tag: { technology: string; color: string }, idx: number) => (
                        <motion.span
                          key={idx}
                          className="tech-badge text-xs font-mono px-3 py-1.5 rounded-full border border-border text-muted-foreground cursor-default"
                          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: prefersReducedMotion ? 0 : 0.1 + idx * 0.02, ease: [0.33, 1, 0.68, 1] }}
                          whileHover={prefersReducedMotion ? undefined : { y: -1, scale: 1.01 }}
                        >
                          {tag.technology}
                        </motion.span>
                      )
                    )}
                  </motion.div>
                )}

                {/* Description */}
                <motion.div
                  className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
                >
                  <Component />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default function ExperienceComponent() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    experiences.forEach((e) => e.preload?.());
  }, []);


  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="container-custom">
      {/* Section header - bold and impactful */}
      <motion.div
        className="mb-16 md:mb-20"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.15, ease: [0.33, 1, 0.68, 1] }}
      >
        <motion.span
          className="section-number text-sm font-mono text-brand-accent uppercase tracking-widest inline-flex items-center gap-2 mb-6"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.2, ease: [0.33, 1, 0.68, 1] }}
        >
          <span className="bauhaus-square bauhaus-square-animated" />
          Experience
        </motion.span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground tracking-tight">
          Where I&apos;ve worked
        </h2>
      </motion.div>

      {/* Experience list */}
      <div className="border-t border-border">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={experience.metadata.title}
            experience={experience}
            index={index}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
            prefersReducedMotion={!!prefersReducedMotion}
          />
        ))}
      </div>
    </div>
  );
}
