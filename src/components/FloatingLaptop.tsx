"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingLaptop() {
    return (
        <div className="relative z-20 w-full flex justify-center mb-24 sm:mb-32 md:mb-40 pointer-events-none">
            <motion.div
                initial={{ opacity: 0, y: 150, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                    duration: 1.5, 
                    ease: "easeOut"
                }}
                viewport={{ once: false, margin: "-10%" }}
                className="relative w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] max-w-[900px] aspect-[16/9]"
            >
                {/* Continuous floating animation wrapper */}
                <motion.div
                    animate={{ y: [-15, 15, -15] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-full h-full relative"
                >
                    <Image
                        src="/floating laptop image/Whisk_818e24a0010d6378ac24c4faeac233c6dr.png"
                        alt="Floating Laptop Display"
                        fill
                        className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
