"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Message {
  id: number;
  text: string;
  sender: "customer" | "agent";
  time: string;
}

interface Contact {
  id: number;
  name: string;
  phone: string;
  lastMsg: string;
  online: boolean;
  unread: number;
  tags: string[];
  avatar: string;
  messages: Message[];
  msgIndex: number;
}

const CONTACTS_DATA: Omit<Contact, "messages" | "msgIndex">[] = [
  { id: 1, name: "María Restrepo", phone: "+57 312 456 7890", lastMsg: "Sí, me interesa el plan", online: true, unread: 2, tags: ["Cliente", "Interesado"], avatar: "MR" },
  { id: 2, name: "Carlos Hernández", phone: "+57 320 987 6543", lastMsg: "¿Tienen disponibilidad?", online: true, unread: 0, tags: ["Prospecto"], avatar: "CH" },
  { id: 3, name: "Ana Martínez", phone: "+57 301 234 5678", lastMsg: "Gracias por la información", online: false, unread: 0, tags: ["Cliente"], avatar: "AM" },
  { id: 4, name: "Pedro Gómez", phone: "+57 315 876 5432", lastMsg: "Quiero contratar el plan", online: true, unread: 1, tags: ["Cliente", "Urgente"], avatar: "PG" },
  { id: 5, name: "Lucía Pérez", phone: "+57 318 555 0199", lastMsg: "¿A qué hora atienden?", online: false, unread: 0, tags: ["Prospecto"], avatar: "LP" },
];

const AGENT_RESPONSES = [
  "¡Claro! Con gusto te ayudamos.",
  "Te enviaré la información detallada.",
  "Sí, tenemos disponibilidad inmediata.",
  "El plan incluye todos esos beneficios.",
  "Déjame verificar y te confirmo.",
  "Excelente, ¿te parece si agendamos una llamada?",
  "Claro, puedes empezar hoy mismo.",
  "Te explico los detalles del servicio.",
];

const CUSTOMER_MESSAGES = [
  "Quiero saber más sobre el servicio",
  "¿Cuánto cuesta el plan?",
  "¿Incluye soporte técnico?",
  "Perfecto, me interesa",
  "¿Puedo pagar mensual?",
  "¿Tienen algún descuento?",
];

function formatTime(d: Date): string {
  return d.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
}

