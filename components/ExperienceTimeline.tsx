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
                    "Membantu konfigurasi Router agar mendapatkan sinyal Wi-Fi pada ruangan KSB",
                ],
            },
            {
                title: "Website & Media Social Developer",
                period: "Feb 2024 - Jun 2024",
                description: [
                    "Internship melalui program MSIB Merdeka Kampus.",
                    "Kolaborasi aktif antar tim Social Media untuk menciptakan konten yang menarik.",
                    "Memperbarui kegiatan amal kemanusiaan di website campaign Dompet Dhuafa dan OK OCE Kemanusiaan.",
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
        <div className="relative border-l border-white/5 ml-4 space-y-24 pb-12">
            {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="relative pl-12"
                >
                    {/* Dot Indicator */}
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary shadow-[0_0_10px_rgba(0,245,255,0.8)]" />

                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-[10px] font-mono text-primary/60 uppercase tracking-[0.3em] italic">{exp.period}</span>
                            <div className="h-[1px] flex-grow bg-white/5" />
                        </div>
                        <h4 className="text-3xl sm:text-5xl font-bold text-white tracking-tighter mb-2 uppercase italic">{exp.company}</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {exp.roles.map((role, roleIndex) => (
                            <div key={roleIndex} className="group relative">
                                <div className="border border-white/5 bg-secondary/20 p-8 sm:p-12 transition-all hover:border-primary/30">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 gap-4">
                                        <div>
                                            <h5 className="text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors uppercase">
                                                {role.title}
                                            </h5>
                                            <p className="text-[10px] font-mono text-gray-600 mt-2 uppercase tracking-widest italic">{role.period}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-6">
                                        {role.description.map((item, i) => (
                                            <li key={i} className="flex gap-6 items-start">
                                                <span className="mt-2.5 flex-shrink-0 w-1.5 h-1.5 bg-primary/20 group-hover:bg-primary transition-all duration-500" />
                                                <span className="text-sm text-gray-500 leading-relaxed italic font-light">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
