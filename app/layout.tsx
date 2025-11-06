import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GradientBackground } from "@/components/GradientBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-b17b3ca5.vercel.app"),
  title: "Omni Assistant",
  description:
    "An ultra-intelligent omni-domain assistant that blends knowledge, creativity, productivity, and decision-making.",
  icons: {
    icon: "/icon.png"
  },
  openGraph: {
    title: "Omni Assistant",
    description:
      "An ultra-intelligent omni-domain assistant that blends knowledge, creativity, productivity, and decision-making.",
    url: "https://agentic-b17b3ca5.vercel.app",
    siteName: "Omni Assistant",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Omni Assistant interface preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Omni Assistant",
    description:
      "An ultra-intelligent omni-domain assistant that blends knowledge, creativity, productivity, and decision-making.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GradientBackground />
        {children}
      </body>
    </html>
  );
}
