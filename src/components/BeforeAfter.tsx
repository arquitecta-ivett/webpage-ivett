"use client";

import Image from "next/image";
import { useId, useState } from "react";

type Props = {
  before: string;
  after: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

// Comparador antes/después: se arrastra con mouse o dedo, y se controla con teclado (es un input range).
export function BeforeAfter({ before, after, alt, priority, className = "aspect-[4/3]", sizes = "(min-width: 1024px) 50vw, 100vw" }: Props) {
  const [pos, setPos] = useState(50);
  const id = useId();

  return (
    <div className={`group relative isolate overflow-hidden rounded-3xl bg-sand select-none ${className}`}>
      <Image src={after} alt={`Después: ${alt}`} fill sizes={sizes} priority={priority} className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={before}
          alt={`Antes: ${alt}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover grayscale-[35%] sepia-[15%]"
        />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-ink/75 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur">
        Antes
      </span>
      <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-bronze/90 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-white uppercase backdrop-blur">
        Después
      </span>

      <div className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-xl transition group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <label htmlFor={id} className="sr-only">
        Deslizar para comparar antes y después: {alt}
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
