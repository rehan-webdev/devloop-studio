import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

/** Hero band for inner pages: breadcrumb, big serif title, description. */
export function PageHeader({
  breadcrumb,
  eyebrow,
  title,
  description,
  children,
}: {
  breadcrumb: { label: string; href?: string }[];
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 h-80 w-[60rem] max-w-none -translate-x-1/2 rounded-full bg-brand-400/20 blur-[110px]"
        aria-hidden
      />
      <div className="site-container relative">
        <Reveal>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-ink-500">
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="size-3.5" aria-hidden />}
                  {crumb.href ? (
                    <Link
                      href={crumb.href as never}
                      className="transition-colors hover:text-brand-700"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-brand-700">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-600">
            {"// "}
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] font-medium tracking-tight text-balance text-ink-900 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </header>
  );
}
