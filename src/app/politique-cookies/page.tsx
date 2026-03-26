import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique des Cookies - SwitchAppart",
  description: "Explication de notre utilisation des cookies sur le site SwitchAppart.",
};

export default function PolitiqueCookies() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      <Navbar />
      
      {/* Short Dark Header to accommodate the floating white Navbar */}
      <section className="relative w-full pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900 flex flex-col items-center rounded-b-[3rem] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white tracking-tight mt-10 mb-4 text-center">
          Politique des Cookies
        </h1>
      </section>

      {/* Content */}
      <section className="w-full max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg text-gray-600 font-sans max-w-none">
          
          <p className="text-sm text-gray-400 mb-12 italic">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6">1. Qu'est-ce qu'un cookie ?</h2>
          <p className="mb-6">
            Un "cookie" (ou traceur) est un petit fichier texte déposé et lu par votre ordinateur, smartphone ou 
            tout autre appareil lors de la visite d'un site web. Il permet au site web de se "souvenir" de vos 
            actions et préférences (comme par exemple la langue choisie ou vos paramètres de consentement).
          </p>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">2. Les cookies que nous utilisons</h2>
          <p className="mb-8">
            Sur SwitchAppart, nous utilisons différents types de cookies pour des finalités précises :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-primary-dark mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span> Cookies Essentiels
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ces cookies sont techniquement indispensables à la navigation sur notre site et vous permettent 
                d'utiliser les fonctionnalités de base (ex: session d'authentification, préférences de cookies). 
                Ils ne peuvent pas être désactivés.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-primary-dark mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary-teal"></span> Cookies Analytiques
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Nous permettent de connaître l'utilisation et la performance de notre plateforme et d'en améliorer le 
                fonctionnement et l'ergonomie (ex: pages les plus consultées). Vous pouvez refuser ces cookies lors 
                de votre première connexion sans altérer la qualité du service.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-primary-dark mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary-orange"></span> Cookies de Personnalisation
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ces cookies sont utilisés pour adapter la présentation et les suggestions d'appartements en fonction 
                de vos précédentes recherches et de votre comportement sur le site.
              </p>
            </div>
          </div>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">3. Gestion de vos cookies</h2>
          <p className="mb-4">
            Lors de votre première visite sur SwitchAppart, un bandeau apparaît pour vous informer 
            de la présence de cookies et solliciter votre consentement pour ceux qui ne sont pas strictement nécessaires.
          </p>
          <p className="mb-6">
            Vous pouvez à tout moment modifier vos préférences via votre navigateur :
          </p>

          <ul className="list-disc pl-5 mb-8 space-y-2 text-sm text-gray-700">
            <li><strong>Google Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies.</li>
            <li><strong>Safari :</strong> Préférences &gt; Confidentialité &gt; Gérer les données de site web.</li>
            <li><strong>Firefox :</strong> Préférences &gt; Vie privée et sécurité &gt; Cookies et données de sites.</li>
          </ul>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">4. Contactez-nous</h2>
          <p className="mb-6">
            Si vous avez des questions concernant l'utilisation de vos cookies ou la confidentialité sur notre plateforme, 
            n'hésitez pas à nous envoyer un email à :
            <a href="mailto:contact.switchappart@gmail.com" className="text-primary-orange font-bold hover:underline block mt-2">
              contact.switchappart@gmail.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
