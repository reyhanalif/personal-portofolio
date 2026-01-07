import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import AboutPreview from "./components/AboutPreview";
import StoriesPreview from "./components/StoriesPreview";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
      <StoriesPreview />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-line bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-pencil">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
          <p className="text-pencil/60 text-sm mt-2">
            © 2024 Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
