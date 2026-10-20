"use client";

import { useState } from "react";
import LeadForm, { type LeadFormSubmitData } from "./LeadForm";
import {
  COMPANY_SIZES,
  SERVICE_LABELS,
  buildWhatsAppUrl,
  type ServiceType,
} from "@/lib/formData";
import { buildServiceMessage } from "@/lib/leadTemplates";

interface ServiceLeadFormProps {
  service: ServiceType;
  triggerLabel: string;
  triggerClassName?: string;
  showCompanySize?: boolean;
  triggerVariant?: "primary" | "secondary" | "cyan" | "violet";
}

const triggerStyles: Record<NonNullable<ServiceLeadFormProps["triggerVariant"]>, string> = {
  primary:
    "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 hover:shadow-emerald-500/20",
  cyan: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:shadow-cyan-500/20",
  violet:
    "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 hover:shadow-violet-500/20",
  secondary:
    "bg-transparent border border-white/15 hover:border-white/30 hover:bg-white/[0.06]",
};

export default function ServiceLeadForm({
  service,
  triggerLabel,
  triggerClassName = "",
  showCompanySize,
  triggerVariant = "primary",
}: ServiceLeadFormProps) {
  const [open, setOpen] = useState(false);
  const [companySize, setCompanySize] = useState<string>("");
  const shouldShowCompanySize = showCompanySize ?? service !== "integrado";

  const handleSubmit = (data: LeadFormSubmitData) => {
    const message = buildServiceMessage({
      ...data,
      service,
      companySize: companySize || undefined,
    });
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setOpen(false);
    setCompanySize("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg ${triggerStyles[triggerVariant]} ${triggerClassName}`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {triggerLabel}
      </button>

      <LeadForm
        open={open}
        onClose={() => {
          setOpen(false);
          setCompanySize("");
        }}
        context={{
          title: `Cotizar ${SERVICE_LABELS[service]}`,
          subtitle: companySize
            ? `Empresa: ${companySize}`
            : "Cuéntanos sobre tu negocio",
          highlights: [
            { label: "Servicio", value: SERVICE_LABELS[service] },
            ...(companySize ? [{ label: "Tamaño", value: companySize }] : []),
          ],
          installation: {
            show: service === "pagina-web" || service === "integrado",
            defaultValue: "remoto",
          },
        }}
        onSubmit={handleSubmit}
      >
        {shouldShowCompanySize && (
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-4">
            <h3 className="text-base font-black text-white">
              Tamaño de tu empresa
            </h3>
            <p className="mt-1 text-xs text-white/50">
              Para preparar mejor la cotización de {SERVICE_LABELS[service]}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {COMPANY_SIZES.map((size) => {
                const active = companySize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setCompanySize(size)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold transition-all ${
                      active
                        ? "border-cyan-500/50 bg-cyan-500/15 text-cyan-300"
                        : "border-white/[0.08] bg-[#0a0a0f]/60 text-white/60 hover:border-white/[0.15]"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </LeadForm>
    </>
  );
}
