"use client";

import React, { useEffect, useRef } from "react";

export default function PinnacleWay() {
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            deck.classList.add("deck-open");
          } else {
            deck.classList.remove("deck-open");
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(deck);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pinnacle-way-section" id="work">
      {/* Ambient Glassmorphism Gradient Elements Backdrop */}
      <div className="pinnacle-way-bg-elements">
        <div className="pway-blob pway-blob-1"></div>
        <div className="pway-blob pway-blob-2"></div>
        <div className="pway-blob pway-blob-3"></div>
      </div>

      <div className="pinnacle-way-container">
        <div className="pinnacle-way-header">
          <h2 className="pinnacle-way-headline">
            THE PINNACLE <em>WAY</em>
          </h2>
          <p className="pinnacle-way-sub">
            Pinnacle exists at the intersection of{" "}
            <strong>imagination, intelligence, and execution</strong>. We turn
            ambitious ideas into brands, systems, and digital experiences that
            create an unfair advantage for tomorrow.
          </p>
        </div>

        {/* 3 Minimalist Text-Only Fanned Cards Container */}
        <div className="landonorris-fanned-deck" ref={deckRef}>
          {/* Card 1: Think Beyond */}
          <div className="minimalist-card lando-3card-left">
            <div className="card-body">
              <h3 className="card-title">THINK BEYOND</h3>
              <span className="card-hook">
                DON&apos;T ASK WHAT&apos;S NEXT. ASK WHAT&apos;S POSSIBLE.
              </span>
              <p className="card-desc">
                We challenge the obvious, question the expected, and look beyond the
                brief. Because the most valuable ideas rarely come from doing more of
                the same.
              </p>
            </div>
            <div className="card-footer">
              <span className="card-tagline">STRATEGY × IMAGINATION</span>
              <span className="card-arrow">→</span>
            </div>
          </div>

          {/* Card 2: Build Intelligent (Center) */}
          <div className="minimalist-card lando-3card-center">
            <div className="card-body">
              <h3 className="card-title">BUILD INTELLIGENT</h3>
              <span className="card-hook">IDEAS ARE ONLY THE BEGINNING.</span>
              <p className="card-desc">
                We bring intelligence into the build — combining technology,
                automation, design, and engineering to turn bold thinking into systems
                that move, learn, and scale.
              </p>
            </div>
            <div className="card-footer">
              <span className="card-tagline">INTELLIGENCE × ENGINEERING</span>
              <span className="card-arrow">→</span>
            </div>
          </div>

          {/* Card 3: Make It Matter */}
          <div className="minimalist-card lando-3card-right">
            <div className="card-body">
              <h3 className="card-title">MAKE IT MATTER</h3>
              <span className="card-hook">
                MAKE SOMETHING PEOPLE CAN&apos;T IGNORE.
              </span>
              <p className="card-desc">
                Beautiful isn&apos;t enough. Functional isn&apos;t enough. We create
                work with presence — experiences people remember and products people
                choose.
              </p>
            </div>
            <div className="card-footer">
              <span className="card-tagline">IMPACT × EXECUTION</span>
              <span className="card-arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
