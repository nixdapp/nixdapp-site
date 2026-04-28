import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * QR-sticker redirect.
 *
 * Catches the legacy QR pattern `/?utm_medium=qr&utm_campaign=...`
 * and forwards to the canonical tracked redirector at
 * `/dl/<campaign>` so logging happens in one place.
 *
 * The canonical pattern (preferred for new stickers) is to encode
 * `https://nixdapp.com/dl/<variant>` directly — single hop, no
 * homepage render. This middleware exists for stickers that were
 * already printed with the old `/?utm_*` pattern.
 *
 * We DO NOT redirect plain `/` visits — only requests that have
 * `utm_medium=qr`, so the marketing homepage still renders normally
 * for crawlers, ads, organic search, and shared social links.
 */
export function middleware(req: NextRequest) {
  const { pathname, searchParams, origin } = req.nextUrl;

  if (pathname !== "/") return NextResponse.next();
  if (searchParams.get("utm_medium") !== "qr") return NextResponse.next();

  const campaign =
    searchParams.get("utm_campaign")?.toLowerCase() || "unknown";

  // Forward UTMs through to /dl/<campaign> so the route handler can
  // log the full attribution. Use a fresh URL so we don't carry over
  // unexpected params.
  const dest = new URL(`/dl/${encodeURIComponent(campaign)}`, origin);
  for (const key of ["utm_source", "utm_medium", "utm_campaign"]) {
    const v = searchParams.get(key);
    if (v) dest.searchParams.set(key, v);
  }

  return NextResponse.redirect(dest, 302);
}

export const config = {
  // Only run on the homepage. Static assets, API routes, /dl, and
  // every other page bypass this middleware entirely.
  matcher: "/",
};
