"use client";

import { useEffect, useId, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/formData";
import { trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "c360_exitpopup_v2";
const SHOW_AFTER_MS = 8000;
const MIN_SCROLL = 400;

interface FormData {
  name: string;
  phone: string;
  acceptContact: boolean;
}

const onlyDigits = (value: string) => value.replace(/\D/g, "").slice(0, 10);

export default function ExitIntentPopup() {
  const titleId = useId();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<FormData>({
    name: "",
    phone: "",
    acceptContact: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    const fire = () => {
      if (triggered) return;
      triggered = true;
      setVisible(true);
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && window.scrollY > MIN_SCROLL) {
        fire();
      }
    };

    const onScrollUp = () => {
      if (window.scrollY < 100) {
        const lastY = window.scrollY;
        if (lastY < window.scrollY - 80) fire();
      }
    };
    void onScrollUp;

    const timer = window.setTimeout(() => {
      if (window.scrollY > MIN_SCROLL) fire();
    }, SHOW_AFTER_MS);

    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.clearTimeout(timer);
    };
  }, []);

  const close = (persist: "session" | "permanent" = "session") => {
    setVisible(false);
    if (typeof window !== "undefined") {
      if (persist === "permanent") {
        localStorage.setItem(STORAGE_KEY, "1");
      } else {
        sessionStorage.setItem(STORAGE_KEY, "1");
      }
    }
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!data.name.trim() || data.name.trim().length < 2) {
      next.name = "Ingresa tu nombre";
    }
    if (!/^\d{10}$/.test(data.phone)) {
      next.phone = "Ingresa un celular válido (10 dígitos)";
    }
    if (!data.acceptContact) next.acceptContact = "Debes aceptar para continuar";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    trackEvent("exit_intent_lead_captured", {
      source: "exit_intent_popup",
      lead_magnet: "7_consejos_ventas_internet",
    });
    const fullPhone = `+57 ${data.phone}`;
    const message = `Hola Call360 👋

Quiero recibir la guía "7 consejos para aumentar tus ventas en internet".

👤 Mi nombre: ${data.name.trim()}
📱 Mi WhatsApp: ${fullPhone}

Por favor confírmenme el envío y envíenme la guía. ¡Gracias!`;
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => close("permanent"), 2000);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto p-4 pt-20 pb-6 sm:p-6 sm:pt-24"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={() => close("session")}
        aria-hidden="true"
      />
      <div className="relative z-10 my-auto w-full max-w-md max-h-[calc(100vh-100px)] overflow-y-auto overflow-x-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] shadow-2xl shadow-cyan-500/10">
        <button
          type="button"
          onClick={() => close("session")}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-10 rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="bg-gradient-to-br from-amber-500/20 via-violet-500/10 to-cyan-500/20 p-6 pb-5">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
            📈 Guía gratis
          </div>
          <h2 id={titleId} className="text-2xl font-black text-white">
            🚀 IMPULSA TUS VENTAS
          </h2>
          <p className="mt-1.5 text-sm text-white/70">
            Descarga gratis:{" "}
            <span className="font-bold text-white">
              &ldquo;7 consejos para aumentar tus ventas en internet&rdquo;
            </span>
            . Te enviamos la guía a tu WhatsApp + una asesoría gratuita para multiplicar tus resultados.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">¡Listo! Revisa tu WhatsApp</h3>
            <p className="mt-1 text-sm text-white/50">Te enviamos la guía y agendamos la llamada.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 p-6 pt-5" noValidate>
            <div>
              <label htmlFor="c360-exit-name" className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/50">
                Nombre <span className="text-red-400" aria-hidden="true">*</span>
              </label>
              <input
                id="c360-exit-name"
                type="text"
                required
                autoComplete="name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Tu nombre completo"
                aria-invalid={Boolean(errors.name) || undefined}
                className="w-full rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="c360-exit-phone" className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/50">
                Teléfono / WhatsApp <span className="text-red-400" aria-hidden="true">*</span>
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
                  id="c360-exit-phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  autoComplete="tel-national"
                  required
                  maxLength={10}
                  value={data.phone}
                  onChange={(e) =>
                    setData({ ...data, phone: onlyDigits(e.target.value) })
                  }
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
                  aria-describedby={errors.phone ? "c360-exit-phone-err" : undefined}
                  className="flex-1 bg-transparent px-3.5 py-2.5 text-sm text-white placeholder-white/30 outline-none"
                />
              </div>
              {errors.phone && (
                <p id="c360-exit-phone-err" className="mt-1 text-xs text-red-400">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="pt-1">
              <label className="flex items-start gap-2 text-xs text-white/50">
                <input
                  type="checkbox"
                  checked={data.acceptContact}
                  onChange={(e) => setData({ ...data, acceptContact: e.target.checked })}
                  className="mt-0.5 h-3.5 w-3.5 rounded border-white/20 bg-[#0a0a0f] accent-cyan-500"
                />
                <span>
                  Acepto recibir la guía y contacto comercial de Call360{" "}
                  <span className="text-red-400" aria-hidden="true">*</span>
                </span>
              </label>
              {errors.acceptContact && (
                <p className="mt-1 text-xs text-red-400">{errors.acceptContact}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 text-sm font-bold text-white transition-all hover:from-amber-600 hover:to-orange-600 hover:shadow-lg hover:shadow-amber-500/20"
            >
              📲 Enviar guía a mi WhatsApp
            </button>

            <button
              type="button"
              onClick={() => close("permanent")}
              className="block w-full text-center text-[11px] text-white/40 underline hover:text-white/60"
            >
              No quiero la guía, no mostrar de nuevo
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
