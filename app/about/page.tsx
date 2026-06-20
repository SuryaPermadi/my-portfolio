"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ExperienceTimeline from "@/components/ExperienceTimeline";

const skills = [
  { label: "Frontend", value: "React / Next.js / TypeScript", icon: "01" },
  { label: "Styling", value: "Tailwind CSS / Framer Motion", icon: "02" },
  { label: "Design", value: "Figma / UI Systems / Motion", icon: "03" },
  { label: "Analysis", value: "System Architecture / Optimization", icon: "04" },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <p className="section-label mb-4">About Me</p>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl text-charcoal tracking-tight leading-tight mb-8">
              Hello!{" "}
              <span className="font-serif italic text-accent font-light">
                I&apos;m Surya
              </span>
            </h1>
            <p className="text-muted text-xl leading-relaxed border-l-4 border-accent pl-6 italic mb-10">
              &ldquo;Logic is the foundation, but beauty is the interface.&rdquo;
            </p>
            <div className="space-y-4 text-muted text-lg leading-relaxed">
              <p>
                Saya berspesialisasi dalam pengembangan web yang memanfaatkan{" "}
                <strong className="text-charcoal">HTML, CSS, JavaScript,</strong> dan{" "}
                <strong className="text-charcoal">React</strong>.
              </p>
              <p>
                Saya adalah individu yang sangat termotivasi dan optimis, berdedikasi
                untuk menulis kode yang bersih, ringkas, dan robust. Selalu berusaha
                untuk tidak berhenti belajar dan berkembang.
              </p>
              <p>
                Ketika tidak coding, saya suka membaca, belajar desain antarmuka baru,
                atau mencoba proyek seni kreatif seperti fotografi.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-accent/5 max-w-sm mx-auto lg:mx-0">
              <Image
                src="/images/foto-profil.jpeg"
                alt="Surya Permadi"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Skills Cards */}
        <div className="mb-24">
          <div className="h-px bg-border mb-16" />
          <p className="section-label mb-4">Skills</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal tracking-tight mb-12">
            Apa yang Saya Kuasai
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-warm rounded-2xl p-8"
              >
                <span className="text-xs font-mono text-accent/40 block mb-4">
                  {skill.icon}
                </span>
                <h3 className="font-bold text-sm text-accent tracking-widest uppercase mb-2">
                  {skill.label}
                </h3>
                <p className="text-charcoal text-sm font-medium leading-relaxed">
                  {skill.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="h-px bg-border mb-16" />
          <p className="section-label mb-4">Experience</p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-charcoal tracking-tight mb-16">
            Perjalanan Profesional
          </h2>
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
