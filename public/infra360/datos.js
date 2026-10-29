// ============================================================
//  KONSTRU · Servicios de Infraestructura 360
//  Datos tomados de sus presentaciones (2026).
// ============================================================
window.DATOS = {
  negocio: "Servicios de Infraestructura 360",
  titulo: "Infra 360 · Proyectos llave en mano en Baja California y Sonora",
  descripcion: "Proyecto ejecutivo, permisos y licencias, ejecución y control de obra. Estructuras metálicas, instalaciones eléctricas, hidráulicas, gas y sistemas contra incendio. Producto terminado llave en mano.",
  marca: "Infra 360",
  marcaSub: "Servicios de Infraestructura",
  iniciales: "360°",
  ciudad: "Mexicali",

  // Colores de su marca: azul marino y rojo
  tema: {
    claro: {
      "casco": "#D3262C", "sobre-casco": "#FFFFFF",
      "tinta": "#111A3E", "tinta-2": "#4D5469",
      "cal": "#F2F3F6", "cal-2": "#E5E8EF", "card": "#FBFBFD", "linea": "#D0D4DE",
      "cantera": "#2A3C9E"
    },
    oscuro: {
      "casco": "#F2575C", "sobre-casco": "#1A0507",
      "tinta": "#ECEEF5", "tinta-2": "#A4A9BD",
      "cal": "#0D1020", "cal-2": "#151A2D", "card": "#181C30", "linea": "#2D3352",
      "cantera": "#9AABFF"
    }
  },

  gancho: "¿Una nave, una red o una subestación?",
  ganchoRemate: "Nos encargamos de todo.",
  verbos: ["Diseñamos", "Construimos", "Instalamos", "Mantenemos"],
  titular: "tu proyecto llave en mano",
  subtitulo: "Proyecto ejecutivo, permisos y licencias, ejecución y control de obra. Estructuras metálicas, instalaciones eléctricas, hidráulicas, gas y sistemas contra incendio para industria, comercio y sector público.",
  heroImg: "img/nave.jpg",
  heroAlt: "Nave industrial en construcción con muros de block y estructura metálica",
  lema: "Calidad, seguridad y compromiso en cada proyecto",
  lemaCierre: "Calidad, seguridad y compromiso en cada proyecto. Hablemos de tu próximo proyecto.",
  palabraObra: "proyecto",

  telefono: "653 132 8387",
  whatsapp: "526531328387",
  atiende: "Atiende: Ing. Oscar Ruiz",
  correo: "Ing.oscarruiz@360sdi.mx",
  horario: "",
  urgencias: "Emergencias 24/7 para clientes con póliza de mantenimiento",
  direccion: "Rómulo O'Farril 971, Centro Cívico, 21000 Mexicali, B.C.",

  redes: { facebook: "", instagram: "", tiktok: "" },

  sellos: ["Proyectos llave en mano", "REPSE ante la STPS", "Baja California y Sonora"],

  numeros: [
    { valor: 4,  antes: "",  despues: "",   texto: "etapas con un solo responsable" },
    { valor: 6,  antes: "",  despues: "",   texto: "ciudades con cobertura en BC y Sonora" },
    { valor: 10, antes: "+", despues: "",   texto: "empresas que han confiado en nosotros" },
    { valor: 24, antes: "",  despues: "/7", texto: "emergencias en pólizas de mantenimiento" }
  ],

  // "Llave en mano" va antes de los servicios
  procesoArriba: true,
  procesoEtiqueta: "Llave en mano",
  procesoTitulo: "Un solo responsable, de principio a fin",
  pasos: [
    { titulo: "Proyecto ejecutivo", texto: "Analizamos tu necesidad y desarrollamos la ingeniería, los planos y el presupuesto." },
    { titulo: "Permisos y licencias", texto: "Integramos la documentación técnica y gestionamos los trámites del proyecto." },
    { titulo: "Ejecución y control de obra", texto: "Construcción, supervisión, seguridad y control de calidad en cada etapa." },
    { titulo: "Producto terminado", texto: "Recibes tu proyecto llave en mano, terminado y listo para operar." }
  ],

  textoServicios: "Toca lo que necesitas y se agrega a tu cotización. Atendemos al sector público y privado.",
  servicios: [
    { id: "estructuras", nombre: "Estructuras metálicas", desc: "Diseño, fabricación y montaje: naves, cubiertas industriales y mezzanines.", icono: "viga" },
    { id: "obra-civil", nombre: "Obra civil y edificación", desc: "Cimentaciones, muros de block, losas y cerramientos.", icono: "ladrillo" },
    { id: "electricas", nombre: "Instalaciones eléctricas", desc: "Baja y media tensión, tableros, subestaciones y alumbrado.", icono: "rayo" },
    { id: "mant-electrico", nombre: "Mantenimiento eléctrico", desc: "Transformadores, pruebas de aislamiento, termografía y análisis de energía.", icono: "torre" },
    { id: "incendio", nombre: "Sistemas contra incendio", desc: "Detección, redes de agua, equipamiento y señalización, conforme a normativa.", icono: "fuego" },
    { id: "gas", nombre: "Gas natural y LP", desc: "Redes en cobre y PE-AL-PE para restaurantes, hoteles, hospitales e industria.", icono: "llama" },
    { id: "hidraulica", nombre: "Hidráulica, pluvial y sanitaria", desc: "Redes de agua potable y residual, tuberías industriales y municipales.", icono: "gota" },
    { id: "urbanizacion", nombre: "Plataformas y urbanización", desc: "Terracerías, pavimentación, encarpetado, bacheo y banquetas.", icono: "camino" },
    { id: "aire", nombre: "Aire acondicionado y ductería", desc: "Climatización uniforme, calidad del aire y ahorro de energía.", icono: "aire" },
    { id: "pintura", nombre: "Pintura, señalización e impermeabilización", desc: "Pisos y señalización industrial. Distribuidores Berel y Kover.", icono: "brocha" }
  ],

  tiposObra: [
    { id: "industrial",   nombre: "Industrial",   ej: "Naves, plantas, centros logísticos" },
    { id: "comercial",    nombre: "Comercial",    ej: "Locales, plazas, oficinas" },
    { id: "hospitalidad", nombre: "Hospitalidad", ej: "Restaurantes, hoteles, hospitales" },
    { id: "publico",      nombre: "Sector público", ej: "Redes, vialidades, alumbrado" },
    { id: "residencial",  nombre: "Residencial",  ej: "Edificios multifamiliares" }
  ],
  cuando: ["Urgente", "Este mes", "En 2 o 3 meses", "Solo quiero cotizar"],

  // Página de cliente real: el cotizador abre vacío
  ejemploServicios: [],
  ejemploCuando: "",
  saludo: "Hola Ing. Oscar, vi su página en Konstru y quiero cotizar un proyecto.",
  textoCotizador: "Elige las opciones y te abrimos WhatsApp con todo escrito. Así el Ing. Oscar Ruiz te responde con una propuesta, no con más preguntas.",
  respuesta: "Atiende: Ing. Oscar Ruiz",
  lugarPlaceholder: "Ciudad, ej. Mexicali, B.C.",
  detallesPlaceholder: "Ej. nave de 1,500 m², necesito estructura y red contra incendio",

  leyendaEtapas: false,
  trabajos: [
    { img: "img/nave.jpg", titulo: "Nave industrial: muros de block y estructura metálica", etapa: "Obra civil", hecho: "Estructura metálica · Muros de block", forma: "ancha" },
    { img: "img/mezzanine.jpg", titulo: "Mezzanine en nave industrial", etapa: "Estructura", hecho: "Estructura metálica · Edificación" },
    { img: "img/tanques.jpg", titulo: "Tanques de almacenamiento de agua", etapa: "Hidráulica", hecho: "Tanques · Red de agua" },
    { img: "img/red-agua.jpg", titulo: "Red de agua: válvula y atraque de concreto", etapa: "Hidráulica", hecho: "Tubería · Válvulas · Concreto armado", forma: "ancha" },
    { img: "img/transformador.jpg", titulo: "Mantenimiento de transformador", etapa: "Eléctrico", hecho: "Media tensión" },
    { img: "img/estacionamiento.jpg", titulo: "Estacionamiento con piso epóxico y señalización", etapa: "Pintura", hecho: "Piso epóxico · Señalización" },
    { img: "img/alumbrado.jpg", titulo: "Alumbrado público", etapa: "Eléctrico", hecho: "Alumbrado · Grúas canastilla" },
    { img: "img/cimbra.jpg", titulo: "Cimbra de cerramiento en nave industrial", etapa: "Obra civil", hecho: "Cimbra · Concreto armado", forma: "ancha" },
    { img: "img/cuadrilla.jpg", titulo: "Cuadrilla en cuarto eléctrico", etapa: "Equipo", hecho: "Personal técnico" }
  ],

  zonas: ["Mexicali", "Tijuana", "Ensenada", "Tecate", "San Luis Río Colorado", "Puerto Peñasco"],
  zonaNota: "Cobertura en Baja California y Sonora. ¿Tu proyecto está en otra ciudad? Escríbenos.",

  respaldoTitulo: "Experiencia que nos respalda",
  acreditaciones: [
    { etiqueta: "Registro", titulo: "REPSE ante la STPS", texto: "Cumplimiento normativo total y transparente para servicios especializados." },
    { etiqueta: "Distribuidores", titulo: "Berel y Kover", texto: "Distribuidores autorizados de pintura e impermeabilizantes." },
    { etiqueta: "Gas natural y LP", titulo: "Personal técnico certificado", texto: "Materiales certificados: tuberías de cobre y PE-AL-PE de alta resistencia." },
    { etiqueta: "Sectores", titulo: "Público y privado", texto: "Industria, centros logísticos, comercios, hospitalidad y desarrollos inmobiliarios." }
  ],
  clientes: ["Tetra Pak", "CESPM", "Maran Group", "Rheem", "Kenworth", "HB Group", "Grupo Nelson", "Caffenio", "El Vigía", "Global Mechanical", "Hirsh Industries"],

  opiniones: [],

  preguntas: [
    { p: "¿Qué significa llave en mano?", r: "Que nos encargamos de todo: proyecto ejecutivo, permisos y licencias, ejecución y control de obra. Recibes tu proyecto terminado y listo para operar, con un solo responsable." },
    { p: "¿Pueden cotizar si todavía no tengo ingeniería?", r: "Sí. Analizamos tu necesidad, cotizamos la obra y desarrollamos la documentación técnica dentro del proyecto." },
    { p: "¿En qué ciudades trabajan?", r: "En Mexicali, Tijuana, Ensenada, Tecate, San Luis Río Colorado y Puerto Peñasco, en Baja California y Sonora." },
    { p: "¿Están registrados en el REPSE?", r: "Sí, contamos con registro REPSE ante la STPS." },
    { p: "¿Ofrecen pólizas de mantenimiento?", r: "Sí. Por ejemplo, la póliza mensual para negocios con red de gas incluye 3 visitas de mantenimiento al mes, atención de emergencias 24/7, pruebas de hermeticidad y presión, y mantenimiento eléctrico de contactos, spots y lámparas." },
    { p: "¿Trabajan con gobierno y empresas privadas?", r: "Sí, prestamos servicios de construcción y mantenimiento al sector público y privado." }
  ],

  web: "https://konstru.netlify.app/infra360/"
};
