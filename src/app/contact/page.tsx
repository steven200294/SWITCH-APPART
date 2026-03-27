"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Send, MessageCircle, Bug, HelpCircle, Lightbulb } from "lucide-react";

const subjects = [
  { icon: Bug, label: "Signaler un bug" },
  { icon: HelpCircle, label: "Aide & questions" },
  { icon: MessageCircle, label: "Mon compte" },
  { icon: Lightbulb, label: "Suggestion" },
];

export default function ContactPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <Navbar />

      <section className="relative w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">

        {/* Motif de fond */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
          opacity: 0.5,
        }} />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-[#8A2BE2]/5" />

        <div className="relative w-full max-w-2xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-500 text-xs font-bold uppercase tracking-widest mb-5">
              Support
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark leading-tight mb-3">
              On est là{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]">
                pour vous
              </span>
            </h1>
            <p className="text-gray-500 text-base font-sans">
              Une question, un problème ou une idée ? Écrivez-nous, on répond rapidement.
            </p>
          </motion.div>

          {!sent ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-xl p-8 flex flex-col gap-6"
            >
              {/* Sujet */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Sujet
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {subjects.map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setSelected(label)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-2xl border text-sm font-medium transition-all ${
                        selected === label
                          ? "border-[#00BFFF] bg-[#00BFFF]/10 text-[#00BFFF]"
                          : "border-gray-200 text-gray-500 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nom */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  required
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-primary-dark text-sm placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-primary-dark text-sm placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Décrivez votre demande..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-primary-dark text-sm placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-bold text-sm btn-neon"
              >
                Envoyer le message
                <Send className="w-4 h-4" />
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-xl p-12 flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] flex items-center justify-center shadow-lg mb-2">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-primary-dark">Message envoyé !</h2>
              <p className="text-gray-500 text-sm max-w-xs">
                Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); setSelected(null); }}
                className="mt-4 text-sm text-[#00BFFF] hover:underline font-medium"
              >
                Envoyer un autre message
              </button>
            </motion.div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
