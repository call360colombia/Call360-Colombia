import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceLeadForm from "@/components/ServiceLeadForm";

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Telefonía y CRM de llamadas",
    features: [
      "Minutos ilimitados a todo Colombia",
      "Marcación predictiva inteligente",
      "Grabación automática de llamadas",
      "Supervisión en tiempo real",
    ],
    href: "/crm-llamadas",
    linkLabel: "Ver CRM Llamadas",
    gradient: "from-violet-500/15 to-purple-500/5",
    borderHover: "hover:border-violet-500/30",
    iconColor: "text-violet-400",
    glowColor: "hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.12)]",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    title: "Gestión de WhatsApp",
    features: [
      "Múltiples asesores, un solo número",
      "Campañas masivas ilimitadas",
      "Respuestas automatizadas",
      "Historial centralizado por cliente",
    ],
    href: "/crm-whatsapp",
    linkLabel: "Ver CRM WhatsApp",
    gradient: "from-emerald-500/15 to-green-500/5",
    borderHover: "hover:border-emerald-500/30",
    iconColor: "text-emerald-400",
    glowColor: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.12)]",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Atracción de prospectos",
    features: [
      "Página web profesional en 72 horas",
      'Sección "Trabaja con nosotros" para reclutamiento',
      "Marketing digital para atraer clientes calificados",
      "SEO y posicionamiento en Google",
    ],
    href: "/paginas-web",
    linkLabel: "Ver Páginas Web",
    gradient: "from-cyan-500/15 to-blue-500/5",
    borderHover: "hover:border-cyan-500/30",
    iconColor: "text-cyan-400",
    glowColor: "hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.12)]",
  },
];

export default function CallCenterSpotlight() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-violet-500/[0.06] to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
              📞 Cliente ideal
            </span>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Si eres un Call Center,{" "}
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                resolvemos casi toda tu operación
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/50 leading-relaxed md:text-lg">
              La mayoría de Call Centers contratan entre 4 y 6 proveedores distintos para operar.
              Con Call360, reduces eso a un solo proveedor con todo integrado.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pillars */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 120}>
              <div
                className={`group relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#12121a] p-7 transition-all duration-400 ${pillar.borderHover} ${pillar.glowColor} hover:-translate-y-1`}
              >
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.06] ${pillar.iconColor} transition-transform duration-300 group-hover:scale-110`}
                  >
                    {pillar.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-lg font-black text-white">
                    {pillar.title}
                  </h3>

                  {/* Features */}
                  <ul className="mb-6 flex-1 space-y-2.5">
                    {pillar.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-white/55">
                        <svg
                          className={`mt-0.5 h-4 w-4 shrink-0 ${pillar.iconColor}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link to detail page */}
                  <Link
                    href={pillar.href}
                    className={`mt-auto inline-flex items-center gap-2 text-sm font-bold ${pillar.iconColor} transition-all group-hover:gap-3`}
                  >
                    <span>{pillar.linkLabel}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Cost comparison callout */}
        <ScrollReveal delay={300}>
          <div className="mt-12 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-violet-500/[0.06] via-[#12121a] to-cyan-500/[0.06] p-8 text-center md:p-10">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="text-2xl font-black text-white/30 line-through decoration-red-400/60 decoration-2">
                $2.800.000+/mes
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Desde $350.000/mes
              </span>
            </div>
            <p className="mx-auto max-w-lg text-sm text-white/50 leading-relaxed">
              Un Call Center promedio paga a varios proveedores por separado. Con Call360, toda la operación integrada cuesta hasta un 80% menos.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <ServiceLeadForm
                service="integrado"
                triggerLabel="Cotizar para mi Call Center"
                triggerVariant="violet"
                triggerClassName="text-sm px-6 py-3"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
