"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Award } from "lucide-react";
import TiltCard from "./TiltCard";

const TESTIMONIALS = [
  {
    quote: "Pinnacle Studios completely transformed our digital brand presence. Their Next.js 16 architecture gave us sub-second load times while their AI product visuals increased our conversion rate by 340%.",
    author: "REHAN SHAIKH",
    role: "FOUNDER & CEO",
    company: "TILCONY LOGISTICS",
    metric: "+340% CONVERSION BOOST"
  },
  {
    quote: "Working with Pinnacle felt like stepping 5 years into the future. The 3D GSAP scroll triggers and bespoke typography identity established us as the undisputed market leader in luxury interiors.",
    author: "ANANYA VERMA",
    role: "CREATIVE DIRECTOR",
    company: "INNER SPACE DESIGN",
    metric: "GLOBAL BRAND AWARD"
  },
  {
    quote: "Their AI synthetic campaign shoot saved us over $40,000 in physical set production while producing the crispest, photorealistic product assets we have ever published.",
    author: "VIKRAMADITYA MEHTA",
    role: "HEAD OF BRAND",
    company: "FROVEN CYBER",
    metric: "$40K COST SAVINGS"
  }
];

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <section className="relative py-24 sm:py-32 w-full bg-[#050508] text-white overflow-hidden border-t border-white/10 z-20" id="testimonials">
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            <Award className="w-4 h-4" /> CLIENT REVIEWS &amp; CASE METRICS
          </div>
          <h2 className="text-3xl sm:text-6xl font-heading-syne font-black uppercase tracking-tight text-white leading-tight">
            WHAT VISIONARY LEADERS <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              SAY ABOUT PINNACLE.
            </span>
          </h2>
        </div>

        {/* Testimonial Card Display */}
        <div className="max-w-4xl mx-auto">
          <TiltCard className="luxury-card p-8 sm:p-12 rounded-3xl relative border-amber-500/30">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">
                {current.metric}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="text-xl sm:text-2xl font-heading-syne font-medium text-white leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </p>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-lg font-heading-syne font-extrabold uppercase text-white">{current.author}</div>
                    <div className="text-xs font-sans-jakarta font-medium text-amber-400 uppercase tracking-wider mt-0.5">
                      {current.role} · {current.company}
                    </div>
                  </div>

                  <Quote className="w-10 h-10 text-white/10" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t border-white/10">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </TiltCard>
        </div>

      </div>
    </section>
  );
}
