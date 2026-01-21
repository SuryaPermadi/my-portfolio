"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 blur-[120px] rounded-full animate-pulse-slow transition-all duration-1000 delay-700" />

      <div className="relative z-10 text-center max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-white/10"
        >
          <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Available for new opportunities 🚀
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-8xl font-black leading-[1.1] mb-8 tracking-tight"
        >
          Transforming Ideas into <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic">
            Digital Reality
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Halo, Saya <span className="text-white font-semibold">Surya Permadi Wicaksana</span>. Seorang <span className="text-white">Frontend Developer</span> & <span className="text-white">UI Designer</span> yang berdedikasi menciptakan pengalaman web yang estetik dan fungsional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/projects"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            Lihat Proyek Saya
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 hover:scale-105 transition-all duration-300"
          >
            Hubungi Saya
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
