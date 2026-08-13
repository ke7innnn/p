"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

interface ContactPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPanel({ isOpen, onClose }: ContactPanelProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9990] bg-black/70 backdrop-blur-md"
          />

          {/* Floating Drawer Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-12 bottom-12 right-4 left-4 sm:right-8 sm:left-auto sm:w-[640px] z-[9995] bg-[#0c0c10]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-y-auto no-scrollbar flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-600 animate-ping" />
                <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-semibold">
                  INITIATE A CONVERSATION
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Close panel"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="my-8 flex flex-col gap-8">
              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                  LET&apos;S BUILD SOMETHING EXTRAORDINARY.
                </h2>
                <p className="mt-2 text-sm text-white/60 font-light">
                  Tell us about your brand vision, upcoming launch, or digital requirements.
                </p>
              </div>

              {/* Direct Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">PHONE / FACETIME</div>
                    <a href="tel:9082736661" className="text-sm font-bold text-white hover:text-red-500 transition-colors">
                      9082736661
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">EMAIL INQUIRIES</div>
                    <a href="mailto:we@pinnaclestudios.in" className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
                      we@pinnaclestudios.in
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 sm:col-span-2 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest">HEADQUARTERS</div>
                    <div className="text-sm font-medium text-white/90">
                      516, Business Bay, Mindspace, Malad West, Mumbai, Maharashtra 400064
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col items-center justify-center text-center gap-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">INQUIRY RECEIVED</h3>
                  <p className="text-xs text-white/70">Thank you! Our lead strategist will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs uppercase tracking-widest font-extrabold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-900/30"
                  >
                    Submit Inquiry <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 pt-6 flex items-center justify-between text-xs text-white/40">
              <span>PINNACLE STUDIOS MUMBAI</span>
              <span>© 2026 ALL RIGHTS RESERVED</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
