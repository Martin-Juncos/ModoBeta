import { Send } from "lucide-react";
import { Button } from "../ui/Button";
import { ScrambleTitle } from "../ui/ScrambleTitle";

export function CTASection() {
  return (
    <section className="section cta-section">
      <div className="container cta-section__inner">
        <div>
          <span className="eyebrow">Próximo paso</span>
          <h2>
            <ScrambleTitle text="¿Tu institución necesita ordenar sus procesos?" />
          </h2>
          <p>
            Podemos ayudarte a transformar tareas dispersas en una solución digital
            clara, profesional y hecha a medida.
          </p>
        </div>
        <div className="cta-section__actions">
          <Button to="/contacto" icon={Send}>
            Solicitar una propuesta
          </Button>
        </div>
      </div>
    </section>
  );
}
