import type { Metadata } from "next";

interface Section {
    body: string[];
    title: string;
}

const lastUpdated = "February 17, 2026";

const sections: Section[] = [
    {
        body: [
            'Valhalla Development operates Ragnarok ("the Bot"), a Discord bot. This Privacy Policy explains how we collect, use, store, and protect data when you use the Bot. By inviting or using the Bot, you consent to the practices described below.',
        ],
        title: "Introduction",
    },
    {
        body: [
            "The Bot receives and stores data necessary to operate its features. This includes: Discord user IDs and server (guild) IDs when you interact with the Bot; economy data such as balances, bank amounts, items, farm plots, and cooldowns; experience points and levels; AI usage statistics (query counts, whitelist/blacklist status, persona settings); AI chat conversation history when you use the AI chat feature; birthday information you provide; and server-specific configuration (e.g., welcome messages, logging, starboard, role menus).",
            "This data is stored in a database and is associated with your Discord identity and the servers where you use the Bot. We do not collect your email address or real-world identity unless you provide it to us directly (e.g., via email support).",
        ],
        title: "Information We Collect",
    },
    {
        body: [
            "We use the collected data to provide and improve the Bot's features, including economy, leveling, AI chat, birthdays, and server moderation tools. AI chat messages and conversation history are processed to generate responses; this processing is performed by third-party AI services (see Third-Party Services below).",
            "We may use aggregated, anonymized data for internal analytics or to improve the Bot. We do not sell your personal data.",
        ],
        title: "How We Use Your Information",
    },
    {
        body: [
            "The Bot uses OpenRouter to power its AI chat feature. When you use AI chat, your prompts and conversation history are sent to OpenRouter for processing. OpenRouter's privacy policy governs how they handle that data. We also store data in MongoDB and interact with the Discord API. These services have their own privacy and data handling practices.",
            "We share data only as necessary to operate the Bot. We do not sell or rent your data to third parties for marketing or other purposes.",
        ],
        title: "Third-Party Services",
    },
    {
        body: [
            "When the Bot is removed from a Discord server, we automatically delete server-specific configuration data (e.g., welcome, logging, starboard, role menu settings) for that server. However, user-level data such as economy balances, levels, AI chat history, and birthdays may persist in our database because it is tied to your Discord user ID across servers.",
            "You can clear your AI chat history using the Bot's /queries command. Server administrators can clear all AI history for their server via the /config command. To request deletion of your data, contact us at the email below. We will process deletion requests within a reasonable timeframe.",
        ],
        title: "Data Retention and Deletion",
    },
    {
        body: [
            "We implement administrative and technical measures to protect your data. Access to stored data is restricted and we use industry-standard practices where applicable. No security practice is infallible; if you suspect unauthorized access or a data incident, please contact us immediately.",
        ],
        title: "Security",
    },
    {
        body: [
            'We may update this policy when our practices evolve or regulations change. The "Last updated" date reflects the latest version. Material changes will be highlighted so you can review what\'s new. Continued use of the Bot after changes constitutes acceptance of the updated policy.',
        ],
        title: "Changes to this Privacy Policy",
    },
];

export const metadata: Metadata = {
    description: "Learn how Ragnarok collects, uses, and protects your data.",
    title: "Privacy Policy | Ragnarok",
};

export default function PrivacyPage() {
    return (
        <div className="relative min-h-screen text-foreground">
            <main className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 pt-20 lg:pt-24">
                <header className="space-y-6">
                    <div>
                        <p className="text-foreground/60 text-xs uppercase tracking-[0.35em]">
                            Privacy
                        </p>
                        <h1 className="mt-4 text-balance font-semibold text-4xl tracking-tight sm:text-5xl">
                            Privacy Policy
                        </h1>
                    </div>
                    <p className="text-foreground/75 text-lg leading-relaxed">
                        Transparency is part of the promise we make to the communities we work with.
                        This policy explains how your data is collected, used, and protected when
                        you use the Ragnarok Discord bot.
                    </p>
                    <p className="text-foreground/55 text-sm">Last updated: {lastUpdated}</p>
                </header>

                <section className="rounded-[36px] border border-foreground/10 bg-background/85 shadow-[0_25px_90px_rgba(0,0,0,0.1)]">
                    <div className="divide-y divide-foreground/10">
                        {sections.map((section, index) => (
                            <article
                                className="group relative overflow-hidden px-6 py-8 transition duration-300 sm:px-10"
                                key={section.title}
                            >
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="h-full w-full bg-linear-to-r from-sky-500/5 via-transparent to-violet-500/10" />
                                </div>
                                <div className="relative space-y-4">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <span className="font-mono text-foreground/50 text-xs uppercase tracking-[0.4em]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h2 className="font-semibold text-2xl tracking-tight">
                                            {section.title}
                                        </h2>
                                    </div>
                                    <div className="space-y-4 text-base text-foreground/75 leading-relaxed">
                                        {section.body.map((paragraph) => (
                                            <p key={`${section.title}-${paragraph}`}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="rounded-3xl border border-foreground/10 bg-linear-to-r from-sky-500/5 via-background/70 to-background/30 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.1)]">
                    <p className="text-foreground/55 text-xs uppercase tracking-[0.4em]">
                        Contact us
                    </p>
                    <h3 className="mt-4 font-semibold text-2xl">Questions about your privacy?</h3>
                    <p className="mt-3 text-base text-foreground/80 leading-relaxed">
                        If you have questions about this Privacy Policy, want to request deletion of
                        your data, or have concerns, contact us at{" "}
                        <a
                            className="text-foreground underline underline-offset-4 transition hover:text-foreground/80"
                            href="mailto:ragnarlothbrokjr@proton.me"
                        >
                            ragnarlothbrokjr@proton.me
                        </a>
                        .
                    </p>
                </section>
            </main>
        </div>
    );
}
