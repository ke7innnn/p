"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

const FAQS = [
  {
    q: "WHAT IS THE TYPICAL PROJECT TIMELINE AT PINNACLE STUDIOS?",
    a: "Our standard web design & brand identity commissions are delivered within 2 to 4 weeks. AI product photography and synthetic campaign shoots take 5 to 7 business days. Express turnaround options are available for priority launches."
  },
  {
    q: "HOW DO PINNACLE AI VISUALS COMPARE TO TRADITIONAL STUDIO SHOOTS?",
    a: "Pinnacle AI Synthetic Campaigns produce photorealistic, 8K studio-grade campaign renders at 1/5th the cost and 10x the speed of physical set production. You get unlimited camera angles, lighting conditions, and environment setups without logistical bottlenecks."
  },
  {
    q: "WHAT TECHNOLOGIES POWER YOUR WEB SYSTEMS?",
    a: "We engineer exclusively on Next.js 16 with Turbopack, Tailwind CSS, GSAP ScrollTrigger, and Three.js / WebGL 3D. Every website achieves sub-second initial load times, zero cumulative layout shift (CLS), and 99.8% speed benchmarks."
  },
  {
    q: "DO YOU OFFER POST-LAUNCH SUPPORT & MAINTENANCE?",
    a: "Yes. Every client engagement includes 30 days of complimentary post-launch technical monitoring, performance optimizations, and content update assistance, followed by optional ongoing retainer options."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-32 w-full bg-[#030305] text-white overflow-hidden border-t border-white/10 z-20" id="faq">
      
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            <HelpCircle className="w-4 h-4" /> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-6xl font-heading-syne font-black uppercase tracking-tight text-white leading-tight">
            EVERYTHING YOU NEED <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              TO KNOW BEFORE STARTING.
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="luxury-card rounded-2xl overflow-hidden border border-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading-syne font-bold text-base sm:text-lg text-white hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div className={`p-2 rounded-full bg-white/5 border border-white/10 transition-transform duration-300 ${isOpen ? "rotate-180 bg-amber-500/20 text-amber-400" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm font-sans-jakarta font-light text-white/70 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
