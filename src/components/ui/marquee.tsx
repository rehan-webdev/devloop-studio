import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** CSS-only infinite marquee — content duplicated for a seamless loop. */
export function Marquee({
  children,
  className,
  pauseOnHover = true,
}: {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={cn(
        "mask-fade-x overflow-hidden",
        pauseOnHover && "pause-on-hover",
        className
      )}
    >
      <div className="flex w-max animate-marquee items-center">
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
