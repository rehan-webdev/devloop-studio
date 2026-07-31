/** Tiny className joiner — filters falsy values. */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/** "2026-01-15" -> "January 15, 2026" */
export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
