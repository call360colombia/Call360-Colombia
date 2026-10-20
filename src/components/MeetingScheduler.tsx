"use client";

import { useId, useMemo, useState } from "react";
import {
  CITIES,
  SERVICE_LABELS,
  buildWhatsAppUrl,
  type ServiceType,
} from "@/lib/formData";
import { trackEvent } from "@/lib/analytics";

const TIME_SLOTS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
  "17:00 - 18:00",
];

const SERVICE_OPTIONS: { id: ServiceType; label: string; emoji: string }[] = [
  { id: "pagina-web", label: "Página Web", emoji: "🌐" },
  { id: "crm-whatsapp", label: "CRM WhatsApp", emoji: "💬" },
  { id: "crm-llamadas", label: "CRM Llamadas", emoji: "📞" },
  { id: "integrado", label: "Ecosistema completo", emoji: "🚀" },
  { id: "marketing-digital", label: "Marketing Digital", emoji: "📢" },
];

const MONTHS_ES = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
];

const DAYS_ES = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

interface MeetingSchedulerProps {
  defaultService?: ServiceType;
  triggerLabel?: string;
  triggerClassName?: string;
  triggerVariant?: "primary" | "cyan" | "violet";
}

const variantStyles: Record<NonNullable<MeetingSchedulerProps["triggerVariant"]>, string> = {
  primary:
    "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 hover:shadow-emerald-500/20",
  cyan: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:shadow-cyan-500/20",
  violet:
    "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 hover:shadow-violet-500/20",
};

