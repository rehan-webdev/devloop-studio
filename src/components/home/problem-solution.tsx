import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const pains = [
  {
    title: "Traffic comes in — leads don't",
    text: "You're paying for clicks and ranking for keywords, but visitors bounce before they ever raise a hand.",
  },
  {
    title: "The site is embarrassing to share",
    text: "You apologize for it on sales calls. It undersells the quality of your actual work.",
  },
  {
    title: "It's held together with duct tape",
    text: "Eleven plugins, a page builder nobody understands, and a 6-second load time on mobile.",
  },
  {
    title: "Agencies move at glacial pace",
    text: "Four-month timelines, hourly billing, and a final invoice that looks nothing like the quote.",
  },
];

const gains = [
  {
    title: "A site engineered around one job: converting",
    text: "Every headline, section and button exists to move a visitor one step closer to becoming a customer.",
  },
  {
    title: "Fixed price, 3-week delivery — guaranteed",
    text: "The quote is the invoice. The launch date is in writing. If we're late, we work free until it's live.",
  },
  {
    title: "Strategy, copy, design, code & SEO in one team",
    text: "No hand-offs lost in translation. The people who plan your site are the people who build it.",
  },
  {
    title: "You own everything, forever",
    text: "Your repo, your CMS, your analytics. No lock-in, no monthly ransom — just an asset you control.",
  },
];

export function ProblemSolution() {
  return (
    <section className="site-container py-20 sm:py-28" aria-label="Why DevLoop">
      <SectionHeading
        align="center"
        eyebrow="The problem we solve"
        title={
          <>
            Most websites are expensive brochures.{" "}
            <span className="italic text-brand-600">Yours won&apos;t be.</span>
          </>
        }
        description="A website should be your hardest-working employee — qualifying leads, answering objections, and closing business around the clock. Here's the shift we engineer."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-ink-900/10 bg-sand-200/60 p-8 sm:p-10">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
              Sound familiar?
            </p>
            <ul className="mt-7 space-y-7">
              {pains.map((pain) => (
                <li key={pain.title} className="flex gap-4">
                  <span
                    className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-ink-900/8 text-ink-500"
                    aria-hidden
                  >
                    <X className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight text-ink-900">
                      {pain.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {pain.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative h-full overflow-hidden rounded-2xl bg-ink-950 p-8 sm:p-10">
            <div
              className="absolute -right-20 -top-20 size-64 rounded-full bg-brand-600/25 blur-[90px]"
              aria-hidden
            />
            <p className="relative font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-400">
              The DevLoop way
            </p>
            <ul className="relative mt-7 space-y-7">
              {gains.map((gain) => (
                <li key={gain.title} className="flex gap-4">
                  <span
                    className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand-500 text-ink-950"
                    aria-hidden
                  >
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <div>
                    <h3
                      className={cn("font-semibold tracking-tight text-cream")}
                    >
                      {gain.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-cream/60">
                      {gain.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
