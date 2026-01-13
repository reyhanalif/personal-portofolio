import { getStoryBySlug, getAllStorySlugs, getAllStories } from "@/lib/content";
import { notFound } from "next/navigation";
import StoryPageClient from "./StoryPageClient";

export async function generateStaticParams() {
    const slugs = getAllStorySlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const story = await getStoryBySlug(slug);

    if (!story) {
        notFound();
    }

    // Get recommended stories (excluding current one)
    const allStories = await getAllStories();
    const recommendations = allStories
        .filter(s => s.slug !== slug)
        .slice(0, 3);

    return <StoryPageClient story={story} recommendations={recommendations} />;
}
