import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import { site } from "@/content/site";
import type { ContactInput } from "@/lib/validators";

type EmailLead = ContactInput & {
  name: string;
  email: string;
};

export type EmailDeliveryResult =
  | { sent: true }
  | { sent: false; reason: "not_configured" | "provider_error" };

const brand = {
  orange: "#f57a1b",
  cream: "#ffefd5",
  ink: "#201205",
  muted: "#6e5334",
  white: "#fffdf7",
};

function escapeHtml(value: string | undefined | null) {
  if (!value) return "";
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function firstName(name: string) {
  return name.trim().split(/\s+/)[0] || "there";
}

function emailShell({
  preheader,
  eyebrow,
  title,
  body,
  footerNote,
}: {
  preheader: string;
  eyebrow: string;
  title: string;
  body: string;
  footerNote?: string;
}) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;background:${brand.cream};color:${brand.ink};font-family:Inter,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${brand.cream};">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;">
            <tr>
              <td style="padding:0 4px 22px;">
                <a href="${site.url}" style="display:inline-block;color:${brand.ink};text-decoration:none;font-size:22px;font-weight:800;letter-spacing:-.7px;">
                  <span style="display:inline-block;vertical-align:middle;background:${brand.orange};border-radius:10px;width:36px;height:36px;line-height:36px;text-align:center;margin-right:9px;font-size:17px;">∞</span>
                  dev<span style="color:${brand.orange};">loop</span>
                </a>
              </td>
            </tr>
            <tr>
              <td style="background:${brand.white};border:1px solid rgba(32,18,5,.12);border-radius:24px;padding:42px 38px;box-shadow:0 14px 40px rgba(32,18,5,.08);">
                <p style="margin:0 0 15px;color:${brand.orange};font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">// ${escapeHtml(eyebrow)}</p>
                <h1 style="margin:0;color:${brand.ink};font-family:Georgia,'Times New Roman',serif;font-size:38px;line-height:1.1;font-weight:500;letter-spacing:-1.2px;">${escapeHtml(title)}</h1>
                <div style="margin-top:25px;color:${brand.muted};font-size:16px;line-height:1.7;">${body}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 6px 0;color:${brand.muted};font-size:12px;line-height:1.6;text-align:center;">
                ${footerNote ? `${escapeHtml(footerNote)}<br>` : ""}
                ${site.legalName} · ${site.location}<br>
                <a href="${site.url}" style="color:${brand.muted};">${site.url.replace("https://", "")}</a>
                &nbsp;·&nbsp;
                <a href="mailto:${site.email}" style="color:${brand.muted};">${site.email}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function button(label: string, href: string) {
  return `<table role="presentation" cellspacing="0" cellpadding="0" style="margin:28px 0 4px;"><tr><td style="border-radius:999px;background:${brand.orange};"><a href="${href}" style="display:inline-block;padding:14px 24px;color:${brand.ink};font-size:14px;font-weight:800;text-decoration:none;">${escapeHtml(label)} →</a></td></tr></table>`;
}

function detailTable(rows: Array<[string, string | undefined | null]>) {
  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:24px;border-collapse:separate;border-spacing:0;background:${brand.cream};border-radius:14px;overflow:hidden;">
    ${rows
      .map(
        ([label, value], index) => `<tr>
          <td style="width:125px;padding:13px 16px;border-bottom:${index < rows.length - 1 ? "1px solid rgba(32,18,5,.1)" : "0"};color:${brand.muted};font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:13px 16px;border-bottom:${index < rows.length - 1 ? "1px solid rgba(32,18,5,.1)" : "0"};color:${brand.ink};font-size:14px;line-height:1.5;vertical-align:top;white-space:pre-wrap;">${escapeHtml(value) || "—"}</td>
        </tr>`
      )
      .join("")}
  </table>`;
}

function projectConfirmation(lead: EmailLead) {
  const name = escapeHtml(firstName(lead.name));
  return {
    subject: `We received your project brief, ${firstName(lead.name)}`,
    html: emailShell({
      preheader: "Your DevLoop project brief is safely in our hands.",
      eyebrow: "Brief received",
      title: `You're in the loop, ${firstName(lead.name)}.`,
      body: `<p style="margin:0;">Hi ${name},</p>
        <p style="margin:14px 0 0;">Thanks for telling us what you&apos;re building. A senior member of our team is reviewing your brief now — not a bot, and not a sales qualification script.</p>
        ${detailTable([
          ["Project", lead.projectType],
          ["Budget", lead.budget],
          ["Timeline", lead.timeline],
        ])}
        <p style="margin:22px 0 0;color:${brand.ink};font-weight:700;">What happens next?</p>
        <p style="margin:7px 0 0;">We&apos;ll reply within 24 hours with our initial thoughts and a link to book a free 30-minute discovery call. On that call, we&apos;ll audit your current setup and map the fastest path forward.</p>
        ${button("See more DevLoop work", `${site.url}/work`)}`,
      footerNote: "You received this because you submitted a project brief at DevLoop.",
    }),
    text: `Hi ${firstName(lead.name)},\n\nThanks for telling us what you're building. We received your DevLoop project brief.\n\nProject: ${lead.projectType}\nBudget: ${lead.budget}\nTimeline: ${lead.timeline}\n\nWe'll reply within 24 hours with our initial thoughts and a link to book a free discovery call.\n\n${site.name}\n${site.url}`,
  };
}

