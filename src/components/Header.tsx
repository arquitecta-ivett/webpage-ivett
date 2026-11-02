"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Logo } from "./Logo";
import { Menu, X } from "./Icons";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-cream/90 backdrop-blur-md" : "bg-cream"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition hover:text-bronze ${active ? "text-bronze" : "text-ink/80"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contacto" className="btn-outline !py-2.5">
            Agendar visita
          </Link>
          <WhatsAppButton location="header" label="WhatsApp" className="btn-whatsapp !py-2.5" />
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="menu-movil" aria-label="Móvil" className="container-x pb-8 lg:hidden">
          <ul className="divide-y divide-line border-y border-line">
            {[...nav, { href: "/contacto", label: "Contacto" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-4 font-display text-2xl">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <WhatsAppButton location="menu-movil" className="btn-whatsapp mt-6 w-full" />
        </nav>
      )}
    </header>
  );
}
