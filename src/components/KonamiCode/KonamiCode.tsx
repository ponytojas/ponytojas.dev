"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export const KonamiCode = () => {
  const [activated, setActivated] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeySequence((prev) => {
        const newSequence = [...prev, e.key].slice(-konamiCode.length);

        if (newSequence.join(",") === konamiCode.join(",")) {
          setActivated(true);
          setTimeout(() => setActivated(false), 5000);
          return [];
        }

        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="fixed bottom-10 right-10 z-200 bg-linear-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-2xl shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-4xl"
            >
              🎮
            </motion.span>
            <div>
              <h3 className="font-bold text-lg">Secret Unlocked!</h3>
              <p className="text-sm opacity-90">You found the Konami Code!</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
