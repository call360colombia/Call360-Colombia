import {
  INSTALLATION_LABELS,
  LICENSE_PRODUCTS,
  SERVICE_LABELS,
  formatCOP,
  calculateLicensePrice,
  type CRMLeadData,
  type DemoLeadData,
  type LicenseLeadData,
  type ServiceLeadData,
  type ServiceType,
} from "./formData";

function line(label: string, value?: string | number | null): string {
  if (value === undefined || value === null || value === "") return "";
  return `• ${label}: ${value}`;
}

export function buildLicenseMessage(data: LicenseLeadData): string {
  const lines = [
    "Hola Call360 👋",
    "",
    "Quiero cotizar una licencia:",
    line("Producto", data.productName),
    line("Cantidad", `${data.quantity} ${data.quantity === 1 ? "licencia" : "licencias"}`),
    line("Precio unitario", formatCOP(data.unitPrice)),
    line(
      "Total estimado",
      data.isVolume ? "Consultar por volumen" : formatCOP(data.totalPrice)
    ),
    line("Instalación", INSTALLATION_LABELS[data.installation]),
    "",
    "Mis datos:",
    line("Nombre", data.fullName),
    line("Empresa", data.company),
    line("Email", data.email),
    line("Celular", data.phone),
    line("Ciudad", data.city),
  ];

  if (data.message) {
    lines.push("", `Mensaje: ${data.message}`);
  }

  return lines.filter(Boolean).join("\n");
}

export interface QuoteItem {
  productId: string;
  productName: string;
  quantity: number;
  subtotal: number;
}

export interface QuoteFormData {
  items: QuoteItem[];
  fullName: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  preferredSlot: string;
  message?: string;
}

/** Construye el mensaje de WhatsApp para el formulario de cotización con uno o varios productos */
export function buildQuoteMessage(data: QuoteFormData): string {
  const total = data.items.reduce((sum, item) => sum + item.subtotal, 0);
  const lines: string[] = [
    "Hola Call360 👋",
    "",
    "Quiero cotizar los siguientes productos:",
    "",
  ];

  data.items.forEach((item) => {
    const calc = calculateLicensePrice(
      LICENSE_PRODUCTS.find((p) => p.id === item.productId)?.basePrice ?? 0,
      item.quantity
    );
    lines.push(
      `📦 ${item.productName}`,
      `   Cantidad: ${item.quantity}`,
      `   Precio unitario: ${formatCOP(calc.unitPrice)}`,
      `   Subtotal: ${formatCOP(item.subtotal)}`,
      item.quantity >= 5 ? `   (Descuento por volumen: ${calc.discountPercent}%)` : "",
      ""
    );
  });

  lines.push(`🏷️ TOTAL: ${formatCOP(total)}`);
  lines.push("");

  lines.push("Mis datos:");
  lines.push(line("Nombre", data.fullName));
  lines.push(line("Empresa", data.company));
  lines.push(line("Email", data.email));
  lines.push(line("Celular", data.phone));
  lines.push(line("Ciudad", data.city));
  lines.push(line("Horario preferido", data.preferredSlot));

  if (data.message) {
    lines.push("", `Mensaje: ${data.message}`);
  }

  return lines.filter(Boolean).join("\n");
}

export function buildCRMMessage(data: CRMLeadData): string {
  const typeLabel =
    data.crmType === "whatsapp"
      ? "CRM WhatsApp Multiagente"
      : data.crmType === "llamadas"
        ? "CRM Llamadas Predictivo"
        : "CRM WhatsApp + Llamadas (Combinado)";

  const lines = [
    "Hola Call360 👋",
    "",
    "Quiero cotizar el CRM:",
    line("Tipo", typeLabel),
    line("Usuarios", `${data.users} ${data.users === 1 ? "agente" : "agentes"}`),
    line(
      "Inversión mensual",
      data.isVolume ? "Consultar por volumen" : `Desde ${formatCOP(data.monthlyEstimate)} / mes`
    ),
    line("Instalación", INSTALLATION_LABELS[data.installation]),
    "",
    "Mis datos:",
    line("Nombre", data.fullName),
    line("Empresa", data.company),
    line("Email", data.email),
    line("Celular", data.phone),
    line("Ciudad", data.city),
  ];

  if (data.message) {
    lines.push("", `Mensaje: ${data.message}`);
  }

  return lines.filter(Boolean).join("\n");
}

export function buildServiceMessage(data: ServiceLeadData): string {
  const lines = [
    "Hola Call360 👋",
    "",
    "Estoy interesado en su servicio:",
    line("Servicio", SERVICE_LABELS[data.service]),
    data.companySize ? line("Tamaño de empresa", data.companySize) : "",
    data.installation ? line("Instalación", INSTALLATION_LABELS[data.installation]) : "",
    "",
    "Mis datos:",
    line("Nombre", data.fullName),
    line("Empresa", data.company),
    line("Email", data.email),
    line("Celular", data.phone),
    line("Ciudad", data.city),
  ];

  if (data.message) {
    lines.push("", `Mensaje: ${data.message}`);
  }

  return lines.filter(Boolean).join("\n");
}

export function buildDemoMessage(data: DemoLeadData): string {
  const interestLabels = data.interests
    .map((id) => SERVICE_LABELS[id as ServiceType] || id)
    .join(", ");

  const installationLabel =
    data.installation === "presencial-bogota"
      ? "Presencial en Bogotá ($30.000 abonables a la compra)"
      : "Videollamada gratuita";

  const lines = [
    "Hola Call360 👋",
    "",
    "Quiero agendar una demo / asesoría:",
    line("Me interesa", interestLabels),
    line("Modalidad", installationLabel),
    line("Horario preferido", data.preferredSlot),
    "",
    "Mis datos:",
    line("Nombre", data.fullName),
    line("Empresa", data.company),
    line("Email", data.email),
    line("Celular", data.phone),
    line("Ciudad", data.city),
  ];

  if (data.message) {
    lines.push("", `Mensaje: ${data.message}`);
  }

  return lines.filter(Boolean).join("\n");
}

export function findLicenseById(id: string) {
  return LICENSE_PRODUCTS.find((p) => p.id === id);
}
