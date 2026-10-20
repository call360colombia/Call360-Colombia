"use client";

import Image from "next/image";
import { useState } from "react";
import LeadForm, { type LeadFormSubmitData } from "./LeadForm";
import {
  LICENSE_PRODUCTS,
  VOLUME_THRESHOLDS,
  buildWhatsAppUrl,
  formatCOP,
  type LicenseProduct,
} from "@/lib/formData";
import { buildLicenseMessage } from "@/lib/leadTemplates";

const fieldClass =
  "w-full rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 px-4 py-3 text-sm text-white outline-none transition-all focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20";

export default function CotizadorLicencias({
  featuredProductId,
}: {
  featuredProductId?: string;
}) {
  const [product, setProduct] = useState<LicenseProduct>(
    LICENSE_PRODUCTS.find((p) => p.id === featuredProductId) ?? LICENSE_PRODUCTS[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const isVolume = quantity > VOLUME_THRESHOLDS.licencias;
  const total = product.basePrice * quantity;
  const unitPrice = product.basePrice;

  const handleSubmit = (data: LeadFormSubmitData) => {
    const message = buildLicenseMessage({
      ...data,
      productId: product.id,
      productName: product.name,
      quantity,
      isVolume,
      unitPrice,
      totalPrice: total,
    });
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-cyan-500/[0.05] to-[#12121a] p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M9 9h6v6H9z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-black text-white">Cotiza tu licencia en 30s</h3>
          <p className="text-xs text-white/50">Selecciona producto y cantidad</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/60">
          Producto
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {LICENSE_PRODUCTS.map((p) => {
            const active = p.id === product.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setProduct(p)}
                className={`group flex items-center gap-2 rounded-xl border p-2.5 text-left transition-all ${
                  active
                    ? "border-cyan-500/50 bg-cyan-500/10"
                    : "border-white/[0.08] bg-[#0a0a0f]/60 hover:border-white/[0.15]"
                }`}
              >
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md bg-white/[0.04]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="36px"
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="line-clamp-1 text-xs font-semibold text-white/80 group-hover:text-white">
                  {p.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-2 flex items-baseline justify-between">
          <label
            htmlFor="qty"
            className="text-xs font-semibold uppercase tracking-wider text-white/60"
          >
            Cantidad
          </label>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">{quantity}</span>
            <span className="text-xs text-white/40">
              {quantity === 1 ? "licencia" : "licencias"}
            </span>
          </div>
        </div>
        <input
          id="qty"
          type="range"
          min={1}
          max={50}
          step={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/[0.08] accent-cyan-500"
        />
        <div className="mt-2 flex items-center gap-2">
          <input
            type="number"
            min={1}
            max={999}
            value={quantity}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (!Number.isNaN(v) && v > 0) setQuantity(Math.min(v, 999));
            }}
            className={`${fieldClass} w-24`}
            aria-label="Cantidad exacta"
          />
          <span className="text-xs text-white/40">
            {isVolume ? "Más de 5 licencias" : "Licencia individual"}
          </span>
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-white/[0.08] bg-[#0a0a0f]/60 p-5">
        <div className="flex items-baseline justify-between">
          <span className="text-xs uppercase tracking-wider text-white/40">
            Total estimado
          </span>
          <span className="text-3xl font-black text-emerald-400">
            {isVolume ? "Consultar" : formatCOP(total)}
          </span>
        </div>
        <div className="mt-1 flex items-baseline justify-between text-xs text-white/40">
          <span>Precio unitario</span>
          <span>{formatCOP(unitPrice)}</span>
        </div>
        {isVolume && (
          <p className="mt-3 text-xs text-amber-400">
            💡 Para {quantity}+ licencias tenemos precios por volumen. Te
            contactaremos con una cotización especial.
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
        {isVolume ? "Cotizar por volumen" : "Cotizar y hablar por WhatsApp"}
      </button>

      <LeadForm
        open={open}
        onClose={() => setOpen(false)}
        context={{
          title: isVolume ? "Cotización por volumen" : "Cotizar licencia",
          subtitle: `${product.name} · ${quantity} ${quantity === 1 ? "licencia" : "licencias"}`,
          highlights: [
            { label: "Producto", value: product.name },
            {
              label: "Cantidad",
              value: `${quantity} ${quantity === 1 ? "licencia" : "licencias"}`,
            },
            {
              label: "Total",
              value: isVolume ? "Consultar" : formatCOP(total),
            },
            { label: "Precio unit.", value: formatCOP(unitPrice) },
          ],
          installation: { show: true, defaultValue: "remoto" },
        }}
        onSubmit={handleSubmit}
        ctaLabel={isVolume ? "Solicitar cotización" : "Enviar a WhatsApp"}
      />
    </div>
  );
}
