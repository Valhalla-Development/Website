import type { Metadata } from "next";

interface Section {
    body: string[];
    title: string;
}

const lastUpdated = "August 29, 2026";

const sections: Section[] = [
    {
        body: [
            "This policy covers the valhalladev.org website only. It does not cover Discord bots or other products unless a page says so.",
            "If you keep using the site, you are agreeing to what is written here.",
        ],
        title: "Introduction",
    },
    {
        body: [
            "We do not run first-party analytics or advertising trackers on this site.",
            "Your browser still sends ordinary request data — IP address, user agent, and the page you asked for — to whoever hosts or proxies the site, including Cloudflare. Those logs exist so the site can be served and kept online.",
            "If you email us, we keep what you send so we can reply.",
        ],
        title: "Information We Collect",
    },
    {
        body: [
            "Host and CDN logs are used to run and protect the website, not to build marketing profiles.",
            "Mail is used only to answer you.",
        ],
        title: "Use of Information",
    },
    {
        body: [
            "Hosting and CDN providers see the request data needed to deliver pages. We do not sell personal information.",
            "We may share information if the law requires it, or if we need to stop harm or defend our rights.",
        ],
        title: "Disclosure of Information",
    },
    {
        body: [
            "You can ask what contact mail we hold, or ask us to delete it, by writing to the address below.",
            "CDN and host logs stay only as long as those providers keep them.",
        ],
        title: "Your Rights",
    },
    {
        body: [
            "We take reasonable steps to keep mail and account access to the site under control.",
            "No setup is perfect. Write to us if you think something has gone wrong.",
        ],
        title: "Security",
    },
    {
        body: [
            "We update this policy when the site or the law changes. The date at the top is the latest version.",
        ],
        title: "Changes to this Privacy Policy",
    },
];

export const metadata: Metadata = {
    description: "Learn how Valhalla Development collects, uses, and protects your data.",
    title: "Privacy Policy",
};

export default function PrivacyPage() {
    return (
        <div className="relative min-h-screen text-foreground">
            <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 pt-20 lg:pt-24">
                <header className="space-y-6">
                    <div>
                        <p className="text-foreground/70 text-xs uppercase tracking-[0.35em]">
                            Privacy
                        </p>
                        <h1 className="mt-4 text-balance font-semibold text-4xl tracking-tight sm:text-5xl">
                            Privacy Policy
                        </h1>
                    </div>
                    <p className="text-foreground/75 text-lg leading-relaxed">
                        Transparency is part of the promise we make to the communities we work with.
                        This policy explains exactly how your data is treated when you visit or
                        collaborate with Valhalla Development.
                    </p>
                    <p className="text-foreground/70 text-sm">Last updated: {lastUpdated}</p>
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
                                        <span className="font-mono text-foreground/70 text-xs uppercase tracking-[0.4em]">
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
                    <p className="text-foreground/70 text-xs uppercase tracking-[0.4em]">
                        Contact us
                    </p>
                    <h3 className="mt-4 font-semibold text-2xl">Questions about your privacy?</h3>
                    <p className="mt-3 text-base text-foreground/80 leading-relaxed">
                        If you have any questions or concerns about this Privacy Policy, please
                        contact us at{" "}
                        <a
                            className="text-foreground underline underline-offset-4 transition hover:text-foreground/80"
                            href="mailto:ragnarlothbrokjr@proton.me"
                        >
                            ragnarlothbrokjr@proton.me
                        </a>
                        .
                    </p>
                </section>
            </div>
        </div>
    );
}
