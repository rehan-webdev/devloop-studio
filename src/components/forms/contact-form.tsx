"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck2,
  CheckCircle2,
  Loader2,
  PartyPopper,
} from "lucide-react";
import { useState } from "react";
import { useForm, type FieldPath } from "react-hook-form";
import { z } from "zod";
import {
  budgetRanges,
  projectTypes,
  timelineOptions,
} from "@/lib/validators";
import { cn } from "@/lib/utils";

/** Client-side schema mirrors the API contract (type is fixed to project). */
const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  company: z.string(),
  projectType: z.string().min(1, "Pick a project type"),
  budget: z.string().min(1, "Pick a budget range"),
  timeline: z.string().min(1, "Pick a timeline"),
  message: z.string().min(10, "Give us a little more detail (10+ characters)"),
});
type FormValues = z.infer<typeof formSchema>;

const steps: { id: number; label: string; fields: FieldPath<FormValues>[] }[] = [
  { id: 0, label: "About you", fields: ["name", "email", "company"] },
  { id: 1, label: "The project", fields: ["projectType", "budget", "timeline"] },
  { id: 2, label: "The details", fields: ["message"] },
];

const inputClass =
  "w-full rounded-xl border border-ink-900/15 bg-cream-50 px-4 py-3 text-sm text-ink-900 outline-none transition-all placeholder:text-ink-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";
const errorClass = "mt-1.5 text-xs font-medium text-red-700";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className={errorClass} role="alert">
      {message}
    </p>
  );
}

function OptionPill({
  selected,
  label,
  onSelect,
}: {
  selected: boolean;
  label: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.97]",
        selected
          ? "border-brand-600 bg-brand-500 text-ink-950 shadow-soft"
          : "border-ink-900/15 bg-cream-50 text-ink-700 hover:border-brand-500/60 hover:text-ink-900"
      )}
    >
      {label}
    </button>
  );
}

