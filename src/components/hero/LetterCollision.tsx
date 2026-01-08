"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LetterDisplay } from "./LetterDisplay";
gsap.registerPlugin(ScrollTrigger);
const lines = ["Daniel ", "Villalobos ", "is ", "a ", "software ", "engineer"];
function getRandomRotation() {
  return Math.random() * 60 - 30;
}

function animateLettersOnScroll(ref: React.RefObject<HTMLDivElement | null>) {
  const nodes = ref.current?.querySelectorAll<HTMLElement>(".letter") || [];
  const tweens: gsap.core.Tween[] = [];
  nodes.forEach((letter) => {
    const speed = parseFloat(letter.dataset.speed || "1");
    const tweenVars: gsap.TweenVars = {
      y: (1 - speed) * ScrollTrigger.maxScroll(window),
      rotation: getRandomRotation(),
      ease: "power2.out",
      duration: 0.8,
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    };

    const tween = gsap.to(letter, tweenVars);
    tweens.push(tween);
  });
  return tweens;
}

export function LetterCollision() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const tweens = animateLettersOnScroll(ref);
    ScrollTrigger.refresh();
    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill();
        tween.kill();
      });
    };
  }, []);

  return (
    <div ref={ref} className="ml-8 scroll-smooth">
      <div className="mb-12 flex h-screen flex-col justify-center lg:mb-24">
        <div className="flex flex-wrap">
          <LetterDisplay word={lines[0]} isName={true} />
          <div className="w-8 sm:w-10" />
          <LetterDisplay word={lines[1]} isName={true} />
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={lines[2]} isName={false} />
          <div className="w-8 sm:w-10" />
          <LetterDisplay word={lines[3]} isName={false} />
        </div>
        <div className="flex flex-wrap">
          <LetterDisplay word={lines[4]} isName={false} />
          <div className="w-8 sm:w-10" />
          <LetterDisplay word={lines[5]} isName={false} />
        </div>
      </div>
    </div>
  );
}
