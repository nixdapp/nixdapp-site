import type { Metadata } from "next";
import Link from "next/link";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/nixd-quit-vaping-pouches/id6761740706";

const PAGE_URL =
  "https://nixdapp.com/compare/best-apps-to-quit-vaping-2026";

export const metadata: Metadata = {
  title: "Best apps to quit vaping in 2026 (honest comparison)",
  description:
    "Side-by-side comparison of the top apps to quit vaping and nicotine pouches in 2026: Nixd, Smoke Free, Kwit, QuitSure, QuitNow. Features, pricing, multi-product support, and what each one is actually good at.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Best apps to quit vaping in 2026 — honest comparison",
    description:
      "Side-by-side: Nixd, Smoke Free, Kwit, QuitSure, QuitNow. Features, pricing, multi-product support, and where each one shines.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best apps to quit vaping in 2026 — honest comparison",
    description:
      "Side-by-side: Nixd, Smoke Free, Kwit, QuitSure, QuitNow. Features, pricing, multi-product support.",
  },
};

// ---------- Data ----------

interface Row {
  feature: string;
  nixd: string;
  smokefree: string;
  kwit: string;
  quitsure: string;
  quitnow: string;
}

const rows: Row[] = [
  {
    feature: "Multi-product support (vape + pouches + cigarettes)",
    nixd: "Yes — simultaneous tracking",
    smokefree: "Cigarettes only",
    kwit: "Smoking-focused; vaping limited",
    quitsure: "Cigarettes only",
    quitnow: "Cigarettes only",
  },
  {
    feature: "Nicotine pouches (Zyn, On!, Velo)",
    nixd: "Yes — first-class",
    smokefree: "No",
    kwit: "No",
    quitsure: "No",
    quitnow: "No",
  },
  {
    feature: "Personalized onboarding quiz",
    nixd: "24+ questions",
    smokefree: "Basic",
    kwit: "Moderate",
    quitsure: "Yes (6-day program)",
    quitnow: "Basic",
  },
  {
    feature: "Cold turkey + adaptive taper",
    nixd: "Both, switchable",
    smokefree: "Cold turkey",
    kwit: "Both",
    quitsure: "Cold turkey",
    quitnow: "Cold turkey",
  },
  {
    feature: "Phases auto-extend if you slip",
    nixd: "Yes",
    smokefree: "—",
    kwit: "No",
    quitsure: "—",
    quitnow: "—",
  },
  {
    feature: "Health milestones",
    nixd: "19 evidence-based",
    smokefree: "Yes",
    kwit: "Yes",
    quitsure: "Yes",
    quitnow: "Yes",
  },
  {
    feature: "Live money-saved counter",
    nixd: "Yes",
    smokefree: "Yes",
    kwit: "Yes",
    quitsure: "Yes",
    quitnow: "Yes",
  },
  {
    feature: "SOS craving tools",
    nixd: "Box breathing, grounding, movement, 4 distraction games",
    smokefree: "Tips only",
    kwit: "Motivational cards",
    quitsure: "6-day course",
    quitnow: "Community + tips",
  },
  {
    feature: "Craving outcome logging (rode-it-out rate)",
    nixd: "Yes",
    smokefree: "No",
    kwit: "Limited",
    quitsure: "No",
    quitnow: "No",
  },
  {
    feature: "Mood tracking",
    nixd: "Yes (1–5 + notes)",
    smokefree: "No",
    kwit: "Yes",
    quitsure: "No",
    quitnow: "No",
  },
  {
    feature: "Works fully offline",
    nixd: "Yes — offline-first",
    smokefree: "Partially",
    kwit: "Partially",
    quitsure: "No",
    quitnow: "Partially",
  },
  {
    feature: "Apple Sign In, no ads, no data sold",
    nixd: "Yes",
    smokefree: "Has ads on free tier",
    kwit: "Yes",
    quitsure: "Yes",
    quitnow: "Has ads on free tier",
  },
  {
    feature: "Pricing (annual)",
    nixd: "$29.99/yr",
    smokefree: "~$30/yr",
    kwit: "~$40/yr",
    quitsure: "~$60 one-time",
    quitnow: "~$30/yr",
  },
  {
    feature: "Free trial",
    nixd: "3 days",
    smokefree: "Free tier with ads",
    kwit: "Free tier",
    quitsure: "No",
    quitnow: "Free tier with ads",
  },
  {
    feature: "Platform",
    nixd: "iOS",
    smokefree: "iOS, Android",
    kwit: "iOS, Android",
    quitsure: "iOS, Android",
    quitnow: "iOS, Android",
  },
];

