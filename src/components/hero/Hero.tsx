"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { hoverEffects, tapEffects } from "@/lib/motion";

// Animated text that reveals character by character with subtle Apple-like effect
const AnimatedText = ({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03,
  reducedMotion = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  reducedMotion?: boolean;
}) => {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={reducedMotion ? false : { opacity: 0, y: 40, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: reducedMotion ? 0 : 0.5,
            delay: reducedMotion ? 0 : delay + i * staggerDelay,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

// Word by word animation for longer text - subtle Apple-like effect
const AnimatedWords = ({
  text,
  className,
  delay = 0,
  reducedMotion = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  reducedMotion?: boolean;
}) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={reducedMotion ? false : { opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: reducedMotion ? 0 : 0.5,
            delay: reducedMotion ? 0 : delay + i * 0.08,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms (disabled if reduced motion)
  const titleY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 150]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], prefersReducedMotion ? [1, 1] : [1, 0.95]);

  const scrollToContent = () => {
    const blogSection = document.getElementById("blog");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      return;
    }

    router.push("/experience");
  };

  return (
    <motion.section
      ref={containerRef}
      id="presentation"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-12 overflow-hidden"
      style={{ opacity }}
    >
      {/* Simple grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1.5 }}
        />
      </div>

      {/* Main content */}
      <motion.div className="max-w-7xl relative z-10" style={{ scale }}>
        {/* Name - Clean and bold */}
        <motion.h1
          className="text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-heading font-black tracking-tighter mb-8 leading-[0.8]"
          style={{ y: titleY }}
        >
          <span className="relative">
            <span className="text-foreground">
              <AnimatedText text="Daniel" delay={0.1} reducedMotion={!!prefersReducedMotion} />
            </span>
            <br />
            <span className="text-foreground">
              <AnimatedText text="Villalobos" delay={0.2} reducedMotion={!!prefersReducedMotion} />
            </span>
          </span>
        </motion.h1>

        {/* Role with subtle animation and geometric accent */}
        <motion.div
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-muted-foreground mb-10 flex items-center gap-4"
          style={{ y: subtitleY }}
        >
          <AnimatedWords text="Software Engineer" delay={0.5} reducedMotion={!!prefersReducedMotion} />
        </motion.div>

        {/* Brief intro */}
        <motion.p
          className="text-xl sm:text-2xl text-brand-accent max-w-3xl leading-relaxed"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 1, ease: [0.33, 1, 0.68, 1] }}
        >
          Building resilient distributed systems and crafting elegant solutions.
          {/* <span className="text-brand-accent font-medium"> Currently leading engineering teams</span> and architecting scalable platforms. */}
        </motion.p>
      </motion.div>

      {/* Scroll indicator - subtle and calm */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-12 right-6 sm:right-8 lg:right-12 flex items-center gap-4 text-muted-foreground hover:text-brand-accent transition-all cursor-pointer group rounded-full px-6 py-3 border-2 border-transparent hover:border-brand-accent/50 hover:bg-brand-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 1.4 }}
        aria-label="Scroll to content"
        whileHover={prefersReducedMotion ? undefined : hoverEffects.button}
        whileTap={prefersReducedMotion ? undefined : tapEffects.press}
      >
        <span className="text-sm font-mono uppercase tracking-widest font-semibold">
          Explore
        </span>
        <motion.div
          className="relative"
          animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
          transition={prefersReducedMotion ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown aria-hidden="true" className="w-5 h-5 text-brand-accent" />
        </motion.div>
      </motion.button>
    </motion.section>
  );
};
