"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { submitLead, type LeadState } from "@/app/actions";
import { services } from "@/lib/services";
import { track } from "@/lib/analytics";

const budgets = [
  "Aún no lo tengo claro",
  "Menos de $20 millones",
  "$20 – $60 millones",
  "$60 – $150 millones",
  "$150 – $400 millones",
  "Más de $400 millones",
];

const initial: LeadState = { ok: false, message: "" };

export function LeadForm({ defaultService, compact = false }: { defaultService?: string; compact?: boolean }) {
  const [state, action, pending] = useActionState(submitLead, initial);
  const router = useRouter();
  const [ctx, setCtx] = useState({ page: "", utm_source: "", utm_medium: "", utm_campaign: "" });

  // Guarda los UTM de la campaña durante la sesión para atribuir el lead aunque navegue por otras páginas.
  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign"] as const;
    const utm = Object.fromEntries(keys.map((k) => [k, url.get(k) ?? ""])) as Record<(typeof keys)[number], string>;
    try {
      if (utm.utm_source) sessionStorage.setItem("utm", JSON.stringify(utm));
      else Object.assign(utm, JSON.parse(sessionStorage.getItem("utm") ?? "{}"));
    } catch {}
    setCtx({ page: window.location.pathname, ...utm });
  }, []);

  useEffect(() => {
    if (state.ok) {
      track("generate_lead", { form: "cotizacion" });
      router.push("/gracias");
    }
  }, [state.ok, router]);

  const err = state.errors ?? {};
  const v = state.values ?? {};

  return (
    <form action={action} className="grid gap-4" noValidate>
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field label="Nombre" name="name" error={err.name}>
          <input id="name" name="name" defaultValue={v.name} autoComplete="name" required className="field" placeholder="Tu nombre" />
        </Field>
        <Field label="Celular / WhatsApp" name="phone" error={err.phone}>
          <input id="phone" name="phone" defaultValue={v.phone} type="tel" inputMode="tel" autoComplete="tel" required className="field" placeholder="300 123 4567" />
        </Field>
        <Field label="Correo (opcional)" name="email" error={err.email}>
          <input id="email" name="email" defaultValue={v.email} type="email" autoComplete="email" className="field" placeholder="tu@correo.com" />
        </Field>
        <Field label="Ciudad o municipio" name="city">
          <input id="city" name="city" defaultValue={v.city} autoComplete="address-level2" className="field" placeholder="Medellín, Envigado, Rionegro…" />
        </Field>
        <Field label="Tipo de proyecto" name="service" error={err.service}>
          <select id="service" name="service" required className="field" defaultValue={v.service ?? defaultService ?? ""}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Otro">Otro proyecto</option>
          </select>
        </Field>
        <Field label="Presupuesto estimado" name="budget">
          <select id="budget" name="budget" className="field" defaultValue={v.budget ?? ""}>
            <option value="" disabled>
              Selecciona un rango
            </option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Cuéntanos sobre tu proyecto" name="message">
        <textarea
          id="message"
          name="message"
          defaultValue={v.message}
          rows={compact ? 3 : 4}
          className="field resize-y"
          placeholder="Ej.: Quiero remodelar la cocina y dos baños de un apartamento de 80 m² en Laureles. Me gustaría empezar en febrero."
        />
      </Field>

      {/* Honeypot anti-spam (oculto para personas) */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          No llenar
          <input name="empresa_web" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="source_page" value={ctx.page} />
      <input type="hidden" name="utm_source" value={ctx.utm_source} />
      <input type="hidden" name="utm_medium" value={ctx.utm_medium} />
      <input type="hidden" name="utm_campaign" value={ctx.utm_campaign} />

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-bronze" />
        <span>
          Autorizo el tratamiento de mis datos personales para ser contactado(a) sobre mi solicitud, según la{" "}
          <Link href="/politica-de-privacidad" className="underline underline-offset-2 hover:text-bronze">
            política de tratamiento de datos
          </Link>{" "}
          (Ley 1581 de 2012).
        </span>
      </label>
      {err.consent && <p className="-mt-2 text-sm text-red-700">{err.consent}</p>}

      {state.message && !state.ok && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          {state.message}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn-primary mt-2 w-full disabled:opacity-60 sm:w-auto">
        {pending ? "Enviando…" : "Solicitar cotización"}
      </button>
      <p className="text-xs text-muted">Te respondemos en menos de 24 horas hábiles.</p>
    </form>
  );
}

function Field({ label, name, error, children }: { label: string; name: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && <p className="text-sm text-red-700">{error}</p>}
    </div>
  );
}
