"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formId) {
      console.error("NEXT_PUBLIC_FORMSPREE_ID is not set");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="card-border rounded-2xl px-8 py-7 text-center glow-blue"
        style={{ maxWidth: 440 }}
      >
        <div className="text-3xl mb-3">🎉</div>
        <p className="text-white font-semibold text-lg mb-1">You&apos;re on the list!</p>
        <p style={{ color: "rgba(255,255,255,0.6)" }} className="text-sm">
          We&apos;ll send you an email the moment Nixd is available on the App Store.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" style={{ maxWidth: 480 }}>
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
  );
}
