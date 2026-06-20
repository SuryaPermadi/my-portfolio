import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surya Permadi | Frontend Developer & UI Designer",
  description:
    "Portfolio profesional Surya Permadi Wicaksana — Frontend Developer, UI/UX Designer, & System Analyst dari Indonesia.",
  openGraph: {
    title: "Surya Permadi | Frontend Developer & UI Designer",
    description:
      "Saya membantu bisnis tumbuh dengan menciptakan pengalaman web yang luar biasa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@300..500,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} ${lora.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground h-full selection:bg-accent/20 selection:text-accent`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
