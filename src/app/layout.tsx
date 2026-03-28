import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nixd — Quit Vaping For Real",
  description:
    "Nixd is the intelligent quit-vaping companion that tracks your progress, fights cravings, and celebrates every milestone. Coming soon to iOS.",
  openGraph: {
    title: "Nixd — Quit Vaping For Real",
    description:
      "Your personalized quit-vaping companion. Track streaks, beat cravings, watch your savings grow.",
    type: "website",
    url: "https://nixdapp.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nixd — Quit Vaping For Real",
    description:
      "Your personalized quit-vaping companion. Track streaks, beat cravings, watch your savings grow.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
