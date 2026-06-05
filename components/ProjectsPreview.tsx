"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Redesign LSP Mercu Buana",
    description: "Website Lembaga Sertifikasi Profesi Universitas Mercu Buana dengan sistem navigasi yang lebih efisien.",
    image: "/images/lsp.png",
    link: "https://lsp-mercu-buana.vercel.app/",
    tags: ["REACT", "TAILWIND"],
    cols: "md:col-span-8",
    aspect: "aspect-[21/10]"
  },
  {
    title: "Photobox",
    description: "Landing page modern dengan animasi halus untuk showcase produk fotografi.",
    image: "/images/photobox.png",
    link: "https://photobooth-livid-two.vercel.app/",
    tags: ["ANIMATION"],
    cols: "md:col-span-4",
    aspect: "aspect-square"
  },
  {
    title: "Redesign OK OCE Indonesia",
    description: "Transformasi digital untuk ekosistem OK OCE, menghadirkan dashboard yang lebih interaktif dan visual yang relevan dengan tren masa kini.",
    image: "/images/okoce.png",
    link: "https://okoce.vercel.app/",
    tags: ["SYSTEM_ARCH"],
    cols: "md:col-span-12",
    aspect: "md:aspect-[21/9] aspect-[16/9]"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Section Separator Lighting */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-container/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="font-mono text-[10px] text-primary-container tracking-[0.3em] mb-6 block uppercase">PROJ_EXPLORER.v24</span>
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-tighter mb-6">Proyek Pilihan</h2>
            <p className="text-on-surface-variant/60 font-light text-lg">Koleksi karya terbaik saya dalam pengembangan web dan desain antarmuka.</p>
          </motion.div>

          <Link href="/projects" className="hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/60 hover:text-primary-container transition-all group">
            View Gallery <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${project.cols} group`}
            >
              <div className={`glass-card rounded-2xl overflow-hidden rim-light-cyan flex flex-col ${project.cols === 'md:col-span-12' ? 'md:flex-row' : ''}`}>
                <div className={`relative overflow-hidden ${project.cols === 'md:col-span-12' ? 'md:w-3/5' : 'w-full'} ${project.aspect}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-void-black/60 group-hover:bg-void-black/20 transition-all duration-700" />
                  <div className="absolute top-6 right-6 flex gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-void-black/80 backdrop-blur-xl px-4 py-1.5 rounded-full border border-primary-container/20 text-[9px] font-mono text-primary-container uppercase tracking-widest shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`p-10 flex flex-col justify-center relative ${project.cols === 'md:col-span-12' ? 'md:w-2/5' : 'w-full'}`}>
                  {project.cols === 'md:col-span-12' && (
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary-container/30 to-transparent hidden md:block" />
                  )}
                  <h3 className="font-display text-3xl text-white mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-on-surface-variant/70 mb-8 font-light leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-6 items-center">
                    <Link href={project.link} target="_blank" className="bg-primary-container text-on-primary px-8 py-4 rounded-xl font-mono text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-[0_10px_30px_rgba(0,240,255,0.2)]">
                      View Live 
                    </Link>
                    {project.cols === 'md:col-span-12' && (
                      <Link href={project.link} className="border border-white/20 glass-card p-4 rounded-xl hover:border-primary-container/40 transition-all text-white">
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
