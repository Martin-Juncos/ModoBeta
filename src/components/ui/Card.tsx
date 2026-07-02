import type { ReactNode } from "react";

type CardProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function Card({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: CardProps) {
  return (
    <article className={`card ${className}`.trim()}>
      {eyebrow ? <span className="card__eyebrow">{eyebrow}</span> : null}
      {title ? <h3>{title}</h3> : null}
      {description ? <p>{description}</p> : null}
      {children}
    </article>
  );
}
