"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface SliderImage {
  src: string;
  alt: string;
  urlPreview?: string;
  badge?: string;
}

interface ImageSliderProps {
  images: SliderImage[];
  interval?: number;
}

export default function ImageSlider({ images, interval = 4500 }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused || !mounted) return;
    timerRef.current = setInterval(goNext, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, interval, goNext, mounted]);

  const activeImage = images[current];

  // Helper para generar una URL legible y profesional según la captura
  const getDisplayUrl = (src: string, alt: string) => {
    if (activeImage.urlPreview) return activeImage.urlPreview;
    if (src.includes("call360")) return "call360colombia.com";
    if (src.includes("clinica")) return "newclinic.com.co";
    if (src.includes("reservadelguamo")) return "reservadelguamo.com";
    if (src.includes("barberpro")) return "barberpromaster.com";
    if (src.includes("yajuridico")) return "yajuridico.com";
    if (src.includes("alfayomega")) return "alfayomegaingenieria.com";
    return alt.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 20) + ".com";
  };

  return (
    <div
      className="relative group w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Carrusel interactivo de páginas web reales"
    >
      {/* Marco tipo Navegador Moderno (Browser Window Mockup estilo macOS) */}
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0a0a0f] shadow-2xl shadow-cyan-500/10 transition-all duration-300">
        
        {/* Barra superior del navegador */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0c0e14] px-3.5 sm:px-5 py-2.5 sm:py-3 select-none">
          {/* Botones de control estilo macOS */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27c93f]" />
            
            {/* Barra de direcciones URL segura */}
            <div className="ml-2 sm:ml-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] sm:text-xs font-mono text-white/60 max-w-[180px] xs:max-w-[240px] sm:max-w-xs truncate">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400 shrink-0">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="truncate">https://{getDisplayUrl(activeImage.src, activeImage.alt)}</span>
            </div>
          </div>

          {/* Insignias de estado */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              En línea 72h
            </span>

            {isPaused && (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/70">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
                Pausa
              </span>
            )}
          </div>
        </div>

        {/* Contenedor panorámico con proporción exacta de pantalla (16/10) */}
        {/* CERO TEXTO CORTADO: object-contain dentro de fondo oscuro asegura 100% de visibilidad lateral */}
        <div className="relative aspect-[16/10] w-full bg-[#0a0a0f] overflow-hidden flex items-center justify-center">
          {images.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center p-0"
              style={{
                opacity: index === current ? 1 : 0,
                pointerEvents: index === current ? "auto" : "none",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain object-top"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
              />
            </div>
          ))}

          {/* Botones de navegación Anterior / Siguiente superpuestos y ergonómicos */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Ver proyecto anterior"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white/80 backdrop-blur-sm transition-all hover:bg-black hover:text-white hover:scale-105 active:scale-95 shadow-lg opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Ver siguiente proyecto"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white/80 backdrop-blur-sm transition-all hover:bg-black hover:text-white hover:scale-105 active:scale-95 shadow-lg opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Pie informativo del mockup con título del sitio actual */}
        <div className="flex items-center justify-between border-t border-white/10 bg-[#0c0e14] px-4 py-2 text-xs text-white/70">
          <span className="font-semibold text-white/90 truncate max-w-[70%]">
            {activeImage.alt}
          </span>
          <span className="font-mono text-[11px] text-cyan-400 font-bold shrink-0">
            {current + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Indicadores de diapositiva (Puntos interactivos de navegación) */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-300 ease-out cursor-pointer ${
              index === current
                ? "w-8 sm:w-10 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md shadow-cyan-500/40 h-2.5"
                : "w-2.5 bg-white/20 hover:bg-white/40 h-2.5"
            }`}
            aria-label={`Ver proyecto ${index + 1}: ${img.alt}`}
          />
        ))}
      </div>
    </div>
  );
}
