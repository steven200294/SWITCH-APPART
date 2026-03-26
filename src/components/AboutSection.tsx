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
    <section className="w-full py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

        {/* Left — Video */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-[280px] sm:w-[320px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-black">
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
            {/* Play/Pause overlay */}
            <div onClick={togglePlay} className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}>
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl">
                {playing
                  ? <Pause className="w-6 h-6 text-white" />
                  : <Play className="w-6 h-6 text-white ml-1" />
                }
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-widest">
              À propos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary-dark leading-tight mb-6"
          >
            Une app pensée pour{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]">
              les vrais voyageurs
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-sans text-base md:text-lg leading-relaxed mb-8"
          >
            SwitchAppart repense la façon dont vous voyagez. Publiez votre logement, trouvez un match, et échangez directement avec d'autres propriétaires — sans frais d'agence, sans intermédiaire, en toute confiance grâce aux smart contracts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => window.dispatchEvent(new Event('open-download-modal'))}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full font-bold text-sm btn-neon"
            >
              En savoir plus
              <span className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center text-[10px] font-bold">↗</span>
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
