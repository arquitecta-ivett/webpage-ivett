import { photos } from "./site";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  /** Título SEO (≤ 60 caracteres aprox.) */
  metaTitle: string;
  /** Meta descripción (≤ 155 caracteres aprox.) */
  metaDescription: string;
  h1: string;
  excerpt: string;
  image: string;
  intro: string[];
  includes: string[];
  risks: { title: string; text: string }[];
  idealFor: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "remodelacion-de-apartamentos",
    name: "Remodelación de apartamentos",
    metaTitle: "Remodelación de Apartamentos en Medellín | Arquitecta",
    metaDescription:
      "Remodelamos tu apartamento en Medellín con presupuesto detallado, cronograma firmado y dirección de arquitecta. Más de 25 años cumpliendo plazos.",
    h1: "Remodelación de apartamentos en Medellín, llave en mano y a tiempo",
    excerpt:
      "Cocinas, baños, pisos, cielos, redes y acabados con una sola responsable, cronograma firmado y reglas de copropiedad al día.",
    image: photos.livingRoom,
    intro: [
      "Remodelar un apartamento no es solo cambiar pisos o pintar. Detrás de cada muro hay tuberías, redes eléctricas y, en muchos casos, elementos estructurales que no se pueden tocar. Un arreglo mal planeado termina en filtraciones al vecino de abajo, cortos eléctricos o una multa de la administración.",
      "Con más de 25 años dirigiendo obras civiles y acabados, Ivett coordina diseño, materiales, cuadrillas, permisos de la copropiedad y entregas parciales para que tu remodelación termine en la fecha pactada, sin sorpresas en el presupuesto.",
    ],
    includes: [
      "Visita técnica y diagnóstico de redes hidráulicas, eléctricas y de gas",
      "Propuesta de distribución, selección de materiales y acabados",
      "Presupuesto detallado por ítems y cantidades de obra",
      "Gestión de permisos ante la administración y horarios de propiedad horizontal",
      "Demolición controlada, retiro de escombros y protección de zonas comunes",
      "Pisos, enchapes, cielos en drywall, carpintería, iluminación y pintura",
      "Informe semanal de avance con fotos y control del cronograma",
      "Entrega con limpieza final, lista de chequeo y garantía por escrito",
    ],
    risks: [
      {
        title: "Filtraciones y daños al vecino",
        text: "Impermeabilizar mal un baño o un balcón es la causa más común de reclamos en edificios. Lo prevenimos con pruebas de estanqueidad antes de enchapar.",
      },
      {
        title: "Muros que no se pueden tumbar",
        text: "En sistemas de muros de carga (muy comunes en Medellín) demoler sin estudio compromete la estructura. Verificamos planos y sistema estructural antes de intervenir.",
      },
      {
        title: "Obras que se eternizan",
        text: "Sin cronograma ni compras planificadas, una obra de 6 semanas se vuelve de 4 meses. Trabajamos con ruta crítica y pedidos anticipados.",
      },
    ],
    idealFor: [
      "Apartamentos usados que quieres actualizar antes de mudarte",
      "Propietarios que remodelan para vender o arrendar mejor",
      "Apartamentos nuevos en obra gris o con acabados básicos",
    ],
    faqs: [
      {
        q: "¿Cuánto tiempo tarda la remodelación de un apartamento?",
        a: "Depende del alcance. Una remodelación parcial (cocina o baños) suele tomar entre 3 y 6 semanas; una remodelación integral, entre 8 y 14 semanas. Antes de empezar recibes un cronograma por escrito con fechas de cada etapa.",
      },
      {
        q: "¿Necesito permiso para remodelar mi apartamento?",
        a: "Siempre necesitas autorización de la administración de la copropiedad. Si la obra modifica estructura, fachada o áreas, puede requerir licencia ante curaduría. En la visita técnica te decimos exactamente qué aplica en tu caso.",
      },
      {
        q: "¿Puedo vivir en el apartamento durante la obra?",
        a: "En remodelaciones parciales es posible sectorizando la obra y protegiendo las zonas habitadas. En remodelaciones integrales recomendamos desocupar para reducir tiempos y riesgos.",
      },
      {
        q: "¿El presupuesto incluye materiales?",
        a: "Puedes elegir: llave en mano (mano de obra, materiales y dirección) o administración delegada, donde tú compras los materiales y nosotros dirigimos y controlamos. Ambas modalidades van con presupuesto detallado.",
      },
    ],
  },
  {
    slug: "remodelacion-de-casas",
    name: "Remodelación de casas",
    metaTitle: "Remodelación de Casas en Medellín y Antioquia",
    metaDescription:
      "Remodelación integral de casas en Medellín, Envigado, Rionegro y Llanogrande. Ampliaciones, cubiertas, fachadas y acabados con arquitecta directora de obra.",
    h1: "Remodelación integral de casas en Medellín y el Oriente antioqueño",
    excerpt:
      "Ampliaciones, segundos pisos, cubiertas, fachadas y redondeo de acabados, con estudio técnico previo y una sola dirección.",
    image: photos.houseFacade,
    intro: [
      "Las casas tienen retos que un apartamento no: cubiertas que filtran, humedades por capilaridad, redes antiguas, cimentaciones que no fueron pensadas para un segundo piso. Por eso una remodelación de casa necesita criterio técnico antes que mano de obra.",
      "Ivett dirige el proyecto completo: diagnóstico, diseño, trámites, compras, ejecución y entrega, coordinando a los especialistas (estructural, eléctrico, hidrosanitario) cuando el proyecto lo requiere.",
    ],
    includes: [
      "Diagnóstico de humedades, cubiertas, redes y estado estructural",
      "Diseño arquitectónico de la remodelación o ampliación",
      "Coordinación de estudios técnicos y licencias cuando se requieren",
      "Cambio o reparación de cubiertas, canoas e impermeabilizaciones",
      "Ampliaciones, segundos pisos y reconfiguración de espacios",
      "Renovación de fachadas, zonas húmedas, pisos y carpinterías",
      "Redes eléctricas e hidrosanitarias nuevas bajo norma",
      "Entrega con planos actualizados y garantía por escrito",
    ],
    risks: [
      {
        title: "Construir sobre lo que no resiste",
        text: "Un segundo piso sin revisar cimentación y columnas pone en riesgo a tu familia. Siempre validamos con ingeniero estructural según la NSR-10.",
      },
      {
        title: "Humedades que vuelven",
        text: "Pintar encima de una humedad la esconde por meses. Atacamos la causa: drenajes, impermeabilización y ventilación.",
      },
      {
        title: "Licencias pendientes",
        text: "Una ampliación sin licencia puede generar sanciones y problemas al vender. Te orientamos y tramitamos lo necesario.",
      },
    ],
    idealFor: [
      "Casas familiares que necesitan más espacio",
      "Casas antiguas con humedades, cubiertas o redes deterioradas",
      "Casas campestres en Llanogrande, Rionegro, La Ceja o El Retiro",
    ],
    faqs: [
      {
        q: "¿Puedo construir un segundo piso sobre mi casa?",
        a: "Solo si la estructura existente lo permite o se refuerza, y con licencia de construcción. Hacemos el diagnóstico inicial y coordinamos el estudio estructural para darte una respuesta segura.",
      },
      {
        q: "¿Trabajan fuera de Medellín?",
        a: "Sí. Atendemos todo el Valle de Aburrá y el Oriente antioqueño de forma permanente, y proyectos en otras ciudades de Colombia según alcance.",
      },
      {
        q: "¿Cómo controlo el avance si no vivo cerca?",
        a: "Recibes informes semanales con fotos, avance contra cronograma y estado del presupuesto. También puedes agendar visitas de obra cuando quieras.",
      },
    ],
  },
  {
    slug: "construccion-de-casas",
    name: "Construcción de casas desde cero",
    metaTitle: "Construcción de Casas en Antioquia | Desde Cero",
    metaDescription:
      "Construimos tu casa desde cero en Antioquia: diseño, licencias, obra negra, obra blanca y acabados con arquitecta directora de obra y cronograma firmado.",
    h1: "Construcción de casas desde cero, de los planos a la entrega de llaves",
    excerpt:
      "Casas urbanas y campestres: diseño, licencia, cimentación, estructura, obra blanca y acabados con control total de costos y tiempos.",
    image: photos.modernHouse,
    intro: [
      "Construir una casa es probablemente la inversión más grande de tu vida. La diferencia entre un sueño cumplido y un problema de años está en la planeación: estudios de suelo, diseño estructural, licencias, presupuesto real y una dirección de obra que no improvise.",
      "Ivett acompaña todo el ciclo: desde la evaluación del lote hasta la entrega con planos récord, coordinando ingenieros, proveedores y cuadrillas bajo un solo cronograma.",
    ],
    includes: [
      "Evaluación del lote, normas urbanísticas y viabilidad",
      "Diseño arquitectónico y coordinación de diseños técnicos",
      "Estudio de suelos, diseño estructural y redes",
      "Trámite de licencia de construcción ante curaduría o planeación",
      "Obra negra: cimentación, estructura, mampostería y cubierta",
      "Obra blanca y acabados: pisos, enchapes, carpintería, pintura",
      "Control de calidad de materiales, ensayos y supervisión técnica",
      "Entrega con planos récord, manuales y garantía",
    ],
    risks: [
      {
        title: "Presupuestos que se duplican",
        text: "Sin cantidades de obra reales el presupuesto es una ilusión. Trabajamos con análisis de precios unitarios y control de cambios por escrito.",
      },
      {
        title: "Estructuras sin norma",
        text: "Colombia es zona sísmica. Toda estructura se construye según diseño firmado y bajo la NSR-10.",
      },
      {
        title: "Obras abandonadas",
        text: "El mayor miedo de quien construye. Pagos por avance verificado y cronograma firmado protegen tu inversión.",
      },
    ],
    idealFor: [
      "Familias con lote propio en Medellín o el Oriente antioqueño",
      "Casas campestres y de recreo",
      "Inversionistas que construyen para renta",
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta construir una casa en Antioquia?",
        a: "Depende del área, el tipo de terreno, el sistema estructural y el nivel de acabados. Tras evaluar el lote y el programa de necesidades entregamos un presupuesto por etapas con cantidades reales, para que sepas cuánto invertir y cuándo.",
      },
      {
        q: "¿Ustedes tramitan la licencia de construcción?",
        a: "Sí, coordinamos los diseños y la documentación necesaria y acompañamos el trámite ante la curaduría urbana o la oficina de planeación del municipio.",
      },
      {
        q: "¿Cómo se pagan las obras?",
        a: "Por hitos de avance verificables definidos en el contrato. Nunca pagas por adelantado obra que no se ha ejecutado.",
      },
    ],
  },
  {
    slug: "adecuacion-de-locales-comerciales",
    name: "Adecuación de locales comerciales y oficinas",
    metaTitle: "Adecuación de Locales Comerciales en Medellín",
    metaDescription:
      "Adecuación de locales comerciales, oficinas y consultorios en Medellín. Cumplimos fechas de apertura, normas técnicas y reglas del centro comercial.",
    h1: "Adecuación de locales comerciales y oficinas que abren en la fecha prometida",
    excerpt:
      "Locales, restaurantes, consultorios y oficinas: cumplimos la fecha de apertura y los requisitos del centro comercial y de las normas técnicas.",
    image: photos.office,
    intro: [
      "En un local comercial cada semana de retraso es una semana de arriendo pagado sin vender. Por eso la adecuación de un negocio exige planeación al día y coordinación con la administración del centro comercial, los proveedores de mobiliario y la marca.",
      "Ivett trabaja con cronogramas de ruta crítica, turnos nocturnos cuando el centro comercial lo exige y entregas por etapas para que tu negocio abra a tiempo.",
    ],
    includes: [
      "Levantamiento, distribución y coordinación con el manual de marca",
      "Trámites y requisitos ante la administración del centro comercial",
      "Redes eléctricas, voz y datos, iluminación y aire acondicionado",
      "Cielos, divisiones en drywall y vidrio, pisos comerciales",
      "Adecuaciones para consultorios y requisitos de habilitación",
      "Fachadas, avisos y vitrinas",
      "Trabajo en horarios nocturnos o fines de semana si se requiere",
      "Entrega lista para operar, con documentación técnica",
    ],
    risks: [
      {
        title: "Apertura aplazada",
        text: "Retrasos por compras tardías o permisos del centro comercial. Los anticipamos desde el día uno en el cronograma.",
      },
      {
        title: "Instalaciones eléctricas inseguras",
        text: "Las cargas comerciales exigen instalaciones bajo RETIE. Las ejecutamos con personal certificado.",
      },
      {
        title: "Sobrecostos por cambios",
        text: "Cada cambio se cotiza y aprueba por escrito antes de ejecutarse. Tú decides con información.",
      },
    ],
    idealFor: [
      "Marcas que abren nuevas sedes o franquicias",
      "Restaurantes, cafés y tiendas",
      "Oficinas, consultorios y clínicas estéticas",
    ],
    faqs: [
      {
        q: "¿Pueden trabajar de noche en un centro comercial?",
        a: "Sí. Nos adaptamos a los horarios y reglamentos del centro comercial, incluyendo turnos nocturnos y fines de semana.",
      },
      {
        q: "¿Atienden cadenas con varias sedes en Colombia?",
        a: "Sí. Tenemos disponibilidad para proyectos a nivel nacional con el mismo estándar de dirección, cronograma e informes.",
      },
      {
        q: "¿Cuánto tarda la adecuación de un local?",
        a: "Un local comercial estándar suele adecuarse entre 3 y 8 semanas según el alcance. Definimos la fecha de entrega con base en tu fecha de apertura.",
      },
    ],
  },
  {
    slug: "mantenimiento-locativo",
    name: "Mantenimiento locativo y preventivo",
    metaTitle: "Mantenimiento Locativo en Medellín | Hogares y Edificios",
    metaDescription:
      "Mantenimiento locativo preventivo y correctivo para hogares, edificios, propiedad horizontal y locales en Medellín. Humedades, cubiertas, fachadas y redes.",
    h1: "Mantenimiento locativo para hogares, edificios y locales en Medellín",
    excerpt:
      "Humedades, impermeabilizaciones, cubiertas, fachadas, redes y pintura, con diagnóstico técnico para que el arreglo no genere nuevos daños.",
    image: photos.maintenance,
    intro: [
      "Un mantenimiento a tiempo cuesta una fracción de una reparación mayor. Pero el mantenimiento mal hecho es peor que no hacerlo: un parche que tapa una fuga, una impermeabilización sin preparar la superficie o una conexión eléctrica improvisada terminan dañando otras cosas.",
      "Ofrecemos mantenimiento preventivo y correctivo con diagnóstico técnico, para hogares, copropiedades (propiedad horizontal), locales y empresas, con planes periódicos e informes.",
    ],
    includes: [
      "Diagnóstico de humedades, filtraciones y fisuras",
      "Impermeabilización de cubiertas, terrazas, balcones y tanques",
      "Lavado, reparación y pintura de fachadas",
      "Mantenimiento de redes hidráulicas, sanitarias y eléctricas",
      "Reparación de enchapes, pisos, cielos y carpintería",
      "Planes de mantenimiento preventivo para copropiedades",
      "Atención correctiva priorizada",
      "Informe técnico con fotos antes y después",
    ],
    risks: [
      {
        title: "El arreglo que daña otra cosa",
        text: "Romper una tubería para reparar otra, o tapar una humedad que sigue avanzando. El diagnóstico previo evita reprocesos.",
      },
      {
        title: "Trabajo en alturas sin protocolo",
        text: "Fachadas y cubiertas requieren personal certificado y SG-SST. Cumplimos los protocolos de seguridad.",
      },
      {
        title: "Mantenimientos sin trazabilidad",
        text: "Para administradores, entregamos informes con evidencia para la asamblea y el consejo.",
      },
    ],
    idealFor: [
      "Administradores de propiedad horizontal",
      "Propietarios de casas y apartamentos",
      "Locales comerciales y empresas con varias sedes",
    ],
    faqs: [
      {
        q: "¿Atienden copropiedades y edificios?",
        a: "Sí. Elaboramos planes de mantenimiento preventivo para propiedad horizontal, con cronograma anual, cotizaciones comparables e informes con evidencia fotográfica.",
      },
      {
        q: "¿Hacen trabajos pequeños?",
        a: "Sí, siempre con diagnóstico técnico. Muchas reparaciones pequeñas bien hechas evitan una obra grande después.",
      },
      {
        q: "¿Cómo solucionan una humedad definitivamente?",
        a: "Identificando su origen (filtración, capilaridad, condensación o fuga de red) antes de intervenir. Tratar solo la mancha nunca resuelve el problema.",
      },
    ],
  },
  {
    slug: "remodelacion-de-cocinas-y-banos",
    name: "Remodelación de cocinas y baños",
    metaTitle: "Remodelación de Cocinas y Baños en Medellín",
    metaDescription:
      "Remodelación de cocinas y baños en Medellín con impermeabilización garantizada, redes nuevas y acabados de alta calidad. Cotiza con arquitecta directora de obra.",
    h1: "Remodelación de cocinas y baños sin filtraciones ni retrasos",
    excerpt:
      "Zonas húmedas con impermeabilización probada, redes nuevas y acabados de calidad. Las áreas que más valorizan tu propiedad.",
    image: photos.kitchen,
    intro: [
      "Cocinas y baños son las zonas que más valorizan un inmueble y también las que más problemas generan cuando se remodelan mal: filtraciones, malos olores, desniveles, enchapes huecos y conexiones que fallan a los pocos meses.",
      "Cada remodelación de zona húmeda incluye redes nuevas, impermeabilización con prueba de estanqueidad y control de pendientes antes de instalar acabados.",
    ],
    includes: [
      "Diseño de distribución y selección de acabados",
      "Cambio de redes hidráulicas, sanitarias y de gas certificadas",
      "Impermeabilización con prueba de estanqueidad de 48 horas",
      "Enchapes, mesones, muebles y carpintería a medida",
      "Duchas, divisiones en vidrio y grifería",
      "Iluminación y tomacorrientes con protección para zonas húmedas",
      "Coordinación con proveedores de cocinas integrales",
      "Garantía por escrito sobre filtraciones",
    ],
    risks: [
      {
        title: "Filtraciones al piso de abajo",
        text: "La causa número uno de reclamos entre vecinos. La prueba de estanqueidad antes de enchapar es obligatoria en nuestras obras.",
      },
      {
        title: "Malos olores y desagües lentos",
        text: "Provienen de pendientes y sifones mal ejecutados. Los controlamos con nivel y prueba de flujo.",
      },
      {
        title: "Gas sin certificación",
        text: "Cualquier cambio en redes de gas debe certificarse. Lo coordinamos con instaladores autorizados.",
      },
    ],
    idealFor: [
      "Baños antiguos con filtraciones o enchapes deteriorados",
      "Cocinas cerradas que quieres abrir al social",
      "Propietarios que preparan el inmueble para vender o arrendar",
    ],
    faqs: [
      {
        q: "¿Cuánto tarda remodelar un baño?",
        a: "Un baño completo suele tomar entre 2 y 4 semanas, incluyendo los tiempos de secado y la prueba de estanqueidad.",
      },
      {
        q: "¿Puedo convertir mi cocina cerrada en cocina abierta?",
        a: "Muchas veces sí, pero primero verificamos si el muro es estructural. En edificios con muros de carga no siempre es posible, y te lo decimos con argumentos técnicos.",
      },
    ],
  },
  {
    slug: "direccion-e-interventoria-de-obra",
    name: "Dirección de obra e interventoría",
    metaTitle: "Dirección de Obra e Interventoría en Medellín",
    metaDescription:
      "Dirección de obra, interventoría y supervisión técnica para proyectos de construcción y acabados en Colombia. Control de calidad, costos y cronograma.",
    h1: "Dirección de obra e interventoría: tu proyecto controlado por una experta",
    excerpt:
      "Si ya tienes contratista o maestro de obra, supervisamos calidad, costos y tiempos para proteger tu inversión.",
    image: photos.siteTeam,
    intro: [
      "Muchas personas ya tienen un maestro de obra o un contratista, pero nadie que verifique técnicamente lo que se ejecuta. El resultado: cantidades cobradas que no se instalaron, materiales distintos a los pactados y plazos que se estiran.",
      "Como directora de obra e interventora, Ivett representa tus intereses: revisa presupuestos, controla cantidades, valida la calidad de cada etapa y exige el cumplimiento del cronograma.",
    ],
    includes: [
      "Revisión de presupuestos, contratos y cantidades de obra",
      "Control de calidad de materiales y procesos constructivos",
      "Seguimiento del cronograma y ruta crítica",
      "Actas de avance y aprobación de cortes de pago",
      "Verificación de cumplimiento normativo y SG-SST",
      "Coordinación de especialistas y proveedores",
      "Recibo de obra y lista de pendientes",
      "Informes periódicos al propietario o a la junta",
    ],
    risks: [
      {
        title: "Pagar por obra no ejecutada",
        text: "Sin medición de cantidades, los anticipos se consumen sin avance real. Aprobamos pagos solo contra obra verificada.",
      },
      {
        title: "Vicios ocultos",
        text: "Lo que queda detrás del enchape o dentro del muro no se ve al final. Lo revisamos antes de taparlo.",
      },
      {
        title: "Conflictos con el contratista",
        text: "Las actas y la trazabilidad técnica resuelven discusiones con hechos, no con versiones.",
      },
    ],
    idealFor: [
      "Propietarios que ya contrataron obra y necesitan control",
      "Copropiedades que ejecutan obras con recursos de la asamblea",
      "Empresas e inversionistas con proyectos en varias ciudades",
    ],
    faqs: [
      {
        q: "¿Qué diferencia hay entre dirección de obra e interventoría?",
        a: "La dirección de obra conduce la ejecución técnica del proyecto; la interventoría supervisa y controla al contratista en representación del dueño. Podemos asumir cualquiera de los dos roles según tu necesidad.",
      },
      {
        q: "¿Pueden supervisar obras en otras ciudades?",
        a: "Sí, tenemos disponibilidad para proyectos a nivel nacional, con visitas programadas e informes digitales periódicos.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const generalFaqs: Faq[] = [
  {
    q: "¿Por qué contratar una arquitecta directora de obra y no un maestro de obra?",
    a: "Un maestro de obra ejecuta; una directora de obra planea, coordina y responde por el resultado integral: estructura, redes, acabados, presupuesto y tiempos. Así evitas que un arreglo termine dañando otra cosa y que la obra se alargue indefinidamente.",
  },
  {
    q: "¿Cómo garantizan el cumplimiento de los tiempos?",
    a: "Cada proyecto arranca con un cronograma por escrito que hace parte del contrato, compras planificadas con anticipación e informes semanales de avance. Los pagos se hacen por avance verificado.",
  },
  {
    q: "¿La visita técnica tiene costo?",
    a: "La primera conversación y la orientación inicial no tienen costo. Para proyectos que requieren levantamiento detallado acordamos la visita técnica antes de agendarla.",
  },
  {
    q: "¿En qué zonas trabajan?",
    a: "Medellín y todo el Valle de Aburrá (Envigado, Sabaneta, Itagüí, Bello, La Estrella, Caldas), el Oriente antioqueño (Rionegro, Llanogrande, La Ceja, El Retiro) y proyectos en cualquier ciudad de Colombia.",
  },
  {
    q: "¿Ofrecen garantía sobre los trabajos?",
    a: "Sí. Toda obra se entrega con acta de recibo, lista de chequeo y garantía por escrito según el tipo de trabajo ejecutado.",
  },
];
