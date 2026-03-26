"use client";

import { motion } from "framer-motion";

export function KeyExchangeBanner() {
  return (
    <section className="w-full relative overflow-hidden bg-[#0A0A0A] py-16 md:py-24 border-y border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-gray-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              Connexion Humaine
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight mb-6">
              L'Échange de Clés, <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]">La Clé de la Liberté</span>
            </h2>
            
            <p className="text-gray-400 font-sans text-lg leading-relaxed mb-8 max-w-lg">
              Rencontrez la personne avec qui vous échangez votre logement ou utilisez notre réseau certifié de boîtes à clés sécurisées. SwitchAppart remet l'humain et la confiance absolue au centre du voyage. Transformez un simple échange en une expérience inoubliable !
            </p>
            
            <button 
              onClick={() => window.dispatchEvent(new Event('open-download-modal'))}
              className="flex items-center gap-2 px-8 py-3 rounded-full text-base font-bold shadow-[0_0_15px_rgba(0,191,255,0.4)] transition-transform hover:-translate-y-1 btn-neon cursor-pointer"
            >
              Rejoindre le Réseau
              <span className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center text-[10px]">↓</span>
            </button>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
          >
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00BFFF]/20 to-[#8A2BE2]/20 mix-blend-overlay group-hover:opacity-100 opacity-60 transition-opacity z-10 pointer-events-none" />
            
            <img 
              src="/key-exchange.png" 
              alt="Échange de clés d'appartement" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
