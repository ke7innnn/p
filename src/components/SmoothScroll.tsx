"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            lerp: 0.1, // slightly faster lerp for snappier feel
            duration: 1.2,
            smoothWheel: true,
            syncTouch: true, // synchronize scroll on mobile to reduce lag
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
