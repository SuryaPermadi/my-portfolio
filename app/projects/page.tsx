"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

// === Daftar proyek (nanti bisa ambil dari database / JSON)
const projects = [
  {
    title: "Redesign LSP Mercu Buana",
    slug: "-portfolio",
    description: "Website Lembaga Sertifikasi Profesi Universitas Mercu Buana",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDUcXPUssjfSaq2B7R65UyVfuU_cCc6Kihg&s",
    link: "https://lsp-mercu-buana.vercel.app/",
    category: "website",
  },
  {
    title: "Photobox",
    slug: "photobox",
    description: "Landing page modern dengan animasi halus dan responsive grid.",
    image: "https://i.pinimg.com/736x/06/c5/60/06c560732e2cc0db104170b65c4c71d1.jpg",
    link: "https://photobooth-livid-two.vercel.app/",
    category: "website",
  },
  {
    title: "Redesign OK OCE Indonesia",
    slug: "redesign-okocenet",
    description: "Website OK OCE yang lebih modern dan interaktif",
    image: "https://okoce.net/wp-content/uploads/2021/03/logo-okoce-01-150x150.png",
    link: "https://okoce.vercel.app/",
    category: "website",
  },
  {
    title: "UangKu - Financial Planner",
    slug: "uangku",
    description: "Aplikasi manajemen keuangan pribadi dengan simulasi alokasi budget 50/30/20.",
    image: "https://img.freepik.com/vektor-gratis/ilustrasi-ikon-vektor-kartun-dompet-dan-uang-ikon-bisnis-keuangan-terisolasi-vektor-datar_138676-12882.jpg?semt=ais_hybrid&w=740&q=80",
    link: "https://catat-uangku-three.vercel.app/",
    category: "website",
  },
  {
    title: "Modern E-commerce App",
    slug: "ecommerce-ux",
    description: "Desain sistem e-commerce modern dengan fokus pada konversi dan aksesibilitas.",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80",
    link: "https://example.com",
    category: "uiux",
  },
];

// === Komponen kartu proyek dengan efek Parallax Hover ===
function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Parallax effect saat hover
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

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

  const isExternal = project.link.startsWith("http");

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10 
      hover:border-indigo-500/40 hover:shadow-indigo-500/30 transform-gpu transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <Link href={project.link} target={isExternal ? "_blank" : "_self"} rel={isExternal ? "noopener noreferrer" : undefined}>
        <div className="relative h-56 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-indigo-400 group-hover:text-indigo-300 transition">{project.title}</h2>
          <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
        </div>
        {/* Efek Glass Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition duration-500"></div>
      </Link>
    </motion.div>
  );
}

// === Halaman utama Projects ===
export default function ProjectsPage() {
  const uiuxProjects = projects.filter(p => p.category === "uiux");
  const websiteProjects = projects.filter(p => p.category === "website");

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-24 relative">
      {/* Background glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header animasi */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 py-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          Proyek Saya 🚀
        </motion.h1>

        {/* UI/UX Projects Banner Area */}
        {uiuxProjects.length > 0 && (
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-10 group"
            >
              <Image
                src="/banners/uiux-banner.png"
                alt="UI/UX Projects Banner"
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent flex items-center px-10">
                <div className="max-w-md">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">UI/UX Design</h2>
                  <p className="text-gray-200 text-sm md:text-base">Eksplorasi desain antarmuka yang intuitif dan pengalaman pengguna yang bermakna.</p>
                </div>
              </div>
            </motion.div>

            {/* UI/UX Projects Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              {uiuxProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Website Projects Section */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-indigo-400 whitespace-nowrap">Website Projects</h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
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

