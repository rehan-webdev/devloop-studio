import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28 sm:pt-52">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute left-1/2 top-10 h-72 w-[50rem] max-w-none -translate-x-1/2 rounded-full bg-brand-400/25 blur-[110px]"
        aria-hidden
      />
      <div className="site-container relative text-center">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-brand-600">
          Error 404
        </p>
        <h1 className="mt-6 font-display text-[6rem] leading-none font-medium tracking-tight text-ink-900 sm:text-[10rem]">
          4<span className="italic text-brand-500">0</span>4
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink-600">
          This page took a wrong turn. Happens to the best of websites — even
          the ones we didn&apos;t build.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/" size="lg" withArrow>
            Back to homepage
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" size="lg">
            Tell us what&apos;s broken
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
