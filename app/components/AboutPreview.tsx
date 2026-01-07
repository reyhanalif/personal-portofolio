"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
    return (
        <section id="about-preview" className="min-h-[60vh] py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold text-ink mb-8"
                >
                    About Me
                </motion.h2>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-line shadow-sm p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className="text-lg text-pencil leading-relaxed mb-6">
                            Data Scientist with three years' experience in digital banking and environmental science.
                            Currently pursuing MSc in Environmental Data Science and Machine Learning at Imperial College London
                            with a full scholarship from LPDP. Expert in SQL, Python, and cloud-based analytics, with a track record
                            of building dashboards, predictive models, and business intelligence for large-scale operations.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="p-4 bg-ink/5 rounded-xl border border-line"
                            >
                                <h3 className="font-bold text-ink mb-2">Expertise</h3>
                                <p className="text-sm text-pencil">Machine Learning, Data Analytics, Environmental Data Science</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="p-4 bg-ink/5 rounded-xl border border-line"
                            >
                                <h3 className="font-bold text-ink mb-2">Tools</h3>
                                <p className="text-sm text-pencil">Python, SQL, GCP, Power BI, PyTorch, TensorFlow</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="p-4 bg-ink/5 rounded-xl border border-line"
                            >
                                <h3 className="font-bold text-ink mb-2">Focus</h3>
                                <p className="text-sm text-pencil">Predictive Analytics, Geospatial Analysis, Business Intelligence</p>
                            </motion.div>
                        </div>

                        <Link href="/about">
                            <motion.div
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                Learn More About Me
                                <ArrowRight size={20} />
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
