"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xzdkjjgk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Une erreur est survenue, veuillez réessayer.");
      }
    } catch {
      alert("Une erreur est survenue, veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-20 md:py-24 bg-white/80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 text-center"
      >
        <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#00BFFF] mb-5">
          Lancement bientôt
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-primary-dark mb-5 leading-snug">
          Ne manquez pas le départ
        </h2>
        <p className="text-gray-500 font-sans text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed">
          Inscrivez-vous pour un accès prioritaire au lancement de SwitchAppart.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="w-full flex-1 px-6 py-4 rounded-full border border-gray-200 bg-gray-50 text-primary-dark placeholder:text-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-[#00BFFF]/40 focus:border-[#00BFFF] transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 rounded-full text-base font-bold btn-neon whitespace-nowrap"
            >
              {loading ? "..." : "Je m'inscris"}
            </button>
          </form>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary-teal font-semibold"
          >
            ✓ Merci ! Vous serez notifié en priorité.
          </motion.p>
        )}

        <p className="mt-6 text-sm text-gray-400">
          Pas de spam. Désinscription en un clic.
        </p>
      </motion.div>
    </section>
  );
}
