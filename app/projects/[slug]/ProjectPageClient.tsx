"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import ProjectImageCarousel from "../../components/ProjectImageCarousel";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Project } from "@/lib/content";
import Navbar from "../../components/Navbar";

interface ProjectPageClientProps {
    project: Project;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
    return (
        <main className="relative min-h-screen">
            <Navbar />

            <article className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <Link href="/projects">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            whileHover={{ x: -4 }}
                            className="inline-flex items-center gap-2 text-pencil hover:text-ink transition-colors mb-8 cursor-pointer"
                        >
                            <ArrowLeft size={20} />
                            <span>Back to Projects</span>
                        </motion.div>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-4 py-1 bg-ink/5 text-ink text-sm font-medium rounded-full border border-line capitalize">
                                {project.category.replace('-', ' ')}
                            </span>
                            {project.duration && (
                                <span className="text-pencil text-sm">{project.duration}</span>
                            )}
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6 leading-tight">
                            {project.title}
                        </h1>

                        <p className="text-xl text-pencil leading-relaxed mb-6">
                            {project.description}
                        </p>

                        <div className="flex gap-4">
                            {project.githubUrl && (
                                <motion.a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Github size={20} />
                                    View on GitHub
                                </motion.a>
                            )}

                            {project.liveUrl && (
                                <motion.a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-line text-ink rounded-xl font-medium shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <ExternalLink size={20} />
                                    Live Demo
                                </motion.a>
                            )}
                        </div>
                    </motion.div>

                    {/* Image Gallery Carousel */}
                    <ProjectImageCarousel images={project.images} />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-line shadow-sm p-8 prose prose-lg prose-slate max-w-none"
                            >
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {project.content}
                                </ReactMarkdown>
                            </motion.section>
                        </div>

                        {/* Sidebar Info */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-line shadow-sm p-6"
                            >
                                <h3 className="font-bold text-ink mb-4">Project Details</h3>
                                <dl className="space-y-4">
                                    {project.role && (
                                        <div>
                                            <dt className="text-sm text-pencil mb-1">Role</dt>
                                            <dd className="font-medium text-ink">{project.role}</dd>
                                        </div>
                                    )}
                                    <div>
                                        <dt className="text-sm text-pencil mb-1">Date</dt>
                                        <dd className="font-medium text-ink">
                                            {new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm text-pencil mb-1">Technologies</dt>
                                        <dd className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-ink/5 text-ink text-xs rounded-md border border-line">
                                                    {tag}
                                                </span>
                                            ))}
                                        </dd>
                                    </div>
                                </dl>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}
