import { getSupabase } from "./supabase";
import { img, photos } from "./site";

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** slug del servicio relacionado (ver services.ts) */
  serviceSlug: string;
  location: string;
  durationWeeks: number | null;
  summary: string;
  beforeUrl: string;
  afterUrl: string;
  /** true mientras se usen fotos de referencia en lugar de fotos reales de la obra */
  isSample: boolean;
};

// Proyectos de ejemplo: se muestran mientras la tabla `projects` de Supabase esté vacía.
// Reemplazar por proyectos reales (con fotos reales de antes y después) desde Supabase.
const sampleProjects: Project[] = [
  {
    slug: "apartamento-integral-laureles",
    title: "Remodelación integral de apartamento",
    category: "Remodelación de apartamentos",
    serviceSlug: "remodelacion-de-apartamentos",
    location: "Laureles, Medellín",
    durationWeeks: 10,
    summary:
      "Demolición controlada, redes nuevas, cielos en drywall, pisos en madera laminada e iluminación cálida. Entregado en la fecha pactada.",
    beforeUrl: img(photos.demolition),
    afterUrl: img(photos.heroInterior),
    isSample: true,
  },
  {
    slug: "casa-campestre-llanogrande",
    title: "Construcción de casa campestre",
    category: "Construcción desde cero",
    serviceSlug: "construccion-de-casas",
    location: "Llanogrande, Rionegro",
    durationWeeks: 38,
    summary:
      "Desde cimentación hasta acabados: estructura bajo NSR-10, cubierta, fachada en madera y concreto y grandes ventanales.",
    beforeUrl: img(photos.rebar),
    afterUrl: img(photos.houseNight),
    isSample: true,
  },
  {
    slug: "cocina-abierta-envigado",
    title: "Cocina abierta al social",
    category: "Cocinas y baños",
    serviceSlug: "remodelacion-de-cocinas-y-banos",
    location: "Envigado",
    durationWeeks: 5,
    summary:
      "Apertura de cocina previa verificación estructural, redes de gas certificadas, mesones en cuarzo y muebles a medida.",
    beforeUrl: img(photos.demolition),
    afterUrl: img(photos.kitchen),
    isSample: true,
  },
  {
    slug: "casa-moderna-el-retiro",
    title: "Casa moderna llave en mano",
    category: "Construcción desde cero",
    serviceSlug: "construccion-de-casas",
    location: "El Retiro, Antioquia",
    durationWeeks: 42,
    summary:
      "Gestión de licencia, obra negra, obra blanca y acabados con informes semanales al propietario, quien vivía fuera del país.",
    beforeUrl: img(photos.siteTeam),
    afterUrl: img(photos.modernHouse),
    isSample: true,
  },
];

type ProjectRow = {
  slug: string;
  title: string;
  category: string;
  service_slug: string;
  location: string;
  duration_weeks: number | null;
  summary: string;
  before_url: string;
  after_url: string;
};

export async function getProjects(): Promise<Project[]> {
  const supabase = getSupabase();
  if (!supabase) return sampleProjects;
  const { data, error } = await supabase
    .from("projects")
    .select("slug,title,category,service_slug,location,duration_weeks,summary,before_url,after_url")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .returns<ProjectRow[]>();
  if (error || !data?.length) return sampleProjects;
  return data.map((r) => ({
    slug: r.slug,
    title: r.title,
    category: r.category,
    serviceSlug: r.service_slug,
    location: r.location,
    durationWeeks: r.duration_weeks,
    summary: r.summary,
    beforeUrl: r.before_url,
    afterUrl: r.after_url,
    isSample: false,
  }));
}
