"use client";

import ServiceLeadForm from "@/components/ServiceLeadForm";

interface QuoteEcosistemaCompletoProps {
  triggerLabel?: string;
  triggerClassName?: string;
}

export default function QuoteEcosistemaCompleto({
  triggerLabel = "Cotizar Ecosistema Completo",
  triggerClassName = "",
}: QuoteEcosistemaCompletoProps) {
  return (
    <ServiceLeadForm
      service="integrado"
      triggerLabel={triggerLabel}
      triggerVariant="primary"
      triggerClassName={triggerClassName}
      showCompanySize={false}
    />
  );
}
