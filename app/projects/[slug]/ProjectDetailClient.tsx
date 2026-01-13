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
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white"
    >
      {/* === Neon Glow Background === */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/30 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/20 blur-[120px] rounded-full"></div>
      </div>

      {/* === Container utama === */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Tombol kembali */}
        <Link href="/projects" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition mb-16">
          ← Kembali ke Proyek
        </Link>

        {/* === Gambar utama dengan efek hover === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10 group"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={700}
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
        </motion.div>

        {/* === Text content === */}
        <div className="mt-20 text-center space-y-8">
          {/* Judul proyek */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]"
          >
            {project.title}
          </motion.h1>

          {/* Deskripsi proyek */}
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed mb-16"
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
              className="mb-20"
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
              <span key={tech} className="px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm sm:text-base">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* === Tombol Kunjungi Proyek === */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #6366f1" }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="inline-block mt-10 sm:mt-16 lg:mt-20 px-10 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg transition-all duration-300"
          >
            Kunjungi Proyek 🚀
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
