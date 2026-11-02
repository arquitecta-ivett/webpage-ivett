import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { img } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Blog: Guías para Remodelar y Construir en Medellín",
  description:
    "Guías prácticas sobre remodelación, construcción, costos, permisos y cómo elegir contratista de obra en Medellín y Colombia, escritas por una arquitecta directora de obra.",
  alternates: { canonical: "/blog" },
};

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Blog", path: "/blog" },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Blog"
        title="Guías para remodelar y construir sin sorpresas."
        text="Lo que aprendí en más de 25 años dirigiendo obras, explicado de forma clara para que tomes mejores decisiones."
      />
      <section className="container-x py-20">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
                <Image src={img(p.image, 1000)} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-6 text-sm text-muted">
                <time dateTime={p.datePublished}>
                  {new Date(p.datePublished + "T12:00:00").toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" })}
                </time>{" "}
                · {p.readingMinutes} min de lectura
              </p>
              <h2 className="mt-2 text-3xl leading-tight transition group-hover:text-bronze">{p.title}</h2>
              <p className="mt-3 leading-7 text-muted">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
