import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      className={cn("size-9", className)}
      role="img"
      aria-label={`${site.name} logo`}
    >
      <rect width="36" height="36" rx="10" className="fill-brand-500" />
      <path
        d="M11 23.5a5.5 5.5 0 1 1 3.9-9.4l7.8 7.8a5.5 5.5 0 1 0 3.9-9.4"
        fill="none"
        className="stroke-ink-950"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M24.5 9.5l3 3-3 3"
        fill="none"
        className="stroke-ink-950"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label={`${site.name} — home`}
    >
      <LogoMark className="transition-transform duration-500 group-hover:rotate-[8deg]" />
      <span
        className={cn(
          "text-[1.35rem] font-bold tracking-tight",
          dark ? "text-cream" : "text-ink-900"
        )}
      >
        dev
        <span className="text-brand-500">loop</span>
      </span>
    </Link>
  );
}
