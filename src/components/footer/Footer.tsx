"use client";

import { Github, Linkedin, ArrowUpRight, FileUser } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { springConfig, hoverEffects, tapEffects } from "@/lib/motion";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ponytojas",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ponytojas/",
    icon: Linkedin,
  },
  {
    name: "CV",
    href: "/cv-danielVillalobos.pdf",
    icon: FileUser
  }
];

export const Footer = () => {
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Subtle decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, var(--brand-accent) 0%, transparent 50%)",
          opacity: 0.03,
        }}
      />

      {/* Bauhaus geometric decoration */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-3 opacity-10 pointer-events-none">
        <div className="bauhaus-square" />
        <div className="bauhaus-dot" />
        <div className="bauhaus-triangle" />
      </div>

      <div className="container-custom py-20 md:py-28 relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {/* Left side - CTA */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.15, ease: [0.33, 1, 0.68, 1] }}
          >
            <p className="text-sm font-mono text-brand-accent uppercase tracking-wider mb-4">
              Get in touch
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-6 leading-tight">
              Let&apos;s build something<br />
              <span className="text-muted-foreground">great together</span>
            </h3>
            <motion.a
              href="mailto:daniel.villalobosdel@icloud.com?subject=See%20your%20webpage.%20Let's%20talk!&body=I%20saw%20your%20website%20and%20I%20want%20to%20talk%20with%20you%20about...."
              className="inline-flex items-center gap-3 text-lg text-foreground font-medium group rounded-lg px-6 py-3 -ml-6 hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              whileHover={prefersReducedMotion ? undefined : hoverEffects.nudge}
            >
              <span className="border-b-2 border-brand-accent pb-0.5">daniel.villalobosdel@icloud.com</span>
              <ArrowUpRight aria-hidden="true" className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-brand-accent" />
            </motion.a>
          </motion.div>

          {/* Right side - Links */}
          <motion.div
            className="flex flex-col md:items-end justify-between gap-8"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.33, 1, 0.68, 1] }}
          >
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-brand-accent hover:bg-brand-accent/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={link.name}
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: prefersReducedMotion ? 0 : 0.25 + i * 0.05, ease: [0.33, 1, 0.68, 1] }}
                  whileHover={prefersReducedMotion ? undefined : hoverEffects.socialIcon}
                  whileTap={prefersReducedMotion ? undefined : tapEffects.press}
                >
                  <link.icon aria-hidden="true" className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </footer>
  );
};
