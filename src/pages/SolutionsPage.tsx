import { CTASection } from "../components/home/CTASection";
import { ClientsGrid } from "../components/sections/ClientsGrid";
import { Problems } from "../components/sections/Problems";
import { ServicesGrid } from "../components/sections/ServicesGrid";

export function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__content">
          <span className="eyebrow">Soluciones digitales</span>
          <h1>Soluciones digitales para ordenar y potenciar tu institución</h1>
          <p>
            Desarrollamos sitios, sistemas y plataformas a medida para transformar
            procesos dispersos en herramientas claras, profesionales y escalables.
          </p>
        </div>
      </section>

      <ServicesGrid showImpacts />
      <Problems />
      <ClientsGrid />
      <CTASection />
    </>
  );
}
