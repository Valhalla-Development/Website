import type { Metadata } from "next";

type Section = {
    title: string;
    body: string[];
};

const lastUpdated = "November 14, 2025";

const sections: Section[] = [
    {
        title: "Introduction",
        body: [
            "Valhalla Development respects the trust that teams place in us when they share information. This Privacy Policy explains how we collect, use, and safeguard the data connected to this website.",
            "If you continue using the site, you consent to the practices described below.",
        ],
    },
    {
        title: "Information We Collect",
        body: [
            "When you browse the site we automatically receive technical details such as your IP address, browser type, device information, and referring URL. This helps us understand traffic patterns and troubleshoot issues.",
            "If you contact us directly, we collect the information you provide (typically your name, email address, and any context you add in your message).",
        ],
    },
    {
        title: "Use of Information",
        body: [
            "We analyze aggregated technical data to improve site performance, prioritize content, and prevent abuse.",
            "Contact information is used solely to respond to your inquiries, share updates you have requested, or follow up on opportunities to collaborate.",
        ],
    },
    {
        title: "Disclosure of Information",
        body: [
            "We share information only with trusted service providers that help us operate the website or deliver communications on our behalf, and they are required to protect your data.",
            "We may also disclose information if legally required or if we believe it is necessary to prevent harm or protect our rights or the rights of others.",
        ],
    },
    {
        title: "Security",
        body: [
            "Safeguarding data is part of what we build every day. We implement administrative, technical, and physical measures designed to protect personal information.",
            "No security practice is infallible, so we encourage you to contact us immediately if you suspect unauthorized activity related to your data.",
        ],
    },
    {
        title: "Changes to this Privacy Policy",
        body: [
            "We update this policy when our practices evolve or regulations shift. The “Last updated” date reflects the latest version.",
            "If the changes are material, we will highlight them here so you can easily review what’s new.",
        ],
    },
];

export const metadata: Metadata = {
    title: "Privacy Policy | Valhalla Development",
    description: "Learn how Valhalla Development collects, uses, and protects your data.",
};

export default function PrivacyPage() {
    return (
        <div className="relative min-h-screen text-foreground">
            <main className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 pt-20 pb-24 lg:pt-24">
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
                        This policy explains exactly how your data is treated when you visit or
                        collaborate with Valhalla Development.
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

                <section className="rounded-3xl border border-foreground/10 bg-linear-to-r from-sky-500/5 via-background/70 to-background/30 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.1)]">
                    <p className="text-foreground/55 text-xs uppercase tracking-[0.4em]">
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
            </main>
        </div>
    );
}
