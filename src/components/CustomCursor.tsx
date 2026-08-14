"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.matchMedia("(pointer: coarse)").matches);
    if (isTouch) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };

      if (cursorRef.current && cursorRef.current.style.opacity === '0') {
        cursorRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
    };

    // Butter-smooth RAF interpolation loop (120 FPS, 0 React re-renders)
    const animate = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.2;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x - 12}px, ${currentPos.current.y - 12}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block opacity-0 transition-opacity duration-300 transform-gpu will-change-transform"
    >
      <div
        ref={dotRef}
        className="w-6 h-6 rounded-full bg-amber-400/30 border border-amber-400/80 backdrop-blur-[2px] shadow-[0_0_15px_rgba(255,159,28,0.6)]"
      />
    </div>
  );
}
