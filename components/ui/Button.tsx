import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-md transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-gold)]";
    const variants = {
      gold: "bg-[var(--accent-gold)] text-black hover:brightness-110 disabled:opacity-50",
      ghost: "bg-transparent text-[var(--content)] hover:bg-white/5 border border-white/10"
    };
    const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2", lg: "px-6 py-3 text-lg" };
    return <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
  }
);
Button.displayName = "Button";
