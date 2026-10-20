export const WHATSAPP_NUMBER = "573203693949";

export type ServiceType =
  | "pagina-web"
  | "crm-whatsapp"
  | "crm-llamadas"
  | "marketing-digital"
  | "licencias"
  | "integrado"
  | "asesoria"
  | "demo";

export type InstallationMode = "presencial-bogota" | "remoto" | "no-aplica";

export type LeadSource =
  | "home"
  | "paginas-web"
  | "crm-whatsapp"
  | "crm-llamadas"
  | "licencias"
  | "marketing-digital";

/* ── Pricing Engine ─────────────────────────────────────── */

export interface LicensePricingTier {
  min: number;
  max: number | null;
  discountPercent: number;
  label: string;
}

/** Editable pricing tiers: change values here to modify volume discounts */
export const LICENSE_PRICING_TIERS: LicensePricingTier[] = [
  { min: 1, max: 4, discountPercent: 0, label: "Individual" },
  { min: 5, max: 9, discountPercent: 5, label: "Volumen 5+" },
  { min: 10, max: 19, discountPercent: 10, label: "Volumen 10+" },
  { min: 20, max: null, discountPercent: 15, label: "Mayorista 20+" },
];

export interface PriceCalculation {
  unitPrice: number;
  baseTotal: number;
  discountPercent: number;
  discountAmount: number;
  total: number;
  tierLabel: string;
}

/**
 * Pure function — no side effects, fully desacoplada.
 * Cambia LICENSE_PRICING_TIERS arriba para modificar descuentos,
 * mínimos o agregar nuevos escalones.
 */
export function calculateLicensePrice(
  basePrice: number,
  quantity: number
): PriceCalculation {
  const tier =
    LICENSE_PRICING_TIERS.find(
      (t) => quantity >= t.min && (t.max === null || quantity <= t.max)
    ) ?? LICENSE_PRICING_TIERS[0];

  const baseTotal = basePrice * quantity;
  const discountAmount = Math.round(baseTotal * (tier.discountPercent / 100));
  const total = baseTotal - discountAmount;
  const unitPrice = Math.round(total / quantity);

  return { unitPrice, baseTotal, discountPercent: tier.discountPercent, discountAmount, total, tierLabel: tier.label };
}

/* ── Pack Estrella ──────────────────────────────────────── */

export interface PackEstrellaData {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  savings: number;
  features: string[];
  image: string;
}

/** Editable: cambia precio, productos incluidos o imagen */
export const PACK_ESTRELLA: PackEstrellaData = {
  id: "pack-estrella",
  name: "Pack Estrella",
  description: "Windows + Office Vitalicio",
  price: 100000,
  originalPrice: 180000,
  savings: 80000,
  features: [
    "Windows 10/11 Pro original",
    "Office 2021 Pro Plus",
    "Instalación remota GRATIS",
    "Garantía de por vida",
  ],
  image: "/licencias/pack-estrella.png?v=2",
};

/* ── License Products ───────────────────────────────────── */

export interface LicenseProduct {
  id: string;
  name: string;
  basePrice: number;
  image: string;
  description: string;
  /** Precio referencial para mostrar tachado (opcional) */
  originalPrice?: number | null;
  /** Badge opcional: "OFERTA", "-52%", "IA", "ANUAL", etc. */
  badge?: string | null;
}

export const LICENSE_PRODUCTS: LicenseProduct[] = [
  {
    id: "windows-pro",
    name: "Windows 10/11 Pro",
    basePrice: 60000,
    originalPrice: 120000,
    image: "/licencias/windows-pro.png?v=2",
    description: "Licencia digital retail vitalicia",
    badge: null,
  },
  {
    id: "office-2021",
    name: "Office 2021 Pro Plus",
    basePrice: 60000,
    originalPrice: 90000,
    image: "/licencias/office-2021.png?v=2",
    description: "Word, Excel, PowerPoint y más",
    badge: null,
  },
  {
    id: "creative-cloud",
    name: "Adobe Creative Cloud",
    basePrice: 90000,
    originalPrice: 150000,
    image: "/licencias/creative-cloud.png?v=2",
    description: "Todas las apps + IA (1 mes)",
    badge: "OFERTA",
  },
  {
    id: "mcafee-total",
    name: "McAfee Total Protection",
    basePrice: 95000,
    originalPrice: 200000,
    image: "/licencias/mcafee-total.png?v=2",
    description: "Protección 4 años para 10 PCs",
    badge: "-52%",
  },
  {
    id: "copilot-pro",
    name: "Copilot Pro",
    basePrice: 95000,
    originalPrice: 120000,
    image: "/licencias/copilot-pro.png?v=2",
    description: "IA integrada (GPT-4)",
    badge: "IA",
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    basePrice: 30000,
    originalPrice: null,
    image: "/licencias/CanvaPro.jpeg?v=2",
    description: "1 año completo",
    badge: "ANUAL",
  },
];

export const VOLUME_THRESHOLDS = {
  licencias: 5,
  crmWhatsapp: 10,
  crmLlamadas: 5,
} as const;

export const CITIES = [
  "Bogotá D.C.",
  "Medellín",
  "Cali",
  "Barranquilla",
  "Cartagena",
  "Bucaramanga",
  "Pereira",
  "Manizales",
  "Santa Marta",
  "Ibagué",
  "Otra ciudad",
] as const;

export const COMPANY_SIZES = [
  "1-3 empleados",
  "4-10 empleados",
  "11-25 empleados",
  "26-50 empleados",
  "50+ empleados",
] as const;

export const SERVICE_LABELS: Record<ServiceType, string> = {
  "pagina-web": "Página Web",
  "crm-whatsapp": "CRM WhatsApp",
  "crm-llamadas": "CRM Llamadas",
  "marketing-digital": "Marketing Digital",
  licencias: "Licencias de Software",
  integrado: "Ecosistema Completo",
  asesoria: "Necesito asesoría",
  demo: "Demo / Asesoría",
};

export const INSTALLATION_LABELS: Record<InstallationMode, string> = {
  "presencial-bogota": "Presencial en Bogotá",
  remoto: "Asistencia remota",
  "no-aplica": "No aplica",
};

export interface BaseLeadData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  message?: string;
}

export interface LicenseLeadData extends BaseLeadData {
  productId: string;
  productName: string;
  quantity: number;
  installation: InstallationMode;
  isVolume: boolean;
  unitPrice: number;
  totalPrice: number;
}

export interface CRMLeadData extends BaseLeadData {
  crmType: "whatsapp" | "llamadas" | "combinado";
  users: number;
  installation: InstallationMode;
  isVolume: boolean;
  monthlyEstimate: number;
}

export interface ServiceLeadData extends BaseLeadData {
  service: ServiceType;
  companySize?: string;
  installation?: InstallationMode;
}

export interface DemoLeadData extends BaseLeadData {
  interests: string[];
  installation: InstallationMode;
  preferredSlot: string;
}

export function formatCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(value);
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
