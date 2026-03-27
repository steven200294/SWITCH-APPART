"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Des Matchs Sur Mesure : Trouvez le Logement Idéal",
    desc: "Découvrez comment notre algorithme intelligent analyse vos critères pour vous proposer des échanges parfaitement adaptés à vos envies de mobilité.",
  },
  {
    title: "Zéro Frais Inutiles : Déménagez Sans Vous Ruiner",
    desc: "Pas d'agence. Pas de frais cachés. Juste un échange de bail entre locataires, validé par les bailleurs et propriétaires.",
  },
  {
    title: "Sérénité Garantie : Contrats et Sécurité Inclus",
    desc: "Explorez le monde l'esprit tranquille. Nos contrats automatisés et notre système de vérification d'identité sécurisent chaque étape de votre échange.",
  },
];

export function Features({ id = "features" }: { id?: string }) {
  return (
    <section id={id} className="relative w-full bg-white/80 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* The aesthetic 3-column grid mimicking the provided screenshot structurally but matching light theme natively */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 border-y border-gray-200">
          {features.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative p-8 md:p-12 lg:p-16 flex flex-col h-full border-b border-gray-200 md:border-b-0 ${i !== 2 ? 'md:border-r border-gray-200' : ''} group overflow-hidden bg-white hover:bg-gray-50/30 transition-colors duration-500`}
            >
              {/* Subtle dotted matrix pattern specifically for the first box to match structure */}
              {i === 0 && (
                <div 
                  className="absolute inset-0 opacity-[0.02] pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.04]"
                  style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '16px 16px' }}
                />
              )}

              {/* Bottom Glow Gradients adjusted for light mode */}
              <div 
                className={`absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t ${
                  i === 0 ? "from-primary-orange/10" : i === 1 ? "from-primary-teal/10" : "from-[#8A2BE2]/10"
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl`}
              />
              <div 
                className={`absolute bottom-0 left-0 w-full h-[3px] ${
                  i === 0 ? "bg-gradient-to-r from-transparent via-primary-orange to-transparent" : 
                  i === 1 ? "bg-gradient-to-r from-transparent via-primary-teal to-transparent" : 
                  "bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />
              
              {/* Content */}
              <h3 className="text-xl md:text-2xl lg:text-[26px] font-heading font-black text-primary-dark mb-6 relative z-10 leading-snug">
                {item.title}
              </h3>
              
              <p className="text-gray-500 font-sans text-base lg:text-lg leading-relaxed relative z-10 transition-colors duration-300 group-hover:text-gray-700">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
