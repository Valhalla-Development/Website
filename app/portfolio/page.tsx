import ProjectCard, { type ProjectCardProps } from "../components/project-card";

const projects: ProjectCardProps[] = [
    {
        title: "Valhalla Development Website",
        subtitle: "Portfolio & hub",
        description:
            "The current website is built with Next.js, Tailwind, and Three.js-powered flourishes to share the story, highlight builds, and give you a single public point for Valhalla work.",
        tech: ["Next.js", "React", "Tailwind CSS", "Three.js"],
        repo: {
            href: "https://github.com/Valhalla-Development/Website",
        },
    },
    {
        title: "TraktDiscordPresence",
        subtitle: "Discord Rich Presence automation",
        description:
            "Keeps your Discord status and activity keyed to whatever you are watching on Trakt so friends see the same show or movie you do.",
        tech: ["TypeScript", "Trakt API", "Discord RPC"],
        repo: {
            href: "https://github.com/Valhalla-Development/TraktDiscordPresence",
        },
    },
    {
        title: "PM2 Pilot",
        subtitle: "Self-hosted PM2 dashboard",
        description:
            "SvelteKit, TypeScript, and Tailwind CSS combine to deliver a lightweight web UI for watching PM2 processes, logs, and deployments in private environments.",
        tech: ["TypeScript", "SvelteKit", "Tailwind CSS", "PM2"],
        repo: {
            href: "https://github.com/Valhalla-Development/PM2Pilot",
        },
        statusTag: { text: "WIP", variant: "wip" },
    },
    {
        title: "Wilbur",
        subtitle: "Discord utility bot",
        description:
            "Community-focused Discord bot that keeps light moderation, playful commands, and server helpers within reach using discordx decorators.",
        tech: ["TypeScript", "discord.js", "discordx"],
        repo: {
            href: "https://github.com/Valhalla-Development/Wilbur",
        },
    },
    {
        title: "DiscordGPT",
        subtitle: "Assistant bot",
        description:
            "Wire up an OpenAI Assistant in Discord with this bot that routes conversations through GPT models while staying chat-native.",
        tech: ["TypeScript", "discord.js", "discordx", "OpenAI"],
        repo: {
            href: "https://github.com/Valhalla-Development/DiscordGPT",
        },
    },
    {
        title: "PreWatch",
        subtitle: "Scene release alerts",
        description:
            "Tracks scene release boards and immediately notifies Discord servers so fans never miss a drop.",
        tech: ["TypeScript", "discord.js", "discordx"],
        repo: {
            href: "https://github.com/Valhalla-Development/PreWatch",
        },
    },
    {
        title: "Snatchr",
        subtitle: "Video download API",
        description:
            "Rust-backed API that manages YouTube downloads, cleanup, and file serving with a minimal web interface for monitoring progress.",
        tech: ["Rust", "Axum", "Tokio", "yt-dlp", "Docker"],
        repo: {
            href: "https://github.com/Valhalla-Development/Snatchr",
        },
    },
    {
        title: "ValkyrieCore",
        subtitle: "Discord bot template",
        description:
            "discordx + discord.js v14 boilerplate with command logging, error channels, and hybrid sharding ready for fast bot launches.",
        tech: ["TypeScript", "discord.js", "discordx"],
        repo: {
            href: "https://github.com/Valhalla-Development/ValkyrieCore",
        },
    },
    {
        title: "RedditToDiscordNotifications",
        subtitle: "Automation script",
        description:
            "Watches Reddit RSS feeds and relays new posts to Discord channels with webhook-driven embeds and lightweight filtering.",
        tech: ["TypeScript", "Reddit API", "Discord Webhooks"],
        repo: {
            href: "https://github.com/Valhalla-Development/RedditToDiscordNotifications",
        },
    },
    {
        title: "ZiplineAutoUpload",
        subtitle: "Automation script",
        description:
            "Monitors a directory for new files and automatically uploads them to your Zipline instance.",
        tech: ["Python"],
        repo: {
            href: "https://github.com/Valhalla-Development/ZiplineAutoUpload",
        },
    },
    {
        title: "The Seer",
        subtitle: "Discord bot",
        description:
            "Legacy bot that monitored other bots and relayed their health graciously; code remains for glimpsing earlier experimentation.",
        tech: ["TypeScript", "discord.js", "discordx"],
        repo: {
            href: "https://github.com/Valhalla-Development/TheSeer",
        },
        statusTag: { text: "Archived", variant: "archived" },
    },
    {
        title: "CineSquad",
        subtitle: "Discord bot",
        description:
            "Custom bot built for the Bigscreen VR community. The project is archived, but remains a solid reference for immersive Discord integrations. The README labels it as WIP, though the bot was fully completed prior to archival.",
        tech: ["TypeScript", "discord.js", "discordx"],
        repo: {
            href: "https://github.com/Valhalla-Development/CineSquad",
        },
        statusTag: { text: "Archived", variant: "archived" },
    },
];

export default function Portfolio() {
    return (
        <div className="relative min-h-screen bg-background text-foreground">
            <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-20 lg:pt-24">
                <section className="grid gap-12 lg:grid-cols-[1.5fr,1fr]">
                    <div>
                        <p className="text-foreground/60 text-sm uppercase tracking-[0.35em]">
                            Valhalla Development
                        </p>
                        <h1 className="mt-4 text-balance font-semibold text-4xl tracking-tight sm:text-5xl">
                            Real-time automation, media tooling, and Discord-native builds
                        </h1>
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="grid gap-6 lg:grid-cols-2">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
