"use client";

import { motion } from "framer-motion";
import { FileText, TrendingUp, Brain, Database } from "lucide-react";

interface Story {
    id: number;
    icon: any;
    emoji: string;
    title: string;
    date: string;
}

const stories: Story[] = [
    {
        id: 1,
        icon: Brain,
        emoji: "🧠",
        title: "Understanding Neural Networks: A Visual Guide",
        date: "2024-01-15",
    },
    {
        id: 2,
        icon: TrendingUp,
        emoji: "📈",
        title: "5 Key Metrics Every Data Scientist Should Track",
        date: "2024-01-10",
    },
    {
        id: 3,
        icon: Database,
        emoji: "💾",
        title: "Building Scalable Data Pipelines with Apache Airflow",
        date: "2024-01-05",
    },
    {
        id: 4,
        icon: FileText,
        emoji: "📝",
        title: "From Jupyter Notebooks to Production: Best Practices",
        date: "2023-12-28",
    },
];

export default function Stories() {
    return (
        <section id="stories" className="min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold text-ink mb-4"
                >
                    Stories & Insights
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

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-line shadow-sm overflow-hidden">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
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
                    ))}
                </div>
            </div>
        </section>
    );
}
