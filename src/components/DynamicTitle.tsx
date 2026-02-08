"use client";

import { useEffect } from "react";

export default function DynamicTitle() {
    useEffect(() => {
        const titles = ["PINNACLE STUDIOS", "🔥 don't forget to reach out"];
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % titles.length;
            document.title = titles[currentIndex];
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return null;
}
