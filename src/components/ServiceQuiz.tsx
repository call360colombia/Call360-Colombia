"use client";

import { useId, useState } from "react";
import { SERVICE_LABELS, type ServiceType } from "@/lib/formData";
import { trackEvent } from "@/lib/analytics";
import LeadForm, { type LeadFormSubmitData } from "./LeadForm";
import { buildServiceMessage } from "@/lib/leadTemplates";

interface QuizOption {
  id: string;
  label: string;
  description?: string;
  emoji?: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

const QUESTIONS: QuizQuestion[] = [
  {
    id: "goal",
    question: "¿Qué es lo que más necesitas hoy?",
    options: [
      {
        id: "captar",
        label: "Conseguir más clientes",
        description: "Atraer prospectos desde Google y redes",
        emoji: "🎯",
      },
      {
        id: "gestionar",
        label: "Organizar los que ya tengo",
        description: "Atender mejor por WhatsApp y no perder oportunidades",
        emoji: "💬",
      },
      {
        id: "cerrar",
        label: "Cerrar más ventas por llamada",
        description: "Llamar más rápido y aumentar cierres",
        emoji: "📞",
      },
      {
        id: "completo",
        label: "Todo lo anterior (ecosistema)",
        description: "Sistema completo integrado",
        emoji: "🚀",
      },
    ],
  },
  {
    id: "team",
    question: "¿Cuántas personas atienden clientes?",
    options: [
      { id: "1", label: "Solo yo", emoji: "👤" },
      { id: "2-5", label: "2 a 5 personas", emoji: "👥" },
      { id: "6-15", label: "6 a 15 personas", emoji: "👨‍👩‍👧‍👦" },
      { id: "15+", label: "Más de 15", emoji: "🏢" },
    ],
  },
  {
    id: "channel",
    question: "¿Cómo te contactan tus clientes HOY?",
    options: [
      { id: "whatsapp", label: "WhatsApp personal", emoji: "📱" },
      { id: "llamadas", label: "Llamadas al celular", emoji: "📞" },
      { id: "formulario", label: "Formulario web", emoji: "🌐" },
      { id: "no-me-encuentran", label: "No me encuentran", emoji: "😕" },
    ],
  },
  {
    id: "web",
    question: "¿Cómo está tu presencia online?",
    options: [
      { id: "profesional", label: "Tengo web profesional que vende", emoji: "✅" },
      { id: "basica", label: "Tengo web pero no vende", emoji: "😐" },
      { id: "no-tengo", label: "No tengo página web", emoji: "❌" },
      { id: "redes", label: "Solo redes sociales", emoji: "📲" },
    ],
  },
];

interface Recommendation {
  service: ServiceType;
  title: string;
  description: string;
  ctaLabel: string;
  highlights: { label: string; value: string }[];
}

function getRecommendation(answers: Record<string, string>): Recommendation {
  const goal = answers.goal;
  const team = answers.team;
  const channel = answers.channel;
  const web = answers.web;

  if (goal === "captar" || web === "no-tengo" || web === "redes") {
    return {
      service: "pagina-web",
      title: "Necesitas una Página Web profesional",
      description:
        "Tu vitrina digital 24/7 lista en 72h, optimizada para aparecer en Google y conectar directo a WhatsApp.",
      ctaLabel: "Cotizar mi página web",
      highlights: [
        { label: "Servicio", value: SERVICE_LABELS["pagina-web"] },
        { label: "Tiempo", value: "72 horas" },
        { label: "Desde", value: "$100.000/mes" },
      ],
    };
  }

  if (goal === "gestionar" || channel === "whatsapp") {
    return {
      service: "crm-whatsapp",
      title: "Necesitas un CRM WhatsApp profesional",
      description:
        "Deja de usar tu WhatsApp personal. Múltiples agentes, un solo número, campañas masivas, historial centralizado.",
      ctaLabel: "Cotizar CRM WhatsApp",
      highlights: [
        { label: "Servicio", value: SERVICE_LABELS["crm-whatsapp"] },
        { label: "Agentes", value: `${team || "1-5"} personas` },
        { label: "Desde", value: "$65.000 COP/mes (o US$20)" },
      ],
    };
  }

  if (goal === "cerrar" || channel === "llamadas") {
    return {
      service: "crm-llamadas",
      title: "Necesitas un CRM de Llamadas predictivo",
      description:
        "Multiplica tus contactos telefónicos. Marcación predictiva, minutos ilimitados a Colombia, grabación con IA.",
      ctaLabel: "Cotizar CRM Llamadas",
      highlights: [
        { label: "Servicio", value: SERVICE_LABELS["crm-llamadas"] },
        { label: "Agentes", value: `${team || "1-5"} personas` },
        { label: "Desde", value: "$120.000/usuario" },
      ],
    };
  }

  return {
    service: "integrado",
    title: "Necesitas el Ecosistema Call360 completo",
    description:
      "Página web + CRM WhatsApp + CRM Llamadas. Todo integrado, sin proveedores diferentes, listo en menos de 1 semana.",
    ctaLabel: "Cotizar ecosistema completo",
    highlights: [
      { label: "Servicio", value: SERVICE_LABELS.integrado },
      { label: "Incluye", value: "Web + WhatsApp + Llamadas" },
      { label: "Ahorro", value: "Hasta 40% vs separado" },
    ],
  };
}

export default function ServiceQuiz() {
  const titleId = useId();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  const current = QUESTIONS[step];
  const totalSteps = QUESTIONS.length;
  const isLast = step === totalSteps - 1;

  const handleAnswer = (optionId: string) => {
    const next = { ...answers, [current.id]: optionId };
    setAnswers(next);
    if (isLast) {
      const rec = getRecommendation(next);
      setRecommendation(rec);
      trackEvent("quiz_completed", {
        service_recommended: rec.service,
        goal: next.goal,
        team: next.team,
        channel: next.channel,
        web: next.web,
      });
      setStep(totalSteps);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
    setRecommendation(null);
    setFormOpen(false);
  };

  const handleFormSubmit = (data: LeadFormSubmitData) => {
    const message = buildServiceMessage({
      ...data,
      service: recommendation?.service ?? "integrado",
    });
    trackEvent("quiz_lead_submitted", {
      service: recommendation?.service,
      ...answers,
    });
    window.open(`https://wa.me/573203693949?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setFormOpen(false);
  };

  return (
    <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-violet-500/[0.05] to-[#12121a] p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9.879 16.121A3 3 0 1 0 12 14a3 3 0 0 0-2.121.879M12 2v2m0 16v2M4.93 4.93l1.414 1.414m11.314 11.314l1.414 1.414M2 12h2m16 0h2M4.93 19.071l1.414-1.414m11.314-11.314l1.414-1.414" />
          </svg>
        </div>
        <div>
          <h3 id={titleId} className="text-lg font-black text-white">
            ¿No sabes qué necesitas?
          </h3>
          <p className="text-xs text-white/50">Responde 4 preguntas y te recomendamos el ideal</p>
        </div>
      </div>

      {step < totalSteps && (
        <>
          <div className="mb-5 flex items-center gap-1.5">
            {QUESTIONS.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all ${
                  i <= step ? "bg-gradient-to-r from-violet-500 to-cyan-500" : "bg-white/[0.06]"
                }`}
              />
            ))}
          </div>

