import { Clapperboard, Shield, Tv, MonitorSmartphone } from "lucide-react";
import type { Feature } from "@/types";

const features: Feature[] = [
  {
    title: "Anti-Freeze",
    description: "Réseau optimisé en buffer intelligent pour un streaming stable sans coupure et sans latence sur vos chaînes préférées.",
    icon: "shield",
  },
  {
    title: "4K HDR Ultra HD",
    description: "Qualité visuelle immersive avec encodage HDR, image nette et couleurs ultra-vives sur Smart TV et Fire TV Stick.",
    icon: "tv",
  },
  {
    title: "Guide EPG complet",
    description: "Navigation fluide, guide des programmes et accès rapide à la programmation TV, films, sports et séries.",
    icon: "clapperboard",
  },
  {
    title: "Multi-écrans",
    description: "Profitez d’un accès simultané sur plusieurs appareils avec un profil utilisateur rapide et sécuritaire.",
    icon: "monitor",
  },
];

const iconMap = {
  shield: Shield,
  tv: Tv,
  clapperboard: Clapperboard,
  monitor: MonitorSmartphone,
};

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Avantages premium
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Tout pour un streaming fluide, net et sans interruption
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ title, description, icon }) => {
            const Icon = iconMap[icon as keyof typeof iconMap];

            return (
              <article
                key={title}
                className="rounded-[26px] border border-white/10 bg-[#111827]/80 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur-md"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-cyan-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
