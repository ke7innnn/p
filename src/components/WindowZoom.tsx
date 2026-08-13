"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLoading } from "@/context/LoadingContext";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function WindowZoom() {
    const { isLoading } = useLoading();
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const laptopContainerRef = useRef<HTMLDivElement>(null);
    const textLeftRef = useRef<HTMLDivElement>(null);
    const textRightRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isLoading || !containerRef.current || !laptopContainerRef.current || !wrapperRef.current || !logoRef.current) return;

        // Performance: Set GSAP defaults for GPU acceleration
        gsap.defaults({
            force3D: true,
            ease: "power2.inOut"
        });

        // SMOOTH CINEMATIC FADE IN - Text & logo
        const cinematicTimeline = gsap.timeline({
            delay: 1.2
        });

        cinematicTimeline.fromTo(textLeftRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
            0
        );

        cinematicTimeline.fromTo(textRightRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
            0
        );

        gsap.fromTo(logoRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, ease: "power2.out", duration: 1.4, delay: 0.8 }
        );

        // Initial 3D posture for laptop before scroll begins
        gsap.set(laptopContainerRef.current, {
            rotateX: 14,
            rotateY: -5,
            scale: 0.85,
            y: 20,
            transformPerspective: 1200
        });

        // Viewport dimensions & responsive values
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

        // Scroll Driven Animation Sequence (Slow, Ultra-Smooth Cinematic Scrubbing)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.8,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    const headerLogo = document.getElementById('header-logo');
                    if (headerLogo) {
                        if (self.progress >= 0.88) {
                            const fadeProgress = (self.progress - 0.88) / 0.12;
                            headerLogo.style.opacity = String(fadeProgress);
                        } else {
                            headerLogo.style.opacity = '0';
                        }
                    }
                }
            },
        });

        // 1. LOGO TRANSITION (Center → Header)
        const logoYOffset = isMobile ? -window.innerHeight * 0.42 : -window.innerHeight * 0.45;
        const logoScale = isMobile ? 0.5 : isTablet ? 0.45 : 0.4;

        tl.to(logoRef.current, {
            y: logoYOffset,
            scale: logoScale,
            ease: "power1.inOut",
            duration: 0.85
        }, 0);

        // 2. TEXT PARALLAX (Fly off screen in 3D)
        const textXDistance = isMobile ? 1200 : 2500;
        const textScale = isMobile ? 1.8 : 2.5;
        const textRotation = isMobile ? 15 : 25;

        tl.to([textLeftRef.current, textRightRef.current], {
            x: (index) => index === 0 ? -textXDistance : textXDistance,
            scale: textScale,
            rotationY: (index) => index === 0 ? -textRotation : textRotation,
            opacity: 0,
            ease: "power2.inOut",
            duration: 0.65
        }, 0);

        // 3. LAPTOP LEVELING (3D posture -> Level front facing)
        tl.to(laptopContainerRef.current, {
            rotateX: 0,
            rotateY: 0,
            y: 0,
            scale: 1,
            ease: "power2.out",
            duration: 0.35
        }, 0);

        // 4. LAPTOP SCREEN ZOOM (Slow, majestic full-screen zoom)
        const laptopZoomScale = isMobile ? 3.5 : isTablet ? 4.2 : 5.0;
        const laptopZoomY = isMobile ? 30 : isTablet ? 40 : 60;

        tl.to(laptopContainerRef.current, {
            scale: laptopZoomScale,
            y: laptopZoomY,
            ease: "power2.inOut",
            duration: 0.85
        }, 0.2);

        // 5. WRAPPER FADE OUT (Smooth transition after slow zoom completes)
        tl.to(wrapperRef.current, {
            opacity: 0,
            duration: 0.15,
            ease: "power1.inOut"
        }, 0.88);

    }, { scope: containerRef, dependencies: [isLoading] });

    return (
        <div ref={containerRef} className="relative h-[400vh] z-50 pointer-events-none">
            <div
                ref={wrapperRef}
                className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-transparent"
                style={{ willChange: "opacity", perspective: "1200px" }}
            >

                {/* Laptop Mockup Matching Exact User Bezel Specification */}
                <div
                    ref={laptopContainerRef}
                    className="relative z-20 pointer-events-none flex flex-col items-center justify-center"
                    style={{ willChange: "transform" }}
                >
                    {/* Laptop Display Outer Frame */}
                    <div className="relative w-[82vw] sm:w-[74vw] md:w-[66vw] lg:w-[58vw] xl:w-[780px] 2xl:w-[900px] aspect-[16/10.2] bg-black p-[8px] sm:p-[10px] md:p-[12px] pt-[8px] sm:pt-[10px] pb-[20px] sm:pb-[24px] rounded-t-[18px] sm:rounded-t-[24px] border border-white/10 shadow-[0_35px_100px_-15px_rgba(0,0,0,0.95)] flex flex-col relative overflow-hidden">
                        
                        {/* Camera Notch Top Center */}
                        <div className="absolute top-[8px] sm:top-[10px] left-1/2 -translate-x-1/2 w-14 sm:w-20 h-3 sm:h-4 bg-black rounded-b-[6px] sm:rounded-b-[7px] z-30 flex items-center justify-center gap-1.5 shadow-md">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#18191E] border border-white/20" />
                            <div className="w-1 h-1 rounded-full bg-[#0E0F12]" />
                        </div>

                        {/* Display Screen Inner Viewport (Plain White Page as requested) */}
                        <div className="relative w-full h-full rounded-[10px] sm:rounded-[14px] overflow-hidden bg-white text-black flex flex-col items-center justify-center p-6 select-none border border-black/10">
                            
                            {/* Plain White Page Mockup Content */}
                            <div className="flex flex-col items-center justify-center text-center gap-3">
                                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black text-white flex items-center justify-center shadow-md">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl sm:text-3xl font-black uppercase tracking-[0.35em] text-black">
                                    PINNACLE
                                </h3>
                                <p className="text-[9px] sm:text-xs uppercase tracking-[0.25em] text-black/50 font-bold">
                                    Luxury Digital Experience
                                </p>
                            </div>

                            {/* Pinnacle Screen Status Overlay */}
                            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10 text-black/80">
                                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                                <span className="text-[9px] sm:text-[11px] uppercase tracking-widest font-mono font-medium">
                                    Pinnacle Studios Live Preview
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Laptop Base Lip & Feet (Matching user image) */}
                    <div className="relative w-[100.8%] h-[14px] sm:h-[18px] bg-gradient-to-b from-[#2A2B30] via-[#1E1F24] to-[#121316] rounded-b-[8px] sm:rounded-b-[10px] border-t border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex items-start justify-center">
                        
                        {/* Center Thumb Notch */}
                        <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-[#0E0F12] rounded-b-[4px] border-b border-white/10" />

                        {/* Rubber Feet (Left & Right Ends) */}
                        <div className="absolute -bottom-[5px] left-[5%] w-6 sm:w-8 h-1.5 bg-[#08080A] rounded-b-[3px] shadow-sm" />
                        <div className="absolute -bottom-[5px] right-[5%] w-6 sm:w-8 h-1.5 bg-[#08080A] rounded-b-[3px] shadow-sm" />
                    </div>

                    {/* Ambient Ground Reflection Shadow */}
                    <div className="w-[110%] h-8 bg-black/70 blur-xl rounded-full -mt-3 pointer-events-none" />

                </div>

                {/* Overlay Text - Left */}
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

                {/* Overlay Text - Right */}
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

                {/* Animated Logo (Center → Header) */}
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
        </div>
    );
}
