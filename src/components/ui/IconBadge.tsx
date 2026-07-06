import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  className?: string;
};

export function IconBadge({ icon: Icon, className = "" }: IconBadgeProps) {
  return (
    <span className={`icon-badge ${className}`.trim()} aria-hidden="true">
      <Icon className="icon" strokeWidth={1.9} />
    </span>
  );
}
