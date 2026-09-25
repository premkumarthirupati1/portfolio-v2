import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { SmoothScroll } from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Prem Kumar | Software Developer",
  description: "Portfolio of Prem Kumar. Building thoughtful software that solves real problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background antialiased selection:bg-accent-iris/20 selection:text-accent-iris cursor-none">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