function projectNotification(lead: EmailLead) {
  return {
    subject: `🔥 New project lead: ${lead.name} (${lead.projectType || "Brief"})`,
    html: emailShell({
      preheader: `${lead.name} submitted a new project brief.`,
      eyebrow: "New project lead",
      title: `${lead.name} wants to work with DevLoop.`,
      body: `<p style="margin:0;">A new qualified project brief has arrived. Reply directly to this email to reach <strong style="color:${brand.ink};">${escapeHtml(lead.name)}</strong> (${escapeHtml(lead.email)}).</p>
        ${detailTable([
          ["Name", lead.name],
          ["Email", lead.email],
          ["Company", lead.company],
          ["Project", lead.projectType],
          ["Budget", lead.budget],
          ["Timeline", lead.timeline],
          ["Message", lead.message],
        ])}
        ${button("Reply directly to lead", `mailto:${encodeURIComponent(lead.email)}?subject=${encodeURIComponent(`Re: your ${lead.projectType || "website"} project with DevLoop`)}`)}`,
    }),
    text: `NEW PROJECT LEAD\n\nName: ${lead.name}\nEmail: ${lead.email}\nCompany: ${lead.company || "—"}\nProject: ${lead.projectType || "—"}\nBudget: ${lead.budget || "—"}\nTimeline: ${lead.timeline || "—"}\n\nMessage:\n${lead.message || "—"}\n`,
  };
}

function newsletterConfirmation(lead: EmailLead) {
  return {
    subject: "Welcome to The Loop — you're subscribed",
    html: emailShell({
      preheader: "You're subscribed to one practical growth email per month.",
      eyebrow: "Welcome to The Loop",
      title: "You're on the list.",
      body: `<p style="margin:0;">Thanks for subscribing. Once a month, we&apos;ll send one practical idea from real client work: conversion tactics, teardown lessons, or honest technology advice.</p>
        <div style="margin-top:24px;padding:18px;border-left:4px solid ${brand.orange};background:${brand.cream};border-radius:0 12px 12px 0;color:${brand.ink};"><strong>Our promise:</strong> useful enough to save, short enough to finish, and never more than once a month.</div>
        ${button("Read our latest field notes", `${site.url}/blog`)}`,
      footerNote: "You received this because you subscribed to The Loop at DevLoop.",
    }),
    text: `Welcome to The Loop.\n\nYou're subscribed to one practical growth email per month: conversion tactics, teardown lessons, and honest technology advice from real client work.\n\nOur promise: useful enough to save, short enough to finish, and never more than once a month.\n\nRead the latest: ${site.url}/blog`,
  };
}

