import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  headline: string;
  description: string;
  benefit: string;
  href: string;
  image: string;
  ctaLabel: string;
  gradient?: string;
  hoverGlow?: string;
  ctaColor?: string;
}

export default function ServiceCard({
  title,
  headline,
  description,
  benefit,
  href,
  image,
  ctaLabel,
  gradient = "from-cyan-500/20 to-blue-500/20",
  hoverGlow = "hover:border-cyan-500/30 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)]",
  ctaColor = "text-cyan-400 group-hover:text-cyan-300",
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className={`relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] transition-all duration-500 ease-out hover:-translate-y-2 ${hoverGlow}`}>
        
        {/* Hover Radial Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />
        
        {/* Background Light Orb */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Image Area with Title Overlay */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/[0.02] border-b border-white/[0.04]">
          {/* Overlay Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-[#12121a]/30 to-transparent z-10" />
          
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-w-768px) 100vw, 33vw"
          />

          {/* Title Tag inside Image Overlay */}
          <div className="absolute left-6 bottom-4 z-20">
            <span className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-black/50 border border-white/10 ${ctaColor.split(' ')[0]} backdrop-blur-sm shadow-md`}>
              {title}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 flex flex-1 flex-col justify-between p-6 md:p-8">
          <div>
            {/* Headline Potente (Resultado) */}
            <h3 className="text-xl md:text-2xl font-black tracking-tight text-white mb-3">
              {headline}
            </h3>
            
            {/* Breve descripción corta y directa */}
            <p className="text-sm leading-relaxed text-white/50 mb-6">
              {description}
            </p>

            {/* Beneficio Principal */}
            <div className="flex items-start gap-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] p-4 text-xs text-white/70 font-semibold mb-6">
              <span className="text-emerald-400 mt-0.5 font-bold">⚡ BENEFICIO:</span>
              <span className="leading-snug">{benefit}</span>
            </div>
          </div>

          {/* CTA Específico */}
          <div className={`inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3 ${ctaColor}`}>
            <span>{ctaLabel}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
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
