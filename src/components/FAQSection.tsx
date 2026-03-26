"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "C'est légal ?",
    answer: "Oui, tant que c'est fait avec accord du bailleur ou via contrat d'échange.",
  },
  {
    question: "C'est pour les locataires seulement ?",
    answer: "Non, aussi pour les colocataires et sous-locataires !",
  },
  {
    question: "C'est déjà dispo ?",
    answer: "Pas encore, mais tu peux t'inscrire pour faire partie de la bêta privée !",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            FAQ
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary-dark leading-tight"
          >
            Vous avez{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]">
              des questions ?
            </span>
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col divide-y divide-gray-100 border-y border-gray-100">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className={`text-lg font-heading font-bold transition-colors duration-300 ${openIndex === i ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]" : "text-primary-dark group-hover:text-gray-600"}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ml-4 ${openIndex === i ? "bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"}`}>
                  {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-500 font-sans text-base leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
