// ============================================================
//  KONSTRU · JKD Herrería y Estructuras (Nextlalpan, Edomex)
//  Datos del cliente. Algunos servicios se agregaron por ser
//  parte de su oficio (indicado por Konstru).
// ============================================================
window.DATOS = {
  negocio: "JKD Herrería y Estructuras",
  titulo: "JKD Herrería y Estructuras · Portones, techados y herrería a la medida",
  descripcion: "Herrería en general: portones, puertas, ventanas, protecciones, barandales, estructuras, bases de tinaco y techados de policarbonato y lámina. Trabajo garantizado en Ecatepec, Estado de México y CDMX.",
  marca: "JKD Herrería",
  marcaSub: "Herrería y Estructuras",
  iniciales: "JKD",
  logo: "img/logo.png",
  logoFondo: "#0E0C0B",
  ciudad: "Ecatepec",

  // Colores de su marca: acero y fuego
  tema: {
    claro: {
      "casco": "#EA6A1E", "sobre-casco": "#1A0D05",
      "tinta": "#17181B", "tinta-2": "#56585E",
      "cal": "#F2F1EF", "cal-2": "#E6E3DF", "card": "#FBFAF8", "linea": "#D6D2CC",
      "cantera": "#B04A12"
    },
    oscuro: {
      "casco": "#FF8A3D", "sobre-casco": "#1A0D05",
      "tinta": "#EEECE9", "tinta-2": "#A9A6A1",
      "cal": "#121314", "cal-2": "#1B1C1E", "card": "#1F2023", "linea": "#35363B",
      "cantera": "#FF9D5C"
    }
  },

  gancho: "¿Un portón, un techado o protecciones para tu casa?",
  ganchoRemate: "Lo hacemos a tu medida.",
  verbos: ["Fabricamos", "Soldamos", "Instalamos", "Reparamos"],
  titular: "herrería a tu medida",
  subtitulo: "Portones, puertas, ventanas, protecciones, barandales, estructuras y techados de policarbonato y lámina. Trabajo garantizado y precio justo en Ecatepec, todo el Estado de México y CDMX.",
  heroImg: "img/marco-puerta.jpg",
  imagenCompartir: "img/compartir.jpg",   // vista previa al compartir el enlace (logo)
  heroAlt: "Marco de puerta de herrería recién soldado en el taller",
  lema: "Calidad, resistencia y trabajo a la medida",
  lemaCierre: "Calidad, resistencia y trabajo a la medida. Si ocupas algo, con gusto te cotizo sin compromiso.",
  palabraObra: "proyecto",

  telefono: "56 2077 6327",
  whatsapp: "525620776327",
  correo: "johnny_martinezvalencia@hotmail.com",
  horario: "",
  urgencias: "",
  direccion: "Hacienda Santa Inés, Nextlalpan, Estado de México",
  mapa: "https://www.google.com/maps/search/?api=1&query=19.70916%2C-99.07332",

  redes: { facebook: "https://www.facebook.com/profile.php?id=61592780963202", instagram: "", tiktok: "" },

  sellos: ["Trabajo garantizado", "Precio justo", "Cotización sin compromiso"],

  numeros: [],

  textoServicios: "Toca lo que necesitas y se agrega a tu cotización. Todo hecho a la medida en nuestro taller.",
  servicios: [
    { id: "portones", nombre: "Portones", desc: "Abatibles y corredizos, para cochera y entrada principal.", icono: "porton" },
    { id: "puertas", nombre: "Puertas", desc: "Puertas de herrería con el diseño y acabado que elijas.", icono: "puerta" },
    { id: "ventanas", nombre: "Ventanas", desc: "Fabricación e instalación a la medida del vano.", icono: "ventana" },
    { id: "protecciones", nombre: "Protecciones", desc: "Para ventanas, puertas y bardas. Más seguridad para tu casa.", icono: "reja" },
    { id: "barandales", nombre: "Barandales y pasamanos", desc: "Para escaleras, balcones y terrazas.", icono: "barandal" },
    { id: "techados", nombre: "Techados de policarbonato y lámina", desc: "Estructura metálica y cubierta para patios, cocheras y azoteas.", icono: "techo" },
    { id: "estructuras", nombre: "Estructuras metálicas", desc: "Estructuras para techados, mezzanines y bodegas.", icono: "viga" },
    { id: "bases", nombre: "Bases de tinaco", desc: "Bases firmes de acero para tinaco y calentador.", icono: "tinaco" },
    { id: "reparacion", nombre: "Reparación y pintura", desc: "Soldadura, ajustes y pintura de portones y herrería.", icono: "chispa" },
    { id: "medida", nombre: "Diseños a la medida", desc: "Todo tipo de creación en herrería. Tú lo imaginas, nosotros lo hacemos.", icono: "regla" }
  ],

  tiposObra: [
    { id: "casa", nombre: "Casa", ej: "" },
    { id: "negocio", nombre: "Negocio o local", ej: "" },
    { id: "bodega", nombre: "Bodega o industria", ej: "" }
  ],
  cuando: ["Urgente", "Esta semana", "Este mes", "Solo quiero cotizar"],

  // Página de cliente real: el cotizador abre vacío
  ejemploServicios: [],
  ejemploCuando: "",
  saludo: "Hola, vi su página en Konstru y quiero cotizar un trabajo de herrería.",
  textoCotizador: "Elige las opciones y te abrimos WhatsApp con todo escrito. Si tienes medidas o una foto del lugar, mándalas en el chat y te cotizamos más rápido.",
  respuesta: "Cotización sin compromiso",
  lugarPlaceholder: "Colonia y municipio, ej. Ciudad Azteca, Ecatepec",
  detallesPlaceholder: "Ej. portón corredizo de 3 x 2.2 m, pintado en negro",

  leyendaEtapas: false,
  trabajos: [
    { img: "img/marco-puerta.jpg", titulo: "Marco de puerta soldado en taller", etapa: "Fabricación", hecho: "Soldadura · Primer anticorrosivo", forma: "alta" },
    { img: "img/estructura-techado.jpg", titulo: "Estructura para techado sobre muro", etapa: "Techado · Antes", hecho: "Estructura metálica", forma: "ancha" },
    { img: "img/techado-policarbonato.jpg", titulo: "Techado de policarbonato terminado", etapa: "Techado · Después", hecho: "Policarbonato sobre estructura metálica" },
    { img: "img/puerta-instalada.jpg", titulo: "Puerta con ventanas laterales instalada", etapa: "Puertas", hecho: "Fabricación e instalación", forma: "alta" },
    { img: "img/puerta-taller.jpg", titulo: "Puerta terminada lista para entrega", etapa: "Puertas", hecho: "Fabricación · Pintura" },
    { img: "img/pintura-porton.jpg", titulo: "Pintura de portón con pistola", etapa: "Pintura", hecho: "Acabado con pistola de aire", forma: "alta" },
    { img: "img/barandal.jpg", titulo: "Barandal para escalera", etapa: "Barandales", hecho: "Fabricación e instalación" },
    { img: "img/base-tinaco.jpg", titulo: "Base de acero para tinaco", etapa: "Estructuras", hecho: "Fabricación · Pintura" }
  ],

  zonas: ["Ecatepec de Morelos", "Nextlalpan", "Todo el Estado de México", "CDMX"],
  zonaNota: "Taller en Hacienda Santa Inés, Nextlalpan. Vamos a tu domicilio en el Estado de México y CDMX.",

  procesoEtiqueta: "Cómo trabajamos",
  procesoTitulo: "De tu idea a tu portón instalado",
  pasos: [
    { titulo: "Nos escribes", texto: "Cuéntanos qué necesitas. Si tienes medidas o fotos del lugar, mándalas." },
    { titulo: "Te cotizamos", texto: "Tomamos medidas y te damos precio justo, sin compromiso." },
    { titulo: "Fabricamos", texto: "Hacemos tu trabajo a la medida en nuestro taller." },
    { titulo: "Instalamos", texto: "Lo instalamos en tu domicilio, con trabajo garantizado." }
  ],

  opiniones: [],

  preguntas: [
    { p: "¿La cotización tiene costo?", r: "No. Te cotizamos sin compromiso. Mándanos por WhatsApp lo que necesitas, con medidas o fotos si las tienes." },
    { p: "¿Hacen trabajos a la medida?", r: "Sí. Todo lo fabricamos a la medida: portones, puertas, ventanas, protecciones, barandales y cualquier diseño que necesites." },
    { p: "¿Qué tipo de techados hacen?", r: "Techados de policarbonato y de lámina, con su estructura metálica, para patios, cocheras, azoteas y negocios." },
    { p: "¿Tienen garantía?", r: "Sí, nuestro trabajo es garantizado." },
    { p: "¿En qué zonas trabajan?", r: "En Ecatepec de Morelos, Nextlalpan y todo el Estado de México, y también en la CDMX. Nuestro taller está en Hacienda Santa Inés, Nextlalpan." }
  ],

  web: "https://konstru.demomx.workers.dev/herreria-jkd/"
};
