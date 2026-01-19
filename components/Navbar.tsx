"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border-b border-white/20 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Portofolio Surya
        </Link>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Dark mode toggle
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition" title="Toggle theme">
            {theme === "dark" ? "🌙" : "☀️"}
          </button> */}

          {/* Hamburger mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-2 text-gray-700 dark:text-gray-200 font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
