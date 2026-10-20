"use client";

import { useState } from "react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

interface Project {
  id: string;
  title: string;
  category: string;
  badgeColor: string;
  image: string;
  urlPreview: string;
  description: string;
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: "call360",
    title: "Call360 Colombia",
    category: "SaaS & Telefonía IP",
    badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    image: "/shots/call360.jpg",
    urlPreview: "call360colombia.com",
    description:
      "Plataforma comercial completa: landing corporativa, CRM WhatsApp multiagente y arquitectura en la nube con entrega récord.",
    metrics: [
      { label: "Tiempo de entrega", value: "72 Horas" },
      { label: "Velocidad de carga", value: "0.7s" },
      { label: "Conversión móvil", value: "+42%" },
    ],
  },
  {
    id: "clinica",
    title: "Clínica & Salud Especializada",
    category: "Sector Médico & Salud",
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    image: "/shots/clinica.jpg",
    urlPreview: "clinicadesalud.com.co",
    description:
      "Portal médico con agendamiento prioritario a WhatsApp, catálogo de especialistas y diseño clínico limpio que genera total confianza.",
    metrics: [
      { label: "Agendamiento", value: "En 1 Clic" },
      { label: "Optimización", value: "100% Móvil" },
      { label: "WhatsApp", value: "Conectado" },
    ],
  },
  {
    id: "reservadelguamo",
    title: "Reserva del Guamo",
    category: "Turismo, Cabañas & Glamping",
    badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    image: "/shots/reservadelguamo.jpg",
    urlPreview: "reservadelguamo.com",
    description:
      "Experiencia visual inmersiva para reservas turísticas directas por WhatsApp sin pagar el 20% de comisión a plataformas intermediarias.",
    metrics: [
      { label: "Comisiones", value: "0% Ahorro" },
      { label: "Fotografía HD", value: "Inmersiva" },
      { label: "Reserva", value: "Inmediata" },
    ],
  },
  {
    id: "barberpro",
    title: "BarberPro Bogotá",
    category: "Estilo & Agendamiento",
    badgeColor: "border-purple-500/30 bg-purple-500/10 text-purple-400",
    image: "/shots/barberpro.jpg",
    urlPreview: "barberprobogota.com",
    description:
      "Web mobile-first diseñada para clientes jóvenes que reservan turnos desde el celular en segundos con WhatsApp automatizado.",
    metrics: [
      { label: "Carga en 4G", value: "0.5 Segundos" },
      { label: "Turnos", value: "Directos" },
      { label: "UX", value: "Touch Nativo" },
    ],
  },
  {
    id: "fuegomexa",
    title: "FuegoMexa Restaurante",
    category: "Gastronomía & Pedidos",
    badgeColor: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    image: "/shots/fuegomexa.jpg",
    urlPreview: "fuegomexarestaurante.co",
    description:
      "Menú digital interactivo con imágenes atractivas y botón directo para recibir pedidos de delivery sin comisiones de apps externas.",
    metrics: [
      { label: "Menú Digital", value: "Interactivo" },
      { label: "Pedidos", value: "WhatsApp Directo" },
      { label: "Comisiones", value: "$0 COP" },
    ],
  },
  {
    id: "tulicencia",
    title: "Tu Licencia Colombia",
    category: "Trámites & Movilidad",
    badgeColor: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    image: "/shots/tulicencia.jpg",
    urlPreview: "tulicenciacolombia.com",
    description:
      "Embudo de alta conversión con validación rápida de requisitos y botón de asesoría comercial inmediata.",
    metrics: [
      { label: "Prospectos Semanales", value: "+180" },
      { label: "Formulario", value: "Prellenado WA" },
      { label: "Retorno", value: "Inmediato" },
    ],
  },
  {
    id: "yajuridico",
    title: "YA Jurídico Abogados",
    category: "Servicios Legales & Litigio",
    badgeColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
    image: "/shots/yajuridico.jpg",
    urlPreview: "yajuridico.com",
    description:
      "Presencia digital sobria y formal para bufete de abogados, proyectando respaldo institucional y contacto confidencial encriptado.",
    metrics: [
      { label: "Presencia", value: "Institucional" },
      { label: "Seguridad", value: "SSL Bancario" },
      { label: "Contacto", value: "Privado" },
    ],
  },
  {
    id: "alfayomega",
    title: "Alfa & Omega Ingeniería",
    category: "Ingeniería & Seguridad Industrial",
    badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    image: "/shots/alfayomega.jpg",
    urlPreview: "alfayomegaingenieria.com",
    description:
      "Portal industrial para servicios de ingeniería, extintores certificados y fumigación con cotización directa a WhatsApp.",
    metrics: [
      { label: "Solución", value: "Profesional" },
      { label: "Respuesta", value: "Inmediata" },
      { label: "Garantía", value: "100% Legal" },
    ],
  },
];

export default function PortfolioShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeProject = projects[selectedIndex];

  return (
    <div className="w-full">
      {/* Selector de Proyectos en Barra de Pestañas Móvil/Desktop */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none snap-x">
        {projects.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => setSelectedIndex(idx)}
            className={`shrink-0 snap-start rounded-full px-4 py-2 text-xs font-bold transition-all ${
              idx === selectedIndex
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25 scale-105"
                : "border border-white/10 bg-white/[0.04] text-white/60 hover:border-white/20 hover:text-white"
            }`}
          >
            {proj.title}
          </button>
        ))}
      </div>

      {/* Tarjeta Principal de Presentación de Proyecto (App Shell Mockup) */}
      <div className="mt-4 overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-[#0c0c14]/90 backdrop-blur-2xl shadow-2xl shadow-cyan-500/10">
        {/* Cabecera estilo Navegador Moderno */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]/80" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/80" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]/80" />
            <div className="ml-3 flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-black/40 px-3 py-1 text-xs font-mono text-white/50">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              https://{activeProject.urlPreview}
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${activeProject.badgeColor}`}>
              {activeProject.category}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Online 72h
            </span>
          </div>
        </div>

        {/* Contenido: Grid Imagen + Detalles */}
        <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* Captura de pantalla real del sitio */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/15 bg-[#0a0a0f] shadow-2xl flex items-center justify-center">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-contain object-top"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          </div>

          {/* Información comercial y métricas del proyecto */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              <div className="sm:hidden mb-2">
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${activeProject.badgeColor}`}>
                  {activeProject.category}
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <WhatsAppButton
                text={`Hola Call360, vi el caso de éxito de ${activeProject.title} y quiero cotizar una página web similar para mi negocio`}
                label="Cotizar sitio similar"
                className="w-full sm:w-auto text-xs sm:text-sm px-5 py-2.5 shadow-lg shadow-cyan-500/20"
              />
              <span className="text-xs text-white/40">
                ⚡ Entrega garantizada en 72h
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
