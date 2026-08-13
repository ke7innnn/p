"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Globe, Zap, Award, Plus, Compass } from "lucide-react";
import TiltCard from "./TiltCard";

export default function BrandStory() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const marqueeItems = [
        "✦ BRAND IDENTITIES",
        "✦ LUXURY WEB DESIGN",
        "✦ AI PRODUCT VISUALS",
        "✦ CGI & 3D MOTION",
        "✦ AI AGENTS & CHATBOTS",
        "✦ HIGH-CONVERSION LANDING PAGES"
    ];

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Fluid 3D Parallax & Flythrough Transforms
    const headlineY = useTransform(scrollYProgress, [0, 0.5, 1], ["60px", "0px", "-60px"]);
    const textFlyScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.92, 1, 1.04]);
    const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.8, 0.4]);

    return (
        <section ref={sectionRef} id="brand-story" className="relative z-10 w-full min-h-screen flex flex-col justify-center items-start pt-20 pb-8 px-6 sm:px-12 max-w-[1600px] mx-auto text-white">
            
            {/* Architectural Grid Line Overlays */}
            <div className="absolute inset-0 pointer-events-none z-0 border-x border-white/[0.04] max-w-[1500px] mx-auto" />

            {/* Ambient Orange Background Glow */}
            <motion.div 
                style={{ opacity: glowOpacity }}
                className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none" 
            />

            {/* Top HUD Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#121218]/90 backdrop-blur-2xl border border-orange-500/30 shadow-[0_0_30px_rgba(255,120,0,0.2)]"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
                    <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-amber-400">
                        LUXURY CREATIVE AGENCY · MUMBAI
                    </span>
                </motion.div>

                {/* HUD Coordinate Tag Design Element */}
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/50 tracking-widest uppercase">
                    <Compass className="w-3.5 h-3.5 text-amber-400" />
                    <span>[ 19.0760° N, 72.8777° E ] HQ</span>
                </div>
            </div>

            {/* 3D Flythrough Headline Statement */}
            <motion.div 
                style={{ y: headlineY, scale: textFlyScale }}
                className="w-full max-w-[1400px] text-left flex flex-col items-start gap-6"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading-syne font-black uppercase tracking-tight leading-[0.92] text-white text-left"
                >
                    WE DESIGN. <br />
                    <span className="text-stroke-white hover:text-white transition-colors duration-500 opacity-90">WE BUILD.</span> <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 animate-shimmer-text drop-shadow-[0_10px_35px_rgba(255,100,0,0.3)]">
                        WE MOVE BRANDS.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-6 max-w-3xl text-left text-base sm:text-xl text-white/80 font-sans-jakarta font-light leading-relaxed tracking-wide"
                >
                    Pinnacle Studios is a luxury-focused creative agency crafting bespoke brand identities, high-performance web systems, AI product visuals, and immersive digital experiences for ambitious global brands.
                </motion.p>
            </motion.div>

            {/* Bespoke Luxury Stat Cards with Corner Crosshairs & Light Sweep */}
            <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
                
                {/* Stat Card 1 */}
                <TiltCard className="luxury-card animate-light-sweep p-8 rounded-3xl flex flex-col items-start gap-4 group relative overflow-hidden">
                    <Plus className="absolute top-4 right-4 w-3.5 h-3.5 text-white/20 group-hover:text-amber-400 transition-colors" />
                    <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/30 group-hover:scale-110 transition-transform">
                        <Globe className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <div className="text-3xl sm:text-4xl font-heading-syne font-extrabold text-white tracking-tight">GLOBAL REACH</div>
                        <div className="text-xs font-sans-jakarta font-semibold text-white/50 tracking-widest uppercase mt-1">Serving brands across India, US &amp; Europe</div>
                    </div>
                </TiltCard>

                {/* Stat Card 2 */}
                <TiltCard className="luxury-card animate-light-sweep p-8 rounded-3xl flex flex-col items-start gap-4 group relative overflow-hidden">
                    <Plus className="absolute top-4 right-4 w-3.5 h-3.5 text-white/20 group-hover:text-amber-400 transition-colors" />
                    <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-400/30 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                        <div className="text-3xl sm:text-4xl font-heading-syne font-extrabold text-white tracking-tight">99.8% SPEED</div>
                        <div className="text-xs font-sans-jakarta font-semibold text-white/50 tracking-widest uppercase mt-1">Next.js 16, Turbopack &amp; WebGL 3D</div>
                    </div>
                </TiltCard>

                {/* Stat Card 3 */}
                <TiltCard className="luxury-card animate-light-sweep p-8 rounded-3xl flex flex-col items-start gap-4 group relative overflow-hidden">
                    <Plus className="absolute top-4 right-4 w-3.5 h-3.5 text-white/20 group-hover:text-amber-400 transition-colors" />
                    <div className="p-3 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 group-hover:scale-110 transition-transform">
                        <Award className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                        <div className="text-3xl sm:text-4xl font-heading-syne font-extrabold text-white tracking-tight">50+ DELIVERED</div>
                        <div className="text-xs font-sans-jakarta font-semibold text-white/50 tracking-widest uppercase mt-1">High-impact brand digital transformations</div>
                    </div>
                </TiltCard>
            </div>

            {/* Marquee Ticker */}
            <div className="w-full max-w-[1400px] overflow-hidden py-4 rounded-full bg-[#121218]/80 backdrop-blur-xl border border-white/15 mt-16 shadow-2xl">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-12 text-xs sm:text-sm font-extrabold tracking-[0.3em] text-white/80 uppercase"
                >
                    {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                        <span key={idx} className="flex items-center gap-12">
                            <span className="hover:text-amber-400 transition-colors">{item}</span>
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Hint */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-16 flex flex-col items-center gap-2 text-white/40 text-[10px] tracking-[0.3em] uppercase"
            >
                <span>SCROLL TO EXPLORE</span>
                <ArrowDown className="w-3.5 h-3.5 text-orange-500" />
            </motion.div>

        </section>
    );
}
