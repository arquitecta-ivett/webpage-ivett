import type { Metadata } from "next";
import { getProjects } from "@/lib/projects";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, PageHero, ProjectShowcase } from "@/components/Sections";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Proyectos: Remodelaciones y Construcciones Antes y Después",
  description:
    "Mira el antes y después de remodelaciones de apartamentos, casas, cocinas, baños y construcciones dirigidas por la arquitecta Ivett Díaz en Medellín y Antioquia.",
  alternates: { canonical: "/proyectos" },
};

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Proyectos", path: "/proyectos" },
];

export default async function ProyectosPage() {
  const projects = await getProjects();
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Proyectos"
        title="Antes y después: obras entregadas con cumplimiento."
        text="Desliza cada imagen para ver la transformación. Detrás de cada resultado hay un cronograma cumplido, un presupuesto controlado y un cliente que pudo dormir tranquilo."
      />
      <section className="container-x py-20">
        <div className="grid gap-x-10 gap-y-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectShowcase key={p.slug} project={p} priority={i < 2} />
          ))}
        </div>
      </section>
      <CtaBand title="¿Quieres que tu proyecto sea el próximo?" />
    </>
  );
}
