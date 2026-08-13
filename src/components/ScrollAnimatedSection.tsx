"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Phone, ArrowUpRight, Sparkles, Layers } from "lucide-react";

export default function ScrollAnimatedSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [showDrawing, setShowDrawing] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Fluid parallax transforms as user scrolls naturally
    const eagleY = useTransform(scrollYProgress, [0, 0.5, 1], ["50px", "0px", "-50px"]);
    const eagleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.05, 0.95]);
    const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen py-20 sm:py-28 bg-[#050507] text-white overflow-hidden z-20" id="offerings">
            
            {/* 0. Ambient Glowing Sunset Backdrop */}
            <motion.div
                style={{ opacity: glowOpacity }}
                className="absolute inset-0 pointer-events-none z-0 bg-[#07050a]/95 backdrop-blur-3xl overflow-hidden"
            >
                {/* Glowing Sunset Orbs */}
                <motion.div
                    animate={{
                        x: [0, 60, -40, 0],
                        y: [0, -50, 40, 0],
                        scale: [1, 1.3, 0.9, 1],
                        opacity: [0.6, 0.9, 0.6, 0.6]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-[20%] -left-[10%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full bg-gradient-to-br from-[#FF6B35]/50 via-[#FFB703]/35 to-transparent blur-[120px]"
                />

                <motion.div
                    animate={{
                        x: [0, -70, 50, 0],
                        y: [0, 60, -40, 0],
                        scale: [1.1, 0.85, 1.2, 1.1],
                        opacity: [0.55, 0.85, 0.5, 0.55]
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[10%] -right-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-bl from-[#E01E5A]/55 via-[#9D4EDD]/40 to-transparent blur-[130px]"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none" />
            </motion.div>

            <div className="max-w-[1600px] mx-auto px-6 sm:px-12 relative z-10 flex flex-col items-center">
                
                {/* FREELY FLOATING 3D EAGLE DISPLAY */}
                <div className="relative w-full py-12 flex flex-col items-center justify-center min-h-[500px]">
                    
                    {/* Toggle Technical Drawing Blueprint Switch */}
                    <button
                        onClick={() => setShowDrawing(!showDrawing)}
                        className="mb-8 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xl z-40 cursor-pointer"
                    >
                        <Layers className="w-4 h-4 text-amber-400" />
                        <span>{showDrawing ? "VIEW 3D EAGLE RENDER" : "TOGGLE TECHNICAL BLUEPRINT"}</span>
                    </button>

                    {/* Freely Moving Eagle / Drawing Container */}
                    <motion.div
                        style={{ y: eagleY, scale: eagleScale }}
                        className="relative w-full max-w-[950px] aspect-[16/10] flex items-center justify-center pointer-events-auto cursor-pointer"
                        onClick={() => setShowDrawing(!showDrawing)}
                    >
                        {/* 3D Eagle Render */}
                        <motion.div
                            animate={{ opacity: showDrawing ? 0 : 1, scale: showDrawing ? 0.95 : 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <Image
                                src="/eagle/eagle.png"
                                alt="Eagle 3D render"
                                width={1200}
                                height={720}
                                priority
                                className="w-full h-auto object-contain filter drop-shadow-[0_30px_70px_rgba(0,0,0,0.95)] hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>

                        {/* Technical Blueprint Drawing */}
                        <motion.div
                            animate={{ opacity: showDrawing ? 1 : 0, scale: showDrawing ? 1 : 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center invert brightness-150"
                        >
                            <Image
                                src="/drawing/new.png"
                                alt="Eagle Technical Drawing"
                                width={1200}
                                height={720}
                                className="w-full h-auto object-contain opacity-95 hover:scale-105 transition-transform duration-500"
                            />
                        </motion.div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}



