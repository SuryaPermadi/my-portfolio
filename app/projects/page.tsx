"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Redesign LSP Mercu Buana",
    description:
      "Website Lembaga Sertifikasi Profesi Universitas Mercu Buana yang modern dan terintegrasi dengan sistem navigasi yang efisien.",
    image: "/images/lsp.png",
    link: "https://lsp-mercu-buana.vercel.app/",
    category: "Development",
    year: "2024",
    tags: ["React", "Tailwind"],
  },
  {
    title: "Photobox / Capture Moment",
    description:
      "Aplikasi photobooth digital dengan frame animasi, efek visual menarik, dan pengalaman capturing yang seamless.",
    image: "/images/photoboxs.png",
    link: "https://usphoto.vercel.app/",
    category: "Product Design",
    year: "2025",
    tags: ["Animation", "UI"],
  },
  {
    title: "Redesign OK OCE Indonesia",
    description:
      "Transformasi digital platform OK OCE untuk mendukung UMKM di seluruh Indonesia dengan dashboard interaktif.",
    image: "/images/okoce.png",
    link: "https://okoce.vercel.app/",
    category: "Web Strategy",
    year: "2024",
    tags: ["Dashboard", "Interactive"],
  },
  {
    title: "OK Digital Platform",
    description:
      "Hub digital untuk UMKM binaan OK OCE dalam memperluas jangkauan pasar secara online.",
    image: "/images/okdigital.png",
    link: "https://ok-buat.vercel.app/",
    category: "Fullstack",
    year: "2024",
    tags: ["Next.js", "API"],
  },
  {
    title: "UangKu - Financial Planner",
    description:
      "Sistem manajemen budget personal dengan metode 50/30/20 yang membantu pengelolaan keuangan lebih baik.",
    image: "/images/uangku.png",
    link: "https://catat-uangku-three.vercel.app/",
    category: "App Logic",
    year: "2023",
    tags: ["Logic", "Database"],
  },
  {
    title: "Stock Toko Inventory",
    description:
      "Sistem pelacakan inventaris dan pelaporan untuk bisnis retail mikro dengan antarmuka yang mudah digunakan.",
    image: "/images/stocktoko.png",
    link: "https://inventory-stock-rho.vercel.app/",
    category: "System Design",
    year: "2023",
    tags: ["System", "Analytics"],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group"
    >
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card card-warm rounded-3xl overflow-hidden flex flex-col h-full block"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-cream">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-105"
          />
          <div className="project-overlay rounded-none" />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-surface/90 backdrop-blur-sm text-charcoal text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Arrow */}
          <div className="absolute top-3 right-3 w-9 h-9 bg-surface rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            <span className="material-symbols-outlined text-charcoal text-base">
              open_in_new
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-accent tracking-wider uppercase">
              {project.category}
            </span>
            <span className="text-xs text-muted">{project.year}</span>
          </div>
          <h3 className="font-display font-bold text-lg text-charcoal mb-2 group-hover:text-accent transition-colors tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed flex-grow">
            {project.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-accent text-sm font-semibold">
            View Project
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="section-label mb-4">Works</p>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-charcoal tracking-tight leading-tight mb-6 max-w-3xl">
            Proyek yang Saya{" "}
            <span className="font-serif italic text-accent font-light">
              Banggakan
            </span>
          </h1>
          <p className="text-muted text-xl leading-relaxed max-w-2xl border-l-4 border-accent pl-6">
            Kumpulan karya terbaik saya dalam pengembangan web dan desain antarmuka.
            Setiap proyek mewakili solusi nyata untuk masalah nyata.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
