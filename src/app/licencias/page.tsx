import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Licencias de Software Originales | Call360",
  description:
    "Compra licencias originales de Windows, Office, Adobe y más. Software 100% legal con garantía de por vida. Entrega inmediata y soporte remoto incluido.",
};

const products = [
  {
    name: "Windows 10/11 Pro",
    price: 60000,
    originalPrice: 120000,
    description: "Licencia digital retail vitalicia",
    image: "/licencias/windows-pro.png?v=2",
    badge: null,
  },
  {
    name: "Office 2021 Pro Plus",
    price: 60000,
    originalPrice: 90000,
    description: "Word, Excel, PowerPoint y más",
    image: "/licencias/office-2021.png?v=2",
    badge: null,
  },
  {
    name: "Adobe Creative Cloud",
    price: 90000,
    originalPrice: 150000,
    description: "Todas las apps + IA (1 mes)",
    image: "/licencias/creative-cloud.png?v=2",
    badge: "OFERTA",
  },
  {
    name: "McAfee Total Protection",
    price: 95000,
    originalPrice: 200000,
    description: "Protección 4 años para 10 PCs",
    image: "/licencias/mcafee-total.png?v=2",
    badge: "-52%",
  },
  {
    name: "Copilot Pro",
    price: 95000,
    originalPrice: 120000,
    description: "IA integrada (GPT-4)",
    image: "/licencias/copilot-pro.png?v=2",
    badge: "IA",
  },
  {
    name: "Canva Pro",
    price: 30000,
    originalPrice: null,
    description: "1 año completo",
    image: "/licencias/CanvaPro.jpeg?v=2",
    badge: "ANUAL",
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);
}

export default function LicenciasPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src="/licencias/hero-background.png?v=2"
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)]" />
        <div className="noise-overlay" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
            Software Original
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Licencias Originales{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
              Garantizadas de Por Vida
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Deja de usar cracks o activadores que dañan tu PC. Compra software
            100% legal a precio de distribuidor.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-white/70">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                ✓
              </span>
              Sin mensualidades
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                ✓
              </span>
              Factura legal
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                ✓
              </span>
              Soporte remoto incluido
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTO DESTACADO */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-b from-amber-500/[0.08] to-[#12121a] p-8 sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 blur-3xl" />
            
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Más Vendido
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white/[0.04] p-4">
                  <Image
                    src="/licencias/pack-estrella.png?v=2"
                    alt="Pack Estrella Windows + Office"
                    fill
                    priority
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <h2 className="mb-2 text-3xl font-black text-white">
                    Pack Estrella
                  </h2>
                  <p className="mb-6 text-white/50">
                    Windows + Office Vitalicio
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-black text-emerald-400">
                        {formatPrice(100000)}
                      </span>
                      <span className="text-xl text-white/40 line-through">
                        {formatPrice(180000)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-emerald-400">
                      Ahorras {formatPrice(80000)} (44%)
                    </p>
                  </div>

                  <ul className="mb-8 space-y-3">
                    <li className="flex items-center gap-3 text-sm text-white/70">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                        ✓
                      </span>
                      Windows 10/11 Pro original
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/70">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                        ✓
                      </span>
                      Office 2021 Pro Plus
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/70">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                        ✓
                      </span>
                      Instalación remota GRATIS
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/70">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs">
                        ✓
                      </span>
                      Garantía de por vida
                    </li>
                  </ul>

                  <a
                    href="https://wa.me/573203693949?text=Hola%20Call360%2C%20quiero%20comprar%20el%20Pack%20Estrella%20(Windows%20%2B%20Office)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 text-base font-bold text-white transition-all hover:from-emerald-600 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Comprar ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS INDIVIDUALES */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Licencias{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                Individuales
              </span>
            </h2>
            <p className="mt-4 text-base text-white/50">
              Elige el software que necesitas al mejor precio
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] p-6 transition-all duration-300 hover:border-white/[0.15] hover:bg-[#1a1a24] hover-lift"
              >
                {product.badge && (
                  <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {product.badge}
                  </div>
                )}

                <div className="relative mb-6 flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-white/[0.04] p-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mb-2 text-lg font-bold text-white">
                  {product.name}
                </h3>
                <p className="mb-4 text-sm text-white/50">
                  {product.description}
                </p>

                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-emerald-400">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-white/40 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                <a
                  href={`https://wa.me/573203693949?text=Hola%20Call360%2C%20quiero%20comprar%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.15] bg-transparent px-6 py-3 text-sm font-bold text-white transition-all hover:border-emerald-400/40 hover:bg-emerald-400/5"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Añadir
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN CONFIANZA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/[0.08] bg-[#12121a] p-12 text-center sm:p-16">
            <h2 className="mb-6 text-3xl font-black tracking-tight sm:text-4xl">
              ¿Por qué comprar con{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                Call360?
              </span>
            </h2>

            {/* Trust Icons Image */}
            <div className="relative mx-auto mb-12 h-32 w-full max-w-md overflow-hidden rounded-2xl">
              <Image
                src="/licencias/trust-icons.png?v=2"
                alt="Iconos de confianza y seguridad"
                fill
                className="object-contain"
              />
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  title: "Software Original",
                  desc: "Licencias 100% legales y verificables",
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  title: "Entrega Inmediata",
                  desc: "Recibe tu licencia en minutos",
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  title: "Soporte Remoto",
                  desc: "Te ayudamos con la instalación",
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  ),
                  title: "Activación Segura",
                  desc: "Garantía de por vida incluida",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-400">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] p-12 text-center sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.08] to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                Habla con nosotros y{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  activa tu software hoy mismo
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
                Te asesoramos para elegir la mejor licencia para tu necesidad.
              </p>
              <div className="mt-8">
                <WhatsAppButton
                  text="Hola Call360, quiero comprar una licencia de software"
                  className="text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