function newsletterNotification(lead: EmailLead) {
  return {
    subject: `📬 New newsletter subscriber: ${lead.email}`,
    html: emailShell({
      preheader: `${lead.email} just subscribed to The Loop.`,
      eyebrow: "New subscriber",
      title: "The Loop just grew by one.",
      body: `<p style="margin:0;"><strong style="color:${brand.ink};">${escapeHtml(lead.email)}</strong> subscribed to the DevLoop newsletter.</p>
        ${detailTable([
          ["Email", lead.email],
          ["Source", "Website footer"],
          ["List", "The Loop newsletter"],
          ["Signed up", new Date().toLocaleString("en-US", { dateStyle: "long", timeStyle: "short", timeZone: "UTC" }) + " UTC"],
        ])}`,
    }),
    text: `NEW NEWSLETTER SUBSCRIBER\n\nEmail: ${lead.email}\nSource: Website footer\nList: The Loop newsletter\n`,
  };
}

let cachedTransporter: Transporter | null = null;

function getTransporter(): { transporter: Transporter; fromEmail: string; adminEmail: string } | null {
  const user =
    process.env.GMAIL_USER ||
    process.env.SMTP_USER ||
    process.env.SMTP_EMAIL;

  const pass =
    process.env.GMAIL_APP_PASSWORD ||
    process.env.SMTP_PASS ||
    process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    return null;
  }

  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = process.env.SMTP_PORT
    ? parseInt(process.env.SMTP_PORT, 10)
    : 465;
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  const fromEmail =
    process.env.SMTP_FROM ||
    process.env.GMAIL_FROM ||
    `DevLoop <${user}>`;

  const adminEmail =
    process.env.CONTACT_NOTIFICATION_EMAIL ||
    process.env.ADMIN_EMAIL ||
    user;

  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });
  }

  return {
    transporter: cachedTransporter,
    fromEmail,
    adminEmail,
  };
}

/**
 * Sends both the visitor confirmation email and the admin detail notification via Gmail SMTP.
 *
 * Environment variables for Gmail:
 * - GMAIL_USER (e.g. youragency@gmail.com)
 * - GMAIL_APP_PASSWORD (16-character Google App Password from myaccount.google.com/apppasswords)
 * - CONTACT_NOTIFICATION_EMAIL (optional: where to receive notifications; defaults to GMAIL_USER)
 * - SMTP_FROM (optional: custom sender name/email; defaults to "DevLoop <GMAIL_USER>")
 */
export async function sendLeadEmails(lead: EmailLead): Promise<EmailDeliveryResult> {
  const config = getTransporter();

  if (!config) {
    console.warn(
      "[email] Gmail SMTP credentials (GMAIL_USER + GMAIL_APP_PASSWORD or SMTP_USER + SMTP_PASS) not configured; lead emails were not sent."
    );
    return { sent: false, reason: "not_configured" };
  }

  const { transporter, fromEmail, adminEmail } = config;

  const customer =
    lead.type === "newsletter"
      ? newsletterConfirmation(lead)
      : projectConfirmation(lead);

  const internal =
    lead.type === "newsletter"
      ? newsletterNotification(lead)
      : projectNotification(lead);

  try {
    // Dispatch both emails in parallel via Gmail SMTP
    const [customerResult, internalResult] = await Promise.allSettled([
      transporter.sendMail({
        from: fromEmail,
        to: lead.email,
        replyTo: adminEmail,
        subject: customer.subject,
        html: customer.html,
        text: customer.text,
      }),
      transporter.sendMail({
        from: fromEmail,
        to: adminEmail,
        replyTo: lead.email,
        subject: internal.subject,
        html: internal.html,
        text: internal.text,
      }),
    ]);

    if (customerResult.status === "rejected") {
      console.error("[email] Failed to send customer confirmation email:", customerResult.reason);
    }
    if (internalResult.status === "rejected") {
      console.error("[email] Failed to send admin notification email:", internalResult.reason);
    }

    if (customerResult.status === "fulfilled" || internalResult.status === "fulfilled") {
      return { sent: true };
    }

    return { sent: false, reason: "provider_error" };
  } catch (err) {
    console.error("[email] SMTP dispatch exception:", err);
    return { sent: false, reason: "provider_error" };
  }
}
