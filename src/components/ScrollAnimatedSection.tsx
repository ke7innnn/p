"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ScrollAnimatedSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Full-screen overlay opacity - transitions over scrolls
    // Matches eagle arrival: Starts at 0.26 (nav change), enters fully by 0.6 (eagle centers), stays full.
    const overlayOpacity = useTransform(
        scrollYProgress,
        [0, 0.26, 0.6, 1],
        [0, 0, 1, 1]
    );

    // --- ANIMATION PHASES (Total 600vh) ---
    // 0% - 25%: Initial State (Text visible)
    // 25% - 45%: Eagle Rises to Center / Text Fades Out
    // 45% - 65%: LOCK PHASE (Eagle stays centered, nothing else moves)
    // 65% - 85%: Specs/Offerings Enter
    // 85% - 100%: Drawing Reveal

    // --- ANIMATION PHASES (Total 600vh) ---
    // 0.00 - 0.15: Phase 1: TEXT ENTRY (Digital Agency rises to center)
    // 0.15 - 0.40: Phase 2: EAGLE ENTRY (Eagle rises from bottom to center)
    // 0.40 - 0.60: Phase 3: LOCK (Both at center)
    // 0.60 - 0.85: Phase 4: TRANSITION (Text falls away, Offerings drop in)
    // 0.85 - 1.00: Phase 5: REVEAL (Drawing)

    // --- TEXT ANIMATION ---
    // Enters FIRST (0-0.15), stays until 0.60, then falls away
    const textY = useTransform(
        scrollYProgress,
        [0, 0.15, 0.60, 0.85],
        ["100vh", "0vh", "0vh", "150vh"]
    );

    const textOpacity = useTransform(
        scrollYProgress,
        [0, 0.05, 0.75, 0.85],
        [0, 1, 1, 0] // Stays visible until well into the drop
    );

    // --- EAGLE ANIMATION ---
    // Enters SECOND (0.15-0.40), stays locked at center
    const eagleY = useTransform(
        scrollYProgress,
        [0.15, 0.40, 1],
        ["180vh", "0vh", "0vh"]
    );

    // Fade out is now handled by the mask, but we keep this to ensure it's gone at the very end
    const eagleOpacity = useTransform(
        scrollYProgress,
        [0.2, 0.25, 0.98, 1],
        [0, 1, 1, 0]
    );

    const eagleScale = useTransform(
        scrollYProgress,
        [0.60, 0.85, 1],
        [1, 0.5, 0.5]
    );

    // --- WIPE/REVEAL ANIMATION ---
    // Eagle wipes away from Bottom to Top (revealing drawing underneath)
    const wipeProgress = useTransform(
        scrollYProgress,
        [0.85, 1],
        [0, 100]
    );

    // Create a dynamic gradient mask
    // As wipeProgress goes 0->100, the transparent part grows from bottom up
    // We add +20% to black to create a SOFT feathered edge instead of a hard line
    const maskImage = useMotionTemplate`linear-gradient(to top, transparent ${wipeProgress}%, black ${useTransform(wipeProgress, (v) => v + 20)}%)`;
    const webkitMaskImage = maskImage; // For Safari support

    // --- OFFERINGS ANIMATION (Vertical Entry) ---
    // Comes down from TOP to CENTER during transition
    const contentY = useTransform(
        scrollYProgress,
        [0.60, 0.85],
        ["-100vh", "0vh"]
    );

    const contentOpacity = useTransform(
        scrollYProgress,
        [0.60, 0.70, 1],
        [0, 1, 1] // Stays visible until the end
    );

    // --- DRAWING ANIMATION ---
    // Drawing reveals from bottom-to-top SYNCHRONIZED with eagle wipe (0.85-1.0)
    const drawingOpacity = useTransform(
        scrollYProgress,
        [0.85, 0.87], // Quick fade in at start
        [0, 1]
    );

    // Drawing reveal mask - synchronized with eagle wipe
    // Reveals from bottom to top at the SAME TIME as eagle wipes away
    const drawingRevealProgress = useTransform(
        scrollYProgress,
        [0.85, 1],
        [0, 100]
    );

    // Inverted mask: starts opaque at bottom, reveals upward
    const drawingMaskImage = useMotionTemplate`linear-gradient(to top, black ${drawingRevealProgress}%, transparent ${useTransform(drawingRevealProgress, (v) => v + 20)}%)`;
    const drawingWebkitMaskImage = drawingMaskImage;

    return (
        <div ref={sectionRef} className="relative min-h-[600vh]" id="offerings">
            {/* Full-screen fixed overlay that fades in over scrolls */}
            <motion.div
                style={{ opacity: overlayOpacity }}
                className="fixed inset-0 z-[5] pointer-events-none bg-[#FDF5E6]"
            />

            {/* Pinned Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-20">

                {/* 1. TEXT LAYER (Moves independently) */}
                {/* Centered vertically via flex for initial alignment, then animated by textY */}
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    className="absolute inset-0 flex items-start justify-center pt-[25vh] sm:pt-[30vh] md:pt-[35vh]"
                >
                    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-0">
                        {/* Left Text: "Fly in" - Far left */}
                        <div className="flex flex-col">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-black leading-none" style={{ fontFamily: 'var(--font-syncopate)' }}>
                                DIGITAL AGENCY
                            </h2>
                            <p className="text-[10px] sm:text-xs md:text-sm mt-3 sm:mt-4 text-black/70 leading-relaxed max-w-[100px] sm:max-w-[120px]" style={{ fontFamily: 'var(--font-outfit)' }}>
                                creativity<br />that moves<br />you
                            </p>
                        </div>

                        {/* Right Text: "Luxury" - Far right */}
                        <div className="flex flex-col items-start sm:items-end">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-black leading-none sm:text-right" style={{ fontFamily: 'var(--font-syncopate)' }}>
                                CRAFTING MODERN BRANDS
                            </h2>

                            {/* Content section with border */}
                            <div className="mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-6 md:pt-8 border-t border-black/20 max-w-full sm:max-w-[400px] md:max-w-[500px]">
                                <div className="flex items-start justify-between gap-6 sm:gap-8 md:gap-12 mb-4 sm:mb-5 md:mb-6">
                                    <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black" style={{ fontFamily: 'var(--font-outfit)' }}>
                                        PINNACLE
                                    </p>
                                    <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black" style={{ fontFamily: 'var(--font-outfit)' }}>
                                        2026
                                    </p>
                                </div>
                                <p className="text-xs sm:text-sm text-black/80 leading-relaxed" style={{ fontFamily: 'var(--font-outfit)' }}>
                                    Online presence that supports your website and content helping your brand stay visible and relevant.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 2. SPECS LAYER (Enters from Top) */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-[3%] xl:left-[5%] w-[280px] xl:w-[400px] text-black z-30 flex-col gap-6 xl:gap-8"
                >
                    {/* Header */}
                    <div>
                        <h3 className="text-xl xl:text-2xl font-medium mb-0" style={{ fontFamily: 'var(--font-outfit)' }}>OUR</h3>
                        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tighter leading-none" style={{ fontFamily: 'var(--font-syncopate)' }}>OFFERINGS</h2>
                    </div>

                    {/* Services List */}
                    <div className="border-t border-black/20 pt-6 flex flex-col gap-6">
                        <div>
                            <p className="text-2xl font-bold uppercase tracking-wide" style={{ fontFamily: 'var(--font-outfit)' }}>Premium websites</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold uppercase tracking-wide" style={{ fontFamily: 'var(--font-outfit)' }}>Ai product shoots</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold uppercase tracking-wide" style={{ fontFamily: 'var(--font-outfit)' }}>Clipping</p>
                        </div>
                        <div className="pt-4">
                            <p className="text-sm text-black/80 leading-relaxed font-normal max-w-[300px]" style={{ fontFamily: 'var(--font-outfit)' }}>
                                We help you convert easily and show up confidently with a premium online presence
                            </p>
                        </div>
                    </div>

                </motion.div>

                {/* 3. INFO LAYER (Right Side - Enters from Top) */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="hidden lg:flex absolute top-[20%] right-[2%] xl:right-[3%] w-[220px] xl:w-[280px] text-black z-30 flex-col gap-6 xl:gap-8 pointer-events-auto"
                >
                    {/* Main Headline */}
                    <h2 className="text-2xl xl:text-3xl font-medium leading-tight tracking-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
                        Book a discovery call<br />
                        <a
                            href="facetime:8806577475"
                            className="inline-flex items-center justify-center mt-4 px-8 py-3 bg-black text-[#FDF5E6] rounded-full text-sm tracking-widest font-semibold transition-all duration-300 hover:scale-105 hover:bg-black/80 hover:shadow-lg active:scale-95"
                            style={{ fontFamily: 'var(--font-outfit)' }}
                        >
                            Call Now
                        </a>
                    </h2>

                    {/* Divider and Sub-content */}
                    <div className="border-t border-black/20 pt-6">
                        <p className="text-sm text-black/80 leading-relaxed font-normal" style={{ fontFamily: 'var(--font-outfit)' }}>
                            We design high performance websites, product visuals and ai driven video content to help brands stand out, build trust and turn attention into action
                        </p>
                    </div>
                </motion.div>

                {/* 4. EAGLE LAYER (Z-20: On Top) */}
                {/* Wipes away from bottom to top */}
                <motion.div
                    style={{
                        y: eagleY,
                        opacity: eagleOpacity,
                        scale: eagleScale,
                        maskImage: maskImage,
                        WebkitMaskImage: webkitMaskImage,
                        x: "-50%",
                    }}
                    className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[900px] -translate-y-1/2 z-30"
                >
                    <Image
                        src="/eagle/eagle.png"
                        alt="Eagle top view"
                        width={1000}
                        height={600}
                        priority
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

                {/* 5. DRAWING LAYER (Z-10: Behind) */}
                {/* Revealed as Eagle wipes away */}
                <motion.div
                    style={{
                        y: eagleY, // Matches Eagle Y (0vh)
                        opacity: drawingOpacity,
                        scale: eagleScale, // Matches Eagle Scale
                        x: "-50%",
                        maskImage: drawingMaskImage,
                        WebkitMaskImage: drawingWebkitMaskImage,
                    }}
                    className="absolute top-[52%] left-1/2 w-[270px] sm:w-[360px] md:w-[560px] lg:w-[720px] xl:w-[800px] -translate-y-1/2 z-10"
                >
                    <Image
                        src="/drawing/new.png"
                        alt="Eagle Technical Drawing"
                        width={1000}
                        height={600}
                        className="w-full h-auto object-contain opacity-80 mix-blend-multiply"
                    />
                </motion.div>

            </div>
        </div>
    );
}
