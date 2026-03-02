import type { Metadata } from "next";

interface Section {
    body: string[];
    title: string;
}

const lastUpdated = "February 17, 2026";

const sections: Section[] = [
    {
        title: "Introduction",
        body: [
            `Ragnarok ("the Bot") is a Discord bot built by Valhalla Development. By inviting, using, or interacting with the Bot in any Discord server, you agree to these Terms of Service ("Terms") and confirm that you will comply with all applicable laws and Discord's Terms of Service and Developer Policy.`,
            "If you disagree with any portion of these Terms, please remove the Bot from your server and refrain from using it. Continued use signifies your acceptance of the most current version.",
        ],
    },
    {
        title: "Discord Terms and Policies",
        body: [
            "Use of the Bot is subject to Discord's Terms of Service and Developer Policy. You must use Discord in accordance with those terms. We do not control Discord and are not responsible for Discord's services or policies.",
            "By using the Bot, you represent that you have the authority to add bots to the servers you manage and that your use complies with Discord's rules and your server's own guidelines.",
        ],
    },
    {
        title: "Prohibited Conduct",
        body: [
            "Do not use the Bot to harass, abuse, spam, or harm other users. Do not attempt to exploit, reverse-engineer, or abuse the Bot's features (including but not limited to economy commands, leveling, or AI chat) in ways that degrade service, circumvent limits, or unfairly disadvantage others.",
            "Attempting to gain unauthorized access to the Bot, its data, or related systems; impersonating the Bot or its operator; or using the Bot to distribute malware, illegal content, or content that violates Discord's Terms is strictly prohibited.",
        ],
    },
    {
        title: "Limitation of Liability",
        body: [
            'The Bot and all features are provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding accuracy, reliability, availability, or fitness for a particular purpose.',
            "To the fullest extent permitted by law, Valhalla Development, its team, and collaborators are not responsible for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Bot, including but not limited to lost economy data, AI output, or service interruptions.",
        ],
    },
    {
        title: "Intellectual Property",
        body: [
            "All original content, code, designs, and creative direction of the Bot remain the exclusive property of Valhalla Development. The Bot's name and branding may not be used to imply endorsement or affiliation without permission.",
            "User-generated content (e.g., messages sent to the AI, custom configs) remains yours; by using the Bot you grant us a license to process and store that content as necessary to provide the service, as described in our Privacy Policy.",
        ],
    },
];

export const metadata: Metadata = {
    title: "Terms of Service | Ragnarok",
    description: "Terms governing the use of the Ragnarok Discord bot.",
};

export default function TermsPage() {
    return (
        <div className="relative min-h-screen text-foreground">
            <main className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 pt-20 lg:pt-24">
                <header className="space-y-6">
                    <div>
                        <p className="text-foreground/60 text-xs uppercase tracking-[0.35em]">
                            Legal
                        </p>
                        <h1 className="mt-4 text-balance font-semibold text-4xl tracking-tight sm:text-5xl">
                            Terms of Service
                        </h1>
                    </div>
                    <p className="text-foreground/75 text-lg leading-relaxed">
                        These guidelines outline the rules and expectations for using the Ragnarok
                        Discord bot. By using the Bot, you agree to these terms.
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
                                    <div className="h-full w-full bg-linear-to-r from-foreground/5 via-transparent to-foreground/5" />
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
                                        {section.body.map((paragraph, paragraphIndex) => (
                                            <p key={`${section.title}-${paragraphIndex}`}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="rounded-3xl border border-foreground/10 bg-linear-to-r from-foreground/5 via-background/70 to-background/30 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.1)]">
                    <p className="text-foreground/55 text-xs uppercase tracking-[0.4em]">
                        Contact us
                    </p>
                    <h3 className="mt-4 font-semibold text-2xl">Need clarity on anything?</h3>
                    <p className="mt-3 text-base text-foreground/80 leading-relaxed">
                        Reach out anytime at{" "}
                        <a
                            className="text-foreground underline underline-offset-4 transition hover:text-foreground/80"
                            href="mailto:ragnarlothbrokjr@proton.me"
                        >
                            ragnarlothbrokjr@proton.me
                        </a>{" "}
                        and we will respond as quickly as we can.
                    </p>
                </section>
            </main>
        </div>
    );
}
