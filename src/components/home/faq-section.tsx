import { Mail, MessageCircle, Timer } from "lucide-react";
import { faqs } from "@/content/faq";
import { site } from "@/content/site";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <section className="site-container py-20 sm:py-28" aria-label="Frequently asked questions">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Answers, before you{" "}
                <span className="italic text-brand-600">even ask.</span>
              </>
            }
            description="The questions every smart client asks — answered the same way we'd answer them on a call: straight."
          />
          <Reveal delay={0.15} className="mt-10">
            <div className="rounded-2xl border border-ink-900/10 bg-cream-50 p-7 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-brand-500 text-ink-950">
                  <MessageCircle className="size-5" aria-hidden />
                </span>
                <h3 className="font-display text-xl font-medium text-ink-900">
                  Still curious?
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                Ask us anything — timelines, stack, a teardown of your current
                site. You&apos;ll get a human reply from a senior, not a sales
                script.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 underline-offset-4 transition-colors hover:text-brand-600 hover:underline"
              >
                <Mail className="size-4" aria-hidden />
                {site.email}
              </a>
              <p className="mt-3 flex items-center gap-2 text-xs text-ink-500">
                <Timer className="size-3.5" aria-hidden />
                Average response time: under 5 business hours
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
