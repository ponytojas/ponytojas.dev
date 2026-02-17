"use client";

import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface RotatingTooltipTextProps {
  text: string;
  images: string[];
  altText?: string;
}

export const RotatingTooltipText = ({
  text,
  images,
  altText = "Tooltip image",
}: RotatingTooltipTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="underline cursor-help hover:text-primary transition-colors decoration-dotted">
            {text}
          </span>
        </TooltipTrigger>
        <TooltipContent className="p-0 bg-transparent border-none shadow-md mb-6 cursor-help" showArrow={false}>
          <div className="relative w-72 h-56 overflow-hidden rounded-lg shadow-lg">
            <img
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt={altText}
              className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
