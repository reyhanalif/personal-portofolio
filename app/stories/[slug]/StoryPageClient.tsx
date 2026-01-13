"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, BookOpen } from "lucide-react";
import { Story } from "@/lib/content";
import Navbar from "../../components/Navbar";

interface StoryPageClientProps {
    story: Story;
    recommendations: Story[];
}

export default function StoryPageClient({ story, recommendations }: StoryPageClientProps) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main className="relative min-h-screen bg-dots">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-ink origin-left z-50"
                style={{ scaleX }}
            />

            <Navbar />

            <article className="pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <Link href="/stories">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            whileHover={{ x: -4 }}
                            className="inline-flex items-center gap-2 text-pencil hover:text-ink transition-colors mb-8 cursor-pointer"
                        >
                            <ArrowLeft size={20} />
                            <span>Back to Stories</span>
                        </motion.div>
                    </Link>

                    {/* Article Header */}
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-6xl mb-6 inline-block"
                        >
                            {story.emoji}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight font-serif"
                        >
                            {story.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center justify-center gap-6 text-pencil"
                        >
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{new Date(story.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>{story.readTime} min read</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex-1 mx-auto max-w-3xl bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-line"
                        >
                            {story.coverImage && (
                                <div className="mb-12 rounded-xl overflow-hidden shadow-sm">
                                    <img
                                        src={story.coverImage}
                                        alt={story.title}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            )}

                            <div 
                                className="prose prose-lg max-w-none"
                                dangerouslySetInnerHTML={{ __html: story.content }}
                            />
                        </motion.div>

                        {/* Recommendations Sidebar */}
                        <motion.aside
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="hidden lg:block w-64 flex-shrink-0"
                        >
                            <div className="sticky top-32 opacity-80 hover:opacity-100 transition-opacity duration-300">
                                <div className="flex items-center gap-2 mb-4 text-ink font-medium">
                                    <BookOpen size={18} />
                                    <h3 className="text-sm">More Stories</h3>
                                </div>
                                <div className="space-y-3 border-l-2 border-line pl-4">
                                    {recommendations.map((item) => (
                                        <Link key={item.slug} href={`/stories/${item.slug}`}>
                                            <motion.div
                                                whileHover={{ x: 2 }}
                                                className="group cursor-pointer p-2 rounded-lg hover:bg-white/50 transition-all"
                                            >
                                                <div className="flex items-start gap-2 mb-1">
                                                    <span className="text-lg leading-none">{item.emoji}</span>
                                                    <h4 className="font-medium text-xs text-ink group-hover:text-ink/80 line-clamp-2 leading-snug">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                                <div className="flex items-center gap-2 text-[10px] text-pencil pl-7">
                                                    <span>{item.readTime} min read</span>
                                                </div>
                                            </motion.div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </article>
        </main>
    );
}