export function ContactForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    },
    mode: "onTouched",
  });

  const values = watch();

  async function next() {
    const valid = await trigger(steps[step].fields, { shouldFocus: true });
    if (valid) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  async function onSubmit(data: FormValues) {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "project", ...data }),
      });
      const json = (await res.json()) as {
        ok: boolean;
        emailSent?: boolean;
        error?: string;
      };
      if (!res.ok || !json.ok) {
        setServerError(json.error ?? "Something went wrong — please try again.");
        return;
      }
      setEmailSent(json.emailSent === true);
      setSubmitted(true);
    } catch {
      setServerError("Network hiccup — please try again in a moment.");
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-ink-900/10 bg-cream-50 p-10 text-center shadow-lift"
      >
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand-500 text-ink-950">
          <PartyPopper className="size-7" aria-hidden />
        </span>
        <h2 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink-900">
          Thanks, {values.name.split(" ")[0]} — you&apos;re in the loop.
        </h2>
        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-ink-600">
          {emailSent ? (
            <>
              We sent a confirmation to{" "}
              <strong className="text-ink-900">{values.email}</strong>. Check
              your inbox (and spam folder); we&apos;ll personally follow up within
              24 hours.
            </>
          ) : (
            <>
              Your brief is safely saved. Confirmation email delivery is
              delayed, but we&apos;ll still personally reply to{" "}
              <strong className="text-ink-900">{values.email}</strong> within
              24 hours.
            </>
          )}
        </p>
        <div className="mx-auto mt-7 flex max-w-xs flex-col gap-2 rounded-xl border border-ink-900/10 bg-cream-100 p-4 text-left text-sm">
          {[
            { icon: CheckCircle2, text: "Brief received & logged" },
            {
              icon: CalendarCheck2,
              text: emailSent
                ? "Confirmation email sent"
                : "Email delivery queued for follow-up",
            },
          ].map(({ icon: Icon, text }) => (
            <p key={text} className="flex items-center gap-2.5 text-ink-700">
              <Icon className="size-4 shrink-0 text-brand-600" aria-hidden />
              {text}
            </p>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-ink-900/10 bg-cream-50 p-6 shadow-lift sm:p-9"
    >
      {/* Progress */}
      <ol className="flex items-center gap-2" aria-label="Form progress">
        {steps.map((s, i) => (
          <li key={s.id} className="flex flex-1 items-center gap-2">
            <span
              className={cn(
                "grid size-8 shrink-0 place-items-center rounded-full border text-xs font-bold transition-all",
                i < step
                  ? "border-brand-500 bg-brand-500 text-ink-950"
                  : i === step
                    ? "border-brand-600 bg-brand-500/15 text-brand-700"
                    : "border-ink-900/15 text-ink-400"
              )}
              aria-current={i === step ? "step" : undefined}
            >
              {i < step ? <CheckCircle2 className="size-4" aria-hidden /> : i + 1}
            </span>
            <span
              className={cn(
                "hidden text-xs font-medium sm:block",
                i === step ? "text-ink-900" : "text-ink-400"
              )}
            >
              {s.label}
            </span>
            {i < steps.length - 1 && (
              <span
                className={cn(
                  "h-px flex-1",
                  i < step ? "bg-brand-500" : "bg-ink-900/15"
                )}
                aria-hidden
              />
            )}
          </li>
        ))}
      </ol>

      <div className="mt-8 min-h-80">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          >
            {step === 0 && (
              <fieldset>
                <legend className="font-display text-2xl font-medium tracking-tight text-ink-900">
                  First, the basics
                </legend>
                <div className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-900">
                      Your name <span className="text-brand-600" aria-hidden>*</span>
                    </label>
                    <input id="name" autoComplete="name" placeholder="Sam Carter" className={inputClass} {...register("name")} />
                    <FieldError message={errors.name?.message} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-900">
                      Work email <span className="text-brand-600" aria-hidden>*</span>
                    </label>
                    <input id="email" type="email" autoComplete="email" placeholder="sam@company.com" className={inputClass} {...register("email")} />
                    <FieldError message={errors.email?.message} />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink-900">
                      Company <span className="font-normal text-ink-400">(optional)</span>
                    </label>
                    <input id="company" autoComplete="organization" placeholder="Acme Inc." className={inputClass} {...register("company")} />
                  </div>
                </div>
              </fieldset>
            )}

            {step === 1 && (
              <fieldset>
                <legend className="font-display text-2xl font-medium tracking-tight text-ink-900">
                  Tell us about the project
                </legend>
                <div className="mt-6 space-y-7">
                  <div>
                    <p className="mb-2.5 text-sm font-medium text-ink-900">
                      Project type <span className="text-brand-600" aria-hidden>*</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <OptionPill
                          key={type}
                          label={type}
                          selected={values.projectType === type}
                          onSelect={() => setValue("projectType", type, { shouldValidate: true })}
                        />
                      ))}
                    </div>
                    <FieldError message={errors.projectType?.message} />
                  </div>
                  <div>
                    <p className="mb-2.5 text-sm font-medium text-ink-900">
                      Budget range <span className="text-brand-600" aria-hidden>*</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((b) => (
                        <OptionPill
                          key={b}
                          label={b}
                          selected={values.budget === b}
                          onSelect={() => setValue("budget", b, { shouldValidate: true })}
                        />
                      ))}
                    </div>
                    <FieldError message={errors.budget?.message} />
                  </div>
                  <div>
                    <p className="mb-2.5 text-sm font-medium text-ink-900">
                      Timeline <span className="text-brand-600" aria-hidden>*</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {timelineOptions.map((tl) => (
                        <OptionPill
                          key={tl}
                          label={tl}
                          selected={values.timeline === tl}
                          onSelect={() => setValue("timeline", tl, { shouldValidate: true })}
                        />
                      ))}
                    </div>
                    <FieldError message={errors.timeline?.message} />
                  </div>
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <legend className="font-display text-2xl font-medium tracking-tight text-ink-900">
                  Almost done — the details
                </legend>
                <div className="mt-6">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-900">
                    What are you trying to achieve? <span className="text-brand-600" aria-hidden>*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="e.g. Our current site gets decent traffic but demo bookings are flat. We need a redesign that turns more visitors into pipeline — ideally before our funding announcement in Q3…"
                    className={cn(inputClass, "resize-none")}
                    {...register("message")}
                  />
                  <FieldError message={errors.message?.message} />
                </div>

                {/* Summary */}
                <div className="mt-6 rounded-xl border border-ink-900/10 bg-cream-100 p-4 text-sm">
                  <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ink-500">
                    Your brief so far
                  </p>
                  <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                    {[
                      ["Project", values.projectType || "—"],
                      ["Budget", values.budget || "—"],
                      ["Timeline", values.timeline || "—"],
                      ["Company", values.company || "—"],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-xs text-ink-500">{k}</dt>
                        <dd className="font-medium text-ink-900">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </fieldset>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {serverError && (
        <p className="mt-4 rounded-lg bg-red-100 px-4 py-2.5 text-sm font-medium text-red-800" role="alert">
          {serverError}
        </p>
      )}

      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-ink-600 transition-colors hover:text-ink-900 disabled:pointer-events-none disabled:opacity-0"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back
        </button>

        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={next}
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-ink-900 px-7 text-sm font-semibold text-cream transition-all hover:bg-brand-500 hover:text-ink-950 active:scale-[0.98]"
          >
            Continue
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-500 px-7 text-sm font-semibold text-ink-950 shadow-[0_10px_30px_-10px_rgb(245_122_27/0.6)] transition-all hover:bg-ink-900 hover:text-cream active:scale-[0.98] disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              <>
                Send my brief
                <ArrowRight className="size-4" aria-hidden />
              </>
            )}
          </button>
        )}
      </div>

      <p className="mt-5 text-center text-xs leading-relaxed text-ink-400">
        No spam, no obligation. Your details are stored securely and never
        shared. Prefer email?{" "}
        <a href="mailto:hello@devloop.studio" className="font-semibold text-brand-700 underline-offset-2 hover:underline">
          hello@devloop.studio
        </a>
      </p>
    </form>
  );
}
