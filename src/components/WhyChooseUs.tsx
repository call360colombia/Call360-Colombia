interface BenefitItem {
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  benefits: BenefitItem[];
  title?: string;
}

export default function WhyChooseUs({
  benefits,
  title = "¿Por qué elegir Call360?",
}: WhyChooseUsProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.08] bg-[#12121a] p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#1a1a24]"
            >
              <h3 className="mb-3 text-lg font-bold text-white">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
