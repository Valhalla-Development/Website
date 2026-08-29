import type { ProjectCardProps } from "../components/project-card";

export const projects: ProjectCardProps[] = [
    {
        description:
            "The current website is built with Next.js, Tailwind, and Three.js-powered flourishes to share the story, highlight builds, and give you a single public point for Valhalla work.",
        links: [
            {
                href: "https://valhalladev.org",
                label: "Visit site",
            },
        ],
        repo: {
            href: "https://github.com/Valhalla-Development/ValhallaPortal",
        },
        subtitle: "Portfolio & hub",
        tech: ["Next.js", "React", "Tailwind CSS", "Three.js"],
        title: "Valhalla Portal",
    },
    {
        description:
            "Feature-rich Discord bot with economy, leveling, AI chat (OpenRouter) and server moderation tools.",
        repo: {
            href: "https://github.com/Valhalla-Development/Ragnarok",
        },
        subtitle: "A multi-purpose Discord bot",
        tech: ["TypeScript", "discord.js", "discordx", "OpenRouter"],
        title: "Ragnarok",
    },
    {
        description:
            "TypeScript library to fetch and work with movie and TV metadata. Use it in Node or the browser; ship it with your app.",
        npm: {
            href: "https://www.npmjs.com/package/@valhalladev/movier",
        },
        repo: {
            href: "https://github.com/Valhalla-Development/movier",
        },
        subtitle: "Movie & TV data library",
        tech: ["TypeScript", "TMDB"],
        title: "Movier",
    },
    {
        description:
            "Keeps your Discord status and activity keyed to whatever you are watching on Trakt so friends see the same show or movie you do.",
        repo: {
            href: "https://github.com/Valhalla-Development/TraktDiscordPresence",
        },
        subtitle: "Discord Rich Presence automation",
        tech: ["TypeScript", "Trakt API", "Discord RPC"],
        title: "TraktDiscordPresence",
    },
    {
        description:
            "Tracks scene release boards and immediately notifies Discord servers so fans never miss a drop.",
        repo: {
            href: "https://github.com/Valhalla-Development/PreWatch",
        },
        subtitle: "Scene release alerts",
        tech: ["TypeScript", "discord.js", "discordx"],
        title: "PreWatch",
    },
    {
        description:
            "Rust-backed API that manages YouTube downloads, cleanup, and file serving with a minimal web interface for monitoring progress.",
        repo: {
            href: "https://github.com/Valhalla-Development/Snatchr",
        },
        subtitle: "Video download API",
        tech: ["Rust", "Axum", "Tokio", "yt-dlp", "Docker"],
        title: "Snatchr",
    },
    {
        description:
            "discordx + discord.js v14 boilerplate with command logging, error channels, and hybrid sharding ready for fast bot launches.",
        repo: {
            href: "https://github.com/Valhalla-Development/ValkyrieCore",
        },
        subtitle: "Discord bot template",
        tech: ["TypeScript", "discord.js", "discordx"],
        title: "ValkyrieCore",
    },
    {
        description:
            "Watches Reddit RSS feeds and relays new posts to Discord channels with webhook-driven embeds and lightweight filtering.",
        repo: {
            href: "https://github.com/Valhalla-Development/RedditToDiscordNotifications",
        },
        subtitle: "Automation script",
        tech: ["TypeScript", "Reddit API", "Discord Webhooks"],
        title: "RedditToDiscordNotifications",
    },
    {
        description:
            "Monitors a directory for new files and automatically uploads them to your Zipline instance.",
        repo: {
            href: "https://github.com/Valhalla-Development/ZiplineAutoUpload",
        },
        subtitle: "Automation script",
        tech: ["Python"],
        title: "ZiplineAutoUpload",
    },
    {
        description:
            "Wire up an OpenAI Assistant in Discord with this bot that routes conversations through GPT models while staying chat-native.",
        repo: {
            href: "https://github.com/Valhalla-Development/DiscordGPT",
        },
        statusTag: { text: "Archived", variant: "archived" },
        subtitle: "Assistant bot",
        tech: ["TypeScript", "discord.js", "discordx", "OpenAI"],
        title: "DiscordGPT",
    },
    {
        description:
            "Community-focused Discord bot that keeps light moderation, playful commands, and server helpers within reach using discordx decorators.",
        repo: {
            href: "https://github.com/Valhalla-Development/Wilbur",
        },
        statusTag: { text: "Archived", variant: "archived" },
        subtitle: "Discord utility bot",
        tech: ["TypeScript", "discord.js", "discordx"],
        title: "Wilbur",
    },
    {
        description:
            "Legacy bot that monitored other bots and relayed their health graciously; code remains for glimpsing earlier experimentation.",
        repo: {
            href: "https://github.com/Valhalla-Development/TheSeer",
        },
        statusTag: { text: "Archived", variant: "archived" },
        subtitle: "Discord bot",
        tech: ["TypeScript", "discord.js", "discordx"],
        title: "The Seer",
    },
    {
        description:
            "Custom bot built for the Bigscreen VR community. The project is archived and remains a reference for immersive Discord integrations.",
        repo: {
            href: "https://github.com/Valhalla-Development/CineSquad",
        },
        statusTag: { text: "Archived", variant: "archived" },
        subtitle: "Discord bot",
        tech: ["TypeScript", "discord.js", "discordx"],
        title: "CineSquad",
    },
];
