"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Story } from "@/lib/content";

interface StoriesPreviewClientProps {
    stories: Story[];
}

export default function StoriesPreviewClient({ stories }: StoriesPreviewClientProps) {
    return (
        <section id="stories-preview" className="min-h-[60vh] py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold text-ink mb-4"
                >
                    Recent Stories
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-pencil mb-12"
                >
                    Thoughts on data science, machine learning, and technology
                </motion.p>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-line shadow-sm overflow-hidden mb-8">
                    {stories.map((story, index) => (
                        <Link key={story.slug} href={`/stories/${story.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                                className="flex items-center justify-between p-6 border-b border-line last:border-b-0 hover:bg-white/50 transition-colors duration-200 cursor-pointer group"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        className="text-3xl"
                                    >
                                        {story.emoji}
                                    </motion.div>

                                    <div className="flex-1">
                                        <h3 className="font-semibold text-ink group-hover:text-ink/80 transition-colors">
                                            {story.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="text-sm text-pencil font-mono">
                                    {new Date(story.date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center"
                >
                    <Link href="/stories">
                        <motion.div
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-ink text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            View All Stories
                            <ArrowRight size={20} />
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
