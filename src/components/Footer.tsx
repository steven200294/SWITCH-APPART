import Link from "next/link";
import { Home, Mail, Share2, Globe, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white/80 border-t border-gray-200 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <img 
              src="/logo.png" 
              alt="SwitchAppart Logo" 
              className="h-12 w-auto object-contain mb-4 drop-shadow-sm"
            />
              <span className="font-heading font-bold text-xl tracking-wider text-primary-dark">
                Switch<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] font-black">Appart</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm font-sans max-w-xs leading-relaxed">
              Plateforme décentralisée d'échange de logements pour nomades modernes et explorateurs urbains.
              Échangez des appartements en toute sécurité grâce aux smart contracts.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all icon-neon">
                <Home className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all icon-neon">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all icon-neon">
                <Share2 className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold tracking-widest text-sm uppercase text-primary-dark mb-6">
              Entreprise
            </h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-gray-500 hover:text-primary-teal text-sm transition-colors">À propos</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary-teal text-sm transition-colors">Carrières</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary-teal text-sm transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary-teal text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold tracking-widest text-sm uppercase text-primary-dark mb-6">
              Légal
            </h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/mentions-legales" className="text-gray-500 hover:text-primary-dark text-sm transition-colors">Mentions légales</Link></li>
              <li><Link href="/conditions-utilisation" className="text-gray-500 hover:text-primary-dark text-sm transition-colors">Conditions d'utilisation</Link></li>
              <li><Link href="/politique-de-confidentialite" className="text-gray-500 hover:text-primary-dark text-sm transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/politique-cookies" className="text-gray-500 hover:text-primary-dark text-sm transition-colors">Politique des cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} SwitchAppart Inc. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse shadow-sm" />
            <span className="w-2 h-2 rounded-full bg-primary-teal animate-pulse shadow-sm" style={{ animationDelay: "200ms" }} />
            <span className="w-2 h-2 rounded-full bg-primary-dark animate-pulse shadow-sm" style={{ animationDelay: "400ms" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
