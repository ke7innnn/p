"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function SkyBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track page scroll progress (0 to 1)
    const { scrollYProgress } = useScroll({
        offset: ["start start", "end end"] // Maps to the entire page scroll
    });

    // Vertical pan effect - start showing top of image, end showing bottom
    // Image is 200vh tall, viewport is 100vh
    // At scroll 0: y = 0% (showing top of image)
    // At scroll 1: y = -100vh (showing bottom of image)
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">

            {/* Vertically panning image - moves down as you scroll */}
            <motion.div
                style={{ y }}
                className="absolute top-0 left-0 w-full h-[200vh] will-change-transform"
            >
                <Image
                    src="/skynew/pinnacle sky.png"
                    alt="Sky Background"
                    fill
                    priority
                    quality={100}
                    className="object-cover"
                />
            </motion.div>

            {/* Optional Overlay for better text readability if needed */}
            {/* <div className="absolute inset-0 bg-black/10" /> */}
        </div>
    );
}
