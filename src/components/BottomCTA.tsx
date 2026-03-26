"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function BottomCTA() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[400px] flex flex-col items-center justify-center p-8 text-center group">
          
          {/* Background Image & Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white mb-6 tracking-tight drop-shadow-md">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]">Vivez la Magie</span> de SwitchAppart Aujourd'hui
            </h2>
            <p className="text-white/90 text-sm md:text-base font-sans mb-10 max-w-lg drop-shadow">
              Découvrez des logements époustouflants, explorez des quartiers variés et rejoignez une communauté mondiale d'explorateurs modernes.
            </p>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('open-download-modal'));
              }}
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl btn-neon">
                <span className="font-bold text-xl">↓</span>
              </div>
              <span className="text-white text-sm font-bold uppercase tracking-widest mt-2 group-hover:text-[#00FFFF] transition-colors drop-shadow-md">Télécharger l'app</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
