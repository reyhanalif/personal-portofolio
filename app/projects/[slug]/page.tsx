import { getProjectBySlug, getAllProjectSlugs } from "@/lib/content";
import { notFound } from "next/navigation";
import ProjectPageClient from "./ProjectPageClient";
import { Metadata } from "next";

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ 
    params 
}: { 
    params: Promise<{ slug: string }> 
}): Promise<Metadata> {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} | Portfolio`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: project.thumbnail ? [project.thumbnail] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: project.description,
            images: project.thumbnail ? [project.thumbnail] : [],
        },
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectPageClient project={project} />;
}
