import { NextRequest, NextResponse } from "next/server";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/nixd-quit-vaping-pouches/id6761740706";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

// Cap variant length so a malformed/abusive URL can't bloat the DB.
const MAX_VARIANT_LEN = 64;

/**
 * Tracked redirect for QR code / sticker / print campaign URLs.
 *
 * Visit pattern:
 *   GET /dl/sticker-a               → log scan → 302 to App Store
 *   GET /dl/sticker-b?utm_source=x  → log scan → 302 to App Store
 *
 * Robots are disallowed at /dl in robots.ts so this never lands in
 * search results. Logging is fire-and-forget so a Supabase outage
 * never blocks the user from reaching the App Store.
 */
export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ variant: string }> }
) {
  const { variant: rawVariant } = await ctx.params;
  const variant = String(rawVariant ?? "")
    .slice(0, MAX_VARIANT_LEN)
    .toLowerCase();

  const url = req.nextUrl;
  const utmSource = url.searchParams.get("utm_source");
  const utmMedium = url.searchParams.get("utm_medium");
  const utmCampaign = url.searchParams.get("utm_campaign");
  const referer = req.headers.get("referer");
  const userAgent = req.headers.get("user-agent");

  // Fire-and-forget log to Supabase. We do NOT await this — even if
  // Supabase is slow or unreachable, the user still gets bounced to
  // the App Store immediately.
  if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    fetch(`${SUPABASE_URL}/rest/v1/qr_scans`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        variant,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        referer,
        user_agent: userAgent,
      }),
      // Don't keep the function alive waiting for this in dev.
      keepalive: true,
    }).catch(() => {
      // Swallow — logging failure must never break the redirect.
    });
  }

  return NextResponse.redirect(APP_STORE_URL, 302);
}
