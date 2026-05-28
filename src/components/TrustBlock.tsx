interface TrustBlockProps {
  title?: string;
  description: string;
  bullets: string[];
  closingStatement: string;
}

export default function TrustBlock({
  title = "No somos otra agencia más",
  description,
  bullets,
  closingStatement,
}: TrustBlockProps) {
  return (
    <section className="py-24 bg-[#0f0f17]/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/[0.08] bg-[#12121a] p-12">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl text-center md:text-left">
            {title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/60">
            {description}
          </p>
          <ul className="mt-8 space-y-4">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-sm text-white/70">{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-8 border-t border-white/[0.08]">
            <p className="text-lg font-bold text-white">{closingStatement}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
