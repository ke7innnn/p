import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import OverlayTracker from "@/components/OverlayTracker";
import LoadingScreen from "@/components/LoadingScreen";
import StatsStrip from "@/components/StatsStrip";
import { LoadingProvider } from "@/context/LoadingContext";

// Dynamically import heavy UI components
const WindowZoom = dynamic(() => import("@/components/WindowZoom"), { ssr: true });
const BrandStory = dynamic(() => import("@/components/BrandStory"), { ssr: true });
const SkyBackground = dynamic(() => import("@/components/SkyBackground"), { ssr: true });
const ScrollAnimatedSection = dynamic(() => import("@/components/ScrollAnimatedSection"), { ssr: true });
const OurWork = dynamic(() => import("@/components/OurWork"), { ssr: true });
const Ke7innnSection = dynamic(() => import("@/components/Ke7innnSection"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: true });
const FloatingLaptop = dynamic(() => import("@/components/FloatingLaptop"), { ssr: true });

export default function Home() {
  return (
    <LoadingProvider>
      <LoadingScreen />
      <SmoothScroll>
        <OverlayTracker>
          <main className="relative bg-[#B0B5B9] text-foreground">

            {/* Navigation Header */}
            <Header />

            {/* 1. GLOBAL SKY BACKGROUND (Fixed) */}
            {/* Animated clouds and realistic sky gradient */}
            <SkyBackground />

            {/* 2. Window Zoom Overlay */}
            {/* This occupies scroll space (~250vh) and pins itself on top of the sky */}
            {/* It has NO children, it just handles the Frame animation */}
            <WindowZoom />

            {/* 3. Spacer for the "Pure Sky" Moment */}
            {/* Removed spacer - content appears immediately after window zoom */}
            <div className="h-[0vh] relative z-10" />

            {/* 4. Content Section */}
            {/* Uses z-10 to sit above the fixed sky */}
            {/* Negative margin pulls content upward to reduce scrolling */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pb-16 sm:pb-20 md:pb-24 lg:pb-32 -mt-[120vh] sm:-mt-[140vh] md:-mt-[160vh] lg:-mt-[180vh]">

              {/* Floating Laptop appears exactly in the sky gap */}
              <FloatingLaptop />

              {/* Intro tagline — fills sky gap above Brand Story */}
              <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 mb-8 sm:mb-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/20 pb-6 sm:pb-8">
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/80 font-semibold" style={{ fontFamily: "var(--font-outfit)" }}>
                  ✦ Pinnacle Studios · Est. 2025 · Mumbai
                </p>
                <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/50" style={{ fontFamily: "var(--font-outfit)" }}>
                  Premium Digital Agency
                </p>
              </div>

              <BrandStory />

            </div>

            {/* 5. Stats Bridge Strip - fills the empty sky gap */}
            <StatsStrip />

            {/* 6. Cream Section - contains eagle and text animation */}
            <ScrollAnimatedSection />

            {/* 6. Our Work Section - appears after eagle animation */}
            <OurWork />

            {/* 7. kE7INNN Gradient Section */}
            <Ke7innnSection />

            {/* 8. Contact & Social Media Section */}
            <ContactSection />

            {/* Footer overlay */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 w-full text-center text-[10px] sm:text-xs uppercase tracking-widest text-[#2c3e50]/60 z-20 px-4">
              © 2026 PINNACLE STUDIOS. All rights reserved.
            </div>

          </main>
        </OverlayTracker>
      </SmoothScroll>
    </LoadingProvider>
  );
}
