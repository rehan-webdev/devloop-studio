import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db";
import { LEADS_COLLECTION, type NewLead } from "@/db/schema";
import { sendLeadEmails } from "@/lib/email";
import { contactSchema } from "@/lib/validators";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please review the highlighted fields.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const data = parsed.data;
  const record: NewLead = {
    type: data.type,
    name: data.name.trim(),
    email: data.email.toLowerCase().trim(),
    company: data.company || null,
    budget: data.budget || null,
    projectType: data.projectType || null,
    timeline: data.timeline || null,
    message: data.message || null,
  };

  try {
    const db = await getDb();
    await db.collection(LEADS_COLLECTION).insertOne({
      ...record,
      createdAt: new Date(),
    });
  } catch (err) {
    console.error("[/api/contact] Failed to store lead:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong on our side — please email us directly.",
      },
      { status: 500 }
    );
  }

  let emailSent = false;
  try {
    const delivery = await sendLeadEmails({
      ...data,
      name: record.name,
      email: record.email,
    });
    emailSent = delivery.sent;
  } catch (err) {
    // The lead is already safely stored. Never lose a submission because an
    // external email provider is temporarily unavailable.
    console.error("[/api/contact] Unexpected email delivery error:", err);
  }

  return NextResponse.json({
    ok: true,
    emailSent,
    message: emailSent
      ? "Saved and confirmation email sent."
      : "Saved successfully; confirmation email delivery is delayed.",
  });
}
