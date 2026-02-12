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
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent italic">
              Proyek Pilihan
            </h2>
            <p className="text-gray-400 text-lg max-w-md font-medium">
              Koleksi karya terbaik saya dalam pengembangan web dan desain antarmuka.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/projects" className="group flex items-center gap-2 text-white font-bold hover:text-indigo-400 transition-colors text-lg">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-[2rem] blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <Link href={project.link} target="_blank" className="relative block h-full glass-dark rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-indigo-500/10">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400">View Live</span>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-indigo-500 transition-colors">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
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
