"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, ArrowUpRight, Sparkles } from "lucide-react";

export default function ContactSection() {
    return (
        <footer id="contact" className="relative z-50 w-full bg-[#050507] text-white pt-24 pb-16 px-4 sm:px-8 border-t border-white/10">
            <div className="max-w-[1600px] mx-auto">
                
                {/* Main Headline */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-16 border-b border-white/10">
                    <div>
                        <div className="flex items-center gap-3 text-red-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">
                            <Sparkles className="w-4 h-4" /> START A CONVERSATION
                        </div>
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
                            LET&apos;S TALK <br />
                            <span className="text-stroke-white hover:text-white transition-colors duration-500">YOUR PROJECT.</span>
                        </h2>
                    </div>

                    <a
                        href="tel:9082736661"
                        className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-xl shadow-red-900/40 flex items-center gap-3"
                    >
                        <span>BOOK A CALL NOW</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b border-white/10">
                    
                    {/* Phone */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40">
                            <Phone className="w-4 h-4 text-red-500" />
                            <span>PHONE / FACETIME</span>
                        </div>
                        <a href="tel:9082736661" className="text-2xl font-bold text-white hover:text-red-500 transition-colors">
                            9082736661
                        </a>
                        <p className="text-xs text-white/50">Mon – Sat, 10:00 AM – 8:00 PM IST</p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40">
                            <Mail className="w-4 h-4 text-amber-400" />
                            <span>EMAIL INQUIRIES</span>
                        </div>
                        <a href="mailto:we@pinnaclestudios.in" className="text-2xl font-bold text-white hover:text-amber-400 transition-colors">
                            we@pinnaclestudios.in
                        </a>
                        <p className="text-xs text-white/50">Response within 24 business hours</p>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40">
                            <MapPin className="w-4 h-4 text-rose-400" />
                            <span>MUMBAI OFFICE</span>
                        </div>
                        <p className="text-sm font-medium text-white/90 leading-relaxed">
                            516, 9 Business Bay, Malad Mindspace, Mumbai, Maharashtra 400064
                        </p>
                        <a
                            href="https://www.instagram.com/pinnaclexstudio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs text-red-500 font-bold uppercase tracking-wider hover:underline mt-1"
                        >
                            <Instagram className="w-4 h-4" /> @pinnaclexstudio
                        </a>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono tracking-widest uppercase">
                    <div>© 2026 PINNACLE STUDIOS. ALL RIGHTS RESERVED.</div>
                    <div>CRAFTED WITH LUXURY &amp; PRECISION</div>
                </div>

            </div>
        </footer>
    );
}

