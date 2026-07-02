import { clients } from "../../data/clients";
import { SectionHeader } from "../ui/SectionHeader";

export function ClientsGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="A quiénes acompañamos"
          title="Instituciones, profesionales y equipos con procesos reales"
          description="Trabajamos con proyectos que necesitan orden, comunicación clara y herramientas digitales adaptadas a su forma de funcionar."
        />
        <div className="client-grid">
          {clients.map((client) => (
            <article className="client-item" key={client}>
              <span>{client}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
