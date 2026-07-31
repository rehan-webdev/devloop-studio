import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Logo } from "@/components/ui/logo";

/** Brand icons (lucide no longer ships brand marks). */
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.49v-9.294H9.691V11.06h3.124V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.646h-3.12V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0Z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ display: "block" }}
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.342 3.607 1.316.973.973 1.254 2.24 1.316 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.342 2.633-1.316 3.607-.973.973-2.24 1.254-3.607 1.316-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.342-3.607-1.316-.973-.973-1.254-2.24-1.316-3.607C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.342-2.633 1.316-3.607.973-.973 2.24-1.254 3.607-1.316C8.416 2.175 8.796 2.163 12 2.163Zm0-2.163C8.741 0 8.332.014 7.052.072 5.771.13 4.653.398 3.68 1.37 2.708 2.343 2.44 3.461 2.382 4.742 2.324 6.022 2.31 6.431 2.31 12s.014 5.978.072 7.258c.058 1.281.326 2.399 1.298 3.372.973.973 2.091 1.241 3.372 1.299 1.28.058 1.689.072 7.258.072s5.978-.014 7.258-.072c1.281-.058 2.399-.326 3.372-1.299.973-.973 1.241-2.091 1.299-3.372.058-1.28.072-1.689.072-7.258s-.014-5.978-.072-7.258c-.058-1.281-.326-2.399-1.299-3.372C19.398.398 18.28.13 16.999.072 15.719.014 15.309 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324Zm0 10.163a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}
function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32M8.56 2.75c4.37 6 6 9.42 8.03 17.72" />
    </svg>
  );
}
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

const socialIcons: Record<string, (props: { className?: string }) => React.ReactNode> = {
  Linkedin: LinkedinIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Dribbble: DribbbleIcon,
  Github: GithubIcon,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-cream">
      <div className="bg-grid-light absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute -top-40 right-0 size-125 rounded-full bg-brand-600/15 blur-[130px]"
        aria-hidden
      />

      <div className="site-container relative">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs font-display text-2xl leading-snug font-medium text-cream/90">
              {site.tagline}.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/50">
              {site.location}
            </p>
            <div className="mt-6 flex gap-2">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/60 transition-all hover:border-brand-500 hover:bg-brand-500 hover:text-ink-950"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Services">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-400">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}` as never}
                    className="text-cream/60 transition-colors hover:text-cream"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-400">
              Studio
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ...site.nav.map((n) => n),
                { label: "Contact", href: "/contact" },
                { label: "Pricing", href: "/#pricing" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href as never}
                    className="text-cream/60 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-400">
              The Loop — our newsletter
            </h3>
            <div className="mt-5">
              <NewsletterForm />
            </div>
            <a
              href={`mailto:${site.email}`}
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cream transition-colors hover:text-brand-300"
            >
              {site.email}
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/10 py-7 text-xs text-cream/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Designed to convert · Built to last
          </p>
        </div>
      </div>
    </footer>
  );
}
