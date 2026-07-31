import { services } from "@/content/services";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/shared/service-card";

export function ServicesGrid() {
  return (
    <section
      className="border-y border-ink-900/10 bg-cream-100 py-20 sm:py-28"
      aria-label="Services"
    >
      <div className="site-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Six services.{" "}
                <span className="italic text-brand-600">One obsession:</span>{" "}
                your growth.
              </>
            }
            description="Everything under one roof, so nothing gets lost between strategy, design, and code."
          />
          <Reveal delay={0.1}>
            <ButtonLink href="/services" variant="outline" withArrow>
              All services
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
