"use client";

import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";

/** Compact footer email capture → POSTs to /api/contact as a newsletter lead. */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<
    "idle" | "loading" | "done" | "done-delayed" | "error"
  >("idle");

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return setState("error");
    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", name: "Newsletter", email }),
      });
      const json = (await res.json()) as { ok?: boolean; emailSent?: boolean };
      if (!res.ok || !json.ok) return setState("error");
      setState(json.emailSent ? "done" : "done-delayed");
    } catch {
      setState("error");
    }
  }

  if (state === "done" || state === "done-delayed") {
    return (
      <p className="flex items-center gap-2 rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 text-sm text-cream">
        <CheckCircle2 className="size-4 shrink-0 text-brand-400" aria-hidden />
        {state === "done"
          ? "You're on the list — check your inbox for confirmation."
          : "You're subscribed. Confirmation email delivery is delayed."}
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate={state !== "error"}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center gap-2 rounded-full border border-cream/20 bg-ink-950 p-1.5 pl-5 transition-colors focus-within:border-brand-400">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full bg-transparent text-sm text-cream outline-none placeholder:text-cream/40"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          aria-label="Subscribe"
          className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-500 text-ink-950 transition-colors hover:bg-brand-400 disabled:opacity-60"
        >
          {state === "loading" ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            <ArrowRight className="size-4" aria-hidden />
          )}
        </button>
      </div>
      {state === "error" && (
        <p className="mt-2 text-xs text-brand-300" role="alert">
          Please enter a valid email address.
        </p>
      )}
      <p className="mt-3 text-xs leading-relaxed text-cream/40">
        One email a month: conversion tactics, teardown videos, zero fluff.
      </p>
    </form>
  );
}
