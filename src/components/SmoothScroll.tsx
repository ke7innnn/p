"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Touch device detection for mobile/tablet
        const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.matchMedia("(pointer: coarse)").matches);

        if (isTouch) {
            document.documentElement.style.scrollBehavior = 'smooth';
            return;
        }

        // Initialize Lenis for desktop
        const lenis = new Lenis({
            lerp: 0.1,
            duration: 1.0,
            smoothWheel: true,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.5,
        });

        // Synchronize Lenis with GSAP ScrollTrigger to eliminate jitter & pinning conflicts
        lenis.on('scroll', ScrollTrigger.update);

        const updateGsap = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateGsap);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(updateGsap);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
