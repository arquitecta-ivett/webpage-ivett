// Eventos de conversión para Google Analytics 4 y Meta Pixel (si están configurados).
type Win = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

export function track(event: "whatsapp_click" | "phone_click" | "generate_lead", params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as Win;
  w.gtag?.("event", event, params);
  if (event === "generate_lead") w.fbq?.("track", "Lead", params);
  else w.fbq?.("track", "Contact", params);
}
