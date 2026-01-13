import { getAllProjects, getAllStories } from '@/lib/content';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const projects = await getAllProjects();
    const stories = await getAllStories();

    const baseUrl = 'https://pradityora.vercel.app';

    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(project.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const storyUrls = stories.map((story) => ({
        url: `${baseUrl}/stories/${story.slug}`,
        lastModified: new Date(story.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/stories`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...projectUrls,
        ...storyUrls,
    ];
}
