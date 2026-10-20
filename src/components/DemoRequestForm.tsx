"use client";

import { useId, useState } from "react";
import { createPortal } from "react-dom";
import {
  CITIES,
  SERVICE_LABELS,
  buildWhatsAppUrl,
  type InstallationMode,
  type ServiceType,
} from "@/lib/formData";
import { buildDemoMessage } from "@/lib/leadTemplates";

/* ── Styles ─────────────────────────────────────────────── */

const fieldClass =
  "w-full rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60";

/* ── Constants ──────────────────────────────────────────── */

const TIME_SLOTS = [
  "Mañana (8am - 12pm)",
  "Tarde (12pm - 6pm)",
  "Noche (6pm - 8pm)",
  "Fin de semana",
];

/** Interest options – multi-select pills */
const INTEREST_OPTIONS: {
  id: ServiceType;
  label: string;
  description: string;
}[] = [
  { id: "pagina-web", label: "Páginas Web", description: "Diseño profesional 72h" },
  { id: "crm-whatsapp", label: "CRM WhatsApp", description: "Multiagente + campañas" },
  { id: "crm-llamadas", label: "CRM Llamadas", description: "Predictivo + minutos ilimitados" },
  { id: "marketing-digital", label: "Marketing Digital", description: "Contenido + campañas" },
  { id: "integrado", label: "Ecosistema Completo", description: "Web + WhatsApp + Llamadas + Marketing" },
  // NOTE: "asesoria" selection — future logic could auto-recommend "integrado" when this is chosen
  { id: "asesoria", label: "Aún no estoy seguro", description: "Necesito asesoría personalizada" },
];

/* ── Component ──────────────────────────────────────────── */

interface DemoRequestFormProps {
  defaultService?: ServiceType;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  triggerLabel?: string;
  triggerClassName?: string;
  className?: string;
  /** Si es true, exige marcar el consentimiento de contacto antes de enviar. */
  requireConsent?: boolean;
}

