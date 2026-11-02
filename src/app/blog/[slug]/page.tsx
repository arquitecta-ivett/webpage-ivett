import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";
import { getService } from "@/lib/services";
import { img, site } from "@/lib/site";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowRight } from "@/components/Icons";
import { Breadcrumbs, CtaBand } from "@/components/Sections";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.metaDescription,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.title,
      description: p.metaDescription,
      publishedTime: p.datePublished,
      modifiedTime: p.dateModified,
      authors: [site.person],
      images: [{ url: img(p.image, 1200), width: 1200, height: 800 }],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const service = getService(p.relatedService);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: p.title, path: `/blog/${p.slug}` },
  ];

  return (
    <>
      <JsonLd data={articleSchema(p)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <article>
        <header className="container-x max-w-4xl py-12 lg:py-16">
          <p className="eyebrow">Guía · {p.readingMinutes} min de lectura</p>
          <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{p.title}</h1>
          <p className="mt-6 text-sm text-muted">
            Por <Link href="/arquitecta-ivett-diaz" className="font-semibold text-ink hover:text-bronze">{site.person}</Link>, {site.jobTitle.toLowerCase()} ·{" "}
            <time dateTime={p.dateModified}>
              Actualizado el {new Date(p.dateModified + "T12:00:00").toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          </p>
        </header>
        <div className="container-x max-w-5xl">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem]">
            <Image src={img(p.image, 1600)} alt={p.title} fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="container-x prose-ivett max-w-3xl py-14">
          {p.body.map((b, i) => {
            switch (b.type) {
              case "h2":
                return <h2 key={i}>{b.text}</h2>;
              case "h3":
                return <h3 key={i}>{b.text}</h3>;
              case "ul":
                return (
                  <ul key={i}>
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              case "cta":
                return (
                  <aside key={i} className="not-prose my-12 rounded-3xl bg-ink p-8 text-white">
                    <p className="mb-0 font-display text-2xl leading-snug text-white">{b.text}</p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <WhatsAppButton location={`blog-${p.slug}`} />
                      {service && (
                        <Link href={`/servicios/${service.slug}`} className="btn-light">
                          {service.name} <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </aside>
                );
              default:
                return <p key={i}>{b.text}</p>;
            }
          })}
        </div>
      </article>
      <CtaBand />
    </>
  );
}
