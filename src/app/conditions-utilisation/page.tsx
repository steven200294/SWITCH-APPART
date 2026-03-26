import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation - SwitchAppart",
  description: "Conditions générales d'utilisation de la plateforme SwitchAppart.",
};

export default function ConditionsUtilisation() {
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
          Conditions d'Utilisation
        </h1>
      </section>

      {/* Content */}
      <section className="w-full max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg text-gray-600 font-sans max-w-none">
          
          <p className="text-sm text-gray-400 mb-12 italic">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6">1. Objet</h2>
          <p className="mb-6">
            Les présentes Conditions Générales d'Utilisation (ci-après les "CGU") ont pour objet de définir les règles d'accès 
            et d'utilisation de la plateforme SwitchAppart. La navigation sur ce site implique l'acceptation sans réserve 
            des présentes CGU par tout internaute (ci-après l'"Utilisateur").
          </p>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">2. Accès au service</h2>
          <p className="mb-4">
            L'accès à la plateforme SwitchAppart est gratuit. Toutefois, l'utilisation des services d'échange de 
            logements peut être soumise à inscription et, le cas échéant, à certaines vérifications d'identité via des contrats intelligents (smart-contracts).
          </p>
          <p className="mb-8">
            L'Utilisateur devra s'assurer qu'il dispose des prérequis techniques (connexion internet, équipement approprié) 
            pour accéder à nos services de façon optimale. SwitchAppart ne saurait être tenue responsable en cas de difficultés d'accès.
          </p>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">3. Obligations de l'Utilisateur</h2>
          <p className="mb-4">
            Dans le cadre de l'utilisation de SwitchAppart, l'Utilisateur s'engage à :
          </p>
          <ul className="list-disc pl-5 mb-8 space-y-2">
            <li>Fournir des informations exactes lors de la création de son profil et des descriptions de logement.</li>
            <li>Respecter les lois en vigueur concernant la sous-location, la location et l'échange de biens immobiliers dans son pays.</li>
            <li>Ne pas publier de contenus haineux, diffamatoires, trompeurs ou inappropriés.</li>
            <li>Maintenir la stricte confidentialité de ses identifiants de compte.</li>
          </ul>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">4. Modalités de fonctionnement des échanges</h2>
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-8">
            <h4 className="font-bold text-gray-900 mb-2">Les Smart-Contracts</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              SwitchAppart se présente comme un tiers de confiance technique. Les échanges (swaps) validés entre utilisateurs sont 
              enregistrés via notre protocole décentralisé (smart contracts) garantissant la fiabilité des accords de dates et d'identités.
              Néanmoins, SwitchAppart décline toute responsabilité en cas de dégradations matérielles survenant durant un échange physique, 
              qui reste sous l'entière responsabilité civile des parties concernées.
            </p>
          </div>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">5. Limitations de responsabilité</h2>
          <p className="mb-6">
            SwitchAppart met tout en œuvre pour assurer la disponibilité du service 24h/24 et 7j/7. Cependant, une interruption 
            pour maintenance technique ou mises à jour peut survenir. La société ne peut être tenue responsable d'éventuels 
            dommages consécutifs à l'indisponibilité du site.
          </p>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">6. Droit applicable</h2>
          <p className="mb-6">
            Les présentes CGU sont soumises à la loi française. En cas de litige n'ayant pu faire l'objet d'un accord à 
            l'amiable, les tribunaux français seront seuls compétents pour en connaître, sous réserve d'une attribution 
            de compétence impérative.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}
