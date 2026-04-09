"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function ContactSection() {
    const [showToast, setShowToast] = useState(false);

    const socialLinks = [
        { icon: FaInstagram, url: "https://www.instagram.com/pinnaclexstudio/", label: "Instagram", available: true },
        { icon: FaTwitter, url: "#", label: "Twitter", available: false },
        { icon: FaLinkedin, url: "#", label: "LinkedIn", available: false },
        { icon: FaFacebook, url: "#", label: "Facebook", available: false },
    ];

    const contactInfo = [
        { icon: FaPhone, text: "8806577475", href: "tel:8806577475" },
        { icon: FaEnvelope, text: "pinnaclestudios4u@gmail.com", href: "mailto:pinnaclestudios4u@gmail.com" },
        { icon: FaMapMarkerAlt, text: "Mumbai, Maharashtra", href: null },
    ];

    const handleSocialClick = (e: React.MouseEvent, available: boolean) => {
        if (!available) {
            e.preventDefault();
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    return (
        <section id="contact" className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#555555] to-[#2c3e50] z-50">
            {/* Noise texture overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

            {/* Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-6 right-6 z-[9999] bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-4 shadow-2xl"
                    >
                        <p className="text-white text-sm font-medium" style={{ fontFamily: 'var(--font-outfit)' }}>
                            We are not yet on this platform
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-10 sm:mb-12 md:mb-16"
                >
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                        style={{ fontFamily: 'var(--font-syncopate)' }}
                    >
                        Get in Touch
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4" style={{ fontFamily: 'var(--font-inter)' }}>
                        Ready to elevate your journey? Connect with us today.
                    </p>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-10 sm:mb-12 md:mb-16"
                >
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center gap-3 sm:gap-4 p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            <item.icon className="text-3xl sm:text-4xl text-white/80" />
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="text-white/90 hover:text-white transition-colors text-center text-sm sm:text-base"
                                    style={{ fontFamily: 'var(--font-outfit)' }}
                                >
                                    {item.text}
                                </a>
                            ) : (
                                <span
                                    className="text-white/90 text-center text-sm sm:text-base"
                                    style={{ fontFamily: 'var(--font-outfit)' }}
                                >
                                    {item.text}
                                </span>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Social Media Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex justify-center items-center gap-4 sm:gap-5 md:gap-6"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.url}
                            target={social.available ? "_blank" : undefined}
                            rel={social.available ? "noopener noreferrer" : undefined}
                            aria-label={social.label}
                            onClick={(e) => handleSocialClick(e, social.available)}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                        >
                            <social.icon className="text-xl sm:text-2xl text-white/90" />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
