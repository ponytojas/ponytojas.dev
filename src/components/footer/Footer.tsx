"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/60 bg-background/80 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container-custom py-12 md:py-16 max-w-screen-2xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Center - Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ponytojas"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-brand-primary transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ponytojas/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-brand-primary transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="mailto:danielvillalobosmorales@gmail.com?subject=See%20your%20page&body=Let's%20talk!"
              className="group flex items-center gap-2 text-muted-foreground hover:text-brand-primary transition-colors duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm hidden sm:inline">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
