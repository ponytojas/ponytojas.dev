"use client";

import { motion, useScroll, AnimatePresence } from "motion/react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

export const BackToTop = () => {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setShow(latest > 500);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="flex flex-row text-2xl items-center align-middle cursor-default gap-2 fixed bottom-1 right-6 z-100 p-3 text-gray-500 "
          aria-label="Back to top"
        >
          <span>TOP</span>
          <div className="flex items-end">
            <ArrowUpRight color="#FA7268" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
