import type { Metadata } from "next";
import DiscordMark from "../components/discord-mark";
import { issueKey, readKey } from "../lib/api-keys";
import { authConfigured, readSession } from "../lib/session";
import KeyClient from "./key-client";

export const metadata: Metadata = {
    description: "Sign in with Discord to get a Bearer token for the Valhalla API.",
    title: "API key",
};

const errors: Record<string, string> = {
    config: "Key sign-in is not configured on this host.",
    oauth: "Discord sign-in failed. Try again.",
};

export default async function KeyPage({
    searchParams,
}: {
    searchParams: Promise<{ error?: string }>;
}) {
    const { error } = await searchParams;
    const session = authConfigured() ? await readSession() : null;
    let issued =
        session && process.env.MongoUri ? await readKey(session.discordId).catch(() => null) : null;
    if (session && process.env.MongoUri && !issued) {
        issued = await issueKey(session.discordId).catch(() => null);
    }

    return (
        <div className="relative min-h-screen text-foreground">
            <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 pt-20 lg:pt-24">
                <header className="space-y-6">
                    <div>
                        <p className="text-foreground/70 text-xs uppercase tracking-[0.35em]">
                            API
                        </p>
                        <h1 className="mt-4 text-balance font-semibold text-4xl tracking-tight sm:text-5xl">
                            Get an API key
                        </h1>
                    </div>
                    <p className="max-w-2xl text-foreground/80 text-lg leading-relaxed">
                        Every /v1 route on{" "}
                        <a
                            className="underline underline-offset-4"
                            href="https://api.valhalladev.org/docs"
                            rel="noreferrer"
                            target="_blank"
                        >
                            api.valhalladev.org
                        </a>{" "}
                        needs a Bearer token. Sign in with Discord OAuth, or email us at{" "}
                        <a
                            className="underline underline-offset-4"
                            href="mailto:ragnarlothbrokjr@proton.me?subject=API%20key"
                        >
                            ragnarlothbrokjr@proton.me
                        </a>
                        .
                    </p>
                    {error && errors[error] ? (
                        <p className="text-rose-400">{errors[error]}</p>
                    ) : null}
                    {session ? null : (
                        <a
                            className="inline-flex cursor-pointer items-center gap-2.5 rounded-lg bg-[#5865F2] px-5 py-2.5 font-semibold text-sm text-white shadow-[0_8px_20px_rgba(88,101,242,0.28)] transition duration-150 hover:-translate-y-0.5 hover:bg-[#4752C4] hover:shadow-[0_12px_28px_rgba(88,101,242,0.4)]"
                            href="/api/auth/discord"
                        >
                            <DiscordMark className="h-5 w-5" />
                            Sign in with Discord
                        </a>
                    )}
                    {session && !issued ? (
                        <p className="text-foreground/80 leading-relaxed">
                            Signed in as {session.username}, but we could not load a key. Try again
                            in a moment.
                        </p>
                    ) : null}
                </header>

                {session && issued ? (
                    <section className="overflow-hidden rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.18)]">
                        <KeyClient
                            avatar={session.avatar}
                            discordId={session.discordId}
                            hint={issued.hint}
                            keyValue={issued.key}
                            username={session.username}
                        />
                    </section>
                ) : null}

                <section className="rounded-3xl border border-foreground/10 bg-background/85 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.1)]">
                    <p className="text-foreground/70 text-xs uppercase tracking-[0.4em]">Trust</p>
                    <h2 className="mt-4 font-semibold text-2xl tracking-tight">Discord login</h2>
                    <div className="mt-3 max-w-2xl space-y-4 text-base text-foreground/80 leading-relaxed">
                        <p>
                            Sign in asks Discord for{" "}
                            <code className="font-mono text-sm">identify</code> (your id, username,
                            and avatar). We do not save Discord tokens or your Discord password. We
                            cannot post or sign in as you.
                        </p>
                        <p>We save your Discord id and your API key. One key per account.</p>
                        <p>
                            This is open source. The Discord code is in{" "}
                            <a
                                className="underline underline-offset-4"
                                href="https://github.com/Valhalla-Development/ValhallaPortal/blob/main/app/lib/discord-oauth.ts"
                                rel="noreferrer"
                                target="_blank"
                            >
                                app/lib/discord-oauth.ts
                            </a>
                            .
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
