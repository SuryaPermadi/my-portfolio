"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

// === Daftar proyek (nanti bisa ambil dari database / JSON)
const projects = [
  {
    title: "Next.js Portfolio",
    slug: "nextjs-portfolio",
    description: "Website portofolio pribadi dengan Next.js 14 dan TailwindCSS.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    link: "https://example.com",
  },
  {
    title: "Landing Page Startup",
    slug: "landing-page",
    description: "Landing page modern dengan animasi halus dan responsive grid.",
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
    link: "https://example.com",
  },
  {
    title: "Dashboard Analytics",
    slug: "dashboard-analytics",
    description: "Dashboard interaktif dengan grafik dan dark mode.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    link: "https://example.com",
  },
  {
    title: "UangKu - Financial Planner",
    slug: "uangku",
    description: "Aplikasi manajemen keuangan pribadi dengan simulasi alokasi budget 50/30/20.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
    link: "https://catat-uangku-three.vercel.app/",
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
          <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
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
          className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          Proyek Saya 🚀
        </motion.h1>

        {/* Grid project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
