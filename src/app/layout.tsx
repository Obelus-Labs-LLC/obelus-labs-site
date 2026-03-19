import type { Metadata } from "next";
import { JetBrains_Mono, Chakra_Petch } from "next/font/google";
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
    "Tools that put power back in people's hands. Obelus Labs builds software for transparency, accountability, and civic empowerment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${chakraPetch.variable}`}>
      <body>{children}</body>
    </html>
  );
}
