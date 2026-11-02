import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Check } from "@/components/Icons";

// Página de conversión: úsala como objetivo en Google Ads / Meta Ads (URL /gracias).
export const metadata: Metadata = {
  title: "Gracias por tu solicitud",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <section className="container-x grid min-h-[70vh] place-items-center py-24 text-center">
      <div className="max-w-xl">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-bronze text-white">
          <Check className="h-8 w-8" />
        </span>
        <h1 className="mt-8 text-5xl">¡Recibimos tu solicitud!</h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          Te contactaremos en menos de 24 horas hábiles. Si tu proyecto es urgente, escríbenos ya mismo por WhatsApp.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppButton location="gracias" label="Escribir por WhatsApp" />
          <Link href="/proyectos" className="btn-outline">
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
