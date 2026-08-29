import type { Metadata } from "next";
import DiscordWidget from "../components/discord-widget";

export const metadata: Metadata = {
    description: "Reach Valhalla Development by Discord or email.",
    title: "Contact",
};

export default function ContactPage() {
    return (
        <div className="relative min-h-screen text-foreground">
            <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 pt-20 lg:pt-24">
                <header className="space-y-6">
                    <div>
                        <p className="text-foreground/70 text-xs uppercase tracking-[0.35em]">
                            Contact
                        </p>
                        <h1 className="mt-4 text-balance font-semibold text-4xl tracking-tight sm:text-5xl">
                            How to reach us
                        </h1>
                    </div>
                    <p className="max-w-2xl text-foreground/80 text-lg leading-relaxed">
                        Discord is the fastest way to talk to the studio. Mail is better for
                        privacy, press, or anything that should not live in a server.
                    </p>
                </header>

                <section className="grid gap-6 lg:grid-cols-[minmax(0,22rem),1fr]">
                    <article className="overflow-hidden rounded-3xl border border-foreground/10 bg-background/85 shadow-[0_25px_80px_rgba(0,0,0,0.1)]">
                        <DiscordWidget />
                    </article>
                    <article className="rounded-3xl border border-foreground/10 bg-background/85 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.1)]">
                        <p className="text-foreground/70 text-xs uppercase tracking-[0.4em]">
                            Mail
                        </p>
                        <h2 className="mt-4 font-semibold text-2xl">Write to the studio</h2>
                        <p className="mt-3 text-base text-foreground/80 leading-relaxed">
                            Privacy questions and anything that should stay off Discord.
                        </p>
                        <a
                            className="mt-6 inline-flex items-center justify-center rounded-full border border-foreground/20 bg-background px-6 py-3 font-semibold text-foreground text-sm transition hover:bg-foreground/5"
                            href="mailto:ragnarlothbrokjr@proton.me"
                        >
                            ragnarlothbrokjr@proton.me
                        </a>
                    </article>
                </section>
            </div>
        </div>
    );
}
