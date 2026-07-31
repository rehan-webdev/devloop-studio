import type { Metadata } from "next";
import { milestones, team, values } from "@/content/about";
import { stats } from "@/content/site";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHeader } from "@/components/layout/page-header";
import { Counter } from "@/components/ui/counter";
import { IconByName } from "@/components/ui/icon-map";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About — Small studio, senior people, measurable outcomes",
  description:
    "DevLoop is a remote-first web design & development studio founded in 2019. 120+ websites shipped, one obsession: websites that pay for themselves.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "About" }]}
        eyebrow="About DevLoop"
        title={
          <>
            A small studio with a{" "}
            <span className="italic text-brand-600">very specific obsession.</span>
          </>
        }
        description="We're four seniors, fully remote, deliberately boutique. No account managers, no junior hand-offs — just people who've shipped hundreds of sites and still care about the details."
      />

      {/* Story */}
      <section className="site-container grid gap-12 pb-20 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-ink-600">
            <p>
              DevLoop started in 2019 with a frustration: brilliant businesses
              kept paying for websites that were <em className="text-ink-900">beautiful and useless</em>.
              Agencies optimized for awards and aesthetics; clients were paying
              for leads and sales. Those goals are cousins at best.
            </p>
            <p>
              So we made one rule that still runs everything:{" "}
              <strong className="text-ink-900">
                a website is only done when it moves a number someone cares about.
              </strong>{" "}
              That rule shaped our 3-week sprint process, our fixed pricing, our
              copy-first approach — and the guarantee we put in writing.
            </p>
            <p>
              Six years and 120+ projects later, we&apos;re still small on
              purpose. Every client works directly with the people who design
              and build their site. That&apos;s the entire business model.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ink-900/10 bg-cream-50 p-6 shadow-soft"
              >
                <p className="font-display text-4xl font-medium tracking-tight text-brand-600 sm:text-5xl">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm leading-snug text-ink-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Values */}
      <section className="border-y border-ink-900/10 bg-cream-100 py-20 sm:py-24">
        <div className="site-container">
          <SectionHeading
            align="center"
            eyebrow="What we believe"
            title={
              <>
                Four values. <span className="italic text-brand-600">Zero posters on a wall.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-ink-900/10 bg-cream-50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/60 hover:shadow-lift">
                  <span className="grid size-12 place-items-center rounded-xl bg-brand-500/12 text-brand-700">
                    <IconByName name={value.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-ink-900">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="site-container py-20 sm:py-24">
        <SectionHeading
          eyebrow="The team"
          title={
            <>
              The people who&apos;ll actually{" "}
              <span className="italic text-brand-600">do the work.</span>
            </>
          }
          description="No layers between you and the craft. These are the four humans in your project channel."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <article className="group text-center">
                <div
                  className={`mx-auto grid aspect-square max-w-52 place-items-center rounded-[2rem] bg-linear-to-br ${member.accent} shadow-soft transition-transform duration-500 group-hover:rotate-2 group-hover:scale-[1.03]`}
                >
                  <span className="font-display text-5xl font-semibold text-ink-950">
                    {member.initials}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-ink-900">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-brand-700">
                  {member.role}
                </p>
                <p className="mx-auto mt-3 max-w-60 text-sm leading-relaxed text-ink-600">
                  {member.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="site-container pb-24">
        <SectionHeading
          eyebrow="So far"
          title={
            <>
              Six years,{" "}
              <span className="italic text-brand-600">short chapters.</span>
            </>
          }
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {milestones.map((m, i) => (
            <li key={m.year} className="relative border-t-2 border-ink-900/10 pt-6">
              <Reveal delay={i * 0.08}>
                <span className="absolute -top-1.25 left-0 size-2.5 rounded-full bg-brand-500" aria-hidden />
                <p className="font-display text-3xl font-medium text-brand-600">{m.year}</p>
                <h3 className="mt-2 font-semibold tracking-tight text-ink-900">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{m.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand
        title="Sound like a team you'd want in your corner?"
        description="We take on a handful of projects per quarter so every one gets seniors, not hand-offs. Tell us what you're building."
      />
    </>
  );
}
