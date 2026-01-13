import { getAllStories } from "@/lib/content";
import StoriesClient from "./StoriesClient";

export default async function StoriesPage() {
    const stories = await getAllStories();
    return <StoriesClient stories={stories} />;
}
