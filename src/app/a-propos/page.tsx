import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle, Clock, Scale, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "À propos | SwitchAppart",
  description: "Découvrez notre mission : fluidifier la mobilité résidentielle en France avec le matching réciproque de logements.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-gray-50 font-sans overflow-x-hidden pt-6">
      <Navbar />
      
      {/* Hero Section Container (Mimicking Hero.tsx inset dark box) */}
      <section className="relative w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative w-full max-w-[1400px] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-900 min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center">
          
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2000&q=80" 
            alt="Intérieur d'appartement élégant"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />

          {/* Dark Overlay & Subtle top inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0A0B1E]/90 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8A2BE2] rounded-full blur-[180px] opacity-30 transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00BFFF] rounded-full blur-[180px] opacity-30 transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

          <div className="relative z-10 w-full px-4 sm:px-8 pt-32 pb-16 md:pt-40 md:pb-20 text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium font-sans text-center tracking-tight max-w-4xl leading-tight text-white drop-shadow-lg mb-8">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] font-bold drop-shadow-[0_0_8px_rgba(0,191,255,0.6)]">SwitchAppart</span>
               <br/><span className="text-white/90 font-light">La révolution du marché locatif</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-sans leading-relaxed drop-shadow mb-8 max-w-3xl mx-auto">
              Échangez définitivement votre logement sans frais d'agence, grâce à notre algorithme de matching réciproque intelligent et notre modèle circulaire unique.
            </p>
          </div>

        </div>
      </section>

      {/* Stats / Problem Section (Light Mode matching features container) */}
      <section className="relative w-full bg-white/80 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 aspect-square md:aspect-[4/3] w-full group">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Documentation et contraintes de location"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl border border-gray-100 max-w-[280px]">
                  <p className="text-primary-dark font-heading font-black text-lg md:text-xl leading-tight">La fin du parcours du combattant</p>
                </div>
              </div>
            </div>
            
            {/* Text Side */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#8A2BE2]/10 text-[#8A2BE2] font-bold text-xs mb-6 uppercase tracking-wider border border-[#8A2BE2]/20">Le Constat</div>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-heading font-black text-primary-dark mb-6 leading-tight">
                Un Marché Locatif <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]">Bloqué</span>
              </h2>
              <p className="text-gray-500 font-sans text-lg md:text-xl mb-12 leading-relaxed">
                Le système locatif français souffre de rigidités structurelles qui pénalisent massivement les locataires et créent un stress incessant. La mobilité résidentielle ne devrait plus être un problème.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-[#8A2BE2]/10 flex items-center justify-center flex-shrink-0 text-[#8A2BE2] font-heading font-black text-2xl border border-[#8A2BE2]/20 group-hover:bg-[#8A2BE2]/20 transition-colors">
                    42%
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-black text-primary-dark mb-2">De la population locataire</h3>
                    <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Près de 16 millions de locataires en France font face à des obstacles majeurs lorsqu'ils souhaitent changer de logement.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-[#00BFFF]/10 flex items-center justify-center flex-shrink-0 text-[#00BFFF] font-heading font-black text-2xl border border-[#00BFFF]/20 group-hover:bg-[#00BFFF]/20 transition-colors">
                    90+
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-black text-primary-dark mb-2">Jours de recherche</h3>
                    <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Des délais interminables créant des doubles loyers, des opportunités manquées et une immense tension administrative.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-[#8A2BE2]/10 flex items-center justify-center flex-shrink-0 text-[#8A2BE2] font-heading font-black text-2xl border border-[#8A2BE2]/20 group-hover:bg-[#8A2BE2]/20 transition-colors">
                    1450€
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-black text-primary-dark mb-2">Coût moyen de relocation</h3>
                    <p className="text-gray-500 text-base lg:text-lg leading-relaxed">Un budget incluant les frais d'agence (souvent équivalents à un mois de loyer), les dépôts multiples et le déménagement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (mimicking Features grid layout & glowing lines) */}
      <section className="relative w-full bg-gray-50 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-24">
             <div className="inline-block px-4 py-1.5 rounded-full bg-[#00BFFF]/10 text-[#00BFFF] font-bold text-xs mb-6 uppercase tracking-wider border border-[#00BFFF]/20">L'Innovation</div>
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-heading font-black text-primary-dark mb-6 leading-tight">
              Notre Solution : <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]">L'Échange Réciproque</span>
            </h2>
            <p className="text-gray-500 font-sans text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              <strong>Chaque locataire qui cherche un logement en occupe déjà un</strong>. En organisant les échanges, nous créons une liquidité immédiate.
            </p>
          </div>
          
          <div className="w-full grid grid-cols-1 md:grid-cols-2 border-y border-gray-200 bg-white">
            
            <div className="relative p-8 md:p-12 lg:p-16 flex flex-col h-full border-b border-gray-200 md:border-b-0 md:border-r group overflow-hidden bg-white hover:bg-gray-50/30 transition-colors duration-500">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
              
              <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#00BFFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl" />
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="w-14 h-14 bg-[#00BFFF]/10 text-[#00BFFF] rounded-2xl flex items-center justify-center mb-8 border border-[#00BFFF]/20 relative z-10 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-[28px] font-heading font-black text-primary-dark mb-4 leading-snug relative z-10">Matching Intelligent</h3>
              <p className="text-gray-500 font-sans text-base lg:text-lg leading-relaxed relative z-10">
                Notre algorithme analyse plus de 25 critères pertinents (géolocalisation, profil, surface, timing, dossier...) pour identifier les correspondances optimales et vous attribuer un score de compatibilité exclusif.
              </p>
            </div>
            
            <div className="relative p-8 md:p-12 lg:p-16 flex flex-col h-full group overflow-hidden bg-white hover:bg-gray-50/30 transition-colors duration-500">
               <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#8A2BE2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl" />
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="w-14 h-14 bg-[#8A2BE2]/10 text-[#8A2BE2] rounded-2xl flex items-center justify-center mb-8 border border-[#8A2BE2]/20 relative z-10 transition-transform duration-300 group-hover:scale-110">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-[28px] font-heading font-black text-primary-dark mb-4 leading-snug relative z-10">Le Modèle SwitchPass</h3>
              <p className="text-gray-500 font-sans text-base lg:text-lg leading-relaxed mb-4 relative z-10">
                <strong>Gratuité totale</strong> si vous acceptez de céder votre logement actuel à la communauté sans exiger de match réciproque immédiat.
              </p>
              <p className="text-gray-500 font-sans text-base lg:text-lg leading-relaxed relative z-10">
                Une option <strong>Premium (99€)</strong> existe pour ceux sans logement à proposer ou souhaitant une priorité d'accès absolue.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Landlords Section (Asymmetrical Premium Layout) */}
      <section className="relative w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 pb-32">
        <div className="relative w-full max-w-[1400px] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-900 group">
          <div className="absolute inset-0 bg-[#0A0B1E] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8A2BE2] rounded-full blur-[200px] opacity-10 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10 w-full p-8 sm:p-12 md:p-16 lg:p-20">
            
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              
              {/* Left Side: Text and Points */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-5xl lg:text-[50px] font-heading font-black text-white mb-6 leading-tight">
                  L'Équilibre Idéal pour les <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2]">Bailleurs</span>
                </h2>
                <p className="text-lg md:text-xl text-white/70 font-sans leading-relaxed mb-12">
                  SwitchAppart ne supprime pas le rôle du bailleur, mais optimise radicalement son processus de sélection avec sérénité.
                </p>

                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-bold text-white mb-2">Sélection Épurée</h4>
                      <p className="text-white/60 text-base lg:text-lg leading-relaxed">Le bailleur reçoit de 1 à 3 dossiers hyper pré-qualifiés (revenus garantis, garants) correspondant à 100% à ses critères.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="mt-1 flex-shrink-0">
                      <Clock className="w-8 h-8 text-[#8A2BE2]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-bold text-white mb-2">Gain de Temps -80%</h4>
                      <p className="text-white/60 text-base lg:text-lg leading-relaxed">Fini la gestion administrative de 200 candidatures. Le bailleur choisit parmi les dossiers validés via notre plateforme sécurisée.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="mt-1 flex-shrink-0">
                      <Scale className="w-8 h-8 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-bold text-white mb-2">Décision Intacte</h4>
                      <p className="text-white/60 text-base lg:text-lg leading-relaxed">Le propriétaire conserve 100% de son pouvoir décisionnel, approuvant la cession de bail ou non en toute connaissance de cause.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="mt-1 flex-shrink-0">
                      <ShieldCheck className="w-8 h-8 text-[#8A2BE2]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-bold text-white mb-2">Cadre Sécurisé</h4>
                      <p className="text-white/60 text-base lg:text-lg leading-relaxed">Signature électronique selon le droit locatif français pour une promesse de cession ou un nouveau bail, offrant une protection totale.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Showcase Images */}
              <div className="w-full lg:w-1/2 relative hidden lg:block">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 border border-white/10 group-hover:border-white/20 transition-colors duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Intérieur d'appartement premium"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                  
                  {/* Floating Element */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-[#00BFFF]/20 flex items-center justify-center border border-[#00BFFF]/30">
                         <CheckCircle className="w-6 h-6 text-[#00BFFF]" />
                       </div>
                       <div>
                         <p className="text-white font-bold text-base">Dossier pré-qualifié</p>
                         <p className="text-white/60 text-sm">Revenus vérifiés, garants solides</p>
                       </div>
                    </div>
                  </div>
                </div>
                
                {/* Secondary offset image */}
                <div className="absolute -left-16 top-24 w-56 aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#0A0B1E] z-20">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Remise de clés"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
