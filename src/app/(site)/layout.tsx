import type { Metadata } from "next";
import { TopBar } from "@/components/top-bar/TopBar";
import { Footer } from "@/components/footer/Footer";
import { RouteTransition } from "@/components/route-transition/RouteTransition";

export const metadata: Metadata = {
  title: "Daniel Villalobos",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex flex-col min-h-screen w-full bg-background text-foreground">
      <TopBar />
      <div className="flex-1 w-full">
        <RouteTransition>{children}</RouteTransition>
      </div>
      <Footer />
    </main>
  );
}
