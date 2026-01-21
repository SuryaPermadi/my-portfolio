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
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
      <div className={`max-w-4xl mx-auto glass-dark rounded-2xl border border-white/10 px-6 py-3 flex justify-between items-center pointer-events-auto transition-all duration-500 ${scrolled ? "scale-95 shadow-2xl shadow-indigo-500/10" : "scale-100"}`}>
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          Surya<span className="text-white/80">.</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors relative group py-1 ${pathname === link.href ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 rounded-full"
                  />
                )}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500/50 rounded-full group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
        >
          <div className={`w-5 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass-dark rounded-2xl border border-white/10 p-6 md:hidden pointer-events-auto shadow-2xl"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-lg font-medium transition-colors ${pathname === link.href ? "text-indigo-400" : "text-gray-300 active:text-white"}`}
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
