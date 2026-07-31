import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHeader } from "@/components/layout/page-header";
import { IconByName } from "@/components/ui/icon-map";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { ButtonLink } from "@/components/ui/button";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} — ${service.tagline}`,
    description: service.summary,
    openGraph: {
      title: `${service.title} · ${site.name}`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Services", href: "/services" }, { label: service.title }]}
        eyebrow={service.title}
        title={
          <>
            {service.tagline.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="italic text-brand-600">
              {service.tagline.split(" ").slice(-2).join(" ")}
            </span>
          </>
        }
        description={service.summary}
      >
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink href="/contact" size="lg" withArrow>
            Start a {service.title.toLowerCase()} project
          </ButtonLink>
          <p className="text-sm font-medium text-ink-500">{service.priceNote}</p>
        </div>
      </PageHeader>

      {/* Overview */}
      <section className="site-container grid gap-12 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink-900">
            Why it matters
          </h2>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-600">
            {service.overview.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-ink-900/10 bg-cream-50 p-8 shadow-soft">
            <h3 className="flex items-center gap-3 font-display text-2xl font-medium tracking-tight text-ink-900">
              <span className="grid size-10 place-items-center rounded-lg bg-brand-500/12 text-brand-700">
                <IconByName name={service.icon} className="size-5" />
              </span>
              What&apos;s included
            </h3>
            <ul className="mt-6 space-y-3.5">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand-700" aria-hidden>
                    <Check className="size-3" strokeWidth={3.5} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="border-y border-ink-900/10 bg-cream-100 py-20">
        <div className="site-container">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              How a {service.title.toLowerCase()} engagement runs
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 0.08}>
                  <p className="font-display text-5xl font-medium text-brand-500/90">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes */}
      <section className="site-container py-20">
        <Reveal>
          <h2 className="max-w-xl font-display text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
            Numbers we hold ourselves to
          </h2>
        </Reveal>
        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          {service.outcomes.map((o, i) => {
            const numeric = o.value.match(/[\d.]+/)?.[0];
            return (
              <Reveal key={o.label} delay={i * 0.08}>
                <div className="rounded-2xl border border-ink-900/10 bg-cream-50 p-8 text-center shadow-soft">
                  <dd className="font-display text-5xl font-medium tracking-tight text-brand-600">
                    {numeric ? (
                      <Counter
                        value={parseFloat(numeric)}
                        prefix={o.value.slice(0, o.value.indexOf(numeric))}
                        suffix={o.value.slice(o.value.indexOf(numeric) + numeric.length)}
                      />
                    ) : (
                      o.value
                    )}
                  </dd>
                  <dt className="mt-3 text-sm leading-relaxed text-ink-600">{o.label}</dt>
                </div>
              </Reveal>
            );
          })}
        </dl>
      </section>

      {/* Other services */}
      <section className="site-container pb-24">
        <Reveal>
          <h2 className="font-display text-2xl font-medium tracking-tight text-ink-900">
            Pairs well with
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {others.map((s) => (
            <Reveal key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between gap-4 rounded-xl border border-ink-900/10 bg-cream-50 p-5 transition-all hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-soft"
              >
                <span className="flex items-center gap-3 font-semibold text-ink-900">
                  <IconByName name={s.icon} className="size-5 text-brand-600" />
                  {s.title}
                </span>
                <ArrowRight className="size-4 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-brand-600" aria-hidden />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
