"use client";

import { publications } from "@/data/publications";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const PublicationItem = ({
  publication,
  index,
  isOpen,
  onToggle,
  prefersReducedMotion,
}: {
  publication: (typeof publications)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  prefersReducedMotion: boolean;
}) => {
  const { Content, metadata } = publication;

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
          </div>

          {/* Title */}
          <div className="flex flex-col gap-1">
            <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover/header:text-foreground/80 transition-colors">
              {metadata.title}
            </h3>
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
            <div className="pb-10 md:pb-12 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
              {/* Spacer */}
              <div />

              {/* Content */}
              <div className="flex flex-col gap-6">
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
                    <span>Read publication</span>
                    <ArrowUpRight aria-hidden="true" className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-brand-accent" />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default function PublicationsComponent() {
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
          <span className="bauhaus-triangle bauhaus-triangle-animated" />
          Publications
        </motion.span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground tracking-tight">
          Research & publications
        </h2>
      </motion.div>

      {/* Publications list */}
      <div className="border-t border-border">
        {publications.map((publication, index) => (
          <PublicationItem
            key={publication.metadata.title}
            publication={publication}
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
