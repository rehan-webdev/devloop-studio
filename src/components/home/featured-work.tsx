import { caseStudies } from "@/content/work";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CaseStudyCard } from "@/components/shared/case-study-card";

export function FeaturedWork() {
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <section className="site-container py-20 sm:py-28" aria-label="Featured case studies">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Pretty is table stakes.{" "}
              <span className="italic text-brand-600">Results</span> are the
              deliverable.
            </>
          }
          description="Every project below shipped on time and moved the metric it was built to move. The numbers are the portfolio."
        />
        <Reveal delay={0.1}>
          <ButtonLink href="/work" variant="outline" withArrow>
            View all work
          </ButtonLink>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((study, i) => (
          <Reveal key={study.slug} delay={i * 0.08}>
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
