import { contactInfo } from "../../data/contact";
import { Button } from "../ui/Button";

export function CTASection() {
  return (
    <section className="section cta-section">
      <div className="container cta-section__inner">
        <div>
          <span className="eyebrow">Próximo paso</span>
          <h2>¿Tu institución necesita ordenar sus procesos?</h2>
          <p>
            Podemos ayudarte a transformar tareas dispersas en una solución digital
            clara, profesional y hecha a medida.
          </p>
        </div>
        <div className="cta-section__actions">
          <Button href={contactInfo.whatsappLink} newTab>
            Hablemos por WhatsApp
          </Button>
          <Button to="/contacto" variant="secondary">
            Solicitar una propuesta
          </Button>
        </div>
      </div>
    </section>
  );
}
