import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/blog";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/ui/reveal";
import { PostCard } from "@/components/shared/post-card";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The Loop — Conversion, design & growth insights",
  description:
    "Field notes from 120+ website builds: conversion tactics, honest tech comparisons, and the process behind 3-week launches.",
};

export default function BlogPage() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Blog" }]}
        eyebrow="The Loop"
        title={
          <>
            Field notes on websites that{" "}
            <span className="italic text-brand-600">actually sell.</span>
          </>
        }
        description="No recycled listicles. These are the tactics, numbers and post-mortems from real client work — the same playbook we charge for, free."
      />

      <section className="site-container pb-24">
        {/* Featured */}
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative block overflow-hidden rounded-2xl bg-ink-950 p-8 transition-shadow hover:shadow-lift sm:p-14"
          >
            <div className="bg-grid-light absolute inset-0 opacity-40" aria-hidden />
            <div
              className="absolute -right-24 -top-24 size-80 rounded-full bg-brand-600/25 blur-[100px]"
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-brand-500 px-3 py-1 font-bold uppercase tracking-wide text-ink-950">
                  Featured
                </span>
                <span className="rounded-full border border-cream/20 px-3 py-1 font-medium text-cream/70">
                  {featured.category}
                </span>
                <span className="text-cream/50">
                  {formatDate(featured.date)} · {featured.readTime}
                </span>
              </div>
              <h2 className="mt-6 font-display text-3xl leading-tight font-medium tracking-tight text-balance text-cream sm:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/70">
                {featured.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition-colors group-hover:text-brand-300">
                Read the article
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Grid */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Like how we think? Imagine how we build."
        description="Everything in these articles is standard practice on a DevLoop project. Book a free call and we'll apply this playbook to your site — live, on the call."
      />
    </>
  );
}
