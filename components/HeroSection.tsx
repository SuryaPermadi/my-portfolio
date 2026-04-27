"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-zinc-100 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-50/50 blur-[100px] rounded-full -z-10" />

      <div className="relative z-10 text-center max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full bg-zinc-100 border border-zinc-200"
        >
          <span className="text-xs font-bold tracking-wider uppercase text-zinc-600">
            Available for new opportunities 🚀
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-8xl font-black leading-[1] mb-8 tracking-tight text-zinc-950"
        >
          Transforming Ideas into <br />
          <span className="text-blue-600">
            Digital Reality
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-zinc-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
        >
          Halo, Saya <span className="text-zinc-950 font-bold underline decoration-blue-500/30 decoration-4 underline-offset-4">Surya Permadi Wicaksana</span>. Seorang <span className="text-zinc-950">Frontend Developer</span> & <span className="text-zinc-950">UI Designer</span> yang berdedikasi menciptakan pengalaman web yang estetik dan fungsional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/projects"
            className="group px-10 py-4 bg-zinc-950 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-all duration-300 flex items-center gap-2 shadow-xl shadow-zinc-200"
          >
            Lihat Proyek Saya
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="px-10 py-4 bg-white border border-zinc-200 text-zinc-950 font-bold rounded-2xl hover:bg-zinc-50 transition-all duration-300 shadow-sm"
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
        {/* <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Scroll</span> */}
        {/* <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" /> */}
      </motion.div>
    </section>
  );
}
