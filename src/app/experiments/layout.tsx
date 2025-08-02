import { TopBar } from "@/components/top-bar/TopBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


export const metadata: Metadata = {
    title: "Daniel Villalobos",
    description: "Experiments",
};

export default function ExperimentsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <main className="relative z-10 flex flex-col min-h-screen w-full">
            <TopBar hideIndex={true} />
            <div className="w-full bg-background z-20">
                <div className="flex-1 flex flex-col mx-auto max-w-full px-10 md:px-4 md:max-w-[800px] w-full  z-20 bg-background">
                    {children}
                </div>
            </div>

        </main>

    );
}
