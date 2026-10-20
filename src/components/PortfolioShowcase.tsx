"use client";

import { useState } from "react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

interface Project {
  id: string;
  title: string;
  niche: string;
  category: string;
  badgeColor: string;
  image: string;
  urlPreview: string;
  description: string;
  metrics: { label: string; value: string }[];
  whatsappMessage: string;
}

const projects: Project[] = [
  {
    id: "newclinic",
    title: "New Clinic",
    niche: "Odontología y armonización orofacial",
    category: "Salud & Estética Orofacial",
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    image: "/shots/clinica.jpg",
    urlPreview: "newclinic.com.co",
    description:
      "Página web de alta conversión para clínica odontológica y estética facial en Chapinero, Bogotá. Agendamiento prioritario a WhatsApp, catálogo interactivo de tratamientos y presentación de especialistas con diseño clínico sobrio que genera total confianza.",
    metrics: [
      { label: "Agendamiento", value: "En 1 Clic" },
      { label: "Diseño", value: "100% Móvil" },
      { label: "WhatsApp", value: "Conectado" },
    ],
    whatsappMessage:
      "Hola Call360, vi el caso de éxito de New Clinic y quiero cotizar una página web similar para mi clínica o consultorio",
  },
  {
    id: "alfayomega",
    title: "Alfa & Omega",
    niche: "Extintores y control de plagas / fumigación",
    category: "Seguridad Industrial & Fumigación",
    badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    image: "/shots/alfayomega.jpg",
    urlPreview: "alfayomegaingenieria.com",
    description:
      "Portal industrial y comercial para recarga de extintores certificados, control integral de plagas y cumplimiento normativo ante la Secretaría de Salud. Cotización directa a WhatsApp para empresas, conjuntos residenciales y comercios.",
    metrics: [
      { label: "Cotización", value: "Inmediata" },
      { label: "Normativa", value: "100% Legal" },
      { label: "Respuesta", value: "< 5 Minutos" },
    ],
    whatsappMessage:
      "Hola Call360, vi el caso de éxito de Alfa & Omega y quiero cotizar una página web para mi empresa de servicios e ingeniería",
  },
  {
    id: "tulicencia",
    title: "Tu Licencia",
    niche: "Gestión legal / trámites",
    category: "Trámites Digitales & Licencias",
    badgeColor: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    image: "/shots/tulicencia.jpg",
    urlPreview: "tulicenciacolombia.com",
    description:
      "Embudo comercial de alto volumen con validación rápida de requisitos, paquetes dinámicos y botón de asesoría comercial inmediata. Permite captar clientes masivos con formularios prellenados directo a WhatsApp.",
    metrics: [
      { label: "Prospectos", value: "+180 / sem" },
      { label: "Formulario", value: "Prellenado WA" },
      { label: "Carga rápida", value: "0.6 Segundos" },
    ],
    whatsappMessage:
      "Hola Call360, vi el caso de éxito de Tu Licencia y quiero una página web con embudo de alta conversión para mi negocio",
  },
  {
    id: "yajuridico",
    title: "YA Jurídico",
    niche: "Servicios legales y asesoría corporativa",
    category: "Firma Legal & Propiedad Horizontal",
    badgeColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
    image: "/shots/yajuridico.jpg",
    urlPreview: "yajuridico.com",
    description:
      "Presencia digital sobria y formal para bufete de abogados especializado en propiedad horizontal y recuperación de cartera. Proyecta respaldo institucional, agendamiento de asesorías y contacto confidencial encriptado.",
    metrics: [
      { label: "Presencia", value: "Institucional" },
      { label: "Seguridad", value: "SSL Bancario" },
      { label: "Contacto", value: "Confidencial" },
    ],
    whatsappMessage:
      "Hola Call360, vi el caso de éxito de YA Jurídico y quiero cotizar una página web corporativa para mi firma legal",
  },
  {
    id: "reservadelguamo",
    title: "Reserva del Guamo Tolima",
    niche: "Desarrollo inmobiliario / lotes campestres",
    category: "Turismo & Bienes Raíces",
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    image: "/shots/reservadelguamo.jpg",
    urlPreview: "reservadelguamo.com",
    description:
      "Experiencia visual inmersiva para venta directa de lotes campestres de 250 m² y cabañas en el Tolima. Plano interactivo, simulador de planes de pago y coordinación de visitas campestres por WhatsApp sin intermediarios ni comisiones.",
    metrics: [
      { label: "Comisiones", value: "0% Ahorro" },
      { label: "Fotografía HD", value: "Inmersiva" },
      { label: "Visitas", value: "Coordinadas WA" },
    ],
    whatsappMessage:
      "Hola Call360, vi el caso de éxito de Reserva del Guamo Tolima y quiero cotizar una página web para mi proyecto inmobiliario o turístico",
  },
  {
    id: "call360",
    title: "Call360 Colombia",
    niche: "Plataforma SaaS, CRM y telefonía en la nube",
    category: "SaaS & Tecnología Comercial",
    badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    image: "/shots/call360.jpg",
    urlPreview: "call360colombia.com",
    description:
      "Plataforma comercial completa para empresas colombianas: sitio web corporativo de alta velocidad, CRM WhatsApp multiagente y marcación predictiva con minutos ilimitados.",
    metrics: [
      { label: "Entrega récord", value: "72 Horas" },
      { label: "Velocidad", value: "0.7s de carga" },
      { label: "Soporte", value: "Local Bogotá" },
    ],
    whatsappMessage:
      "Hola Call360, quiero cotizar una página web profesional con entrega en 72 horas para mi empresa",
  },
];

