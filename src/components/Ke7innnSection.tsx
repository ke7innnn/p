"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, Cpu, Compass } from "lucide-react";

export default function Ke7innnSection() {
    return (
        <section className="relative py-24 sm:py-32 w-full bg-[#050507] text-white z-50 overflow-hidden border-t border-white/10">
            {/* Ambient Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center text-center">
                
                <div className="flex items-center gap-3 text-amber-400 font-bold text-xs uppercase tracking-[0.3em] mb-6">
                    <Sparkles className="w-4 h-4" /> AGENCY METHODOLOGY
                </div>

                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white max-w-4xl leading-tight">
                    HIGH-OCTANE CREATIVITY BACKED BY ENGINEERING PRECISION.
                </h2>

                <p className="mt-6 text-sm sm:text-lg text-white/60 font-light max-w-2xl leading-relaxed">
                    We bridge the gap between creative visual artistry and scalable technical infrastructure, giving brands an unfair advantage online.
                </p>

                {/* 3 Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-16 text-left">
                    <div className="p-8 rounded-3xl bg-[#0e0e14]/90 border border-white/10 flex flex-col gap-3 hover:border-white/30 transition-colors">
                        <Layers className="w-6 h-6 text-red-500 mb-2" />
                        <h3 className="text-xl font-bold uppercase tracking-wide text-white">VISUAL DIRECTION</h3>
                        <p className="text-xs text-white/60 font-light leading-relaxed">Luxury brand identity, bespoke typography, art direction, and digital design systems.</p>
                    </div>

                    <div className="p-8 rounded-3xl bg-[#0e0e14]/90 border border-white/10 flex flex-col gap-3 hover:border-white/30 transition-colors">
                        <Cpu className="w-6 h-6 text-amber-400 mb-2" />
                        <h3 className="text-xl font-bold uppercase tracking-wide text-white">AI &amp; AUTOMATION</h3>
                        <p className="text-xs text-white/60 font-light leading-relaxed">AI product photography, synthetic campaign creation, custom lead bots &amp; workflow pipelines.</p>
                    </div>

                    <div className="p-8 rounded-3xl bg-[#0e0e14]/90 border border-white/10 flex flex-col gap-3 hover:border-white/30 transition-colors">
                        <Compass className="w-6 h-6 text-rose-400 mb-2" />
                        <h3 className="text-xl font-bold uppercase tracking-wide text-white">WEB ENGINEERING</h3>
                        <p className="text-xs text-white/60 font-light leading-relaxed">Ultra-responsive Next.js architecture, GSAP scroll triggers, WebGL 3D, and sub-second load times.</p>
                    </div>
                </div>

                {/* Massive Brand Mark */}
                <div className="mt-24 select-none">
                    <h1 className="text-[14vw] sm:text-[12vw] font-black uppercase tracking-tighter leading-none text-stroke-white opacity-20 hover:opacity-80 transition-opacity duration-700">
                        PINNACLE
                    </h1>
                </div>

            </div>
        </section>
    );
}

