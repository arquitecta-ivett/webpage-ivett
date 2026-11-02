# CLAUDE.md — Sitio web Ivett Díaz Arquitecta

Comunícate siempre en **español** con el usuario. Todo el contenido del sitio está en español de Colombia (`es-CO`).

## Contexto del negocio

- **Clienta:** Ivett Bibiana Díaz, arquitecta directora de obra con más de 25 años de experiencia en dirección de obras civiles y acabados. Ha liderado todos los ámbitos de la construcción y las certificaciones necesarias.
- **Ubicación:** Medellín, Antioquia. Atiende el Valle de Aburrá y el Oriente antioqueño de forma permanente, y proyectos en toda Colombia.
- **Servicios:** contratista de construcción, remodelación y mantenimiento para casas, apartamentos, edificaciones y locales comerciales, desde reparaciones hasta construcción desde cero; además, dirección de obra e interventoría.
- **Diferencial (eje de todo el mensaje):** el **cumplimiento**. La mayoría de contratistas incumplen plazos, y muchas personas recurren a albañiles o maestros de obra sin conocimientos para hacer obras integrales, de modo que un arreglo termina dañando otras cosas. Ivett ofrece un manejo integral de los proyectos, con seriedad y cumplimiento comprobados.
- **Objetivo del sitio:** generar leads (contratos de construcción, remodelación y mantenimiento) desde pauta en redes sociales y Google, y posicionar orgánicamente en los primeros lugares para búsquedas como "remodelaciones Medellín", "remodelación de apartamentos", "construcción de casas", "mantenimiento locativo" o "adecuación de locales comerciales".
- **Tono:** profesional, cercano, seguro y concreto. Primera persona ("Soy Ivett…") en el hero y en "Sobre mí"; en el resto, primera persona del plural ("trabajamos", "te entregamos").

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript 5**. TypeScript está fijado en v5 a propósito: no subir a 7 hasta que Next lo soporte.
- **Tailwind CSS 4**, configurado en CSS mediante `@theme` en `src/app/globals.css`. No hay `tailwind.config`.
- **Supabase** (`@supabase/supabase-js`) con la clave anon y RLS. No hay service role en el código.
- Despliegue recomendado en **Vercel**. Repositorio en GitHub (el usuario ya lo creó; falta conectar el remoto).

## Comandos

```bash
npm run dev        # desarrollo en http://localhost:3000
npm run build      # build de producción (debe pasar sin errores antes de entregar cambios)
npm run start      # servir el build
npm run typecheck  # tsc --noEmit
```

## Estructura

```
src/
  app/
    layout.tsx               # metadata global, fuentes (Fraunces + Manrope), schema del negocio, header/footer, WhatsApp flotante, analytics
    page.tsx                 # Home
    actions.ts               # Server Action submitLead → inserta en Supabase `leads`
    servicios/[slug]/        # Landing SEO por servicio (generateStaticParams desde lib/services.ts)
    proyectos/               # Portafolio antes/después
    metodo-de-trabajo/       # Método de 5 pasos + compromisos de cumplimiento
    arquitecta-ivett-diaz/   # Sobre Ivett (E-E-A-T)
    blog/[slug]/             # Artículos (contenido en lib/posts.ts)
    contacto/  gracias/      # /gracias = página de conversión para pauta (noindex)
    politica-de-privacidad/  # Ley 1581 de 2012 (plantilla; debe revisarla un abogado)
    sitemap.ts robots.ts manifest.ts opengraph-image.tsx icon.svg not-found.tsx
  components/
    Sections.tsx             # Bloques reutilizables: SectionHeading, PageHero, Breadcrumbs, ServiceCard,
                             # ProjectShowcase, FaqList, Commitments, ProcessSteps, CtaBand, AreaServed
    BeforeAfter.tsx          # Comparador antes/después (client; input range accesible)
    LeadForm.tsx             # Formulario (client; useActionState, honeypot, UTM persistidos en sessionStorage)
    WhatsAppButton.tsx       # Botón y botón flotante, con tracking
    Header.tsx Footer.tsx Logo.tsx Icons.tsx JsonLd.tsx Analytics.tsx
  lib/
    site.ts                  # FUENTE ÚNICA de datos del negocio (WhatsApp, correo, redes, municipios, fotos)
    services.ts              # 7 servicios con textos SEO, FAQ, inclusiones, riesgos + FAQ generales
    posts.ts                 # Artículos del blog como bloques estructurados
    projects.ts              # getProjects(): Supabase o, si está vacío, proyectos de ejemplo
    testimonials.ts          # getTestimonials(): solo desde Supabase
    schema.ts                # Generadores JSON-LD (GeneralContractor, Person, Service, FAQPage, BlogPosting, Breadcrumb)
    analytics.ts             # track(): GA4 + Meta Pixel
    supabase.ts              # Cliente anon (devuelve null si faltan variables)
supabase/migrations/         # SQL: leads, projects, testimonials, bucket `proyectos`, políticas RLS
```

## Reglas y convenciones