export default function PortfolioShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeProject = projects[selectedIndex];

  return (
    <div className="w-full">
      {/* Selector de Proyectos Reales en Barra de Pestañas Móvil/Desktop */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none snap-x">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => setSelectedIndex(idx)}
            className={`shrink-0 snap-start rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
              idx === selectedIndex
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 scale-[1.02]"
                : "border border-white/10 bg-white/[0.04] text-white/70 hover:border-white/20 hover:text-white"
            }`}
          >
            {proj.title}
          </button>
        ))}
      </div>

      {/* Tarjeta Principal de Presentación de Proyecto (Marco de Navegador Moderno) */}
      <div className="mt-4 overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-[#0c0c14]/90 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10">
        {/* Cabecera estilo Navegador Moderno (macOS) */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-3 sm:px-4 py-2.5 sm:py-3 select-none">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 max-w-[85%] sm:max-w-none">
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5f56]/80 shrink-0" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ffbd2e]/80 shrink-0" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27c93f]/80 shrink-0" />
            <div className="ml-2 sm:ml-3 flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-black/40 px-2 sm:px-3 py-1 text-[11px] sm:text-xs font-mono text-white/60 min-w-0 max-w-[170px] xs:max-w-[240px] sm:max-w-xs">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400 shrink-0">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="truncate">https://{activeProject.urlPreview}</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${activeProject.badgeColor}`}>
              {activeProject.category}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Al aire en 72h
            </span>
          </div>
        </div>

        {/* Contenido: Grid Imagen + Detalles */}
        <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* Captura de pantalla real del sitio - CERO CORTES (object-contain object-top) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/15 bg-[#08090f] shadow-2xl flex items-center justify-center p-0.5">
              <Image
                src={activeProject.image}
                alt={`${activeProject.title} — ${activeProject.niche}`}
                fill
                className="object-contain object-top"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between px-1 text-[11px] text-white/40">
              <span>Captura real del desarrollo web</span>
              <span className="font-mono text-cyan-400">100% responsive en PC y celular</span>
            </div>
          </div>

          {/* Información comercial y métricas del proyecto */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${activeProject.badgeColor}`}>
                  {activeProject.category}
                </span>
                <span className="text-[11px] font-medium text-cyan-300">
                  {activeProject.niche}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {activeProject.title}
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            {/* Métricas clave */}
            <div className="grid grid-cols-3 gap-2.5 py-3 border-y border-white/[0.08]">
              {activeProject.metrics.map((m) => (
                <div key={m.label} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-2.5 text-center">
                  <div className="text-sm sm:text-base font-black text-cyan-400">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-white/50 font-medium mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs comerciales: Cotizar y Ver demostración */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <WhatsAppButton
                text={activeProject.whatsappMessage}
                label="Cotizar sitio similar"
                className="w-full sm:w-auto text-xs sm:text-sm px-5 py-2.5 shadow-lg shadow-cyan-500/20 text-center justify-center"
              />
              <a
                href={`https://wa.me/573203693949?text=${encodeURIComponent(
                  `Hola Call360, quiero ver el ejemplo en vivo y la demostración de la web de ${activeProject.title} (${activeProject.niche})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/[0.05] px-4 py-2.5 text-xs font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/10 text-center"
              >
                <span>Ver ejemplo en vivo</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
            <p className="text-[11px] text-white/40">
              ⚡ Entrega récord en 72 horas con dominio propio y soporte en Bogotá
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
