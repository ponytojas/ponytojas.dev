// Shared motion configuration for consistent animations across the app
// Inspired by Apple HIG timing and Bauhaus precision

import type { Transition } from "motion/react";

// Spring configurations for different interaction feels
export const springConfig = {
  // Gentle spring for subtle movements
  gentle: { type: "spring", stiffness: 120, damping: 14 } as const,
  // Snappy spring for responsive interactions
  snappy: { type: "spring", stiffness: 300, damping: 24 } as const,
  // Bouncy spring for playful feedback
  bouncy: { type: "spring", stiffness: 400, damping: 10 } as const,
} satisfies Record<string, Transition>;

// Apple HIG-aligned easing curves
export const easingConfig = {
  // Standard ease-out for most animations
  easeOut: [0.33, 1, 0.68, 1] as const,
  // Smooth ease-in-out for transitions
  easeInOut: [0.65, 0, 0.35, 1] as const,
  // Apple's signature easing
  appleEase: [0.16, 1, 0.3, 1] as const,
};

// Pre-configured hover effects
export const hoverEffects = {
  // Subtle lift for cards and interactive elements
  lift: {
    scale: 1.02,
    y: -2,
    transition: springConfig.gentle,
  },
  // Social icon hover effect
  socialIcon: {
    scale: 1.1,
    y: -3,
    transition: springConfig.snappy,
  },
  // Button hover effect
  button: {
    scale: 1.05,
    transition: springConfig.snappy,
  },
  // Subtle horizontal nudge
  nudge: {
    x: 4,
    transition: springConfig.gentle,
  },
};

// Pre-configured tap effects
export const tapEffects = {
  // Standard tap feedback
  press: {
    scale: 0.97,
    transition: springConfig.snappy,
  },
  // Subtle tap feedback
  subtle: {
    scale: 0.98,
    transition: springConfig.gentle,
  },
};

// Stagger configuration for lists
export const staggerConfig = {
  // Default stagger for list items
  list: 0.08,
  // Fast stagger for tags/badges
  tags: 0.03,
  // Slow stagger for sections
  sections: 0.15,
};

// Viewport configuration for scroll-triggered animations
export const viewportConfig = {
  once: true,
  margin: "-50px",
};
