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
    default: "Nixd — Quit Vaping & Nicotine Pouches | iOS App",
    template: "%s | Nixd",
  },
  description:
    "Nixd is a quit-vaping iOS app for vapes, JUUL, and nicotine pouches like Zyn, On!, and Velo. Personalized quit plans, live streak tracking, SOS craving tools, and money-saved counter.",
  applicationName: "Nixd",
  keywords: [
    "quit vaping",
    "quit nicotine pouches",
    "Zyn",
    "JUUL",
    "On! pouches",
    "Velo",
    "nicotine cessation",
    "stop vaping app",
    "quit smoking iOS",
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
    },
  },
  openGraph: {
    type: "website",
    siteName: "Nixd",
    title: "Nixd — Quit Vaping & Nicotine Pouches",
    description:
      "Personalized quit plans for vapes, JUUL, and nicotine pouches. Live streak, SOS craving toolkit, money-saved counter. iOS, free download.",
    url: "https://nixdapp.com/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nixd — Quit Vaping & Nicotine Pouches",
    description:
      "Personalized quit plans for vapes, JUUL, and nicotine pouches. Live streak, SOS craving toolkit, money-saved counter.",
  },
  appleWebApp: {
    title: "Nixd",
  },
  itunes: {
    appId: "6761740706",
  },
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
      operatingSystem: "iOS 17+",
      applicationCategory: "HealthApplication",
      url: APP_STORE_URL,
      downloadUrl: APP_STORE_URL,
      publisher: { "@id": "https://nixdapp.com/#org" },
      description:
        "Quit-vaping and nicotine pouch cessation app with personalized quit plans, live streak tracking, SOS craving toolkit, and money-saved counter.",
      offers: {
        "@type": "Offer",
        price: "29.99",
        priceCurrency: "USD",
        category: "subscription",
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
