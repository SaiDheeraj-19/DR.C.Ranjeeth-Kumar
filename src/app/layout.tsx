import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DR. C. Ranjeeth Kumar | AI Researcher | Global Innovation Leader",
  description: "Advancing Artificial Intelligence for Education, Industry, and Society. Portfolio of a globally recognized AI Researcher, Professor, and Industry Consultant.",
  keywords: ["AI Research", "Professor", "Innovation Leader", "Consultant", "Deep Learning", "Computer Vision"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, playfair.variable, "font-sans bg-academic-white min-h-screen text-deep-slate")}>
        {children}
      </body>
    </html>
  );
}
