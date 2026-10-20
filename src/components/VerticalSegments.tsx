"use client";

import { useState } from "react";
import { SERVICE_LABELS, type ServiceType } from "@/lib/formData";
import { trackEvent } from "@/lib/analytics";
import VerticalSegmentQuoteModal from "./VerticalSegmentQuoteModal";

type IndustryId =
  | "clinicas"
  | "barberias"
  | "restaurantes"
  | "colegios"
  | "inmobiliarias"
  | "seguros";

interface Segment {
  id: IndustryId;
  emoji: string;
  name: string;
  subtitle: string;
  pain: string;
  solution: string;
  recommendedService: ServiceType;
  accent: "cyan" | "violet" | "emerald" | "amber" | "rose";
}

const SEGMENTS: Segment[] = [
  {
    id: "clinicas",
    emoji: "🦷",
    name: "Clínicas y Consultorios",
    subtitle: "Odontología, estética, psicología, medicina",
    pain: "Pierden 3 de cada 10 pacientes por demorar más de 30 min en responder",
    solution: "Agenda automatizada + 3 asesores en el mismo WhatsApp + recordatorios de citas",
    recommendedService: "crm-whatsapp",
    accent: "cyan",
  },
  {
    id: "barberias",
    emoji: "💈",
    name: "Barberías y Salones",
    subtitle: "Reservas por WhatsApp, campañas de fidelización",
    pain: "Las cancelaciones y no-shows les cuestan 20% de la facturación mensual",
    solution: "Confirmación automática por WhatsApp + campañas masivas + base de datos unificada",
    recommendedService: "crm-whatsapp",
    accent: "violet",
  },
  {
    id: "restaurantes",
    emoji: "🍽️",
    name: "Restaurantes y Domicilios",
    subtitle: "Pedidos, reservas, fidelización",
    pain: "No le dan seguimiento al cliente que pidió una vez y nunca volvió",
    solution: "Campañas automáticas a clientes viejos + recordatorios de reservas + integraciones",
    recommendedService: "crm-whatsapp",
    accent: "emerald",
  },
  {
    id: "colegios",
    emoji: "🎓",
    name: "Colegios y Academias",
    subtitle: "Captación de matrículas, seguimiento a padres",
    pain: "Las campañas de matrícula se pierden en el WhatsApp personal de un coordinador",
    solution: "Múltiples asesores con un solo número + plantillas de respuesta + métricas de conversión",
    recommendedService: "crm-whatsapp",
    accent: "amber",
  },
  {
    id: "inmobiliarias",
    emoji: "🏠",
    name: "Inmobiliarias",
    subtitle: "Atracción de prospectos y cierre de ventas",
    pain: "Llegan 200 prospectos al mes por portales y no los contactan a todos a tiempo",
    solution: "CRM de llamadas con marcación predictiva + distribución automática de prospectos",
    recommendedService: "crm-llamadas",
    accent: "rose",
  },
  {
    id: "seguros",
    emoji: "🛡️",
    name: "Aseguradoras y Financieras",
    subtitle: "Cobranza, renovación, atención al cliente",
    pain: "Tienen una base de 50.000 clientes y solo llaman al 5% al mes",
    solution: "Marcación predictiva + grabación con IA + detección de palabras clave",
    recommendedService: "crm-llamadas",
    accent: "cyan",
  },
];

const accentMap: Record<Segment["accent"], { border: string; bg: string; text: string; ring: string }> = {
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    bg: "bg-cyan-500/[0.03]",
    text: "text-cyan-400",
    ring: "ring-cyan-500/30",
  },
  violet: {
    border: "border-violet-500/20 hover:border-violet-500/50",
    bg: "bg-violet-500/[0.03]",
    text: "text-violet-400",
    ring: "ring-violet-500/30",
  },
  emerald: {
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    bg: "bg-emerald-500/[0.03]",
    text: "text-emerald-400",
    ring: "ring-emerald-500/30",
  },
  amber: {
    border: "border-amber-500/20 hover:border-amber-500/50",
    bg: "bg-amber-500/[0.03]",
    text: "text-amber-400",
    ring: "ring-amber-500/30",
  },
  rose: {
    border: "border-rose-500/20 hover:border-rose-500/50",
    bg: "bg-rose-500/[0.03]",
    text: "text-rose-400",
    ring: "ring-rose-500/30",
  },
};

interface VerticalSegmentsProps {
  title?: string;
  subtitle?: string;
  segments?: Segment[];
}

export default function VerticalSegments({
  title = "Soluciones especializadas por industria",
  subtitle = "Ecosistemas Call360 adaptados a tu sector. Mismo sistema, configuración a tu medida.",
  segments = SEGMENTS,
}: VerticalSegmentsProps) {
  const [openIndustry, setOpenIndustry] = useState<IndustryId | null>(null);

  const handleClick = (segment: Segment) => {
    trackEvent("segment_clicked", {
      segment: segment.id,
      recommended_service: segment.recommendedService,
    });
    setOpenIndustry(segment.id);
  };

  return (
    <section>
      <div className="mb-10 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
          Por industria
        </span>
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            {title.split(" ").slice(0, 1).join(" ")}
          </span>{" "}
          {title.split(" ").slice(1).join(" ")}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-white/50">{subtitle}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {segments.map((seg) => {
          const accent = accentMap[seg.accent];
          return (
            <button
              key={seg.id}
              type="button"
              onClick={() => handleClick(seg)}
              aria-label={`Solicitar cotización para ${seg.name}`}
              className={`group flex flex-col rounded-2xl border ${accent.border} ${accent.bg} p-6 text-left transition-all hover:scale-[1.02] hover:ring-1 ${accent.ring}`}
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="text-4xl">{seg.emoji}</div>
                <span
                  className={`rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/60`}
                >
                  {SERVICE_LABELS[seg.recommendedService]}
                </span>
              </div>

              <h3 className="mb-1 text-lg font-black text-white">{seg.name}</h3>
              <p className="mb-4 text-xs text-white/40">{seg.subtitle}</p>

              <div className="mb-4 space-y-3 flex-1">
                <div>
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-rose-400/80">
                    ❌ Dolor típico
                  </div>
                  <p className="text-xs leading-relaxed text-white/70">{seg.pain}</p>
                </div>
                <div>
                  <div className={`mb-1 text-[10px] font-bold uppercase tracking-wider ${accent.text}`}>
                    ✅ Solución Call360
                  </div>
                  <p className="text-xs leading-relaxed text-white/80">{seg.solution}</p>
                </div>
              </div>

              <div
                className={`mt-auto flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs font-bold ${accent.text}`}
              >
                <span>Solicitar cotización</span>
                <svg
                  className="transition-transform group-hover:translate-x-1"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      <VerticalSegmentQuoteModal
        industry={openIndustry}
        onClose={() => setOpenIndustry(null)}
      />
    </section>
  );
}
