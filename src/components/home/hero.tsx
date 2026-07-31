import { CalendarCheck2, Gauge, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import { clientLogos, rotatingWords, site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { WordRotate } from "@/components/ui/word-rotate";

const trustAvatars = [
  { initials: "ML", className: "from-orange-400 to-amber-500" },
  { initials: "DR", className: "from-amber-400 to-yellow-500" },
  { initials: "PN", className: "from-orange-500 to-rose-400" },
  { initials: "SK", className: "from-amber-500 to-orange-400" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40" aria-label="Intro">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-24 left-1/2 h-96 w-[70rem] max-w-none -translate-x-1/2 rounded-full bg-brand-400/25 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -right-40 top-1/3 size-112 rounded-full bg-brand-300/30 blur-[100px]"
        aria-hidden
      />

      <div className="site-container relative">
        <div className="grid items-center gap-14 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-ink-900/10 bg-cream-50/80 px-4 py-2 text-xs font-medium text-ink-700 shadow-soft backdrop-blur">
                <span className="relative flex size-2" aria-hidden>
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-500 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand-600" />
                </span>
                Now booking projects — 2 build slots left this quarter
              </p>

              <h1 className="mt-7 font-display text-[2.75rem] leading-[1.02] font-medium tracking-tight text-balance text-ink-900 sm:text-6xl lg:text-7xl">
                Websites that turn{" "}
                <WordRotate words={rotatingWords} /> into customers.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 sm:text-xl">
                {site.name} is a conversion-focused design & development studio.
                We craft lightning-fast websites for SaaS, e-commerce and service
                brands — delivered in 3 weeks, with a fixed price and a guarantee.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Magnetic>
                  <ButtonLink href="/contact" size="lg" withArrow>
                    Book a free call
                  </ButtonLink>
                </Magnetic>
                <ButtonLink href="/work" variant="outline" size="lg">
                  View our work
                </ButtonLink>
              </div>

              <div className="mt-9 flex items-center gap-4">
                <div className="flex -space-x-2.5" aria-hidden>
                  {trustAvatars.map((a) => (
                    <span
                      key={a.initials}
                      className={`grid size-10 place-items-center rounded-full border-2 border-cream bg-linear-to-br text-xs font-bold text-ink-950 ${a.className}`}
                    >
                      {a.initials}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="flex items-center gap-1 text-sm font-semibold text-ink-900">
                    <span className="flex text-brand-500" aria-hidden>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-current" />
                      ))}
                    </span>
                    4.9/5 average rating
                  </p>
                  <p className="text-sm text-ink-500">
                    Trusted by 120+ ambitious companies
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={0.15} y={40}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-900/10 bg-cream-50 shadow-lift">
                <Image
                  src="/images/hero-main.png"
                  alt="A conversion-focused website built by DevLoop, shown on a laptop with floating analytics cards"
                  width={1200}
                  height={900}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Floating metric chips */}
              <div className="absolute -left-4 top-8 animate-float rounded-2xl border border-ink-900/10 bg-cream-50/95 p-4 shadow-lift backdrop-blur sm:-left-8">
                <p className="flex items-center gap-2 text-xs font-medium text-ink-500">
                  <TrendingUp className="size-4 text-brand-600" aria-hidden />
                  Demo conversions
                </p>
                <p className="mt-1 font-display text-2xl font-semibold text-ink-900">
                  +142%
                </p>
              </div>
              <div className="absolute -right-3 bottom-24 animate-float-slow rounded-2xl border border-ink-900/10 bg-ink-950/95 p-4 text-cream shadow-lift backdrop-blur sm:-right-6">
                <p className="flex items-center gap-2 text-xs font-medium text-cream/60">
                  <Gauge className="size-4 text-brand-400" aria-hidden />
                  Avg. load time
                </p>
                <p className="mt-1 font-display text-2xl font-semibold">0.8s</p>
              </div>
              <div className="absolute -bottom-5 left-8 animate-float rounded-full border border-ink-900/10 bg-brand-500 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-lift">
                <span className="flex items-center gap-2">
                  <CalendarCheck2 className="size-4" aria-hidden />
                  Launched in 21 days
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Trust logo bar */}
        <Reveal delay={0.1} className="border-t border-ink-900/10 py-10">
          <p className="text-center font-mono text-xs font-medium uppercase tracking-[0.22em] text-ink-500">
            Trusted by teams at
          </p>
          <Marquee className="mt-7">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="mx-8 font-display text-xl font-medium whitespace-nowrap text-ink-900/35 transition-colors hover:text-ink-900/70 sm:mx-10 sm:text-2xl"
              >
                {logo}
              </span>
            ))}
          </Marquee>
        </Reveal>
      </div>
    </section>
  );
}
