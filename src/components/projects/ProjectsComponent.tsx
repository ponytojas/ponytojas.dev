"use client";

import { projects } from "@/data/projects";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const ProjectItem = ({
  project,
  index,
  isOpen,
  onToggle,
  prefersReducedMotion,
}: {
  project: (typeof projects)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  prefersReducedMotion: boolean;
}) => {
  const { Content, metadata } = project;

  return (
    <motion.article
      className={`group border-b border-border last:border-b-0 relative expanded-accent ${isOpen ? "is-expanded" : ""}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.4,
        delay: prefersReducedMotion ? 0 : 0.2 + index * 0.05,
        ease: [0.33, 1, 0.68, 1],
      }}
    >
      {/* Header - Clickable with hover accent line */}
      <motion.button
        onClick={onToggle}
        className="w-full py-10 md:py-12 flex items-start justify-between gap-6 text-left cursor-pointer group/header focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg transition-colors relative"
      >
        {/* Hover accent line */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
            <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover/header:text-foreground/80 transition-colors">
              {metadata.title}
            </h3>
            {metadata.type && (
              <span className="text-xs font-mono text-muted-foreground/60 shrink-0">
                {metadata.type}
              </span>
            )}
          </div>
          {metadata.subtitle && (
            <p className="text-muted-foreground">{metadata.subtitle}</p>
          )}
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

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 md:pb-12 flex flex-col gap-6">
              {/* Tech stack with stagger animation */}
              {metadata.tags && metadata.tags.length > 0 && (
                <motion.div
                  className="flex flex-wrap gap-2"
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
                <Content />
              </motion.div>

              {/* Link */}
              {metadata.link && (
                <motion.a
                  href={metadata.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand-accent transition-colors w-fit group/link rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.3 }}
                  whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                >
                  <span>View project</span>
                  <ArrowUpRight aria-hidden="true" className="w-4 h-4 text-brand-accent transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </motion.a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default function ProjectsComponent() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const prefersReducedMotion = useReducedMotion();

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
          <span className="bauhaus-dot bauhaus-dot-animated" />
          Projects
        </motion.span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground tracking-tight">
          Things I&apos;ve built
        </h2>
      </motion.div>

      {/* Projects list */}
      <div className="border-t border-border">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.metadata.title}
            project={project}
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
