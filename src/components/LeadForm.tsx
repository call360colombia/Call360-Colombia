"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  CITIES,
  type BaseLeadData,
  type InstallationMode,
} from "@/lib/formData";

export interface LeadFormContext {
  title: string;
  subtitle?: string;
  highlights?: { label: string; value: string }[];
  installation?: {
    show: boolean;
    defaultValue?: InstallationMode;
  };
}

export interface LeadFormSubmitData extends BaseLeadData {
  installation: InstallationMode;
  message?: string;
}

interface LeadFormProps {
  open: boolean;
  onClose: () => void;
  context: LeadFormContext;
  onSubmit: (data: LeadFormSubmitData) => void;
  ctaLabel?: string;
  children?: React.ReactNode;
}

const fieldClass =
  "w-full rounded-xl border border-white/[0.08] bg-[#0c0c14]/90 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/15";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/55";

const errorClass = "mt-1.5 text-xs font-semibold text-rose-400";

export default function LeadForm({
  open,
  onClose,
  context,
  onSubmit,
  ctaLabel = "Enviar a WhatsApp",
  children,
}: LeadFormProps) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const [prevOpen, setPrevOpen] = useState(open);
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [installation, setInstallation] = useState<InstallationMode>(
    context.installation?.defaultValue ?? "no-aplica"
  );
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (open !== prevOpen) {
    setPrevOpen(open);
    setFullName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setCity("");
    setInstallation(context.installation?.defaultValue ?? "no-aplica");
    setMessage("");
    setErrors({});
  }

  useEffect(() => {
    if (!open) return;

    const activeElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.setTimeout(() => {
      firstFieldRef.current?.focus({ preventScroll: true });
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (activeElement instanceof HTMLElement) {
        activeElement.focus({ preventScroll: true });
      }
    };
  }, [context.installation?.defaultValue, onClose, open]);

  const validate = (): boolean => {
    const next: Record<string, string> = {};

    if (!fullName.trim()) next.fullName = "Ingresa tu nombre completo";
    if (!company.trim()) next.company = "Ingresa el nombre de tu empresa";

    if (!email.trim()) {
      next.email = "Ingresa tu email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Email inválido";
    }

    if (!phone.trim()) {
      next.phone = "Ingresa tu celular";
    } else if (phone.replace(/\D/g, "").length < 7) {
      next.phone = "Celular inválido";
    }

    if (!city.trim()) next.city = "Selecciona tu ciudad";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    onSubmit({
      fullName: fullName.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      city,
      installation,
      message: message.trim() || undefined,
    });
  };

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-white/15 px-3 py-4 backdrop-blur-md sm:items-center sm:bg-white/20 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={context.subtitle ? descriptionId : undefined}
    >
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={onClose}
        aria-label="Cerrar formulario"
        tabIndex={-1}
      />

      <div
        ref={dialogRef}
        className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/[0.10] bg-[#12121a]/95 shadow-2xl shadow-emerald-950/40 ring-1 ring-white/[0.04] sm:my-auto"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] bg-[#12121a]/95 px-5 py-5 backdrop-blur sm:px-7 sm:py-6">
          <div className="min-w-0">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300/80">
              Cotización rápida
            </p>
            <h2
              id={titleId}
              className="text-balance text-2xl font-black leading-tight text-white sm:text-3xl"
            >
              {context.title}
            </h2>
            {context.subtitle && (
              <p id={descriptionId} className="mt-2 text-sm leading-relaxed text-white/55">
                {context.subtitle}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] p-2 text-white/60 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          {context.highlights && context.highlights.length > 0 && (
            <div className="mb-5 grid gap-3 sm:grid-cols-2">
              {context.highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-4"
                >
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/45">
                    {highlight.label}
                  </div>
                  <div className="mt-1 text-sm font-bold text-white">
                    {highlight.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {children && <div className="mb-5">{children}</div>}

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="lf-name">
                  Nombre completo
                </label>
                <input
                  ref={firstFieldRef}
                  id="lf-name"
                  type="text"
                  autoComplete="name"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Juan Pérez"
                  className={fieldClass}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "lf-name-error" : undefined}
                />
                {errors.fullName && (
                  <p id="lf-name-error" className={errorClass}>
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass} htmlFor="lf-company">
                  Empresa
                </label>
                <input
                  id="lf-company"
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="Mi Negocio S.A.S"
                  className={fieldClass}
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? "lf-company-error" : undefined}
                />
                {errors.company && (
                  <p id="lf-company-error" className={errorClass}>
                    {errors.company}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="lf-email">
                  Email
                </label>
                <input
                  id="lf-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="juan@empresa.com"
                  className={fieldClass}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "lf-email-error" : undefined}
                />
                {errors.email && (
                  <p id="lf-email-error" className={errorClass}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass} htmlFor="lf-phone">
                  Celular
                </label>
                <input
                  id="lf-phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="320 369 3949"
                  className={fieldClass}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "lf-phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="lf-phone-error" className={errorClass}>
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className={context.installation?.show ? "" : "md:col-span-2"}>
                <label className={labelClass} htmlFor="lf-city">
                  Ciudad
                </label>
                <select
                  id="lf-city"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  className={fieldClass}
                  aria-invalid={!!errors.city}
                  aria-describedby={errors.city ? "lf-city-error" : undefined}
                >
                  <option value="">Selecciona tu ciudad</option>
                  {CITIES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <p id="lf-city-error" className={errorClass}>
                    {errors.city}
                  </p>
                )}
              </div>

              {context.installation?.show && (
                <div>
                  <label className={labelClass} htmlFor="lf-install">
                    Modalidad de instalación
                  </label>
                  <select
                    id="lf-install"
                    value={installation}
                    onChange={(event) =>
                      setInstallation(event.target.value as InstallationMode)
                    }
                    className={fieldClass}
                  >
                    <option value="no-aplica">No aplica</option>
                    <option value="remoto">Asistencia remota</option>
                    <option value="presencial-bogota">Presencial en Bogotá</option>
                  </select>
                </div>
              )}
            </div>

            <div>
              <label className={labelClass} htmlFor="lf-message">
                Mensaje (opcional)
              </label>
              <textarea
                id="lf-message"
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Cuéntanos brevemente qué necesitas..."
                className={`${fieldClass} min-h-32 resize-y`}
              />
            </div>

            <div className="flex flex-col gap-4 border-t border-white/[0.06] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-white/50">
                <span className="font-bold text-emerald-300">⚡</span> Te respondemos en menos de 5 minutos en horario laboral.
              </p>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:from-emerald-600 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-300/50 sm:w-auto"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                {ctaLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}
