import clinicaImage from "../assets/clinica_home.png";
import puentesImage from "../assets/puentes_home.png";

export const projects = [
  {
    title: "Puentes",
    description:
      "Solución digital orientada a mejorar la organización, la comunicación y la gestión de un centro interdisciplinario.",
    longDescription:
      "Proyecto desarrollado para acompañar la gestión y presencia digital de un espacio interdisciplinario. La solución está orientada a mejorar la organización, la comunicación y el acceso a la información.",
    url: "https://puentes-web.onrender.com/",
    external: true,
    image: puentesImage,
    imageAlt: "Captura del sitio de Puentes Centro Interdisciplinario",
    tags: ["Centro interdisciplinario", "Gestión", "Comunicación", "Sitio web"],
  },
  {
    title: "Clínica San Rafael",
    description:
      "Sitio institucional y sistema de turnos desarrollado para fortalecer la presencia digital y mejorar la comunicación con pacientes y comunidad.",
    longDescription:
      "Sitio institucional y sistema de turnos orientado a fortalecer la presencia digital de la clínica y facilitar la comunicación con pacientes.",
    url: "https://san-rafael-turnos-frontend.onrender.com/",
    external: true,
    image: clinicaImage,
    imageAlt: "Captura del sistema de turnos de Clínica San Rafael",
    tags: ["Clínica", "Turnos", "Salud", "Sitio institucional"],
  },
  {
    title: "Otros desarrollos",
    description:
      "Acompañamos a instituciones y profesionales en la creación de herramientas digitales adaptadas a sus necesidades.",
    longDescription:
      "Desarrollos a medida para instituciones, profesionales y equipos que necesitan herramientas digitales adaptadas a su forma de trabajo.",
    url: "/contacto",
    external: false,
    image: null,
    imageAlt: "",
    tags: ["Software a medida", "Instituciones", "Automatización", "Gestión"],
  },
];
