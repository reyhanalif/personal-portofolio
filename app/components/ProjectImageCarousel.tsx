"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface ProjectImageCarouselProps {
    images: string[];
}

export default function ProjectImageCarousel({ images }: ProjectImageCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollImages = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth;
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            });
        }
    };

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 relative"
        >
            <div className="relative group">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 hide-scrollbar scroll-smooth"
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="min-w-full h-96 bg-gradient-to-br from-pencil/10 to-ink/5 rounded-2xl border border-line flex items-center justify-center overflow-hidden snap-start flex-shrink-0 relative bg-cover bg-center"
                            style={image && !image.endsWith('placeholder.jpg') ? { backgroundImage: `url(${image})` } : {}}
                        >
                            {(!image || image.endsWith('placeholder.jpg')) && (
                                <span className="text-6xl text-pencil/30 font-bold">Image {index + 1}</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => scrollImages("left")}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm border border-line rounded-full shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                            <ChevronLeft size={24} className="text-ink" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => scrollImages("right")}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur-sm border border-line rounded-full shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                            <ChevronRight size={24} className="text-ink" />
                        </motion.button>
                    </>
                )}

                {/* Dots Indicator */}
                {images.length > 1 && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full bg-ink/30"
                            />
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
