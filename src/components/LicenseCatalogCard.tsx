"use client";

import { useState } from "react";
import Image from "next/image";
import { calculateLicensePrice, formatCOP, buildWhatsAppUrl, type LicenseProduct } from "@/lib/formData";

interface LicenseCatalogCardProps {
  product: LicenseProduct;
  onCotizar: (product: LicenseProduct, quantity: number) => void;
}

export default function LicenseCatalogCard({ product, onCotizar }: LicenseCatalogCardProps) {
  const [quantity, setQuantity] = useState(1);

  const calc = calculateLicensePrice(product.basePrice, quantity);

  const handleBuyDirect = () => {
    const msg = [
      "Hola Call360 👋",
      "",
      "Quiero comprar:",
      `• Producto: ${product.name}`,
      `• Cantidad: ${quantity} ${quantity === 1 ? "licencia" : "licencias"}`,
      `• Precio unitario: ${formatCOP(calc.unitPrice)}`,
      `• Total: ${formatCOP(calc.total)}`,
      quantity >= 5 ? `• Descuento aplicado: ${calc.discountPercent}%` : "",
      "",
      "¿Cómo puedo realizar el pago?",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => Math.min(999, q + 1));

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] p-5 transition-all duration-300 hover:border-white/[0.15] hover:bg-[#1a1a24] premier-card">
      {product.badge && (
        <div className="absolute right-3 top-3 z-10 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
          {product.badge}
        </div>
      )}

      <div className="relative mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-white/[0.04] p-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mb-1 text-base font-bold text-white">{product.name}</h3>
      <p className="mb-3 text-sm text-white/50">{product.description}</p>

      <div className="mb-4 flex items-baseline gap-2">
        <span className="text-2xl font-black text-emerald-400">
          {formatCOP(product.basePrice)}
        </span>
        {product.originalPrice && (
          <span className="text-sm text-white/40 line-through">
            {formatCOP(product.originalPrice)}
          </span>
        )}
      </div>

      <div className="mb-4 rounded-xl border border-white/[0.06] bg-[#0a0a0f]/50 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
            Cantidad
          </span>
          <span className="text-lg font-bold text-white">{quantity}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={decrease}
            disabled={quantity <= 1}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-white/70 transition hover:border-white/20 hover:text-white disabled:opacity-30"
            aria-label="Reducir cantidad"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14" />
            </svg>
          </button>
          <input
            type="number"
            min={1}
            max={999}
            value={quantity}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (!Number.isNaN(v) && v > 0) setQuantity(Math.min(v, 999));
            }}
            className="w-full rounded-lg border border-white/[0.08] bg-[#0a0a0f]/80 px-2 py-2 text-center text-sm font-bold text-white outline-none transition focus:border-cyan-500/40"
            aria-label="Cantidad exacta"
          />
          <button
            type="button"
            onClick={increase}
            disabled={quantity >= 999}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-white/70 transition hover:border-white/20 hover:text-white disabled:opacity-30"
            aria-label="Aumentar cantidad"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-5 rounded-xl border border-emerald-500/15 bg-emerald-500/[0.04] p-3">
        <div className="flex items-baseline justify-between">
          <span className="text-[11px] uppercase tracking-wider text-white/50">
            Total
          </span>
          <span className="text-xl font-black text-emerald-400">
            {formatCOP(calc.total)}
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between text-[11px] text-white/40">
          <span>Precio unitario</span>
          <span>{formatCOP(calc.unitPrice)}</span>
        </div>
        {calc.discountPercent > 0 && (
          <div className="mt-1.5 flex items-center gap-1.5 rounded-md bg-amber-500/[0.08] px-2 py-1 text-[11px] font-semibold text-amber-400">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Descuento {calc.discountPercent}% · Término {calc.tierLabel}
          </div>
        )}
      </div>

      <div className="mt-auto flex flex-col gap-2">
        <button
          type="button"
          onClick={handleBuyDirect}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 text-sm font-bold text-white transition-all hover:from-emerald-600 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.01]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
          Comprar ahora
        </button>
        <button
          type="button"
          onClick={() => onCotizar(product, quantity)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-transparent px-5 py-3 text-sm font-bold text-white/80 transition-all hover:border-white/25 hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
          Cotizar
        </button>
      </div>
    </div>
  );
}
