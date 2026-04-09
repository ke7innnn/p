"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Check if it's a touch device (mobile/tablet)
        const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.matchMedia("(pointer: coarse)").matches);

        // NATIVE TOUCH SCROLL is flawlessly 60/120fps on mobile out of the box. Loading Lenis on mobile creates lag and stutters.
        if (isTouch) {
            return;
        }

        // Initialize Lenis for desktop only
        const lenis = new Lenis({
            lerp: 0.1, // slightly faster lerp for snappier feel
            duration: 1.2,
            smoothWheel: true,
        });

        // Request animation frame loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
