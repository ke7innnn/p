"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ExternalLink } from "lucide-react";

interface ClientPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const CLIENT_LIST = [
  { name: "Arham Investment", category: "Finance", logo: "ARHAM" },
  { name: "Surface Design", category: "Architecture", logo: "SURFACE" },
  { name: "Mascon Lights", category: "Luxury Lighting", logo: "MASCON" },
  { name: "Prism Glass", category: "Interior", logo: "PRISM" },
  { name: "Office Ideas", category: "Workspace", logo: "OFFICE IDEAS" },
  { name: "Baghbaari", category: "Lifestyle", logo: "BAGHBAARI" },
  { name: "Academia Fotografia", category: "Media", logo: "ACADEMIA" },
  { name: "Direct Ocean", category: "Logistics", logo: "DIRECT OCEAN" },
];

export default function ClientPanel({ isOpen, onClose }: ClientPanelProps) {
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
            className="fixed top-12 bottom-12 right-4 left-4 sm:right-8 sm:left-auto sm:w-[720px] z-[9995] bg-[#0c0c10]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-y-auto no-scrollbar flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-semibold">
                  SELECT CLIENTS &amp; PARTNERS
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
            <div className="my-8 flex flex-col gap-6">
              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                  TRUSTED BY FORWARD-THINKING BRANDS.
                </h2>
                <p className="mt-2 text-sm text-white/60 font-light">
                  We partner with global luxury labels, high-growth startups, and visionary leaders across luxury lifestyle, architecture, tech, and retail.
                </p>
              </div>

              {/* Client Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {CLIENT_LIST.map((client, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex flex-col items-center justify-center text-center gap-2 transition-all duration-300 group hover:border-white/30"
                  >
                    <span className="text-base font-extrabold tracking-widest uppercase text-white/90 group-hover:text-red-500 transition-colors">
                      {client.logo}
                    </span>
                    <span className="text-[10px] text-white/40 tracking-wider uppercase">
                      {client.category}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stat Highlight */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-amber-950/20 to-black border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                <div>
                  <div className="text-3xl font-black text-white">50+ PROJECTS</div>
                  <div className="text-xs text-white/60 mt-1 uppercase tracking-widest">Delivered across 8 industries worldwide</div>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white text-white hover:text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  View Case Studies <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 pt-6 flex items-center justify-between text-xs text-white/40">
              <span>PINNACLE STUDIOS CLIENT ROSTER</span>
              <span>2026 EDITION</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
