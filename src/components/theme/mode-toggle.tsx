"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useCallback, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [isClicked, setIsClicked] = useState(false);

  const handleThemeChange = useCallback(() => {
    // Trigger ripple animation
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);

    // Add transitioning class for smooth color transitions
    document.documentElement.classList.add("transitioning");
    setTheme(theme === "dark" ? "light" : "dark");

    // Remove the class after transition completes
    setTimeout(() => {
      document.documentElement.classList.remove("transitioning");
    }, 300);
  }, [theme, setTheme]);

  return (
    <motion.button
      onClick={handleThemeChange}
      className="relative p-2.5 text-muted-foreground hover:text-foreground transition-all rounded-full border border-transparent hover:border-border hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background overflow-hidden"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
    >
      {/* Subtle ripple on click */}
      <AnimatePresence>
        {isClicked && !prefersReducedMotion && (
          <motion.span
            className="absolute inset-0 rounded-full bg-brand-accent/10"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={prefersReducedMotion ? false : { rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: [0.33, 1, 0.68, 1] }}
          >
            <Sun aria-hidden="true" className="w-4 h-4" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={prefersReducedMotion ? false : { rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: [0.33, 1, 0.68, 1] }}
          >
            <Moon aria-hidden="true" className="w-4 h-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
