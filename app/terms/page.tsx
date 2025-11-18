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
            `Valhalla Development builds digital infrastructure meant to feel personal, reliable, and human. By visiting or using our website, you agree to these Terms of Service ("Terms") and confirm that you will comply with all applicable laws.`,
            "If you disagree with any portion of these Terms, please refrain from accessing the site. Continued use signifies your acceptance of the most current version.",
        ],
    },
    {
        title: "Changes to These Terms",
        body: [
            "We iterate quickly and may adjust both our products and these Terms to reflect new capabilities or legal requirements.",
            "Whenever we update the Terms we will revise the “Last updated” date above, and your ongoing use of the site constitutes acceptance of the revised language.",
        ],
    },
    {
        title: "Prohibited Conduct",
        body: [
            "Do not use the website in a way that could degrade performance, interrupt service, or interfere with another person’s experience.",
            "Attempting to gain unauthorized access, scraping beyond reasonable use, probing for vulnerabilities, or misrepresenting your identity when interacting with us is strictly prohibited.",
        ],
    },
    {
        title: "Limitation of Liability",
        body: [
            "The website and all content are provided on an “as is” and “as available” basis. We make no warranties, express or implied, regarding accuracy, reliability, or availability.",
            "To the fullest extent permitted by law, Valhalla Development, its team, and collaborators are not responsible for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website.",
        ],
    },
    {
        title: "Intellectual Property",
        body: [
            "All original content, designs, code, trademarks, and creative direction published on this site remain the exclusive property of Valhalla Development.",
            "You may not copy, modify, distribute, or otherwise exploit our materials without prior written permission. Any approved use must retain our attribution and existing notices.",
        ],
    },
];

export const metadata: Metadata = {
    title: "Terms of Service | Valhalla Development",
    description: "Understand the guidelines governing the use of Valhalla Development's website.",
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
                        These guidelines outline the rules and expectations that keep Valhalla
                        Development welcoming, transparent, and safe for everyone who spends time
                        here.
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
