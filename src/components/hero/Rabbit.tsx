"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { RabbitImage } from "./RabbitImage";

export const Rabbit = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xPct = e.clientX / innerWidth - 0.5;
      const yPct = e.clientY / innerHeight - 0.5;

      // Move opposite to mouse
      mouseX.set(xPct * -50);
      mouseY.set(yPct * -50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-screen h-[110vh] overflow-hidden bg-foreground flex items-center justify-center">
      <motion.div
        className="w-[80vw] max-w-150 text-background pointer-events-none flex items-center justify-center"
        style={{ x, y }}
      >
        <RabbitImage className="block w-full h-auto" />
      </motion.div>
    </div>
  );
};
