import { ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { pricingNote, pricingTiers } from "@/content/pricing";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="border-y border-ink-900/10 bg-cream-100 py-20 sm:py-28"
      aria-label="Pricing"
    >
      <div className="site-container">
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title={
            <>
              Know your investment{" "}
              <span className="italic text-brand-600">before we shake hands.</span>
            </>
          }
          description={pricingNote}
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-8",
                  tier.highlighted
                    ? "border-2 border-brand-500 bg-ink-950 text-cream shadow-lift lg:-my-4 lg:py-12"
                    : "border border-ink-900/10 bg-cream-50"
                )}
              >
                {tier.badge && (
                  <p className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink-950 whitespace-nowrap">
                    <Sparkles className="size-3.5" aria-hidden />
                    {tier.badge}
                  </p>
                )}
                <h3
                  className={cn(
                    "font-mono text-xs font-medium uppercase tracking-[0.22em]",
                    tier.highlighted ? "text-brand-400" : "text-brand-700"
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-medium tracking-tight">
                    {tier.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      tier.highlighted ? "text-cream/50" : "text-ink-500"
                    )}
                  >
                    {tier.priceNote}
                  </span>
                </p>
                <p
                  className={cn(
                    "mt-4 text-sm leading-relaxed",
                    tier.highlighted ? "text-cream/70" : "text-ink-600"
                  )}
                >
                  {tier.description}
                </p>

                <ul className="mt-7 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span
                        className={cn(
                          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                          tier.highlighted
                            ? "bg-brand-500 text-ink-950"
                            : "bg-brand-500/15 text-brand-700"
                        )}
                        aria-hidden
                      >
                        <Check className="size-3" strokeWidth={3.5} />
                      </span>
                      <span
                        className={
                          tier.highlighted ? "text-cream/85" : "text-ink-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    "group mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 active:scale-[0.98]",
                    tier.highlighted
                      ? "bg-brand-500 text-ink-950 shadow-[0_10px_30px_-10px_rgb(245_122_27/0.6)] hover:bg-cream hover:text-ink-900"
                      : "bg-ink-900 text-cream hover:bg-brand-500 hover:text-ink-950"
                  )}
                >
                  {tier.cta}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-sm text-ink-500">
            Every package includes conversion copywriting polish, mobile-first
            build, technical SEO, analytics, and a 30–60 day post-launch
            warranty.{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              Need something custom? Let&apos;s talk →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
