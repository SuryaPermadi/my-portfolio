"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Inventory Stock",
    description:
      "Website untuk mengelola stok barang.",
    image: "/images/inventory-stock.png",
    link: "https://inventory-stock-rho.vercel.app/",
    tags: ["React", "Tailwind"],
    size: "lg",
  },
  {
    title: "Photobox",
    description:
      "Aplikasi photobooth online dengan frame animasi dan efek visual yang menarik.",
    image: "/images/photoboxs.png",
    link: "https://photobooth-livid-two.vercel.app/",
    tags: ["Animation", "JS"],
    size: "sm",
  },
  {
    title: "Redesign OK OCE Indonesia",
    description:
      "Transformasi digital OK OCE dengan dashboard yang lebih interaktif, visual relevan, dan pengalaman yang lebih baik.",
    image: "/images/okoce.png",
    link: "https://okoce.vercel.app/",
    tags: ["Next.js", "UI/UX"],
    size: "full",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-10">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto">
        <div className="h-px w-full bg-border mb-24" />

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-3">Works</p>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-charcoal tracking-tight">
              Proyek Pilihan
            </h2>
          </motion.div>

          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent transition-colors link-underline"
          >
            Lihat Semua Proyek
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {featuredProjects.map((project, index) => {
            const colSpan =
              project.size === "lg"
                ? "md:col-span-7"
                : project.size === "sm"
                  ? "md:col-span-5"
                  : "md:col-span-12";

            const aspectRatio =
              project.size === "lg"
                ? "aspect-[4/3]"
                : project.size === "sm"
                  ? "aspect-[4/3]"
                  : "aspect-[16/6]";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={colSpan}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group project-card block card-warm rounded-3xl overflow-hidden"
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden bg-cream ${aspectRatio}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="project-overlay" />

                    {/* Tags on image */}
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-surface/90 backdrop-blur-sm text-charcoal text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Arrow icon on hover */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-surface rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <span className="material-symbols-outlined text-charcoal text-base">
                        open_in_new
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-charcoal mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile See All Link */}
        <div className="mt-10 flex md:hidden justify-center">
          <Link href="/projects" className="btn-ghost">
            Lihat Semua Proyek
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
