"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import FloatingLines from "./FloatingLines";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center pt-6 px-4 sm:px-6 lg:px-8 bg-gray-50 pb-20">
      {/* Huge Inset Image Container */}
      <div className="relative w-full max-w-[1400px] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-900 min-h-[90vh]">
        
        {/* Main Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[30s] hover:scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* FloatingLines overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={5}
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={false}
            parallax={false}
            linesGradient={["#00BFFF", "#8A2BE2"]}
            mixBlendMode="screen"
          />
        </div>
        
        {/* Subtle top inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none" />

        {/* Content Inside the Image */}
        <div className="relative z-10 w-full h-full min-h-[90vh] flex flex-col justify-start items-center px-4 pt-40 md:pt-48 lg:pt-56">
          


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium font-sans text-center tracking-tight max-w-4xl leading-tight text-white drop-shadow-lg"
          >
            Échange ton appart, <br/> <span className="text-white/90 font-light">trouve le bon.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-center max-w-xl px-4"
          >
            <p className="text-lg md:text-xl text-white font-medium mb-2 drop-shadow-md">
              Publie. Match. Échange.
            </p>
            <p className="text-sm md:text-base text-white/80 font-sans leading-relaxed drop-shadow mb-6">
              La première plateforme qui te connecte directement avec d'autres propriétaires pour échanger vos logements.
            </p>
            <button 
              onClick={() => window.dispatchEvent(new Event('open-download-modal'))}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-base font-bold btn-neon"
            >
              Télécharger l'application <span className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center text-[10px]">↓</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-10 left-10 md:left-20 max-w-xs"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl text-white">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-8 h-8 rounded-full border-2 border-primary-dark" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-8 h-8 rounded-full border-2 border-primary-dark" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-8 h-8 rounded-full border-2 border-primary-dark" />
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md z-10 border-2 border-primary-dark">
                  <Users className="w-4 h-4 icon-neon" />
                </div>
                </div>
                <span className="text-xs font-medium">Personnes Réservées</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Voyagez dans des villes époustouflantes avec des échanges d'appartements soigneusement sélectionnés.
              </p>
            </div>
          </motion.div>

          {/* Overlapping Vertical Image Cards on Bottom Right */}
          <div className="absolute bottom-10 right-10 md:right-20 hidden lg:flex gap-4 items-end">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-40 h-56 rounded-2xl overflow-hidden relative shadow-2xl group cursor-pointer border-2 border-white/20"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pb-3">
                <p className="text-white font-medium text-sm">Loft Parisien</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-44 h-64 rounded-2xl overflow-hidden relative shadow-2xl group cursor-pointer border-2 border-white/20"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pb-3">
                <p className="text-white font-medium text-sm">Studio New-Yorkais</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-40 h-56 rounded-2xl overflow-hidden relative shadow-2xl group cursor-pointer border-2 border-white/20"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pb-3">
                <p className="text-white font-medium text-sm">Suite Tokyoïte</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
