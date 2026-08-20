import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne, Caveat, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pinnacle Studios — We Make Brands Impossible to Ignore",
  description:
    "Pinnacle Studios is a premium creative studio specializing in bespoke web platforms, enterprise CRM/ERP solutions, and custom AI applications.",
  openGraph: {
    title: "Pinnacle Studios — Creative That Moves",
    description:
      "We make brands impossible to ignore through bespoke web platforms, enterprise CRM/ERP solutions, and custom AI applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinnacle Studios — Creative That Moves",
    description:
      "We make brands impossible to ignore through bespoke web platforms, enterprise CRM/ERP solutions, and custom AI applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${syne.variable} ${caveat.variable} ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className={plusJakartaSans.className}>
        {/* GLOBAL GRAINY SUNSET GRADIENT AMBIENT BACKDROP */}
        <div className="global-grainy-bg-overlay">
          <div className="global-grainy-bg-mesh"></div>
          <div className="global-grainy-bg-texture"></div>
        </div>

        <Navigation />
        {children}
      </body>
    </html>
  );
}
