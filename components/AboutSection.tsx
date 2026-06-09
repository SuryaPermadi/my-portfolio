"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Section divider */}
      <div className="h-px w-full bg-black/8 mb-24" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-accent/5">
              <Image
                src="/images/foto-profil.jpeg"
                alt="Surya Permadi"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative orange block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-accent/10 -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-accent/5 -z-10" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <p className="section-label mb-4">About Me</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-charcoal tracking-tight leading-tight mb-6">
            Hello! <br />
            <span className="font-serif italic font-light text-accent">
              Saya Surya.
            </span>
          </h2>

          <div className="space-y-4 text-muted text-lg leading-relaxed mb-10">
            <p>
              Saya adalah seorang Frontend Developer yang berspesialisasi dalam
              pengembangan web menggunakan{" "}
              <strong className="text-charcoal">HTML, CSS, JavaScript,</strong>{" "}
              dan <strong className="text-charcoal">React</strong>.
            </p>
            <p>
              Saya adalah individu yang sangat termotivasi dan optimis, berdedikasi
              untuk menulis kode yang bersih, ringkas, dan robust. Selalu berusaha
              untuk tidak berhenti belajar dan berkembang.
            </p>
            <p>
              Ketika tidak coding, saya suka membaca, belajar desain, atau mencoba
              proyek seni baru seperti fotografi.
            </p>
          </div>

          <Link
            href="/about"
            className="btn-primary inline-flex"
          >
            Selengkapnya tentang Saya
            <span className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
