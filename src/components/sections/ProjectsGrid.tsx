import { ExternalLink, Folder, MessageCircle } from "lucide-react";
import { projects } from "../../data/projects";
import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectMediaCarousel } from "./ProjectMediaCarousel";

type ProjectsGridProps = {
  preview?: boolean;
};

export function ProjectsGrid({ preview = false }: ProjectsGridProps) {
  const visibleProjects = preview ? projects.slice(0, 2) : projects;

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Proyectos que ya acompañamos"
          description="Cada proyecto nos permitió comprender necesidades reales y convertirlas en soluciones digitales concretas."
        >
          {preview ? (
            <Button to="/proyectos" variant="secondary" icon={Folder}>
              Ver proyectos
            </Button>
          ) : null}
        </SectionHeader>
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__visual">
                {project.images.length ? (
                  <ProjectMediaCarousel images={project.images} title={project.title} />
                ) : project.image ? (
                  <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
                ) : (
                  <div aria-hidden="true">
                    {/* Cuando haya capturas reales en src/assets, reemplazar este placeholder por una imagen importada. */}
                    <span>{project.title}</span>
                    <div className="project-card__lines">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                )}
              </div>
              <div className="project-card__content">
                <h3>{project.title}</h3>
                <p>{preview ? project.description : project.longDescription}</p>
                <ul className="tag-list" aria-label={`Etiquetas de ${project.title}`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {project.external ? (
                  <Button href={project.url} newTab variant="secondary" icon={ExternalLink}>
                    Ver proyecto
                  </Button>
                ) : (
                  <Button to={project.url} variant="secondary" icon={MessageCircle}>
                    Consultar
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
