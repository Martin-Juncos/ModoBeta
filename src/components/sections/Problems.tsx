import {
  Clock,
  FileWarning,
  MessageCircle,
  MonitorCog,
  Search,
  Workflow,
} from "lucide-react";
import { problems } from "../../data/problems";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";

type ProblemsProps = {
  preview?: boolean;
};

const problemIcons = [
  FileWarning,
  Clock,
  MessageCircle,
  Workflow,
  Search,
  MonitorCog,
];

export function Problems({ preview = false }: ProblemsProps) {
  const visibleProblems = preview ? problems.slice(0, 4) : problems;
  const gridClassName = preview ? "grid grid--2" : "grid grid--3";

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Problemas reales"
          title="Problemas que ayudamos a solucionar"
          description="Muchas instituciones y profesionales trabajan todos los días con información valiosa, pero no siempre cuentan con herramientas adecuadas para gestionarla."
        />
        <div className={gridClassName}>
          {visibleProblems.map((problem, index) => (
            <Card
              key={problem.title}
              title={problem.title}
              description={problem.description}
              icon={problemIcons[index % problemIcons.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
