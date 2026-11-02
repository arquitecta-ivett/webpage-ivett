import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos Personales",
  description: "Política de tratamiento de datos personales conforme a la Ley 1581 de 2012.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: true, follow: true },
};

// Plantilla base. Recomendado: revisión por un abogado antes de publicar.
export default function PrivacidadPage() {
  return (
    <article className="container-x max-w-3xl py-20">
      <h1 className="text-5xl">Política de tratamiento de datos personales</h1>
      <div className="prose-ivett mt-10">
        <p>
          En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015),{" "}
          {site.person} (en adelante, “el Responsable”), con domicilio en {site.city}, {site.region}, Colombia, informa la
          política aplicable al tratamiento de los datos personales recolectados a través de este sitio web.
        </p>
        <h2>Datos que recolectamos</h2>
        <p>
          Nombre, número de celular, correo electrónico, ciudad, tipo de proyecto, presupuesto estimado y la descripción que
          el titular decida compartir en el formulario de cotización o por WhatsApp.
        </p>
        <h2>Finalidad</h2>
        <ul>
          <li>Contactar al titular para atender su solicitud de cotización o visita técnica.</li>
          <li>Elaborar propuestas, presupuestos y contratos relacionados con los servicios solicitados.</li>
          <li>Enviar información sobre el avance de los proyectos contratados.</li>
          <li>Medir la efectividad de nuestras campañas de comunicación de forma agregada.</li>
        </ul>
        <h2>Derechos del titular</h2>
        <p>
          Como titular puedes conocer, actualizar, rectificar y suprimir tus datos, revocar la autorización otorgada,
          solicitar prueba de la misma y presentar quejas ante la Superintendencia de Industria y Comercio.
        </p>
        <h2>Canal de atención</h2>
        <p>
          Para ejercer tus derechos escribe a <a href={`mailto:${site.email}`} className="text-bronze underline">{site.email}</a>.
          Las consultas se atenderán en un plazo máximo de diez (10) días hábiles y los reclamos en un máximo de quince (15)
          días hábiles, conforme a la ley.
        </p>
        <h2>Seguridad y conservación</h2>
        <p>
          Los datos se almacenan en proveedores tecnológicos con medidas de seguridad adecuadas y se conservan durante el
          tiempo necesario para cumplir las finalidades descritas.
        </p>
        <h2>Vigencia</h2>
        <p>Esta política rige a partir de su publicación en este sitio web.</p>
      </div>
    </article>
  );
}
