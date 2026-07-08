import { ContactSection } from "../components/sections/ContactSection";
import { ScrambleTitle } from "../components/ui/ScrambleTitle";

export function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__content">
          <span className="eyebrow">Contacto</span>
          <h1>
            <ScrambleTitle text="Hablemos de tu proyecto" />
          </h1>
          <p>
            Contanos qué necesitás mejorar, ordenar o digitalizar. Podemos ayudarte a
            pensar una solución adecuada para tu institución, centro o práctica
            profesional.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
