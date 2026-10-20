"use client";

import { useEffect, useId, useRef, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/formData";
import { trackEvent } from "@/lib/analytics";

type IndustryId =
  | "clinicas"
  | "barberias"
  | "restaurantes"
  | "colegios"
  | "inmobiliarias"
  | "seguros";

const SERVICE_OPTIONS = [
  { id: "crm-whatsapp", label: "CRM WhatsApp" },
  { id: "pagina-web", label: "Página Web" },
  { id: "crm-llamadas", label: "CRM de Llamadas" },
  { id: "marketing-digital", label: "Marketing Digital" },
  { id: "asesoria", label: "No estoy seguro, quiero asesoría" },
] as const;

type ServiceOptionId = (typeof SERVICE_OPTIONS)[number]["id"];

type FieldType = "text" | "number" | "select" | "radio" | "checkbox" | "textarea";

interface FieldOption {
  value: string;
  label: string;
}

interface FieldDef {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: FieldOption[];
  placeholder?: string;
  min?: number;
  max?: number;
}

const INDUSTRY_FIELDS: Record<IndustryId, FieldDef[]> = {
  clinicas: [
    {
      key: "specialty",
      label: "Tipo de especialidad",
      type: "select",
      required: true,
      options: [
        { value: "odontologia", label: "Odontología" },
        { value: "medicina-general", label: "Medicina general" },
        { value: "estetica", label: "Estética" },
        { value: "psicologia", label: "Psicología" },
        { value: "otra", label: "Otra" },
      ],
    },
    {
      key: "patientsPerWeek",
      label: "Pacientes por semana (aprox.)",
      type: "number",
      required: true,
      min: 0,
      max: 9999,
      placeholder: "Ej: 30",
    },
    {
      key: "schedulingSystem",
      label: "¿Usas algún sistema de agendamiento?",
      type: "radio",
      required: true,
      options: [
        { value: "si", label: "Sí" },
        { value: "no", label: "No" },
        { value: "whatsapp", label: "Solo WhatsApp personal" },
      ],
    },
  ],
  barberias: [
    {
      key: "locations",
      label: "¿Cuántas sedes tienes?",
      type: "radio",
      required: true,
      options: [
        { value: "1", label: "1 sede" },
        { value: "2-3", label: "2-3 sedes" },
        { value: "4+", label: "4+ sedes" },
      ],
    },
    {
      key: "barbers",
      label: "¿Cuántos barberos/estilistas trabajan?",
      type: "number",
      required: true,
      min: 1,
      placeholder: "Ej: 3",
    },
    {
      key: "pain",
      label: "Principal dolor actual",
      type: "select",
      required: true,
      options: [
        { value: "no-shows", label: "Muchas cancelaciones/no-shows" },
        { value: "no-database", label: "No tengo base de datos de clientes" },
        { value: "manual", label: "Reservas manuales por WhatsApp" },
        { value: "fidelizar", label: "Quiero fidelizar clientes" },
      ],
    },
  ],
  restaurantes: [
    {
      key: "businessType",
      label: "Tipo de negocio",
      type: "radio",
      required: true,
      options: [
        { value: "fisico", label: "Restaurante físico" },
        { value: "domicilios", label: "Solo domicilios" },
        { value: "cloud-kitchen", label: "Cloud kitchen" },
      ],
    },
    {
      key: "hasWebsite",
      label: "¿Tienes página web actualmente?",
      type: "radio",
      required: true,
      options: [
        { value: "si-malo", label: "Sí, pero no vende" },
        { value: "si-bien", label: "Sí, funciona bien" },
        { value: "no", label: "No tengo" },
      ],
    },
    {
      key: "ordersPerWeek",
      label: "Pedidos por semana (aprox.)",
      type: "number",
      required: true,
      min: 0,
      placeholder: "Ej: 80",
    },
  ],
  colegios: [
    {
      key: "institutionType",
      label: "Tipo de institución",
      type: "select",
      required: true,
      options: [
        { value: "colegio", label: "Colegio" },
        { value: "idiomas", label: "Academia de idiomas" },
        { value: "pre", label: "Preparación preuniversitaria" },
        { value: "deportiva", label: "Academia deportiva/artística" },
        { value: "otro", label: "Otro" },
      ],
    },
    {
      key: "enrollmentSeason",
      label: "Época de matrícula",
      type: "radio",
      required: true,
      options: [
        { value: "ahora", label: "Estamos en matrícula ahora" },
        { value: "1-3", label: "Matrícula en 1-3 meses" },
        { value: "4+", label: "Matrícula en 4+ meses" },
      ],
    },
    {
      key: "students",
      label: "Cantidad aproximada de estudiantes",
      type: "number",
      required: true,
      min: 0,
      placeholder: "Ej: 250",
    },
  ],
  inmobiliarias: [
    {
      key: "agents",
      label: "Cantidad de asesores",
      type: "number",
      required: true,
      min: 1,
      placeholder: "Ej: 5",
    },
    {
      key: "leadsPerMonth",
      label: "Leads mensuales aproximados",
      type: "select",
      required: true,
      options: [
        { value: "<50", label: "Menos de 50" },
        { value: "50-200", label: "50-200" },
        { value: "200-500", label: "200-500" },
        { value: "500+", label: "500+" },
      ],
    },
    {
      key: "portals",
      label: "Portales donde publicas",
      type: "checkbox",
      options: [
        { value: "olx", label: "OLX" },
        { value: "facebook", label: "Facebook Marketplace" },
        { value: "mercadolibre", label: "Mercado Libre" },
        { value: "instagram", label: "Instagram" },
        { value: "propia", label: "Página propia" },
        { value: "otros", label: "Otros" },
      ],
    },
  ],
  seguros: [
    {
      key: "operationType",
      label: "Tipo de operación",
      type: "select",
      required: true,
      options: [
        { value: "cobranza", label: "Cobranza" },
        { value: "ventas", label: "Ventas de seguros/créditos" },
        { value: "renovaciones", label: "Renovaciones" },
        { value: "atencion", label: "Atención al cliente" },
        { value: "mixto", label: "Mixto" },
      ],
    },
    {
      key: "dbSize",
      label: "Tamaño de base de datos (clientes)",
      type: "number",
      required: true,
      min: 0,
      placeholder: "Ej: 5000",
    },
    {
      key: "usesPredictive",
      label: "¿Usan marcación predictiva actualmente?",
      type: "radio",
      required: true,
      options: [
        { value: "si", label: "Sí" },
        { value: "no", label: "No" },
        { value: "no-se", label: "No sé qué es eso" },
      ],
    },
  ],
};

const INDUSTRY_LABELS: Record<IndustryId, string> = {
  clinicas: "Clínicas y Consultorios",
  barberias: "Barberías y Salones",
  restaurantes: "Restaurantes y Domicilios",
  colegios: "Colegios y Academias",
  inmobiliarias: "Inmobiliarias",
  seguros: "Aseguradoras y Financieras",
};

const BUSINESS_PLACEHOLDERS: Record<IndustryId, string> = {
  clinicas: "Clínica / Consultorio (opcional)",
  barberias: "Barbería / Salón (opcional)",
  restaurantes: "Restaurante / Marca (opcional)",
  colegios: "Colegio / Academia (opcional)",
  inmobiliarias: "Inmobiliaria (opcional)",
  seguros: "Aseguradora / Financiera (opcional)",
};

const HEADER_GRADIENTS: Record<IndustryId, string> = {
  clinicas: "from-cyan-500/30 via-cyan-500/10 to-blue-500/25",
  barberias: "from-violet-500/30 via-violet-500/10 to-purple-500/25",
  restaurantes: "from-emerald-500/30 via-emerald-500/10 to-green-500/25",
  colegios: "from-amber-500/30 via-amber-500/10 to-orange-500/25",
  inmobiliarias: "from-rose-500/30 via-rose-500/10 to-pink-500/25",
  seguros: "from-cyan-500/30 via-cyan-500/10 to-blue-500/25",
};

const HEADER_TEXT: Record<IndustryId, string> = {
  clinicas: "text-cyan-300",
  barberias: "text-violet-300",
  restaurantes: "text-emerald-300",
  colegios: "text-amber-300",
  inmobiliarias: "text-rose-300",
  seguros: "text-cyan-300",
};

interface VerticalSegmentQuoteModalProps {
  industry: IndustryId | null;
  onClose: () => void;
}

const onlyDigits = (value: string) => value.replace(/\D/g, "").slice(0, 10);

export default function VerticalSegmentQuoteModal({
  industry,
  onClose,
}: VerticalSegmentQuoteModalProps) {
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(industry !== null);
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [helpWith, setHelpWith] = useState("");
  const [services, setServices] = useState<Set<ServiceOptionId>>(new Set());
  const [industryValues, setIndustryValues] = useState<Record<string, string>>({});
  const [industryChecks, setIndustryChecks] = useState<Record<string, Set<string>>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [prevIndustry, setPrevIndustry] = useState<IndustryId | null>(industry);
  if (industry !== prevIndustry) {
    setPrevIndustry(industry);
    const nextOpen = industry !== null;
    setOpen(nextOpen);
    if (nextOpen) {
      setSubmitted(false);
      setFullName("");
      setBusinessName("");
      setPhone("");
      setHelpWith("");
      setServices(new Set());
      setIndustryValues({});
      setIndustryChecks({});
      setErrors({});
    }
  }

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(
      () => firstFieldRef.current?.focus({ preventScroll: true }),
      50
    );
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!industry) return null;

  const fields = INDUSTRY_FIELDS[industry];
  const headerGradient = HEADER_GRADIENTS[industry];
  const headerText = HEADER_TEXT[industry];
  const industryName = INDUSTRY_LABELS[industry];
  const businessPlaceholder = BUSINESS_PLACEHOLDERS[industry];

  const toggleService = (id: ServiceOptionId) => {
    setServices((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleIndustryCheck = (key: string, value: string) => {
    setIndustryChecks((prev) => {
      const current = new Set(prev[key] ?? []);
      if (current.has(value)) current.delete(value);
      else current.add(value);
      return { ...prev, [key]: current };
    });
  };

  const setIndustryValue = (key: string, value: string) => {
    setIndustryValues((prev) => ({ ...prev, [key]: value }));
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      next.fullName = "Ingresa tu nombre";
    }
    if (!/^\d{10}$/.test(phone)) {
      next.phone = "Ingresa un celular válido (10 dígitos)";
    }
    if (!helpWith.trim() || helpWith.trim().length < 5) {
      next.helpWith = "Cuéntanos brevemente tu necesidad";
    }
    if (services.size === 0) {
      next.services = "Selecciona al menos un servicio";
    }
    for (const f of fields) {
      if (f.type === "checkbox") continue;
      if (f.required && !industryValues[f.key]?.trim()) {
        next[`field.${f.key}`] = "Este campo es obligatorio";
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const formatServiceList = () => {
    const labels = SERVICE_OPTIONS.filter((s) => services.has(s.id)).map((s) => s.label);
    return labels.length ? labels.join(", ") : "(no especificado)";
  };

  const buildMessage = (): string => {
    const lines: string[] = [
      "Hola Call360 👋",
      "",
      `Quiero cotizar para: ${industryName}`,
      "",
      "🧑 Mis datos:",
      `• Nombre: ${fullName.trim()}`,
      `• Negocio: ${businessName.trim() || "(no especificado)"}`,
      `• WhatsApp: +57 ${phone}`,
      "",
      "🛠️ Servicios de interés:",
      `• ${formatServiceList()}`,
      "",
      "📋 Sobre mi negocio:",
    ];
    for (const f of fields) {
      const value = industryValues[f.key]?.trim();
      if (f.type === "checkbox") {
        const selected = Array.from(industryChecks[f.key] ?? [])
          .map((v) => f.options?.find((o) => o.value === v)?.label ?? v)
          .join(", ");
        lines.push(`• ${f.label}: ${selected || "(no especificado)"}`);
      } else {
        const label = f.options?.find((o) => o.value === value)?.label ?? value ?? "";
        lines.push(`• ${f.label}: ${label || "(no especificado)"}`);
      }
    }
    lines.push(
      "",
      "💬 ¿En qué les puedo ayudar?",
      helpWith.trim()
    );
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    trackEvent("form_submitted", {
      source: "vertical_segment_quote",
      industry,
      services: Array.from(services).join(","),
    });
    window.open(buildWhatsAppUrl(buildMessage()), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const inputBase =
    "w-full rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20";
  const inputError =
    "border-red-500/50 focus:border-red-500/60 focus:ring-red-500/20";
  const labelBase =
    "mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/50";
  const reqMark = <span className="text-red-400" aria-hidden="true">*</span>;

  const fieldId = (key: string) => `vsq-${industry}-${key}`;

  const renderField = (f: FieldDef) => {
    const id = fieldId(f.key);
    const errKey = `field.${f.key}`;
    const isErr = Boolean(errors[errKey]);
    const value = industryValues[f.key] ?? "";
    const onChange = (v: string) => setIndustryValue(f.key, v);

    if (f.type === "select") {
      return (
        <div>
          <label className={labelBase} htmlFor={id}>
            {f.label} {f.required && reqMark}
          </label>
          <select
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${inputBase} ${isErr ? inputError : ""}`}
            aria-invalid={isErr || undefined}
          >
            <option value="">Selecciona una opción</option>
            {f.options?.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {isErr && <p className="mt-1 text-xs text-red-400">{errors[errKey]}</p>}
        </div>
      );
    }

    if (f.type === "radio") {
      return (
        <div>
          <span className={labelBase}>
            {f.label} {f.required && reqMark}
          </span>
          <div className="mt-1 flex flex-wrap gap-2">
            {f.options?.map((o) => {
              const active = value === o.value;
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => onChange(o.value)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                    active
                      ? "border-cyan-500/50 bg-cyan-500/15 text-cyan-300"
                      : "border-white/[0.08] bg-[#0a0a0f]/60 text-white/60 hover:border-white/[0.15]"
                  }`}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
          {isErr && <p className="mt-1 text-xs text-red-400">{errors[errKey]}</p>}
        </div>
      );
    }

    if (f.type === "checkbox") {
      const checked = industryChecks[f.key] ?? new Set<string>();
      return (
        <div>
          <span className={labelBase}>{f.label}</span>
          <div className="mt-1 flex flex-wrap gap-2">
            {f.options?.map((o) => {
              const active = checked.has(o.value);
              return (
                <button
                  key={o.value}
                  type="button"
                  onClick={() => toggleIndustryCheck(f.key, o.value)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                    active
                      ? "border-cyan-500/50 bg-cyan-500/15 text-cyan-300"
                      : "border-white/[0.08] bg-[#0a0a0f]/60 text-white/60 hover:border-white/[0.15]"
                  }`}
                >
                  {active ? "✓ " : ""}
                  {o.label}
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    if (f.type === "number") {
      return (
        <div>
          <label className={labelBase} htmlFor={id}>
            {f.label} {f.required && reqMark}
          </label>
          <input
            id={id}
            type="number"
            inputMode="numeric"
            min={f.min}
            max={f.max}
            value={value}
            onChange={(e) => onChange(e.target.value.replace(/[^\d.]/g, ""))}
            placeholder={f.placeholder}
            className={`${inputBase} ${isErr ? inputError : ""}`}
            aria-invalid={isErr || undefined}
          />
          {isErr && <p className="mt-1 text-xs text-red-400">{errors[errKey]}</p>}
        </div>
      );
    }

    return (
      <div>
        <label className={labelBase} htmlFor={id}>
          {f.label} {f.required && reqMark}
        </label>
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={f.placeholder}
          className={`${inputBase} ${isErr ? inputError : ""}`}
          aria-invalid={isErr || undefined}
        />
        {isErr && <p className="mt-1 text-xs text-red-400">{errors[errKey]}</p>}
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-[105] flex items-center justify-center overflow-y-auto p-4 pt-20 pb-6 sm:p-6 sm:pt-24"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 my-auto w-full max-w-[500px] max-h-[calc(100vh-100px)] overflow-y-auto rounded-3xl border border-white/[0.08] bg-[#12121a] shadow-2xl shadow-black/40">
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-10 rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className={`relative bg-gradient-to-br ${headerGradient} px-6 pb-6 pt-7`}>
          <div className="mb-3 flex items-center gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-2xl shadow-inner shadow-black/20"
              aria-hidden="true"
            >
              {INDUSTRY_FIELDS[industry] ? (
                <IndustryEmoji industry={industry} />
              ) : null}
            </div>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${headerText}`}
            >
              Solicitar cotización
            </span>
          </div>
          <h2
            id={titleId}
            className="text-[26px] font-black leading-tight tracking-tight text-white"
          >
            {industryName}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Cuéntanos sobre tu negocio para preparar una cotización a tu medida.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className={`text-lg font-bold text-white`}>
              ¡Gracias {fullName.trim().split(" ")[0]}!
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Hemos recibido tu solicitud. Un asesor se comunicará contigo por
              WhatsApp en menos de 30 minutos.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 text-sm font-bold text-white transition-all hover:from-emerald-600 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Entendido
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 p-6 pt-5" noValidate>
            <div>
              <label className={labelBase} htmlFor="vsq-name">
                Nombre completo {reqMark}
              </label>
              <input
                ref={firstFieldRef}
                id="vsq-name"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Tu nombre"
                className={`${inputBase} ${errors.fullName ? inputError : ""}`}
                aria-invalid={Boolean(errors.fullName) || undefined}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className={labelBase} htmlFor="vsq-business">
                Nombre del negocio
              </label>
              <input
                id="vsq-business"
                type="text"
                autoComplete="organization"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder={businessPlaceholder}
                className={inputBase}
              />
            </div>

            <div>
              <label className={labelBase} htmlFor="vsq-phone">
                Número de WhatsApp {reqMark}
              </label>
              <div
                className={`flex w-full overflow-hidden rounded-xl border bg-[#0a0a0f]/60 transition-colors focus-within:ring-2 ${
                  errors.phone
                    ? "border-red-500/50 focus-within:border-red-500/60 focus-within:ring-red-500/20"
                    : "border-white/[0.08] focus-within:border-cyan-500/40 focus-within:ring-cyan-500/20"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="flex select-none items-center justify-center border-r border-white/[0.08] bg-white/[0.04] px-3 text-sm font-semibold text-white/60"
                >
                  +57
                </span>
                <input
                  id="vsq-phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  autoComplete="tel-national"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(onlyDigits(e.target.value))}
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]/.test(e.key) &&
                      ![
                        "Backspace",
                        "Delete",
                        "Tab",
                        "ArrowLeft",
                        "ArrowRight",
                        "Home",
                        "End",
                      ].includes(e.key) &&
                      !e.metaKey &&
                      !e.ctrlKey
                    ) {
                      e.preventDefault();
                    }
                  }}
                  placeholder="320 123 4567"
                  aria-invalid={Boolean(errors.phone) || undefined}
                  className="flex-1 bg-transparent px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
              )}
            </div>

            <div>
              <span className={labelBase}>
                Servicios de interés {reqMark}
              </span>
              <div className="mt-1 flex flex-wrap gap-2">
                {SERVICE_OPTIONS.map((s) => {
                  const active = services.has(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleService(s.id)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                        active
                          ? "border-cyan-500/50 bg-cyan-500/15 text-cyan-300"
                          : "border-white/[0.08] bg-[#0a0a0f]/60 text-white/60 hover:border-white/[0.15]"
                      }`}
                    >
                      {active ? "✓ " : ""}
                      {s.label}
                    </button>
                  );
                })}
              </div>
              {errors.services && (
                <p className="mt-1 text-xs text-red-400">{errors.services}</p>
              )}
            </div>

            {fields.map((f) => (
              <div key={f.key}>{renderField(f)}</div>
            ))}

            <div>
              <label className={labelBase} htmlFor="vsq-help">
                ¿En qué podemos ayudarte? {reqMark}
              </label>
              <textarea
                id="vsq-help"
                rows={3}
                value={helpWith}
                onChange={(e) => setHelpWith(e.target.value)}
                placeholder="Cuéntanos brevemente tu necesidad..."
                className={`${inputBase} resize-none ${errors.helpWith ? inputError : ""}`}
                aria-invalid={Boolean(errors.helpWith) || undefined}
              />
              {errors.helpWith && (
                <p className="mt-1 text-xs text-red-400">{errors.helpWith}</p>
              )}
            </div>

            <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-5 py-3 text-sm font-semibold text-white/70 transition-colors hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 text-sm font-bold text-white transition-all hover:from-emerald-600 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.01] ${headerText}`}
              >
                📩 Enviar solicitud
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function IndustryEmoji({ industry }: { industry: IndustryId }) {
  const map: Record<IndustryId, string> = {
    clinicas: "🦷",
    barberias: "💈",
    restaurantes: "🍽️",
    colegios: "🎓",
    inmobiliarias: "🏠",
    seguros: "🛡️",
  };
  return <span>{map[industry]}</span>;
}
