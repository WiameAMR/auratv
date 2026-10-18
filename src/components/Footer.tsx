import Link from "next/link";
import { ShieldCheck, Smartphone, CreditCard } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090D16] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#00F2FE] to-[#9333EA] text-lg font-black text-slate-950 shadow-[0_0_20px_rgba(0,242,254,0.3)]">
                A
              </div>
              <div>
                <div className="text-lg font-semibold text-white">AuraTV</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              AuraTV vous offre un abonnement IPTV premium, stable, anti-freeze et compatible avec Smart TV, Fire TV Stick, Android, iOS et PC.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Liens utiles</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link href="#features" className="hover:text-white">Fonctionnalités</Link></li>
              <li><Link href="#pricing" className="hover:text-white">Prix</Link></li>
              <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="#devices" className="hover:text-white">Appareils</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Légal</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-white">Mentions légales</Link></li>
              <li><Link href="#" className="hover:text-white">CGV</Link></li>
              <li><Link href="#" className="hover:text-white">Politique de confidentialité</Link></li>
              <li><Link href="#" className="hover:text-white">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-400">
            © 2026 AuraTV. Tous droits réservés.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-cyan-300" /> Paiement sécurisé
            </span>
            <span className="inline-flex items-center gap-2">
              <Smartphone size={16} className="text-cyan-300" /> Activation rapide
            </span>
            <span className="inline-flex items-center gap-2">
              <CreditCard size={16} className="text-cyan-300" /> CB / PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
