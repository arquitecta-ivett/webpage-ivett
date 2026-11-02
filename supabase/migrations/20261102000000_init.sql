-- Esquema inicial: Ivett Díaz Arquitecta
-- Ejecutar en Supabase > SQL Editor (o con `supabase db push`).

-- ───────────────────────── LEADS (solicitudes de cotización) ─────────────────────────
create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null check (char_length(name) between 2 and 120),
  phone         text not null check (char_length(phone) between 7 and 30),
  email         text check (email is null or char_length(email) <= 160),
  city          text check (char_length(city) <= 80),
  service       text not null check (char_length(service) <= 120),
  budget        text check (char_length(budget) <= 60),
  message       text check (char_length(message) <= 2000),
  consent       boolean not null check (consent = true),
  source_page   text,
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  user_agent    text,
  status        text not null default 'nuevo'
                check (status in ('nuevo', 'contactado', 'visita_agendada', 'cotizado', 'ganado', 'perdido')),
  notes         text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

alter table public.leads enable row level security;

-- El sitio web (rol anon) solo puede INSERTAR. Nadie anónimo puede leer, editar ni borrar leads.
drop policy if exists "web puede crear leads" on public.leads;
create policy "web puede crear leads"
  on public.leads for insert
  to anon
  with check (consent = true and status = 'nuevo' and notes is null);

-- Usuarios autenticados (Ivett / equipo) gestionan los leads desde el panel de Supabase o un futuro admin.
drop policy if exists "equipo gestiona leads" on public.leads;
create policy "equipo gestiona leads"
  on public.leads for all
  to authenticated
  using (true)
  with check (true);

-- ───────────────────────── PROYECTOS (portafolio antes/después) ─────────────────────────
create table if not exists public.projects (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),
  slug            text not null unique,
  title           text not null,
  category        text not null,
  service_slug    text not null, -- ej. remodelacion-de-apartamentos (ver src/lib/services.ts)
  location        text not null,
  duration_weeks  int,
  summary         text not null,
  before_url      text not null,
  after_url       text not null,
  published       boolean not null default false,
  sort_order      int not null default 100
);

alter table public.projects enable row level security;

drop policy if exists "proyectos publicados son publicos" on public.projects;
create policy "proyectos publicados son publicos"
  on public.projects for select
  to anon, authenticated
  using (published = true);

drop policy if exists "equipo gestiona proyectos" on public.projects;
create policy "equipo gestiona proyectos"
  on public.projects for all
  to authenticated
  using (true)
  with check (true);

-- ───────────────────────── TESTIMONIOS (solo reales, con autorización del cliente) ─────────────────────────
create table if not exists public.testimonials (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  author      text not null,
  project     text not null,
  quote       text not null,
  rating      int not null default 5 check (rating between 1 and 5),
  published   boolean not null default false,
  sort_order  int not null default 100
);

alter table public.testimonials enable row level security;

drop policy if exists "testimonios publicados son publicos" on public.testimonials;
create policy "testimonios publicados son publicos"
  on public.testimonials for select
  to anon, authenticated
  using (published = true);

drop policy if exists "equipo gestiona testimonios" on public.testimonials;
create policy "equipo gestiona testimonios"
  on public.testimonials for all
  to authenticated
  using (true)
  with check (true);

-- ───────────────────────── STORAGE: fotos de obras ─────────────────────────
insert into storage.buckets (id, name, public)
values ('proyectos', 'proyectos', true)
on conflict (id) do nothing;

drop policy if exists "equipo sube fotos" on storage.objects;
create policy "equipo sube fotos"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'proyectos');
