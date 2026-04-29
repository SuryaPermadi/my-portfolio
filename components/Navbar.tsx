"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Proyek", href: "/projects" },
  { name: "Kontak", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-8 transition-all duration-500 ${scrolled ? "py-4" : "py-8"}`}
    >
      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-md border border-zinc-200/50 rounded-4xl shadow-xl py-4" : ""}`}>
        
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-[#111111] rounded-xl flex items-center justify-center text-white font-black group-hover:bg-primary transition-colors shadow-lg">
            S
          </div>
          <span className="text-xl font-black tracking-tighter text-[#111111] uppercase italic">
            Surya<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                  className={`relative text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:text-primary ${pathname === link.href ? "text-primary" : "text-zinc-400"}`}
              >
                {link.name}
                {pathname === link.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary rounded-full shadow-[0_4px_10px_rgba(109,40,217,0.3)]"
                    />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-12 h-12 flex flex-col justify-center items-center gap-2 focus:outline-none bg-secondary/50 rounded-2xl"
        >
          <div className={`w-5 h-0.5 bg-foreground transition-all duration-500 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-foreground transition-all duration-500 ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-foreground transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute top-28 left-6 right-6 bg-white/90 backdrop-blur-2xl rounded-4xl border border-secondary/50 p-10 md:hidden pointer-events-auto shadow-2xl"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-2xl font-black uppercase italic transition-all ${pathname === link.href ? "text-primary translate-x-4" : "text-zinc-400 hover:text-foreground"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
