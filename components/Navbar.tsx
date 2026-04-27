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
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 pointer-events-none">
      <div className={`max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl border border-zinc-200 px-6 py-2.5 flex justify-between items-center pointer-events-auto transition-all duration-500 ${scrolled ? "scale-95 shadow-lg shadow-zinc-200/50" : "scale-100"}`}>
        <Link href="/" className="text-xl font-bold text-zinc-950 hover:opacity-80 transition-opacity">
          Surya<span className="text-zinc-400">.</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-semibold transition-colors relative group py-1 ${pathname === link.href ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-950"}`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-zinc-950 rounded-full"
                  />
                )}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-400 rounded-full group-hover:w-full transition-all duration-300" />
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
