"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import AboutGoalCard from "./AboutGoalCard";

interface AboutPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutPanel({ isOpen, onClose }: AboutPanelProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9990] bg-black/70 backdrop-blur-md"
          />

          {/* Floating Drawer Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-12 bottom-12 right-4 left-4 sm:right-8 sm:left-auto sm:w-[680px] z-[9995] bg-[#0c0c10]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-y-auto no-scrollbar flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
                <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-semibold">
                  ABOUT PINNACLE STUDIOS
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Close panel"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Main Content */}
            <div className="my-8 flex flex-col gap-8">
              
              {/* Hardcoded 1:1 Design Card: We actually care for your digital goals */}
              <AboutGoalCard />

              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight leading-tight text-white">
                  WE MOVE BRANDS THROUGH DIGITAL &amp; VISUAL MASTERY.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed font-light">
                  Pinnacle Studios is a luxury-focused digital creative agency based in Mumbai. We craft immersive digital experiences, high-performance websites, AI product visuals, CGI, and brand identity systems that convert attention into long-term value.
                </p>
              </div>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-red-500 font-bold text-sm tracking-wider uppercase">
                    <Sparkles className="w-4 h-4" /> BRAND STRATEGY
                  </div>
                  <p className="text-xs text-white/70">Building iconic positioning, visual narratives, and distinct market authority.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm tracking-wider uppercase">
                    <Sparkles className="w-4 h-4" /> DIGITAL WEBSITES
                  </div>
                  <p className="text-xs text-white/70">Ultra-fast Next.js, 3D WebGL, and custom GSAP animated luxury web applications.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm tracking-wider uppercase">
                    <Sparkles className="w-4 h-4" /> AI PRODUCT VISUALS
                  </div>
                  <p className="text-xs text-white/70">Cutting-edge photorealistic AI product renders, commercial films &amp; campaigns.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm tracking-wider uppercase">
                    <Sparkles className="w-4 h-4" /> AI AGENTS &amp; AUTOMATION
                  </div>
                  <p className="text-xs text-white/70">Automated lead qualification, custom AI chatbots, and workflow integration.</p>
                </div>
              </div>

              {/* Capabilities List */}
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xs uppercase tracking-widest text-white/50 mb-4 font-bold">CORE CAPABILITIES</h3>
                <div className="grid grid-cols-2 gap-3 text-xs text-white/80 font-medium">
                  {["Brand Identity", "Luxury Web Design", "AI Product Renders", "CGI & 3D Motion", "AI Customer Support", "Full-Stack Web Dev"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-red-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Call to Action */}
            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-white/50 tracking-wider">MUMBAI · GLOBAL CLIENTS</span>
              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
