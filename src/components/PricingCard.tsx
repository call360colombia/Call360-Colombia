import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  waText?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function PricingCard({
  name,
  price,
  period = "",
  description,
  features,
  featured = false,
  badge,
  waText = "Hola Call360, quiero cotizar",
  imageUrl,
  imageAlt,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl sm:rounded-3xl border p-5 sm:p-8 transition-all duration-500 hover-lift ${
        featured
          ? "border-cyan-500/30 bg-gradient-to-b from-cyan-500/[0.08] to-[#12121a]"
          : "border-white/[0.08] bg-[#12121a] hover:border-white/[0.15]"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/20">
          {badge}
        </div>
      )}
      {imageUrl && (
        <div className="relative mb-6 aspect-video overflow-hidden rounded-xl bg-white/[0.04]">
          <Image
            src={imageUrl}
            alt={imageAlt ?? name}
            fill
            className="object-contain p-2"
          />
        </div>
      )}
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-bold text-white">{name}</h3>
        {description && (
          <p className="text-sm text-white/40">{description}</p>
        )}
      </div>
      <div className="mb-8">
        <span
          className={`text-4xl font-black ${
            featured
              ? "bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent"
              : "text-white"
          }`}
        >
          {price}
        </span>
        {period && (
          <span className="ml-1 text-sm text-white/40">{period}</span>
        )}
      </div>
      <ul className="mb-8 flex flex-1 flex-col gap-3">
        {features.map((feature, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-white/60"
          >
            <svg
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <WhatsAppButton
        text={waText}
        className={`w-full justify-center ${
          featured
            ? ""
            : "!bg-transparent !text-white border border-white/20 hover:!bg-white/[0.06] hover:!border-white/30"
        }`}
      />
    </div>
  );
}
