'use client'

import { ModeToggle } from "@/components/theme/mode-toggle";

export const TopBar: React.FC<{ hideIndex?: boolean }> = () => {
    return (
        <header className="fixed top-0 left-0 w-full flex flex-row justify-end items-center py-6 px-6 md:px-12 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40 md:bg-transparent md:backdrop-blur-none md:border-none">
            <div className="flex items-center gap-4">
                {/* Future navigation links can go here */}
                <ModeToggle />
            </div>
        </header>
    )
}
