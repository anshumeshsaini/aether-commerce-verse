
import * as React from "react";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "new" | "sale" | "exclusive";
}

export function FloatingBadge({
  children,
  className,
  variant = "default",
  ...props
}: FloatingBadgeProps) {
  const variantStyles = {
    default: "bg-primary text-primary-foreground",
    new: "bg-teal-500 text-white",
    sale: "bg-rose-500 text-white",
    exclusive: "bg-violet-600 text-white",
  };

  return (
    <div
      className={cn(
        "absolute top-3 left-3 z-10 px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md shadow-md animate-pulse-glow",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
