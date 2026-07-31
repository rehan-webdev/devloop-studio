import { CalendarClock, ShieldCheck, Timer } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";

/** Final conversion band reused across pages. */
export function CtaBand({
  title = "Let's build a website that pays for itself",
  description = "Book a free 30-minute discovery call. We'll audit your current site live, sketch a plan, and give you a fixed quote — whether or not you hire us.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="site-container pb-24 pt-4 sm:pb-32" aria-label="Get started">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="bg-grid-light absolute inset-0 opacity-50" aria-hidden />
          <div
            className="absolute -left-24 -top-24 size-96 rounded-full bg-brand-600/25 blur-[120px]"
            aria-hidden
          />
          <div
            className="absolute -bottom-32 -right-16 size-96 rounded-full bg-brand-500/20 blur-[120px]"
            aria-hidden
          />

          <div className="relative mx-auto max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-400">
              {"// "}Ready when you are
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-tight text-balance text-cream sm:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
              {description}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Magnetic>
                <ButtonLink href="/contact" size="lg" withArrow>
                  Book a free call
                </ButtonLink>
              </Magnetic>
              <ButtonLink href="/work" variant="outline" size="lg" className="border-cream/30 text-cream hover:border-cream hover:bg-cream hover:text-ink-900">
                See our work
              </ButtonLink>
            </div>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-cream/60">
              {[
                { icon: CalendarClock, label: "Replies within 24h" },
                { icon: Timer, label: "3-week delivery guarantee" },
                { icon: ShieldCheck, label: "Fixed price, no surprises" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="size-4 text-brand-400" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
