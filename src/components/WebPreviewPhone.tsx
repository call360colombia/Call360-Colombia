"use client";

import { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

interface SectorTheme {
  hero: string;
  brand: string;
  accent: string;
}

interface Sector {
  id: string;
  tab: string;
  brand: string;
  initial: string;
  activity: string;
  headline: string;
  subline: string;
  rating: string;
  reviews: string;
  cta: string;
  services: [string, string];
  review: string;
  location: string;
  theme: SectorTheme;
  liveUrl?: string;
  liveDomain?: string;
}

const SECTORS: Sector[] = [
  {
    id: "salud",
    tab: "Clínica",
    brand: "New Clinic",
    initial: "N",
    activity: "Odontología y estética facial",
    headline: "Vuelve a sonreír con confianza",
    subline: "Atención odontológica integral en Chapinero, Bogotá.",
    rating: "4.9",
    reviews: "128 reseñas",
    cta: "Agenda tu cita",
    services: ["Ortodoncia y alineadores", "Blanqueamiento dental"],
    review: "“Me atendieron el mismo día y me explicaron todo con calma.”",
    location: "Chapinero, Bogotá",
    theme: {
      hero: "from-emerald-500 via-teal-600 to-[#062721]",
      brand: "bg-white/20",
      accent: "text-emerald-200",
    },
    liveUrl: "https://newclinicbogota.com",
    liveDomain: "newclinicbogota.com",
  },
  {
    id: "legal",
    tab: "Abogados",
    brand: "YA Jurídico",
    initial: "YA",
    activity: "Asesoría legal corporativa",
    headline: "Defiende tu empresa con respaldo",
    subline: "Propiedad horizontal, laboral y recuperación de cartera.",
    rating: "4.8",
    reviews: "64 reseñas",
    cta: "Solicita asesoría",
    services: ["Consulta inicial", "Contratos y cobro jurídico"],
    review: "“Respondieron el caso el mismo día y con total claridad.”",
    location: "Bogotá, Colombia",
    theme: {
      hero: "from-indigo-500 via-blue-700 to-[#0b1226]",
      brand: "bg-white/20",
      accent: "text-blue-200",
    },
    liveUrl: "https://yajuridico.com",
    liveDomain: "yajuridico.com",
  },
  {
    id: "servicios",
    tab: "Servicios",
    brand: "Alfa & Omega",
    initial: "A",
    activity: "Extintores y control de plagas",
    headline: "Tu empresa, lista para la visita",
    subline: "Recarga certificada y fumigación para empresas y hogares.",
    rating: "4.9",
    reviews: "97 reseñas",
    cta: "Cotiza tu servicio",
    services: ["Recarga de extintores", "Control integral de plagas"],
    review: "“Llegaron puntual y nos dejaron el certificado al día.”",
    location: "Bogotá, Colombia",
    theme: {
      hero: "from-amber-500 via-orange-600 to-[#2a1403]",
      brand: "bg-white/20",
      accent: "text-amber-100",
    },
    liveUrl: "https://alfayomega-web.vercel.app",
    liveDomain: "alfayomega-web.vercel.app",
  },
  {
    id: "inmobiliaria",
    tab: "Inmobiliaria",
    brand: "Reserva del Guamo",
    initial: "R",
    activity: "Lotes campestres en el Tolima",
    headline: "Tu lote para vivir o invertir",
    subline: "Lotes de 250 m² y cabañas con financiación directa.",
    rating: "4.7",
    reviews: "52 reseñas",
    cta: "Agenda tu visita",
    services: ["Lotes desde 250 m²", "Planes de pago sin banco"],
    review: "“Nos mostraron el plano y cuadramos la visita por WhatsApp.”",
    location: "Guamo, Tolima",
    theme: {
      hero: "from-lime-500 via-green-700 to-[#08210f]",
      brand: "bg-white/20",
      accent: "text-lime-200",
    },
    liveUrl: "https://reservadelguamo.com",
    liveDomain: "reservadelguamo.com",
  },
  {
    id: "comida",
    tab: "Restaurante",
    brand: "Fuego Mexa",
    initial: "F",
    activity: "Tacos, parrilla y eventos",
    headline: "La brasa que une, el parche real",
    subline: "Tacos y parrilla en Bogotá y Facatativá, con domicilio gratis.",
    rating: "4.9",
    reviews: "213 reseñas",
    cta: "Pide algo brutal",
    services: ["Tacos y parrilla", "Eventos y domicilios"],
    review: "“Pedimos para la oficina y llegó caliente y a tiempo.”",
    location: "Bogotá y Facatativá",
    theme: {
      hero: "from-rose-500 via-red-600 to-[#2a0710]",
      brand: "bg-white/20",
      accent: "text-rose-100",
    },
    liveUrl: "https://fuegomexa.netlify.app",
    liveDomain: "fuegomexa.netlify.app",
  },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((star) => (
        <svg key={star} width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

function WhatsAppGlyph({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WebPreviewPhone() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sector = SECTORS[activeIndex];

  return (
    <div className="w-full">
      <p className="mb-2.5 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white/45 lg:text-left">
        Así se vería tu página · elige tu sector
      </p>

      {/* Selector táctil de sector */}
      <div className="scrollbar-none -mx-4 mb-6 flex snap-x gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
        {SECTORS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
            className={`min-h-[38px] shrink-0 snap-start rounded-full border px-3.5 text-[11px] font-bold transition-all active:scale-95 ${
              index === activeIndex
                ? "border-cyan-300/60 bg-cyan-400/15 text-cyan-200 shadow-[0_0_20px_-6px_rgba(34,211,238,0.6)]"
                : "border-white/10 bg-white/[0.04] text-white/60"
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              {item.tab}
              {item.liveUrl && (
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-label="con página en vivo" />
              )}
            </span>
          </button>
        ))}
      </div>

      {/* Marco de teléfono con la vista previa */}
      <div className="relative mx-auto w-[252px] sm:w-[272px] lg:mx-0" aria-hidden="true">
        <div className="absolute -inset-6 rounded-[3rem] bg-cyan-500/10 blur-2xl" />
        <div className="relative rounded-[2.6rem] border-[7px] border-[#1a1e29] bg-[#05070d] shadow-[0_35px_70px_-25px_rgba(0,0,0,0.95)] ring-1 ring-white/10">
          <div className="absolute left-1/2 top-2.5 z-20 h-[18px] w-[74px] -translate-x-1/2 rounded-full bg-black" />
          <div className="h-[442px] overflow-hidden rounded-[2.05rem] bg-white sm:h-[466px]">
            <div className="flex h-full flex-col">
              {/* Cabecera del sitio */}
              <div className={`bg-gradient-to-br ${sector.theme.hero} px-3 pt-7 pb-4 text-white`}>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-1.5">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[9px] font-black ${sector.theme.brand}`}
                    >
                      {sector.initial}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[10px] font-black leading-tight">{sector.brand}</p>
                      <p className={`truncate text-[7.5px] leading-tight ${sector.theme.accent}`}>
                        {sector.activity}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/30 px-2 py-1 text-[7.5px] font-bold">
                    Llamar
                  </span>
                </div>

                <h3 className="mt-4 text-[15px] font-black leading-[1.15] tracking-tight">
                  {sector.headline}
                </h3>
                <p className="mt-1.5 text-[8.5px] leading-snug text-white/80">{sector.subline}</p>

                <div className="mt-2 flex items-center gap-1 text-[8px] text-white/80">
                  <Stars className="text-amber-300" />
                  <span className="font-bold">{sector.rating}</span>
                  <span className="text-white/60">· {sector.reviews}</span>
                </div>

                <div className="mt-3 flex items-center justify-center rounded-full bg-white px-3 py-2 text-[9px] font-black text-[#0b1220] shadow-lg">
                  {sector.cta}
                </div>
              </div>

              {/* Cuerpo del sitio */}
              <div className="flex-1 bg-white px-3 py-3 text-[#0b1220]">
                <p className="text-[7px] font-black uppercase tracking-[0.15em] text-slate-400">
                  Lo que hacemos
                </p>
                <div className="mt-1.5 space-y-1.5">
                  {sector.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center justify-between gap-2 rounded-lg border border-slate-200/80 px-2 py-1.5"
                    >
                      <span className="text-[8.5px] font-bold leading-tight">{service}</span>
                      <span className="shrink-0 text-[8px] font-black text-slate-400">→</span>
                    </div>
                  ))}
                </div>

                <div className="mt-2.5 rounded-lg bg-slate-100 px-2 py-2">
                  <div className="flex gap-0.5 text-amber-500">
                    <Stars />
                  </div>
                  <p className="mt-1 text-[8px] leading-snug text-slate-600">{sector.review}</p>
                </div>

                <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-slate-200 pt-2 text-[7.5px] text-slate-500">
                  <span className="truncate">{sector.location}</span>
                  <span className="shrink-0 font-bold text-emerald-600">Abierto ahora</span>
                </div>
              </div>

              {/* Barra fija de WhatsApp */}
              <div className="flex items-center justify-center gap-1.5 bg-[#1faa59] px-3 py-2.5 text-white">
                <WhatsAppGlyph />
                <span className="text-[9px] font-black">Escribir por WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-5 w-full max-w-[300px] lg:mx-0">
        {sector.liveUrl ? (
          <>
            <a
              href={sector.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 font-black text-black shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-300 hover:to-blue-400 active:scale-[0.98]"
            >
              Abrir página en vivo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <p className="mt-2 text-center text-[11px] leading-relaxed text-white/45 lg:text-left">
              <span className="font-mono text-emerald-300/90">{sector.liveDomain}</span> · página
              real en internet, hecha por Call360
            </p>
          </>
        ) : (
          <>
            <WhatsAppButton
              text={`Hola Call360, vi el diseño de ${sector.tab.toLowerCase()} en su página y quiero una página web así para mi negocio.`}
              label="Quiero una así para mi negocio"
              className="w-full justify-center min-h-[50px] font-black"
            />
            <p className="mt-2 text-center text-[11px] leading-relaxed text-white/45 lg:text-left">
              Diseño de referencia · la tuya se hace con tu marca y tus fotos
            </p>
          </>
        )}
      </div>
    </div>
  );
}
