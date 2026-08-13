"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Sparkles, Compass } from "lucide-react";

interface BeingLoopHeroProps {
  onOpenAbout: () => void;
  onOpenClients: () => void;
  onOpenContact: () => void;
}

export default function BeingLoopHero({
  onOpenAbout,
  onOpenClients,
  onOpenContact,
}: BeingLoopHeroProps) {
  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col justify-between items-center bg-transparent text-white px-4 sm:px-8 overflow-hidden select-none pt-12 sm:pt-16">
      
      {/* 0. BIG NOTICEABLE 3D KINETIC AMBIENT HALO RING DESIGN ELEMENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[850px] max-h-[850px] pointer-events-none z-0">
        {/* Kinetic Rotating Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-full border border-dashed border-amber-500/20 shadow-[0_0_100px_rgba(255,159,28,0.15)] flex items-center justify-center p-12"
        >
          {/* Inner Glowing Pulsing Orb Ring */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full bg-gradient-to-tr from-amber-500/10 via-orange-600/15 to-transparent blur-[60px]"
          />
        </motion.div>
      </div>

      {/* Top HUD Status Bar */}
      <div className="relative z-20 w-full max-w-[1500px] flex items-center justify-between pt-4 text-xs font-mono text-white/50 tracking-widest uppercase border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>PINNACLE STUDIOS ENGINE</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-amber-400" />
          <span>MUMBAI · GLOBAL</span>
        </div>
      </div>

      {/* Central Brand Identity Button */}
      <div className="relative z-20 my-auto flex flex-col items-center justify-center text-center py-16 sm:py-24">
        
        {/* Glowing Interactive Brand Mark */}
        <a
          href="#brand-story"
          className="group relative flex flex-col items-center justify-center cursor-pointer mb-12"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 flex items-center justify-center shadow-[0_0_60px_rgba(255,159,28,0.6)] group-hover:scale-110 transition-transform duration-500 transform-gpu">
            <svg viewBox="0 0 24 24" className="w-12 h-12 sm:w-16 sm:h-16 text-black fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" />
            </svg>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-sans-jakarta font-extrabold uppercase tracking-[0.3em] text-amber-400 group-hover:text-white transition-colors">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PINNACLE STUDIOS</span>
          </div>
        </a>

        {/* Minimalist Spaced Navigation Menu */}
        <nav className="flex items-center gap-4 sm:gap-14 flex-wrap justify-center">
          <button
            onClick={onOpenAbout}
            className="min-h-[44px] px-3 py-2 text-xs sm:text-sm font-sans-jakarta font-extrabold uppercase tracking-[0.25em] text-white/90 hover:text-amber-400 active:scale-95 transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            ABOUT
          </button>
          <Link
            href="/work"
            className="min-h-[44px] px-3 py-2 text-xs sm:text-sm font-sans-jakarta font-extrabold uppercase tracking-[0.25em] text-white/90 hover:text-amber-400 active:scale-95 transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 flex items-center"
          >
            OUR WORK
          </Link>
          <button
            onClick={onOpenClients}
            className="min-h-[44px] px-3 py-2 text-xs sm:text-sm font-sans-jakarta font-extrabold uppercase tracking-[0.25em] text-white/90 hover:text-amber-400 active:scale-95 transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            CLIENTS
          </button>
          <button
            onClick={onOpenContact}
            className="min-h-[44px] px-3 py-2 text-xs sm:text-sm font-sans-jakarta font-extrabold uppercase tracking-[0.25em] text-white/90 hover:text-amber-400 active:scale-95 transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
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
