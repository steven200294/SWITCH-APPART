"use client";

import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export function SplineSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] min-h-[500px] overflow-hidden bg-white/50 border-y border-gray-100">
      
      {/* 3D Scene (pointer-events-none empêche le blocage du défilement) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spline
          scene="https://prod.spline.design/Bs67rtoJFqwAvNJ3/scene.splinecode" 
        />
      </div>

      {/* Overlay Text Content */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-end pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/40 backdrop-blur-md px-8 py-6 rounded-3xl border border-white/60 shadow-xl max-w-2xl text-center pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-dark/5 text-primary-dark text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 shrink-0">
            <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse" /> Modèle 3D Exclusif
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-primary-dark mb-3">
            Le Logement de Demain
          </h2>
          <p className="text-gray-700 font-sans leading-relaxed mb-6">
            Découvrez cet environnement 3D qui illustre la dimension futuriste de notre plateforme immobilière SwitchAppart.
          </p>
          <button 
            onClick={() => window.open("https://switchappart.app/", "_blank")}
            className="flex items-center justify-center gap-2 px-6 py-2.5 mx-auto rounded-full text-sm font-bold shadow-lg transition-transform hover:-translate-y-1 btn-neon pointer-events-auto"
          >
            Découvrir l'application <span className="text-[10px] bg-white text-black px-1.5 py-0.5 rounded-full">→</span>
          </button>
        </motion.div>
      </div>

    </section>
  );
}
