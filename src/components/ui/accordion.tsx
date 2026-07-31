"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Item = { question: string; answer: string };

/** Accessible accordion used by the FAQ section (single-open). */
export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink-900/10 border-y border-ink-900/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className={cn(
                  "flex w-full items-center justify-between gap-6 py-6 text-left transition-colors",
                  "text-lg font-semibold tracking-tight",
                  isOpen ? "text-brand-700" : "text-ink-900 hover:text-brand-700"
                )}
              >
                {item.question}
                <span
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "rotate-45 border-brand-500 bg-brand-500 text-ink-950"
                      : "border-ink-900/20 text-ink-600"
                  )}
                  aria-hidden
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-7 leading-relaxed text-ink-600">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
