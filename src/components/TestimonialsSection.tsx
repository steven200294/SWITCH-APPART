"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      initial: "C",
      quote: "SwitchAppart m'a permis d'échanger mon studio parisien contre un T2 à Lyon en moins d'une semaine !",
      name: "Clara, 29 ans",
      role: "Responsable RH",
      image: "https://i.pravatar.cc/150?img=5",
      glowColor: "from-primary-orange/10"
    },
    {
      initial: "J",
      quote: "Le matching est incroyable. J'ai trouvé un appart parfait pour ma mutation à Marseille.",
      name: "Julien, 34 ans",
      role: "Consultant IT",
      image: "https://i.pravatar.cc/150?img=11",
      glowColor: "from-primary-teal/10"
    },
    {
      initial: "N",
      quote: "Je devais quitter Lille mais sans casser mon bail. J'ai trouvé quelqu'un qui voulait emménager. C'était fluide.",
      name: "Nadia, 26 ans",
      role: "Graphiste",
      image: "https://i.pravatar.cc/150?img=43",
      glowColor: "from-[#8A2BE2]/10"
    },
    {
      initial: "L&E",
      quote: "En tant qu'étudiants, on cherchait un appart plus proche de notre fac. On a échangé notre logement à Nanterre avec un couple de Créteil. Super concept !",
      name: "Lucas & Emma",
      role: "Étudiants, 22 et 23 ans",
      image: "https://i.pravatar.cc/150?img=64",
      glowColor: "from-primary-orange/10"
    },
    {
      initial: "T",
      quote: "C'est comme Tinder pour les apparts — mais en beaucoup plus utile. L'algorithme comprend vraiment mes besoins.",
      name: "Théo, 31 ans",
      role: "Freelance Marketing",
      image: "https://i.pravatar.cc/150?img=33",
      glowColor: "from-primary-teal/10"
    },
    {
      initial: "S",
      quote: "J'ai changé de ville pour un nouveau job, sans passer par une agence. SwitchAppart m'a fait gagner du temps et de l'argent.",
      name: "Sophie, 28 ans",
      role: "Ingénieure",
      image: "https://i.pravatar.cc/150?img=44",
      glowColor: "from-[#8A2BE2]/10"
    }
  ];

  return (
    <section className="w-full py-24 bg-white/80 relative overflow-hidden" id="testimonials">

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            Ils nous font confiance
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-primary-dark mb-4 leading-tight"
          >
            Découvrez <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] font-bold">les témoignages</span> <br className="hidden md:block"/> de nos premiers utilisateurs
          </motion.h2>
        </div>

        {/* Custom 3-Column Aesthetic Grid (as requested in screenshot) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 border-y border-gray-200">
          {testimonials.map((testi, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.15, duration: 0.6 }}
              className={`relative p-8 md:p-10 lg:p-12 flex flex-col h-full border-b border-gray-200 ${(i + 1) % 3 !== 0 ? 'md:border-r border-gray-200' : ''} ${i >= 3 ? 'md:border-b-0' : ''} group overflow-hidden bg-white hover:bg-gray-50/30 transition-colors duration-500`}
            >
              {/* Matrix pattern for first element */}
              {i === 0 && (
                <div 
                  className="absolute inset-0 opacity-[0.02] pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.04]"
                  style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '16px 16px' }}
                />
              )}

              {/* Neon Glow Hover Effect from bottom */}
              <div 
                className={`absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t ${testi.glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl`}
              />
              <div 
                className={`absolute bottom-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                  i % 3 === 0 ? "bg-gradient-to-r from-transparent via-primary-orange to-transparent" : 
                  i % 3 === 1 ? "bg-gradient-to-r from-transparent via-primary-teal to-transparent" : 
                  "bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent"
                }`}
              />
              
              {/* Quote Content */}
              <Quote className="w-8 h-8 fill-current text-gray-100 absolute top-8 right-8 group-hover:text-primary-teal/20 transition-colors" />
              
              <div className="flex gap-1 mb-8 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 icon-neon-orange" />
                ))}
              </div>
              
              <p className="text-gray-500 font-sans text-base md:text-lg mb-8 leading-relaxed grow relative z-10 pr-6 group-hover:text-gray-700 transition-colors duration-300 italic">
                "{testi.quote}"
              </p>
              
              {/* User Identity Info */}
              <div className="flex items-center gap-4 mt-auto pt-6 relative z-10">
                <img 
                  src={testi.image} 
                  alt={testi.name}
                  className="w-12 h-12 rounded-full object-cover shadow-sm bg-gray-100 p-0.5 border border-gray-200"
                />
                <div>
                  <h4 className="text-primary-dark font-heading font-black text-base">{testi.name}</h4>
                  <p className="text-gray-400 font-sans text-xs font-semibold uppercase tracking-wider">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex justify-center relative w-full z-20"
        >
          <button 
            onClick={() => window.dispatchEvent(new Event('open-download-modal'))}
            className="flex items-center gap-2 px-8 py-3 rounded-full text-base font-bold shadow-lg transition-transform hover:-translate-y-1 btn-neon cursor-pointer"
          >
            Télécharger pour voir plus d'avis
            <span className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center text-[10px]">↓</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
