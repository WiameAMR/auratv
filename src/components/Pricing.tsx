"use client";

import { Check, Star } from "lucide-react";
import { useState } from "react";
import type { Plan } from "@/types";

const plans: Plan[] = [
  {
    id: "3mois",
    name: "3 mois",
    description: "Idéal pour tester la qualité du service.",
    monthlyPrice: 12.99,
    annualPrice: 9.99,
    features: [
      "+25 000 chaînes en HD/FULL HD/4K",
      "Accès VOD à 60k titres",
      "Support standard",
      "Compatibilité multi-appareils",
    ],
  },
  {
    id: "6mois",
    name: "6 mois",
    description: "Le meilleur équilibre pour un usage régulier.",
    monthlyPrice: 9.99,
    annualPrice: 7.49,
    badge: "Populaire",
    highlight: true,
    features: [
      "Accès complet +25 000 chaînes",
      "4K HDR + anti-freeze premium",
      "Guide EPG et replay",
      "Support prioritaire",
    ],
  },
  {
    id: "12mois",
    name: "12 mois",
    description: "Le plan le plus rentable pour une expérience premium.",
    monthlyPrice: 7.99,
    annualPrice: 5.99,
    badge: "Recommandé",
    highlight: true,
    features: [
      "Tarif mensuel le plus avantageux",
      "Serveurs stables 99.9% uptime",
      "Multi-écrans + activation rapide",
      "Support VIP 24/7",
    ],
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Les plans AuraTV
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Choisissez l’abonnement IPTV 4K stable adapté à vos besoins
          </h2>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-white/10 bg-[#111827]/80 p-1">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                !isAnnual ? "bg-white text-slate-950" : "text-slate-300"
              }`}
            >
              Mensuel
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isAnnual ? "bg-white text-slate-950" : "text-slate-300"
              }`}
            >
              Annuel
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[30px] border p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] ${
                plan.highlight
                  ? "border-cyan-400/50 bg-gradient-to-b from-[#111827] to-[#0f172a]"
                  : "border-white/10 bg-[#111827]/80"
              }`}
            >
              {plan.badge ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#9333EA] px-3 py-1 text-xs font-semibold text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                  {plan.badge}
                </div>
              ) : null}

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                {plan.highlight ? <Star size={18} className="text-cyan-300" /> : null}
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-300">{plan.description}</p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-black tracking-[-0.06em] text-white">
                  €{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="pb-1 text-sm text-slate-400">/mois</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
                      <Check size={14} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#9333EA] text-slate-950 shadow-[0_0_20px_rgba(0,242,254,0.35)]"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Choisir {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
