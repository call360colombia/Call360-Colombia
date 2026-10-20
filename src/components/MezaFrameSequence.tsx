"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 80;
const frameSrc = (i: number) =>
  `/media/frames/${String(i + 1).padStart(2, "0")}.webp`;

interface MezaFrameSequenceProps {
  /** "global" para vincular al scroll total de la página, o id de un contenedor específico */
  targetId?: string;
  className?: string;
  /** Opacidad general del canvas (0 a 1) */
  opacity?: number;
  /** Factor de escala de scroll si está vinculado a un elemento */
  range?: number;
  /** Calidad máxima de DPR */
  quality?: number;
}

export default function MezaFrameSequence({
  targetId = "global",
  className = "",
  opacity = 0.45,
  range = 1.1,
  quality = 1.25,
}: MezaFrameSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({ idx: -1, top: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const isGlobal = targetId === "global";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Respetar preferencias de accesibilidad
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, quality);
    const cache = new Map<number, HTMLImageElement>();
    const pending = new Set<number>();
    let cancelled = false;
    let raf = 0;

    const size = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round((rect.width || window.innerWidth) * dpr));
      const h = Math.max(1, Math.round((rect.height || window.innerHeight) * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        if (stateRef.current.idx >= 0) {
          draw(stateRef.current.idx);
        }
      }
    };

    const load = (i: number): HTMLImageElement | null => {
      if (i < 0 || i >= FRAME_COUNT) return null;
      const hit = cache.get(i);
      if (hit?.complete && hit.naturalWidth > 0) return hit;
      if (pending.has(i)) return null;
      pending.add(i);

      const img = new Image();
      img.decoding = "async";
      (img as any).fetchPriority = i < 4 ? "high" : "low";
      img.src = frameSrc(i);

      img.onload = () => {
        pending.delete(i);
        if (cancelled) return;
        if (!isLoaded && (i === 0 || i === stateRef.current.idx)) {
          setIsLoaded(true);
        }
        if (stateRef.current.idx === i || stateRef.current.idx === -1) {
          draw(i);
        }
      };

      img.onerror = () => {
        pending.delete(i);
      };

      cache.set(i, img);
      return null;
    };

    const nearestLoaded = (want: number): HTMLImageElement | null => {
      const exact = cache.get(want);
      if (exact?.complete && exact.naturalWidth > 0) return exact;

      // Buscar el frame cargado más cercano (hacia atrás y luego hacia adelante)
      for (let k = want - 1; k >= 0; k--) {
        const img = cache.get(k);
        if (img?.complete && img.naturalWidth > 0) return img;
      }
      for (let k = want + 1; k < FRAME_COUNT; k++) {
        const img = cache.get(k);
        if (img?.complete && img.naturalWidth > 0) return img;
      }

      load(want);
      return null;
    };

    const draw = (i: number) => {
      const img = nearestLoaded(i);
      if (!img) return;

      const cw = canvas.width;
      const ch = canvas.height;
      if (cw < 2 || ch < 2) return;

      const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const dw = img.naturalWidth * s;
      const dh = img.naturalHeight * s;

      // Centrado con punto focal en rostro/figura
      const clampN = (v: number, lo: number, hi: number) =>
        v < lo ? lo : v > hi ? hi : v;
      const dx =
        dw <= cw ? (cw - dw) / 2 : clampN(cw * 0.5 - 0.46 * dw, cw - dw, 0);
      const dy =
        dh <= ch
          ? (ch - dh) * 0.42
          : clampN(ch * 0.44 - 0.4 * dh, ch - dh, 0);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const preloadAround = (center: number) => {
      for (const d of [1, 2, 3, 4, 5, 6, -1, -2, -3]) {
        const target = center + d;
        if (target >= 0 && target < FRAME_COUNT) {
          load(target);
        }
      }
    };

    const applyProgress = (p: number) => {
      if (cancelled) return;
      if (prefersReducedMotion) {
        if (stateRef.current.idx !== 0) {
          stateRef.current.idx = 0;
          draw(0);
        }
        return;
      }

      const clamped = Math.min(1, Math.max(0, p));
      const want = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(clamped * (FRAME_COUNT - 1)))
      );

      if (want !== stateRef.current.idx) {
        stateRef.current.idx = want;
        draw(want);
        preloadAround(want);
      }
    };

    const computeProgress = (): number => {
      if (isGlobal) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (max <= 0) return 0;
        const y = window.scrollY ?? document.documentElement.scrollTop ?? 0;
        return Math.min(1, Math.max(0, y / max));
      }

      const vh = window.innerHeight || 1;
      const { top, height } = stateRef.current;
      const span = vh * range + height;
      return Math.min(1, Math.max(0, (vh + window.scrollY - top) / span));
    };

    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          applyProgress(computeProgress());
        });
      }
    };

    const measure = () => {
      size();
      if (!isGlobal) {
        const el = document.getElementById(targetId);
        if (el) {
          const rect = el.getBoundingClientRect();
          stateRef.current.top = rect.top + window.scrollY;
          stateRef.current.height = rect.height;
        }
      }
      applyProgress(computeProgress());
    };

    // Inicialización inmediata
    size();
    load(0);
    load(1);
    stateRef.current.idx = 0;
    draw(0);

    const initialP = computeProgress();
    if (initialP > 0) {
      applyProgress(initialP);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure, { passive: true });

    // Precarga escalonada ágil de los 80 frames
    const timers: number[] = [];
    const batch = (from: number, to: number) => {
      if (cancelled) return;
      for (let i = from; i <= to && i < FRAME_COUNT; i++) {
        load(i);
      }
    };

    timers.push(window.setTimeout(() => batch(2, 12), 100));
    timers.push(window.setTimeout(() => batch(13, 30), 300));
    timers.push(window.setTimeout(() => batch(31, 55), 700));
    timers.push(window.setTimeout(() => batch(56, 79), 1200));

    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [targetId, range, quality, isGlobal]);

  return (
    <div
      className={`pointer-events-none select-none transition-opacity duration-1000 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover"
        style={{
          filter: "contrast(1.08) saturate(1.05) brightness(0.92)",
        }}
      />
      {/* Velo degradado superior para integración con la barra de navegación */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] opacity-80" />
      {/* Viñeta radial para asegurar máximo contraste con textos y métricas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,15,0.75)_95%)]" />
    </div>
  );
}
