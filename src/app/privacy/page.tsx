import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Nixd",
  description: "Privacy policy for the Nixd quit-vaping iOS app.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-void px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-text-muted hover:text-nix-teal transition-colors"
        >
          &larr; Back to Nixd
        </Link>

        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-text-muted text-sm mb-10">
          Effective April 6, 2026
        </p>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              What Nixd Is
            </h2>
            <p>
              Nixd (&quot;we&quot;, &quot;our&quot;, &quot;the app&quot;) is a
              quit-vaping and nicotine cessation iOS application. This policy
              explains what data we collect, how we use it, and your rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              What We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-text-primary">Quit plan data:</strong>{" "}
                Quit date, quit method (cold turkey or taper), daily usage
                targets, timeline preferences, and your reasons for quitting.
              </li>
              <li>
                <strong className="text-text-primary">Usage logs:</strong> Puff
                and pouch timestamps you log manually to track your progress.
              </li>
              <li>
                <strong className="text-text-primary">Mood entries:</strong>{" "}
                Optional mood ratings (1-5) and notes you choose to record.
              </li>
              <li>
                <strong className="text-text-primary">Craving events:</strong>{" "}
                When you use a craving tool, which tool you used, and whether
                you resisted.
              </li>
              <li>
                <strong className="text-text-primary">Device info:</strong>{" "}
                Device model, OS version, app version, and timezone for
                debugging and analytics.
              </li>
              <li>
                <strong className="text-text-primary">Error logs:</strong>{" "}
                Crash reports and error events to help us fix bugs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              How We Store It
            </h2>
            <p>
              Your data is stored locally on your device and synced to our cloud
              backend powered by Supabase. All data is transmitted over HTTPS
              and protected with row-level security, meaning only you can access
              your own data. Authentication uses Apple Sign In — we never see or
              store your password.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              How We Use It
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To personalize your quit plan and track your progress</li>
              <li>To calculate streaks, money saved, and health milestones</li>
              <li>
                To improve the app through aggregated, anonymized analytics
              </li>
              <li>To diagnose and fix bugs via error reporting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              What We Don&apos;t Do
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We do not sell your data to third parties. Ever.</li>
              <li>We do not share your personal data with advertisers.</li>
              <li>
                We do not use your data for purposes unrelated to helping you
                quit.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              Your Rights
            </h2>
            <p>
              You can delete your account and all associated data at any time.
              To request account deletion, contact us at{" "}
              <a
                href="mailto:feedback@nixdapp.com"
                className="text-nix-teal hover:underline"
              >
                feedback@nixdapp.com
              </a>
              . We will permanently delete all of your data from our servers
              within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              Contact
            </h2>
            <p>
              Questions about this policy? Reach out at{" "}
              <a
                href="mailto:feedback@nixdapp.com"
                className="text-nix-teal hover:underline"
              >
                feedback@nixdapp.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
