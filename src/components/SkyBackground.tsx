"use client";

import Image from "next/image";

export default function SkyBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">

            {/* STICKY FULL-SCREEN IMAGE - Zero rendering cost during scroll */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/skynew/pinnacle sky.png"
                    alt="Sky Background"
                    fill
                    priority
                    quality={75}
                    sizes="100vw"
                    className="object-cover"
                />
            </div>
            
        </div>
    );
}
