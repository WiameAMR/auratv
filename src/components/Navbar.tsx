import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

function AuraTVLogo() {
  return (
    <div className="flex items-center gap-3">
  {/* Symbole boucle infinie néon */}
  <svg 
    width="38" 
    height="38" 
    viewBox="0 0 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="drop-shadow-[0_0_12px_rgba(0,242,254,0.55)]"
  >
    <defs>
      <linearGradient id="auratv-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00F2FE" />
        <stop offset="50%" stopColor="#4FACFE" />
        <stop offset="100%" stopColor="#9333EA" />
      </linearGradient>
    </defs>
    <path 
      d="M32 32C37.5 24 44 20 50 20C57 20 62 25.5 62 32C62 38.5 57 44 50 44C44 44 37.5 40 32 32ZM32 32C26.5 40 20 44 14 44C7 44 2 38.5 2 32C2 25.5 7 20 14 20C20 20 26.5 24 32 32Z" 
      stroke="url(#auratv-gradient)" 
      strokeWidth="5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
  
  {/* Typographie AuraTV */}
  <span className="text-2xl font-extrabold tracking-tight text-white font-sans">
    Aura<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#9333EA]">TV</span>
  </span>
</div>
  );
}

export function Navbar() {
  const navItems = [
    { label: "Fonctionnalités", href: "#features" },
    { label: "Appareils", href: "#devices" },
    { label: "Prix", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090D16]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#top" aria-label="Accueil AuraTV" className="flex items-center">
          <AuraTVLogo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/10"
          >
            Voir les plans
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#9333EA] px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.35)] transition hover:scale-[1.02]"
          >
            Commencer
            <ArrowRight size={16} />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 md:hidden"
        >
          <Menu size={18} />
        </button>
      </nav>
    </header>
  );
}
