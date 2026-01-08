"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "motion/react"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const commonClasses =
        "transition-transform duration-300 cursor-pointer " +
        "hover:scale-[1.05] hover:rotate-[15deg] " +
        "active:scale-[1.15] " +
        "w-[26px] h-[26px] " +
        "text-muted-foreground hover:text-brand-primary"

    const iconVariants = {
        initial: { opacity: 0, scale: 1.2, rotate: -90 },
        animate: { opacity: 1, scale: 1, rotate: 0 },
        exit: { opacity: 0, scale: 1.2, rotate: 90 },
    };

    const iconClasses = "w-full h-full"

    // Optional: fill color based on theme, but Lucide icons usually use stroke.
    // We can use currentColor (via text class) for stroke.
    // If fill is desired:
    const fillColor = theme === 'dark' ? 'currentColor' : 'currentColor'; 

    return (
        <AnimatePresence mode="wait">
            {theme === 'dark' ? (
                <motion.button
                    layout
                    key="dark"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={iconVariants}
                    transition={{ duration: 0.15 }}
                    className={commonClasses}
                    onClick={() => setTheme("light")}
                    aria-label="Switch to light mode"
                >
                    <Sun className={iconClasses} />
                </motion.button>
            ) : (
                <motion.button
                    key="light"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={iconVariants}
                    transition={{ duration: 0.15 }}
                    className={commonClasses}
                    onClick={() => setTheme("dark")}
                    aria-label="Switch to dark mode"
                >
                    <Moon className={iconClasses} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
