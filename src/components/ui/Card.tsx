import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { IconBadge } from "./IconBadge";

type CardProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  icon?: LucideIcon;
};

export function Card({
  eyebrow,
  title,
  description,
  children,
  className = "",
  icon,
}: CardProps) {
  return (
    <article className={`card ${className}`.trim()}>
      {icon ? <IconBadge icon={icon} className="card__icon" /> : null}
      {eyebrow ? <span className="card__eyebrow">{eyebrow}</span> : null}
      {title ? <h3>{title}</h3> : null}
      {description ? <p>{description}</p> : null}
      {children}
    </article>
  );
}
