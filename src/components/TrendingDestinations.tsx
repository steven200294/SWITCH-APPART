"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin } from "lucide-react";

const destinations = [
  {
    name: "Neo Tokyo",
    country: "Japan",
    rating: "4.9",
    price: "$14k",
    imgUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "magenta",
  },
  {
    name: "Cyber Seoul",
    country: "South Korea",
    rating: "4.8",
    price: "$12k",
    imgUrl: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "cyan",
  },
  {
    name: "Night City NYC",
    country: "United States",
    rating: "4.7",
    price: "$20k",
    imgUrl: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "blue",
  },
];

export function TrendingDestinations({ id = "destinations" }: { id?: string }) {
  return (
    <section id={id} className="relative w-full py-24 bg-background-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-teal tracking-[0.2em] text-xs font-bold uppercase mb-3"
            >
              Trending Right Now
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold text-primary-dark"
            >
              Top Urban Hubs
            </motion.h2>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors shadow-md btn-neon"
          >
            Voir toutes les destinations <ArrowRight className="w-4 h-4 icon-neon" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-gray-900 border border-white/10 hover:border-primary-blue/50 transition-colors"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                style={{ backgroundImage: `url(${dest.imgUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/50 to-transparent" />

              {/* Tag / Location Badge */}
              <div className="absolute top-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span className="text-white text-xs font-bold uppercase tracking-wider">{dest.country}</span>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2 tracking-tight">
                      {dest.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                           <Star key={j} className={`w-3.5 h-3.5 ${j < 4 || (j===4 && dest.rating === '4.9') ? 'fill-primary-orange text-primary-orange' : 'text-white/30'} drop-shadow-md`} />
                        ))}
                      </div>
                      <span className="text-xs font-bold tracking-widest">{dest.rating}</span>
                    </div>
                  </div>
                </div>
                
                {/* Expandable Action Area */}
                <div className="overflow-hidden h-0 group-hover:h-14 transition-all duration-300 opacity-0 group-hover:opacity-100 ease-in-out mt-0 group-hover:mt-2">
                  <button className="w-full h-12 rounded-xl font-heading font-bold text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2 btn-neon">
                    Voir les logements <MapPin className="w-4 h-4 icon-neon" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
