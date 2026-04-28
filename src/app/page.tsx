import Link from "next/link";
import QuizWaitlist from "./components/QuizWaitlist";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/nixd-quit-vaping-pouches/id6761740706";

// ---------- Content ----------

const brandChips = [
  "Vapes",
  "JUUL",
  "Disposables",
  "Zyn",
  "On!",
  "Velo",
  "Cigarettes",
];

const differentiators = [
  {
    icon: "🧬",
    title: "Personalized from question one",
    body:
      "A 90-second quiz captures your products, daily intake, weekly spend, motivations and barriers — then builds a plan that matches you, not a generic 30-day program.",
  },
  {
    icon: "🔀",
    title: "Built for multi-product quitters",
    body:
      "Most apps pick one product. Nixd tracks vapes, nicotine pouches and cigarettes side-by-side, with independent baselines and reduction plans for each.",
  },
  {
    icon: "📉",
    title: "Adaptive taper, not rigid steps",
    body:
      "Pick cold turkey or a 7–90 day taper. Phases auto-extend if you log over-limit days, so a hard week doesn't break the plan — it just reshapes it.",
  },
  {
    icon: "🛟",
    title: "Real tools when cravings hit",
    body:
      "No chatbot gimmicks. The SOS toolkit gives you box breathing, 5-senses grounding, a 90-second movement reset, and four distraction games tuned to the 3–5 minute craving window.",
  },
];

const howItWorks = [
  {
    n: "01",
    title: "Take the quiz",
    body:
      "Answer 24 quick questions: which products you use, daily puffs / pouches / cigarettes, weekly spend, why you're quitting, what's tripped you up before. Takes about 90 seconds.",
  },
  {
    n: "02",
    title: "Get your plan",
    body:
      "Nixd builds your personalized quit plan: cold turkey or a 5-phase taper, with daily allowances calculated from your baseline. Pick a target date anywhere from 7 to 90 days.",
  },
  {
    n: "03",
    title: "Quit with you, every day",
    body:
      "Live streak, money-saved counter, 19 health milestones, daily science cards, mood and craving logging, and the SOS toolkit one tap away. Works fully offline.",
  },
];

const featureCards = [
  {
    icon: "🔥",
    title: "Live streak you can feel",
    body:
      "Watch days, hours and minutes tick up in real time on an aurora dashboard that evolves as you progress. Your best streak is always saved — even after a slip.",
  },
  {
    icon: "💰",
    title: "Money saved, in real time",
    body:
      "Enter your weekly spend and watch the counter tick up. Average user on $25/week saves over $1,300 in year one. The paywall pays for itself in days, not months.",
  },
  {
    icon: "📈",
    title: "19 health milestones",
    body:
      "From carbon monoxide normalizing on Day 1, to lung cilia regrowing at Day 5, to dopamine pathways rebuilding at Day 10, to heart-disease risk halved at Year 1. Each unlocks a shareable card with the actual physiology.",
  },
  {
    icon: "🎯",
    title: "Adaptive 5-phase taper",
    body:
      "Daily puff or pouch allowance that decreases through five phases. Log over-limit and Nixd extends the phase rather than push you into failure. Switch to cold turkey at any point.",
  },
  {
    icon: "🧠",
    title: "Mood + craving outcomes",
    body:
      "Log mood on a 1–5 scale and track craving outcomes (surfed, surfed with residual, slipped). See your rode-it-out rate climb week over week. Patterns turn invisible into actionable.",
  },
  {
    icon: "🔒",
    title: "Private by default",
    body:
      "Apple Sign In or phone — no password to leak. Row-level security means only you can read your data. We don't sell it, we don't run ads. Works fully offline; syncs when you're back.",
  },
];