- **Los datos del negocio solo se cambian en `src/lib/site.ts`.** No escribas en duro teléfonos, correos ni URLs en los componentes.
- **Para agregar un servicio**, añádelo a `services` en `src/lib/services.ts`. La página, el sitemap, el footer y el select del formulario se generan solos. Mantén `metaTitle` en ≤ 60 caracteres y `metaDescription` en ≤ 155.
- **Para agregar un artículo**, añádelo a `posts` en `src/lib/posts.ts`, con `relatedService` igual al slug de un servicio para el enlazado interno.
- **Cada página nueva debe llevar:** `metadata` con `title`, `description` y `alternates.canonical`; una sola `<h1>`; `Breadcrumbs` y `breadcrumbSchema`; y una entrada en `src/app/sitemap.ts`.
- **SEO local:** usa términos de Medellín, Antioquia y sus municipios de forma natural. No crees páginas por ciudad con contenido duplicado, porque Google las trata como *doorway pages*.
- **Honestidad del contenido:**
  - **Nunca inventes testimonios, reseñas, cifras de proyectos ni certificaciones.** Los testimonios solo se muestran si existen en Supabase con `published = true`.
  - Las fotos actuales son de Unsplash (referencia). Los proyectos de ejemplo tienen `isSample: true` y muestran "Imagen de referencia".
  - Las promesas comerciales (informe semanal, pagos por avance, garantía por escrito, NSR-10/RETIE, SG-SST, plazos estimados) deben validarse con Ivett antes de publicar.
- **Diseño:**
  - Paleta en `@theme`: `cream`, `sand`, `line`, `ink`, `muted`, `bronze`, `whatsapp`. Títulos con `font-display` (Fraunces) y texto con Manrope.
  - Clases utilitarias propias: `container-x`, `eyebrow`, `btn-primary`, `btn-dark`, `btn-outline`, `btn-light`, `btn-whatsapp`, `card`, `field` y `prose-ivett`.
- **Conversión:** todo CTA de WhatsApp usa `WhatsAppButton` con una prop `location` única, porque así se mide en analytics. El formulario redirige a `/gracias` y dispara `generate_lead`.
- **Seguridad de datos:** el rol anon solo puede INSERTAR en `leads`, nunca leer. **La service role key nunca va en el código, en el repositorio ni en variables `NEXT_PUBLIC_*`**; si alguna vez se necesita, va solo como variable de servidor en `.env.local` o en Vercel. El formulario exige el consentimiento de la Ley 1581.

## Detalles técnicos a recordar

- En Next 16, `params` es una **Promise**: usa `const { slug } = await params`.
- En Tailwind 4 no se puede hacer `@apply` de una clase definida en `@layer components`. Por eso la base `btn` está declarada con `@utility btn`.
- `LeadForm` **no** usa `useSearchParams`, porque obligaría a un Suspense y rompería el render estático. Los UTM se leen de `window.location` en un efecto.
- En `opengraph-image.tsx` (Satori), cada `div` con varios hijos necesita `display: flex`. Usa template strings para texto con variables.
- Las páginas que leen Supabase usan `revalidate = 3600` (ISR).
- En Windows, los heredocs largos de Bash con caracteres especiales pueden fallar. Para crear archivos usa la herramienta Write.
- Playwright: navega a `http://127.0.0.1:<puerto>` (no `localhost`) y guarda las capturas dentro del proyecto en `.playwright-mcp/`, que está en `.gitignore`.

## Variables de entorno (`.env.local` / Vercel)

`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID` y `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. Plantilla en `.env.example`.

## Estado y pendientes

- [x] WhatsApp (+57 301 359 4514) y correo (arqivettdiaz@gmail.com) en `src/lib/site.ts`.
- [ ] Redes sociales (Instagram, Facebook, LinkedIn) en `src/lib/site.ts`.
- [x] Proyecto Supabase creado (`tkfxgeursfmoinngasmr`); URL y anon key en `.env.local` (no versionado).
- [ ] Ejecutar `supabase/migrations/20261102000000_init.sql` en el SQL Editor de Supabase.
- [ ] Configurar las mismas variables de entorno en Vercel.
- [ ] Fotos reales de antes y después (bucket `proyectos`) y un retrato profesional de Ivett.
- [ ] Datos reales para "Sobre Ivett": universidad, matrícula profesional, empresas y obras destacadas.
- [ ] Validar con Ivett los compromisos, los plazos estimados y los rangos de presupuesto del formulario.
- [ ] Confirmar el dominio definitivo (se asumió `ivettdiaz.com`).
- [x] Repositorio: https://github.com/arquitecta-ivett/webpage-ivett (rama `main`).
- [ ] Desplegar en Vercel conectado al repositorio.
- [ ] Google Search Console (enviar el sitemap), Google Business Profile, GA4 y Meta Pixel.
- [ ] Notificación de leads nuevos (Database Webhook o Edge Function hacia correo o WhatsApp).
- [ ] Publicar al menos un artículo nuevo al mes en el blog.
