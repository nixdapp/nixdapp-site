import type { Metadata } from "next";
import Link from "next/link";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/nixd-quit-vaping-pouches/id6761740706";

const PAGE_URL = "https://nixdapp.com/how-it-works";

export const metadata: Metadata = {
  title: "How Nixd works — personalized quit plan in 90 seconds",
  description:
    "Inside the Nixd quit-vaping app: how the 24-question personalization quiz, adaptive 5-phase taper, 19 health milestones, and SOS toolkit work together to get you off vapes, nicotine pouches, or cigarettes.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How Nixd works — personalized quit plan in 90 seconds",
    description:
      "Inside the Nixd quit app: 24-question personalization, adaptive taper, 19 milestones, SOS toolkit.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Nixd works — personalized quit plan in 90 seconds",
    description:
      "Inside the Nixd quit app: 24-question personalization, adaptive taper, 19 milestones, SOS toolkit.",
  },
};

const quizDimensions = [
  { d: "Products", v: "Vapes, JUUL, disposables, pouches (Zyn / On! / Velo / Rogue / Lucy / custom), cigarettes — multi-select" },
  { d: "Daily intake", v: "Puffs / pouches / cigarettes per day; mg per pod for vapes; strength for pouches" },
  { d: "Weekly spend", v: "Drives the live money-saved counter and personalized payback math" },
  { d: "How long", v: "Rough length of time using nicotine, to calibrate withdrawal expectations" },
  { d: "Past attempts", v: "Tried before? What happened? Sets the tone of guidance you get" },
  { d: "Why now", v: "Health, money, family, partner, sports, appearance — multi-select motivators" },
  { d: "Symptoms", v: "Anxiety, brain fog, mood swings, sleep, etc. — informs daily content" },
  { d: "Barriers", v: "Stress, social, boredom, drinking — informs SOS prompts and lessons" },
  { d: "Quit method", v: "Cold turkey or 7–90 day taper — switchable later without losing data" },
  { d: "Letter to future you", v: "Optional message your future self can read at milestone unlocks" },
];

const planSteps = [
  {
    n: "Phase 1",
    title: "Stabilize",
    body: "Daily allowance set just below your honest baseline. Goal: prove to yourself the new ceiling is doable before we drop it.",
  },
  {
    n: "Phase 2",
    title: "Step down",
    body: "About a 20% reduction. Most people feel the first real cravings here. The SOS toolkit is one tap away on every screen.",
  },
  {
    n: "Phase 3",
    title: "Halve it",
    body: "You're at roughly half your starting amount. Cravings shorten. The dashboard money-saved number starts feeling real.",
  },
  {
    n: "Phase 4",
    title: "Cliff edge",
    body: "Final structured reduction before zero. If you log over-limit days, Nixd extends the phase rather than push you to fail. Adaptive, not rigid.",
  },
  {
    n: "Phase 5",
    title: "Free",
    body: "Allowance hits zero. Your streak counter takes over. Milestones unlock. SOS still there for the cravings that show up at Day 9, Day 23, Day 47 — they get shorter every time.",
  },
];

const dailyLoop = [
  {
    icon: "📊",
    title: "Wake up",
    body: "Aurora dashboard shows live streak, days/hours/minutes free, money saved so far, and your daily science card pinned to today's milestone.",
  },
  {
    icon: "🎯",
    title: "Through the day",
    body: "Log puffs, pouches or cigarettes with one tap if you slip. Log mood on a 1–5 scale. Log cravings as they pass — surfed, surfed with residual, slipped.",
  },
  {
    icon: "🚨",
    title: "When a craving hits",
    body: "Tap SOS. Pick a tool — box breathing (64s), 5-senses grounding, 90-second movement, or one of four distraction games. Most cravings fade in 3–5 minutes.",
  },
  {
    icon: "🏆",
    title: "Milestone day",
    body: "Hit Day 1, 3, 5, 7, 10, 14, 21, 25, 30, 45, 60, 90, 120, 180, 273, Year 1, 18 mo, or Year 2 and Nixd surfaces a full-screen card with the actual physiology happening — shareable as an image with App Store branding.",
  },
];

const science = [
  {
    title: "Acute withdrawal peaks Day 2–4",
    body: "Nicotine clears the body within 72 hours. The hardest physical symptoms — irritability, anxiety, headaches, brain fog — peak between Day 2 and Day 4 and ease substantially by Day 7. Nixd front-loads the SOS toolkit and milestone reinforcement during this window.",
  },
  {
    title: "Day 21 is the habit-formation turning point",
    body: "Behavioral research consistently puts new-habit reinforcement around the 21-day mark. Reaching Day 21 is the strongest single predictor of making it to 90.",
  },
  {
    title: "Day 90 = relapse risk drops dramatically",
    body: "By 3 months out, the brain's nicotine-reward pathways have substantially recalibrated. Relapse rates among people who reach 90 days drop sharply versus those who don't.",
  },
  {
    title: "Year 1 = heart disease risk halved",
    body: "Twelve months nicotine-free returns coronary heart disease risk to roughly half that of an active user — one of the most-cited public-health milestones from US Surgeon General reports.",
  },
];

