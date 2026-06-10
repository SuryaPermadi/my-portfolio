"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const { name, email, message } = formData;
    const phoneNumber = "6281223929469";
    const text = `Halo Surya, saya ${name} (${email}).%0A%0APesan: ${message}`;
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
      setSending(false);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="h-px w-full bg-black/8 mb-24" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <p className="section-label mb-4">Contact</p>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-charcoal tracking-tight leading-tight mb-6">
              I&apos;m currently available for{" "}
              <span className="font-serif italic text-accent font-light">
                freelance work
              </span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Punya proyek menarik atau hanya ingin menyapa? Kirimkan saya pesan
              dan saya akan segera merespons.
            </p>

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
                  value: "suryapermadiwicaksana24",
                  href: "https://www.linkedin.com/in/suryapermadiwicaksana24",
                },
                {
                  icon: "code",
                  label: "GitHub",
                  value: "SuryaPermadi",
                  href: "https://github.com/SuryaPermadi",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <span className="material-symbols-outlined text-accent group-hover:text-white text-base transition-colors">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider font-semibold">
                      {item.label}
                    </p>
                    <p className="text-charcoal text-sm font-medium group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7"
          >
            <div className="card-warm rounded-3xl p-8 md:p-10">
              <h3 className="font-display font-bold text-xl text-charcoal mb-8">
                Kirim Pesan
              </h3>
              <form onSubmit={handleWhatsAppRedirect} className="space-y-8">
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
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@email.com"
                    className="input-warm"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold tracking-widest text-muted uppercase">
                    Pesan *
                  </label>
                  <textarea
                    required
                    rows={4}
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
                  className="btn-primary w-full justify-center text-sm"
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
