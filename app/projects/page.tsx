"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const projects = [
  {
    title: "Redesign LSP Mercu Buana",
    description: "Website Lembaga Sertifikasi Profesi Universitas Mercu Buana",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDUcXPUssjfSaq2B7R65UyVfuU_cCc6Kihg&s",
    link: "https://lsp-mercu-buana.vercel.app/",
    category: "website",
  },
  {
    title: "Photobox",
    description: "Landing page modern dengan animasi halus dan responsive grid.",
    image: "https://i.pinimg.com/736x/06/c5/60/06c560732e2cc0db104170b65c4c71d1.jpg",
    link: "https://photobooth-livid-two.vercel.app/",
    category: "website",
  },
  {
    title: "Redesign OK OCE Indonesia",
    description: "Website OK OCE yang lebih modern dan interaktif",
    image: "https://okoce.net/wp-content/uploads/2021/03/logo-okoce-01-150x150.png",
    link: "https://okoce.vercel.app/",
    category: "website",
  },
  {
    title: "UangKu - Financial Planner",
    description: "Aplikasi manajemen keuangan pribadi dengan simulasi alokasi budget 50/30/20.",
    image: "https://img.freepik.com/vektor-gratis/ilustrasi-ikon-vektor-kartun-dompet-dan-uang-ikon-bisnis-keuangan-terisolasi-vektor-datar_138676-12882.jpg?semt=ais_hybrid&w=740&q=80",
    link: "https://catat-uangku-three.vercel.app/",
    category: "website",
  },
  {
    title: "Modern E-commerce App",
    description: "Desain sistem e-commerce modern dengan fokus pada konversi dan aksesibilitas.",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80",
    link: "https://example.com",
    category: "uiux",
  },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const xVal = e.clientX - rect.left - rect.width / 2;
    const yVal = e.clientY - rect.top - rect.height / 2;
    x.set(xVal);
    y.set(yVal);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-[2rem] blur opacity-0 group-hover:opacity-20 transition duration-500" />
      <Link href={project.link} target="_blank" className="relative block h-full glass-dark rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
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
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400">View Project</span>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-indigo-500 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const uiuxProjects = projects.filter(p => p.category === "uiux");
  const websiteProjects = projects.filter(p => p.category === "website");

  return (
    <section className="min-h-screen py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-white/10">
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Project yang pernah dikerjakan
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight text-white py-2">
            Project <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic pr-2">Portofolio</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            Eksplorasi kreativitas dan teknologi dalam setiap baris kode dan desain.
          </p>
        </motion.div>

        {uiuxProjects.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-[2px] bg-pink-500 rounded-full" />
              <h2 className="text-2xl font-black text-white uppercase tracking-widest">UI/UX Design</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {uiuxProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-[2px] bg-indigo-500 rounded-full" />
            <h2 className="text-2xl font-black text-white uppercase tracking-widest">Website</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {websiteProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

