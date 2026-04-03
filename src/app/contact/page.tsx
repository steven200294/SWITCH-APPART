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
    <main className="flex min-h-screen flex-col w-full bg-gray-50 font-sans">
      <Navbar theme="light" />

      <section className="relative w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24 md:py-32 overflow-hidden">
        
        {/* Background subtle dots */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)`,
          backgroundSize: '26px 26px',
          opacity: 0.5,
        }} />

        <div className="relative w-full max-w-[1400px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-gray-100 flex flex-col lg:flex-row min-h-[80vh]">
          
          {/* LEFT SIDE: Visual / Image Area */}
          <div className="w-full lg:w-5/12 xl:w-1/2 relative min-h-[400px] lg:min-h-full bg-gray-900 group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
              alt="Espace de travail SwitchAppart" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Dark & Neon Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00BFFF] rounded-full blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8A2BE2] rounded-full blur-[120px] opacity-30 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            {/* Left Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-end min-h-full">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
               >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-6">
                    Support
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4 leading-tight">
                    On est là <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]">
                      pour vous
                    </span>
                  </h1>
                  <p className="text-white/70 text-lg md:text-xl font-sans max-w-md leading-relaxed">
                    Une question, un bug technique ou une idée géniale pour améliorer SwitchAppart ? Notre équipe vous répond rapidement.
                  </p>
               </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Form */}
          <div className="w-full lg:w-7/12 xl:w-1/2 p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-white relative">
            
            {/* Subtle Neon Glows in background of the form */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00BFFF] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8A2BE2] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-xl mx-auto">
              {!sent ? (
                <>
                  {/* Barre de progression */}
                  <div className="flex items-center pb-8 gap-2 border-b border-gray-100 mb-8">
                    {steps.map((label, i) => (
                      <div key={i} className="flex items-center gap-2 flex-1">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold shrink-0 shadow-sm transition-all duration-300 ${
                          i < step ? "bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white shadow-[#00BFFF]/20"
                          : i === step ? "bg-primary-dark text-white ring-4 ring-gray-100"
                          : "bg-gray-100 text-gray-400"
                        }`}>
                          {i < step ? <Check className="w-4 h-4" /> : i + 1}
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-wider hidden sm:block transition-colors ${i === step ? "text-primary-dark" : "text-gray-400"}`}>
                          {label}
                        </span>
                        {i < steps.length - 1 && (
                          <div className={`flex-1 h-1 rounded-full transition-all duration-500 overflow-hidden bg-gray-100`}>
                            <div className={`h-full bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] transition-all duration-500 ${i < step ? 'w-full' : 'w-0'}`} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {/* Étape 1 — Sujet */}
                    {step === 0 && (
                      <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="min-h-[300px] flex flex-col">
                        <h2 className="text-2xl font-black font-heading text-primary-dark mb-2">Quel est votre sujet ?</h2>
                        <p className="text-gray-500 text-base mb-8">Sélectionnez la catégorie qui correspond le mieux à votre demande.</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 flex-1">
                          {subjects.map(({ icon: Icon, label, desc }) => (
                            <button
                              key={label}
                              type="button"
                              onClick={() => setForm({ ...form, subject: label })}
                              className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-300 group ${
                                form.subject === label
                                  ? "border-[#00BFFF] bg-[#00BFFF]/5 text-primary-dark shadow-lg shadow-[#00BFFF]/10"
                                  : "border-gray-200 text-gray-500 hover:border-gray-300 hover:shadow-md bg-white"
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${form.subject === label ? "bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] text-white" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"}`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="text-sm font-bold leading-tight mb-1">{label}</p>
                                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                        
                        <button onClick={next} disabled={!form.subject} className="inline-flex items-center gap-2 w-full justify-center py-4 rounded-full font-bold text-base btn-neon disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none">
                          Continuer <ArrowRight className="w-5 h-5" />
                        </button>
                      </motion.div>
                    )}

                    {/* Étape 2 — Infos */}
                    {step === 1 && (
                      <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="min-h-[300px] flex flex-col">
                        <h2 className="text-2xl font-black font-heading text-primary-dark mb-2">Vos informations</h2>
                        <p className="text-gray-500 text-base mb-8">Pour que notre équipe puisse vous recontacter rapidement.</p>
                        
                        <div className="flex flex-col gap-6 mb-8 flex-1">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 px-1">Votre Nom complet</label>
                            <input
                              type="text"
                              required
                              placeholder="Jean Dupont..."
                              value={form.name}
                              onChange={e => setForm({ ...form, name: e.target.value })}
                              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-primary-dark text-base placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] focus:ring-4 focus:ring-[#00BFFF]/10 focus:bg-white transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 px-1">Votre Adresse Email</label>
                            <input
                              type="email"
                              required
                              placeholder="jean.dupont@email.com"
                              value={form.email}
                              onChange={e => setForm({ ...form, email: e.target.value })}
                              className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-primary-dark text-base placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] focus:ring-4 focus:ring-[#00BFFF]/10 focus:bg-white transition-all"
                            />
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <button onClick={back} className="flex items-center gap-2 px-6 py-4 rounded-full font-bold text-base border-2 border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50 transition-all">
                            <ArrowLeft className="w-5 h-5" /> <span className="hidden sm:inline">Retour</span>
                          </button>
                          <button onClick={next} disabled={!form.name || !form.email} className="flex-1 inline-flex items-center gap-2 justify-center py-4 rounded-full font-bold text-base btn-neon disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none">
                            Étape suivante <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Étape 3 — Message */}
                    {step === 2 && (
                      <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="min-h-[300px] flex flex-col">
                        <h2 className="text-2xl font-black font-heading text-primary-dark mb-2">Votre message</h2>
                        <p className="text-gray-500 text-base mb-8">Détaillez votre {form.subject.toLowerCase()} avec précision.</p>
                        
                        <div className="flex-1 mb-8">
                          <textarea
                            required
                            rows={6}
                            placeholder="Décrivez précisément votre demande, contexte, etc..."
                            value={form.message}
                            onChange={e => setForm({ ...form, message: e.target.value })}
                            className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 text-primary-dark text-base placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] focus:ring-4 focus:ring-[#00BFFF]/10 focus:bg-white transition-all resize-none shadow-inner"
                          />
                        </div>
                        
                        <div className="flex gap-4">
                          <button onClick={back} className="flex items-center gap-2 px-6 py-4 rounded-full font-bold text-base border-2 border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50 transition-all">
                            <ArrowLeft className="w-5 h-5" /> <span className="hidden sm:inline">Retour</span>
                          </button>
                          <button onClick={next} disabled={!form.message} className="flex-1 inline-flex items-center gap-2 justify-center py-4 rounded-full font-bold text-base btn-neon disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none">
                            Récapitulatif <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Étape 4 — Récap & envoi */}
                    {step === 3 && (
                      <motion.form key="step3" onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="min-h-[300px] flex flex-col">
                        <h2 className="text-2xl font-black font-heading text-primary-dark mb-2">Récapitulatif</h2>
                        <p className="text-gray-500 text-base mb-8">Vérifiez vos informations une dernière fois avant la transmission.</p>
                        
                        <div className="flex flex-col gap-4 mb-8 flex-1">
                          {[
                            { label: "Catégorie", value: form.subject },
                            { label: "Identité", value: `${form.name} (${form.email})` },
                            { label: "Contenu", value: form.message },
                          ].map(({ label, value }) => (
                            <div key={label} className="flex flex-col gap-1.5 bg-gray-50 border border-gray-100 rounded-2xl p-4">
                              <span className="text-[11px] font-bold uppercase tracking-widest text-primary-dark/50">{label}</span>
                              <span className="text-base text-primary-dark font-medium leading-relaxed">{value}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex gap-4">
                          <button type="button" onClick={back} className="flex items-center gap-2 px-6 py-4 rounded-full font-bold text-base border-2 border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50 transition-all">
                            <ArrowLeft className="w-5 h-5" /> <span className="hidden sm:inline">Editer</span>
                          </button>
                          <button type="submit" className="flex-1 inline-flex items-center gap-2 justify-center py-4 rounded-full font-bold text-base btn-neon shadow-lg shadow-[#8A2BE2]/30">
                            Confirmer & Envoyer <Send className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#8A2BE2] flex items-center justify-center shadow-xl shadow-[#00BFFF]/20 mb-8 relative">
                    <div className="absolute inset-2 border-2 border-white/20 rounded-full animate-ping opacity-20"></div>
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-black text-primary-dark mb-4">Transmission réussie</h2>
                  <p className="text-gray-500 text-lg max-w-sm mb-8 leading-relaxed">
                    Merci {form.name} ! Notre équipe a bien reçu votre demande et vous répondra sur <span className="text-primary-dark font-bold font-mono text-sm">{form.email}</span> dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => { setSent(false); setStep(0); setForm({ subject: "", name: "", email: "", message: "" }); }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 text-sm font-bold text-gray-500 hover:border-[#00BFFF] hover:text-[#00BFFF] hover:bg-[#00BFFF]/5 transition-all"
                  >
                    Envoyer une autre requête
                  </button>
                </motion.div>
              )}
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
