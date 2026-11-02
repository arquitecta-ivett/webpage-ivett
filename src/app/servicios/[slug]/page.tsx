import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import { getProjects } from "@/lib/projects";
import { posts } from "@/lib/posts";
import { img } from "@/lib/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LeadForm } from "@/components/LeadForm";
import { Alert, ArrowRight, Check } from "@/components/Icons";
import { AreaServed, Breadcrumbs, Commitments, CtaBand, FaqList, ProcessSteps, ProjectShowcase, SectionHeading } from "@/components/Sections";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: `/servicios/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, images: [{ url: img(s.image, 1200), width: 1200, height: 800, alt: s.name }] },
  };
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();

  const projects = (await getProjects()).filter((p) => p.serviceSlug === s.slug);
  const related = posts.filter((p) => p.relatedService === s.slug);
  const others = services.filter((o) => o.slug !== s.slug);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: s.name, path: `/servicios/${s.slug}` },
  ];
  const waMessage = `Hola Ivett, quiero cotizar: ${s.name}.`;

  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={faqSchema(s.faqs)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />

      <section className="container-x grid items-center gap-12 py-12 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="eyebrow animate-fade-up">{s.name}</p>
          <h1 className="mt-5 animate-fade-up text-4xl leading-[1.06] [animation-delay:80ms] sm:text-5xl lg:text-6xl">{s.h1}</h1>
          <div className="mt-6 animate-fade-up space-y-4 text-lg leading-8 text-muted [animation-delay:160ms]">
            {s.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row">
            <WhatsAppButton location={`servicio-${s.slug}`} message={waMessage} />
            <a href="#cotizar" className="btn-outline">
              Solicitar cotización
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] animate-fade-up overflow-hidden rounded-[2rem] [animation-delay:200ms]">
          <Image src={img(s.image, 1400)} alt={s.h1} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-sand/50 py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading eyebrow="Qué incluye" title={`Tu ${s.name.toLowerCase()} de principio a fin.`} />
            <div className="mt-8">
              <p className="font-semibold">Ideal para:</p>
              <ul className="mt-3 space-y-2 text-muted">
                {s.idealFor.map((t) => (
                  <li key={t}>— {t}</li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {s.includes.map((t) => (
              <li key={t} className="flex gap-3 rounded-2xl bg-white/80 p-5 ring-1 ring-line">
                <Check className="h-5 w-5 text-bronze" />
                <span className="leading-6">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <SectionHeading
          eyebrow="Lo que evitamos"
          title="Los riesgos de hacerlo sin dirección técnica."
          text="Estos son los problemas que más vemos en obras improvisadas, y cómo los prevenimos desde la planeación."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {s.risks.map((r) => (
            <div key={r.title} className="card p-8">
              <Alert className="h-7 w-7 text-bronze" />
              <h3 className="mt-5 text-2xl">{r.title}</h3>
              <p className="mt-3 leading-7 text-muted">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {projects.length > 0 && (
        <section className="container-x pb-20 lg:pb-28">
          <SectionHeading eyebrow="Antes y después" title="Proyectos similares." />
          <div className="mt-12 grid gap-14 md:grid-cols-2">
            {projects.slice(0, 2).map((p) => (
              <ProjectShowcase key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}

      <section className="bg-ink py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading light eyebrow="Compromiso de cumplimiento" title="Lo que recibes en cada proyecto." />
          <div className="mt-12">
            <Commitments dark />
          </div>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <SectionHeading eyebrow="Cómo trabajamos" title="Un proceso claro desde el primer día." />
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </section>

      <section className="bg-sand/50 py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading eyebrow="Preguntas frecuentes" title={`Sobre ${s.name.toLowerCase()}`} />
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold">Zonas de cobertura</p>
              <AreaServed />
            </div>
          </div>
          <FaqList faqs={s.faqs} />
        </div>
      </section>

      <section id="cotizar" className="container-x scroll-mt-24 py-20 lg:py-28">
        <div className="grid gap-12 rounded-[2rem] bg-white p-7 ring-1 ring-line sm:p-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading eyebrow="Cotización" title="Hablemos de tu proyecto." text="Te respondemos en menos de 24 horas hábiles." />
            {related.length > 0 && (
              <div className="mt-10">
                <p className="text-sm font-semibold">Lecturas recomendadas</p>
                <ul className="mt-3 space-y-3">
                  {related.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="text-bronze underline-offset-4 hover:underline">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <LeadForm defaultService={s.name} />
        </div>
      </section>

      <section className="container-x pb-10">
        <p className="eyebrow">Otros servicios</p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/servicios/${o.slug}`} className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition hover:border-ink">
                {o.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
