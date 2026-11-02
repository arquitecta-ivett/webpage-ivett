import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs, Commitments, CtaBand, PageHero, SectionHeading, steps } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Método de Trabajo y Compromiso de Cumplimiento",
  description:
    "Cómo garantizamos el cumplimiento en tu obra: visita técnica, presupuesto por ítems, cronograma firmado, informes semanales, pagos por avance y garantía por escrito.",
  alternates: { canonical: "/metodo-de-trabajo" },
};

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Método de trabajo", path: "/metodo-de-trabajo" },
];

const deliverables = [
  ["Conversación y visita técnica", "Registro fotográfico, mediciones, diagnóstico de redes y estructura, y lista de requisitos de la copropiedad o el municipio."],
  ["Propuesta y presupuesto detallado", "Alcance por escrito, presupuesto por ítems con cantidades y referencias, y alternativas de acabados según tu presupuesto."],
  ["Contrato y cronograma", "Contrato con alcance, cronograma por etapas, hitos de pago por avance verificado, manejo de cambios y garantías."],
  ["Ejecución dirigida", "Dirección y control de calidad permanente, compras planificadas, informe semanal con fotos, avance real vs. cronograma y estado del presupuesto."],
  ["Entrega y garantía", "Recorrido de recibo, cierre de pendientes, limpieza final, acta de entrega, recomendaciones de mantenimiento y garantía por escrito."],
];

export default function MetodoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Método y cumplimiento"
        title="El cumplimiento no es suerte. Es método."
        text={`La mayoría de obras se retrasan por lo mismo: no hubo planeación, nadie compró a tiempo, nadie midió bien y nadie respondía. En ${site.yearsExperience} años he construido un método que evita exactamente eso.`}
      >
        <WhatsAppButton location="metodo-hero" />
      </PageHero>

      <section className="container-x py-20 lg:py-28">
        <ol className="grid gap-0">
          {steps.map((s, i) => (
            <li key={s.title} className="grid gap-6 border-t border-line py-10 md:grid-cols-[120px_1fr_1.3fr] md:gap-10">
              <span className="font-display text-6xl text-bronze/80">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h2 className="text-3xl">{s.title}</h2>
                <p className="mt-3 leading-7 text-muted">{s.text}</p>
              </div>
              <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-line">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Lo que recibes</p>
                <p className="mt-3 leading-7">{deliverables[i][1]}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-sand/50 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Compromisos" title="Seis compromisos en cada contrato." />
          <div className="mt-12">
            <Commitments />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
