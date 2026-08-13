"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Touch device detection for mobile/tablet (iOS / Android / Nokia webviews)
        const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.matchMedia("(pointer: coarse)").matches);

        // Native inertia scroll on mobile is flawlessly 60/120fps out of the box.
        if (isTouch) {
            document.documentElement.style.scrollBehavior = 'smooth';
            return;
        }

        // Initialize Lenis for desktop only
        const lenis = new Lenis({
            lerp: 0.08,
            duration: 0.9,
            smoothWheel: true,
            wheelMultiplier: 1.05,
            touchMultiplier: 1.5,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
