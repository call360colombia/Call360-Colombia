"use client";

import React from "react";
import CommercialTicket, { TicketColor } from "./CommercialTicket";

const ARCADE_TICKETS: {
  title: string;
  category: string;
  serial: string;
  color: TicketColor;
  badge: string;
}[] = [
  {
    title: "Más Clientes",
    category: "ALTO IMPACTO",
    serial: "84920155",
    color: "coral", // Coral / Mandarina cálido
    badge: "VIP",
  },
  {
    title: "Más Reservas",
    category: "AGENDA 24/7",
    serial: "72190432",
    color: "gold", // Amarillo Mostaza / Oro Arcade
    badge: "TOP",
  },
  {
    title: "Más Citas",
    category: "AUTOMÁTICO",
    serial: "38561099",
    color: "emerald", // Verde Menta Arcade
    badge: "FAST",
  },
  {
    title: "Más Ventas",
    category: "0% COMISIÓN",
    serial: "91204567",
    color: "cyan", // Azul Cian Retro
    badge: "PRO",
  },
  {
    title: "Presencia Pro",
    category: "IMAGEN ÉLITE",
    serial: "45091238",
    color: "yellow", // Amarillo Crema Pastel
    badge: "ÉLITE",
  },
  {
    title: "Diferenciación",
    category: "EFECTO WOW",
    serial: "66723910",
    color: "lavender", // Lavanda Suave Arcade
    badge: "NIVEL",
  },
  {
    title: "WhatsApp Directo",
    category: "CIERRES 1-CLIC",
    serial: "55128904",
    color: "coral", // Coral / Mandarina
    badge: "CHAT",
  },
  {
    title: "Atención Bogotá",
    category: "TRATO DIRECTO",
    serial: "19842301",
    color: "emerald", // Menta Suave
    badge: "REAL",
  },
];

export default function ArcadeTicketsMarquee({ className = "" }: { className?: string }) {
  const row = [...ARCADE_TICKETS, ...ARCADE_TICKETS, ...ARCADE_TICKETS];

  return (
    <div
      className={`relative z-10 overflow-hidden py-6 sm:py-10 select-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] ${className}`}
    >
      {/* Destellos ambientales sutiles integrados con el fondo */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between px-10 opacity-40">
        <span className="text-amber-300/50 text-xl animate-pulse">✦</span>
        <span className="text-emerald-300/50 text-base animate-pulse" style={{ animationDelay: "0.8s" }}>
          ★
        </span>
        <span className="text-cyan-300/50 text-xl animate-pulse" style={{ animationDelay: "1.6s" }}>
          ✦
        </span>
        <span className="text-amber-300/50 text-base animate-pulse" style={{ animationDelay: "1.2s" }}>
          ★
        </span>
      </div>

      {/* CINTA DIAGONAL FLOTANDO DIRECTAMENTE SOBRE EL LIENZO */}
      <div className="relative w-[116%] -ml-[8%] rotate-[-1.8deg] sm:rotate-[-2.2deg] py-3">
        <div className="flex w-max items-center gap-4 sm:gap-6 px-4 animate-ticker pointer-events-auto">
          {row.map((item, i) => {
            const isWaveUp = i % 2 === 0;

            return (
              <div
                key={`${item.title}-${i}`}
                className={`transition-transform duration-300 hover:scale-105 shrink-0 ${
                  isWaveUp ? "-translate-y-1" : "translate-y-1"
                }`}
              >
                <CommercialTicket
                  category={item.category}
                  title={item.title}
                  serial={item.serial}
                  badge={item.badge}
                  color={item.color}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
