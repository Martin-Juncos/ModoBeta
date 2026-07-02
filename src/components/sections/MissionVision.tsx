import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";

export function MissionVision() {
  return (
    <section className="section section--muted">
      <div className="container">
        <SectionHeader eyebrow="Dirección" title="Misión y visión" />
        <div className="grid grid--2">
          <Card
            title="Misión"
            description="Desarrollar soluciones digitales a medida que ayuden a instituciones, centros interdisciplinarios y profesionales a organizar mejor sus procesos, optimizar su tiempo y fortalecer la comunicación con sus equipos, usuarios y comunidades."
          />
          <Card
            title="Visión"
            description="Convertirnos en una empresa referente en el desarrollo de soluciones digitales para instituciones educativas, centros interdisciplinarios y profesionales, destacándonos por crear tecnología cercana, funcional y orientada a mejorar la gestión cotidiana."
          />
        </div>
      </div>
    </section>
  );
}
