import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHeader } from "@/components/layout/page-header";
import { IconByName } from "@/components/ui/icon-map";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Services — Design, development, CRO, SEO & more",
  description:
    "Conversion-focused web design, Next.js development, CRO, SEO, branding and care plans. One senior team, fixed pricing, 3-week delivery guarantee.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Services" }]}
        eyebrow="Services"
        title={
          <>
            Everything your website needs to{" "}
            <span className="italic text-brand-600">outperform.</span>
          </>
        }
        description="Strategy, copy, design, code, and growth — from one senior team that ships fast and measures everything. Pick a lane, or let us drive the whole thing."
      />

      <section className="site-container space-y-6 pb-24">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={0.05}>
            <article className="group overflow-hidden rounded-2xl border border-ink-900/10 bg-cream-50 transition-all duration-300 hover:border-brand-500/60 hover:shadow-lift">
              <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr_auto] lg:items-center">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="grid size-13 place-items-center rounded-xl bg-brand-500/12 text-brand-700 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-ink-950">
                      <IconByName name={service.icon} className="size-6" />
                    </span>
                    <div>
                      <p className="font-mono text-xs text-ink-400">
                        /{String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="font-display text-2xl font-medium tracking-tight text-ink-900 sm:text-3xl">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="mt-5 font-medium text-brand-700">
                    {service.tagline}
                  </p>
                  <p className="mt-2 max-w-xl leading-relaxed text-ink-600">
                    {service.summary}
                  </p>
                </div>

                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                  {service.deliverables.slice(0, 4).map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-600" strokeWidth={3} aria-hidden />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-4 lg:items-end">
                  <p className="text-sm font-medium text-ink-500">
                    {service.priceNote}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group/btn inline-flex h-12 items-center gap-2 rounded-full bg-ink-900 px-6 text-sm font-semibold text-cream transition-all hover:bg-brand-500 hover:text-ink-950"
                  >
                    Explore {service.title}
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" aria-hidden />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <CtaBand
        title="Not sure which service you need?"
        description="Book a free call — we'll audit your current site live and tell you honestly which lever will move your numbers fastest. Sometimes it's a full rebuild. Sometimes it's an afternoon of fixes."
      />
    </>
  );
}
