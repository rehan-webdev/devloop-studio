"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Cycles through words with a smooth vertical flip — used in the hero. */
export function WordRotate({
  words,
  interval = 2600,
  className,
}: {
  words: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={className} style={{ display: "inline-block" }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          className="inline-block italic text-brand-600"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
