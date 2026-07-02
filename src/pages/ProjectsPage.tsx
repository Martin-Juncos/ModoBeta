import { CTASection } from "../components/home/CTASection";
import { ProjectsGrid } from "../components/sections/ProjectsGrid";
import { Button } from "../components/ui/Button";

export function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__content">
          <span className="eyebrow">Proyectos realizados</span>
          <h1>Proyectos realizados</h1>
          <p>
            Algunos desarrollos que reflejan nuestra forma de trabajar: escuchar una
            necesidad concreta y convertirla en una solución digital funcional.
          </p>
        </div>
      </section>

      <ProjectsGrid />

      <section className="section project-cta">
        <div className="container project-cta__inner">
          <h2>¿Querés que tu proyecto sea el próximo?</h2>
          <Button to="/contacto">Hablemos</Button>
        </div>
      </section>

      <CTASection />
    </>
  );
}
