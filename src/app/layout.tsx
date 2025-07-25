import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarIndex } from "@/components/SidebarIndex";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { FloatingIndicator } from "@/components/FloatingIndicator/FloatingIndicator";
import { TopBar } from "@/components/top-bar/TopBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased overscroll-none`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative z-10 flex flex-col min-h-screen">
            <TopBar />
            <FloatingIndicator />
            <div className="flex flex-col fixed h-screen justify-center z-50">
              <SidebarIndex />
            </div>
            <div className="w-screen bg-background z-20">
              <div className="flex-1 flex flex-col mx-auto max-w-[800px] w-full pt-16 px-4 mt-20 z-20 bg-background">
                {children}
              </div>
            </div>

            <Footer />

          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
