import {
  Building2,
  GraduationCap,
  HeartHandshake,
  Landmark,
  School,
  Users,
} from "lucide-react";
import { clients } from "../../data/clients";
import { SectionHeader } from "../ui/SectionHeader";

const clientIcons = [
  School,
  HeartHandshake,
  Users,
  Building2,
  GraduationCap,
  Landmark,
];

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
          {clients.map((client, index) => {
            const ClientIcon = clientIcons[index % clientIcons.length];

            return (
              <article className="client-item" key={client}>
                <ClientIcon className="client-item__icon" aria-hidden="true" strokeWidth={1.9} />
                <span>{client}</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
