"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="-translate-x-1/2 fixed top-6 left-1/2 z-50">
            <div className="rounded-full border border-zinc-200 bg-white/90 px-6 py-3 shadow-md backdrop-blur supports-backdrop-filter:bg-white/60 dark:border-zinc-800 dark:bg-zinc-900/90">
                <div className="flex items-center justify-center gap-8">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                className={`relative transition-colors ${
                                    isActive
                                        ? "font-medium text-zinc-900 dark:text-zinc-50"
                                        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                                }`}
                                href={link.href}
                                key={link.href}
                            >
                                <span className="relative z-10">{link.label}</span>
                                {isActive && (
                                    <span className="-bottom-1 absolute inset-x-0 mx-auto h-px w-full bg-linear-to-r from-transparent via-blue-500 to-transparent" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
