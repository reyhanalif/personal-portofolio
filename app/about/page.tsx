"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Mail, MapPin, Linkedin, Github, Download, Briefcase, GraduationCap, Award } from "lucide-react";

export default function AboutPage() {
    const skills = {
        "Programming Languages": ["Python", "SQL", "R", "C++", "MATLAB", "JavaScript", "HTML/CSS", "Bash"],
        "ML/DL Frameworks": ["PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "Numpy", "Matplotlib", "Geopandas"],
        "Cloud & BI Tools": ["GCP", "AWS", "Azure", "Power BI", "Tableau", "Looker Studio", "Streamlit"],
        "Data Engineering": ["Airflow", "dbt", "MySQL", "MongoDB", "PostgreSQL", "BigQuery", "Docker"],
    };

    const experience = [
        {
            title: "Data Scientist (Project Researcher)",
            company: "Anglian Water",
            location: "London",
            period: "May 2025 – Sep 2025",
            description: "Evaluated Bare Soil Risk Index (BSRI) using Sentinel-2 satellite imagery (Google Earth Engine), rainfall, and water quality data to predict pollutant mobilisation risk for surface water management. Developed risk-based matrix model as early-warning indicator and built dashboards using Looker Studio.",
            highlights: [
                "Performed geospatial and environmental risk analysis using Python",
                "Evaluated model performance using ROC AUC and statistical diagnostics",
                "Built dashboards for communicating environmental impacts to non-technical audiences"
            ]
        },
        {
            title: "Data Analyst",
            company: "Bank Jago",
            location: "Jakarta",
            period: "Aug 2022 - Jul 2024",
            description: "Delivered business analytics directly to senior leadership. Led development of metrics/KPIs, dashboards, and structured reports. Conducted risk analyses, segmentation, and forecasting.",
            highlights: [
                "Built automated pipelines (SQL/GCP/BigQuery) for 10M users",
                "Created analytical visualizations using Python (Pandas, Matplotlib, Seaborn)",
                "Managed multi-team projects and coordinated timelines"
            ]
        },
        {
            title: "Engineering Staff",
            company: "WIKA Tirta Jaya Jatiluhur",
            location: "Jakarta",
            period: "Apr 2021 - Apr 2022",
            description: "Managed engineering design assessments and engaged with public and private stakeholders under PPP scheme. Led regulatory and environmental compliance processes.",
            highlights: [
                "Oversaw Social & Environmental Due Diligence execution",
                "Provided regular engineering updates to board management and government",
                "Led environmental permitting processes"
            ]
        },
    ];

    const education = [
        {
            degree: "MSc Environmental Data Science and Machine Learning",
            school: "Imperial College London",
            location: "London",
            period: "Sep 2024 - Sep 2025",
            description: "Full Scholarship from Indonesia Endowment Fund for Education Agency (LPDP) • Grade: Distinction",
            coursework: "Data Science and Machine Learning, Deep Learning, Advanced Programming, Environmental Data (Climate Model, Seismic Data, Spatial Analysis, Remote Sensing), Big Data Analytics"
        },
        {
            degree: "BSc Environmental Engineering",
            school: "Institut Teknologi Bandung",
            location: "Bandung",
            period: "Aug 2016 - Oct 2020",
            description: "Grade: Cum Laude (GPA 3.54/4.00) • Dean's List Faculty of Civil and Environmental Engineering 2019",
            coursework: "Environmental Statistics, Geographic Information Systems, Engineering Mathematics, Environmental System Analysis"
        },
    ];

    return (
        <main className="relative min-h-screen">
            <Navbar />

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h1 className="text-6xl font-bold text-ink mb-6">Reyhan Alif Pradityo</h1>
                        <p className="text-xl text-pencil leading-relaxed max-w-3xl">
                            Data Scientist with three years' experience in digital banking and environmental science.
                            Expert in SQL, Python, and cloud-based analytics, with a track record of building dashboards,
                            predictive models, and business intelligence for large-scale operations. Proven ability to engage
                            stakeholders, deliver actionable insights, and lead high-impact projects from concept to execution.
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl border border-line shadow-sm p-8 mb-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center gap-3 text-pencil">
                                <Mail size={20} className="text-ink" />
                                <span>reyhanalif28@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-pencil">
                                <MapPin size={20} className="text-ink" />
                                <span>London, UK</span>
                            </div>
                            <div className="flex items-center gap-3 text-pencil">
                                <Linkedin size={20} className="text-ink" />
                                <a href="https://linkedin.com/in/alifreyhanp" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
                                    linkedin.com/in/alifreyhanp
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-pencil">
                                <Github size={20} className="text-ink" />
                                <a href="https://github.com/reyhanalif" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
                                    github.com/reyhanalif
                                </a>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 flex items-center gap-2 px-6 py-3 bg-ink text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <Download size={20} />
                            Download CV
                        </motion.button>
                    </motion.div>

                    {/* Experience */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase size={32} className="text-ink" />
                            <h2 className="text-4xl font-bold text-ink">Experience</h2>
                        </div>

                        <div className="space-y-6">
                            {experience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-line shadow-sm p-6 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-ink">{job.title}</h3>
                                            <p className="text-pencil font-medium">{job.company} • {job.location}</p>
                                        </div>
                                        <span className="text-sm text-pencil font-mono bg-ink/5 px-3 py-1 rounded-full">
                                            {job.period}
                                        </span>
                                    </div>
                                    <p className="text-pencil leading-relaxed mb-3">{job.description}</p>
                                    <ul className="space-y-1">
                                        {job.highlights.map((highlight, i) => (
                                            <li key={i} className="text-sm text-pencil flex items-start gap-2">
                                                <span className="text-ink mt-1">•</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Education */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap size={32} className="text-ink" />
                            <h2 className="text-4xl font-bold text-ink">Education</h2>
                        </div>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-line shadow-sm p-6 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-ink">{edu.degree}</h3>
                                            <p className="text-pencil font-medium">{edu.school} • {edu.location}</p>
                                        </div>
                                        <span className="text-sm text-pencil font-mono bg-ink/5 px-3 py-1 rounded-full">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <p className="text-pencil mb-2">{edu.description}</p>
                                    <p className="text-sm text-pencil"><strong>Key Coursework:</strong> {edu.coursework}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Skills */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Award size={32} className="text-ink" />
                            <h2 className="text-4xl font-bold text-ink">Skills & Technologies</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(skills).map(([category, skillList], index) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-line shadow-sm p-6"
                                >
                                    <h3 className="font-bold text-ink mb-4">{category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillList.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-ink/5 text-ink text-sm font-medium rounded-full border border-line"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-line bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-pencil">
                        Built with Next.js, Tailwind CSS, and Framer Motion
                    </p>
                    <p className="text-pencil/60 text-sm mt-2">
                        © 2024 Reyhan Alif Pradityo. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