const sosTools = [
  {
    name: "Box breathing",
    sub: "64 seconds · 4-4-4-4",
    body:
      "Four rounds of inhale-4, hold-4, exhale-4, hold-4. Drops your heart rate fast and resets the panic spike that drives most cravings.",
  },
  {
    name: "5-senses grounding",
    sub: "~90 seconds",
    body:
      "Guided sensory check-in: name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. Pulls your brain off the craving loop.",
  },
  {
    name: "Movement reset",
    sub: "90 seconds",
    body:
      "Stand up, stretch, walk it off — guided sequence designed to interrupt the body's craving cascade with a small dose of physiology.",
  },
  {
    name: "Distraction games",
    sub: "Craving Dodger · 2048 · Tetris · Bubble Pop",
    body:
      "Four mini-games tuned for the 3–5 minute window most cravings actually last. Leaderboards across the Nixd community for friendly competition.",
  },
];

const milestones = [
  { day: "Day 1", title: "Carbon monoxide normal" },
  { day: "Day 3", title: "Acute withdrawal peaks" },
  { day: "Day 5", title: "Lung cilia regrowing" },
  { day: "Day 7", title: "Hardest week behind you" },
  { day: "Day 10", title: "Dopamine pathways rebuilding" },
  { day: "Day 14", title: "Blood pressure stabilizing" },
  { day: "Day 21", title: "Habit-formation turning point" },
  { day: "Day 25", title: "Reward system recalibrating" },
  { day: "Day 30", title: "Lung function up to 30% better" },
  { day: "Day 45", title: "Cilia at full strength" },
  { day: "Day 60", title: "Insulin sensitivity improving" },
  { day: "Day 90", title: "Relapse risk drops dramatically" },
  { day: "Day 120", title: "Cardiovascular risk down" },
  { day: "Day 180", title: "You're a non-vaper now" },
  { day: "Day 273", title: "Pre-cancerous cells replaced" },
  { day: "Year 1", title: "Heart disease risk cut in half" },
  { day: "18 mo", title: "Lung function near non-vaper" },
  { day: "Year 2", title: "Story rewritten — permanently" },
];

const faqs = [
  {
    q: "Does Nixd work for nicotine pouches like Zyn, On!, and Velo?",
    a: "Yes. Nixd was built from day one for both vapes and nicotine pouches — Zyn, On!, Velo, Rogue, Lucy, plus custom brands. Cigarettes are supported too, and you can track multiple products in parallel with independent baselines and reduction plans.",
  },
  {
    q: "Cold turkey or taper — which works better?",
    a: "Both work. Cold turkey means stopping completely on Day 1; the dashboard tracks your streak, milestones and money saved while the SOS toolkit handles the cravings. Taper means a gradual 5-phase step-down: Nixd calculates the puffs or pouches you're allowed each day and walks you down to zero on a 7-to-90-day schedule. You can switch between methods at any point without losing your progress, mood logs, or best streak.",
  },
  {
    q: "How much does Nixd cost?",
    a: "Nixd is free to download from the App Store and includes a 3-day free trial of the full plan. Premium is $29.99 per year — about $0.08 a day, which most users save back in the first week. Cancel any time in your Apple ID settings.",
  },
  {
    q: "What happens when a craving hits?",
    a: "Tap the SOS button. Nixd offers four tools tuned to the 3–5 minute window most cravings last: 64-second box breathing, 5-senses grounding, a 90-second movement reset, or four distraction games (Craving Dodger, 2048, Tetris, Bubble Pop). After the tool ends Nixd asks how the craving went — rode it out, rode it out with residual, slipped — and feeds that into your week-over-week rode-it-out rate.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. The full app works without internet. Logs queue locally and sync the moment you're back online, so a flight, dead zone or weak signal never breaks your streak.",
  },
  {
    q: "What if I slip up?",
    a: "Slips are part of the process — most successful quitters had setbacks along the way. Tap 'Log a slip' on the home screen. Your current streak resets to Day 0 but your best streak, mood logs, craving history and money-saved totals are preserved. Nixd treats slips with zero judgment and helps you spot the trigger pattern.",
  },
  {
    q: "How long does nicotine withdrawal actually last?",
    a: "The acute physical symptoms of nicotine withdrawal — irritability, anxiety, headaches, brain fog, insomnia — typically peak between Day 2 and Day 4 and ease substantially by Day 7. Cravings keep showing up beyond that, but they get shorter and less intense. By Day 21 you're past the habit-formation turning point. By Day 90, relapse risk drops dramatically. Nixd's milestones are pinned to these recovery markers.",
  },
  {
    q: "Is my health data private?",
    a: "Yes. Sign-in is Apple Sign In or phone (no password to leak). Your usage, mood and craving logs are stored with row-level security so only you can read them. We don't sell data and we don't run ads. Read the Privacy Policy for the full breakdown.",
  },
  {
    q: "Is Nixd available on Android?",
    a: "Not yet. Nixd is iOS only at launch — built natively for iPhone with Apple Sign In, StoreKit, and HealthKit-grade privacy. Android is on the roadmap; join the waitlist below to be notified.",
  },
];

