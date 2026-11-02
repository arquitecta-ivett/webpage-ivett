import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[60vh] place-items-center py-24 text-center">
      <div>
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-5 text-5xl">Esta página no existe.</h1>
        <p className="mt-4 text-muted">Puede que el enlace haya cambiado. Te ayudamos a encontrar lo que buscas.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-primary">Ir al inicio</Link>
          <Link href="/servicios" className="btn-outline">Ver servicios</Link>
        </div>
      </div>
    </section>
  );
}