export default function MeetingScheduler({
  defaultService = "integrado",
  triggerLabel = "Agendar reunión",
  triggerClassName = "",
  triggerVariant = "cyan",
}: MeetingSchedulerProps) {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [service, setService] = useState<ServiceType>(defaultService);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const days = useMemo(() => {
    const out: { iso: string; date: number; month: string; weekday: string }[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 1; i <= 10; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      if (d.getDay() === 0) continue;
      out.push({
        iso: d.toISOString().split("T")[0],
        date: d.getDate(),
        month: MONTHS_ES[d.getMonth()],
        weekday: DAYS_ES[d.getDay()],
      });
    }
    return out;
  }, []);

  const reset = () => {
    setStep(1);
    setService(defaultService);
    setSelectedDate("");
    setSelectedSlot("");
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setCity("");
    setNotes("");
    setErrors({});
    setSubmitted(false);
  };

  const close = () => {
    setOpen(false);
    setTimeout(reset, 300);
  };

  const validateContact = () => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Ingresa tu nombre";
    if (!company.trim()) next.company = "Empresa requerida";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Email inválido";
    }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 7) {
      next.phone = "Celular inválido";
    }
    if (!city.trim()) next.city = "Selecciona tu ciudad";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleConfirm = () => {
    if (!selectedDate) {
      setErrors({ date: "Selecciona un día" });
      return;
    }
    if (!selectedSlot) {
      setErrors({ slot: "Selecciona un horario" });
      return;
    }
    setErrors({});
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateContact()) return;
    trackEvent("meeting_scheduled", {
      service,
      date: selectedDate,
      slot: selectedSlot,
    });
    const dayLabel = days.find((d) => d.iso === selectedDate);
    const dateLabel = dayLabel
      ? `${dayLabel.weekday} ${dayLabel.date} ${dayLabel.month}`
      : selectedDate;
    const message = `Hola Call360 👋

Quiero agendar una reunión/demo:

📅 Fecha preferida: ${dateLabel}
🕐 Horario: ${selectedSlot}
🎯 Tema: ${SERVICE_LABELS[service]}

👤 Nombre: ${name}
🏢 Empresa: ${company}
📧 Email: ${email}
📱 Celular: ${phone}
📍 Ciudad: ${city}
${notes ? `\n💬 Notas: ${notes}` : ''}

Quedo atento a la confirmación. ¡Gracias!`;

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(close, 2500);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg ${variantStyles[triggerVariant]} ${triggerClassName}`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        {triggerLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[105] flex items-center justify-center overflow-y-auto p-4 pt-20 pb-6 sm:p-6 sm:pt-24"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={close}
            aria-hidden="true"
          />
          <div className="relative z-10 my-auto w-full max-w-lg max-h-[calc(100vh-100px)] overflow-y-auto rounded-3xl border border-white/[0.08] bg-[#12121a] shadow-2xl shadow-cyan-500/10">
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/[0.06] bg-[#12121a]/95 p-5 pb-4 backdrop-blur-sm">
              <div>
                <h2 id={titleId} className="text-lg font-black text-white">
                  {submitted
                    ? "¡Reunión agendada!"
                    : step === 1
                      ? "¿Qué te interesa?"
                      : step === 2
                        ? "Elige día y hora"
                        : "Tus datos de contacto"}
                </h2>
                <p className="mt-0.5 text-xs text-white/50">
                  {submitted
                    ? "Revisa tu WhatsApp para confirmar"
                    : "Reunión de 30 min · Videollamada o presencial Bogotá"}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Cerrar"
                className="shrink-0 rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-white">¡Listo!</h3>
                <p className="mt-2 text-sm text-white/60">
                  Abrimos WhatsApp con todos los detalles. Te confirmaremos en menos de 1 hora.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 px-5 pt-4">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1 flex-1 rounded-full transition-all ${
                        s <= step ? "bg-gradient-to-r from-cyan-500 to-violet-500" : "bg-white/[0.06]"
                      }`}
                    />
                  ))}
                </div>

                <div className="p-5">
                  {step === 1 && (
                    <div>
                      <p className="mb-3 text-sm text-white/60">
                        Selecciona el tema principal de la reunión:
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {SERVICE_OPTIONS.map((opt) => {
                          const active = service === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => {
                                setService(opt.id);
                                setStep(2);
                              }}
                              className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                                active
                                  ? "border-cyan-500/40 bg-cyan-500/10"
                                  : "border-white/[0.08] bg-[#0a0a0f]/60 hover:border-white/[0.15]"
                              }`}
                            >
                              <span className="text-xl">{opt.emoji}</span>
                              <span className="text-sm font-bold text-white">{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <p className="mb-3 text-sm text-white/60">
                        Próximos días disponibles (lun-sáb):
                      </p>
                      <div className="mb-5 grid grid-cols-3 gap-2 sm:grid-cols-5">
                        {days.map((d) => {
                          const active = selectedDate === d.iso;
                          return (
                            <button
                              key={d.iso}
                              type="button"
                              onClick={() => {
                                setSelectedDate(d.iso);
                                setErrors((prev) => {
                                  const { date: _date, ...rest } = prev;
                                  void _date;
                                  return rest;
                                });
                              }}
                              className={`rounded-xl border p-2 text-center transition-all ${
                                active
                                  ? "border-cyan-500/50 bg-cyan-500/15 text-cyan-300"
                                  : "border-white/[0.08] bg-[#0a0a0f]/60 text-white/60 hover:border-white/[0.15]"
                              }`}
                            >
                              <div className="text-[10px] font-bold uppercase">{d.weekday}</div>
                              <div className="text-lg font-black">{d.date}</div>
                              <div className="text-[10px] uppercase">{d.month}</div>
                            </button>
                          );
                        })}
                      </div>
                      {errors.date && <p className="mb-3 text-xs text-red-400">{errors.date}</p>}

                      {selectedDate && (
                        <>
                          <p className="mb-2 text-sm text-white/60">Horario disponible:</p>
                          <div className="mb-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                            {TIME_SLOTS.map((slot) => {
                              const active = selectedSlot === slot;
                              return (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => {
                                    setSelectedSlot(slot);
                                    setErrors((prev) => {
                                      const { slot: _slot, ...rest } = prev;
                                      void _slot;
                                      return rest;
                                    });
                                  }}
                                  className={`rounded-lg border px-2 py-2 text-xs font-bold transition-all ${
                                    active
                                      ? "border-cyan-500/50 bg-cyan-500/15 text-cyan-300"
                                      : "border-white/[0.08] bg-[#0a0a0f]/60 text-white/60 hover:border-white/[0.15]"
                                  }`}
                                >
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                          {errors.slot && <p className="mb-3 text-xs text-red-400">{errors.slot}</p>}
                        </>
                      )}

                      <div className="mt-5 flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="rounded-full border border-white/[0.08] bg-transparent px-4 py-2 text-sm font-semibold text-white/60 hover:text-white"
                        >
                          ← Atrás
                        </button>
                        <button
                          type="button"
                          onClick={handleConfirm}
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-sm font-bold text-white hover:from-cyan-600 hover:to-violet-600"
                        >
                          Continuar →
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="rounded-xl border border-white/[0.08] bg-[#0f0f17]/60 p-3 text-xs text-white/70">
                        <div className="font-bold text-white">
                          {SERVICE_OPTIONS.find((o) => o.id === service)?.emoji}{" "}
                          {SERVICE_LABELS[service]}
                        </div>
                        <div className="mt-1 text-white/50">
                          {(() => {
                            const d = days.find((x) => x.iso === selectedDate);
                            return d
                              ? `${d.weekday} ${d.date} ${d.month} · ${selectedSlot}`
                              : "";
                          })()}
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/50">
                            Nombre
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Juan Pérez"
                            className="w-full rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 px-3 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-500/40"
                          />
                          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/50">
                            Empresa
                          </label>
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Mi Negocio"
                            className="w-full rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 px-3 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-500/40"
                          />
                          {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company}</p>}
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/50">
                            Email
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="juan@empresa.com"
                            className="w-full rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 px-3 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-500/40"
                          />
                          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/50">
                            Celular
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+57 320 369 3949"
                            className="w-full rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 px-3 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-500/40"
                          />
                          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/50">
                          Ciudad
                        </label>
                        <select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-500/40"
                        >
                          <option value="">Selecciona</option>
                          {CITIES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        {errors.city && <p className="mt-1 text-xs text-red-400">{errors.city}</p>}
                      </div>

                      <div>
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/50">
                          ¿Algo que deberíamos saber? (opcional)
                        </label>
                        <textarea
                          rows={2}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Contexto, dudas, objetivos..."
                          className="w-full rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 px-3 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-500/40"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="rounded-full border border-white/[0.08] bg-transparent px-4 py-2 text-sm font-semibold text-white/60 hover:text-white"
                        >
                          ← Atrás
                        </button>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2.5 text-sm font-bold text-white hover:from-emerald-600 hover:to-green-700"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                          </svg>
                          Confirmar por WhatsApp
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
