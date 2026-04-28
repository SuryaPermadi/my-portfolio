"use client";

import { motion } from "framer-motion";
export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 bg-[#E9F1FA] bg-grid-pattern overflow-hidden">
      {/* Decorative Technical Labels */}
      <div className="absolute top-10 right-10 text-[10px] font-mono text-[#00ABE4]/30 hidden md:block">
        REF_ABOUT_02 // SYSTEM_ANALYSIS
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-6xl font-black mb-8 text-[#00ABE4] glow-blue">
          <span className="text-[10px] block font-mono tracking-[0.5em] mb-2 opacity-50">INITIALIZING.USR_INTEL</span>
          Tentang Saya
        </h2>
        <p className="text-zinc-600 leading-relaxed text-lg sm:text-xl max-w-3xl mx-auto font-medium mb-12">
          Saya memiliki ketertarikan besar terhadap dunia desain dan pengembangan web modern. Berfokus pada menciptakan antarmuka yang <span className="text-[#00ABE4] font-black underline decoration-[#00ABE4]/20 underline-offset-8">indah, cepat, dan responsif</span>. Saya membantu perusahaan dalam analisis sistem agar teknologi bekerja lebih optimal.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#00ABE4] text-white font-bold rounded-2xl hover:bg-[#008dbd] transition-all active:scale-95 group shadow-lg shadow-[#00ABE4]/20"
          >
            Selengkapnya
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
              <path d="M4.16663 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
