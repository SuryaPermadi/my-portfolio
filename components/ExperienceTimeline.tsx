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
        <div className="relative border-l border-primary/10 ml-4 space-y-24 pb-12">
            {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="relative pl-12"
                >
                    {/* Dot Indicator */}
                    <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-primary ring-8 ring-primary/5 animate-pulse" />

                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-xs font-mono text-primary font-black tracking-widest">{exp.period}</span>
                            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/20 to-transparent" />
                        </div>
                        <h4 className="text-3xl sm:text-5xl font-black text-foreground tracking-tighter mb-2 italic uppercase">{exp.company}</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {exp.roles.map((role, roleIndex) => (
                            <div key={roleIndex} className="group relative">
                                <div className="card-premium">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8 gap-4">
                                        <div>
                                            <h5 className="text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                                                {role.title}
                                            </h5>
                                            <p className="text-xs font-mono text-zinc-400 mt-1 uppercase">{role.period}</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-6">
                                        {role.description.map((item, i) => (
                                            <li key={i} className="flex gap-6 items-start">
                                                <span className="mt-3 flex-shrink-0 w-2 h-2 rounded-full border border-primary/20 bg-primary/5 group-hover:bg-primary transition-colors duration-500" />
                                                <span className="text-base sm:text-lg text-zinc-500 leading-relaxed font-normal">{item}</span>
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
