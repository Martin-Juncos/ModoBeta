import type { ReactNode } from "react";
import { ScrambleTitle } from "./ScrambleTitle";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  children,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`section-header section-header--${align}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>
        <ScrambleTitle text={title} />
      </h2>
      {description ? <p>{description}</p> : null}
      {children ? <div className="section-header__actions">{children}</div> : null}
    </div>
  );
}
