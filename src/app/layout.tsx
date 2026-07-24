import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Ron Cymond Llave — AI-Powered Full Stack Developer";
const description =
  "Full stack developer building mobile-first web applications with Next.js, TypeScript and Supabase, using Claude Code and AI tooling across day-to-day development.";

export const metadata: Metadata = {
  metadataBase: new URL("https://roncymondllave.vercel.app"),
  title,
  description,
  keywords: [
    "Ron Cymond Llave",
    "Full Stack Developer",
    "AI-Assisted Development",
    "Claude Code",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Coolify",
    "Portfolio",
  ],
  authors: [{ name: "Ron Cymond Llave" }],
  creator: "Ron Cymond Llave",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ron Cymond Llave",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#111827",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
