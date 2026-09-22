import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LangProvider } from "@/context/LangContext";
import { HtmlLangSync } from "@/components/HtmlLangSync";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Matin Malakooti",
  description:
    "Portfolio of Matin Malakooti, a frontend developer building with React, Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <LangProvider>
            <HtmlLangSync />
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
