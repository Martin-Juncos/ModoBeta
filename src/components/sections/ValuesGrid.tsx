import {
  Ear,
  HeartHandshake,
  Lightbulb,
  Puzzle,
  Target,
  Workflow,
} from "lucide-react";
import { values } from "../../data/values";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";

const valueIcons = [Ear, Target, Lightbulb, Workflow, HeartHandshake, Puzzle];

export function ValuesGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Valores" title="Lo que guía cada desarrollo" />
        <div className="grid grid--3">
          {values.map((value, index) => (
            <Card
              key={value.title}
              title={value.title}
              description={value.description}
              icon={valueIcons[index % valueIcons.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
