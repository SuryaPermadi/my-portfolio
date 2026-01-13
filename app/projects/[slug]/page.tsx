import ProjectDetailClient from "./ProjectDetailClient";
import Link from "next/link";

const projects = [
  {
    slug: "nextjs-portfolio",
    title: "Next.js Portfolio",
    description: "Website portofolio pribadi dengan Next.js 14, TailwindCSS, dan animasi Framer Motion.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
    link: "https://example.com",
  },
  {
    slug: "landing-page",
    title: "Landing Page Startup",
    description: "Landing page startup modern dengan animasi halus dan gradient aesthetic style 2025.",
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://example.com",
  },
  {
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    description: "Dashboard analytics interaktif dengan grafik dinamis dan dark mode adaptif.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "Chart.js", "TailwindCSS"],
    link: "https://example.com",
  },
  {
    slug: "uangku",
    title: "UangKu - Financial Planner",
    description: "Aplikasi pencatatan keuangan pribadi dengan fitur simulasi budget 50/30/20 untuk membantu pengelolaan gaji bulanan.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80",
    tech: ["Next.js", "Recharts", "TailwindCSS", "Framer Motion"],
    link: "#",
  },
];

// ✅ Server Component — boleh async, tidak boleh pakai motion
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center text-gray-300">
        <h1 className="text-4xl font-bold mb-4">404 — Proyek tidak ditemukan</h1>
        <Link href="/projects" className="text-indigo-400 hover:underline">
          ← Kembali ke daftar proyek
        </Link>
      </div>
    );
  }

  // ✅ Panggil komponen client untuk animasi
  return <ProjectDetailClient project={project} />;
}
