import type { Metadata } from "next";
import { caseStudies } from "@/content/work";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/ui/reveal";
import { WorkGrid } from "@/components/work/work-grid";

export const metadata: Metadata = {
  title: "Work — Case studies with real numbers",
  description:
    "SaaS, e-commerce and professional service websites that moved real metrics: +142% demo conversions, +89% revenue, +210% consultation requests.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Work" }]}
        eyebrow="Our work"
        title={
          <>
            Websites that moved the{" "}
            <span className="italic text-brand-600">metric that matters.</span>
          </>
        }
        description="Filter by industry, open a case study, and judge us the way our clients do: on challenge, approach, and measurable results."
      />

      <section className="site-container pb-24">
        <Reveal>
          <WorkGrid studies={caseStudies} />
        </Reveal>
      </section>

      <CtaBand
        title="Want numbers like these on your next board slide?"
        description="Every metric above started with a free 30-minute call. Book yours — worst case, you leave with a teardown of your current site."
      />
    </>
  );
}
