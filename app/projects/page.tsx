"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

const projects = [
  {
    title: "Redesign LSP Mercu Buana",
    description: "Website Lembaga Sertifikasi Profesi Universitas Mercu Buana",
    image: "/images/lsp.png",
    link: "https://lsp-mercu-buana.vercel.app/",
    category: "website",
  },
  {
    title: "Photobox",
    description: "Landing page modern dengan animasi halus dan responsive grid.",
    image: "/images/photobox.png",
    link: "https://photobooth-livid-two.vercel.app/",
    category: "website",
  },
  {
    title: "Redesign OK OCE Indonesia",
    description: "Website OK OCE yang lebih modern dan interaktif",
    image: "/images/okoce.png",
    link: "https://okoce.vercel.app/",
    category: "website",
  },
  {
    title: "OK Digital",
    description: "Website OK Digital untuk para umkm yang ingin mempromosikan produk mereka secara online",
    image: "/images/okdigital.png",
    link: "https://ok-buat.vercel.app/",
    category: "website",
  },
  {
    title: "UangKu - Financial Planner",
    description: "Aplikasi manajemen keuangan pribadi dengan simulasi alokasi budget 50/30/20.",
    image: "/images/uangku.png",
    link: "https://catat-uangku-three.vercel.app/",
    category: "website",
  },
  {
    title: "Stock Toko",
    description: "Website untuk toko kelontongan untuk memperbaharui dan memantau stock dari setiap produk yang dijual",
    image: "/images/stocktoko.png",
    link: "https://inventory-stock-rho.vercel.app/",
    category: "website",
  },
  {
    title: "Sekolah - Modern",
    description: "Website sekolah dengan desain modern dan interaktif",
    image: "/images/sekolah-ku.png",
    link: "https://sekolah-modern-app.vercel.app/",
    category: "website",
  },
  {
    title: "Tech - Page",
    description: "Website untuk perusahaan yang bergerak pada bidang Tech, cocok untuk menampilkan informasi dari produk yang ada",
    image: "/images/tech.png",
    link: "https://tech-landing-page-gamma.vercel.app/",
    category: "website",
  },
  {
    title: "Kopi - Page",
    description: "Website untuk usaha kopi/cafemu yang keren!",
    image: "/images/kopi.png",
    link: "https://kopi-modernku.vercel.app/",
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
      <Link href={project.link} target="_blank" className="relative block h-full card-minimal overflow-hidden group-hover:-translate-y-2">
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
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">View Project</span>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-50 group-hover:bg-[#00ABE4] transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 group-hover:text-white transition-colors">
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
    <section className="min-h-screen py-32 px-6 overflow-hidden bg-[#E9F1FA]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white border border-[#00ABE4]/10">
            <span className="text-xs font-bold tracking-wider uppercase text-[#00ABE4]">
              Project yang pernah dikerjakan
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight text-zinc-950 py-2">
            Project <span className="text-[#00ABE4]">Portofolio</span>
          </h1>
          <p className="text-zinc-500 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            Eksplorasi kreativitas dan teknologi dalam setiap baris kode dan desain.
          </p>
        </motion.div>

        {uiuxProjects.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-[2px] bg-[#00ABE4] rounded-full" />
              <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-widest">UI/UX Design</h2>
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
            <div className="w-8 h-[2px] bg-[#00ABE4] rounded-full" />
            <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-widest">Website</h2>
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

