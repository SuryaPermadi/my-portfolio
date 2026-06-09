"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    topic: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const { name, topic, message } = formData;
    const phoneNumber = "6289652391060";
    const text = `Halo Surya, saya ${name}.%0A%0ATopik: ${topic}%0A%0APesan: ${message}`;
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
      setSending(false);
    }, 600);
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="section-label mb-4">Contact</p>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl text-charcoal tracking-tight leading-tight mb-6 max-w-3xl">
            Mari{" "}
            <span className="font-serif italic text-accent font-light">
              Berkolaborasi
            </span>
          </h1>
          <p className="text-muted text-xl leading-relaxed max-w-lg">
            Saya saat ini tersedia untuk freelance work. Punya proyek menarik?
            Kirimkan saya pesan!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-5 space-y-8"
          >
            {/* Status */}
            <div className="card-warm rounded-2xl p-6 flex items-center gap-4">
              <span className="status-dot" />
              <div>
                <p className="text-xs font-bold text-muted uppercase tracking-widest">
                  Status
                </p>
                <p className="text-charcoal font-semibold">
                  Available for Work
                </p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              {[
                {
                  icon: "mail",
                  label: "Email",
                  value: "suryapermadi122@gmail.com",
                  href: "mailto:suryapermadi122@gmail.com",
                },
                {
                  icon: "language",
                  label: "LinkedIn",
                  value: "/in/suryapermadiwicaksana24",
                  href: "https://www.linkedin.com/in/suryapermadiwicaksana24",
                },
                {
                  icon: "code",
                  label: "GitHub",
                  value: "github.com/SuryaPermadi",
                  href: "https://github.com/SuryaPermadi",
                },
                {
                  icon: "location_on",
                  label: "Location",
                  value: "Jakarta, Indonesia",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group card-warm rounded-2xl p-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors flex-shrink-0">
                    <span className="material-symbols-outlined text-accent group-hover:text-white text-base transition-colors">
                      {item.icon}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-muted uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-charcoal text-sm font-medium truncate group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7"
          >
            <div className="card-warm rounded-3xl p-8 md:p-12">
              <h2 className="font-display font-bold text-2xl text-charcoal mb-8">
                Kirim Pesan
              </h2>
              <form onSubmit={handleWhatsAppRedirect} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-widest text-muted uppercase">
                      Nama Lengkap *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="input-warm"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold tracking-widest text-muted uppercase">
                      Topik *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Project or inquiry"
                      className="input-warm"
                      value={formData.topic}
                      onChange={(e) =>
                        setFormData({ ...formData, topic: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-widest text-muted uppercase">
                    Pesan *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Ceritakan tentang proyek atau pertanyaan Anda..."
                    className="input-warm resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center"
                >
                  {sending ? (
                    "Mengirim..."
                  ) : (
                    <>
                      Kirim via WhatsApp
                      <span className="material-symbols-outlined text-base">
                        send
                      </span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
