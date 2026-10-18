// src/components/Pricing.tsx
import React from 'react';
import { Check, ShieldCheck, Zap, MessageCircle } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  popular?: boolean;
  features: string[];
}

const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Pack Découverte',
    duration: '3 Mois',
    price: '24.99 €',
    features: [
      '+25 000 Chaînes FHD / 4K',
      '+60 000 Films & Séries VOD',
      'Anti-Freeze intelligent',
      'Guide TV (EPG) interactif',
      'Compatible tous écrans',
      'Assistance à l’installation'
    ]
  },
  {
    id: 'popular',
    name: 'Pack Élite',
    duration: '12 Mois',
    price: '59.99 €',
    popular: true,
    features: [
      'Tout le catalogue 4K / Ultra HD',
      'Serveurs VIP Ultra-Stables (99.9%)',
      'Support prioritaire WhatsApp 24/7',
      'Mises à jour automatiques VOD',
      'Garantie sans interruption',
      'Offre la plus économique'
    ]
  },
  {
    id: 'standard',
    name: 'Pack Sérénité',
    duration: '6 Mois',
    price: '39.99 €',
    features: [
      '+25 000 Chaînes FHD / 4K',
      '+60 000 Films & Séries VOD',
      'Technologie Anti-Coupure',
      'Guide électronique des programmes',
      'Assistance réactive 7j/7',
      'Activation en 2 minutes'
    ]
  }
];

export function Pricing() {
  // REMPLACEZ CE NUMÉRO PAR VOTRE VRAI NUMÉRO (avec l'indicatif pays, sans espaces ni le signe +)
  // Exemple Maroc : "212612345678" | Exemple France : "33612345678"
  const WHATSAPP_NUMBER = "212679937754";

  // Fonction pour construire l'URL WhatsApp avec message pré-rempli
  const getWhatsAppLink = (plan: PricingPlan) => {
    const message = `Bonjour AuraTV 👋, je souhaite commander le *${plan.name}* (${plan.duration}) à *${plan.price}*. Pouvez-vous m'indiquer la marche à suivre pour l'activation ?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pricing" className="py-24 bg-[#090D16] text-white relative">
      {/* Halo lumineux d'arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00F2FE]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00F2FE] font-semibold text-xs sm:text-sm tracking-widest uppercase">
            Nos Abonnements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Des formules flexibles, sans engagement
          </h2>
          <p className="text-gray-400 mt-4 text-base">
            Commandez en 1 clic via WhatsApp. Réception instantanée de vos codes d&apos;accès et support dédié.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#111827] border-[#00F2FE] shadow-[0_0_35px_rgba(0,242,254,0.2)] md:scale-105 z-10'
                  : 'bg-[#0E131F] border-gray-800 hover:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#9333EA] text-white text-[11px] font-extrabold uppercase tracking-widest py-1 px-4 rounded-full shadow-lg flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 fill-white" /> Recommandé
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <span className="text-gray-400 text-sm">{plan.duration}</span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white tracking-tight">
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3.5 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-[#00F2FE] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppLink(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3.5 rounded-xl text-center font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#9333EA] text-white shadow-[0_0_15px_rgba(0,242,254,0.4)] hover:brightness-110'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Commander sur WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center flex items-center justify-center gap-2 text-sm text-gray-400">
          <ShieldCheck className="w-5 h-5 text-[#00F2FE]" />
          <span>Activation immédiate • Assistance 7j/7 sur votre application</span>
        </div>
      </div>
    </section>
  );
}