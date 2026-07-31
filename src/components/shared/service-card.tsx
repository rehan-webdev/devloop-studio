import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/content/services";
import { IconByName } from "@/components/ui/icon-map";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col rounded-2xl border border-ink-900/10 bg-cream-50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/60 hover:shadow-lift"
    >
      <div className="flex items-start justify-between">
        <div className="grid size-12 place-items-center rounded-xl bg-brand-500/12 text-brand-700 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-ink-950">
          <IconByName name={service.icon} className="size-6" />
        </div>
        <span className="font-mono text-xs text-ink-300" aria-hidden>
          /{String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-ink-900">
        {service.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
        {service.summary}
      </p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-ink-900 transition-colors group-hover:text-brand-700">
        Explore service
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}
