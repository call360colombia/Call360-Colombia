"use client";

import { useState } from "react";
import LeadForm, { type LeadFormSubmitData } from "./LeadForm";
import {
  VOLUME_THRESHOLDS,
  buildWhatsAppUrl,
  formatCOP,
} from "@/lib/formData";
import { buildCRMMessage } from "@/lib/leadTemplates";

type CrmType = "whatsapp" | "llamadas" | "combinado";

const TYPE_OPTIONS: { id: CrmType; label: string; description: string; accent: string }[] = [
  {
    id: "whatsapp",
    label: "CRM WhatsApp",
    description: "Multiagente, campañas masivas",
    accent: "from-emerald-500/20 to-green-500/20 border-emerald-500/40",
  },
  {
    id: "llamadas",
    label: "CRM Llamadas",
    description: "Predictivo + minutos ilimitados",
    accent: "from-violet-500/20 to-purple-500/20 border-violet-500/40",
  },
  {
    id: "combinado",
    label: "WhatsApp + Llamadas",
    description: "Ecosistema completo",
    accent: "from-cyan-500/20 to-amber-500/20 border-cyan-500/40",
  },
];

const PRESET_USERS = [1, 4, 10];
const ADDITIONAL_PRICE = 50000;

const fieldClass =
  "w-full rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 px-4 py-3 text-sm text-white outline-none transition-all focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20";

function calculateMonthly(type: CrmType, users: number): number {
  if (type === "combinado") {
    return users * 240000;
  }
  if (users <= 1) return 120000;
  if (users <= 4) return 240000;
  if (users <= 10) return 500000;
  return 500000 + (users - 10) * ADDITIONAL_PRICE;
}

function getVolumeThreshold(type: CrmType): number {
  if (type === "llamadas") return VOLUME_THRESHOLDS.crmLlamadas;
  if (type === "combinado") return 10;
  return VOLUME_THRESHOLDS.crmWhatsapp;
}

export default function CotizadorCRM({
  defaultType = "whatsapp",
}: {
  defaultType?: CrmType;
}) {
  const [type, setType] = useState<CrmType>(defaultType);
  const [users, setUsers] = useState(1);
  const [open, setOpen] = useState(false);

  const threshold = getVolumeThreshold(type);
  const isVolume = users > threshold;
  const monthly = calculateMonthly(type, users);

  const typeLabel =
    TYPE_OPTIONS.find((t) => t.id === type)?.label ?? "CRM";

  const handleSubmit = (data: LeadFormSubmitData) => {
    const message = buildCRMMessage({
      ...data,
      crmType: type,
      users,
      isVolume,
      monthlyEstimate: monthly,
    });
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-cyan-500/[0.05] to-[#12121a] p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-black text-white">Arma tu CRM a tu medida</h3>
          <p className="text-xs text-white/50">Tipo + número de agentes</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/60">
          Tipo de CRM
        </label>
        <div className="grid gap-2">
          {TYPE_OPTIONS.map((opt) => {
            const active = opt.id === type;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setType(opt.id)}
                className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                  active
                    ? `bg-gradient-to-r ${opt.accent}`
                    : "border-white/[0.08] bg-[#0a0a0f]/60 hover:border-white/[0.15]"
                }`}
              >
                <div
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${
                    active ? "border-cyan-400 bg-cyan-400" : "border-white/30"
                  }`}
                >
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0a0a0f]" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-white">{opt.label}</div>
                  <div className="text-xs text-white/40">{opt.description}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-2 flex items-baseline justify-between">
          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
            Usuarios / agentes
          </label>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">{users}</span>
            <span className="text-xs text-white/40">
              {users === 1 ? "agente" : "agentes"}
            </span>
          </div>
        </div>

        <div className="mb-3 flex flex-wrap gap-2">
          {PRESET_USERS.map((n) => {
            const active = users === n;
            return (
              <button
                key={n}
                type="button"
                onClick={() => setUsers(n)}
                className={`rounded-full border px-4 py-1.5 text-sm font-bold transition-all ${
                  active
                    ? "border-cyan-500/50 bg-cyan-500/15 text-cyan-300"
                    : "border-white/[0.08] bg-[#0a0a0f]/60 text-white/60 hover:border-white/[0.15]"
                }`}
              >
                {n} {n === 1 ? "usuario" : "usuarios"}
              </button>
            );
          })}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setUsers(Math.max(1, users - 1))}
              className="rounded-full border border-white/[0.08] bg-[#0a0a0f]/60 px-3 py-1.5 text-sm text-white/60 hover:border-white/[0.15]"
              aria-label="Restar usuario"
            >
              −
            </button>
            <input
              type="number"
              min={1}
              max={500}
              value={users}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (!Number.isNaN(v) && v > 0) setUsers(Math.min(v, 500));
              }}
              className={`${fieldClass} !w-20 !px-3 text-center`}
              aria-label="Número exacto de usuarios"
            />
            <button
              type="button"
              onClick={() => setUsers(Math.min(500, users + 1))}
              className="rounded-full border border-white/[0.08] bg-[#0a0a0f]/60 px-3 py-1.5 text-sm text-white/60 hover:border-white/[0.15]"
              aria-label="Sumar usuario"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-white/[0.08] bg-[#0a0a0f]/60 p-5">
        <div className="flex items-baseline justify-between">
          <span className="text-xs uppercase tracking-wider text-white/40">
            Inversión mensual
          </span>
          <span className="text-3xl font-black text-emerald-400">
            {isVolume ? "Consultar" : `Desde ${formatCOP(monthly)}`}
          </span>
        </div>
        {!isVolume && users > 1 && (
          <div className="mt-1 text-right text-xs text-white/40">
            ≈ {formatCOP(Math.round(monthly / users))} por agente / mes
          </div>
        )}
        {isVolume && (
          <p className="mt-3 text-xs text-amber-400">
            💡 Para {users}+ {type === "llamadas" ? "agentes" : "usuarios"} tenemos planes
            empresariales con descuento. Te contactaremos.
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:from-emerald-600 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.01]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {isVolume ? "Cotizar plan empresarial" : "Hablar con un asesor"}
      </button>

      <LeadForm
        open={open}
        onClose={() => setOpen(false)}
        context={{
          title: isVolume ? "Plan empresarial" : "Hablar con un asesor",
          subtitle: `${typeLabel} · ${users} ${users === 1 ? "agente" : "agentes"}`,
          highlights: [
            { label: "Tipo", value: typeLabel },
            { label: "Usuarios", value: `${users}` },
            {
              label: "Inversión",
              value: isVolume ? "Consultar" : `Desde ${formatCOP(monthly)} / mes`,
            },
            { label: "Modalidad", value: "Mensual, sin permanencia" },
          ],
          installation: { show: true, defaultValue: "remoto" },
        }}
        onSubmit={handleSubmit}
        ctaLabel={isVolume ? "Solicitar cotización" : "Enviar a WhatsApp"}
      />
    </div>
  );
}
