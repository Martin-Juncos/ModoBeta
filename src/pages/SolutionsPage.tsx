import { CTASection } from "../components/home/CTASection";
import { Seo } from "../components/seo/Seo";
import { ClientsGrid } from "../components/sections/ClientsGrid";
import { Problems } from "../components/sections/Problems";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { ScrambleTitle } from "../components/ui/ScrambleTitle";
import { pageSeo } from "../data/site";

export function SolutionsPage() {
  return (
    <>
      <Seo {...pageSeo.solutions} />
      <section className="page-hero">
        <div className="container page-hero__content">
          <span className="eyebrow">Soluciones digitales</span>
          <h1>
            <ScrambleTitle text="Soluciones digitales para ordenar y potenciar tu institución" />
          </h1>
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
