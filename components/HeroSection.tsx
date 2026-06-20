"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { number: "3+", label: "Tahun\nBelajar" },
  { number: "10+", label: "Proyek\nSelesai" },
  { number: "5+", label: "Tools\nDikuasai" },
];

const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind", "Figma"];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 pb-16 px-6 md:px-10 max-w-7xl mx-auto flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left: Profile Card (like Sinan's sidebar) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4"
        >
          {/* Profile photo */}
          <div className="relative w-full max-w-[280px] mx-auto lg:mx-0 mb-8">
            <div className="aspect-square rounded-3xl overflow-hidden bg-accent/10">
              <Image
                src="/images/foto-profil.jpeg"
                alt="Surya Permadi"
                width={280}
                height={280}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Available badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-surface rounded-full px-4 py-2 shadow-lg border border-border dark:border-border/30 flex items-center gap-2 whitespace-nowrap">
              <span className="status-dot" />
              <span className="text-xs font-semibold text-charcoal">
                Available for Work
              </span>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-10 flex flex-wrap gap-2 max-w-[280px] mx-auto lg:mx-0">
            {skills.map((skill) => (
              <span key={skill} className="tag-badge">
                {skill}
              </span>
            ))}
          </div>

          {/* Info */}
          <div className="mt-6 space-y-2 max-w-[280px] mx-auto lg:mx-0">
            <div className="flex items-center gap-2 text-sm text-muted">
              <span className="material-symbols-outlined text-base text-accent">
                location_on
              </span>
              Jakarta, Indonesia
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <span className="material-symbols-outlined text-base text-accent">
                work
              </span>
              Full-time / Freelance
            </div>
            <a
              href="mailto:suryapermadi122@gmail.com"
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
            >
              <span className="material-symbols-outlined text-base text-accent">
                mail
              </span>
              suryapermadi122@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Right: Hero Text */}
        <div className="lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent font-semibold tracking-widest text-sm uppercase mb-4 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-accent" />
            Hey, Salam Kenal!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-extrabold leading-[1.05] tracking-tight text-charcoal mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
          >
            I&apos;m{" "}
            <span className="font-serif italic text-accent">Surya</span>
            ,<br />
            Frontend{" "}
            <span className="font-serif italic font-light">Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted leading-relaxed max-w-xl mb-10"
          >
            Saya membantu bisnis berkembang dengan menciptakan pengalaman web yang
            indah dan fungsional. Jika Anda mencari developer yang suka menyelesaikan
            hal-hal,{" "}
            <Link
              href="/contact"
              className="text-accent font-semibold hover:underline"
            >
              mari ngobrol.
            </Link>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Link href="/projects" className="btn-primary">
              Lihat Proyek
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </Link>
            <a
              href="/cv-surya-permadi.pdf"
              download
              className="btn-ghost"
            >
              Download CV
              <span className="material-symbols-outlined text-base">
                download
              </span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-10 border-t border-border"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="stat-number">{stat.number}</span>
                <span className="text-xs text-muted font-medium leading-snug whitespace-pre-line">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
