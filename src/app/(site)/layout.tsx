import type { Metadata } from "next";
import { TopBar } from "@/components/top-bar/TopBar";

export const metadata: Metadata = {
    title: "Daniel Villalobos",
    description: "Senior Software Engineer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="relative flex flex-col min-h-screen w-full bg-background text-foreground selection:bg-brand-primary/20 selection:text-brand-primary">
            <TopBar />
            <div className="flex-1 w-full pb-20">
                {children}
            </div>
        </main>
    );
}