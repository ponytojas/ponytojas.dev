import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarIndex } from "@/components/SidebarIndex";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { FloatingIndicator } from "@/components/FloatingIndicator/FloatingIndicator";

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
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col min-h-screen">
            <ModeToggle />
            <FloatingIndicator />
            <div className="flex flex-col fixed h-screen justify-center">
              <SidebarIndex />
            </div>
            <div className="flex-1 flex flex-col mx-auto max-w-[800px] w-full pt-16 px-4 mt-20 mb-96">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
