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
      transition={{ duration: 1 }}
      className="relative min-h-screen overflow-hidden bg-background text-foreground"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 z-0" />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* Back Link */}
        <Link href="/projects" className="group inline-flex items-center text-primary font-mono transition-all mb-20 px-8 py-3 border border-white/5 bg-secondary/30 backdrop-blur-sm text-[10px] uppercase tracking-widest">
          <span className="mr-3 group-hover:-translate-x-1 transition-transform">←</span> Return to Repository
        </Link>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary/60 font-mono text-[9px] uppercase tracking-[0.3em] mb-4 block italic">// CASE_STUDY_LOG</span>
            <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase italic text-white">
              {project.title}
            </h1>
            <p className="max-w-xl text-gray-400 text-xl font-light leading-relaxed italic">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {project.tech.map((tech: string) => (
              <span key={tech} className="px-6 py-2 border border-white/5 bg-secondary/30 text-gray-400 font-mono text-[9px] uppercase tracking-widest hover:border-primary/30 transition-all">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative overflow-hidden border border-white/5 group mb-32 grayscale hover:grayscale-0 transition-all duration-1000"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1400}
            height={800}
            className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </motion.div>

        {/* Project Analysis Section (e.g. Chart) */}
        {project.slug === "uangku" && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32 p-12 border border-white/5 bg-secondary/20 relative"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <div className="mb-12">
              <span className="text-primary font-mono text-[9px] uppercase tracking-widest block mb-2">// LOGIC_VISUALIZATION</span>
              <h2 className="text-3xl font-bold uppercase tracking-tight text-white">Architecture & Logic</h2>
            </div>
            <BudgetAllocationChart />
          </motion.div>
        )}

        {/* Action Button */}
        <div className="text-center pb-24">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-16 py-6 bg-primary text-black font-bold tracking-widest text-sm uppercase cyber-border"
          >
            Live Deployment &rarr;
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
