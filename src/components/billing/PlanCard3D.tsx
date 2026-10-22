'use client';

/**
 * components/billing/PlanCard3D.tsx
 *
 * Ultra-Premium 3D Physical Fintech Membership Card — Web Comercial Call360
 *
 * Arquitectura 3D idéntica a Call360 CRM:
 * - .plan-card-shell (aspect-ratio 1.586/1, max-w 430px)
 * - .plan-card-scene (perspectiva 1400px)
 * - .plan-card-flip (giro suave 180° en eje Y)
 * - .plan-card-tilt (motor RAF a 60FPS con resortes y parallax en capas de profundidad)
 * - Capas front & back con micro-textura cepillada, reflejos foil, glare especular y chip EMV fotorrealista.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import { Call360Logo } from '@/components/Call360Logo';
import type { CommercialPlan, Currency } from '@/lib/commercialCatalog';

const IS_TOUCH =
  typeof window !== 'undefined'
    ? 'ontouchstart' in window || navigator.maxTouchPoints > 0
    : false;

function spring(current: number, target: number, speed: number): number {
  return current + (target - current) * speed;
}

/* Micro-iconos SVG puros para máxima nitidez y 0 dependencias frágiles */
function CheckIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function SparklesIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

function CrownIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );
}

function ZapIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function ArrowRightIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function RotateCcwIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

function ShieldCheckIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* Chip EMV Fotorrealista por CSS y SVG */
function EMVChip({ variant }: { variant: 'silver' | 'emerald-gold' | 'gold' | 'bimetallic' }) {
  const configs = {
    silver: {
      bg: 'linear-gradient(135deg, #a1a1aa 0%, #e4e4e7 30%, #71717a 50%, #f4f4f5 75%, #52525b 100%)',
      line: '#3f3f46',
    },
    gold: {
      bg: 'linear-gradient(135deg, #92400e 0%, #f59e0b 25%, #d97706 50%, #fef08a 75%, #78350f 100%)',
      line: '#78350f',
    },
    'emerald-gold': {
      bg: 'linear-gradient(135deg, #065f46 0%, #34d399 25%, #d97706 50%, #fde68a 75%, #047857 100%)',
      line: '#064e3b',
    },
    bimetallic: {
      bg: 'linear-gradient(135deg, #78350f 0%, #f59e0b 20%, #e2e8f0 45%, #f8fafc 55%, #d97706 80%, #451a03 100%)',
      line: '#292524',
    },
  };

  const c = configs[variant];

  return (
    <div
      className="relative w-9 h-7 sm:w-10 sm:h-7.5 rounded-[4px] overflow-hidden border border-black/40 shadow-sm shrink-0"
      style={{
        background: c.bg,
        boxShadow:
          'inset 0 1px 2px rgba(255,255,255,0.6), inset 0 -1px 2px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.6)',
      }}
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 38 28">
        <line x1="2" y1="7" x2="16" y2="7" stroke={c.line} strokeWidth="0.75" />
        <line x1="2" y1="14" x2="16" y2="14" stroke={c.line} strokeWidth="0.75" />
        <line x1="2" y1="21" x2="16" y2="21" stroke={c.line} strokeWidth="0.75" />
        <line x1="22" y1="7" x2="36" y2="7" stroke={c.line} strokeWidth="0.75" />
        <line x1="22" y1="14" x2="36" y2="14" stroke={c.line} strokeWidth="0.75" />
        <line x1="22" y1="21" x2="36" y2="21" stroke={c.line} strokeWidth="0.75" />
        <line x1="10" y1="2" x2="10" y2="26" stroke={c.line} strokeWidth="0.75" />
        <line x1="19" y1="2" x2="19" y2="26" stroke={c.line} strokeWidth="0.75" />
        <line x1="28" y1="2" x2="28" y2="26" stroke={c.line} strokeWidth="0.75" />
        <rect x="14" y="9" width="10" height="10" rx="2.5" fill="none" stroke={c.line} strokeWidth="0.85" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}

/* Símbolo Contactless NFC */
function ContactlessNFC({ className }: { className?: string }) {
  return (
    <div className={cn('inline-flex items-center justify-center', className)}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M7 16a6 6 0 0 1 0-8" opacity="0.4" />
        <path d="M11 19a10 10 0 0 1 0-14" opacity="0.7" />
        <path d="M15 22a14 14 0 0 1 0-20" opacity="0.95" />
      </svg>
    </div>
  );
}

/* Paleta de Materiales Fintech & CTAs por Tier */
const TIERS = {
  basic: {
    tierCode: 'SILVER CHROMIUM',
    primaryTextColor: 'text-slate-100',
    accentTextColor: 'text-white',
    subtleTextColor: 'text-slate-200/90',
    chipVariant: 'silver' as const,
    sweepRgb: '241, 245, 249',
    glowColor: 'rgba(148, 163, 184, 0.3)',
    logoVariant: 'white' as const,
    badgeBg: 'bg-slate-900/90 text-slate-100 border-slate-300/50 backdrop-blur-md shadow-sm',
    buttonGrad:
      'bg-slate-700 hover:bg-slate-600 border border-slate-300/50 text-white font-bold shadow-md shadow-slate-950/50',
    icon: <ZapIcon className="h-4 w-4 text-slate-200" />,
    edgeBorder: 'border-slate-400/50',
    topHighlight: 'rgba(241, 245, 249, 0.85)',
    baseGradient: 'linear-gradient(135deg, #18202d 0%, #253144 25%, #384860 50%, #465773 75%, #202b3c 100%)',
    brushedTexture:
      'repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 4px)',
    patternStyle: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)',
    foilGradient:
      'linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.1) 45%, rgba(203,213,225,0.14) 55%, transparent 80%)',
  },
  mid: {
    tierCode: 'CHAMPAGNE GOLD IA',
    primaryTextColor: 'text-amber-50',
    accentTextColor: 'text-amber-200',
    subtleTextColor: 'text-amber-100/90',
    chipVariant: 'gold' as const,
    sweepRgb: '253, 230, 138',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    logoVariant: 'white' as const,
    badgeBg: 'bg-amber-950/90 text-amber-200 border-amber-300/60 backdrop-blur-md shadow-sm',
    buttonGrad:
      'bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-800 hover:from-amber-600 hover:to-yellow-600 border border-amber-300/60 text-amber-50 font-bold shadow-md shadow-amber-950/60',
    icon: <SparklesIcon className="h-4 w-4 text-amber-300" />,
    edgeBorder: 'border-amber-400/60',
    topHighlight: 'rgba(251, 191, 36, 0.9)',
    baseGradient: 'linear-gradient(135deg, #221405 0%, #3a230a 25%, #563510 50%, #734816 75%, #2e1b07 100%)',
    brushedTexture:
      'repeating-linear-gradient(120deg, rgba(251,191,36,0.045) 0px, rgba(251,191,36,0.045) 1px, transparent 1px, transparent 5px)',
    patternStyle:
      'radial-gradient(ellipse at 80% 20%, rgba(251,191,36,0.14) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(217,119,6,0.12) 0%, transparent 50%)',
    foilGradient:
      'linear-gradient(120deg, transparent 15%, rgba(253,230,138,0.14) 40%, rgba(245,158,11,0.18) 55%, transparent 85%)',
  },
  silver_emerald: {
    tierCode: 'PLATINUM EMERALD',
    primaryTextColor: 'text-emerald-50',
    accentTextColor: 'text-emerald-200',
    subtleTextColor: 'text-emerald-100/90',
    chipVariant: 'emerald-gold' as const,
    sweepRgb: '110, 231, 183',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    logoVariant: 'white' as const,
    badgeBg: 'bg-emerald-950/90 text-emerald-200 border-emerald-300/60 backdrop-blur-md shadow-sm',
    buttonGrad:
      'bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 hover:from-emerald-700 hover:to-teal-700 border border-emerald-300/60 text-emerald-50 font-bold shadow-md shadow-emerald-950/60',
    icon: <SparklesIcon className="h-4 w-4 text-emerald-300" />,
    edgeBorder: 'border-emerald-400/60',
    topHighlight: 'rgba(52, 211, 153, 0.95)',
    baseGradient: 'linear-gradient(135deg, #051411 0%, #0d2520 25%, #183e35 50%, #225146 75%, #091d19 100%)',
    brushedTexture:
      'repeating-linear-gradient(90deg, rgba(52,211,153,0.04) 0px, rgba(52,211,153,0.04) 1px, transparent 1px, transparent 4px)',
    patternStyle: 'radial-gradient(circle at 50% 50%, rgba(52,211,153,0.16) 0%, transparent 60%)',
    foilGradient:
      'linear-gradient(110deg, transparent 20%, rgba(110,231,183,0.16) 45%, rgba(52,211,153,0.2) 55%, transparent 80%)',
  },
  premium: {
    tierCode: 'BLACK TITANIUM 24K',
    primaryTextColor: 'text-amber-50',
    accentTextColor: 'text-amber-200',
    subtleTextColor: 'text-amber-100/90',
    chipVariant: 'bimetallic' as const,
    sweepRgb: '254, 240, 138',
    glowColor: 'rgba(245, 158, 11, 0.6)',
    logoVariant: 'white' as const,
    badgeBg: 'bg-amber-950/95 text-amber-200 border-amber-300/80 backdrop-blur-md shadow-amber-500/30',
    buttonGrad:
      'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 hover:from-amber-300 hover:to-yellow-200 border border-amber-100 text-slate-950 font-black shadow-lg shadow-amber-500/40',
    icon: <CrownIcon className="h-4 w-4 text-amber-300" />,
    edgeBorder: 'border-amber-300/80',
    topHighlight: 'rgba(254, 240, 138, 1)',
    baseGradient: 'linear-gradient(135deg, #020204 0%, #0a0a0f 25%, #14141e 50%, #0d0d14 75%, #010103 100%)',
    brushedTexture:
      'repeating-linear-gradient(45deg, rgba(251,191,36,0.04) 0px, rgba(251,191,36,0.04) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 4px)',
    patternStyle:
      'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.1) 0%, transparent 65%), radial-gradient(ellipse at 80% 15%, rgba(254,240,138,0.08) 0%, transparent 40%)',
    foilGradient:
      'linear-gradient(115deg, transparent 15%, rgba(254,240,138,0.22) 40%, rgba(255,255,255,0.25) 50%, rgba(245,158,11,0.2) 60%, transparent 85%)',
  },
};

