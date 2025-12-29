import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next"

const sfPro = localFont({
  src: [
    { path: "../../public/fonts/sf/SF-Pro-Rounded-Ultralight.otf", weight: "100", style: "normal" },
    { path: "../../public/fonts/sf/SF-Pro-Rounded-Thin.otf", weight: "200", style: "normal" },
    { path: "../../public/fonts/sf/SF-Pro-Rounded-Light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/sf/SF-Pro-Rounded-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/sf/SF-Pro-Rounded-Medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/sf/SF-Pro-Rounded-Semibold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/sf/SF-Pro-Rounded-Bold.otf", weight: "700", style: "normal" },
    { path: "../../public/fonts/sf/SF-Pro-Rounded-Heavy.otf", weight: "800", style: "normal" },
    { path: "../../public/fonts/sf/SF-Pro-Rounded-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-sf",
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
    <html lang="en" suppressHydrationWarning className={`${sfPro.variable}`}>
      <body
        className={`antialiased overscroll-none font-sans`}
      >
        <SpeedInsights />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="root">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
