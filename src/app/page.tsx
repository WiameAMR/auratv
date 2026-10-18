import { Devices } from "@/components/Devices";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { SEOStructuredData } from "@/components/SEOStructuredData";
import { Stats } from "@/components/Stats";
import { Steps } from "@/components/Steps";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen bg-[#090D16] text-white">
      <SEOStructuredData faqItems={faqItems} />
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Devices />
      <Steps />
      <Pricing />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
