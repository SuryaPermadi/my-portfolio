"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
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
    <header className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 ${scrolled ? "top-4" : "top-6"}`}>
      <nav className="flex justify-between items-center px-8 py-4 glass-card rounded-full border-primary-container/10">
        <Link href="/" className="font-display text-xl md:text-2xl tracking-[-0.05em] text-white font-extrabold uppercase">
          DESIGN<span className="text-primary-container font-light">LOGIC</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-mono text-[10px] uppercase tracking-widest transition-all hover:text-primary-container ${
                  isActive ? "text-primary-container font-bold" : "text-on-surface-variant/60"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary-container shadow-[0_0_12px_#00f0ff]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="bg-primary-container/10 border border-primary-container/30 text-primary-container px-6 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider hover:bg-primary-container hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
        >
          Hire Me
        </Link>
        
        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
        >
          <div className={`w-5 h-0.5 bg-primary-container transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-0.5 bg-primary-container transition-all ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-primary-container transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-0 right-0 glass-card rounded-3xl p-8 border-primary-container/10 z-50 md:hidden"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-xl font-display font-bold uppercase tracking-tight ${
                      pathname === link.href ? "text-primary-container" : "text-on-surface-variant/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
