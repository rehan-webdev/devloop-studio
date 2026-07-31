import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "dark" | "outline" | "light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-500 text-ink-950 shadow-[0_10px_30px_-10px_rgb(245_122_27/0.6)] hover:bg-ink-900 hover:text-cream hover:shadow-[0_14px_36px_-12px_rgb(32_18_5/0.5)] active:scale-[0.98]",
  dark: "bg-ink-900 text-cream hover:bg-brand-500 hover:text-ink-950 active:scale-[0.98]",
  outline:
    "border border-ink-900/25 bg-transparent text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-cream active:scale-[0.98]",
  light:
    "bg-cream text-ink-900 hover:bg-brand-500 hover:text-ink-950 active:scale-[0.98]",
  ghost: "text-ink-900 underline-offset-4 hover:text-brand-700 hover:underline",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string
) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  withArrow?: boolean;
};

/** Primary CTA link styling — use across the site for consistency. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  withArrow = false,
}: ButtonLinkProps) {
  return (
    <Link href={href as never} className={buttonClasses(variant, size, className)}>
      {children}
      {withArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  withArrow,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClasses(variant, size, className)} {...props}>
      {children}
      {withArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </button>
  );
}
