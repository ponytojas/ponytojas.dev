'use client'

import { useSidebarStore } from "@/store/sidebar";
import { PanelLeft, PanelRight } from "lucide-react";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { useTheme } from "next-themes";

export const TopBar: React.FC<{ hideIndex: boolean }> = ({ hideIndex = false }) => {
    const { theme } = useTheme();
    const isOpen = useSidebarStore((state) => state.isOpen);
    const setIsOpen = useSidebarStore((state) => state.setIsOpen);

    const commonClasses =
        "transition-transform duration-300 cursor-pointer " +
        "hover:scale-[1.15] active:scale-[1.15] " +
        "text-neutral-600 dark:text-neutral-300 " +
        "hover:text-accent-primary dark:hover:text-accent-primary";

    const iconClasses =
        "transition-transform duration-300 w-[26px] h-[26px] " +
        "hover:w-[26px] hover:h-[26px]";

    const fillColor = theme === 'dark' ? '#17171c' : '#fefefe';

    return (
        <nav className="fixed w-full flex flex-row justify-between align-middle items-center md:pb-0 pt-10 md:pt-6 px-6 z-100">
            {!hideIndex && (<div className="flex flex-col items-center">
                {isOpen ? (
                    <button className={commonClasses} onClick={() => setIsOpen(false)}>
                        <PanelRight className={iconClasses} fill={fillColor} />
                    </button>
                ) : (
                    <button className={commonClasses} onClick={() => setIsOpen(true)}>
                        <PanelLeft className={iconClasses} fill={fillColor} />
                    </button>
                )}
            </div>)}
            <div className="flex items-center">
                <ModeToggle />
            </div>
        </nav >
    )
}