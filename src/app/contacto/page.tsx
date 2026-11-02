import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Mail, MapPin, Phone } from "@/components/Icons";
import { Breadcrumbs, SectionHeading } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Contacto y Cotización de Obras en Medellín",
  description:
    "Solicita cotización para remodelación, construcción o mantenimiento en Medellín y Colombia. Escríbenos por WhatsApp o agenda una visita técnica.",
  alternates: { canonical: "/contacto" },
};

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Contacto", path: "/contacto" },
];

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <section className="container-x grid gap-14 py-12 lg:grid-cols-[1fr_1.3fr] lg:py-20">
        <div>
          <p className="eyebrow">Contacto</p>
          <h1 className="mt-5 text-5xl leading-[1.04] sm:text-6xl">Cotiza tu proyecto.</h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-muted">
            Cuéntanos qué necesitas. Te contactamos en menos de 24 horas hábiles para entender tu proyecto y agendar la
            visita técnica.
          </p>
          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <Phone className="h-6 w-6 text-bronze" />
              <div>
                <p className="text-sm text-muted">WhatsApp</p>
                <a href={whatsappLink()} className="text-lg font-semibold hover:text-bronze">
                  {site.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="h-6 w-6 text-bronze" />
              <div>
                <p className="text-sm text-muted">Correo</p>
                <a href={`mailto:${site.email}`} className="text-lg font-semibold hover:text-bronze">
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="h-6 w-6 text-bronze" />
              <div>
                <p className="text-sm text-muted">Ubicación</p>
                <p className="text-lg font-semibold">
                  {site.city}, {site.region}
                </p>
                <p className="text-sm text-muted">Proyectos en toda Colombia</p>
              </div>
            </li>
          </ul>
          <p className="mt-8 text-sm text-muted">{site.hours}</p>
          <div className="mt-8">
            <WhatsAppButton location="contacto" label="Escribir por WhatsApp ahora" />
          </div>
        </div>
        <div className="rounded-[2rem] bg-white p-7 ring-1 ring-line sm:p-10">
          <SectionHeading eyebrow="Formulario" title="Solicitud de cotización" />
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
