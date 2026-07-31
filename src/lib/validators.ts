import { z } from "zod";

export const projectTypes = [
  "New website",
  "Website redesign",
  "E-commerce store",
  "Web application",
  "Landing page",
  "SEO & growth",
  "Something else",
] as const;

export const budgetRanges = [
  "Under $5k",
  "$5k – $10k",
  "$10k – $25k",
  "$25k+",
  "Not sure yet",
] as const;

export const timelineOptions = [
  "ASAP",
  "2–4 weeks",
  "1–3 months",
  "3+ months",
  "Flexible",
] as const;

const optional = (max: number) =>
  z.string().max(max).optional().or(z.literal(""));

export const contactSchema = z
  .object({
    type: z.enum(["project", "newsletter"]).default("project"),
    name: z.string().min(2, "Please enter your name").max(120),
    email: z.string().email("Please enter a valid email address").max(200),
    company: optional(200),
    projectType: optional(120),
    budget: optional(60),
    timeline: optional(120),
    message: optional(2000),
  })
  .superRefine((data, ctx) => {
    if (data.type === "project") {
      if (!data.projectType) {
        ctx.addIssue({
          code: "custom",
          path: ["projectType"],
          message: "Select a project type",
        });
      }
      if (!data.budget) {
        ctx.addIssue({
          code: "custom",
          path: ["budget"],
          message: "Select a budget range",
        });
      }
      if (!data.timeline) {
        ctx.addIssue({
          code: "custom",
          path: ["timeline"],
          message: "Select a timeline",
        });
      }
      if (!data.message || data.message.trim().length < 10) {
        ctx.addIssue({
          code: "custom",
          path: ["message"],
          message: "Tell us a little about the project (10+ characters)",
        });
      }
    }
  });

export type ContactInput = z.infer<typeof contactSchema>;
