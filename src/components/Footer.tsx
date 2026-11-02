import Link from "next/link";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";
import { Logo } from "./Logo";

const explore = [
  ["/proyectos", "Proyectos antes y después"],
  ["/metodo-de-trabajo", "Método y compromiso de cumplimiento"],
  ["/arquitecta-ivett-diaz", "Sobre Ivett Díaz"],
  ["/blog", "Blog y guías"],
  ["/contacto", "Solicitar cotización"],
  ["/politica-de-privacidad", "Política de tratamiento de datos"],
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const social = Object.entries(site.social).filter(([, url]) => url);
  return (
    <footer className="bg-ink pb-24 text-white/70 sm:pb-0">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo light />
          <p className="max-w-xs text-sm leading-6">
            {site.person}, arquitecta directora de obra con más de {site.yearsExperience} años de experiencia en
            construcción, remodelación y acabados. {site.city}, {site.region}. Proyectos en toda Colombia.
          </p>
        </div>
        <div>
          <h2 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">Servicios</h2>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}`} className="transition hover:text-bronze-light">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">Explora</h2>
          <ul className="space-y-3 text-sm">
            {explore.map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="transition hover:text-bronze-light">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">Contacto</h2>
          <address className="space-y-3 text-sm not-italic">
            <p>
              <a href={whatsappLink()} className="transition hover:text-bronze-light">
                WhatsApp {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="transition hover:text-bronze-light">
                {site.email}
              </a>
            </p>
            <p>
              {site.city}, {site.region}, Colombia
            </p>
            <p className="text-white/50">{site.hours}</p>
          </address>
          {social.length > 0 && (
            <ul className="mt-6 flex gap-4 text-sm">
              {social.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-bronze-light">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.person} · Arquitecta. Todos los derechos reservados.
          </p>
          <p>Remodelaciones · Construcción · Mantenimiento locativo · Medellín y Colombia</p>
        </div>
      </div>
    </footer>
  );
}
