"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import { Story } from "@/lib/content";

interface StoriesClientProps {
    stories: Story[];
}

const STORIES_PER_PAGE = 10;

export default function StoriesClient({ stories }: StoriesClientProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    // Get unique categories
    const categories = useMemo(() => {
        const cats = Array.from(new Set(stories.map(story => story.category)));
        return ["All", ...cats.sort()];
    }, [stories]);

    // Filter stories by category
    const filteredStories = useMemo(() => {
        if (selectedCategory === "All") return stories;
        return stories.filter(story => story.category === selectedCategory);
    }, [selectedCategory, stories]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredStories.length / STORIES_PER_PAGE);
    const startIndex = (currentPage - 1) * STORIES_PER_PAGE;
    const endIndex = startIndex + STORIES_PER_PAGE;
    const currentStories = filteredStories.slice(startIndex, endIndex);

    // Reset to page 1 when category changes
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <main className="relative min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl font-bold text-ink mb-4"
                    >
                        Stories & Insights
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-pencil mb-12"
                    >
                        {filteredStories.length} articles on data science, machine learning, and technology
                    </motion.p>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <div className="flex-1">
                            {/* Stories List */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-line shadow-sm overflow-hidden mb-8"
                            >
                                {currentStories.map((story, index) => (
                                    <Link key={story.slug} href={`/stories/${story.slug}`}>
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                                            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
                                            className="flex items-center justify-between p-5 border-b border-line last:border-b-0 hover:bg-white/60 transition-colors duration-200 cursor-pointer group"
                                        >
                                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                                <motion.div
                                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                                    className="text-2xl flex-shrink-0"
                                                >
                                                    {story.emoji}
                                                </motion.div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-ink group-hover:text-ink/80 transition-colors truncate">
                                                        {story.title}
                                                    </h3>
                                                    <p className="text-xs text-pencil mt-1">
                                                        {story.category}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-6 text-sm text-pencil flex-shrink-0 ml-4">
                                                <div className="hidden md:flex items-center gap-2">
                                                    <Calendar size={14} />
                                                    <span className="font-mono text-xs">
                                                        {new Date(story.date).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <Clock size={14} />
                                                    <span className="text-xs">{story.readTime} min</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Link>
                                ))}
                            </motion.div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="flex items-center justify-center gap-2"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className={`p-2 rounded-lg border transition-all duration-200 ${currentPage === 1
                                            ? "border-line text-pencil/30 cursor-not-allowed"
                                            : "border-line text-ink hover:bg-white hover:shadow-sm"
                                            }`}
                                    >
                                        <ChevronLeft size={20} />
                                    </motion.button>

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                        <motion.button
                                            key={page}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${currentPage === page
                                                ? "bg-ink text-white shadow-lg"
                                                : "bg-white border border-line text-pencil hover:border-ink"
                                                }`}
                                        >
                                            {page}
                                        </motion.button>
                                    ))}

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                        className={`p-2 rounded-lg border transition-all duration-200 ${currentPage === totalPages
                                            ? "border-line text-pencil/30 cursor-not-allowed"
                                            : "border-line text-ink hover:bg-white hover:shadow-sm"
                                            }`}
                                    >
                                        <ChevronRight size={20} />
                                    </motion.button>
                                </motion.div>
                            )}
                        </div>

                        {/* Category Sidebar */}
                        <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="w-full lg:w-64 flex-shrink-0"
                        >
                            <div className="sticky top-24 bg-white/80 backdrop-blur-sm rounded-2xl border border-line shadow-sm p-6">
                                <h3 className="font-bold text-ink mb-4">Categories</h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <motion.button
                                            key={category}
                                            whileHover={{ x: 4 }}
                                            onClick={() => handleCategoryChange(category)}
                                            className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${selectedCategory === category
                                                ? "bg-ink text-white font-medium"
                                                : "text-pencil hover:bg-ink/5"
                                                }`}
                                        >
                                            {category}
                                            {category !== "All" && (
                                                <span className="ml-2 text-xs opacity-60">
                                                    ({stories.filter(s => s.category === category).length})
                                                </span>
                                            )}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-line bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-pencil">
                        Built with Next.js, Tailwind CSS, and Framer Motion
                    </p>
                    <p className="text-pencil/60 text-sm mt-2">
                        © 2024 Portfolio. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