const verdicts = [
  {
    name: "Nixd",
    sub: "Best for vapers, pouch users, and multi-product quitters",
    body:
      "The only major app built natively for vapes and nicotine pouches (Zyn, On!, Velo) alongside cigarettes. Adaptive 5-phase taper that auto-extends if you slip, 19 evidence-based health milestones, and a real SOS toolkit (box breathing, grounding, movement, four distraction games) tuned for the 3–5 minute craving window. iOS only at launch.",
    href: APP_STORE_URL,
    tag: "Editor's pick · 2026",
    primary: true,
  },
  {
    name: "Smoke Free",
    sub: "Best lightweight cigarette tracker",
    body:
      "Long-running cigarette-quitting app with a clean dashboard, money-saved counter, and basic milestones. Works well for cold-turkey cigarette quitters who want a simple tracker. Limited support for vapes; no pouch support; ads on the free tier.",
  },
  {
    name: "Kwit",
    sub: "Best for cigarette quitters wanting CBT-style content",
    body:
      "France-based, multilingual, with a mature blog and CBT-flavored motivational content. Stronger on smoking than vaping; no nicotine pouch support; subscription is on the higher end of the market.",
  },
  {
    name: "QuitSure",
    sub: "Best for a structured 6-day program",
    body:
      "A short, course-driven approach centered on a 6-day cognitive-behavioral program. One-time fee instead of subscription. Cigarette-focused; not designed for vapes or pouches; limited ongoing daily support after the course.",
  },
  {
    name: "QuitNow",
    sub: "Best community-driven option",
    body:
      "Community-first app with millions of users, stats and a chat-style support board. Cigarette-focused; vape and pouch support is minimal; ads on the free tier.",
  },
];

const faqs = [
  {
    q: "What's the best app to quit vaping in 2026?",
    a: "For vape quitters specifically — and especially for anyone who also uses nicotine pouches like Zyn, On!, or Velo, or who wants to track multiple nicotine products at once — Nixd is the most fit-for-purpose option in 2026. It was built from day one for vapes and pouches rather than retrofitted from a cigarette-quitting app, and it pairs an adaptive taper with a real-time SOS toolkit. Smoke Free, Kwit, QuitSure and QuitNow remain strong choices for cigarette quitters but offer limited support for vaping or pouches.",
  },
  {
    q: "Is there a free app to quit vaping?",
    a: "Most major quit apps including Nixd are free to download. Nixd offers a 3-day free trial of the full app and then $29.99/year. Smoke Free and QuitNow have ad-supported free tiers. Kwit has a limited free tier. QuitSure is paid up-front (no subscription).",
  },
  {
    q: "Which quit-vaping app supports nicotine pouches like Zyn, On! and Velo?",
    a: "Nixd is the only one of the major quit apps that supports nicotine pouches as a first-class product. You can track Zyn, On!, Velo, Rogue, Lucy and custom brands, set baseline pouches per day, and get an independent reduction plan for pouches that runs in parallel with any vape or cigarette plan you're also working.",
  },
  {
    q: "Can I quit vaping without an app?",
    a: "Yes — and the data is mixed on whether apps actually outperform unaided cold turkey. What apps do reliably help with is structure: visible streak, money saved, milestones, and an in-the-moment craving tool that shortens the 3–5 minute craving window. If you've tried unaided and slipped, an app like Nixd is worth trying for that scaffolding alone.",
  },
  {
    q: "Cold turkey vs taper — which is better for vaping?",
    a: "Cold turkey has a faster physiological clearance (acute withdrawal peaks Day 2–4 and eases by Day 7), but a higher quit-attempt failure rate for heavy vapers. A structured taper smooths the transition and lets you test the new behavior pattern before going to zero. Nixd lets you switch between methods at any point without losing your progress, mood logs or best streak — which matters because most successful quitters end up doing some of both.",
  },
];

// ---------- Page ----------

