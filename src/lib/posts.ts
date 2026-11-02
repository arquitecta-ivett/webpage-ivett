import { photos } from "./site";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "cta"; text: string };

export type Post = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  image: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  relatedService: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "maestro-de-obra-o-arquitecta-directora-de-obra",
    title: "¿Maestro de obra o arquitecta directora de obra? Lo que nadie te dice antes de remodelar",
    metaDescription:
      "Diferencias reales entre contratar un maestro de obra y una arquitecta directora de obra para tu remodelación o construcción en Medellín.",
    excerpt:
      "El presupuesto más barato puede salir carísimo. Te explicamos qué cambia cuando una profesional dirige tu obra.",
    image: photos.plans,
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    readingMinutes: 6,
    relatedService: "direccion-e-interventoria-de-obra",
    body: [
      {
        type: "p",
        text: "Es la pregunta que se hace casi todo el que va a remodelar en Medellín: ¿le doy la obra a un maestro de obra conocido o contrato a una arquitecta? La respuesta corta: el maestro de obra es indispensable para ejecutar, pero no reemplaza la dirección técnica. Te explicamos por qué.",
      },
      { type: "h2", text: "Qué hace un maestro de obra (y qué no)" },
      {
        type: "p",
        text: "Un buen maestro de obra domina el oficio: mampostería, pañetes, enchapes, pisos. Pero normalmente no diseña, no calcula cantidades de obra, no revisa la estructura, no coordina especialistas ni responde por el resultado integral del proyecto. Su visión suele ser la de la tarea que tiene en frente.",
      },
      { type: "h2", text: "Qué agrega una directora de obra" },
      {
        type: "ul",
        items: [
          "Diagnóstico técnico antes de demoler: qué muros son estructurales, por dónde van las redes, qué riesgos hay.",
          "Presupuesto por ítems y cantidades reales, no un valor global “a ojo”.",
          "Cronograma con ruta crítica y compras planificadas para que la obra no se detenga esperando materiales.",
          "Coordinación de eléctricos, plomeros, carpinteros, vidrieros y proveedores bajo una sola dirección.",
          "Control de calidad en cada etapa, sobre todo en lo que queda oculto: impermeabilizaciones, redes y pendientes.",
          "Responsabilidad técnica y contractual por el resultado.",
        ],
      },
      { type: "h2", text: "El costo real de “ahorrarse” la dirección" },
      {
        type: "p",
        text: "Los sobrecostos más comunes que vemos en obras sin dirección: demoler dos veces porque no se previó una red, reparar la filtración del vecino de abajo, comprar el doble de material por mala medición o pagar semanas extra de mano de obra porque la obra se detuvo. Casi siempre esos sobrecostos superan lo que habría costado una dirección profesional.",
      },
      { type: "h2", text: "¿Cuándo basta con un maestro de obra?" },
      {
        type: "p",
        text: "Para trabajos puntuales y sencillos (pintar una habitación, cambiar un enchape aislado) un buen maestro puede ser suficiente. Cuando la obra involucra varias especialidades, zonas húmedas, redes, estructura o un plazo exigente, la dirección profesional deja de ser un lujo y se convierte en tu seguro.",
      },
      {
        type: "cta",
        text: "¿Tienes un proyecto en mente? Cuéntanos qué quieres hacer y te orientamos sin compromiso.",
      },
    ],
  },
  {
    slug: "cuanto-cuesta-remodelar-un-apartamento-en-medellin",
    title: "¿Cuánto cuesta remodelar un apartamento en Medellín? Factores que definen el presupuesto",
    metaDescription:
      "Qué determina el precio de remodelar un apartamento en Medellín: alcance, acabados, redes, estructura y tiempos. Cómo pedir un presupuesto confiable.",
    excerpt:
      "No existe un precio por metro cuadrado que sirva para todos. Estos son los factores que realmente mueven el presupuesto.",
    image: photos.livingRoom,
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    readingMinutes: 7,
    relatedService: "remodelacion-de-apartamentos",
    body: [
      {
        type: "p",
        text: "Cuando alguien pregunta cuánto cuesta remodelar un apartamento, la respuesta honesta es: depende de qué se va a hacer y con qué calidad. Dos apartamentos de 70 m² en el mismo edificio pueden tener presupuestos muy diferentes. Aquí te explicamos qué mueve el valor y cómo evitar las cotizaciones que luego crecen sin control.",
      },
      { type: "h2", text: "1. El alcance: parcial o integral" },
      {
        type: "p",
        text: "No es lo mismo cambiar pisos y pintar que intervenir cocina, baños, redes y cielos. Las zonas húmedas (cocina y baños) concentran gran parte del presupuesto porque implican demolición, redes, impermeabilización y acabados de mayor valor.",
      },
      { type: "h2", text: "2. El estado de las redes" },
      {
        type: "p",
        text: "En apartamentos de más de 20 años es frecuente encontrar tuberías galvanizadas o cableado sin polo a tierra. Reemplazarlas durante la remodelación es mucho más económico que hacerlo después, cuando ya están los acabados nuevos.",
      },
      { type: "h2", text: "3. El nivel de acabados" },
      {
        type: "p",
        text: "Pisos, enchapes, mesones, grifería y carpintería tienen rangos de precio muy amplios. Un buen presupuesto separa la mano de obra de los materiales para que puedas ajustar acabados sin perder el control.",
      },
      { type: "h2", text: "4. La estructura y las restricciones del edificio" },
      {
        type: "p",
        text: "Muchos edificios de Medellín están construidos con muros de carga, que no se pueden demoler. Además, el reglamento de propiedad horizontal define horarios, uso de ascensores y manejo de escombros, lo que impacta los tiempos y los costos.",
      },
      { type: "h2", text: "Cómo pedir un presupuesto confiable" },
      {
        type: "ul",
        items: [
          "Exige un presupuesto por ítems, con cantidades y unidades (m², ml, und).",
          "Pide que se especifiquen las referencias de los materiales.",
          "Verifica que incluya demoliciones, retiro de escombros y limpieza final.",
          "Pide un cronograma y la forma de pago por avance de obra.",
          "Desconfía de los valores globales sin detalle: son los que más crecen.",
        ],
      },
      {
        type: "cta",
        text: "Te entregamos un presupuesto detallado por ítems después de la visita técnica. Escríbenos y agenda la tuya.",
      },
    ],
  },
  {
    slug: "permisos-para-remodelar-apartamento-en-medellin",
    title: "Permisos para remodelar un apartamento en Medellín: qué necesitas y cuándo",
    metaDescription:
      "Qué permisos necesitas para remodelar tu apartamento en Medellín: autorización de la copropiedad, reparaciones locativas y cuándo se requiere licencia.",
    excerpt:
      "Administración, reparaciones locativas y licencia de construcción: te explicamos qué aplica a tu remodelación.",
    image: photos.apartmentBuilding,
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    readingMinutes: 5,
    relatedService: "remodelacion-de-apartamentos",
    body: [
      {
        type: "p",
        text: "Antes de demoler el primer muro conviene saber qué permisos aplican. Saltarse este paso puede significar una obra sellada, una sanción o problemas al momento de vender el inmueble. Esta es una guía general; cada caso se debe revisar en particular.",
      },
      { type: "h2", text: "Autorización de la administración" },
      {
        type: "p",
        text: "En propiedad horizontal siempre debes informar y obtener autorización de la administración antes de iniciar. Normalmente se solicita una descripción de los trabajos, el cronograma, el listado del personal y, en algunos casos, una póliza o depósito para cubrir daños en zonas comunes.",
      },
      { type: "h2", text: "Reparaciones locativas" },
      {
        type: "p",
        text: "La normativa nacional contempla las reparaciones o mejoras locativas (por ejemplo, cambio de pisos, enchapes, pintura, cielos o reparación de redes) como obras que no requieren licencia de construcción, siempre que no afecten la estructura, la fachada ni las áreas del inmueble.",
      },
      { type: "h2", text: "Cuándo se requiere licencia" },
      {
        type: "ul",
        items: [
          "Cuando se modifica o afecta la estructura (muros de carga, losas, columnas).",
          "Cuando se cambia la fachada o se cierran balcones.",
          "Cuando se amplía el área construida.",
          "Cuando se cambia el uso del inmueble.",
        ],
      },
      {
        type: "p",
        text: "En esos casos se tramita la licencia correspondiente ante una curaduría urbana de Medellín, con los diseños y estudios exigidos.",
      },
      {
        type: "cta",
        text: "En la visita técnica te decimos exactamente qué permisos aplican a tu proyecto y nos encargamos de gestionarlos.",
      },
    ],
  },
  {
    slug: "como-elegir-contratista-de-obra-confiable",
    title: "Cómo elegir un contratista de obra confiable: 8 preguntas antes de firmar",
    metaDescription:
      "Checklist para elegir un contratista de remodelación o construcción confiable en Medellín y evitar obras abandonadas, retrasos y sobrecostos.",
    excerpt:
      "Obras abandonadas, anticipos perdidos y plazos que nunca se cumplen. Estas preguntas te ayudan a filtrar desde el principio.",
    image: photos.siteTeam,
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    readingMinutes: 5,
    relatedService: "remodelacion-de-casas",
    body: [
      {
        type: "p",
        text: "El incumplimiento es la queja número uno de quienes han remodelado o construido. La buena noticia es que la mayoría de los problemas se pueden detectar antes de firmar. Usa estas preguntas como filtro.",
      },
      { type: "h2", text: "Las 8 preguntas" },
      {
        type: "ul",
        items: [
          "¿Quién es el responsable técnico de la obra y qué formación tiene?",
          "¿Me entrega un presupuesto por ítems y cantidades, o solo un valor global?",
          "¿El cronograma hace parte del contrato?",
          "¿Cómo se pagan los avances? (Evita anticipos grandes sin obra ejecutada.)",
          "¿Cómo se manejan los cambios y los adicionales?",
          "¿Cómo me informa el avance de la obra?",
          "¿El personal tiene seguridad social y protocolos de trabajo seguro?",
          "¿Qué garantía ofrece y por cuánto tiempo?",
        ],
      },
      { type: "h2", text: "Señales de alerta" },
      {
        type: "ul",
        items: [
          "Te pide más de la mitad del valor por adelantado.",
          "No quiere firmar contrato “porque es de confianza”.",
          "Te da precio sin visitar el lugar.",
          "No sabe responder si un muro es estructural.",
        ],
      },
      {
        type: "p",
        text: "Contratar con método no es desconfiar: es proteger tu inversión y la relación con quien ejecuta tu proyecto.",
      },
      {
        type: "cta",
        text: "Trabajamos con contrato, cronograma firmado y pagos por avance verificado. Conversemos sobre tu proyecto.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
