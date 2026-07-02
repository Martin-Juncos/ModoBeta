import type { ButtonHTMLAttributes, ReactNode } from "react";
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
  "aria-label": ariaLabel,
}: ButtonProps) {
  const buttonClassName = `button button--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={buttonClassName} to={to} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={buttonClassName}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer" : undefined}
        aria-label={ariaLabel}
      >
        {children}
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
      {children}
    </button>
  );
}
