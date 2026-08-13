"use client";

import { motion } from "framer-motion";
import { ArrowDown, Globe, Zap, Award } from "lucide-react";

export default function BrandStory() {
    const marqueeItems = [
        "✦ BRAND IDENTITIES",
        "✦ LUXURY WEB DESIGN",
        "✦ AI PRODUCT VISUALS",
        "✦ CGI & 3D MOTION",
        "✦ AI AGENTS & CHATBOTS",
        "✦ HIGH-CONVERSION LANDING PAGES"
    ];

    return (
        <section id="brand-story" className="relative z-10 w-full min-h-screen flex flex-col justify-center items-start py-24 px-6 sm:px-12 max-w-[1600px] mx-auto text-white">
            
            {/* Ambient Orange Background Glow */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Top Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#121218]/90 backdrop-blur-2xl border border-orange-500/30 shadow-[0_0_30px_rgba(255,120,0,0.2)] mb-10"
            >
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
                <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-amber-400">
                    LUXURY CREATIVE AGENCY · MUMBAI
                </span>
            </motion.div>

            {/* Main Headline Statement (Left Aligned as requested) */}
            <div className="w-full max-w-[1400px] text-left flex flex-col items-start gap-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-[0.92] text-white text-left"
                >
                    WE DESIGN. <br />
                    <span className="text-stroke-white hover:text-white transition-colors duration-500 opacity-90">WE BUILD.</span> <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF3D00] via-[#FF8800] to-[#FFAA00] drop-shadow-[0_10px_35px_rgba(255,100,0,0.3)]">
                        WE MOVE BRANDS.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-6 max-w-3xl text-left text-base sm:text-xl text-white/70 font-light leading-relaxed tracking-wide"
                >
                    Pinnacle Studios is a luxury-focused creative agency crafting bespoke brand identities, high-performance web systems, AI product visuals, and immersive digital experiences for ambitious global brands.
                </motion.p>
            </div>

            {/* Ultra-Minimalist Stat Cards */}
            <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
                <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 rounded-3xl bg-[#0c0c12]/90 backdrop-blur-2xl border border-white/15 hover:border-orange-500/50 transition-colors flex flex-col items-start gap-3 shadow-2xl group"
                >
                    <Globe className="w-7 h-7 text-orange-500 mb-1 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl sm:text-4xl font-black text-white">GLOBAL REACH</div>
                    <div className="text-xs font-semibold text-white/50 tracking-widest uppercase">Serving brands across India, US &amp; Europe</div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 rounded-3xl bg-[#0c0c12]/90 backdrop-blur-2xl border border-white/15 hover:border-amber-400/50 transition-colors flex flex-col items-start gap-3 shadow-2xl group"
                >
                    <Zap className="w-7 h-7 text-amber-400 mb-1 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl sm:text-4xl font-black text-white">99.8% SPEED</div>
                    <div className="text-xs font-semibold text-white/50 tracking-widest uppercase">Next.js 16, Turbopack &amp; WebGL 3D</div>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 rounded-3xl bg-[#0c0c12]/90 backdrop-blur-2xl border border-white/15 hover:border-yellow-400/50 transition-colors flex flex-col items-start gap-3 shadow-2xl group"
                >
                    <Award className="w-7 h-7 text-yellow-400 mb-1 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl sm:text-4xl font-black text-white">50+ DELIVERED</div>
                    <div className="text-xs font-semibold text-white/50 tracking-widest uppercase">High-impact brand digital transformations</div>
                </motion.div>
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


