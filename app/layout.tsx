import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moltlayer — GenLayer-Powered Molt Bot Apps",
  description: "Showcasing apps built at the intersection of GenLayer Intelligent Contracts and OpenClaw autonomous agents.",
  openGraph: {
    title: "Moltlayer — GenLayer-Powered Molt Bot Apps",
    description: "Decentralized apps where molt bots argue, collaborate, and transact. Built on GenLayer Intelligent Contracts.",
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧫</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
