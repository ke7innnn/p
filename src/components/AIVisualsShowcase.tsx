"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, SlidersHorizontal } from "lucide-react";

export default function AIVisualsShowcase() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="relative py-24 sm:py-32 w-full bg-[#050508] text-white overflow-hidden border-t border-white/10 z-20" id="ai-visuals">
      
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            <Sparkles className="w-4 h-4 fill-current" /> AI PRODUCT STUDIO DEMO
          </div>
          <h2 className="text-3xl sm:text-6xl font-heading-syne font-black uppercase tracking-tight text-white leading-tight">
            SYNTHETIC CAMPAIGNS <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-amber-400 to-orange-400">
              BEFORE &amp; AFTER SLIDER.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 font-sans-jakarta font-light">
            Drag the slider below to compare traditional studio captures against Pinnacle AI Synthetic Campaign Renderings.
          </p>
        </div>

        {/* Draggable Split-Screen Slider Viewport */}
        <div
          ref={containerRef}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
          className="relative w-full max-w-[1200px] aspect-[16/9] mx-auto rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.9)] cursor-ew-resize select-none touch-none"
        >
          {/* AFTER Image (Full Width Underneath) */}
          <div className="absolute inset-0 w-full h-full bg-black">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"
              alt="AI Synthetic Campaign After Render"
              fill
              priority
              className="object-cover"
            />
            {/* Label Right */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-400 text-xs font-extrabold uppercase tracking-widest z-10">
              ✦ PINNACLE AI CAMPAIGN
            </div>
          </div>

          {/* BEFORE Image (Clipped Width Top Layer) */}
          <div
            className="absolute inset-0 h-full overflow-hidden bg-black"
            style={{ width: `${sliderPos}%` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop"
              alt="Raw Product Capture Before Render"
              fill
              priority
              className="object-cover"
              style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}
            />
            {/* Label Left */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/80 text-xs font-extrabold uppercase tracking-widest z-10">
              TRADITIONAL RAW CAPTURE
            </div>
          </div>

          {/* Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-amber-400 z-20 shadow-[0_0_15px_rgba(255,159,28,0.8)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-400 text-black border-2 border-white flex items-center justify-center shadow-xl">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
