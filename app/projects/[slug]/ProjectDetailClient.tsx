"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BudgetAllocationChart from "@/components/BudgetAllocationChart";

export default function ProjectDetailClient({ project }: { project: any }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent transition-colors mb-12 group"
        >
          <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Kembali ke Projects
        </Link>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="section-label mb-4">Case Study</p>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-charcoal tracking-tight leading-tight mb-6">
              {project.title}
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-xl">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {project.tech.map((tech: string) => (
              <span key={tech} className="tag-badge tag-accent">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="rounded-3xl overflow-hidden mb-16 card-warm"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1400}
            height={800}
            className="w-full object-cover hover:scale-[1.02] transition-transform duration-700"
          />
        </motion.div>

        {/* Chart (for uangku project) */}
        {project.slug === "uangku" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 card-warm rounded-3xl p-8 md:p-12"
          >
            <p className="section-label mb-3">Logic Visualization</p>
            <h2 className="font-display font-bold text-2xl text-charcoal mb-8">
              Budget Allocation Logic
            </h2>
            <BudgetAllocationChart />
          </motion.div>
        )}

        {/* CTA */}
        <div className="text-center pt-8">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary text-base inline-flex"
          >
            Lihat Live Project
            <span className="material-symbols-outlined text-base">
              open_in_new
            </span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
