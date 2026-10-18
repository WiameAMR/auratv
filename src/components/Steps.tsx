const steps = [
  {
    number: "01",
    title: "Choisissez votre plan",
    description: "Sélectionnez l’offre adaptée à votre usage streaming, famille ou multi-appareils.",
  },
  {
    number: "02",
    title: "Recevez votre code instantané",
    description: "Activation rapide en quelques minutes, sans démarche complexe ni délai de livraison.",
  },
  {
    number: "03",
    title: "Profitez du streaming sans coupure",
    description: "Accédez à vos chaînes, films, sports et VOD en 4K UHD sur tous vos appareils.",
  },
];

export function Steps() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Démarrage rapide
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            3 étapes simples pour commencer
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-[28px] border border-white/10 bg-[#111827]/80 p-6 shadow-[0_22px_48px_rgba(0,0,0,0.25)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#9333EA] text-lg font-black text-slate-950 shadow-[0_0_20px_rgba(0,242,254,0.4)]">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
