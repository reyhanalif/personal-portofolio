"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-24 md:pb-20">
            <div className="max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink mb-6"
                >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink to-pencil">Reyhan Alif Pradityo</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-pencil max-w-2xl leading-relaxed mb-8"
                >
                    Imperial College London graduate with 2+ years experience in digital banking. I specialize in building data-driven solutions for environmental science and business intelligence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link href="/projects">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 sm:px-8 py-3 bg-ink text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer inline-block text-center w-full sm:w-auto"
                        >
                            View Projects
                        </motion.div>
                    </Link>

                    <Link href="/about">
                        <motion.div
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 sm:px-8 py-3 bg-white border-2 border-line text-ink rounded-xl font-medium shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer inline-block text-center w-full sm:w-auto"
                        >
                            About Me
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
