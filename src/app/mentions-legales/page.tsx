import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales - SwitchAppart",
  description: "Mentions légales et informations de la société SwitchAppart.",
};

export default function MentionsLegales() {
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
          Mentions Légales
        </h1>
      </section>

      {/* Content */}
      <section className="w-full max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg text-gray-600 font-sans max-w-none">
          
          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6">Informations légales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-gray-900 font-bold mb-1 text-sm uppercase tracking-wider">Dénomination sociale</h3>
              <p className="mb-4">SWITCHAPPART</p>

              <h3 className="text-gray-900 font-bold mb-1 text-sm uppercase tracking-wider">Forme juridique</h3>
              <p className="mb-4">SAS (Société par Actions Simplifiée)</p>

              <h3 className="text-gray-900 font-bold mb-1 text-sm uppercase tracking-wider">SIREN</h3>
              <p className="mb-4">987 898 095</p>

              <h3 className="text-gray-900 font-bold mb-1 text-sm uppercase tracking-wider">SIRET du siège social</h3>
              <p className="mb-4">987 898 095 00011</p>
            </div>
            
            <div>
              <h3 className="text-gray-900 font-bold mb-1 text-sm uppercase tracking-wider">N° TVA Intracommunautaire</h3>
              <p className="mb-4">FR44 987 898 095</p>

              <h3 className="text-gray-900 font-bold mb-1 text-sm uppercase tracking-wider">Adresse du siège social</h3>
              <p className="mb-4 leading-relaxed">
                ETG 3 APP GAUCHE<br/>
                30 RUE TROUILLET - DEREL<br/>
                92600 ASNIÈRES-SUR-SEINE<br/>
                France
              </p>
            </div>
          </div>

          <h2 className="text-primary-dark font-heading font-bold text-xl mb-3 mt-10">Directeur de la publication</h2>
          <p className="mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100">Le directeur de la publication est le représentant légal de la société SwitchAppart.</p>

          <h2 className="text-primary-dark font-heading font-bold text-xl mb-3 mt-10">Hébergement</h2>
          <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="mb-2">Ce site est hébergé par Vercel Inc.</p>
            <p className="text-sm">
              340 S Lemon Ave #4133<br/>
              Walnut, CA 91789<br/>
              États-Unis
            </p>
          </div>

          <h2 className="text-primary-dark font-heading font-bold text-xl mb-3 mt-10">Contact</h2>
          <p className="mb-12">
            Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à :<br/>
            <a href="mailto:contact.switchappart@gmail.com" className="text-primary-orange font-medium hover:underline transition-colors mt-2 inline-block">
              contact.switchappart@gmail.com
            </a>
          </p>

          <h2 className="text-primary-dark font-heading font-bold text-xl border-b border-gray-200 pb-2 mb-6 mt-16">Propriété intellectuelle</h2>
          <p className="mb-4">
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p className="mb-12">
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>

          <h2 className="text-primary-dark font-heading font-bold text-xl border-b border-gray-200 pb-2 mb-6 mt-12">Limitation de responsabilité</h2>
          <p className="mb-4">
            Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
            mais peut toutefois contenir des inexactitudes ou des omissions.
          </p>
          <p className="mb-6">
            Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email 
            à l'adresse mentionnée ci-dessus, en décrivant le problème de la manière la plus précise possible.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}
