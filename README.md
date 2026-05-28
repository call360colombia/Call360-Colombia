# Call360 Marketing — Sitio Web Corporativo

Plataforma de marketing y ventas para [Call360](https://call360.co), una empresa colombiana que ofrece soluciones integrales de CRM, páginas web, marketing digital y licencias de software.

## Tecnologías

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS 4 |
| Animaciones | CSS + IntersectionObserver (ScrollReveal) |
| 3D | Three.js (fondo animado) |
| Despliegue | Vercel / Node.js estático |

## Estructura del Proyecto

```
call360-marketing/
├── public/                    # Imágenes organizadas por página
│   ├── Call360Logo.png
│   ├── inicio/
│   ├── creacion-web/
│   ├── whatsapp/
│   ├── predictivo/
│   ├── Marketing/
│   └── licencias/
├── src/
│   ├── app/                   # Páginas (App Router)
│   │   ├── page.tsx           # Inicio
│   │   ├── layout.tsx         # Layout global (Navbar + Footer + ThreeBackground)
│   │   ├── servicios/
│   │   ├── licencias/
│   │   ├── paginas-web/
│   │   ├── crm-whatsapp/
│   │   ├── crm-llamadas/
│   │   ├── marketing-digital/
│   │   └── nosotros/
│   ├── components/            # Componentes reutilizables (20 archivos)
│   └── styles/
│       └── globals.css        # Estilos globales + animaciones CSS
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build de producción
npm run build

# Servidor de producción
npm start

# Lint
npm run lint
```

El servidor de desarrollo corre en [http://localhost:3000](http://localhost:3000).

## Páginas

| Ruta | Página |
|------|--------|
| `/` | Inicio — portal principal con servicios, confianza y actividad en vivo |
| `/servicios` | Catálogo de servicios con comparativa y CTA |
| `/licencias` | Tienda de licencias (Windows, Office, Adobe, etc.) |
| `/paginas-web` | Servicio de diseño web con slider de diseños y pricing |
| `/crm-whatsapp` | CRM multiagente para WhatsApp con chat en vivo |
| `/crm-llamadas` | CRM predictivo de llamadas con simulación Issabel PBX |
| `/marketing-digital` | Servicio de marketing con dashboard de analytics |
| `/nosotros` | Historia, timeline y estadísticas de la empresa |

## Documentación

Ver `docs/` para documentación detallada:

- [Arquitectura](docs/architecture.md)
- [Componentes](docs/components.md)
- [Páginas](docs/pages.md)
- [Imágenes](docs/images.md)
