interface ComparisonItem {
  informal: string;
  call360: string;
}

interface ComparisonTableProps {
  items: ComparisonItem[];
  title?: string;
  subtitle?: string;
}

export default function ComparisonTable({
  items,
  title = "Deja el desorden",
  subtitle = "La diferencia entre operar como siempre o hacerlo bien",
}: ComparisonTableProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-white/50">{subtitle}</p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Informal Side */}
          <div className="rounded-2xl border border-red-500/20 bg-[#12121a] p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Operación Informal</h3>
            </div>
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400 text-xs">✕</span>
                  <span className="text-sm text-white/50">{item.informal}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Call360 Side */}
          <div className="relative rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/[0.08] to-[#12121a] p-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-500/20">
              Recomendado
            </div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Con Call360</h3>
            </div>
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">✓</span>
                  <span className="text-sm text-white/70">{item.call360}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
