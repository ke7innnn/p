"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Command, Phone, Mail, Award, Sparkles } from "lucide-react";
import Link from "next/link";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAbout: () => void;
  onOpenClients: () => void;
  onOpenContact: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenAbout,
  onOpenClients,
  onOpenContact,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery("");
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const COMMANDS = [
    {
      id: "about",
      title: "ABOUT PINNACLE STUDIOS",
      category: "PANEL",
      icon: Sparkles,
      action: () => {
        onClose();
        onOpenAbout();
      },
    },
    {
      id: "work",
      title: "OUR WORK SHOWCASE",
      category: "NAVIGATION",
      icon: ArrowRight,
      href: "/work",
    },
    {
      id: "clients",
      title: "SELECT CLIENT ROSTER",
      category: "PANEL",
      icon: Award,
      action: () => {
        onClose();
        onOpenClients();
      },
    },
    {
      id: "contact",
      title: "START A PROJECT / INITIATE CONVERSATION",
      category: "PANEL",
      icon: Phone,
      action: () => {
        onClose();
        onOpenContact();
      },
    },
    {
      id: "email",
      title: "EMAIL DIRECT: WE@PINNACLESTUDIOS.IN",
      category: "DIRECT",
      icon: Mail,
      action: () => {
        if (typeof navigator !== "undefined") {
          navigator.clipboard.writeText("we@pinnaclestudios.in");
        }
        onClose();
      },
    },
  ];

  const filtered = COMMANDS.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

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
            className="fixed inset-0 z-[9995] bg-black/80 backdrop-blur-md"
          />

          {/* Floating Command Palette Container */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[9999] w-[90vw] max-w-[640px] bg-[#0c0c12]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-[0_30px_90px_rgba(0,0,0,0.9)] text-white overflow-hidden"
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Search className="w-5 h-5 text-amber-400 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm font-sans-jakarta text-white placeholder-white/40 focus:outline-none"
              />
              <div className="flex items-center gap-1 text-[10px] font-mono text-white/40 border border-white/10 px-2 py-1 rounded-md">
                <Command className="w-3 h-3" /> K
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Command List */}
            <div className="mt-4 flex flex-col gap-2 max-h-[360px] overflow-y-auto no-scrollbar">
              {filtered.length === 0 ? (
                <div className="p-4 text-center text-xs text-white/40 font-mono">
                  NO MATCHING COMMANDS FOUND
                </div>
              ) : (
                filtered.map((cmd) => {
                  const Icon = cmd.icon;
                  return cmd.href ? (
                    <Link
                      key={cmd.id}
                      href={cmd.href}
                      onClick={onClose}
                      className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-amber-500/15 border border-white/5 hover:border-amber-400/40 flex items-center justify-between transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-heading-syne font-extrabold tracking-wide uppercase text-white group-hover:text-amber-400 transition-colors">
                          {cmd.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
                        {cmd.category}
                      </span>
                    </Link>
                  ) : (
                    <div
                      key={cmd.id}
                      onClick={cmd.action}
                      className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-amber-500/15 border border-white/5 hover:border-amber-400/40 flex items-center justify-between transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-heading-syne font-extrabold tracking-wide uppercase text-white group-hover:text-amber-400 transition-colors">
                          {cmd.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
                        {cmd.category}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 pt-4 mt-4 flex items-center justify-between text-[10px] font-mono text-white/30 uppercase">
              <span>ESC TO CLOSE</span>
              <span>PINNACLE COMMAND PALETTE</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
