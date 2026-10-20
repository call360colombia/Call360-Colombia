import Image from "next/image";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function HowItWorks({
  steps,
  title = "Cómo funciona",
  subtitle = "Tu sistema de ventas en 3 pasos simples",
  image,
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
        
        {image ? (
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Steps Stack */}
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="group relative rounded-2xl border border-white/[0.06] bg-[#12121a] p-6 hover-lift transition-all duration-300 hover:border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 text-lg font-black text-white group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/50">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mockup visual */}
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] p-4 group glow-cyan shadow-xl shadow-cyan-500/5 hover:-translate-y-1 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-violet-500/[0.03]" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/[0.02]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-w-1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
}
