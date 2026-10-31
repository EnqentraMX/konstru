// ============================================================
//  KONSTRU · Arquitectura Sustentable (Puebla)
//  Datos tomados de lo que compartió el cliente.
// ============================================================
window.DATOS = {
  negocio: "Arquitectura Sustentable",
  titulo: "Arquitectura Sustentable · Calentadores solares en Puebla",
  descripcion: "Venta, instalación, limpieza y mantenimiento de calentadores solares de 12, 15, 20 y 24 tubos. Paneles solares, bases de tinaco, plomería, pérgolas y murales en relieve en Puebla y alrededores.",
  marca: "Arquitectura Sustentable",
  marcaSub: "Calentadores · Paneles · Construcción",
  iniciales: "AS",
  logo: "img/logo.png",
  ciudad: "Puebla",

  // Colores de su logo: verdes con amarillo sol
  tema: {
    claro: {
      "casco": "#8CC63F", "sobre-casco": "#12230B",
      "tinta": "#14261A", "tinta-2": "#4F5D52",
      "cal": "#F3F6EF", "cal-2": "#E5ECDD", "card": "#FCFDFA", "linea": "#D2DBC8",
      "cantera": "#2E7A3E"
    },
    oscuro: {
      "casco": "#A6D75B", "sobre-casco": "#12230B",
      "tinta": "#EDF2E8", "tinta-2": "#A9B5A6",
      "cal": "#0E1510", "cal-2": "#162019", "card": "#18221B", "linea": "#2C3A2F",
      "cantera": "#8FD49C"
    }
  },

  gancho: "¿Quieres ahorrar gas?",
  ganchoRemate: "Pásate al calentador solar.",
  verbos: ["Instalamos", "Limpiamos", "Mantenemos"],
  titular: "tu calentador solar",
  subtitulo: "Calentadores solares de 12, 15, 20 y 24 tubos, paneles solares, bases de tinaco y de calentador, plomería en general, pérgolas y murales en relieve. Todo en un solo lugar, en Puebla y alrededores.",
  heroImg: "img/calentadores-teecsol.jpg",
  heroAlt: "Calentadores solares de tubos instalados en una azotea",
  lema: "Todo lo que necesitas para tu sistema solar, en un solo lugar",
  lemaCierre: "Todo lo que necesitas para tu sistema solar, en un solo lugar. Escríbenos y te cotizamos.",
  palabraObra: "proyecto",

  telefono: "221 262 5697",
  whatsapp: "522212625697",
  etiquetaTelefono: "Teléfono y WhatsApp",
  horario: "",
  urgencias: "",
  direccion: "Colonia San Ramón, Puebla, Pue.",

  redes: { facebook: "", instagram: "", tiktok: "" },

  sellos: ["Calentadores de 12 a 24 tubos", "Todo en un solo lugar", "Puebla y alrededores"],

  // Tamaños de calentador que manejan
  numeros: [
    { valor: 12, antes: "", despues: "", texto: "tubos" },
    { valor: 15, antes: "", despues: "", texto: "tubos" },
    { valor: 20, antes: "", despues: "", texto: "tubos" },
    { valor: 24, antes: "", despues: "", texto: "tubos" }
  ],

  textoServicios: "Toca lo que necesitas y se agrega a tu cotización. Para casas y negocios.",
  columnasServicios: 4,
  servicios: [
    { id: "calentadores", nombre: "Calentadores solares", desc: "Venta e instalación de calentadores de 12, 15, 20 y 24 tubos.", icono: "termo" },
    { id: "mantenimiento", nombre: "Limpieza y mantenimiento", desc: "Servicio profesional para que tu calentador solar funcione al máximo.", icono: "sol" },
    { id: "paneles", nombre: "Paneles solares", desc: "Venta e instalación de paneles solares.", icono: "panelsolar" },
    { id: "plomeria", nombre: "Plomería en general", desc: "Venta, instalación y mantenimiento.", icono: "llave" },
    { id: "bases", nombre: "Bases de tinaco y calentador", desc: "Bases para tinaco y para calentador solar.", icono: "tinaco" },
    { id: "pergolas", nombre: "Pérgolas y automatización", desc: "Fabricación e instalación.", icono: "pergola" },
    { id: "murales", nombre: "Murales en relieve", desc: "Diseño y elaboración de murales con relieve.", icono: "brocha" },
    { id: "construccion", nombre: "Construcción", desc: "Proyectos de construcción para casa o negocio.", icono: "grua" }
  ],

  tiposObra: [
    { id: "casa", nombre: "Casa", ej: "" },
    { id: "negocio", nombre: "Negocio", ej: "" },
    { id: "edificio", nombre: "Edificio o condominio", ej: "" }
  ],
  cuando: ["Urgente", "Esta semana", "Este mes", "Solo quiero cotizar"],

  // Página de cliente real: el cotizador abre vacío
  ejemploServicios: [],
  ejemploCuando: "",
  saludo: "Hola, vi su página en Konstru y quiero cotizar un servicio.",
  textoCotizador: "Elige las opciones y te abrimos WhatsApp con todo escrito. Así te respondemos con un presupuesto, no con más preguntas.",
  respuesta: "Puebla y alrededores",
  lugarPlaceholder: "Colonia y municipio, ej. San Ramón, Puebla",
  detallesPlaceholder: "Ej. calentador para 4 personas, o limpieza de un calentador de 20 tubos",

  leyendaEtapas: false,
  trabajos: [
    { img: "img/calentadores-teecsol.jpg", titulo: "Calentadores solares de tubos instalados en azotea", etapa: "Calentadores", hecho: "Instalación", forma: "ancha" },
    { img: "img/paneles.jpg", titulo: "Paneles solares", etapa: "Paneles", hecho: "Paneles solares" },
    { img: "img/calentadores-azotea.jpg", titulo: "Tres calentadores solares con sus bases", etapa: "Calentadores", hecho: "Calentadores · Bases · Plomería", forma: "ancha" },
    { img: "img/mural.jpg", titulo: "Mural en relieve", etapa: "Murales", hecho: "Mural con relieve" }
  ],

  zonas: ["Puebla", "Alrededores de Puebla"],
  zonaNota: "Estamos en la colonia San Ramón. ¿Estás fuera de Puebla? Escríbenos y te decimos si llegamos.",

  procesoEtiqueta: "Cómo trabajamos",
  procesoTitulo: "De tu mensaje a tu agua caliente",
  pasos: [
    { titulo: "Nos escribes", texto: "Cuéntanos qué necesitas: calentador nuevo, mantenimiento, plomería u otro servicio." },
    { titulo: "Te cotizamos", texto: "Te recomendamos el calentador o el servicio adecuado y te damos precio." },
    { titulo: "Instalamos", texto: "Vamos a tu casa o negocio para instalar o dar mantenimiento." },
    { titulo: "Listo", texto: "Tu sistema queda funcionando y sabes a quién llamar para el mantenimiento." }
  ],

  opiniones: [],

  preguntas: [
    { p: "¿Qué tamaños de calentador solar manejan?", r: "Tenemos calentadores de 12, 15, 20 y 24 tubos. Te ayudamos a elegir el adecuado para tu casa o negocio." },
    { p: "¿Dan limpieza y mantenimiento a calentadores solares?", r: "Sí, damos servicio profesional de limpieza y mantenimiento para que tu calentador funcione al máximo." },
    { p: "¿Qué más ofrecen?", r: "Paneles solares, bases de tinaco y de calentador, plomería en general, fabricación e instalación de pérgolas y automatización, murales en relieve y construcción." },
    { p: "¿Dónde están?", r: "En la colonia San Ramón, en Puebla. Damos servicio en Puebla y alrededores." }
  ],

  web: "https://konstru.diegogopar1.workers.dev/arquitectura-sustentable/"
};
