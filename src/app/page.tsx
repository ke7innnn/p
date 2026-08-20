import React from "react";
import Hero from "@/components/Hero";
import PinnacleWay from "@/components/PinnacleWay";
import Statistics from "@/components/Statistics";
import ServicesStack from "@/components/ServicesStack";
import AboutCurtain from "@/components/AboutCurtain";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PinnacleWay />
      <Statistics />
      <ServicesStack />
      <AboutCurtain />
      <ContactSection />
      <Footer />
    </main>
  );
}
