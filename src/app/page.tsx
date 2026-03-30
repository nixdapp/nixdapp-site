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
          iOS · April 12
        </span>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-16 pb-24 max-w-3xl mx-auto">
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
          Quit Vaping App · iOS · April 12
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
          Quit vaping.{" "}
          <span className="gradient-text">For real</span>{" "}
          this time.
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Nixd is your personalized quit-vaping companion. Track your streak,
          fight cravings with AI-powered tools, and watch your savings grow —
          one smoke-free day at a time.
        </p>

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

      {/* Second CTA */}
      <section
        className="mx-6 sm:mx-auto max-w-2xl rounded-3xl px-8 py-14 mb-20 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(33,150,243,0.08) 0%, rgba(156,39,176,0.08) 100%)",
          border: "1px solid rgba(33, 150, 243, 0.15)",
        }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to be free?
        </h2>
        <p className="mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
          Nixd launches on the App Store April 12. Get notified the moment it&apos;s live.
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
        <p>© {new Date().getFullYear()} Nixd. Built for people who are ready to quit.</p>
      </footer>
    </div>
  );
}
