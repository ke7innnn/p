"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

function AnimatedParagraph() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.3"]
    });

    const text = "Enter a cycle of endless creativity. At PINNACLE we spark your imagination and ignite your brand's potential through captivating visuals and seamless PROJECTS . We're more than just an agency—we're the dedicated partner you need to turn big ideas into high-impact digital results.";
    const words = text.split(" ");

    return (
        <div ref={containerRef} className="relative">
            {/* Text content */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white leading-[1.2] tracking-tight" style={{ fontFamily: 'var(--font-syncopate)', fontWeight: 700 }}>
                {words.map((word, index) => {
                    const start = index / words.length;
                    const end = (index + 1) / words.length;
                    const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

                    return (
                        <motion.span
                            key={index}
                            style={{ opacity }}
                            className="inline-block mr-[0.3em]"
                        >
                            {word}
                        </motion.span>
                    );
                })}
            </p>
        </div>
    );
}

export default function BrandStory() {
    return (
        <section id="brand-story" className="relative z-10 flex flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20 py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">

            {/* Glassmorphism Panel Wrapper */}
            <div className="relative w-full max-w-[1600px] bg-black/10 backdrop-blur-xl border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-24 shadow-2xl overflow-hidden shadow-black/20">

              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[inherit]"></div>

              <div className="relative z-10 flex flex-col gap-16 sm:gap-24 md:gap-32">
                {/* Section 1 - Animated Paragraph */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20%" }}
                    variants={textVariants}
                    className="w-full max-w-none text-left relative"
                >
                    <AnimatedParagraph />
                </motion.div>

            {/* Content Grid with Branding */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">

                {/* Branding - First item in grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20%" }}
                    variants={textVariants}
                    className="flex flex-row items-center justify-start gap-3 sm:gap-4 flex-wrap"
                >
                    {/* Logo Icon */}
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-white/80 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </div>
                        <div className="text-lg sm:text-xl text-white/80" style={{ fontFamily: 'var(--font-syncopate)', fontWeight: 700 }}>
                            PS
                        </div>
                    </div>

                    {/* EST. 2025 */}
                    <div className="flex items-baseline gap-1">
                        <div className="text-xs text-white/60 font-sans">EST.</div>
                        <div className="text-sm sm:text-base text-white/80" style={{ fontFamily: 'var(--font-syncopate)', fontWeight: 700 }}>2025</div>
                    </div>


                </motion.div>

                {/* Section 1 - Direct Access to Private Travel */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20%" }}
                    variants={textVariants}
                    className="text-left"
                >
                    <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-2 sm:mb-3" style={{ fontFamily: 'var(--font-syncopate)', fontWeight: 700 }}>
                        We build your online presence
                    </h3>
                    <div className="w-10 sm:w-12 h-0.5 bg-white/40 mb-3 sm:mb-4"></div>
                    <p className="text-xs sm:text-sm md:text-sm font-semibold text-white/80 leading-relaxed font-sans">
                        Fast, Clean, conversion focused
                    </p>
                </motion.div>

                {/* Section 2 - Your Freedom to Enjoy Life */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20%" }}
                    variants={textVariants}
                    className="text-left"
                >
                    <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-2 sm:mb-3" style={{ fontFamily: 'var(--font-syncopate)', fontWeight: 700 }}>
                        Where trust, speed and conversions meet
                    </h3>
                    <div className="w-10 sm:w-12 h-0.5 bg-white/40 mb-3 sm:mb-4"></div>
                    <p className="text-xs sm:text-sm md:text-sm font-semibold text-white/80 leading-relaxed font-sans">
                        We got your back!
                    </p>
                </motion.div>

            </div>
          </div>
          </div>
        </section>
    );
}
