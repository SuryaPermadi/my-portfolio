"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "OK OCE Indonesia",
        period: "Nov 2023 - Present",
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
        <div className="relative border-l-2 border-zinc-100 ml-4 space-y-20 pb-12">
            {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="relative pl-10"
                >
                    {/* Main Company Dot */}
                    <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-zinc-950 border-4 border-white shadow-lg shadow-zinc-200 z-10" />

                    <div className="mb-8">
                        <h4 className="text-2xl sm:text-3xl font-black text-zinc-950 mb-2">{exp.company}</h4>
                        <div className="inline-block px-3 py-1 rounded-md bg-zinc-100 border border-zinc-200">
                            <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">{exp.period}</p>
                        </div>
                    </div>

                    <div className="space-y-10 relative">
                        {exp.roles.length > 1 && (
                            <div className="absolute left-[-41px] top-6 bottom-6 w-[2px] bg-zinc-100" />
                        )}

                        {exp.roles.map((role, roleIndex) => (
                            <div key={roleIndex} className="relative group">
                                {exp.roles.length > 1 && (
                                    <div className="absolute -left-[46px] top-3 w-3 h-3 rounded-full bg-white border border-zinc-200 group-hover:bg-zinc-950 transition-all duration-300" />
                                )}

                                <div className="card-minimal p-8 group-hover:translate-x-2">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
                                        <h5 className="text-xl font-bold text-zinc-950 transition-colors">
                                            {role.title}
                                        </h5>
                                        <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-zinc-100 text-zinc-500 border border-zinc-200 whitespace-nowrap self-start uppercase tracking-widest">
                                            {role.period}
                                        </span>
                                    </div>
                                    <ul className="space-y-4">
                                        {role.description.map((item, i) => (
                                            <li key={i} className="text-zinc-500 flex gap-4 items-start">
                                                <span className="mt-2.5 flex-shrink-0 w-1 h-1 rounded-full bg-zinc-400" />
                                                <span className="text-sm sm:text-base leading-relaxed font-medium">{item}</span>
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
