"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { Project } from "@/lib/content";

interface ProjectsClientProps {
    projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
    const [activeFilter, setActiveFilter] = useState<"all" | "model" | "data-analytics">("all");

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const filters = [
        { id: "all", label: "All Projects" },
        { id: "data-analytics", label: "Data Analytics" },
        { id: "model", label: "Model" },
    ];

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
                        All Projects
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-pencil mb-12"
                    >
                        Explore my portfolio of data science and analytics projects
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex gap-4 mb-12 flex-wrap"
                    >
                        {filters.map((filter) => (
                            <motion.button
                                key={filter.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveFilter(filter.id as any)}
                                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeFilter === filter.id
                                    ? "bg-ink text-white shadow-lg"
                                    : "bg-white border border-line text-pencil hover:border-ink"
                                    }`}
                            >
                                {filter.label}
                            </motion.button>
                        ))}
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <Link key={project.slug} href={`/projects/${project.slug}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="bg-white border border-line rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                                >
                                    <div className="h-48 relative bg-gradient-to-br from-pencil/10 to-ink/5 bg-cover bg-center"
                                        style={(project.thumbnail || (project.images && project.images.length > 0)) ? { backgroundImage: `url(${project.thumbnail || project.images[0]})` } : {}}
                                    >
                                        {!project.images || project.images.length === 0 && (
                                            <div className="w-full h-full flex items-center justify-center text-pencil/30 text-5xl font-bold">
                                                {index + 1}
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <h3 className="font-bold text-xl text-ink mb-2">{project.title}</h3>
                                        <p className="text-sm text-pencil leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                                        <div className="flex gap-2 flex-wrap">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-ink/5 text-ink text-xs font-medium rounded-full border border-line"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="px-3 py-1 bg-ink/5 text-ink text-xs font-medium rounded-full border border-line">
                                                    +{project.tags.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
