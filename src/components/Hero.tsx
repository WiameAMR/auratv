import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Sparkles, Tv, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 lg:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,242,254,0.18),_transparent_26%),radial-gradient(circle_at_75%_10%,_rgba(147,51,234,0.18),_transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-200 shadow-[0_0_20px_rgba(0,242,254,0.16)]">
          <ShieldCheck size={16} className="text-cyan-300" />
          99.9% Uptime • 24/7 support
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="max-w-2xl text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
              Abonnement IPTV 4K Sans Coupure &amp; Streaming Haute Définition Anti-Freeze
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Profitez d&apos;une expérience TV premium avec +25 000 chaînes, VOD, sports,
              films et séries en 4K UHD. Compatible Smart TV, Fire TV Stick, iOS, Android,
              Android TV, PC et plus encore.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#9333EA] px-6 py-3.5 text-base font-semibold text-slate-950 shadow-[0_0_20px_rgba(0,242,254,0.35)] transition hover:scale-[1.02]"
              >
                Réserver mon accès
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
              >
                Voir les avantages
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Check size={16} className="text-cyan-300" /> Activation en 2 minutes
              </span>
              <span className="inline-flex items-center gap-2">
                <Check size={16} className="text-cyan-300" /> Sans coupure ni freeze
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-lg rounded-[32px] border border-white/10 bg-[#111827]/80 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-5">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Live Stream • 4K UHD
                </div>
                <div className="flex items-center gap-2 text-xs text-cyan-200">
                  <Zap size={14} /> Stable
                </div>
              </div>

              <div className=" rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(32,49,73,0.8),_rgba(9,13,22,1))] p-4 sm:p-5">
                <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                  <span>AuraTV TV</span>
                  <span>24/7</span>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.3fr_0.7fr]">
                  <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-violet-500/20 p-4">
                    <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
                      <span>Now Playing</span>
                      <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-[10px] text-emerald-300">
                        HD
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-28 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(0,242,254,0.15),rgba(147,51,234,0.15))] p-3">
                        <div className="flex h-full flex-col justify-between">
                          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-400">
                            <span>Live</span>
                            <span>4K</span>
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-white">Champion League</div>
                            <div className="text-xs text-slate-300">Match en direct</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span>0ms Freeze</span>
                        <span>99.9% Uptime</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="mb-2 flex items-center gap-2 text-xs text-slate-300">
                        <Tv size={14} className="text-cyan-300" /> TV & Smart
                      </div>
                      <div className="text-2xl font-bold text-white">25K+</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="mb-2 flex items-center gap-2 text-xs text-slate-300">
                        <Sparkles size={14} className="text-violet-300" /> VOD
                      </div>
                      <div className="text-2xl font-bold text-white">60K</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
