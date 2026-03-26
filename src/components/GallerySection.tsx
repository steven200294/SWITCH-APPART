"use client";

import { motion } from "framer-motion";

export function GallerySection() {
  const images = [
    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-64", mt: "mt-0" },
    { src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-80", mt: "mt-12" },
    { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-96", mt: "mt-0" },
    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-80", mt: "mt-12" },
    { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", height: "h-64", mt: "mt-0" },
  ];

  return (
    <section className="w-full py-24 bg-gray-50 flex flex-col items-center px-4 sm:px-6 lg:px-8">
      
      {/* Intro Text */}
      <div className="flex flex-col items-center max-w-3xl text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-gray-500 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
        >
          <span>Confort Absolu</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] font-black">Moments</span> <span className="text-gray-400 font-light">Inoubliables au <br/> Cœur de la Ville</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-base md:text-lg max-w-2xl font-sans"
        >
          Découvrez des appartements époustouflants, explorez des quartiers animés et créez des souvenirs dans l'une des destinations les plus emblématiques du monde.
        </motion.p>
      </div>

      {/* Staggered Vertical Gallery */}
      <div className="w-full max-w-6xl relative flex justify-center items-start gap-4 md:gap-6 overflow-x-auto pb-10 px-4 snap-x">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative min-w-[200px] w-full max-w-[240px] rounded-3xl overflow-hidden shadow-lg group snap-center ${img.mt} ${img.height} shrink-0`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${img.src}')` }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="mt-8 flex justify-center w-full relative z-20"
      >
        <button 
          onClick={() => window.dispatchEvent(new Event('open-download-modal'))}
          className="flex items-center gap-2 px-8 py-3 rounded-full text-base font-bold shadow-lg transition-transform hover:-translate-y-1 btn-neon cursor-pointer"
        >
          Télécharger pour voir plus de logements
          <span className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center text-[10px]">↓</span>
        </button>
      </motion.div>

    </section>
  );
}
