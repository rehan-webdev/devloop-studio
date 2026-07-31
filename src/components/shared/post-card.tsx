import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Post } from "@/content/blog";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-ink-900/10 bg-cream-50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/60 hover:shadow-lift"
    >
      <div className="flex items-center gap-3 text-xs">
        <span className="rounded-full bg-brand-500/12 px-3 py-1 font-semibold text-brand-700">
          {post.category}
        </span>
        <span className="text-ink-500">{post.readTime}</span>
      </div>
      <h2 className="mt-5 font-display text-2xl leading-snug font-medium tracking-tight text-ink-900">
        {post.title}
      </h2>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-600">
        {post.excerpt}
      </p>
      <div className="mt-auto flex items-center justify-between gap-4 pt-7">
        <div className="flex items-center gap-3">
          <span
            className="grid size-9 place-items-center rounded-full bg-linear-to-br from-orange-400 to-amber-500 text-xs font-bold text-ink-950"
            aria-hidden
          >
            {post.author.initials}
          </span>
          <div>
            <p className="text-sm font-semibold text-ink-900">{post.author.name}</p>
            <p className="text-xs text-ink-500">{formatDate(post.date)}</p>
          </div>
        </div>
        <ArrowUpRight
          className="size-5 text-ink-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600"
          aria-hidden
        />
      </div>
    </Link>
  );
}
