import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surya Permadi | DESIGN LOGIC",
  description: "Portofolio profesional Surya Permadi Wicaksana - Frontend Developer, UI/UX Designer, & System Analyst.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark h-full" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground tech-noir-bg h-full selection:bg-primary-container/30 selection:text-white`}>
        {/* Global Background Layers */}
        <div className="fixed inset-0 grid-bg pointer-events-none z-0 animate-grid-drift"></div>
        <div className="fixed inset-0 blueprint-lines pointer-events-none z-0"></div>
        <div className="fixed inset-0 noise-overlay pointer-events-none z-0"></div>
        
        {/* Floating Decorative Bits */}
        <div className="fixed top-[15%] left-[5%] data-bit animate-pulse z-0">0x8A_FETCH_STATUS: 200</div>
        <div className="fixed top-[45%] right-[2%] data-bit z-0 rotate-90 origin-right">ENCRYPTED_LINK_v2.0.4</div>
        <div className="fixed bottom-[10%] left-[8%] data-bit z-0">GEO_LOC: [LAT_6.2_S LONG_106.8_E]</div>
        <div className="fixed top-[20%] left-0 w-[30%] geometric-line z-0"></div>
        <div className="fixed top-[80%] right-0 w-[20%] geometric-line z-0"></div>
        
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
