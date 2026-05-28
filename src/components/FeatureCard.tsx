interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="group flex gap-4 rounded-xl border border-white/[0.08] bg-[#12121a] p-6 transition-all duration-300 hover:border-white/[0.15] hover:bg-[#1a1a24] hover-lift">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-white/80 transition-all duration-300 group-hover:bg-white/[0.1] group-hover:scale-110">
        {icon}
      </div>
      <div>
        <h4 className="mb-1 text-base font-bold text-white">{title}</h4>
        <p className="text-sm leading-relaxed text-white/50">{description}</p>
      </div>
    </div>
  );
}
