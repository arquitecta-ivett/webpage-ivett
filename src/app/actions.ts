"use server";

import { headers } from "next/headers";
import { getSupabase } from "@/lib/supabase";

export type LeadState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
  /** Valores enviados, para no perder lo escrito si hay errores de validación */
  values?: Record<string, string>;
};

const clean = (v: FormDataEntryValue | null, max = 500) => String(v ?? "").trim().slice(0, max);

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot anti-spam: los bots llenan este campo oculto.
  if (clean(formData.get("empresa_web"))) return { ok: true, message: "ok" };

  const lead = {
    name: clean(formData.get("name"), 120),
    phone: clean(formData.get("phone"), 30),
    email: clean(formData.get("email"), 160),
    city: clean(formData.get("city"), 80),
    service: clean(formData.get("service"), 120),
    budget: clean(formData.get("budget"), 60),
    message: clean(formData.get("message"), 2000),
    source_page: clean(formData.get("source_page"), 300),
    utm_source: clean(formData.get("utm_source"), 120),
    utm_medium: clean(formData.get("utm_medium"), 120),
    utm_campaign: clean(formData.get("utm_campaign"), 160),
    consent: formData.get("consent") === "on",
  };

  const errors: Record<string, string> = {};
  if (lead.name.length < 2) errors.name = "Escribe tu nombre.";
  if (lead.phone.replace(/\D/g, "").length < 7) errors.phone = "Escribe un número de celular válido.";
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) errors.email = "Revisa el correo.";
  if (!lead.service) errors.service = "Selecciona el tipo de proyecto.";
  if (!lead.consent) errors.consent = "Debes autorizar el tratamiento de datos.";
  const { consent: _consent, ...values } = lead;
  if (Object.keys(errors).length) return { ok: false, message: "Revisa los campos marcados.", errors, values };

  const supabase = getSupabase();
  if (!supabase) {
    console.error("[lead] Supabase no está configurado. Lead recibido:", lead);
    return { ok: false, message: "No pudimos enviar tu solicitud. Escríbenos por WhatsApp, por favor.", values };
  }

  const h = await headers();
  const { error } = await supabase.from("leads").insert({
    ...lead,
    email: lead.email || null,
    user_agent: h.get("user-agent")?.slice(0, 300) ?? null,
  });

  if (error) {
    console.error("[lead] Error guardando lead:", error.message);
    return { ok: false, message: "No pudimos enviar tu solicitud. Escríbenos por WhatsApp, por favor.", values };
  }
  return { ok: true, message: "ok" };
}
