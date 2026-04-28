"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-[#E9F1FA]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00ABE4]/5 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00ABE4]/10 blur-[100px] rounded-full animate-pulse-slow"></div>
      </div>

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
          className="text-6xl sm:text-8xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter text-zinc-950"
        >
          Design <br />
          <span className="text-[#00ABE4]">Logic</span>
        </motion.h1>
        <div className="w-24 h-2 bg-[#00ABE4] mb-10 rounded-full mx-auto" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-zinc-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
        >
          Halo, Saya <span className="text-zinc-950 font-bold underline decoration-[#00ABE4]/30 decoration-4 underline-offset-4">Surya Permadi Wicaksana</span>. Seorang <span className="text-zinc-950">Frontend Developer</span> & <span className="text-zinc-950">UI Designer</span> yang berdedikasi menciptakan pengalaman web yang estetik dan fungsional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/projects"
            className="px-10 py-5 bg-[#00ABE4] text-white font-bold rounded-2xl hover:bg-[#008dbd] transition-all active:scale-95 shadow-2xl shadow-[#00ABE4]/20 text-center"
          >
            Lihat Proyek
          </Link>
          <Link
            href="/about"
            className="px-10 py-5 bg-white border-2 border-[#00ABE4]/20 text-[#00ABE4] font-bold rounded-2xl hover:border-[#00ABE4] transition-all active:scale-95 text-center"
          >
            Tentang Saya
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
