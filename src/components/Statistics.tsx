"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatItemProps {
  count: number;
  suffix: string;
  description: string;
  className: string;
}

function StatCounter({ count, suffix, description, className }: StatItemProps) {
  const [value, setValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 2000;
            const startTime = performance.now();

            const update = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(eased * count);

              setValue(current);

              if (progress < 1) {
                requestAnimationFrame(update);
              } else {
                setValue(count);
              }
            };

            requestAnimationFrame(update);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [count]);

  return (
    <div className={`stat-block ${className}`} ref={elementRef} data-animate="stat">
      <span className="stat-number">{value}</span>
      <span className="stat-suffix">{suffix}</span>
      <span className="stat-description">{description}</span>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="statistics" id="statistics">
      <div className="stats-bg">
        <div className="stats-gradient"></div>
      </div>
      <div className="stats-content">
        <StatCounter
          count={150}
          suffix="+"
          description="Websites & Platforms"
          className="stat-block-1"
        />
        <StatCounter
          count={45}
          suffix="+"
          description="Custom CRMs & ERPs"
          className="stat-block-2"
        />
        <StatCounter
          count={10}
          suffix="X"
          description="Average Efficiency Gain"
          className="stat-block-3"
        />
        <StatCounter
          count={100}
          suffix="%"
          description="Dedicated Client Devotion"
          className="stat-block-4"
        />
      </div>
    </section>
  );
}
