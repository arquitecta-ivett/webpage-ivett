"use client";

import { whatsappLink } from "@/lib/site";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./Icons";

type Props = {
  message?: string;
  label?: string;
  className?: string;
  location: string;
};

export function WhatsAppButton({ message, label = "Cotiza por WhatsApp", className = "btn-whatsapp", location }: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track("whatsapp_click", { location })}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { location: "flotante" })}
      aria-label="Escribir por WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-whatsapp py-3.5 pr-5 pl-4 text-sm font-semibold text-white shadow-xl shadow-black/20 transition hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40 [animation-duration:2.5s]" />
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden sm:inline">¿Hablamos?</span>
    </a>
  );
}