export default function HowItWorksPage() {
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
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-12">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#00BCD4" }}
        >
          How it works
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
          A quit plan that&rsquo;s actually yours.
        </h1>
        <p
          className="text-lg leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Most quit apps hand you a generic 30-day countdown. Nixd asks
          twenty-four questions about your specific products, intake, spend,
          motivations and barriers — then builds a plan that matches you. Below
          is exactly how it works under the hood.
        </p>
      </section>

      {/* Quiz dimensions */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          1. The 90-second personalization quiz
        </h2>
        <p
          className="leading-relaxed mb-8"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Ten dimensions of input drive the plan that comes out the other side.
          Nothing here is fluff — every answer changes something concrete in
          your dashboard, allowance, or content.
        </p>
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(26, 37, 64, 0.8)" }}>
          {quizDimensions.map((q, i) => (
            <div
              key={q.d}
              className="px-6 py-4 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-6"
              style={{
                background:
                  i % 2 === 0 ? "rgba(15, 30, 54, 0.4)" : "rgba(15, 30, 54, 0.6)",
                borderTop: i === 0 ? "none" : "1px solid rgba(26, 37, 64, 0.6)",
              }}
            >
              <div className="font-semibold text-white text-sm">{q.d}</div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                {q.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plan: 5 phases */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          2. Your adaptive 5-phase taper
        </h2>
        <p
          className="leading-relaxed mb-8"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Pick cold turkey and the phases collapse to a single Day-0 cliff. Pick
          a 7–90 day taper and Nixd splits the runway into five phases — each
          with its own daily puff/pouch/cigarette allowance. If you log
          over-limit days, the current phase auto-extends instead of pushing you
          into failure mode.
        </p>
        <div className="flex flex-col gap-3">
          {planSteps.map((p) => (
            <div key={p.n} className="card-border rounded-2xl p-6 flex items-start gap-4">
              <span
                className="text-xs font-mono font-semibold px-2 py-1 rounded-md whitespace-nowrap shrink-0"
                style={{
                  background: "rgba(0, 188, 212, 0.1)",
                  color: "#00BCD4",
                  border: "1px solid rgba(0, 188, 212, 0.2)",
                }}
              >
                {p.n}
              </span>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p
          className="text-sm mt-6"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Tracking multiple products? Each gets its own independent 5-phase plan
          with its own allowance, so a vape taper and a Zyn taper can run side
          by side without interfering.
        </p>
      </section>

      {/* Daily loop */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          3. The daily loop
        </h2>
        <p
          className="leading-relaxed mb-8"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          You don&rsquo;t need to think about the system. Open the app, glance
          at the dashboard, log what happened, tap SOS if a craving spikes.
          That&rsquo;s the loop.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {dailyLoop.map((d) => (
            <div key={d.title} className="card-border rounded-2xl p-6">
              <div className="text-3xl mb-3">{d.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{d.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Science */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          4. The science Nixd is built on
        </h2>
        <p
          className="leading-relaxed mb-8"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          The 19 milestones aren&rsquo;t marketing stickers. They&rsquo;re
          pinned to documented physiological recovery markers from the US
          Surgeon General&rsquo;s reports on smoking cessation, the CDC, and
          peer-reviewed addiction research.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {science.map((s) => (
            <div key={s.title} className="card-border rounded-2xl p-6">
              <h3 className="text-white font-semibold text-base mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          5. Your data, your device
        </h2>
        <p
          className="leading-relaxed mb-4"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Nixd is offline-first. Everything you log persists locally on your
          iPhone and syncs to our servers only when you&rsquo;re connected. Sign
          in with Apple ID or phone — there&rsquo;s no password to leak. On the
          server side, every row of your data is gated by row-level security so
          only your account can read it.
        </p>
        <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          We don&rsquo;t sell data. We don&rsquo;t run ads. The business model
          is a $29.99/year subscription and that&rsquo;s it.{" "}
          <Link
            href="/privacy"
            className="underline transition-colors"
            style={{ color: "#00BCD4" }}
          >
            Privacy policy
          </Link>
          .
        </p>
      </section>

      {/* HowTo schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to quit vaping with Nixd",
          description:
            "Step-by-step quit-vaping plan using the Nixd iOS app: personalization quiz, adaptive taper, daily tracking, SOS toolkit.",
          totalTime: "P90D",
          step: [
            {
              "@type": "HowToStep",
              position: 1,
              name: "Take the 90-second personalization quiz",
              text: "Answer 24 questions about products you use, daily intake, weekly spend, motivations, and barriers.",
            },
            {
              "@type": "HowToStep",
              position: 2,
              name: "Pick cold turkey or a 7–90 day adaptive taper",
              text: "Choose your method. Taper splits into 5 phases with daily allowances; phases auto-extend if you log over-limit days.",
            },
            {
              "@type": "HowToStep",
              position: 3,
              name: "Log puffs, mood, and cravings each day",
              text: "Track what happens. The dashboard shows live streak, money saved, and your next milestone.",
            },
            {
              "@type": "HowToStep",
              position: 4,
              name: "Use the SOS toolkit for cravings",
              text: "Tap SOS. Use box breathing (64s), 5-senses grounding, a 90-second movement reset, or one of four distraction games. Log the outcome.",
            },
            {
              "@type": "HowToStep",
              position: 5,
              name: "Hit your 19 health milestones",
              text: "Day 1 to Year 2, Nixd unlocks evidence-based recovery markers as your body heals.",
            },
          ],
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
          Build your plan in 90 seconds.
        </h2>
        <p
          className="mb-7 max-w-md mx-auto text-sm"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Free to download · 3-day trial of the full app · iOS 17+
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
            href="/compare/best-apps-to-quit-vaping-2026"
            className="hover:text-white transition-colors"
          >
            Compare
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
