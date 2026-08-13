"use client";

import { motion } from "framer-motion";

export default function SkyBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-[#050608] pointer-events-none">

            {/* DYNAMIC AURORA GLOW ORBS (Northern Lights Ambient Background) */}
            <motion.div
                animate={{
                    x: [0, 80, -50, 0],
                    y: [0, -60, 50, 0],
                    scale: [1, 1.35, 0.9, 1],
                    opacity: [0.5, 0.8, 0.55, 0.5]
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[25%] -left-[15%] w-[70vw] h-[70vw] max-w-[850px] max-h-[850px] rounded-full bg-gradient-to-br from-[#00F5D4]/50 via-[#00F0FF]/35 to-transparent blur-[110px]"
            />

            <motion.div
                animate={{
                    x: [0, -90, 60, 0],
                    y: [0, 70, -50, 0],
                    scale: [1.15, 0.85, 1.3, 1.15],
                    opacity: [0.55, 0.85, 0.45, 0.55]
                }}
                transition={{
                    duration: 19,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[5%] -right-[15%] w-[75vw] h-[75vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-bl from-[#7B2CBF]/60 via-[#480CA8]/45 to-transparent blur-[120px]"
            />

            <motion.div
                animate={{
                    x: [0, 60, -70, 0],
                    y: [0, -50, 60, 0],
                    scale: [0.95, 1.25, 0.9, 0.95],
                    opacity: [0.45, 0.75, 0.5, 0.45]
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -bottom-[20%] left-[20%] w-[65vw] h-[65vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-[#7209B7]/45 via-[#3F37C9]/50 to-[#4CC9F0]/40 blur-[130px]"
            />

            {/* Additional Floating Glass Orbs for Depth */}
            <motion.div
                animate={{
                    x: [0, -40, 40, 0],
                    y: [0, 40, -40, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-gradient-to-r from-[#E01E5A]/35 via-[#9D4EDD]/30 to-transparent blur-[100px]"
            />

            {/* Glass Surface Specular Sheen & Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B10]/70 via-transparent to-[#050608]/90 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/70 pointer-events-none" />
            
        </div>
    );
}
