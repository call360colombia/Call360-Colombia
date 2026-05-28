interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
}

export default function HowItWorks({
  steps,
  title = "Cómo funciona",
  subtitle = "Tu sistema de ventas en 3 pasos simples",
}: HowItWorksProps) {
  return (
    <section className="py-24 bg-[#0f0f17]/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-white/50">{subtitle}</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 hover-lift">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 text-2xl font-black text-white">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-1/2 -z-10 h-0.5 w-full bg-gradient-to-r from-cyan-500/30 to-violet-500/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
