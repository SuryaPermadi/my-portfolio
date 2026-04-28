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
      className="relative min-h-screen overflow-hidden bg-white text-zinc-950"
    >
      {/* === Background Decorative Elements === */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-zinc-50 border-b border-zinc-100 -z-10" />

      {/* === Container utama === */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Tombol kembali */}
        <Link href="/projects" className="inline-flex items-center text-zinc-500 hover:text-zinc-950 font-bold transition mb-16">
          ← Kembali ke Proyek
        </Link>

        {/* === Gambar utama dengan efek hover === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl shadow-2xl shadow-zinc-200 border border-zinc-200 group"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={700}
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent opacity-60"></div>
        </motion.div>

        {/* === Text content === */}
        <div className="mt-20 text-center space-y-8">
          {/* Judul proyek */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl font-black text-zinc-950"
          >
            {project.title}
          </motion.h1>

          {/* Deskripsi proyek */}
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl mx-auto text-zinc-500 text-lg leading-relaxed mb-16 font-medium"
          >
            {project.description}
          </motion.p>

          {/* === INTERACTIVE DEMO (Khusus UangKu) === */}
          {project.slug === "uangku" && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 p-8 bg-white rounded-3xl shadow-sm"
            >
              <BudgetAllocationChart />
            </motion.div>
          )}

          {/* === Tech badges === */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex flex-wrap justify-center gap-4 mb-24"
          >
            {project.tech.map((tech: string) => (
              <span key={tech} className="px-5 py-2 rounded-full bg-white border border-[#00ABE4] text-[#00ABE4] text-xs font-bold uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* === Tombol Kunjungi Proyek === */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 px-12 py-5 rounded-2xl bg-zinc-950 text-white font-bold shadow-xl shadow-zinc-200 hover:bg-zinc-800 transition-all duration-300"
          >
            Kunjungi Proyek 🚀
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
