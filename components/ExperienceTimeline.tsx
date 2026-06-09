"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "OK OCE Indonesia",
    period: "Nov 2023 - Sekarang",
    roles: [
      {
        title: "Website Developer",
        period: "Nov 2025 - Mei 2026",
        description: [
          "Mendesain ulang website okoce.net menggunakan HTML, Tailwind, dan Javascript.",
          "Membangun dan memperbarui website OK OCE Kemanusiaan menggunakan WordPress.",
          "Integrasi API untuk otomatisasi update Event dan Daftar Berita.",
          "Mendesain banner & asset digital serta menyusun e-katalog produk UMKM.",
          "Membantu penentuan pihak ketiga untuk OTP Register dan Payment Gateway.",
        ],
      },
      {
        title: "Website & Media Social Developer",
        period: "Feb 2024 - Jun 2024",
        description: [
          "Internship melalui program MSIB Merdeka Kampus.",
          "Kolaborasi aktif antar tim Social Media untuk menciptakan konten yang menarik.",
          "Memperbarui kegiatan amal kemanusiaan di website Dompet Dhuafa dan OK OCE.",
        ],
      },
    ],
  },
  {
    company: "Universitas Mercu Buana",
    period: "Feb 2025 - Nov 2025",
    roles: [
      {
        title: "Staff Lembaga Sertifikasi Profesi",
        period: "Feb 2023 - Nov 2023",
        description: [
          "Menyusun dokumen Laporan Resmi, Daftar Hadir, dan Surat Tugas Asesor.",
          "Membantu Asesor selama Rapat Pleno dan reproduksi dokumen skema uji kompetensi.",
          "Melakukan troubleshooting jaringan LAN, perbaikan printer, dan instalasi software.",
        ],
      },
    ],
  },
  {
    company: "TVRI Nasional",
    period: "Apr 2020 - Jul 2020",
    roles: [
      {
        title: "Graphic Designer",
        period: "Apr 2020 - Jul 2020",
        description: [
          "Menciptakan desain harian untuk kebutuhan program televisi.",
          "Mendesain merchandise (goody bag) untuk event tahunan.",
          "Membuat logo, flyer, dan berbagai aset visual promosi lainnya.",
        ],
      },
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative border-l-2 border-black/8 ml-4 space-y-16 pb-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="relative pl-10"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm" />

          {/* Company Header */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-muted tracking-widest uppercase mb-1">
              {exp.period}
            </p>
            <h4 className="font-display font-extrabold text-2xl text-charcoal tracking-tight">
              {exp.company}
            </h4>
          </div>

          {/* Roles */}
          <div className="space-y-6">
            {exp.roles.map((role, roleIndex) => (
              <div
                key={roleIndex}
                className="card-warm rounded-2xl p-6 md:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-2">
                  <h5 className="font-display font-bold text-lg text-charcoal">
                    {role.title}
                  </h5>
                  <span className="text-xs font-semibold text-accent tracking-wider uppercase whitespace-nowrap">
                    {role.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {role.description.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm text-muted leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
