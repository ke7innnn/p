"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isScrolledRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50;
          if (scrolled !== isScrolledRef.current) {
            isScrolledRef.current = scrolled;
            setIsScrolled(scrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // High performance IntersectionObserver for dark sections detection
    const darkSections = document.querySelectorAll(
      ".statistics, .services-pin-container, .silver-footer"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const anyDark = entries.some((entry) => entry.isIntersecting);
        setIsDark(anyDark);
      },
      {
        rootMargin: "-20px 0px -80% 0px",
        threshold: 0,
      }
    );

    darkSections.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return next;
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav
        className={`nav ${isScrolled || pathname !== "/" ? "scrolled" : ""} ${
          isDark ? "nav-dark" : ""
        }`}
        id="nav"
      >
        <div className="nav-inner">
          <Link
            href="/"
            className="nav-logo"
            aria-label="Pinnacle Studios Home"
            onClick={closeMobileMenu}
          >
            <span className="logo-text">Pinnacle</span>
            <span className="logo-text accent">Studios</span>
          </Link>

          <div className="nav-links" id="nav-links">
            <Link
              href="/work"
              className="nav-link"
              style={{
                color: pathname === "/work" ? "var(--purple, #F08C38)" : undefined,
              }}
            >
              Work
            </Link>
            <Link href="/#services" className="nav-link">
              Services
            </Link>
            <Link href="/#about" className="nav-link">
              About
            </Link>
          </div>

          <Link href="/#contact" className="nav-cta" id="nav-cta">
            Get in Touch
          </Link>

          <button
            className={`nav-menu-btn ${mobileMenuOpen ? "active" : ""}`}
            id="nav-menu-btn"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="menu-line menu-line-1"></span>
            <span className="menu-line menu-line-2"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} id="mobile-menu">
        <div className="mobile-menu-inner">
          <Link href="/work" className="mobile-menu-link" onClick={closeMobileMenu}>
            Work
          </Link>
          <Link href="/#services" className="mobile-menu-link" onClick={closeMobileMenu}>
            Services
          </Link>
          <Link href="/#about" className="mobile-menu-link" onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/#contact" className="mobile-menu-cta" onClick={closeMobileMenu}>
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
