"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    slug: string;
    image: string;
    tags: string[];
    category: "data-analytics" | "model";
}

interface FeaturedProjectsClientProps {
    projects: Project[];
}

export default function FeaturedProjectsClient({ projects }: FeaturedProjectsClientProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const cardWidth = 400;
            const gap = 24;
            const scrollAmount = cardWidth + gap;

            scrollContainerRef.current.scrollBy({
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 pb-24 md:pb-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4"
                        >
                            Featured Projects
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg sm:text-xl text-pencil"
                        >
                            A selection of my best work
                        </motion.p>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => scroll("left")}
                            className="p-3 bg-white border border-line rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <ChevronLeft size={24} className="text-ink" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => scroll("right")}
                            className="p-3 bg-white border border-line rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <ChevronRight size={24} className="text-ink" />
                        </motion.button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 hide-scrollbar scroll-smooth"
                >
                    {projects.map((project, index) => (
                        <Link href={`/projects/${project.slug}`} key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="min-w-[280px] sm:min-w-[350px] md:min-w-[400px] h-[400px] sm:h-[450px] bg-white border border-line rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex-shrink-0 overflow-hidden cursor-pointer"
                            >
                                <div className="h-[60%] relative bg-gradient-to-br from-pencil/10 to-ink/5 bg-cover bg-center"
                                    style={project.image && project.image !== "/placeholder.jpg" ? { backgroundImage: `url(${project.image})` } : {}}
                                >
                                    {(!project.image || project.image === "/placeholder.jpg") && (
                                        <div className="w-full h-full flex items-center justify-center text-pencil/30 text-6xl font-bold">
                                            {project.id}
                                        </div>
                                    )}
                                </div>

                                <div className="h-[40%] p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-bold text-xl text-ink mb-2">{project.title}</h3>
                                        <p className="text-sm text-pencil leading-relaxed line-clamp-3">{project.description}</p>
                                    </div>

                                    <div className="flex gap-2 flex-wrap">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-ink/5 text-ink text-xs font-medium rounded-full border border-line"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
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
                    className="flex justify-center mt-8"
                >
                    <Link href="/projects">
                        <motion.div
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-3 bg-ink text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            View All Projects
                            <ArrowRight size={20} />
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
