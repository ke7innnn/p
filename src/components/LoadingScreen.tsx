"use client";

import { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";
import { motion, AnimatePresence } from "framer-motion";
import { PinnacleLogoMark } from "./PinnacleLogo";

export default function LoadingScreen() {
    const { isLoading, setIsLoading, progress } = useLoading();
    const [isVisible, setIsVisible] = useState(true);
    const [sceneIndex, setSceneIndex] = useState(0);

    const scenes = [
        "We design",
        "We build",
        "We move brands"
    ];

    // Sequence timer for BeingLoop text preloader
    useEffect(() => {
        const t1 = setTimeout(() => setSceneIndex(1), 900);
        const t2 = setTimeout(() => setSceneIndex(2), 1800);
        const t3 = setTimeout(() => setSceneIndex(3), 2700);
        const t4 = setTimeout(() => {
            setIsLoading(false);
        }, 3600);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, [setIsLoading]);

    // Lock scroll while loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            const timer = setTimeout(() => {
                document.body.style.overflow = "";
            }, 900);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => setIsVisible(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-black text-white selection:bg-red-600 selection:text-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
                >
                    {/* Ambient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-red-600/10 via-transparent to-black pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
                        {/* Text Scene 0..2 */}
                        {sceneIndex < 3 && (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={sceneIndex}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -25 }}
                                    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                                    className="text-2xl sm:text-4xl md:text-5xl font-light tracking-[0.25em] uppercase text-white drop-shadow-lg"
                                >
                                    {scenes[sceneIndex]}
                                </motion.div>
                            </AnimatePresence>
                        )}

                        {/* Scene 3: Logo & Brand Name */}
                        {sceneIndex === 3 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col items-center gap-4"
                            >
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#180a13] border border-[#FF5E62]/30 flex items-center justify-center shadow-[0_0_50px_rgba(255,94,98,0.5)] p-4">
                                    <PinnacleLogoMark className="w-full h-full text-[#FF5E62]" />
                                </div>
                                <h1 className="text-xl sm:text-3xl font-heading-syne font-black uppercase tracking-[0.35em] text-white">
                                    PINNACLE STUDIOS
                                </h1>
                            </motion.div>
                        )}

                        {/* Progress Bar Line */}
                        <div className="mt-12 w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                            <motion.div
                                className="h-full bg-gradient-to-r from-red-600 via-amber-400 to-white"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress > 0 ? progress : (sceneIndex + 1) * 25}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

