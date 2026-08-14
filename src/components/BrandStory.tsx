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
        <section ref={sectionRef} id="brand-story" className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center pt-20 pb-12 px-6 sm:px-12 max-w-[1600px] mx-auto text-white text-center">
            
            {/* Architectural Grid Line Overlays */}
            <div className="absolute inset-0 pointer-events-none z-0 border-x border-white/[0.04] max-w-[1500px] mx-auto" />

            {/* Ambient Sunset Flare Background Glow */}
            <motion.div 
                style={{ opacity: glowOpacity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF5E62]/10 rounded-full blur-[150px] pointer-events-none" 
            />

            {/* Top HUD Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#1a0c16]/90 backdrop-blur-2xl border border-[#FF5E62]/30 shadow-[0_0_30px_rgba(255,94,98,0.2)]"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5E62] animate-ping" />
                    <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[#FF9966]">
                        LUXURY CREATIVE AGENCY · MUMBAI
                    </span>
                </motion.div>

                {/* HUD Coordinate Tag Design Element */}
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/50 tracking-widest uppercase">
                    <Compass className="w-3.5 h-3.5 text-[#FFD166]" />
                    <span>[ 19.0760° N, 72.8777° E ] HQ</span>
                </div>
            </div>

            {/* 3D Flythrough Headline Statement - Centered & Neatly Proportioned */}
            <motion.div 
                style={{ y: headlineY, scale: textFlyScale }}
                className="w-full max-w-[1000px] text-center flex flex-col items-center gap-6"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading-syne font-black uppercase tracking-tight leading-[1.05] text-white text-center"
                >
                    WE DESIGN. <br />
                    <span className="text-stroke-white hover:text-white transition-colors duration-500 opacity-90">WE BUILD.</span> <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5E62] via-[#FF9966] to-[#FFD166] animate-shimmer-text drop-shadow-[0_10px_35px_rgba(255,94,98,0.35)]">
                        WE MOVE BRANDS.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-4 max-w-2xl text-center text-sm sm:text-lg text-white/80 font-sans-jakarta font-light leading-relaxed tracking-wide mx-auto"
                >
                    Pinnacle Studios is a luxury-focused creative agency crafting bespoke brand identities, high-performance web systems, AI product visuals, and immersive digital experiences for ambitious global brands.
                </motion.p>
            </motion.div>

            {/* Bespoke Luxury Stat Cards with Corner Crosshairs & Light Sweep */}
            <div className="w-full max-w-[1100px] grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14 mx-auto">
                
                {/* Stat Card 1 */}
                <TiltCard className="luxury-card animate-light-sweep p-8 rounded-3xl flex flex-col items-center text-center gap-4 group relative overflow-hidden">
                    <Plus className="absolute top-4 right-4 w-3.5 h-3.5 text-white/20 group-hover:text-[#FF9966] transition-colors" />
                    <div className="p-3 rounded-2xl bg-[#FF5E62]/10 border border-[#FF5E62]/30 group-hover:scale-110 transition-transform">
                        <Globe className="w-6 h-6 text-[#FF5E62]" />
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-heading-syne font-extrabold text-white tracking-tight">GLOBAL REACH</div>
                        <div className="text-xs font-sans-jakarta font-semibold text-white/50 tracking-widest uppercase mt-1">Serving brands across India, US &amp; Europe</div>
                    </div>
                </TiltCard>

                {/* Stat Card 2 */}
                <TiltCard className="luxury-card animate-light-sweep p-8 rounded-3xl flex flex-col items-center text-center gap-4 group relative overflow-hidden">
                    <Plus className="absolute top-4 right-4 w-3.5 h-3.5 text-white/20 group-hover:text-[#FF9966] transition-colors" />
                    <div className="p-3 rounded-2xl bg-[#FF9966]/10 border border-[#FF9966]/30 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-[#FF9966]" />
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-heading-syne font-extrabold text-white tracking-tight">99.8% SPEED</div>
                        <div className="text-xs font-sans-jakarta font-semibold text-white/50 tracking-widest uppercase mt-1">Next.js 16, Turbopack &amp; WebGL 3D</div>
                    </div>
                </TiltCard>

                {/* Stat Card 3 */}
                <TiltCard className="luxury-card animate-light-sweep p-8 rounded-3xl flex flex-col items-center text-center gap-4 group relative overflow-hidden">
                    <Plus className="absolute top-4 right-4 w-3.5 h-3.5 text-white/20 group-hover:text-[#FFD166] transition-colors" />
                    <div className="p-3 rounded-2xl bg-[#FFD166]/10 border border-[#FFD166]/30 group-hover:scale-110 transition-transform">
                        <Award className="w-6 h-6 text-[#FFD166]" />
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-heading-syne font-extrabold text-white tracking-tight">50+ DELIVERED</div>
                        <div className="text-xs font-sans-jakarta font-semibold text-white/50 tracking-widest uppercase mt-1">High-impact brand digital transformations</div>
                    </div>
                </TiltCard>
            </div>

            {/* Marquee Ticker */}
            <div className="w-full max-w-[1300px] overflow-hidden py-4 rounded-full bg-[#180a14]/80 backdrop-blur-xl border border-[#FF5E62]/20 mt-14 shadow-2xl mx-auto">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-12 text-xs sm:text-sm font-extrabold tracking-[0.3em] text-white/80 uppercase"
                >
                    {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                        <span key={idx} className="flex items-center gap-12">
                            <span className="hover:text-[#FF9966] transition-colors">{item}</span>
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Hint */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-14 flex flex-col items-center gap-2 text-white/40 text-[10px] tracking-[0.3em] uppercase mx-auto"
            >
                <span>SCROLL TO EXPLORE</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#FF5E62]" />
            </motion.div>

        </section>
    );
}
