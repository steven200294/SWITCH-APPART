"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleOpenModal = () => setShowDownloadModal(true);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("open-download-modal", handleOpenModal);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-download-modal", handleOpenModal);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300 backdrop-blur-md border rounded-full px-4 sm:px-6 ${
        isScrolled 
          ? "bg-white/90 border-gray-200 shadow-lg text-primary-dark" 
          : "bg-white/10 border-white/20 text-white"
      }`}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="SwitchAppart Logo" 
              className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
            />
            <span className={`font-heading font-bold text-xl tracking-wide hidden sm:block ${isScrolled ? "text-primary-dark" : "text-white"}`}>
              Switch<span className={isScrolled ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] font-bold" : "text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] font-bold drop-shadow-[0_0_8px_rgba(0,191,255,0.6)]"}>Appart</span>
            </span>
          </Link>

          {/* Desktop Links (Pill Inside Pill) */}
          <div className={`hidden md:flex items-center space-x-2 rounded-full px-4 py-1.5 border backdrop-blur-sm transition-colors duration-300 ${
            isScrolled ? "bg-gray-100/80 border-gray-200" : "bg-white/10 border-white/10"
          }`}>
            <Link href="#about" className={`text-sm font-medium px-4 py-1 rounded-full transition-colors ${isScrolled ? "text-primary-dark hover:bg-white shadow-sm" : "text-white hover:bg-white/20"}`}>
              À propos
            </Link>
            <Link href="#careers" className={`text-sm font-medium px-4 py-1 rounded-full transition-colors ${isScrolled ? "text-gray-500 hover:text-primary-dark hover:bg-white" : "text-white/80 hover:text-white hover:bg-white/20"}`}>
              Carrières
            </Link>
            <Link href="/contact" className={`text-sm font-medium px-4 py-1 rounded-full transition-colors ${isScrolled ? "text-gray-500 hover:text-primary-dark hover:bg-white" : "text-white/80 hover:text-white hover:bg-white/20"}`}>
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowDownloadModal(true);
              }}
              className="flex items-center justify-center px-5 py-1.5 font-medium rounded-full text-sm btn-neon"
            >
              <span>Télécharger</span>
              <span className={`ml-2 w-5 h-5 rounded-full flex items-center justify-center text-xs ${isScrolled ? "bg-white/20 text-white" : "bg-white text-primary-dark"}`}>↓</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${isScrolled ? "text-primary-dark hover:text-primary-orange" : "text-white hover:text-gray-200"}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-2xl mt-2 overflow-hidden shadow-xl"
            >
              <div className="px-4 py-4 space-y-1">
                <Link href="#about" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md">
                  À propos
                </Link>
                <Link href="#careers" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md">
                  Carrières
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 rounded-md">
                  Contact
                </Link>
                <div className="pt-4 flex flex-col gap-3">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      setShowDownloadModal(true);
                    }}
                    className="w-full text-center px-4 py-2 rounded-full font-medium flex items-center justify-center gap-2 btn-neon"
                  >
                    Télécharger <span className="text-xs">↓</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Download Modal */}
      <AnimatePresence>
        {showDownloadModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDownloadModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-lg shadow-2xl flex flex-col items-center text-center overflow-hidden"
            >
              <button 
                onClick={() => setShowDownloadModal(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
                title="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-dark mb-3">
                Bientôt disponible
              </h3>
              <p className="text-gray-500 mb-8 font-sans text-base md:text-lg">
                L'application SwitchAppart arrive très prochainement sur vos appareils mobiles !
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                {/* App Store Button */}
                <button disabled className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl opacity-75 cursor-not-allowed w-full sm:w-auto btn-neon">
                  <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM208.1 140.2c35.4-31.6 43.1-68.2 40.8-105.7-27.4 2.8-63.5 17.8-82.8 38.3-25.2 26.6-43.1 68.2-39.7 101.4 31.8 0 54.4-14.4 81.7-34z"/></svg>
                  <div className="text-left flex flex-col justify-center leading-none">
                    <span className="text-[10px] uppercase font-bold text-white/70 tracking-wider">Télécharger sur</span>
                    <span className="text-base font-medium">App Store</span>
                  </div>
                </button>

                {/* Google Play Button */}
                <button disabled className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl opacity-75 cursor-not-allowed w-full sm:w-auto btn-neon">
                  <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                  <div className="text-left flex flex-col justify-center leading-none">
                    <span className="text-[10px] uppercase font-bold text-white/70 tracking-wider">Disponible sur</span>
                    <span className="text-base font-medium">Google Play</span>
                  </div>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
