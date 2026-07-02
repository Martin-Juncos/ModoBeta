import { values } from "../../data/values";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";

export function ValuesGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Valores" title="Lo que guía cada desarrollo" />
        <div className="grid grid--3">
          {values.map((value) => (
            <Card
              key={value.title}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
