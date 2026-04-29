"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Redesign LSP Mercu Buana",
    description: "Website Lembaga Sertifikasi Profesi Universitas Mercu Buana",
    image: "/images/lsp.png",
    link: "https://lsp-mercu-buana.vercel.app/",
  },
  {
    title: "Photobox",
    description: "Landing page modern dengan animasi halus.",
    image: "/images/photobox.png",
    link: "https://photobooth-livid-two.vercel.app/",
  },
  {
    title: "Redesign OK OCE Indonesia",
    description: "Website OK OCE yang lebih modern dan interaktif",
    image: "/images/okoce.png",
    link: "https://okoce.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-40 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 italic">Etalase Portofolio</p>
            <h2 className="text-5xl sm:text-7xl font-black text-foreground tracking-tight uppercase italic">
              Karya <span className="text-primary">Pilihan</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/projects" className="group flex items-center gap-3 text-zinc-400 font-black hover:text-primary transition-all text-xs uppercase tracking-widest border border-secondary px-8 py-4 rounded-2xl bg-white shadow-sm">
              Lihat Semua Proyek
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={project.link} target="_blank" className="group block relative rounded-4xl overflow-hidden bg-white border border-secondary shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-4">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-[9px] font-black uppercase tracking-widest mb-4">Studi Kasus</span>
                  <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed line-clamp-2 italic">
                    {project.description}
                  </p>

                  <div className="mt-10 flex items-center justify-between border-t border-secondary pt-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Buka Proyek</span>
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-secondary group-hover:bg-primary transition-all duration-500">
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 group-hover:text-white transition-colors rotate-45">
                        <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
