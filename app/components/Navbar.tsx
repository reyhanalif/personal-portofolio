"use client";

import { motion } from "framer-motion";
import { Home, FolderOpen, BookOpen, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", icon: Home, href: "/" },
        { name: "Projects", icon: FolderOpen, href: "/projects" },
        { name: "Stories", icon: BookOpen, href: "/stories" },
        { name: "About", icon: User, href: "/about" },
    ];

    return (
        <>
            {/* Desktop Navbar - Centered and Floating */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-50 w-auto"
            >
                <div className="backdrop-blur-lg bg-white/60 border border-line/50 rounded-full shadow-lg px-8 py-4">
                    <div className="flex items-center gap-8">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.href;

                            return (
                                <Link key={item.name} href={item.href}>
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        whileHover={{ y: -2, scale: 1.05 }}
                                        className={`flex items-center gap-2 transition-all duration-200 cursor-pointer ${isActive
                                            ? "text-ink font-bold"
                                            : "text-pencil hover:text-ink"
                                            }`}
                                    >
                                        <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                                        <span className="font-medium">{item.name}</span>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navbar - Bottom Fixed */}
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-bottom"
            >
                <div className="backdrop-blur-lg bg-white/80 border-t border-line/50 shadow-lg">
                    <div className="flex items-center justify-around px-4 py-3">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.href;

                            return (
                                <Link key={item.name} href={item.href}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`flex flex-col items-center gap-1 transition-all duration-200 cursor-pointer px-4 py-2 rounded-xl ${isActive
                                            ? "text-ink bg-ink/5"
                                            : "text-pencil"
                                            }`}
                                    >
                                        <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                                        <span className="text-xs font-medium">{item.name}</span>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </motion.nav>
        </>
    );
}
