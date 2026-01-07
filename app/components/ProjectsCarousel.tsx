"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Customer Churn Prediction",
        description: "ML model predicting customer churn with 94% accuracy using ensemble methods and feature engineering.",
        image: "/project-1.jpg",
        tags: ["Python", "Scikit-learn", "XGBoost"],
    },
    {
        id: 2,
        title: "Sales Forecasting Dashboard",
        description: "Interactive dashboard for time-series forecasting with real-time data visualization and insights.",
        image: "/project-2.jpg",
        tags: ["Tableau", "Prophet", "SQL"],
    },
    {
        id: 3,
        title: "NLP Sentiment Analysis",
        description: "Deep learning model analyzing customer reviews to extract sentiment and key topics.",
        image: "/project-3.jpg",
        tags: ["PyTorch", "BERT", "NLP"],
    },
    {
        id: 4,
        title: "Recommendation Engine",
        description: "Collaborative filtering system improving product recommendations by 35%.",
        image: "/project-4.jpg",
        tags: ["TensorFlow", "Matrix Factorization", "AWS"],
    },
];

export default function ProjectsCarousel() {
    return (
        <section id="projects" className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold text-ink mb-4"
                >
                    Featured Projects
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-pencil mb-12"
                >
                    A collection of data science projects solving real-world problems
                </motion.p>

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="min-w-[400px] h-[450px] bg-white border border-line rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 snap-start flex-shrink-0 overflow-hidden"
                        >
                            <div className="h-[60%] relative bg-gradient-to-br from-pencil/10 to-ink/5">
                                {/* Placeholder for project image */}
                                <div className="w-full h-full flex items-center justify-center text-pencil/30 text-6xl font-bold">
                                    {project.id}
                                </div>
                            </div>

                            <div className="h-[40%] p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-xl text-ink mb-2">{project.title}</h3>
                                    <p className="text-sm text-pencil leading-relaxed">{project.description}</p>
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
                    ))}
                </div>
            </div>
        </section>
    );
}
