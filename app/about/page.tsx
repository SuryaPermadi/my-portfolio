"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-40 pb-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-[10px] text-primary-container tracking-[0.4em] mb-8 block uppercase">
              // DATA_REPORT_v2.0 // IDENTITY_VERIFIED
            </span>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-white font-extrabold mb-10 tracking-tighter leading-[0.9] uppercase italic">
              ENGINEERING <br />
              <span className="text-primary-container">AESTHETICS</span>
            </h1>
            <p className="text-on-surface-variant/70 text-xl font-light leading-relaxed max-w-2xl border-l border-primary-container/30 pl-8 italic">
              "Logic is the foundation, but beauty is the interface." <br />
              Saya mendedikasikan karir saya untuk menjembatani celah antara rekayasa sistem yang kompleks dan desain yang intuitif.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square glass-card rounded-3xl overflow-hidden rim-light-cyan p-2">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/foto-profil.jpeg"
                  alt="Surya Permadi"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-primary-container/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Technical Core Section */}
        <div className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] text-primary-container tracking-[0.3em] mb-6 block uppercase">
                // SYSTEM_CORE_ANALYSIS
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-tighter font-extrabold uppercase italic">Technical Repository</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Frontend", value: "React / Next.js / TypeScript", icon: "01" },
              { label: "Styling", value: "Tailwind CSS / Framer Motion", icon: "02" },
              { label: "Design", value: "Figma / UI Systems / Motion", icon: "03" },
              { label: "Analysis", value: "System Architecture / Optimization", icon: "04" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 rounded-2xl rim-light-cyan"
              >
                <span className="font-mono text-[10px] text-primary-container/30 block mb-6">{skill.icon}</span>
                <h3 className="font-mono text-[10px] text-primary-container tracking-widest uppercase mb-3">{skill.label}</h3>
                <p className="text-white text-sm font-medium tracking-tight uppercase italic">{skill.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="max-w-5xl">
          <div className="mb-24">
            <span className="font-mono text-[10px] text-primary-container tracking-[0.3em] mb-6 block uppercase">
              // LOG_HISTORY_EXP
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-tighter font-extrabold uppercase italic">Professional Timeline</h2>
          </div>
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
