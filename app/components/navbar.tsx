"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(true);

    const SCROLL_THRESHOLD = 0.05;
    const HIDDEN_Y_POSITION = -100;

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            const previous = scrollYProgress.getPrevious();
            if (previous === undefined) {
                return;
            }
            const direction = current - previous;
            const currentScroll = scrollYProgress.get();

            if (currentScroll < SCROLL_THRESHOLD) {
                setVisible(true);
            } else if (direction < 0) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
    });

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
                    y: HIDDEN_Y_POSITION,
                }}
                transition={{
                    duration: 0.2,
                }}
            >
                <div className="rounded-full border border-zinc-200 bg-white/90 px-6 py-3 shadow-md backdrop-blur supports-backdrop-filter:bg-white/60 dark:border-zinc-700 dark:bg-zinc-800/90">
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
