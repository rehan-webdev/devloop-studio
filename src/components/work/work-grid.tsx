"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { caseCategories, type CaseStudy } from "@/content/work";
import { CaseStudyCard } from "@/components/shared/case-study-card";
import { cn } from "@/lib/utils";

/** Filterable portfolio grid. */
export function WorkGrid({ studies }: { studies: CaseStudy[] }) {
  const [filter, setFilter] = useState<(typeof caseCategories)[number]>("All");
  const visible =
    filter === "All" ? studies : studies.filter((s) => s.category === filter);

  return (
    <>
      <div
        className="flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Filter case studies"
      >
        {caseCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.97]",
              filter === cat
                ? "border-brand-600 bg-brand-500 text-ink-950 shadow-soft"
                : "border-ink-900/15 bg-cream-50 text-ink-700 hover:border-brand-500/60 hover:text-ink-900"
            )}
          >
            {cat}
            <span className="ml-2 text-xs opacity-60">
              {cat === "All"
                ? studies.length
                : studies.filter((s) => s.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((study) => (
            <motion.div
              key={study.slug}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
