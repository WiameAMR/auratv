import type { FAQItem } from "@/types";

interface SEOProps {
  faqItems: FAQItem[];
}

export function SEOStructuredData({ faqItems }: SEOProps) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "AuraTV Abonnement",
      image: [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      ],
      description:
        "Abonnement IPTV 4K Sans Coupure avec +25 000 chaînes, VOD et streaming anti-freeze pour Smart TV, Fire TV Stick, iOS et Android.",
      brand: {
        "@type": "Brand",
        name: "AuraTV",
      },
      category: "Streaming / IPTV",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1420",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "9.99",
        lowPrice: "9.99",
        highPrice: "59.99",
        availability: "https://schema.org/InStock",
        url: "https://AuraTV.fr",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
