"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import OverlayTracker from "@/components/OverlayTracker";
import LoadingScreen from "@/components/LoadingScreen";
import { LoadingProvider } from "@/context/LoadingContext";

// Floating Drawer Panels & BeingLoop Landing Hero
import BeingLoopHero from "@/components/BeingLoopHero";
import AboutPanel from "@/components/AboutPanel";
import ClientPanel from "@/components/ClientPanel";
import ContactPanel from "@/components/ContactPanel";

// Dynamically import heavy UI components
const WindowZoom = dynamic(() => import("@/components/WindowZoom"), { ssr: true });
const BrandStory = dynamic(() => import("@/components/BrandStory"), { ssr: true });
const Ke7innnSection = dynamic(() => import("@/components/Ke7innnSection"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: true });

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [clientsOpen, setClientsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <LoadingProvider>
      <LoadingScreen />
      <SmoothScroll>
        <OverlayTracker>
          <main className="relative bg-black text-white selection:bg-red-600 selection:text-white min-h-screen overflow-x-hidden">

            {/* Navigation Header with BeingLoop Pill Nav */}
            <Header
              onOpenAbout={() => setAboutOpen(true)}
              onOpenClients={() => setClientsOpen(true)}
              onOpenContact={() => setContactOpen(true)}
            />

            {/* Interactive Floating Drawers */}
            <AboutPanel isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
            <ClientPanel isOpen={clientsOpen} onClose={() => setClientsOpen(false)} />
            <ContactPanel isOpen={contactOpen} onClose={() => setContactOpen(false)} />

            {/* 0. STARTING PAGE VIEW (Exact match to beingloop.com initial hero landing) */}
            <BeingLoopHero
              onOpenAbout={() => setAboutOpen(true)}
              onOpenClients={() => setClientsOpen(true)}
              onOpenContact={() => setContactOpen(true)}
            />

            {/* 1. Hero Brand Story Section */}
            <BrandStory />

            {/* 2. Window Zoom Section (Laptop) */}
            <WindowZoom />

            {/* 3. Agency Methodology Section (High-Octane Creativity) */}
            <Ke7innnSection />

            {/* 6. Contact Footer Section */}
            <ContactSection />

          </main>
        </OverlayTracker>
      </SmoothScroll>
    </LoadingProvider>
  );
}


