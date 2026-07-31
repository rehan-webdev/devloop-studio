import { CtaBand } from "@/components/layout/cta-band";
import { FaqSection } from "@/components/home/faq-section";
import { FeaturedWork } from "@/components/home/featured-work";
import { Hero } from "@/components/home/hero";
import { Pricing } from "@/components/home/pricing";
import { ProblemSolution } from "@/components/home/problem-solution";
import { Process } from "@/components/home/process";
import { Proof } from "@/components/home/proof";
import { ServicesGrid } from "@/components/home/services-grid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ServicesGrid />
      <FeaturedWork />
      <Process />
      <Proof />
      <Pricing />
      <FaqSection />
      <CtaBand />
    </>
  );
}
