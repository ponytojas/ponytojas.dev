"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Thoughts", href: "/blog" },
  { label: "Work", href: "/experience" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

const normalizePath = (path: string) => (path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path);

export const TopBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const normalizedPathname = normalizePath(pathname);
  const prefersReducedMotion = useReducedMotion();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerY = useTransform(scrollY, [0, 100], prefersReducedMotion ? [0, 0] : [-10, 0]);

  return (
    <>
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

      {/* Theme toggle + mobile menu button */}
      <motion.div
        className="flex items-center gap-3"
        initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.2 }}
      >
        <ModeToggle />
        <button
          onClick={toggleMenu}
          className="sm:hidden relative p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>
    </motion.header>

    {/* Mobile navigation drawer */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <motion.nav
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-2xl border-l border-border z-50 sm:hidden flex flex-col shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 300, damping: 30 }
            }
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                <span className="text-sm font-medium tracking-wide">Menu</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Spacer to push content to bottom */}
            <div className="flex-1" />

            {/* Nav items */}
            <div className="flex flex-col py-8 px-6 gap-2">
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
                    initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.3,
                      delay: prefersReducedMotion ? 0 : 0.05 + i * 0.05,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "group relative block px-5 py-4 text-base font-mono rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        isActive
                          ? "text-foreground bg-gradient-to-r from-brand-accent/15 to-brand-accent/5 shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="flex items-center justify-between">
                        <span className="flex items-center gap-3">
                          {isActive && (
                            <motion.span
                              layoutId="mobileDot"
                              className="w-2 h-2 rounded-full bg-brand-accent shadow-sm shadow-brand-accent/50"
                              transition={
                                prefersReducedMotion
                                  ? { duration: 0 }
                                  : { type: "spring", stiffness: 300, damping: 28 }
                              }
                            />
                          )}
                          {!isActive && <span className="w-2" />}
                          {item.label}
                        </span>
                        {!isActive && (
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand-accent">
                            →
                          </span>
                        )}
                      </span>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 border-2 border-brand-accent/20 rounded-xl pointer-events-none"
                          layoutId="mobileActiveBorder"
                          transition={
                            prefersReducedMotion
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 300, damping: 28 }
                          }
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer accent */}
            <div className="px-8 py-6 border-t border-border">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-12 h-px bg-gradient-to-r from-brand-accent/50 to-transparent" />
                <span className="font-mono">DV</span>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  </>
  );
};
