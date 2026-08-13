"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.matchMedia("(pointer: coarse)").matches);
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive cursor element
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;
      
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute("data-cursor") || "VIEW");
        setIsHovered(true);
      } else if (target?.closest("button, a, [role='button']")) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      animate={{
        x: pos.x - (isHovered ? 24 : 8),
        y: pos.y - (isHovered ? 24 : 8),
        scale: isHovered ? 1.5 : 1,
      }}
      transition={{ type: "spring", damping: 25, stiffness: 350, mass: 0.5 }}
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-300 ${
          isHovered
            ? "w-12 h-12 bg-amber-400/20 border border-amber-400/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,159,28,0.5)] text-[9px] font-extrabold uppercase tracking-widest text-white"
            : "w-4 h-4 bg-amber-400 shadow-[0_0_10px_rgba(255,159,28,0.8)]"
        }`}
      >
        {cursorText}
      </div>
    </motion.div>
  );
}
