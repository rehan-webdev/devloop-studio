"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { stats } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Proof() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: number) =>
      setIndex((i) => (i + dir + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 6500);
    return () => clearInterval(id);
  }, [go, paused]);

  const t = testimonials[index];

  return (
    <section
      className="relative overflow-hidden bg-ink-950 py-20 text-cream sm:py-28"
      aria-label="Results and testimonials"
    >
      <div className="bg-grid-light absolute inset-0 opacity-50" aria-hidden />
      <div
        className="absolute left-1/2 top-0 h-72 w-[60rem] max-w-none -translate-x-1/2 rounded-full bg-brand-600/15 blur-[120px]"
        aria-hidden
      />

      <div className="site-container relative">
        <SectionHeading
          dark
          align="center"
          eyebrow="Proof, not promises"
          title={
            <>
              Numbers our clients{" "}
              <span className="italic text-brand-400">brag about.</span>
            </>
          }
        />

        {/* Stats */}
        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="text-center">
                <dd className="font-display text-5xl font-medium tracking-tight text-brand-400 sm:text-6xl">
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </dd>
                <dt className="mt-3 text-sm text-cream/60">{stat.label}</dt>
              </div>
            </Reveal>
          ))}
        </dl>

        {/* Testimonial carousel */}
        <Reveal className="mx-auto mt-20 max-w-3xl">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative rounded-2xl border border-cream/10 bg-cream/5 p-8 backdrop-blur sm:p-12"
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
          >
            <Quote className="absolute -top-5 left-8 size-10 text-brand-500" aria-hidden fill="currentColor" />
            <div className="min-h-44 sm:min-h-36">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                >
                  <blockquote className="font-display text-xl leading-relaxed font-medium text-cream/95 sm:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-7 flex flex-wrap items-center gap-4">
                    <span
                      className="grid size-11 place-items-center rounded-full bg-brand-500 text-sm font-bold text-ink-950"
                      aria-hidden
                    >
                      {t.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-cream">
                        {t.author}
                      </span>
                      <span className="block text-sm text-cream/50">
                        {t.role}, {t.company}
                      </span>
                    </span>
                    <span className="ml-auto rounded-full border border-brand-500/40 bg-brand-500/15 px-3.5 py-1.5 text-xs font-semibold text-brand-300">
                      {t.metric}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
                {testimonials.map((item, i) => (
                  <button
                    key={item.author}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Testimonial ${i + 1}: ${item.author}`}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === index
                        ? "w-8 bg-brand-500"
                        : "w-3 bg-cream/20 hover:bg-cream/40"
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                {[
                  { dir: -1, label: "Previous testimonial", Icon: ArrowLeft },
                  { dir: 1, label: "Next testimonial", Icon: ArrowRight },
                ].map(({ dir, label, Icon }) => (
                  <button
                    key={label}
                    onClick={() => go(dir)}
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-all hover:border-brand-500 hover:bg-brand-500 hover:text-ink-950"
                  >
                    <Icon className="size-4" aria-hidden />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
