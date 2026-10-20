"use client";

interface QuickResponseBadgeProps {
  text?: string;
  variant?: "compact" | "inline" | "stacked";
  className?: string;
}

export default function QuickResponseBadge({
  text = "Respondemos en menos de 5 min",
  variant = "compact",
  className = "",
}: QuickResponseBadgeProps) {
  if (variant === "inline") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 ${className}`}
      >
        <PulseDot />
        {text}
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <div
        className={`inline-flex flex-col items-start gap-1 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] px-4 py-2.5 ${className}`}
      >
        <div className="flex items-center gap-2">
          <PulseDot />
          <span className="text-xs font-bold text-white">{text}</span>
        </div>
        <span className="text-[10px] text-white/40">Lun-Vie 8am-6pm · Sáb 9am-1pm</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.05] px-3 py-1.5 ${className}`}
    >
      <PulseDot />
      <span className="text-xs font-bold text-emerald-400">{text}</span>
    </div>
  );
}

function PulseDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
    </span>
  );
}
