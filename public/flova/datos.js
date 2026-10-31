// ============================================================
//  KONSTRU · Flova Construcciones (Huamantla, Tlaxcala)
//  Datos del cliente. Algunos servicios se agruparon u ordenaron
//  a partir de "construcción en general, mantenimiento y diseño".
// ============================================================
window.DATOS = {
  negocio: "Flova Construcciones",
  titulo: "Flova Construcciones · Diseño, construcción y mantenimiento en Huamantla",
  descripcion: "Rehabilitación de muros, tratamiento de humedad, pintura, cocinas integrales, piso cerámico, adocreto, malla ciclónica y construcción en general para casas, oficinas, bodegas y naves industriales.",
  marca: "Flova",
  marcaSub: "Construcciones",
  iniciales: "FC",
  logo: "img/logo.png",
  imagenCompartir: "img/compartir.jpg",
  ciudad: "Huamantla",

  // Colores de su logo: azul marino y dorado
  tema: {
    claro: {
      "casco": "#E0A21C", "sobre-casco": "#14213F",
      "tinta": "#13254A", "tinta-2": "#525C70",
      "cal": "#F3F4F7", "cal-2": "#E6E9F0", "card": "#FCFCFD", "linea": "#D2D7E2",
      "cantera": "#9A6A06"
    },
    oscuro: {
      "casco": "#F2B634", "sobre-casco": "#13254A",
      "tinta": "#ECEFF5", "tinta-2": "#A6ADBD",
      "cal": "#0C1222", "cal-2": "#141B2E", "card": "#18203A", "linea": "#2B3554",
      "cantera": "#F2C25C"
    }
  },

  gancho: "¿Muros con humedad, una remodelación o una obra nueva?",
  ganchoRemate: "Nosotros nos encargamos.",
  verbos: ["Construimos", "Rehabilitamos", "Pintamos", "Diseñamos"],
  titular: "tu obra de principio a fin",
  subtitulo: "Diseño, construcción y mantenimiento para casas, oficinas, bodegas y naves industriales: desde retirar acabados dañados hasta dejar todo con acabados profesionales.",
  heroImg: "img/losa.jpg",
  heroAlt: "Cuadrilla colando una losa con La Malinche al fondo",
  lema: "Diseño, construcción y mantenimiento",
  lemaCierre: "Diseño, construcción y mantenimiento. Cuéntanos tu proyecto y te enviamos tu cotización.",
  palabraObra: "obra",

  telefono: "247 122 1076",
  whatsapp: "522471221076",
  correo: "proyeccionesconstructivasedifi@gmail.com",
  horario: "",
  urgencias: "",
  direccion: "Huamantla, Tlaxcala, C.P. 90507",

  redes: { facebook: "https://www.facebook.com/profile.php?id=61559473506312", instagram: "", tiktok: "" },

  sellos: ["Diseño, construcción y mantenimiento", "Casas, oficinas e industria", "Base en Huamantla, Tlax."],

  numeros: [],

  textoServicios: "Toca lo que necesitas y se agrega a tu cotización. Para casa habitación, oficinas, bodegas y naves industriales.",
  servicios: [
    { id: "muros", nombre: "Rehabilitación de muros", desc: "Retiro de acabados deteriorados, reparación y recubrimientos nuevos.", icono: "ladrillo" },
    { id: "humedad", nombre: "Tratamiento de humedad", desc: "Eliminamos la humedad de raíz antes de dar el acabado.", icono: "humedad" },
    { id: "pintura", nombre: "Pintura interior y exterior", desc: "Casas, oficinas y naves industriales.", icono: "rodillo" },
    { id: "cocinas", nombre: "Cocinas integrales", desc: "Fabricación a la medida, con cubiertas y acabados a tu gusto.", icono: "cocina" },
    { id: "piso", nombre: "Piso cerámico", desc: "Suministro e instalación de piso y azulejo.", icono: "piso" },
    { id: "adocreto", nombre: "Adocreto", desc: "Instalación y mantenimiento en patios, cocheras y andadores.", icono: "camino" },
    { id: "malla", nombre: "Malla ciclónica", desc: "Instalación perimetral en canchas deportivas, terrenos y bodegas.", icono: "reja" },
    { id: "construccion", nombre: "Construcción en general", desc: "Losas, bardas, muros de piedra y de contención, ampliaciones.", icono: "grua" },
    { id: "mantenimiento", nombre: "Mantenimiento y acabados", desc: "Mantenimiento de inmuebles y acabados profesionales.", icono: "llave" },
    { id: "diseno", nombre: "Diseño y proyecto", desc: "Te ayudamos a planear tu obra antes de construir.", icono: "regla" }
  ],

  tiposObra: [
    { id: "casa", nombre: "Casa habitación", ej: "" },
    { id: "oficina", nombre: "Oficina o negocio", ej: "" },
    { id: "bodega", nombre: "Bodega o nave industrial", ej: "" },
    { id: "deportivo", nombre: "Escuela o espacio deportivo", ej: "" }
  ],
  cuando: ["Urgente", "Este mes", "En 2 o 3 meses", "Solo quiero cotizar"],

  // Página de cliente real: el cotizador abre vacío
  ejemploServicios: [],
  ejemploCuando: "",
  saludo: "Hola, vi su página en Konstru y quiero cotizar una obra con Flova Construcciones.",
  textoCotizador: "Elige las opciones y te abrimos WhatsApp con todo escrito. Si tienes fotos del lugar o medidas, mándalas en el chat.",
  respuesta: "Cotización por WhatsApp",
  lugarPlaceholder: "Colonia y municipio, ej. Centro, Huamantla",
  detallesPlaceholder: "Ej. muro de 4 m con humedad en una oficina",

  leyendaEtapas: false,
  trabajos: [
    { img: "img/losa.jpg", titulo: "Colado de losa", etapa: "Construcción", hecho: "Armado · Instalación eléctrica · Colado", forma: "ancha" },
    { img: "img/muro-rehabilitacion.jpg", titulo: "Retiro de acabados para rehabilitar muro", etapa: "Rehabilitación", hecho: "Retiro de acabados · Rehabilitación de muro" },
    { img: "img/cocina-integral.jpg", titulo: "Cocina integral con cubierta negra", etapa: "Cocinas", hecho: "Fabricación · Piso · Azulejo", forma: "ancha" },
    { img: "img/pintura-interior.jpg", titulo: "Pintura interior en oficinas", etapa: "Pintura", hecho: "Pintura y mantenimiento" },
    { img: "img/malla-ciclonica.jpg", titulo: "Malla ciclónica perimetral en cancha", etapa: "Malla", hecho: "Instalación perimetral", forma: "alta-movil" },
    { img: "img/malla-andamio.jpg", titulo: "Instalación de malla con andamio", etapa: "Malla", hecho: "Instalación en altura" },
    { img: "img/muro-piedra.jpg", titulo: "Muro de piedra", etapa: "Construcción", hecho: "Muro de piedra · Cimentación" }
  ],

  zonas: ["Huamantla", "Estado de Tlaxcala", "Puebla", "CDMX"],
  zonaNota: "Base en Huamantla, Tlaxcala. ¿Tu obra está en otra ciudad? Escríbenos y te decimos si llegamos.",

  procesoEtiqueta: "Cómo trabajamos",
  procesoTitulo: "Diseño, construcción y mantenimiento",
  pasos: [
    { titulo: "Nos escribes", texto: "Cuéntanos qué necesitas. Si tienes fotos o medidas, mándalas." },
    { titulo: "Visitamos y cotizamos", texto: "Revisamos el lugar y te damos una propuesta clara." },
    { titulo: "Ejecutamos la obra", texto: "Desde retirar lo dañado hasta los acabados profesionales." },
    { titulo: "Entrega y mantenimiento", texto: "Te entregamos el trabajo y seguimos contigo para el mantenimiento." }
  ],

  opiniones: [],

  preguntas: [
    { p: "¿Trabajan en casas y también en oficinas o naves?", r: "Sí. Trabajamos en casa habitación, oficinas, bodegas y naves industriales, y en espacios deportivos como canchas." },
    { p: "¿Pueden quitar la humedad de un muro?", r: "Sí. Retiramos los acabados dañados, tratamos la humedad y aplicamos recubrimientos y acabados nuevos." },
    { p: "¿Hacen cocinas integrales a la medida?", r: "Sí, fabricamos cocinas integrales a la medida y podemos incluir la instalación de piso y azulejo." },
    { p: "¿Dónde están?", r: "En Huamantla, Tlaxcala. Escríbenos con la ubicación de tu obra y te decimos si llegamos." }
  ],

  web: "https://konstru.demomx.workers.dev/flova/"
};