// ---------- Page ----------

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: "#0A1628" }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <span className="gradient-text font-bold text-xl tracking-tight">
          nixd
        </span>
        <div className="flex items-center gap-3">
          <Link
            href="/how-it-works"
            className="hidden sm:inline-block text-sm font-medium transition-colors"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            How it works
          </Link>
          <Link
            href="/compare/best-apps-to-quit-vaping-2026"
            className="hidden sm:inline-block text-sm font-medium transition-colors"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Compare
          </Link>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
            className="cta-gradient text-sm font-semibold px-4 py-2 rounded-full text-white transition-all"
          >
            Download
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-14 pb-12 max-w-3xl mx-auto">
        <div
          className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full mb-8"
          style={{
            background: "rgba(0, 188, 212, 0.08)",
            border: "1px solid rgba(0, 188, 212, 0.2)",
            color: "#00BCD4",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#00BCD4" }}
          />
          Vapes · Pouches · Cigarettes — one app
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
          Quit vaping.{" "}
          <span className="gradient-text">For real</span>{" "}
          this time.
        </h1>

        <p
          className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Nixd is the personalized iPhone quit companion for vapes, JUUL,
          nicotine pouches and cigarettes. Adaptive taper plans, a live streak,
          19 health milestones, and an SOS toolkit for the moment a craving
          actually hits.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {brandChips.map((chip) => (
            <span
              key={chip}
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                background: "rgba(33, 150, 243, 0.08)",
                border: "1px solid rgba(33, 150, 243, 0.2)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 mb-3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
            className="cta-gradient inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all"
            aria-label="Download Nixd on the App Store"
          >
            <span aria-hidden></span>
            <span>Download on App Store</span>
          </a>
          <a
            href="#savings"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all"
            style={{
              background: "rgba(33, 150, 243, 0.08)",
              border: "1px solid rgba(33, 150, 243, 0.25)",
              color: "white",
            }}
          >
            See what you&rsquo;d save →
          </a>
        </div>
        <p
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Free to download · 3-day trial · iOS 17+
        </p>
      </section>

      {/* Why different */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#8899AA" }}
          >
            Why Nixd is different
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Most quit apps give you a generic plan. Nixd builds yours.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {differentiators.map((d) => (
            <div key={d.title} className="card-border rounded-2xl p-7">
              <div className="text-3xl mb-4">{d.icon}</div>
              <h3 className="text-white font-semibold text-xl mb-2">
                {d.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#8899AA" }}
          >
            How it works
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Personal plan in 90 seconds. Quit support every day after.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {howItWorks.map((s) => (
            <div key={s.n} className="card-border rounded-2xl p-7 relative">
              <div
                className="text-xs font-mono mb-4 tracking-widest"
                style={{ color: "#00BCD4" }}
              >
                {s.n}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/how-it-works"
            className="text-sm font-medium transition-colors"
            style={{ color: "#00BCD4" }}
          >
            See the full personalization flow →
          </Link>
        </div>
      </section>

      {/* Feature deep dive */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#8899AA" }}
          >
            What&rsquo;s in the app
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Six things you&rsquo;ll actually use every day.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featureCards.map((f) => (
            <div key={f.title} className="card-border rounded-2xl p-6">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Health milestones timeline */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#8899AA" }}
          >
            Vape recovery timeline
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Every milestone is real physiology, not a sticker.
          </p>
          <p
            className="text-sm mt-4 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Nixd tracks 19 evidence-based recovery markers from the moment you
            quit through Year 2. Each one unlocks a shareable card with the
            actual change happening in your body.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {milestones.map((m) => (
            <div
              key={m.day}
              className="rounded-xl px-5 py-4 flex items-center gap-3"
              style={{
                background: "rgba(15, 30, 54, 0.6)",
                border: "1px solid rgba(26, 37, 64, 0.8)",
              }}
            >
              <span
                className="text-xs font-mono font-semibold px-2 py-1 rounded-md whitespace-nowrap"
                style={{
                  background: "rgba(0, 188, 212, 0.1)",
                  color: "#00BCD4",
                  border: "1px solid rgba(0, 188, 212, 0.2)",
                }}
              >
                {m.day}
              </span>
              <span
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {m.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SOS toolkit */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#8899AA" }}
          >
            SOS toolkit
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto leading-tight">
            For the 3–5 minutes a craving actually lasts.
          </p>
          <p
            className="text-sm mt-4 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            One button, four tools. After every session Nixd asks how the
            craving went — and your rode-it-out rate climbs week over week.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {sosTools.map((t) => (
            <div key={t.name} className="card-border rounded-2xl p-6">
              <div className="flex items-baseline justify-between mb-2 gap-3">
                <h3 className="text-white font-semibold text-lg">{t.name}</h3>
                <span
                  className="text-xs font-mono"
                  style={{ color: "#00BCD4" }}
                >
                  {t.sub}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Savings calculator (existing quiz, repurposed) */}
      <section
        id="savings"
        className="max-w-3xl mx-auto px-6 py-16"
      >
        <div className="text-center mb-10">
          <h2
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#8899AA" }}
          >
            Money you&rsquo;d save
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
            See your number. Then go take it back.
          </p>
        </div>
        <div className="flex justify-center">
          <QuizWaitlist />
        </div>
      </section>

      {/* Privacy callout */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div
          className="rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-start gap-4"
          style={{
            background: "rgba(33, 150, 243, 0.04)",
            border: "1px solid rgba(33, 150, 243, 0.15)",
          }}
        >
          <div className="text-3xl">🔒</div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Your data isn&rsquo;t the product.
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Apple Sign In or phone, no password to leak. Health data stored
              with row-level security so only you can read it. No ads. No data
              sold. Works offline by default — syncs only when you&rsquo;re back
              online.{" "}
              <Link
                href="/privacy"
                className="underline transition-colors"
                style={{ color: "#00BCD4" }}
              >
                Read the privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pt-4 pb-20">
        <h2
          className="text-center text-sm font-semibold tracking-widest uppercase mb-12"
          style={{ color: "#8899AA" }}
        >
          Frequently asked questions
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group card-border rounded-2xl px-6 py-4 transition-colors hover:border-[rgba(33,150,243,0.3)]"
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

      {/* Final CTA */}
      <section
        className="mx-6 sm:mx-auto max-w-2xl rounded-3xl px-8 py-14 mb-20 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(33,150,243,0.08) 0%, rgba(156,39,176,0.08) 100%)",
          border: "1px solid rgba(33, 150, 243, 0.15)",
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to be free?
        </h2>
        <p
          className="mb-8 max-w-md mx-auto"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          90 seconds to your personalized plan. Free to download. 3-day trial of
          the full app.
        </p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener"
          className="cta-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all"
        >
          <span>Download on the App Store</span>
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
          <Link
            href="/how-it-works"
            className="hover:text-white transition-colors"
          >
            How it works
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
          <a
            href="mailto:feedback@nixdapp.com"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Nixd LLC. Built for people who are ready
          to quit.
        </p>
      </footer>
    </div>
  );
}
