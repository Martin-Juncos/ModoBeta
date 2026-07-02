import heroLayer from "../../assets/hero.png";
import { contactInfo } from "../../data/contact";
import { Button } from "../ui/Button";

const systemLabels = [
  "Turnos",
  "Informes",
  "Agenda",
  "Usuarios",
  "Gestión",
  "Automatización",
];

export function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-section__grid">
        <div className="hero-section__content">
          <span className="eyebrow">Software pensado para las personas que trabajan con personas</span>
          <h1>Software a medida para instituciones que trabajan con personas</h1>
          <p>
            En ModoBeta desarrollamos soluciones digitales para centros educativos,
            espacios interdisciplinarios y profesionales que necesitan ordenar
            procesos, mejorar su comunicación y modernizar su gestión.
          </p>
          <div className="hero-section__actions">
            <Button href={contactInfo.whatsappLink} newTab>
              Hablemos de tu proyecto
            </Button>
            <Button to="/soluciones" variant="secondary">
              Ver soluciones
            </Button>
          </div>
        </div>

        <div className="hero-visual" aria-label="Panel visual de gestión digital">
          <img className="hero-visual__layer" src={heroLayer} alt="" />
          <div className="dashboard-mockup">
            <div className="dashboard-mockup__bar">
              <span />
              <span />
              <span />
            </div>
            <div className="dashboard-mockup__header">
              <strong>Panel institucional</strong>
              <small>ModoBeta OS</small>
            </div>
            <div className="dashboard-mockup__stats">
              <div>
                <span>Agenda</span>
                <strong>24</strong>
              </div>
              <div>
                <span>Informes</span>
                <strong>18</strong>
              </div>
              <div>
                <span>Usuarios</span>
                <strong>126</strong>
              </div>
            </div>
            <div className="dashboard-mockup__flow">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="floating-tags" aria-hidden="true">
            {systemLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
