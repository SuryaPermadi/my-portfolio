"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? "bg-[#E9F1FA]/80 backdrop-blur-2xl border-b border-[#00ABE4]/20 py-4 shadow-xl shadow-[#00ABE4]/5" : "bg-transparent py-8"}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center pointer-events-auto relative">
        {/* Cyber Border Decoration */}
        <div className="absolute top-0 left-6 w-12 h-[1px] bg-[#00ABE4]/40" />
        <div className="absolute top-0 right-6 w-12 h-[1px] bg-[#00ABE4]/40" />
        
        <Link href="/" className="text-2xl font-black tracking-tighter text-[#00ABE4] hover:opacity-80 transition-opacity flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-[#00ABE4] text-white flex items-center justify-center text-sm shadow-lg shadow-[#00ABE4]/20">S</span>
          PORTFOLIO<span className="text-zinc-400">_</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                  className={`relative text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-[#00ABE4] hover:glow-blue ${pathname === link.href ? "text-[#00ABE4] glow-blue" : "text-zinc-600"}`}
              >
                {link.name}
                {pathname === link.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-3 left-0 w-full h-1 bg-[#00ABE4] rounded-full shadow-lg shadow-[#00ABE4]/50"
                    />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
        >
          <div className={`w-5 h-0.5 bg-zinc-950 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-0.5 bg-zinc-950 transition-all ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-zinc-950 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 bg-white rounded-2xl border border-zinc-200 p-6 md:hidden pointer-events-auto shadow-xl"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-lg font-bold transition-colors ${pathname === link.href ? "text-zinc-950" : "text-zinc-500 active:text-zinc-950"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
