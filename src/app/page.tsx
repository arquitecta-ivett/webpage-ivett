import Image from "next/image";
import Link from "next/link";
import { services, generalFaqs } from "@/lib/services";
import { getProjects } from "@/lib/projects";
import { getTestimonials } from "@/lib/testimonials";
import { posts } from "@/lib/posts";
import { img, photos, site } from "@/lib/site";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LeadForm } from "@/components/LeadForm";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Alert, ArrowRight, Check } from "@/components/Icons";
import {
  AreaServed,
  Commitments,
  FaqList,
  ProcessSteps,
  ProjectShowcase,
  SectionHeading,
  ServiceCard,
} from "@/components/Sections";

export const revalidate = 3600;

const comparison = [
  ["Diagnóstico técnico antes de intervenir", false, true],
  ["Presupuesto por ítems y cantidades reales", false, true],
  ["Cronograma por escrito dentro del contrato", false, true],
  ["Coordinación de todas las especialidades", false, true],
  ["Revisión de estructura y redes bajo norma", false, true],
  ["Informes de avance con fotos", false, true],
  ["Responsable técnica de principio a fin", false, true],
] as const;

export default async function Home() {
  const [projects, testimonials] = await Promise.all([getProjects(), getTestimonials()]);
  const [featured, ...rest] = projects;

  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x grid items-center gap-12 pt-10 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-16 lg:pb-28">
          <div>
            <p className="eyebrow animate-fade-up">Arquitecta directora de obra · Medellín</p>
            <h1 className="mt-6 animate-fade-up text-[2.75rem] leading-[1.02] [animation-delay:80ms] sm:text-6xl lg:text-[4.6rem]">
              Remodelación y construcción que <em className="text-bronze not-italic italic">sí se entrega a tiempo.</em>
            </h1>
            <p className="mt-7 max-w-xl animate-fade-up text-lg leading-8 text-muted [animation-delay:160ms]">
              Soy {site.person}, arquitecta con más de {site.yearsExperience} años dirigiendo obras civiles y acabados.
              Remodelo apartamentos, casas y locales comerciales, construyo desde cero y hago mantenimiento locativo con
              presupuesto detallado, cronograma firmado y una sola responsable de principio a fin.
            </p>
            <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row">
              <WhatsAppButton location="hero" />
              <Link href="/contacto" className="btn-outline">
                Agendar visita técnica <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg animate-fade-up grid-cols-3 gap-6 border-t border-line pt-8 [animation-delay:320ms]">
              <div>
                <dt className="text-xs text-muted">Experiencia</dt>
                <dd className="font-display text-3xl sm:text-4xl">+{site.yearsExperience} años</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Cronograma</dt>
                <dd className="font-display text-3xl sm:text-4xl">Firmado</dd>
              </div>
              <div>
                <dt className="text-xs text-muted">Cobertura</dt>
                <dd className="font-display text-3xl sm:text-4xl">Nacional</dd>
              </div>
            </dl>
          </div>
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/6]">
              <Image
                src={img(photos.heroInterior, 1400)}
                alt="Apartamento remodelado con acabados de alta calidad en Medellín"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 max-w-[17rem] rounded-2xl bg-white p-5 shadow-2xl shadow-ink/15 sm:-left-8">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-whatsapp" /> Compromiso de cumplimiento
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Fechas por etapa en el contrato e informe semanal con fotos de tu obra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FRANJA DE CONFIANZA */}
      <section aria-label="Garantías" className="border-y border-line bg-sand/60">
        <ul className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-sm font-medium text-ink/80">
          {["Cronograma firmado", "Presupuesto por ítems", "Informe semanal con fotos", "Pagos por avance", "Normas NSR-10 y RETIE", "Garantía por escrito"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-bronze" /> {t}
            </li>
          ))}
        </ul>
      </section>

      {/* PROBLEMA */}
      <section className="container-x py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="El problema"
              title="Un arreglo mal hecho termina dañando todo lo demás."
              text="Obras que nunca terminan, presupuestos que se duplican, filtraciones al vecino, muros que no se debían tocar. Así termina buena parte de las obras que se contratan sin una dirección técnica. No por mala intención, sino porque ejecutar no es lo mismo que dirigir."
            />
            <ul className="mt-10 grid gap-4">
              {[
                "El contratista prometió 6 semanas y van 5 meses.",
                "El maestro arregló el baño y apareció una humedad en la habitación.",
                "El presupuesto “cerrado” creció con cada visita.",
                "Nadie respondía por el resultado final.",
              ].map((t) => (
                <li key={t} className="flex gap-3 rounded-2xl bg-white/70 p-4 ring-1 ring-line">
                  <Alert className="h-5 w-5 text-bronze" />
                  <span className="text-ink/85">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-ink p-8 text-white sm:p-10">
            <p className="eyebrow !text-bronze-light">La diferencia</p>
            <h3 className="mt-4 text-3xl">Maestro de obra vs. dirección integral</h3>
            <table className="mt-8 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/15 text-white/60">
                  <th className="py-3 font-medium">Lo que obtienes</th>
                  <th className="w-20 py-3 text-center font-medium">Solo maestro</th>
                  <th className="w-20 py-3 text-center font-medium text-bronze-light">Con Ivett</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, a, b]) => (
                  <tr key={label} className="border-b border-white/10">
                    <td className="py-3.5 pr-3 text-white/85">{label}</td>
                    <td className="text-center text-white/35">{a ? "✓" : "—"}</td>
                    <td className="text-center">{b && <Check className="mx-auto h-5 w-5 text-bronze-light" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-6 text-sm leading-6 text-white/60">
              El maestro de obra es clave para ejecutar. La dirección profesional es lo que asegura que todo encaje: tiempos,
              costos, técnica y resultado.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-sand/50 py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Servicios"
              title="Todo lo que tu obra necesita, bajo una sola dirección."
              text="Casas, apartamentos, edificios, locales comerciales y oficinas. Desde una remodelación puntual hasta construir desde cero."
            />
            <Link href="/servicios" className="btn-outline shrink-0">
              Todos los servicios
            </Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ANTES Y DESPUÉS */}
      <section className="container-x py-24 lg:py-32">
        <SectionHeading
          eyebrow="Antes y después"
          title="Los resultados hablan por sí solos."
          text="Desliza para ver la transformación. Cada proyecto se entregó con cronograma, presupuesto controlado y garantía."
        />
        {featured && (
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            <BeforeAfter
              before={featured.beforeUrl}
              after={featured.afterUrl}
              alt={`${featured.title} en ${featured.location}`}
              className="aspect-[4/3] lg:aspect-[16/11]"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{featured.category}</p>
              <h3 className="mt-3 text-3xl sm:text-4xl">{featured.title}</h3>
              <p className="mt-2 text-muted">
                {featured.location}
                {featured.durationWeeks ? ` · ${featured.durationWeeks} semanas` : ""}
              </p>
              <p className="mt-6 text-lg leading-8 text-ink/80">{featured.summary}</p>
              {featured.isSample && <p className="mt-4 text-xs text-muted">* Imágenes de referencia.</p>}
              <Link href="/proyectos" className="btn-dark mt-8">
                Ver todos los proyectos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
        {rest.length > 0 && (
          <div className="mt-20 grid gap-14 md:grid-cols-2">
            {rest.slice(0, 2).map((p) => (
              <ProjectShowcase key={p.slug} project={p} />
            ))}
          </div>
        )}
      </section>

      {/* COMPROMISO */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="Compromiso de cumplimiento"
            title="Seriedad que se puede comprobar, no solo prometer."
            text={`En ${site.yearsExperience} años aprendí que la confianza se construye con método. Esto es lo que recibes en cada proyecto, sin importar su tamaño.`}
          />
          <div className="mt-14">
            <Commitments dark />
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="container-x py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Método de trabajo" title="Cinco pasos. Cero improvisación." />
          <Link href="/metodo-de-trabajo" className="btn-outline shrink-0">
            Conoce el método
          </Link>
        </div>
        <div className="mt-14">
          <ProcessSteps />
        </div>
      </section>

      {/* SOBRE IVETT */}
      <section className="bg-sand/50 py-24 lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            {/* TODO: reemplazar por retrato profesional de Ivett en obra */}
            <Image src={img(photos.plans, 1200)} alt="Arquitecta Ivett Díaz revisando planos de obra" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Quién dirige tu obra"
              title={`${site.person}`}
              text={`Arquitecta directora de obra con más de ${site.yearsExperience} años liderando obras civiles y acabados: vivienda, edificaciones, apartamentos y locales comerciales. He dirigido todas las etapas de la construcción, desde licencias y obra negra hasta los últimos detalles de acabados, con los requisitos técnicos y certificaciones que cada proyecto exige.`}
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Obras civiles y acabados", "Licencias y trámites", "Control de costos y tiempos", "Coordinación de especialistas", "Seguridad y salud en obra", "Proyectos a nivel nacional"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-ink/85">
                  <Check className="h-5 w-5 text-bronze" /> {t}
                </li>
              ))}
            </ul>
            <Link href="/arquitecta-ivett-diaz" className="btn-dark mt-10">
              Conoce mi trayectoria <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS (solo si hay testimonios reales publicados en Supabase) */}
      {testimonials.length > 0 && (
        <section className="container-x py-24 lg:py-32">
          <SectionHeading eyebrow="Clientes" title="Lo que dicen quienes ya construyeron con nosotros." align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author + t.project} className="card p-8">
                <p className="text-bronze" aria-label={`${t.rating} de 5 estrellas`}>
                  {"★".repeat(t.rating)}
                </p>
                <blockquote className="mt-4 font-display text-xl leading-snug">“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{t.author}</span>
                  <span className="block text-muted">{t.project}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* COBERTURA */}
      <section className="container-x py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Cobertura"
            title="Base en Medellín. Proyectos en toda Colombia."
            text="Atendemos de forma permanente el Valle de Aburrá y el Oriente antioqueño, y dirigimos proyectos en otras ciudades del país con el mismo estándar de cumplimiento."
          />
          <AreaServed />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand/50 py-24 lg:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas antes de empezar." />
          <FaqList faqs={generalFaqs} />
        </div>
      </section>

      {/* BLOG */}
      <section className="container-x py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Guías" title="Antes de remodelar, lee esto." />
          <Link href="/blog" className="btn-outline shrink-0">
            Ir al blog
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                <Image src={img(p.image, 800)} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-xl leading-snug transition group-hover:text-bronze">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.readingMinutes} min de lectura</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="cotizar" className="bg-ink py-24 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              light
              eyebrow="Solicita tu cotización"
              title="Cuéntanos tu proyecto."
              text="Déjanos tus datos y te contactamos en menos de 24 horas hábiles para entender lo que necesitas y agendar la visita técnica."
            />
            <div className="mt-10">
              <WhatsAppButton location="form-section" label="Prefiero escribir por WhatsApp" />
            </div>
          </div>
          <div className="rounded-[2rem] bg-cream p-7 sm:p-10">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
