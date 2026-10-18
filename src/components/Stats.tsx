const stats = [
  { value: "25 000+", label: "Chaînes" },
  { value: "60k", label: "VOD" },
  { value: "0ms", label: "Freeze" },
  { value: "24/7", label: "Support" },
];

export function Stats() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-[28px] border border-white/10 bg-[#111827]/75 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <div className="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
