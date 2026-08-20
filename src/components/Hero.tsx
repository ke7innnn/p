"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || isReducedMotion) return;

    const hero = heroRef.current;
    const orb = orbRef.current;
    const curtain = curtainRef.current;
    const monogram = monogramRef.current;

    if (!hero || !orb) return;

    let targetX = 75;
    let targetY = 45;
    let currentX = 75;
    let currentY = 45;
    let animationFrameId: number;
    let isMoving = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      targetX = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      targetY = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
      if (!isMoving) {
        isMoving = true;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    hero.addEventListener("mousemove", handleMouseMove, { passive: true });

    const animate = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      currentX += dx * 0.08;
      currentY += dy * 0.08;

      if (orb) {
        orb.style.left = `${currentX.toFixed(2)}%`;
        orb.style.top = `${currentY.toFixed(2)}%`;
      }

      if (curtain) {
        curtain.style.background = `radial-gradient(ellipse at ${currentX.toFixed(2)}% ${currentY.toFixed(
          2
        )}%, rgba(255, 130, 40, 0.38) 0%, rgba(255, 94, 98, 0.24) 45%, transparent 85%), repeating-linear-gradient(90deg, rgba(255, 110, 30, 0.08) 0px, rgba(255, 110, 30, 0.08) 20px, transparent 20px, transparent 50px)`;
      }

      if (monogram) {
        monogram.style.transform = `translate3d(${((currentX - 50) * 0.15).toFixed(
          2
        )}px, calc(-50% + ${((currentY - 50) * 0.15).toFixed(2)}px), 0)`;
      }

      // Stop loop when close to target to save CPU
      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        isMoving = false;
      }
    };

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Dynamic Mouse-Tracking Moving Gradient Mesh Backdrop */}
      <div className="hero-bg" id="hero-interactive-bg">
        <div className="hero-moving-aura" id="hero-aura-orb" ref={orbRef}></div>
        <div className="hero-light-curtain" id="hero-light-curtain" ref={curtainRef}></div>
      </div>

      {/* Akis-Style Layout Grid */}
      <div className="hero-akis-container">
        <div className="hero-akis-grid">
          <div className="hero-akis-left">
            <h1 className="hero-akis-title">
              A studio that keeps up with your <em>ambition.</em>
            </h1>
          </div>
        </div>
      </div>

      {/* Big Right Side Official Pinnacle Mountain P Monogram Symbol */}
      <div className="hero-right-logo-badge" id="hero-mountain-monogram" ref={monogramRef}>
        <div className="hero-logo-frame">
          <Image
            src="/pinnacle-mountain-icon.png"
            alt="Pinnacle Studios Mountain Monogram"
            width={580}
            height={440}
            className="hero-logo-img"
            priority
          />
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>✦ PINNACLE STUDIOS 2026</span>
      </div>

      {/* Smooth Bottom Blend to Next Section */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
}
