import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ron Hermansen — AI-Native Developer",
  description:
    "AI-Native Developer and AI Systems Orchestrator. Directing AI to ship production code — with the judgment to keep it correct.",
  openGraph: {
    title: "Ron Hermansen — AI-Native Developer",
    description: "I orchestrate AI to ship production code.",
    url: "https://quantum-embrace.com",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
