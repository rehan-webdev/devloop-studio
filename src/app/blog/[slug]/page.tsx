import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/content/blog";
import { CtaBand } from "@/components/layout/cta-band";
import { ArticleBody } from "@/components/blog/article-body";
import { Reveal } from "@/components/ui/reveal";
import { PostCard } from "@/components/shared/post-card";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", title: post.title, description: post.excerpt },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div
          className="absolute -top-24 left-1/2 h-72 w-[55rem] max-w-none -translate-x-1/2 rounded-full bg-brand-400/20 blur-[110px]"
          aria-hidden
        />

        <div className="site-container relative">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-brand-700"
              >
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden />
                All articles
              </Link>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-brand-500/12 px-3 py-1 font-semibold text-brand-700">
                  {post.category}
                </span>
                <span className="text-ink-500">
                  {formatDate(post.date)} · {post.readTime}
                </span>
              </div>
              <h1 className="mt-6 font-display text-4xl leading-[1.06] font-medium tracking-tight text-balance text-ink-900 sm:text-5xl">
                {post.title}
              </h1>
              <div className="mt-8 flex items-center gap-3 border-y border-ink-900/10 py-5">
                <span
                  className="grid size-11 place-items-center rounded-full bg-linear-to-br from-orange-400 to-amber-500 text-sm font-bold text-ink-950"
                  aria-hidden
                >
                  {post.author.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{post.author.name}</p>
                  <p className="text-xs text-ink-500">{post.author.role}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <ArticleBody blocks={post.content} />
            </Reveal>

            <Reveal className="mt-14 rounded-2xl border border-ink-900/10 bg-cream-50 p-7 shadow-soft">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
                About the author
              </p>
              <div className="mt-4 flex items-start gap-4">
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-full bg-linear-to-br from-orange-400 to-amber-500 text-sm font-bold text-ink-950"
                  aria-hidden
                >
                  {post.author.initials}
                </span>
                <p className="text-sm leading-relaxed text-ink-600">
                  <strong className="text-ink-900">{post.author.name}</strong> is{" "}
                  {post.author.role.toLowerCase().startsWith("head") ? "the" : "our"}{" "}
                  {post.author.role} at DevLoop, where every article is a page
                  from a real client engagement — names changed, numbers real.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="site-container pb-24" aria-label="Related articles">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink-900">
            Keep reading
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
