"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function AboutCurtain() {
  const sectionRef = useRef<HTMLElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || isReducedMotion) return;

    const section = sectionRef.current;
    const curtain = curtainRef.current;
    const aura = auraRef.current;

    if (!section || (!curtain && !aura)) return;

    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        if (curtain) {
          curtain.style.transform = `translate3d(${x * 16}px, ${y * 12}px, 0) scale(1.04)`;
        }
        if (aura) {
          aura.style.transform = `translate3d(calc(-50% + ${x * 35}px), calc(-50% + ${y * 25}px), 0) scale(1.15)`;
        }
        ticking = false;
      });
    };

    const handleMouseLeave = () => {
      if (curtain) {
        curtain.style.transform = "translate3d(0px, 0px, 0) scale(1)";
      }
      if (aura) {
        aura.style.transform = "translate3d(-50%, -50%, 0) scale(1)";
      }
    };

    section.addEventListener("mousemove", handleMouseMove, { passive: true });
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="about-hero-section" id="about" ref={sectionRef}>
      {/* Ribbed Fluted Glass Curtain Backdrop */}
      <div className="about-glass-curtain-bg">
        <div className="about-curtain-img" ref={curtainRef}></div>
        <div className="about-curtain-ribs"></div>
        <div className="about-aura-glow" ref={auraRef}></div>
        <div className="about-curtain-vignette"></div>
      </div>

      <div className="about-glass-container">
        <div className="about-glass-card">
          <h2 className="about-hero-title">
            Are off-the-shelf tools
            <br /> <em>holding</em> you back?
          </h2>
          <p className="about-hero-body">
            Templated websites, clunky CRMs, and generic software constrain
            ambitious businesses. We build custom websites, enterprise CRMs, ERP
            platforms, and bespoke web apps with dedicated 1-on-1 care and
            engineering precision.
          </p>

          <div className="about-hero-actions">
            <Link href="/work" className="btn-hero-white">
              Read our story
            </Link>
            <Link href="/#contact" className="btn-hero-lime">
              <span>Get in touch</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
