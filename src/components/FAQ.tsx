"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FAQItem } from "@/types";

const faqItems: FAQItem[] = [
  {
    question: "Comment fonctionne l’abonnement IPTV AuraTV ?",
    answer:
      "AuraTV propose un accès instantané à +25 000 chaînes et 60k VOD. Vous recevez votre code d’activation en quelques minutes, puis vous installez le service sur votre Smart TV, Fire TV Stick, Android, iOS ou PC pour regarder en 4K UHD sans coupure.",
  },
  {
    question: "Est-ce compatible avec Samsung Tizen et LG webOS ?",
    answer:
      "Oui, le service est entièrement compatible avec Samsung Tizen, LG webOS, Android TV, Fire TV Stick, iOS, Android et PC. La configuration est simple et optimisée pour un accès ultra stable.",
  },
  {
    question: "Que faire si j’ai un problème de freeze ou de buffering ?",
    answer:
      "AuraTV utilise des serveurs stables avec technologie anti-freeze et optimisation du buffering. Si vous rencontrez un souci, notre support 24/7 vous aide rapidement à vérifier votre configuration et le meilleur serveur disponible.",
  },
  {
    question: "Puis-je utiliser le service sur plusieurs appareils ?",
    answer:
      "Oui, selon le plan choisi, vous pouvez utiliser l’abonnement sur plusieurs appareils. La solution est pensée pour le streaming familial ou multilogiciel avec une expérience fluide et sécurisée.",
  },
  {
    question: "La livraison est-elle instantanée ?",
    answer:
      "Oui. Après votre paiement, vous recevez votre code d’activation immédiatement. La mise en place se fait généralement en moins de 2 minutes selon votre appareil.",
  },
  {
    question: "Le service inclut-il les chaînes sportives et les films ?",
    answer:
      "Oui. L’abonnement comprend les chaînes sportives, les films, les séries, les documentaires et la VOD en qualité 4K UHD, avec un guide EPG pour organiser votre programme facilement.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Questions fréquentes
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Tout ce qu’il faut savoir avant de souscrire
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-[24px] border border-white/10 bg-[#111827]/80 backdrop-blur-md"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base font-semibold text-white sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                {isOpen ? (
                  <div className="border-t border-white/10 px-5 py-5 text-sm leading-7 text-slate-300 sm:px-6">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
