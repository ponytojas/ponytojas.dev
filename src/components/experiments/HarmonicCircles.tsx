'use client';

import { useTheme } from "next-themes";
import React from "react";

const HarmonicCircles = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const svgSize = 300;
  const center = svgSize / 2;
  const mainRadius = 120;
  const numSubCircles = 5;

  const topPoint = { x: center, y: center - mainRadius };
  const bottomPoint = { x: center, y: center + mainRadius };

  const generateSubCircles = (origin: { x: number; y: number }, direction: "down" | "up") => {
    return Array.from({ length: numSubCircles }, (_, i) => {
      const r = ((i + 1) / numSubCircles) * mainRadius * 0.7;
      const cy = direction === "down" ? origin.y + r : origin.y - r;

      return (
        <circle
          key={`${direction}-${i}`}
          cx={origin.x}
          cy={cy}
          r={r}
          className="pulse-scale"
          stroke={isDarkTheme ? "#f0f0f0" : "#333333"}
          strokeWidth={Math.max(0.85 - i * 0.2, 0.05)}
          fill="none"
        />
      );
    });
  };

  return (
    <svg
      width={svgSize}
      height={svgSize}
      className="slow-rotate"
    >
      <circle
        cx={center}
        cy={center}
        r={mainRadius}
        stroke={isDarkTheme ? "#f0f0f0" : "#333333"}
        strokeWidth="0.95"
        fill="none"
        className="pulse-scale"
      />
      <circle
        cx={center}
        cy={center}
        r={3.5}
        fill={isDarkTheme ? "#f0f0f0" : "#333333"}
      />
      {generateSubCircles(topPoint, "down")}
      {generateSubCircles(bottomPoint, "up")}
    </svg>
  );
};

export default React.memo(HarmonicCircles);