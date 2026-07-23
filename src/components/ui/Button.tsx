import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  newTab?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  "aria-label"?: string;
};

export function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  newTab = false,
  type = "button",
  onClick,
  icon: Icon,
  iconPosition = "right",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const buttonClassName = `button button--${variant} ${className}`.trim();
  const content = (
    <>
      {Icon && iconPosition === "left" ? (
        <Icon className="button__icon" aria-hidden="true" strokeWidth={2} />
      ) : null}
      <span className="button__label">{children}</span>
      {Icon && iconPosition === "right" ? (
        <Icon className="button__icon" aria-hidden="true" strokeWidth={2} />
      ) : null}
    </>
  );

  if (to) {
    return (
      <Link className={buttonClassName} to={to} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={buttonClassName}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={buttonClassName}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
