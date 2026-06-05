"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-gutter max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Left Side: Photo with Effect */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <div className="aspect-[4/5] glass-card rounded-2xl overflow-hidden relative group p-2 rim-light-cyan">
            <div className="absolute inset-0 bg-primary-container/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src="/images/foto-profil.jpeg"
                alt="Surya Permadi"
                fill
                className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-void-black/90 via-transparent to-transparent opacity-80 pointer-events-none"></div>
            <div className="absolute inset-0 border border-primary-container/30 rounded-xl pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Right Side: Text Digger */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <span className="font-mono text-[10px] text-primary-container tracking-[0.3em] mb-6 block uppercase">
            REF_ABOUT_02 // SYSTEM_ANALYSIS
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-10 leading-[1.1] tracking-tighter">
            INITIALIZING.USR_INTEL <br />
            <span className="text-white/20 font-light italic">Tentang Saya</span>
          </h2>
          <p className="font-sans text-lg text-on-surface-variant/80 mb-12 leading-relaxed font-light">
            Saya memiliki ketertarikan besar terhadap dunia desain dan pengembangan web modern. Berfokus pada menciptakan antarmuka yang indah, cepat, dan responsif. Saya membantu perusahaan dalam analisis sistem agar teknologi bekerja lebih optimal dengan pendekatan desain yang berpusat pada pengguna.
          </p>
          <Link href="/about" className="inline-flex items-center gap-5 text-primary-container font-mono text-[10px] uppercase tracking-widest group">
            Selengkapnya 
            <span className="w-12 h-px bg-primary-container/40 group-hover:w-20 transition-all duration-500"></span>
            <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
