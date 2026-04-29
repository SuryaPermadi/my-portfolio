"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center px-6 pt-24 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-60" />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
        <motion.div 
          animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-60"
        />
        <motion.div 
          animate={{ x: [100, -100, 100], y: [50, -50, 50] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full opacity-60"
        />
      </div>

      <div className="relative z-20 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black tracking-[0.2em] uppercase text-primary">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Tersedia untuk Proyek Baru
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-7xl sm:text-[10rem] font-black mb-8 leading-[0.8] tracking-tight text-foreground select-none">
            MEMBANGUN<br />
            <span className="text-primary italic uppercase glow-violet">
              MIMPI
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <p className="text-zinc-500 text-xl sm:text-2xl leading-relaxed font-normal tracking-tight">
            Mengembangkan antarmuka digital <span className="text-foreground font-semibold italic">berperforma tinggi</span> dengan fokus pada <span className="text-primary font-bold">minimalisme estetis</span> dan keunggulan teknis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link
              href="/projects"
              className="group relative px-12 py-5 bg-[#111111] text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl hover:shadow-primary/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Lihat Karya</span>
            </Link>
            <Link
              href="/about"
              className="px-12 py-5 bg-[#F4F4F5] text-[#111111] font-bold rounded-2xl hover:bg-[#E4E4E7] transition-all active:scale-95 border border-transparent hover:border-[#111111]/5 shadow-sm"
            >
              Cerita Saya
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 rotate-90 mb-4">Gulir</span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-zinc-200 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
