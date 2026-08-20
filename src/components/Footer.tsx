import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="silver-footer">
      <div className="silver-footer-inner">
        {/* GIANT 3D Chrome Branding Header */}
        <div className="giant-footer-branding">
          <h1 className="giant-chrome-title">pinnacle studios</h1>
        </div>

        {/* Footer Sitemap & Cards Grid */}
        <div className="silver-footer-grid">
          {/* Sitemap Column */}
          <div className="sitemap-box">
            <h4 className="sitemap-title">Sitemap</h4>
            <div className="sitemap-links">
              <div className="sitemap-col">
                <Link href="/" className="sitemap-link">
                  Home
                </Link>
                <Link href="/work" className="sitemap-link">
                  Our approach
                </Link>
                <Link href="/#about" className="sitemap-link">
                  Our story
                </Link>
              </div>
              <div className="sitemap-col">
                <Link href="/#work" className="sitemap-link">
                  The Pinnacle Way
                </Link>
                <Link href="/#services" className="sitemap-link">
                  Services
                </Link>
                <Link href="/#contact" className="sitemap-link">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Glass Cards Right Column */}
          <div className="footer-glass-cards">
            {/* Media Card */}
            <div className="glass-card">
              <h4 className="glass-card-title">Media</h4>
              <div className="glass-card-icon">
                {/* 3D Silver Microphone Icon */}
                <svg
                  width="36"
                  height="48"
                  viewBox="0 0 48 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="silverGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="50%" stopColor="#C5C8CE" />
                      <stop offset="100%" stopColor="#707682" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="22"
                    y="44"
                    width="4"
                    height="14"
                    rx="2"
                    fill="url(#silverGrad)"
                  />
                  <ellipse
                    cx="24"
                    cy="58"
                    rx="14"
                    ry="4"
                    fill="url(#silverGrad)"
                  />
                  <path
                    d="M12 28C12 36 17 40 24 40C31 40 36 36 36 28"
                    stroke="url(#silverGrad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <rect
                    x="16"
                    y="10"
                    width="16"
                    height="24"
                    rx="8"
                    fill="url(#silverGrad)"
                  />
                </svg>
              </div>
              <div className="glass-social-btns">
                <a href="#" className="social-sq-btn" aria-label="Spotify">
                  🎵
                </a>
                <a href="#" className="social-sq-btn" aria-label="YouTube">
                  ▶
                </a>
                <a href="#" className="social-sq-btn" aria-label="Apple">
                  🎙️
                </a>
              </div>
            </div>

            {/* Social Card */}
            <div className="glass-card">
              <h4 className="glass-card-title">Social</h4>
              <div className="glass-card-icon">
                {/* 3D Silver Heart Icon */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 42L20.8 39.1C9.6 29 2 22.1 2 13.5C2 6.5 7.5 1 14.5 1C18.4 1 22.2 2.8 24 5.7C25.8 2.8 29.6 1 33.5 1C40.5 1 46 6.5 46 13.5C46 22.1 38.4 29 27.2 39.1L24 42Z"
                    fill="url(#silverGrad)"
                  />
                </svg>
              </div>
              <div className="glass-social-btns">
                <a href="#" className="social-sq-btn" aria-label="Instagram">
                  📷
                </a>
                <a href="#" className="social-sq-btn" aria-label="TikTok">
                  🎵
                </a>
                <a href="#" className="social-sq-btn" aria-label="LinkedIn">
                  💼
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Copyright Bar */}
        <div className="silver-footer-bottom">
          <div className="bottom-left">
            <span>&copy; 2026 Pinnacle Studios. All rights reserved.</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
          </div>
          <div className="bottom-right">
            <span>@Design by Pinnacle Studios</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
