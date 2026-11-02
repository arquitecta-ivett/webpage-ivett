import type { Metadata } from "next";
import Image from "next/image";
import { breadcrumbSchema } from "@/lib/schema";
import { img, photos, site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Check } from "@/components/Icons";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Ivett Bibiana Díaz, Arquitecta Directora de Obra en Medellín",
  description:
    "Conoce a Ivett Bibiana Díaz: arquitecta con más de 25 años dirigiendo obras civiles y acabados en Colombia. Seriedad, cumplimiento y manejo integral de proyectos.",
  alternates: { canonical: "/arquitecta-ivett-diaz" },
};

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Sobre Ivett", path: "/arquitecta-ivett-diaz" },
];

// TODO: completar con datos reales de Ivett (universidad, matrícula profesional, empresas y obras destacadas).
const expertise = [
  "Dirección de obras civiles: cimentación, estructura, mampostería y cubiertas",
  "Dirección de acabados arquitectónicos de alto estándar",
  "Remodelación de vivienda, edificaciones y locales comerciales",
  "Licencias de construcción y trámites ante curadurías",
  "Cumplimiento normativo: NSR-10, RETIE e instalaciones certificadas",
  "Seguridad y salud en el trabajo en obra (SG-SST)",
  "Programación de obra, control de costos y cantidades",
  "Interventoría y supervisión técnica",
];

const values = [
  ["Cumplimiento", "Lo que se firma, se cumple. El cronograma es un compromiso, no una estimación."],
  ["Integralidad", "Cada decisión se toma pensando en toda la obra: estructura, redes, acabados y uso futuro."],
  ["Transparencia", "Presupuestos claros, informes periódicos y cambios aprobados por escrito."],
  ["Cercanía", "Tienes acceso directo a quien dirige tu obra, no a un intermediario."],
];

export default function SobrePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />

      <section className="container-x grid items-center gap-12 py-12 lg:grid-cols-[1fr_1.1fr] lg:py-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          {/* TODO: reemplazar por retrato profesional de Ivett */}
          <Image src={img(photos.plans, 1200)} alt={`${site.person}, arquitecta directora de obra`} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="eyebrow">Sobre mí</p>
          <h1 className="mt-5 text-5xl leading-[1.04] sm:text-6xl">{site.person}</h1>
          <p className="mt-3 font-display text-2xl text-bronze">{site.jobTitle}</p>
          <div className="mt-8 space-y-5 text-lg leading-8 text-ink/80">
            <p>
              Llevo más de {site.yearsExperience} años dirigiendo obras civiles y acabados. He liderado todos los ámbitos de la
              construcción: desde los trámites y la obra negra hasta el último detalle de los acabados, con los requisitos
              técnicos y certificaciones que cada proyecto exige.
            </p>
            <p>
              En ese camino vi demasiadas obras abandonadas, presupuestos que se duplicaban y arreglos que terminaban dañando
              otra cosa. Por eso hoy ofrezco directamente a familias, propietarios y empresas lo que mejor sé hacer: dirigir
              obras de forma integral, con seriedad y cumplimiento.
            </p>
            <p>
              Trabajo desde Medellín con disponibilidad para proyectos en cualquier lugar de Colombia.
            </p>
          </div>
          <div className="mt-10">
            <WhatsAppButton location="sobre-hero" label="Hablemos de tu proyecto" />
          </div>
        </div>
      </section>

      <section className="bg-sand/50 py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Experiencia" title="Lo que he dirigido en más de dos décadas." />
          <ul className="grid gap-3 sm:grid-cols-2">
            {expertise.map((t) => (
              <li key={t} className="flex gap-3 rounded-2xl bg-white/80 p-5 ring-1 ring-line">
                <Check className="h-5 w-5 text-bronze" />
                <span className="leading-6">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <SectionHeading eyebrow="Cómo trabajo" title="Los principios que guían cada obra." align="center" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, text]) => (
            <div key={title} className="card p-8">
              <h2 className="text-2xl">{title}</h2>
              <p className="mt-3 leading-7 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
