"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <label className="relative inline-flex cursor-pointer items-center">
            <input
                checked={isDark}
                className="peer sr-only"
                onChange={() => setTheme(isDark ? "light" : "dark")}
                type="checkbox"
            />
            <div className="h-10 w-20 rounded-full bg-linear-to-r from-yellow-300 to-orange-400 transition-all duration-500 after:absolute after:top-1 after:left-1 after:flex after:h-8 after:w-8 after:items-center after:justify-center after:rounded-full after:bg-white after:text-lg after:shadow-md after:transition-all after:duration-500 after:content-['☀️'] peer-checked:from-blue-400 peer-checked:to-indigo-500 peer-checked:after:translate-x-10 peer-checked:after:content-['🌙']" />
        </label>
    );
}
