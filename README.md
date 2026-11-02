# Ivett Díaz · Arquitecta Directora de Obra

Sitio web para captar clientes de remodelación, construcción y mantenimiento en Medellín y Colombia.

**Stack:** Next.js 16 (App Router, páginas estáticas) · TypeScript · Tailwind CSS 4 · Supabase (leads, proyectos y testimonios) · despliegue recomendado en Vercel.

## Arranque local

```bash
npm install
cp .env.example .env.local   # completar variables
npm run dev                  # http://localhost:3000
```

## Supabase

1. Crear un proyecto en Supabase.
2. En **SQL Editor**, ejecutar `supabase/migrations/20261102000000_init.sql`. Crea:
   - `leads`: solicitudes del formulario. La web (rol anon) solo puede **insertar**; nadie anónimo puede leerlas.
   - `projects`: portafolio antes/después (`published = true` para mostrarlo en la web).
   - `testimonials`: solo testimonios reales y autorizados. La sección se oculta si no hay ninguno.
   - El bucket público `proyectos` en Storage para las fotos.
3. Copiar `Project URL` y `anon key` a `.env.local` y a las variables de entorno de Vercel.
4. Los leads se consultan en **Table Editor → leads**. Recomendado: un *Database Webhook* que envíe un correo o un WhatsApp con cada lead nuevo.

Mientras la tabla `projects` esté vacía, el sitio muestra proyectos de ejemplo con fotos de referencia (marcados como “Imagen de referencia”).

## Qué editar

| Qué | Dónde |
| --- | --- |
| Teléfono/WhatsApp, correo, redes, horarios, municipios | `src/lib/site.ts` |
| Servicios (textos SEO, FAQ, inclusiones) | `src/lib/services.ts` |
| Artículos del blog | `src/lib/posts.ts` |
| Proyectos antes/después | tabla `projects` en Supabase |
| Biografía y experiencia | `src/app/arquitecta-ivett-diaz/page.tsx` |

## SEO incluido

- Una página por servicio con su palabra clave principal (Medellín/Antioquia), su FAQ y su schema `Service` + `FAQPage` + `BreadcrumbList`.
- Schema `GeneralContractor`/`LocalBusiness` + `Person` (E-E-A-T) en todo el sitio.
- Blog con schema `BlogPosting` dirigido a las preguntas que se buscan antes de contratar.
- `sitemap.xml`, `robots.txt`, canonical, Open Graph con imagen generada y `lang="es-CO"`.
- Imágenes AVIF/WebP optimizadas y páginas estáticas para tener buenos Core Web Vitals.

## Medición para pauta

- Variables `NEXT_PUBLIC_GA_ID` y `NEXT_PUBLIC_META_PIXEL_ID`.
- Eventos: `whatsapp_click` (Meta: `Contact`) y `generate_lead` (Meta: `Lead`).
- Página de conversión: `/gracias`, sin indexar.
- Los UTM de la campaña se guardan con cada lead en Supabase.
