# Organización de Imágenes

## Estructura de `/public/`

```
public/
├── Call360Logo.png              # Logo principal (usado en Navbar y Footer)
├── hero.png                     # Hero genérico (no referenciado)
├── favicon.ico
├── android-chrome-*.png
├── apple-touch-icon.png
├── favicon_io/                  # Favicons duplicados
├── inicio/                      # Página de Inicio
│   ├── hero.png
│   ├── web.png
│   ├── whatsapp.png
│   └── vozip.png
├── creacion-web/                # Páginas Web
│   ├── hero.png
│   ├── Diseño1.png
│   ├── Diseño2.png
│   ├── Diseño3.png
│   └── Diseño4.png
├── whatsapp/                    # CRM WhatsApp
│   ├── hero.png
│   ├── dashboard.png
│   ├── PanelWhatsapp.png
│   ├── HistorialWhatsapp.png
│   ├── CampañasWhatsapp.png
│   ├── WhatsappCRM.jpeg
│   └── WhatsappCRMPC.jpeg
├── predictivo/                  # CRM Llamadas
│   ├── hero.png
│   ├── llamada.jpeg
│   ├── dashboard.jpeg
│   └── Dashboard 2.jpeg
├── Marketing/                   # Marketing Digital
│   ├── EstrategiaDeContenido.jpeg
│   ├── DiseñosProfesionales.png
│   ├── ContenidoConstante.png
│   ├── AnunciosEnRedes.png
│   ├── ReportesMensuales.png
│   ├── PlanCrece.png
│   ├── PlanPro.png
│   └── SolicitarPropuesta.png
└── licencias/                   # Licencias
    ├── hero-background.png
    ├── pack-estrella.png
    ├── trust-icons.png
    ├── windows-pro.png
    ├── office-2021.png
    ├── creative-cloud.png
    ├── mcafee-total.png
    ├── copilot-pro.png
    └── CanvaPro.jpeg
```

## Mapeo de Carpetas a Páginas

| Carpeta | Página | Ruta |
|---------|--------|------|
| `inicio/` | Inicio | `/` |
| `creacion-web/` | Páginas Web | `/paginas-web` |
| `whatsapp/` | CRM WhatsApp | `/crm-whatsapp` |
| `predictivo/` | CRM Llamadas | `/crm-llamadas` |
| `Marketing/` | Marketing Digital | `/marketing-digital` |
| `licencias/` | Licencias | `/licencias` |

## Convenciones

### Cache Busting

Todas las referencias a imágenes usan `?v=2` para forzar recarga:

```tsx
<Image src="/inicio/hero.png?v=2" alt="..." />
```

Cuando se reemplacen imágenes, incrementar el número de versión.

### Uso con next/image

Todas las imágenes se renderizan con `next/image` para optimización automática:

```tsx
import Image from "next/image";

<Image
  src="/whatsapp/dashboard.png?v=2"
  alt="Dashboard de WhatsApp"
  fill
  className="object-cover"
/>
```

**Configuración en `next.config.ts`:**
```ts
images: {
  localPatterns: [
    { pathname: "/**", search: "" },
    { pathname: "/**", search: "?v=2" },
  ],
},
```

### Formatos

- **PNG** — logos, interfaces, screenshots con transparencia
- **JPEG** — fotos, screenshots de mayor complejidad
- **SVG** — íconos inline en componentes (no en `/public/`)

### Tamaños Recomendados

| Tipo | Dimensiones | Uso |
|------|------------|-----|
| Hero image | 800×800 o mayor | Imágenes principales de hero |
| Feature image | 1200×675 (16:9) | Screenshots de productos |
| Card image | 600×400 | Thumbnails de cards |
| Logo | 200×50 o mayor | Navbar/Footer |

### Buenas Prácticas

1. **Nomenclatura descriptiva**: `EstrategiaDeContenido.jpeg`, no `img001.jpg`
2. **Una carpeta por página**: no mezclar imágenes de distintas páginas
3. **Formato consistente**: usar `.png` para interfaces, `.jpeg` para fotos
4. **Optimizar antes de subir**: reducir tamaño de archivo sin sacrificar calidad
5. **Alt text descriptivo**: siempre incluir `alt` en `<Image>`
6. **Cache busting**: actualizar `?v=2` → `?v=3` al reemplazar imágenes

### Para Añadir Nueva Imagen

1. Colocar el archivo en la carpeta correspondiente de `/public/`
2. Referenciar con `<Image src="/carpeta/archivo.png?v=2" alt="..." />`
3. Verificar que `images.localPatterns` en `next.config.ts` incluya la extensión
4. Ejecutar `npm run build` para verificar que no hay errores
