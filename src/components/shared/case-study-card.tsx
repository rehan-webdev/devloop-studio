import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/work";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-cream-50 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/60 hover:shadow-lift"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-sand-200">
        <Image
          src={study.image}
          alt={study.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute left-4 top-4 rounded-full bg-ink-950/85 px-3.5 py-1.5 text-sm font-semibold text-brand-300 backdrop-blur">
          {study.headlineMetric.value}
          <span className="ml-1.5 font-normal text-cream/70">
            {study.headlineMetric.label}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand-700">
            {study.client}
          </p>
          <p className="text-xs text-ink-500">{study.category}</p>
        </div>
        <h3 className="mt-3 font-display text-xl leading-snug font-medium tracking-tight text-ink-900">
          {study.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-600">
          {study.summary}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-ink-900 transition-colors group-hover:text-brand-700">
          Read case study
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
