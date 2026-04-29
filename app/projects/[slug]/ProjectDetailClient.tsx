"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BudgetAllocationChart from "@/components/BudgetAllocationChart";

export default function ProjectDetailClient({ project }: { project: any }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen overflow-hidden bg-white text-foreground"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0" />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* Back Link */}
        <Link href="/projects" className="group inline-flex items-center text-[#111111] hover:text-primary font-black transition-all mb-20 px-6 py-3 border border-[#F4F4F5] rounded-xl bg-white shadow-sm text-xs uppercase tracking-widest">
          <span className="mr-3 group-hover:-translate-x-1 transition-transform">←</span> Kembali ke Galeri
        </Link>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Studi Kasus Proyek</span>
            <h1 className="text-6xl sm:text-8xl font-black tracking-tight leading-[0.9] mb-8 uppercase italic text-[#111111]">
              {project.title}
            </h1>
            <p className="max-w-xl text-zinc-500 text-xl font-light leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {project.tech.map((tech: string) => (
              <span key={tech} className="px-6 py-2.5 rounded-full bg-white border border-secondary shadow-sm text-zinc-600 text-[11px] font-black uppercase tracking-widest hover:border-primary transition-all">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative overflow-hidden rounded-5xl shadow-2xl shadow-primary/5 border border-secondary/50 group mb-32"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1400}
            height={800}
            className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </motion.div>

        {/* Project Analysis Section (e.g. Chart) */}
        {project.slug === "uangku" && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32 p-12 glass-card rounded-5xl border-primary/5 shadow-inner"
          >
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-2 italic">Arsitektur & Logika</h2>
              <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
            </div>
            <BudgetAllocationChart />
          </motion.div>
        )}

        {/* Action Button */}
        <div className="text-center pb-24">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-16 py-6 rounded-2xl bg-[#111111] text-white font-black tracking-widest text-sm uppercase shadow-xl hover:shadow-primary/30 transition-all bg-gradient-to-r from-[#111111] to-zinc-800"
          >
            Lihat Pengalaman Langsung 🚀
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
