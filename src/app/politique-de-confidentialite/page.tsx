import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité - SwitchAppart",
  description: "Politique de confidentialité et traitement des données personnelles de SwitchAppart.",
};

export default function PolitiqueConfidentialite() {
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
          Politique de confidentialité
        </h1>
      </section>

      {/* Content */}
      <section className="w-full max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg text-gray-600 font-sans max-w-none">
          
          <p className="text-sm text-gray-400 mb-12 italic">Dernière mise à jour : 19/06/2025</p>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6">1. Responsable du traitement</h2>
          <p className="mb-4">Le responsable du traitement des données personnelles est :</p>
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-10">
            <p className="font-bold text-gray-900 mb-2">SWITCHAPPART</p>
            <p className="mb-1 text-sm">SAS au capital social variable</p>
            <p className="mb-1 text-sm">SIREN : 987 898 095</p>
            <p className="mb-1 text-sm">ETG 3 APP GAUCHE, 30 RUE TROUILLET - DEREL</p>
            <p className="mb-4 text-sm">92600 ASNIÈRES-SUR-SEINE</p>
            <p className="text-sm">Email : <a href="mailto:contact.switchappart@gmail.com" className="text-primary-orange hover:underline font-medium">contact.switchappart@gmail.com</a></p>
          </div>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">2. Données collectées</h2>
          <p className="mb-6">Dans le cadre de l'utilisation de notre site web et de nos services, nous collectons les données personnelles suivantes :</p>
          
          <h3 className="text-gray-900 font-bold text-lg mb-3 mt-8">2.1 Inscription à la newsletter / Liste d'attente</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2 text-md">
            <li>Adresse email</li>
            <li>Date et heure d'inscription</li>
            <li>Adresse IP (pour des raisons de sécurité)</li>
          </ul>

          <h3 className="text-gray-900 font-bold text-lg mb-3 mt-8">2.2 Données de navigation</h3>
          <ul className="list-disc pl-5 mb-10 space-y-2 text-md">
            <li>Adresse IP</li>
            <li>Type de navigateur et version</li>
            <li>Système d'exploitation</li>
            <li>Pages visitées et durée de visite</li>
            <li>Données de géolocalisation approximative (ville/région)</li>
          </ul>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">3. Finalités du traitement</h2>
          <p className="mb-6">Nous utilisons vos données personnelles pour les finalités suivantes :</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-primary-orange mb-3">Newsletter et communication</h4>
              <p className="text-sm mb-2"><span className="font-bold text-gray-800">Finalité :</span> Vous tenir informé du lancement de la plateforme, des nouvelles fonctionnalités et actualités</p>
              <p className="text-sm"><span className="font-bold text-gray-800">Base légale :</span> Consentement (Art. 6.1.a du RGPD)</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-primary-teal mb-3">Amélioration du service</h4>
              <p className="text-sm mb-2"><span className="font-bold text-gray-800">Finalité :</span> Analyser l'utilisation du site pour améliorer l'expérience utilisateur</p>
              <p className="text-sm"><span className="font-bold text-gray-800">Base légale :</span> Intérêt légitime (Art. 6.1.f du RGPD)</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm md:col-span-2">
              <h4 className="font-bold text-primary-dark mb-3">Sécurité</h4>
              <p className="text-sm mb-2"><span className="font-bold text-gray-800">Finalité :</span> Prévenir la fraude et assurer la sécurité de la plateforme</p>
              <p className="text-sm"><span className="font-bold text-gray-800">Base légale :</span> Intérêt légitime (Art. 6.1.f du RGPD)</p>
            </div>
          </div>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">4. Durée de conservation</h2>
          <ul className="list-none space-y-4 mb-10 text-md">
            <li className="flex gap-3"><span className="text-primary-orange font-bold">✓</span> <span className="text-gray-700"><strong>Adresses email :</strong> Conservées jusqu'à votre désinscription ou pendant 3 ans maximum en l'absence d'interaction</span></li>
            <li className="flex gap-3"><span className="text-primary-orange font-bold">✓</span> <span className="text-gray-700"><strong>Données de navigation :</strong> 13 mois maximum</span></li>
            <li className="flex gap-3"><span className="text-primary-orange font-bold">✓</span> <span className="text-gray-700"><strong>Logs de sécurité :</strong> 1 an maximum</span></li>
          </ul>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">5. Destinataires des données</h2>
          <p className="mb-4">Vos données personnelles peuvent être partagées avec :</p>
          <ul className="list-disc pl-5 mb-10 space-y-4">
            <li><strong>Personnel autorisé de SwitchAppart :</strong> Pour la gestion technique et commerciale</li>
            <li>
              <strong>Prestataires techniques :</strong>
              <ul className="list-[circle] pl-5 mt-3 space-y-2 text-sm text-gray-500">
                <li>Vercel (hébergement du site web)</li>
                <li>Services d'envoi d'emails (à définir)</li>
                <li>Outils d'analyse (Google Analytics, etc.)</li>
              </ul>
            </li>
            <li><strong>Autorités compétentes :</strong> En cas d'obligation légale</li>
          </ul>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">6. Transferts hors UE</h2>
          <p className="mb-10 leading-relaxed">Certains de nos prestataires peuvent être situés en dehors de l'Union européenne. Dans ce cas, nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types, décisions d'adéquation de la Commission européenne).</p>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">7. Vos droits</h2>
          <p className="mb-6">Conformément au RGPD, vous disposez des droits suivants :</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:border-gray-300">
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2"><span className="text-primary-teal text-lg">✓</span> Droit d'accès</h4>
              <p className="text-sm text-gray-500">Connaître les données que nous traitons vous concernant</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:border-gray-300">
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2"><span className="text-primary-teal text-lg">✓</span> Droit de rectification</h4>
              <p className="text-sm text-gray-500">Corriger les données inexactes ou incomplètes</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:border-gray-300">
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2"><span className="text-primary-teal text-lg">✓</span> Droit à l'effacement</h4>
              <p className="text-sm text-gray-500">Supprimer vos données dans certaines conditions</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:border-gray-300">
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2"><span className="text-primary-teal text-lg">✓</span> Droit à la portabilité</h4>
              <p className="text-sm text-gray-500">Récupérer vos données dans un format lisible</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:border-gray-300">
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2"><span className="text-primary-teal text-lg">✓</span> Droit d'opposition</h4>
              <p className="text-sm text-gray-500">Vous opposer au traitement de vos données</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:border-gray-300">
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-2"><span className="text-primary-teal text-lg">✓</span> Droit de limitation</h4>
              <p className="text-sm text-gray-500">Limiter le traitement dans certains cas</p>
            </div>
          </div>

          <div className="p-8 bg-primary-dark text-white rounded-[2rem] mb-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <h4 className="font-heading font-bold text-2xl mb-4 relative z-10">Comment exercer vos droits ?</h4>
            <p className="mb-6 text-white/90 relative z-10 leading-relaxed text-lg">Pour exercer ces droits, contactez-nous à : <a href="mailto:contact.switchappart@gmail.com" className="text-primary-orange font-bold hover:underline">contact.switchappart@gmail.com</a></p>
            <p className="text-sm text-white/60 relative z-10 pt-4 border-t border-white/10">Nous vous répondrons dans un délai maximum de 1 mois. Une pièce d'identité pourra être demandée pour vérifier votre identité.</p>
          </div>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">8. Cookies et technologies similaires</h2>
          <p className="mb-6">Notre site utilise des cookies pour améliorer votre expérience :</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <strong className="block text-gray-900 mb-2">Cookies techniques (obligatoires)</strong>
              <span className="text-sm text-gray-600">Nécessaires au fonctionnement du site</span>
            </div>
            <div className="flex-1 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <strong className="block text-gray-900 mb-2">Cookies analytiques</strong>
              <span className="text-sm text-gray-600">Pour analyser l'utilisation du site (avec votre consentement)</span>
            </div>
          </div>
          <p className="mb-10 text-sm italic text-gray-400">Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté de leur présence.</p>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">9. Sécurité des données</h2>
          <p className="mb-10 leading-relaxed">Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.</p>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">10. Réclamation</h2>
          <p className="mb-6">Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d'introduire une réclamation auprès de la CNIL :</p>
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm mb-10 w-fit">
            <p className="font-bold text-gray-900 text-lg mb-3">CNIL</p>
            <p className="mb-1 text-gray-600">3 Place de Fontenoy - TSA 80715</p>
            <p className="mb-1 text-gray-600">75334 PARIS CEDEX 07</p>
            <p className="mb-3 text-gray-600">Tél : 01 53 73 22 22</p>
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-orange font-medium hover:underline">
              Visiter le site web de la CNIL ↗
            </a>
          </div>

          <h2 className="text-primary-dark font-heading font-bold text-2xl border-b border-gray-200 pb-2 mb-6 mt-12">11. Modifications</h2>
          <p className="mb-10 leading-relaxed">Cette politique de confidentialité peut être modifiée à tout moment. Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour. Pour les modifications importantes, nous vous en informerons par email si vous êtes inscrits à notre liste.</p>

        </div>
      </section>

      <Footer />
    </main>
  );
}
