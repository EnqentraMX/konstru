// ============================================================
//  KONSTRU · Delta Construcción y Remodelación (Acapulco, Gro.)
//  Servicios y precios tomados de su flyer y sus anuncios.
// ============================================================
window.DATOS = {
  negocio: "Delta Construcción y Remodelación",
  titulo: "Delta Construcción y Remodelación · Acapulco",
  descripcion: "Albañilería, pintura, impermeabilización, electricidad, plomería en PPR, instalación de tinacos y calentadores, y herrería en Acapulco. Precios claros desde el primer mensaje.",
  marca: "Delta",
  marcaSub: "Construcción y Remodelación",
  iniciales: "Δ",
  logo: "img/logo.png",
  logoFondo: "#141D26",
  imagenCompartir: "img/compartir.jpg",
  ciudad: "Acapulco",

  // Colores de su marca: azul marino, azul eléctrico y plata
  tema: {
    claro: {
      "casco": "#2F7DE1", "sobre-casco": "#FFFFFF",
      "tinta": "#121C2B", "tinta-2": "#545E6E",
      "cal": "#F2F4F7", "cal-2": "#E4E8EE", "card": "#FCFCFD", "linea": "#D0D6DF",
      "cantera": "#1F63BF"
    },
    oscuro: {
      "casco": "#4C93F0", "sobre-casco": "#08111F",
      "tinta": "#ECEFF4", "tinta-2": "#A3ABB8",
      "cal": "#0D131C", "cal-2": "#151D29", "card": "#19212E", "linea": "#2B3546",
      "cantera": "#7EB2FF"
    }
  },

  gancho: "¿Remodelar, impermeabilizar o una instalación eléctrica segura?",
  ganchoRemate: "Te lo resolvemos con precios claros.",
  verbos: ["Construimos", "Remodelamos", "Impermeabilizamos", "Instalamos"],
  titular: "tu casa o negocio",
  subtitulo: "Albañilería, pintura, impermeabilización, electricidad, plomería en PPR, tinacos, calentadores y herrería en Acapulco. Mano de obra especializada para hogares y negocios.",
  heroImg: "img/impermeabilizacion.jpg",
  heroAlt: "Dos trabajadores aplicando impermeabilizante en una azotea",
  lema: "Conexiones que construyen confianza",
  lemaCierre: "Calidad garantizada y compromiso con cada proyecto. Escríbenos y te pasamos tu cotización.",
  palabraObra: "obra",

  telefono: "744 693 9472",
  whatsapp: "527446939472",
  horario: "",
  urgencias: "",
  direccion: "C. Río Balsas, Acapulco, Gro., C.P. 39815",

  redes: { facebook: "https://www.facebook.com/profile.php?id=61556976081460", instagram: "", tiktok: "" },

  sellos: ["Calidad garantizada", "Mano de obra especializada", "Hogares y negocios"],

  numeros: [],

  textoServicios: "Toca lo que necesitas y se agrega a tu cotización. Los precios son desde, de mano de obra.",
  servicios: [
    { id: "albanileria", nombre: "Albañilería", desc: "Aplanados, revoque fino y grueso, muros de block, tabicón, tabique y piedra, firmes y demolición.", precio: "Desde $500", icono: "ladrillo" },
    { id: "pisos", nombre: "Pisos, azulejo y porcelanato", desc: "Colocación de cerámica, porcelanato y azulejo.", icono: "piso" },
    { id: "pintura", nombre: "Pintura", desc: "Base aceite o agua, con compresora, brocha o rodillo. Interior, exterior y en alturas.", precio: "Desde $50 / m²", icono: "rodillo" },
    { id: "impermeabilizacion", nombre: "Impermeabilización", desc: "En frío o caliente: acrílico, fibratado o asfáltico.", precio: "Desde $100 / m²", icono: "techo" },
    { id: "electricidad", nombre: "Instalaciones eléctricas", desc: "Instalaciones nuevas, cableado, diagnóstico, contactos y apagadores.", precio: "Desde $180 / pza", icono: "rayo" },
    { id: "iluminacion", nombre: "Iluminación y ventilación", desc: "Lámparas, salidas de iluminación, ventiladores y extractores.", precio: "Desde $200 / pza", icono: "sol" },
    { id: "centros-carga", nombre: "Centros de carga y tierra física", desc: "Centros de carga, breakers, fusibles y sistema de puesta a tierra.", precio: "Desde $180", icono: "panel" },
    { id: "tinacos", nombre: "Tinacos y plomería PPR", desc: "Instalación de tinaco o Rotoplas con herrajes y conexión en PPR.", precio: "Desde $800", icono: "tinaco" },
    { id: "calentador", nombre: "Calentador eléctrico", desc: "Conexión de plomería en PPR y electricidad, con caja de fusibles independiente.", precio: "$4,000", icono: "termo" },
    { id: "herreria", nombre: "Herrería", desc: "Puertas, ventanas, protecciones, portones, zaguanes, bases de tinaco, rampas y malla ciclónica.", precio: "Desde $1,200", icono: "reja" }
  ],

  precios: {
    etiqueta: "Precios claros",
    titulo: "Electricidad: lista de precios",
    items: [
      { concepto: "Contactos y apagadores", detalle: "Contactos simples o dobles y apagadores", precio: "$180", unidad: "por pieza" },
      { concepto: "Iluminación", detalle: "Lámparas y salidas para iluminación", precio: "Desde $200", unidad: "por pieza" },
      { concepto: "Salidas eléctricas", detalle: "Para equipos o dispositivos", precio: "$250", unidad: "por pieza" },
      { concepto: "Tubería eléctrica", detalle: "Colocación de tubería", precio: "$80", unidad: "por metro" },
      { concepto: "Cableado", detalle: "Cableado de conductores", precio: "$50", unidad: "por metro" },
      { concepto: "Protección eléctrica", detalle: "Centros de carga y breakers", precio: "Desde $180", unidad: "por pieza" },
      { concepto: "Ventilación", detalle: "Ventiladores y extractores", precio: "Desde $300", unidad: "por pieza" },
      { concepto: "Sistema de tierra física", detalle: "Instalación y conexión de puesta a tierra", precio: "$800", unidad: "por servicio" }
    ],
    nota: "Precios de mano de obra como referencia. El total depende de cada trabajo; te lo confirmamos al cotizar."
  },

  tiposObra: [
    { id: "casa", nombre: "Casa", ej: "" },
    { id: "departamento", nombre: "Departamento o condominio", ej: "" },
    { id: "negocio", nombre: "Negocio o local", ej: "" }
  ],
  cuando: ["Urgente", "Esta semana", "Este mes", "Solo quiero cotizar"],

  // Página de cliente real: el cotizador abre vacío
  ejemploServicios: [],
  ejemploCuando: "",
  saludo: "Hola, vi su página en Konstru y quiero cotizar un trabajo con Delta.",
  textoCotizador: "Elige las opciones y te abrimos WhatsApp con todo escrito. Si tienes fotos o medidas, mándalas en el chat.",
  respuesta: "Acapulco, Gro.",
  lugarPlaceholder: "Colonia, ej. Progreso, Acapulco",
  detallesPlaceholder: "Ej. impermeabilizar azotea de 60 m², o 6 contactos nuevos",

  leyendaEtapas: false,
  trabajos: [
    { img: "img/herreria.jpg", titulo: "Estructura de herrería con lámina", etapa: "Herrería", hecho: "Fabricación", forma: "alta" },
    { img: "img/impermeabilizacion.jpg", titulo: "Impermeabilización de azotea", etapa: "Impermeabilización", hecho: "Impermeabilizante en azotea", forma: "ancha" },
    { img: "img/porton-pintura.jpg", titulo: "Portón pintado", etapa: "Pintura", hecho: "Pintura de portón y fachada" },
    { img: "img/albanileria.jpg", titulo: "Jardinera de block con aplanado", etapa: "Albañilería", hecho: "Muro de block · Aplanado" },
    { img: "img/tinaco.jpg", titulo: "Instalación de tinaco y calentador", etapa: "Plomería", hecho: "Tinaco · Calentador · PPR", forma: "ancha" },
    { img: "img/calentador.jpg", titulo: "Calentador eléctrico con su base", etapa: "Instalación", hecho: "Plomería PPR · Electricidad", forma: "ancha-movil" }
  ],

  zonas: ["Acapulco", "Alrededores de Acapulco"],
  zonaNota: "Estamos en la calle Río Balsas, Acapulco. ¿Estás en otra zona? Escríbenos y te decimos si llegamos.",

  procesoEtiqueta: "Cómo trabajamos",
  procesoTitulo: "Cumplimos en tiempo y forma",
  pasos: [
    { titulo: "Nos escribes", texto: "Cuéntanos qué necesitas. Con fotos o medidas te cotizamos más rápido." },
    { titulo: "Te cotizamos", texto: "Precios claros desde el inicio, para que sepas cuánto vas a pagar." },
    { titulo: "Hacemos el trabajo", texto: "Mano de obra especializada y trabajo seguro." },
    { titulo: "Entregamos", texto: "En tiempo y forma, con calidad garantizada." }
  ],

  opiniones: [],

  preguntas: [
    { p: "¿Los precios incluyen material?", r: "Los precios publicados son de mano de obra y son desde. El total depende de cada trabajo y del material; te lo confirmamos al cotizar." },
    { p: "¿Qué tipo de impermeabilizante manejan?", r: "Aplicamos en frío o en caliente: acrílico, fibratado o asfáltico, según tu azotea." },
    { p: "¿Por qué instalan con tubería PPR?", r: "Porque es más sanitaria y duradera, y sirve para agua fría y caliente." },
    { p: "¿Hacen trabajos en altura?", r: "Sí. Pintamos en alturas y hacemos trabajos eléctricos en escalera." },
    { p: "¿Dónde están?", r: "En la calle Río Balsas, Acapulco, Guerrero, C.P. 39815." }
  ],

  web: "https://konstru.demomx.workers.dev/delta/"
};
