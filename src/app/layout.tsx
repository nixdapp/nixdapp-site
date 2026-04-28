import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const APP_STORE_URL =
  "https://apps.apple.com/us/app/nixd-quit-vaping-pouches/id6761740706";

export const viewport: Viewport = {
  themeColor: "#0A1628",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nixdapp.com"),
  title: {
    default: "Nixd — Quit Vaping, Pouches & Cigarettes | iOS App",
    template: "%s | Nixd",
  },
  description:
    "Nixd is the personalized iOS quit-vaping companion for vapes, JUUL, nicotine pouches (Zyn, On!, Velo) and cigarettes. Adaptive taper plans, live streak, 19 health milestones, SOS toolkit (box breathing, grounding, movement, distraction games), and a money-saved counter. Free download.",
  applicationName: "Nixd",
  keywords: [
    "quit vaping",
    "stop vaping app",
    "quit nicotine pouches",
    "Zyn",
    "JUUL",
    "On! pouches",
    "Velo",
    "quit smoking iOS",
    "nicotine cessation",
    "vape free",
    "nicotine taper app",
    "puff counter",
    "craving tracker",
    "quit cigarettes",
    "lung recovery timeline",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Nixd",
    title: "Nixd — Quit Vaping, Pouches & Cigarettes",
    description:
      "Personalized iOS quit-vaping companion. Adaptive taper plans, live streak, 19 health milestones, SOS toolkit, money-saved counter. Free download.",
    url: "https://nixdapp.com/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nixd — Quit Vaping, Pouches & Cigarettes",
    description:
      "Personalized iOS quit-vaping companion. Adaptive taper plans, live streak, 19 health milestones, SOS toolkit, money-saved counter.",
  },
  appleWebApp: {
    title: "Nixd",
  },
  itunes: {
    appId: "6761740706",
  },
  category: "Health & Fitness",
  authors: [{ name: "Nixd LLC", url: "https://nixdapp.com" }],
  publisher: "Nixd LLC",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nixdapp.com/#org",
      name: "Nixd LLC",
      url: "https://nixdapp.com/",
      email: "feedback@nixdapp.com",
      logo: "https://nixdapp.com/icon.png",
      sameAs: [APP_STORE_URL],
    },
    {
      "@type": "WebSite",
      "@id": "https://nixdapp.com/#website",
      url: "https://nixdapp.com/",
      name: "Nixd",
      publisher: { "@id": "https://nixdapp.com/#org" },
      inLanguage: "en-US",
    },
    {
      "@type": "MobileApplication",
      "@id": "https://nixdapp.com/#app",
      name: "Nixd: Quit Vaping & Pouches",
      operatingSystem: "iOS 17.0+",
      applicationCategory: "HealthApplication",
      applicationSubCategory: "Smoking Cessation",
      url: APP_STORE_URL,
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      publisher: { "@id": "https://nixdapp.com/#org" },
      description:
        "Personalized iOS quit companion for vapes, JUUL, nicotine pouches (Zyn, On!, Velo) and cigarettes. Adaptive taper plans, live streak tracking, 19 health milestones, SOS craving toolkit, money-saved counter, offline-first sync.",
      featureList: [
        "Personalized 24-question quit-plan onboarding",
        "Multi-product tracking (vapes, pouches, cigarettes)",
        "Cold turkey or 7–90 day adaptive taper",
        "Live streak with money-saved counter",
        "19 evidence-based health milestones",
        "SOS toolkit: box breathing, 5-senses grounding, movement, distraction games",
        "Mood and craving outcome logging",
        "Offline-first with end-to-end private sync",
        "Apple Sign In, no data sold",
      ],
      offers: {
        "@type": "Offer",
        price: "29.99",
        priceCurrency: "USD",
        category: "subscription",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
        >
          {JSON.stringify(jsonLd)}
        </script>
      </body>
    </html>
  );
}
