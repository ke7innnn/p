"use client";

const stats = [
    { value: "100%", label: "Client Satisfaction" },
    { value: "3x", label: "Avg. Conversion Lift" },
    { value: "< 1 WK", label: "Delivery Turnaround" },
    { value: "2025", label: "Est. Mumbai" },
];

const marqueeItems = [
    "PREMIUM WEBSITES",
    "AI CHATBOTS",
    "AI AGENTS",
    "AUTOMATION",
    "AI PRODUCT SHOOTS",
    "CLIPPING",
    "ONGOING SUPPORT",
];

export default function StatsStrip() {
    return (
        <div className="relative z-10 w-full bg-[#0A0A0C] border-y border-white/10 overflow-hidden">

            {/* Stats Row */}
            <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 py-10 sm:py-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-1">
                        <span
                            className="text-4xl sm:text-5xl font-bold text-white"
                            style={{ fontFamily: "var(--font-syncopate)" }}
                        >
                            {stat.value}
                        </span>
                        <span
                            className="text-xs sm:text-sm text-white/50 uppercase tracking-widest"
                            style={{ fontFamily: "var(--font-outfit)" }}
                        >
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Scrolling Marquee */}
            <div className="py-4 overflow-hidden">
                <div
                    className="flex gap-12 whitespace-nowrap"
                    style={{
                        animation: "marquee 20s linear infinite",
                        width: "max-content",
                    }}
                >
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span
                            key={i}
                            className="text-xs sm:text-sm font-semibold text-white/30 uppercase tracking-[0.2em]"
                            style={{ fontFamily: "var(--font-outfit)" }}
                        >
                            {item}
                            <span className="mx-6 text-white/20">✦</span>
                        </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}
