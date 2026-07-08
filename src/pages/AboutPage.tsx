import equipoImage from "../assets/content/equipo.webp";
import { CTASection } from "../components/home/CTASection";
import { MissionVision } from "../components/sections/MissionVision";
import { ValuesGrid } from "../components/sections/ValuesGrid";
import { ScrambleTitle } from "../components/ui/ScrambleTitle";

export function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__content">
          <span className="eyebrow">Sobre ModoBeta</span>
          <h1>
            <ScrambleTitle text="Sobre ModoBeta" />
          </h1>
          <p>
            Creamos tecnología a medida para ordenar procesos, mejorar la comunicación
            y acompañar la evolución digital de instituciones y profesionales.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose-layout">
          <div className="about-story">
            <h2>
              <ScrambleTitle text="Tecnología que se adapta a cada realidad de trabajo" />
            </h2>
            <figure className="about-story__image">
              <img
                src={equipoImage}
                alt="Equipo de ModoBeta trabajando en soluciones digitales"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div className="prose-content">
            <p>
              En ModoBeta desarrollamos soluciones digitales a medida para instituciones,
              centros educativos, espacios interdisciplinarios y profesionales que buscan
              mejorar su organización, optimizar procesos y ofrecer una experiencia más
              clara a sus equipos, usuarios y comunidades.
            </p>
            <p>
              Nuestro trabajo parte de una idea simple: la tecnología debe adaptarse a la
              realidad de cada institución, no al revés. Por eso diseñamos sitios web,
              sistemas de gestión y plataformas personalizadas que responden a necesidades
              concretas, como la administración de turnos, el registro de información, la
              comunicación con familias o pacientes, la generación de informes y la
              organización interna.
            </p>
            <p>
              Cada desarrollo es una oportunidad para escuchar, analizar y construir
              herramientas que realmente simplifiquen el trabajo diario.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container prose-layout">
          <div>
            <h2>
              <ScrambleTitle text="Qué significa ModoBeta" />
            </h2>
          </div>
          <div className="prose-content">
            <p>
              ModoBeta representa una manera de construir tecnología en constante
              evolución: escuchar, diseñar, probar, mejorar y acompañar cada proceso hasta
              convertirlo en una solución útil, clara y sostenible.
            </p>
            <p>
              No entendemos lo beta como algo incompleto, sino como una actitud de mejora
              continua. Una forma de avanzar con soluciones que pueden crecer junto a cada
              institución.
            </p>
          </div>
        </div>
      </section>

      <MissionVision />
      <ValuesGrid />
      <CTASection />
    </>
  );
}
