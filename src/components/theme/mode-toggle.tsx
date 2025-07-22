"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "motion/react"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const commonClasses =
        "transition-transform duration-300 cursor-pointer " +
        "hover:scale-[1.05] hover:rotate-[15deg] " +
        "active:scale-[1.15]" +
        "w-[26px] h-[26px] hover:w-[26px] hover:h-[26px]" +
        "text-neutral-600 dark:text-neutral-300 hover:text-accent-primary dark:hover:text-accent-primary"


    const iconVariants = {
        initial: { opacity: 0, scale: 1.2, rotate: -90 },
        animate: { opacity: 1, scale: 1, rotate: 0 },
        exit: { opacity: 0, scale: 1.2, rotate: 90 },
    };


    const iconClasses =
        "transition-transform duration-300" +
        "w-[26px] h-[26px] hover:w-[26px] hover:h-[26px]"


    return (
        <div className="right-0 py-10 px-15 fixed z-1 flex justify-end items-center w-auto" suppressHydrationWarning>
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
                    >
                        <Moon className={iconClasses} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}