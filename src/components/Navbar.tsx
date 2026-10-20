"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CRM_LOGIN_URL, DEMO_PATH } from "@/lib/siteUrls";

const WHATSAPP_URL =
  "https://wa.me/573203693949?text=Hola%20Call360%2C%20quiero%20informaci%C3%B3n";

const solutions = [
  {
    href: "/crm-llamadas",
    label: "CRM Llamadas",
    description: "Marcación predictiva y minutos ilimitados.",
  },
  {
    href: "/crm-whatsapp",
    label: "CRM WhatsApp",
    description: "Atención multiagente desde un solo número.",
  },
  {
    href: "/paginas-web",
    label: "Páginas Web",
    description: "Sitios profesionales listos para vender.",
  },
  {
    href: "/marketing",
    label: "Marketing",
    description: "Campañas y contenido para generar leads.",
  },
  {
    href: "/servicios",
    label: "Ver todas las soluciones",
    description: "Explora el ecosistema completo de Call360.",
  },
];

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopSolutionsOpen, setIsDesktopSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(true);
  const navRef = useRef<HTMLElement>(null);

  const closeMenus = () => {
    setIsMobileOpen(false);
    setIsDesktopSolutionsOpen(false);
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        closeMenus();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0f]/85 backdrop-blur-xl"
      aria-label="Navegación principal"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="group shrink-0" onClick={closeMenus}>
            <Image
              src="/Call360Logo.png?v=2"
              alt="Call360 Logo"
              width={277}
              height={79}
              className="h-[72px] w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/65 transition hover:bg-white/[0.06] hover:text-white"
            >
              Inicio
            </Link>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDesktopSolutionsOpen((value) => !value)}
                aria-haspopup="menu"
                aria-expanded={isDesktopSolutionsOpen}
                aria-controls="desktop-solutions-menu"
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition ${
                  isDesktopSolutionsOpen
                    ? "rounded-t-2xl bg-white/[0.08] text-white"
                    : "rounded-full text-white/65 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                Soluciones
                <ChevronDownIcon
                  className={`transition-transform duration-200 ${
                    isDesktopSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDesktopSolutionsOpen && (
                <div
                  id="desktop-solutions-menu"
                  role="menu"
                  aria-label="Soluciones Call360"
                  className="pointer-events-auto absolute left-0 top-full z-[60] mt-0 w-[420px] rounded-2xl rounded-tl-none border border-white/[0.08] bg-[#12121a]/95 p-2 shadow-2xl shadow-black/30 ring-1 ring-white/[0.04] backdrop-blur-xl"
                >
                  <div className="grid gap-1">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        role="menuitem"
                        onClick={closeMenus}
                        className="group rounded-xl px-4 py-3 transition hover:bg-white/[0.06] focus:bg-white/[0.06] focus:outline-none"
                      >
                        <span className="flex items-center justify-between gap-4">
                          <span className="text-sm font-bold text-white">
                            {solution.label}
                          </span>
                          <span className="text-white/25 transition group-hover:translate-x-0.5 group-hover:text-cyan-300">
                            -&gt;
                          </span>
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-white/45">
                          {solution.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/call-center"
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/65 transition hover:bg-white/[0.06] hover:text-white"
            >
              Call Center
            </Link>
            <Link
              href="/industrias"
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/65 transition hover:bg-white/[0.06] hover:text-white"
            >
              Industrias
            </Link>
            <Link
              href="/nosotros"
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/65 transition hover:bg-white/[0.06] hover:text-white"
            >
              Nosotros
            </Link>
          </div>

          <div className="hidden items-center gap-2.5 lg:flex">
            <a
              href={CRM_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/[0.06] hover:text-white"
            >
              Acceder al CRM
            </a>
            <Link
              href={DEMO_PATH}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white transition hover:bg-white/[0.12]"
            >
              Probar Demo
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02] hover:from-emerald-600 hover:to-green-700 active:scale-[0.98]"
            >
              <WhatsAppIcon />
              Cotizar
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen((value) => !value)}
            aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-controls="mobile-navbar"
            aria-expanded={isMobileOpen}
            className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${
                isMobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${
                isMobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${
                isMobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div
          id="mobile-navbar"
          className="border-t border-white/[0.06] bg-[#0a0a0f]/96 px-4 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <Link
              href="/"
              onClick={closeMenus}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/[0.06] hover:text-white"
            >
              Inicio
            </Link>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03]">
              <button
                type="button"
                onClick={() => setIsMobileSolutionsOpen((value) => !value)}
                aria-haspopup="menu"
                aria-expanded={isMobileSolutionsOpen}
                aria-controls="mobile-solutions-menu"
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-bold text-white"
              >
                Soluciones
                <ChevronDownIcon
                  className={`transition-transform duration-200 ${
                    isMobileSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileSolutionsOpen && (
                <div
                  id="mobile-solutions-menu"
                  role="menu"
                  aria-label="Soluciones Call360"
                  className="space-y-1 px-2 pb-2"
                >
                  {solutions.map((solution) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                      role="menuitem"
                      onClick={closeMenus}
                      className="block rounded-xl px-3 py-3 transition hover:bg-white/[0.06] focus:bg-white/[0.06] focus:outline-none"
                    >
                      <span className="block text-sm font-semibold text-white/85">
                        {solution.label}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-white/42">
                        {solution.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/call-center"
              onClick={closeMenus}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/[0.06] hover:text-white"
            >
              Call Center
            </Link>
            <Link
              href="/industrias"
              onClick={closeMenus}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/[0.06] hover:text-white"
            >
              Industrias
            </Link>
            <Link
              href="/nosotros"
              onClick={closeMenus}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/[0.06] hover:text-white"
            >
              Nosotros
            </Link>

            <div className="grid gap-2.5 pt-2 border-t border-white/[0.08]">
              {/* Botón Primario Móvil */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenus}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all"
              >
                <WhatsAppIcon />
                Cotizar por WhatsApp
              </a>

              {/* Botón Secundario Móvil */}
              <Link
                href={DEMO_PATH}
                onClick={closeMenus}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md px-5 py-3 text-sm font-bold text-white active:scale-[0.98] transition-all hover:bg-white/[0.12]"
              >
                Probar Demo CRM
              </Link>

              {/* Acceso Clientes CRM */}
              <a
                href={CRM_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenus}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full text-xs font-semibold text-white/60 hover:text-white transition"
              >
                ¿Ya eres cliente? Iniciar sesión en CRM →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
