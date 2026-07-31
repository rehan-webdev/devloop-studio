import {
  Code2,
  Compass,
  PenTool,
  Rocket,
  TrendingUp,
  type LucideProps,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const processSteps: {
  icon: (props: LucideProps) => React.ReactNode;
  title: string;
  duration: string;
  description: string;
}[] = [
  {
    icon: Compass,
    title: "Discover",
    duration: "Day 1–2",
    description:
      "Strategy sprint: goals, audience, analytics audit, and message hierarchy — locked before a single pixel.",
  },
  {
    icon: PenTool,
    title: "Design",
    duration: "Week 1–2",
    description:
      "Copy first, then wireframes and hi-fi designs. You review in Figma with structured feedback rounds.",
  },
  {
    icon: Code2,
    title: "Build",
    duration: "Week 2–3",
    description:
      "Hand-coded Next.js development with a live staging link that improves daily from day five onward.",
  },
  {
    icon: Rocket,
    title: "Launch",
    duration: "Day 21",
    description:
      "QA, performance hardening, SEO, redirects, DNS. Launched on schedule — it's guaranteed in writing.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    duration: "Ongoing",
    description:
      "Optional care plans: CRO experiments, landing pages, and SEO that compound your results monthly.",
  },
];

export function Process() {
  return (
    <section
      className="border-y border-ink-900/10 bg-cream-100 py-20 sm:py-28"
      aria-label="Our process"
    >
      <div className="site-container">
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title={
            <>
              From kickoff call to launch in{" "}
              <span className="italic text-brand-600">21 days.</span>
            </>
          }
          description="No four-month marathons, no black-box production. A proven, transparent sprint — you'll always know exactly where things stand."
        />

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* connector line (desktop) */}
          <div
            className="absolute left-0 right-0 top-6 hidden border-t-2 border-dashed border-ink-900/15 lg:block"
            aria-hidden
          />
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={i * 0.08}>
                <div className="relative z-10 grid size-12 place-items-center rounded-full border-2 border-brand-500 bg-cream-50 text-brand-700 shadow-soft">
                  <step.icon className="size-5" />
                </div>
                <p className="mt-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                  {String(i + 1).padStart(2, "0")} · {step.duration}
                </p>
                <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink-900">
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
  );
}
