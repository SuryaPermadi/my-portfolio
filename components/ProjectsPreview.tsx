"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Redesign LSP Mercu Buana",
    description: "Website Lembaga Sertifikasi Profesi Universitas Mercu Buana",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDUcXPUssjfSaq2B7R65UyVfuU_cCc6Kihg&s",
    link: "https://lsp-mercu-buana.vercel.app/",
  },
  {
    title: "Photobox",
    description: "Landing page modern dengan animasi halus.",
    image: "https://i.pinimg.com/736x/06/c5/60/06c560732e2cc0db104170b65c4c71d1.jpg",
    link: "https://photobooth-livid-two.vercel.app/",
  },
  {
    title: "Redesign OK OCE Indonesia",
    description: "Website OK OCE yang lebih modern dan interaktif",
    image: "https://okoce.net/wp-content/uploads/2021/03/logo-okoce-01-150x150.png",
    link: "https://okoce.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-32 bg-black/40 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 leading-tight bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"
      >
        Proyek Unggulan
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 group shadow-lg"
          >
            <Link href={project.link} target="_blank">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-left">
                <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors uppercase">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-1">{project.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <Link href="/projects" className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-full font-semibold shadow-md transition">
          Lihat Semua Proyek →
        </Link>
      </div>
    </section>
  );
}
