'use client';

import { motion } from "motion/react";
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export const FloatingIndicator: React.FC = () => {
    const [container, setContainer] = useState<HTMLElement | null>(null);
    const [activeId, setActiveId] = useState<string | null>(null);

    const lastScrollY = useRef<number>(0);      // track scroll direction
    const ticking = useRef<boolean>(false); // rAF throttle

    /**
     * Decide which section should be active based on
     *   – scroll direction
     *   – section’s distance from the top of the viewport
     */
    const pickActiveSection = (direction: 'down' | 'up') => {
        const sections = Array.from(
            document.querySelectorAll<HTMLElement>('section[id]')
        );

        const vh = window.innerHeight;
        let nextActive: string | null = null;

        if (direction === 'down') {
            // choose the last section whose TOP is above 35 % of viewport height
            for (const section of sections) {
                if (section.getBoundingClientRect().top <= vh * 0.75) {
                    nextActive = section.id;
                } else {
                    break;
                }
            }
        } else {
            // choose the first section (scanning bottom-to-top) whose TOP is above 25 %
            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i].getBoundingClientRect().top <= vh * 0.25) {
                    nextActive = sections[i].id;
                    break;
                }
            }
        }

        if (nextActive && nextActive !== activeId) {
            setActiveId(nextActive);
        }
    };

    /** Scroll listener (direction + rAF throttling) */
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            const dir: 'down' | 'up' = y > lastScrollY.current ? 'down' : 'up';
            lastScrollY.current = y;

            if (!ticking.current) {
                ticking.current = true;
                requestAnimationFrame(() => {
                    pickActiveSection(dir);
                    ticking.current = false;
                });
            }
        };

        // initial run — handles direct deep links / refreshes in the middle
        pickActiveSection('down');

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeId]);

    /** When activeId changes, jump the portal target */
    useEffect(() => {
        if (!activeId) {
            setContainer(null);
            return;
        }

        const section = document.getElementById(activeId);
        const span = section?.querySelector<HTMLElement>(
            `[data-indicator-container="${activeId}"]`
        );

        if (span) {
            span.style.position = 'relative';
            setContainer(span);
        } else {
            setContainer(null);
        }
    }, [activeId]);

    if (!container) return null;

    return createPortal(
        <motion.div
            layoutId="floating-indicator"
            className="absolute inset-0 rounded-full bg-accent-primary"
            transition={{ type: 'spring', stiffness: 300, damping: 50 }}
        />,
        container
    );
};