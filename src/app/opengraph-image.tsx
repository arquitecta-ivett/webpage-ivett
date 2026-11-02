import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Ivett Díaz, arquitecta directora de obra en Medellín";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen que se muestra al compartir el sitio en WhatsApp, Facebook, LinkedIn, etc.
export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#1b1a17", padding: 72, color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 36, border: "2px solid #d9b48a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, color: "#d9b48a" }}>ID</div>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#d9b48a", textTransform: "uppercase" }}>Arquitecta · Dirección de obra</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontFamily: "serif" }}>Remodelación y construcción que sí se entrega a tiempo.</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "rgba(255,255,255,0.7)" }}>
            {`${site.person} · +${site.yearsExperience} años · Medellín y toda Colombia`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
