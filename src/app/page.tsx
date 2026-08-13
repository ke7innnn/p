"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import OverlayTracker from "@/components/OverlayTracker";
import LoadingScreen from "@/components/LoadingScreen";
import { LoadingProvider } from "@/context/LoadingContext";

// Floating Drawer Panels & Hero
import BeingLoopHero from "@/components/BeingLoopHero";
import AboutPanel from "@/components/AboutPanel";
import ClientPanel from "@/components/ClientPanel";
import ContactPanel from "@/components/ContactPanel";

// Aesthetic Design Elements & Interactivity Components
import AuraBackground from "@/components/AuraBackground";
import CustomCursor from "@/components/CustomCursor";
import FloatingHud from "@/components/FloatingHud";
import ScrollProgress from "@/components/ScrollProgress";
import SoundToggle from "@/components/SoundToggle";
import CommandPalette from "@/components/CommandPalette";

// Dynamically import core sections
const WindowZoom = dynamic(() => import("@/components/WindowZoom"), { ssr: true });
const BrandStory = dynamic(() => import("@/components/BrandStory"), { ssr: true });
const Ke7innnSection = dynamic(() => import("@/components/Ke7innnSection"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: true });

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [clientsOpen, setClientsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <LoadingProvider>
      <LoadingScreen />
      <SmoothScroll>
        <OverlayTracker>
          <main className="relative bg-black text-white selection:bg-red-600 selection:text-white min-h-screen overflow-x-hidden">
            
            {/* Glowing Top Scroll Progress Indicator */}
            <ScrollProgress />

            {/* Custom Magnetic Cursor */}
            <CustomCursor />

            {/* Floating Web Audio SFX Toggle */}
            <SoundToggle />

            {/* Animated Luxury Fluid Aura Gradient Background */}
            <AuraBackground />

            {/* Navigation Header */}
            <Header
              onOpenAbout={() => setAboutOpen(true)}
              onOpenClients={() => setClientsOpen(true)}
              onOpenContact={() => setContactOpen(true)}
              onOpenSearch={() => setSearchOpen(true)}
            />

            {/* Command Palette (Cmd+K) */}
            <CommandPalette
              isOpen={searchOpen}
              onClose={() => setSearchOpen(false)}
              onOpenAbout={() => setAboutOpen(true)}
              onOpenClients={() => setClientsOpen(true)}
              onOpenContact={() => setContactOpen(true)}
            />

            {/* Interactive Floating Drawers */}
            <AboutPanel isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
            <ClientPanel isOpen={clientsOpen} onClose={() => setClientsOpen(false)} />
            <ContactPanel isOpen={contactOpen} onClose={() => setContactOpen(false)} />

            {/* 0. Hero Section */}
            <BeingLoopHero
              onOpenAbout={() => setAboutOpen(true)}
              onOpenClients={() => setClientsOpen(true)}
              onOpenContact={() => setContactOpen(true)}
            />

            {/* 1. Hero Brand Story Section */}
            <BrandStory />

            {/* 2. Window Zoom 3D Laptop Animation Section */}
            <WindowZoom />

            {/* 3. Agency Methodology Pillars Section */}
            <Ke7innnSection />

            {/* 4. Contact Footer Section */}
            <ContactSection />

            {/* Floating Action HUD Command Bar */}
            <FloatingHud
              onOpenAbout={() => setAboutOpen(true)}
              onOpenContact={() => setContactOpen(true)}
            />

          </main>
        </OverlayTracker>
      </SmoothScroll>
    </LoadingProvider>
  );
}