export default function ComparePage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A1628" }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Link
          href="/"
          className="gradient-text font-bold text-xl tracking-tight"
        >
          nixd
        </Link>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener"
          className="cta-gradient text-sm font-semibold px-4 py-2 rounded-full text-white"
        >
          Download
        </a>
      </nav>

      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-10">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#00BCD4" }}
        >
          Comparison · Updated April 2026
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
          Best apps to quit vaping in 2026
        </h1>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          An honest, opinionated side-by-side of the five most-used quit apps in
          2026: Nixd, Smoke Free, Kwit, QuitSure and QuitNow. We built one of
          them, so we&rsquo;re biased — but the table is accurate to each
          app&rsquo;s public feature list at the time of writing. Pick the one
          that fits how you actually use nicotine.
        </p>
        <p
          className="text-xs mt-4"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Nixd LLC publishes this comparison. Other product names are
          trademarks of their owners; pricing reflects publicly listed plans
          and may have changed.
        </p>
      </section>

      {/* Verdicts */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2
          className="text-sm font-semibold tracking-widest uppercase mb-6"
          style={{ color: "#8899AA" }}
        >
          The short version
        </h2>
        <div className="flex flex-col gap-4">
          {verdicts.map((v) => (
            <div
              key={v.name}
              className="rounded-2xl p-6"
              style={{
                background: v.primary
                  ? "linear-gradient(135deg, rgba(33,150,243,0.08) 0%, rgba(156,39,176,0.06) 100%)"
                  : "rgba(15, 30, 54, 0.6)",
                border: v.primary
                  ? "1px solid rgba(33, 150, 243, 0.4)"
                  : "1px solid rgba(26, 37, 64, 0.8)",
              }}
            >
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                <h3 className="text-white font-semibold text-xl">
                  {v.name}
                  <span
                    className="ml-3 text-xs font-medium"
                    style={{ color: "#00BCD4" }}
                  >
                    {v.sub}
                  </span>
                </h3>
                {v.tag && (
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(0, 188, 212, 0.12)",
                      color: "#00BCD4",
                      border: "1px solid rgba(0, 188, 212, 0.3)",
                    }}
                  >
                    {v.tag}
                  </span>
                )}
              </div>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {v.body}
              </p>
              {v.href && (
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener"
                  className="text-sm font-semibold"
                  style={{ color: "#00BCD4" }}
                >
                  Download Nixd on the App Store →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Table */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2
          className="text-sm font-semibold tracking-widest uppercase mb-6"
          style={{ color: "#8899AA" }}
        >
          Feature-by-feature
        </h2>
        <div
          className="rounded-2xl overflow-x-auto"
          style={{
            border: "1px solid rgba(26, 37, 64, 0.8)",
            background: "rgba(15, 30, 54, 0.4)",
          }}
        >
          <table className="w-full text-sm" style={{ minWidth: 900 }}>
            <thead>
              <tr style={{ background: "rgba(33, 150, 243, 0.06)" }}>
                <th
                  className="text-left font-semibold px-5 py-4"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  Feature
                </th>
                <th
                  className="text-left font-semibold px-5 py-4"
                  style={{ color: "#00BCD4" }}
                >
                  Nixd
                </th>
                <th
                  className="text-left font-semibold px-5 py-4"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  Smoke Free
                </th>
                <th
                  className="text-left font-semibold px-5 py-4"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  Kwit
                </th>
                <th
                  className="text-left font-semibold px-5 py-4"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  QuitSure
                </th>
                <th
                  className="text-left font-semibold px-5 py-4"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  QuitNow
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.feature}
                  style={{
                    borderTop: "1px solid rgba(26, 37, 64, 0.6)",
                    background:
                      i % 2 === 0 ? "transparent" : "rgba(15, 30, 54, 0.4)",
                  }}
                >
                  <td
                    className="px-5 py-4 font-medium"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {r.feature}
                  </td>
                  <td
                    className="px-5 py-4"
                    style={{ color: "#00BCD4", fontWeight: 500 }}
                  >
                    {r.nixd}
                  </td>
                  <td
                    className="px-5 py-4"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {r.smokefree}
                  </td>
                  <td
                    className="px-5 py-4"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {r.kwit}
                  </td>
                  <td
                    className="px-5 py-4"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {r.quitsure}
                  </td>
                  <td
                    className="px-5 py-4"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {r.quitnow}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2
          className="text-center text-sm font-semibold tracking-widest uppercase mb-10"
          style={{ color: "#8899AA" }}
        >
          Frequently asked
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group card-border rounded-2xl px-6 py-4"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none text-white font-medium gap-4">
                <span>{item.q}</span>
                <span
                  className="text-xl leading-none transition-transform group-open:rotate-45 shrink-0"
                  style={{ color: "#00BCD4" }}
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p
                className="text-sm leading-relaxed mt-3"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <script
          type="application/ld+json"
          suppressHydrationWarning
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </section>

      {/* Article schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best apps to quit vaping in 2026 (honest comparison)",
          datePublished: "2026-04-28",
          dateModified: "2026-04-28",
          author: { "@type": "Organization", name: "Nixd LLC" },
          publisher: {
            "@type": "Organization",
            name: "Nixd LLC",
            logo: { "@type": "ImageObject", url: "https://nixdapp.com/icon.png" },
          },
          mainEntityOfPage: PAGE_URL,
        })}
      </script>

      {/* CTA */}
      <section
        className="mx-6 sm:mx-auto max-w-2xl rounded-3xl px-8 py-12 mb-16 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(33,150,243,0.08) 0%, rgba(156,39,176,0.08) 100%)",
          border: "1px solid rgba(33, 150, 243, 0.15)",
        }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Try the only one built for vapes & pouches.
        </h2>
        <p
          className="mb-7 max-w-md mx-auto text-sm"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Free download · 3-day trial of the full plan · iOS 17+
        </p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener"
          className="cta-gradient inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white"
        >
          Download Nixd
        </a>
      </section>

      {/* Footer */}
      <footer
        className="text-center py-8 px-6"
        style={{
          borderTop: "1px solid rgba(26, 37, 64, 0.8)",
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.8rem",
        }}
      >
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-3">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link
            href="/how-it-works"
            className="hover:text-white transition-colors"
          >
            How it works
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/support" className="hover:text-white transition-colors">
            Support
          </Link>
        </div>
        <p>© {new Date().getFullYear()} Nixd LLC.</p>
      </footer>
    </main>
  );
}
