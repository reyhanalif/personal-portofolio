import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'content/projects');
const storiesDirectory = path.join(process.cwd(), 'content/stories');

// Convert markdown to HTML and fix image paths
async function markdownToHtml(markdown: string, contentPath: string): Promise<string> {
    const result = await remark().use(html).process(markdown);
    let htmlContent = result.toString();

    // Convert relative image paths to use the content route
    htmlContent = htmlContent.replace(
        /<img src="(?!http)([^"]+)"/g,
        (match, src) => {
            const cleanSrc = src.replace(/^\.?\//, '');
            const imagePath = `/content/${contentPath}/${cleanSrc}`;
            return `<img src="${imagePath}"`;
        }
    );

    return htmlContent;
}

export interface ProjectMetadata {
    title: string;
    slug: string;
    description: string;
    category: 'model' | 'data-analytics';
    tags: string[];
    date: string;
    duration?: string;
    role?: string;
    featured: boolean;
    images: string[];
    thumbnail?: string;
    githubUrl?: string;
    liveUrl?: string;
}

export interface Project extends ProjectMetadata {
    content: string;
}

export interface StoryMetadata {
    title: string;
    slug: string;
    emoji: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: number;
    coverImage?: string;
}

export interface Story extends StoryMetadata {
    content: string;
}

// Get all project slugs
export function getAllProjectSlugs(): string[] {
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const folders = fs.readdirSync(projectsDirectory);
    return folders.filter(folder => {
        const folderPath = path.join(projectsDirectory, folder);
        return fs.statSync(folderPath).isDirectory();
    });
}

// Get all story slugs
export function getAllStorySlugs(): string[] {
    if (!fs.existsSync(storiesDirectory)) {
        return [];
    }

    const folders = fs.readdirSync(storiesDirectory);
    return folders.filter(folder => {
        const folderPath = path.join(storiesDirectory, folder);
        return fs.statSync(folderPath).isDirectory();
    });
}

// Get project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
    try {
        const projectPath = path.join(projectsDirectory, slug, 'index.md');

        if (!fs.existsSync(projectPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(projectPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Convert markdown to HTML with correct image paths
        const contentPath = `projects/${slug}`;
        const htmlContent = await markdownToHtml(content, contentPath);

        // Process image paths to be relative to the project folder
        const images = (data.images || []).map((img: string) =>
            `/content/projects/${slug}/${img}`
        );

        // Process thumbnail path
        const thumbnail = data.thumbnail
            ? `/content/projects/${slug}/${data.thumbnail}`
            : undefined;

        return {
            ...(data as ProjectMetadata),
            slug, // Essential: override with folder name
            images,
            thumbnail,
            content: htmlContent,
        };
    } catch (error) {
        console.error(`Error reading project ${slug}:`, error);
        return null;
    }
}

// Get story by slug
export async function getStoryBySlug(slug: string): Promise<Story | null> {
    try {
        const storyPath = path.join(storiesDirectory, slug, 'index.md');

        if (!fs.existsSync(storyPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(storyPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Convert markdown to HTML with correct image paths
        const contentPath = `stories/${slug}`;
        const htmlContent = await markdownToHtml(content, contentPath);

        // Process cover image path
        const coverImage = data.coverImage
            ? `/content/stories/${slug}/${data.coverImage}`
            : undefined;

        return {
            ...(data as StoryMetadata),
            slug, // Essential: override with folder name
            coverImage,
            content: htmlContent,
        };
    } catch (error) {
        console.error(`Error reading story ${slug}:`, error);
        return null;
    }
}

// Get all projects
export async function getAllProjects(): Promise<Project[]> {
    const slugs = getAllProjectSlugs();
    const projects = await Promise.all(
        slugs.map(slug => getProjectBySlug(slug))
    );
    
    return projects
        .filter((project): project is Project => project !== null)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get all stories
export async function getAllStories(): Promise<Story[]> {
    const slugs = getAllStorySlugs();
    const stories = await Promise.all(
        slugs.map(slug => getStoryBySlug(slug))
    );
    
    return stories
        .filter((story): story is Story => story !== null)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get featured projects
export async function getFeaturedProjects(): Promise<Project[]> {
    const projects = await getAllProjects();
    return projects.filter(project => project.featured);
}
