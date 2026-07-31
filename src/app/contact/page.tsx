import { CalendarDays, Clock3, Mail, MapPin, Phone, Reply, SearchCheck, FileSignature } from "lucide-react";
import type { Metadata } from "next";
import { site } from "@/content/site";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact — Book a free discovery call",
  description:
    "Tell us about your project in 60 seconds. Get a reply within 24 hours, a live site audit on your first call, and a fixed-price quote.",
};

const nextSteps = [
  {
    icon: Reply,
    title: "We reply within 24 hours",
    text: "A senior reads every brief — no bots, no qualification scripts.",
  },
  {
    icon: SearchCheck,
    title: "Free 30-min discovery call",
    text: "We audit your current site live and sketch a direction, free.",
  },
  {
    icon: FileSignature,
    title: "Fixed quote within 48 hours",
    text: "Scope, timeline, and price in writing. The quote is the invoice.",
  },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden pt-36 sm:pt-44">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-24 left-1/2 h-80 w-[60rem] max-w-none -translate-x-1/2 rounded-full bg-brand-400/20 blur-[110px]"
        aria-hidden
      />

      <div className="site-container relative pb-24 sm:pb-32">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left: pitch + info */}
          <div>
            <Reveal>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-600">
                {"// "}Contact
              </p>
              <h1 className="mt-4 font-display text-5xl leading-[1.02] font-medium tracking-tight text-balance text-ink-900 sm:text-6xl">
                Tell us where you want to{" "}
                <span className="italic text-brand-600">grow.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-600">
                Sixty seconds of typing could be the start of your
                hardest-working business asset. Fill out the brief — we&apos;ll
                take it from there.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ol className="mt-10 space-y-6">
                {nextSteps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-500/12 text-brand-700" aria-hidden>
                      <step.icon className="size-5" />
                    </span>
                    <div>
                      <h2 className="font-semibold tracking-tight text-ink-900">
                        <span className="mr-2 font-mono text-xs text-ink-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step.title}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 grid gap-4 rounded-2xl border border-ink-900/10 bg-cream-50 p-6 text-sm sm:grid-cols-2">
                {[
                  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
                  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/[^+\d]/g, "")}` },
                  { icon: MapPin, label: "Based", value: site.location },
                  { icon: Clock3, label: "Hours", value: "Mon–Fri · 9am–6pm ET" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-ink-500">{label}</p>
                      {href ? (
                        <a href={href} className="font-medium text-ink-900 transition-colors hover:text-brand-700">
                          {value}
                        </a>
                      ) : (
                        <p className="font-medium text-ink-900">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 grid place-items-center rounded-2xl border-2 border-dashed border-ink-900/15 bg-cream-100/60 p-8 text-center">
                <CalendarDays className="size-8 text-brand-600" aria-hidden />
                <p className="mt-3 text-sm font-semibold text-ink-900">
                  Prefer to book instantly?
                </p>
                <p className="mt-1 max-w-xs text-xs leading-relaxed text-ink-500">
                  Calendar embed placeholder — drop your Calendly or Cal.com
                  embed here and this box becomes a live booking widget.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1} y={36}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
