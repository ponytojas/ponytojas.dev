"use client";

import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "motion/react";

export const ScrollProgress = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 300 : 100,
    damping: prefersReducedMotion ? 50 : 30,
    restDelta: 0.001,
  });

  // Dot opacity fades in as user scrolls past 10%
  const dotOpacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  return (
    <div className="fixed top-0 left-0 right-0 z-100">
      <motion.div
        className="h-0.5 bg-brand-accent origin-left"
        style={{ scaleX }}
      />
      {/* End dot indicator */}
      <motion.div
        className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-brand-accent -translate-y-[2px]"
        style={{ opacity: prefersReducedMotion ? 1 : dotOpacity }}
      />
    </div>
  );
};
