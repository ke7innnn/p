"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, Cpu, Compass, Plus } from "lucide-react";
import TiltCard from "./TiltCard";

export default function Ke7innnSection() {
    return (
        <section className="relative pt-12 sm:pt-16 pb-20 sm:pb-28 w-full bg-[#050507] text-white z-50 overflow-hidden border-t border-white/10">
            {/* Ambient Background Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center text-center">
                
                <div className="flex items-center gap-3 text-amber-400 font-bold text-xs uppercase tracking-[0.3em] mb-6">
                    <Sparkles className="w-4 h-4" /> AGENCY METHODOLOGY
                </div>

                <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading-syne font-black uppercase tracking-tight text-white max-w-4xl leading-tight">
                    HIGH-OCTANE CREATIVITY BACKED BY <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 animate-shimmer-text">
                        ENGINEERING PRECISION.
                    </span>
                </h2>

                <p className="mt-6 text-sm sm:text-lg text-white/80 font-sans-jakarta font-light max-w-2xl leading-relaxed">
                    We bridge the gap between creative visual artistry and scalable technical infrastructure, giving brands an unfair advantage online.
                </p>

                {/* 3 Pillars with 3D Tilt Jaxx Effect & Design Elements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-16 text-left">
                    
                    {/* Pillar 1 */}
                    <TiltCard className="luxury-card animate-light-sweep p-8 rounded-3xl flex flex-col gap-4 group relative overflow-hidden">
                        <Plus className="absolute top-4 right-4 w-3.5 h-3.5 text-white/20 group-hover:text-red-500 transition-colors" />
                        <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/30 w-fit group-hover:scale-110 transition-transform">
                            <Layers className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-heading-syne font-bold uppercase tracking-wide text-white">VISUAL DIRECTION</h3>
                            <p className="text-xs text-white/60 font-sans-jakarta font-light leading-relaxed mt-2">Luxury brand identity, bespoke typography, art direction, and digital design systems.</p>
                        </div>
                    </TiltCard>

                    {/* Pillar 2 */}
                    <TiltCard className="luxury-card animate-light-sweep p-8 rounded-3xl flex flex-col gap-4 group relative overflow-hidden">
                        <Plus className="absolute top-4 right-4 w-3.5 h-3.5 text-white/20 group-hover:text-amber-400 transition-colors" />
                        <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-400/30 w-fit group-hover:scale-110 transition-transform">
                            <Cpu className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-heading-syne font-bold uppercase tracking-wide text-white">AI &amp; AUTOMATION</h3>
                            <p className="text-xs text-white/60 font-sans-jakarta font-light leading-relaxed mt-2">AI product photography, synthetic campaign creation, custom lead bots &amp; workflow pipelines.</p>
                        </div>
                    </TiltCard>

                    {/* Pillar 3 */}
                    <TiltCard className="luxury-card animate-light-sweep p-8 rounded-3xl flex flex-col gap-4 group relative overflow-hidden">
                        <Plus className="absolute top-4 right-4 w-3.5 h-3.5 text-white/20 group-hover:text-rose-400 transition-colors" />
                        <div className="p-3 rounded-2xl bg-rose-400/10 border border-rose-400/30 w-fit group-hover:scale-110 transition-transform">
                            <Compass className="w-6 h-6 text-rose-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-heading-syne font-bold uppercase tracking-wide text-white">WEB ENGINEERING</h3>
                            <p className="text-xs text-white/60 font-sans-jakarta font-light leading-relaxed mt-2">Ultra-responsive Next.js architecture, GSAP scroll triggers, WebGL 3D, and sub-second load times.</p>
                        </div>
                    </TiltCard>
                </div>

                {/* Massive Brand Mark */}
                <div className="mt-20 pt-12 border-t border-white/10 w-full flex items-center justify-between text-xs text-white/40 font-mono tracking-widest uppercase">
                    <span>PINNACLE STUDIOS ENGINE</span>
                    <span>CREATIVE FREQUENCY · 2026</span>
                </div>

            </div>
        </section>
    );
}
