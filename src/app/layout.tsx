import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RosaBlu Hotel Kutus — Serene Village Retreat in Kirinyaga",
    template: "%s | RosaBlu Hotel Kutus",
  },
  description:
    "A serene, clean, and affordable village retreat 700m from Kutus CBD. Starlink WiFi, pure Kienyeji chicken, Mt. Kenya views. Book your stay today.",
  keywords: [
    "RosaBlu Hotel",
    "Kutus Hotel",
    "Kirinyaga accommodation",
    "Kenya hotel",
    "Mt Kenya hotel",
    "Kutus Town",
    "affordable hotel Kenya",
    "Starlink WiFi hotel",
  ],
  openGraph: {
    title: "RosaBlu Hotel Kutus — Serene Village Retreat",
    description:
      "Clean, affordable comfort with stunning Mt. Kenya views. Starlink WiFi, local cuisine, and a serene environment.",
    url: "https://rosabluhotelkutus.co.ke",
    siteName: "RosaBlu Hotel Kutus",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
