import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  benefit: string;
  href: string;
  icon: React.ReactNode;
  gradient?: string;
}

export default function ServiceCard({
  title,
  description,
  benefit,
  href,
  icon,
  gradient = "from-cyan-500/20 to-violet-500/20",
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 transition-all duration-500 hover:border-white/[0.15] hover:bg-[#1a1a24] hover-lift">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />
        
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
        
        <div className="relative z-10">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.06] text-white/80 transition-all duration-300 group-hover:bg-white/[0.1] group-hover:scale-110">
            {icon}
          </div>
          <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
          <p className="mb-4 text-sm leading-relaxed text-white/50">
            {description}
          </p>
          <p className="mb-6 text-sm font-semibold text-white/70">
            {benefit}
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-bold text-white transition-all duration-300 group-hover:text-cyan-400 group-hover:gap-3">
            Ver más
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
