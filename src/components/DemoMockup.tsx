/**
 * Mockup 100% ilustrativo del CRM (no es una captura real).
 * Sin datos de clientes, sin tokens, sin URLs internas. Solo visual.
 * No enlaza a ninguna ruta: es puramente visual.
 */
export default function DemoMockup() {
  return (
    <figure className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] shadow-2xl shadow-black/40">
      {/* Barra superior */}
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
        </div>
        <p className="truncate text-xs font-bold text-white/70">
          Call360 CRM — Bandeja de conversaciones
        </p>
        <span className="shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
          Demostración visual
        </span>
      </div>

      {/* Cuerpo: 3 columnas (decorativo, no interactivo) */}
      <div
        className="grid md:grid-cols-[1fr_1.4fr_1fr]"
        role="img"
        aria-label="Ilustración de demostración de la bandeja del CRM con conversaciones, historial, tareas y negocios. No es una captura real del sistema."
      >
        {/* Conversaciones */}
        <div className="border-b border-white/[0.06] p-3 md:border-b-0 md:border-r" aria-hidden="true">
          <div className="mb-2 h-8 rounded-lg bg-white/[0.05]" />
          {["Conversación de ejemplo 1", "Conversación de ejemplo 2", "Conversación de ejemplo 3"].map(
            (label, i) => (
              <div
                key={label}
                className={`mb-2 flex items-center gap-2.5 rounded-xl p-2.5 ${
                  i === 0 ? "bg-emerald-500/10 ring-1 ring-emerald-500/20" : "bg-white/[0.02]"
                }`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-xs font-black text-white/60">
                  C{i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-xs font-bold text-white/80">{label}</div>
                  <div className="mt-1 h-2 w-3/4 rounded bg-white/10" />
                </div>
                <div className="h-2 w-8 shrink-0 rounded bg-white/10" />
              </div>
            )
          )}
          <div className="mt-1 px-1 text-[10px] text-white/30">+57 3XX XXX XX XX · datos ficticios</div>
        </div>

        {/* Hilo de chat */}
        <div className="border-b border-white/[0.06] p-4 md:border-b-0 md:border-r" aria-hidden="true">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] font-black text-emerald-300">
              C1
            </div>
            <div>
              <div className="text-xs font-bold text-white/80">Conversación de ejemplo</div>
              <div className="text-[10px] text-emerald-400">Historial conservado</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="max-w-[80%] rounded-xl rounded-tl-sm bg-white/[0.06] p-2.5">
              <div className="h-2 w-full rounded bg-white/10" />
              <div className="mt-1.5 h-2 w-2/3 rounded bg-white/10" />
            </div>
            <div className="ml-auto max-w-[80%] rounded-xl rounded-tr-sm bg-emerald-500/15 p-2.5 ring-1 ring-emerald-500/20">
              <div className="h-2 w-full rounded bg-white/10" />
              <div className="mt-1.5 h-2 w-1/2 rounded bg-white/10" />
            </div>
            <div className="max-w-[80%] rounded-xl rounded-tl-sm bg-white/[0.06] p-2.5">
              <div className="h-2 w-5/6 rounded bg-white/10" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-xl bg-white/[0.04] px-3 py-2.5">
            <div className="h-2 flex-1 rounded bg-white/10" />
            <div className="h-6 w-6 rounded-full bg-emerald-500/25" />
          </div>
        </div>

        {/* Seguimiento */}
        <div className="p-4" aria-hidden="true">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/40">
            Tareas de hoy
          </div>
          {[85, 60, 45].map((w) => (
            <div key={w} className="mb-2 flex items-center gap-2 rounded-lg bg-white/[0.03] p-2">
              <div className="h-3.5 w-3.5 shrink-0 rounded border border-white/20" />
              <div className="h-2 rounded bg-white/10" style={{ width: `${w}%` }} />
            </div>
          ))}
          <div className="mb-2 mt-4 text-[10px] font-bold uppercase tracking-wider text-white/40">
            Negocios / pipeline
          </div>
          <div className="flex gap-1.5">
            {[100, 70, 40].map((h, i) => (
              <div key={i} className="flex-1 rounded-lg bg-gradient-to-t from-violet-500/25 to-cyan-500/10 p-1.5">
                <div className="mx-auto w-3/4 rounded bg-white/15" style={{ height: `${h * 0.5}px` }} />
                <div className="mx-auto mt-1.5 h-1.5 w-2/3 rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pie: etiqueta honesta */}
      <figcaption className="border-t border-white/[0.06] bg-white/[0.02] px-5 py-3 text-center text-[11px] leading-relaxed text-white/40">
        Ilustración con fines demostrativos. No es una captura real del CRM ni
        contiene datos de clientes.
      </figcaption>
    </figure>
  );
}
