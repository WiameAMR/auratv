import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Link
        href="https://wa.me/212679937754"
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-[0_0_25px_rgba(37,211,102,0.45)] transition hover:scale-105"
        aria-label="Contact WhatsApp"
      >
        <MessageCircleMore size={22} />
        <span className="absolute -left-16 top-1/2 -translate-y-1/2 rounded-full border border-emerald-400/20 bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-emerald-200 shadow-lg backdrop-blur-sm">
          En ligne
        </span>
      </Link>
    </div>
  );
}
