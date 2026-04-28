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
    <section id="projects" className="relative py-32 px-6 bg-[#E9F1FA] bg-grid-pattern">
      <div className="absolute top-0 right-0 p-10 opacity-5 hidden lg:block">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="150" stroke="#00ABE4" strokeWidth="1" strokeDasharray="10 10" />
          <rect x="50" y="50" width="300" height="300" stroke="#00ABE4" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-6xl font-black mb-4 text-[#00ABE4] glow-blue">
              <span className="text-[10px] block font-mono tracking-[0.5em] mb-2 opacity-50">PROJ_EXPLORER.v24</span>
              Proyek Pilihan
            </h2>
            <p className="text-zinc-600 text-lg max-w-md font-medium">
              Koleksi karya terbaik saya dalam pengembangan web dan desain antarmuka.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/projects" className="group flex items-center gap-2 text-[#00ABE4] font-bold hover:text-[#008dbd] transition-colors text-lg">
              Lihat Semua Proyek
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project, index) => (
               <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={project.link} target="_blank" className="relative block h-full bg-white/80 backdrop-blur-xl rounded-3xl border border-[#00ABE4]/20 overflow-hidden group-hover:-translate-y-4 transition-all duration-500 shadow-2xl shadow-[#00ABE4]/5">
                {/* Tech Corner Marker */}
                <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#00ABE4]" />
                </div>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-zinc-950 mb-2 group-hover:text-[#00ABE4] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 text-sm font-medium leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">View Live</span>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-50 group-hover:bg-[#00ABE4] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 group-hover:text-white transition-colors">
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
