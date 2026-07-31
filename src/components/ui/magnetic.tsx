"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Magnetic hover effect — children are gently pulled toward the cursor. */
export function Magnetic({
  children,
  strength = 0.25,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.2 });

  if (reduce) return <div>{children}</div>;

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
