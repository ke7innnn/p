"use client";

import React from "react";
import { Sparkles, Layers, Cpu, Compass, Plus } from "lucide-react";
import TiltCard from "./TiltCard";

export default function Ke7innnSection() {
    return (
        <section id="agency-pillars" className="relative w-full bg-[#050204] text-white z-50 overflow-hidden pt-24 sm:pt-32 pb-24 sm:pb-36 select-none border-t border-white/10">
            
            {/* 1. FIERY ORANGE & GOLD VERTICAL LIGHT CURTAIN BACKDROP (Reference Design Match) */}
            <div className="absolute top-0 left-0 right-0 h-[700px] pointer-events-none overflow-hidden z-0">
                {/* Vertical Fiery Light Rays Overlay */}
                <div
                    className="absolute inset-0 opacity-100"
                    style={{
                        background: `
                            radial-gradient(ellipse at 50% 0%, rgba(255, 120, 30, 0.95) 0%, rgba(255, 75, 80, 0.75) 30%, rgba(180, 60, 5, 0.45) 60%, rgba(5, 2, 4, 0) 90%),
                            repeating-linear-gradient(90deg, rgba(255, 160, 50, 0.15) 0px, rgba(255, 160, 50, 0.15) 24px, transparent 24px, transparent 48px),
                            repeating-linear-gradient(90deg, rgba(255, 94, 98, 0.12) 0px, transparent 18px, rgba(255, 209, 102, 0.14) 36px)
                        `,
                        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0) 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0) 100%)",
                    }}
                />

                {/* Ambient Top Glow Pulse */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#FF9966]/50 via-[#FF5E62]/30 to-transparent rounded-full blur-[90px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center text-center">
                
                {/* Small Tag Header */}
                <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFD166] text-xs uppercase tracking-[0.25em] font-extrabold mb-8 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF5E62]" />
                    <span>PINNACLE STUDIOS</span>
                </div>

                {/* MAIN HEADLINE STATEMENT (1:1 Match to User's Reference Screenshot) */}
                <h2 className="text-4xl sm:text-7xl md:text-8xl font-sans font-normal tracking-tight text-white leading-[1.08] max-w-4xl mx-auto drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
                    Pinnacle, a creative <br />
                    studio worth choosing.
                </h2>

                {/* Subtitle Paragraph */}
                <p className="mt-8 text-base sm:text-xl text-white/80 font-sans-jakarta font-light max-w-2xl leading-relaxed mx-auto">
                    High-octane visual artistry backed by Next.js 16 engineering precision, giving ambitious global brands an unfair market advantage.
                </p>

                {/* 3 Pillars with 3D Tilt Effect */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-16 text-left">
                    
                    {/* Pillar 1 */}
                    <TiltCard className="luxury-card animate-light-sweep p-8 rounded-3xl flex flex-col gap-4 group relative overflow-hidden bg-[#0d070b]/90 backdrop-blur-2xl border border-white/15">
                        <Plus className="absolute top-4 right-4 w-3.5 h-3.5 text-white/20 group-hover:text-[#FF5E62] transition-colors" />
                        <div className="p-3 rounded-2xl bg-[#FF5E62]/10 border border-[#FF5E62]/30 w-fit group-hover:scale-110 transition-transform">
                            <Layers className="w-6 h-6 text-[#FF5E62]" />
                        </div>
                        <div>
                            <h3 className="text-xl font-heading-syne font-bold uppercase tracking-wide text-white">VISUAL DIRECTION</h3>
                            <p className="text-xs text-white/60 font-sans-jakarta font-light leading-relaxed mt-2">Luxury brand identity, bespoke typography, art direction, and digital design systems.</p>
                        </div>
                    </TiltCard>

                    {/* Pillar 2 */}
                    <TiltCard className="luxury-card animate-light-sweep p-8 rounded-3xl flex flex-col gap-4 group relative overflow-hidden bg-[#0d070b]/90 backdrop-blur-2xl border border-white/15">
                        <Plus className="absolute top-4 right-4 w-3.5 h-3.5 text-white/20 group-hover:text-[#FF9966] transition-colors" />
                        <div className="p-3 rounded-2xl bg-[#FF9966]/10 border border-[#FF9966]/30 w-fit group-hover:scale-110 transition-transform">
                            <Cpu className="w-6 h-6 text-[#FF9966]" />
                        </div>
                        <div>
                            <h3 className="text-xl font-heading-syne font-bold uppercase tracking-wide text-white">AI &amp; AUTOMATION</h3>
                            <p className="text-xs text-white/60 font-sans-jakarta font-light leading-relaxed mt-2">AI product photography, synthetic campaign creation, custom lead bots &amp; workflow pipelines.</p>
                        </div>
                    </TiltCard>

                    {/* Pillar 3 */}
                    <TiltCard className="luxury-card animate-light-sweep p-8 rounded-3xl flex flex-col gap-4 group relative overflow-hidden bg-[#0d070b]/90 backdrop-blur-2xl border border-white/15">
                        <Plus className="absolute top-4 right-4 w-3.5 h-3.5 text-white/20 group-hover:text-[#FFD166] transition-colors" />
                        <div className="p-3 rounded-2xl bg-[#FFD166]/10 border border-[#FFD166]/30 w-fit group-hover:scale-110 transition-transform">
                            <Compass className="w-6 h-6 text-[#FFD166]" />
                        </div>
                        <div>
                            <h3 className="text-xl font-heading-syne font-bold uppercase tracking-wide text-white">WEB ENGINEERING</h3>
                            <p className="text-xs text-white/60 font-sans-jakarta font-light leading-relaxed mt-2">Ultra-responsive Next.js architecture, GSAP scroll triggers, WebGL 3D, and sub-second load times.</p>
                        </div>
                    </TiltCard>
                </div>

                {/* Bottom Footer Line */}
                <div className="mt-20 pt-10 border-t border-white/10 w-full flex items-center justify-between text-xs text-white/40 font-mono tracking-widest uppercase">
                    <span>PINNACLE STUDIOS ENGINE</span>
                    <span>CREATIVE FREQUENCY · 2026</span>
                </div>

            </div>
        </section>
    );
}
