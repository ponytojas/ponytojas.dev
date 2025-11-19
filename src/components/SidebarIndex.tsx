"use client";

import React, { useEffect, useRef, useState } from "react";
import { INDEX } from "@/static";
import { motion, AnimatePresence } from "motion/react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useSidebarStore } from "@/store/sidebar";
import { cn } from "@/lib/utils";

export const SidebarIndex: React.FC = () => {
    const isOpen = useSidebarStore((state) => state.isOpen);
    const { isMobile } = useIsMobile(768);
    const [activeId, setActiveId] = useState<string | null>(null);

    const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    const pickActiveSection = (direction: "down" | "up") => {
        const sections = Array.from(
            document.querySelectorAll<HTMLElement>("section[id]")
        );

        const vh = window.innerHeight;
        let nextId: string | null = null;

        if (direction === "down") {
            for (const sec of sections) {
                if (sec.getBoundingClientRect().top <= vh * 0.5) {
                    nextId = sec.id;
                } else {
                    break;
                }
            }
        } else {
            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i].getBoundingClientRect().top <= vh * 0.5) {
                    nextId = sections[i].id;
                    break;
                }
            }
        }

        if (nextId && nextId !== activeId) {
            setActiveId(nextId);
        }
    };

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            const dir = y > lastScrollY.current ? "down" : "up";
            lastScrollY.current = y;

            if (!ticking.current) {
                ticking.current = true;
                requestAnimationFrame(() => {
                    pickActiveSection(dir);
                    ticking.current = false;
                });
            }
        };

        pickActiveSection("down");

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeId]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence initial={false}>
            {(isOpen || !isMobile) && (
                <>
                    {isMobile ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-background/90 backdrop-blur-sm flex items-center justify-center"
                        >
                            <ul className="flex flex-col gap-6 text-center">
                                {INDEX.filter((s) => s.id !== "presentation").map((s) => (
                                    <li key={s.id}>
                                        <button
                                            onClick={() => {
                                                scrollToSection(s.id);
                                                useSidebarStore.getState().setIsOpen(false);
                                            }}
                                            className={cn(
                                                "text-2xl font-medium transition-colors duration-300",
                                                activeId === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                            )}
                                        >
                                            {s.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ) : (
                        <nav className="hidden md:flex flex-col justify-center w-64 h-full pl-12 select-none">
                            <ul className="flex flex-col gap-4">
                                {INDEX.filter((s) => s.id !== "presentation").map((s) => (
                                    <li key={s.id} className="group flex items-center">
                                        <button
                                            onClick={() => scrollToSection(s.id)}
                                            className="flex items-center gap-3 group focus:outline-none"
                                        >
                                            <div
                                                className={cn(
                                                    "h-[1px] transition-all duration-300",
                                                    activeId === s.id ? "w-8 opacity-100 bg-accent-primary" : "w-4 opacity-30 bg-foreground group-hover:w-6 group-hover:opacity-50"
                                                )}
                                            />
                                            <span
                                                className={cn(
                                                    "text-sm tracking-tight transition-colors duration-300",
                                                    activeId === s.id ? "text-accent-primary font-medium" : "text-muted-foreground group-hover:text-foreground"
                                                )}
                                            >
                                                {s.title}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </>
            )}
        </AnimatePresence>
    );
};