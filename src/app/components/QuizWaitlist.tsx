"use client";

import { useState, useEffect } from "react";

const REASONS = [
  { id: "health", label: "My health", icon: "🫀" },
  { id: "money", label: "Save money", icon: "💰" },
  { id: "family", label: "Family / partner", icon: "❤️" },
  { id: "done", label: "I'm just done with it", icon: "✊" },
];

const SPEND_OPTIONS = [
  { id: "under10", label: "Less than $10/wk", weeklySavings: 7 },
  { id: "10to25", label: "$10 – $25/wk", weeklySavings: 17 },
  { id: "25to50", label: "$25 – $50/wk", weeklySavings: 37 },
  { id: "over50", label: "$50+/wk", weeklySavings: 55 },
];

type Step = "reason" | "spend" | "email" | "success";

interface UTMParams {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
}

export default function QuizWaitlist() {
  const [step, setStep] = useState<Step>("reason");
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [selectedSpend, setSelectedSpend] = useState<typeof SPEND_OPTIONS[0] | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [utm, setUtm] = useState<UTMParams>({ utm_source: null, utm_medium: null, utm_campaign: null });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtm({
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
    });
  }, []);

  const yearlySavings = selectedSpend ? selectedSpend.weeklySavings * 52 : 0;

  const handleReasonSelect = (id: string) => {
    setSelectedReason(id);
    setTimeout(() => setStep("spend"), 220);
  };

  const handleSpendSelect = (option: typeof SPEND_OPTIONS[0]) => {
    setSelectedSpend(option);
    setTimeout(() => setStep("email"), 220);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          quit_reason: selectedReason,
          weekly_spend: selectedSpend?.label,
          yearly_savings: yearlySavings || null,
          ...utm,
        }),
      });

      if (res.ok) {
        setStep("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (step === "success") {
    return (
      <div className="card-border rounded-2xl px-8 py-8 text-center glow-blue w-full" style={{ maxWidth: 480 }}>
        <div className="text-4xl mb-3">🎉</div>
        <p className="text-white font-semibold text-lg mb-1">You&apos;re on the list!</p>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
          We&apos;ll email you on April 12th when Nixd is live on the App Store.
        </p>
        {selectedSpend && (
          <div
            className="mt-5 rounded-xl px-5 py-4 text-sm"
            style={{ background: "rgba(33, 150, 243, 0.08)", border: "1px solid rgba(33,150,243,0.15)" }}
          >
            <span style={{ color: "#00BCD4" }}>
              You&apos;re on track to save{" "}
              <strong className="text-white">${yearlySavings.toLocaleString()}</strong> this year.
            </span>
          </div>
        )}
      </div>
    );
  }

  if (step === "reason") {
    return (
      <div className="w-full" style={{ maxWidth: 480 }}>
        <p className="text-sm font-semibold mb-5 text-center" style={{ color: "#8899AA" }}>
          Why do you want to quit?
        </p>
        <div className="grid grid-cols-2 gap-3">
          {REASONS.map((r) => (
            <button
              key={r.id}
              onClick={() => handleReasonSelect(r.id)}
              className="flex flex-col items-start gap-2 p-4 rounded-xl text-left transition-all cursor-pointer"
              style={{
                background: selectedReason === r.id ? "rgba(33, 150, 243, 0.18)" : "rgba(22, 40, 71, 0.7)",
                border: selectedReason === r.id ? "1px solid rgba(33, 150, 243, 0.5)" : "1px solid rgba(26, 37, 64, 0.9)",
                transform: selectedReason === r.id ? "scale(0.97)" : "scale(1)",
              }}
            >
              <span className="text-2xl">{r.icon}</span>
              <span className="text-sm font-medium text-white">{r.label}</span>
            </button>
          ))}
        </div>
        <StepDots current={0} />
      </div>
    );
  }

  if (step === "spend") {
    return (
      <div className="w-full" style={{ maxWidth: 480 }}>
        <p className="text-sm font-semibold mb-5 text-center" style={{ color: "#8899AA" }}>
          How much do you spend on vaping?
        </p>
        <div className="grid grid-cols-2 gap-3">
          {SPEND_OPTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSpendSelect(s)}
              className="flex flex-col items-center justify-center p-4 rounded-xl text-center transition-all cursor-pointer"
              style={{
                background: selectedSpend?.id === s.id ? "rgba(33, 150, 243, 0.18)" : "rgba(22, 40, 71, 0.7)",
                border: selectedSpend?.id === s.id ? "1px solid rgba(33, 150, 243, 0.5)" : "1px solid rgba(26, 37, 64, 0.9)",
                transform: selectedSpend?.id === s.id ? "scale(0.97)" : "scale(1)",
              }}
            >
              <span className="text-sm font-semibold text-white">{s.label}</span>
              <span className="text-xs mt-1" style={{ color: "#8899AA" }}>
                ~${(s.weeklySavings * 52).toLocaleString()}/yr savings
              </span>
            </button>
          ))}
        </div>
        <StepDots current={1} />
      </div>
    );
  }

  // step === "email"
  return (
    <div className="w-full" style={{ maxWidth: 480 }}>
      {selectedSpend && (
        <div
          className="rounded-xl px-5 py-4 text-center mb-6"
          style={{ background: "rgba(0,188,212,0.07)", border: "1px solid rgba(0,188,212,0.18)" }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>You could save up to</p>
          <p className="text-2xl font-bold text-white mt-0.5">
            ${yearlySavings.toLocaleString()}{" "}
            <span className="text-base font-normal" style={{ color: "#00BCD4" }}>this year</span>
          </p>
        </div>
      )}

      <p className="text-sm font-semibold mb-4 text-center" style={{ color: "#8899AA" }}>
        Notify me when Nixd launches on April 12
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={status === "loading"}
            className="flex-1 px-4 py-3 rounded-xl text-white placeholder-[#8899AA] outline-none transition-all"
            style={{
              background: "rgba(22, 40, 71, 0.8)",
              border: "1px solid rgba(33, 150, 243, 0.25)",
              fontSize: "1rem",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(33, 150, 243, 0.6)";
              e.target.style.boxShadow = "0 0 0 3px rgba(33, 150, 243, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgba(33, 150, 243, 0.25)";
              e.target.style.boxShadow = "none";
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="cta-gradient px-6 py-3 rounded-xl font-semibold text-white transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ whiteSpace: "nowrap" }}
          >
            {status === "loading" ? "Joining…" : "Notify me →"}
          </button>
        </div>
        {status === "error" && (
          <p className="mt-3 text-sm text-center" style={{ color: "#ef5350" }}>
            Something went wrong. Please try again.
          </p>
        )}
        <p className="mt-3 text-xs text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
          No spam. Just a launch notification.
        </p>
      </form>

      <StepDots current={2} />
    </div>
  );
}

function StepDots({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="rounded-full transition-all"
          style={{
            width: i === current ? 20 : 6,
            height: 6,
            background: i === current ? "#2196F3" : "rgba(255,255,255,0.15)",
          }}
        />
      ))}
    </div>
  );
}
