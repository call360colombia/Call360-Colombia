"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  LICENSE_PRODUCTS,
  CITIES,
  formatCOP,
  buildWhatsAppUrl,
  calculateLicensePrice,
  type LicenseProduct,
} from "@/lib/formData";
import { buildQuoteMessage, type QuoteItem } from "@/lib/leadTemplates";

const TIME_SLOTS = [
  "Mañana (8am - 12pm)",
  "Tarde (12pm - 6pm)",
  "Noche (6pm - 8pm)",
  "Fin de semana",
];

const fieldClass =
  "w-full rounded-xl border border-white/[0.08] bg-[#0c0c14]/90 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/15";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/55";

interface LicenseQuoteModalProps {
  open: boolean;
  onClose: () => void;
  /** Producto preseleccionado al abrir desde un card */
  preselectedProduct?: LicenseProduct | null;
  preselectedQuantity?: number;
}

export default function LicenseQuoteModal({
  open,
  onClose,
  preselectedProduct,
  preselectedQuantity = 1,
}: LicenseQuoteModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const [items, setItems] = useState<QuoteItem[]>([]);
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [slot, setSlot] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  /* ── Reset & initialize when modal opens ───────────────── */
  const prevOpen = useRef(open);
  useEffect(() => {
    if (open && !prevOpen.current) {
      if (preselectedProduct) {
        setItems([{ productId: preselectedProduct.id, productName: preselectedProduct.name, quantity: preselectedQuantity, subtotal: 0 }]);
      } else {
        setItems([]);
      }
      setFullName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setCity("");
      setSlot("");
      setMessage("");
      setErrors({});
      setTimeout(() => firstFieldRef.current?.focus({ preventScroll: true }), 0);
    }
    prevOpen.current = open;
  }, [open, preselectedProduct, preselectedQuantity]);

  /* ── Focus trap ────────────────────────────────────────── */
  useEffect(() => {
    if (!open) return;
    const activeEl = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled"));
      if (focusable.length === 0) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
      if (activeEl instanceof HTMLElement) activeEl.focus({ preventScroll: true });
    };
  }, [open, onClose]);

  /* ── Toggle product in selection ───────────────────────── */
  const toggleProduct = (product: LicenseProduct) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.productId === product.id);
      if (exists) return prev.filter((i) => i.productId !== product.id);
      return [...prev, { productId: product.id, productName: product.name, quantity: 1, subtotal: 0 }];
    });
    if (errors.interests) setErrors((prev) => { const n = { ...prev }; delete n.interests; return n; });
  };

  const updateQuantity = (productId: string, qty: number) => {
    setItems((prev) =>
      prev.map((i) => (i.productId === productId ? { ...i, quantity: Math.max(1, Math.min(999, qty)) } : i))
    );
  };

  /* ── Calculations ──────────────────────────────────────── */
  const grandTotal = items.reduce((sum, item) => {
    const product = LICENSE_PRODUCTS.find((p) => p.id === item.productId);
    if (!product) return sum;
    return sum + calculateLicensePrice(product.basePrice, item.quantity).total;
  }, 0);

  const hasDiscount = items.some((item) => {
    const product = LICENSE_PRODUCTS.find((p) => p.id === item.productId);
    return product && calculateLicensePrice(product.basePrice, item.quantity).discountPercent > 0;
  });

  /* ── Validation ────────────────────────────────────────── */
  const validate = () => {
    const next: Record<string, string> = {};
    if (items.length === 0) next.interests = "Selecciona al menos un producto";
    if (!fullName.trim()) next.fullName = "Ingresa tu nombre";
    if (!phone.trim() || phone.replace(/\D/g, "").length < 7) next.phone = "Celular inválido";
    if (!slot) next.slot = "Selecciona un horario";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Email inválido";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  /* ── Submit ────────────────────────────────────────────── */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const itemsWithTotals: QuoteItem[] = items.map((item) => {
      const product = LICENSE_PRODUCTS.find((p) => p.id === item.productId);
      const calc = product ? calculateLicensePrice(product.basePrice, item.quantity) : { total: 0 };
      return { ...item, subtotal: calc.total };
    });

    const msg = buildQuoteMessage({
      items: itemsWithTotals,
      fullName: fullName.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      city,
      preferredSlot: slot,
      message: message.trim() || undefined,
    });

    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
    onClose();
  };

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-white/15 px-3 py-4 backdrop-blur-md sm:items-center sm:bg-white/20 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={onClose}
        aria-label="Cerrar"
        tabIndex={-1}
      />

      <div
        ref={dialogRef}
        className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/[0.10] bg-[#12121a]/95 shadow-2xl shadow-emerald-950/40 ring-1 ring-white/[0.04] sm:my-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] bg-[#12121a]/95 px-5 py-5 backdrop-blur sm:px-7 sm:py-6">
          <div className="min-w-0">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300/80">
              Cotización rápida
            </p>
            <h2 id={titleId} className="text-balance text-2xl font-black leading-tight text-white sm:text-3xl">
              Solicitar cotización
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              Selecciona los productos, ajusta cantidades y te enviaremos la cotización por WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] p-2 text-white/60 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Product Selection */}
            <div>
              <label className={labelClass}>
                ¿Qué te interesa? <span className="text-emerald-400">*</span>
              </label>
              <p className="mb-3 text-[11px] text-white/40">
                Selecciona uno o varios productos y ajusta la cantidad de cada uno.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {LICENSE_PRODUCTS.map((product) => {
                  const selected = items.find((i) => i.productId === product.id);
                  const qty = selected?.quantity ?? 1;
                  const calc = calculateLicensePrice(product.basePrice, qty);
                  return (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => toggleProduct(product)}
                      className={`flex items-start gap-2.5 rounded-xl border p-3 text-left transition-all ${
                        selected
                          ? "border-emerald-500/40 bg-emerald-500/10"
                          : "border-white/[0.08] bg-[#0a0a0f]/60 hover:border-white/[0.15]"
                      }`}
                    >
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white/[0.04]">
                        <Image src={product.image} alt={product.name} fill sizes="40px" className="object-contain p-1" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-sm font-bold text-white">{product.name}</span>
                          <span className="shrink-0 text-sm font-bold text-emerald-400">{formatCOP(product.basePrice)}</span>
                        </div>
                        <div className="text-[11px] text-white/40">{product.description}</div>
                        {selected && (
                          <div className="mt-2 flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); updateQuantity(product.id, qty - 1); }}
                              disabled={qty <= 1}
                              className="flex h-6 w-6 items-center justify-center rounded border border-white/[0.10] bg-white/[0.04] text-[11px] text-white/60 hover:text-white disabled:opacity-30"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              min={1}
                              max={999}
                              value={qty}
                              onClick={(e) => e.stopPropagation()}
                              onChange={(e) => {
                                e.stopPropagation();
                                const v = Number(e.target.value);
                                if (!Number.isNaN(v) && v > 0) updateQuantity(product.id, v);
                              }}
                              className="w-14 rounded border border-white/[0.08] bg-[#0a0a0f]/80 px-1 py-1 text-center text-xs font-bold text-white outline-none"
                            />
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); updateQuantity(product.id, qty + 1); }}
                              disabled={qty >= 999}
                              className="flex h-6 w-6 items-center justify-center rounded border border-white/[0.10] bg-white/[0.04] text-[11px] text-white/60 hover:text-white disabled:opacity-30"
                            >
                              +
                            </button>
                            <span className="ml-auto text-[11px] font-semibold text-emerald-400">
                              {formatCOP(calc.total)}
                            </span>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.interests && <p className="mt-2 text-xs text-rose-400">{errors.interests}</p>}
            </div>

            {/* Order Summary */}
            {items.length > 0 && (
              <div className="rounded-xl border border-white/[0.06] bg-[#0a0a0f]/60 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/50">Resumen</span>
                  {hasDiscount && (
                    <span className="text-[11px] font-semibold text-amber-400">Descuentos por volumen aplicados</span>
                  )}
                </div>
                <div className="space-y-2">
                  {items.map((item) => {
                    const product = LICENSE_PRODUCTS.find((p) => p.id === item.productId);
                    if (!product) return null;
                    const calc = calculateLicensePrice(product.basePrice, item.quantity);
                    return (
                      <div key={item.productId} className="flex items-center justify-between text-sm">
                        <span className="text-white/70">
                          {item.productName} <span className="text-white/40">× {item.quantity}</span>
                        </span>
                        <span className="font-bold text-white">{formatCOP(calc.total)}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-3">
                  <span className="text-base font-black text-white">Total</span>
                  <span className="text-xl font-black text-emerald-400">{formatCOP(grandTotal)}</span>
                </div>
              </div>
            )}

            {/* Contact Fields */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="lqm-name">
                  Nombre completo <span className="text-emerald-400">*</span>
                </label>
                <input
                  ref={firstFieldRef}
                  id="lqm-name"
                  type="text"
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Juan Pérez"
                  className={fieldClass}
                />
                {errors.fullName && <p className="mt-1.5 text-xs font-semibold text-rose-400">{errors.fullName}</p>}
              </div>
              <div>
                <label className={labelClass} htmlFor="lqm-company">
                  Empresa <span className="text-white/30">(opcional)</span>
                </label>
                <input
                  id="lqm-company"
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Mi Negocio S.A.S"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="lqm-email">
                  Email <span className="text-white/30">(opcional)</span>
                </label>
                <input
                  id="lqm-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="juan@empresa.com"
                  className={fieldClass}
                />
                {errors.email && <p className="mt-1.5 text-xs font-semibold text-rose-400">{errors.email}</p>}
              </div>
              <div>
                <label className={labelClass} htmlFor="lqm-phone">
                  Celular / WhatsApp <span className="text-emerald-400">*</span>
                </label>
                <input
                  id="lqm-phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+57 320 369 3949"
                  className={fieldClass}
                />
                {errors.phone && <p className="mt-1.5 text-xs font-semibold text-rose-400">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="lqm-city">
                  Ciudad <span className="text-white/30">(opcional)</span>
                </label>
                <select
                  id="lqm-city"
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
                <label className={labelClass} htmlFor="lqm-slot">
                  Horario preferido <span className="text-emerald-400">*</span>
                </label>
                <select
                  id="lqm-slot"
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  className={`${fieldClass} ${!slot ? "text-white/25" : ""}`}
                >
                  <option value="" disabled>Selecciona un horario</option>
                  {TIME_SLOTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.slot && <p className="mt-1.5 text-xs font-semibold text-rose-400">{errors.slot}</p>}
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="lqm-msg">
                Comentarios <span className="text-white/30">(opcional)</span>
              </label>
              <textarea
                id="lqm-msg"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cuéntanos brevemente qué necesitas..."
                className={`${fieldClass} min-h-24 resize-y`}
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col gap-4 border-t border-white/[0.06] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-white/50">
                <span className="font-bold text-emerald-300">⚡</span> Te respondemos en menos de 5 minutos en horario laboral.
              </p>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:from-emerald-600 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-500/20 sm:w-auto"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Enviar cotización por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}
