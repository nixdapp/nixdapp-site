import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Nixd",
  description: "Terms of Use for the Nixd quit-vaping iOS app.",
  alternates: { canonical: "https://nixdapp.com/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-void px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-text-muted hover:text-nix-teal transition-colors"
        >
          &larr; Back to Nixd
        </Link>

        <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
        <p className="text-text-muted text-sm mb-10">Effective April 27, 2026</p>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          <section>
            <p>
              These Terms of Use (&quot;Terms&quot;) govern your access to and
              use of the Nixd: Quit Vaping &amp; Pouches mobile application
              (bundle ID: <code>com.nixdvaping.app</code>) provided by Nixd LLC
              (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By downloading,
              installing, or using Nixd, you agree to be bound by these Terms.
              If you do not agree, do not use the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              1. Acceptance &amp; Apple EULA
            </h2>
            <p>
              By creating an account or using any part of the Nixd app, you
              acknowledge that you have read, understood, and agree to be bound
              by these Terms and our{" "}
              <Link
                href="/privacy"
                className="text-nix-teal hover:underline"
              >
                Privacy Policy
              </Link>
              . These Terms supplement the standard{" "}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nix-teal hover:underline"
              >
                Apple Licensed Application End User License Agreement (EULA)
              </a>
              . In the event of a conflict between these Terms and the Apple
              EULA, these Terms shall govern to the extent permitted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              2. Eligibility
            </h2>
            <p>
              You must be at least 18 years of age to use Nixd. By using the
              app, you represent and warrant that you are 18 or older and have
              the legal capacity to enter into these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              3. Description of Service
            </h2>
            <p>
              Nixd is a quit-vaping and nicotine pouch cessation support app
              that provides:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Personalized quit plans (cold turkey or taper methods)</li>
              <li>
                Craving support tools including breathing exercises and coping
                techniques
              </li>
              <li>Streak tracking and health milestone progress</li>
              <li>Money saved calculations</li>
              <li>Daily motivational and educational content</li>
              <li>Mood tracking and self-reported usage logging</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              4. Subscription Terms
            </h2>
            <p>
              Nixd is available as an auto-renewable subscription at{" "}
              <strong className="text-text-primary">$29.99 per year</strong>. By
              subscribing, you agree to the following:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>
                <strong className="text-text-primary">Auto-renewal:</strong>{" "}
                Your subscription will automatically renew at the end of each
                billing period unless you cancel at least 24 hours before the
                current period ends.
              </li>
              <li>
                <strong className="text-text-primary">Billing:</strong> Payment
                will be charged to your Apple ID account at confirmation of
                purchase. Your account will be charged for renewal within 24
                hours prior to the end of the current period.
              </li>
              <li>
                <strong className="text-text-primary">Price changes:</strong>{" "}
                Subscription prices may change. We will notify you of any price
                changes in advance. Continued use after a price change
                constitutes acceptance of the new price.
              </li>
              <li>
                <strong className="text-text-primary">Cancellation:</strong>{" "}
                You may cancel any time through your Apple ID account settings.
                Cancellation takes effect at the end of the current billing
                period. No refunds are provided for partial billing periods.
              </li>
              <li>
                <strong className="text-text-primary">Free trial:</strong> If a
                free trial is offered, any unused portion of the trial will be
                forfeited when you purchase a subscription.
              </li>
            </ul>
            <p className="mt-3">
              All subscription management and refund requests are handled
              through Apple. To manage your subscription, go to Settings &gt;
              Apple ID &gt; Subscriptions on your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              5. User Accounts
            </h2>
            <p>
              Nixd uses Apple Sign In for authentication. You are responsible
              for maintaining the security of your Apple ID and any activity
              that occurs under your account. You agree to provide accurate
              information during onboarding, not share your account access with
              others, and notify us of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              6. User Conduct
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Use the app for any unlawful purpose</li>
              <li>
                Attempt to reverse engineer, decompile, or disassemble the app
              </li>
              <li>Interfere with or disrupt the app&apos;s servers or networks</li>
              <li>Attempt to gain unauthorized access to the app or its systems</li>
              <li>Reproduce, distribute, or create derivative works from the app</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              7. Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of Nixd — including text,
              graphics, logos, icons, animations, audio, and software — are the
              exclusive property of Nixd LLC and are protected by copyright,
              trademark, and other intellectual property laws. You are granted a
              limited, non-exclusive, non-transferable license to use the app
              for personal, non-commercial purposes in accordance with these
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              8. Medical Disclaimer
            </h2>
            <p>
              <strong className="text-text-primary">
                Nixd is not a medical device and does not provide medical
                advice.
              </strong>{" "}
              The app is intended for informational and motivational purposes
              only. The content within Nixd — including quit plans, health
              milestones, and educational materials — is not a substitute for
              professional medical advice, diagnosis, or treatment.
            </p>
            <p className="mt-3">
              Consult a qualified healthcare provider before making any
              decisions about quitting nicotine, especially if you have
              underlying health conditions. Never disregard professional medical
              advice or delay seeking it because of something you read or
              experienced in this app. Nixd LLC makes no representations or
              warranties regarding the accuracy, completeness, or effectiveness
              of any quit-smoking or quit-vaping strategies presented.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              9. Disclaimer of Warranties
            </h2>
            <p>
              The app is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without warranties of any kind, whether
              express or implied, including but not limited to implied
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement. We do not warrant that the app will be
              uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              10. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Nixd LLC and
              its officers, directors, employees, and agents shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, including but not limited to loss of profits, data, or
              health outcomes, arising out of or in connection with your use of
              the app, whether based on warranty, contract, tort, or any other
              legal theory.
            </p>
            <p className="mt-3">
              In no event shall our total liability to you for all claims
              arising from or related to the app exceed the amount you paid for
              the app in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              11. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Nixd LLC and its
              officers, directors, employees, and agents from and against any
              claims, liabilities, damages, losses, and expenses arising out of
              or in any way connected with your access to or use of the app,
              your violation of these Terms, or your violation of any
              third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              12. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to the
              app at any time, without notice, for conduct that we determine
              violates these Terms, is harmful to other users, or is otherwise
              objectionable. Upon termination, your right to use the app will
              immediately cease. Provisions that by their nature should survive
              termination shall survive, including ownership, disclaimers,
              indemnification, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              13. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Any changes will be
              reflected on this page with an updated effective date. Your
              continued use of the app after changes are posted constitutes your
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              14. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Delaware, United States, without regard
              to its conflict of law provisions. Any disputes arising from these
              Terms or your use of the app shall be resolved in the state or
              federal courts located in Delaware.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              15. Severability &amp; Entire Agreement
            </h2>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary so that these Terms shall otherwise
              remain in full force and effect. These Terms, together with our{" "}
              <Link href="/privacy" className="text-nix-teal hover:underline">
                Privacy Policy
              </Link>{" "}
              and the{" "}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nix-teal hover:underline"
              >
                Apple EULA
              </a>
              , constitute the entire agreement between you and Nixd LLC
              regarding your use of the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-text-primary mb-3">
              Contact
            </h2>
            <p>
              Questions about these Terms? Reach out at{" "}
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
