import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://AuraTV.fr"),
  title: "AuraTV | Meilleur Abonnement Streaming 4K Stable & Anti-Freeze",
  description:
    "Découvrez AuraTV : +25 000 chaînes & VOD en 4K UHD sans coupure. Compatible Smart TV, Firestick, iOS & Android. Serveurs rapides 99.9% uptime.",
  applicationName: "AuraTV",
  keywords: [
    "Abonnement IPTV 4K Sans Coupure",
    "Streaming Haute Définition Anti-Freeze",
    "IPTV Smart TV Samsung Tizen & LG webOS",
    "Configuration Fire TV Stick sans freeze",
    "Lecteur M3U Ultra HD 60fps",
    "Serveurs Stables 99.9% Uptime",
  ],
  alternates: {
    canonical: "https://AuraTV.fr",
  },
  openGraph: {
    title: "AuraTV | Meilleur Abonnement Streaming 4K Stable & Anti-Freeze",
    description:
      "Profitez de +25 000 chaînes & VOD en 4K UHD sans coupure. Compatible Smart TV, Firestick, iOS & Android. Serveurs rapides 99.9% uptime. Activation en 2 min !",
    type: "website",
    url: "https://AuraTV.fr",
    siteName: "AuraTV",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "AuraTV abonnement IPTV 4K stable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraTV | Meilleur Abonnement Streaming 4K Stable & Anti-Freeze",
    description:
      "Profitez de +25 000 chaînes & VOD en 4K UHD sans coupure. Compatible Smart TV, Firestick, iOS & Android. Serveurs rapides 99.9% uptime. Activation en 2 min !",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090D16",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#090D16] text-white">{children}</body>
    </html>
  );
}
