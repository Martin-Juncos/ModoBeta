import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";

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
            <Button to="/proyectos" variant="secondary">
              Ver proyectos
            </Button>
          ) : null}
        </SectionHeader>
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card__visual">
                {project.image ? (
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
                  <Button href={project.url} newTab variant="secondary">
                    Ver proyecto
                  </Button>
                ) : (
                  <Link className="button button--secondary" to={project.url}>
                    Consultar
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
