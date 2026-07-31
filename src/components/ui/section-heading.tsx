import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

/** Eyebrow + display heading + supporting copy, with scroll reveal. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-600">
        <span aria-hidden>{"// "}</span>
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl",
          dark ? "text-cream" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-cream/70" : "text-ink-600"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
