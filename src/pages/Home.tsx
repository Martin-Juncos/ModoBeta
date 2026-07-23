import {
  ArrowRight,
  ChartNoAxesCombined,
  MessageCircle,
  Sparkles,
  Workflow,
} from "lucide-react";
import { CTASection } from "../components/home/CTASection";
import { Hero } from "../components/home/Hero";
import { ProblemsPreview } from "../components/home/ProblemsPreview";
import { ProjectsPreview } from "../components/home/ProjectsPreview";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { WorkProcessPreview } from "../components/home/WorkProcessPreview";
import { Seo } from "../components/seo/Seo";
import { ContactSection } from "../components/sections/ContactSection";
import { Button } from "../components/ui/Button";
import { SectionHeader } from "../components/ui/SectionHeader";
import { pageSeo } from "../data/site";

export function Home() {
  return (
    <>
      <Seo {...pageSeo.home} />
      <Hero />

      <section className="section about-preview">
        <div className="container split-layout">
          <SectionHeader
            eyebrow="Qué es ModoBeta"
            title="Tecnología cercana, funcional y pensada para resolver problemas reales."
            description="ModoBeta es una empresa de desarrollo de software a medida que acompaña a instituciones, centros interdisciplinarios y profesionales en la modernización de sus procesos de gestión, comunicación y organización."
          >
            <Button to="/nosotros" variant="secondary" icon={ArrowRight}>
              Conocer más
            </Button>
          </SectionHeader>
          <div className="text-panel">
            <div className="about-preview__visual" aria-hidden="true">
              <div className="about-preview__visual-header">
                <span className="about-preview__dot about-preview__dot--active" />
                <span className="about-preview__dot" />
                <span className="about-preview__dot" />
                <strong>ModoBeta Sync</strong>
              </div>
              <div className="about-preview__visual-grid">
                <div className="about-preview__metric about-preview__metric--organization">
                  <span>
                    <Workflow className="about-preview__metric-icon" strokeWidth={1.9} />
                    Organización
                  </span>
                  <strong>+42%</strong>
                  <i />
                </div>
                <div className="about-preview__metric about-preview__metric--communication">
                  <span>
                    <MessageCircle className="about-preview__metric-icon" strokeWidth={1.9} />
                    Comunicación
                  </span>
                  <strong>24/7</strong>
                  <i />
                </div>
              </div>
              <div className="about-preview__insight-strip">
                <span>
                  <ChartNoAxesCombined strokeWidth={1.9} />
                  Gestión clara
                </span>
                <span>
                  <Sparkles strokeWidth={1.9} />
                  Mejora continua
                </span>
              </div>
              <span className="about-preview__node about-preview__node--one" />
              <span className="about-preview__node about-preview__node--two" />
              <span className="about-preview__node about-preview__node--three" />
              <div className="about-preview__visual-line">
                <span />
              </div>
            </div>
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
