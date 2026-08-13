"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Menu, X } from "lucide-react";

interface HeaderProps {
    onOpenAbout?: () => void;
    onOpenClients?: () => void;
    onOpenContact?: () => void;
}

export default function Header({ onOpenAbout, onOpenClients, onOpenContact }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToWork = () => {
        const target = document.getElementById("our-work");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[9980] px-4 sm:px-8 py-4 sm:py-6 pointer-events-none flex items-center justify-between">
            {/* Left: Brand Icon & Name */}
            <div className="pointer-events-auto flex items-center gap-3">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#121218] border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(218,32,40,0.3)] group-hover:scale-105 transition-all duration-300 group-hover:border-red-500">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-red-500 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" />
                        </svg>
                    </div>
                    <span className="text-sm sm:text-base font-extrabold uppercase tracking-[0.25em] text-white group-hover:text-red-500 transition-colors">
                        PINNACLE
                    </span>
                </a>
            </div>

            {/* Mobile: Hamburger Button */}
            <div className="pointer-events-auto md:hidden">
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-11 h-11 rounded-full bg-[#121218]/90 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="pointer-events-auto md:hidden fixed top-20 right-4 left-4 z-[9985] p-6 rounded-3xl bg-[#0c0c10]/95 backdrop-blur-2xl border border-white/15 flex flex-col gap-3 text-center shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                    >
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                onOpenAbout?.();
                            }}
                            className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/15 transition-all"
                        >
                            ABOUT
                        </button>
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                scrollToWork();
                            }}
                            className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/15 transition-all"
                        >
                            OUR WORK
                        </button>
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                onOpenClients?.();
                            }}
                            className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/15 transition-all"
                        >
                            CLIENTS
                        </button>
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                onOpenContact?.();
                            }}
                            className="w-full py-3.5 rounded-2xl bg-red-600 text-white text-xs font-extrabold uppercase tracking-widest transition-all shadow-md shadow-red-900/40"
                        >
                            CONTACT
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

