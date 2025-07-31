"use client";

import React, { useEffect, useRef, useState } from "react";
import { INDEX } from "@/static";
import { motion, AnimatePresence } from "motion/react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useSidebarStore } from "@/store/sidebar";

export const SidebarIndex: React.FC = () => {
    const isOpen = useSidebarStore((state) => state.isOpen);
    const { isMobile } = useIsMobile(768);
    const [activeId, setActiveId] = useState<string | null>(null);

    const [hoverY, setHoverY] = useState<number | null>(null);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    const navRef = useRef<HTMLDivElement>(null);
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
                if (sec.getBoundingClientRect().top <= vh * 0.75) {
                    nextId = sec.id;
                } else {
                    break;
                }
            }
        } else {
            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i].getBoundingClientRect().top <= vh * 0.25) {
                    nextId = sections[i].id;
                    break;
                }
            }
        }

        if (nextId && nextId !== activeId) {
            setActiveId(nextId);

            const item = itemRefs.current[nextId];
            if (item && navRef.current) {
                if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            }
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

    useEffect(() => {
        const el = itemRefs.current[activeId ?? ""];
        if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }, [activeId]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isMobile) return;
        const rect = navRef.current?.getBoundingClientRect();
        if (!rect) return;
        setHoverY(e.clientY - rect.top);
    };
    const handleMouseLeave = () => setHoverY(null);

    const getScale = (el: HTMLDivElement | null): number => {
        if (!el) return 1;
        const rect = el.getBoundingClientRect();
        const navTop = navRef.current?.getBoundingClientRect().top || 0;
        const y = rect.top - navTop + rect.height / 2;

        if (hoverY != null) {
            const d = Math.abs(hoverY - y);
            const f = Math.exp(-(d ** 2) / (2 * 30 ** 2));
            return 1 + f * 2;
        }
        // if (scrollHoverY != null) {
        //     const d = Math.abs(scrollHoverY - y);
        //     const f = Math.exp(-(d ** 2) / (2 * 30 ** 2));
        //     return 1 + f * 0.5;
        // }
        return 1;
    };



    return (
        <>
            {/* open / close button */}


            <AnimatePresence initial={true}>
                {isOpen && (
                    <>
                        {isMobile ? (
                            // Animated overlay with blur
                            <motion.div
                                initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
                                animate={{ backdropFilter: "blur(24px)", opacity: 1 }}
                                exit={{ backdropFilter: "blur(0px)", opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="fixed inset-0 z-30"
                            >
                                <motion.nav
                                    ref={navRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    initial={{ x: -300, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -300, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="p-4 flex flex-col justify-center h-screen w-screen"
                                >
                                    <ul>
                                        {INDEX.filter((s) => s.id !== "presentation").map((s) => (
                                            <li key={s.id} className="mb-2">
                                                <div ref={(el) => { itemRefs.current[s.id] = el; }}>
                                                    <HoverLineWithText
                                                        getScale={getScale}
                                                        baseWidth={52}
                                                        text={s.title}
                                                        href={`#${s.id}`}
                                                        isActive={s.id === activeId}
                                                        isSection
                                                        data-cursor="block"
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.nav>
                            </motion.div>
                        ) : (
                            // Desktop sidebar
                            <motion.nav
                                ref={navRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                initial={{ x: -300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -300, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="flex flex-col justify-center w-64 h-full z-20 overflow-y-auto p-4 select-none"
                            >
                                <ul>
                                    {INDEX.filter((s) => s.id !== "presentation").map((s) => (
                                        <li key={s.id} className="mb-2">
                                            <div ref={(el) => { itemRefs.current[s.id] = el; }}>
                                                <HoverLineWithText
                                                    getScale={getScale}
                                                    baseWidth={52}
                                                    text={s.title}
                                                    href={`#${s.id}`}
                                                    isActive={s.id === activeId}
                                                    isSection
                                                    data-cursor="block"
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.nav>
                        )}
                    </>
                )}
            </AnimatePresence>
        </>
    );
};


const HoverLineWithText: React.FC<{
    getScale: (el: HTMLDivElement | null) => number;
    baseWidth: number;
    text: string;
    href: string;
    isActive: boolean;
    isSection?: boolean;
}> = ({ getScale, baseWidth, text, href, isActive, isSection }) => {
    const lineRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const tick = () => {
            const s = getScale(lineRef.current);
            setScale((prev) => (Math.abs(prev - s) < 0.01 ? prev : s));
        };
        tick();
        const id = setInterval(tick, 50);
        return () => clearInterval(id);
    }, [getScale]);

    const lineWidth = baseWidth * scale;

    return (
        <div className="flex items-center transition-all duration-150">
            <div
                ref={lineRef}
                className={`origin-left ${isSection ? "bg-gray-500" : "bg-gray-300"
                    } transition-transform duration-200`}
                style={{
                    transform: `scaleX(${scale})`,
                    width: `${baseWidth}px`,
                    height: isSection ? "1.5px" : "1px",
                }}
            />
            <a
                href={href}
                className={`ml-2 transition-all duration-150 ${isActive ? "font-bold text-accent-primary" : ""
                    } prose max-w-none dark:prose-invert`}
                style={{ marginLeft: `${lineWidth - baseWidth + 8}px` }}
            >
                {text}
            </a>
        </div>
    );
};