interface PlanCard3DProps {
  plan: CommercialPlan;
  currency: Currency;
  showPromo?: boolean;
  onActionClick?: (plan: CommercialPlan) => void;
  className?: string;
}

export function PlanCard3D({
  plan,
  currency,
  showPromo = false,
  onActionClick,
  className,
}: PlanCard3DProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const borderGlowRef = useRef<HTMLDivElement>(null);
  const layerLogoRef = useRef<HTMLDivElement>(null);
  const layerChipRef = useRef<HTMLDivElement>(null);
  const layerTextRef = useRef<HTMLDivElement>(null);
  const layerPriceRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  const animRef = useRef<number>(0);
  const smoothRef = useRef({ tiltX: 0, tiltY: 0, bob: 0, scale: 1 });
  const mouseRef = useRef({ x: 50, y: 50, active: false });

  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  const tier = plan.tier ?? 'basic';
  const ts = TIERS[tier];
  const isRecommended = plan.isRecommended ?? false;

  const currentPricing =
    showPromo && plan.launchPromo?.enabled
      ? plan.launchPromo.pricing[currency]
      : plan.pricing[currency];

  /* 60FPS RAF Tilt Engine */
  useEffect(() => {
    if (prefersReducedMotion || IS_TOUCH) {
      if (tiltRef.current) tiltRef.current.style.transform = 'none';
      return;
    }

    const isDesktopPointer =
      typeof window !== 'undefined'
        ? window.matchMedia('(hover: hover) and (pointer: fine)').matches
        : true;

    if (!isDesktopPointer) return;

    let running = true;

    const animate = (t: number) => {
      if (!running) return;

      const m = mouseRef.current;
      const s = smoothRef.current;

      const idleX = m.active ? 0 : Math.sin(t / 2200) * 0.7;
      const idleY = m.active ? 0 : Math.cos(t / 1800) * 0.5;
      const idleBob = m.active ? 0 : Math.sin(t / 1500) * (isRecommended ? 1.0 : 0.6);

      const maxTilt = 12;
      const targetX = m.active ? -((m.y - 50) / 50) * maxTilt : idleX;
      const targetY = m.active ? ((m.x - 50) / 50) * maxTilt : idleY;
      const targetBob = m.active ? -6 : idleBob;
      const targetScale = m.active ? 1.03 : 1;

      const sp = m.active ? 0.16 : 0.08;
      s.tiltX = spring(s.tiltX, targetX, sp);
      s.tiltY = spring(s.tiltY, targetY, sp);
      s.bob = spring(s.bob, targetBob, sp);
      s.scale = spring(s.scale, targetScale, sp);

      if (isFlipped) {
        s.tiltX = spring(s.tiltX, 0, 0.2);
        s.tiltY = spring(s.tiltY, 0, 0.2);
        s.bob = spring(s.bob, 0, 0.2);
        s.scale = spring(s.scale, 1, 0.2);
      }

      if (tiltRef.current) {
        tiltRef.current.style.transform = `translateY(${s.bob.toFixed(2)}px) scale(${s.scale.toFixed(3)}) rotateX(${s.tiltX.toFixed(2)}deg) rotateY(${s.tiltY.toFixed(2)}deg)`;
      }

      const nx = m.active ? (m.x - 50) / 50 : 0;
      const ny = m.active ? (m.y - 50) / 50 : 0;

      if (layerChipRef.current) {
        layerChipRef.current.style.transform = `translate3d(${nx * -6}px, ${ny * -6}px, 16px)`;
      }
      if (layerLogoRef.current) {
        layerLogoRef.current.style.transform = `translate3d(${nx * -7}px, ${ny * -7}px, 20px)`;
      }
      if (layerTextRef.current) {
        layerTextRef.current.style.transform = `translate3d(${nx * -9}px, ${ny * -9}px, 24px)`;
      }
      if (layerPriceRef.current) {
        layerPriceRef.current.style.transform = `translate3d(${nx * -11}px, ${ny * -11}px, 28px)`;
      }

      if (shineRef.current) {
        const gx = m.active ? m.x : 50;
        const gy = m.active ? m.y : 30;
        shineRef.current.style.background = `radial-gradient(ellipse 280px 200px at ${gx}% ${gy}%, rgba(${ts.sweepRgb}, ${m.active ? 0.45 : isRecommended ? 0.12 : 0.04}) 0%, transparent 70%)`;
        shineRef.current.style.opacity = m.active ? '1' : isRecommended ? '0.6' : '0.2';
      }

      if (borderGlowRef.current) {
        const bx = m.active ? m.x : 50;
        const by = m.active ? m.y : 0;
        borderGlowRef.current.style.background = `radial-gradient(circle 160px at ${bx}% ${by}%, rgba(${ts.sweepRgb}, ${m.active ? 0.65 : 0.15}) 0%, transparent 75%)`;
      }

      if (shadowRef.current) {
        const baseOffY = isRecommended ? 16 : 10;
        const baseBlur = isRecommended ? 32 : 20;
        const shadowX = -s.tiltY * 1.5;
        const shadowY = baseOffY + s.tiltX * 1.2;
        const shadowOpacity = m.active ? 0.45 : isRecommended ? 0.35 : 0.2;
        shadowRef.current.style.boxShadow = `${shadowX}px ${shadowY}px ${baseBlur}px rgba(0, 0, 0, ${shadowOpacity}), 0 0 24px ${ts.glowColor}`;
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      cancelAnimationFrame(animRef.current);
    };
  }, [prefersReducedMotion, isFlipped, isRecommended, ts.glowColor, ts.sweepRgb]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || isFlipped || IS_TOUCH) return;
      const scene = sceneRef.current;
      if (!scene) return;
      const r = scene.getBoundingClientRect();
      const px = Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100));
      const py = Math.max(0, Math.min(100, ((e.clientY - r.top) / r.height) * 100));
      mouseRef.current = { x: px, y: py, active: true };
    },
    [prefersReducedMotion, isFlipped],
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    mouseRef.current = {
      ...mouseRef.current,
      active: !IS_TOUCH && !prefersReducedMotion && !isFlipped,
    };
  }, [prefersReducedMotion, isFlipped]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseRef.current = { x: 50, y: 50, active: false };
  }, []);

  const handleCardClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select, [data-interactive="true"]')) {
      return;
    }
    setIsFlipped((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape' && isFlipped) {
        e.stopPropagation();
        setIsFlipped(false);
      } else if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      }
    },
    [isFlipped],
  );

  return (
    <div className="plan-card-shell" data-current={isRecommended ? 'true' : 'false'}>
      {/* 3D Scene Viewport */}
      <div
        ref={sceneRef}
        className={cn('plan-card-scene select-none group cursor-pointer', className)}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={cn(
            'plan-card-emphasis transition-all duration-500',
            isRecommended && 'plan-card-emphasis--annual',
            isRecommended && isHovered && 'plan-card--current-hovered',
            isRecommended && isFlipped && 'plan-card--current-flipped',
          )}
        >
          {/* Halo Glow */}
          {isRecommended && (
            <div
              className="absolute -inset-3 pointer-events-none rounded-[2rem] blur-xl transition-opacity duration-500"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.35) 0%, transparent 70%)',
              }}
            />
          )}

          {/* Flip Container */}
          <article
            className="plan-card-flip"
            data-flipped={isFlipped}
            style={{
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: prefersReducedMotion
                ? 'none'
                : 'transform 650ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {/* Reactive Drop Shadow */}
            <div
              ref={shadowRef}
              className="absolute inset-1 pointer-events-none rounded-2xl transition-shadow duration-300"
              style={{
                boxShadow: isRecommended
                  ? '0 18px 40px rgba(0,0,0,0.4), 0 0 32px rgba(16,185,129,0.28)'
                  : '0 12px 25px rgba(0,0,0,0.22)',
              }}
            />

            {/* Tilt Layer */}
            <div
              ref={tiltRef}
              data-card-root="true"
              className="plan-card-tilt outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 rounded-2xl"
              onClick={handleCardClick}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="button"
              aria-label={`${plan.name} - ${currentPricing.formatted} ${currentPricing.period}. ${isFlipped ? 'Girar para ver frente' : 'Girar para ver beneficios'}. Presiona Enter o Espacio para girar.`}
              aria-pressed={isFlipped}
            >
              {/* ========================================================
                  FRONT FACE — TARJETA FÍSICA FINTECH 100% LIMPIA
                  ======================================================== */}
              <section
                className={cn('plan-card-face plan-card-face--front border shadow-2xl', ts.edgeBorder)}
                style={{
                  background: ts.baseGradient,
                  boxShadow:
                    tier === 'premium'
                      ? 'inset 0 0 0 1px rgba(254, 240, 138, 0.4), inset 0 0 20px rgba(245, 158, 11, 0.15), 0 10px 30px rgba(0,0,0,0.7)'
                      : tier === 'silver_emerald'
                        ? 'inset 0 0 0 1px rgba(52, 211, 153, 0.35), inset 0 0 16px rgba(16, 185, 129, 0.15), 0 10px 30px rgba(0,0,0,0.6)'
                        : tier === 'mid'
                          ? 'inset 0 0 0 1px rgba(251, 191, 36, 0.3), inset 0 0 14px rgba(245, 158, 11, 0.12), 0 10px 30px rgba(0,0,0,0.6)'
                          : 'inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 14px rgba(148, 163, 184, 0.1), 0 10px 30px rgba(0,0,0,0.6)',
                }}
              >
                {/* Capa 1: Textura Cepillada Metálica */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    backgroundImage: ts.brushedTexture,
                    opacity: tier === 'premium' ? 0.75 : 0.6,
                  }}
                />

                {/* Capa 2: Micro-patrón de Seguridad Guilloché */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{ backgroundImage: ts.patternStyle }}
                />

                {/* Capa 3: Reflejo Lámina Foil */}
                <div
                  className="plan-card-foil absolute inset-0 pointer-events-none rounded-2xl"
                  style={{ background: ts.foilGradient, mixBlendMode: 'screen' }}
                />

                {/* Capa 4: Glare Especular Reactivo al Cursor */}
                <div
                  ref={shineRef}
                  className="plan-card-glare plan-card-specular absolute inset-0 pointer-events-none rounded-2xl"
                  aria-hidden="true"
                  style={{ mixBlendMode: 'screen' }}
                />

                {/* Capa 5: Glow Perimetral */}
                <div
                  ref={borderGlowRef}
                  className="plan-card-border absolute -inset-[1px] pointer-events-none rounded-2xl z-10"
                  style={{ mixBlendMode: 'screen', opacity: 0.6 }}
                />

                {/* Capa 6: Resalte Superior Láser */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none rounded-t-2xl z-30"
                  style={{
                    background: `linear-gradient(90deg, transparent 5%, ${ts.topHighlight} 50%, transparent 95%)`,
                  }}
                />

                {/* Contenido Frontal */}
                <div className="relative z-20 flex flex-col justify-between h-full p-3.5 sm:p-4">
                  {/* Top: Logo + Tier Code + Badge */}
                  <div ref={layerLogoRef} className="flex items-start justify-between gap-1.5" style={{ willChange: 'transform' }}>
                    <div className="flex flex-col gap-0.5 shrink-0">
                      <Call360Logo size="xs" variant={ts.logoVariant} className="drop-shadow-md" />
                      <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/70 pl-0.5">
                        {ts.tierCode}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 flex-wrap justify-end">
                      {isRecommended && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider bg-emerald-500/35 text-emerald-200 border border-emerald-400/60 shadow-md backdrop-blur-md">
                          <SparklesIcon className="h-2.5 w-2.5 text-emerald-300" /> RECOMENDADO
                        </span>
                      )}
                      {plan.isTrial && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider bg-slate-900/90 text-slate-100 border border-slate-300/50 shadow-sm backdrop-blur-md">
                          14 DÍAS PRUEBA
                        </span>
                      )}
                      {plan.launchPromo?.enabled && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider bg-amber-500/30 text-amber-200 border border-amber-300/60 shadow-sm backdrop-blur-md animate-pulse">
                          50% OFF MES 1
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Centro: Nombre del Plan + Píldora de Créditos IA */}
                  <div ref={layerTextRef} className="my-auto py-1 text-center" style={{ willChange: 'transform' }}>
                    <h3 className={cn('text-sm sm:text-base font-black tracking-tight drop-shadow-md', ts.accentTextColor)}>
                      {plan.name}
                    </h3>
                    <p className={cn('text-[10px] sm:text-[11px] font-medium leading-snug mt-0.5', ts.primaryTextColor)}>
                      &ldquo;{plan.tagline}&rdquo;
                    </p>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[8.5px] font-black uppercase tracking-wide border shadow-sm backdrop-blur-md bg-black/40 border-white/20 text-white">
                      <SparklesIcon className="h-2.5 w-2.5 text-cyan-300" />
                      <span>{plan.aiCreditsLabel}</span>
                    </div>
                  </div>

                  {/* Inferior: EMV Chip + NFC + Precios Reales en Moneda Seleccionada */}
                  <div
                    ref={layerPriceRef}
                    className="flex items-end justify-between gap-1.5 pt-1.5 border-t border-white/15 backdrop-blur-[2px]"
                    style={{ willChange: 'transform' }}
                  >
                    <div ref={layerChipRef} className="flex items-center gap-1.5 shrink-0" style={{ willChange: 'transform' }}>
                      <EMVChip variant={ts.chipVariant} />
                      <div className="flex flex-col">
                        <ContactlessNFC className={cn('h-3 w-3', ts.subtleTextColor)} />
                        <span className="text-[7px] font-mono text-white/70 tracking-wider">
                          {plan.cardNumber}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="flex items-baseline justify-end gap-1">
                        <span className={cn('text-base sm:text-xl font-black tracking-tight tabular-nums drop-shadow-sm', ts.accentTextColor)}>
                          {currentPricing.formatted}
                        </span>
                        <span className="text-[7.5px] font-bold uppercase tracking-wider text-white/70">
                          {currency}
                        </span>
                      </div>
                      <p className={cn('text-[8px] font-medium leading-none mt-0.5', ts.subtleTextColor)}>
                        {currentPricing.period}
                      </p>
                      <p className="text-[7px] text-white/40 leading-none mt-1">
                        Haz clic o pulsa para ver beneficios ↻
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ========================================================
                  BACK FACE — DETALLE DE BENEFICIOS Y ACCIÓN DIRECTA
                  ======================================================== */}
              <section
                className={cn(
                  'plan-card-face plan-card-face--back border shadow-2xl flex flex-col justify-between',
                  ts.edgeBorder,
                )}
                style={{
                  background: ts.baseGradient,
                  boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.15), 0 10px 30px rgba(0,0,0,0.6)',
                }}
              >
                {/* Banda Magnética Superior */}
                <div className="w-full h-5 sm:h-6 bg-black/85 my-1 border-y border-white/10 shrink-0" />

                {/* Lista de Beneficios */}
                <div className="px-3.5 sm:px-4 py-1 flex-1 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8px] font-black uppercase tracking-wider text-white/80">
                      Beneficios incluidos
                    </span>
                    <span className="text-[7px] font-mono text-white/50">
                      TENANT SHARING
                    </span>
                  </div>

                  <ul className="space-y-1">
                    {plan.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-[8.5px] sm:text-[9px] text-white/90 leading-tight">
                        <span className="text-emerald-400 shrink-0">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-1.5 text-[7px] text-white/60 leading-tight">
                    * Cupo de créditos asignado a tu empresa y compartido entre asesores.
                  </p>
                </div>

                {/* Botón de Giro y Acción */}
                <div className="px-3.5 sm:px-4 pb-2.5 pt-1 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFlipped(false);
                    }}
                    className="inline-flex items-center gap-1 text-[8px] font-bold text-white/70 hover:text-white transition"
                    data-interactive="true"
                    aria-label="Volver al frente"
                  >
                    <RotateCcwIcon className="h-2.5 w-2.5" />
                    <span>Frente</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onActionClick?.(plan);
                    }}
                    className={cn(
                      'inline-flex items-center gap-1 px-3 py-1 rounded-lg text-[9px] font-black tracking-wide transition transform active:scale-95 shadow-md',
                      ts.buttonGrad,
                    )}
                    data-interactive="true"
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRightIcon className="h-2.5 w-2.5" />
                  </button>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
