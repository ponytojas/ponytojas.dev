"use client";

import { LetterCollision } from "./LetterCollision";
import { ArrowDownRight } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <section
        id="presentation"
        className="relative min-h-[120vh] flex flex-col justify-start items-start overflow-hidden pb-10 md:pb-32"
      >
        <div className="flex flex-col items-start w-screen px-4 gap-4 sm:gap-8">
          <LetterCollision />
        </div>
        <div
          className="flex flex-row absolute bottom-70 right-10 text-2xl text-gray-500 transition-opacity duration-500"
          style={{
            opacity:
              typeof window !== "undefined" && window.scrollY > 10 ? 0 : 1,
            pointerEvents:
              typeof window !== "undefined" && window.scrollY > 10
                ? "none"
                : "auto",
          }}
          id="scroll-indicator"
        >
          <span>SCROLL</span>
          <div className="flex items-end">
            <ArrowDownRight color="#FA7268" />
          </div>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var indicator = document.getElementById('scroll-indicator');
                if (!indicator) return;
                function handleScroll() {
                  var y = window.scrollY;
                  indicator.style.opacity = y > 10 ? '0' : '1';
                  indicator.style.pointerEvents = y > 10 ? 'none' : 'auto';
                }
                window.addEventListener('scroll', handleScroll, { passive: true });
              })();
            `,
          }}
        />
      </section>
    </>
  );
};
