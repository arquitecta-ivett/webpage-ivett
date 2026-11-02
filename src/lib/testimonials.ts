import { getSupabase } from "./supabase";

export type Testimonial = { author: string; project: string; quote: string; rating: number };

// Solo testimonios reales publicados desde Supabase. Si no hay, la sección no se muestra.
export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("testimonials")
    .select("author,project,quote,rating")
    .eq("published", true)
    .order("sort_order", { ascending: true })
    .returns<Testimonial[]>();
  return error || !data ? [] : data;
}
