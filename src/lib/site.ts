// Datos centrales del negocio. Cambia aquí teléfono, correo y redes: se propagan a todo el sitio,
// al schema.org (SEO local) y a los botones de WhatsApp.
export const site = {
  name: "Ivett Díaz Arquitecta",
  person: "Ivett Bibiana Díaz",
  jobTitle: "Arquitecta Directora de Obra",
  tagline: "Remodelación, construcción y mantenimiento con cumplimiento garantizado",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ivettdiaz.com").replace(/\/$/, ""),
  // WhatsApp en formato E.164 sin "+"
  whatsapp: "573013594514",
  phoneDisplay: "+57 301 359 4514",
  email: "arqivettdiaz@gmail.com",
  yearsExperience: 25,
  city: "Medellín",
  region: "Antioquia",
  country: "CO",
  geo: { lat: 6.2442, lng: -75.5812 },
  hours: "Lunes a viernes 7:00 a. m. – 6:00 p. m. · Sábados 8:00 a. m. – 1:00 p. m.",
  social: {
    instagram: "", // ej. https://www.instagram.com/ivettdiaz.arquitecta
    facebook: "",
    linkedin: "",
  },
  areaServed: [
    "Medellín",
    "Envigado",
    "Sabaneta",
    "Itagüí",
    "Bello",
    "La Estrella",
    "Caldas",
    "Copacabana",
    "Rionegro",
    "Llanogrande",
    "La Ceja",
    "El Retiro",
    "Guarne",
    "Marinilla",
  ],
} as const;

export function whatsappLink(message = "Hola Ivett, quiero cotizar un proyecto de obra.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/metodo-de-trabajo", label: "Método" },
  { href: "/arquitecta-ivett-diaz", label: "Sobre Ivett" },
  { href: "/blog", label: "Blog" },
] as const;

// Fotos temporales (Unsplash). Reemplazar por fotos reales de obras de Ivett.
export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  heroInterior: "photo-1600607687939-ce8a6c25118c",
  modernHouse: "photo-1600585154340-be6161a56a0c",
  houseFacade: "photo-1600566753190-17f0baa2a6c3",
  houseNight: "photo-1600585154526-990dced4db0d",
  livingRoom: "photo-1600210492486-724fe5c67fb0",
  kitchen: "photo-1507089947368-19c1da9775ae",
  kitchenWhite: "photo-1484154218962-a197022b5858",
  bathroom: "photo-1600566752355-35792bedcfea",
  office: "photo-1497366216548-37526070297c",
  apartmentBuilding: "photo-1574362848149-11496d93a7c7",
  demolition: "photo-1517581177682-a085bb7ffb15",
  rebar: "photo-1504307651254-35680f356dfd",
  siteTeam: "photo-1541888946425-d81bb19240f5",
  plans: "photo-1503387762-592deb58ef4e",
  electrician: "photo-1621905251189-08b45d6a269e",
  maintenance: "photo-1581578731548-c64695cc6952",
  stairsGlass: "photo-1600573472550-8090b5e0745e",
  hallway: "photo-1513694203232-719a280e022f",
} as const;
