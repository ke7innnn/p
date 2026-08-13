"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, Clock, Layers } from "lucide-react";
import Link from "next/link";

interface FloatingHudProps {
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export default function FloatingHud({ onOpenAbout, onOpenContact }: FloatingHudProps) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const timeStr = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setIstTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9980] max-w-[92vw] sm:max-w-auto pointer-events-auto transform-gpu"
        >
          <div className="px-5 py-3 rounded-full bg-[#0c0c12]/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,159,28,0.15)] flex items-center gap-4 sm:gap-6 text-white text-xs font-sans-jakarta">
            
            {/* Live IST Clock Tag */}
            <div className="hidden sm:flex items-center gap-2 border-r border-white/15 pr-4 text-white/60 font-mono text-[11px]">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>MUMBAI {istTime || "12:00 PM"}</span>
            </div>

            {/* Navigation Shortcuts */}
            <button
              onClick={onOpenAbout}
              className="text-white/80 hover:text-amber-400 font-extrabold uppercase tracking-wider text-[11px] transition-colors"
            >
              ABOUT
            </button>
            <Link
              href="/work"
              className="text-white/80 hover:text-amber-400 font-extrabold uppercase tracking-wider text-[11px] transition-colors"
            >
              WORK
            </Link>

            {/* Primary Action Button */}
            <button
              onClick={onOpenContact}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 text-black font-extrabold text-[11px] uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,159,28,0.4)] flex items-center gap-1.5"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
