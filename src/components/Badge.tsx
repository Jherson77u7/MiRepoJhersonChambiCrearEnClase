
import type { ReactNode } from "react";

interface BadgeProps {
  variant: "beginner" | "intermediate" | "advanced";
  children: ReactNode;
}

function Badge({ variant, children }: BadgeProps) {
  return (
    <span className={`badge ${variant}`}>
      {children}
    </span>
  );
}

export default Badge;
