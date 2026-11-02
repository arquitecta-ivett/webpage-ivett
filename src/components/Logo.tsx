import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Ivett Díaz Arquitecta, inicio">
      <span
        className={`grid h-10 w-10 place-items-center rounded-full border font-display text-lg leading-none ${
          light ? "border-white/40 text-white" : "border-ink/25 text-ink"
        }`}
      >
        ID
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-lg ${light ? "text-white" : "text-ink"}`}>Ivett Díaz</span>
        <span className={`whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.16em] sm:text-[10px] sm:tracking-[0.25em] ${light ? "text-white/60" : "text-muted"}`}>
          Arquitecta · Dirección de obra
        </span>
      </span>
    </Link>
  );
}
