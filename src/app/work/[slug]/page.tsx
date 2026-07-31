import { ArrowLeft, ArrowRight, CheckCircle2, Quote } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/work";
import { CtaBand } from "@/components/layout/cta-band";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study not found" };
  return {
    title: `${study.client} case study — ${study.headlineMetric.value} ${study.headlineMetric.label}`,
    description: study.summary,
    openGraph: {
      title: `${study.client} · ${study.title}`,
      description: study.summary,
      images: [{ url: study.image }],
    },
  };
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-600">
      {"// "}
      {children}
    </h2>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      {/* Header */}
      <header className="relative overflow-hidden pb-12 pt-36 sm:pt-44">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div
          className="absolute -top-24 left-1/2 h-80 w-[60rem] max-w-none -translate-x-1/2 rounded-full bg-brand-400/20 blur-[110px]"
          aria-hidden
        />
        <div className="site-container relative">
          <Reveal>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-brand-700"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden />
              All case studies
            </Link>
            <p className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-600">
              {study.client} · {study.industry}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.05] font-medium tracking-tight text-balance text-ink-900 sm:text-6xl">
              {study.title}
            </h1>
          </Reveal>

          {/* Meta */}
          <Reveal delay={0.08}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-ink-900/10 py-6 text-sm sm:grid-cols-4">
              {[
                ["Client", study.client],
                ["Year", study.year],
                ["Timeline", study.duration],
                ["Services", study.services.join(", ")],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs uppercase tracking-wide text-ink-500">{k}</dt>
                  <dd className="mt-1 font-semibold text-ink-900">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      {/* Hero image */}
      <div className="site-container">
        <Reveal>
          <div className="relative aspect-16/9 overflow-hidden rounded-[1.75rem] border border-ink-900/10 shadow-lift">
            <Image
              src={study.image}
              alt={study.imageAlt}
              fill
              priority
              sizes="(min-width: 1200px) 1150px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* Metrics band */}
      <section className="site-container py-16" aria-label="Results at a glance">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {study.metrics.map((m) => (
              <div key={m.label} className="bg-ink-950 p-8 text-center">
                <p className="font-display text-4xl font-medium tracking-tight text-brand-400 sm:text-5xl">
                  {m.value}
                </p>
                <p className="mt-2 text-sm text-cream/60">{m.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Body: challenge → approach → solution → results */}
      <div className="site-container grid gap-16 pb-20 lg:grid-cols-[0.35fr_0.65fr]">
        <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionTitle>The challenge</SectionTitle>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              Where they started
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-ink-600">
            {study.challenge.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionTitle>The approach</SectionTitle>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              What we did about it
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <ul className="space-y-4">
            {study.approach.map((step) => (
              <li
                key={step.slice(0, 40)}
                className="flex items-start gap-3.5 rounded-xl border border-ink-900/10 bg-cream-50 p-4.5 text-base leading-relaxed text-ink-700"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden />
                {step}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionTitle>The solution</SectionTitle>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              What we shipped
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-ink-600">
            {study.solution.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionTitle>The results</SectionTitle>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl">
              What happened next
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="rounded-2xl border border-brand-500/30 bg-brand-500/8 p-8">
            <ul className="space-y-4">
              {study.results.map((r) => (
                <li key={r.slice(0, 40)} className="flex items-start gap-3 text-base font-medium leading-relaxed text-ink-800">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-brand-500" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <figure className="mt-8 rounded-2xl bg-ink-950 p-8 sm:p-10">
            <Quote className="size-8 text-brand-500" fill="currentColor" aria-hidden />
            <blockquote className="mt-5 font-display text-xl leading-relaxed font-medium text-cream/95 sm:text-2xl">
              “{study.quote.text}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-cream/60">
              <span className="font-semibold text-cream">{study.quote.author}</span>
              {" — "}
              {study.quote.role}
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* Next case study */}
      <section className="site-container pb-24">
        <Reveal>
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col justify-between gap-6 rounded-2xl border border-ink-900/10 bg-cream-50 p-8 transition-all hover:border-brand-500/60 hover:shadow-lift sm:flex-row sm:items-center sm:p-10"
          >
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-600">
                Next case study
              </p>
              <p className="mt-3 font-display text-2xl font-medium tracking-tight text-ink-900 sm:text-3xl">
                {next.client}: {next.title}
              </p>
            </div>
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-ink-900 text-cream transition-all group-hover:bg-brand-500 group-hover:text-ink-950">
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </Link>
        </Reveal>
        <div className="mt-10 text-center">
          <ButtonLink href="/contact" withArrow>
            Get results like {study.client.split(" ")[0]}
          </ButtonLink>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
