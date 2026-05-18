"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center pt-6 px-4 sm:px-6 lg:px-8 bg-gray-50 pb-20">
      {/* Huge Inset Image Container */}
      <div className="relative w-full max-w-[1400px] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-900 min-h-[90vh]">
        
        {/* Main Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Subtle top inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none" />

        {/* Content Inside the Image */}
        <div className="relative z-10 w-full h-full min-h-[90vh] flex flex-col justify-center sm:justify-start items-center px-4 pt-0 sm:pt-32 md:pt-40 lg:pt-48 pb-0 sm:pb-40 lg:pb-16">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-sans text-center tracking-tight max-w-4xl leading-tight text-white drop-shadow-lg"
          >
            Échange ton appart, <br/> <span className="text-white/90 font-light">trouve le bon.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-center max-w-lg px-4"
          >
            <p className="text-base sm:text-lg md:text-xl text-white font-medium mb-2 drop-shadow-md">
              Publie. Match. Échange.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-white/80 font-sans leading-relaxed drop-shadow mb-6">
              La première plateforme qui te connecte directement avec d'autres locataires pour échanger vos logements.
            </p>
            <button
              onClick={() => window.open("https://switchappart.app/", "_blank")}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold btn-neon"
            >
              Découvrir l'application <span className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center text-[10px]">→</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-6 left-4 sm:bottom-10 sm:left-10 md:left-20 max-w-[200px] sm:max-w-xs"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl text-white">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-primary-dark" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-primary-dark" />
                  <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-primary-dark" />
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shadow-md z-10 border-2 border-primary-dark">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 icon-neon" />
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-medium">Réservations</span>
              </div>
              <p className="text-[11px] sm:text-sm text-white/80 leading-relaxed hidden sm:block">
                L'art de changer d'adresse. Accédez à une nouvelle manière de déménager où chaque opportunité est soigneusement sélectionnée.
              </p>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
