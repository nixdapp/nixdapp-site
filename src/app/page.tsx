import Link from "next/link";
import WaitlistForm from "./components/WaitlistForm";
import QuizWaitlist from "./components/QuizWaitlist";

const features = [
  {
    icon: "🔥",
    title: "Track Your Streak",
    description:
      "Watch your smoke-free days, hours, and minutes tick up in real time. Every milestone earns its celebration.",
  },
  {
    icon: "🧠",
    title: "Beat Cravings",
    description:
      "AI-powered craving support guides you through breathing exercises, distractions, and personalized strategies when urges hit.",
  },
  {
    icon: "💰",
    title: "Watch the Savings",
    description:
      "See exactly how much money you're saving in real time. Visualize what you can spend it on instead.",
  },
];

const faqs = [
  {
    q: "Does Nixd work for nicotine pouches like Zyn, On!, and Velo?",
    a: "Yes. Nixd is built for both vapes and nicotine pouches. Onboarding asks which products you use and how much, then builds a quit plan that matches. Cigarettes are supported too.",
  },
  {
    q: "What's the difference between cold turkey and a taper plan?",
    a: "Cold turkey means stopping completely on day one. Taper means a gradual step-down: Nixd calculates the puffs or pouches you're allowed each day and walks you down to zero on a personalized schedule. Pick whichever fits your style; you can switch later.",
  },
  {
    q: "How much does Nixd cost?",
    a: "Nixd is free to download. A subscription unlocks the full quit plan, SOS craving toolkit, and milestone tracking at $29.99 per year. Cancel any time in your Apple ID settings.",
  },
  {
    q: "What happens when a craving hits?",
    a: "Tap the SOS button. Nixd offers a 60-second guided breathing exercise, distraction prompts, and a record of how the craving played out. Most cravings pass in under five minutes; the toolkit is built for that window.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. The full app works without internet. Logs queue locally and sync the moment you're back online, so a flight or a dead zone never breaks your streak.",
  },
  {
    q: "Is my health data private?",
    a: "Yes. Sign-in is Apple Sign In (no password to leak). Your usage and mood logs are stored with row-level security so only you can read them. We don't sell data and we don't run ads. See the Privacy Policy for details.",
  },
];

const brandChips = [
  "Vapes",
  "JUUL",
  "Zyn",
  "On!",
  "Velo",
  "Nicotine Pouches",
  "Cigarettes",
];

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: "#0A1628" }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto">
        <span className="gradient-text font-bold text-xl tracking-tight">nixd</span>
        <span
          className="text-xs font-medium px-3 py-1 rounded-full"
          style={{
            background: "rgba(33, 150, 243, 0.1)",
            border: "1px solid rgba(33, 150, 243, 0.2)",
            color: "#2196F3",
          }}
        >
          iOS app
        </span>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-16 pb-12 max-w-3xl mx-auto">
        {/* Badge */}
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
          Quit Vaping &amp; Nicotine Pouches · iOS
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
          Quit vaping.{" "}
          <span className="gradient-text">For real</span>{" "}
          this time.
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Nixd is the iPhone quit companion for vapes, JUUL, and nicotine
          pouches like Zyn, On!, and Velo. Personalized plans, live streak
          tracking, and an SOS toolkit for when cravings hit.
        </p>

        {/* Brand chips for long-tail keyword surface */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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

        {/* Quiz + Waitlist */}
        <div className="flex flex-col items-center w-full">
          <QuizWaitlist />
        </div>
      </section>

      {/* Divider */}
      <div
        className="max-w-5xl mx-auto px-6"
        style={{ borderTop: "1px solid rgba(26, 37, 64, 0.8)" }}
      />

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2
          className="text-center text-sm font-semibold tracking-widest uppercase mb-12"
          style={{ color: "#8899AA" }}
        >
          Everything you need to quit for good
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card-border rounded-2xl p-6">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {f.description}
              </p>
            </div>
          ))}
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
              <summary className="flex items-center justify-between cursor-pointer list-none text-white font-medium">
                <span>{item.q}</span>
                <span
                  className="text-xl leading-none transition-transform group-open:rotate-45"
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

        {/* FAQPage JSON-LD for AI engines / SERP rich results */}
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

      {/* Second CTA */}
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
        <p className="mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
          Get notified the moment Nixd is live on the App Store.
        </p>
        <div className="flex justify-center">
          <WaitlistForm />
        </div>
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
        <p>© {new Date().getFullYear()} Nixd LLC. Built for people who are ready to quit.</p>
      </footer>
    </div>
  );
}
