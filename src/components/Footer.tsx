import Link from "next/link";
import { Mail, Share2, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white/80 border-t border-gray-200 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start gap-5">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="SwitchAppart Logo"
                className="h-10 w-auto object-contain drop-shadow-sm"
              />
              <span className="font-heading font-bold text-xl tracking-wider text-primary-dark">
                Switch<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] font-black">Appart</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm font-sans max-w-sm leading-relaxed">
              Plateforme d'échange de logements entre locataires. Trouvez un appartement compatible grâce à un système de matching intelligent avec validation des bailleurs.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:border-[#00BFFF] hover:text-[#00BFFF] transition-all text-gray-400">
                <Mail className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:border-[#8A2BE2] hover:text-[#8A2BE2] transition-all text-gray-400">
                <Share2 className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:border-primary-teal hover:text-primary-teal transition-all text-gray-400">
                <Globe className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-heading font-bold tracking-widest text-xs uppercase text-primary-dark mb-6">
              Entreprise
            </h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-gray-500 hover:text-[#00BFFF] text-sm transition-colors">À propos</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#00BFFF] text-sm transition-colors">Carrières</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#00BFFF] text-sm transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-[#00BFFF] text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-heading font-bold tracking-widest text-xs uppercase text-primary-dark mb-6">
              Légal
            </h4>
            <ul className="flex flex-col gap-3">
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
          <div className="flex gap-3">
            <span className="w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse shadow-sm" />
            <span className="w-2 h-2 rounded-full bg-[#8A2BE2] animate-pulse shadow-sm" style={{ animationDelay: "200ms" }} />
            <span className="w-2 h-2 rounded-full bg-primary-dark animate-pulse shadow-sm" style={{ animationDelay: "400ms" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
