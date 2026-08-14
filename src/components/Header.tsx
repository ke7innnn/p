"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, Search, Command } from "lucide-react";
import { PinnacleLogoMark } from "./PinnacleLogo";

interface HeaderProps {
    onOpenAbout?: () => void;
    onOpenClients?: () => void;
    onOpenContact?: () => void;
    onOpenSearch?: () => void;
}

export default function Header({ onOpenAbout, onOpenClients, onOpenContact, onOpenSearch }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-[9980] px-4 sm:px-8 py-4 sm:py-6 pointer-events-none flex items-center justify-between">
            
            {/* Left: Brand Icon & Name */}
            <div className="pointer-events-auto flex items-center gap-3">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#180a13]/90 backdrop-blur-2xl border border-[#FF5E62]/30 flex items-center justify-center shadow-[0_0_25px_rgba(255,94,98,0.3)] group-hover:scale-105 transition-all duration-300 group-hover:border-[#FF9966]">
                        <PinnacleLogoMark className="w-6 h-6 text-[#FF5E62] group-hover:text-[#FFD166] transition-colors" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm sm:text-base font-heading-syne font-extrabold uppercase tracking-[0.25em] text-white group-hover:text-[#FF9966] transition-colors">
                            PINNACLE
                        </span>
                        <span className="text-[9px] font-mono tracking-widest text-[#FF9966]/60 uppercase hidden sm:block">
                            STUDIOS
                        </span>
                    </div>
                </a>
            </div>

            {/* Desktop Center: Floating Glass Pill Nav */}
            <nav className="pointer-events-auto hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-[#0b0b10]/80 backdrop-blur-2xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                <button
                    onClick={onOpenAbout}
                    className="px-5 py-2 rounded-full text-xs font-sans-jakarta font-extrabold uppercase tracking-[0.2em] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>ABOUT</span>
                </button>
                
                <Link
                    href="/work"
                    className="px-5 py-2 rounded-full text-xs font-sans-jakarta font-extrabold uppercase tracking-[0.2em] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                    OUR WORK
                </Link>

                <button
                    onClick={onOpenClients}
                    className="px-5 py-2 rounded-full text-xs font-sans-jakarta font-extrabold uppercase tracking-[0.2em] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                    CLIENTS
                </button>

                <button
                    onClick={onOpenContact}
                    className="px-5 py-2 rounded-full text-xs font-sans-jakarta font-extrabold uppercase tracking-[0.2em] text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                    CONTACT
                </button>
            </nav>

            {/* Right: Cmd+K Search & Primary CTA Button */}
            <div className="pointer-events-auto hidden sm:flex items-center gap-3">
                
                {/* Search Cmd+K Trigger */}
                <button
                    onClick={onOpenSearch}
                    className="px-3.5 py-2.5 rounded-full bg-[#0d0d12]/90 backdrop-blur-2xl border border-white/15 text-white/70 hover:text-amber-400 hover:border-amber-400/40 text-xs font-mono transition-all flex items-center gap-2 shadow-lg"
                    aria-label="Open command palette"
                >
                    <Search className="w-3.5 h-3.5" />
                    <span className="text-[10px] tracking-wider uppercase text-white/40 flex items-center gap-0.5">
                        <Command className="w-3 h-3" /> K
                    </span>
                </button>

                <button
                    onClick={onOpenContact}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-black font-sans-jakarta font-extrabold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(255,159,28,0.5)] flex items-center gap-2"
                >
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>START PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
            </div>

            {/* Mobile: Hamburger Button */}
            <div className="pointer-events-auto md:hidden flex items-center gap-2">
                <button
                    onClick={onOpenSearch}
                    className="w-11 h-11 rounded-full bg-[#121218]/90 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white/80 shadow-xl"
                    aria-label="Search"
                >
                    <Search className="w-4 h-4 text-amber-400" />
                </button>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="w-11 h-11 rounded-full bg-[#121218]/90 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-xl"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="pointer-events-auto md:hidden fixed top-20 right-4 left-4 z-[9985] p-6 rounded-3xl bg-[#0c0c12]/95 backdrop-blur-2xl border border-white/15 flex flex-col gap-3 text-center shadow-[0_20px_60px_rgba(0,0,0,0.95)]"
                    >
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                onOpenAbout?.();
                            }}
                            className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-widest text-white hover:bg-white/15 transition-all"
                        >
                            ABOUT STUDIO
                        </button>
                        
                        <Link
                            href="/work"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-widest text-white hover:bg-white/15 transition-all"
                        >
                            OUR WORK
                        </Link>

                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                onOpenClients?.();
                            }}
                            className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-widest text-white hover:bg-white/15 transition-all"
                        >
                            CLIENT SHOWCASE
                        </button>

                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                onOpenContact?.();
                            }}
                            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-red-600 text-black text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2"
                        >
                            <span>START A PROJECT</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
}
