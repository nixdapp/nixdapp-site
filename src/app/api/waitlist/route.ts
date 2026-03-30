import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY!;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, quit_reason, weekly_spend, yearly_savings, utm_source, utm_medium, utm_campaign } = body;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist_signups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      "Prefer": "resolution=merge-duplicates",
    },
    body: JSON.stringify({
      email: email.toLowerCase().trim(),
      quit_reason: quit_reason ?? null,
      weekly_spend: weekly_spend ?? null,
      yearly_savings: yearly_savings ?? null,
      utm_source: utm_source ?? null,
      utm_medium: utm_medium ?? null,
      utm_campaign: utm_campaign ?? null,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Supabase insert failed:", err);
    return NextResponse.json({ error: "Failed to save signup" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
