import { getFeaturedProjects } from "@/lib/content";
import FeaturedProjectsClient from "./FeaturedProjectsClient";

export default function FeaturedProjects() {
    const projects = getFeaturedProjects();

    // Transform to match the expected format
    const transformedProjects = projects.map((project, index) => ({
        id: index + 1,
        title: project.title,
        description: project.description,
        slug: project.slug,
        image: project.thumbnail || project.images[0] || "/placeholder.jpg",
        tags: project.tags.slice(0, 3), // Show first 3 tags
        category: project.category,
    }));

    return <FeaturedProjectsClient projects={transformedProjects} />;
}
