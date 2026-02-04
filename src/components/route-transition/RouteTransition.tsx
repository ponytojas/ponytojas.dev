"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

// Duration exported so child components can coordinate their animation delays
export const ROUTE_TRANSITION_DURATION = 0.25;

// Page transition variants with subtle Y-movement and blur
const pageVariants = {
  initial: { opacity: 0, y: 8, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -4, filter: "blur(2px)" },
};

export const RouteTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className="relative">{children}</div>;
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: ROUTE_TRANSITION_DURATION, ease: [0.33, 1, 0.68, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
