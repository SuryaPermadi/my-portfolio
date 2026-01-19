"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 relative overflow-visible">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/30 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/20 blur-[160px] rounded-full"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-7xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
      >
        Halo, Saya <span className="text-indigo-300">Surya Permadi Wicaksana</span>
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} className="max-w-2xl text-gray-300 text-lg leading-relaxed mb-10">
        Saya seorang <span className="text-indigo-400">Frontend Developer, UI UX Designer, IT Governance, serta Analis Sistem</span> yang fokus pada membangun pengalaman web modern, interaktif, dan estetik. Menggabungkan <span className="text-pink-400">desain</span> dan{" "}
        <span className="text-purple-400">teknologi</span> untuk menciptakan produk digital yang berkesan. Dan memberikan solusi terhadap masalah IT Governance dan Analis Sistem.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="flex gap-6">
        <Link href="/projects" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white font-semibold shadow-lg transition-all duration-300">
          Lihat Proyek 🚀
        </Link>
        <Link href="/contact" className="px-8 py-3 border border-indigo-400 text-indigo-300 rounded-full hover:bg-indigo-400/10 transition-all duration-300">
          Hubungi Saya ✉️
        </Link>
      </motion.div>
    </section>
  );
}
