import { Monitor, Smartphone, Tv, TabletSmartphone, LaptopMinimal, Play } from "lucide-react";
import type { Device } from "@/types";

const devices: Device[] = [
  { name: "Samsung Tizen", label: "Samsung Tizen", icon: "tv" },
  { name: "LG webOS", label: "LG webOS", icon: "lg" },
  { name: "Fire TV", label: "Fire TV Stick", icon: "fire" },
  { name: "Android", label: "Android TV / Box", icon: "android" },
  { name: "iOS", label: "iPhone / iPad", icon: "ios" },
  { name: "PC", label: "PC / Mac / Web", icon: "pc" },
];

const iconMap = {
  tv: Tv,
  lg: Monitor,
  fire: Play,
  android: TabletSmartphone,
  ios: Smartphone,
  pc: LaptopMinimal,
};

export function Devices() {
  return (
    <section id="devices" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Compatibilité universelle
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            IPTV Smart TV Samsung Tizen &amp; LG webOS, Fire TV Stick, Android, iOS et PC
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {devices.map(({ name, label, icon }) => {
            const Icon = iconMap[icon as keyof typeof iconMap];

            return (
              <div
                key={name}
                className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-[#111827]/80 p-5 backdrop-blur-md transition hover:border-cyan-400/30 hover:bg-[#111827]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
                  <Icon size={24} />
                </div>
                <div>
                  <div className="text-base font-semibold text-white">{label}</div>
                  <div className="text-sm text-slate-400">{name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
