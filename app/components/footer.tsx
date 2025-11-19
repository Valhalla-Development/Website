"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const policyLinks = [
    {
        accent: "from-emerald-400/45 via-emerald-200/30 to-transparent",
        href: "https://status.valhalladev.org",
        label: "Status",
    },
    {
        accent: "from-rose-400/45 via-rose-200/30 to-transparent",
        href: "/privacy",
        label: "Privacy",
    },
    {
        accent: "from-sky-400/45 via-sky-200/30 to-transparent",
        href: "/terms",
        label: "Terms",
    },
];

const socialLinks = [
    {
        accent: "from-rose-400/50 via-amber-200/40 to-transparent",
        href: "https://github.com/Valhalla-Development",
        icon: (
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        ),
        label: "GitHub",
    },
    {
        accent: "from-sky-400/40 via-cyan-300/40 to-transparent",
        href: "https://discord.gg/Q3ZhdRJ",
        icon: (
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
        ),
        label: "Discord",
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted ? resolvedTheme === "dark" : false;

    return (
        <footer className="relative mt-12 px-6 pb-6 sm:px-8 sm:pb-8 lg:mt-20">
            <svg aria-hidden className="absolute" height="0" role="presentation" width="0">
                <defs>
                    <clipPath clipPathUnits="objectBoundingBox" id="footerSquircleClip">
                        <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
                    </clipPath>
                </defs>
                <title>Footer squircle clipping path</title>
            </svg>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/30 bg-linear-to-br from-white/90 via-rose-50/70 to-amber-50/60 p-5 text-foreground shadow-[0_20px_120px_rgba(0,0,0,0.15)] backdrop-blur-2xl sm:p-6 dark:border-white/10 dark:from-white/10 dark:via-white/5 dark:to-transparent">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/70 via-transparent to-rose-200/50 opacity-60 dark:from-white/10 dark:to-white/5"
                />
                <div className="relative flex flex-col items-center justify-between gap-4 font-medium text-foreground/70 text-sm sm:flex-row sm:gap-3">
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start sm:gap-x-6">
                        {policyLinks.map((link) => (
                            <Link
                                className="group hover:-translate-y-0.5 relative inline-flex items-center justify-center overflow-hidden rounded-full border border-zinc-900/15 bg-white px-4 py-1.5 font-semibold text-(--policy-link-text) text-sm shadow-[0_10px_35px_rgba(15,23,42,0.12)] transition-all duration-150 ease-out hover:border-zinc-900/30 hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/20 dark:bg-white/5 dark:text-(--policy-link-text) dark:focus-visible:ring-white/30 dark:focus-visible:ring-offset-zinc-950 dark:hover:border-white/40 dark:hover:bg-white/10"
                                href={link.href}
                                key={link.label}
                                rel="noreferrer noopener"
                                scroll={false}
                                target="_blank"
                            >
                                <span
                                    aria-hidden
                                    className="pointer-events-none absolute inset-0 rounded-full bg-zinc-900/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-white/15"
                                />
                                <span
                                    aria-hidden
                                    className={`pointer-events-none absolute inset-0 rounded-full bg-linear-to-r ${link.accent} opacity-0 blur-2xl transition duration-200 group-hover:opacity-100`}
                                />
                                <span className="group-hover:-translate-y-0.5 relative z-10 transition-all duration-150 group-hover:scale-[1.03]">
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <Link
                                aria-label={`Open ${social.label}`}
                                className="group relative block"
                                href={social.href}
                                key={social.label}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <div
                                    aria-hidden
                                    className={`pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br ${social.accent} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                                />
                                <div
                                    className="social-button relative flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg"
                                    style={{ clipPath: "url(#footerSquircleClip)" }}
                                >
                                    <svg
                                        className="h-7 w-7"
                                        fill="currentColor"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>{social.label}</title>
                                        {social.icon}
                                    </svg>
                                </div>
                            </Link>
                        ))}
                        <label
                            className="themeToggle st-sunMoonThemeToggleBtn relative flex h-12 w-12 cursor-pointer items-center justify-center"
                            htmlFor="themeToggle"
                            title={`Switch to ${isDark ? "light" : "dark"} mode`}
                        >
                            <input
                                checked={isDark}
                                className="themeToggleInput"
                                disabled={!mounted}
                                id="themeToggle"
                                onChange={() => setTheme(isDark ? "light" : "dark")}
                                type="checkbox"
                            />
                            <svg
                                fill="currentColor"
                                height="18"
                                stroke="none"
                                viewBox="0 0 20 20"
                                width="18"
                            >
                                <title>Theme toggle icon</title>
                                <mask id="moon-mask">
                                    <rect fill="white" height="20" width="20" x="0" y="0" />
                                    <circle cx="11" cy="3" fill="black" r="8" />
                                </mask>
                                <circle
                                    className="sunMoon"
                                    cx="10"
                                    cy="10"
                                    mask="url(#moon-mask)"
                                    r="8"
                                />
                                <g>
                                    <circle className="sunRay sunRay1" cx="18" cy="10" r="1.5" />
                                    <circle
                                        className="sunRay sunRay2"
                                        cx="14"
                                        cy="16.928"
                                        r="1.5"
                                    />
                                    <circle className="sunRay sunRay3" cx="6" cy="16.928" r="1.5" />
                                    <circle className="sunRay sunRay4" cx="2" cy="10" r="1.5" />
                                    <circle className="sunRay sunRay5" cx="6" cy="3.1718" r="1.5" />
                                    <circle
                                        className="sunRay sunRay6"
                                        cx="14"
                                        cy="3.1718"
                                        r="1.5"
                                    />
                                </g>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
            <p className="mt-6 text-center font-normal text-foreground/50 text-xs sm:mt-8">
                © {currentYear} Valhalla Development
            </p>
        </footer>
    );
}