export default function WhatsAppLiveChat() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeContact, setActiveContact] = useState<number>(1);
  const [typingContact, setTypingContact] = useState<number | null>(null);
  const [contacts, setContacts] = useState<Contact[]>(() =>
    CONTACTS_DATA.map((c) => ({
      ...c,
      msgIndex: 0,
      messages: [
        {
          id: 0,
          text: c.lastMsg,
          sender: "customer" as const,
          time: formatTime(new Date()),
        },
      ],
    }))
  );
  const [msgIdCounter, setMsgIdCounter] = useState(100);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Simulate incoming messages & agent responses
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setContacts((prev) => {
        const updated = prev.map((contact) => {
          if (contact.id !== activeContact) return contact;

          const newIndex = contact.msgIndex;
          const allCustomerMsgs = [contact.lastMsg, ...CUSTOMER_MESSAGES];
          const totalPairs = Math.min(newIndex + 1, Math.floor(allCustomerMsgs.length));

          if (newIndex >= allCustomerMsgs.length * 2) return contact;

          return contact;
        });
        return updated;
      });

      // Pick a random online contact to simulate activity
      const onlineContacts = contacts.filter((c) => c.online);
      if (onlineContacts.length > 0 && Math.random() > 0.4) {
        const randomContact = onlineContacts[Math.floor(Math.random() * onlineContacts.length)];

        if (randomContact.id === activeContact) {
          // Add message exchange in active chat
          const isAgentTurn = randomContact.messages.length % 2 === 1;
          const text = isAgentTurn
            ? CUSTOMER_MESSAGES[Math.floor(Math.random() * CUSTOMER_MESSAGES.length)]
            : AGENT_RESPONSES[Math.floor(Math.random() * AGENT_RESPONSES.length)];

          setContacts((prev) =>
            prev.map((c) => {
              if (c.id !== randomContact.id) return c;
              return {
                ...c,
                messages: [
                  ...c.messages,
                  {
                    id: msgIdCounter,
                    text,
                    sender: isAgentTurn ? "customer" as const : "agent" as const,
                    time: formatTime(new Date()),
                  },
                ],
                lastMsg: text,
                msgIndex: c.msgIndex + 1,
                unread: c.id === activeContact ? 0 : c.unread + (isAgentTurn ? 1 : 0),
              };
            })
          );
          setMsgIdCounter((id) => id + 1);
        } else {
          // Add unread message from other contact
          if (Math.random() > 0.5) {
            const text = CUSTOMER_MESSAGES[Math.floor(Math.random() * CUSTOMER_MESSAGES.length)];
            setContacts((prev) =>
              prev.map((c) => {
                if (c.id !== randomContact.id) return c;
                return {
                  ...c,
                  messages: [
                    ...c.messages,
                    {
                      id: msgIdCounter,
                      text,
                      sender: "customer" as const,
                      time: formatTime(new Date()),
                    },
                  ],
                  lastMsg: text,
                  unread: c.unread + 1,
                };
              })
            );
            setMsgIdCounter((id) => id + 1);
          }
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [visible, activeContact, msgIdCounter, contacts]);

  // Show typing indicator when new message is coming
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setTypingContact(activeContact);
        setTimeout(() => setTypingContact(null), 2500);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [visible, activeContact]);

  const activeData = contacts.find((c) => c.id === activeContact);

  return (
    <div
      ref={sectionRef}
      className={`w-full transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="overflow-hidden rounded-2xl border border-white/[0.12] shadow-2xl">
        <div className="flex h-[520px] sm:h-[580px]">
          {/* SIDEBAR - Contact List */}
          <div className="hidden sm:flex sm:flex-col w-72 shrink-0 border-r border-white/[0.08] bg-[#111118]">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/[0.08] bg-[#075e54] px-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                C
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white">Call360 CRM</div>
                <div className="text-xs text-emerald-300">online</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="border-b border-white/[0.06] px-3 py-2">
              <div className="flex items-center gap-2 rounded-lg bg-white/[0.06] px-3 py-1.5 text-xs text-white/40">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                Buscar conversaciones
              </div>
            </div>

            {/* Contact list */}
            <div className="flex-1 overflow-y-auto">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => {
                    setActiveContact(contact.id);
                    setContacts((prev) =>
                      prev.map((c) =>
                        c.id === contact.id ? { ...c, unread: 0 } : c
                      )
                    );
                  }}
                  className={`flex w-full items-center gap-3 border-b border-white/[0.04] px-4 py-3 text-left transition-all hover:bg-white/[0.04] ${
                    activeContact === contact.id ? "bg-white/[0.06]" : ""
                  }`}
                >
                  <div className="relative shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-sm font-bold text-white">
                      {contact.avatar}
                    </div>
                    {contact.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#111118] bg-emerald-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white truncate">{contact.name}</span>
                      <span className="text-xs text-white/30">{formatTime(new Date())}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="truncate text-xs text-white/40">{contact.lastMsg}</span>
                      <div className="flex gap-1 ml-auto shrink-0">
                        {contact.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded px-1.5 py-0.5 text-[9px] font-semibold uppercase ${
                              tag === "Urgente"
                                ? "bg-red-500/20 text-red-400"
                                : tag === "Cliente"
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-amber-500/20 text-amber-400"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {contact.unread > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                      {contact.unread}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* MAIN CHAT PANEL */}
          <div className="flex-1 flex flex-col bg-[#0b141a] min-w-0">
            {activeData && (
              <>
                {/* Chat Header */}
                <div className="flex items-center gap-3 border-b border-white/[0.08] bg-[#1f2c33] px-4 py-3">
                  <button className="sm:hidden text-white/60" onClick={() => {}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12H9M9 12l4 4m-4-4 4-4" />
                    </svg>
                  </button>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-sm font-bold text-white shrink-0">
                    {activeData.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-white">{activeData.name}</div>
                    <div className="text-xs text-emerald-400">
                      {activeData.online ? "en línea" : "visto hoy"}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/40">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 bg-[#0b141a]">
                  {activeData.messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === "agent" ? "justify-end" : "justify-start"} animate-fade-in-up`}
                    >
                      <div
                        className={`max-w-[80%] sm:max-w-[70%] rounded-lg px-4 py-2 text-sm leading-relaxed ${
                          msg.sender === "agent"
                            ? "bg-[#005c4b] text-white rounded-br-md"
                            : "bg-[#1f2c33] text-white rounded-bl-md"
                        }`}
                      >
                        <span>{msg.text}</span>
                        <div
                          className={`mt-0.5 text-right text-[10px] ${
                            msg.sender === "agent" ? "text-emerald-300/60" : "text-white/30"
                          }`}
                        >
                          {msg.time}
                          {msg.sender === "agent" && (
                            <svg width="12" height="12" viewBox="0 0 16 11" fill="currentColor" className="inline ml-0.5 -mt-0.5">
                              <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.011-2.095a.463.463 0 0 0-.336-.153.457.457 0 0 0-.342.14.504.504 0 0 0-.144.342c0 .13.05.252.144.346l2.368 2.468a.46.46 0 0 0 .332.152.466.466 0 0 0 .349-.16l6.506-8.02a.5.5 0 0 0 .01-.572.464.464 0 0 0-.403-.222z" />
                              <path d="M14.379.653a.457.457 0 0 0-.305-.102.493.493 0 0 0-.38.178L7.5 8.366l-.422-.523-.553.682.66.814a.46.46 0 0 0 .331.152.466.466 0 0 0 .35-.16l6.505-8.02a.5.5 0 0 0 .01-.572.464.464 0 0 0-.402-.222z" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {typingContact === activeContact && (
                    <div className="flex justify-start animate-fade-in-up">
                      <div className="flex items-center gap-2 rounded-lg bg-[#1f2c33] px-4 py-3">
                        <div className="flex gap-1">
                          <span className="h-2 w-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="h-2 w-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="h-2 w-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                        <span className="text-xs text-white/40 italic">escribiendo...</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="flex items-center gap-3 bg-[#1f2c33] px-4 py-2.5">
                  <div className="flex h-10 flex-1 items-center gap-3 rounded-lg bg-[#2a3942] px-4">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span className="flex-1 text-sm text-white/30">Escribe un mensaje</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/30">
                    <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </div>

                {/* Mobile contact list */}
                <div className="sm:hidden border-t border-white/[0.08] bg-[#111118] px-2 py-2">
                  <div className="flex gap-2 overflow-x-auto">
                    {contacts.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setActiveContact(c.id)}
                        className={`flex shrink-0 flex-col items-center gap-1 rounded-lg px-3 py-2 transition-all ${
                          activeContact === c.id ? "bg-emerald-500/20" : "bg-white/[0.04]"
                        }`}
                      >
                        <div className="relative">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-[10px] font-bold text-white">
                            {c.avatar}
                          </div>
                          {c.online && (
                            <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-[#111118] bg-emerald-500" />
                          )}
                        </div>
                        <span className="text-[10px] text-white/60 truncate max-w-14">{c.name.split(" ")[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
