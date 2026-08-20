"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ServicesStack() {
  const containerRef = useRef<HTMLElement>(null);
  const ribbonRef = useRef<SVGSVGElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const pinContainer = containerRef.current;
    const ribbon = ribbonRef.current;
    if (!pinContainer) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = pinContainer.getBoundingClientRect();
          const viewportH = window.innerHeight;
          const totalScrollDistance = rect.height - viewportH;

          if (totalScrollDistance > 0) {
            const currentScroll = -rect.top;
            const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));

            let step = 0;
            if (progress >= 0.32 && progress < 0.68) {
              step = 1;
            } else if (progress >= 0.68) {
              step = 2;
            }

            setCurrentStep((prev) => (prev !== step ? step : prev));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    // Mousemove parallax only for desktop mouse
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    let mouseTicking = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!ribbon || !isFinePointer || mouseTicking) return;
      mouseTicking = true;
      window.requestAnimationFrame(() => {
        const rect = pinContainer.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        ribbon.style.transform = `translate3d(${x * 20}px, ${y * 14}px, 0) scale(1.01)`;
        mouseTicking = false;
      });
    };

    const onMouseLeave = () => {
      if (!ribbon || !isFinePointer) return;
      ribbon.style.transform = "translate3d(0px, 0px, 0) scale(1)";
    };

    if (isFinePointer) {
      pinContainer.addEventListener("mousemove", onMouseMove, { passive: true });
      pinContainer.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (isFinePointer) {
        pinContainer.removeEventListener("mousemove", onMouseMove);
        pinContainer.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  const getCardClass = (index: number) => {
    if (index < currentStep) return "card-exited-up";
    if (index === currentStep) return "card-active";
    if (index === currentStep + 1) return "card-peek-1";
    return "card-peek-2";
  };

  const handleCardClick = (index: number) => {
    if (index > currentStep && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const totalScrollDistance = containerRef.current.offsetHeight - window.innerHeight;
      const targetRatio = index === 1 ? 0.48 : 0.88;
      window.scrollTo({
        top: containerTop + targetRatio * totalScrollDistance,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="services-pin-container" id="services" ref={containerRef}>
      <div className="services-sticky-wrap">
        {/* Full-Section Groovy Ribbon Line */}
        <svg
          className="services-groovy-ribbon"
          ref={ribbonRef}
          viewBox="0 0 1600 900"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="groovyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5E62" stopOpacity="0.95" />
              <stop offset="28%" stopColor="#F08C38" stopOpacity="1" />
              <stop offset="65%" stopColor="#D85D1B" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FF8228" stopOpacity="0.9" />
            </linearGradient>
            <filter id="groovyGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ambient Wide Glow Path */}
          <path
            className="groovy-path-glow"
            d="M -40 40 C 180 20, 320 130, 440 290 C 540 420, 520 630, 680 730 C 860 830, 1160 780, 1340 580 C 1460 450, 1530 550, 1650 860"
            stroke="#F08C38"
            strokeWidth="56"
            strokeLinecap="round"
            opacity="0.3"
            filter="url(#groovyGlow)"
          />

          {/* Main Groovy Ribbon Stroke */}
          <path
            className="groovy-path-main"
            d="M -40 40 C 180 20, 320 130, 440 290 C 540 420, 520 630, 680 730 C 860 830, 1160 780, 1340 580 C 1460 450, 1530 550, 1650 860"
            stroke="url(#groovyGrad)"
            strokeWidth="26"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Highlight Core */}
          <path
            className="groovy-path-core"
            d="M -40 40 C 180 20, 320 130, 440 290 C 540 420, 520 630, 680 730 C 860 830, 1160 780, 1340 580 C 1460 450, 1530 550, 1650 860"
            stroke="#FFE4D0"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>

        <div className="lxl-services-grid">
          {/* Left Column: Pinned Branding & Description */}
          <div className="lxl-services-left">
            <div className="lxl-title-group">
              <span className="lxl-script-accent">Our</span>
              <h2 className="lxl-main-title">SERVICES</h2>
            </div>
            <p className="lxl-services-desc">
              From concept through to delivery, we create and produce custom
              websites, enterprise CRM/ERP platforms, and bespoke web apps that
              are thoughtful, collaborative, and built to land across every
              touchpoint.
            </p>
            <Link href="/#contact" className="lxl-services-btn">
              <span>All services</span>
              <span className="lxl-btn-arrow">→</span>
            </Link>
          </div>

          {/* Right Column: Horizontal Cards Track */}
          <div className="lxl-services-right">
            <div className="services-deck" id="services-deck">
              {/* Card 1: Premium Websites */}
              <div
                className={`service-card-node lxl-card ${getCardClass(0)}`}
                data-card="0"
                onClick={() => handleCardClick(0)}
              >
                <div
                  className="lxl-card-bg"
                  style={{ backgroundImage: "url('/service-websites.png')" }}
                ></div>
                <div className="lxl-card-overlay"></div>
                <div className="lxl-card-content">
                  <div className="lxl-card-bottom">
                    <div className="lxl-card-text">
                      <span className="lxl-card-sub">BESPOKE DIGITAL EXPERIENCES</span>
                      <h3 className="lxl-card-headline">WEBSITES</h3>
                    </div>
                    <Link
                      href="/#contact"
                      className="lxl-card-action-btn"
                      aria-label="Explore Websites"
                    >
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: CRM & ERP Systems */}
              <div
                className={`service-card-node lxl-card ${getCardClass(1)}`}
                data-card="1"
                onClick={() => handleCardClick(1)}
              >
                <div
                  className="lxl-card-bg"
                  style={{ backgroundImage: "url('/service-crm-erp.png')" }}
                ></div>
                <div className="lxl-card-overlay"></div>
                <div className="lxl-card-content">
                  <div className="lxl-card-bottom">
                    <div className="lxl-card-text">
                      <span className="lxl-card-sub">ENTERPRISE MANAGEMENT</span>
                      <h3 className="lxl-card-headline">CRM & ERP</h3>
                    </div>
                    <Link
                      href="/#contact"
                      className="lxl-card-action-btn"
                      aria-label="Explore CRM ERP"
                    >
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3: Custom Web Apps & AI */}
              <div
                className={`service-card-node lxl-card ${getCardClass(2)}`}
                data-card="2"
                onClick={() => handleCardClick(2)}
              >
                <div
                  className="lxl-card-bg"
                  style={{ backgroundImage: "url('/service-custom-apps.png')" }}
                ></div>
                <div className="lxl-card-overlay"></div>
                <div className="lxl-card-content">
                  <div className="lxl-card-bottom">
                    <div className="lxl-card-text">
                      <span className="lxl-card-sub">INTELLIGENT AUTOMATION</span>
                      <h3 className="lxl-card-headline">WEB & AI APPS</h3>
                    </div>
                    <Link
                      href="/#contact"
                      className="lxl-card-action-btn"
                      aria-label="Explore Web Apps"
                    >
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