          <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-violet-400">
            Pregunta {step + 1} de {totalSteps}
          </p>
          <h4 className="mb-5 text-xl font-black text-white">{current.question}</h4>

          <div className="space-y-2">
            {current.id === "goal"
              ? (() => {
                  const heroId = "cerrar";
                  const heroOption = current.options.find((o) => o.id === heroId);
                  const otherOptions = current.options.filter((o) => o.id !== heroId);
                  return (
                    <>
                      {heroOption && (
                        <button
                          type="button"
                          onClick={() => handleAnswer(heroOption.id)}
                          className="group relative w-full overflow-hidden rounded-2xl border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-500/15 via-cyan-500/5 to-blue-500/15 p-5 text-left shadow-lg shadow-cyan-500/10 transition-all hover:border-cyan-400/60 hover:shadow-cyan-500/20 sm:p-6"
                        >
                          <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-cyan-500/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-200 sm:right-4 sm:top-4">
                            <span aria-hidden="true">⭐</span> Más popular
                          </div>
                          <div className="flex items-start gap-4 pr-20">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/20 text-3xl sm:h-16 sm:w-16 sm:text-4xl">
                              <span aria-hidden="true">{heroOption.emoji}</span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                                Ideal para Call Centers
                              </div>
                              <div className="mt-1 text-lg font-black text-white sm:text-xl">
                                {heroOption.label}
                              </div>
                              {heroOption.description && (
                                <div className="mt-1 text-sm text-white/70">
                                  {heroOption.description}
                                </div>
                              )}
                            </div>
                          </div>
                        </button>
                      )}
                      <div className="grid gap-2 sm:grid-cols-3">
                        {otherOptions.map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => handleAnswer(opt.id)}
                            className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 p-3.5 text-left transition-all hover:border-violet-500/40 hover:bg-violet-500/5"
                          >
                            {opt.emoji && <span className="text-2xl">{opt.emoji}</span>}
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-bold text-white">{opt.label}</div>
                              {opt.description && (
                                <div className="text-xs text-white/50">
                                  {opt.description}
                                </div>
                              )}
                            </div>
                            <svg
                              className="shrink-0 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:text-violet-400"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path d="M9 18l6-6-6-6" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    </>
                  );
                })()
              : current.options.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleAnswer(opt.id)}
                    className="group flex w-full items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0a0a0f]/60 p-3.5 text-left transition-all hover:border-violet-500/40 hover:bg-violet-500/5"
                  >
                    {opt.emoji && <span className="text-2xl">{opt.emoji}</span>}
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-white">{opt.label}</div>
                      {opt.description && (
                        <div className="text-xs text-white/50">{opt.description}</div>
                      )}
                    </div>
                    <svg
                      className="shrink-0 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:text-violet-400"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                ))}
          </div>

          {step > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="mt-4 text-xs text-white/40 underline hover:text-white/60"
            >
              ← Pregunta anterior
            </button>
          )}
        </>
      )}

      {step === totalSteps && recommendation && (
        <div>
          <div className="mb-5 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 p-5">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
              ✨ Nuestra recomendación
            </div>
            <h4 className="mb-2 text-xl font-black text-white">{recommendation.title}</h4>
            <p className="mb-4 text-sm text-white/70">{recommendation.description}</p>
            <div className="mb-4 grid grid-cols-3 gap-2">
              {recommendation.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-lg border border-white/[0.06] bg-[#0a0a0f]/60 p-2"
                >
                  <div className="text-[9px] font-bold uppercase tracking-wider text-white/40">
                    {h.label}
                  </div>
                  <div className="mt-0.5 text-xs font-bold text-white">{h.value}</div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setFormOpen(true)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 text-sm font-bold text-white transition-all hover:from-emerald-600 hover:to-green-700 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              {recommendation.ctaLabel} →
            </button>
          </div>

          <button
            type="button"
            onClick={handleRestart}
            className="block w-full text-center text-xs text-white/40 underline hover:text-white/60"
          >
            Repetir el diagnóstico
          </button>
        </div>
      )}

      <LeadForm
        open={formOpen && !!recommendation}
        onClose={() => setFormOpen(false)}
        context={{
          title: recommendation?.title ?? "Cotizar",
          subtitle: recommendation?.description,
          highlights: recommendation?.highlights,
          installation: { show: true, defaultValue: "remoto" },
        }}
        onSubmit={handleFormSubmit}
        ctaLabel="Enviar a WhatsApp"
      />
    </div>
  );
}
