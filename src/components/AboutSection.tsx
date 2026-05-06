"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section className="relative w-full py-24 bg-white/80 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Motif de fond sur toute la section */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)`,
        backgroundSize: '26px 26px',
        opacity: 0.6,
      }} />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-widest mb-5">
            À propos
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark leading-tight mb-4">
            Une app pensée pour{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]">
              ceux qui ne veulent plus chercher
            </span>
          </h2>
          <p className="text-gray-500 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
            Les meilleurs appartements ne sont pas sur le marché — ils sont déjà habités. Vous avez déjà ce que quelqu'un cherche. Et inversement.
          </p>
        </motion.div>

        {/* Video + cartes flottantes */}
        <div className="relative w-full flex justify-center items-center rounded-3xl overflow-hidden" style={{ minHeight: 520 }}>

          {/* Motif de fond */}
          <div className="absolute inset-0 rounded-3xl" style={{
            backgroundImage: `radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)`,
            backgroundSize: '28px 28px',
            opacity: 0.45,
          }} />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00BFFF]/5 via-transparent to-[#8A2BE2]/5" />

          {/* Carte grande — gauche */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="absolute left-0 top-6 hidden md:block w-52 bg-white/30 backdrop-blur-xl border border-white/50 rounded-3xl p-5 shadow-lg z-10 -rotate-2"
          >
            <p className="text-primary-dark font-bold text-sm mb-1">Smart Contracts</p>
            <p className="text-gray-500 text-xs leading-relaxed">Chaque échange est sécurisé et automatisé sans intermédiaire.</p>
          </motion.div>

          {/* Carte petite — gauche bas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="absolute left-4 bottom-10 hidden md:block w-36 bg-white/30 backdrop-blur-xl border border-white/50 rounded-2xl p-4 shadow-lg z-10 rotate-1"
          >
            <p className="text-2xl font-black text-primary-dark">0€</p>
            <p className="text-gray-500 text-xs mt-1">de frais d'agence</p>
          </motion.div>

          {/* Vidéo centrale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="relative w-[280px] sm:w-[340px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-black z-20"
          >
            <video
              ref={videoRef}
              src="/app-demo.mp4"
              loop
              playsInline
              controls
              className="w-full h-auto object-cover"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />
            <div
              onClick={togglePlay}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
            >
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl">
                {playing
                  ? <Pause className="w-5 h-5 text-white" />
                  : <Play className="w-5 h-5 text-white ml-1" />
                }
              </div>
            </div>
          </motion.div>

          {/* Carte petite — droite haut */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute right-4 top-4 hidden md:block w-40 bg-white/30 backdrop-blur-xl border border-white/50 rounded-2xl p-4 shadow-lg z-10 rotate-2"
          >
            <p className="text-2xl font-black text-primary-dark">50+</p>
            <p className="text-gray-500 text-xs mt-1">villes dans le monde</p>
          </motion.div>

          {/* Carte grande — droite bas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute right-0 bottom-6 hidden md:block w-56 bg-white/30 backdrop-blur-xl border border-white/50 rounded-3xl p-5 shadow-lg z-10 -rotate-1"
          >
            <div className="flex -space-x-2 mb-3">
              <img src="https://i.pravatar.cc/100?img=4" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
              <img src="https://i.pravatar.cc/100?img=5" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
              <img src="https://i.pravatar.cc/100?img=6" className="w-8 h-8 rounded-full border-2 border-white" alt="" />
              <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500">+</div>
            </div>
            <p className="text-primary-dark font-bold text-sm mb-1">Bêta privée</p>
            <p className="text-gray-500 text-xs">Rejoins les premiers utilisateurs</p>
          </motion.div>

        </div>

        {/* Bouton */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-10"
        >
          <button
            onClick={() => window.open("https://switchappart.app/", "_blank")}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-sm btn-neon"
          >
            En savoir plus
            <span className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center text-[10px] font-bold">↗</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
