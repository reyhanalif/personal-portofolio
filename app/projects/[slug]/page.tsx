import { getProjectBySlug, getAllProjectSlugs } from "@/lib/content";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import ProjectImageCarousel from "../../components/ProjectImageCarousel";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from "framer-motion";
import ProjectPageClient from "./ProjectPageClient";

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectPageClient project={project} />;
}
