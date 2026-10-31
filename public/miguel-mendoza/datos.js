// ============================================================
//  KONSTRU · Datos del negocio
//  Para un cliente nuevo solo se cambia ESTE archivo y las fotos.
//  (Los números, opiniones y respuestas son de EJEMPLO.)
// ============================================================
window.DATOS = {
  negocio: "Construcciones y Remodelaciones Miguel Mendoza",
  marca: "Miguel Mendoza",
  marcaSub: "Construcciones y Remodelaciones",
  iniciales: "MM",
  ciudad: "Oaxaca",

  gancho: "¿Cansado de buscar personal comprometido, responsable y de confianza?",
  subtitulo: "Personal capacitado para obra residencial, comercial, industrial y civil en todo el estado de Oaxaca. Nos adaptamos a tu presupuesto.",
  verbos: ["Construimos", "Remodelamos", "Ampliamos", "Impermeabilizamos", "Reparamos"],
  lema: "Calidad, responsabilidad y compromiso en cada proyecto",

  telefono: "951 146 2680",
  whatsapp: "529511462680",          // 52 + número, sin espacios
  horario: "Lunes a sábado, 8:00 a 19:00",
  urgencias: "Urgencias de plomería y electricidad también en domingo",
  direccion: "",                     // vacío = solo trabaja a domicilio

  redes: {
    facebook: "https://www.facebook.com/profile.php?id=61578665826892",
    instagram: "",
    tiktok: ""
  },

  sellos: ["Facturamos", "Todo el estado de Oaxaca", "Nos adaptamos a tu presupuesto"],

  numeros: [
    { valor: 12,  antes: "",  despues: "",    texto: "años en obra" },
    { valor: 180, antes: "+", despues: "",    texto: "obras entregadas" },
    { valor: 30,  antes: "+", despues: "",    texto: "municipios donde hemos trabajado" },
    { valor: 24,  antes: "",  despues: " h",  texto: "para responder tu presupuesto" }
  ],

  tiposObra: [
    { id: "residencial", nombre: "Residencial", ej: "Casas, departamentos" },
    { id: "comercial",   nombre: "Comercial",   ej: "Locales, oficinas" },
    { id: "industrial",  nombre: "Industrial",  ej: "Naves, bodegas" },
    { id: "civil",       nombre: "Civil",       ej: "Bardas, banquetas, drenaje" }
  ],

  servicios: [
    { id: "ampliacion", nombre: "Ampliación de vivienda", desc: "Cuartos, segundo piso, cochera o terraza.", icono: "casa" },
    { id: "remodelacion", nombre: "Remodelaciones", desc: "Cocinas, baños y fachadas como nuevos.", icono: "rodillo" },
    { id: "desde-cero", nombre: "Construcción desde cero", desc: "Desde la cimentación hasta la entrega de llaves.", icono: "grua" },
    { id: "tablaroca", nombre: "Tablaroca", desc: "Plafones, muros divisorios y nichos.", icono: "panel" },
    { id: "plomeria", nombre: "Plomería", desc: "Fugas, tinacos, baños e instalaciones nuevas.", icono: "gota" },
    { id: "pintura", nombre: "Pintura", desc: "Interiores, exteriores y acabados.", icono: "brocha" },
    { id: "yeso", nombre: "Yeso", desc: "Aplanados, molduras y arcos decorativos.", icono: "arco" },
    { id: "electricidad", nombre: "Electricidad", desc: "Instalación, contactos, centros de carga.", icono: "rayo" },
    { id: "impermeabilizacion", nombre: "Impermeabilización", desc: "Azoteas listas antes de la temporada de lluvias.", icono: "techo" },
    { id: "albanileria", nombre: "Albañilería", desc: "Muros, losas, firmes y colados.", icono: "ladrillo" }
  ],

  cuando: ["Urgente (esta semana)", "Este mes", "En 2 o 3 meses", "Solo quiero cotizar"],

  trabajos: [
    { img: "img/cocina.jpg", titulo: "Cocina integral con plafón y barra", lugar: "Santa Lucía del Camino", etapa: "Obra blanca", hecho: "Tablaroca · Electricidad · Plomería", forma: "ancha" },
    { img: "img/barra.jpg",  titulo: "Barra desayunadora con repisas",   lugar: "Santa Lucía del Camino", etapa: "Obra blanca", hecho: "Tablaroca · Iluminación", forma: "alta" },
    { img: "img/arcos.jpg",  titulo: "Arcos y columnas de yeso",         lugar: "San Agustín de las Juntas", etapa: "Obra gris",  hecho: "Yeso · Molduras", forma: "normal" },
    { img: "img/cimbra.jpg", titulo: "Cimbra para colado de losa",        lugar: "Santa Cruz Xoxocotlán", etapa: "Obra negra", hecho: "Albañilería · Instalación eléctrica", forma: "normal" }
  ],

  // Cobertura: lo que el maestro te diga, en sus palabras
  zonas: ["Oaxaca centro", "Santa Lucía del Camino", "Xoxocotlán", "San Agustín de las Juntas", "Etla", "Tlacolula", "Zaachila"],
  zonaNota: "¿Estás más lejos? Escríbenos, trabajamos en todo el estado de Oaxaca.",

  pasos: [
    { titulo: "Nos escribes", texto: "Por WhatsApp, con fotos del lugar si las tienes." },
    { titulo: "Visita y presupuesto", texto: "Medimos, revisamos y te entregamos presupuesto por escrito sin costo." },
    { titulo: "Manos a la obra", texto: "Fechas claras y avances con fotos cada semana." },
    { titulo: "Entrega con garantía", texto: "Revisamos todo contigo y te damos garantía por escrito." }
  ],

  opiniones: [
    { nombre: "Laura G.", lugar: "Santa Lucía del Camino", trabajo: "Remodelación de cocina", texto: "Llegaron puntuales todos los días y dejaron limpio. La cocina quedó mejor de lo que imaginé." },
    { nombre: "Ing. Ramiro S.", lugar: "Oaxaca de Juárez", trabajo: "Local comercial", texto: "Necesitábamos factura y entrega rápida para abrir el negocio. Cumplieron con las dos." },
    { nombre: "Familia Cruz", lugar: "Santa Cruz Xoxocotlán", trabajo: "Segundo piso", texto: "Nos explicaron cada etapa y el presupuesto no cambió a mitad de la obra. Muy recomendables." }
  ],

  preguntas: [
    { p: "¿Cobran la visita?", r: "No. La visita y el presupuesto son gratis en Valles Centrales. En otras regiones se acuerda según la distancia." },
    { p: "¿El presupuesto incluye material?", r: "Como prefieras: podemos cotizar solo mano de obra o mano de obra con material." },
    { p: "¿Dan factura?", r: "Sí, facturamos. Avísanos desde el inicio para incluirlo en el presupuesto." },
    { p: "¿Tienen garantía?", r: "Sí. Cada trabajo se entrega con garantía por escrito según el tipo de obra." },
    { p: "¿Trabajan fuera de la ciudad de Oaxaca?", r: "Sí. Revisa las zonas donde trabajamos más seguido; si no ves la tuya, escríbenos y te confirmamos." }
  ],

  // Dirección pública de la página (se usa para el botón Compartir)
  web: "https://konstru.demomx.workers.dev/miguel-mendoza/",

  // Página de ejemplo: muestra la nota "datos ilustrativos" y el cotizador prellenado
  ejemplo: true,
  ejemploLugar: "Santa Lucía del Camino",
  ejemploDetalles: "Cocina de 3 x 4 m, quiero cambiar muebles y poner plafón.",
  descripcion: "Construcciones y Remodelaciones Miguel Mendoza: ampliaciones, remodelaciones, tablaroca, plomería, electricidad e impermeabilización en todo Oaxaca."
};
