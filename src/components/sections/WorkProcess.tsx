import { Cog, Ear, HeartHandshake, Lightbulb, Search } from "lucide-react";
import { processSteps } from "../../data/processSteps";
import { SectionHeader } from "../ui/SectionHeader";

type WorkProcessProps = {
  preview?: boolean;
};

const processIcons = [Ear, Search, Lightbulb, Cog, HeartHandshake];

export function WorkProcess({ preview = false }: WorkProcessProps) {
  const visibleSteps = preview ? processSteps.slice(0, 4) : processSteps;

  return (
    <section className="section section--muted">
      <div className="container">
        <SectionHeader
          eyebrow="Proceso"
          title="Cómo trabajamos"
          description="Cada solución parte de entender la realidad de trabajo antes de escribir una línea de código."
        />
        <div className="process-list">
          {visibleSteps.map((item, index) => {
            const StepIcon = processIcons[index % processIcons.length];

            return (
              <article className="process-step" key={item.step}>
                <span className="process-step__marker">
                  <StepIcon className="process-step__icon" aria-hidden="true" strokeWidth={2} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
