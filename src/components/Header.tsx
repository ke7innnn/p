"use client";

import { useState, useEffect } from "react";
import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useOverlayOpacity } from "@/contexts/OverlayContext";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [activeLink, setActiveLink] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { overlayOpacity } = useOverlayOpacity();

    // Transform opacity to text color (white -> black at 25%)
    const textColor = overlayOpacity
        ? useTransform(overlayOpacity, [0, 0.25, 0.26], ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.8)", "rgba(0, 0, 0, 0.8)"])
        : useMotionValue("rgba(255, 255, 255, 0.8)");

    const navItems = [
        { label: "Story", href: "#brand-story" },
        { label: "Offerings", href: "#offerings" },
        { label: "Work", href: "#our-work" },
        { label: "Contact", href: "#contact" }
    ];

    // SMOOTH FADE-IN - All together
    useEffect(() => {
        const timeline = gsap.timeline({ delay: 1.5 });

        // Fade in nav items (all at once)
        timeline.fromTo(
            ".nav-item",
            {
                opacity: 0,
                y: -20
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0, // No stagger - all together
                ease: "power2.out"
            }
        );

        // Fade in contact info (same time as nav)
        timeline.fromTo(
            ".contact-item",
            {
                opacity: 0,
                y: -20
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0, // No stagger - all together
                ease: "power2.out"
            },
            0 // Start at same time as nav items
        );

        // Fade in hamburger menu
        timeline.fromTo(
            ".hamburger-menu",
            {
                opacity: 0,
                y: -20
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out"
            },
            0 // Start at same time
        );
    }, []);

    // Smooth scroll to section
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
        e.preventDefault();
        setActiveLink(label);
        setMobileMenuOpen(false);

        const target = document.querySelector(href);
        if (target) {
            // Special handling for offerings section - add offset to skip to actual content
            if (href === '#offerings') {
                const rect = target.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                // Scroll to approximately 70% through the section where content appears
                const offsetPosition = scrollTop + rect.top + (rect.height * 0.7);
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            } else {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-auto">

            {/* Content */}
            <div className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-3 md:py-4 flex items-center justify-between">

                {/* Left: Navigation Links - Desktop Only */}
                <nav className="hidden xl:flex items-center gap-4 xl:gap-8">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href, item.label)}
                            className={`
                                nav-item opacity-0
                                text-sm tracking-wide
                                transition-all duration-300
                                hover:text-white
                                relative px-5 py-2
                                group
                                overflow-hidden
                            `}
                            style={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: 600,
                                color: textColor
                            }}
                        >
                            {/* 3D Rolling Text Container with Pill */}
                            <span className="relative inline-block">
                                {/* Glassmorphism Pill - positioned relative to this container */}
                                <span
                                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.1)",
                                        backdropFilter: "blur(10px)",
                                        borderRadius: "999px",
                                        left: "-1.25rem",
                                        right: "-1.25rem",
                                        top: "-0.5rem",
                                        bottom: "-0.5rem",
                                        zIndex: 0
                                    }}
                                />

                                {/* Text rolling container */}
                                <span className="relative z-10 inline-block overflow-hidden h-[1em] leading-none align-middle">
                                    <span
                                        className="flex flex-col transition-transform duration-500 group-hover:-translate-y-[50%]"
                                        style={{
                                            transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)"
                                        }}
                                    >
                                        {/* Original Text (slides up on hover) */}
                                        <span className="block h-[1em] leading-none flex items-center">{item.label}</span>
                                        {/* Duplicate Text (slides in from bottom on hover) */}
                                        <span className="block h-[1em] leading-none flex items-center">{item.label}</span>
                                    </span>
                                </span>
                            </span>
                        </motion.a>
                    ))}
                </nav>

                {/* Mobile: Hamburger Menu Button */}
                <motion.button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="hamburger-menu opacity-0 xl:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                    style={{ color: textColor }}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>

                {/* Center: Logo (Will be filled by animation) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                        className="text-sm md:text-base uppercase opacity-0 transition-opacity duration-500"
                        id="header-logo"
                        style={{
                            fontFamily: "var(--font-michroma)",
                            fontWeight: 400,
                            letterSpacing: "0.1em",
                            color: textColor
                        }}
                    >
                        pinnacle
                    </motion.div>
                </div>

                {/* Right: Contact Info - Desktop Only */}
                <div className="hidden xl:flex items-center gap-4 xl:gap-8">
                    <motion.a
                        href="tel:8806577475"
                        className="contact-item opacity-0 text-xs xl:text-sm hover:text-white transition-colors tracking-wide"
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 600,
                            color: textColor
                        }}
                    >
                        8806577475
                    </motion.a>
                    <motion.a
                        href="mailto:pinnaclestudios4u@gmail.com"
                        className="contact-item opacity-0 text-xs xl:text-sm hover:text-white transition-colors tracking-wide"
                        style={{
                            fontFamily: "var(--font-outfit)",
                            fontWeight: 600,
                            color: textColor
                        }}
                    >
                        pinnaclestudios4u@gmail.com
                    </motion.a>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="xl:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {/* Navigation Links */}
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleLinkClick(e, item.href, item.label)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="block text-white text-lg py-3 px-4 rounded-lg hover:bg-white/10 transition-colors"
                                    style={{
                                        fontFamily: "var(--font-outfit)",
                                        fontWeight: 600
                                    }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}

                            {/* Divider */}
                            <div className="border-t border-white/10 my-4" />

                            {/* Contact Info */}
                            <motion.a
                                href="tel:8806577475"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="block text-white/80 text-sm py-2 px-4 hover:text-white transition-colors"
                                style={{
                                    fontFamily: "var(--font-outfit)",
                                    fontWeight: 600
                                }}
                            >
                                📞 8806577475
                            </motion.a>
                            <motion.a
                                href="mailto:pinnaclestudios4u@gmail.com"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="block text-white/80 text-sm py-2 px-4 hover:text-white transition-colors"
                                style={{
                                    fontFamily: "var(--font-outfit)",
                                    fontWeight: 600
                                }}
                            >
                                ✉️ pinnaclestudios4u@gmail.com
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
