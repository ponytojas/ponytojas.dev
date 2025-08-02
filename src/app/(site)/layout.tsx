import type { Metadata } from "next";
import { SidebarIndex } from "@/components/SidebarIndex";
import { FloatingIndicator } from "@/components/FloatingIndicator/FloatingIndicator";
import { TopBar } from "@/components/top-bar/TopBar";
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
    title: "Daniel Villalobos",
    description: "Portfolio of Daniel Villalobos",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <main className="relative z-10 flex flex-col min-h-screen w-full">
            <TopBar />
            <FloatingIndicator />
            <div className="flex flex-col fixed h-screen justify-center z-50">
                <SidebarIndex />
            </div>
            <div className="w-full bg-background z-20">
                <div className="flex-1 flex flex-col mx-auto max-w-full px-10 md:px-4 md:max-w-[800px] w-full pt-16 mt-20 z-20 bg-background">
                    {children}
                </div>
            </div>

            <Footer />

        </main>
    );
}
