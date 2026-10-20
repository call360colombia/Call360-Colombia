import ScrollReveal from "@/components/ScrollReveal";

interface GuaranteeCard {
  title: string;
  badge: string;
  points: string[];
  guaranteeText: string;
  colorClass: string;
  icon: React.ReactNode;
}

export default function GuaranteesSection() {
  const guarantees: GuaranteeCard[] = [
    {
      title: "CRM LLAMADAS",
      badge: "Garantía de Prueba",
      points: [
        "Demo real de 6 horas",
        "Acceso completo",
        "Minutos ilimitados"
      ],
      guaranteeText: "Si no te convence → no pagas",
      colorClass: "violet",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-violet-400">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
    {
      title: "CRM WHATSAPP",
      badge: "Prueba sin Riesgo",
      points: [
        "Prueba gratis 7 días",
        "Acceso completo",
        "Sin configuraciones ocultas"
      ],
      guaranteeText: "Sin riesgo",
      colorClass: "emerald",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      )
    },
    {
      title: "PÁGINAS WEB",
      badge: "Garantía de Satisfacción",
      points: [
        "Mockup antes de pagar",
        "Solo pagas si te gusta",
        "Luego se perfecciona"
      ],
      guaranteeText: "Solo pagas si te gusta",
      colorClass: "cyan",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: "MARKETING",
      badge: "Garantía de Retorno",
      points: [
        "Si no recuperas la inversión:",
        "→ devolvemos el dinero",
        "Transparencia total"
      ],
      guaranteeText: "Devolvemos la inversión si no hay retorno",
      colorClass: "amber",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#0a0a0f]">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              ⚡ COMPROMISO TOTAL
            </span>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Resultados antes de{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                cobrarte un solo peso
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
              Eliminamos todo el riesgo para tu negocio. Nos enfocamos en darte resultados medibles y demostrables desde el primer día.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item, i) => {
            let glowBorder = "";
            let accentText = "";
            let labelBg = "";

            if (item.colorClass === "violet") {
              glowBorder = "hover:border-violet-500/30 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.15)]";
              accentText = "text-violet-400";
              labelBg = "bg-violet-500/10 text-violet-300 border border-violet-500/20";
            } else if (item.colorClass === "emerald") {
              glowBorder = "hover:border-emerald-500/30 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]";
              accentText = "text-emerald-400";
              labelBg = "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20";
            } else if (item.colorClass === "cyan") {
              glowBorder = "hover:border-cyan-500/30 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)]";
              accentText = "text-cyan-400";
              labelBg = "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20";
            } else if (item.colorClass === "amber") {
              glowBorder = "hover:border-amber-500/30 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)]";
              accentText = "text-amber-400";
              labelBg = "bg-amber-500/10 text-amber-300 border border-amber-500/20";
            }

            return (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className={`group relative flex flex-col justify-between h-full rounded-2xl border border-white/[0.08] bg-[#12121a]/60 backdrop-blur-xl p-5 sm:p-8 transition-all duration-300 ${glowBorder} hover:-translate-y-2`}>
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${labelBg}`}>
                        {item.badge}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.04] transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-base font-black tracking-wide text-white">
                      {item.title}
                    </h3>

                    {/* Points */}
                    <ul className="space-y-3 mb-8">
                      {item.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-sm text-white/50">
                          <svg className={`mt-0.5 h-4 w-4 shrink-0 ${accentText}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlighted Guarantee */}
                  <div className="pt-4 border-t border-white/[0.06] mt-auto">
                    <p className={`text-sm font-bold leading-snug ${accentText}`}>
                      {item.guaranteeText}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Closing statement */}
        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
              “No vendemos promesas. Te damos resultados antes de cobrar.”
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
