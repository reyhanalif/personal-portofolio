import { getAllStories } from "@/lib/content";
import StoriesPreviewClient from "./StoriesPreviewClient";

export default async function StoriesPreview() {
    const allStories = await getAllStories();
    const recentStories = allStories.slice(0, 3);

    return <StoriesPreviewClient stories={recentStories} />;
}
