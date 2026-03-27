"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Send, Bug, HelpCircle, MessageCircle, Lightbulb, ArrowRight, ArrowLeft, Check } from "lucide-react";

const subjects = [
  { icon: Bug, label: "Signaler un bug", desc: "Un problème technique sur l'app" },
  { icon: HelpCircle, label: "Aide & questions", desc: "Vous avez besoin d'aide" },
  { icon: MessageCircle, label: "Mon compte", desc: "Accès, profil, vérification" },
  { icon: Lightbulb, label: "Suggestion", desc: "Une idée pour améliorer SwitchAppart" },
];

const steps = ["Sujet", "Informations", "Message", "Envoi"];

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ subject: "", name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <Navbar />

      <section className="relative w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-32 overflow-hidden">

        {/* Motif de fond */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
          opacity: 0.5,
        }} />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-[#8A2BE2]/5" />

        <div className="relative w-full max-w-xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
              Support
            </span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-2">
              On est là{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]">
                pour vous
              </span>
            </h1>
            <p className="text-gray-400 text-sm">Une question, un bug, une idée ? On répond vite.</p>
          </motion.div>

          {!sent ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-xl overflow-hidden"
            >
              {/* Barre de progression */}
              <div className="flex items-center px-8 pt-8 pb-6 gap-2">
                {steps.map((label, i) => (
                  <div key={i} className="flex items-center gap-2 flex-1">
                    <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold shrink-0 transition-all duration-300 ${
                      i < step ? "bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white"
                      : i === step ? "bg-primary-dark text-white"
                      : "bg-gray-100 text-gray-400"
                    }`}>
                      {i < step ? <Check className="w-3 h-3" /> : i + 1}
                    </div>
                    <span className={`text-xs font-medium hidden sm:block transition-colors ${i === step ? "text-primary-dark" : "text-gray-400"}`}>
                      {label}
                    </span>
                    {i < steps.length - 1 && (
                      <div className={`flex-1 h-px transition-all duration-300 ${i < step ? "bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]" : "bg-gray-200"}`} />
                    )}
                  </div>
                ))}
              </div>

              <div className="px-8 pb-8">
                <AnimatePresence mode="wait">

                  {/* Étape 1 — Sujet */}
                  {step === 0 && (
                    <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="text-lg font-bold text-primary-dark mb-1">Quel est votre sujet ?</h2>
                      <p className="text-gray-400 text-sm mb-5">Choisissez la catégorie qui correspond à votre demande.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {subjects.map(({ icon: Icon, label, desc }) => (
                          <button
                            key={label}
                            type="button"
                            onClick={() => setForm({ ...form, subject: label })}
                            className={`flex items-start gap-3 p-4 rounded-2xl border text-left transition-all ${
                              form.subject === label
                                ? "border-[#00BFFF] bg-[#00BFFF]/8 text-primary-dark"
                                : "border-gray-200 text-gray-500 hover:border-gray-300 bg-white"
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${form.subject === label ? "bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] text-white" : "bg-gray-100 text-gray-400"}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-sm font-bold leading-tight">{label}</p>
                              <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                      <button onClick={next} disabled={!form.subject} className="inline-flex items-center gap-2 w-full justify-center py-3 rounded-full font-bold text-sm btn-neon disabled:opacity-40">
                        Continuer <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}

                  {/* Étape 2 — Infos */}
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="text-lg font-bold text-primary-dark mb-1">Vos informations</h2>
                      <p className="text-gray-400 text-sm mb-5">Pour qu'on puisse vous répondre.</p>
                      <div className="flex flex-col gap-4 mb-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Nom</label>
                          <input
                            type="text"
                            required
                            placeholder="Votre nom"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-primary-dark text-sm placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                          <input
                            type="email"
                            required
                            placeholder="votre@email.com"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-primary-dark text-sm placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors"
                          />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button onClick={back} className="flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm border border-gray-200 text-gray-500 hover:border-gray-300 transition-all">
                          <ArrowLeft className="w-4 h-4" /> Retour
                        </button>
                        <button onClick={next} disabled={!form.name || !form.email} className="flex-1 inline-flex items-center gap-2 justify-center py-3 rounded-full font-bold text-sm btn-neon disabled:opacity-40">
                          Continuer <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Étape 3 — Message */}
                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="text-lg font-bold text-primary-dark mb-1">Votre message</h2>
                      <p className="text-gray-400 text-sm mb-5">Décrivez votre demande avec le plus de détails possible.</p>
                      <textarea
                        required
                        rows={6}
                        placeholder="Décrivez votre demande..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-primary-dark text-sm placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors resize-none mb-6"
                      />
                      <div className="flex gap-3">
                        <button onClick={back} className="flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm border border-gray-200 text-gray-500 hover:border-gray-300 transition-all">
                          <ArrowLeft className="w-4 h-4" /> Retour
                        </button>
                        <button onClick={next} disabled={!form.message} className="flex-1 inline-flex items-center gap-2 justify-center py-3 rounded-full font-bold text-sm btn-neon disabled:opacity-40">
                          Continuer <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Étape 4 — Récap & envoi */}
                  {step === 3 && (
                    <motion.form key="step3" onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="text-lg font-bold text-primary-dark mb-1">Récapitulatif</h2>
                      <p className="text-gray-400 text-sm mb-5">Vérifiez vos informations avant d'envoyer.</p>
                      <div className="flex flex-col gap-3 mb-6">
                        {[
                          { label: "Sujet", value: form.subject },
                          { label: "Nom", value: form.name },
                          { label: "Email", value: form.email },
                          { label: "Message", value: form.message },
                        ].map(({ label, value }) => (
                          <div key={label} className="flex flex-col gap-1 bg-gray-50 rounded-2xl px-4 py-3">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{label}</span>
                            <span className="text-sm text-primary-dark font-medium line-clamp-2">{value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button type="button" onClick={back} className="flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm border border-gray-200 text-gray-500 hover:border-gray-300 transition-all">
                          <ArrowLeft className="w-4 h-4" /> Retour
                        </button>
                        <button type="submit" className="flex-1 inline-flex items-center gap-2 justify-center py-3 rounded-full font-bold text-sm btn-neon">
                          Envoyer <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.form>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-xl p-12 flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] flex items-center justify-center shadow-lg mb-2">
                <Check className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-primary-dark">Message envoyé !</h2>
              <p className="text-gray-400 text-sm max-w-xs">
                Merci {form.name}. Notre équipe vous répondra à <span className="text-primary-dark font-medium">{form.email}</span> dans les plus brefs délais.
              </p>
              <button
                onClick={() => { setSent(false); setStep(0); setForm({ subject: "", name: "", email: "", message: "" }); }}
                className="mt-2 text-sm text-[#00BFFF] hover:underline font-medium"
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
