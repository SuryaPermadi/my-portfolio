"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export default function AboutSection() {
  return (
    <section id="about" className="relative py-40 px-6 bg-white overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6">Keahlian & Visi</p>
        <h2 className="text-5xl sm:text-7xl font-black mb-10 text-foreground tracking-tight uppercase italic">
          MINIMALIS <br /><span className="text-primary">DALAM DESAIN</span>
        </h2>
        <p className="text-zinc-500 leading-relaxed text-xl sm:text-2xl max-w-2xl mx-auto font-light italic mb-16">
          "Arsitektur dimulai saat rekayasa berakhir." Saya menerapkan filosofi ini pada setiap baris kode—menciptakan sistem digital yang <span className="text-foreground font-bold not-italic">tangguh</span> sekaligus <span className="text-primary font-bold not-italic">indah</span>.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-4 px-12 py-5 bg-[#111111] text-white font-black rounded-2xl transition-all shadow-xl hover:shadow-primary/20 group uppercase tracking-widest text-xs"
          >
            Baca cerita lengkapnya
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
              <path d="M4.16663 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
