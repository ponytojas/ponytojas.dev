import { create } from 'zustand'

type SidebarStore = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({ isOpen }),
}))