import { Quote, Sparkles } from "lucide-react";
import type { Block } from "@/content/blog";

/** Renders structured blog content blocks (data-file alternative to MDX). */
export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-7">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="text-lg leading-relaxed text-ink-700">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="pt-6 font-display text-3xl font-medium tracking-tight text-ink-900"
              >
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul key={i} className="space-y-4">
                {block.items.map((item) => (
                  <li
                    key={item.slice(0, 32)}
                    className="flex items-start gap-3.5 rounded-xl border border-ink-900/10 bg-cream-50 p-4.5 text-base leading-relaxed text-ink-700"
                  >
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-brand-500" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="rounded-2xl bg-ink-950 p-8 sm:p-10"
              >
                <Quote className="size-7 text-brand-500" fill="currentColor" aria-hidden />
                <p className="mt-4 font-display text-xl leading-relaxed font-medium text-cream/95 sm:text-2xl">
                  {block.text}
                </p>
                {block.author && (
                  <cite className="mt-4 block text-sm not-italic text-cream/60">
                    — {block.author}
                  </cite>
                )}
              </blockquote>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="flex gap-4 rounded-2xl border border-brand-500/30 bg-brand-500/8 p-6 sm:p-7"
              >
                <Sparkles className="size-6 shrink-0 text-brand-600" aria-hidden />
                <p className="text-base leading-relaxed font-medium text-ink-800">
                  {block.text}
                </p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
