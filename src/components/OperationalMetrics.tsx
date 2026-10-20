"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Data ────────────────────────────────────────────────── */

type Period = "diario" | "semanal" | "mensual";

interface MetricData {
  label: string;
  suffix: string;
  icon: React.ReactNode;
  values: Record<Period, number>;
  gradient: string;
  iconBg: string;
  glowColor: string;
}

const METRICS: MetricData[] = [
  {
    label: "Llamadas gestionadas",
    suffix: "+",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    values: { diario: 20000, semanal: 140000, mensual: 600000 },
    gradient: "from-violet-500/15 to-purple-500/5",
    iconBg: "bg-violet-500/10 text-violet-400",
    glowColor: "hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.12)]",
  },
  {
    label: "Mensajes de WhatsApp",
    suffix: "+",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    values: { diario: 18000, semanal: 126000, mensual: 540000 },
    gradient: "from-emerald-500/15 to-green-500/5",
    iconBg: "bg-emerald-500/10 text-emerald-400",
    glowColor: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.12)]",
  },
  {
    label: "Visitas web generadas",
    suffix: "+",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    values: { diario: 3891, semanal: 27237, mensual: 116730 },
    gradient: "from-cyan-500/15 to-blue-500/5",
    iconBg: "bg-cyan-500/10 text-cyan-400",
    glowColor: "hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.12)]",
  },
];

const PERIOD_LABELS: Record<Period, string> = {
  diario: "Diario",
  semanal: "Semanal",
  mensual: "Mensual",
};

const PERIODS: Period[] = ["diario", "semanal", "mensual"];

/* ── Animated counter hook ───────────────────────────────── */

function useAnimatedNumber(target: number, duration = 600) {
  const [current, setCurrent] = useState(target);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const fromRef = useRef<number>(target);

  const animate = useCallback(
    (from: number, to: number) => {
      fromRef.current = from;
      startRef.current = performance.now();

      const step = (now: number) => {
        const elapsed = now - startRef.current;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(fromRef.current + (to - fromRef.current) * eased);
        setCurrent(value);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        }
      };

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(step);
    },
    [duration]
  );

  useEffect(() => {
    animate(current, target);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, animate]);

  return current;
}

/* ── Format number ───────────────────────────────────────── */

function formatNumber(n: number): string {
  return new Intl.NumberFormat("es-CO").format(n);
}

/* ── Metric Card ─────────────────────────────────────────── */

function MetricCard({ metric, period }: { metric: MetricData; period: Period }) {
  const value = useAnimatedNumber(metric.values[period]);

  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] p-7 transition-all duration-500 hover:border-white/[0.15] hover:-translate-y-1 ${metric.glowColor}`}>
      {/* Subtle background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-b ${metric.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

      <div className="relative z-10">
        {/* Icon */}
        <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.06] ${metric.iconBg} transition-transform duration-500 group-hover:scale-110`}>
          {metric.icon}
        </div>

        {/* Number & Suffix */}
        <div className="mb-2 flex items-baseline gap-1">
          <span className="text-4xl font-black tracking-tight text-white sm:text-5xl tabular-nums">
            {formatNumber(value)}
          </span>
          <span className="text-2xl font-black text-white/35 sm:text-3xl">
            {metric.suffix}
          </span>
        </div>

        {/* Label */}
        <p className="text-sm font-bold text-white/50 tracking-wide">
          {metric.label}
        </p>
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────── */

export default function OperationalMetrics() {
  const [period, setPeriod] = useState<Period>("diario");
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoplay || isHovered) return;

    const interval = setInterval(() => {
      setPeriod((prev) => {
        if (prev === "diario") return "semanal";
        if (prev === "semanal") return "mensual";
        return "diario";
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, isHovered]);

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative py-28 overflow-hidden bg-[#0a0a0f]/20 border-y border-white/[0.06]"
    >
      {/* Background Accent glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-cyan-500/[0.04] to-violet-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Header */}
          <div className="mb-14 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              📈 Infraestructura y Capacidad
            </span>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Volumen real de{" "}
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                operación comercial
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/50 leading-relaxed md:text-lg">
              Capacidad diaria, semanal y mensual para equipos que necesitan captar, atender y cerrar más desde un solo sistema.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {/* Period Selector (Premium sliding style) */}
          <div className="mb-14 flex justify-center">
            <div className="relative inline-flex items-center rounded-full border border-white/[0.08] bg-[#0c0c14]/80 p-1.5 backdrop-blur-sm shadow-inner">
              {/* Sliding Background */}
              <div
                className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-300 ease-out shadow-lg"
                style={{
                  left: period === "diario" ? "6px" : period === "semanal" ? "calc(33.333% + 2px)" : "calc(66.666% - 2px)",
                  width: "calc(33.333% - 4px)",
                }}
              />
              {PERIODS.map((p) => {
                const active = period === p;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => {
                      setPeriod(p);
                      setIsAutoplay(false); // Stop autoplay when manually clicked
                    }}
                    className={`relative z-10 w-28 rounded-full py-2.5 text-center text-xs font-bold tracking-wider uppercase transition-colors duration-300 ${
                      active ? "text-white" : "text-white/40 hover:text-white/80"
                    }`}
                  >
                    {PERIOD_LABELS[p]}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Metrics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 100 + 150}>
              <MetricCard metric={metric} period={period} />
            </ScrollReveal>
          ))}
        </div>

        {/* Secondary Highlights Block */}
        <ScrollReveal delay={450}>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Agent productivity */}
            <div className="group flex items-start sm:items-center gap-5 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-violet-500/[0.02] to-[#12121a] p-6 hover:border-white/[0.12] transition-all duration-300">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition-transform duration-300 group-hover:scale-105">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Rendimiento de{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-extrabold">
                    180 a 210 llamadas
                  </span>{" "}
                  por agente al día
                </h4>
                <p className="text-sm text-white/45 leading-relaxed">
                  Promedio operativo gestionado por asesor en una jornada normal gracias a la automatización de marcado y distribución inteligente del sistema.
                </p>
              </div>
            </div>

            {/* Experience seal */}
            <div className="group flex items-start sm:items-center gap-5 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-cyan-500/[0.02] to-[#12121a] p-6 hover:border-white/[0.12] transition-all duration-300">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-transform duration-300 group-hover:scale-105">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Trayectoria comprobada de{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-extrabold">
                    +12 años
                  </span>
                </h4>
                <p className="text-sm text-white/45 leading-relaxed">
                  Liderando e impulsando la infraestructura, telecomunicaciones y operaciones comerciales de empresas y call centers en toda Colombia.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
