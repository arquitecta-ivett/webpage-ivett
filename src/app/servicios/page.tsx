import type { Metadata } from "next";
import { services } from "@/lib/services";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, PageHero, ServiceCard } from "@/components/Sections";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Servicios de Remodelación, Construcción y Mantenimiento",
  description:
    "Remodelación de apartamentos y casas, construcción desde cero, adecuación de locales, cocinas y baños, mantenimiento locativo e interventoría en Medellín y Colombia.",
  alternates: { canonical: "/servicios" },
};

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios" },
];

export default function ServiciosPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Servicios"
        title="Construcción, remodelación y mantenimiento con dirección profesional."
        text="Elige el tipo de proyecto. En todos aplicamos el mismo método: diagnóstico técnico, presupuesto por ítems, cronograma firmado e informes semanales."
      >
        <WhatsAppButton location="servicios-hero" />
      </PageHero>
      <section className="container-x py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
