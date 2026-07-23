export const siteInfo = {
  name: "ModoBeta",
  institutionalName: "ModoBeta Devs & Co.",
  url: "https://modobeta.net.ar",
  locale: "es_AR",
  language: "es-AR",
  socialImage: "https://modobeta.net.ar/assets/pwa/icon-512.png",
  socialImageAlt: "Logo de ModoBeta",
  defaultTitle: "ModoBeta | Software a medida en Goya, Corrientes",
  defaultDescription:
    "ModoBeta crea sitios web, sistemas de gestión y soluciones digitales a medida para pymes, instituciones educativas, centros interdisciplinarios, clínicas y profesionales.",
};

export const pageSeo = {
  home: {
    title: siteInfo.defaultTitle,
    description: siteInfo.defaultDescription,
    path: "/",
  },
  about: {
    title: "Sobre ModoBeta | Desarrollo de software a medida",
    description:
      "ModoBeta Devs & Co. es un emprendimiento de desarrollo de software fundado por Carlos Martín Juncos en Goya, Corrientes.",
    path: "/nosotros",
  },
  solutions: {
    title: "Soluciones digitales a medida | ModoBeta",
    description:
      "Desarrollamos sitios web, sistemas de gestión, plataformas administrativas y automatizaciones para ordenar procesos institucionales y profesionales.",
    path: "/soluciones",
  },
  projects: {
    title: "Proyectos realizados | ModoBeta",
    description:
      "Conocé proyectos realizados por ModoBeta, creados a partir de necesidades reales y convertidos en soluciones digitales funcionales.",
    path: "/proyectos",
  },
  contact: {
    title: "Contacto | ModoBeta",
    description:
      "Contactá a ModoBeta para solicitar una reunión gratuita, iniciar una conversación por WhatsApp o pedir un presupuesto personalizado.",
    path: "/contacto",
  },
  notFound: {
    title: "Página no encontrada | ModoBeta",
    description: "La ruta solicitada no existe o fue movida dentro del sitio de ModoBeta.",
    path: "/404",
  },
} as const;
