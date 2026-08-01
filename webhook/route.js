import { NextResponse } from "next/server";

const VERIFY_TOKEN = "devloop123"; // Change this

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  }

  return new Response("Forbidden", { status: 403 });
}

export async function POST(request) {
  const body = await request.json();

  console.log("Webhook:", body);

  return NextResponse.json({ success: true });
}