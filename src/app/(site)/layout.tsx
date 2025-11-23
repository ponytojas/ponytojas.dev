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
        <main className="relative flex flex-col min-h-screen w-full bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
            <TopBar />
            <div className="flex-1 w-full max-w-3xl mx-auto px-6 md:px-8 pt-32 pb-20">
                {children}
            </div>
        </main>
    );
}