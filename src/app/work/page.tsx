import type { Metadata } from "next";
import { caseStudies } from "@/content/work";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/ui/reveal";
import { WorkGrid } from "@/components/work/work-grid";

export const metadata: Metadata = {
  title: "Work — Websites for brands, businesses, and builders",
  description:
    "Explore DevLoop websites for healthcare, food and beverage, real estate, personal brands, and automotive businesses, with live previews and project stories.",
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
        description="Browse by category, open a case study, or visit each live website to see how the work feels in the real world."
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
