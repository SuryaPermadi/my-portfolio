"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-primary/10 selection:text-primary pt-20">
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 italic">Kisah Saya</p>
            <h1 className="text-5xl sm:text-8xl font-black text-[#111111] tracking-tight uppercase italic leading-[0.9]">
              DIBANGUN DENGAN <br /><span className="text-primary">GARIS & LOGIKA</span>
            </h1>
          </motion.div>

          {/* Bento-style Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-8 glass-card p-12 rounded-4xl border-primary/5 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-black mb-6 tracking-tight italic uppercase">Halo, Saya <span className="text-primary">Surya Permadi</span></h2>
              <p className="text-zinc-500 text-xl leading-relaxed font-light mb-8 italic">
                Seorang pengembang yang terobsesi dengan pembuatan antarmuka digital yang tidak hanya berfungsi secara teknis, tetapi juga memberikan kesan visual yang kuat. Fokus saya adalah pada <span className="text-[#111111] font-bold not-italic">Minimalisme Estetis</span> dan performa tinggi.
              </p>
              <p className="text-zinc-500 text-lg leading-relaxed font-light italic">
                Saya percaya bahwa setiap piksel memiliki tujuan, dan setiap baris kode harus berkontribusi pada pengalaman pengguna yang intuitif dan menyenangkan.
              </p>
            </motion.div>

            {/* Profile Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-4 relative rounded-4xl overflow-hidden bg-[#F4F4F5] min-h-[400px] shadow-2xl shadow-primary/10 border border-primary/10"
            >
              <Image
                src="/images/foto-profil.jpeg"
                alt="Surya Permadi"
                fill
                className="object-cover transition-all duration-1000 scale-110 hover:scale-100"
              />
            </motion.div>

            {/* Technical Arsenal Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-5 glass-card p-12 rounded-4xl border-primary/5"
            >
              <h3 className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-8 italic">Arsenal Teknis</h3>
              <div className="flex flex-wrap gap-4">
                {["Next.js", "TypeScript", "Tailwind", "Framer", "React"].map((skill) => (
                  <span key={skill} className="px-6 py-3 rounded-2xl bg-white border border-[#F4F4F5] text-[#111111] text-xs font-black uppercase tracking-widest hover:border-primary/30 hover:text-primary transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Expertise Tags Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-7 bg-[#111111] p-12 rounded-4xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-20 invert pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <h3 className="text-zinc-400 font-black uppercase tracking-[0.3em] text-[10px] mb-12 italic">Fokus Utama</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white text-lg font-black italic uppercase mb-2">Desain Minimalis</h4>
                    <p className="text-zinc-400 text-sm font-light italic">Menghilangkan kebisingan visual untuk fokus pada konten.</p>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-black italic uppercase mb-2">Performa Tinggi</h4>
                    <p className="text-zinc-400 text-sm font-light italic">Kecepatan adalah bagian dari desain.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <div className="pt-24 border-t border-[#F4F4F5]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 italic">Perjalanan</p>
              <h2 className="text-5xl sm:text-7xl font-black text-[#111111] tracking-tight uppercase italic">
                Pengalaman <span className="text-primary">Kerja</span>
              </h2>
            </motion.div>
            <ExperienceTimeline />
          </div>
        </div>
      </section>
    </div>
  );
}
