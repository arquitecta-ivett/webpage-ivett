import Image from "next/image";
import Link from "next/link";
import type { Faq, Service } from "@/lib/services";
import type { Project } from "@/lib/projects";
import { img, site } from "@/lib/site";
import { ArrowRight, Calendar, Camera, Clipboard, Key, Ruler, Shield } from "./Icons";
import { WhatsAppButton } from "./WhatsAppButton";
import { BeforeAfter } from "./BeforeAfter";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow ${light ? "!text-bronze-light" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-4xl leading-[1.08] sm:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-8 ${light ? "text-white/70" : "text-muted"}`}>{text}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: React.ReactNode }) {
  return (
    <section className="border-b border-line">
      <div className="container-x py-16 sm:py-24">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl animate-fade-up text-5xl leading-[1.04] [animation-delay:80ms] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-8 text-muted [animation-delay:160ms]">{text}</p>
        {children && <div className="mt-8 animate-fade-up [animation-delay:240ms]">{children}</div>}
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Migas de pan" className="container-x pt-6 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < items.length - 1 ? (
              <Link href={it.path} className="hover:text-bronze">
                {it.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {it.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={img(service.image, 900)}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-cream/90 px-3 py-1 font-display text-sm text-ink backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl">{service.name}</h3>
        <p className="mt-3 flex-1 leading-7 text-muted">{service.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bronze">
          Ver servicio <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ProjectShowcase({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <article className="grid gap-5">
      <BeforeAfter before={project.beforeUrl} after={project.afterUrl} alt={`${project.title} en ${project.location}`} priority={priority} />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{project.category}</p>
          <h3 className="mt-2 text-2xl">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">
            {project.location}
            {project.durationWeeks ? ` · ${project.durationWeeks} semanas` : ""}
          </p>
        </div>
        {project.isSample && (
          <span className="rounded-full border border-line px-3 py-1 text-[11px] text-muted">Imagen de referencia</span>
        )}
      </div>
      <p className="leading-7 text-muted">{project.summary}</p>
    </article>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
            <h3 className="font-sans text-lg font-semibold text-ink">{f.q}</h3>
            <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-bronze transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl leading-7 text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export const commitments = [
  { icon: Calendar, title: "Cronograma firmado", text: "Fechas por etapa que hacen parte del contrato. Sabes qué pasa cada semana." },
  { icon: Clipboard, title: "Presupuesto por ítems", text: "Cantidades, unidades y referencias. Sin valores globales que luego crecen." },
  { icon: Camera, title: "Informe semanal", text: "Avance con fotos, estado del cronograma y del presupuesto, aunque no estés en la ciudad." },
  { icon: Shield, title: "Pagos por avance", text: "Pagas obra ejecutada y verificada. Nunca grandes anticipos sin respaldo." },
  { icon: Ruler, title: "Criterio técnico", text: "Estructura, redes y acabados bajo norma (NSR-10, RETIE). Nada se improvisa." },
  { icon: Key, title: "Entrega con garantía", text: "Acta de recibo, lista de chequeo y garantía por escrito." },
];

export function Commitments({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-3xl bg-line sm:grid-cols-2 lg:grid-cols-3">
      {commitments.map(({ icon: Icon, title, text }) => (
        <li key={title} className={`p-8 ${dark ? "bg-ink-soft" : "bg-cream"}`}>
          <Icon className="h-8 w-8 text-bronze" />
          <h3 className={`mt-5 text-xl ${dark ? "text-white" : ""}`}>{title}</h3>
          <p className={`mt-2 leading-7 ${dark ? "text-white/65" : "text-muted"}`}>{text}</p>
        </li>
      ))}
    </ul>
  );
}

export const steps = [
  { title: "Conversación y visita técnica", text: "Escuchamos qué quieres lograr, visitamos el lugar y revisamos estructura, redes y restricciones." },
  { title: "Propuesta y presupuesto detallado", text: "Diseño o alcance definido, presupuesto por ítems y selección de materiales y acabados." },
  { title: "Contrato y cronograma", text: "Firmamos alcance, fechas por etapa, forma de pago por avance y garantías." },
  { title: "Ejecución dirigida", text: "Dirección permanente, control de calidad e informe semanal con fotos y avance." },
  { title: "Entrega y garantía", text: "Limpieza final, recorrido de recibo, lista de pendientes cerrada y garantía por escrito." },
];

export function ProcessSteps() {
  return (
    <ol className="grid gap-6 md:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s.title} className="relative border-t border-ink/15 pt-6">
          <span className="font-display text-5xl text-bronze/80">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-4 text-xl leading-snug">{s.title}</h3>
          <p className="mt-2 text-[15px] leading-7 text-muted">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function CtaBand({ title = "Tu proyecto, con fecha de entrega real.", text }: { title?: string; text?: string }) {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 sm:px-16">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-bronze/25 blur-3xl" aria-hidden="true" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow !text-bronze-light">Cotiza sin compromiso</p>
            <h2 className="mt-4 text-4xl leading-tight text-white sm:text-5xl">{title}</h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
              {text ??
                `Cuéntanos qué quieres construir, remodelar o reparar. Te respondemos en menos de 24 horas hábiles con los siguientes pasos.`}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
            <WhatsAppButton location="cta-band" className="btn-whatsapp" />
            <Link href="/contacto" className="btn-light">
              Solicitar visita técnica
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AreaServed() {
  return (
    <ul className="flex flex-wrap gap-2">
      {site.areaServed.map((c) => (
        <li key={c} className="rounded-full border border-line bg-white/60 px-4 py-2 text-sm">
          {c}
        </li>
      ))}
      <li className="rounded-full bg-ink px-4 py-2 text-sm text-white">+ Proyectos en toda Colombia</li>
    </ul>
  );
}
