"use client";

interface CaseStudy {
  vertical: string;
  emoji: string;
  business: string;
  city: string;
  results: { value: string; label: string }[];
  quote: string;
  author: string;
  accent: "cyan" | "emerald" | "violet" | "amber";
}

const CASES: CaseStudy[] = [
  {
    vertical: "Clínica Odontológica",
    emoji: "🦷",
    business: "Clínica Sonrisa Bogotá",
    city: "Bogotá",
    results: [
      { value: "+42%", label: "Citas agendadas" },
      { value: "3.1x", label: "Más cierres" },
      { value: "60 días", label: "Para ver resultados" },
    ],
    quote:
      "Pasamos de agendar por WhatsApp personal a tener 3 asesores respondiendo desde el mismo número. Las campañas masivas nos llenan la agenda.",
    author: "Dra. Camila R. · Directora",
    accent: "cyan",
  },
  {
    vertical: "Red de Barberías",
    emoji: "💈",
    business: "Barber Club Chapinero",
    city: "Bogotá · 2 sedes",
    results: [
      { value: "+85%", label: "Reservas online" },
      { value: "-12h", label: "Tiempo de respuesta" },
      { value: "9.2/10", label: "Satisfacción cliente" },
    ],
    quote:
      "El CRM de llamadas con marcación predictiva nos contactó clientes de la base vieja que estaban dormidos. Recuperamos $14M en 2 meses.",
    author: "Carlos M. · Propietario",
    accent: "violet",
  },
  {
    vertical: "Restaurante",
    emoji: "🍽️",
    business: "Sabor Paisa Medellín",
    city: "Medellín",
    results: [
      { value: "+28%", label: "Pedidos a domicilio" },
      { value: "1.500", label: "Contactos/semana" },
      { value: "1 semana", label: "Implementación" },
    ],
    quote:
      "Antes perdíamos pedidos porque nadie respondía rápido. Ahora el sistema marca automáticamente a clientes que pidieron los domingos y vuelven el siguiente.",
    author: "Andrés P. · Gerente",
    accent: "emerald",
  },
];

const accentMap: Record<CaseStudy["accent"], { from: string; to: string; border: string; bg: string; text: string }> = {
  cyan: {
    from: "from-cyan-500/20",
    to: "to-blue-500/10",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
    text: "text-cyan-400",
  },
  emerald: {
    from: "from-emerald-500/20",
    to: "to-green-500/10",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    text: "text-emerald-400",
  },
  violet: {
    from: "from-violet-500/20",
    to: "to-purple-500/10",
    border: "border-violet-500/30",
    bg: "bg-violet-500/5",
    text: "text-violet-400",
  },
  amber: {
    from: "from-amber-500/20",
    to: "to-orange-500/10",
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
    text: "text-amber-400",
  },
};

interface TestimonialsWithResultsProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  cases?: CaseStudy[];
}

export default function TestimonialsWithResults({
  title = "Casos reales con resultados medibles",
  subtitle = "Empresas colombianas que ya están vendiendo más con Call360.",
  ctaLabel = "Quiero resultados como estos",
  ctaHref = "https://wa.me/573203693949?text=Hola%20Call360%2C%20quiero%20resultados%20como%20los%20de%20sus%20casos%20de%20%C3%A9xito",
  cases = CASES,
}: TestimonialsWithResultsProps) {
  return (
    <section>
      <div className="mb-12 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
          ✨ Resultados reales
        </span>
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          {title.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
            {title.split(" ").slice(-2).join(" ")}
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-white/50">{subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((c) => {
          const accent = accentMap[c.accent];
          return (
            <div
              key={c.business}
              className={`group relative overflow-hidden rounded-2xl border ${accent.border} bg-gradient-to-b ${accent.from} ${accent.to} p-6 transition-all hover:scale-[1.02]`}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="text-3xl">{c.emoji}</div>
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider ${accent.text}`}>
                    {c.vertical}
                  </div>
                  <div className="text-sm font-black text-white">{c.business}</div>
                  <div className="text-[11px] text-white/40">{c.city}</div>
                </div>
              </div>

              <div className="mb-4 grid grid-cols-3 gap-2 border-y border-white/[0.06] py-4">
                {c.results.map((r) => (
                  <div key={r.label} className="text-center">
                    <div className={`text-xl font-black ${accent.text}`}>{r.value}</div>
                    <div className="mt-0.5 text-[10px] text-white/50 leading-tight">{r.label}</div>
                  </div>
                ))}
              </div>

              <blockquote className="mb-3 text-sm leading-relaxed text-white/80">
                &ldquo;{c.quote}&rdquo;
              </blockquote>
              <div className="text-[11px] text-white/40">— {c.author}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-8 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/20"
        >
          {ctaLabel} →
        </a>
      </div>
    </section>
  );
}
