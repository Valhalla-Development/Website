"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const GUILD_ID = "495602800802398212";

export default function DiscordWidget() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const theme = mounted && resolvedTheme === "light" ? "light" : "dark";

    return (
        <iframe
            allowTransparency
            className="h-[500px] w-full rounded-2xl bg-transparent"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            src={`https://discord.com/widget?id=${GUILD_ID}&theme=${theme}`}
            title="Valhalla Development Discord"
        />
    );
}
