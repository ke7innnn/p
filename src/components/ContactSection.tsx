"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, ArrowUpRight, Sparkles, Clock, Copy, Check } from "lucide-react";

export default function ContactSection() {
    const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

    const handleCopy = (text: string, label: string) => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(text);
            setCopiedLabel(label);
            setTimeout(() => setCopiedLabel(null), 2200);
        }
    };

    return (
        <footer id="contact" className="relative z-50 w-full bg-[#080407] text-white pt-24 pb-16 px-4 sm:px-8 border-t border-[#FF5E62]/20 overflow-hidden">
            
            {/* Toast Notification */}
            <AnimatePresence>
                {copiedLabel && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-8 right-8 z-[9999] px-5 py-3 rounded-2xl bg-[#FF5E62] text-white font-extrabold text-xs tracking-wider uppercase shadow-[0_0_30px_rgba(255,94,98,0.6)] flex items-center gap-2"
                    >
                        <Check className="w-4 h-4" />
                        <span>COPIED {copiedLabel} TO CLIPBOARD</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Ambient Sunset Flare Background Light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#FF5E62]/15 via-[#FF9966]/10 to-transparent blur-[140px] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto relative z-10">
                
                {/* Main Headline */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-16 border-b border-white/10">
                    <div>
                        <div className="flex items-center gap-3 text-[#FF9966] font-bold text-xs uppercase tracking-[0.3em] mb-4">
                            <Sparkles className="w-4 h-4 fill-current text-[#FF5E62]" /> START A CONVERSATION
                        </div>
                        <h2 className="text-4xl sm:text-6xl md:text-8xl font-heading-syne font-black uppercase tracking-tight text-white leading-[0.95]">
                            LET&apos;S TALK <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5E62] via-[#FF9966] to-[#FFD166]">
                                YOUR PROJECT.
                            </span>
                        </h2>
                    </div>

                    <a
                        href="tel:9082736661"
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF5E62] via-[#FF9966] to-[#FFD166] text-black font-sans-jakarta font-black text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(255,94,98,0.4)] flex items-center gap-3"
                    >
                        <span>BOOK A DIRECT CALL</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Contact Grid with Bespoke Interactive Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 py-16 border-b border-white/10">
                    
                    {/* Phone Card */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        onClick={() => handleCopy("9082736661", "PHONE")}
                        className="luxury-card p-8 rounded-3xl flex flex-col gap-4 group cursor-pointer"
                    >
                        <div className="flex items-center justify-between">
                            <div className="p-3 rounded-2xl bg-[#FF5E62]/10 border border-[#FF5E62]/30 group-hover:scale-110 transition-transform">
                                <Phone className="w-5 h-5 text-[#FF5E62]" />
                            </div>
                            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase flex items-center gap-1.5 group-hover:text-[#FF9966] transition-colors">
                                <Copy className="w-3 h-3" /> CLICK TO COPY
                            </span>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-heading-syne font-bold text-white group-hover:text-[#FF9966] transition-colors">
                                9082736661
                            </div>
                            <p className="text-xs font-sans-jakarta text-white/50 mt-2 flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5 text-[#FF9966]" />
                                <span>Mon – Sat, 10:00 AM – 8:00 PM IST</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Email Card */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        onClick={() => handleCopy("we@pinnaclestudios.in", "EMAIL")}
                        className="luxury-card p-8 rounded-3xl flex flex-col gap-4 group cursor-pointer"
                    >
                        <div className="flex items-center justify-between">
                            <div className="p-3 rounded-2xl bg-[#FF9966]/10 border border-[#FF9966]/30 group-hover:scale-110 transition-transform">
                                <Mail className="w-5 h-5 text-[#FF9966]" />
                            </div>
                            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase flex items-center gap-1.5 group-hover:text-[#FF9966] transition-colors">
                                <Copy className="w-3 h-3" /> CLICK TO COPY
                            </span>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-heading-syne font-bold text-white group-hover:text-[#FF9966] transition-colors">
                                we@pinnaclestudios.in
                            </div>
                            <p className="text-xs font-sans-jakarta text-white/50 mt-2">
                                Guaranteed response within 24 hours
                            </p>
                        </div>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="luxury-card p-8 rounded-3xl flex flex-col gap-4 group"
                    >
                        <div className="flex items-center justify-between">
                            <div className="p-3 rounded-2xl bg-[#FFD166]/10 border border-[#FFD166]/30 group-hover:scale-110 transition-transform">
                                <MapPin className="w-5 h-5 text-[#FFD166]" />
                            </div>
                            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">MUMBAI STUDIO</span>
                        </div>
                        <div>
                            <p className="text-sm font-sans-jakarta font-medium text-white/90 leading-relaxed">
                                516, 9 Business Bay, Malad Mindspace, Mumbai, Maharashtra 400064
                            </p>
                            <a
                                href="https://www.instagram.com/pinnaclexstudio/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs text-[#FF9966] font-bold uppercase tracking-wider hover:underline mt-3"
                            >
                                <Instagram className="w-4 h-4 text-[#FF5E62]" /> @pinnaclexstudio
                            </a>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Footer Bar */}
                <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono tracking-widest uppercase">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#FF5E62] animate-pulse" />
                        <span>© 2026 PINNACLE STUDIOS. ALL RIGHTS RESERVED.</span>
                    </div>
                    <div>ENGINEERED WITH LUXURY &amp; PRECISION</div>
                </div>

            </div>
        </footer>
    );
}
