"use client";

import { motion } from "framer-motion";

export function HowItWorksSection() {
  const steps = [
    {
      num: "1",
      title: "Choisir un Appartement",
      desc: "Sélectionnez l'appartement qui correspond à votre planning et votre style de vie.",
    },
    {
      num: "2",
      title: "Vérifier les Disponibilités",
      desc: "Choisissez vos dates et destinations préférées.",
    },
    {
      num: "3",
      title: "Faire une Réservation",
      desc: "Confirmez votre réservation en toute sécurité en quelques minutes via smart contract.",
    },
    {
      num: "4",
      title: "Profiter de l'Expérience",
      desc: "Arrivez, explorez et créez des souvenirs inoubliables.",
    },
  ];

  return (
    <section className="w-full py-24 bg-gray-50/80 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Side: Vertical Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-5/12 aspect-[3/4] rounded-[2.5rem] overflow-hidden relative shadow-2xl group"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
            <p className="text-white font-medium text-lg max-w-[200px] leading-tight drop-shadow-md">
              Un nouvel emploi, une nouvelle ville, une nouvelle étape. SwitchAppart vous permet de changer de logement sans repartir de zéro.
            </p>
            <button 
              onClick={() => window.dispatchEvent(new Event('open-download-modal'))}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold shadow-lg transition-transform hover:-translate-y-1 btn-neon"
            >
              Télécharger l'app
              <span className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center text-[10px]">↓</span>
            </button>
          </div>
        </motion.div>

        {/* Right Side: Text & Steps */}
        <div className="w-full md:w-7/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h4 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-3">Comment ça marche</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark">
              Réservez un Échange en 4 Étapes Simples
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`flex gap-6 p-6 rounded-3xl transition-colors cursor-default ${
                  i === 0 ? "bg-white shadow-xl border border-gray-100" : "hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100"
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-400 font-bold text-xl border border-gray-200">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-primary-dark mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