export default function DemoRequestForm({
  defaultService,
  title = "Agenda una demo o asesoría",
  subtitle = "Cuéntanos qué necesitas y te contactamos para mostrarte la mejor solución para tu operación.",
  ctaLabel = "Confirmar por WhatsApp",
  triggerLabel = "Agendar demo gratuita",
  triggerClassName = "",
  className = "",
  requireConsent = false,
}: DemoRequestFormProps) {
  const titleId = useId();
  const [open, setOpen] = useState(false);

  /* ── Form state ─────────────────────────────────────── */
  const [interests, setInterests] = useState<ServiceType[]>(
    defaultService ? [defaultService] : []
  );
  const [installation, setInstallation] = useState<InstallationMode>("remoto");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [slot, setSlot] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  /* ── Helpers ────────────────────────────────────────── */

  const toggleInterest = (id: ServiceType) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
    // Clear error when user selects something
    if (errors.interests) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.interests;
        return next;
      });
    }
  };

  const reset = () => {
    setInterests(defaultService ? [defaultService] : []);
    setInstallation("remoto");
    setFullName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setCity("");
    setSlot("");
    setMessage("");
    setConsent(false);
    setErrors({});
  };

  /* ── Validation ─────────────────────────────────────── */

  const validate = () => {
    const next: Record<string, string> = {};
    if (interests.length === 0) next.interests = "Selecciona al menos un servicio";
    if (!fullName.trim()) next.fullName = "Ingresa tu nombre completo";
    if (!phone.trim() || phone.replace(/\D/g, "").length < 7) {
      next.phone = "Ingresa un número de celular válido";
    }
    if (!slot) next.slot = "Selecciona un horario";
    // Email optional but validate format if provided
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Email inválido";
    }
    if (requireConsent && !consent) {
      next.consent = "Debes aceptar ser contactado para continuar";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  /* ── Submit ─────────────────────────────────────────── */

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const interestLabels = interests
      .map((id) => SERVICE_LABELS[id] || id)
      .join(", ");

    const messageText = buildDemoMessage({
      fullName: fullName.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      city,
      interests,
      installation,
      preferredSlot: slot,
      message: message.trim() || undefined,
    });

    window.open(buildWhatsAppUrl(messageText), "_blank", "noopener,noreferrer");
    reset();
    setOpen(false);
  };

  /* ── Footer label ───────────────────────────────────── */

  const footerLabel =
    interests.length === 0
      ? "Selecciona lo que te interesa"
      : interests.length === 1
        ? SERVICE_LABELS[interests[0]]
        : `${interests.length} servicios seleccionados`;

  /* ── Render ─────────────────────────────────────────── */

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-center text-base font-bold text-white transition-all hover:scale-[1.02] hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg hover:shadow-cyan-500/20 ${triggerClassName}`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        {triggerLabel}
      </button>

      {open && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 pt-20 pb-6 sm:p-6 sm:pt-24"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="relative z-10 my-auto w-full max-w-lg max-h-[calc(100vh-100px)] overflow-y-auto rounded-2xl border border-white/[0.08] bg-[#12121a] shadow-2xl shadow-cyan-500/5">
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/[0.06] bg-[#12121a]/95 backdrop-blur-sm p-6 pb-4">
              <div>
                <h2 id={titleId} className="text-xl font-black text-white">
                  {title}
                </h2>
                <p className="mt-1 text-sm text-white/50">{subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="shrink-0 rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 p-6" noValidate>

              {/* ── 1. Interests (multi-select) ───────────── */}
              <div>
                <label className={labelClass}>
                  ¿Qué te interesa? <span className="text-cyan-400">*</span>
                </label>
                <p className="mb-3 text-[11px] text-white/40">
                  Puedes elegir uno o varios servicios según lo que necesites.
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {INTEREST_OPTIONS.map((opt) => {
                    const active = interests.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleInterest(opt.id)}
                        className={`flex items-start gap-2.5 rounded-xl border p-3 text-left transition-all ${
                          active
                            ? "border-cyan-500/40 bg-cyan-500/10"
                            : "border-white/[0.08] bg-[#0a0a0f]/60 hover:border-white/[0.15]"
                        }`}
                      >
                        {/* Checkbox indicator */}
                        <div
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 transition-all ${
                            active
                              ? "border-cyan-400 bg-cyan-400"
                              : "border-white/30 rounded"
                          }`}
                        >
                          {active && (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0a0a0f" strokeWidth="4">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-white">{opt.label}</div>
                          <div className="text-[11px] text-white/40">{opt.description}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {errors.interests && (
                  <p className="mt-2 text-xs text-red-400">{errors.interests}</p>
                )}
              </div>

              {/* ── 2. Modality ───────────────────────────── */}
              <div>
                <label className={labelClass}>
                  Modalidad preferida <span className="text-cyan-400">*</span>
                </label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {[
                    {
                      id: "remoto" as InstallationMode,
                      emoji: "📹",
                      label: "Videollamada gratuita",
                    },
                    {
                      id: "presencial-bogota" as InstallationMode,
                      emoji: "🤝",
                      label: "Presencial en Bogotá",
                      sublabel: "$30.000 abonables a la compra",
                    },
                  ].map((opt) => {
                    const active = installation === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setInstallation(opt.id)}
                        className={`rounded-xl border p-3 text-left transition-all ${
                          active
                            ? "border-cyan-500/40 bg-cyan-500/10"
                            : "border-white/[0.08] bg-[#0a0a0f]/60 hover:border-white/[0.15]"
                        }`}
                      >
                        <div className={`text-sm font-semibold ${active ? "text-cyan-300" : "text-white/60"}`}>
                          {opt.emoji} {opt.label}
                        </div>
                        {opt.sublabel && (
                          <div className={`mt-0.5 text-[11px] ${active ? "text-cyan-400/60" : "text-white/30"}`}>
                            {opt.sublabel}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
                {/* Presencial cost notice */}
                {installation === "presencial-bogota" && (
                  <div className="mt-2.5 flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/[0.06] px-3 py-2.5">
                    <span className="shrink-0 text-sm">💡</span>
                    <p className="text-[11px] leading-relaxed text-amber-200/70">
                      Las reuniones presenciales en Bogotá tienen un valor de <strong className="text-amber-200">$30.000</strong>, que se descuenta del total si tomas la solución.
                    </p>
                  </div>
                )}
              </div>

              {/* ── 3. Name + Company ─────────────────────── */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="dr-name">
                    Nombre completo <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="dr-name"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Juan Pérez"
                    className={fieldClass}
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>}
                </div>
                <div>
                  <label className={labelClass} htmlFor="dr-company">
                    Empresa <span className="text-white/30">(opcional)</span>
                  </label>
                  <input
                    id="dr-company"
                    type="text"
                    autoComplete="organization"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Mi Negocio S.A.S"
                    className={fieldClass}
                  />
                </div>
              </div>

              {/* ── 4. Email + Phone ──────────────────────── */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="dr-email">
                    Email <span className="text-white/30">(opcional)</span>
                  </label>
                  <input
                    id="dr-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="juan@empresa.com"
                    className={fieldClass}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
                <div>
                  <label className={labelClass} htmlFor="dr-phone">
                    Celular con WhatsApp preferiblemente <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="dr-phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+57 320 369 3949"
                    className={fieldClass}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                </div>
              </div>

              {/* ── 5. City + Time Slot ───────────────────── */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="dr-city">
                    Ciudad <span className="text-white/30">(opcional)</span>
                  </label>
                  <select
                    id="dr-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={fieldClass}
                  >
                    <option value="">Selecciona</option>
                    {CITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="dr-slot">
                    Horario preferido <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    id="dr-slot"
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className={`${fieldClass} ${!slot ? "text-white/30" : ""}`}
                  >
                    <option value="" disabled>
                      Selecciona un horario
                    </option>
                    {TIME_SLOTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.slot && <p className="mt-1 text-xs text-red-400">{errors.slot}</p>}
                </div>
              </div>

              {/* ── 6. Message ────────────────────────────── */}
              <div>
                <label className={labelClass} htmlFor="dr-msg">
                  Cuéntanos brevemente qué necesitas <span className="text-white/30">(opcional)</span>
                </label>
                <textarea
                  id="dr-msg"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="¿Qué te gustaría resolver con Call360?"
                  className={fieldClass}
                />
              </div>

              {/* ── Submit ────────────────────────────────── */}
              {requireConsent && (
                <div>
                  <label
                    htmlFor="dr-consent"
                    className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 p-3.5 transition-all hover:border-white/[0.15]"
                  >
                    <input
                      id="dr-consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-cyan-500"
                    />
                    <span className="text-xs leading-relaxed text-white/60">
                      Acepto ser contactado por Call360 por WhatsApp, llamada o
                      correo para recibir la demo solicitada.{" "}
                      <span className="text-cyan-400">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1 text-xs text-red-400">{errors.consent}</p>
                  )}
                </div>
              )}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-white/40">
                  🎁 {footerLabel} · asesoría sin costo
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-white transition-all hover:from-cyan-600 hover:to-blue-700 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.200 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  {ctaLabel}
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
