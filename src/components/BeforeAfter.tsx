import WhatsAppButton from "@/components/WhatsAppButton";

interface BeforeAfterItem {
  before: string;
  after: string;
}

interface BeforeAfterProps {
  items: BeforeAfterItem[];
  title?: string;
  subtitle?: string;
  showCta?: boolean;
  ctaLabel?: string;
  ctaText?: string;
  ctaSubtext?: string;
}

export default function BeforeAfter({
  items,
  title = "Adiós al desorden",
  subtitle = "Tu transformación con Call360",
  showCta = false,
  ctaLabel = "Ver demo personalizada",
  ctaText = "Hola Call360, quiero ver una demo del antes y después para mi negocio.",
  ctaSubtext,
}: BeforeAfterProps) {
  return (
    <section className="py-24 bg-[#0f0f17]/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-white/50">{subtitle}</p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Antes */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white/70">Antes</h3>
            </div>
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-red-500/10 bg-[#12121a] p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400 text-xs">✕</span>
                  <span className="text-sm text-white/50">{item.before}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Después */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Después con Call360</h3>
            </div>
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.05] to-[#12121a] p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">✓</span>
                  <span className="text-sm text-white/70">{item.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showCta && (
          <div className="mt-12 flex flex-col items-center justify-center gap-3">
            <WhatsAppButton label={ctaLabel} text={ctaText} />
            {ctaSubtext && <p className="text-xs text-white/40">{ctaSubtext}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
