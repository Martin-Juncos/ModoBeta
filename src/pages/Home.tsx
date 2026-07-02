import modoBetaSoft from "../assets/modobeta_soft.png";
import { CTASection } from "../components/home/CTASection";
import { Hero } from "../components/home/Hero";
import { ProblemsPreview } from "../components/home/ProblemsPreview";
import { ProjectsPreview } from "../components/home/ProjectsPreview";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { WorkProcessPreview } from "../components/home/WorkProcessPreview";
import { ContactSection } from "../components/sections/ContactSection";
import { Button } from "../components/ui/Button";
import { SectionHeader } from "../components/ui/SectionHeader";

export function Home() {
  return (
    <>
      <Hero />

      <section className="section about-preview">
        <div className="container split-layout">
          <SectionHeader
            eyebrow="Qué es ModoBeta"
            title="Tecnología cercana, funcional y pensada para resolver problemas reales."
            description="ModoBeta es una empresa de desarrollo de software a medida que acompaña a instituciones, centros interdisciplinarios y profesionales en la modernización de sus procesos de gestión, comunicación y organización."
          >
            <Button to="/nosotros" variant="secondary">
              Conocer más
            </Button>
          </SectionHeader>
          <div className="text-panel">
            <img
              className="about-preview__image"
              src={modoBetaSoft}
              alt="Pieza visual de ModoBeta sobre optimización y mejora continua"
            />
            <p>
              Creamos herramientas digitales simples, funcionales y adaptadas a cada
              realidad de trabajo. Nuestro objetivo no es imponer una plataforma
              genérica, sino construir soluciones que respondan a necesidades concretas.
            </p>
            <p>
              Diseñamos sistemas, sitios y procesos digitales para equipos que necesitan
              ordenar información sensible, mejorar la comunicación y ganar tiempo.
            </p>
          </div>
        </div>
      </section>

      <ProblemsPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <WorkProcessPreview />
      <CTASection />
      <ContactSection compact />
    </>
  );
}
