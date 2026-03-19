import type { Metadata } from "next";
import { JetBrains_Mono, Chakra_Petch } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Obelus Labs LLC",
  description:
    "Tools that put power back in people's hands. We build systems for transparency, accountability, and autonomous computing.",
  metadataBase: new URL("https://obeluslabs.online"),
  openGraph: {
    title: "Obelus Labs LLC",
    description:
      "Systems architecture for transparency, accountability, and autonomous computing. Creators of FabricOS.",
    url: "https://obeluslabs.online",
    siteName: "Obelus Labs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obelus Labs LLC",
    description:
      "Systems architecture for transparency, accountability, and autonomous computing. Creators of FabricOS.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${chakraPetch.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Obelus Labs LLC",
              url: "https://obeluslabs.online",
              description:
                "Systems architecture for transparency, accountability, and autonomous computing.",
              foundingDate: "2025",
              sameAs: [
                "https://github.com/Obelus-Labs-LLC",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
