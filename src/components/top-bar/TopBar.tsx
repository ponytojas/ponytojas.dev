"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Thoughts", href: "/blog" },
  { label: "Work", href: "/experience" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

const normalizePath = (path: string) => (path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path);

export const TopBar: React.FC = () => {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const normalizedPathname = normalizePath(pathname);
  const prefersReducedMotion = useReducedMotion();

  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerY = useTransform(scrollY, [0, 100], prefersReducedMotion ? [0, 0] : [-10, 0]);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full flex flex-row justify-between items-center py-2 px-6 sm:px-8 lg:px-12 z-50"
      style={{ y: headerY }}
    >
      <motion.div
        className="absolute inset-0 bg-background/70 backdrop-blur-xl border-b border-border/50 -z-10"
        style={{ opacity }}
      />

      {/* Logo/Name - full name with accent */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      >
        <Link
          href="/"
          className="group relative text-sm font-medium text-foreground hover:text-brand-accent transition-colors rounded-md px-2 py-1 -ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="relative flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            DV
            <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </span>
        </Link>
      </motion.div>

      {/* Navigation - refined with hover underline animation */}
      <motion.nav
        className="hidden sm:flex items-center gap-1"
        initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.1 }}
      >
        {navItems.map((item, i) => {
          const normalizedHref = normalizePath(item.href);
          const isActive =
            normalizedHref === "/"
              ? normalizedPathname === "/"
              : normalizedPathname === normalizedHref ||
              normalizedPathname.startsWith(`${normalizedHref}/`);

          return (
            <motion.div
              key={item.label}
              initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                delay: prefersReducedMotion ? 0 : 0.1 + i * 0.05,
              }}
              whileHover={prefersReducedMotion ? undefined : { y: -1, scale: 1.01 }}
            >
              <Link
                href={item.href}
                className="group relative px-3 py-2 text-sm font-mono transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={cn(
                    "text-muted-foreground group-hover:text-foreground transition-colors",
                    isActive && "text-foreground"
                  )}
                >
                  {item.label}
                </span>
                {/* Hover underline effect */}
                <span
                  className={cn(
                    "absolute bottom-1 left-3 right-3 h-px bg-muted-foreground/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                    isActive && "hidden"
                  )}
                />
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute bottom-1 left-3 right-3 h-px bg-brand-accent"
                    layoutId="activeSection"
                    transition={
                      prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 28 }
                    }
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>

      {/* Theme toggle */}
      <motion.div
        className="flex items-center gap-3"
        initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.2 }}
      >
        <ModeToggle />
      </motion.div>
    </motion.header>
  );
};
