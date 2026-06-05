"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 relative overflow-hidden">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/10 glow-orb rounded-full animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 glow-orb rounded-full animate-pulse-slow pointer-events-none" style={{ animationDelay: '-6s' }}></div>
      <div className="absolute top-1/2 left-10 shard w-40 h-80 opacity-30 animate-float pointer-events-none"></div>
      <div className="absolute top-1/3 right-20 shard w-32 h-60 opacity-20 animate-float pointer-events-none" style={{ animationDelay: "-5s" }}></div>

      <div className="relative z-20 text-center max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full border border-primary-container/30 text-primary-container font-mono text-[10px] tracking-[0.2em] mb-10 bg-primary-container/5 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#00f0ff]"></span>
          PHASE 02 // INTERFACE OPERATIONAL
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1 className="font-display text-7xl sm:text-[84px] md:text-[10rem] font-extrabold mb-6 tracking-tighter leading-[0.85] text-white drop-shadow-[0_0_30px_rgba(0,240,255,0.2)]">
            DESIGN <br />
            <span className="text-primary-container font-light italic">LOGIC</span>
            <span className="text-white/20 font-mono text-3xl sm:text-4xl align-top ml-4">[0x24F]</span>
          </h1>
        </motion.div>

        <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary-container to-transparent mx-auto mb-12 opacity-60"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-sans text-lg md:text-xl text-on-surface-variant/80 mb-14 leading-relaxed font-light">
            Halo, Saya <span className="text-white font-semibold">Surya Permadi Wicaksana</span>. Seorang Frontend Developer & UI Designer yang berdedikasi menciptakan pengalaman web yang <span className="italic text-primary-container">estetik</span> dan fungsional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              href="/projects"
              className="group relative px-12 py-5 overflow-hidden rounded-xl bg-primary-container text-on-primary font-mono text-[10px] uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              <span className="relative z-10">Lihat Proyek</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link
              href="/about"
              className="px-12 py-5 rounded-xl border border-white/20 glass-card font-mono text-[10px] uppercase tracking-widest hover:border-primary-container/50 transition-all"
            >
              Tentang Saya
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Hero Stats (Decorative) */}
      <div className="absolute right-12 bottom-12 text-right hidden lg:block opacity-30 font-mono text-[10px] tracking-widest leading-loose">
        <p>LAT: 06° 12' 0" S</p>
        <p>LONG: 106° 49' 0" E</p>
        <p className="text-primary-container">SYS_STATUS: OPTIMAL</p>
      </div>
      <div className="absolute left-12 top-1/2 -rotate-90 origin-left hidden lg:block opacity-30 font-mono text-[10px] tracking-[0.3em] uppercase">
        SYSTEMS.INIT // DATA_LOADED // v2.0.4
      </div>
    </section>
  );
}
