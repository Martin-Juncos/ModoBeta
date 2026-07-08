import clinicaImage from "../assets/projects/clinica-home.webp";
import clinica1 from "../assets/projects/clinica1.webp";
import clinica2 from "../assets/projects/clinica2.webp";
import clinica3 from "../assets/projects/clinica3.webp";
import clinica4 from "../assets/projects/clinica4.webp";
import puentesImage from "../assets/projects/puentes-home.webp";
import puentes1 from "../assets/projects/puentes1.webp";
import puentes2 from "../assets/projects/puentes2.webp";
import puentes3 from "../assets/projects/puentes3.webp";
import puentes4 from "../assets/projects/puentes4.webp";
import puentes5 from "../assets/projects/puentes5.webp";
import puentes6 from "../assets/projects/puentes6.webp";
import puentes7 from "../assets/projects/puentes7.webp";

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
    images: [
      {
        src: puentesImage,
        alt: "Vista principal del sitio de Puentes Centro Interdisciplinario",
      },
      {
        src: puentes1,
        alt: "Captura de pantalla del proyecto Puentes",
      },
      {
        src: puentes2,
        alt: "Sección del sitio web de Puentes",
      },
      {
        src: puentes3,
        alt: "Vista institucional del proyecto Puentes",
      },
      {
        src: puentes4,
        alt: "Pantalla de contenido del sitio Puentes",
      },
      {
        src: puentes5,
        alt: "Captura responsive del sitio Puentes",
      },
      {
        src: puentes6,
        alt: "Vista de navegación del proyecto Puentes",
      },
      {
        src: puentes7,
        alt: "Detalle visual del sitio Puentes",
      },
    ],
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
    images: [
      {
        src: clinicaImage,
        alt: "Vista principal del sistema de turnos de Clínica San Rafael",
      },
      {
        src: clinica1,
        alt: "Captura del proyecto Clínica San Rafael",
      },
      {
        src: clinica2,
        alt: "Pantalla del sitio institucional de Clínica San Rafael",
      },
      {
        src: clinica3,
        alt: "Vista del sistema digital de Clínica San Rafael",
      },
      {
        src: clinica4,
        alt: "Detalle visual del proyecto Clínica San Rafael",
      },
    ],
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
    images: [],
    tags: ["Software a medida", "Instituciones", "Automatización", "Gestión"],
  },
];
