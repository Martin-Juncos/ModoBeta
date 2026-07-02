import { services } from "../../data/services";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";

type ServicesGridProps = {
  preview?: boolean;
  showImpacts?: boolean;
};

export function ServicesGrid({
  preview = false,
  showImpacts = false,
}: ServicesGridProps) {
  const visibleServices = preview ? services.slice(0, 4) : services;

  return (
    <section className="section section--muted">
      <div className="container">
        <SectionHeader
          eyebrow="Soluciones"
          title="Soluciones digitales a medida"
          description="Diseñamos herramientas claras, profesionales y sostenibles para ordenar procesos cotidianos."
        >
          {preview ? (
            <Button to="/soluciones" variant="secondary">
              Ver todas las soluciones
            </Button>
          ) : null}
        </SectionHeader>
        <div className="grid grid--3">
          {visibleServices.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
            >
              {showImpacts ? (
                <p className="card__impact">{service.impact}</p>
              ) : null}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
