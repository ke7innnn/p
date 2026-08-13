"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

interface BeingLoopHeroProps {
  onOpenAbout: () => void;
  onOpenClients: () => void;
  onOpenContact: () => void;
}

export default function BeingLoopHero({ onOpenAbout, onOpenClients, onOpenContact }: BeingLoopHeroProps) {
  const scrollToWork = () => {
    const target = document.getElementById("our-work");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-between items-center bg-[#000000] text-white overflow-hidden z-10 selection:bg-amber-500 selection:text-black">
      
      {/* 1. Ambient Warm Golden / Amber Corner Glow Lights (Matching beingloop.com) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bottom Left Warm Glow */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.65, 0.9, 0.65],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[25%] -left-[15%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-tr from-[#FF9F1C]/50 via-[#E55934]/35 to-transparent blur-[130px]"
        />

        {/* Bottom Right Warm Glow */}
        <motion.div
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.6, 0.85, 0.6],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[25%] -right-[15%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-tl from-[#D4AF37]/50 via-[#FF9F1C]/35 to-transparent blur-[140px]"
        />

        {/* Top Subtle Ambient Glow */}
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-amber-500/10 blur-[130px]" />
      </div>

      {/* Top Header Spacing */}
      <div className="h-16" />

      {/* Center Nav & Brand Bar (1:1 match to beingloop.com starting page view) */}
      <div className="relative z-20 w-full max-w-[1200px] px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-8 my-auto">
        
        {/* Glowing Brand Icon */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 flex items-center justify-center shadow-[0_0_40px_rgba(255,159,28,0.8)] group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 text-black fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" />
            </svg>
          </div>
        </a>

        {/* Minimalist Spaced Navigation Menu */}
        <nav className="flex items-center gap-6 sm:gap-14 flex-wrap justify-center">
          <button
            onClick={onOpenAbout}
            className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-white/90 hover:text-amber-400 transition-colors duration-300"
          >
            ABOUT
          </button>
          <Link
            href="/work"
            className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-white/90 hover:text-amber-400 transition-colors duration-300"
          >
            OUR WORK
          </Link>
          <button
            onClick={onOpenClients}
            className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-white/90 hover:text-amber-400 transition-colors duration-300"
          >
            CLIENTS
          </button>
          <button
            onClick={onOpenContact}
            className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-white/90 hover:text-amber-400 transition-colors duration-300"
          >
            CONTACT
          </button>
        </nav>
      </div>

      {/* Bottom Hint Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative z-20 pb-12 flex flex-col items-center gap-2 text-white/40 text-[10px] tracking-[0.3em] uppercase"
      >
        <span>SCROLL TO DISCOVER</span>
        <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
      </motion.div>

    </section>
  );
}
