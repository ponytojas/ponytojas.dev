"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface KineticTextProps {
  text: string;
  className?: string;
  fontSize?: string;
}

export const KineticText: React.FC<KineticTextProps> = ({
  text,
  className,
  fontSize = "text-[12vw]",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      lettersRef.current.forEach((letter) => {
        if (!letter) return;

        const speed = parseFloat(letter.getAttribute("data-speed") || "0");
        const rotation = parseFloat(
          letter.getAttribute("data-rotation") || "0"
        );

        gsap.to(letter, {
          y: (i, target) => {
            return ScrollTrigger.maxScroll(window) * speed * 1.2;
          },
          rotation: rotation,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0,
          },
          color: "#FA7268", // Shift towards coral
        });
      });
    },
    { scope: containerRef }
  );

  const words = text.split(" ");

  return (
    <div
      ref={containerRef}
      className={`relative select-none pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="flex flex-wrap justify-center gap-[0.2em] leading-none">
        {words.map((word, wIndex) => (
          <span key={wIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((char, cIndex) => {
              // Random speed between 0.5 and 1.5
              const randomSpeed = Math.random() * 1.5 - 0.2;
              // Random rotation between -12 and 12
              const randomRotation = Math.random() * 24 - 12;

              return (
                <span
                  key={`${wIndex}-${cIndex}`}
                  ref={(el) => {
                    lettersRef.current.push(el);
                  }}
                  data-speed={randomSpeed}
                  data-rotation={randomRotation}
                  className={`inline-block origin-center will-change-transform font-black tracking-tighter text-foreground ${fontSize}`}
                >
                  {char}
                </span>
              );
            })}
          </span>
        ))}
      </div>
    </div>
  );
};
