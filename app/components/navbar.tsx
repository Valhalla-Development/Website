"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [visible, setVisible] = useState(true);
    const lastScrollYRef = useRef(0);

    const SCROLL_THRESHOLD = 50;
    const HIDDEN_Y_POSITION = -100;

    // Hide/show navbar based on manual scroll position and direction
    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY || 0;
            const last = lastScrollYRef.current;

            if (current < SCROLL_THRESHOLD) {
                setVisible(true);
            } else if (current > last) {
                // Scrolling down
                setVisible(false);
            } else {
                // Scrolling up
                setVisible(true);
            }

            lastScrollYRef.current = current;
        };

        // Initialize on mount so first load has a correct state
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Ensure navbar is visible whenever the route changes and reset scroll tracking
    useEffect(() => {
        setVisible(true);
        if (typeof window !== "undefined") {
            lastScrollYRef.current = window.scrollY || 0;
        }
    }, [pathname]);

    const links = [
        { href: "/", label: "Home" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <AnimatePresence mode="wait">
            <motion.nav
                animate={{
                    y: visible ? 0 : HIDDEN_Y_POSITION,
                    opacity: visible ? 1 : 0,
                }}
                className="-translate-x-1/2 fixed top-6 left-1/2 z-50"
                initial={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.2,
                }}
            >
                <div className="rounded-full border border-zinc-200/20 px-6 py-3 backdrop-blur-sm dark:border-zinc-700/20">
                    <div className="flex items-center justify-center gap-8">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    className={`relative transition-colors ${
                                        isActive ? "font-medium" : "opacity-70 hover:opacity-100"
                                    }`}
                                    href={link.href}
                                    key={link.href}
                                >
                                    <span className="relative z-10">{link.label}</span>
                                    {isActive && (
                                        <span className="-bottom-1 absolute inset-x-0 mx-auto h-px w-full bg-linear-to-r from-transparent via-red-500 to-transparent" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </motion.nav>
        </AnimatePresence>
    );
}
