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
    description: "Website OK Digital untuk para UMKM yang ingin mempromosikan produk mereka secara online.",
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
    description: "Website toko kelontongan untuk memperbaharui dan memantau stok produk.",
    image: "/images/stocktoko.png",
    link: "https://inventory-stock-rho.vercel.app/",
    category: "website",
  },
  {
    title: "Sekolah - Modern",
    description: "Website sekolah dengan desain modern dan interaktif.",
    image: "/images/sekolah-ku.png",
    link: "https://sekolah-modern-app.vercel.app/",
    category: "website",
  },
  {
    title: "Tech - Page",
    description: "Landing page untuk perusahaan teknologi, menampilkan informasi produk secara elegan.",
    image: "/images/tech.png",
    link: "https://tech-landing-page-gamma.vercel.app/",
    category: "website",
  },
  {
    title: "Kopi - Page",
    description: "Website untuk usaha kopi/kafe dengan konsep modern.",
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

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

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
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={project.link} target="_blank" className="block relative rounded-4xl overflow-hidden bg-white border border-secondary shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-4">
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
          <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-[9px] font-black uppercase tracking-widest mb-4">Kasus Studi</span>
          <h3 className="text-2xl font-black text-[#111111] mb-3 group-hover:text-primary transition-colors tracking-tight italic">
            {project.title}
          </h3>
          <p className="text-zinc-500 text-sm font-medium leading-relaxed line-clamp-2 italic">
            {project.description}
          </p>

          <div className="mt-10 flex items-center justify-between border-t border-secondary pt-8">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Lihat Proyek</span>
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-secondary group-hover:bg-primary transition-all duration-500">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 group-hover:text-white transition-colors rotate-45">
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
    <section className="min-h-screen py-40 px-6 bg-white selection:bg-primary/10 selection:text-primary">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <p className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6">Pekerjaan Terkurasi</p>
          <h1 className="text-6xl sm:text-9xl font-black mb-10 text-foreground tracking-tighter uppercase italic leading-[0.85]">
            GALERI <br /><span className="text-primary">PROYEK</span>
          </h1>
          <p className="text-zinc-400 text-xl font-light italic max-w-2xl mx-auto italic">
            Eksplorasi kreativitas dan teknologi dalam setiap baris kode dan komponen UI.
          </p>
        </motion.div>

        {uiuxProjects.length > 0 && (
          <div className="mb-32">
            <div className="flex items-center gap-6 mb-16 px-4">
              <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] italic">01</p>
              <h2 className="text-3xl font-black text-foreground uppercase tracking-tight italic">Desain UI/UX</h2>
              <div className="h-[1px] flex-grow bg-secondary" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {uiuxProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        <div>
          <div className="flex items-center gap-6 mb-16 px-4">
            <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] italic">02</p>
            <h2 className="text-3xl font-black text-foreground uppercase tracking-tight italic">Pengembangan Web</h2>
            <div className="h-[1px] flex-grow bg-secondary" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {websiteProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
