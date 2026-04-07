import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Michroma, Outfit, Syncopate } from "next/font/google";
import "./globals.css";
import CinematicGrade from "@/components/CinematicGrade";
import DynamicTitle from "@/components/DynamicTitle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["600", "700"],
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  weight: ["400", "700"],
  variable: "--font-syncopate",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PINNACLE STUDIOS",
  description: "Premium websites, AI product shoots, and clipping services - Elevating your brand with high-performance digital solutions",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${michroma.variable} ${outfit.variable} ${syncopate.variable} antialiased bg-background text-foreground`}>
        <DynamicTitle />
        {/* Using high-res overlay - no additional effects needed */}
        {children}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vfk39yqnr7");
          `}
        </Script>
      </body>
    </html>
  );
}
