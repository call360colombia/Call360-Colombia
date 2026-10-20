import Link from "next/link";
import Image from "next/image";
import { CRM_LOGIN_URL, DEMO_PATH, CONTACT_EMAIL } from "@/lib/siteUrls";

const serviceLinks = [
  { href: "/paginas-web", label: "Páginas Web" },
  { href: "/crm-whatsapp", label: "CRM WhatsApp" },
  { href: "/crm-llamadas", label: "CRM Llamadas" },
  { href: "/marketing", label: "Marketing" },
  { href: "/servicios", label: "Todos los Servicios" },
];

const companyLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0f]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="group inline-block">
              <Image
                src="/Call360Logo.png?v=2"
                alt="Call360 Logo"
                width={140}
                height={40}
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/40">
              Tu sistema completo de ventas. Te conseguimos clientes y te damos
              el sistema para gestionarlos.
            </p>
            <div className="mt-4">
              <a
                href="https://wa.me/573203693949?text=Hola%20Call360%2C%20quiero%20cotizar%20un%20servicio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Cotizar ahora por WhatsApp →
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">
              Servicios
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-cyan-400/90 transition-colors hover:text-cyan-300 font-medium"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573203693949"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 transition-colors hover:text-white"
                >
                  +57 320 369 3949
                </a>
              </li>
              <li>
                <a
                  href={CRM_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 transition-colors hover:text-white"
                >
                  Acceder al CRM
                </a>
              </li>
              <li>
                <Link
                  href={DEMO_PATH}
                  className="text-sm text-white/40 transition-colors hover:text-white"
                >
                  Crear demo
                </Link>
              </li>
              <li>
                <span className="text-sm text-white/40">
                  Fontibón, Bogotá D.C.
                </span>
              </li>
              <li>
                <span className="text-sm text-white/40">
                  Atención a todo Colombia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8 text-center">
          <p className="text-xs text-white/30">
            © 2026 Call360 Colombia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
