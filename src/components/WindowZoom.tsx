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
    const laptopRef = useRef<HTMLDivElement>(null);

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
                scrub: true, // Boolean scrub forces synchronous native scrolling. Numeric scrub causes lag loops on mobile.
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
            // No opacity fade — texts fly fully off-screen in 3D for clean window-entry illusion
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

        // 5. FLOATING LAPTOP (Fades in perfectly synced as the logo goes to the navbar)
        tl.fromTo(laptopRef.current,
            {
                opacity: 0,
                y: 150,
                scale: 0.9,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "power2.out",
                duration: 0.7
            },
            0.15 // Starts exactly as the logo is firmly in its transition upwards
        );

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
                        src="/window-overlay.png"
                        alt="Airplane Window Frame"
                        fill
                        priority
                        quality={100}
                        className="object-cover"
                    />
                </div>

                {/* Layer 3: The Overlay Text - Enhanced for 3D */}
                {/* "Designed to attract" - TOP on mobile, LEFT on desktop */}
                <div
                    ref={textLeftRef}
                    className="absolute 
                        left-1/2 -translate-x-1/2 top-[15%] 
                        md:left-[1%] md:translate-x-0 md:top-1/2 md:-translate-y-1/2
                        lg:left-[2%] xl:left-[3%]
                        z-30 w-[240px] sm:w-[260px] md:w-[300px] 
                        text-center md:text-left
                        opacity-0"
                    style={{
                        transformStyle: "preserve-3d",
                        willChange: "transform, opacity"
                    }}
                >
                    <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-heading font-medium tracking-tighter text-white/90 leading-[0.9]">
                        Designed to<br />attract
                    </h2>
                    <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 border-t border-white/40 pt-3 md:pt-3 lg:pt-4 w-24 sm:w-28 md:w-28 lg:w-32 mx-auto md:mx-0">
                        <p className="text-[10px] sm:text-xs md:text-xs lg:text-sm uppercase tracking-widest text-white/80 font-sans font-bold">the only agency<br />you need</p>
                    </div>
                </div>

                {/* "Built to convert" - BOTTOM on mobile, RIGHT on desktop */}
                <div
                    ref={textRightRef}
                    className="absolute 
                        left-1/2 -translate-x-1/2 bottom-[15%]
                        md:left-auto md:translate-x-0 md:right-[5%] md:top-1/2 md:-translate-y-1/2 md:bottom-auto
                        lg:right-[8%] xl:right-[10%]
                        z-30 w-[240px] sm:w-[260px] md:w-[300px] 
                        text-center md:text-right
                        opacity-0"
                    style={{
                        transformStyle: "preserve-3d",
                        willChange: "transform, opacity"
                    }}
                >
                    <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-heading font-medium tracking-tighter text-white/90 leading-[0.9]">
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

            {/* Layer 5: Laptop appearing in the sky synced with GSAP */}
            {/* Placed OUTSIDE wrapperRef so it doesn't fade to black, but INSIDE containerRef so the GSAP pin keeps it glued to the screen */}
            <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-end pb-10 sm:pb-16 pointer-events-none z-10">
                <div ref={laptopRef} className="relative w-[90%] sm:w-[70%] lg:w-[60%] max-w-[900px] aspect-[16/9] opacity-0" style={{ transform: "translateY(150px)" }}>
                    <div className="w-full h-full relative laptop-float">
                        <Image
                            src="/floating laptop image/Whisk_818e24a0010d6378ac24c4faeac233c6dr.png"
                            alt="Floating Laptop Display"
                            fill
                            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        />
                    </div>
                </div>
            </div>

            {/* CSS Animation for the continuous float */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float-laptop {
                    0% { transform: translateY(-15px); }
                    50% { transform: translateY(15px); }
                    100% { transform: translateY(-15px); }
                }
                .laptop-float {
                    animation: float-laptop 6s ease-in-out infinite;
                }
            `}} />
        </div >
    );
}
