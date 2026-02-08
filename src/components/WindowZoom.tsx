"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger
import { useLoading } from "@/context/LoadingContext";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function WindowZoom() {
    const { isLoading } = useLoading();
    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const textLeftRef = useRef<HTMLDivElement>(null);
    const textRightRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isLoading || !containerRef.current || !overlayRef.current || !wrapperRef.current || !logoRef.current) return;

        // Performance: Set GSAP defaults for GPU acceleration
        gsap.defaults({
            force3D: true,
            ease: "power2.inOut"
        });

        // SMOOTH CINEMATIC FADE IN - All text together
        const cinematicTimeline = gsap.timeline({
            delay: 1.5
        });

        // Fade in left text
        cinematicTimeline.fromTo(textLeftRef.current,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out"
            },
            0 // Start at 0
        );

        // Fade in right text (same time as left)
        cinematicTimeline.fromTo(textRightRef.current,
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out"
            },
            0 // Start at 0 - same time
        );

        // LOGO SMOOTH FADE IN
        gsap.fromTo(logoRef.current,
            {
                opacity: 0,
                scale: 0.9
            },
            {
                opacity: 1,
                scale: 1,
                ease: "power2.out",
                duration: 1.5,
                delay: 1
            }
        );

        // Responsive animation values based on viewport
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

        // Timeline for the zoom effect (Scroll Driven - Optimized)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    const headerLogo = document.getElementById('header-logo');
                    if (headerLogo) {
                        // Smooth crossfade between 90% and 100%
                        if (self.progress >= 0.9) {
                            const fadeProgress = (self.progress - 0.9) / 0.1;
                            headerLogo.style.opacity = String(fadeProgress);
                        } else {
                            headerLogo.style.opacity = '0';
                        }
                    }
                }
            },
        });

        // 1. LOGO TRANSITION (Center → Header - Perfectly Smooth)
        // Adjust scale and position based on device
        const logoYOffset = isMobile ? -window.innerHeight * 0.42 : -window.innerHeight * 0.45;
        const logoScale = isMobile ? 0.5 : isTablet ? 0.45 : 0.4;

        tl.to(logoRef.current, {
            y: logoYOffset,
            scale: logoScale,
            ease: "power1.inOut", // Gentler easing for smoother motion
            duration: 1 // Full duration through entire scroll
        }, 0);

        // 2. Text Interaction (SYNCHRONIZED 3D PARALLAX)
        // Reduce animation distance on mobile
        const textXDistance = isMobile ? 1500 : 3000;
        const textScale = isMobile ? 2 : 3;
        const textRotation = isMobile ? 15 : 25;
        const textZDistance = isMobile ? -250 : -500;

        tl.to([textLeftRef.current, textRightRef.current], {
            x: (index) => index === 0 ? -textXDistance : textXDistance,
            scale: textScale,
            rotationY: (index) => index === 0 ? -textRotation : textRotation,
            z: textZDistance,
            filter: "blur(4px)",
            ease: "power2.inOut",
            duration: 0.8
        }, 0);

        // 3. The OVERLAY ZOOM (Scale up the entire overlay image)
        // Reduce zoom scale on mobile for better performance
        const overlayScale = isMobile ? 10 : isTablet ? 12 : 15;

        tl.to(overlayRef.current, {
            scale: overlayScale,
            ease: "power2.inOut",
            duration: 0.8,
        }, 0);

        // 4. Fade Out The Entire Wrapper at the end
        tl.to(wrapperRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power1.inOut"
        }, 0.8);

    }, { scope: containerRef, dependencies: [isLoading] });

    return (
        <div ref={containerRef} className="relative h-[300vh] z-50 pointer-events-none">
            <div
                ref={wrapperRef}
                className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-transparent"
                style={{ willChange: "opacity", perspective: "1000px" }}
            >


                {/* Airplane Wall Overlay with Transparent Window - THIS ZOOMS */}
                <div
                    ref={overlayRef}
                    className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
                    style={{ willChange: "transform" }}
                >
                    {/* High-resolution window overlay - clean, no effects */}
                    <Image
                        src="/window-overlay-hd.png"
                        alt="Airplane Window Frame"
                        fill
                        priority
                        quality={100}
                        className="object-cover"
                    />
                </div>

                {/* Layer 3: The Overlay Text - Enhanced for 3D */}
                <div
                    ref={textLeftRef}
                    className="absolute left-[1%] sm:left-[2%] md:left-[3%] top-1/2 -translate-y-1/2 z-30 w-[180px] sm:w-[220px] md:w-[300px] opacity-0"
                    style={{
                        transformStyle: "preserve-3d",
                        willChange: "transform, filter"
                    }}
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-medium tracking-tighter text-white mix-blend-overlay leading-[0.9]">
                        Designed to<br />attract
                    </h2>
                    <div className="mt-4 sm:mt-6 md:mt-8 border-t border-white/40 pt-3 md:pt-4 w-20 sm:w-24 md:w-32">
                        <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-white/80 font-sans font-bold">the only agency<br />you need</p>
                    </div>
                </div>

                {/* Floating Text Right */}
                <div
                    ref={textRightRef}
                    className="absolute right-[2%] sm:right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 z-30 w-[180px] sm:w-[220px] md:w-[300px] text-right opacity-0"
                    style={{
                        transformStyle: "preserve-3d",
                        willChange: "transform, filter"
                    }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-heading font-medium tracking-tighter text-white mix-blend-overlay leading-[0.9]">
                        Built to<br />convert
                    </h2>
                </div>

                {/* Layer 4: Animated Logo (Center → Header) */}
                <div
                    ref={logoRef}
                    className="absolute left-1/2 z-[60] opacity-0"
                    style={{
                        top: "calc(50% - 10px)",
                        transform: "translate(-50%, -50%)",
                        willChange: "transform, opacity"
                    }}
                >
                    <div
                        className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white uppercase"
                        style={{
                            fontFamily: "var(--font-michroma)",
                            fontWeight: 400,
                            letterSpacing: "0.1em"
                        }}
                    >
                        pinnacle
                    </div>
                </div>

            </div>
        </div >
    );
}
