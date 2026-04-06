import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — Nixd",
  description: "Get help with the Nixd quit-vaping iOS app.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-void px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-text-muted hover:text-nix-teal transition-colors"
        >
          &larr; Back to Nixd
        </Link>

        <h1 className="text-3xl font-bold mb-2">Support</h1>
        <p className="text-text-secondary mb-10">
          Need help? Check the FAQs below or reach out directly.
        </p>

        {/* Contact banner */}
        <div className="mb-10 rounded-2xl border border-border bg-surface p-6">
          <p className="text-text-secondary mb-2">
            Have a question, bug report, or feedback?
          </p>
          <a
            href="mailto:feedback@nixdapp.com"
            className="text-xl font-semibold text-nix-teal hover:underline"
          >
            feedback@nixdapp.com
          </a>
        </div>

        {/* FAQs */}
        <h2 className="text-xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <FAQ q="How do I reset my streak?">
            If you slip up, tap &quot;Log a slip&quot; on the home screen. Your
            streak resets to Day 0, but your best streak is always saved.
            Slipping up is normal and doesn&apos;t mean you&apos;ve failed — it
            means you&apos;re still trying.
          </FAQ>

          <FAQ q="Can I change my quit method?">
            Yes. Go to the Plan tab and tap &quot;Modify Plan.&quot; You can
            switch between cold turkey and gradual reduction at any time without
            losing your mood logs, craving history, or best streak.
          </FAQ>

          <FAQ q="What happens if I slip up?">
            Nixd treats slips with zero judgment. Log it, see what triggered it,
            and start again. Your progress data stays intact — we just reset the
            day counter. Most people who quit successfully had setbacks along the
            way.
          </FAQ>

          <FAQ q="How does tapering work?">
            Gradual reduction gives you a daily puff/pouch allowance that
            decreases over your chosen timeline (14-90 days). You log each puff
            with the + button, and the ring shows how close you are to your
            limit. The goal is zero by your target date.
          </FAQ>

          <FAQ q="How does cold turkey work?">
            Cold turkey means stopping completely from Day 1. Your dashboard
            tracks your streak, health milestones, and money saved. The SOS
            toolkit (breathing, grounding, games) is there for when cravings hit
            hardest — usually Days 2-4.
          </FAQ>

          <FAQ q="What are the health milestones?">
            Nixd tracks 18 milestones tied to real physiological recovery — from
            nicotine leaving your body on Day 3, to your lungs recovering at
            Month 6, to heart disease risk dropping by half at Year 1. Each one
            unlocks automatically when you reach it.
          </FAQ>

          <FAQ q="Does the app work offline?">
            Yes. Nixd works fully offline. All your data is stored on your
            device first. When you reconnect, everything syncs automatically —
            no data is ever lost.
          </FAQ>

          <FAQ q="How do I delete my account?">
            Send an email to{" "}
            <a
              href="mailto:feedback@nixdapp.com"
              className="text-nix-teal hover:underline"
            >
              feedback@nixdapp.com
            </a>{" "}
            requesting account deletion. We will permanently remove all of your
            data from our servers within 30 days. See our{" "}
            <Link href="/privacy" className="text-nix-teal hover:underline">
              Privacy Policy
            </Link>{" "}
            for details.
          </FAQ>
        </div>

        {/* Offline note */}
        <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
          <h3 className="font-semibold text-text-primary mb-2">
            Offline Support
          </h3>
          <p className="text-text-secondary text-sm">
            Nixd works fully offline. All your data is stored on your device
            first and syncs automatically when you reconnect. You never lose
            progress.
          </p>
        </div>
      </div>
    </main>
  );
}

function FAQ({
  q,
  children,
}: {
  q: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-xl border border-border bg-surface overflow-hidden">
      <summary className="cursor-pointer px-6 py-4 text-text-primary font-medium flex items-center justify-between">
        {q}
        <span className="ml-4 text-text-muted group-open:rotate-45 transition-transform text-lg">
          +
        </span>
      </summary>
      <div className="px-6 pb-5 text-text-secondary leading-relaxed">
        {children}
      </div>
    </details>
  );
}
