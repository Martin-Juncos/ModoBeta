import { CalendarDays, Cog, FileText, MessageSquare, PanelTop } from "lucide-react";
import { contactInfo } from "../../data/contact";
import { Button } from "../ui/Button";

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
            <Button href={contactInfo.whatsappLink} newTab icon={MessageSquare} iconPosition="left">
              Hablemos de tu proyecto
            </Button>
            <Button to="/soluciones" variant="secondary" icon={PanelTop}>
              Ver soluciones
            </Button>
          </div>
        </div>

        <div className="hero-visual" aria-label="Panel visual de gestión digital">
          <div className="dashboard-mockup" aria-hidden="true">
            <div className="dashboard-mockup__bar">
              <span />
              <span />
              <span />
            </div>
            <div className="dashboard-mockup__header">
              <strong>Panel institucional</strong>
              <small>ModoBeta OS</small>
            </div>

            <div className="dashboard-modules">
              <div className="dashboard-module dashboard-module--agenda">
                <span>
                  <CalendarDays className="dashboard-module__icon" aria-hidden="true" strokeWidth={2} />
                  Agenda
                </span>
                <strong>24</strong>
              </div>
              <div className="dashboard-module dashboard-module--informes">
                <span>
                  <FileText className="dashboard-module__icon" aria-hidden="true" strokeWidth={2} />
                  Informes
                </span>
                <strong>18</strong>
              </div>
              <div className="dashboard-module dashboard-module--mensajeria">
                <span>
                  <MessageSquare className="dashboard-module__icon" aria-hidden="true" strokeWidth={2} />
                  Mensajería
                </span>
                <strong>36</strong>
              </div>
              <div className="dashboard-module dashboard-module--automatizacion">
                <span>
                  <Cog className="dashboard-module__icon" aria-hidden="true" strokeWidth={2} />
                  Automatización
                </span>
                <strong>12</strong>
              </div>
            </div>

            <div className="dashboard-stage">
              <div className="dashboard-scene dashboard-scene--agenda">
                <div className="scene-title">
                  <CalendarDays className="scene-title__icon" aria-hidden="true" strokeWidth={2} />
                  Agenda
                </div>
                <div className="calendar-card">
                  <div className="calendar-card__month">Julio</div>
                  <div className="calendar-card__grid">
                    {Array.from({ length: 14 }, (_, index) => (
                      <span key={index} className={index === 5 ? "is-selected" : ""} />
                    ))}
                  </div>
                </div>
                <div className="schedule-list">
                  <span>09:00 Evaluación</span>
                  <span>11:30 Informe</span>
                  <span>15:00 Seguimiento</span>
                </div>
              </div>

              <div className="dashboard-scene dashboard-scene--informes">
                <div className="scene-title">
                  <FileText className="scene-title__icon" aria-hidden="true" strokeWidth={2} />
                  Informes
                </div>
                <div className="report-flow">
                  <div className="report-page report-page--source">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="report-arrow" />
                  <div className="report-page report-page--target">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>

              <div className="dashboard-scene dashboard-scene--mensajeria">
                <div className="scene-title">
                  <MessageSquare className="scene-title__icon" aria-hidden="true" strokeWidth={2} />
                  Mensajería
                </div>
                <div className="message-thread">
                  <span className="message-bubble message-bubble--in">¿Confirmamos el turno?</span>
                  <span className="message-bubble message-bubble--out">Sí, queda agendado.</span>
                  <span className="message-bubble message-bubble--in">Perfecto, gracias.</span>
                </div>
              </div>

              <div className="dashboard-scene dashboard-scene--automatizacion">
                <div className="scene-title">
                  <Cog className="scene-title__icon" aria-hidden="true" strokeWidth={2} />
                  Automatización
                </div>
                <div className="automation-flow">
                  <div className="gear-shape">
                    <Cog className="gear-shape__icon" aria-hidden="true" strokeWidth={1.8} />
                  </div>
                  <div className="automation-line automation-line--one" />
                  <div className="automation-line automation-line--two" />
                  <span className="automation-block automation-block--one">Ingreso</span>
                  <span className="automation-block automation-block--two">Proceso</span>
                  <span className="automation-block automation-block--three">Salida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
