"use client";
import React from "react";

function getDeterministicSpeed(word: string, index: number) {
  let hash = 0;
  const input = `${word}:${index}`;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  const normalized = (hash >>> 0) / 0xffffffff;
  return 0.8 + normalized * 0.7;
}
export function LetterDisplay({
  word,
  isName = false,
}: {
  word: string;
  isName?: boolean;
}) {
  return (
    <>
      {word.split("").map((char, i) => (
        <div
          key={i}
          className={`letter text-4xl ${
            isName ? "font-light" : "font-thin italic"
          }  md:text-[120px]`}
          data-speed={getDeterministicSpeed(word, i)}
        >
          {char}
        </div>
      ))}
    </>
  );
}
