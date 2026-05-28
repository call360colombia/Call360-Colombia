import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/paginas-web", label: "Páginas Web" },
  { href: "/crm-whatsapp", label: "CRM WhatsApp" },
  { href: "/crm-llamadas", label: "CRM Llamadas" },
  { href: "/marketing-digital", label: "Marketing Digital" },
  { href: "/licencias", label: "Licencias de Software" },
  { href: "/servicios", label: "Todos los Servicios" },
];

const companyLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "https://wa.me/573203693949", label: "Contacto", external: true },
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
              {companyLinks.map((link) =>
                link.external ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/40 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
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
