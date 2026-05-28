interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      {badge && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
          {badge}
        </p>
      )}
      <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {highlight ? (
          <>
            {title.split(highlight)[0]}
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
              {highlight}
            </span>
            {title.split(highlight)[1] || ""}
          </>
        ) : (
          <span className="text-white">{title}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
          {subtitle}
        </p>
      )}
    </div>
  );
}
