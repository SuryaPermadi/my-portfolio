"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Redesign LSP Mercu Buana",
    description: "Website Lembaga Sertifikasi Profesi Universitas Mercu Buana yang modern dan terintegrasi.",
    image: "/images/lsp.png",
    link: "https://lsp-mercu-buana.vercel.app/",
    category: "Development",
    year: "2024",
    tags: ["REACT", "TAILWIND"]
  },
  {
    title: "Photobox / Capture Moment",
    description: "Digital photo ecosystem with seamless capturing and storage experiences.",
    image: "/images/photobox.png",
    link: "https://photobooth-livid-two.vercel.app/",
    category: "Product Design",
    year: "2025",
    tags: ["ANIMATION", "UI"]
  },
  {
    title: "Redesign OK OCE Indonesia",
    description: "Transformasi digital platform OK OCE untuk mendukung UMKM di seluruh Indonesia.",
    image: "/images/okoce.png",
    link: "https://okoce.vercel.app/",
    category: "Web Strategy",
    year: "2024",
    tags: ["DASHBOARD", "INTERACTIVE"]
  },
  {
    title: "OK Digital Platform",
    description: "Hub digital untuk UMKM binaan OK OCE dalam memperluas jangkauan pasar.",
    image: "/images/okdigital.png",
    link: "https://ok-buat.vercel.app/",
    category: "Fullstack",
    year: "2024",
    tags: ["NEXT.JS", "API"]
  },
  {
    title: "UangKu - Financial Planner",
    description: "Personal budget management system utilizing the 50/30/20 rule methodology.",
    image: "/images/uangku.png",
    link: "https://catat-uangku-three.vercel.app/",
    category: "App Logic",
    year: "2023",
    tags: ["LOGIC", "DATABASE"]
  },
  {
    title: "Stock Toko Inventory",
    description: "Inventory tracking and reporting system for retail micro-businesses.",
    image: "/images/stocktoko.png",
    link: "https://inventory-stock-rho.vercel.app/",
    category: "System Design",
    year: "2023",
    tags: ["SYSTEM", "ANALYTICS"]
  },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card rounded-3xl overflow-hidden rim-light-cyan flex flex-col h-full">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-void-black/40 group-hover:bg-transparent transition-all pointer-events-none" />
          <div className="absolute top-4 right-4 flex gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="bg-void-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-primary-container/20 text-[8px] font-mono text-primary-container uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-10 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-6">
            <span className="text-primary-container font-mono text-[9px] uppercase tracking-widest italic">// {project.category}</span>
            <span className="text-white/20 font-mono text-[9px] uppercase tracking-widest">{project.year}</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-primary-container transition-colors tracking-tight uppercase italic">
            {project.title}
          </h3>
          <p className="text-on-surface-variant/70 text-sm leading-relaxed mb-10 font-light italic flex-grow">
            {project.description}
          </p>

          <Link href={project.link} target="_blank" className="inline-flex items-center gap-3 text-primary-container font-mono text-[10px] uppercase tracking-widest group/link">
            Execute Node <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="min-h-screen pt-40 pb-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <p className="text-primary-container font-mono text-[10px] uppercase tracking-[0.5em] mb-6 italic">// DEPLOYED_UNITS</p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-[9vw] font-extrabold text-white tracking-tighter uppercase italic leading-[0.85] max-w-4xl">
            CRAFTING DIGITAL <br /><span className="text-primary-container">EXPERIENCES</span>
          </h1>
          <p className="text-on-surface-variant/70 text-xl font-light italic mt-12 max-w-2xl border-l border-primary-container/30 pl-8">
            Sebuah kumpulan dokumentasi proyek yang dibangun dengan presisi teknis dan ketelitian desain. Setiap unit mewakili solusi fungsional untuk masalah dunia nyata.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
